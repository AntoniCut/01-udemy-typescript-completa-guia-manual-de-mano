/*
    ---------------------------------------------------
    ----------  /spa-loader-content-html/  ------------
    ----------  /spa-loader-content-html.js  ----------
    ---------------------------------------------------
*/


/**
 * @typedef {import('../../types/route-types.js').Route } Route
 * @typedef {import('../../types/config-option-spa-types.js').ConfigOptionsSPA } ConfigOptionsSPA
 */


/**
 * ------------------------------------------------------------------------ 
 * ----- `Plugin para cargar contenido HTMLdinámicamente en una SPA`  -----
 * ------------------------------------------------------------------------
 * - Carga fragmentos HTML en contenedores específicos (header, navbar, main, footer)
 *   según la ruta seleccionada.
 * - Actualiza título, favicon, estilos y scripts dinámicamente.
 * 
 * @param {Partial<ConfigOptionsSPA>} [options={}]
 * - Opciones de configuración para el plugin (solo las que quieras sobreescribir).
 */

export function spaLoaderContentHtml(options = {}) {

    /**
     * - Configuración por defecto del plugin
     * @type {ConfigOptionsSPA}
     */
    const settings = {
        routes: [],
        base: '',
        layoutHeaderElement: '#layoutHeader',
        layoutNavbarElement: '#layoutNavbar',
        layoutMainElement: '#layoutMain',
        layoutFooterElement: '#layoutFooter',
        ...options
    };


    // ---------------------------------------------
    // Utilidades
    // ---------------------------------------------


    /**
     * - `Función para cargar contenido HTML en un selector específico`
     * - Realiza una petición fetch para obtener el HTML y lo inserta en el elemento.
     * @param {string} url 
     * @param {string} selector 
     */

    const fetchHTML = async (url, selector) => {

        try {

            const res = await fetch(url);
            if (!res.ok)
                throw new Error(res.statusText);

            const html = await res.text();

            const el = document.querySelector(selector);
            if (el)
                el.innerHTML = html;

        } catch (e) {

            console.error(`❌ Error al cargar ${url}:`, e);

            const el = document.querySelector(selector);
            if (el)
                el.innerHTML = `<p>Error 404: No se pudo cargar el contenido.</p>`;
        }
    };


    /**
     * - `Función para actualizar el favicon dinámicamente`
     * @param {string} favicon 
     */
    const updateFavicon = (favicon) => {

        /**
         * - `Referencia al elemento <link> del favicon`
         * @type {HTMLLinkElement|null}
         */
        let link = document.querySelector('link[rel~="icon"]');

        if (!link) {

            link = document.createElement('link');

            link.rel = 'icon';
            link.type = 'image/x-icon';

            document.head.appendChild(link);
        }

        link.href = `${favicon}?t=${Date.now()}`;

    };



    /**
     * - `Función para cargar una hoja de estilos CSS dinámicamente`
     * @param {string} cssFile 
     */

    const loadStylesheet = (cssFile) => {
        
        const hrefWithTimestamp = `${cssFile}?t=${Date.now()}`;

        // Si ya existe, no lo vuelvas a cargar
        const existing = document.querySelector(`link[href^="${cssFile}"]`);
        
        if (existing) 
            return;

        document.querySelectorAll('link[data-page-style="true"]').forEach(link => link.remove());

        const link = document.createElement('link');
        
        link.rel = 'stylesheet';
        link.href = hrefWithTimestamp;
        link.dataset.pageStyle = "true";

        document.head.appendChild(link);
        
    };



    /**
    * - `Función para cargar scripts dinámicamente desde las rutas definidas en `route.scripts`
    *
    * @param {{ 
        * src: string, 
        * isModule?: boolean, 
        * exportFunctionName?: string|null 
        * }} options - Objeto con configuración del script.
    *
    * - `src`: ruta del script.
    * - `isModule`: si es `true` se carga como `<script type="module">` usando `import()`.
    * - `exportFunctionName`: si es módulo y se especifica una función exportada,
    *    se ejecutará automáticamente después de importarlo.
     */

    const loadScriptsIfExists = async ({ src, isModule = false, exportFunctionName = null }) => {

        try {

            /**
             * - `URL del script con cache-bypass`
             * @type {string}
             */

            const urlWithCacheBypass = `${src}?v=${Date.now()}`;

            if (isModule) {

                /**
                 * - `Importa el módulo dinámicamente usando import()`
                 * @type {Record<string, any>}
                 */

                const module = await import(urlWithCacheBypass);

                console.log(`✅ Módulo importado: ${urlWithCacheBypass}`);

                //  -----  Ejecutar función exportada si se especifica  -----
                if (exportFunctionName && typeof module[exportFunctionName] === 'function') {

                    module[exportFunctionName]();
                    console.log(`▶️ Función ${exportFunctionName} ejecutada del módulo.`);
                }

            } else {

                /**
                 * - `Crea un elemento <script> para cargar el script tradicionalmente`
                 * @type {HTMLScriptElement}
                 */

                const script = document.createElement('script');

                script.src = urlWithCacheBypass;
                script.async = true;

                script.onload = () => console.log(`✅ Script cargado: ${urlWithCacheBypass}`);
                script.onerror = () => console.error(`❌ Error al cargar: ${urlWithCacheBypass}`);

                document.head.appendChild(script);

            }


        } catch (e) {
            console.error(`❌ Error cargando el script: ${src}`, e);
        }

    }


    /**
     * - `Función para renderizar archivos html Markdown Shiki en la vista`
     * @param {Route} route 
     * @returns 
     */
    const renderMarkdownShiki = async (route) => {

        if (!route.MarkdownShikiHtml || !Array.isArray(route.MarkdownShikiHtml)) {
            console.warn("⚠️ No hay archivos Shiki en esta ruta.");
            return;
        }

        for (const url of route.MarkdownShikiHtml) {

            try {

                /**
                 * - `Contenido HTML del archivo Shiki`
                 * @type {string}
                 */

                const html = await fetch(url).then(r => r.text());

                /**
                 * - `Contenedor donde se insertará el HTML renderizado`
                 * @type {HTMLArticleElement|null}
                 */
                let container = null;

                if (url.includes("-ts"))
                    container = document.querySelector("#codeTs");

                else if (url.includes("-js"))
                    container = document.querySelector("#codeJs");

                if (!container) {
                    console.error(`❌ No se encontró contenedor para: ${url}`);
                    continue;
                }

                container.innerHTML = html;

            } catch (error) {
                console.error(`❌ Error cargando archivo Shiki: ${url}`, error);
            }
        }

        console.log("✅ Markdown Shiki renderizado");

    };





    // ---------------------------------------------
    // Core SPA
    // ---------------------------------------------

    /**
     * - `Función para cargar el contenido de una ruta específica`
     * - Si el navegador soporta View Transitions, se usa para una transición suave.
     * - Si no, se carga directamente el contenido.
     * @param {Route} route 
     */

    const loadContent = (route) => {

        if (document.startViewTransition)
            document.startViewTransition(() => loadTodoContentInHtml(route));

        else
            loadTodoContentInHtml(route);
    };



    /**
     * - `Función para cargar todo el contenido en el HTML según la ruta`
     * @param {Route} route 
     */
    const loadTodoContentInHtml = async (route) => {

        //  -----  Header  -----
        if (route) {
            await fetchHTML(route.headerUrl, settings.layoutHeaderElement);
            addTitleHeader(route.pageTitle || "Página sin título");
        }


        //  -----  Navbar  -----
        if (route.navbarUrl) {
            await fetchHTML(route.navbarUrl, settings.layoutNavbarElement);
            actionsNavbar();
        }


        //  -----  Main  -----
        if (route.mainUrl)
            await fetchHTML(route.mainUrl, settings.layoutMainElement);


        //  -----  Renderizar Markdown Shiki  -----
        await renderMarkdownShiki(route);


        //  -----  Footer  -----
        if (route.footerUrl)
            await fetchHTML(route.footerUrl, settings.layoutFooterElement);

        //  -----  Título de la página  -----
        document.title = route.pageTitle || "Página sin título";

        //  -----  Favicon  -----
        updateFavicon(route.favicon || "");


        //  -----  Estilos  -----
        if (route.styles) loadStylesheet(route.styles);


        //  -----  Scripts  -----
        if (route.scripts) {
            for (const s of route.scripts) await loadScriptsIfExists(s);
        }


        //  -----  Actualizar URL  -----
        const newUrl = `${settings.base}${route.path}`;
        if (window.location.pathname !== newUrl) {
            history.pushState({ path: newUrl }, '', newUrl);
        }

    };



    /**
     * - `Función para agregar el título en el header`
     * @param {string} title 
     */
    const addTitleHeader = (title) => {

        const header = document.querySelector(`${settings.layoutHeaderElement} #headerTitle`);
        if (header) header.textContent = title;
    };



    /**
     * - `Función para manejar las acciones del navbar (abrir/cerrar menú móvil)`
     */

    const actionsNavbar = () => {

        /**
         * - `Referencias a los elementos del navbar`
         * @type {HTMLNavElement|null}
         */
        const navbar = document.querySelector(`${settings.layoutNavbarElement} .navbar__container`);

        if (!navbar)
            throw new Error("❌ No se encontró el elemento .navbar__container");

        /**
         * - `Referencias a los botones de abrir/cerrar menú`
         * @type {HTMLButtonElement|null}
         */
        const btnOpen = document.querySelector('.navbar__btn-open');

        if (!btnOpen)
            throw new Error("❌ No se encontró el elemento .navbar__btn-open");

        /**
         * - `Referencias al botón de cerrar menú`
         * @type {HTMLButtonElement|null}
         */
        const btnClose = document.querySelector('.navbar__btn-close');

        if (!btnClose)
            throw new Error("❌ No se encontró el elemento .navbar__btn-close");


        //  -----  Estado inicial  -----
        navbar.style.display = "none";
        btnClose.style.display = "none";


        //  -----  Abrir Menú  -----
        btnOpen.addEventListener("click", (e) => {
            e.stopPropagation();
            btnOpen.style.display = "none";
            btnClose.style.display = "flex";
            slideDown(navbar, 1000);
        });


        //  -----  Cerrar Menú  -----
        btnClose.addEventListener("click", (e) => {
            e.stopPropagation();
            btnClose.style.display = "none";
            btnOpen.style.display = "flex";
            slideUp(navbar, 500);
        });


        //  -----  Cerrar menú al hacer clic fuera del navbar  -----
        document.addEventListener("click", (e) => {

            slideUp(navbar, 500);

            btnClose.style.display = "none";
            btnOpen.style.display = "flex";

            e.stopPropagation();

        });

    };



    /**
     * - `Animación para desplegar un elemento con efecto slideDown`
     * @param {HTMLElement} element 
     * @param {number} duration 
     */

    function slideDown(element, duration = 300) {

        element.style.removeProperty('display');

        let display = window.getComputedStyle(element).display;

        if (display === 'none')
            display = 'flex';

        element.style.display = display;

        //  -----  Obtener altura y aplicar estilos para animar  -----
        const height = element.scrollHeight;

        element.style.height = '0';
        element.style.overflow = 'hidden';
        element.style.transitionProperty = 'height, margin, padding';
        element.style.transitionDuration = duration + 'ms';
        element.style.transitionTimingFunction = 'ease-in-out';
        element.offsetHeight; // Forzar reflow
        element.style.height = height + 'px';

        //  -----  Después de la duración, limpiar estilos  -----
        setTimeout(() => {
            element.style.removeProperty('height');
            element.style.removeProperty('overflow');
            element.style.removeProperty('transition-duration');
            element.style.removeProperty('transition-property');
        }, duration);
    }



    /**
     * - `Animación para ocultar un elemento con efecto slideUp`
     * @param {HTMLElement} element 
     * @param {number} duration 
     */

    function slideUp(element, duration = 300) {

        //  -----  Aplicar estilos para animar  -----
        element.style.height = element.offsetHeight + 'px';
        element.style.transitionProperty = 'height, margin, padding';
        element.style.transitionDuration = duration + 'ms';
        element.style.transitionTimingFunction = 'ease-in-out';
        element.offsetHeight; // Forzar reflow
        element.style.overflow = 'hidden';
        element.style.height = '0';
        element.style.paddingTop = '0';
        element.style.paddingBottom = '0';
        element.style.marginTop = '0';
        element.style.marginBottom = '0';

        //  -----  Después de la duración, ocultar el elemento y limpiar estilos  -----
        setTimeout(() => {
            element.style.display = 'none';
            element.style.removeProperty('height');
            element.style.removeProperty('padding-top');
            element.style.removeProperty('padding-bottom');
            element.style.removeProperty('margin-top');
            element.style.removeProperty('margin-bottom');
            element.style.removeProperty('overflow');
            element.style.removeProperty('transition-duration');
            element.style.removeProperty('transition-property');
        }, duration);
    }


    /**
     * - `Animación para alternar la visibilidad de un elemento con efecto slideToggle`
     * @param {HTMLElement} element 
     * @param {number} duration 
     */

    function slideToggle(element, duration = 300) {
        if (window.getComputedStyle(element).display === 'none') {
            slideDown(element, duration);
        } else {
            slideUp(element, duration);
        }
    }



    // ---------------------------------------------
    // Eventos
    // ---------------------------------------------

    const setupEventListeners = () => {


        document.addEventListener("click", (e) => {

            //  -----  Asegurar que el target es un elemento del DOM  -----
            const target = e.target;

            if (!(target instanceof HTMLElement))
                return;

            /**
             * - `Detectar si el clic fue en un enlace con data-id`
             * @type {HTMLAnchorElement|null}
             */

            const link = target.closest("a[data-id]");

            if (link) {

                e.preventDefault();

                const route = settings.routes.find(r => r.id === link.dataset.id);

                if (route)
                    loadContent(route);
            }

        });


        window.addEventListener("popstate", (e) => {
            const path = e.state?.path?.replace(settings.base, '') || window.location.pathname.replace(settings.base, '');
            const route = settings.routes.find(r => r.path === path);
            if (route) loadContent(route);
        });
    };


    /**
     * - `Función de inicialización del plugin`
     */

    const init = () => {

        console.log('\n');
        console.warn("-------------------------------------------------------------------------------");
        console.warn("-----  ✅ Plugin SPA cargado correctamente - spa-loader-content-html.js  -----");
        console.warn("-------------------------------------------------------------------------------");
        console.log('\n');

        const initialPath = window.location.pathname.replace(settings.base, '');

        const route = settings.routes.find(r => r.path === initialPath);
        if (route)
            loadContent(route);

        history.replaceState({ path: window.location.pathname }, '', window.location.pathname);
        setupEventListeners();

    };



    //  ----------  Iniciar el plugin  ----------
    init();

}

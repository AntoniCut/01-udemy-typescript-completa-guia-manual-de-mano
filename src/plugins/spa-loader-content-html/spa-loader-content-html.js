/*
    ---------------------------------------------------
    ----------  /spa-loader-content-html/ ------------
    ----------  /spa-loader-content-html.js ----------
    ---------------------------------------------------
*/


/**
 * -----------------------------------------
 * -----  Imports de tipos para JSDoc  -----
 * -----------------------------------------
 * 
 * @typedef {import('../../types/route-types.js').Route} Route
 * @typedef {import('../../types/route-types.js').RouteComponents} RouteComponents
 * @typedef {import('../../types/route-types.js').RouteStyle} RouteStyle
 * @typedef {import('../../types/route-types.js').RouteScript} RouteScript
 * @typedef {import('../../types/config-option-spa-types.js').ConfigOptionsSPA} ConfigOptionsSPA
 * 
 */


/**
 * ---------------------------------------------- 
 * ----------  `spaLoaderContentHtml`  ----------
 * ----------------------------------------------
 *
 * - `Plugin para cargar contenido HTML dinámicamente en una SPA`
 *
 * @version 2.0.0
 * 
 * @author Antonio Francisco Cutillas García
 *
 * @param {Partial<ConfigOptionsSPA>} [options={}] - Opciones de configuración.
 */

export const spaLoaderContentHtml = (options = {}) => {


    /*
        -------------------------------------------------------------------------
        -----  Configuración por defecto (solo lo estrictamente necesario)  -----
        -------------------------------------------------------------------------
    */


    /**
     * ------------------------
     * -----  `settings`  -----
     * ------------------------
     * 
     * - Configuración por defecto del plugin
     * 
     * @type {ConfigOptionsSPA}
     * 
     */

    const settings = {
        routes: [],
        base: '',
        ...options
    };



    /*
        ---------------------------------------
        -----  INICIALIZACIÓN DEL PLUGIN  -----
        ---------------------------------------
    */


    /**
    * --------------------
    * -----  `init`  -----
    * --------------------
    * 
    * - `Función de inicialización del plugin`
    * 
    */

    const init = () => {

        console.log('\n');
        console.warn('-------------------------------------------------------------------------------');
        console.warn('-----  ✅ Plugin SPA cargado correctamente - spa-loader-content-html.js  -----');
        console.warn('-------------------------------------------------------------------------------');
        console.log('\n');

        console.log("%c -------------------------------------------------------------------------------", "background:#2ecc71; color:white; padding:4px;");
        console.log("%c -----  ✅ Plugin SPA cargado correctamente - spa-loader-content-html.js  -----", "background:#2ecc71; color:white; padding:4px;");
        console.log("%c -------------------------------------------------------------------------------", "background:#2ecc71; color:white; padding:4px;");




        console.log("%c Fondo rojo", "background:#e74c3c; color:white; padding:4px;");
        console.log("%c Fondo verde", "background:#2ecc71; color:white; padding:4px;");
        console.log("%c Fondo azul", "background:#3498db; color:white; padding:4px;");
        console.log("%c Fondo amarillo", "background:#f1c40f; color:black; padding:4px;");
        console.log("%c Gris", "background:#7f8c8d; color:white; padding:4px;");
        console.log("%c Negro", "background:#000; color:#0f0; padding:4px;");


        const initialPath = normalize(window.location.pathname);

        const route = settings.routes.find(r => normalize(r.path) === initialPath);

        if (route)
            loadContent(route);

        // Reemplazamos el state inicial con un objeto normalizado
        history.replaceState({ id: route?.id || null, path: window.location.pathname }, '', window.location.pathname);

        setupEventListeners();

    };



    /*
        -------------------------------------------------------------------
        ----------  Normalización de rutas, pathnames y slashes  ----------
        -------------------------------------------------------------------
    */


    /**
     * -------------------------
     * -----  `normalize`  -----
     * -------------------------
     * 
     * - Normaliza una ruta (quita base y slashes de inicio/fin)
     * 
     * @param {string} raw
     * @returns {string}
     * 
     */

    const normalize = (raw = '') => {

        const base = settings.base || '';

        let s = String(raw || '');

        if (base && s.startsWith(base))
            s = s.slice(base.length);

        //  -----  quitar leading/trailing slash  -----
        s = s.replace(/^\/|\/$/g, '');

        return s;

    }



    /**
     * -----------------------------
     * -----  `buildPathname`  -----
     * -----------------------------
     * 
     * - Construye pathname absoluto para pushState, normalizado con base
     * 
     * @param {string} routePath
     * @returns {string}
     * 
     */

    const buildPathname = (routePath = '') => {

        const base = (settings.base || '').replace(/\/$/, '');

        const trimmed = routePath ? `/${String(routePath).replace(/^\/|\/$/g, '')}` : '';

        try {
            return new URL(base + trimmed, location.origin).pathname;
        } catch (e) {
            // fallback básico
            return (base + trimmed).replace(/\/\/+/g, '/');
        }

    };



    /*
        ------------------------------------------------------------------------
        ----------  Carga de contenido dinámico, Componentes del DOM  ----------
        ----------  y Metadatos de la Ruta (título, favicon, CSS, JS)  ---------
        ------------------------------------------------------------------------
    */


    /**
     * ---------------------------
     * -----  `loadContent`  -----
     * ---------------------------
     * 
     * - `Función para cargar el contenido de una ruta específica`
     * - Si el navegador soporta View Transitions, se usa para una transición suave.
     * - Si no, se carga directamente el contenido.
     * 
     * @param {Route} route
     * 
     */

    const loadContent = (route) => {

        if (document.startViewTransition)
            document.startViewTransition(() => loadComponentDom(route));

        else
            loadComponentDom(route);

    };



    /**
     * --------------------------------
     * -----  `loadComponentDom`  -----
     * --------------------------------
     * 
     * Carga TODO el contenido de la ruta (componentes, título, favicon, css, scripts)
     * usando únicamente async/await (sin new Promise ni then/catch)
     *
     * @param {Route} route
     * @returns {Promise<void>}
     * 
     */

    const loadComponentDom = async (route) => {

        //  -----  Validación  -----
        if (!route)
            throw new Error('Ruta inválida');

        //  -----  Caso ruta sin components  -----
        if (!route.components || Object.keys(route.components).length === 0) {

            console.warn(`La ruta '${route.id}' no contiene 'components'`);

            await applyRouteMeta(route);

            return;
        }


        /*
            ----------------------------------------
            -----  Cargar componentes del DOM  -----
            ----------------------------------------
        */

        for (const [selector, url] of Object.entries(route.components)) {


            /**
             * - `Elemento contenedor del componente` 
             * - Obtener elemento (selector se trata como id sin #)
             * @type {HTMLElement|null} 
             */

            const el = document.getElementById(selector);

            //  -----  Si el contenedor NO existe simplemente avisamos  -----
            if (!el) {
                console.warn(`⚠️ Contenedor no encontrado para selector: #${selector} — se omite.`);
                continue;
            }


            //  -----  Evitar fetch(undefined) → ocultar contenedor si undefined  -----
            if (!url) {

                console.log('\n');
                console.warn(`⏭️ Componente "${selector}" ignorado (url undefined). Ocultando contenedor.`);
                console.log('\n');

                el.style.display = 'none';
                el.innerHTML = '';

                continue;
            }


            //  -----  Si hay url → restaurar visibilidad antes de cargar  -----
            el.style.display = '';

            await fetchHTML(url, selector);

        }


        //  -----  Inicializar acciones del navbar  --------------------------
        //  -----  proteger de errores si navbar no existe en esta ruta  -----
        try {

            actionsNavbar();

        } catch (e) {

            console.log('\n');
            console.warn('⚠️ actionsNavbar falló (probablemente falta .navbar__container en la vista):', e);
            console.log('\n');
        }


        //  -----  Aplicar metadatos de la ruta  -----
        await applyRouteMeta(route);

    }



    /**
    * -------------------------
    * -----  `fetchHTML`  -----
    * -------------------------
    * 
    * - `Carga contenido HTML en un selector específico`
    * 
    * @param {string|undefined} url - URL del archivo HTML
    * @param {string} selector - Selector CSS (ID recomendado, sin '#')
    * @returns {Promise<void>}
    * 
    */

    const fetchHTML = async (url, selector) => {

        /**
         * - `Referencia al contenedor donde se cargará el HTML` 
         * @type {HTMLElement|null} 
         */

        const el = document.querySelector(`#${selector}`);

        //  -----  Si el contenedor NO existe simplemente avisamos  -----
        if (!el) {
            console.warn(`⚠️ No existe el elemento #${selector}`);
            return;
        }


        // -----  Si la URL es undefined → ocultar contenedor y salir  -----
        if (!url) {
            console.info(`⏭️ ${selector} omitido (URL undefined). Ocultando contenedor.`);
            el.style.display = "none";
            el.innerHTML = "";
            return;
        }


        //  -----  Si hay URL → aseguramos que el contenedor esté visible  -----

        //  -----  para restaurar estado si antes estaba oculto  -----
        el.style.display = "";

        try {

            /**
             * - `Respuesta del fetch`
             * @type {Response}
             */
            const res = await fetch(url);

            if (!res.ok)
                throw new Error(res.statusText);

            el.innerHTML = await res.text();

        } catch (e) {

            console.error(`❌ Error al cargar ${url}:`, e);
            el.innerHTML = `<p>Error 404: No se pudo cargar el contenido.</p>`;
        }

    }



    /**
     * ------------------------------
     * -----  `applyRouteMeta`  -----
     * ------------------------------
     * 
     * - `Función para aplicar metadatos de la ruta (título, favicon, URL, etc.)`
     * 
     * @param {Route} route 
     * 
     */

    const applyRouteMeta = async (route) => {


        //  -----  Actualizar título  -----
        if (route.pageTitle)
            document.title = route.pageTitle;

        //  -----  Actualizar favicon  -----
        if (route.favicon)
            updateFavicon(route.favicon);


        //  -----  pushState seguro (normalizado)  -----

        /**
         * - `Nueva pathname para la ruta` 
         * @type {string}
         */

        const newPathname = buildPathname(route.path || '');


        //  -----  Evitar push duplicado  -----
        if (window.location.pathname !== newPathname) {
            history.pushState({ id: route.id, path: newPathname }, '', newPathname);
            console.log('navigate ->', route.id, newPathname);
        }

        //  -----  Actualizar headerTitle en layout  -----
        if (route.headerTitle)
            addTitleHeaderFooter(route.headerTitle);

        //  -----  Cargar hoja de estilos CSS  -----
        if (route.styles)
            loadStylesheetsByPage(route.styles);

        //  -----  Cargar renderizado de Markdown Shiki  -----
        await renderMarkdownShiki(route);

        //  -----  Cargar scripts dinámicos  -----
        if (route.scripts) {

            for (const s of route.scripts) {
                await loadScripts(s);
            }
        }

    };



    /**
     * ------------------------------------
     * -----  `addTitleHeaderFooter`  -----
     * ------------------------------------
     * 
     * - Agrega el título al header y footer de la página.
     * 
     * @param {string} title - Texto para mostrar en ambos lugares.
     * 
     */

    const addTitleHeaderFooter = (title) => {

        /**
         * - `Referencia al título del header` 
         * @type {HTMLParagraphElement|null}
         */

        const headerTitle = document.querySelector('#layoutHeader #headerTitle');

        if (headerTitle)
            headerTitle.innerHTML = title;

        /**
         * - `Referencia al título del footer` 
         * @type {HTMLParagraphElement|null}
         */

        const footerTitle = document.querySelector('#layoutFooter #footerTitle');

        if (footerTitle)
            footerTitle.innerHTML = title;

    }



    /**
     * -----------------------------
     * -----  `actionsNavbar`  -----
     * -----------------------------
     * 
     * - `Función para manejar las acciones del navbar (abrir/cerrar menú móvil)`
     * - Animaciones slideUp / slideDown para el menú.
     * 
     */

    const actionsNavbar = () => {

        /**
         * - `Referencias a los elementos del navbar`
         * @type {HTMLDivElement|null}
         */

        const navbar = document.querySelector('.navbar__container');

        if (!navbar)
            throw new Error("❌ No se encontró el elemento .navbar__container");


        /**
         * - `Referencias a los botones de abrir/cerrar menú`
         * @type {HTMLElement|null}
         */
        const btnOpen = document.querySelector('.navbar__btn-open');

        if (!btnOpen)
            throw new Error("❌ No se encontró el elemento .navbar__btn-open");


        /**
         * - `Referencias al botón de cerrar menú`
         * @type {HTMLElement|null}
         */

        const btnClose = document.querySelector('.navbar__btn-close');

        if (!btnClose)
            throw new Error("❌ No se encontró el elemento .navbar__btn-close");


        //  -----  Estado inicial  -----
        navbar.style.display = "none";
        btnClose.style.display = "none";


        //  -----  Evitar bindings duplicados: clonar botones y reemplazarlos -----

        /**
         * - `Nuevos botones clonados`
         * @type {HTMLElement}
         */

        const newBtnOpen = /** @type {HTMLElement} */ (btnOpen.cloneNode(true));

        btnOpen.parentNode?.replaceChild(newBtnOpen, btnOpen);


        /**
         * - `Nuevo botón clonado`
         * @type {HTMLElement}
         */

        const newBtnClose = /** @type {HTMLElement} */(btnClose.cloneNode(true));

        btnClose.parentNode?.replaceChild(newBtnClose, btnClose);


        //  -----  Abrir Menú  -----
        newBtnOpen.addEventListener("click", (e) => {

            e.stopPropagation();

            newBtnOpen.style.display = "none";
            newBtnClose.style.display = "flex";

            slideDown(navbar, 1000);

        });



        //  -----  Cerrar Menú  -----
        newBtnClose.addEventListener("click", (e) => {

            e.stopPropagation();

            newBtnClose.style.display = "none";
            newBtnOpen.style.display = "flex";

            slideUp(navbar, 500);

        });


        //  -----  Cerrar menú al hacer clic fuera del navbar  -----
        //  - eliminamos listener anterior seguro creando uno que no se duplique:
        //  - añadimos un namespace simple usando dataset
        if (!document.body.dataset._spaClickBound) {

            document.addEventListener("click", () => {

                try {
                    slideUp(navbar, 500);
                    newBtnClose.style.display = "none";
                    newBtnOpen.style.display = "flex";
                } catch (e) {
                    // silent
                }

            });

            document.body.dataset._spaClickBound = '1';
        }

    };



    /*
        -----------------------------------------------------------
        -----  Animaciones slideUp / slideDown / slideToggle  -----
        -----  para menús y otros elementos  ----------------------
        -----------------------------------------------------------
    */


    /**
     * -------------------------
     * -----  `slideDown`  -----
     * -------------------------
     * 
     * - `Animación para desplegar un elemento con efecto slideDown`
     * 
     * @param {HTMLElement} element
     * @param {number} duration
     * 
     */

    const slideDown = (element, duration = 300) => {


        element.style.removeProperty('display');

        let display = window.getComputedStyle(element).display;
        if (display === 'none') display = 'flex';
        element.style.display = display;

        const height = element.scrollHeight;
        element.style.height = '0';
        element.style.overflow = 'hidden';
        element.style.transitionProperty = 'height, margin, padding';
        element.style.transitionDuration = duration + 'ms';
        element.style.transitionTimingFunction = 'ease-in-out';
        element.offsetHeight; // Forzar reflow
        element.style.height = height + 'px';

        setTimeout(() => {
            element.style.removeProperty('height');
            element.style.removeProperty('overflow');
            element.style.removeProperty('transition-duration');
            element.style.removeProperty('transition-property');
        }, duration);
    }


    /**
     * -----------------------
     * -----  `slideUp`  -----
     * -----------------------
     * 
     * - `Animación para ocultar un elemento con efecto slideUp`
     * 
     * @param {HTMLElement} element
     * @param {number} duration
     * 
     */

    const slideUp = (element, duration = 300) => {

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
     * ---------------------------
     * -----  `slideToggle`  -----
     * ---------------------------
     * 
     * - `Animación para alternar la visibilidad de un elemento con efecto slideToggle`
     * 
     * @param {HTMLElement} element
     * @param {number} duration
     * 
     */

    const slideToggle = (element, duration = 300) => {
        if (window.getComputedStyle(element).display === 'none') {
            slideDown(element, duration);
        } else {
            slideUp(element, duration);
        }
    }



    /**
    * -----------------------------
    * -----  `updateFavicon`  -----
    * -----------------------------
    * 
    * - `Función para actualizar el favicon dinámicamente`
    * 
    * @param {string} favicon
    * 
    */

    const updateFavicon = (favicon) => {

        /**
         * - `Referencia al elemento link del favicon` 
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

    }



    /*
        -----------------------------------
        ----------  STYLESHEETS  ----------
        -----------------------------------
    */


    /**
     * -------------------------------------
     * -----  `loadStylesheetsByPage`  -----
     * -------------------------------------
     * 
     * - Carga múltiples hojas de estilo para una página.
     * - Elimina las anteriores marcadas como data-page-style="true".
     * - Inserta todas las nuevas del array route.styles.
     * 
     * @param {RouteStyle[]|null} styles
     * 
    */

    const loadStylesheetsByPage = (styles) => {

        // 1. Si no hay estilos, elimina los existentes y salir
        if (!styles || !Array.isArray(styles)) {
            document.querySelectorAll('link[data-page-style="true"]').forEach(l => l.remove());
            return;
        }

        // 2. Eliminar hojas de estilo antiguas
        document.querySelectorAll('link[data-page-style="true"]').forEach(l => l.remove());

        // 3. Insertar nuevas hojas
        for (const style of styles) {

            if (!style || !style.href)
                continue;

            const hrefWithTimestamp = `${style.href}?t=${Date.now()}`;

            const link = document.createElement('link');

            link.rel = 'stylesheet';
            link.href = hrefWithTimestamp;
            link.dataset.pageStyle = "true";

            document.head.appendChild(link);

        }


        console.log("🎨 Hojas de estilo cargadas:", styles);

    };



    /*
        -------------------------------
        ----------  SCRIPTS  ----------
        -------------------------------
    */


    /**
     * ------------------------------
     * -----  `isScriptLoaded`  -----
     * ------------------------------
     * 
     * - Comprueba si ya existe un script cargado (previene duplicados)
     * 
     * @param {string} src
     * @returns {boolean}
     * 
     */

    const isScriptLoaded = (src) => {

        try {

            /**
             * - `Lista de scripts actualmente cargados en el documento`
             * @type {HTMLScriptElement[]}
             */
            const list = Array.from(document.scripts);

            return list.some(s => {

                if (!s.src)
                    return false;

                //  -----  comparar sin querystring  -----
                const a = s.src.split('?')[0];
                const b = src.split('?')[0];

                return a.endsWith(b) || a.includes(b);
            });

        } catch (e) {
            return false;
        }

    }



    /**
     * ---------------------------
     * -----  `loadScripts`  -----
     * ---------------------------
     * 
     * - `Función para cargar scripts dinámicamente desde las rutas definidas en route.scripts`
     *
     * @param {{ src: string, isModule?: boolean, exportFunctionName?: string|null }} options
     * @returns {Promise<void>}
     * 
     */

    const loadScripts = async ({ src, isModule = false, exportFunctionName = null }) => {

        try {

            if (!src)
                return;

            //  -----  prevenir duplicados  -----
            if (isScriptLoaded(src)) {
                console.log(`🔁 Script ya cargado: ${src}`);
                return;
            }

            /**
             * - `URL con cache bypass` 
             * @type {string}
             */

            const urlWithCacheBypass = `${src}?v=${Date.now()}`;


            //  -----  Cargar como módulo  -----
            if (isModule) {
                const module = await import(urlWithCacheBypass);
                console.log(`✅ Módulo importado: ${urlWithCacheBypass}`);

                if (exportFunctionName && typeof module[exportFunctionName] === 'function') {
                    module[exportFunctionName]();
                    console.log(`▶️ Función ${exportFunctionName} ejecutada del módulo.`);
                }
            }


            //  -----  Cargar como script normal  -----
            else {

                await new Promise((resolve) => {

                    /**
                     * - `Elemento script para cargar el JS` 
                     * @type {HTMLScriptElement}
                     */

                    const script = document.createElement('script');

                    script.src = urlWithCacheBypass;
                    script.async = true;

                    script.onload = () => {
                        console.log(`✅ Script cargado: ${urlWithCacheBypass}`);
                        resolve(undefined);
                    };

                    script.onerror = (e) => {
                        console.error(`❌ Error al cargar: ${urlWithCacheBypass}`, e);
                        // no reject para no romper el flujo global
                        resolve(undefined);
                    };

                    document.head.appendChild(script);

                });

            }

        } catch (e) {
            console.error(`❌ Error cargando el script: ${src}`, e);
        }

    };



    /*
        -------------------------------------------
        -----  Renderizado de Markdown Shiki  -----
        -------------------------------------------
    */


    /**
     * -----------------------------------
     * -----  `renderMarkdownShiki`  -----
     * -----------------------------------
     * 
     * - `Función para renderizar archivos html Markdown Shiki en la vista`
     * 
     * @param {Route} route
     * @returns {Promise<void>}
     * 
     */

    const renderMarkdownShiki = async (route) => {

        //  -----  Validación  -----
        if (!route.MarkdownShikiHtml || !Array.isArray(route.MarkdownShikiHtml)) {
            console.warn('⚠️ No hay archivos Shiki en esta ruta.');
            return;
        }

        //  -----  Cargar cada archivo Shiki  -----
        for (const url of route.MarkdownShikiHtml) {

            try {

                /**
                 * - `Contenido HTML del archivo Shiki` 
                 * @type {string}
                 */
                const html = await fetch(url).then(r => r.text());

                /**
                 * - `Contenedor donde se insertará el HTML` 
                 * @type {HTMLElement|null}
                 */
                let container = null;

                if (url.includes('-ts'))
                    container = document.querySelector('#codeTs');

                else if (url.includes('-js'))
                    container = document.querySelector('#codeJs');

                if (!container) {
                    console.warn(`❌ No se encontró contenedor para: ${url}`);
                    continue;
                }

                container.innerHTML = html;

            } catch (error) {
                console.error(`❌ Error cargando archivo Shiki: ${url}`, error);
            }
        }

        console.warn('✅ Markdown Shiki renderizado');

    }



    /*
        ---------------------
        -----  EVENTOS  -----
        ---------------------
    */


    /**
     * -----------------------------------
     * -----  `setupEventListeners`  -----
     * -----------------------------------
     * 
     * - `Configura los event listeners para la navegación SPA`
     * 
     */

    const setupEventListeners = () => {


        //  -----  Manejo de clics en enlaces internos  -----
        document.addEventListener('click', (e) => {


            /**
             * @type {EventTarget|null}
             */
            const target = e.target;

            if (!(target instanceof HTMLElement))
                return;

            /**
             * - Enlace clicado
             * @type {HTMLAnchorElement|null}
             */
            const link = target.closest('a[data-id]');

            if (link) {

                e.preventDefault();

                const route = settings.routes.find(r => r.id === link.dataset.id);

                if (route)
                    loadContent(route);
            }

        });


        //  -----  Manejo del evento popstate (navegación atrás/adelante)  -----
        window.addEventListener('popstate', (e) => {

            // usar state.path si está presente, si no usar location.pathname
            const raw = e.state?.path ?? window.location.pathname;
            const normalized = normalize(raw);
            const route = settings.routes.find(r => normalize(r.path) === normalized);

            if (route) {
                loadContent(route);
            } else {
                const route404 = settings.routes.find(r => r.id === '404');
                if (route404) loadContent(route404);
            }

        });

    };



    /*
        -----------------------------------------
        ----------  Iniciar el plugin  ----------
        -----------------------------------------
    */

    init();

}

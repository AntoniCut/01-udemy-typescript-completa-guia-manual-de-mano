/*
    -----------------------------------------------------------------
    ----------  /udemy.antonydev.tech/  -----------------------------
    ----------  /cursos/  -------------------------------------------
    ----------  /typescript-completa-guia-manual-de-mano/  ----------
    ----------  /src/types/  ----------------------------------------
    ----------  /route-types.js  ------------------------------------
    -----------------------------------------------------------------
*/


export {};


/**
 * Representa una ruta dentro del SPA. Define los archivos HTML de layout,
 * fragmentos Shiki, metadatos, assets, estilos y scripts a cargar.
 *
 * @typedef {Object} Route
 *
 * @property {string} id - Identificador único de la ruta.
 * @property {string} path - Path de la URL usado para navegación dentro del SPA.
 * 
 * @property {string} headerUrl - Ruta al fragmento HTML que se insertará en el header.
 * @property {string} navbarUrl - Ruta al fragmento HTML que se insertará en la navbar.
 * @property {string} mainUrl - Ruta al fragmento HTML que se insertará en el main.
 * @property {string} footerUrl - Ruta al fragmento HTML que se insertará en el footer.
 *
 * @property {string[]} MarkdownShikiHtml 
 * - Lista de rutas a archivos HTML generados por Shiki (normalmente .ts.html o .js.html)
 *   que deben renderizarse en la vista.
 *
 * @property {string} favicon - Ruta al favicon específico de la ruta.
 * @property {string} pageTitle - Título de la pestaña del navegador.
 * @property {string} headerTitle - Título visible que se muestra en el header de la página.
 *
 * @property {string} [styles] - Ruta opcional a un archivo CSS que se debe cargar dinámicamente.
 *
 * @property {Array<{
     * src: string,
     * isModule?: boolean,
     * exportFunctionName?: string
     * }>} scripts
 *   Arreglo de scripts que se deben cargar dinámicamente en la ruta.
 *   Puede incluir scripts normales (JS) o módulos ES con funciones a ejecutar.
 *
 * @property {Object.<string, any>} [meta]
 *   Objeto opcional con metadata personalizada para la ruta.
 */

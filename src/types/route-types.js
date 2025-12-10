/*
    -----------------------------------------------------------------
    ----------  /udemy.antonydev.tech/  -----------------------------
    ----------  /cursos/  -------------------------------------------
    ----------  /typescript-completa-guia-manual-de-mano/  ----------
    ----------  /src/types/  ----------------------------------------
    ----------  /route-types.js  ------------------------------------
    -----------------------------------------------------------------
*/



//  ----------  Esto asegura que VS Code lo trate como módulo  ----------
export { };



/**
 * -------------------------------
 * -----  `RouteComponents`  -----
 * -------------------------------
 * 
 * - Mapa de componentes HTML a cargar dinámicamente.
 * - Cada valor puede ser string o undefined.
 *
 * @typedef {Record<string, string|undefined>} RouteComponents
 * 
 */


/**
 * --------------------------
 * -----  `RouteStyle` -----
 * --------------------------
 * 
 * - Representa una hoja de estilos que debe cargarse dinámicamente.
 * 
 * @typedef {Object} RouteStyle
 * @property {string} href - Ruta absoluta o relativa del archivo CSS.
 * 
 */


/**
 * ---------------------------
 * -----  `RouteScript`  -----
 * ---------------------------
 *  
 * - Representa un script que debe cargarse dinámicamente.
 * 
 * @typedef {Object} RouteScript
 * @property {string} src - Ruta absoluta o relativa del archivo JS.
 * 
 */




/**
 * ---------------------
 * -----  `Route`  -----
 * ---------------------
 * 
 * - Objeto de configuración de cada ruta del SPA.
 *
 * @typedef {Object} Route
 *
 * @property {string} id
 *   Identificador único de la ruta.
 *
 * @property {string} path
 *   URL interna asociada a la vista.
 *
 * @property {string} pageTitle
 *   Título mostrado en la etiqueta `<title>`.
 *
 * @property {string} headerTitle
 *   Título que se mostrará dentro del layout-header.
 *
 * @property {string} favicon
 *   Ruta del favicon específico de la vista.
 *
 * @property {RouteComponents} components
 *   Mapa selector → URL de componente HTML.
 *
 * @property {string[]} MarkdownShikiHtml
 *   Rutas a los archivos .html generados por Shiki para mostrar código.
 *
 * @property {RouteStyle[]|null} styles
 *   Lista de hojas CSS asociadas a la vista (opcional).
 *
 * @property {RouteScript[]|null} scripts
 *   Lista de scripts a cargar dinámicamente (opcional).
 */

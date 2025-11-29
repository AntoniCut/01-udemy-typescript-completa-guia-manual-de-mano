/*
    -----------------------------------------------------------------
    ----------  /udemy.antonydev.tech/  -----------------------------
    ----------  /cursos/  -------------------------------------------
    ----------  /typescript-completa-guia-manual-de-mano/  ----------
    ----------  /src/types/  ----------------------------------------
    ----------  /config-option-spa-types.js  ------------------------
    -----------------------------------------------------------------
*/


/**
 * @typedef {import('../types/route-types.js').Route } Route
 */


//  ----------  Esto asegura que VS Code lo trate como módulo  ----------
export {}; 


/**
 *  - Objeto que define la configuración que le pasamos al plugin `spaWithMethodLoadFromJQuery`
 
 * @typedef {Object} ConfigOptionsSPA

 * @property {Route[]} routes - Conjunto de rutas definidas para la SPA.
 * @property {string} base - Ruta base de la aplicación (se deja vacía si no se usa `history.pushState` o hash routing).
 * @property {string} layoutHeaderElement - Selector CSS del contenedor de la cabecera.
 * @property {string} layoutNavbarElement - Selector CSS del contenedor de la barra de navegación.
 * @property {string} layoutMainElement - Selector CSS del contenedor principal donde se cargan las vistas.
 * @property {string} layoutFooterElement - Selector CSS del contenedor del pie de página.
 */

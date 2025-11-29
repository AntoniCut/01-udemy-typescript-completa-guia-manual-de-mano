/*
    -----------------------------------------------------------------
    ----------  /udemy.antonydev.tech/  -----------------------------
    ----------  /cursos/  -------------------------------------------
    ----------  /typescript-completa-guia-manual-de-mano/  ----------
    ----------  /src/spa/  ------------------------------------------
    ----------  /spa-bases-typescript.js  ---------------------------
    -----------------------------------------------------------------
*/


/**
 * @typedef {import('../types/route-types.js').Route } Route
 * @typedef {import('../types/config-option-spa-types.js').ConfigOptionsSPA } ConfigOptionsSPA
 */


import { spaLoaderContentHtml } from "../plugins/spa-loader-content-html/spa-loader-content-html.js";
import { routesBasesTypescript } from "../routes/routes-bases-typescript.js";


/**
 * `Función principal que inicializa la SPA de TypeScript`
 */
export const SpaBasesTypescript = () => {

    
    //  ----------  Documento Cargado  ----------
    console.log('\n');
    console.warn('-----  spa-bases-typescript.js  -----');
       
    
    //  ----------  Arrays con la informacion del contenido a cargar de las rutas del proyecto ----------
    
    /**
     * - `Array con todas las rutas del SPA`
     * @type {Route[]}
     */

    const allRoutes = [
        
        ...routesBasesTypescript

    ];

    
    //  ----------  Opciones que le pasamos al plugins  ----------
    
    /**
     * - `Configuración para el content-loader-spa.js`
     * @type {ConfigOptionsSPA}
     */

    const configOptions = {
        routes: allRoutes,
        base: '/cursos/typescript-completa-guia-manual-de-mano/',
        layoutHeaderElement: '#layoutHeader',
        layoutNavbarElement: '#layoutNavbar',
        layoutMainElement: '#layoutMain',
        layoutFooterElement: '#layoutFooter',
    }


    //  ----------  Invocamos el Plugins  --  content-loader-spa.js  ----------
    spaLoaderContentHtml(configOptions);

}

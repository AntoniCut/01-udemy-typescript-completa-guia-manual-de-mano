/*
    -----------------------------------------------------------------
    ----------  /udemy.antonydev.tech/  -----------------------------
    ----------  /cursos/  -------------------------------------------
    ----------  /typescript-completa-guia-manual-de-mano/  ----------
    ----------  /src/routes/  ---------------------------------------
    ----------  /routes-bases-typescript.js  ------------------------
    -----------------------------------------------------------------
*/


/**
 * @typedef {import('../types/route-types.js').Route } Route
 */


//  -----  Array de objetos con los IDs y las rutas correspondientes  -----

/**
 * Array de rutas base para la aplicación.
 * @type {Route[]}
 */

export const routesBasesTypescript = [


    //  -----  Ruta Home  -----
    
    {
        id: 'home',
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/assets/favicon/typescript-favicon.ico',
        pageTitle: 'TypeScript - Tu completa guia y manual de mano',
        path: '',
        components: {
            "layoutHeader": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
            "layoutNavbar": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
            "layoutMain": '/cursos/typescript-completa-guia-manual-de-mano/src/pages/home.html',
            "layoutFooter": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        }, 
        MarkdownShikiHtml: [],
        headerTitle: 'TypeScript - Tu completa guia y manual de mano',
        styles: [
            { href: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/home.css' }
        ],
        scripts: []
    },


    //  -----  Rutas de Introducción  -----

    {
        id: 'inferirTipos',
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Inferir Tipos en TypeScript',
        path: 'bases-de-typescript/introduccion/inferir-tipos',
        components: {
            "layoutHeader": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
            "layoutNavbar": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
            "layoutMain": '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/01-introduccion/inferir-tipos.html',
            "layoutFooter": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        }, 
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/01-introduccion/inferir-tipos-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/01-introduccion/inferir-tipos-js.html'
        ],
        headerTitle: 'Inferir Tipos en TypeScript',
        styles: [
            { href: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/01-introduccion/inferir-tipos.css' },
        ],
        scripts: [
            { src: '/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/01-introduccion/inferir-tipos.js' }
        ]
    },


    //  -----  Rutas de Tipos de Datos  -----

    {
        id: 'booleans',
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Booleanos en TypeScript',
        path: 'bases-de-typescript/tipos-de-datos/booleans',
        components: {
            "layoutHeader": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
            "layoutNavbar": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
            "layoutMain": '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/02-tipos-de-datos/01-booleans.html',
            "layoutFooter": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        },
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/01-booleans-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/01-booleans-js.html'
        ],
        headerTitle: 'Booleanos en TypeScript',
        styles: [
            { href: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/02-tipos-de-datos/01-booleans.css' },
        ],
        scripts: [
            { src: '/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/02-tipos-de-datos/01-booleans.js' },
        ]
    },

    {
        id: 'numbers',
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Números en TypeScript',
        path: 'bases-de-typescript/tipos-de-datos/numbers',
        components: {
            "layoutHeader": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
            "layoutNavbar": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
            "layoutMain": '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/02-tipos-de-datos/02-numbers.html',
            "layoutFooter": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        },
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/02-numbers-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/02-numbers-js.html'
        ],
        headerTitle: 'Números en TypeScript',
        styles: [
            { href: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/02-tipos-de-datos/02-numbers.css' },
        ],
        scripts: [
            { src: '/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/02-tipos-de-datos/02-numbers.js' },
        ]
    },

    {
        id: 'strings',
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Strings en TypeScript',
        path: 'bases-de-typescript/tipos-de-datos/strings',
        components: {
            "layoutHeader": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
            "layoutNavbar": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
            "layoutMain": '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/02-tipos-de-datos/03-strings.html',
            "layoutFooter": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        },
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/03-strings-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/03-strings-js.html'
        ],
        headerTitle: 'Strings en TypeScript',
        styles: [
            { href: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/02-tipos-de-datos/03-strings.css' },
        ],
        scripts: [
            { src: '/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/02-tipos-de-datos/03-strings.js' },
        ]
    },

    {
        id: 'any',
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Any en TypeScript',
        path: 'bases-de-typescript/tipos-de-datos/any',
        components: {
            "layoutHeader": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
            "layoutNavbar": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
            "layoutMain": '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/02-tipos-de-datos/04-any.html',
            "layoutFooter": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        },
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/04-any-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/04-any-js.html'
        ],
        headerTitle: 'Any en TypeScript',
        styles: [
            { href: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/02-tipos-de-datos/04-any.css' },
        ],
        scripts: [
            { src: '/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/02-tipos-de-datos/04-any.js' },
        ]
    },

    {
        id: 'arrays',
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Arrays en TypeScript',
        path: 'bases-de-typescript/tipos-de-datos/arrays',
        components: {
            "layoutHeader": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
            "layoutNavbar": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
            "layoutMain": '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/02-tipos-de-datos/05-arrays.html',
            "layoutFooter": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        },
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/05-arrays-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/05-arrays-js.html'
        ],
        headerTitle: 'Arrays en TypeScript',
        styles: [
            { href: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/02-tipos-de-datos/05-arrays.css' },
        ],
        scripts: [
            { src: '/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/02-tipos-de-datos/05-arrays.js' },
        ]
    },

    {
        id: 'tuples',
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Tuplas en TypeScript',
        path: 'bases-de-typescript/tipos-de-datos/tuples',
        components: {
            "layoutHeader": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
            "layoutNavbar": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
            "layoutMain": '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/02-tipos-de-datos/06-tuples.html',
            "layoutFooter": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        },
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/06-tuples-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/06-tuples-js.html'
        ],
        
        headerTitle: 'Tuplas en TypeScript',
        styles: [
            { href: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/02-tipos-de-datos/06-tuples.css' },
        ],
        scripts: [
            { src: '/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/02-tipos-de-datos/06-tuples.js' },
        ]
    },

    {
        id: 'enums',
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Enumeraciones en TypeScript',
        path: 'bases-de-typescript/tipos-de-datos/enums',
        components: {
            "layoutHeader": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
            "layoutNavbar": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
            "layoutMain": '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/02-tipos-de-datos/07-enums.html',
            "layoutFooter": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        },
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/07-enums-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/07-enums-js.html'
        ],
        
        headerTitle: 'Enumeraciones en TypeScript',
        styles: [
            { href: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/02-tipos-de-datos/07-enums.css' },
        ],
        scripts: [
            { src: '/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/02-tipos-de-datos/07-enums.js' },
        ]
    },

    {
        id: 'void',
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Void en TypeScript',
        path: 'bases-de-typescript/tipos-de-datos/void',
        components: {
            "layoutHeader": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
            "layoutNavbar": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
            "layoutMain": '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/02-tipos-de-datos/08-void.html',
            "layoutFooter": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        },
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/08-void-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/08-void-js.html'
        ],
        
        headerTitle: 'Void en TypeScript',
        styles: [
            { href: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/02-tipos-de-datos/08-void.css' },
        ],
        scripts: [
            { src: '/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/02-tipos-de-datos/08-void.js' },
        ]
    },

    {
        id: 'never',
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Never en TypeScript',
        path: 'bases-de-typescript/tipos-de-datos/never',
        components: {
            "layoutHeader": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
            "layoutNavbar": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
            "layoutMain": '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/02-tipos-de-datos/09-never.html',
            "layoutFooter": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        },
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/09-never-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/09-never-js.html'
        ],
        
        headerTitle: 'Never en TypeScript',
        styles: [
            { href: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/02-tipos-de-datos/09-never.css' },
        ],
        scripts: [
            { src: '/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/02-tipos-de-datos/09-never.js' },
        ]
    },

    {
        id: 'nullUndefined',
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Null & Undefined en TypeScript',
        path: 'bases-de-typescript/tipos-de-datos/null-undefined',
        components: {
            "layoutHeader": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
            "layoutNavbar": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
            "layoutMain": '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/02-tipos-de-datos/10-null-undefined.html',
            "layoutFooter": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        },
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/10-null-undefined-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/10-null-undefined-js.html'
        ],
        
        headerTitle: 'Null & Undefined en TypeScript',
        styles: [
            { href: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/02-tipos-de-datos/10-null-undefined.css' },
        ],
        scripts: [
            { src: '/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/02-tipos-de-datos/10-null-undefined.js' },
        ]
    },

    {
        id: 'tareaTiposDeDatos',
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Tarea Tipos de Datos en TypeScript',
        path: 'bases-de-typescript/tipos-de-datos/tarea-tipos-de-datos',
        components: {
            "layoutHeader": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
            "layoutNavbar": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
            "layoutMain": '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/02-tipos-de-datos/11-tarea-tipos-de-datos.html',
            "layoutFooter": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        },
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/11-tarea-tipos-de-datos-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/11-tarea-tipos-de-datos-js.html'
        ],
        
        headerTitle: 'Tarea Tipos de Datos en TypeScript',
        styles: [
            { href: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/02-tipos-de-datos/11-tarea-tipos-de-datos.css' },
        ],
        scripts: [
            { src: '/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/02-tipos-de-datos/11-tarea-tipos-de-datos.js' },
        ]
    },


    //  -----  Rutas de Funciones  -----

    {
        id: 'functions',
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Funciones en TypeScript',
        path: 'bases-de-typescript/funciones/funciones-basicas',
        components: {
            "layoutHeader": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
            "layoutNavbar": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
            "layoutMain": '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/03-funciones/01-functions.html',
            "layoutFooter": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        },
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/03-funciones/01-functions-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/03-funciones/01-functions-js.html'
        ],
        headerTitle: 'Funciones en TypeScript',
        styles: [
            { href: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/03-funciones/01-functions.css' },
        ],
        scripts: [
            { src: '/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/03-funciones/01-functions.js' },
        ]
    },

    {
        id: 'args-required',
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Argumentos Requeridos en Funciones en TypeScript',
        path: 'bases-de-typescript/funciones/argumentos-requeridos',
        components: {
            "layoutHeader": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
            "layoutNavbar": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
            "layoutMain": '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/03-funciones/02-args-required.html',
            "layoutFooter": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        },
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/03-funciones/02-args-required-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/03-funciones/02-args-required-js.html'
        ],
        headerTitle: 'Argumentos Requeridos en Funciones en TypeScript',
        styles: [
            { href: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/03-funciones/02-args-required.css' },
        ],
        scripts: [
            { src: '/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/03-funciones/02-args-required.js' },
        ]
    },

    {
        id: 'args-optional',
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Argumentos Opcionales en Funciones en TypeScript',
        path: 'bases-de-typescript/funciones/argumentos-opcionales',
        components: {
            "layoutHeader": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
            "layoutNavbar": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
            "layoutMain": '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/03-funciones/03-args-optional.html',
            "layoutFooter": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        },
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/03-funciones/03-args-optional-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/03-funciones/03-args-optional-js.html'
        ],
        headerTitle: 'Argumentos Opcionales en Funciones en TypeScript',
        styles: [
            { href: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/03-funciones/03-args-optional.css' },
        ],
        scripts: [
            { src: '/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/03-funciones/03-args-optional.js' },
        ]
    },


    {
        id: 'args-default',
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Argumentos por Defecto en Funciones en TypeScript',
        path: 'bases-de-typescript/funciones/argumentos-por-defecto',
        components: {
            "layoutHeader": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
            "layoutNavbar": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
            "layoutMain": '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/03-funciones/04-args-default.html',
            "layoutFooter": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        },
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/03-funciones/04-args-default-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/03-funciones/04-args-default-js.html'
        ],
        headerTitle: 'Argumentos por Defecto en Funciones en TypeScript',
        styles: [
            { href: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/03-funciones/04-args-default.css' },
        ],
        scripts: [
            { src: '/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/03-funciones/04-args-default.js' },
        ]
    },

    {
        id: 'args-rest',
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Argumentos Rest en Funciones en TypeScript',
        path: 'bases-de-typescript/funciones/argumentos-rest',
        components: {
            "layoutHeader": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
            "layoutNavbar": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
            "layoutMain": '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/03-funciones/05-args-rest.html',
            "layoutFooter": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        },
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/03-funciones/05-args-rest-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/03-funciones/05-args-rest-js.html'
        ],
        headerTitle: 'Argumentos Rest en Funciones en TypeScript',
        styles: [
            { href: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/03-funciones/05-args-rest.css' },
        ],
        scripts: [
            { src: '/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/03-funciones/05-args-rest.js' },
        ]
    },

    {
        id: 'function-type',
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Tipos de Retorno en Funciones en TypeScript',
        path: 'bases-de-typescript/funciones/tipos-de-funciones',
        components: {
            "layoutHeader": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
            "layoutNavbar": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
            "layoutMain": '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/03-funciones/06-function-type.html',
            "layoutFooter": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        },
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/03-funciones/06-function-type-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/03-funciones/06-function-type-js.html'
        ],
        headerTitle: 'Tipos de Retorno en Funciones en TypeScript',
        styles: [
            { href: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/03-funciones/06-function-type.css' },
        ],
        scripts: [
            { src: '/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/03-funciones/06-function-type.js' },
        ]
    },

    {
        id: 'tarea-funciones',
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Tarea Funciones en TypeScript',
        path: 'bases-de-typescript/funciones/tarea-funciones',
        components: {
            "layoutHeader": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
            "layoutNavbar": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
            "layoutMain": '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/03-funciones/07-tarea-funciones.html',
            "layoutFooter": '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        },
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/03-funciones/07-tarea-funciones-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/03-funciones/07-tarea-funciones-js.html'
        ],
        headerTitle: 'Tarea Funciones en TypeScript',
        styles: [
            { href: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/03-funciones/07-tarea-funciones.css' },
        ],
        scripts: [
            { src: '/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/03-funciones/07-tarea-funciones.js' },
        ]
    },

    


];

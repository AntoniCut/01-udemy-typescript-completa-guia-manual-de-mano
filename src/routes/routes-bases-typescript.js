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


    {
        id: 'home',
        path: '',
        headerUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
        navbarUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
        mainUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/pages/home.html',
        footerUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        MarkdownShikiHtml: [],
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/assets/favicon/typescript-favicon.ico',
        pageTitle: 'TypeScript - Tu completa guia y manual de mano',
        headerTitle: 'TypeScript - Tu completa guia y manual de mano',
        styles: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/home.css',
        scripts: []
    },


    {
        id: 'inferirTipos',
        path: 'bases-de-typescript/introduccion/inferir-tipos',
        headerUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
        navbarUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
        mainUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/01-introduccion/inferir-tipos.html',
        footerUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/01-introduccion/inferir-tipos-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/01-introduccion/inferir-tipos-js.html'
        ],
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Inferir Tipos en TypeScript',
        headerTitle: 'Inferir Tipos en TypeScript',
        styles: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/01-introduccion/inferir-tipos.css',
        scripts: [
            { src:'/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/01-introduccion/inferir-tipos.js' }
        ]
    },

    {
        id: 'booleans',
        path: 'bases-de-typescript/tipos-de-datos/booleans',
        headerUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
        navbarUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
        mainUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/02-tipos-de-datos/01-booleans.html',
        footerUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/01-booleans-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/01-booleans-js.html'
        ],
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/01-bases-de-typescript/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Booleanos en TypeScript',
        headerTitle: 'Booleanos en TypeScript',
        styles: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/02-tipos-de-datos/01-booleans.css',
        scripts: [
            { src:'/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/02-tipos-de-datos/01-booleans.js' },
        ]
    },

    {
        id: 'numbers',
        path: 'bases-de-typescript/tipos-de-datos/numbers',
        headerUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
        navbarUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
        mainUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/02-tipos-de-datos/02-numbers.html',
        footerUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/02-numbers-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/02-numbers-js.html'
        ],
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/01-bases-de-typescript/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Números en TypeScript',
        headerTitle: 'Números en TypeScript',
        styles: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/02-tipos-de-datos/02-numbers.css',
        scripts: [
            { src:'/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/02-tipos-de-datos/02-numbers.js' },
        ]
    },
   
    {
        id: 'strings',
        path: 'bases-de-typescript/tipos-de-datos/strings',
        headerUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
        navbarUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
        mainUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/02-tipos-de-datos/03-strings.html',
        footerUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/03-strings-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/03-strings-js.html'
        ],
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/01-bases-de-typescript/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Strings en TypeScript',
        headerTitle: 'Strings en TypeScript',
        styles: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/02-tipos-de-datos/03-strings.css',
        scripts: [
            { src:'/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/02-tipos-de-datos/03-strings.js' },
        ]
    },

    {
        id: 'any',
        path: 'bases-de-typescript/tipos-de-datos/any',
        headerUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
        navbarUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
        mainUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/02-tipos-de-datos/04-any.html',
        footerUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/04-any-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/04-any-js.html'
        ],
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/01-bases-de-typescript/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Any en TypeScript',
        headerTitle: 'Any en TypeScript',
        styles: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/02-tipos-de-datos/04-any.css',
        scripts: [
            { src:'/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/02-tipos-de-datos/04-any.js' },
        ]
    },

    {
        id: 'arrays',
        path: 'bases-de-typescript/tipos-de-datos/arrays',
        headerUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
        navbarUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
        mainUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/02-tipos-de-datos/05-arrays.html',
        footerUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/05-arrays-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/05-arrays-js.html'
        ],
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/01-bases-de-typescript/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Arrays en TypeScript',
        headerTitle: 'Arrays en TypeScript',
        styles: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/02-tipos-de-datos/05-arrays.css',
        scripts: [
            { src:'/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/02-tipos-de-datos/05-arrays.js' },
        ]
    },

    {
        id: 'tuples',
        path: 'bases-de-typescript/tipos-de-datos/tuples',
        headerUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
        navbarUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
        mainUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/02-tipos-de-datos/06-tuples.html',
        footerUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/06-tuples-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/06-tuples-js.html'
        ],
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/01-bases-de-typescript/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Tuplas en TypeScript',
        headerTitle: 'Tuplas en TypeScript',
        styles: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/02-tipos-de-datos/06-tuples.css',
        scripts: [
            { src:'/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/02-tipos-de-datos/06-tuples.js' },
        ]
    },

    {
        id: 'enums',
        path: 'bases-de-typescript/tipos-de-datos/enums',
        headerUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
        navbarUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
        mainUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/02-tipos-de-datos/07-enums.html',
        footerUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/07-enums-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/07-enums-js.html'
        ],
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/01-bases-de-typescript/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Enumeraciones en TypeScript',
        headerTitle: 'Enumeraciones en TypeScript',
        styles: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/02-tipos-de-datos/07-enums.css',
        scripts: [
            { src:'/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/02-tipos-de-datos/07-enums.js' },
        ]
    },

    {
        id: 'void',
        path: 'bases-de-typescript/tipos-de-datos/void',
        headerUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
        navbarUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
        mainUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/02-tipos-de-datos/08-void.html',
        footerUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/08-void-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/08-void-js.html'
        ],
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/01-bases-de-typescript/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Void en TypeScript',
        headerTitle: 'Void en TypeScript',
        styles: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/02-tipos-de-datos/08-void.css',
        scripts: [
            { src:'/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/02-tipos-de-datos/08-void.js' },
        ]
    },

    {
        id: 'never',
        path: 'bases-de-typescript/tipos-de-datos/never',
        headerUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
        navbarUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
        mainUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/02-tipos-de-datos/09-never.html',
        footerUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/01-never-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/01-never-js.html'
        ],
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/01-bases-de-typescript/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Never en TypeScript',
        headerTitle: 'Never en TypeScript',
        styles: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/02-tipos-de-datos/09-never.css',
        scripts: [
            { src:'/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/02-tipos-de-datos/09-never.js' },
        ]
    },

    {
        id: 'nullUndefined',
        path: 'bases-de-typescript/tipos-de-datos/null-undefined',
        headerUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-header.html',
        navbarUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-navbar.html',
        mainUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/pages/01-bases-de-typescript/02-tipos-de-datos/10-null-undefined.html',
        footerUrl: '/cursos/typescript-completa-guia-manual-de-mano/src/components/layouts/layout-footer.html',
        MarkdownShikiHtml: [
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/10-null-undefined-ts.html',
            '/cursos/typescript-completa-guia-manual-de-mano/src/markdown-shiki/01-bases-de-typescript/02-tipos-de-datos/10-null-undefined-js.html'
        ],
        favicon: '/cursos/typescript-completa-guia-manual-de-mano/01-bases-de-typescript/assets/favicon/javascript-favicon.ico',
        pageTitle: 'Null & Undefined en TypeScript',
        headerTitle: 'Null & Undefined en TypeScript',
        styles: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/02-tipos-de-datos/10-null-undefined.css',
        scripts: [
            { src:'/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/02-tipos-de-datos/10-null-undefined.js' },
        ]
    },



];

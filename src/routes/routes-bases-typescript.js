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
        pageTitle: 'Null & Undefined en TypeScript',
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
        
        headerTitle: 'Null & Undefined en TypeScript',
        styles: [
            { href: '/cursos/typescript-completa-guia-manual-de-mano/src/styles/01-bases-de-typescript/02-tipos-de-datos/11-tarea-tipos-de-datos.css' },
        ],
        scripts: [
            { src: '/cursos/typescript-completa-guia-manual-de-mano/src/scripts/js/01-bases-de-typescript/02-tipos-de-datos/11-tarea-tipos-de-datos.js' },
        ]
    },



];

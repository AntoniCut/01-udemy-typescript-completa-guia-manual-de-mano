// @ts-nocheck
"use strict";
/*
    -----------------------------------------------------------------
    ----------  udemy.antonydev.tech/  ------------------------------
    ----------  /cursos-udemy/  -------------------------------------
    ----------  /typescript-completa-guia-manual-de-mano/  ----------
    ----------  /01-bases-de-typescript/  ---------------------------
    ----------  /src/scripts/ts/02-tipos-de-datos/  -----------------
    ----------  /03-strings.ts  -------------------------------------
    -----------------------------------------------------------------
*/
(() => {
    console.log('\n');
    console.warn('-----  03-strings.ts  -----');
    console.log('\n');
    const batman = 'Batman';
    const linternaVerde = "Linterna's Verde";
    const volcanNegro = `Héroe Volcán Negro`;
    const abc = 123;
    console.log({ batman, linternaVerde, volcanNegro, abc });
    //  -----  Métodos de String  -----
    console.log('\n', batman.toUpperCase());
    console.log(` I'm ${batman}, ${abc.toString()} `);
    console.log(batman[11]?.toUpperCase() || 'No existe el héroe');
})();

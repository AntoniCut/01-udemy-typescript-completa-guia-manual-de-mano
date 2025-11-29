// @ts-nocheck
"use strict";
/*
    -----------------------------------------------------------------
    ----------  udemy.antonydev.tech/  ------------------------------
    ----------  /cursos-udemy/  -------------------------------------
    ----------  /typescript-completa-guia-manual-de-mano/  ----------
    ----------  /01-bases-de-typescript/  ---------------------------
    ----------  /src/scripts/ts/02-tipos-de-datos/  -----------------
    ----------  /10-null-undefined.ts  ------------------------------
    -----------------------------------------------------------------
*/
(() => {
    console.log('\n');
    console.warn('-----  10-null-undefined.ts  -----');
    console.log('\n');
    //  -----  null o undefined  -----
    //  -----  strictNullChecks  -----
    let nada = undefined;
    // nada = 123;                   //  Error: Type 'number' is not assignable to type 'undefined'.
    console.log('\n', { nada });
    let nadaNumber = undefined;
    // nadaNumber = 123;             //  OK
    // nadaNumber = null;            //  OK
    console.log('\n', { nadaNumber });
    let isActive = null;
    console.log('\n', { isActive });
})();

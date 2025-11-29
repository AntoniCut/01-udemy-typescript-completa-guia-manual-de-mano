// @ts-nocheck
"use strict";
/*
    -----------------------------------------------------------------
    ----------  udemy.antonydev.tech/  ------------------------------
    ----------  /cursos-udemy/  -------------------------------------
    ----------  /typescript-completa-guia-manual-de-mano/  ----------
    ----------  /01-bases-de-typescript/  ---------------------------
    ----------  /src/scripts/ts/02-tipos-de-datos/  -----------------
    ----------  /01-booleans---.ts  ------------------------------------
    -----------------------------------------------------------------
*/
(() => {
    console.clear();
    console.log('\n');
    console.warn('-----  01-booleans.ts  -----');
    console.log('\n');
    let isSuperman = true;
    let isBatman = false;
    let isSpiderman = true;
    console.log({ isSuperman, isBatman, isSpiderman });
    isSuperman = true && false;
    isBatman = true && true;
    isSpiderman = false && false;
    console.log('\n', { isSuperman, isBatman, isSpiderman });
    //isSuperman = ( isBatman) ? 'ABC' : 'XYZ';
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();

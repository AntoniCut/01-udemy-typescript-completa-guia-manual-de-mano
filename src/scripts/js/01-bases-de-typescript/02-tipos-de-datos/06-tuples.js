// @ts-nocheck
"use strict";
/*
    -----------------------------------------------------------------
    ----------  udemy.antonydev.tech/  ------------------------------
    ----------  /cursos-udemy/  -------------------------------------
    ----------  /typescript-completa-guia-manual-de-mano/  ----------
    ----------  /01-bases-de-typescript/  ---------------------------
    ----------  /src/scripts/ts/02-tipos-de-datos/  -----------------
    ----------  /06-tuples.ts  --------------------------------------
    -----------------------------------------------------------------
*/
(() => {
    console.log('\n');
    console.warn('-----  06-tuples.ts  -----');
    console.log('\n');
    //  -----  Tuplas  -----
    const hero = ['Dr. Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log({ hero });
})();

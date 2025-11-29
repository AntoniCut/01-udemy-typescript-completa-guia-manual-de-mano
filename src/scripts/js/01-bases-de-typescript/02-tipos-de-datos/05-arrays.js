// @ts-nocheck
"use strict";
/*
    -----------------------------------------------------------------
    ----------  udemy.antonydev.tech/  ------------------------------
    ----------  /cursos-udemy/  -------------------------------------
    ----------  /typescript-completa-guia-manual-de-mano/  ----------
    ----------  /01-bases-de-typescript/  ---------------------------
    ----------  /src/scripts/ts/02-tipos-de-datos/  -----------------
    ----------  /05-arrays.ts  --------------------------------------
    -----------------------------------------------------------------
*/
(() => {
    console.log('\n');
    console.warn('-----  05-arrays.ts  -----');
    console.log('\n');
    const numbers1 = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10, true];
    numbers1.push(true);
    console.log({ numbers1 });
    const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    numbers2.push(11);
    console.log('\n', { numbers2 });
    const villains = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    console.log('\n', { villains });
    console.log('\n');
    villains.forEach(villain => console.log(villain.toUpperCase()));
})();

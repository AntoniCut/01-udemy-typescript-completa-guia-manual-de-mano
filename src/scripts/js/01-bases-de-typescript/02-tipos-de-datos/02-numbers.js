// @ts-nocheck
"use strict";
/*
    ---------------------------------------------------------------------------------
    ----------  udemy.antonydev.tech/  ----------------------------------------------
    ----------  /cursos/  -----------------------------------------------------------
    ----------  /typescript-completa-guia-manual-de-mano/  --------------------------
    ----------  /src/scripts/ts/01-bases-de-typescript/02-tipos-de-datos/  ----------
    ----------  /02-numbers.ts  -----------------------------------------------------
    ---------------------------------------------------------------------------------
*/
(() => {
    console.log('\n');
    console.warn('-----  02-numbers.ts  -----');
    console.log('\n');
    let avengers = 10; // 10
    const villians = 20;
    console.log({ avengers, villians });
    if (avengers < villians)
        console.log('\nEstamos en problemas');
    else
        console.log('Estamos a salvo');
    avengers = 123;
    console.log('\n', { avengers });
    avengers = Number('123');
    console.log({ avengers });
    avengers = Number('55A');
    console.log({ avengers }); // NaN  => Es considerado un Number.
})();

// @ts-nocheck
"use strict";
/*
    -----------------------------------------------------------------
    ----------  udemy.antonydev.tech/  ------------------------------
    ----------  /cursos-udemy/  -------------------------------------
    ----------  /typescript-completa-guia-manual-de-mano/  ----------
    ----------  /01-bases-de-typescript/  ---------------------------
    ----------  /src/scripts/ts/02-tipos-de-datos/  -----------------
    ----------  /09-never.ts  ---------------------------------------
    -----------------------------------------------------------------
*/
(() => {
    console.log('\n');
    console.warn('-----  09-never.ts  -----');
    console.log('\n');
    //  ----------------------------------------------
    //  -----  never  --------------------------------
    //  -----  No debe de terminar Exitosamente  -----
    //  -----  Da Error en tiempo de Ejecución  ------
    //  ----------------------------------------------
    const errorOrNumber = (message) => {
        if (!message)
            throw new Error(message);
        return 1;
    };
    errorOrNumber('Auxilio');
    errorOrNumber();
    const error = (message) => {
        throw new Error(message);
    };
    error('Auxilio');
})();

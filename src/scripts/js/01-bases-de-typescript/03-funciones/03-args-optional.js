"use strict";
/*
    ----------------------------------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------------------------------
    ----------  /cursos/  ------------------------------------------------------
    ----------  /typescript-completa-guia-manual-de-mano/  ---------------------
    ----------  /src/scripts/ts/01-bases-de-typescript/03-funciones/  ----------
    ----------  /03-args-optional.ts  ------------------------------------------
    ----------------------------------------------------------------------------
*/
(() => {
    console.clear();
    console.log('\n');
    console.warn('-----  03-args-optional.ts  -----');
    console.log('\n');
    //  -----  Función con argumentos opcionales  -----
    const fullName = (firsName, lastName) => {
        return `${firsName} ${lastName || 'No last name'}`;
    };
    //  -----  todos los argumentos  -----
    const name1 = fullName('Tony', 'Stark');
    //  -----  argumento opcional omitido  -----
    const name2 = fullName('Tony');
    console.log({ name1, name2 });
    //  -----  Función con argumentos opcionales  -----
    const sumar = (a, b) => a + (b || 0);
    console.log(sumar(1, 2));
})();

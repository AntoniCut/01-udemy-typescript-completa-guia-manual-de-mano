"use strict";
/*
    ----------------------------------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------------------------------
    ----------  /cursos/  ------------------------------------------------------
    ----------  /typescript-completa-guia-manual-de-mano/  ---------------------
    ----------  /src/scripts/ts/01-bases-de-typescript/03-funciones/  ----------
    ----------  /04-args-default.ts  -------------------------------------------
    ----------------------------------------------------------------------------
*/
(() => {
    console.clear();
    console.log('\n');
    console.warn('-----  04-args-default.ts  -----');
    console.log('\n');
    //  -----  Función con argumentos opcionales  -----
    const fullName = (firsName, lastName, upper = false) => {
        if (upper)
            return `${firsName.toUpperCase()} ${lastName || 'NO LAST NAME'}`.toUpperCase();
        else
            return `${firsName} ${lastName || 'No last name'}`;
    };
    //  -----  todos los argumentos  -----
    const name1 = fullName('Tony', 'Stark');
    //  -----  argumento opcional omitido  -----
    const name2 = fullName('Tony');
    //  -----  argumento opcional con valor por defecto  -----
    const name3 = fullName('Steve', 'Rogers', true);
    console.log({ name1, name2, name3 });
    //  -----  Función con argumentos opcionales  -----
    const sumar = (a, b) => a + (b || 0);
    console.log(sumar(1, 2));
})();

"use strict";
/*
    ----------------------------------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------------------------------
    ----------  /cursos/  ------------------------------------------------------
    ----------  /typescript-completa-guia-manual-de-mano/  ---------------------
    ----------  /src/scripts/ts/01-bases-de-typescript/03-funciones/  ----------
    ----------  /01-functions.ts  ----------------------------------------------
    ----------------------------------------------------------------------------
*/
(() => {
    console.clear();
    console.log('\n');
    console.warn('-----  01-functions.ts  -----');
    console.log('\n');
    //  -----  Función tradicional que retorna un string  -----
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    //  -----  Función de flecha que retorna un string  -----
    const activateBatSignal = () => {
        return 'Batiseñal activada';
    };
    //  -----  Uso de las funciones  -----
    console.log(typeof activateBatSignal);
    //  -----  Mostrar en consola el valor retornado por la función  -----
    console.log(returnName());
    console.log(activateBatSignal());
    console.log('\n');
    //  -----  Llamar a las funciones sin usar su valor retornado  -----
    returnName();
    activateBatSignal();
    //  -----  Almacenar en una variable el valor retornado por la función  -----
    const heroName = returnName();
    console.log({ heroName });
})();

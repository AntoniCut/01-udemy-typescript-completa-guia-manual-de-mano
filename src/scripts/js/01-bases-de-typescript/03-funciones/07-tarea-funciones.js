"use strict";
/*
    ----------------------------------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------------------------------
    ----------  /cursos/  ------------------------------------------------------
    ----------  /typescript-completa-guia-manual-de-mano/  ---------------------
    ----------  /src/scripts/ts/01-bases-de-typescript/03-funciones/  ----------
    ----------  /07-tarea-funciones.ts  ----------------------------------------
    ----------------------------------------------------------------------------
*/
(() => {
    console.clear();
    console.log('\n');
    console.warn('-----  07-tarea-funciones.ts  -----');
    console.log('\n');
    //  -----  Funciones Básicas  -----
    const sumar = (a, b) => {
        return a + b;
    };
    console.log('sumar(10, 20): ', sumar(10, 20));
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    //  -----  Parametros por defecto  -----
    const llamarBatman = (llamar = false) => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    //  -----  Rest?  -----
    const unirheroes = (...personas) => {
        return personas.join(", ");
    };
    console.log(unirheroes("Capitan America", "Ironman", "Thor", "Hulk"));
    //  -----  Tipo funcion  -----
    const noHaceNada = (numero, texto, booleano, arreglo) => {
        // Esta funcion no hace nada
    };
    // Crear el tipo de funcion que acepte la funcion "noHaceNada"
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();

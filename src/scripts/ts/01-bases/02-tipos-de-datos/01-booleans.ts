/*
    ---------------------------------------------------------------------------------
    ----------  udemy.antonydev.tech/  ----------------------------------------------
    ----------  /cursos/  -----------------------------------------------------------
    ----------  /typescript-completa-guia-manual-de-mano/  --------------------------
    ----------  /src/scripts/ts/01-bases-de-typescript/02-tipos-de-datos/  ----------
    ----------  /01-booleans.ts  ----------------------------------------------------
    ---------------------------------------------------------------------------------
*/


(() => {

    console.clear();
    console.log('\n');
    console.warn('-----  01-booleans.ts  -----');
    console.log('\n');

    
    let isSuperman: boolean = true;
    let isBatman: boolean = false;
    let isSpiderman: boolean = true;

    console.log({ isSuperman, isBatman, isSpiderman });


    isSuperman = true && false;
    isBatman = true && true;
    isSpiderman = false && false;

    console.log('\n', { isSuperman, isBatman, isSpiderman });

    
    //isSuperman = ( isBatman) ? 'ABC' : 'XYZ';
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });

})();



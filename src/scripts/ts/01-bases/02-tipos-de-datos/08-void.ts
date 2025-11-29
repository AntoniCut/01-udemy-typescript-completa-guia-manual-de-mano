/*
    ---------------------------------------------------------------------------------
    ----------  udemy.antonydev.tech/  ----------------------------------------------
    ----------  /cursos/  -----------------------------------------------------------
    ----------  /typescript-completa-guia-manual-de-mano/  --------------------------
    ----------  /src/scripts/ts/01-bases-de-typescript/02-tipos-de-datos/  ----------
    ----------  /08-void.ts  --------------------------------------------------------
    --------------------------------------------------------------------------------
*/


(() => {

    console.log('\n');
    console.warn('-----  08-void.ts  -----');
    console.log('\n');


    //  -----  void  -----
    
    function callBatman(): void {

        return;
    }

    const a = callBatman();
    
    console.log({ a });


    const callSuperman = (): void => {

        return;
    }

    const b = callSuperman();

    console.log({ b });


})();
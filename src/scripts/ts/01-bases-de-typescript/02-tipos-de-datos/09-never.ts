/*
    ---------------------------------------------------------------------------------
    ----------  udemy.antonydev.tech/  ----------------------------------------------
    ----------  /cursos/  -----------------------------------------------------------
    ----------  /typescript-completa-guia-manual-de-mano/  --------------------------
    ----------  /src/scripts/ts/01-bases-de-typescript/02-tipos-de-datos/  ----------
    ----------  /09-never.ts  -------------------------------------------------------
    ---------------------------------------------------------------------------------
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

    
    const errorOrNumber = (message?: string):(never|number) => {

        if(!message)
            throw new Error(message);
        
        return 1;
    }

    errorOrNumber('Auxilio');
    errorOrNumber();


    const error = (message: string): never => {

        throw new Error(message);
    }

    error('Auxilio');

    

})();
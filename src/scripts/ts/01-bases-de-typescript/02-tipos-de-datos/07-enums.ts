/*
    ---------------------------------------------------------------------------------
    ----------  udemy.antonydev.tech/  ----------------------------------------------
    ----------  /cursos/  -----------------------------------------------------------
    ----------  /typescript-completa-guia-manual-de-mano/  --------------------------
    ----------  /src/scripts/ts/01-bases-de-typescript/02-tipos-de-datos/  ----------
    ----------  /07-enums.ts  -------------------------------------------------------
    ---------------------------------------------------------------------------------
*/


(() => {
    
    
    console.log('\n');
    console.warn('-----  07-enums.ts  -----');
    console.log('\n');


    //  -----  Enums  -----
    enum AudioLevel {
        min = 1,
        medium,
        max = 10
    }

    console.log('\n', { AudioLevel });
    
    let currentAudioMin = AudioLevel.min;
    console.log('\n', { currentAudioMin });
    
    let currentAudioMedium = AudioLevel.medium;
    console.log('\n', { currentAudioMedium });

    let currentAudioMax = AudioLevel.max;
    console.log('\n', { currentAudioMax });

})();
// @ts-nocheck
"use strict";
/*
    -----------------------------------------------------------------
    ----------  udemy.antonydev.tech/  ------------------------------
    ----------  /cursos-udemy/  -------------------------------------
    ----------  /typescript-completa-guia-manual-de-mano/  ----------
    ----------  /01-bases-de-typescript/  ---------------------------
    ----------  /src/scripts/ts/02-tipos-de-datos/  -----------------
    ----------  /07-enums.ts  ---------------------------------------
    -----------------------------------------------------------------
*/
(() => {
    console.log('\n');
    console.warn('-----  07-enums.ts  -----');
    console.log('\n');
    //  -----  Enums  -----
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    console.log('\n', { AudioLevel });
    let currentAudioMin = AudioLevel.min;
    console.log('\n', { currentAudioMin });
    let currentAudioMedium = AudioLevel.medium;
    console.log('\n', { currentAudioMedium });
    let currentAudioMax = AudioLevel.max;
    console.log('\n', { currentAudioMax });
})();

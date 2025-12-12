"use strict";
/*
    ---------------------------------------------------------------------------------
    ----------  udemy.antonydev.tech/  ----------------------------------------------
    ----------  /cursos/  -----------------------------------------------------------
    ----------  /typescript-completa-guia-manual-de-mano/  --------------------------
    ----------  /src/scripts/ts/01-bases-de-typescript/02-tipos-de-datos/  ----------
    ----------  /11-tarea-tipos-de-datos.ts  ----------------------------------------
    ---------------------------------------------------------------------------------
*/
(() => {
    console.log('\n');
    console.warn('-----  11-tarea-tipos-de-datos.ts  -----');
    console.log('\n');
    //  -----  String  -----
    const batman = 'Bruce';
    const superman = 'Clark';
    console.log('\n', { batman, superman });
    //  -----  Booleanos  -----
    const existe = false;
    console.log('\n', { existe });
    //  -----  Tuplas  -----
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    console.log('\n', { parejaHeroes, villano });
    //  -----  Arreglos  -----
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    console.log('\n', { aliados });
    //  -----  Enumeraciones  -----
    let Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["Acuaman"] = 0] = "Acuaman";
        Fuerza[Fuerza["Batman"] = 1] = "Batman";
        Fuerza[Fuerza["Flash"] = 5] = "Flash";
        Fuerza[Fuerza["Superman"] = 100] = "Superman";
    })(Fuerza || (Fuerza = {}));
    console.log('Fuerza', Fuerza);
    console.log('Fuerza', { Fuerza });
    console.log('\nFuerza de Acuaman:', Fuerza.Acuaman);
    console.log('Fuerza de Batman:', Fuerza.Batman);
    console.log('Fuerza de Flash:', Fuerza.Flash);
    console.log('Fuerza de Superman:', Fuerza.Superman);
    const fuerzaAcuaman = Fuerza.Acuaman;
    const fuerzaBatman = Fuerza.Batman;
    const fuerzaFlash = Fuerza.Flash;
    const fuerzaSuperman = Fuerza.Superman;
    console.log('\n', { fuerzaAcuaman, fuerzaBatman, fuerzaFlash, fuerzaSuperman });
    //  -----  Retorno de funciones  -----
    function activar_batiseñal() {
        return 'activada';
    }
    console.log('\n', activar_batiseñal());
    function pedir_ayuda() {
        console.log('\nAuxilio!!!');
    }
    pedir_ayuda();
    //  -----  Aserciones de Tipo  -  Casteo  -----
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log('\n', { largoDelPoder });
})();

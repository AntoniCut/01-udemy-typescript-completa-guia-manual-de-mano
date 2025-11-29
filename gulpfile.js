/*
    -----------------------------------------------------------------
    ----------  /udemy.antonydev.tech/  -----------------------------
    ----------  /cursos/  -------------------------------------------
    ----------  /typescript-completa-guia-manual-de-mano/  ----------
    ----------  /gulpfile.js  ---------------------------------------
    -----------------------------------------------------------------
*/


//  ⚡ -----  Versión con módulos ES + exclusiones  -----


import gulp from "gulp";
import terser from "gulp-terser";
import cleanCSS from "gulp-clean-css";
import htmlmin from "gulp-htmlmin";
import { deleteAsync } from "del";
import { exec } from "child_process";


// 📌  -----  Carpetas/archivos a excluir en TODAS las tareas  -----
const EXCLUDES = [
    "!node_modules/**",
    "!dist/**",
    "!gulpfile.js",
    "!addTsNoCheck.js",
    "!assets/**",
    "!src/scripts/ts/**",
];


// 🧹  -----  Limpiar carpeta dist  -----
export function clean() {
    return deleteAsync(["dist"]);
}


//  -----  Minificar JS sin cambiar el nombre  -----
export function minifyAllJs() {
    return gulp.src(["**/*.js", ...EXCLUDES], { base: "." })
        .pipe(terser())
        .pipe(gulp.dest("dist"));
}


//  -----  Minificar CSS sin cambiar el nombre  -----
export function minifyAllCss() {
    return gulp.src(["**/*.css", ...EXCLUDES], { base: "." })
        .pipe(cleanCSS())
        .pipe(gulp.dest("dist"));
}


//  -----  Minificar y copiar HTML  -----
export function minifyHtml() {
    return gulp.src(["**/*.html", ...EXCLUDES], { base: "." })
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest("dist"));
}


//  -----  Tarea para agregar //@ts-nocheck en desarrollo  -----
export function addTsNoCheck(cb) {
    
    //  -----  Solo ejecutar en desarrollo  -----
    if (process.env.NODE_ENV === "development") {
        exec('node addTsNoCheck.js', (err, stdout, stderr) => {
            if (err) {
                console.error(err);
                return cb(err);
            }
            console.log(stdout);
            console.error(stderr);
            cb();
        });
    } else {
        cb();
    }
}


//  -----  Build de producción (limpia primero)  -----
export const build = gulp.series(
    clean,
    gulp.parallel(minifyAllJs, minifyAllCss, minifyHtml)
);


//  -----  Build de desarrollo (limpia, minifica y agrega //@ts-nocheck)  -----
export const dev = gulp.series(
    clean,
    gulp.parallel(minifyAllJs, minifyAllCss, minifyHtml),
    addTsNoCheck
);


//  -----  Tarea por defecto  -----
export default build;
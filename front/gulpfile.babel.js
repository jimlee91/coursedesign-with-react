import gulp from "gulp";
import babel from "gulp-babel";
import browserSync from "browser-sync";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import sass from "gulp-sass";
import sourcemaps from "gulp-sourcemaps";
import uglify from "gulp-uglify";
import plumber from "gulp-plumber";
import imagemin from "gulp-imagemin";
import del from "del";
import concat from "gulp-concat";

const scss = () => {
    return gulp.src("dev/scss/**/*.scss")
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: ''}))
        .pipe(postcss([autoprefixer]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("static/css"))
};
const js = () => {
    return gulp.src("dev/js/**/*.js")
        .pipe(plumber())
        .pipe(babel())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(concat("build.js"))
        .pipe(gulp.dest("static/js"))
};
//  이미지 용량 최소화
const minImg = () => {
    return gulp.src('dev/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('static/images'))
};

const watchTask = () => {
    gulp.watch('dev/**/*.scss', scss)
        .on('change', browserSync.reload);
    gulp.watch('dev/**/*.js', js)
        .on('change', browserSync.reload);
    gulp.watch('dev/**/*.{jpg,jpeg,png,gif}', minImg)
        .on('change', browserSync.reload);
};

const clean = () => {
    return del('dist');
};

// css or scss 선택
exports.default = gulp.series(
    clean,
    gulp.parallel(scss, js, minImg),
    gulp.parallel(watchTask),
);

exports.build = gulp.series(
    clean, scss, js, minImg
);
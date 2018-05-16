const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');

gulp.task('default', () =>
    gulp.src('./src/css/style.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist'))
);

gulp.task('minify-css', () => {
    return gulp.src('./src/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);
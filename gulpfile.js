const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pump = require('pump');
const watch = require('gulp-watch');

gulp.task('auto-prefix', function(){
    gulp.src('./src/css/style.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist'))
});

gulp.task('minify-css', function(){
    return gulp.src('./src/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'));
});

gulp.task('image-optimize', function() {
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});

gulp.task('transpile', function(){
    gulp.src('src/js/app.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'))
});

gulp.task('concanate', function() {
    return gulp.src('src/js')
      .pipe(concat('app.js'))
      .pipe(gulp.dest('./dist/'));
  });


 gulp.task('compress', function (cb) {
    pump([
          gulp.src('src/js'),
          uglify(),
          gulp.dest('dist')
      ],
      cb
    );
  });

  gulp.task('gulp-watch', function () {
    return watch('src/css')
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['auto-prefix','minify-css','image-optimize','transpile','concanate','compress','gulp-watch']);
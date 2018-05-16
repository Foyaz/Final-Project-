const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pump = require('pump');

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

gulp.task('default', () =>
    gulp.src('src/main.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'))
);

gulp.task('scripts', function() {
    return gulp.src('src/js')
      .pipe(concat('main.js'))
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
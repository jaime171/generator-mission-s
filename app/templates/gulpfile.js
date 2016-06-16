var gulp = require('gulp'),
  sass = require('gulp-sass'),
  cssnano = require('gulp-cssnano'),
  browserSync = require('browser-sync').create(),
  pug = require('gulp-pug'),
  plumber = require('gulp-plumber'),
  watch = require('gulp-watch'),
  src = './';

gulp.task('styles', function(){
  gulp.src('./app/sass/main.sass')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest(src + 'app/dist/css'))
    .pipe(browserSync.reload({stream: true}));
});


gulp.task('views', function buildHTML() {
  return gulp.src(src + 'app/pug/index.pug')
  .pipe(plumber())
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest(src + 'app/dist'))
  .pipe(browserSync.reload({stream: true}));
});


gulp.task('build-js', function(){
  return gulp.src(src + 'app/dist/scripts/*.js')
    .pipe(watch(src + 'app/dist/scripts/*.js'))
    .pipe(browserSync.reload({stream: true}));
});


gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: src + 'app/dist'
    }
  });
  gulp.watch('app/sass/*.{sass, scss}', {cwd: src}, ['styles']);
  gulp.watch('app/pug/*.pug', {cwd: src}, ['views']);
  gulp.watch('app/dist/scripts/*.js', {cwd: src}, ['build-js']);
  gulp.watch('app/dist/*.html').on('change', browserSync.reload);
});



gulp.task('default', ['styles', 'views', 'build-js', 'serve']);

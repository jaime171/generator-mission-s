



var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('styles', function(){
  gulp.src('./app/sass/main.sass')
    .pipe(sass())
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function() {

  browserSync.init({
    server: {
      baseDir: './app'
    }
  });

  gulp.watch('./app/sass/*.sass', ['styles']);
  gulp.watch('./app/*.html').on('change', browserSync.reload);

});

gulp.task('default', ['styles', 'serve']);

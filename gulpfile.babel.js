'use strict';

import babel from 'gulp-babel';
import gulp from 'gulp';

gulp.task('default', () => {

});

gulp.task('build', () => {
  return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

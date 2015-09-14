'use strict';

var gulp = require('gulp');
var size = require('gulp-size');

gulp.task('favicon', function() {
  return gulp.src('src/favicon.ico')
    .pipe(gulp.dest('dist'))
    .pipe(size());
});

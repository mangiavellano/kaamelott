'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var size = require('gulp-size');
 
gulp.task('styles', function() {
  return gulp
    .src('./src/assets/stylesheets/**/*.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('.tmp/assets/stylesheets'))
    .pipe(size());
});
 
gulp.task('sass:watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

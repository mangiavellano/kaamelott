'use strict';

var gulp = require('gulp');
var rev  = require('gulp-rev');

gulp.task('assets', ['styles', 'scripts'], function() {
  gulp
    .src('.tmp/assets/javascripts/bundle.js')
    .pipe(rev())
    .pipe(gulp.dest('dist/assets/javascripts'));

  return gulp
    .src('.tmp/assets/stylesheets/app.css')
    .pipe(rev())
    .pipe(gulp.dest('dist/assets/stylesheets'));
});

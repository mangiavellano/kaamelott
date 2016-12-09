'use strict';

var gulp    = require('gulp');
var size    = require('gulp-size');

gulp.task('fonts', function() {
  return gulp
    .src('./src/assets/fonts/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest('dist/assets/fonts'))
    .pipe(size());
});

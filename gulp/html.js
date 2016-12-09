'use strict';

var gulp       = require('gulp');
var inject     = require('gulp-inject');
var htmlmin    = require('gulp-htmlmin');
var size       = require('gulp-size');

gulp.task('html', ['assets'], function() {
  var assetPaths = [
    'dist/assets/stylesheets/*.css',
    'dist/assets/javascripts/bundle*.js'
  ];

  gulp
    .src('./src/index.html')
    .pipe(inject(gulp.src(assetPaths), {
      read: false,
      addRootSlash: false,
      ignorePath: 'dist/'
    }))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      removeCommentsFromCDATA: true,
      minifyJS: true,
      minifyCSS: true
    }))
    .pipe(gulp.dest('dist/'));

  gulp
    .src('./src/app/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      removeCommentsFromCDATA: true,
      minifyJS: true,
      minifyCSS: true
    }))
    .pipe(gulp.dest('dist/views/'))
    .pipe(size());
});

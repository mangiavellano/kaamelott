'use strict';

var gulp       = require('gulp');
var inject     = require('gulp-inject');
var minifyHtml = require('gulp-minify-html');
var size       = require('gulp-size');

gulp.task('html', ['assets'], function() {
  var assetPaths = [
    'dist/assets/stylesheets/*.css',
    'dist/assets/javascripts/bundle*.js'
  ];

  gulp.src('./src/*.html')
    .pipe(inject(gulp.src(assetPaths), {
      read: false,
      addRootSlash: false,
      ignorePath: 'dist/'
    }))
    .pipe(minifyHtml({
      empty: true,
      spare: true,
      quotes: true,
      conditionals: true
    }))
    .pipe(gulp.dest('dist/'));

  gulp.src('./src/app/**/*.html')
    .pipe(minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe(gulp.dest('dist/views/'))
    .pipe(size());
});

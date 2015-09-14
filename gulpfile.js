'use strict';

var gulp = require('gulp');

require('require-dir')('./gulp');

gulp.task('serve', ['clean', 'styles'], function() {
  gulp.start('watch');
});

gulp.task('build', ['clean', 'html', 'favicon']);

gulp.task('heroku', ['build']);

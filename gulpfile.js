'use strict';

var gulp = require('gulp');

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

var inject = require('gulp-inject');
 
gulp.task('index', function () {
  var target = gulp.src('./src/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp.src(['./src/module/*.js', './src/module/*.css'], {read: false});
 
  return target.pipe(inject(sources))
    .pipe(gulp.dest('./src'));
});
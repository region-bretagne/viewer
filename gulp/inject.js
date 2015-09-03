'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');
gulp.task('inject', function () {
	
	return gulp.src('src/index.html')
    .pipe(inject(
    	gulp.src(
    		['src/app/controllers/*.js', 'src/app/services/*.js'],
    		{read: false}
    		), 
    	{relative: true}))
    .pipe(gulp.dest('src'));
});
'use strict';

// require
var gulp = require('gulp');                       // gulp
var plumber = require('gulp-plumber');				    // plumber
var gulpConcat = require('gulp-concat');			    // concat
var gulpUglify = require('gulp-uglify');			    // uglify
var sourceMaps = require('gulp-sourcemaps');		  // sourcemaps
var autoprefixer = require('gulp-autoprefixer');	// autoprefixr
var sass = require('gulp-sass');					        // sass

// tasks
// concat + min js scripts
gulp.task('concatScripts', function() {
	gulp.src([
			// include all js/plugins files
			'js/vendor/*.js',
			// don't include
			'!js/vendor/jquery-1.11.1.min.js',
			'!js/vendor/selectivizr.min.js',
			'!js/vendor/modernizr.min.js',
			// include main.js
			'js/main.js'
		])
	.pipe(plumber())
	.pipe(gulpConcat('main.min.js'))
	.pipe(gulpUglify())
	.pipe(gulp.dest('js'));
});

// sass
gulp.task('compileSass', function() {
	gulp.src('sass/style.scss')
		// pipe sourcemaps to sass
		.pipe(sourceMaps.init())
		.pipe(plumber())
		.pipe(sass({outputStyle: 'compressed'}))
		// pipe prefixr
		.pipe(autoprefixer({
			browsers: ['last 2 versions', 'IE 9', 'IE 8', 'IE 7'],
			cascade: false
		}))
		// write sourcemaps
		.pipe(sourceMaps.write('./'))
		.pipe(gulp.dest('./css/'));
});

// watchFiles
gulp.task('watchFiles', function() {
	gulp.watch('style.scss', ['compileSass']);
	gulp.watch('sass/**/*.scss', ['compileSass']);
	gulp.watch(['js/**/*.js', '!js/main.min.js'], ['concatScripts']);
});

// default task
gulp.task('default', ['watchFiles']);

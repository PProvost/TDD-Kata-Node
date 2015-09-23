var gulp = require('gulp');
var mocha = require('gulp-mocha');
var tsd = require('gulp-tsd');
var tsc = require('gulp-typescript');

var tsProject = tsc.createProject({
	removeComments: false,
	noImplicitAny: false,
	target: "ES5",
	module: "commonjs",
	declarationFiles: false
});

// Build

gulp.task("build-src", function() {
	return gulp.src("src/*.ts")
		.pipe(tsc(tsProject))
		.js.pipe(gulp.dest('build/src/'));
});

var tsTestProject = tsc.createProject({
	removeComments: false,
	noImplicitAny: false,
	target: "ES5",
	module: "commonjs",
	declarationFiles: false
});

// Test

gulp.task('build-test', function() {
	return gulp.src('test/*.test.ts')
		.pipe(tsc(tsTestProject))
		.js.pipe(gulp.dest('build/test/'));
});

gulp.task('build-all', ['build-src', 'build-test']);

gulp.task('run-tests', ['build-test', 'build-src'], function() {
	return gulp.src('build/test/*.test.js', {read:false})
		.pipe(mocha({reporter: 'spec'}));
});

// Dependencies

gulp.task('tsd', function(cb) {
	tsd({
		command: 'reinstall',
		config: 'tsd.json'
	}, cb);
});

// Watch

gulp.task('watch', function() {
	return gulp.watch(['src/**/*.ts', 'test/**/*.test.ts'], ['run-tests']);
});
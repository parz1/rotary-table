// gulp
var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

//img
var imagemin = require('gulp-imagemin');

// html
var htmlmin = require('gulp-htmlmin');

// css
var less = require('gulp-less');
var cssmin = require('gulp-minify-css');

// js
var hint = require('gulp-jshint');
var jsmin = require('gulp-uglify');

// paths
var bases = {
	app: 'src/',
	build: 'build/'
};

var paths = {
	html: '*.html',
	js: 'js/*.js',
	lib: 'js/lib/*',
	less: 'less/*.less',
	images: 'images/'
};

gulp.task('html', function() {
		return gulp.src(paths.html, {cwd: bases.app})
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(bases.build));
});

gulp.task('css', function() {
	return gulp.src(paths.less, {cwd: bases.app})
		.pipe(less())
		.pipe(gulp.dest(bases.build + 'css'))
		.pipe(cssmin())
		.pipe(rename('app.min.css'))
		.pipe(gulp.dest(bases.build + 'css'));
});

gulp.task('lint', function() {
	return gulp.src(paths.js, {cwd: bases.app})
		.pipe(hint())
		.pipe(hint.reporter('default'));
});

gulp.task('compress', function() {
	return gulp.src(paths.js, {cwd: bases.app})
		.pipe(concat('app.js'))
		.pipe(gulp.dest(bases.build + 'js'))
		.pipe(rename('app.min.js'))
		.pipe(jsmin())
		.pipe(gulp.dest(bases.build + 'js'));
});

gulp.task('copy', function() {
	return gulp.src(paths.lib, {cwd: bases.app})
		.pipe(gulp.dest(bases.build + 'js'));
});

gulp.task('imagemin', function() {
	gulp.src(paths.images, {cwd: bases.app})
		.pipe(imagemin())
		.pipe(gulp.dest(bases.build + 'images'));
});

gulp.task('watch', function() {
	gulp.watch(bases.app + paths.html, ['html']);
	gulp.watch(bases.app + paths.less, ['css']);
	gulp.watch(bases.app + paths.js, ['lint', 'compress', 'copy']);
});

gulp.task('default', ['lint', 'compress', 'copy', 'html', 'css', 'watch']);
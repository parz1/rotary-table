// gulp
var gulp = require('gulp'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps'),

//img
	imagemin = require('gulp-imagemin'),

// html
	htmlmin = require('gulp-htmlmin'),

// css
	less = require('gulp-less'),
	cssmin = require('gulp-minify-css'),

// js
	hint = require('gulp-jshint'),
	jsmin = require('gulp-uglify'),

// paths
	bases = {
		app: 'src/',
		build: 'build/'
	},

	paths = {
		html: '*.html',
		js: 'js/*.js',
		lib: 'js/lib/*',
		less: 'less/*.less',
		images: 'images/'
	};

gulp.task('htmlmin', function() {
		return gulp.src(paths.html, {cwd: bases.app})
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(bases.build));
});

gulp.task('less', function() {
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

gulp.task('scripts', function() {
	return gulp.src(paths.js, {cwd: bases.app})
		.pipe(sourcemaps.init())
			.pipe(hint())
			.pipe(hint.reporter('default'))
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
	gulp.watch(bases.app + paths.js, ['scripts', 'copy']);
});

gulp.task('default', ['lint', 'scripts', 'copy', 'html', 'css', 'watch']);
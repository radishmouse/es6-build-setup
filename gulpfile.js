'use strict';
// https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md

var gulp = require('gulp');
var gutil = require('gulp-util');
var traceur = require('gulp-traceur');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var es6ify = require('es6ify');
// var plumber = require('gulp-plumber');
// var tap = require('gulp-tap');
var _ = require('lodash');

var config = {
    paths: {
        app: './app/main.js',
        bundle: 'bundle.js',
        dest: './app/',
        js: 'src/**/*.js',
        lib: './lib'
    }
};

// var onError = function (err) {
//   gutil.beep();
//   gutil.log(gutil.colors.red(err.message));
// };

gulp.task('build:lib', function () {
    return gulp.src(config.paths.js)
        .pipe(traceur({
            modules: 'commonjs',
            blockBinding: true
        }))
        .pipe(gulp.dest(config.paths.lib));
});


function rebuild (bundler) {
    return bundler.bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source(config.paths.bundle))
        .pipe(gulp.dest(config.paths.dest));
}

function build (file) {
    var args = _.extend({ debug: true }, watchify.args);
    var b = watchify(browserify(file.path, args));
    b.transform(es6ify);
    // b.add(file.path);
    b.on('update', function () {
        rebuild(b);
    });
    return rebuild(b);
}

gulp.task('build:bundle', ['build:lib'], function () {

    return build(config.paths.app);
    // return gulp.src(config.paths.app, {read: false})
    //     .pipe(plumber({
    //         errorHandler: onError
    //     }))
    //     .pipe(tap(build))


});
gulp.task('default', ['build:bundle'], function () {
    gulp.watch(config.paths.js, ['build:bundle']);
});

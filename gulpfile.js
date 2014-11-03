'use strict';
// https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md

var config = {
    paths: {
        app: './app/main.js',
        bundle: 'bundle.js',
        dest: './app/',
        js: 'src/**/*.js',
        lib: './lib'
    }
};

var gulp = require('gulp');
// var gutil = require('gulp-util');
var traceur = require('gulp-traceur');
var watchAndBuild = require('./tasks/browserify')(config.paths.bundle, config.paths.dest);


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

// function rebuild (bundler) {
//     return bundler.bundle()
//         .on('error', gutil.log.bind(gutil, 'Browserify Error'))
//         .pipe(source(config.paths.bundle))
//         .pipe(gulp.dest(config.paths.dest));
// }
//
// function build (filePath) {
//     var args = _.extend(watchify.args, { debug: true });
//     var b = watchify(browserify(filePath, args));
//     b.transform(es6ify);
//     b.on('update', function () {
//         rebuild(b);
//     });
//     return rebuild(b);
// }

// gulp.task('build:bundle', ['build:lib'], function () {
gulp.task('watch', function () {
    return watchAndBuild(config.paths.app);
});

gulp.task('default', ['watch'], function () {
});

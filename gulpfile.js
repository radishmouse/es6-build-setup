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
var watchAndBuild = require('./tasks/browserify')(config.paths.bundle, config.paths.dest);

gulp.task('watch', function () {
    return watchAndBuild(config.paths.app);
});

gulp.task('default', ['watch'], function () {
});

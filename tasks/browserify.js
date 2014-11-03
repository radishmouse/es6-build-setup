'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var es6ify = require('es6ify');
var _ = require('lodash');



module.exports = function (bundleName, destPath) {
    return function (filePath) {
        var args = _.extend(watchify.args, { debug: true });
        var b = watchify(browserify(filePath, args));
        b.transform(es6ify);
        b.on('update', function () {
            rebuild(b);
        });

        function rebuild (bundler) {
            gutil.log(gutil.colors.green('Building app bundle...'));
            return bundler.bundle()
                .on('error', gutil.log.bind(gutil, 'Browserify Error'))
                .pipe(source(bundleName))
                .pipe(gulp.dest(destPath));
        }

        return rebuild(b);
    };
};

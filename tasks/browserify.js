'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var es6ify = require('es6ify');
var _ = require('lodash');


// Modified on 20141107 so that the traceur runtime is included before anything else

module.exports = function (bundleName, destPath) {
    return function (filePath) {
        var args = _.extend(watchify.args, { debug: true });
        var b = watchify(browserify(args));
        b.add(es6ify.runtime);
        b.transform(es6ify);
        b.require(require.resolve('../' + filePath), { entry: true});
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

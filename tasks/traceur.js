var gulp = require('gulp');
var traceur = require('gulp-traceur');

gulp.task('build:lib', function () {
    return gulp.src(config.paths.js)
        .pipe(traceur({
            modules: 'commonjs',
            blockBinding: true
        }))
        .pipe(gulp.dest(config.paths.lib));
});

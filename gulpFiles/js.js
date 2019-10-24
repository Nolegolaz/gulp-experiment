'use strict';
const gulp = require('gulp');

function js(plugins, isDev) {
    return gulp.src('./dev/**/*.js')
        .pipe(plugins.if(!isDev, plugins.uglifyEs.default()))
        .pipe(plugins.if(!isDev, plugins.rev()))
        .pipe(gulp.dest('./public/'))
        .pipe(plugins.if(!isDev, plugins.rev.manifest('manifest-js.json', {merge: true})))
        .pipe(gulp.dest('./public/manifest/'))
};

module.exports = js;
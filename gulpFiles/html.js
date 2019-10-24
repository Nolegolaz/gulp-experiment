'use strict';
const gulp = require('gulp');

function html(plugins, isDev) {
    return gulp.src('./dev/**/*.html')
        .pipe(plugins.if(!isDev, plugins.htmlmin({ collapseWhitespace: true, removeComments: true })))
        .pipe(plugins.if(!isDev, plugins.revRewrite({manifest: gulp.src('./public/manifest/**/*.json', {allowEmpty: true})})))
        .pipe(gulp.dest('./public/'))
};

module.exports = html;
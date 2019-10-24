'use strict';
const gulp = require('gulp');

function img(plugins, isDev) {
    return gulp.src('./dev/img/**/*.*')
        .pipe(plugins.if(!isDev, plugins.imagemin()))
        .pipe(gulp.dest('./public/img/'))
};

module.exports = img;
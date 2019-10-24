'use strict';
const gulp = require('gulp');

function css(plugins, isDev) {
    return gulp.src('./dev/**/**.scss')
        .pipe(plugins.if(isDev, plugins.sourcemaps.init()))
        .pipe(plugins.concat('style.scss'))
        .pipe(plugins.sass({outputStyle: plugins.if(!isDev, 'compressed')}))
        .pipe(plugins.if(!isDev, plugins.rev()))
        .pipe(plugins.if(isDev, plugins.sourcemaps.write()))
        .pipe(gulp.dest('./public/'))
        .pipe(plugins.if(!isDev, plugins.rev.manifest('manifest-css.json', {merge: true})))
        .pipe(gulp.dest('./public/manifest/'))
};

module.exports = css;
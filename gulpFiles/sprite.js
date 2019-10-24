'use strict';
const gulp = require('gulp');

function sprite(plugins, isDev) {
    return gulp.src('./dev/svg/**/*.svg')
        .pipe(plugins.svgSprite({
            mode: {
                css: {
                    dest: '.',
                    bust: !isDev,
                    sprite: 'sprite.svg',
                    prefix: 'icon-',
                    dimensions: true,
                    render: {
                        scss: true,
                        dest: '.'
                    }
                }
            }
        }))
        .pipe(gulp.dest('./dev/sprite/'))
};

module.exports = sprite;
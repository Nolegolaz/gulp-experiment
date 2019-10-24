'use strict';
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const browserSync = require('browser-sync').create();

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'dev';


function returnFunc(name) { //функция чтоб в каждой зависимости не подключать 
    // gulp-load-plugins и не проводить проверку на разработку
    const requireFunc = require(`./gulpFiles/${name}`);

    let funcContainer = {[name]: function() {
        return requireFunc(plugins, isDevelopment)
    }};
    

    return funcContainer[name]
};

function watch() {
    gulp.watch('./dev/', gulp.series(returnFunc('del'), returnFunc('css'), 
                                     returnFunc('js'), returnFunc('img'),
                                     returnFunc('html')))

};

function serve() {
    browserSync.init({server: 'public'});
    browserSync.watch('dev/').on('change', browserSync.reload);
};

exports.css = returnFunc('css');
exports.html = returnFunc('html');
exports.js = returnFunc('js');
exports.del = returnFunc('del');
exports.img = returnFunc('img');
exports.sprite = returnFunc('sprite');
exports.build = gulp.series(returnFunc('del'), returnFunc('css'), 
                            returnFunc('js'), returnFunc('img'),
                            returnFunc('html'));
exports.dev = gulp.series(returnFunc('del'), returnFunc('css'), 
                            returnFunc('js'), returnFunc('img'),
                            returnFunc('html'),
                            gulp.parallel(watch, serve));
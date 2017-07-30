const fs = require('fs-extra')
const gulp = require('gulp');;
const runSequence = require('run-sequence').use(gulp);
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
const chalk = require('chalk');
const pump = require('pump');
const del = require('del');
const log = require('chalk');

gulp.task('js',()=>{
    return gulp.src('src/index.js')
            .pipe($.babel({
                presets: ['env']
            }))
            .pipe(gulp.dest('dist'))
});

gulp.task('clean',()=>{
    del(['dist/*']);
});

gulp.task('copy',()=>{
    fs.copy('dist/index.js','dist/index.min.js');
});

gulp.task('compress',()=>{
    pump([
        gulp.src('dist/index.min.js'),
        $.uglify(),
        $.stripDebug(),
        $.size(),
        gulp.dest('dist')
    ])
});

gulp.task('build',()=>{
    runSequence('clean','js','copy','compress');
});

gulp.task('default',()=>{
    gulp.watch('./src/index.js',['js']);
});
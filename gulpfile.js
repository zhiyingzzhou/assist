const fs = require('fs-extra')
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
const pump = require('pump');

gulp.task('js',()=>{
    gulp.src('src/index.js')
        .pipe($.babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('compress',()=>{
    fs.copy('dist/index.js','dist/index.min.js')
        .then(()=>{
            pump([
                gulp.src('dist/index.min.js'),
                $.uglify(),
                gulp.dest('dist')
            ])
        })
        .catch(err=>{
            console.error(err);
        });
});

gulp.task('default',()=>{
    gulp.watch('./src/index.js',['js']);
});
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();

gulp.task('js',()=>{
    gulp.src('src/index.js')
        .pipe($.babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default',()=>{
    gulp.watch('./src/index.js',['js']);
});
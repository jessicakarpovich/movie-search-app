// Requires
var gulp = require('gulp');
var sass = require('gulp-sass');
// Create method required by Browsersync
var browserSync = require('browser-sync').create();

gulp.task('scss', function() {
    return gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        
        // Make sure Browsersync runs after the css is finished compiling
        .pipe(browserSync.reload({
            stream:true
    }))
})

// Initiallize Browsersync
gulp.task('browser-sync', function(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
})

gulp.task('watch', ['browser-sync', 'scss'], function() {
    // glob watches for files and files inside folders
    gulp.watch('./scss/**/*.scss', ['scss'])
})
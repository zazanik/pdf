'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./styles/'));
});

gulp.task('sass:watch', ['sass'], function () {
    gulp.watch('./styles/**/*.scss', ['sass']);
});

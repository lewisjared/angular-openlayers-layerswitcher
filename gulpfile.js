'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('build', function() {
  return gulp.src('src/*.js')
    .pipe(concat('angular-openlayers-layerswitcher.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest('dist'))
    .pipe(rename('angular-openlayers-layerswitcher.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('stylesheets', function() {
  return gulp.src('src/*.css')
    .pipe(concat('angular-openlayers-layerswitcher.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('test', function() {
  return gulp.src('test/*.js');
});

gulp.task('default', ['build', 'stylesheets', 'test']);
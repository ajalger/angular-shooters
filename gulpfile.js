var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload'),
    plumber = require('gulp-plumber'),
    neat = require('node-neat').includePaths,
    myApp = require('./server/server.js');
// No need to load Bourbon here since Neat is included.
// I received errors when trying to load Bourbon by itself.
// Since Neat depends on Bourbon, loading Neat works just as well.

// I chose to write all the paths as variables to use throughout.
var express_port = 9000;
var express_root = __dirname + '/app';

var paths = {
    scss: 'app/stylesheets/scss/', // Stylesheets folder for SASS
    css: 'app/stylesheets/css/', // Stylesheets folder for CSS
    script: 'app/scripts/' // Scripts folder for JS files
};

// Default Loader for Gulp with all tasks loaded
gulp.task('default', ['express', 'styles', 'scripts', 'watch'], function() {});

// Gulp Task to Run Express Server
gulp.task('express', function() {
    myApp.listen(express_port);
});

// Gulp Task to SASS - Bourbon and Neat are Working
// Plumber Checks for Errors
gulp.task('styles', function() {
    return sass(paths.scss, {loadPath: [paths.scss].concat(neat)}) // Path to Stylesheets folder and files
        // Loading Bourbon and Neat
        // loadPath when using gulp-ruby-sass must be used
        .on('error', function(err) {
           console.error('Error!', err.message);
        })
        .pipe(plumber()) // Checks for any errors and notifies if there are
        .pipe(gulp.dest(paths.css)) // CSS destination where it is expanded
        .pipe(livereload()); // Reloading Gulp each time a change has been made
});

// Gulp Task to Check and Uglify Scripts
// Plumber Checks for Errors
gulp.task('scripts', function() {
    return gulp.src(paths.script + '**/*.js') // Path to Script folder
        .pipe(plumber()) // Checks for any errors and notifies if there are
        .pipe(uglify()) // Makes all scripts into a single line for minimizing file size
        .pipe(gulp.dest('../app/scripts/minjs')) // Puts files into and creates new Minjs folder
        .pipe(livereload()); // Reloading Gulp each time a change has been made
});

// Watching Folders and Files for Changes
gulp.task('watch', function() {
    var server = livereload(); // Livereload is loaded
    gulp.watch(paths.script + '**/*.js', ['scripts']); // Watching Scripts folder
    gulp.watch(paths.sass + '*.scss', ['styles']); // Watching Stylesheets folder
});



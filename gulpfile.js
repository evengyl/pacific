// déclaration des variables:
var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

var rename = require("gulp-rename");

var browserSync = require('browser-sync').create();

var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;


var image = require('gulp-image');

var autoprefixer = require('gulp-autoprefixer');


// ce qu'on fait avec les dépendances:

//moulinette a SCSS
gulp.task('moulinette-sass', function () {
    return gulp.src('./src/css/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({extname: ".min.css"}))
    .pipe(autoprefixer({cascade: false}))
    .pipe(gulp.dest('./dist/css'));
  });

//copier html
gulp.task('copier-html', function () {
    return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist'));
  });


// Watch scss AND html files, doing different things with each.
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./dist"
      }
  });
});

// Moulinette à JS
gulp.task('moulinette-js', function () {
  return pipeline(
        gulp.src('./src/js/*.js'),
        uglify(),
        rename({extname: ".min.js"}),
        gulp.dest('./dist/js/')
  );
});

//Moulinette a Images
gulp.task('compress-img', function () {
  gulp.src('./src/img/*')
    .pipe(image())
    .pipe(gulp.dest('./dist/img/'));
});



//commentiare







// exécuter tout l'bazarre:

gulp.task('execute', gulp.parallel('moulinette-sass','copier-html','browser-sync', 'moulinette-js','compress-img', function () {
    gulp.watch('./src/css/**/*.scss', gulp.series('moulinette-sass'));
    gulp.watch('./src/**/*.html', gulp.series('copier-html'));
    gulp.watch('./src/js/*.js', gulp.series('moulinette-js'));
    gulp.watch('./dist/*.html').on('change', browserSync.reload);
  gulp.watch('./dist/css/*.css').on('change', browserSync.reload);
  gulp.watch('./dist/js/*.js').on('change', browserSync.reload);
  


  })); 

gulp.task('default',gulp.parallel ('execute'));
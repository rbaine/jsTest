//*********** IMPORTS *****************
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var todo = require('gulp-todo');

// Lint Task
gulp.task('lint', function() {
   console.log('linting...');
   return gulp.src(['test.js'])
       .pipe(jshint())
       .pipe(jshint.reporter('default'));
});

// get filenames relative to project root (where your gulpfile is)
gulp.task('todo', function() {
   gulp.src('test.js').pipe(todo()).pipe(gulp.dest('./'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
   return gulp.src('test.js')
      //  .pipe(concat('main.js'))
       .pipe(uglify())
       .pipe(rename('test.min.js'))
       .pipe(gulp.dest('./'));

});

// Copy files to node server directory
gulp.task('copy', function(){
 // console.log('copying to prod/dev...');
 // gulp.src('*.html').pipe(gulp.dest('../server_app/html'));
 // gulp.src('css/*').pipe(gulp.dest('../server_app/html/css'));
 // gulp.src('img/*, !img/Thumbs.db').pipe(gulp.dest('../server_app/html/img'));
 // gulp.src('js/*').pipe(gulp.dest('../server_app/html/js'));
 // gulp.src('views/*').pipe(gulp.dest('../server_app/html/views'));
});

// Watch Files For Changes
gulp.task('watch', function() {
   gulp.watch('test.js', ['lint', 'todo', 'scripts']);
  //  gulp.watch('*.html', ['copy']);
  //  gulp.watch('css/*', ['copy']);
  //  gulp.watch('img/*', ['copy']);
  //  gulp.watch('views/*', ['copy']);
});

// Default Task
gulp.task('default', ['lint', 'todo', 'scripts', 'copy', 'watch']);

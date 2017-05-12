
var gulp = require('gulp'), 
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'), 
    imagemin = require('gulp-imagemin'),
    csso = require('gulp-csso'), 
    sass = require('gulp-sass'); 

gulp.task('sass', function () { 
	gulp.src('./assets/css/style.scss') 
		.pipe(sass().on('error', sass.logError)) 
		.pipe(csso()) 
		.pipe(gulp.dest('./public/css/')); 
});

gulp.task('js', function() {
    gulp.src([
            './assets/js/script.js'
        ]) 
        .pipe(concat('min.js')) 
        .pipe(uglify()) 
        .pipe(gulp.dest('./public/js/')) 
});

gulp.task('images', function() {
    gulp.src('.assets/img/**/*') 
        .pipe(imagemin()) 
        .pipe(gulp.dest('./public/img/')) 

});

gulp.task('watch', function () {
	
	gulp.watch('./assets/css/**/*.scss', ['sass']); 
	
	gulp.watch('./assets/js/**/*.js', ['js']);
	
	gulp.watch('./assets/img/**/*', ['images']);
});
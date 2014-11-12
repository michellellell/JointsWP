var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

var config = {
	
	style: 'library/scss/style.scss',
	watch: 'library/scss/**/*.scss'
};

gulp.task('sass', function() {
	
	return gulp.src(config.style)
		.pipe(sass({style: 'expanded'}))
		.pipe(gulp.dest('library/css/'));
});

gulp.task('watch', function() {
	
	gulp.watch(config.watch, ['sass']);
});
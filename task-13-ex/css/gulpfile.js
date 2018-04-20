const gulp = require('gulp');

gulp task('default', () => {
	return gulp.src('css/**/*.css')
	.pipe(postcss())
	.pipe(gulp.dest('./dest'));
});
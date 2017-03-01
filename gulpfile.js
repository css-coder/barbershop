// Подключаем Gulp и все необходимые библиотеки
var gulp 		= require('gulp'),
	browserSync = require('browser-sync');

// Обновление страниц сайта на локальном сервере
gulp.task('browser-sync', function() {
	browserSync({
		proxy: "barbershop.loc",
		notify: false
	});
});

// Наблюдение за файлами
gulp.task('watch', ['browser-sync'], function() {
	gulp.watch('*.html', browserSync.reload);
	gulp.watch('css/*.css', browserSync.reload);
	gulp.watch('js/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);

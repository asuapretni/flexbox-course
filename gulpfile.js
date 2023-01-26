var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('serve', function() {
  browserSync.init({
    browser: "google chrome", // browser: ["google chrome", "firefox"],
    server: {  
      baseDir: "./"
    }
  });

  gulp.watch("*.html").on("change", reload);
});
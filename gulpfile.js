var gulp = require("gulp"),
	watch= require("gulp-watch");

	gulp.task("default", function(){
		console.log("it started");
	});

	gulp.task("html",function(){
		console.log("changes saved in index.html");

	});

	gulp.task("style",function(){
		console.log("changes saved in CSS file");

	});

	gulp.task("watch", function(){
		watch("./app/index.html", function(){
			gulp.start("html");
		});

		watch("./app/assets/stylesheets/**/*.css", function(){
			gulp.start("style");
		})
	});
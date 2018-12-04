var gulp = require("gulp");
var sass = require("gulp-sass");
gulp.task("sass",function(){
    return gulp.src("src/css/style.css")
                .pipe( sass() )
                .pipe( rename("style1.css"))
                .pipe( gulp.dest("src/css"))
})
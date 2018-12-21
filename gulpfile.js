const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const ts = require('gulp-typescript');

gulp.task('sass', function() {
    gulp.src('app/template/sass/**/*.scss')
        .pipe(plumber())
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(autoprefixer())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('app/template/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('typescript', function() {
    var tsProject = ts.createProject('tsconfig.json', { noImplicitAny: true });
    var tsResult = gulp.src("app/template/ts/**/*.ts")
        .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest('app/template/js'));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/template/sass/**/*.scss', ['sass']);
    // gulp.watch('app/template/ts/**/*.ts', ['typescript']);
    gulp.watch('app/template/js/**/*.js', browserSync.reload);
    gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('default', ['watch']);

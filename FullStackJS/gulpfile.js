let gulp = require('gulp');
let LiveServer = require('gulp-live-server');
let browserSync = require('browser-sync');
let browserify = require('browserify');
let reactify = require('reactify');
let source = require('vinyl-source-stream');

// Start Live Stever
gulp.task('live-server', function() {
    let server = new LiveServer('server/main.js');
    server.start();
});

gulp.task('bundle', function() {
    return browserify({
        entries: 'app/main.jsx',
        debug: true,
    })
    .transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./.tmp'));
});

// Sync To Browser
gulp.task('serve', ['live-server'], function() {
    browserSync.init(null, {
        proxy: 'http://localhost:7777',
        port: 9001,
    });
});


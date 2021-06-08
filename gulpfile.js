const { src, dest, watch } = require('gulp');
const minifyCSS = require('gulp-clean-css'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    sass = require('gulp-sass'),
    gcmq = require('gulp-group-css-media-queries');

function watcher() {
    watch('sass/*.scss', css);
}

function css() {
    return src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gcmq())
        .pipe(postcss([
            autoprefixer({browsers : ['last 3 versions', '> 2%']})
        ]))
        //.pipe(minifyCSS())
        .pipe(dest('./css'));
}

exports.watch = watcher
exports.build = css
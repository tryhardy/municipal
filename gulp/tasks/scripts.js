const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');
const argv = require('yargs').argv;
const gulpif = require('gulp-if');
var concat = require('gulp-concat');


const scripts = [
  'node_modules/jquery/dist/jquery.min.js',
  'node_modules/slick-carousel/slick/slick.min.js',
  'dev/static/js/*.js'
];

// Работа со скриптами
module.exports = function script() {
  return gulp.src(scripts)
    // .pipe(eslint())
    // .pipe(eslint.format())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulpif(argv.prod, uglify()))
    .pipe(gulp.dest('dist/static/js/'));
};

"use strict";

import gulp from 'gulp';
import webpack from 'webpack-stream';
import browsersync from 'browser-sync';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import postcss from 'gulp-postcss';
import imagemin from 'gulp-imagemin';
import htmlmin from 'gulp-htmlmin';
import tailwindcss from 'tailwindcss';
const sass = gulpSass(dartSass);


// const dist = "../../../../js/OpenServer/domains/logo";
const dist = "./dist";

gulp.task("copy-html", () => {
  return gulp.src("./src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(dist))
    .pipe(browsersync.stream());
});

gulp.task("build-css", () => {
  return gulp.src("./src/css/*.css")
    .pipe(postcss([tailwindcss, autoprefixer]))
    .pipe(gulp.dest(dist))
    .pipe(browsersync.stream());
});

gulp.task("build-js", () => {
  return gulp.src("./src/js/main.js")
    .pipe(webpack({
      mode: 'development',
      output: {
        filename: 'script.js'
      },
      watch: false,
      devtool: "source-map",
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [['@babel/preset-env', {
                  debug: true,
                  corejs: 3,
                  useBuiltIns: "usage"
                }]]
              }
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest(dist))
    .on("end", browsersync.reload);
});

gulp.task('imagemin', function () {
  return gulp.src('./src/assets/img/**/*.*')
    .pipe(imagemin())
    // .pipe(gulp.dest('../../../js/OpenServer/domains/serviceManager/assets/img'));
    .pipe(gulp.dest('./dist/assets/img'));
});

gulp.task('iconsmin', function () {
  return gulp.src('./src/assets/icons/**/*.*')
    .pipe(imagemin())
    // .pipe(gulp.dest('../../../js/OpenServer/domains/serviceManager/assets/icons'));
    .pipe(gulp.dest('./dist/assets/icons'));
});

gulp.task("watch", () => {
  browsersync.init({
    server: "./dist/",
    port: 4000,
    notify: true
  });

  gulp.watch("./src/*.html", gulp.parallel("copy-html"));
  gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
  gulp.watch("./src/css/*.css", gulp.parallel("build-css"));
  gulp.watch("./src/assets/img/**/*.*", gulp.parallel("imagemin"));
  gulp.watch("./src/assets/icons/**/*.*", gulp.parallel("iconsmin"));
});

gulp.task("build", gulp.parallel("copy-html", "build-js", "build-css"));

gulp.task("prod", () => {

  return gulp.src("./src/js/main.js")
    .pipe(webpack({
      mode: 'production',
      output: {
        filename: 'script.js'
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [['@babel/preset-env', {
                  corejs: 3,
                  useBuiltIns: "usage"
                }]]
              }
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest(dist));
});

gulp.task("default", gulp.parallel("watch", "build"));
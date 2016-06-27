/**
 * Created by noahli on 16/6/23.
 */
'use strict';
var gulp = require('gulp')
  , inject = require("gulp-inject")
  , conf = require("./conf")
  , rename = require('gulp-rename')
  , url = require('url')
  , html2js = require('gulp-html2js')
  , proxy = require('proxy-middleware')
  , filter = require('filter-array')
  , ngAnnotate = require('gulp-ng-annotate')
  , concat = require('gulp-concat')
  , replace = require('gulp-replace')
  , md5 = require('gulp-md5')
  , uglify = require('gulp-uglify')
  , minifyCss = require('gulp-minify-css')
  , gzip = require('gulp-gzip')
  , htmlmin = require('gulp-htmlmin')
  , order = require('gulp-order');

gulp.task('start-build', ['manifest']);

gulp.task('start-local-build', ['local-manifest']);

//生产环境构建
gulp.task('build', function () {
  var bowerStyleSource = gulp.src(conf.filePathConf.bower.lib.css, {base: conf.paths.src + "/"})
    .pipe(order(conf.pluginOpt.order.css.lib))
    .pipe(concat("bower_lib_style.css"))
    .pipe(gulp.dest(conf.paths.dist + '/style/'))
    .pipe(minifyCss(conf.pluginOpt.minifyCssopt))
    .pipe(md5(12))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest(conf.paths.dist + '/style/'));

  var bowerScriptSource = gulp.src(conf.filePathConf.bower.lib.js, {base: conf.paths.src + "/"})
    .pipe(order(conf.pluginOpt.order.js.lib))
    .pipe(ngAnnotate())
    .pipe(concat('bower_lib_script.js'))
    .pipe(gulp.dest(conf.paths.dist + '/script/'))
    //.pipe(stripDebug())
    .pipe(uglify())
    .pipe(md5(12))
    .pipe(gulp.dest(conf.paths.dist + '/script/'));

  var applicationStyleSource = gulp.src(conf.filePathConf.static.css.application, {base: conf.paths.src + "/"})
    .pipe(order(conf.pluginOpt.order.css.application))
    .pipe(concat("application_style.css"))
    .pipe(gulp.dest(conf.paths.dist + '/style/'))
    .pipe(minifyCss(conf.pluginOpt.minifyCssopt))
    .pipe(md5(12))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest(conf.paths.dist + '/style/'));

  var applicationScriptSource = gulp.src(conf.filePathConf.static.js.application, {base: conf.paths.src + "/"})
    .pipe(order(conf.pluginOpt.order.js.application))
    .pipe(ngAnnotate())
    .pipe(concat('dest_application_script.js'))
    .pipe(gulp.dest(conf.paths.dist + '/script/'))
    //.pipe(stripDebug())
    .pipe(uglify())
    .pipe(md5(12))
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest(conf.paths.dist + '/script/'));

  var componentsStyleSource = gulp.src(conf.filePathConf.static.css.components, {base: conf.paths.src + "/"})
    .pipe(order(conf.pluginOpt.order.css.components))
    .pipe(concat("components_style.css"))
    .pipe(gulp.dest(conf.paths.dist + '/style/'))
    .pipe(minifyCss(conf.pluginOpt.minifyCssopt))
    .pipe(md5(12))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest(conf.paths.dist + '/style/'));

  var componentsScriptSource = gulp.src(conf.filePathConf.static.js.components, {base: "src/"})
    .pipe(order(conf.pluginOpt.order.js.components))
    .pipe(ngAnnotate())
    .pipe(concat('components_script.js'))
    .pipe(gulp.dest(conf.paths.dist + '/script/'))
    //.pipe(stripDebug())
    .pipe(uglify())
    .pipe(md5(12))
    .pipe(gulp.dest(conf.paths.dist + '/script/'));

  var applicationTemplate =
    gulp.src(conf.filePathConf.static.template)
      .pipe(html2js(conf.pluginOpt.html2js))
      .pipe(concat('dest_application_template.js'))
      .pipe(gulp.dest(conf.paths.dist + '/script/'))
      .pipe(uglify())
      .pipe(md5(10))
      .pipe(rename({extname: '.min.js'}))
      .pipe(gulp.dest(conf.paths.dist + '/script/'));

  return gulp.src('src/index-tpl.html')
    .pipe(inject(bowerScriptSource, conf.pluginOpt.inject.bower))
    .pipe(inject(bowerStyleSource, conf.pluginOpt.inject.bower))
    .pipe(inject(applicationScriptSource, conf.pluginOpt.inject.application))
    .pipe(inject(applicationStyleSource, conf.pluginOpt.inject.application))
    .pipe(inject(componentsScriptSource, conf.pluginOpt.inject.components))
    .pipe(inject(componentsStyleSource, conf.pluginOpt.inject.components))
    .pipe(inject(applicationTemplate, conf.pluginOpt.inject.template))
    .pipe(htmlmin(conf.pluginOpt.html))
    .pipe(md5(10))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(conf.paths.dist));

});

//本地构建
gulp.task('local-build', function () {
  var bowerStyleSource = gulp.src(conf.filePathConf.bower.lib.css, {base: conf.paths.src + "/"})
    .pipe(order(conf.pluginOpt.order.css.lib));

  var bowerScriptSource = gulp.src(conf.filePathConf.bower.lib.js, {base: conf.paths.src + "/"})
    .pipe(order(conf.pluginOpt.order.js.lib));

  var applicationScriptSource = gulp.src(conf.filePathConf.static.js.application, {base: conf.paths.src + "/"})
    .pipe(order(conf.pluginOpt.order.js.application));

  var applicationStyleSource = gulp.src(conf.filePathConf.static.css.application, {base: conf.paths.src + "/"})
    .pipe(order(conf.pluginOpt.order.css.application));

  var componentsScriptSource = gulp.src(conf.filePathConf.static.js.components, {base: conf.paths.src + "/"})
    .pipe(order(conf.pluginOpt.order.js.components));

  var componentsStyleSource = gulp.src(conf.filePathConf.static.css.components, {base: conf.paths.src + "/"})
    .pipe(order(conf.pluginOpt.order.css.components));

  return gulp.src('src/index-tpl.html')
    .pipe(inject(bowerScriptSource, conf.pluginOpt.inject.bower))
    .pipe(inject(bowerStyleSource, conf.pluginOpt.inject.bower))
    .pipe(inject(applicationScriptSource, conf.pluginOpt.inject.application))
    .pipe(inject(applicationStyleSource, conf.pluginOpt.inject.application))
    .pipe(inject(componentsScriptSource, conf.pluginOpt.inject.components))
    .pipe(inject(componentsStyleSource, conf.pluginOpt.inject.components))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(conf.paths.src));
});

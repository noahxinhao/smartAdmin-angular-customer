/**
 * Created by noahli on 16/6/23.
 */
'use strict';
var gulp = require('gulp')
  , conf = require("./conf")
  , inject = require("gulp-inject")
  , manifest = require('gulp-manifest')
  , url = require('url')
  , proxy = require('proxy-middleware')
  , filter = require('filter-array')
  , concat = require('gulp-concat')
  , replace = require('gulp-replace')
  , uglify = require('gulp-uglify')
  , gzip = require('gulp-gzip')
  , imagemin = require('gulp-imagemin')
  , htmlmin = require('gulp-htmlmin')
  , order = require('gulp-order');

gulp.task('other', ['fonts'], function () {
});

//处理字体文件
gulp.task('fonts',['images'], function () {
  return gulp.src(conf.filePathConf.static.fonts).pipe(gulp.dest(conf.paths.dist + '/fonts'));

});

//处理图片
gulp.task('images',['temporary'], function () {
  return gulp.src(conf.filePathConf.static.images).pipe(imagemin()).pipe(gulp.dest(conf.paths.dist + '/images/'));
});

//处理mock测试数据
gulp.task('temporary', function () {
  return gulp.src(conf.filePathConf.static.temporary).pipe(gulp.dest(conf.paths.dist + '/mock'));
});

//文件压缩
gulp.task('gzip', ['build', 'other'], function () {
  return gulp.src(conf.paths.dist + '/**/*.*')
    .pipe(gzip(conf.pluginOpt.gzip))
    .pipe(gulp.dest(conf.paths.dist + '/'));
});

//缓存设置
gulp.task('manifest', ['gzip'], function () {
  return gulp.src(conf.filePathConf.static.manifest.build, {base: conf.paths.dist + '/'})
    .pipe(manifest({
      hash: true,
      prefix: '/',
      filename: 'webApp.manifest',
      exclude: 'webApp.manifest',
      network: ['*']
    }))
    .pipe(gulp.dest(conf.paths.dist + '/manifest/'));
});

//缓存设置
gulp.task('local-manifest', ['local-build'],function () {
  return gulp.src(conf.filePathConf.static.manifest.local, {base: conf.paths.src + '/'})
    .pipe(manifest({
      hash: true,
      prefix: '/',
      filename: 'webApp.manifest',
      exclude: 'webApp.manifest',
      network: ['*']
    }))
    .pipe(gulp.dest(conf.paths.src + '/manifest/'));
});



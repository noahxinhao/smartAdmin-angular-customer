/**
 * Created by noahli on 16/6/23.
 */
'use strict';
var gulp = require('gulp'),
  proxy = require('proxy-middleware'),
  url = require('url'),
  util = require('gulp-util'),
  browserSync = require('browser-sync').create();

//静态服务器任务
gulp.task('serve', ['start-build', 'start-local-build'], function () {
  //代理配置
  var sysApi = url.parse('http://localhost:8080/rest/');
  sysApi.route = '/rest';

  var baseServerOpts = {
    server: {
      baseDir: "src/",
      index: "index.html",
      middleware: [proxy(sysApi)]
    }
  };

  if (util.env.env == 'pro') {
    baseServerOpts.server.baseDir = 'build/';
  }

  console.log("basic dir is " + baseServerOpts.server.baseDir);

  browserSync.init(baseServerOpts);

  gulp.watch(['./' + baseServerOpts.server.baseDir + '/**/*.*'], function () {
    if (util.env.env == 'pro') {
      gulp.run('build');
    } else {
      gulp.run('local-build');
    }
    browserSync.reload();
  });
});

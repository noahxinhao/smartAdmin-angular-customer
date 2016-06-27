/**
 * Created by noahli on 16/6/23.
 * 清理工作目录
 */
'use strict';
var gulp = require('gulp'),
  conf = require('./conf'),
  del = require('del');

//清理项目
gulp.task('clean', function () {
  del(conf.paths.dist);
  del(conf.paths.src + '/index.html');
});


/**
 * Created by noahli on 16/6/23.
 */
var gutil = require('gulp-util');

exports.console = function (str) {
  gutil.log(gutil.colors.green(str));
};

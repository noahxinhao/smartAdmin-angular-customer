/**
 * Created by noahli on 16/6/24.
 */
(function (angular) {
  'use strict';

  angular.module('app.directives').directive('fullScreen', fullScreen);
  function fullScreen() {
    return {
      restrict: 'A',
      link: function (scope, element) {
        var $body = $('body');
        var toggleFullSceen = function (e) {
          if (!$body.hasClass("full-screen")) {
            $body.addClass("full-screen");
            if (document.documentElement.requestFullscreen) {
              document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
              document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
              document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
              document.documentElement.msRequestFullscreen();
            }
          } else {
            $body.removeClass("full-screen");
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
            }
          }
        };

        element.on('click', toggleFullSceen);

      }
    }
  }
})(angular);

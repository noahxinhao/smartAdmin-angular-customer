/**
 * Created by noahli on 16/6/24.
 */
(function (angular) {
  'use strict';

  angular.module('app.directives').directive('minifyMenu', minifyMenu);
  angular.module('app.directives').directive('toggleMenu', toggleMenu);

  function minifyMenu() {
    return {
      restrict: 'A',
      link: function (scope, element) {
        var $body = $('body');
        var minifyMenu = function () {
          if (!$body.hasClass("menu-on-top")) {
            $body.toggleClass("minified");
            $body.removeClass("hidden-menu");
            $('html').removeClass("hidden-menu-mobile-lock");
          }
        };

        element.on('click', minifyMenu);
      }
    }
  }

  function toggleMenu() {
    return {
      restrict: 'A',
      link: function (scope, element) {
        var $body = $('body');

        var toggleMenu = function () {
          if (!$body.hasClass("menu-on-top")) {
            $('html').toggleClass("hidden-menu-mobile-lock");
            $body.toggleClass("hidden-menu");
            $body.removeClass("minified");
          } else if ($body.hasClass("menu-on-top") && $body.hasClass("mobile-view-activated")) {
            $('html').toggleClass("hidden-menu-mobile-lock");
            $body.toggleClass("hidden-menu");
            $body.removeClass("minified");
          }
        };

        element.on('click', toggleMenu);

        scope.$on('requestToggleMenu', function () {
          toggleMenu();
        });
      }
    }
  }
})(angular);

/**
 * Created by noahli on 16/6/24.
 */
(function (angular) {
  'use strict';

  angular.module('app.directives').directive('renderFinish', renderFinish);
  function renderFinish($timeout) {
    return {
      restrict: 'A',
      link: function (scope, element, attr) {
        if (scope.$last === true) {
          $timeout(function () {
            scope.$emit('MENU_RENDER_FINISH');
          });
        }
      }
    };
  }
})(angular);

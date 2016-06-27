/**
 * Created by noahli on 16/6/24.
 */
(function (angular) {
  'use strict';

  angular.module('app.controllers').controller('mainCtrl', mainCtrl);

  function mainCtrl($scope, APP_MENU) {
    var vm = this;
    vm.menu = APP_MENU.aside.nav;

    //初始化侧边栏
    vm.initMenu = function () {
      $scope.$on("MENU_RENDER_FINISH", function (ngRepeatFinishedEvent) {
        //下面是在table render完成后执行的js
        $('nav ul').jarvismenu({
          accordion: true,
          speed: true,
          closedSign: '<em class="fa fa-plus-square-o"></em>',
          openedSign: '<em class="fa fa-minus-square-o"></em>'
        });
      });
    };

    vm.minifyMenu = function (e) {
      if (!$.root_.hasClass("menu-on-top")) {
        $.root_.toggleClass("minified");
        $.root_.removeClass("hidden-menu");
        $('html').removeClass("hidden-menu-mobile-lock");
        $this.effect("highlight", {}, 500);
      }
      e.preventDefault();
    };

    vm.initMenu();
  }
})(angular);

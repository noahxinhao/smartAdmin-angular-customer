/**
 * Created by noahli on 16/6/24.
 */
(function (angular) {
  'use strict';

  angular.module('app.router').config(routeConfig);

  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        templateUrl: 'templates/main/basic.html',
        controller: "mainCtrl",
        controllerAs: "main"
      })
      .state('app.main', {
        url: '/main',
        views: {
          "content": {
            templateUrl: 'templates/main/main.html'
          }
        }
      });
    $urlRouterProvider.otherwise('app/main');
  }
})(angular);

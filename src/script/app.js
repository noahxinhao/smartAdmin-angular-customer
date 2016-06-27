(function (angular) {
  'use strict';

  angular.module('app.router', []);
  angular.module('app.config', []);
  angular.module('app.interceptor', []);
  angular.module('app.constants', []);
  angular.module('app.services', []);
  angular.module('app.factory', []);
  angular.module('app.filters', []);
  angular.module('app.controllers', []);
  angular.module('app.directives', []);
  angular.module('app.components', []);

  angular
    .module('app',
    [
      'ngResource',
      'ui.bootstrap',
      'ui.router',
      'toastr',

      'app.config',
      'app.router',
      'app.constants',
      'app.services',
      'app.factory',
      'app.controllers',
      'app.filters',
      'app.interceptor',
      'app.directives',
      'app.components'
    ])
    .constant('APP_CONFIG', window.appConfig)
    .run(function () {

    });
})(angular);

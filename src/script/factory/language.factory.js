///**
// * Created by noahli on 16/6/25.
// */
//(function (angular) {
//  'use strict';
//
//  angular.module('app.factory').factory('Language', Language);
//
//  function Language($http, APP_CONFIG) {
//    function getLanguage(key, callback) {
//
//      $http.get(APP_CONFIG.apiRootUrl + '/langs/' + key + '.json').success(function (data) {
//
//        callback(data);
//
//      }).error(function () {
//
//        $log.log('Error');
//        callback([]);
//
//      });
//
//    }
//
//    function getLanguages(callback) {
//
//      $http.get(APP_CONFIG.apiRootUrl + '/languages.json').success(function (data) {
//
//        callback(data);
//
//      }).error(function () {
//
//        $log.log('Error');
//        callback([]);
//
//      });
//
//    }
//
//    return {
//      getLang: function (type, callback) {
//        getLanguage(type, callback);
//      },
//      getLanguages: function (callback) {
//        getLanguages(callback);
//      }
//    }
//  }
//})(angular);

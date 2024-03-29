'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'CastItCtrl'
      })
      .when('/swipe', {
        templateUrl: 'views/swipe.html',
        controller: 'SwipeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

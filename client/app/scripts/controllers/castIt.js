'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CastItCtrl', function ($scope) {
    $scope.header = 'Headshot Swiper';

    $scope.cards = [
      {name: 'foo'},
      {name: 'bar'}
    ];
    $scope.remove = function (index) {
        $scope.cards.splice(index, 1);
    };
    $scope.add = function (name) {
        $scope.cards.push({name: name});
    };
  });

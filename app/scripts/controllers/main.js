'use strict';

/**
 * @ngdoc function
 * @name apresentacaoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the apresentacaoApp
 */
angular.module('apresentacaoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

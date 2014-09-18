'use strict';

/**
 * @ngdoc function
 * @name ambmgmtApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ambmgmtApp
 */
angular.module('ambmgmtApp')
  .controller('MainCtrl', ['$scope', 'Tour', 
    function ($scope, Tour) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.foo = Tour.someMethod();
  }]);

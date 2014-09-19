'use strict';

/**
 * @ngdoc function
 * @name ambmgmtApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ambmgmtApp
 */
angular.module('ambmgmtApp')
  .controller('MainCtrl', ['$scope', 'Tour', 'Party',
    function ($scope, Tour, Party) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.foo = Tour.someMethod();
    $scope.bar = Tour.anotherMethod();

    $scope.uriel = Party.get();

  }]);

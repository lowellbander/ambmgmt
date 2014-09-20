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

    $scope.parties = Party.get();

  }]);

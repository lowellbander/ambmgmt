'use strict';

/**
 * @ngdoc function
 * @name ambmgmtApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ambmgmtApp
 */
angular.module('ambmgmtApp')
  .controller('MainCtrl', ['$scope', '$log', '$filter', 'Tour', 'Party',
    function ($scope, $log, $filter, Tour, Party) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.parties = Party.get();

    $scope.copy = function (party) {
        $scope.snippet = '';
        $scope.snippet += 'When: ' + $filter('date')(party.date, 'EEEE, MMM. d @ h a') + '\n';
        $scope.snippet += 'Who: ' + party.name + '\n';
        $scope.snippet += 'Email: ' + party.email + '\n';
        $scope.snippet += 'Phone: ' + party.phone + '\n';
        $scope.snippet += 'Major of Interest: ' + party.majors_of_interest + '\n';
        $scope.snippet += 'Comment: ' + party.comments+ '\n';
        $scope.snippet += 'How Many: ' + party.nVisitors+ '\n';
        $log.log($scope.snippet);
    };

  }]);

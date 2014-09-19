'use strict';

/**
 * @ngdoc service
 * @name ambmgmtApp.Party
 * @description
 * # Party
 * Factory in the ambmgmtApp.
 */
angular.module('ambmgmtApp')
  .factory('Party', ['$resource', 
    function ($resource) {
        return $resource('http://amb-clerk.herokuapp.com/tour/');

  }]);

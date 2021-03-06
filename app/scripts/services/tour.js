'use strict';

/**
 * @ngdoc service
 * @name ambmgmtApp.Tour
 * @description
 * # Tour
 * Factory in the ambmgmtApp.
 */
angular.module('ambmgmtApp')
  .factory('Tour', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
        anotherMethod: function(){
            return 'monkeys';
        },
    };
  });

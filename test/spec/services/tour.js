'use strict';

describe('Service: Tour', function () {

  // load the service's module
  beforeEach(module('ambmgmtApp'));

  // instantiate service
  var Tour;
  beforeEach(inject(function (_Tour_) {
    Tour = _Tour_;
  }));

  it('should do something', function () {
    expect(!!Tour).toBe(true);
  });

});

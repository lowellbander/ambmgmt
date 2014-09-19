'use strict';

describe('Service: Party', function () {

  // load the service's module
  beforeEach(module('ambmgmtApp'));

  // instantiate service
  var Party;
  beforeEach(inject(function (_Party_) {
    Party = _Party_;
  }));

  it('should do something', function () {
    expect(!!Party).toBe(true);
  });

});

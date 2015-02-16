'use strict';

describe('Service: Activities', function () {

  // load the service's module
  beforeEach(module('stravamapsApp'));

  // instantiate service
  var Activities;
  beforeEach(inject(function (_activities_) {
    Activities = _activities_;
  }));

  it('should do something', function () {
    expect(!!Activities).toBe(true);
  });

});

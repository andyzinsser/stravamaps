'use strict';

describe('Controller: ActivitiesCtrl', function () {

  // load the controller's module
  beforeEach(module('stravamapsApp'));

  var ActivitiesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActivitiesCtrl = $controller('ActivitiesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

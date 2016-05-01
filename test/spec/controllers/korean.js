'use strict';

describe('Controller: KoreanCtrl', function () {

  // load the controller's module
  beforeEach(module('virtualKeyboardWithAngularApp'));

  var KoreanCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KoreanCtrl = $controller('KoreanCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(KoreanCtrl.awesomeThings.length).toBe(3);
  });
});

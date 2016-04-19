'use strict';

describe('Directive: keyboard', function () {

  // load the directive's module
  beforeEach(module('virtualKeyboardWithAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<keyboard></keyboard>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the keyboard directive');
  }));
});

'use strict';

describe('Service: translator', function () {

  // load the service's module
  beforeEach(module('virtualKeyboardWithAngularApp'));

  // instantiate service
  var translator;
  beforeEach(inject(function (_translator_) {
    translator = _translator_;
  }));

  it('should do something', function () {
    expect(!!translator).toBe(true);
  });

});

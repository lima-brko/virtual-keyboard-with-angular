'use strict';

describe('Service: korean', function () {

  // load the service's module
  beforeEach(module('virtualKeyboardWithAngularApp'));

  // instantiate service
  var korean;
  beforeEach(inject(function (_korean_) {
    korean = _korean_;
  }));

  it('should do something', function () {
    expect(!!korean).toBe(true);
  });

});

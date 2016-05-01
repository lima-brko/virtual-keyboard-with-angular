'use strict';

/**
 * @ngdoc directive
 * @name virtualKeyboardWithAngularApp.directive:display
 * @description
 * # display
 */
angular.module('virtualKeyboardWithAngularApp')
  .directive('display', function (korean) {
    return function (scope, element) {
      // Bind textarea to listen keydown and keypress
      element.bind("keydown keypress", function (e) {
        korean.setModChars(e);
        if(korean.activateKey(e.currentTarget, (e.keyCode) ? e.keyCode : e.which, 'keydown')) {
          e.preventDefault();
        }
      });

      element.bind("paste", function(){
            console.log(element.val());
      });

      // Bind textarea to listen keyup
      element.bind("keyup", function (e) {
        korean.setModChars(e);
        if(korean.activateKey(e.currentTarget, (e.keyCode) ? e.keyCode : e.which, 'keyup')) {
          e.preventDefault();
        }
      });
    };
});

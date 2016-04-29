'use strict';

/**
 * @ngdoc directive
 * @name virtualKeyboardWithAngularApp.directive:display
 * @description
 * # display
 */
angular.module('virtualKeyboardWithAngularApp')
  .directive('display', function () {
    return function (scope, element) {

        element.bind("keydown keypress", function (e) {
          e.preventDefault();
          var key = (e.keyCode) ? e.keyCode : e.which;
          scope.find('.key' + key).addClass('keydown');
          console.log(key);
        });

        element.bind("keyup", function (e) {
          e.preventDefault();
          var key = (e.keyCode) ? e.keyCode : e.which;
          scope.find('.key' + key).removeClass('keydown');
        });
    };
});

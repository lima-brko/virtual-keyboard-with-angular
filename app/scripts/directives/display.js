'use strict';

/**
 * @ngdoc directive
 * @name virtualKeyboardWithAngularApp.directive:display
 * @description
 * # display
 */
angular.module('virtualKeyboardWithAngularApp')
  .directive('display', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (e) {
            e.preventDefault();
            var key = (e.keyCode) ? e.keyCode : e.which;
            $('.key.c' + key).addClass('keydown');
            console.log(key);
        });
        
        element.bind("keyup", function (e) {
            e.preventDefault();
            var key = (e.keyCode) ? e.keyCode : e.which;
            $('.key.c' + key).removeClass('keydown');
        });
    };
});

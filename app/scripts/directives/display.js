'use strict';

/**
 * @ngdoc directive
 * @name virtualKeyboardWithAngularApp.directive:display
 * @description
 * # display
 */
angular.module('virtualKeyboardWithAngularApp')
  .directive('display',function () {
    return function (scope, element) {

      element.bind("keydown keypress", function (e) {
        e.preventDefault();

        changeKeyActive(e, true);
      });

      element.bind("keyup", function (e) {
        e.preventDefault();
        changeKeyActive(e, false);
      });

      /**
       * Insert translated char to textarea
       * @param {event} e
       * @param {boolean} keyDown
       */
      function changeKeyActive(e, keyDown){
        var key = (e.keyCode) ? e.keyCode : e.which,
          ctrlKey = e.ctrlKey,
          shiftKey = e.shiftKey,
          altKey = e.altKey,
          keyString = key.toString();

        scope.macChars['bottom'][3].active = ctrlKey;
        scope.macChars['bottom'][5].active = ctrlKey;
        scope.macChars['zxcvb'][0].active = shiftKey;
        scope.macChars['zxcvb'][11].active = shiftKey;
        scope.macChars['bottom'][2].active = altKey;
        scope.macChars['bottom'][6].active = altKey;

        Loop1:
          for(var row in scope.macChars){
            Loop2:
              for(var i = 0, l = scope.macChars[row].length; i < l; i++){
                if(scope.macChars[row][i].keyCode === keyString){
                  scope.macChars[row][i].active = keyDown;
                  break Loop1;
                }
              }
          }

        insertChar(e.currentTarget, scope.macChars[row][i].s);
        scope.$apply();
      }

      /**
       * Insert korean char to the textarea
       * @param {object} textarea
       * @param {string} char
       */
      function insertChar(textarea, char) {
          var start = getSelectionStart(textarea),
              end = getSelectionEnd(textarea),
              len = textarea.value.length;

          textarea.value = textarea.value.substring(0, start) + char + textarea.value.substring(end, len);
          setCaretPosition(textarea, start + char.length, 0);
      }

      function getSelectionStart(textarea) {
        textarea.focus();
        return textarea.selectionStart
      };

      function getSelectionEnd(textarea) {
        textarea.focus();
        return a.selectionEnd
      };

      function setCaretPosition(b, d, a) {
        var c = b.value.length;
        if (d > c) {
          d = c
        }
        if (d + a > c) {
          a = c - a
        }
        b.focus();
        if (b.setSelectionRange) {
          b.setSelectionRange(d, d + a)
        } else {
          if (b.createTextRange) {
            var f = b.createTextRange();
            f.collapse(true);
            f.moveEnd("character", d + a);
            f.moveStart("character", d);
            f.select()
          }
        }
        b.focus()
      };
    };
});

'use strict';

/**
 * @ngdoc directive
 * @name virtualKeyboardWithAngularApp.directive:display
 * @description
 * # display
 */
angular.module('virtualKeyboardWithAngularApp')
  .directive('display',function (korean) {
    return function (scope, element) {

      // Bind textarea to listen keydown and keypress
      element.bind("keydown keypress", function (e) {
        activateKey(e, true);
      });

      // Bind textarea to listen keyup
      element.bind("keyup", function (e) {
        activateKey(e, false);
      });

      /**
       * Insert translated char to textarea
       * @param {Event} e
       * @param {Boolean} keyDown
       */
      function activateKey(e, keyDown) {
        var key = (e.keyCode) ? e.keyCode : e.which,
          keyString = key.toString(),
          ctrlKey = e.ctrlKey,
          shiftKey = e.shiftKey,
          altKey = e.altKey,
          textarea = e.currentTarget,
          char;

        scope.macChars['bottom'][3].active = ctrlKey;
        scope.macChars['bottom'][5].active = ctrlKey;
        scope.macChars['zxcvb'][0].active = shiftKey;
        scope.macChars['zxcvb'][11].active = shiftKey;
        scope.macChars['bottom'][2].active = altKey;
        scope.macChars['bottom'][6].active = altKey;

        // If shiftKey pressed, show modified chars
        scope.modOn = shiftKey;

        // If delete or backspace turn in keyCode 46
        if(key === 8 || key === 46) {
          key = 46;
          keyString = "46";
        }

        // Activate or deactivate key in layout
        Loop1:
          for (var row in scope.macChars) {
            Loop2:
              for (var i = 0, l = scope.macChars[row].length; i < l; i++) {
                if (scope.macChars[row][i].keyCode === keyString) {
                  scope.macChars[row][i].active = keyDown;

                  if(shiftKey && scope.macChars[row][i].m !== ''){
                    char = scope.macChars[row][i].m;
                    break Loop1;
                  }

                  if(scope.macChars[row][i].s !== ''){
                    char = scope.macChars[row][i].s;
                    break Loop1;
                  }

                  char = scope.macChars[row][i].p;
                  break Loop1;
                }
              }
          }

        if (!keyDown) {
          scope.$apply();
          return true;
        }

        // Execute key`s effect
        switch (key) {
          case 46: // backspace
            if(textarea.value.length > 0) {
              e.preventDefault();
              var lastChar = korean.deleteChar(textarea, 1, 0);
              korean.backspace(textarea, lastChar);
            }
            break;
          case 16: // shift
            break;
          default:
            if(char) {
              e.preventDefault();
              korean.insertChar(textarea, char);
              var lastChar = korean.deleteChar(textarea, 2, 0);
              korean.insertChar(textarea, korean.composeKorean(lastChar));
            }
            break;
        }
        scope.$apply();
      }
    };
});

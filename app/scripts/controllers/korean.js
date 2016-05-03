'use strict';

/**
 * @ngdoc function
 * @name virtualKeyboardWithAngularApp.controller:KoreanCtrl
 * @description
 * # KoreanCtrl
 * Controller of the virtualKeyboardWithAngularApp
 */
angular.module('virtualKeyboardWithAngularApp')
    .controller('KoreanCtrl', ['$scope', '$rootScope', '$timeout', 'korean', 'translator', function($scope, $rootScope, $timeout, korean, translator) {

    var textarea = document.getElementById('language_display'),
        timeoutTranslate;

    $scope.keyboard = korean;
    $scope.keyboardDisplay = korean.getDisplayText();
    $scope.translatedDisplay = '';
    $scope.translator = translator;

    $scope.$watch(
      function(){ return korean.getDisplayText(); },
      function(text) {
        $scope.keyboardDisplay = text;

        // Translate after text change
        $timeout.cancel(timeoutTranslate);
        timeoutTranslate = $timeout(function(){
          if(korean.getDisplayText().length === 0) {
            $scope.translatedDisplay = '';
            return;
          }
          $scope.translatedDisplay = $scope.translatedDisplay + '...';
          translator.translateText(encodeURI(korean.getDisplayText())).then(function(translatedText) {
            $scope.translatedDisplay = translatedText;
          });
        }, 2000);
      }
    );

    // Add char when click on keys
    $scope.charClick = function($event, keyCode){
      var key = parseInt(keyCode);
      $timeout(function() {
        if(key === 16){
          korean.setModOn(!korean.getModCaps());
          korean.setModCaps(!korean.getModCaps());
          $rootScope.$apply();
          return;
        }
        korean.activateKey(textarea, parseInt(keyCode), 'click');
      });
    };
}]);

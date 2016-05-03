'use strict';

/**
 * @ngdoc function
 * @name virtualKeyboardWithAngularApp.controller:KoreanCtrl
 * @description
 * # KoreanCtrl
 * Controller of the virtualKeyboardWithAngularApp
 */
angular.module('virtualKeyboardWithAngularApp')
    .controller('KoreanCtrl', ['$scope', '$rootScope', '$timeout', 'languages', 'korean', 'translator', function($scope, $rootScope, $timeout, languages, korean, translator) {

    var textarea = document.getElementById('language_display'),
        timeoutTranslate;

    $scope.keyboard = korean;
    $scope.keyboardDisplay = korean.getDisplayText();
    $scope.translatedDisplay = '';
    $scope.translator = translator;
    $scope.languages = languages;

    // Check if textarea has some change
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
          translator.translateText(encodeURI(korean.getDisplayText()), languages.getSourceLanguageAcronym(), languages.getTargetLanguageAcronym()).then(function(translatedText) {
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

    // Change language activated and verify if has Keyboard
    $scope.setLanguage = function(origin, languageAcronym){
      languages.setLanguage(origin, languageAcronym);
    }
}]);

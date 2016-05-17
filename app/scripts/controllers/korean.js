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

    /**
     * Check if textarea has some change
     */
    $scope.$watch(
      function(){ return korean.getDisplayText(); },
      function(text) {
        $scope.keyboardDisplay = text;

        // Translate after text change
        $timeout.cancel(timeoutTranslate);
        timeoutTranslate = $timeout(function(){
          $scope.updateTranslatedText();
        }, 2000);
      }
    );

    /**
     * Add char when click on keys
     * @param {Click Event} $event
     * @param {String} keyCode
     */
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

    /**
     * Change language activated and verify if has Keyboard
     * @param {String} origin
     * @param {String} languageAcronym
     */
    $scope.setLanguage = function(origin, languageAcronym){
      languages.setLanguage(origin, languageAcronym);
      $scope.updateTranslatedText();
    };

    /**
     * Change the active API and update the current text translation
     * @param {String} APIName
     */
    $scope.setAPI = function(APIName){
      translator.setActiveAPI(APIName);
      $scope.updateTranslatedText();
    };

    /**
     * Update the text translated
     */
    $scope.updateTranslatedText = function(){
      if(korean.getDisplayText().length === 0) {
        $scope.translatedDisplay = '';
        return;
      }

      $scope.translatedDisplay = $scope.translatedDisplay + '...';
      translator.translateText(encodeURI(korean.getDisplayText()), languages.getSourceLanguageAcronym(), languages.getTargetLanguageAcronym()).then(function(translatedText) {
        $scope.translatedDisplay = translatedText;
      });
    };
    
    /**
     * Share facebook feed
     */
    $scope.shareTranslated = function() {
      var description = 'Korean: '+korean.getDisplayText() + ' Translated: ' + $scope.translatedDisplay;
      if(korean.getDisplayText() === '') {
        description = 'Write your text now...';
      }
      
      FB.ui({
        method: 'feed',
        link: 'https://studykoreanonline.com/translator',
        caption: 'Virtual Keyboard and Translator',
        picture: 'http://studykoreanonline.com/img/sko.png',
        description: description
      }, function(response){
        console.log('Text shared.');
      });
    };
}]);

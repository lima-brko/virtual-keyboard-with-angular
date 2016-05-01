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
    $scope.translateApis = [{name: 'Yandex', active:true}, {name: 'Systran',active:false}];

    $scope.$watch(
      function(){ return korean.getDisplayText(); },
      function(text) {
        $scope.keyboardDisplay = text;
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

    /**
     * Activate API
     * @param {String} apiName
     */
    $scope.activateApi = function(apiName) {
      $scope.translateApis.forEach(function(item){
        item.active = false;
        if(item.name === apiName) {
          item.active = true;
        }
      });
    }

    // Translate after text change
    $scope.$watch('keyboardDisplay', function() {
      $timeout.cancel(timeoutTranslate);
      timeoutTranslate = $timeout(function(){
        if(korean.getDisplayText().length === 0) {
          $scope.translatedDisplay = '';
          return;
        }
        $scope.translatedDisplay = $scope.translatedDisplay + '...';

        $scope.translateApis.forEach(function(item){
          if(item.active) {
            translator.text(item.name, 'ko', 'en', encodeURI(korean.getDisplayText())).then(function(translatedText) {
              $scope.translatedDisplay = translatedText;
            });
          }
        });
      }, 2000);
    });
}]);

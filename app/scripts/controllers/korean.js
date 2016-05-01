'use strict';

/**
 * @ngdoc function
 * @name virtualKeyboardWithAngularApp.controller:KoreanCtrl
 * @description
 * # KoreanCtrl
 * Controller of the virtualKeyboardWithAngularApp
 */
angular.module('virtualKeyboardWithAngularApp')
    .controller('KoreanCtrl', ['$scope', '$rootScope', '$http', '$timeout', 'korean', function($scope, $rootScope, $http, $timeout, korean) {

    var textarea = document.getElementById('language_display'),
        timeoutTranslate;

    $scope.keyboard = korean;
    $scope.keyboardDisplay = korean.getDisplayText();

    $scope.$watch(
      function(){ return korean.getDisplayText() },

      function(newVal) {
        $scope.keyboardDisplay = newVal;
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

    $scope.$watch('keyboardDisplay', function() {
      $timeout.cancel(timeoutTranslate);
      timeoutTranslate = $timeout(function(){
        if(korean.getDisplayText().length > 0) {
          //$http.get('https://www.googleapis.com/language/translate/v2?key=AIzaSyAoLHm4soXlBuYolVKLrTapBo8iWPhZd8A&source=kr&target=en&q=' + encodeURI(korean.getDisplayText()))
          //$http.get('http://api.microsofttranslator.com/v2/Http.svc/Translate?appId=talktofill&from=ko&to=en'+
          //  '&text=' + encodeURI(korean.getDisplayText()))
          $http.get('https://translate.yandex.net/api/v1.5/tr.json/translate ?'+
            'key=trnsl.1.1.20160501T185803Z.96bf64b58cb32f24.0efa272d3bdb65f158cabeb0b14faf319b33a42b'+
            '&lang=ko-en'+
            '&text=' + encodeURI(korean.getDisplayText())).then(function(response){
              $scope.translatedDisplay = response.data;
            });
        }
      }, 1000);
    });
}]);

'use strict';

/**
 * @ngdoc function
 * @name virtualKeyboardWithAngularApp.controller:KoreanCtrl
 * @description
 * # KoreanCtrl
 * Controller of the virtualKeyboardWithAngularApp
 */
angular.module('virtualKeyboardWithAngularApp')
    .controller('KoreanCtrl', ['$scope', '$rootScope', '$timeout', 'korean', function($scope, $rootScope, $timeout, korean) {

    var textarea = document.getElementById('language_display');

    // Bind textarea value to show korean text
    $scope.keyboard = korean;

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

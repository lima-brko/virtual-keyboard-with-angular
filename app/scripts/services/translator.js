'use strict';

/**
 * @ngdoc service
 * @name virtualKeyboardWithAngularApp.translator
 * @description
 * # translator
 * Service in the virtualKeyboardWithAngularApp.
 */
angular.module('virtualKeyboardWithAngularApp')
  .service('translator', ['$rootScope', '$http', '$q', function ($rootScope, $http, $q) {
    var APIs = [
        {name: 'Yandex'},
        {name: 'Systran'}
      ],
      api = 0;

    /**
     * Set API to use in translation
     * @param {String} name
     */
    this.setActiveAPI = function(name) {
      APIs.forEach(function(item, i){
        if(item.name === name) {
          api = i;
        }
      });
    };

    /**
     * Get active API using in translation
     * @returns {string|string}
     */
    this.getActiveAPIName = function() {
      return APIs[api].name;
    };

    /**
     * Get Available APIs to translate
     * @returns {*[]}
     */
    this.getTranslateAPIs = function() {
      return APIs;
    };

    /**
     * Translate a Text to sent language
     * @param {String} text
     * @param {String} source
     * @param {String} target
     * @returns {Function|promise}
     */
    this.translateText = function(text, source, target){

      if(!text.length) {
        return false;
      }

      var translation = '',
          deferred = $q.defer();

      switch(this.getActiveAPIName()){
        case 'Yandex':
          $http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?'+
            'key=trnsl.1.1.20160501T185803Z.96bf64b58cb32f24.0efa272d3bdb65f158cabeb0b14faf319b33a42b'+
            '&lang='+source+'-' + target +
            '&text=' + text).then(function(response){
            response.data.text.forEach(function(word, i){
              if(i === 0) {
                translation = word;
                return;
              }
              translation = ' ' + word;
            });
            deferred.resolve(translation);
          });
          break;
        case 'Systran':
          $http({
            method: 'GET',
            url: 'https://api-platform.systran.net/translation/text/translate?key=d562b125-b921-4def-a1a3-8a915a6701d9&source='+source+'&target='+target+'&input='+text,
            dataType: 'text'
          }).then(function(response){
            response.data.outputs.forEach(function(word, i){
              if(i === 0) {
                translation = word.output;
                return;
              }
              translation = ' ' + word.output;
            });
            deferred.resolve(translation);
          });
          break;
        default:
          // Any default translator API
          break;
      }

      return deferred.promise;
    };
  }]);

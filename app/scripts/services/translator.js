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
    var APIs = [{name: 'Yandex'}, {name: 'Systran'}],
        languages =  [{name: 'Korean', acronym: 'ko'}, {name: 'English',acronym: 'en'}],
        source = 0,
        target = 1,
        api = 0;

    this.setActiveAPI = function(name) {
      APIs.forEach(function(item, i){
        if(item.name === name) {
          api = i;
        }
      });
    };

    this.getActiveAPIName = function() {
      return APIs[api].name;
    };

    this.getTranslateAPIs = function() {
      return APIs;
    };

    this.getSourceLanguageName = function() {
      return languages[source].name;
    };

    this.getTargetLanguageName = function() {
      return languages[target].name;
    };

    this.getLanguages = function() {
      return languages;
    };

    this.changeLanguage = function(origin, languageAcronym) {
      var index;
      for(var i = 0, l = languages.length; i < l; i++){
        if(languages[i].acronym === languageAcronym) {
          index = i;
          break;
        }
      }
      if(origin === 'source') {
        if(i === target) {
          target = source;
        }
        source = i;
      }
      if(origin === 'target') {
        if(i === source) {
          source = target;
        }
        target = i;
      }
    };

    this.translateText = function(text){
      var translation = '',
          deferred = $q.defer();

      switch(this.getActiveAPIName()){
        case 'Yandex':
          $http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?'+
            'key=trnsl.1.1.20160501T185803Z.96bf64b58cb32f24.0efa272d3bdb65f158cabeb0b14faf319b33a42b'+
            '&lang='+languages[source].acronym+'-' + languages[target].acronym +
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
            url: 'https://api-platform.systran.net/translation/text/translate?key=d562b125-b921-4def-a1a3-8a915a6701d9&source='+languages[source].acronym+'&target='+languages[target].acronym+'&input='+text,
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

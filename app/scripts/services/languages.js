'use strict';

/**
 * @ngdoc service
 * @name virtualKeyboardWithAngularApp.languages
 * @description
 * # languages
 * Service in the virtualKeyboardWithAngularApp.
 */
angular.module('virtualKeyboardWithAngularApp')
  .service('languages', function () {

    var languages = [
        {name: 'Arabic', acronym: 'ar'},
        {name: 'Chinese', acronym: 'zh'},
        {name: 'English',acronym: 'en'},
        {name: 'French',acronym: 'fr'},
        {name: 'German',acronym: 'de'},
        {name: 'Hindi', acronym: 'hi'},
        {name: 'Japanese', acronym: 'ja'},
        {name: 'Korean', acronym: 'ko'},
        {name: 'Portuguese', acronym: 'pt'},
        {name: 'Spanish', acronym: 'es'},
        {name: 'Russian', acronym: 'ru'},
        {name: 'Turkish', acronym: 'tr'}
      ],
      source = 7,
      target = 2;

    /**
     * Get current source language name
     * @returns {string|string}
     */
    this.getSourceLanguageName = function() {
      return languages[source].name;
    };

    /**
     * Get current target language name
     * @returns {string|string}
     */
    this.getTargetLanguageName = function() {
      return languages[target].name;
    };

    /**
     * Get availables languages
     * @returns {*[]}
     */
    this.getLanguages = function() {
      return languages;
    };

    /**
     * Get current source language acronym
     * @returns {string|string}
     */
    this.getSourceLanguageAcronym = function() {
      return languages[source].acronym;
    };

    /**
     * Get current target language acronym
     * @returns {string|string}
     */
    this.getTargetLanguageAcronym = function() {
      return languages[target].acronym;
    };

    /**
     * Set language
     * @param origin
     * @param languageAcronym
     */
    this.setLanguage = function(origin, languageAcronym) {
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
  });

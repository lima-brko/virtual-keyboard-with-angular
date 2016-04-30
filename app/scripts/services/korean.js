'use strict';

/**
 * @ngdoc service
 * @name virtualKeyboardWithAngularApp.korean
 * @description
 * # korean
 * Service in the virtualKeyboardWithAngularApp.
 */
angular.module('virtualKeyboardWithAngularApp')
  .service('korean', function () {

    var initial = [12593, 12594, 12596, 12599, 12600, 12601, 12609, 12610, 12611, 12613, 12614, 12615, 12616, 12617, 12618, 12619, 12620, 12621, 12622],
      finale = [0, 12593, 12594, 12595, 12596, 12597, 12598, 12599, 12601, 12602, 12603, 12604, 12605, 12606, 12607, 12608, 12609, 12610, 12612, 12613, 12614, 12615, 12616, 12618, 12619, 12620, 12621, 12622],
      dMedial = [0, 0, 0, 0, 0, 0, 0, 0, 0, 800, 801, 820, 0, 0, 1304, 1305, 1320, 0, 0, 1820],
      dFinale = [0, 0, 0, 119, 0, 422, 427, 0, 0, 801, 816, 817, 819, 825, 826, 827, 0, 0, 1719, 0, 1919],
      SBase = 44032,
      LBase = 4352,
      VBase = 12623,
      TBase = 4519,
      LCount = 19,
      VCount = 21,
      TCount = 28,
      NCount = 588,
      SCount = 11172;

    /**
     * Get the length of start selection
     * @param {Object} textarea
     * @returns {Number}
     */
    function getSelectionStart(textarea) {
      textarea.focus();
      return textarea.selectionStart;
    };

    /**
     * Get the length of end selection
     * @param {Object} textarea
     * @returns {Number}
     */
    function getSelectionEnd(textarea) {
      textarea.focus();
      return textarea.selectionEnd;
    };

    /**
     * Add the translated char to the textarea
     * @param {Object} textarea
     * @param {Number} start
     * @param {Number} end
     */
    function setCharInPosition(textarea, start, end) {
      var len = textarea.value.length;
      if (start > len) {
        start = len
      }
      if (start + end > len) {
        end = len - end
      }
      textarea.focus();
      textarea.setSelectionRange(start, start + end);
      textarea.focus();
    };

    function composeKorean (text) {
      var textLen = text.length;
      if (textLen == 0) {
        return ""
      }
      var firstUnicode = text.charCodeAt(0),
        firstChar = String.fromCharCode(firstUnicode),
        curUnicode,
        initialIndex,
        mergeUnicode,
        medialIndex,
        finaleIndex,
        dFinaleIndex,
        SBaseUnicode;

      for (var i = 1; i < textLen; ++i) {
        curUnicode = text.charCodeAt(i);
        initialIndex = initial.indexOf(firstUnicode);
        if (initialIndex != -1) {
          mergeUnicode = curUnicode - VBase;
          if (0 <= mergeUnicode && mergeUnicode < VCount) {
            firstUnicode = SBase + (initialIndex * VCount + mergeUnicode) * TCount;
            firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode);
            continue
          }
        }
        SBaseUnicode = firstUnicode - SBase;
        if (0 <= SBaseUnicode && SBaseUnicode < 11145 && (SBaseUnicode % TCount) == 0) {
          finaleIndex = finale.indexOf(curUnicode);
          if (finaleIndex != -1) {
            firstUnicode += finaleIndex;
            firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode);
            continue
          }
          mergeUnicode = (SBaseUnicode % NCount) / TCount;
          medialIndex = dMedial.indexOf((mergeUnicode * 100) + (curUnicode - VBase));
          if (medialIndex > 0) {
            firstUnicode += (medialIndex - mergeUnicode) * TCount;
            firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode);
            continue
          }
        }
        if (0 <= SBaseUnicode && SBaseUnicode < 11172 && (SBaseUnicode % TCount) != 0) {
          finaleIndex = SBaseUnicode % TCount;
          mergeUnicode = curUnicode - VBase;
          if (0 <= mergeUnicode && mergeUnicode < VCount) {
            initialIndex = initial.indexOf(finale[finaleIndex]);
            if (0 <= initialIndex && initialIndex < LCount) {
              firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode - finaleIndex);
              firstUnicode = SBase + (initialIndex * VCount + mergeUnicode) * TCount;
              firstChar = firstChar + String.fromCharCode(firstUnicode);
              continue
            }
            if (finaleIndex < dFinale.length && dFinale[finaleIndex] != 0) {
              firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode - finaleIndex + Math.floor(dFinale[finaleIndex] / 100));
              firstUnicode = SBase + (initial.indexOf(finale[(dFinale[finaleIndex] % 100)]) * VCount + mergeUnicode) * TCount;
              firstChar = firstChar + String.fromCharCode(firstUnicode);
              continue
            }
          }
          dFinaleIndex = dFinale.indexOf((finaleIndex * 100) + finale.indexOf(curUnicode));
          if (dFinaleIndex > 0) {
            firstUnicode = firstUnicode + dFinaleIndex - finaleIndex;
            firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode);
            continue
          }
        }
        firstUnicode = curUnicode;
        firstChar = firstChar + String.fromCharCode(curUnicode)
      }
      return firstChar;
    };

    function decomposeKorean(text) {
      var len = text.length,
          firstChar = "",
          curUnicode,
          SBaseUnicode,
          initialUnicode,
          VBaseUnicode,
        finaleUnicode;

      for (var b = 0; b < len; b++) {
        curUnicode = text.charCodeAt(b);
        SBaseUnicode = curUnicode - SBase;
        if (SBaseUnicode < 0 || SBaseUnicode >= SCount) {
          firstChar = firstChar + String.fromCharCode(curUnicode);
          continue
        }
        initialUnicode = initial[Math.floor(SBaseUnicode / NCount)];
        VBaseUnicode = VBase + (SBaseUnicode % NCount) / TCount;
        finaleUnicode = finale[SBaseUnicode % TCount];
        firstChar = firstChar + String.fromCharCode(initialUnicode, VBaseUnicode);
        if (finaleUnicode != 0) {
          firstChar = firstChar + String.fromCharCode(finaleUnicode);
        }
      }
      return firstChar
    };

    this.composeKorean = function(text) {
      return composeKorean(text);
    };

    this.backspace = function(textarea, text) {
      text = decomposeKorean(text);
      if (text.length > 1) {
        this.insertChar(textarea, this.composeKorean(text.slice(0, -1)));
      }
    };

    /**
     * Insert korean char to the textarea
     * @param {Object} textarea
     * @param {String} char
     */
    this.insertChar = function(textarea, char) {
      var start = getSelectionStart(textarea),
        end = getSelectionEnd(textarea),
        len = textarea.value.length;

      textarea.value = textarea.value.substring(0, start) + char + textarea.value.substring(end, len);
      setCharInPosition(textarea, start + char.length, 0);
    };

    /**
     * Delete korean char to the textarea
     */
    this.deleteChar = function(textarea, len) {
      var start = getSelectionStart(textarea),
        end = getSelectionEnd(textarea);

      if (len > start) {
        len = start
      }
      var newChar = textarea.value.substring(start - len, end);
      textarea.value = textarea.value.substring(0, start - len) + textarea.value.substring(end);
      setCharInPosition(textarea, start - len, 0);
      return newChar
    };
  });

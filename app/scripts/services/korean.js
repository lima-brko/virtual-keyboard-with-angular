'use strict';

/**
 * @ngdoc service
 * @name virtualKeyboardWithAngularApp.korean
 * @description
 * # korean
 * Service in the virtualKeyboardWithAngularApp.
 */
angular.module('virtualKeyboardWithAngularApp')
  .service('korean', ['$rootScope', function ($rootScope) {

    var initial = [12593, 12594, 12596, 12599, 12600, 12601, 12609, 12610, 12611, 12613, 12614, 12615, 12616, 12617, 12618, 12619, 12620, 12621, 12622],
      finale = [0, 12593, 12594, 12595, 12596, 12597, 12598, 12599, 12601, 12602, 12603, 12604, 12605, 12606, 12607, 12608, 12609, 12610, 12612, 12613, 12614, 12615, 12616, 12618, 12619, 12620, 12621, 12622],
      dMedial = [0, 0, 0, 0, 0, 0, 0, 0, 0, 800, 801, 820, 0, 0, 1304, 1305, 1320, 0, 0, 1820],
      dFinale = [0, 0, 0, 119, 0, 422, 427, 0, 0, 801, 816, 817, 819, 825, 826, 827, 0, 0, 1719, 0, 1919],
      SBase = 44032,
      //LBase = 4352,
      VBase = 12623,
      //TBase = 4519,
      LCount = 19,
      VCount = 21,
      TCount = 28,
      NCount = 588,
      SCount = 11172,
      displayText = '',
      modOn = false,
      modCaps = false,
      ctrlKey = false,
      shiftKey = false,
      altKey = false,
      //metaKey = false,
      macChars = {
        'top': [
          {"keyCode": "192", "s": "", "m": "~", "p": "`", "class": ["center"]},
          {"keyCode": "49", "s": "", "m": "!", "p": "1", "class": []},
          {"keyCode": "50", "s": "", "m": "@", "p": "2", "class": []},
          {"keyCode": "51", "index": "3", "s": "", "m": "#", "p": "3", "class": []},
          {"keyCode": "52", "index": "4", "s": "", "m": "$", "p": "4", "class": []},
          {"keyCode": "53", "index": "5", "s": "", "m": "%", "p": "5", "class": []},
          {"keyCode": "54", "index": "6", "s": "", "m": "^", "p": "6", "class": []},
          {"keyCode": "55", "index": "7", "s": "", "m": "&", "p": "7", "class": []},
          {"keyCode": "56", "index": "8", "s": "", "m": "*", "p": "8", "class": []},
          {"keyCode": "57", "index": "9", "s": "", "m": "(", "p": "9", "class": []},
          {"keyCode": "48", "index": "10", "s": "", "m": ")", "p": "0", "class": []},
          {"keyCode": "189", "index": "11", "s": "", "m": "_", "p": "-", "class": ["alt"]},
          {"keyCode": "187", "index": "12", "s": "", "m": "+", "p": "=", "class": []},
          {"keyCode": "46", "index": "13", "s": "", "m": "", "p": "delete", "class": ["delete"]}
        ],
        'qwert': [
          {"keyCode": "9", "index": "14", "s": "", "m": "", "p": "tab", "class": ["tab"]},
          {"keyCode": "81", "index": "15", "s": "ㅂ", "m": "ㅃ", "p": "q", "class": ["left"]},
          {"keyCode": "87", "index": "16", "s": "ㅈ", "m": "ㅉ", "p": "w", "class": ["left"]},
          {"keyCode": "69", "index": "17", "s": "ㄷ", "m": "ㄸ", "p": "e", "class": ["left"]},
          {"keyCode": "82", "index": "18", "s": "ㄱ", "m": "ㄲ", "p": "r", "class": ["left"]},
          {"keyCode": "84", "index": "19", "s": "ㅅ", "m": "ㅆ", "p": "t", "class": ["left"]},
          {"keyCode": "89", "index": "20", "s": "ㅛ", "m": "", "p": "y", "class": ["left"]},
          {"keyCode": "85", "index": "21", "s": "ㅕ", "m": "", "p": "u", "class": ["left"]},
          {"keyCode": "73", "index": "22", "s": "ㅑ", "m": "", "p": "i", "class": ["left"]},
          {"keyCode": "79", "index": "23", "s": "ㅐ", "m": "ㅒ", "p": "o", "class": ["left"]},
          {"keyCode": "80", "index": "24", "s": "ㅔ", "m": "ㅖ", "p": "p", "class": ["left"]},
          {"keyCode": "219", "index": "25", "s": "", "m": "{", "p": "[", "class": []},
          {"keyCode": "221", "index": "26", "s": "", "m": "}", "p": "]", "class": []},
          {"keyCode": "220", "index": "27", "s": "", "m": "|", "p": "\\", "class": []}
        ],
        'asdfg': [
          {"keyCode": "20", "index": "28", "s": "", "m": "", "p": "caps lock", "class": ["caps"]},
          {"keyCode": "65", "index": "29", "s": "ㅁ", "m": "", "p": "a", "class": ["left"]},
          {"keyCode": "83", "index": "30", "s": "ㄴ", "m": "", "p": "s", "class": ["left"]},
          {"keyCode": "68", "index": "31", "s": "ㅇ", "m": "", "p": "d", "class": ["left"]},
          {"keyCode": "70", "index": "32", "s": "ㄹ", "m": "", "p": "f", "class": ["left"]},
          {"keyCode": "71", "index": "33", "s": "ㅎ", "m": "", "p": "g", "class": ["left"]},
          {"keyCode": "72", "index": "34", "s": "ㅗ", "m": "", "p": "h", "class": ["left"]},
          {"keyCode": "74", "index": "35", "s": "ㅓ", "m": "", "p": "j", "class": ["left"]},
          {"keyCode": "75", "index": "36", "s": "ㅏ", "m": "", "p": "k", "class": ["left"]},
          {"keyCode": "76", "index": "37", "s": "ㅣ", "m": "", "p": "l", "class": ["left"]},
          {"keyCode": "186", "index": "38", "s": "", "m": ":", "p": ";", "class": []},
          {"keyCode": "222", "index": "39", "s": "", "m": "\"", "p": "'", "class": []},
          {"keyCode": "13", "index": "40", "s": "", "m": "", "p": "return", "class": ["return"]}
        ],
        'zxcvb': [
          {"keyCode": "16", "index": "41", "s": "", "m": "", "p": "shift", "class": ["shift"]},
          {"keyCode": "90", "index": "42", "s": "ㅋ", "m": "", "p": "z", "class": ["left"]},
          {"keyCode": "88", "index": "43", "s": "ㅌ", "m": "", "p": "x", "class": ["left"]},
          {"keyCode": "67", "index": "44", "s": "ㅊ", "m": "", "p": "c", "class": ["left"]},
          {"keyCode": "86", "index": "45", "s": "ㅍ", "m": "", "p": "v", "class": ["left"]},
          {"keyCode": "66", "index": "46", "s": "ㅠ", "m": "", "p": "b", "class": ["left"]},
          {"keyCode": "78", "index": "47", "s": "ㅜ", "m": "", "p": "n", "class": ["left"]},
          {"keyCode": "77", "index": "48", "s": "ㅡ", "m": "", "p": "m", "class": ["left"]},
          {"keyCode": "188", "index": "49", "s": "", "m": "<", "p": ",", "class": []},
          {"keyCode": "190", "index": "50", "s": "", "m": ">", "p": ".", "class": []},
          {"keyCode": "191", "index": "51", "s": "", "m": "?", "p": "/", "class": []},
          {"keyCode": "16", "index": "52", "s": "", "m": "", "p": "shift", "class": ["shift", "right"]}
        ],
        'bottom': [
          {"keyCode": "", "index": "53", "s": "", "m": "", "p": "fn", "class": ["fn"]},
          {"keyCode": "", "index": "54", "s": "", "m": "", "p": "control", "class": ["control"]},
          {"keyCode": "", "index": "55", "s": "", "m": "", "p": "option", "class": ["option"]},
          {"keyCode": "", "index": "56", "s": "", "m": "", "p": "command", "class": ["command"]},
          {"keyCode": "32", "index": "57", "s": "", "m": "", "p": "spacebar", "class": ["spacebar"]},
          {"keyCode": "", "index": "58", "s": "", "m": "", "p": "command", "class": ["command", "right"]},
          {"keyCode": "", "index": "59", "s": "", "m": "", "p": "option", "class": ["option", "right"]},
          {"keyCode": "37", "index": "60", "s": "", "m": "", "p": "\u25C0", "class": ["arrow", "ar-left"]},
          {"keyCode": "38", "index": "61", "s": "", "m": "", "p": "\u25B2", "class": ["arrow", "ar-up"]},
          {"keyCode": "40", "index": "62", "s": "", "m": "", "p": "\u25BC", "class": ["arrow", "ar-down"]},
          {"keyCode": "39", "index": "63", "s": "", "m": "", "p": "\u25B6", "class": ["arrow", "ar-right"]}
        ]
      };

    /**
     * Get the length of start selection
     * @param {DOM Element} textarea
     * @returns {Number}
     */
    function getSelectionStart(textarea) {
      textarea.focus();
      return textarea.selectionStart;
    }

    /**
     * Get the length of end selection
     * @param {DOM Element} textarea
     * @returns {Number}
     */
    function getSelectionEnd(textarea) {
      textarea.focus();
      return textarea.selectionEnd;
    }

    /**
     * Add the translated char to the textarea
     * @param {DOM Element} textarea
     * @param {Number} start
     * @param {Number} end
     */
    function setCharInPosition(textarea, start, end) {
      var len = displayText.length;
      if (start > len) {
          start = len;
      }
      if (start + end > len) {
          end = len - end;
      }
      // Apply is needed to update text in textarea model
      $rootScope.$apply();

      textarea.focus();
      if (textarea.setSelectionRange) {
          textarea.setSelectionRange(start, start + end);
      } else {
          if (textarea.createTextRange) {
              var range = textarea.createTextRange();
              range.collapse(true);
              range.moveEnd("character", start + end);
              range.moveStart("character", start);
              range.select();
          }
      }
      textarea.focus();
    }

    /**
     * Compose a korean char
     * @param {String} text
     * @returns {String}
     */
    function composeKorean (text) {
      var textLen = text.length;
      if (textLen === 0) {
        return "";
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
        if (initialIndex !== -1) {
          mergeUnicode = curUnicode - VBase;
          if (0 <= mergeUnicode && mergeUnicode < VCount) {
            firstUnicode = SBase + (initialIndex * VCount + mergeUnicode) * TCount;
            firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode);
            continue;
          }
        }
        SBaseUnicode = firstUnicode - SBase;
        if (0 <= SBaseUnicode && SBaseUnicode < 11145 && (SBaseUnicode % TCount) === 0) {
          finaleIndex = finale.indexOf(curUnicode);
          if (finaleIndex !== -1) {
            firstUnicode += finaleIndex;
            firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode);
            continue;
          }
          mergeUnicode = (SBaseUnicode % NCount) / TCount;
          medialIndex = dMedial.indexOf((mergeUnicode * 100) + (curUnicode - VBase));
          if (medialIndex > 0) {
            firstUnicode += (medialIndex - mergeUnicode) * TCount;
            firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode);
            continue;
          }
        }
        if (0 <= SBaseUnicode && SBaseUnicode < 11172 && (SBaseUnicode % TCount) !== 0) {
          finaleIndex = SBaseUnicode % TCount;
          mergeUnicode = curUnicode - VBase;
          if (0 <= mergeUnicode && mergeUnicode < VCount) {
            initialIndex = initial.indexOf(finale[finaleIndex]);
            if (0 <= initialIndex && initialIndex < LCount) {
              firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode - finaleIndex);
              firstUnicode = SBase + (initialIndex * VCount + mergeUnicode) * TCount;
              firstChar = firstChar + String.fromCharCode(firstUnicode);
              continue;
            }
            if (finaleIndex < dFinale.length && dFinale[finaleIndex] !== 0) {
              firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode - finaleIndex + Math.floor(dFinale[finaleIndex] / 100));
              firstUnicode = SBase + (initial.indexOf(finale[(dFinale[finaleIndex] % 100)]) * VCount + mergeUnicode) * TCount;
              firstChar = firstChar + String.fromCharCode(firstUnicode);
              continue;
            }
          }
          dFinaleIndex = dFinale.indexOf((finaleIndex * 100) + finale.indexOf(curUnicode));
          if (dFinaleIndex > 0) {
            firstUnicode = firstUnicode + dFinaleIndex - finaleIndex;
            firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode);
            continue;
          }
        }
        firstUnicode = curUnicode;
        firstChar = firstChar + String.fromCharCode(curUnicode);
      }
      return firstChar;
    }

    /**
     * Decompose a korean char
     * @param {String} text
     * @returns {string}
     */
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
          continue;
        }
        initialUnicode = initial[Math.floor(SBaseUnicode / NCount)];
        VBaseUnicode = VBase + (SBaseUnicode % NCount) / TCount;
        finaleUnicode = finale[SBaseUnicode % TCount];
        firstChar = firstChar + String.fromCharCode(initialUnicode, VBaseUnicode);
        if (finaleUnicode !== 0) {
          firstChar = firstChar + String.fromCharCode(finaleUnicode);
        }
      }
      return firstChar;
    }

    /**
     * Remove the last char
     * @param {DOM element} textarea
     * @param {String} text
     */
    function backspace(textarea, text) {
      text = decomposeKorean(text);
      if (text.length > 1) {
        insertChar(textarea, composeKorean(text.slice(0, -1)));
      }
    }

    /**
     * Insert korean char to the textarea
     * @param {DOM element} textarea
     * @param {String} char
     */
    function insertChar(textarea, char) {
      var start = getSelectionStart(textarea),
        end = getSelectionEnd(textarea),
        len = displayText.length;

      displayText = displayText.substring(0, start) + char + displayText.substring(end, len);
      setCharInPosition(textarea, start + char.length, 0);
    }

    /**
     * Delete korean char to the textarea
     * @param {DOM element} textarea
     * @param {Number} l
     * @returns {string}
     */
    function deleteChar(textarea, l) {
      var start = getSelectionStart(textarea),
        end = getSelectionEnd(textarea),
        len = textarea.value.length,
        removedLen = end - start,
        removedChar;

      // If has selected more than one char
      if((removedLen) > 0) {
        removedChar = displayText.substring(start, start + removedLen);
        displayText = displayText.substring(0, start) + displayText.substring(end, end + len);
        setCharInPosition(textarea, start, 0);
        return removedChar;
      }

      removedChar = displayText.substring(start - l, end);
      displayText = displayText.substring(0, start - l) + displayText.substring(end);
      setCharInPosition(textarea, start - l, 0);
      return removedChar;
    }

    /**
     * Insert relative korean char to textarea
     * @param {DOM element} textarea
     * @param {Number} key
     * @param {String} type
     */
    this.activateKey = function(textarea, key, type) {
      var keyString  = key.toString(),
          preventKey = false,
          keyDown    = type === 'keydown'? true:false,
          keyUp      = type === 'keyup'? true:false,
          click      = type === 'click'? true:false,
          char;

      macChars.bottom[3].active = ctrlKey;
      macChars.bottom[5].active = ctrlKey;
      macChars.zxcvb[0].active = shiftKey;
      macChars.zxcvb[11].active = shiftKey;
      macChars.bottom[2].active = altKey;
      macChars.bottom[6].active = altKey;

      // If shiftKey pressed, show modified chars
      modOn = modCaps;
      if(!modCaps) {
        modOn = shiftKey;
      }

      // If delete or backspace turn in keyCode 46
      if(key === 8 || key === 46) {
        key = 46;
        keyString = "46";
      }

      // If Ctrl + A|C|V|X|Y|Z
      if ((key === 65 || key === 67 || key === 86 || key === 88 || key === 89 || key === 90) && (ctrlKey && !altKey && !shiftKey)) {
          return false;
      }

      // If Home|End
      if (key === 35 || key === 36) {
          return false;
      }

      // Activate or deactivate key in layout
      Loop1:
        for (var row in macChars) {
          Loop2:
            for (var i = 0, l = macChars[row].length; i < l; i++) {
              if (macChars[row][i].keyCode === keyString) {
                if(!click) {
                  macChars[row][i].active = keyDown;
                }

                if(modOn && macChars[row][i].m !== ''){
                  char = macChars[row][i].m;
                  break Loop1;
                }

                if(modOn) {
                  break Loop1;
                }

                if(macChars[row][i].s !== ''){
                  char = macChars[row][i].s;
                  break Loop1;
                }

                char = macChars[row][i].p;
                break Loop1;
              }
            }
        }

      if (keyUp) {
        $rootScope.$apply();
        return false;
      }

      var lastChar;

      // Execute key`s effect
      switch (key) {
        case 46: // backspace
          if(displayText.length > 0) {
            preventKey = true;
            lastChar = deleteChar(textarea, 1, 0);
            if(lastChar.length === 1) {
              backspace(textarea, lastChar);
            }
          }
          break;
        case 16: // shift
        case 37: // arrow left
        case 38: // arrow up
        case 39: // arrow right
        case 40: // arrow down
        case 9:  // tab
          break;
        case 32: // spacebar
          if(keyDown) {
            preventKey = true;
            insertChar(textarea, "\u0020");
          }
          break;
        case 13: // return
          if(keyDown || click) {
            preventKey = true;
            displayText = displayText + "\n";
            if(click){
              textarea.focus();
            }
          }
          break;
        case 20: // capslock
          modCaps = !modCaps;
          modOn = modCaps;
          break;
        default:
          preventKey = true;
          if(char) {
            insertChar(textarea, char);
            $rootScope.$apply();
            lastChar = deleteChar(textarea, 2, 0);
            insertChar(textarea, composeKorean(lastChar));
          }
          break;
      }
      $rootScope.$apply();
      return preventKey;
    };

    /**
     * Add text to current position in textarea
     * @param {DOM Element} textarea
     * @param {String} text
     */
    this.insertText = function(textarea, text){
      insertChar(textarea, text);
    };

    /**
     * Get modOn
     * @returns {boolean}
     */
    this.getModOn = function(){
      return modOn;
    };

    /**
     * Get modCaps
     * @returns {boolean}
     */
    this.getModCaps = function(){
      return modCaps;
    };

    /**
     * Set modCaps
     * @param state
     */
    this.setModCaps = function(state){
      modCaps = state;
    };

    /**
     * Set modOn
     * @param state
     */
    this.setModOn = function(state){
      modOn = state;
    };

    /**
     * Get macChars
     * @returns {{top: *[], qwert: *[], asdfg: *[], zxcvb: *[], bottom: *[]}}
     */
    this.getMacChars = function(){
      return macChars;
    };

    /**
     * Set modChars
     * @param {KeyboardEvent} e
     */
    this.setModChars = function(e){
      ctrlKey = e.ctrlKey;
      shiftKey = e.shiftKey;
      altKey = e.altKey;
    };

    /**
     * Get displayText
     * @returns {string}
     */
    this.getDisplayText = function(){
      return displayText;
    };
  }]);

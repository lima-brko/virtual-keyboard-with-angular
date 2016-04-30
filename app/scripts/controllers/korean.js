'use strict';

/**
 * @ngdoc function
 * @name virtualKeyboardWithAngularApp.controller:KoreanCtrl
 * @description
 * # KoreanCtrl
 * Controller of the virtualKeyboardWithAngularApp
 */
angular.module('virtualKeyboardWithAngularApp')
    .controller('KoreanCtrl', ['$scope', function($scope) {

    $scope.charClick = function(){
      alert('entrou');
    };

    $scope.macChars = {
      'top': [
        {"keyCode": "192", "index": "0", "s": "", "m": "~", "p": "`", "class": ["center"]},
        {"keyCode": "49", "index": "1", "s": "", "m": "!", "p": "1", "class": []},
        {"keyCode": "50", "index": "2", "s": "", "m": "@", "p": "2", "class": []},
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
        {"keyCode": "", "index": "57", "s": "", "m": "", "p": "spacebar", "class": ["spacebar"]},
        {"keyCode": "", "index": "58", "s": "", "m": "", "p": "command", "class": ["command", "right"]},
        {"keyCode": "", "index": "59", "s": "", "m": "", "p": "option", "class": ["option", "right"]},
        {"keyCode": "37", "index": "60", "s": "", "m": "", "p": "\u25C0", "class": ["arrow", "ar-left"]},
        {"keyCode": "38", "index": "61", "s": "", "m": "", "p": "\u25B2", "class": ["arrow", "ar-up"]},
        {"keyCode": "40", "index": "62", "s": "", "m": "", "p": "\u25BC", "class": ["arrow", "ar-down"]},
        {"keyCode": "39", "index": "63", "s": "", "m": "", "p": "\u25B6", "class": ["arrow", "ar-right"]}
      ]
    };

    //$scope.chars = [
    //  //Row top
    //  {"keyCode": "192", "index": "0", "s": "", "m": "~", "p": "`", "class": ["center"]},
    //  {"keyCode": "49", "index": "1", "s": "", "m": "!", "p": "1", "class": ["left"]},
    //  {"keyCode": "50", "index": "2", "s": "", "m": "@", "p": "2", "class": ["left"]},
    //  {"keyCode": "51", "index": "3", "s": "", "m": "#", "p": "3", "class": ["left"]},
    //  {"keyCode": "52", "index": "4", "s": "", "m": "$", "p": "4", "class": ["left"]},
    //  {"keyCode": "53", "index": "5", "s": "", "m": "%", "p": "5", "class": ["left"]},
    //  {"keyCode": "54", "index": "6", "s": "", "m": "^", "p": "6", "class": ["left"]},
    //  {"keyCode": "55", "index": "7", "s": "", "m": "&", "p": "7", "class": ["left"]},
    //  {"keyCode": "56", "index": "8", "s": "", "m": "*", "p": "8", "class": ["left"]},
    //  {"keyCode": "57", "index": "9", "s": "", "m": "(", "p": "9", "class": ["left"]},
    //  {"keyCode": "48", "index": "10", "s": "", "m": ")", "p": "0", "class": ["left"]},
    //  {"keyCode": "189", "index": "11", "s": "", "m": "_", "p": "-", "class": ["left"]},
    //  {"keyCode": "187", "index": "12", "s": "", "m": "+", "p": "=", "class": ["left"]},
    //  {"keyCode": "46", "index": "13", "s": "", "m": "", "p": "delete", "class": ["left", "delete"]},
    //
    //  //Row qwert
    //  {"keyCode": "9", "index": "14", "s": "", "m": "", "p": "tab", "class": ["left"]},
    //  {"keyCode": "81", "index": "15", "s": "ㅂ", "m": "ㅃ", "p": "q", "class": ["left"]},
    //  {"keyCode": "87", "index": "16", "s": "ㅈ", "m": "ㅉ", "p": "w", "class": ["left"]},
    //  {"keyCode": "69", "index": "17", "s": "ㄷ", "m": "ㄸ", "p": "e", "class": ["left"]},
    //  {"keyCode": "82", "index": "18", "s": "ㄱ", "m": "ㄲ", "p": "r", "class": ["left"]},
    //  {"keyCode": "84", "index": "19", "s": "ㅅ", "m": "ㅆ", "p": "t", "class": ["left"]},
    //  {"keyCode": "89", "index": "20", "s": "ㅛ", "m": "", "p": "y", "class": ["left"]},
    //  {"keyCode": "85", "index": "21", "s": "ㅕ", "m": "", "p": "u", "class": ["left"]},
    //  {"keyCode": "73", "index": "22", "s": "ㅑ", "m": "", "p": "i", "class": ["left"]},
    //  {"keyCode": "79", "index": "23", "s": "ㅐ", "m": "ㅒ", "p": "o", "class": ["left"]},
    //  {"keyCode": "80", "index": "24", "s": "ㅔ", "m": "ㅖ", "p": "p", "class": ["left"]},
    //  {"keyCode": "219", "index": "25", "s": "[", "m": "{", "p": "[", "class": ["left"]},
    //  {"keyCode": "221", "index": "26", "s": "]", "m": "}", "p": "]", "class": ["left"]},
    //  {"keyCode": "220", "index": "27", "s": "\\", "m": "|", "p": "\\", "class": ["left"]},
    //
    //  //Row asdfg
    //  {"keyCode": "20", "index": "28", "s": "", "m": "", "p": "caps lock", "class": ["left"]},
    //  {"keyCode": "65", "index": "29", "s": "ㅁ", "m": "", "p": "a", "class": ["left"]},
    //  {"keyCode": "83", "index": "30", "s": "ㄴ", "m": "", "p": "s", "class": ["left"]},
    //  {"keyCode": "68", "index": "31", "s": "ㅇ", "m": "", "p": "d", "class": ["left"]},
    //  {"keyCode": "70", "index": "32", "s": "ㄹ", "m": "", "p": "f", "class": ["left"]},
    //  {"keyCode": "71", "index": "33", "s": "ㅎ", "m": "", "p": "g", "class": ["left"]},
    //  {"keyCode": "72", "index": "34", "s": "ㅗ", "m": "", "p": "h", "class": ["left"]},
    //  {"keyCode": "74", "index": "35", "s": "ㅓ", "m": "", "p": "j", "class": ["left"]},
    //  {"keyCode": "75", "index": "36", "s": "ㅏ", "m": "", "p": "k", "class": ["left"]},
    //  {"keyCode": "76", "index": "37", "s": "ㅣ", "m": "", "p": "l", "class": ["left"]},
    //  {"keyCode": "186", "index": "38", "s": ";", "m": ":", "p": ";", "class": ["left"]},
    //  {"keyCode": "222", "index": "39", "s": "'", "m": "\"", "p": "'", "class": ["left"]},
    //  {"keyCode": "13", "index": "40", "s": "", "m": "", "p": "return", "class": ["left"]},
    //
    //  //Row zxcvb
    //  {"keyCode": "16", "index": "41", "s": "", "m": "", "p": "shift", "class": ["left"]},
    //  {"keyCode": "90", "index": "42", "s": "ㅋ", "m": "", "p": "z", "class": ["left"]},
    //  {"keyCode": "88", "index": "43", "s": "ㅌ", "m": "", "p": "x", "class": ["left"]},
    //  {"keyCode": "67", "index": "44", "s": "ㅊ", "m": "", "p": "c", "class": ["left"]},
    //  {"keyCode": "86", "index": "45", "s": "ㅍ", "m": "", "p": "v", "class": ["left"]},
    //  {"keyCode": "66", "index": "46", "s": "ㅠ", "m": "", "p": "b", "class": ["left"]},
    //  {"keyCode": "78", "index": "47", "s": "ㅜ", "m": "", "p": "n", "class": ["left"]},
    //  {"keyCode": "77", "index": "48", "s": "ㅡ", "m": "", "p": "m", "class": ["left"]},
    //  {"keyCode": "188", "index": "49", "s": ",", "m": "<", "p": ",", "class": ["left"]},
    //  {"keyCode": "190", "index": "50", "s": ".", "m": ">", "p": ".", "class": ["left"]},
    //  {"keyCode": "191", "index": "51", "s": "/", "m": "?", "p": "/", "class": ["left"]},
    //  {"keyCode": "16", "index": "52", "s": "", "m": "", "p": "shift", "class": ["left"]},
    //
    //  //Row bottom
    //  {"keyCode": "", "index": "53", "s": "", "m": "", "p": "fn", "class": ["left"]},
    //  {"keyCode": "", "index": "54", "s": "", "m": "", "p": "control", "class": ["left"]},
    //  {"keyCode": "", "index": "55", "s": "", "m": "", "p": "option", "class": ["left"]},
    //  {"keyCode": "", "index": "56", "s": "", "m": "", "p": "command", "class": ["left"]},
    //  {"keyCode": "", "index": "57", "s": "", "m": "", "p": "spacebar", "class": ["left"]},
    //  {"keyCode": "", "index": "58", "s": "", "m": "", "p": "command", "class": ["left"]},
    //  {"keyCode": "", "index": "59", "s": "", "m": "", "p": "option", "class": ["left"]},
    //  {"keyCode": "37", "index": "60", "s": "", "m": "", "p": "left_arrow", "class": ["left"]},
    //  {"keyCode": "38", "index": "61", "s": "", "m": "", "p": "up_arrow", "class": ["left"]},
    //  {"keyCode": "40", "index": "62", "s": "", "m": "", "p": "down_arrow", "class": ["left"]},
    //  {"keyCode": "39", "index": "63", "s": "", "m": "", "p": "right_arrow", "class": ["left"]}
    //];

      //  0: {"keyCode": "k0", "s": "0", "n": "`", "m": "~", "p": "", "p": "", "f": ""},
      //  1: {"keyCode": "k1", "s": "0", "n": "1", "m": "!", "p": ""},
      //  2: {"keyCode": "k2", "s": "0", "n": "2", "m": "@", "p": ""},
      //  3: {"keyCode": "k3", "s": "0", "n": "3", "m": "#", "p": ""},
      //  4: {"keyCode": "k4", "s": "0", "n": "4", "m": "$", "p": ""},
      //  5: {"keyCode": "k5", "s": "0", "n": "5", "m": "%", "p": ""},
      //  6: {"keyCode": "k6", "s": "0", "n": "6", "m": "^", "p": ""},
      //  7: {"keyCode": "k7", "s": "0", "n": "7", "m": "&", "p": ""},
      //  8: {"keyCode": "k8", "s": "0", "n": "8", "m": "*", "p": ""},
      //  9: {"keyCode": "k9", "s": "0", "n": "9", "m": "(", "p": ""},
      //  10:{"keyCode": "k10", "s": "0", "n": "0", "m": ")", "p": ""},
      //  11:{"keyCode": "k11", "s": "0", "n": "-", "m": "_", "p": ""},
      //  12:{"keyCode": "k12", "s": "0", "n": "=", "m": "+", "p": ""},
      //  13:{"keyCode": "k13", "s": "1", "n": "ㅂ", "m": "ㅃ", "p": ""},
      //  14:{"keyCode": "k14", "s": "1", "n": "ㅈ", "m": "ㅉ", "p": ""},
      //  15:{"keyCode": "k15", "s": "1", "n": "ㄷ", "m": "ㄸ", "p": ""},
      //  16:{"keyCode": "k16", "s": "1", "n": "ㄱ", "m": "ㄲ", "p": ""},
      //  17:{"keyCode": "k17", "s": "1", "n": "ㅅ", "m": "ㅆ", "p": ""},
      //  18:{"keyCode": "k18", "s": "1", "n": "ㅛ", "m": "", "p": ""},
      //  19:{"keyCode": "k19", "s": "1", "n": "ㅕ", "m": "", "p": ""},
      //  20:{"keyCode": "k20", "s": "1", "n": "ㅑ", "m": "", "p": ""},
      //  21:{"keyCode": "k21", "s": "1", "n": "ㅐ", "m": "ㅒ", "p": ""},
      //  22:{"keyCode": "k22", "s": "1", "n": "ㅔ", "m": "ㅖ", "p": ""},
      //  23:{"keyCode": "k23", "s": "0", "n": "[", "m": "{", "p": ""},
      //  24:{"keyCode": "k24", "s": "0", "n": "]", "m": "}", "p": ""},
      //  25:{"keyCode": "k25", "s": "0", "n": "\\", "m": "|", "p": ""},
      //  26:{"keyCode": "k26", "s": "1", "n": "ㅁ", "m": "", "p": ""},
      //  27:{"keyCode": "k27", "s": "1", "n": "ㄴ", "m": "", "p": ""},
      //  28:{"keyCode": "k28", "s": "1", "n": "ㅇ", "m": "", "p": ""},
      //  29:{"keyCode": "k29", "s": "1", "n": "ㄹ", "m": "", "p": ""},
      //  30:{"keyCode": "k30", "s": "1", "n": "ㅎ", "m": "", "p": ""},
      //  31:{"keyCode": "k31", "s": "1", "n": "ㅗ", "m": "", "p": ""},
      //  32:{"keyCode": "k32", "s": "1", "n": "ㅓ", "m": "", "p": ""},
      //  33:{"keyCode": "k33", "s": "1", "n": "ㅏ", "m": "", "p": ""},
      //  34:{"keyCode": "k34", "s": "1", "n": "ㅣ", "m": "", "p": ""},
      //  35:{"keyCode": "k35", "s": "0", "n": ";", "m": ":", "p": ""},
      //  36:{"keyCode": "k36", "s": "0", "n": "'", "m": "\"", "p": ""},
      //  37:{"keyCode": "k37", "s": "1", "n": "ㅋ", "m": "", "p": ""},
      //  38:{"keyCode": "k38", "s": "1", "n": "ㅌ", "m": "", "p": ""},
      //  39:{"keyCode": "k39", "s": "1", "n": "ㅊ", "m": "", "p": ""},
      //  40:{"keyCode": "k40", "s": "1", "n": "ㅍ", "m": "", "p": ""},
      //  41:{"keyCode": "k41", "s": "1", "n": "ㅠ", "m": "", "p": ""},
      //  42:{"keyCode": "k42", "s": "1", "n": "ㅜ", "m": "", "p": ""},
      //  43:{"keyCode": "k43", "s": "1", "n": "ㅡ", "m": "", "p": ""},
      //  44:{"keyCode": "k44", "s": "0", "n": ",", "m": "<", "p": ""},
      //  45:{"keyCode": "k45", "s": "0", "n": ".", "m": ">", "p": ""},
      //  46:{"keyCode": "k46", "s": "0", "n": "/", "m": "?", "p": ""},
      //  47:{"keyCode": "k47", "s": "0", "n": "\\", "m": "|", "p": ""}
      //};
}]);

/*!
  * Bootstrap collapse.js v4.4.1-1 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2020 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global = global || self, global.Collapse = factory(global.jQuery, global.Util));
}(this, (function ($, Util) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Util = Util && Util.hasOwnProperty('default') ? Util['default'] : Util;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  var cov_2itwqk888x = function () {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/collapse.js";
    var hash = "a861ca5e635d79fb8532deffe8280f6ecaec00e4";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/collapse.js",
      statementMap: {
        "0": {
          start: {
            line: 17,
            column: 28
          },
          end: {
            line: 17,
            column: 38
          }
        },
        "1": {
          start: {
            line: 18,
            column: 28
          },
          end: {
            line: 18,
            column: 35
          }
        },
        "2": {
          start: {
            line: 19,
            column: 28
          },
          end: {
            line: 19,
            column: 41
          }
        },
        "3": {
          start: {
            line: 20,
            column: 28
          },
          end: {
            line: 20,
            column: 42
          }
        },
        "4": {
          start: {
            line: 21,
            column: 28
          },
          end: {
            line: 21,
            column: 39
          }
        },
        "5": {
          start: {
            line: 22,
            column: 28
          },
          end: {
            line: 22,
            column: 38
          }
        },
        "6": {
          start: {
            line: 24,
            column: 16
          },
          end: {
            line: 27,
            column: 1
          }
        },
        "7": {
          start: {
            line: 29,
            column: 20
          },
          end: {
            line: 32,
            column: 1
          }
        },
        "8": {
          start: {
            line: 34,
            column: 14
          },
          end: {
            line: 40,
            column: 1
          }
        },
        "9": {
          start: {
            line: 42,
            column: 18
          },
          end: {
            line: 47,
            column: 1
          }
        },
        "10": {
          start: {
            line: 49,
            column: 18
          },
          end: {
            line: 52,
            column: 1
          }
        },
        "11": {
          start: {
            line: 54,
            column: 17
          },
          end: {
            line: 57,
            column: 1
          }
        },
        "12": {
          start: {
            line: 67,
            column: 4
          },
          end: {
            line: 67,
            column: 33
          }
        },
        "13": {
          start: {
            line: 68,
            column: 4
          },
          end: {
            line: 68,
            column: 35
          }
        },
        "14": {
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 69,
            column: 51
          }
        },
        "15": {
          start: {
            line: 70,
            column: 4
          },
          end: {
            line: 73,
            column: 6
          }
        },
        "16": {
          start: {
            line: 75,
            column: 23
          },
          end: {
            line: 75,
            column: 85
          }
        },
        "17": {
          start: {
            line: 76,
            column: 4
          },
          end: {
            line: 86,
            column: 5
          }
        },
        "18": {
          start: {
            line: 76,
            column: 17
          },
          end: {
            line: 76,
            column: 18
          }
        },
        "19": {
          start: {
            line: 76,
            column: 26
          },
          end: {
            line: 76,
            column: 43
          }
        },
        "20": {
          start: {
            line: 77,
            column: 19
          },
          end: {
            line: 77,
            column: 32
          }
        },
        "21": {
          start: {
            line: 78,
            column: 23
          },
          end: {
            line: 78,
            column: 56
          }
        },
        "22": {
          start: {
            line: 79,
            column: 28
          },
          end: {
            line: 80,
            column: 53
          }
        },
        "23": {
          start: {
            line: 80,
            column: 31
          },
          end: {
            line: 80,
            column: 52
          }
        },
        "24": {
          start: {
            line: 82,
            column: 6
          },
          end: {
            line: 85,
            column: 7
          }
        },
        "25": {
          start: {
            line: 83,
            column: 8
          },
          end: {
            line: 83,
            column: 33
          }
        },
        "26": {
          start: {
            line: 84,
            column: 8
          },
          end: {
            line: 84,
            column: 37
          }
        },
        "27": {
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 88,
            column: 65
          }
        },
        "28": {
          start: {
            line: 90,
            column: 4
          },
          end: {
            line: 92,
            column: 5
          }
        },
        "29": {
          start: {
            line: 91,
            column: 6
          },
          end: {
            line: 91,
            column: 71
          }
        },
        "30": {
          start: {
            line: 94,
            column: 4
          },
          end: {
            line: 96,
            column: 5
          }
        },
        "31": {
          start: {
            line: 95,
            column: 6
          },
          end: {
            line: 95,
            column: 19
          }
        },
        "32": {
          start: {
            line: 102,
            column: 4
          },
          end: {
            line: 102,
            column: 18
          }
        },
        "33": {
          start: {
            line: 106,
            column: 4
          },
          end: {
            line: 106,
            column: 18
          }
        },
        "34": {
          start: {
            line: 112,
            column: 4
          },
          end: {
            line: 116,
            column: 5
          }
        },
        "35": {
          start: {
            line: 113,
            column: 6
          },
          end: {
            line: 113,
            column: 17
          }
        },
        "36": {
          start: {
            line: 115,
            column: 6
          },
          end: {
            line: 115,
            column: 17
          }
        },
        "37": {
          start: {
            line: 120,
            column: 4
          },
          end: {
            line: 123,
            column: 5
          }
        },
        "38": {
          start: {
            line: 122,
            column: 6
          },
          end: {
            line: 122,
            column: 12
          }
        },
        "39": {
          start: {
            line: 128,
            column: 4
          },
          end: {
            line: 141,
            column: 5
          }
        },
        "40": {
          start: {
            line: 129,
            column: 6
          },
          end: {
            line: 136,
            column: 10
          }
        },
        "41": {
          start: {
            line: 131,
            column: 10
          },
          end: {
            line: 133,
            column: 11
          }
        },
        "42": {
          start: {
            line: 132,
            column: 12
          },
          end: {
            line: 132,
            column: 75
          }
        },
        "43": {
          start: {
            line: 135,
            column: 10
          },
          end: {
            line: 135,
            column: 60
          }
        },
        "44": {
          start: {
            line: 138,
            column: 6
          },
          end: {
            line: 140,
            column: 7
          }
        },
        "45": {
          start: {
            line: 139,
            column: 8
          },
          end: {
            line: 139,
            column: 22
          }
        },
        "46": {
          start: {
            line: 143,
            column: 4
          },
          end: {
            line: 148,
            column: 5
          }
        },
        "47": {
          start: {
            line: 144,
            column: 6
          },
          end: {
            line: 144,
            column: 65
          }
        },
        "48": {
          start: {
            line: 145,
            column: 6
          },
          end: {
            line: 147,
            column: 7
          }
        },
        "49": {
          start: {
            line: 146,
            column: 8
          },
          end: {
            line: 146,
            column: 14
          }
        },
        "50": {
          start: {
            line: 150,
            column: 23
          },
          end: {
            line: 150,
            column: 42
          }
        },
        "51": {
          start: {
            line: 151,
            column: 4
          },
          end: {
            line: 151,
            column: 40
          }
        },
        "52": {
          start: {
            line: 152,
            column: 4
          },
          end: {
            line: 154,
            column: 5
          }
        },
        "53": {
          start: {
            line: 153,
            column: 6
          },
          end: {
            line: 153,
            column: 12
          }
        },
        "54": {
          start: {
            line: 156,
            column: 4
          },
          end: {
            line: 161,
            column: 5
          }
        },
        "55": {
          start: {
            line: 157,
            column: 6
          },
          end: {
            line: 157,
            column: 76
          }
        },
        "56": {
          start: {
            line: 158,
            column: 6
          },
          end: {
            line: 160,
            column: 7
          }
        },
        "57": {
          start: {
            line: 159,
            column: 8
          },
          end: {
            line: 159,
            column: 39
          }
        },
        "58": {
          start: {
            line: 163,
            column: 22
          },
          end: {
            line: 163,
            column: 42
          }
        },
        "59": {
          start: {
            line: 165,
            column: 4
          },
          end: {
            line: 167,
            column: 37
          }
        },
        "60": {
          start: {
            line: 169,
            column: 4
          },
          end: {
            line: 169,
            column: 38
          }
        },
        "61": {
          start: {
            line: 171,
            column: 4
          },
          end: {
            line: 175,
            column: 5
          }
        },
        "62": {
          start: {
            line: 172,
            column: 6
          },
          end: {
            line: 174,
            column: 36
          }
        },
        "63": {
          start: {
            line: 177,
            column: 4
          },
          end: {
            line: 177,
            column: 31
          }
        },
        "64": {
          start: {
            line: 179,
            column: 21
          },
          end: {
            line: 190,
            column: 5
          }
        },
        "65": {
          start: {
            line: 180,
            column: 6
          },
          end: {
            line: 183,
            column: 33
          }
        },
        "66": {
          start: {
            line: 185,
            column: 6
          },
          end: {
            line: 185,
            column: 41
          }
        },
        "67": {
          start: {
            line: 187,
            column: 6
          },
          end: {
            line: 187,
            column: 34
          }
        },
        "68": {
          start: {
            line: 189,
            column: 6
          },
          end: {
            line: 189,
            column: 43
          }
        },
        "69": {
          start: {
            line: 192,
            column: 33
          },
          end: {
            line: 192,
            column: 80
          }
        },
        "70": {
          start: {
            line: 193,
            column: 23
          },
          end: {
            line: 193,
            column: 54
          }
        },
        "71": {
          start: {
            line: 194,
            column: 31
          },
          end: {
            line: 194,
            column: 83
          }
        },
        "72": {
          start: {
            line: 196,
            column: 4
          },
          end: {
            line: 198,
            column: 47
          }
        },
        "73": {
          start: {
            line: 200,
            column: 4
          },
          end: {
            line: 200,
            column: 69
          }
        },
        "74": {
          start: {
            line: 204,
            column: 4
          },
          end: {
            line: 207,
            column: 5
          }
        },
        "75": {
          start: {
            line: 206,
            column: 6
          },
          end: {
            line: 206,
            column: 12
          }
        },
        "76": {
          start: {
            line: 209,
            column: 23
          },
          end: {
            line: 209,
            column: 42
          }
        },
        "77": {
          start: {
            line: 210,
            column: 4
          },
          end: {
            line: 210,
            column: 40
          }
        },
        "78": {
          start: {
            line: 211,
            column: 4
          },
          end: {
            line: 213,
            column: 5
          }
        },
        "79": {
          start: {
            line: 212,
            column: 6
          },
          end: {
            line: 212,
            column: 12
          }
        },
        "80": {
          start: {
            line: 215,
            column: 22
          },
          end: {
            line: 215,
            column: 42
          }
        },
        "81": {
          start: {
            line: 217,
            column: 4
          },
          end: {
            line: 217,
            column: 92
          }
        },
        "82": {
          start: {
            line: 219,
            column: 4
          },
          end: {
            line: 219,
            column: 30
          }
        },
        "83": {
          start: {
            line: 221,
            column: 4
          },
          end: {
            line: 224,
            column: 34
          }
        },
        "84": {
          start: {
            line: 226,
            column: 31
          },
          end: {
            line: 226,
            column: 56
          }
        },
        "85": {
          start: {
            line: 227,
            column: 4
          },
          end: {
            line: 240,
            column: 5
          }
        },
        "86": {
          start: {
            line: 228,
            column: 6
          },
          end: {
            line: 239,
            column: 7
          }
        },
        "87": {
          start: {
            line: 228,
            column: 19
          },
          end: {
            line: 228,
            column: 20
          }
        },
        "88": {
          start: {
            line: 229,
            column: 24
          },
          end: {
            line: 229,
            column: 45
          }
        },
        "89": {
          start: {
            line: 230,
            column: 25
          },
          end: {
            line: 230,
            column: 61
          }
        },
        "90": {
          start: {
            line: 232,
            column: 8
          },
          end: {
            line: 238,
            column: 9
          }
        },
        "91": {
          start: {
            line: 233,
            column: 24
          },
          end: {
            line: 233,
            column: 77
          }
        },
        "92": {
          start: {
            line: 234,
            column: 10
          },
          end: {
            line: 237,
            column: 11
          }
        },
        "93": {
          start: {
            line: 235,
            column: 12
          },
          end: {
            line: 236,
            column: 43
          }
        },
        "94": {
          start: {
            line: 242,
            column: 4
          },
          end: {
            line: 242,
            column: 31
          }
        },
        "95": {
          start: {
            line: 244,
            column: 21
          },
          end: {
            line: 250,
            column: 5
          }
        },
        "96": {
          start: {
            line: 245,
            column: 6
          },
          end: {
            line: 245,
            column: 34
          }
        },
        "97": {
          start: {
            line: 246,
            column: 6
          },
          end: {
            line: 249,
            column: 30
          }
        },
        "98": {
          start: {
            line: 252,
            column: 4
          },
          end: {
            line: 252,
            column: 39
          }
        },
        "99": {
          start: {
            line: 253,
            column: 31
          },
          end: {
            line: 253,
            column: 83
          }
        },
        "100": {
          start: {
            line: 255,
            column: 4
          },
          end: {
            line: 257,
            column: 47
          }
        },
        "101": {
          start: {
            line: 261,
            column: 4
          },
          end: {
            line: 261,
            column: 43
          }
        },
        "102": {
          start: {
            line: 265,
            column: 4
          },
          end: {
            line: 265,
            column: 41
          }
        },
        "103": {
          start: {
            line: 267,
            column: 4
          },
          end: {
            line: 267,
            column: 32
          }
        },
        "104": {
          start: {
            line: 268,
            column: 4
          },
          end: {
            line: 268,
            column: 32
          }
        },
        "105": {
          start: {
            line: 269,
            column: 4
          },
          end: {
            line: 269,
            column: 32
          }
        },
        "106": {
          start: {
            line: 270,
            column: 4
          },
          end: {
            line: 270,
            column: 32
          }
        },
        "107": {
          start: {
            line: 271,
            column: 4
          },
          end: {
            line: 271,
            column: 32
          }
        },
        "108": {
          start: {
            line: 277,
            column: 4
          },
          end: {
            line: 280,
            column: 5
          }
        },
        "109": {
          start: {
            line: 281,
            column: 4
          },
          end: {
            line: 281,
            column: 42
          }
        },
        "110": {
          start: {
            line: 282,
            column: 4
          },
          end: {
            line: 282,
            column: 51
          }
        },
        "111": {
          start: {
            line: 283,
            column: 4
          },
          end: {
            line: 283,
            column: 17
          }
        },
        "112": {
          start: {
            line: 287,
            column: 21
          },
          end: {
            line: 287,
            column: 63
          }
        },
        "113": {
          start: {
            line: 288,
            column: 4
          },
          end: {
            line: 288,
            column: 56
          }
        },
        "114": {
          start: {
            line: 294,
            column: 4
          },
          end: {
            line: 303,
            column: 5
          }
        },
        "115": {
          start: {
            line: 295,
            column: 6
          },
          end: {
            line: 295,
            column: 34
          }
        },
        "116": {
          start: {
            line: 298,
            column: 6
          },
          end: {
            line: 300,
            column: 7
          }
        },
        "117": {
          start: {
            line: 299,
            column: 8
          },
          end: {
            line: 299,
            column: 39
          }
        },
        "118": {
          start: {
            line: 302,
            column: 6
          },
          end: {
            line: 302,
            column: 58
          }
        },
        "119": {
          start: {
            line: 306,
            column: 6
          },
          end: {
            line: 306,
            column: 70
          }
        },
        "120": {
          start: {
            line: 308,
            column: 21
          },
          end: {
            line: 308,
            column: 69
          }
        },
        "121": {
          start: {
            line: 309,
            column: 4
          },
          end: {
            line: 314,
            column: 6
          }
        },
        "122": {
          start: {
            line: 310,
            column: 6
          },
          end: {
            line: 313,
            column: 7
          }
        },
        "123": {
          start: {
            line: 316,
            column: 4
          },
          end: {
            line: 316,
            column: 17
          }
        },
        "124": {
          start: {
            line: 320,
            column: 19
          },
          end: {
            line: 320,
            column: 54
          }
        },
        "125": {
          start: {
            line: 322,
            column: 4
          },
          end: {
            line: 326,
            column: 5
          }
        },
        "126": {
          start: {
            line: 323,
            column: 6
          },
          end: {
            line: 325,
            column: 38
          }
        },
        "127": {
          start: {
            line: 332,
            column: 21
          },
          end: {
            line: 332,
            column: 57
          }
        },
        "128": {
          start: {
            line: 333,
            column: 4
          },
          end: {
            line: 333,
            column: 61
          }
        },
        "129": {
          start: {
            line: 337,
            column: 4
          },
          end: {
            line: 361,
            column: 6
          }
        },
        "130": {
          start: {
            line: 338,
            column: 22
          },
          end: {
            line: 338,
            column: 29
          }
        },
        "131": {
          start: {
            line: 339,
            column: 22
          },
          end: {
            line: 339,
            column: 42
          }
        },
        "132": {
          start: {
            line: 340,
            column: 22
          },
          end: {
            line: 344,
            column: 7
          }
        },
        "133": {
          start: {
            line: 346,
            column: 6
          },
          end: {
            line: 348,
            column: 7
          }
        },
        "134": {
          start: {
            line: 347,
            column: 8
          },
          end: {
            line: 347,
            column: 30
          }
        },
        "135": {
          start: {
            line: 350,
            column: 6
          },
          end: {
            line: 353,
            column: 7
          }
        },
        "136": {
          start: {
            line: 351,
            column: 8
          },
          end: {
            line: 351,
            column: 42
          }
        },
        "137": {
          start: {
            line: 352,
            column: 8
          },
          end: {
            line: 352,
            column: 34
          }
        },
        "138": {
          start: {
            line: 355,
            column: 6
          },
          end: {
            line: 360,
            column: 7
          }
        },
        "139": {
          start: {
            line: 356,
            column: 8
          },
          end: {
            line: 358,
            column: 9
          }
        },
        "140": {
          start: {
            line: 357,
            column: 10
          },
          end: {
            line: 357,
            column: 60
          }
        },
        "141": {
          start: {
            line: 359,
            column: 8
          },
          end: {
            line: 359,
            column: 22
          }
        },
        "142": {
          start: {
            line: 371,
            column: 0
          },
          end: {
            line: 387,
            column: 2
          }
        },
        "143": {
          start: {
            line: 373,
            column: 2
          },
          end: {
            line: 375,
            column: 3
          }
        },
        "144": {
          start: {
            line: 374,
            column: 4
          },
          end: {
            line: 374,
            column: 26
          }
        },
        "145": {
          start: {
            line: 377,
            column: 19
          },
          end: {
            line: 377,
            column: 26
          }
        },
        "146": {
          start: {
            line: 378,
            column: 19
          },
          end: {
            line: 378,
            column: 52
          }
        },
        "147": {
          start: {
            line: 379,
            column: 20
          },
          end: {
            line: 379,
            column: 70
          }
        },
        "148": {
          start: {
            line: 381,
            column: 2
          },
          end: {
            line: 386,
            column: 4
          }
        },
        "149": {
          start: {
            line: 382,
            column: 20
          },
          end: {
            line: 382,
            column: 27
          }
        },
        "150": {
          start: {
            line: 383,
            column: 20
          },
          end: {
            line: 383,
            column: 42
          }
        },
        "151": {
          start: {
            line: 384,
            column: 20
          },
          end: {
            line: 384,
            column: 53
          }
        },
        "152": {
          start: {
            line: 385,
            column: 4
          },
          end: {
            line: 385,
            column: 51
          }
        },
        "153": {
          start: {
            line: 395,
            column: 0
          },
          end: {
            line: 395,
            column: 38
          }
        },
        "154": {
          start: {
            line: 396,
            column: 0
          },
          end: {
            line: 396,
            column: 33
          }
        },
        "155": {
          start: {
            line: 397,
            column: 0
          },
          end: {
            line: 400,
            column: 1
          }
        },
        "156": {
          start: {
            line: 398,
            column: 2
          },
          end: {
            line: 398,
            column: 33
          }
        },
        "157": {
          start: {
            line: 399,
            column: 2
          },
          end: {
            line: 399,
            column: 34
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 66,
              column: 2
            },
            end: {
              line: 66,
              column: 3
            }
          },
          loc: {
            start: {
              line: 66,
              column: 31
            },
            end: {
              line: 97,
              column: 3
            }
          },
          line: 66
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 80,
              column: 16
            },
            end: {
              line: 80,
              column: 17
            }
          },
          loc: {
            start: {
              line: 80,
              column: 31
            },
            end: {
              line: 80,
              column: 52
            }
          },
          line: 80
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 101,
              column: 2
            },
            end: {
              line: 101,
              column: 3
            }
          },
          loc: {
            start: {
              line: 101,
              column: 23
            },
            end: {
              line: 103,
              column: 3
            }
          },
          line: 101
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 105,
              column: 2
            },
            end: {
              line: 105,
              column: 3
            }
          },
          loc: {
            start: {
              line: 105,
              column: 23
            },
            end: {
              line: 107,
              column: 3
            }
          },
          line: 105
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 111,
              column: 2
            },
            end: {
              line: 111,
              column: 3
            }
          },
          loc: {
            start: {
              line: 111,
              column: 11
            },
            end: {
              line: 117,
              column: 3
            }
          },
          line: 111
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 119,
              column: 2
            },
            end: {
              line: 119,
              column: 3
            }
          },
          loc: {
            start: {
              line: 119,
              column: 9
            },
            end: {
              line: 201,
              column: 3
            }
          },
          line: 119
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 130,
              column: 16
            },
            end: {
              line: 130,
              column: 17
            }
          },
          loc: {
            start: {
              line: 130,
              column: 26
            },
            end: {
              line: 136,
              column: 9
            }
          },
          line: 130
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 179,
              column: 21
            },
            end: {
              line: 179,
              column: 22
            }
          },
          loc: {
            start: {
              line: 179,
              column: 27
            },
            end: {
              line: 190,
              column: 5
            }
          },
          line: 179
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 203,
              column: 2
            },
            end: {
              line: 203,
              column: 3
            }
          },
          loc: {
            start: {
              line: 203,
              column: 9
            },
            end: {
              line: 258,
              column: 3
            }
          },
          line: 203
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 244,
              column: 21
            },
            end: {
              line: 244,
              column: 22
            }
          },
          loc: {
            start: {
              line: 244,
              column: 27
            },
            end: {
              line: 250,
              column: 5
            }
          },
          line: 244
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 260,
              column: 2
            },
            end: {
              line: 260,
              column: 3
            }
          },
          loc: {
            start: {
              line: 260,
              column: 36
            },
            end: {
              line: 262,
              column: 3
            }
          },
          line: 260
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 264,
              column: 2
            },
            end: {
              line: 264,
              column: 3
            }
          },
          loc: {
            start: {
              line: 264,
              column: 12
            },
            end: {
              line: 272,
              column: 3
            }
          },
          line: 264
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 276,
              column: 2
            },
            end: {
              line: 276,
              column: 3
            }
          },
          loc: {
            start: {
              line: 276,
              column: 21
            },
            end: {
              line: 284,
              column: 3
            }
          },
          line: 276
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 286,
              column: 2
            },
            end: {
              line: 286,
              column: 3
            }
          },
          loc: {
            start: {
              line: 286,
              column: 18
            },
            end: {
              line: 289,
              column: 3
            }
          },
          line: 286
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 291,
              column: 2
            },
            end: {
              line: 291,
              column: 3
            }
          },
          loc: {
            start: {
              line: 291,
              column: 15
            },
            end: {
              line: 317,
              column: 3
            }
          },
          line: 291
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 309,
              column: 21
            },
            end: {
              line: 309,
              column: 22
            }
          },
          loc: {
            start: {
              line: 309,
              column: 37
            },
            end: {
              line: 314,
              column: 5
            }
          },
          line: 309
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 319,
              column: 2
            },
            end: {
              line: 319,
              column: 3
            }
          },
          loc: {
            start: {
              line: 319,
              column: 51
            },
            end: {
              line: 327,
              column: 3
            }
          },
          line: 319
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 331,
              column: 2
            },
            end: {
              line: 331,
              column: 3
            }
          },
          loc: {
            start: {
              line: 331,
              column: 40
            },
            end: {
              line: 334,
              column: 3
            }
          },
          line: 331
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 336,
              column: 2
            },
            end: {
              line: 336,
              column: 3
            }
          },
          loc: {
            start: {
              line: 336,
              column: 34
            },
            end: {
              line: 362,
              column: 3
            }
          },
          line: 336
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 337,
              column: 21
            },
            end: {
              line: 337,
              column: 22
            }
          },
          loc: {
            start: {
              line: 337,
              column: 33
            },
            end: {
              line: 361,
              column: 5
            }
          },
          line: 337
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 371,
              column: 59
            },
            end: {
              line: 371,
              column: 60
            }
          },
          loc: {
            start: {
              line: 371,
              column: 76
            },
            end: {
              line: 387,
              column: 1
            }
          },
          line: 371
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 381,
              column: 20
            },
            end: {
              line: 381,
              column: 21
            }
          },
          loc: {
            start: {
              line: 381,
              column: 32
            },
            end: {
              line: 386,
              column: 3
            }
          },
          line: 381
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 397,
              column: 24
            },
            end: {
              line: 397,
              column: 25
            }
          },
          loc: {
            start: {
              line: 397,
              column: 30
            },
            end: {
              line: 400,
              column: 1
            }
          },
          line: 397
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 82,
              column: 6
            },
            end: {
              line: 85,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 82,
              column: 6
            },
            end: {
              line: 85,
              column: 7
            }
          }, {
            start: {
              line: 82,
              column: 6
            },
            end: {
              line: 85,
              column: 7
            }
          }],
          line: 82
        },
        "1": {
          loc: {
            start: {
              line: 82,
              column: 10
            },
            end: {
              line: 82,
              column: 55
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 82,
              column: 10
            },
            end: {
              line: 82,
              column: 27
            }
          }, {
            start: {
              line: 82,
              column: 31
            },
            end: {
              line: 82,
              column: 55
            }
          }],
          line: 82
        },
        "2": {
          loc: {
            start: {
              line: 88,
              column: 19
            },
            end: {
              line: 88,
              column: 65
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 88,
              column: 41
            },
            end: {
              line: 88,
              column: 58
            }
          }, {
            start: {
              line: 88,
              column: 61
            },
            end: {
              line: 88,
              column: 65
            }
          }],
          line: 88
        },
        "3": {
          loc: {
            start: {
              line: 90,
              column: 4
            },
            end: {
              line: 92,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 90,
              column: 4
            },
            end: {
              line: 92,
              column: 5
            }
          }, {
            start: {
              line: 90,
              column: 4
            },
            end: {
              line: 92,
              column: 5
            }
          }],
          line: 90
        },
        "4": {
          loc: {
            start: {
              line: 94,
              column: 4
            },
            end: {
              line: 96,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 94,
              column: 4
            },
            end: {
              line: 96,
              column: 5
            }
          }, {
            start: {
              line: 94,
              column: 4
            },
            end: {
              line: 96,
              column: 5
            }
          }],
          line: 94
        },
        "5": {
          loc: {
            start: {
              line: 112,
              column: 4
            },
            end: {
              line: 116,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 112,
              column: 4
            },
            end: {
              line: 116,
              column: 5
            }
          }, {
            start: {
              line: 112,
              column: 4
            },
            end: {
              line: 116,
              column: 5
            }
          }],
          line: 112
        },
        "6": {
          loc: {
            start: {
              line: 120,
              column: 4
            },
            end: {
              line: 123,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 120,
              column: 4
            },
            end: {
              line: 123,
              column: 5
            }
          }, {
            start: {
              line: 120,
              column: 4
            },
            end: {
              line: 123,
              column: 5
            }
          }],
          line: 120
        },
        "7": {
          loc: {
            start: {
              line: 120,
              column: 8
            },
            end: {
              line: 121,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 120,
              column: 8
            },
            end: {
              line: 120,
              column: 29
            }
          }, {
            start: {
              line: 121,
              column: 6
            },
            end: {
              line: 121,
              column: 47
            }
          }],
          line: 120
        },
        "8": {
          loc: {
            start: {
              line: 128,
              column: 4
            },
            end: {
              line: 141,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 128,
              column: 4
            },
            end: {
              line: 141,
              column: 5
            }
          }, {
            start: {
              line: 128,
              column: 4
            },
            end: {
              line: 141,
              column: 5
            }
          }],
          line: 128
        },
        "9": {
          loc: {
            start: {
              line: 131,
              column: 10
            },
            end: {
              line: 133,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 131,
              column: 10
            },
            end: {
              line: 133,
              column: 11
            }
          }, {
            start: {
              line: 131,
              column: 10
            },
            end: {
              line: 133,
              column: 11
            }
          }],
          line: 131
        },
        "10": {
          loc: {
            start: {
              line: 138,
              column: 6
            },
            end: {
              line: 140,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 138,
              column: 6
            },
            end: {
              line: 140,
              column: 7
            }
          }, {
            start: {
              line: 138,
              column: 6
            },
            end: {
              line: 140,
              column: 7
            }
          }],
          line: 138
        },
        "11": {
          loc: {
            start: {
              line: 143,
              column: 4
            },
            end: {
              line: 148,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 143,
              column: 4
            },
            end: {
              line: 148,
              column: 5
            }
          }, {
            start: {
              line: 143,
              column: 4
            },
            end: {
              line: 148,
              column: 5
            }
          }],
          line: 143
        },
        "12": {
          loc: {
            start: {
              line: 145,
              column: 6
            },
            end: {
              line: 147,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 145,
              column: 6
            },
            end: {
              line: 147,
              column: 7
            }
          }, {
            start: {
              line: 145,
              column: 6
            },
            end: {
              line: 147,
              column: 7
            }
          }],
          line: 145
        },
        "13": {
          loc: {
            start: {
              line: 145,
              column: 10
            },
            end: {
              line: 145,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 145,
              column: 10
            },
            end: {
              line: 145,
              column: 21
            }
          }, {
            start: {
              line: 145,
              column: 25
            },
            end: {
              line: 145,
              column: 53
            }
          }],
          line: 145
        },
        "14": {
          loc: {
            start: {
              line: 152,
              column: 4
            },
            end: {
              line: 154,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 152,
              column: 4
            },
            end: {
              line: 154,
              column: 5
            }
          }, {
            start: {
              line: 152,
              column: 4
            },
            end: {
              line: 154,
              column: 5
            }
          }],
          line: 152
        },
        "15": {
          loc: {
            start: {
              line: 156,
              column: 4
            },
            end: {
              line: 161,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 156,
              column: 4
            },
            end: {
              line: 161,
              column: 5
            }
          }, {
            start: {
              line: 156,
              column: 4
            },
            end: {
              line: 161,
              column: 5
            }
          }],
          line: 156
        },
        "16": {
          loc: {
            start: {
              line: 158,
              column: 6
            },
            end: {
              line: 160,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 158,
              column: 6
            },
            end: {
              line: 160,
              column: 7
            }
          }, {
            start: {
              line: 158,
              column: 6
            },
            end: {
              line: 160,
              column: 7
            }
          }],
          line: 158
        },
        "17": {
          loc: {
            start: {
              line: 171,
              column: 4
            },
            end: {
              line: 175,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 171,
              column: 4
            },
            end: {
              line: 175,
              column: 5
            }
          }, {
            start: {
              line: 171,
              column: 4
            },
            end: {
              line: 175,
              column: 5
            }
          }],
          line: 171
        },
        "18": {
          loc: {
            start: {
              line: 204,
              column: 4
            },
            end: {
              line: 207,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 204,
              column: 4
            },
            end: {
              line: 207,
              column: 5
            }
          }, {
            start: {
              line: 204,
              column: 4
            },
            end: {
              line: 207,
              column: 5
            }
          }],
          line: 204
        },
        "19": {
          loc: {
            start: {
              line: 204,
              column: 8
            },
            end: {
              line: 205,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 204,
              column: 8
            },
            end: {
              line: 204,
              column: 29
            }
          }, {
            start: {
              line: 205,
              column: 6
            },
            end: {
              line: 205,
              column: 48
            }
          }],
          line: 204
        },
        "20": {
          loc: {
            start: {
              line: 211,
              column: 4
            },
            end: {
              line: 213,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 211,
              column: 4
            },
            end: {
              line: 213,
              column: 5
            }
          }, {
            start: {
              line: 211,
              column: 4
            },
            end: {
              line: 213,
              column: 5
            }
          }],
          line: 211
        },
        "21": {
          loc: {
            start: {
              line: 227,
              column: 4
            },
            end: {
              line: 240,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 227,
              column: 4
            },
            end: {
              line: 240,
              column: 5
            }
          }, {
            start: {
              line: 227,
              column: 4
            },
            end: {
              line: 240,
              column: 5
            }
          }],
          line: 227
        },
        "22": {
          loc: {
            start: {
              line: 232,
              column: 8
            },
            end: {
              line: 238,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 232,
              column: 8
            },
            end: {
              line: 238,
              column: 9
            }
          }, {
            start: {
              line: 232,
              column: 8
            },
            end: {
              line: 238,
              column: 9
            }
          }],
          line: 232
        },
        "23": {
          loc: {
            start: {
              line: 234,
              column: 10
            },
            end: {
              line: 237,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 234,
              column: 10
            },
            end: {
              line: 237,
              column: 11
            }
          }, {
            start: {
              line: 234,
              column: 10
            },
            end: {
              line: 237,
              column: 11
            }
          }],
          line: 234
        },
        "24": {
          loc: {
            start: {
              line: 288,
              column: 11
            },
            end: {
              line: 288,
              column: 56
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 288,
              column: 22
            },
            end: {
              line: 288,
              column: 37
            }
          }, {
            start: {
              line: 288,
              column: 40
            },
            end: {
              line: 288,
              column: 56
            }
          }],
          line: 288
        },
        "25": {
          loc: {
            start: {
              line: 294,
              column: 4
            },
            end: {
              line: 303,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 294,
              column: 4
            },
            end: {
              line: 303,
              column: 5
            }
          }, {
            start: {
              line: 294,
              column: 4
            },
            end: {
              line: 303,
              column: 5
            }
          }],
          line: 294
        },
        "26": {
          loc: {
            start: {
              line: 298,
              column: 6
            },
            end: {
              line: 300,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 298,
              column: 6
            },
            end: {
              line: 300,
              column: 7
            }
          }, {
            start: {
              line: 298,
              column: 6
            },
            end: {
              line: 300,
              column: 7
            }
          }],
          line: 298
        },
        "27": {
          loc: {
            start: {
              line: 322,
              column: 4
            },
            end: {
              line: 326,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 322,
              column: 4
            },
            end: {
              line: 326,
              column: 5
            }
          }, {
            start: {
              line: 322,
              column: 4
            },
            end: {
              line: 326,
              column: 5
            }
          }],
          line: 322
        },
        "28": {
          loc: {
            start: {
              line: 333,
              column: 11
            },
            end: {
              line: 333,
              column: 61
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 333,
              column: 22
            },
            end: {
              line: 333,
              column: 54
            }
          }, {
            start: {
              line: 333,
              column: 57
            },
            end: {
              line: 333,
              column: 61
            }
          }],
          line: 333
        },
        "29": {
          loc: {
            start: {
              line: 343,
              column: 11
            },
            end: {
              line: 343,
              column: 61
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 343,
              column: 50
            },
            end: {
              line: 343,
              column: 56
            }
          }, {
            start: {
              line: 343,
              column: 59
            },
            end: {
              line: 343,
              column: 61
            }
          }],
          line: 343
        },
        "30": {
          loc: {
            start: {
              line: 343,
              column: 11
            },
            end: {
              line: 343,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 343,
              column: 11
            },
            end: {
              line: 343,
              column: 37
            }
          }, {
            start: {
              line: 343,
              column: 41
            },
            end: {
              line: 343,
              column: 47
            }
          }],
          line: 343
        },
        "31": {
          loc: {
            start: {
              line: 346,
              column: 6
            },
            end: {
              line: 348,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 346,
              column: 6
            },
            end: {
              line: 348,
              column: 7
            }
          }, {
            start: {
              line: 346,
              column: 6
            },
            end: {
              line: 348,
              column: 7
            }
          }],
          line: 346
        },
        "32": {
          loc: {
            start: {
              line: 346,
              column: 10
            },
            end: {
              line: 346,
              column: 61
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 346,
              column: 10
            },
            end: {
              line: 346,
              column: 15
            }
          }, {
            start: {
              line: 346,
              column: 19
            },
            end: {
              line: 346,
              column: 33
            }
          }, {
            start: {
              line: 346,
              column: 37
            },
            end: {
              line: 346,
              column: 61
            }
          }],
          line: 346
        },
        "33": {
          loc: {
            start: {
              line: 350,
              column: 6
            },
            end: {
              line: 353,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 350,
              column: 6
            },
            end: {
              line: 353,
              column: 7
            }
          }, {
            start: {
              line: 350,
              column: 6
            },
            end: {
              line: 353,
              column: 7
            }
          }],
          line: 350
        },
        "34": {
          loc: {
            start: {
              line: 355,
              column: 6
            },
            end: {
              line: 360,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 355,
              column: 6
            },
            end: {
              line: 360,
              column: 7
            }
          }, {
            start: {
              line: 355,
              column: 6
            },
            end: {
              line: 360,
              column: 7
            }
          }],
          line: 355
        },
        "35": {
          loc: {
            start: {
              line: 356,
              column: 8
            },
            end: {
              line: 358,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 356,
              column: 8
            },
            end: {
              line: 358,
              column: 9
            }
          }, {
            start: {
              line: 356,
              column: 8
            },
            end: {
              line: 358,
              column: 9
            }
          }],
          line: 356
        },
        "36": {
          loc: {
            start: {
              line: 373,
              column: 2
            },
            end: {
              line: 375,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 373,
              column: 2
            },
            end: {
              line: 375,
              column: 3
            }
          }, {
            start: {
              line: 373,
              column: 2
            },
            end: {
              line: 375,
              column: 3
            }
          }],
          line: 373
        },
        "37": {
          loc: {
            start: {
              line: 384,
              column: 20
            },
            end: {
              line: 384,
              column: 53
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 384,
              column: 27
            },
            end: {
              line: 384,
              column: 35
            }
          }, {
            start: {
              line: 384,
              column: 38
            },
            end: {
              line: 384,
              column: 53
            }
          }],
          line: 384
        }
      },
      s: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 0,
        "13": 0,
        "14": 0,
        "15": 0,
        "16": 0,
        "17": 0,
        "18": 0,
        "19": 0,
        "20": 0,
        "21": 0,
        "22": 0,
        "23": 0,
        "24": 0,
        "25": 0,
        "26": 0,
        "27": 0,
        "28": 0,
        "29": 0,
        "30": 0,
        "31": 0,
        "32": 0,
        "33": 0,
        "34": 0,
        "35": 0,
        "36": 0,
        "37": 0,
        "38": 0,
        "39": 0,
        "40": 0,
        "41": 0,
        "42": 0,
        "43": 0,
        "44": 0,
        "45": 0,
        "46": 0,
        "47": 0,
        "48": 0,
        "49": 0,
        "50": 0,
        "51": 0,
        "52": 0,
        "53": 0,
        "54": 0,
        "55": 0,
        "56": 0,
        "57": 0,
        "58": 0,
        "59": 0,
        "60": 0,
        "61": 0,
        "62": 0,
        "63": 0,
        "64": 0,
        "65": 0,
        "66": 0,
        "67": 0,
        "68": 0,
        "69": 0,
        "70": 0,
        "71": 0,
        "72": 0,
        "73": 0,
        "74": 0,
        "75": 0,
        "76": 0,
        "77": 0,
        "78": 0,
        "79": 0,
        "80": 0,
        "81": 0,
        "82": 0,
        "83": 0,
        "84": 0,
        "85": 0,
        "86": 0,
        "87": 0,
        "88": 0,
        "89": 0,
        "90": 0,
        "91": 0,
        "92": 0,
        "93": 0,
        "94": 0,
        "95": 0,
        "96": 0,
        "97": 0,
        "98": 0,
        "99": 0,
        "100": 0,
        "101": 0,
        "102": 0,
        "103": 0,
        "104": 0,
        "105": 0,
        "106": 0,
        "107": 0,
        "108": 0,
        "109": 0,
        "110": 0,
        "111": 0,
        "112": 0,
        "113": 0,
        "114": 0,
        "115": 0,
        "116": 0,
        "117": 0,
        "118": 0,
        "119": 0,
        "120": 0,
        "121": 0,
        "122": 0,
        "123": 0,
        "124": 0,
        "125": 0,
        "126": 0,
        "127": 0,
        "128": 0,
        "129": 0,
        "130": 0,
        "131": 0,
        "132": 0,
        "133": 0,
        "134": 0,
        "135": 0,
        "136": 0,
        "137": 0,
        "138": 0,
        "139": 0,
        "140": 0,
        "141": 0,
        "142": 0,
        "143": 0,
        "144": 0,
        "145": 0,
        "146": 0,
        "147": 0,
        "148": 0,
        "149": 0,
        "150": 0,
        "151": 0,
        "152": 0,
        "153": 0,
        "154": 0,
        "155": 0,
        "156": 0,
        "157": 0
      },
      f: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 0,
        "13": 0,
        "14": 0,
        "15": 0,
        "16": 0,
        "17": 0,
        "18": 0,
        "19": 0,
        "20": 0,
        "21": 0,
        "22": 0
      },
      b: {
        "0": [0, 0],
        "1": [0, 0],
        "2": [0, 0],
        "3": [0, 0],
        "4": [0, 0],
        "5": [0, 0],
        "6": [0, 0],
        "7": [0, 0],
        "8": [0, 0],
        "9": [0, 0],
        "10": [0, 0],
        "11": [0, 0],
        "12": [0, 0],
        "13": [0, 0],
        "14": [0, 0],
        "15": [0, 0],
        "16": [0, 0],
        "17": [0, 0],
        "18": [0, 0],
        "19": [0, 0],
        "20": [0, 0],
        "21": [0, 0],
        "22": [0, 0],
        "23": [0, 0],
        "24": [0, 0],
        "25": [0, 0],
        "26": [0, 0],
        "27": [0, 0],
        "28": [0, 0],
        "29": [0, 0],
        "30": [0, 0],
        "31": [0, 0],
        "32": [0, 0, 0],
        "33": [0, 0],
        "34": [0, 0],
        "35": [0, 0],
        "36": [0, 0],
        "37": [0, 0]
      },
      _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
      hash: "a861ca5e635d79fb8532deffe8280f6ecaec00e4"
    };
    var coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    return coverage[path] = coverageData;
  }();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_2itwqk888x.s[0]++, 'collapse');
  var VERSION = (cov_2itwqk888x.s[1]++, '4.4.1');
  var DATA_KEY = (cov_2itwqk888x.s[2]++, 'bs.collapse');
  var EVENT_KEY = (cov_2itwqk888x.s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_2itwqk888x.s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_2itwqk888x.s[5]++, $.fn[NAME]);
  var Default = (cov_2itwqk888x.s[6]++, {
    toggle: true,
    parent: ''
  });
  var DefaultType = (cov_2itwqk888x.s[7]++, {
    toggle: 'boolean',
    parent: '(string|element)'
  });
  var Event = (cov_2itwqk888x.s[8]++, {
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  });
  var ClassName = (cov_2itwqk888x.s[9]++, {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  });
  var Dimension = (cov_2itwqk888x.s[10]++, {
    WIDTH: 'width',
    HEIGHT: 'height'
  });
  var Selector = (cov_2itwqk888x.s[11]++, {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
  });
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = /*#__PURE__*/function () {
    function Collapse(element, config) {
      cov_2itwqk888x.f[0]++;
      cov_2itwqk888x.s[12]++;
      this._isTransitioning = false;
      cov_2itwqk888x.s[13]++;
      this._element = element;
      cov_2itwqk888x.s[14]++;
      this._config = this._getConfig(config);
      cov_2itwqk888x.s[15]++;
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = (cov_2itwqk888x.s[16]++, [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE)));
      cov_2itwqk888x.s[17]++;

      for (var i = (cov_2itwqk888x.s[18]++, 0), len = (cov_2itwqk888x.s[19]++, toggleList.length); i < len; i++) {
        var elem = (cov_2itwqk888x.s[20]++, toggleList[i]);
        var selector = (cov_2itwqk888x.s[21]++, Util.getSelectorFromElement(elem));
        var filterElement = (cov_2itwqk888x.s[22]++, [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          cov_2itwqk888x.f[1]++;
          cov_2itwqk888x.s[23]++;
          return foundElem === element;
        }));
        cov_2itwqk888x.s[24]++;

        if ((cov_2itwqk888x.b[1][0]++, selector !== null) && (cov_2itwqk888x.b[1][1]++, filterElement.length > 0)) {
          cov_2itwqk888x.b[0][0]++;
          cov_2itwqk888x.s[25]++;
          this._selector = selector;
          cov_2itwqk888x.s[26]++;

          this._triggerArray.push(elem);
        } else {
          cov_2itwqk888x.b[0][1]++;
        }
      }

      cov_2itwqk888x.s[27]++;
      this._parent = this._config.parent ? (cov_2itwqk888x.b[2][0]++, this._getParent()) : (cov_2itwqk888x.b[2][1]++, null);
      cov_2itwqk888x.s[28]++;

      if (!this._config.parent) {
        cov_2itwqk888x.b[3][0]++;
        cov_2itwqk888x.s[29]++;

        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      } else {
        cov_2itwqk888x.b[3][1]++;
      }

      cov_2itwqk888x.s[30]++;

      if (this._config.toggle) {
        cov_2itwqk888x.b[4][0]++;
        cov_2itwqk888x.s[31]++;
        this.toggle();
      } else {
        cov_2itwqk888x.b[4][1]++;
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      cov_2itwqk888x.f[4]++;
      cov_2itwqk888x.s[34]++;

      if ($(this._element).hasClass(ClassName.SHOW)) {
        cov_2itwqk888x.b[5][0]++;
        cov_2itwqk888x.s[35]++;
        this.hide();
      } else {
        cov_2itwqk888x.b[5][1]++;
        cov_2itwqk888x.s[36]++;
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      cov_2itwqk888x.f[5]++;
      cov_2itwqk888x.s[37]++;

      if ((cov_2itwqk888x.b[7][0]++, this._isTransitioning) || (cov_2itwqk888x.b[7][1]++, $(this._element).hasClass(ClassName.SHOW))) {
        cov_2itwqk888x.b[6][0]++;
        cov_2itwqk888x.s[38]++;
        return;
      } else {
        cov_2itwqk888x.b[6][1]++;
      }

      var actives;
      var activesData;
      cov_2itwqk888x.s[39]++;

      if (this._parent) {
        cov_2itwqk888x.b[8][0]++;
        cov_2itwqk888x.s[40]++;
        actives = [].slice.call(this._parent.querySelectorAll(Selector.ACTIVES)).filter(function (elem) {
          cov_2itwqk888x.f[6]++;
          cov_2itwqk888x.s[41]++;

          if (typeof _this._config.parent === 'string') {
            cov_2itwqk888x.b[9][0]++;
            cov_2itwqk888x.s[42]++;
            return elem.getAttribute('data-parent') === _this._config.parent;
          } else {
            cov_2itwqk888x.b[9][1]++;
          }

          cov_2itwqk888x.s[43]++;
          return elem.classList.contains(ClassName.COLLAPSE);
        });
        cov_2itwqk888x.s[44]++;

        if (actives.length === 0) {
          cov_2itwqk888x.b[10][0]++;
          cov_2itwqk888x.s[45]++;
          actives = null;
        } else {
          cov_2itwqk888x.b[10][1]++;
        }
      } else {
        cov_2itwqk888x.b[8][1]++;
      }

      cov_2itwqk888x.s[46]++;

      if (actives) {
        cov_2itwqk888x.b[11][0]++;
        cov_2itwqk888x.s[47]++;
        activesData = $(actives).not(this._selector).data(DATA_KEY);
        cov_2itwqk888x.s[48]++;

        if ((cov_2itwqk888x.b[13][0]++, activesData) && (cov_2itwqk888x.b[13][1]++, activesData._isTransitioning)) {
          cov_2itwqk888x.b[12][0]++;
          cov_2itwqk888x.s[49]++;
          return;
        } else {
          cov_2itwqk888x.b[12][1]++;
        }
      } else {
        cov_2itwqk888x.b[11][1]++;
      }

      var startEvent = (cov_2itwqk888x.s[50]++, $.Event(Event.SHOW));
      cov_2itwqk888x.s[51]++;
      $(this._element).trigger(startEvent);
      cov_2itwqk888x.s[52]++;

      if (startEvent.isDefaultPrevented()) {
        cov_2itwqk888x.b[14][0]++;
        cov_2itwqk888x.s[53]++;
        return;
      } else {
        cov_2itwqk888x.b[14][1]++;
      }

      cov_2itwqk888x.s[54]++;

      if (actives) {
        cov_2itwqk888x.b[15][0]++;
        cov_2itwqk888x.s[55]++;

        Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

        cov_2itwqk888x.s[56]++;

        if (!activesData) {
          cov_2itwqk888x.b[16][0]++;
          cov_2itwqk888x.s[57]++;
          $(actives).data(DATA_KEY, null);
        } else {
          cov_2itwqk888x.b[16][1]++;
        }
      } else {
        cov_2itwqk888x.b[15][1]++;
      }

      var dimension = (cov_2itwqk888x.s[58]++, this._getDimension());
      cov_2itwqk888x.s[59]++;
      $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
      cov_2itwqk888x.s[60]++;
      this._element.style[dimension] = 0;
      cov_2itwqk888x.s[61]++;

      if (this._triggerArray.length) {
        cov_2itwqk888x.b[17][0]++;
        cov_2itwqk888x.s[62]++;
        $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
      } else {
        cov_2itwqk888x.b[17][1]++;
      }

      cov_2itwqk888x.s[63]++;
      this.setTransitioning(true);
      cov_2itwqk888x.s[64]++;

      var complete = function complete() {
        cov_2itwqk888x.f[7]++;
        cov_2itwqk888x.s[65]++;
        $(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);
        cov_2itwqk888x.s[66]++;
        _this._element.style[dimension] = '';
        cov_2itwqk888x.s[67]++;

        _this.setTransitioning(false);

        cov_2itwqk888x.s[68]++;
        $(_this._element).trigger(Event.SHOWN);
      };

      var capitalizedDimension = (cov_2itwqk888x.s[69]++, dimension[0].toUpperCase() + dimension.slice(1));
      var scrollSize = (cov_2itwqk888x.s[70]++, "scroll" + capitalizedDimension);
      var transitionDuration = (cov_2itwqk888x.s[71]++, Util.getTransitionDurationFromElement(this._element));
      cov_2itwqk888x.s[72]++;
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      cov_2itwqk888x.s[73]++;
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      cov_2itwqk888x.f[8]++;
      cov_2itwqk888x.s[74]++;

      if ((cov_2itwqk888x.b[19][0]++, this._isTransitioning) || (cov_2itwqk888x.b[19][1]++, !$(this._element).hasClass(ClassName.SHOW))) {
        cov_2itwqk888x.b[18][0]++;
        cov_2itwqk888x.s[75]++;
        return;
      } else {
        cov_2itwqk888x.b[18][1]++;
      }

      var startEvent = (cov_2itwqk888x.s[76]++, $.Event(Event.HIDE));
      cov_2itwqk888x.s[77]++;
      $(this._element).trigger(startEvent);
      cov_2itwqk888x.s[78]++;

      if (startEvent.isDefaultPrevented()) {
        cov_2itwqk888x.b[20][0]++;
        cov_2itwqk888x.s[79]++;
        return;
      } else {
        cov_2itwqk888x.b[20][1]++;
      }

      var dimension = (cov_2itwqk888x.s[80]++, this._getDimension());
      cov_2itwqk888x.s[81]++;
      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      cov_2itwqk888x.s[82]++;
      Util.reflow(this._element);
      cov_2itwqk888x.s[83]++;
      $(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);
      var triggerArrayLength = (cov_2itwqk888x.s[84]++, this._triggerArray.length);
      cov_2itwqk888x.s[85]++;

      if (triggerArrayLength > 0) {
        cov_2itwqk888x.b[21][0]++;
        cov_2itwqk888x.s[86]++;

        for (var i = (cov_2itwqk888x.s[87]++, 0); i < triggerArrayLength; i++) {
          var trigger = (cov_2itwqk888x.s[88]++, this._triggerArray[i]);
          var selector = (cov_2itwqk888x.s[89]++, Util.getSelectorFromElement(trigger));
          cov_2itwqk888x.s[90]++;

          if (selector !== null) {
            cov_2itwqk888x.b[22][0]++;
            var $elem = (cov_2itwqk888x.s[91]++, $([].slice.call(document.querySelectorAll(selector))));
            cov_2itwqk888x.s[92]++;

            if (!$elem.hasClass(ClassName.SHOW)) {
              cov_2itwqk888x.b[23][0]++;
              cov_2itwqk888x.s[93]++;
              $(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
            } else {
              cov_2itwqk888x.b[23][1]++;
            }
          } else {
            cov_2itwqk888x.b[22][1]++;
          }
        }
      } else {
        cov_2itwqk888x.b[21][1]++;
      }

      cov_2itwqk888x.s[94]++;
      this.setTransitioning(true);
      cov_2itwqk888x.s[95]++;

      var complete = function complete() {
        cov_2itwqk888x.f[9]++;
        cov_2itwqk888x.s[96]++;

        _this2.setTransitioning(false);

        cov_2itwqk888x.s[97]++;
        $(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
      };

      cov_2itwqk888x.s[98]++;
      this._element.style[dimension] = '';
      var transitionDuration = (cov_2itwqk888x.s[99]++, Util.getTransitionDurationFromElement(this._element));
      cov_2itwqk888x.s[100]++;
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      cov_2itwqk888x.f[10]++;
      cov_2itwqk888x.s[101]++;
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      cov_2itwqk888x.f[11]++;
      cov_2itwqk888x.s[102]++;
      $.removeData(this._element, DATA_KEY);
      cov_2itwqk888x.s[103]++;
      this._config = null;
      cov_2itwqk888x.s[104]++;
      this._parent = null;
      cov_2itwqk888x.s[105]++;
      this._element = null;
      cov_2itwqk888x.s[106]++;
      this._triggerArray = null;
      cov_2itwqk888x.s[107]++;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      cov_2itwqk888x.f[12]++;
      cov_2itwqk888x.s[108]++;
      config = _objectSpread2(_objectSpread2({}, Default), config);
      cov_2itwqk888x.s[109]++;
      config.toggle = Boolean(config.toggle); // Coerce string values

      cov_2itwqk888x.s[110]++;
      Util.typeCheckConfig(NAME, config, DefaultType);
      cov_2itwqk888x.s[111]++;
      return config;
    };

    _proto._getDimension = function _getDimension() {
      cov_2itwqk888x.f[13]++;
      var hasWidth = (cov_2itwqk888x.s[112]++, $(this._element).hasClass(Dimension.WIDTH));
      cov_2itwqk888x.s[113]++;
      return hasWidth ? (cov_2itwqk888x.b[24][0]++, Dimension.WIDTH) : (cov_2itwqk888x.b[24][1]++, Dimension.HEIGHT);
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      cov_2itwqk888x.f[14]++;
      var parent;
      cov_2itwqk888x.s[114]++;

      if (Util.isElement(this._config.parent)) {
        cov_2itwqk888x.b[25][0]++;
        cov_2itwqk888x.s[115]++;
        parent = this._config.parent; // It's a jQuery object

        cov_2itwqk888x.s[116]++;

        if (typeof this._config.parent.jquery !== 'undefined') {
          cov_2itwqk888x.b[26][0]++;
          cov_2itwqk888x.s[117]++;
          parent = this._config.parent[0];
        } else {
          cov_2itwqk888x.b[26][1]++;
        }
      } else {
        cov_2itwqk888x.b[25][1]++;
        cov_2itwqk888x.s[118]++;
        parent = document.querySelector(this._config.parent);
      }

      var selector = (cov_2itwqk888x.s[119]++, "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]");
      var children = (cov_2itwqk888x.s[120]++, [].slice.call(parent.querySelectorAll(selector)));
      cov_2itwqk888x.s[121]++;
      $(children).each(function (i, element) {
        cov_2itwqk888x.f[15]++;
        cov_2itwqk888x.s[122]++;

        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      cov_2itwqk888x.s[123]++;
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      cov_2itwqk888x.f[16]++;
      var isOpen = (cov_2itwqk888x.s[124]++, $(element).hasClass(ClassName.SHOW));
      cov_2itwqk888x.s[125]++;

      if (triggerArray.length) {
        cov_2itwqk888x.b[27][0]++;
        cov_2itwqk888x.s[126]++;
        $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      } else {
        cov_2itwqk888x.b[27][1]++;
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      cov_2itwqk888x.f[17]++;
      var selector = (cov_2itwqk888x.s[127]++, Util.getSelectorFromElement(element));
      cov_2itwqk888x.s[128]++;
      return selector ? (cov_2itwqk888x.b[28][0]++, document.querySelector(selector)) : (cov_2itwqk888x.b[28][1]++, null);
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      cov_2itwqk888x.f[18]++;
      cov_2itwqk888x.s[129]++;
      return this.each(function () {
        cov_2itwqk888x.f[19]++;
        var $this = (cov_2itwqk888x.s[130]++, $(this));
        var data = (cov_2itwqk888x.s[131]++, $this.data(DATA_KEY));

        var _config = (cov_2itwqk888x.s[132]++, _objectSpread2(_objectSpread2(_objectSpread2({}, Default), $this.data()), (cov_2itwqk888x.b[30][0]++, typeof config === 'object') && (cov_2itwqk888x.b[30][1]++, config) ? (cov_2itwqk888x.b[29][0]++, config) : (cov_2itwqk888x.b[29][1]++, {})));

        cov_2itwqk888x.s[133]++;

        if ((cov_2itwqk888x.b[32][0]++, !data) && (cov_2itwqk888x.b[32][1]++, _config.toggle) && (cov_2itwqk888x.b[32][2]++, /show|hide/.test(config))) {
          cov_2itwqk888x.b[31][0]++;
          cov_2itwqk888x.s[134]++;
          _config.toggle = false;
        } else {
          cov_2itwqk888x.b[31][1]++;
        }

        cov_2itwqk888x.s[135]++;

        if (!data) {
          cov_2itwqk888x.b[33][0]++;
          cov_2itwqk888x.s[136]++;
          data = new Collapse(this, _config);
          cov_2itwqk888x.s[137]++;
          $this.data(DATA_KEY, data);
        } else {
          cov_2itwqk888x.b[33][1]++;
        }

        cov_2itwqk888x.s[138]++;

        if (typeof config === 'string') {
          cov_2itwqk888x.b[34][0]++;
          cov_2itwqk888x.s[139]++;

          if (typeof data[config] === 'undefined') {
            cov_2itwqk888x.b[35][0]++;
            cov_2itwqk888x.s[140]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_2itwqk888x.b[35][1]++;
          }

          cov_2itwqk888x.s[141]++;
          data[config]();
        } else {
          cov_2itwqk888x.b[34][1]++;
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        cov_2itwqk888x.f[2]++;
        cov_2itwqk888x.s[32]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_2itwqk888x.f[3]++;
        cov_2itwqk888x.s[33]++;
        return Default;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  cov_2itwqk888x.s[142]++;
  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    cov_2itwqk888x.f[20]++;
    cov_2itwqk888x.s[143]++;

    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      cov_2itwqk888x.b[36][0]++;
      cov_2itwqk888x.s[144]++;
      event.preventDefault();
    } else {
      cov_2itwqk888x.b[36][1]++;
    }

    var $trigger = (cov_2itwqk888x.s[145]++, $(this));
    var selector = (cov_2itwqk888x.s[146]++, Util.getSelectorFromElement(this));
    var selectors = (cov_2itwqk888x.s[147]++, [].slice.call(document.querySelectorAll(selector)));
    cov_2itwqk888x.s[148]++;
    $(selectors).each(function () {
      cov_2itwqk888x.f[21]++;
      var $target = (cov_2itwqk888x.s[149]++, $(this));
      var data = (cov_2itwqk888x.s[150]++, $target.data(DATA_KEY));
      var config = (cov_2itwqk888x.s[151]++, data ? (cov_2itwqk888x.b[37][0]++, 'toggle') : (cov_2itwqk888x.b[37][1]++, $trigger.data()));
      cov_2itwqk888x.s[152]++;

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  cov_2itwqk888x.s[153]++;
  $.fn[NAME] = Collapse._jQueryInterface;
  cov_2itwqk888x.s[154]++;
  $.fn[NAME].Constructor = Collapse;
  cov_2itwqk888x.s[155]++;

  $.fn[NAME].noConflict = function () {
    cov_2itwqk888x.f[22]++;
    cov_2itwqk888x.s[156]++;
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    cov_2itwqk888x.s[157]++;
    return Collapse._jQueryInterface;
  };

  return Collapse;

})));
//# sourceMappingURL=collapse.js.map

/*!
  * Bootstrap modal.js v4.4.1-1 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2020 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global = global || self, global.Modal = factory(global.jQuery, global.Util));
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

  var cov_10c74op6cl = function () {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/modal.js";
    var hash = "452e160e496237dc0ee5287230121267cc88fa3b";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/modal.js",
      statementMap: {
        "0": {
          start: {
            line: 17,
            column: 27
          },
          end: {
            line: 17,
            column: 34
          }
        },
        "1": {
          start: {
            line: 18,
            column: 27
          },
          end: {
            line: 18,
            column: 34
          }
        },
        "2": {
          start: {
            line: 19,
            column: 27
          },
          end: {
            line: 19,
            column: 37
          }
        },
        "3": {
          start: {
            line: 20,
            column: 27
          },
          end: {
            line: 20,
            column: 41
          }
        },
        "4": {
          start: {
            line: 21,
            column: 27
          },
          end: {
            line: 21,
            column: 38
          }
        },
        "5": {
          start: {
            line: 22,
            column: 27
          },
          end: {
            line: 22,
            column: 37
          }
        },
        "6": {
          start: {
            line: 23,
            column: 27
          },
          end: {
            line: 23,
            column: 29
          }
        },
        "7": {
          start: {
            line: 25,
            column: 16
          },
          end: {
            line: 30,
            column: 1
          }
        },
        "8": {
          start: {
            line: 32,
            column: 20
          },
          end: {
            line: 37,
            column: 1
          }
        },
        "9": {
          start: {
            line: 39,
            column: 14
          },
          end: {
            line: 52,
            column: 1
          }
        },
        "10": {
          start: {
            line: 54,
            column: 18
          },
          end: {
            line: 62,
            column: 1
          }
        },
        "11": {
          start: {
            line: 64,
            column: 17
          },
          end: {
            line: 71,
            column: 1
          }
        },
        "12": {
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 81,
            column: 55
          }
        },
        "13": {
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 82,
            column: 39
          }
        },
        "14": {
          start: {
            line: 83,
            column: 4
          },
          end: {
            line: 83,
            column: 70
          }
        },
        "15": {
          start: {
            line: 84,
            column: 4
          },
          end: {
            line: 84,
            column: 36
          }
        },
        "16": {
          start: {
            line: 85,
            column: 4
          },
          end: {
            line: 85,
            column: 37
          }
        },
        "17": {
          start: {
            line: 86,
            column: 4
          },
          end: {
            line: 86,
            column: 37
          }
        },
        "18": {
          start: {
            line: 87,
            column: 4
          },
          end: {
            line: 87,
            column: 37
          }
        },
        "19": {
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 88,
            column: 37
          }
        },
        "20": {
          start: {
            line: 89,
            column: 4
          },
          end: {
            line: 89,
            column: 33
          }
        },
        "21": {
          start: {
            line: 95,
            column: 4
          },
          end: {
            line: 95,
            column: 18
          }
        },
        "22": {
          start: {
            line: 99,
            column: 4
          },
          end: {
            line: 99,
            column: 18
          }
        },
        "23": {
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 105,
            column: 65
          }
        },
        "24": {
          start: {
            line: 109,
            column: 4
          },
          end: {
            line: 111,
            column: 5
          }
        },
        "25": {
          start: {
            line: 110,
            column: 6
          },
          end: {
            line: 110,
            column: 12
          }
        },
        "26": {
          start: {
            line: 113,
            column: 4
          },
          end: {
            line: 115,
            column: 5
          }
        },
        "27": {
          start: {
            line: 114,
            column: 6
          },
          end: {
            line: 114,
            column: 34
          }
        },
        "28": {
          start: {
            line: 117,
            column: 22
          },
          end: {
            line: 119,
            column: 6
          }
        },
        "29": {
          start: {
            line: 121,
            column: 4
          },
          end: {
            line: 121,
            column: 39
          }
        },
        "30": {
          start: {
            line: 123,
            column: 4
          },
          end: {
            line: 125,
            column: 5
          }
        },
        "31": {
          start: {
            line: 124,
            column: 6
          },
          end: {
            line: 124,
            column: 12
          }
        },
        "32": {
          start: {
            line: 127,
            column: 4
          },
          end: {
            line: 127,
            column: 24
          }
        },
        "33": {
          start: {
            line: 129,
            column: 4
          },
          end: {
            line: 129,
            column: 26
          }
        },
        "34": {
          start: {
            line: 130,
            column: 4
          },
          end: {
            line: 130,
            column: 24
          }
        },
        "35": {
          start: {
            line: 132,
            column: 4
          },
          end: {
            line: 132,
            column: 24
          }
        },
        "36": {
          start: {
            line: 134,
            column: 4
          },
          end: {
            line: 134,
            column: 26
          }
        },
        "37": {
          start: {
            line: 135,
            column: 4
          },
          end: {
            line: 135,
            column: 26
          }
        },
        "38": {
          start: {
            line: 137,
            column: 4
          },
          end: {
            line: 141,
            column: 5
          }
        },
        "39": {
          start: {
            line: 140,
            column: 17
          },
          end: {
            line: 140,
            column: 33
          }
        },
        "40": {
          start: {
            line: 143,
            column: 4
          },
          end: {
            line: 149,
            column: 6
          }
        },
        "41": {
          start: {
            line: 144,
            column: 6
          },
          end: {
            line: 148,
            column: 8
          }
        },
        "42": {
          start: {
            line: 145,
            column: 8
          },
          end: {
            line: 147,
            column: 9
          }
        },
        "43": {
          start: {
            line: 146,
            column: 10
          },
          end: {
            line: 146,
            column: 42
          }
        },
        "44": {
          start: {
            line: 151,
            column: 4
          },
          end: {
            line: 151,
            column: 62
          }
        },
        "45": {
          start: {
            line: 151,
            column: 29
          },
          end: {
            line: 151,
            column: 61
          }
        },
        "46": {
          start: {
            line: 155,
            column: 4
          },
          end: {
            line: 157,
            column: 5
          }
        },
        "47": {
          start: {
            line: 156,
            column: 6
          },
          end: {
            line: 156,
            column: 28
          }
        },
        "48": {
          start: {
            line: 159,
            column: 4
          },
          end: {
            line: 161,
            column: 5
          }
        },
        "49": {
          start: {
            line: 160,
            column: 6
          },
          end: {
            line: 160,
            column: 12
          }
        },
        "50": {
          start: {
            line: 163,
            column: 22
          },
          end: {
            line: 163,
            column: 41
          }
        },
        "51": {
          start: {
            line: 165,
            column: 4
          },
          end: {
            line: 165,
            column: 39
          }
        },
        "52": {
          start: {
            line: 167,
            column: 4
          },
          end: {
            line: 169,
            column: 5
          }
        },
        "53": {
          start: {
            line: 168,
            column: 6
          },
          end: {
            line: 168,
            column: 12
          }
        },
        "54": {
          start: {
            line: 171,
            column: 4
          },
          end: {
            line: 171,
            column: 25
          }
        },
        "55": {
          start: {
            line: 172,
            column: 23
          },
          end: {
            line: 172,
            column: 64
          }
        },
        "56": {
          start: {
            line: 174,
            column: 4
          },
          end: {
            line: 176,
            column: 5
          }
        },
        "57": {
          start: {
            line: 175,
            column: 6
          },
          end: {
            line: 175,
            column: 34
          }
        },
        "58": {
          start: {
            line: 178,
            column: 4
          },
          end: {
            line: 178,
            column: 26
          }
        },
        "59": {
          start: {
            line: 179,
            column: 4
          },
          end: {
            line: 179,
            column: 26
          }
        },
        "60": {
          start: {
            line: 181,
            column: 4
          },
          end: {
            line: 181,
            column: 34
          }
        },
        "61": {
          start: {
            line: 183,
            column: 4
          },
          end: {
            line: 183,
            column: 48
          }
        },
        "62": {
          start: {
            line: 185,
            column: 4
          },
          end: {
            line: 185,
            column: 45
          }
        },
        "63": {
          start: {
            line: 186,
            column: 4
          },
          end: {
            line: 186,
            column: 48
          }
        },
        "64": {
          start: {
            line: 189,
            column: 4
          },
          end: {
            line: 197,
            column: 5
          }
        },
        "65": {
          start: {
            line: 190,
            column: 34
          },
          end: {
            line: 190,
            column: 86
          }
        },
        "66": {
          start: {
            line: 192,
            column: 6
          },
          end: {
            line: 194,
            column: 49
          }
        },
        "67": {
          start: {
            line: 193,
            column: 45
          },
          end: {
            line: 193,
            column: 67
          }
        },
        "68": {
          start: {
            line: 196,
            column: 6
          },
          end: {
            line: 196,
            column: 23
          }
        },
        "69": {
          start: {
            line: 201,
            column: 4
          },
          end: {
            line: 202,
            column: 62
          }
        },
        "70": {
          start: {
            line: 202,
            column: 32
          },
          end: {
            line: 202,
            column: 61
          }
        },
        "71": {
          start: {
            line: 209,
            column: 4
          },
          end: {
            line: 209,
            column: 34
          }
        },
        "72": {
          start: {
            line: 211,
            column: 4
          },
          end: {
            line: 211,
            column: 41
          }
        },
        "73": {
          start: {
            line: 213,
            column: 4
          },
          end: {
            line: 213,
            column: 36
          }
        },
        "74": {
          start: {
            line: 214,
            column: 4
          },
          end: {
            line: 214,
            column: 36
          }
        },
        "75": {
          start: {
            line: 215,
            column: 4
          },
          end: {
            line: 215,
            column: 36
          }
        },
        "76": {
          start: {
            line: 216,
            column: 4
          },
          end: {
            line: 216,
            column: 36
          }
        },
        "77": {
          start: {
            line: 217,
            column: 4
          },
          end: {
            line: 217,
            column: 36
          }
        },
        "78": {
          start: {
            line: 218,
            column: 4
          },
          end: {
            line: 218,
            column: 36
          }
        },
        "79": {
          start: {
            line: 219,
            column: 4
          },
          end: {
            line: 219,
            column: 36
          }
        },
        "80": {
          start: {
            line: 220,
            column: 4
          },
          end: {
            line: 220,
            column: 36
          }
        },
        "81": {
          start: {
            line: 221,
            column: 4
          },
          end: {
            line: 221,
            column: 36
          }
        },
        "82": {
          start: {
            line: 225,
            column: 4
          },
          end: {
            line: 225,
            column: 24
          }
        },
        "83": {
          start: {
            line: 231,
            column: 4
          },
          end: {
            line: 234,
            column: 5
          }
        },
        "84": {
          start: {
            line: 235,
            column: 4
          },
          end: {
            line: 235,
            column: 51
          }
        },
        "85": {
          start: {
            line: 236,
            column: 4
          },
          end: {
            line: 236,
            column: 17
          }
        },
        "86": {
          start: {
            line: 240,
            column: 4
          },
          end: {
            line: 259,
            column: 5
          }
        },
        "87": {
          start: {
            line: 241,
            column: 33
          },
          end: {
            line: 241,
            column: 62
          }
        },
        "88": {
          start: {
            line: 243,
            column: 6
          },
          end: {
            line: 243,
            column: 50
          }
        },
        "89": {
          start: {
            line: 244,
            column: 6
          },
          end: {
            line: 246,
            column: 7
          }
        },
        "90": {
          start: {
            line: 245,
            column: 8
          },
          end: {
            line: 245,
            column: 14
          }
        },
        "91": {
          start: {
            line: 248,
            column: 6
          },
          end: {
            line: 248,
            column: 51
          }
        },
        "92": {
          start: {
            line: 250,
            column: 38
          },
          end: {
            line: 250,
            column: 90
          }
        },
        "93": {
          start: {
            line: 252,
            column: 6
          },
          end: {
            line: 255,
            column: 54
          }
        },
        "94": {
          start: {
            line: 253,
            column: 8
          },
          end: {
            line: 253,
            column: 56
          }
        },
        "95": {
          start: {
            line: 256,
            column: 6
          },
          end: {
            line: 256,
            column: 27
          }
        },
        "96": {
          start: {
            line: 258,
            column: 6
          },
          end: {
            line: 258,
            column: 17
          }
        },
        "97": {
          start: {
            line: 263,
            column: 23
          },
          end: {
            line: 263,
            column: 64
          }
        },
        "98": {
          start: {
            line: 264,
            column: 22
          },
          end: {
            line: 264,
            column: 91
          }
        },
        "99": {
          start: {
            line: 266,
            column: 4
          },
          end: {
            line: 270,
            column: 5
          }
        },
        "100": {
          start: {
            line: 269,
            column: 6
          },
          end: {
            line: 269,
            column: 46
          }
        },
        "101": {
          start: {
            line: 272,
            column: 4
          },
          end: {
            line: 272,
            column: 41
          }
        },
        "102": {
          start: {
            line: 273,
            column: 4
          },
          end: {
            line: 273,
            column: 48
          }
        },
        "103": {
          start: {
            line: 274,
            column: 4
          },
          end: {
            line: 274,
            column: 50
          }
        },
        "104": {
          start: {
            line: 276,
            column: 4
          },
          end: {
            line: 280,
            column: 5
          }
        },
        "105": {
          start: {
            line: 277,
            column: 6
          },
          end: {
            line: 277,
            column: 29
          }
        },
        "106": {
          start: {
            line: 279,
            column: 6
          },
          end: {
            line: 279,
            column: 33
          }
        },
        "107": {
          start: {
            line: 282,
            column: 4
          },
          end: {
            line: 284,
            column: 5
          }
        },
        "108": {
          start: {
            line: 283,
            column: 6
          },
          end: {
            line: 283,
            column: 32
          }
        },
        "109": {
          start: {
            line: 286,
            column: 4
          },
          end: {
            line: 286,
            column: 45
          }
        },
        "110": {
          start: {
            line: 288,
            column: 4
          },
          end: {
            line: 290,
            column: 5
          }
        },
        "111": {
          start: {
            line: 289,
            column: 6
          },
          end: {
            line: 289,
            column: 26
          }
        },
        "112": {
          start: {
            line: 292,
            column: 23
          },
          end: {
            line: 294,
            column: 6
          }
        },
        "113": {
          start: {
            line: 296,
            column: 31
          },
          end: {
            line: 302,
            column: 5
          }
        },
        "114": {
          start: {
            line: 297,
            column: 6
          },
          end: {
            line: 299,
            column: 7
          }
        },
        "115": {
          start: {
            line: 298,
            column: 8
          },
          end: {
            line: 298,
            column: 29
          }
        },
        "116": {
          start: {
            line: 300,
            column: 6
          },
          end: {
            line: 300,
            column: 35
          }
        },
        "117": {
          start: {
            line: 301,
            column: 6
          },
          end: {
            line: 301,
            column: 42
          }
        },
        "118": {
          start: {
            line: 304,
            column: 4
          },
          end: {
            line: 312,
            column: 5
          }
        },
        "119": {
          start: {
            line: 305,
            column: 34
          },
          end: {
            line: 305,
            column: 85
          }
        },
        "120": {
          start: {
            line: 307,
            column: 6
          },
          end: {
            line: 309,
            column: 49
          }
        },
        "121": {
          start: {
            line: 311,
            column: 6
          },
          end: {
            line: 311,
            column: 26
          }
        },
        "122": {
          start: {
            line: 316,
            column: 4
          },
          end: {
            line: 324,
            column: 8
          }
        },
        "123": {
          start: {
            line: 319,
            column: 8
          },
          end: {
            line: 323,
            column: 9
          }
        },
        "124": {
          start: {
            line: 322,
            column: 10
          },
          end: {
            line: 322,
            column: 31
          }
        },
        "125": {
          start: {
            line: 328,
            column: 4
          },
          end: {
            line: 336,
            column: 5
          }
        },
        "126": {
          start: {
            line: 329,
            column: 6
          },
          end: {
            line: 333,
            column: 8
          }
        },
        "127": {
          start: {
            line: 330,
            column: 8
          },
          end: {
            line: 332,
            column: 9
          }
        },
        "128": {
          start: {
            line: 331,
            column: 10
          },
          end: {
            line: 331,
            column: 43
          }
        },
        "129": {
          start: {
            line: 334,
            column: 11
          },
          end: {
            line: 336,
            column: 5
          }
        },
        "130": {
          start: {
            line: 335,
            column: 6
          },
          end: {
            line: 335,
            column: 49
          }
        },
        "131": {
          start: {
            line: 340,
            column: 4
          },
          end: {
            line: 344,
            column: 5
          }
        },
        "132": {
          start: {
            line: 341,
            column: 6
          },
          end: {
            line: 341,
            column: 69
          }
        },
        "133": {
          start: {
            line: 341,
            column: 44
          },
          end: {
            line: 341,
            column: 68
          }
        },
        "134": {
          start: {
            line: 343,
            column: 6
          },
          end: {
            line: 343,
            column: 33
          }
        },
        "135": {
          start: {
            line: 348,
            column: 4
          },
          end: {
            line: 348,
            column: 40
          }
        },
        "136": {
          start: {
            line: 349,
            column: 4
          },
          end: {
            line: 349,
            column: 51
          }
        },
        "137": {
          start: {
            line: 350,
            column: 4
          },
          end: {
            line: 350,
            column: 47
          }
        },
        "138": {
          start: {
            line: 351,
            column: 4
          },
          end: {
            line: 351,
            column: 33
          }
        },
        "139": {
          start: {
            line: 352,
            column: 4
          },
          end: {
            line: 357,
            column: 6
          }
        },
        "140": {
          start: {
            line: 353,
            column: 6
          },
          end: {
            line: 353,
            column: 50
          }
        },
        "141": {
          start: {
            line: 354,
            column: 6
          },
          end: {
            line: 354,
            column: 30
          }
        },
        "142": {
          start: {
            line: 355,
            column: 6
          },
          end: {
            line: 355,
            column: 28
          }
        },
        "143": {
          start: {
            line: 356,
            column: 6
          },
          end: {
            line: 356,
            column: 44
          }
        },
        "144": {
          start: {
            line: 361,
            column: 4
          },
          end: {
            line: 364,
            column: 5
          }
        },
        "145": {
          start: {
            line: 362,
            column: 6
          },
          end: {
            line: 362,
            column: 32
          }
        },
        "146": {
          start: {
            line: 363,
            column: 6
          },
          end: {
            line: 363,
            column: 27
          }
        },
        "147": {
          start: {
            line: 368,
            column: 20
          },
          end: {
            line: 369,
            column: 27
          }
        },
        "148": {
          start: {
            line: 371,
            column: 4
          },
          end: {
            line: 434,
            column: 5
          }
        },
        "149": {
          start: {
            line: 372,
            column: 6
          },
          end: {
            line: 372,
            column: 52
          }
        },
        "150": {
          start: {
            line: 373,
            column: 6
          },
          end: {
            line: 373,
            column: 51
          }
        },
        "151": {
          start: {
            line: 375,
            column: 6
          },
          end: {
            line: 377,
            column: 7
          }
        },
        "152": {
          start: {
            line: 376,
            column: 8
          },
          end: {
            line: 376,
            column: 45
          }
        },
        "153": {
          start: {
            line: 379,
            column: 6
          },
          end: {
            line: 379,
            column: 47
          }
        },
        "154": {
          start: {
            line: 381,
            column: 6
          },
          end: {
            line: 391,
            column: 8
          }
        },
        "155": {
          start: {
            line: 382,
            column: 8
          },
          end: {
            line: 385,
            column: 9
          }
        },
        "156": {
          start: {
            line: 383,
            column: 10
          },
          end: {
            line: 383,
            column: 43
          }
        },
        "157": {
          start: {
            line: 384,
            column: 10
          },
          end: {
            line: 384,
            column: 16
          }
        },
        "158": {
          start: {
            line: 386,
            column: 8
          },
          end: {
            line: 388,
            column: 9
          }
        },
        "159": {
          start: {
            line: 387,
            column: 10
          },
          end: {
            line: 387,
            column: 16
          }
        },
        "160": {
          start: {
            line: 390,
            column: 8
          },
          end: {
            line: 390,
            column: 41
          }
        },
        "161": {
          start: {
            line: 393,
            column: 6
          },
          end: {
            line: 395,
            column: 7
          }
        },
        "162": {
          start: {
            line: 394,
            column: 8
          },
          end: {
            line: 394,
            column: 35
          }
        },
        "163": {
          start: {
            line: 397,
            column: 6
          },
          end: {
            line: 397,
            column: 48
          }
        },
        "164": {
          start: {
            line: 399,
            column: 6
          },
          end: {
            line: 401,
            column: 7
          }
        },
        "165": {
          start: {
            line: 400,
            column: 8
          },
          end: {
            line: 400,
            column: 14
          }
        },
        "166": {
          start: {
            line: 403,
            column: 6
          },
          end: {
            line: 406,
            column: 7
          }
        },
        "167": {
          start: {
            line: 404,
            column: 8
          },
          end: {
            line: 404,
            column: 18
          }
        },
        "168": {
          start: {
            line: 405,
            column: 8
          },
          end: {
            line: 405,
            column: 14
          }
        },
        "169": {
          start: {
            line: 408,
            column: 41
          },
          end: {
            line: 408,
            column: 94
          }
        },
        "170": {
          start: {
            line: 410,
            column: 6
          },
          end: {
            line: 412,
            column: 57
          }
        },
        "171": {
          start: {
            line: 413,
            column: 11
          },
          end: {
            line: 434,
            column: 5
          }
        },
        "172": {
          start: {
            line: 414,
            column: 6
          },
          end: {
            line: 414,
            column: 51
          }
        },
        "173": {
          start: {
            line: 416,
            column: 29
          },
          end: {
            line: 421,
            column: 7
          }
        },
        "174": {
          start: {
            line: 417,
            column: 8
          },
          end: {
            line: 417,
            column: 30
          }
        },
        "175": {
          start: {
            line: 418,
            column: 8
          },
          end: {
            line: 420,
            column: 9
          }
        },
        "176": {
          start: {
            line: 419,
            column: 10
          },
          end: {
            line: 419,
            column: 20
          }
        },
        "177": {
          start: {
            line: 423,
            column: 6
          },
          end: {
            line: 431,
            column: 7
          }
        },
        "178": {
          start: {
            line: 424,
            column: 43
          },
          end: {
            line: 424,
            column: 96
          }
        },
        "179": {
          start: {
            line: 426,
            column: 8
          },
          end: {
            line: 428,
            column: 59
          }
        },
        "180": {
          start: {
            line: 430,
            column: 8
          },
          end: {
            line: 430,
            column: 24
          }
        },
        "181": {
          start: {
            line: 432,
            column: 11
          },
          end: {
            line: 434,
            column: 5
          }
        },
        "182": {
          start: {
            line: 433,
            column: 6
          },
          end: {
            line: 433,
            column: 16
          }
        },
        "183": {
          start: {
            line: 444,
            column: 6
          },
          end: {
            line: 444,
            column: 72
          }
        },
        "184": {
          start: {
            line: 446,
            column: 4
          },
          end: {
            line: 448,
            column: 5
          }
        },
        "185": {
          start: {
            line: 447,
            column: 6
          },
          end: {
            line: 447,
            column: 67
          }
        },
        "186": {
          start: {
            line: 450,
            column: 4
          },
          end: {
            line: 452,
            column: 5
          }
        },
        "187": {
          start: {
            line: 451,
            column: 6
          },
          end: {
            line: 451,
            column: 68
          }
        },
        "188": {
          start: {
            line: 456,
            column: 4
          },
          end: {
            line: 456,
            column: 40
          }
        },
        "189": {
          start: {
            line: 457,
            column: 4
          },
          end: {
            line: 457,
            column: 41
          }
        },
        "190": {
          start: {
            line: 461,
            column: 17
          },
          end: {
            line: 461,
            column: 54
          }
        },
        "191": {
          start: {
            line: 462,
            column: 4
          },
          end: {
            line: 462,
            column: 72
          }
        },
        "192": {
          start: {
            line: 463,
            column: 4
          },
          end: {
            line: 463,
            column: 52
          }
        },
        "193": {
          start: {
            line: 467,
            column: 4
          },
          end: {
            line: 497,
            column: 5
          }
        },
        "194": {
          start: {
            line: 470,
            column: 27
          },
          end: {
            line: 470,
            column: 91
          }
        },
        "195": {
          start: {
            line: 471,
            column: 28
          },
          end: {
            line: 471,
            column: 93
          }
        },
        "196": {
          start: {
            line: 474,
            column: 6
          },
          end: {
            line: 480,
            column: 8
          }
        },
        "197": {
          start: {
            line: 475,
            column: 30
          },
          end: {
            line: 475,
            column: 56
          }
        },
        "198": {
          start: {
            line: 476,
            column: 34
          },
          end: {
            line: 476,
            column: 65
          }
        },
        "199": {
          start: {
            line: 477,
            column: 8
          },
          end: {
            line: 479,
            column: 92
          }
        },
        "200": {
          start: {
            line: 483,
            column: 6
          },
          end: {
            line: 489,
            column: 8
          }
        },
        "201": {
          start: {
            line: 484,
            column: 29
          },
          end: {
            line: 484,
            column: 54
          }
        },
        "202": {
          start: {
            line: 485,
            column: 33
          },
          end: {
            line: 485,
            column: 63
          }
        },
        "203": {
          start: {
            line: 486,
            column: 8
          },
          end: {
            line: 488,
            column: 90
          }
        },
        "204": {
          start: {
            line: 492,
            column: 28
          },
          end: {
            line: 492,
            column: 60
          }
        },
        "205": {
          start: {
            line: 493,
            column: 32
          },
          end: {
            line: 493,
            column: 69
          }
        },
        "206": {
          start: {
            line: 494,
            column: 6
          },
          end: {
            line: 496,
            column: 90
          }
        },
        "207": {
          start: {
            line: 499,
            column: 4
          },
          end: {
            line: 499,
            column: 45
          }
        },
        "208": {
          start: {
            line: 504,
            column: 25
          },
          end: {
            line: 504,
            column: 89
          }
        },
        "209": {
          start: {
            line: 505,
            column: 4
          },
          end: {
            line: 509,
            column: 6
          }
        },
        "210": {
          start: {
            line: 506,
            column: 22
          },
          end: {
            line: 506,
            column: 54
          }
        },
        "211": {
          start: {
            line: 507,
            column: 6
          },
          end: {
            line: 507,
            column: 44
          }
        },
        "212": {
          start: {
            line: 508,
            column: 6
          },
          end: {
            line: 508,
            column: 57
          }
        },
        "213": {
          start: {
            line: 512,
            column: 21
          },
          end: {
            line: 512,
            column: 91
          }
        },
        "214": {
          start: {
            line: 513,
            column: 4
          },
          end: {
            line: 518,
            column: 6
          }
        },
        "215": {
          start: {
            line: 514,
            column: 21
          },
          end: {
            line: 514,
            column: 52
          }
        },
        "216": {
          start: {
            line: 515,
            column: 6
          },
          end: {
            line: 517,
            column: 7
          }
        },
        "217": {
          start: {
            line: 516,
            column: 8
          },
          end: {
            line: 516,
            column: 73
          }
        },
        "218": {
          start: {
            line: 521,
            column: 20
          },
          end: {
            line: 521,
            column: 58
          }
        },
        "219": {
          start: {
            line: 522,
            column: 4
          },
          end: {
            line: 522,
            column: 48
          }
        },
        "220": {
          start: {
            line: 523,
            column: 4
          },
          end: {
            line: 523,
            column: 61
          }
        },
        "221": {
          start: {
            line: 527,
            column: 22
          },
          end: {
            line: 527,
            column: 51
          }
        },
        "222": {
          start: {
            line: 528,
            column: 4
          },
          end: {
            line: 528,
            column: 54
          }
        },
        "223": {
          start: {
            line: 529,
            column: 4
          },
          end: {
            line: 529,
            column: 40
          }
        },
        "224": {
          start: {
            line: 530,
            column: 27
          },
          end: {
            line: 530,
            column: 90
          }
        },
        "225": {
          start: {
            line: 531,
            column: 4
          },
          end: {
            line: 531,
            column: 40
          }
        },
        "226": {
          start: {
            line: 532,
            column: 4
          },
          end: {
            line: 532,
            column: 25
          }
        },
        "227": {
          start: {
            line: 538,
            column: 4
          },
          end: {
            line: 559,
            column: 6
          }
        },
        "228": {
          start: {
            line: 539,
            column: 17
          },
          end: {
            line: 539,
            column: 39
          }
        },
        "229": {
          start: {
            line: 540,
            column: 22
          },
          end: {
            line: 544,
            column: 7
          }
        },
        "230": {
          start: {
            line: 546,
            column: 6
          },
          end: {
            line: 549,
            column: 7
          }
        },
        "231": {
          start: {
            line: 547,
            column: 8
          },
          end: {
            line: 547,
            column: 39
          }
        },
        "232": {
          start: {
            line: 548,
            column: 8
          },
          end: {
            line: 548,
            column: 36
          }
        },
        "233": {
          start: {
            line: 551,
            column: 6
          },
          end: {
            line: 558,
            column: 7
          }
        },
        "234": {
          start: {
            line: 552,
            column: 8
          },
          end: {
            line: 554,
            column: 9
          }
        },
        "235": {
          start: {
            line: 553,
            column: 10
          },
          end: {
            line: 553,
            column: 60
          }
        },
        "236": {
          start: {
            line: 555,
            column: 8
          },
          end: {
            line: 555,
            column: 35
          }
        },
        "237": {
          start: {
            line: 556,
            column: 13
          },
          end: {
            line: 558,
            column: 7
          }
        },
        "238": {
          start: {
            line: 557,
            column: 8
          },
          end: {
            line: 557,
            column: 32
          }
        },
        "239": {
          start: {
            line: 569,
            column: 0
          },
          end: {
            line: 601,
            column: 2
          }
        },
        "240": {
          start: {
            line: 571,
            column: 19
          },
          end: {
            line: 571,
            column: 52
          }
        },
        "241": {
          start: {
            line: 573,
            column: 2
          },
          end: {
            line: 575,
            column: 3
          }
        },
        "242": {
          start: {
            line: 574,
            column: 4
          },
          end: {
            line: 574,
            column: 45
          }
        },
        "243": {
          start: {
            line: 577,
            column: 17
          },
          end: {
            line: 581,
            column: 5
          }
        },
        "244": {
          start: {
            line: 583,
            column: 2
          },
          end: {
            line: 585,
            column: 3
          }
        },
        "245": {
          start: {
            line: 584,
            column: 4
          },
          end: {
            line: 584,
            column: 26
          }
        },
        "246": {
          start: {
            line: 587,
            column: 18
          },
          end: {
            line: 598,
            column: 4
          }
        },
        "247": {
          start: {
            line: 588,
            column: 4
          },
          end: {
            line: 591,
            column: 5
          }
        },
        "248": {
          start: {
            line: 590,
            column: 6
          },
          end: {
            line: 590,
            column: 12
          }
        },
        "249": {
          start: {
            line: 593,
            column: 4
          },
          end: {
            line: 597,
            column: 6
          }
        },
        "250": {
          start: {
            line: 594,
            column: 6
          },
          end: {
            line: 596,
            column: 7
          }
        },
        "251": {
          start: {
            line: 595,
            column: 8
          },
          end: {
            line: 595,
            column: 20
          }
        },
        "252": {
          start: {
            line: 600,
            column: 2
          },
          end: {
            line: 600,
            column: 54
          }
        },
        "253": {
          start: {
            line: 609,
            column: 0
          },
          end: {
            line: 609,
            column: 35
          }
        },
        "254": {
          start: {
            line: 610,
            column: 0
          },
          end: {
            line: 610,
            column: 30
          }
        },
        "255": {
          start: {
            line: 611,
            column: 0
          },
          end: {
            line: 614,
            column: 1
          }
        },
        "256": {
          start: {
            line: 612,
            column: 2
          },
          end: {
            line: 612,
            column: 33
          }
        },
        "257": {
          start: {
            line: 613,
            column: 2
          },
          end: {
            line: 613,
            column: 31
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 80,
              column: 2
            },
            end: {
              line: 80,
              column: 3
            }
          },
          loc: {
            start: {
              line: 80,
              column: 31
            },
            end: {
              line: 90,
              column: 3
            }
          },
          line: 80
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 94,
              column: 2
            },
            end: {
              line: 94,
              column: 3
            }
          },
          loc: {
            start: {
              line: 94,
              column: 23
            },
            end: {
              line: 96,
              column: 3
            }
          },
          line: 94
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 98,
              column: 2
            },
            end: {
              line: 98,
              column: 3
            }
          },
          loc: {
            start: {
              line: 98,
              column: 23
            },
            end: {
              line: 100,
              column: 3
            }
          },
          line: 98
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 104,
              column: 2
            },
            end: {
              line: 104,
              column: 3
            }
          },
          loc: {
            start: {
              line: 104,
              column: 24
            },
            end: {
              line: 106,
              column: 3
            }
          },
          line: 104
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 108,
              column: 2
            },
            end: {
              line: 108,
              column: 3
            }
          },
          loc: {
            start: {
              line: 108,
              column: 22
            },
            end: {
              line: 152,
              column: 3
            }
          },
          line: 108
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 140,
              column: 6
            },
            end: {
              line: 140,
              column: 7
            }
          },
          loc: {
            start: {
              line: 140,
              column: 17
            },
            end: {
              line: 140,
              column: 33
            }
          },
          line: 140
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 143,
              column: 48
            },
            end: {
              line: 143,
              column: 49
            }
          },
          loc: {
            start: {
              line: 143,
              column: 54
            },
            end: {
              line: 149,
              column: 5
            }
          },
          line: 143
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 144,
              column: 50
            },
            end: {
              line: 144,
              column: 51
            }
          },
          loc: {
            start: {
              line: 144,
              column: 61
            },
            end: {
              line: 148,
              column: 7
            }
          },
          line: 144
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 151,
              column: 23
            },
            end: {
              line: 151,
              column: 24
            }
          },
          loc: {
            start: {
              line: 151,
              column: 29
            },
            end: {
              line: 151,
              column: 61
            }
          },
          line: 151
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 154,
              column: 2
            },
            end: {
              line: 154,
              column: 3
            }
          },
          loc: {
            start: {
              line: 154,
              column: 14
            },
            end: {
              line: 198,
              column: 3
            }
          },
          line: 154
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 193,
              column: 34
            },
            end: {
              line: 193,
              column: 35
            }
          },
          loc: {
            start: {
              line: 193,
              column: 45
            },
            end: {
              line: 193,
              column: 67
            }
          },
          line: 193
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 200,
              column: 2
            },
            end: {
              line: 200,
              column: 3
            }
          },
          loc: {
            start: {
              line: 200,
              column: 12
            },
            end: {
              line: 222,
              column: 3
            }
          },
          line: 200
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 202,
              column: 15
            },
            end: {
              line: 202,
              column: 16
            }
          },
          loc: {
            start: {
              line: 202,
              column: 32
            },
            end: {
              line: 202,
              column: 61
            }
          },
          line: 202
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 224,
              column: 2
            },
            end: {
              line: 224,
              column: 3
            }
          },
          loc: {
            start: {
              line: 224,
              column: 17
            },
            end: {
              line: 226,
              column: 3
            }
          },
          line: 224
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 230,
              column: 2
            },
            end: {
              line: 230,
              column: 3
            }
          },
          loc: {
            start: {
              line: 230,
              column: 21
            },
            end: {
              line: 237,
              column: 3
            }
          },
          line: 230
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 239,
              column: 2
            },
            end: {
              line: 239,
              column: 3
            }
          },
          loc: {
            start: {
              line: 239,
              column: 31
            },
            end: {
              line: 260,
              column: 3
            }
          },
          line: 239
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 252,
              column: 48
            },
            end: {
              line: 252,
              column: 49
            }
          },
          loc: {
            start: {
              line: 252,
              column: 54
            },
            end: {
              line: 254,
              column: 7
            }
          },
          line: 252
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 262,
              column: 2
            },
            end: {
              line: 262,
              column: 3
            }
          },
          loc: {
            start: {
              line: 262,
              column: 30
            },
            end: {
              line: 313,
              column: 3
            }
          },
          line: 262
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 296,
              column: 31
            },
            end: {
              line: 296,
              column: 32
            }
          },
          loc: {
            start: {
              line: 296,
              column: 37
            },
            end: {
              line: 302,
              column: 5
            }
          },
          line: 296
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 315,
              column: 2
            },
            end: {
              line: 315,
              column: 3
            }
          },
          loc: {
            start: {
              line: 315,
              column: 18
            },
            end: {
              line: 325,
              column: 3
            }
          },
          line: 315
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 318,
              column: 25
            },
            end: {
              line: 318,
              column: 26
            }
          },
          loc: {
            start: {
              line: 318,
              column: 36
            },
            end: {
              line: 324,
              column: 7
            }
          },
          line: 318
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 327,
              column: 2
            },
            end: {
              line: 327,
              column: 3
            }
          },
          loc: {
            start: {
              line: 327,
              column: 20
            },
            end: {
              line: 337,
              column: 3
            }
          },
          line: 327
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 329,
              column: 49
            },
            end: {
              line: 329,
              column: 50
            }
          },
          loc: {
            start: {
              line: 329,
              column: 60
            },
            end: {
              line: 333,
              column: 7
            }
          },
          line: 329
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 339,
              column: 2
            },
            end: {
              line: 339,
              column: 3
            }
          },
          loc: {
            start: {
              line: 339,
              column: 20
            },
            end: {
              line: 345,
              column: 3
            }
          },
          line: 339
        },
        "24": {
          name: "(anonymous_24)",
          decl: {
            start: {
              line: 341,
              column: 33
            },
            end: {
              line: 341,
              column: 34
            }
          },
          loc: {
            start: {
              line: 341,
              column: 44
            },
            end: {
              line: 341,
              column: 68
            }
          },
          line: 341
        },
        "25": {
          name: "(anonymous_25)",
          decl: {
            start: {
              line: 347,
              column: 2
            },
            end: {
              line: 347,
              column: 3
            }
          },
          loc: {
            start: {
              line: 347,
              column: 15
            },
            end: {
              line: 358,
              column: 3
            }
          },
          line: 347
        },
        "26": {
          name: "(anonymous_26)",
          decl: {
            start: {
              line: 352,
              column: 23
            },
            end: {
              line: 352,
              column: 24
            }
          },
          loc: {
            start: {
              line: 352,
              column: 29
            },
            end: {
              line: 357,
              column: 5
            }
          },
          line: 352
        },
        "27": {
          name: "(anonymous_27)",
          decl: {
            start: {
              line: 360,
              column: 2
            },
            end: {
              line: 360,
              column: 3
            }
          },
          loc: {
            start: {
              line: 360,
              column: 20
            },
            end: {
              line: 365,
              column: 3
            }
          },
          line: 360
        },
        "28": {
          name: "(anonymous_28)",
          decl: {
            start: {
              line: 367,
              column: 2
            },
            end: {
              line: 367,
              column: 3
            }
          },
          loc: {
            start: {
              line: 367,
              column: 26
            },
            end: {
              line: 435,
              column: 3
            }
          },
          line: 367
        },
        "29": {
          name: "(anonymous_29)",
          decl: {
            start: {
              line: 381,
              column: 47
            },
            end: {
              line: 381,
              column: 48
            }
          },
          loc: {
            start: {
              line: 381,
              column: 58
            },
            end: {
              line: 391,
              column: 7
            }
          },
          line: 381
        },
        "30": {
          name: "(anonymous_30)",
          decl: {
            start: {
              line: 416,
              column: 29
            },
            end: {
              line: 416,
              column: 30
            }
          },
          loc: {
            start: {
              line: 416,
              column: 35
            },
            end: {
              line: 421,
              column: 7
            }
          },
          line: 416
        },
        "31": {
          name: "(anonymous_31)",
          decl: {
            start: {
              line: 442,
              column: 2
            },
            end: {
              line: 442,
              column: 3
            }
          },
          loc: {
            start: {
              line: 442,
              column: 18
            },
            end: {
              line: 453,
              column: 3
            }
          },
          line: 442
        },
        "32": {
          name: "(anonymous_32)",
          decl: {
            start: {
              line: 455,
              column: 2
            },
            end: {
              line: 455,
              column: 3
            }
          },
          loc: {
            start: {
              line: 455,
              column: 22
            },
            end: {
              line: 458,
              column: 3
            }
          },
          line: 455
        },
        "33": {
          name: "(anonymous_33)",
          decl: {
            start: {
              line: 460,
              column: 2
            },
            end: {
              line: 460,
              column: 3
            }
          },
          loc: {
            start: {
              line: 460,
              column: 20
            },
            end: {
              line: 464,
              column: 3
            }
          },
          line: 460
        },
        "34": {
          name: "(anonymous_34)",
          decl: {
            start: {
              line: 466,
              column: 2
            },
            end: {
              line: 466,
              column: 3
            }
          },
          loc: {
            start: {
              line: 466,
              column: 18
            },
            end: {
              line: 500,
              column: 3
            }
          },
          line: 466
        },
        "35": {
          name: "(anonymous_35)",
          decl: {
            start: {
              line: 474,
              column: 27
            },
            end: {
              line: 474,
              column: 28
            }
          },
          loc: {
            start: {
              line: 474,
              column: 47
            },
            end: {
              line: 480,
              column: 7
            }
          },
          line: 474
        },
        "36": {
          name: "(anonymous_36)",
          decl: {
            start: {
              line: 483,
              column: 28
            },
            end: {
              line: 483,
              column: 29
            }
          },
          loc: {
            start: {
              line: 483,
              column: 48
            },
            end: {
              line: 489,
              column: 7
            }
          },
          line: 483
        },
        "37": {
          name: "(anonymous_37)",
          decl: {
            start: {
              line: 502,
              column: 2
            },
            end: {
              line: 502,
              column: 3
            }
          },
          loc: {
            start: {
              line: 502,
              column: 20
            },
            end: {
              line: 524,
              column: 3
            }
          },
          line: 502
        },
        "38": {
          name: "(anonymous_38)",
          decl: {
            start: {
              line: 505,
              column: 25
            },
            end: {
              line: 505,
              column: 26
            }
          },
          loc: {
            start: {
              line: 505,
              column: 45
            },
            end: {
              line: 509,
              column: 5
            }
          },
          line: 505
        },
        "39": {
          name: "(anonymous_39)",
          decl: {
            start: {
              line: 513,
              column: 21
            },
            end: {
              line: 513,
              column: 22
            }
          },
          loc: {
            start: {
              line: 513,
              column: 41
            },
            end: {
              line: 518,
              column: 5
            }
          },
          line: 513
        },
        "40": {
          name: "(anonymous_40)",
          decl: {
            start: {
              line: 526,
              column: 2
            },
            end: {
              line: 526,
              column: 3
            }
          },
          loc: {
            start: {
              line: 526,
              column: 23
            },
            end: {
              line: 533,
              column: 3
            }
          },
          line: 526
        },
        "41": {
          name: "(anonymous_41)",
          decl: {
            start: {
              line: 537,
              column: 2
            },
            end: {
              line: 537,
              column: 3
            }
          },
          loc: {
            start: {
              line: 537,
              column: 49
            },
            end: {
              line: 560,
              column: 3
            }
          },
          line: 537
        },
        "42": {
          name: "(anonymous_42)",
          decl: {
            start: {
              line: 538,
              column: 21
            },
            end: {
              line: 538,
              column: 22
            }
          },
          loc: {
            start: {
              line: 538,
              column: 33
            },
            end: {
              line: 559,
              column: 5
            }
          },
          line: 538
        },
        "43": {
          name: "(anonymous_43)",
          decl: {
            start: {
              line: 569,
              column: 59
            },
            end: {
              line: 569,
              column: 60
            }
          },
          loc: {
            start: {
              line: 569,
              column: 76
            },
            end: {
              line: 601,
              column: 1
            }
          },
          line: 569
        },
        "44": {
          name: "(anonymous_44)",
          decl: {
            start: {
              line: 587,
              column: 44
            },
            end: {
              line: 587,
              column: 45
            }
          },
          loc: {
            start: {
              line: 587,
              column: 59
            },
            end: {
              line: 598,
              column: 3
            }
          },
          line: 587
        },
        "45": {
          name: "(anonymous_45)",
          decl: {
            start: {
              line: 593,
              column: 30
            },
            end: {
              line: 593,
              column: 31
            }
          },
          loc: {
            start: {
              line: 593,
              column: 36
            },
            end: {
              line: 597,
              column: 5
            }
          },
          line: 593
        },
        "46": {
          name: "(anonymous_46)",
          decl: {
            start: {
              line: 611,
              column: 24
            },
            end: {
              line: 611,
              column: 25
            }
          },
          loc: {
            start: {
              line: 611,
              column: 30
            },
            end: {
              line: 614,
              column: 1
            }
          },
          line: 611
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 105,
              column: 11
            },
            end: {
              line: 105,
              column: 65
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 105,
              column: 27
            },
            end: {
              line: 105,
              column: 38
            }
          }, {
            start: {
              line: 105,
              column: 41
            },
            end: {
              line: 105,
              column: 65
            }
          }],
          line: 105
        },
        "1": {
          loc: {
            start: {
              line: 109,
              column: 4
            },
            end: {
              line: 111,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 109,
              column: 4
            },
            end: {
              line: 111,
              column: 5
            }
          }, {
            start: {
              line: 109,
              column: 4
            },
            end: {
              line: 111,
              column: 5
            }
          }],
          line: 109
        },
        "2": {
          loc: {
            start: {
              line: 109,
              column: 8
            },
            end: {
              line: 109,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 109,
              column: 8
            },
            end: {
              line: 109,
              column: 21
            }
          }, {
            start: {
              line: 109,
              column: 25
            },
            end: {
              line: 109,
              column: 46
            }
          }],
          line: 109
        },
        "3": {
          loc: {
            start: {
              line: 113,
              column: 4
            },
            end: {
              line: 115,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 113,
              column: 4
            },
            end: {
              line: 115,
              column: 5
            }
          }, {
            start: {
              line: 113,
              column: 4
            },
            end: {
              line: 115,
              column: 5
            }
          }],
          line: 113
        },
        "4": {
          loc: {
            start: {
              line: 123,
              column: 4
            },
            end: {
              line: 125,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 123,
              column: 4
            },
            end: {
              line: 125,
              column: 5
            }
          }, {
            start: {
              line: 123,
              column: 4
            },
            end: {
              line: 125,
              column: 5
            }
          }],
          line: 123
        },
        "5": {
          loc: {
            start: {
              line: 123,
              column: 8
            },
            end: {
              line: 123,
              column: 55
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 123,
              column: 8
            },
            end: {
              line: 123,
              column: 21
            }
          }, {
            start: {
              line: 123,
              column: 25
            },
            end: {
              line: 123,
              column: 55
            }
          }],
          line: 123
        },
        "6": {
          loc: {
            start: {
              line: 145,
              column: 8
            },
            end: {
              line: 147,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 145,
              column: 8
            },
            end: {
              line: 147,
              column: 9
            }
          }, {
            start: {
              line: 145,
              column: 8
            },
            end: {
              line: 147,
              column: 9
            }
          }],
          line: 145
        },
        "7": {
          loc: {
            start: {
              line: 155,
              column: 4
            },
            end: {
              line: 157,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 155,
              column: 4
            },
            end: {
              line: 157,
              column: 5
            }
          }, {
            start: {
              line: 155,
              column: 4
            },
            end: {
              line: 157,
              column: 5
            }
          }],
          line: 155
        },
        "8": {
          loc: {
            start: {
              line: 159,
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
              line: 159,
              column: 4
            },
            end: {
              line: 161,
              column: 5
            }
          }, {
            start: {
              line: 159,
              column: 4
            },
            end: {
              line: 161,
              column: 5
            }
          }],
          line: 159
        },
        "9": {
          loc: {
            start: {
              line: 159,
              column: 8
            },
            end: {
              line: 159,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 159,
              column: 8
            },
            end: {
              line: 159,
              column: 22
            }
          }, {
            start: {
              line: 159,
              column: 26
            },
            end: {
              line: 159,
              column: 47
            }
          }],
          line: 159
        },
        "10": {
          loc: {
            start: {
              line: 167,
              column: 4
            },
            end: {
              line: 169,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 167,
              column: 4
            },
            end: {
              line: 169,
              column: 5
            }
          }, {
            start: {
              line: 167,
              column: 4
            },
            end: {
              line: 169,
              column: 5
            }
          }],
          line: 167
        },
        "11": {
          loc: {
            start: {
              line: 167,
              column: 8
            },
            end: {
              line: 167,
              column: 56
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 167,
              column: 8
            },
            end: {
              line: 167,
              column: 22
            }
          }, {
            start: {
              line: 167,
              column: 26
            },
            end: {
              line: 167,
              column: 56
            }
          }],
          line: 167
        },
        "12": {
          loc: {
            start: {
              line: 174,
              column: 4
            },
            end: {
              line: 176,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 174,
              column: 4
            },
            end: {
              line: 176,
              column: 5
            }
          }, {
            start: {
              line: 174,
              column: 4
            },
            end: {
              line: 176,
              column: 5
            }
          }],
          line: 174
        },
        "13": {
          loc: {
            start: {
              line: 189,
              column: 4
            },
            end: {
              line: 197,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 189,
              column: 4
            },
            end: {
              line: 197,
              column: 5
            }
          }, {
            start: {
              line: 189,
              column: 4
            },
            end: {
              line: 197,
              column: 5
            }
          }],
          line: 189
        },
        "14": {
          loc: {
            start: {
              line: 240,
              column: 4
            },
            end: {
              line: 259,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 240,
              column: 4
            },
            end: {
              line: 259,
              column: 5
            }
          }, {
            start: {
              line: 240,
              column: 4
            },
            end: {
              line: 259,
              column: 5
            }
          }],
          line: 240
        },
        "15": {
          loc: {
            start: {
              line: 244,
              column: 6
            },
            end: {
              line: 246,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 244,
              column: 6
            },
            end: {
              line: 246,
              column: 7
            }
          }, {
            start: {
              line: 244,
              column: 6
            },
            end: {
              line: 246,
              column: 7
            }
          }],
          line: 244
        },
        "16": {
          loc: {
            start: {
              line: 264,
              column: 22
            },
            end: {
              line: 264,
              column: 91
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 264,
              column: 37
            },
            end: {
              line: 264,
              column: 84
            }
          }, {
            start: {
              line: 264,
              column: 87
            },
            end: {
              line: 264,
              column: 91
            }
          }],
          line: 264
        },
        "17": {
          loc: {
            start: {
              line: 266,
              column: 4
            },
            end: {
              line: 270,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 266,
              column: 4
            },
            end: {
              line: 270,
              column: 5
            }
          }, {
            start: {
              line: 266,
              column: 4
            },
            end: {
              line: 270,
              column: 5
            }
          }],
          line: 266
        },
        "18": {
          loc: {
            start: {
              line: 266,
              column: 8
            },
            end: {
              line: 267,
              column: 63
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 266,
              column: 8
            },
            end: {
              line: 266,
              column: 33
            }
          }, {
            start: {
              line: 267,
              column: 8
            },
            end: {
              line: 267,
              column: 63
            }
          }],
          line: 266
        },
        "19": {
          loc: {
            start: {
              line: 276,
              column: 4
            },
            end: {
              line: 280,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 276,
              column: 4
            },
            end: {
              line: 280,
              column: 5
            }
          }, {
            start: {
              line: 276,
              column: 4
            },
            end: {
              line: 280,
              column: 5
            }
          }],
          line: 276
        },
        "20": {
          loc: {
            start: {
              line: 276,
              column: 8
            },
            end: {
              line: 276,
              column: 67
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 276,
              column: 8
            },
            end: {
              line: 276,
              column: 54
            }
          }, {
            start: {
              line: 276,
              column: 58
            },
            end: {
              line: 276,
              column: 67
            }
          }],
          line: 276
        },
        "21": {
          loc: {
            start: {
              line: 282,
              column: 4
            },
            end: {
              line: 284,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 282,
              column: 4
            },
            end: {
              line: 284,
              column: 5
            }
          }, {
            start: {
              line: 282,
              column: 4
            },
            end: {
              line: 284,
              column: 5
            }
          }],
          line: 282
        },
        "22": {
          loc: {
            start: {
              line: 288,
              column: 4
            },
            end: {
              line: 290,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 288,
              column: 4
            },
            end: {
              line: 290,
              column: 5
            }
          }, {
            start: {
              line: 288,
              column: 4
            },
            end: {
              line: 290,
              column: 5
            }
          }],
          line: 288
        },
        "23": {
          loc: {
            start: {
              line: 297,
              column: 6
            },
            end: {
              line: 299,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 297,
              column: 6
            },
            end: {
              line: 299,
              column: 7
            }
          }, {
            start: {
              line: 297,
              column: 6
            },
            end: {
              line: 299,
              column: 7
            }
          }],
          line: 297
        },
        "24": {
          loc: {
            start: {
              line: 304,
              column: 4
            },
            end: {
              line: 312,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 304,
              column: 4
            },
            end: {
              line: 312,
              column: 5
            }
          }, {
            start: {
              line: 304,
              column: 4
            },
            end: {
              line: 312,
              column: 5
            }
          }],
          line: 304
        },
        "25": {
          loc: {
            start: {
              line: 319,
              column: 8
            },
            end: {
              line: 323,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 319,
              column: 8
            },
            end: {
              line: 323,
              column: 9
            }
          }, {
            start: {
              line: 319,
              column: 8
            },
            end: {
              line: 323,
              column: 9
            }
          }],
          line: 319
        },
        "26": {
          loc: {
            start: {
              line: 319,
              column: 12
            },
            end: {
              line: 321,
              column: 59
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 319,
              column: 12
            },
            end: {
              line: 319,
              column: 37
            }
          }, {
            start: {
              line: 320,
              column: 12
            },
            end: {
              line: 320,
              column: 42
            }
          }, {
            start: {
              line: 321,
              column: 12
            },
            end: {
              line: 321,
              column: 59
            }
          }],
          line: 319
        },
        "27": {
          loc: {
            start: {
              line: 328,
              column: 4
            },
            end: {
              line: 336,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 328,
              column: 4
            },
            end: {
              line: 336,
              column: 5
            }
          }, {
            start: {
              line: 328,
              column: 4
            },
            end: {
              line: 336,
              column: 5
            }
          }],
          line: 328
        },
        "28": {
          loc: {
            start: {
              line: 328,
              column: 8
            },
            end: {
              line: 328,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 328,
              column: 8
            },
            end: {
              line: 328,
              column: 21
            }
          }, {
            start: {
              line: 328,
              column: 25
            },
            end: {
              line: 328,
              column: 46
            }
          }],
          line: 328
        },
        "29": {
          loc: {
            start: {
              line: 330,
              column: 8
            },
            end: {
              line: 332,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 330,
              column: 8
            },
            end: {
              line: 332,
              column: 9
            }
          }, {
            start: {
              line: 330,
              column: 8
            },
            end: {
              line: 332,
              column: 9
            }
          }],
          line: 330
        },
        "30": {
          loc: {
            start: {
              line: 334,
              column: 11
            },
            end: {
              line: 336,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 334,
              column: 11
            },
            end: {
              line: 336,
              column: 5
            }
          }, {
            start: {
              line: 334,
              column: 11
            },
            end: {
              line: 336,
              column: 5
            }
          }],
          line: 334
        },
        "31": {
          loc: {
            start: {
              line: 340,
              column: 4
            },
            end: {
              line: 344,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 340,
              column: 4
            },
            end: {
              line: 344,
              column: 5
            }
          }, {
            start: {
              line: 340,
              column: 4
            },
            end: {
              line: 344,
              column: 5
            }
          }],
          line: 340
        },
        "32": {
          loc: {
            start: {
              line: 361,
              column: 4
            },
            end: {
              line: 364,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 361,
              column: 4
            },
            end: {
              line: 364,
              column: 5
            }
          }, {
            start: {
              line: 361,
              column: 4
            },
            end: {
              line: 364,
              column: 5
            }
          }],
          line: 361
        },
        "33": {
          loc: {
            start: {
              line: 368,
              column: 20
            },
            end: {
              line: 369,
              column: 27
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 369,
              column: 8
            },
            end: {
              line: 369,
              column: 22
            }
          }, {
            start: {
              line: 369,
              column: 25
            },
            end: {
              line: 369,
              column: 27
            }
          }],
          line: 368
        },
        "34": {
          loc: {
            start: {
              line: 371,
              column: 4
            },
            end: {
              line: 434,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 371,
              column: 4
            },
            end: {
              line: 434,
              column: 5
            }
          }, {
            start: {
              line: 371,
              column: 4
            },
            end: {
              line: 434,
              column: 5
            }
          }],
          line: 371
        },
        "35": {
          loc: {
            start: {
              line: 371,
              column: 8
            },
            end: {
              line: 371,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 371,
              column: 8
            },
            end: {
              line: 371,
              column: 21
            }
          }, {
            start: {
              line: 371,
              column: 25
            },
            end: {
              line: 371,
              column: 46
            }
          }],
          line: 371
        },
        "36": {
          loc: {
            start: {
              line: 375,
              column: 6
            },
            end: {
              line: 377,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 375,
              column: 6
            },
            end: {
              line: 377,
              column: 7
            }
          }, {
            start: {
              line: 375,
              column: 6
            },
            end: {
              line: 377,
              column: 7
            }
          }],
          line: 375
        },
        "37": {
          loc: {
            start: {
              line: 382,
              column: 8
            },
            end: {
              line: 385,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 382,
              column: 8
            },
            end: {
              line: 385,
              column: 9
            }
          }, {
            start: {
              line: 382,
              column: 8
            },
            end: {
              line: 385,
              column: 9
            }
          }],
          line: 382
        },
        "38": {
          loc: {
            start: {
              line: 386,
              column: 8
            },
            end: {
              line: 388,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 386,
              column: 8
            },
            end: {
              line: 388,
              column: 9
            }
          }, {
            start: {
              line: 386,
              column: 8
            },
            end: {
              line: 388,
              column: 9
            }
          }],
          line: 386
        },
        "39": {
          loc: {
            start: {
              line: 393,
              column: 6
            },
            end: {
              line: 395,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 393,
              column: 6
            },
            end: {
              line: 395,
              column: 7
            }
          }, {
            start: {
              line: 393,
              column: 6
            },
            end: {
              line: 395,
              column: 7
            }
          }],
          line: 393
        },
        "40": {
          loc: {
            start: {
              line: 399,
              column: 6
            },
            end: {
              line: 401,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 399,
              column: 6
            },
            end: {
              line: 401,
              column: 7
            }
          }, {
            start: {
              line: 399,
              column: 6
            },
            end: {
              line: 401,
              column: 7
            }
          }],
          line: 399
        },
        "41": {
          loc: {
            start: {
              line: 403,
              column: 6
            },
            end: {
              line: 406,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 403,
              column: 6
            },
            end: {
              line: 406,
              column: 7
            }
          }, {
            start: {
              line: 403,
              column: 6
            },
            end: {
              line: 406,
              column: 7
            }
          }],
          line: 403
        },
        "42": {
          loc: {
            start: {
              line: 413,
              column: 11
            },
            end: {
              line: 434,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 413,
              column: 11
            },
            end: {
              line: 434,
              column: 5
            }
          }, {
            start: {
              line: 413,
              column: 11
            },
            end: {
              line: 434,
              column: 5
            }
          }],
          line: 413
        },
        "43": {
          loc: {
            start: {
              line: 413,
              column: 15
            },
            end: {
              line: 413,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 413,
              column: 15
            },
            end: {
              line: 413,
              column: 29
            }
          }, {
            start: {
              line: 413,
              column: 33
            },
            end: {
              line: 413,
              column: 47
            }
          }],
          line: 413
        },
        "44": {
          loc: {
            start: {
              line: 418,
              column: 8
            },
            end: {
              line: 420,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 418,
              column: 8
            },
            end: {
              line: 420,
              column: 9
            }
          }, {
            start: {
              line: 418,
              column: 8
            },
            end: {
              line: 420,
              column: 9
            }
          }],
          line: 418
        },
        "45": {
          loc: {
            start: {
              line: 423,
              column: 6
            },
            end: {
              line: 431,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 423,
              column: 6
            },
            end: {
              line: 431,
              column: 7
            }
          }, {
            start: {
              line: 423,
              column: 6
            },
            end: {
              line: 431,
              column: 7
            }
          }],
          line: 423
        },
        "46": {
          loc: {
            start: {
              line: 432,
              column: 11
            },
            end: {
              line: 434,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 432,
              column: 11
            },
            end: {
              line: 434,
              column: 5
            }
          }, {
            start: {
              line: 432,
              column: 11
            },
            end: {
              line: 434,
              column: 5
            }
          }],
          line: 432
        },
        "47": {
          loc: {
            start: {
              line: 446,
              column: 4
            },
            end: {
              line: 448,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 446,
              column: 4
            },
            end: {
              line: 448,
              column: 5
            }
          }, {
            start: {
              line: 446,
              column: 4
            },
            end: {
              line: 448,
              column: 5
            }
          }],
          line: 446
        },
        "48": {
          loc: {
            start: {
              line: 446,
              column: 8
            },
            end: {
              line: 446,
              column: 54
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 446,
              column: 8
            },
            end: {
              line: 446,
              column: 32
            }
          }, {
            start: {
              line: 446,
              column: 36
            },
            end: {
              line: 446,
              column: 54
            }
          }],
          line: 446
        },
        "49": {
          loc: {
            start: {
              line: 450,
              column: 4
            },
            end: {
              line: 452,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 450,
              column: 4
            },
            end: {
              line: 452,
              column: 5
            }
          }, {
            start: {
              line: 450,
              column: 4
            },
            end: {
              line: 452,
              column: 5
            }
          }],
          line: 450
        },
        "50": {
          loc: {
            start: {
              line: 450,
              column: 8
            },
            end: {
              line: 450,
              column: 54
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 450,
              column: 8
            },
            end: {
              line: 450,
              column: 31
            }
          }, {
            start: {
              line: 450,
              column: 35
            },
            end: {
              line: 450,
              column: 54
            }
          }],
          line: 450
        },
        "51": {
          loc: {
            start: {
              line: 467,
              column: 4
            },
            end: {
              line: 497,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 467,
              column: 4
            },
            end: {
              line: 497,
              column: 5
            }
          }, {
            start: {
              line: 467,
              column: 4
            },
            end: {
              line: 497,
              column: 5
            }
          }],
          line: 467
        },
        "52": {
          loc: {
            start: {
              line: 508,
              column: 35
            },
            end: {
              line: 508,
              column: 57
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 508,
              column: 45
            },
            end: {
              line: 508,
              column: 52
            }
          }, {
            start: {
              line: 508,
              column: 55
            },
            end: {
              line: 508,
              column: 57
            }
          }],
          line: 508
        },
        "53": {
          loc: {
            start: {
              line: 515,
              column: 6
            },
            end: {
              line: 517,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 515,
              column: 6
            },
            end: {
              line: 517,
              column: 7
            }
          }, {
            start: {
              line: 515,
              column: 6
            },
            end: {
              line: 517,
              column: 7
            }
          }],
          line: 515
        },
        "54": {
          loc: {
            start: {
              line: 523,
              column: 39
            },
            end: {
              line: 523,
              column: 61
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 523,
              column: 49
            },
            end: {
              line: 523,
              column: 56
            }
          }, {
            start: {
              line: 523,
              column: 59
            },
            end: {
              line: 523,
              column: 61
            }
          }],
          line: 523
        },
        "55": {
          loc: {
            start: {
              line: 543,
              column: 11
            },
            end: {
              line: 543,
              column: 61
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 543,
              column: 50
            },
            end: {
              line: 543,
              column: 56
            }
          }, {
            start: {
              line: 543,
              column: 59
            },
            end: {
              line: 543,
              column: 61
            }
          }],
          line: 543
        },
        "56": {
          loc: {
            start: {
              line: 543,
              column: 11
            },
            end: {
              line: 543,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 543,
              column: 11
            },
            end: {
              line: 543,
              column: 37
            }
          }, {
            start: {
              line: 543,
              column: 41
            },
            end: {
              line: 543,
              column: 47
            }
          }],
          line: 543
        },
        "57": {
          loc: {
            start: {
              line: 546,
              column: 6
            },
            end: {
              line: 549,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 546,
              column: 6
            },
            end: {
              line: 549,
              column: 7
            }
          }, {
            start: {
              line: 546,
              column: 6
            },
            end: {
              line: 549,
              column: 7
            }
          }],
          line: 546
        },
        "58": {
          loc: {
            start: {
              line: 551,
              column: 6
            },
            end: {
              line: 558,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 551,
              column: 6
            },
            end: {
              line: 558,
              column: 7
            }
          }, {
            start: {
              line: 551,
              column: 6
            },
            end: {
              line: 558,
              column: 7
            }
          }],
          line: 551
        },
        "59": {
          loc: {
            start: {
              line: 552,
              column: 8
            },
            end: {
              line: 554,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 552,
              column: 8
            },
            end: {
              line: 554,
              column: 9
            }
          }, {
            start: {
              line: 552,
              column: 8
            },
            end: {
              line: 554,
              column: 9
            }
          }],
          line: 552
        },
        "60": {
          loc: {
            start: {
              line: 556,
              column: 13
            },
            end: {
              line: 558,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 556,
              column: 13
            },
            end: {
              line: 558,
              column: 7
            }
          }, {
            start: {
              line: 556,
              column: 13
            },
            end: {
              line: 558,
              column: 7
            }
          }],
          line: 556
        },
        "61": {
          loc: {
            start: {
              line: 573,
              column: 2
            },
            end: {
              line: 575,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 573,
              column: 2
            },
            end: {
              line: 575,
              column: 3
            }
          }, {
            start: {
              line: 573,
              column: 2
            },
            end: {
              line: 575,
              column: 3
            }
          }],
          line: 573
        },
        "62": {
          loc: {
            start: {
              line: 577,
              column: 17
            },
            end: {
              line: 581,
              column: 5
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 578,
              column: 6
            },
            end: {
              line: 578,
              column: 14
            }
          }, {
            start: {
              line: 578,
              column: 17
            },
            end: {
              line: 581,
              column: 5
            }
          }],
          line: 577
        },
        "63": {
          loc: {
            start: {
              line: 583,
              column: 2
            },
            end: {
              line: 585,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 583,
              column: 2
            },
            end: {
              line: 585,
              column: 3
            }
          }, {
            start: {
              line: 583,
              column: 2
            },
            end: {
              line: 585,
              column: 3
            }
          }],
          line: 583
        },
        "64": {
          loc: {
            start: {
              line: 583,
              column: 6
            },
            end: {
              line: 583,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 583,
              column: 6
            },
            end: {
              line: 583,
              column: 26
            }
          }, {
            start: {
              line: 583,
              column: 30
            },
            end: {
              line: 583,
              column: 53
            }
          }],
          line: 583
        },
        "65": {
          loc: {
            start: {
              line: 588,
              column: 4
            },
            end: {
              line: 591,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 588,
              column: 4
            },
            end: {
              line: 591,
              column: 5
            }
          }, {
            start: {
              line: 588,
              column: 4
            },
            end: {
              line: 591,
              column: 5
            }
          }],
          line: 588
        },
        "66": {
          loc: {
            start: {
              line: 594,
              column: 6
            },
            end: {
              line: 596,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 594,
              column: 6
            },
            end: {
              line: 596,
              column: 7
            }
          }, {
            start: {
              line: 594,
              column: 6
            },
            end: {
              line: 596,
              column: 7
            }
          }],
          line: 594
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
        "157": 0,
        "158": 0,
        "159": 0,
        "160": 0,
        "161": 0,
        "162": 0,
        "163": 0,
        "164": 0,
        "165": 0,
        "166": 0,
        "167": 0,
        "168": 0,
        "169": 0,
        "170": 0,
        "171": 0,
        "172": 0,
        "173": 0,
        "174": 0,
        "175": 0,
        "176": 0,
        "177": 0,
        "178": 0,
        "179": 0,
        "180": 0,
        "181": 0,
        "182": 0,
        "183": 0,
        "184": 0,
        "185": 0,
        "186": 0,
        "187": 0,
        "188": 0,
        "189": 0,
        "190": 0,
        "191": 0,
        "192": 0,
        "193": 0,
        "194": 0,
        "195": 0,
        "196": 0,
        "197": 0,
        "198": 0,
        "199": 0,
        "200": 0,
        "201": 0,
        "202": 0,
        "203": 0,
        "204": 0,
        "205": 0,
        "206": 0,
        "207": 0,
        "208": 0,
        "209": 0,
        "210": 0,
        "211": 0,
        "212": 0,
        "213": 0,
        "214": 0,
        "215": 0,
        "216": 0,
        "217": 0,
        "218": 0,
        "219": 0,
        "220": 0,
        "221": 0,
        "222": 0,
        "223": 0,
        "224": 0,
        "225": 0,
        "226": 0,
        "227": 0,
        "228": 0,
        "229": 0,
        "230": 0,
        "231": 0,
        "232": 0,
        "233": 0,
        "234": 0,
        "235": 0,
        "236": 0,
        "237": 0,
        "238": 0,
        "239": 0,
        "240": 0,
        "241": 0,
        "242": 0,
        "243": 0,
        "244": 0,
        "245": 0,
        "246": 0,
        "247": 0,
        "248": 0,
        "249": 0,
        "250": 0,
        "251": 0,
        "252": 0,
        "253": 0,
        "254": 0,
        "255": 0,
        "256": 0,
        "257": 0
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
        "46": 0
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
        "26": [0, 0, 0],
        "27": [0, 0],
        "28": [0, 0],
        "29": [0, 0],
        "30": [0, 0],
        "31": [0, 0],
        "32": [0, 0],
        "33": [0, 0],
        "34": [0, 0],
        "35": [0, 0],
        "36": [0, 0],
        "37": [0, 0],
        "38": [0, 0],
        "39": [0, 0],
        "40": [0, 0],
        "41": [0, 0],
        "42": [0, 0],
        "43": [0, 0],
        "44": [0, 0],
        "45": [0, 0],
        "46": [0, 0],
        "47": [0, 0],
        "48": [0, 0],
        "49": [0, 0],
        "50": [0, 0],
        "51": [0, 0],
        "52": [0, 0],
        "53": [0, 0],
        "54": [0, 0],
        "55": [0, 0],
        "56": [0, 0],
        "57": [0, 0],
        "58": [0, 0],
        "59": [0, 0],
        "60": [0, 0],
        "61": [0, 0],
        "62": [0, 0],
        "63": [0, 0],
        "64": [0, 0],
        "65": [0, 0],
        "66": [0, 0]
      },
      _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
      hash: "452e160e496237dc0ee5287230121267cc88fa3b"
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

  var NAME = (cov_10c74op6cl.s[0]++, 'modal');
  var VERSION = (cov_10c74op6cl.s[1]++, '4.4.1');
  var DATA_KEY = (cov_10c74op6cl.s[2]++, 'bs.modal');
  var EVENT_KEY = (cov_10c74op6cl.s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_10c74op6cl.s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_10c74op6cl.s[5]++, $.fn[NAME]);
  var ESCAPE_KEYCODE = (cov_10c74op6cl.s[6]++, 27); // KeyboardEvent.which value for Escape (Esc) key

  var Default = (cov_10c74op6cl.s[7]++, {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  });
  var DefaultType = (cov_10c74op6cl.s[8]++, {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  });
  var Event = (cov_10c74op6cl.s[9]++, {
    HIDE: "hide" + EVENT_KEY,
    HIDE_PREVENTED: "hidePrevented" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    RESIZE: "resize" + EVENT_KEY,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  });
  var ClassName = (cov_10c74op6cl.s[10]++, {
    SCROLLABLE: 'modal-dialog-scrollable',
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show',
    STATIC: 'modal-static'
  });
  var Selector = (cov_10c74op6cl.s[11]++, {
    DIALOG: '.modal-dialog',
    MODAL_BODY: '.modal-body',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top'
  });
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function () {
    function Modal(element, config) {
      cov_10c74op6cl.f[0]++;
      cov_10c74op6cl.s[12]++;
      this._config = this._getConfig(config);
      cov_10c74op6cl.s[13]++;
      this._element = element;
      cov_10c74op6cl.s[14]++;
      this._dialog = element.querySelector(Selector.DIALOG);
      cov_10c74op6cl.s[15]++;
      this._backdrop = null;
      cov_10c74op6cl.s[16]++;
      this._isShown = false;
      cov_10c74op6cl.s[17]++;
      this._isBodyOverflowing = false;
      cov_10c74op6cl.s[18]++;
      this._ignoreBackdropClick = false;
      cov_10c74op6cl.s[19]++;
      this._isTransitioning = false;
      cov_10c74op6cl.s[20]++;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      cov_10c74op6cl.f[3]++;
      cov_10c74op6cl.s[23]++;
      return this._isShown ? (cov_10c74op6cl.b[0][0]++, this.hide()) : (cov_10c74op6cl.b[0][1]++, this.show(relatedTarget));
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      cov_10c74op6cl.f[4]++;
      cov_10c74op6cl.s[24]++;

      if ((cov_10c74op6cl.b[2][0]++, this._isShown) || (cov_10c74op6cl.b[2][1]++, this._isTransitioning)) {
        cov_10c74op6cl.b[1][0]++;
        cov_10c74op6cl.s[25]++;
        return;
      } else {
        cov_10c74op6cl.b[1][1]++;
      }

      cov_10c74op6cl.s[26]++;

      if ($(this._element).hasClass(ClassName.FADE)) {
        cov_10c74op6cl.b[3][0]++;
        cov_10c74op6cl.s[27]++;
        this._isTransitioning = true;
      } else {
        cov_10c74op6cl.b[3][1]++;
      }

      var showEvent = (cov_10c74op6cl.s[28]++, $.Event(Event.SHOW, {
        relatedTarget: relatedTarget
      }));
      cov_10c74op6cl.s[29]++;
      $(this._element).trigger(showEvent);
      cov_10c74op6cl.s[30]++;

      if ((cov_10c74op6cl.b[5][0]++, this._isShown) || (cov_10c74op6cl.b[5][1]++, showEvent.isDefaultPrevented())) {
        cov_10c74op6cl.b[4][0]++;
        cov_10c74op6cl.s[31]++;
        return;
      } else {
        cov_10c74op6cl.b[4][1]++;
      }

      cov_10c74op6cl.s[32]++;
      this._isShown = true;
      cov_10c74op6cl.s[33]++;

      this._checkScrollbar();

      cov_10c74op6cl.s[34]++;

      this._setScrollbar();

      cov_10c74op6cl.s[35]++;

      this._adjustDialog();

      cov_10c74op6cl.s[36]++;

      this._setEscapeEvent();

      cov_10c74op6cl.s[37]++;

      this._setResizeEvent();

      cov_10c74op6cl.s[38]++;
      $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
        cov_10c74op6cl.f[5]++;
        cov_10c74op6cl.s[39]++;
        return _this.hide(event);
      });
      cov_10c74op6cl.s[40]++;
      $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
        cov_10c74op6cl.f[6]++;
        cov_10c74op6cl.s[41]++;
        $(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
          cov_10c74op6cl.f[7]++;
          cov_10c74op6cl.s[42]++;

          if ($(event.target).is(_this._element)) {
            cov_10c74op6cl.b[6][0]++;
            cov_10c74op6cl.s[43]++;
            _this._ignoreBackdropClick = true;
          } else {
            cov_10c74op6cl.b[6][1]++;
          }
        });
      });
      cov_10c74op6cl.s[44]++;

      this._showBackdrop(function () {
        cov_10c74op6cl.f[8]++;
        cov_10c74op6cl.s[45]++;
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      cov_10c74op6cl.f[9]++;
      cov_10c74op6cl.s[46]++;

      if (event) {
        cov_10c74op6cl.b[7][0]++;
        cov_10c74op6cl.s[47]++;
        event.preventDefault();
      } else {
        cov_10c74op6cl.b[7][1]++;
      }

      cov_10c74op6cl.s[48]++;

      if ((cov_10c74op6cl.b[9][0]++, !this._isShown) || (cov_10c74op6cl.b[9][1]++, this._isTransitioning)) {
        cov_10c74op6cl.b[8][0]++;
        cov_10c74op6cl.s[49]++;
        return;
      } else {
        cov_10c74op6cl.b[8][1]++;
      }

      var hideEvent = (cov_10c74op6cl.s[50]++, $.Event(Event.HIDE));
      cov_10c74op6cl.s[51]++;
      $(this._element).trigger(hideEvent);
      cov_10c74op6cl.s[52]++;

      if ((cov_10c74op6cl.b[11][0]++, !this._isShown) || (cov_10c74op6cl.b[11][1]++, hideEvent.isDefaultPrevented())) {
        cov_10c74op6cl.b[10][0]++;
        cov_10c74op6cl.s[53]++;
        return;
      } else {
        cov_10c74op6cl.b[10][1]++;
      }

      cov_10c74op6cl.s[54]++;
      this._isShown = false;
      var transition = (cov_10c74op6cl.s[55]++, $(this._element).hasClass(ClassName.FADE));
      cov_10c74op6cl.s[56]++;

      if (transition) {
        cov_10c74op6cl.b[12][0]++;
        cov_10c74op6cl.s[57]++;
        this._isTransitioning = true;
      } else {
        cov_10c74op6cl.b[12][1]++;
      }

      cov_10c74op6cl.s[58]++;

      this._setEscapeEvent();

      cov_10c74op6cl.s[59]++;

      this._setResizeEvent();

      cov_10c74op6cl.s[60]++;
      $(document).off(Event.FOCUSIN);
      cov_10c74op6cl.s[61]++;
      $(this._element).removeClass(ClassName.SHOW);
      cov_10c74op6cl.s[62]++;
      $(this._element).off(Event.CLICK_DISMISS);
      cov_10c74op6cl.s[63]++;
      $(this._dialog).off(Event.MOUSEDOWN_DISMISS);
      cov_10c74op6cl.s[64]++;

      if (transition) {
        cov_10c74op6cl.b[13][0]++;
        var transitionDuration = (cov_10c74op6cl.s[65]++, Util.getTransitionDurationFromElement(this._element));
        cov_10c74op6cl.s[66]++;
        $(this._element).one(Util.TRANSITION_END, function (event) {
          cov_10c74op6cl.f[10]++;
          cov_10c74op6cl.s[67]++;
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        cov_10c74op6cl.b[13][1]++;
        cov_10c74op6cl.s[68]++;

        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      cov_10c74op6cl.f[11]++;
      cov_10c74op6cl.s[69]++;
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        cov_10c74op6cl.f[12]++;
        cov_10c74op6cl.s[70]++;
        return $(htmlElement).off(EVENT_KEY);
      });
      /**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */

      cov_10c74op6cl.s[71]++;
      $(document).off(Event.FOCUSIN);
      cov_10c74op6cl.s[72]++;
      $.removeData(this._element, DATA_KEY);
      cov_10c74op6cl.s[73]++;
      this._config = null;
      cov_10c74op6cl.s[74]++;
      this._element = null;
      cov_10c74op6cl.s[75]++;
      this._dialog = null;
      cov_10c74op6cl.s[76]++;
      this._backdrop = null;
      cov_10c74op6cl.s[77]++;
      this._isShown = null;
      cov_10c74op6cl.s[78]++;
      this._isBodyOverflowing = null;
      cov_10c74op6cl.s[79]++;
      this._ignoreBackdropClick = null;
      cov_10c74op6cl.s[80]++;
      this._isTransitioning = null;
      cov_10c74op6cl.s[81]++;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      cov_10c74op6cl.f[13]++;
      cov_10c74op6cl.s[82]++;

      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      cov_10c74op6cl.f[14]++;
      cov_10c74op6cl.s[83]++;
      config = _objectSpread2(_objectSpread2({}, Default), config);
      cov_10c74op6cl.s[84]++;
      Util.typeCheckConfig(NAME, config, DefaultType);
      cov_10c74op6cl.s[85]++;
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      cov_10c74op6cl.f[15]++;
      cov_10c74op6cl.s[86]++;

      if (this._config.backdrop === 'static') {
        cov_10c74op6cl.b[14][0]++;
        var hideEventPrevented = (cov_10c74op6cl.s[87]++, $.Event(Event.HIDE_PREVENTED));
        cov_10c74op6cl.s[88]++;
        $(this._element).trigger(hideEventPrevented);
        cov_10c74op6cl.s[89]++;

        if (hideEventPrevented.defaultPrevented) {
          cov_10c74op6cl.b[15][0]++;
          cov_10c74op6cl.s[90]++;
          return;
        } else {
          cov_10c74op6cl.b[15][1]++;
        }

        cov_10c74op6cl.s[91]++;

        this._element.classList.add(ClassName.STATIC);

        var modalTransitionDuration = (cov_10c74op6cl.s[92]++, Util.getTransitionDurationFromElement(this._element));
        cov_10c74op6cl.s[93]++;
        $(this._element).one(Util.TRANSITION_END, function () {
          cov_10c74op6cl.f[16]++;
          cov_10c74op6cl.s[94]++;

          _this3._element.classList.remove(ClassName.STATIC);
        }).emulateTransitionEnd(modalTransitionDuration);
        cov_10c74op6cl.s[95]++;

        this._element.focus();
      } else {
        cov_10c74op6cl.b[14][1]++;
        cov_10c74op6cl.s[96]++;
        this.hide();
      }
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      cov_10c74op6cl.f[17]++;
      var transition = (cov_10c74op6cl.s[97]++, $(this._element).hasClass(ClassName.FADE));
      var modalBody = (cov_10c74op6cl.s[98]++, this._dialog ? (cov_10c74op6cl.b[16][0]++, this._dialog.querySelector(Selector.MODAL_BODY)) : (cov_10c74op6cl.b[16][1]++, null));
      cov_10c74op6cl.s[99]++;

      if ((cov_10c74op6cl.b[18][0]++, !this._element.parentNode) || (cov_10c74op6cl.b[18][1]++, this._element.parentNode.nodeType !== Node.ELEMENT_NODE)) {
        cov_10c74op6cl.b[17][0]++;
        cov_10c74op6cl.s[100]++;
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      } else {
        cov_10c74op6cl.b[17][1]++;
      }

      cov_10c74op6cl.s[101]++;
      this._element.style.display = 'block';
      cov_10c74op6cl.s[102]++;

      this._element.removeAttribute('aria-hidden');

      cov_10c74op6cl.s[103]++;

      this._element.setAttribute('aria-modal', true);

      cov_10c74op6cl.s[104]++;

      if ((cov_10c74op6cl.b[20][0]++, $(this._dialog).hasClass(ClassName.SCROLLABLE)) && (cov_10c74op6cl.b[20][1]++, modalBody)) {
        cov_10c74op6cl.b[19][0]++;
        cov_10c74op6cl.s[105]++;
        modalBody.scrollTop = 0;
      } else {
        cov_10c74op6cl.b[19][1]++;
        cov_10c74op6cl.s[106]++;
        this._element.scrollTop = 0;
      }

      cov_10c74op6cl.s[107]++;

      if (transition) {
        cov_10c74op6cl.b[21][0]++;
        cov_10c74op6cl.s[108]++;
        Util.reflow(this._element);
      } else {
        cov_10c74op6cl.b[21][1]++;
      }

      cov_10c74op6cl.s[109]++;
      $(this._element).addClass(ClassName.SHOW);
      cov_10c74op6cl.s[110]++;

      if (this._config.focus) {
        cov_10c74op6cl.b[22][0]++;
        cov_10c74op6cl.s[111]++;

        this._enforceFocus();
      } else {
        cov_10c74op6cl.b[22][1]++;
      }

      var shownEvent = (cov_10c74op6cl.s[112]++, $.Event(Event.SHOWN, {
        relatedTarget: relatedTarget
      }));
      cov_10c74op6cl.s[113]++;

      var transitionComplete = function transitionComplete() {
        cov_10c74op6cl.f[18]++;
        cov_10c74op6cl.s[114]++;

        if (_this4._config.focus) {
          cov_10c74op6cl.b[23][0]++;
          cov_10c74op6cl.s[115]++;

          _this4._element.focus();
        } else {
          cov_10c74op6cl.b[23][1]++;
        }

        cov_10c74op6cl.s[116]++;
        _this4._isTransitioning = false;
        cov_10c74op6cl.s[117]++;
        $(_this4._element).trigger(shownEvent);
      };

      cov_10c74op6cl.s[118]++;

      if (transition) {
        cov_10c74op6cl.b[24][0]++;
        var transitionDuration = (cov_10c74op6cl.s[119]++, Util.getTransitionDurationFromElement(this._dialog));
        cov_10c74op6cl.s[120]++;
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        cov_10c74op6cl.b[24][1]++;
        cov_10c74op6cl.s[121]++;
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      cov_10c74op6cl.f[19]++;
      cov_10c74op6cl.s[122]++;
      $(document).off(Event.FOCUSIN) // Guard against infinite focus loop
      .on(Event.FOCUSIN, function (event) {
        cov_10c74op6cl.f[20]++;
        cov_10c74op6cl.s[123]++;

        if ((cov_10c74op6cl.b[26][0]++, document !== event.target) && (cov_10c74op6cl.b[26][1]++, _this5._element !== event.target) && (cov_10c74op6cl.b[26][2]++, $(_this5._element).has(event.target).length === 0)) {
          cov_10c74op6cl.b[25][0]++;
          cov_10c74op6cl.s[124]++;

          _this5._element.focus();
        } else {
          cov_10c74op6cl.b[25][1]++;
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      cov_10c74op6cl.f[21]++;
      cov_10c74op6cl.s[125]++;

      if ((cov_10c74op6cl.b[28][0]++, this._isShown) && (cov_10c74op6cl.b[28][1]++, this._config.keyboard)) {
        cov_10c74op6cl.b[27][0]++;
        cov_10c74op6cl.s[126]++;
        $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
          cov_10c74op6cl.f[22]++;
          cov_10c74op6cl.s[127]++;

          if (event.which === ESCAPE_KEYCODE) {
            cov_10c74op6cl.b[29][0]++;
            cov_10c74op6cl.s[128]++;

            _this6._triggerBackdropTransition();
          } else {
            cov_10c74op6cl.b[29][1]++;
          }
        });
      } else {
        cov_10c74op6cl.b[27][1]++;
        cov_10c74op6cl.s[129]++;

        if (!this._isShown) {
          cov_10c74op6cl.b[30][0]++;
          cov_10c74op6cl.s[130]++;
          $(this._element).off(Event.KEYDOWN_DISMISS);
        } else {
          cov_10c74op6cl.b[30][1]++;
        }
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      cov_10c74op6cl.f[23]++;
      cov_10c74op6cl.s[131]++;

      if (this._isShown) {
        cov_10c74op6cl.b[31][0]++;
        cov_10c74op6cl.s[132]++;
        $(window).on(Event.RESIZE, function (event) {
          cov_10c74op6cl.f[24]++;
          cov_10c74op6cl.s[133]++;
          return _this7.handleUpdate(event);
        });
      } else {
        cov_10c74op6cl.b[31][1]++;
        cov_10c74op6cl.s[134]++;
        $(window).off(Event.RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      cov_10c74op6cl.f[25]++;
      cov_10c74op6cl.s[135]++;
      this._element.style.display = 'none';
      cov_10c74op6cl.s[136]++;

      this._element.setAttribute('aria-hidden', true);

      cov_10c74op6cl.s[137]++;

      this._element.removeAttribute('aria-modal');

      cov_10c74op6cl.s[138]++;
      this._isTransitioning = false;
      cov_10c74op6cl.s[139]++;

      this._showBackdrop(function () {
        cov_10c74op6cl.f[26]++;
        cov_10c74op6cl.s[140]++;
        $(document.body).removeClass(ClassName.OPEN);
        cov_10c74op6cl.s[141]++;

        _this8._resetAdjustments();

        cov_10c74op6cl.s[142]++;

        _this8._resetScrollbar();

        cov_10c74op6cl.s[143]++;
        $(_this8._element).trigger(Event.HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      cov_10c74op6cl.f[27]++;
      cov_10c74op6cl.s[144]++;

      if (this._backdrop) {
        cov_10c74op6cl.b[32][0]++;
        cov_10c74op6cl.s[145]++;
        $(this._backdrop).remove();
        cov_10c74op6cl.s[146]++;
        this._backdrop = null;
      } else {
        cov_10c74op6cl.b[32][1]++;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      cov_10c74op6cl.f[28]++;
      var animate = (cov_10c74op6cl.s[147]++, $(this._element).hasClass(ClassName.FADE) ? (cov_10c74op6cl.b[33][0]++, ClassName.FADE) : (cov_10c74op6cl.b[33][1]++, ''));
      cov_10c74op6cl.s[148]++;

      if ((cov_10c74op6cl.b[35][0]++, this._isShown) && (cov_10c74op6cl.b[35][1]++, this._config.backdrop)) {
        cov_10c74op6cl.b[34][0]++;
        cov_10c74op6cl.s[149]++;
        this._backdrop = document.createElement('div');
        cov_10c74op6cl.s[150]++;
        this._backdrop.className = ClassName.BACKDROP;
        cov_10c74op6cl.s[151]++;

        if (animate) {
          cov_10c74op6cl.b[36][0]++;
          cov_10c74op6cl.s[152]++;

          this._backdrop.classList.add(animate);
        } else {
          cov_10c74op6cl.b[36][1]++;
        }

        cov_10c74op6cl.s[153]++;
        $(this._backdrop).appendTo(document.body);
        cov_10c74op6cl.s[154]++;
        $(this._element).on(Event.CLICK_DISMISS, function (event) {
          cov_10c74op6cl.f[29]++;
          cov_10c74op6cl.s[155]++;

          if (_this9._ignoreBackdropClick) {
            cov_10c74op6cl.b[37][0]++;
            cov_10c74op6cl.s[156]++;
            _this9._ignoreBackdropClick = false;
            cov_10c74op6cl.s[157]++;
            return;
          } else {
            cov_10c74op6cl.b[37][1]++;
          }

          cov_10c74op6cl.s[158]++;

          if (event.target !== event.currentTarget) {
            cov_10c74op6cl.b[38][0]++;
            cov_10c74op6cl.s[159]++;
            return;
          } else {
            cov_10c74op6cl.b[38][1]++;
          }

          cov_10c74op6cl.s[160]++;

          _this9._triggerBackdropTransition();
        });
        cov_10c74op6cl.s[161]++;

        if (animate) {
          cov_10c74op6cl.b[39][0]++;
          cov_10c74op6cl.s[162]++;
          Util.reflow(this._backdrop);
        } else {
          cov_10c74op6cl.b[39][1]++;
        }

        cov_10c74op6cl.s[163]++;
        $(this._backdrop).addClass(ClassName.SHOW);
        cov_10c74op6cl.s[164]++;

        if (!callback) {
          cov_10c74op6cl.b[40][0]++;
          cov_10c74op6cl.s[165]++;
          return;
        } else {
          cov_10c74op6cl.b[40][1]++;
        }

        cov_10c74op6cl.s[166]++;

        if (!animate) {
          cov_10c74op6cl.b[41][0]++;
          cov_10c74op6cl.s[167]++;
          callback();
          cov_10c74op6cl.s[168]++;
          return;
        } else {
          cov_10c74op6cl.b[41][1]++;
        }

        var backdropTransitionDuration = (cov_10c74op6cl.s[169]++, Util.getTransitionDurationFromElement(this._backdrop));
        cov_10c74op6cl.s[170]++;
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else {
        cov_10c74op6cl.b[34][1]++;
        cov_10c74op6cl.s[171]++;

        if ((cov_10c74op6cl.b[43][0]++, !this._isShown) && (cov_10c74op6cl.b[43][1]++, this._backdrop)) {
          cov_10c74op6cl.b[42][0]++;
          cov_10c74op6cl.s[172]++;
          $(this._backdrop).removeClass(ClassName.SHOW);
          cov_10c74op6cl.s[173]++;

          var callbackRemove = function callbackRemove() {
            cov_10c74op6cl.f[30]++;
            cov_10c74op6cl.s[174]++;

            _this9._removeBackdrop();

            cov_10c74op6cl.s[175]++;

            if (callback) {
              cov_10c74op6cl.b[44][0]++;
              cov_10c74op6cl.s[176]++;
              callback();
            } else {
              cov_10c74op6cl.b[44][1]++;
            }
          };

          cov_10c74op6cl.s[177]++;

          if ($(this._element).hasClass(ClassName.FADE)) {
            cov_10c74op6cl.b[45][0]++;

            var _backdropTransitionDuration = (cov_10c74op6cl.s[178]++, Util.getTransitionDurationFromElement(this._backdrop));

            cov_10c74op6cl.s[179]++;
            $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
          } else {
            cov_10c74op6cl.b[45][1]++;
            cov_10c74op6cl.s[180]++;
            callbackRemove();
          }
        } else {
          cov_10c74op6cl.b[42][1]++;
          cov_10c74op6cl.s[181]++;

          if (callback) {
            cov_10c74op6cl.b[46][0]++;
            cov_10c74op6cl.s[182]++;
            callback();
          } else {
            cov_10c74op6cl.b[46][1]++;
          }
        }
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      cov_10c74op6cl.f[31]++;
      var isModalOverflowing = (cov_10c74op6cl.s[183]++, this._element.scrollHeight > document.documentElement.clientHeight);
      cov_10c74op6cl.s[184]++;

      if ((cov_10c74op6cl.b[48][0]++, !this._isBodyOverflowing) && (cov_10c74op6cl.b[48][1]++, isModalOverflowing)) {
        cov_10c74op6cl.b[47][0]++;
        cov_10c74op6cl.s[185]++;
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      } else {
        cov_10c74op6cl.b[47][1]++;
      }

      cov_10c74op6cl.s[186]++;

      if ((cov_10c74op6cl.b[50][0]++, this._isBodyOverflowing) && (cov_10c74op6cl.b[50][1]++, !isModalOverflowing)) {
        cov_10c74op6cl.b[49][0]++;
        cov_10c74op6cl.s[187]++;
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      } else {
        cov_10c74op6cl.b[49][1]++;
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      cov_10c74op6cl.f[32]++;
      cov_10c74op6cl.s[188]++;
      this._element.style.paddingLeft = '';
      cov_10c74op6cl.s[189]++;
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      cov_10c74op6cl.f[33]++;
      var rect = (cov_10c74op6cl.s[190]++, document.body.getBoundingClientRect());
      cov_10c74op6cl.s[191]++;
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      cov_10c74op6cl.s[192]++;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      cov_10c74op6cl.f[34]++;
      cov_10c74op6cl.s[193]++;

      if (this._isBodyOverflowing) {
        cov_10c74op6cl.b[51][0]++;
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = (cov_10c74op6cl.s[194]++, [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT)));
        var stickyContent = (cov_10c74op6cl.s[195]++, [].slice.call(document.querySelectorAll(Selector.STICKY_CONTENT))); // Adjust fixed content padding

        cov_10c74op6cl.s[196]++;
        $(fixedContent).each(function (index, element) {
          cov_10c74op6cl.f[35]++;
          var actualPadding = (cov_10c74op6cl.s[197]++, element.style.paddingRight);
          var calculatedPadding = (cov_10c74op6cl.s[198]++, $(element).css('padding-right'));
          cov_10c74op6cl.s[199]++;
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        cov_10c74op6cl.s[200]++;
        $(stickyContent).each(function (index, element) {
          cov_10c74op6cl.f[36]++;
          var actualMargin = (cov_10c74op6cl.s[201]++, element.style.marginRight);
          var calculatedMargin = (cov_10c74op6cl.s[202]++, $(element).css('margin-right'));
          cov_10c74op6cl.s[203]++;
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = (cov_10c74op6cl.s[204]++, document.body.style.paddingRight);
        var calculatedPadding = (cov_10c74op6cl.s[205]++, $(document.body).css('padding-right'));
        cov_10c74op6cl.s[206]++;
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      } else {
        cov_10c74op6cl.b[51][1]++;
      }

      cov_10c74op6cl.s[207]++;
      $(document.body).addClass(ClassName.OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      cov_10c74op6cl.f[37]++;
      // Restore fixed content padding
      var fixedContent = (cov_10c74op6cl.s[208]++, [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT)));
      cov_10c74op6cl.s[209]++;
      $(fixedContent).each(function (index, element) {
        cov_10c74op6cl.f[38]++;
        var padding = (cov_10c74op6cl.s[210]++, $(element).data('padding-right'));
        cov_10c74op6cl.s[211]++;
        $(element).removeData('padding-right');
        cov_10c74op6cl.s[212]++;
        element.style.paddingRight = padding ? (cov_10c74op6cl.b[52][0]++, padding) : (cov_10c74op6cl.b[52][1]++, '');
      }); // Restore sticky content

      var elements = (cov_10c74op6cl.s[213]++, [].slice.call(document.querySelectorAll("" + Selector.STICKY_CONTENT)));
      cov_10c74op6cl.s[214]++;
      $(elements).each(function (index, element) {
        cov_10c74op6cl.f[39]++;
        var margin = (cov_10c74op6cl.s[215]++, $(element).data('margin-right'));
        cov_10c74op6cl.s[216]++;

        if (typeof margin !== 'undefined') {
          cov_10c74op6cl.b[53][0]++;
          cov_10c74op6cl.s[217]++;
          $(element).css('margin-right', margin).removeData('margin-right');
        } else {
          cov_10c74op6cl.b[53][1]++;
        }
      }); // Restore body padding

      var padding = (cov_10c74op6cl.s[218]++, $(document.body).data('padding-right'));
      cov_10c74op6cl.s[219]++;
      $(document.body).removeData('padding-right');
      cov_10c74op6cl.s[220]++;
      document.body.style.paddingRight = padding ? (cov_10c74op6cl.b[54][0]++, padding) : (cov_10c74op6cl.b[54][1]++, '');
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      cov_10c74op6cl.f[40]++;
      // thx d.walsh
      var scrollDiv = (cov_10c74op6cl.s[221]++, document.createElement('div'));
      cov_10c74op6cl.s[222]++;
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
      cov_10c74op6cl.s[223]++;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = (cov_10c74op6cl.s[224]++, scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth);
      cov_10c74op6cl.s[225]++;
      document.body.removeChild(scrollDiv);
      cov_10c74op6cl.s[226]++;
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      cov_10c74op6cl.f[41]++;
      cov_10c74op6cl.s[227]++;
      return this.each(function () {
        cov_10c74op6cl.f[42]++;
        var data = (cov_10c74op6cl.s[228]++, $(this).data(DATA_KEY));

        var _config = (cov_10c74op6cl.s[229]++, _objectSpread2(_objectSpread2(_objectSpread2({}, Default), $(this).data()), (cov_10c74op6cl.b[56][0]++, typeof config === 'object') && (cov_10c74op6cl.b[56][1]++, config) ? (cov_10c74op6cl.b[55][0]++, config) : (cov_10c74op6cl.b[55][1]++, {})));

        cov_10c74op6cl.s[230]++;

        if (!data) {
          cov_10c74op6cl.b[57][0]++;
          cov_10c74op6cl.s[231]++;
          data = new Modal(this, _config);
          cov_10c74op6cl.s[232]++;
          $(this).data(DATA_KEY, data);
        } else {
          cov_10c74op6cl.b[57][1]++;
        }

        cov_10c74op6cl.s[233]++;

        if (typeof config === 'string') {
          cov_10c74op6cl.b[58][0]++;
          cov_10c74op6cl.s[234]++;

          if (typeof data[config] === 'undefined') {
            cov_10c74op6cl.b[59][0]++;
            cov_10c74op6cl.s[235]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_10c74op6cl.b[59][1]++;
          }

          cov_10c74op6cl.s[236]++;
          data[config](relatedTarget);
        } else {
          cov_10c74op6cl.b[58][1]++;
          cov_10c74op6cl.s[237]++;

          if (_config.show) {
            cov_10c74op6cl.b[60][0]++;
            cov_10c74op6cl.s[238]++;
            data.show(relatedTarget);
          } else {
            cov_10c74op6cl.b[60][1]++;
          }
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        cov_10c74op6cl.f[1]++;
        cov_10c74op6cl.s[21]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_10c74op6cl.f[2]++;
        cov_10c74op6cl.s[22]++;
        return Default;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  cov_10c74op6cl.s[239]++;
  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var _this11 = this;

    cov_10c74op6cl.f[43]++;
    var target;
    var selector = (cov_10c74op6cl.s[240]++, Util.getSelectorFromElement(this));
    cov_10c74op6cl.s[241]++;

    if (selector) {
      cov_10c74op6cl.b[61][0]++;
      cov_10c74op6cl.s[242]++;
      target = document.querySelector(selector);
    } else {
      cov_10c74op6cl.b[61][1]++;
    }

    var config = (cov_10c74op6cl.s[243]++, $(target).data(DATA_KEY) ? (cov_10c74op6cl.b[62][0]++, 'toggle') : (cov_10c74op6cl.b[62][1]++, _objectSpread2(_objectSpread2({}, $(target).data()), $(this).data())));
    cov_10c74op6cl.s[244]++;

    if ((cov_10c74op6cl.b[64][0]++, this.tagName === 'A') || (cov_10c74op6cl.b[64][1]++, this.tagName === 'AREA')) {
      cov_10c74op6cl.b[63][0]++;
      cov_10c74op6cl.s[245]++;
      event.preventDefault();
    } else {
      cov_10c74op6cl.b[63][1]++;
    }

    var $target = (cov_10c74op6cl.s[246]++, $(target).one(Event.SHOW, function (showEvent) {
      cov_10c74op6cl.f[44]++;
      cov_10c74op6cl.s[247]++;

      if (showEvent.isDefaultPrevented()) {
        cov_10c74op6cl.b[65][0]++;
        cov_10c74op6cl.s[248]++;
        // Only register focus restorer if modal will actually get shown
        return;
      } else {
        cov_10c74op6cl.b[65][1]++;
      }

      cov_10c74op6cl.s[249]++;
      $target.one(Event.HIDDEN, function () {
        cov_10c74op6cl.f[45]++;
        cov_10c74op6cl.s[250]++;

        if ($(_this11).is(':visible')) {
          cov_10c74op6cl.b[66][0]++;
          cov_10c74op6cl.s[251]++;

          _this11.focus();
        } else {
          cov_10c74op6cl.b[66][1]++;
        }
      });
    }));
    cov_10c74op6cl.s[252]++;

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  cov_10c74op6cl.s[253]++;
  $.fn[NAME] = Modal._jQueryInterface;
  cov_10c74op6cl.s[254]++;
  $.fn[NAME].Constructor = Modal;
  cov_10c74op6cl.s[255]++;

  $.fn[NAME].noConflict = function () {
    cov_10c74op6cl.f[46]++;
    cov_10c74op6cl.s[256]++;
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    cov_10c74op6cl.s[257]++;
    return Modal._jQueryInterface;
  };

  return Modal;

})));
//# sourceMappingURL=modal.js.map

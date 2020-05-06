/*!
  * Bootstrap carousel.js v4.4.1-1 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2020 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global = global || self, global.Carousel = factory(global.jQuery, global.Util));
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

  var cov_1qrssl00mz = function () {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/carousel.js";
    var hash = "70ac15b3255bd2c7fe7a90308000ad0037559989";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/carousel.js",
      statementMap: {
        "0": {
          start: {
            line: 17,
            column: 31
          },
          end: {
            line: 17,
            column: 41
          }
        },
        "1": {
          start: {
            line: 18,
            column: 31
          },
          end: {
            line: 18,
            column: 38
          }
        },
        "2": {
          start: {
            line: 19,
            column: 31
          },
          end: {
            line: 19,
            column: 44
          }
        },
        "3": {
          start: {
            line: 20,
            column: 31
          },
          end: {
            line: 20,
            column: 45
          }
        },
        "4": {
          start: {
            line: 21,
            column: 31
          },
          end: {
            line: 21,
            column: 42
          }
        },
        "5": {
          start: {
            line: 22,
            column: 31
          },
          end: {
            line: 22,
            column: 41
          }
        },
        "6": {
          start: {
            line: 23,
            column: 31
          },
          end: {
            line: 23,
            column: 33
          }
        },
        "7": {
          start: {
            line: 24,
            column: 31
          },
          end: {
            line: 24,
            column: 33
          }
        },
        "8": {
          start: {
            line: 25,
            column: 31
          },
          end: {
            line: 25,
            column: 34
          }
        },
        "9": {
          start: {
            line: 26,
            column: 31
          },
          end: {
            line: 26,
            column: 33
          }
        },
        "10": {
          start: {
            line: 28,
            column: 16
          },
          end: {
            line: 35,
            column: 1
          }
        },
        "11": {
          start: {
            line: 37,
            column: 20
          },
          end: {
            line: 44,
            column: 1
          }
        },
        "12": {
          start: {
            line: 46,
            column: 18
          },
          end: {
            line: 51,
            column: 1
          }
        },
        "13": {
          start: {
            line: 53,
            column: 14
          },
          end: {
            line: 67,
            column: 1
          }
        },
        "14": {
          start: {
            line: 69,
            column: 18
          },
          end: {
            line: 79,
            column: 1
          }
        },
        "15": {
          start: {
            line: 81,
            column: 17
          },
          end: {
            line: 90,
            column: 1
          }
        },
        "16": {
          start: {
            line: 92,
            column: 20
          },
          end: {
            line: 95,
            column: 1
          }
        },
        "17": {
          start: {
            line: 104,
            column: 4
          },
          end: {
            line: 104,
            column: 30
          }
        },
        "18": {
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 105,
            column: 30
          }
        },
        "19": {
          start: {
            line: 106,
            column: 4
          },
          end: {
            line: 106,
            column: 30
          }
        },
        "20": {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 107,
            column: 31
          }
        },
        "21": {
          start: {
            line: 108,
            column: 4
          },
          end: {
            line: 108,
            column: 31
          }
        },
        "22": {
          start: {
            line: 109,
            column: 4
          },
          end: {
            line: 109,
            column: 30
          }
        },
        "23": {
          start: {
            line: 110,
            column: 4
          },
          end: {
            line: 110,
            column: 27
          }
        },
        "24": {
          start: {
            line: 111,
            column: 4
          },
          end: {
            line: 111,
            column: 27
          }
        },
        "25": {
          start: {
            line: 113,
            column: 4
          },
          end: {
            line: 113,
            column: 53
          }
        },
        "26": {
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 114,
            column: 37
          }
        },
        "27": {
          start: {
            line: 115,
            column: 4
          },
          end: {
            line: 115,
            column: 78
          }
        },
        "28": {
          start: {
            line: 116,
            column: 4
          },
          end: {
            line: 116,
            column: 104
          }
        },
        "29": {
          start: {
            line: 117,
            column: 4
          },
          end: {
            line: 117,
            column: 83
          }
        },
        "30": {
          start: {
            line: 119,
            column: 4
          },
          end: {
            line: 119,
            column: 29
          }
        },
        "31": {
          start: {
            line: 125,
            column: 4
          },
          end: {
            line: 125,
            column: 18
          }
        },
        "32": {
          start: {
            line: 129,
            column: 4
          },
          end: {
            line: 129,
            column: 18
          }
        },
        "33": {
          start: {
            line: 135,
            column: 4
          },
          end: {
            line: 137,
            column: 5
          }
        },
        "34": {
          start: {
            line: 136,
            column: 6
          },
          end: {
            line: 136,
            column: 33
          }
        },
        "35": {
          start: {
            line: 143,
            column: 4
          },
          end: {
            line: 146,
            column: 5
          }
        },
        "36": {
          start: {
            line: 145,
            column: 6
          },
          end: {
            line: 145,
            column: 17
          }
        },
        "37": {
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 152,
            column: 5
          }
        },
        "38": {
          start: {
            line: 151,
            column: 6
          },
          end: {
            line: 151,
            column: 33
          }
        },
        "39": {
          start: {
            line: 156,
            column: 4
          },
          end: {
            line: 158,
            column: 5
          }
        },
        "40": {
          start: {
            line: 157,
            column: 6
          },
          end: {
            line: 157,
            column: 27
          }
        },
        "41": {
          start: {
            line: 160,
            column: 4
          },
          end: {
            line: 163,
            column: 5
          }
        },
        "42": {
          start: {
            line: 161,
            column: 6
          },
          end: {
            line: 161,
            column: 46
          }
        },
        "43": {
          start: {
            line: 162,
            column: 6
          },
          end: {
            line: 162,
            column: 22
          }
        },
        "44": {
          start: {
            line: 165,
            column: 4
          },
          end: {
            line: 165,
            column: 33
          }
        },
        "45": {
          start: {
            line: 166,
            column: 4
          },
          end: {
            line: 166,
            column: 25
          }
        },
        "46": {
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 172,
            column: 5
          }
        },
        "47": {
          start: {
            line: 171,
            column: 6
          },
          end: {
            line: 171,
            column: 28
          }
        },
        "48": {
          start: {
            line: 174,
            column: 4
          },
          end: {
            line: 177,
            column: 5
          }
        },
        "49": {
          start: {
            line: 175,
            column: 6
          },
          end: {
            line: 175,
            column: 35
          }
        },
        "50": {
          start: {
            line: 176,
            column: 6
          },
          end: {
            line: 176,
            column: 27
          }
        },
        "51": {
          start: {
            line: 179,
            column: 4
          },
          end: {
            line: 184,
            column: 5
          }
        },
        "52": {
          start: {
            line: 180,
            column: 6
          },
          end: {
            line: 183,
            column: 7
          }
        },
        "53": {
          start: {
            line: 188,
            column: 4
          },
          end: {
            line: 188,
            column: 75
          }
        },
        "54": {
          start: {
            line: 190,
            column: 24
          },
          end: {
            line: 190,
            column: 63
          }
        },
        "55": {
          start: {
            line: 192,
            column: 4
          },
          end: {
            line: 194,
            column: 5
          }
        },
        "56": {
          start: {
            line: 193,
            column: 6
          },
          end: {
            line: 193,
            column: 12
          }
        },
        "57": {
          start: {
            line: 196,
            column: 4
          },
          end: {
            line: 199,
            column: 5
          }
        },
        "58": {
          start: {
            line: 197,
            column: 6
          },
          end: {
            line: 197,
            column: 60
          }
        },
        "59": {
          start: {
            line: 197,
            column: 45
          },
          end: {
            line: 197,
            column: 59
          }
        },
        "60": {
          start: {
            line: 198,
            column: 6
          },
          end: {
            line: 198,
            column: 12
          }
        },
        "61": {
          start: {
            line: 201,
            column: 4
          },
          end: {
            line: 205,
            column: 5
          }
        },
        "62": {
          start: {
            line: 202,
            column: 6
          },
          end: {
            line: 202,
            column: 18
          }
        },
        "63": {
          start: {
            line: 203,
            column: 6
          },
          end: {
            line: 203,
            column: 18
          }
        },
        "64": {
          start: {
            line: 204,
            column: 6
          },
          end: {
            line: 204,
            column: 12
          }
        },
        "65": {
          start: {
            line: 207,
            column: 22
          },
          end: {
            line: 209,
            column: 22
          }
        },
        "66": {
          start: {
            line: 211,
            column: 4
          },
          end: {
            line: 211,
            column: 46
          }
        },
        "67": {
          start: {
            line: 215,
            column: 4
          },
          end: {
            line: 215,
            column: 35
          }
        },
        "68": {
          start: {
            line: 216,
            column: 4
          },
          end: {
            line: 216,
            column: 41
          }
        },
        "69": {
          start: {
            line: 218,
            column: 4
          },
          end: {
            line: 218,
            column: 34
          }
        },
        "70": {
          start: {
            line: 219,
            column: 4
          },
          end: {
            line: 219,
            column: 34
          }
        },
        "71": {
          start: {
            line: 220,
            column: 4
          },
          end: {
            line: 220,
            column: 34
          }
        },
        "72": {
          start: {
            line: 221,
            column: 4
          },
          end: {
            line: 221,
            column: 34
          }
        },
        "73": {
          start: {
            line: 222,
            column: 4
          },
          end: {
            line: 222,
            column: 34
          }
        },
        "74": {
          start: {
            line: 223,
            column: 4
          },
          end: {
            line: 223,
            column: 34
          }
        },
        "75": {
          start: {
            line: 224,
            column: 4
          },
          end: {
            line: 224,
            column: 34
          }
        },
        "76": {
          start: {
            line: 225,
            column: 4
          },
          end: {
            line: 225,
            column: 34
          }
        },
        "77": {
          start: {
            line: 231,
            column: 4
          },
          end: {
            line: 234,
            column: 5
          }
        },
        "78": {
          start: {
            line: 235,
            column: 4
          },
          end: {
            line: 235,
            column: 51
          }
        },
        "79": {
          start: {
            line: 236,
            column: 4
          },
          end: {
            line: 236,
            column: 17
          }
        },
        "80": {
          start: {
            line: 240,
            column: 22
          },
          end: {
            line: 240,
            column: 48
          }
        },
        "81": {
          start: {
            line: 242,
            column: 4
          },
          end: {
            line: 244,
            column: 5
          }
        },
        "82": {
          start: {
            line: 243,
            column: 6
          },
          end: {
            line: 243,
            column: 12
          }
        },
        "83": {
          start: {
            line: 246,
            column: 22
          },
          end: {
            line: 246,
            column: 50
          }
        },
        "84": {
          start: {
            line: 248,
            column: 4
          },
          end: {
            line: 248,
            column: 24
          }
        },
        "85": {
          start: {
            line: 251,
            column: 4
          },
          end: {
            line: 253,
            column: 5
          }
        },
        "86": {
          start: {
            line: 252,
            column: 6
          },
          end: {
            line: 252,
            column: 17
          }
        },
        "87": {
          start: {
            line: 256,
            column: 4
          },
          end: {
            line: 258,
            column: 5
          }
        },
        "88": {
          start: {
            line: 257,
            column: 6
          },
          end: {
            line: 257,
            column: 17
          }
        },
        "89": {
          start: {
            line: 262,
            column: 4
          },
          end: {
            line: 265,
            column: 5
          }
        },
        "90": {
          start: {
            line: 263,
            column: 6
          },
          end: {
            line: 264,
            column: 59
          }
        },
        "91": {
          start: {
            line: 264,
            column: 38
          },
          end: {
            line: 264,
            column: 58
          }
        },
        "92": {
          start: {
            line: 267,
            column: 4
          },
          end: {
            line: 271,
            column: 5
          }
        },
        "93": {
          start: {
            line: 268,
            column: 6
          },
          end: {
            line: 270,
            column: 59
          }
        },
        "94": {
          start: {
            line: 269,
            column: 41
          },
          end: {
            line: 269,
            column: 58
          }
        },
        "95": {
          start: {
            line: 270,
            column: 41
          },
          end: {
            line: 270,
            column: 58
          }
        },
        "96": {
          start: {
            line: 273,
            column: 4
          },
          end: {
            line: 275,
            column: 5
          }
        },
        "97": {
          start: {
            line: 274,
            column: 6
          },
          end: {
            line: 274,
            column: 36
          }
        },
        "98": {
          start: {
            line: 279,
            column: 4
          },
          end: {
            line: 281,
            column: 5
          }
        },
        "99": {
          start: {
            line: 280,
            column: 6
          },
          end: {
            line: 280,
            column: 12
          }
        },
        "100": {
          start: {
            line: 283,
            column: 18
          },
          end: {
            line: 289,
            column: 5
          }
        },
        "101": {
          start: {
            line: 284,
            column: 6
          },
          end: {
            line: 288,
            column: 7
          }
        },
        "102": {
          start: {
            line: 285,
            column: 8
          },
          end: {
            line: 285,
            column: 54
          }
        },
        "103": {
          start: {
            line: 286,
            column: 13
          },
          end: {
            line: 288,
            column: 7
          }
        },
        "104": {
          start: {
            line: 287,
            column: 8
          },
          end: {
            line: 287,
            column: 65
          }
        },
        "105": {
          start: {
            line: 291,
            column: 17
          },
          end: {
            line: 298,
            column: 5
          }
        },
        "106": {
          start: {
            line: 293,
            column: 6
          },
          end: {
            line: 297,
            column: 7
          }
        },
        "107": {
          start: {
            line: 294,
            column: 8
          },
          end: {
            line: 294,
            column: 28
          }
        },
        "108": {
          start: {
            line: 296,
            column: 8
          },
          end: {
            line: 296,
            column: 84
          }
        },
        "109": {
          start: {
            line: 300,
            column: 16
          },
          end: {
            line: 321,
            column: 5
          }
        },
        "110": {
          start: {
            line: 301,
            column: 6
          },
          end: {
            line: 303,
            column: 7
          }
        },
        "111": {
          start: {
            line: 302,
            column: 8
          },
          end: {
            line: 302,
            column: 73
          }
        },
        "112": {
          start: {
            line: 305,
            column: 6
          },
          end: {
            line: 305,
            column: 25
          }
        },
        "113": {
          start: {
            line: 306,
            column: 6
          },
          end: {
            line: 320,
            column: 7
          }
        },
        "114": {
          start: {
            line: 315,
            column: 8
          },
          end: {
            line: 315,
            column: 20
          }
        },
        "115": {
          start: {
            line: 316,
            column: 8
          },
          end: {
            line: 318,
            column: 9
          }
        },
        "116": {
          start: {
            line: 317,
            column: 10
          },
          end: {
            line: 317,
            column: 41
          }
        },
        "117": {
          start: {
            line: 319,
            column: 8
          },
          end: {
            line: 319,
            column: 116
          }
        },
        "118": {
          start: {
            line: 319,
            column: 50
          },
          end: {
            line: 319,
            column: 67
          }
        },
        "119": {
          start: {
            line: 323,
            column: 4
          },
          end: {
            line: 323,
            column: 104
          }
        },
        "120": {
          start: {
            line: 323,
            column: 85
          },
          end: {
            line: 323,
            column: 103
          }
        },
        "121": {
          start: {
            line: 324,
            column: 4
          },
          end: {
            line: 333,
            column: 5
          }
        },
        "122": {
          start: {
            line: 325,
            column: 6
          },
          end: {
            line: 325,
            column: 69
          }
        },
        "123": {
          start: {
            line: 325,
            column: 56
          },
          end: {
            line: 325,
            column: 68
          }
        },
        "124": {
          start: {
            line: 326,
            column: 6
          },
          end: {
            line: 326,
            column: 65
          }
        },
        "125": {
          start: {
            line: 326,
            column: 54
          },
          end: {
            line: 326,
            column: 64
          }
        },
        "126": {
          start: {
            line: 328,
            column: 6
          },
          end: {
            line: 328,
            column: 58
          }
        },
        "127": {
          start: {
            line: 330,
            column: 6
          },
          end: {
            line: 330,
            column: 68
          }
        },
        "128": {
          start: {
            line: 330,
            column: 55
          },
          end: {
            line: 330,
            column: 67
          }
        },
        "129": {
          start: {
            line: 331,
            column: 6
          },
          end: {
            line: 331,
            column: 66
          }
        },
        "130": {
          start: {
            line: 331,
            column: 54
          },
          end: {
            line: 331,
            column: 65
          }
        },
        "131": {
          start: {
            line: 332,
            column: 6
          },
          end: {
            line: 332,
            column: 64
          }
        },
        "132": {
          start: {
            line: 332,
            column: 53
          },
          end: {
            line: 332,
            column: 63
          }
        },
        "133": {
          start: {
            line: 337,
            column: 4
          },
          end: {
            line: 339,
            column: 5
          }
        },
        "134": {
          start: {
            line: 338,
            column: 6
          },
          end: {
            line: 338,
            column: 12
          }
        },
        "135": {
          start: {
            line: 341,
            column: 4
          },
          end: {
            line: 351,
            column: 5
          }
        },
        "136": {
          start: {
            line: 343,
            column: 8
          },
          end: {
            line: 343,
            column: 30
          }
        },
        "137": {
          start: {
            line: 344,
            column: 8
          },
          end: {
            line: 344,
            column: 19
          }
        },
        "138": {
          start: {
            line: 345,
            column: 8
          },
          end: {
            line: 345,
            column: 13
          }
        },
        "139": {
          start: {
            line: 347,
            column: 8
          },
          end: {
            line: 347,
            column: 30
          }
        },
        "140": {
          start: {
            line: 348,
            column: 8
          },
          end: {
            line: 348,
            column: 19
          }
        },
        "141": {
          start: {
            line: 349,
            column: 8
          },
          end: {
            line: 349,
            column: 13
          }
        },
        "142": {
          start: {
            line: 355,
            column: 4
          },
          end: {
            line: 357,
            column: 10
          }
        },
        "143": {
          start: {
            line: 358,
            column: 4
          },
          end: {
            line: 358,
            column: 39
          }
        },
        "144": {
          start: {
            line: 362,
            column: 28
          },
          end: {
            line: 362,
            column: 56
          }
        },
        "145": {
          start: {
            line: 363,
            column: 28
          },
          end: {
            line: 363,
            column: 56
          }
        },
        "146": {
          start: {
            line: 364,
            column: 28
          },
          end: {
            line: 364,
            column: 61
          }
        },
        "147": {
          start: {
            line: 365,
            column: 28
          },
          end: {
            line: 365,
            column: 50
          }
        },
        "148": {
          start: {
            line: 366,
            column: 28
          },
          end: {
            line: 367,
            column: 76
          }
        },
        "149": {
          start: {
            line: 369,
            column: 4
          },
          end: {
            line: 371,
            column: 5
          }
        },
        "150": {
          start: {
            line: 370,
            column: 6
          },
          end: {
            line: 370,
            column: 26
          }
        },
        "151": {
          start: {
            line: 373,
            column: 22
          },
          end: {
            line: 373,
            column: 59
          }
        },
        "152": {
          start: {
            line: 374,
            column: 22
          },
          end: {
            line: 374,
            column: 64
          }
        },
        "153": {
          start: {
            line: 376,
            column: 4
          },
          end: {
            line: 377,
            column: 68
          }
        },
        "154": {
          start: {
            line: 381,
            column: 24
          },
          end: {
            line: 381,
            column: 57
          }
        },
        "155": {
          start: {
            line: 382,
            column: 22
          },
          end: {
            line: 382,
            column: 91
          }
        },
        "156": {
          start: {
            line: 383,
            column: 23
          },
          end: {
            line: 388,
            column: 6
          }
        },
        "157": {
          start: {
            line: 390,
            column: 4
          },
          end: {
            line: 390,
            column: 40
          }
        },
        "158": {
          start: {
            line: 392,
            column: 4
          },
          end: {
            line: 392,
            column: 21
          }
        },
        "159": {
          start: {
            line: 396,
            column: 4
          },
          end: {
            line: 408,
            column: 5
          }
        },
        "160": {
          start: {
            line: 397,
            column: 25
          },
          end: {
            line: 397,
            column: 97
          }
        },
        "161": {
          start: {
            line: 398,
            column: 6
          },
          end: {
            line: 399,
            column: 38
          }
        },
        "162": {
          start: {
            line: 401,
            column: 28
          },
          end: {
            line: 403,
            column: 7
          }
        },
        "163": {
          start: {
            line: 405,
            column: 6
          },
          end: {
            line: 407,
            column: 7
          }
        },
        "164": {
          start: {
            line: 406,
            column: 8
          },
          end: {
            line: 406,
            column: 51
          }
        },
        "165": {
          start: {
            line: 412,
            column: 26
          },
          end: {
            line: 412,
            column: 75
          }
        },
        "166": {
          start: {
            line: 413,
            column: 31
          },
          end: {
            line: 413,
            column: 64
          }
        },
        "167": {
          start: {
            line: 414,
            column: 26
          },
          end: {
            line: 415,
            column: 56
          }
        },
        "168": {
          start: {
            line: 416,
            column: 29
          },
          end: {
            line: 416,
            column: 60
          }
        },
        "169": {
          start: {
            line: 417,
            column: 22
          },
          end: {
            line: 417,
            column: 45
          }
        },
        "170": {
          start: {
            line: 423,
            column: 4
          },
          end: {
            line: 431,
            column: 5
          }
        },
        "171": {
          start: {
            line: 424,
            column: 6
          },
          end: {
            line: 424,
            column: 43
          }
        },
        "172": {
          start: {
            line: 425,
            column: 6
          },
          end: {
            line: 425,
            column: 37
          }
        },
        "173": {
          start: {
            line: 426,
            column: 6
          },
          end: {
            line: 426,
            column: 41
          }
        },
        "174": {
          start: {
            line: 428,
            column: 6
          },
          end: {
            line: 428,
            column: 44
          }
        },
        "175": {
          start: {
            line: 429,
            column: 6
          },
          end: {
            line: 429,
            column: 37
          }
        },
        "176": {
          start: {
            line: 430,
            column: 6
          },
          end: {
            line: 430,
            column: 42
          }
        },
        "177": {
          start: {
            line: 433,
            column: 4
          },
          end: {
            line: 436,
            column: 5
          }
        },
        "178": {
          start: {
            line: 434,
            column: 6
          },
          end: {
            line: 434,
            column: 29
          }
        },
        "179": {
          start: {
            line: 435,
            column: 6
          },
          end: {
            line: 435,
            column: 12
          }
        },
        "180": {
          start: {
            line: 438,
            column: 23
          },
          end: {
            line: 438,
            column: 79
          }
        },
        "181": {
          start: {
            line: 439,
            column: 4
          },
          end: {
            line: 441,
            column: 5
          }
        },
        "182": {
          start: {
            line: 440,
            column: 6
          },
          end: {
            line: 440,
            column: 12
          }
        },
        "183": {
          start: {
            line: 443,
            column: 4
          },
          end: {
            line: 446,
            column: 5
          }
        },
        "184": {
          start: {
            line: 445,
            column: 6
          },
          end: {
            line: 445,
            column: 12
          }
        },
        "185": {
          start: {
            line: 448,
            column: 4
          },
          end: {
            line: 448,
            column: 26
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
            column: 18
          }
        },
        "188": {
          start: {
            line: 454,
            column: 4
          },
          end: {
            line: 454,
            column: 48
          }
        },
        "189": {
          start: {
            line: 456,
            column: 22
          },
          end: {
            line: 461,
            column: 6
          }
        },
        "190": {
          start: {
            line: 463,
            column: 4
          },
          end: {
            line: 500,
            column: 5
          }
        },
        "191": {
          start: {
            line: 464,
            column: 6
          },
          end: {
            line: 464,
            column: 45
          }
        },
        "192": {
          start: {
            line: 466,
            column: 6
          },
          end: {
            line: 466,
            column: 30
          }
        },
        "193": {
          start: {
            line: 468,
            column: 6
          },
          end: {
            line: 468,
            column: 53
          }
        },
        "194": {
          start: {
            line: 469,
            column: 6
          },
          end: {
            line: 469,
            column: 51
          }
        },
        "195": {
          start: {
            line: 471,
            column: 34
          },
          end: {
            line: 471,
            column: 89
          }
        },
        "196": {
          start: {
            line: 472,
            column: 6
          },
          end: {
            line: 477,
            column: 7
          }
        },
        "197": {
          start: {
            line: 473,
            column: 8
          },
          end: {
            line: 473,
            column: 92
          }
        },
        "198": {
          start: {
            line: 474,
            column: 8
          },
          end: {
            line: 474,
            column: 51
          }
        },
        "199": {
          start: {
            line: 476,
            column: 8
          },
          end: {
            line: 476,
            column: 85
          }
        },
        "200": {
          start: {
            line: 479,
            column: 33
          },
          end: {
            line: 479,
            column: 85
          }
        },
        "201": {
          start: {
            line: 481,
            column: 6
          },
          end: {
            line: 493,
            column: 49
          }
        },
        "202": {
          start: {
            line: 483,
            column: 10
          },
          end: {
            line: 485,
            column: 39
          }
        },
        "203": {
          start: {
            line: 487,
            column: 10
          },
          end: {
            line: 487,
            column: 103
          }
        },
        "204": {
          start: {
            line: 489,
            column: 10
          },
          end: {
            line: 489,
            column: 33
          }
        },
        "205": {
          start: {
            line: 491,
            column: 10
          },
          end: {
            line: 491,
            column: 66
          }
        },
        "206": {
          start: {
            line: 491,
            column: 27
          },
          end: {
            line: 491,
            column: 62
          }
        },
        "207": {
          start: {
            line: 495,
            column: 6
          },
          end: {
            line: 495,
            column: 52
          }
        },
        "208": {
          start: {
            line: 496,
            column: 6
          },
          end: {
            line: 496,
            column: 47
          }
        },
        "209": {
          start: {
            line: 498,
            column: 6
          },
          end: {
            line: 498,
            column: 29
          }
        },
        "210": {
          start: {
            line: 499,
            column: 6
          },
          end: {
            line: 499,
            column: 41
          }
        },
        "211": {
          start: {
            line: 502,
            column: 4
          },
          end: {
            line: 504,
            column: 5
          }
        },
        "212": {
          start: {
            line: 503,
            column: 6
          },
          end: {
            line: 503,
            column: 18
          }
        },
        "213": {
          start: {
            line: 510,
            column: 4
          },
          end: {
            line: 542,
            column: 6
          }
        },
        "214": {
          start: {
            line: 511,
            column: 17
          },
          end: {
            line: 511,
            column: 39
          }
        },
        "215": {
          start: {
            line: 512,
            column: 20
          },
          end: {
            line: 515,
            column: 7
          }
        },
        "216": {
          start: {
            line: 517,
            column: 6
          },
          end: {
            line: 522,
            column: 7
          }
        },
        "217": {
          start: {
            line: 518,
            column: 8
          },
          end: {
            line: 521,
            column: 9
          }
        },
        "218": {
          start: {
            line: 524,
            column: 21
          },
          end: {
            line: 524,
            column: 72
          }
        },
        "219": {
          start: {
            line: 526,
            column: 6
          },
          end: {
            line: 529,
            column: 7
          }
        },
        "220": {
          start: {
            line: 527,
            column: 8
          },
          end: {
            line: 527,
            column: 42
          }
        },
        "221": {
          start: {
            line: 528,
            column: 8
          },
          end: {
            line: 528,
            column: 36
          }
        },
        "222": {
          start: {
            line: 531,
            column: 6
          },
          end: {
            line: 541,
            column: 7
          }
        },
        "223": {
          start: {
            line: 532,
            column: 8
          },
          end: {
            line: 532,
            column: 23
          }
        },
        "224": {
          start: {
            line: 533,
            column: 13
          },
          end: {
            line: 541,
            column: 7
          }
        },
        "225": {
          start: {
            line: 534,
            column: 8
          },
          end: {
            line: 536,
            column: 9
          }
        },
        "226": {
          start: {
            line: 535,
            column: 10
          },
          end: {
            line: 535,
            column: 60
          }
        },
        "227": {
          start: {
            line: 537,
            column: 8
          },
          end: {
            line: 537,
            column: 22
          }
        },
        "228": {
          start: {
            line: 538,
            column: 13
          },
          end: {
            line: 541,
            column: 7
          }
        },
        "229": {
          start: {
            line: 539,
            column: 8
          },
          end: {
            line: 539,
            column: 20
          }
        },
        "230": {
          start: {
            line: 540,
            column: 8
          },
          end: {
            line: 540,
            column: 20
          }
        },
        "231": {
          start: {
            line: 546,
            column: 21
          },
          end: {
            line: 546,
            column: 54
          }
        },
        "232": {
          start: {
            line: 548,
            column: 4
          },
          end: {
            line: 550,
            column: 5
          }
        },
        "233": {
          start: {
            line: 549,
            column: 6
          },
          end: {
            line: 549,
            column: 12
          }
        },
        "234": {
          start: {
            line: 552,
            column: 19
          },
          end: {
            line: 552,
            column: 33
          }
        },
        "235": {
          start: {
            line: 554,
            column: 4
          },
          end: {
            line: 556,
            column: 5
          }
        },
        "236": {
          start: {
            line: 555,
            column: 6
          },
          end: {
            line: 555,
            column: 12
          }
        },
        "237": {
          start: {
            line: 558,
            column: 19
          },
          end: {
            line: 561,
            column: 5
          }
        },
        "238": {
          start: {
            line: 562,
            column: 23
          },
          end: {
            line: 562,
            column: 57
          }
        },
        "239": {
          start: {
            line: 564,
            column: 4
          },
          end: {
            line: 566,
            column: 5
          }
        },
        "240": {
          start: {
            line: 565,
            column: 6
          },
          end: {
            line: 565,
            column: 29
          }
        },
        "241": {
          start: {
            line: 568,
            column: 4
          },
          end: {
            line: 568,
            column: 53
          }
        },
        "242": {
          start: {
            line: 570,
            column: 4
          },
          end: {
            line: 572,
            column: 5
          }
        },
        "243": {
          start: {
            line: 571,
            column: 6
          },
          end: {
            line: 571,
            column: 45
          }
        },
        "244": {
          start: {
            line: 574,
            column: 4
          },
          end: {
            line: 574,
            column: 26
          }
        },
        "245": {
          start: {
            line: 584,
            column: 0
          },
          end: {
            line: 585,
            column: 79
          }
        },
        "246": {
          start: {
            line: 587,
            column: 0
          },
          end: {
            line: 593,
            column: 2
          }
        },
        "247": {
          start: {
            line: 588,
            column: 20
          },
          end: {
            line: 588,
            column: 80
          }
        },
        "248": {
          start: {
            line: 589,
            column: 2
          },
          end: {
            line: 592,
            column: 3
          }
        },
        "249": {
          start: {
            line: 589,
            column: 15
          },
          end: {
            line: 589,
            column: 16
          }
        },
        "250": {
          start: {
            line: 589,
            column: 24
          },
          end: {
            line: 589,
            column: 40
          }
        },
        "251": {
          start: {
            line: 590,
            column: 22
          },
          end: {
            line: 590,
            column: 37
          }
        },
        "252": {
          start: {
            line: 591,
            column: 4
          },
          end: {
            line: 591,
            column: 63
          }
        },
        "253": {
          start: {
            line: 601,
            column: 0
          },
          end: {
            line: 601,
            column: 38
          }
        },
        "254": {
          start: {
            line: 602,
            column: 0
          },
          end: {
            line: 602,
            column: 33
          }
        },
        "255": {
          start: {
            line: 603,
            column: 0
          },
          end: {
            line: 606,
            column: 1
          }
        },
        "256": {
          start: {
            line: 604,
            column: 2
          },
          end: {
            line: 604,
            column: 33
          }
        },
        "257": {
          start: {
            line: 605,
            column: 2
          },
          end: {
            line: 605,
            column: 34
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 103,
              column: 2
            },
            end: {
              line: 103,
              column: 3
            }
          },
          loc: {
            start: {
              line: 103,
              column: 31
            },
            end: {
              line: 120,
              column: 3
            }
          },
          line: 103
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 124,
              column: 2
            },
            end: {
              line: 124,
              column: 3
            }
          },
          loc: {
            start: {
              line: 124,
              column: 23
            },
            end: {
              line: 126,
              column: 3
            }
          },
          line: 124
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 128,
              column: 2
            },
            end: {
              line: 128,
              column: 3
            }
          },
          loc: {
            start: {
              line: 128,
              column: 23
            },
            end: {
              line: 130,
              column: 3
            }
          },
          line: 128
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 134,
              column: 2
            },
            end: {
              line: 134,
              column: 3
            }
          },
          loc: {
            start: {
              line: 134,
              column: 9
            },
            end: {
              line: 138,
              column: 3
            }
          },
          line: 134
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 140,
              column: 2
            },
            end: {
              line: 140,
              column: 3
            }
          },
          loc: {
            start: {
              line: 140,
              column: 20
            },
            end: {
              line: 147,
              column: 3
            }
          },
          line: 140
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 149,
              column: 2
            },
            end: {
              line: 149,
              column: 3
            }
          },
          loc: {
            start: {
              line: 149,
              column: 9
            },
            end: {
              line: 153,
              column: 3
            }
          },
          line: 149
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 155,
              column: 2
            },
            end: {
              line: 155,
              column: 3
            }
          },
          loc: {
            start: {
              line: 155,
              column: 15
            },
            end: {
              line: 167,
              column: 3
            }
          },
          line: 155
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 169,
              column: 2
            },
            end: {
              line: 169,
              column: 3
            }
          },
          loc: {
            start: {
              line: 169,
              column: 15
            },
            end: {
              line: 185,
              column: 3
            }
          },
          line: 169
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 187,
              column: 2
            },
            end: {
              line: 187,
              column: 3
            }
          },
          loc: {
            start: {
              line: 187,
              column: 12
            },
            end: {
              line: 212,
              column: 3
            }
          },
          line: 187
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 197,
              column: 39
            },
            end: {
              line: 197,
              column: 40
            }
          },
          loc: {
            start: {
              line: 197,
              column: 45
            },
            end: {
              line: 197,
              column: 59
            }
          },
          line: 197
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 214,
              column: 2
            },
            end: {
              line: 214,
              column: 3
            }
          },
          loc: {
            start: {
              line: 214,
              column: 12
            },
            end: {
              line: 226,
              column: 3
            }
          },
          line: 214
        },
        "11": {
          name: "(anonymous_11)",
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
        "12": {
          name: "(anonymous_12)",
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
              column: 17
            },
            end: {
              line: 259,
              column: 3
            }
          },
          line: 239
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 261,
              column: 2
            },
            end: {
              line: 261,
              column: 3
            }
          },
          loc: {
            start: {
              line: 261,
              column: 23
            },
            end: {
              line: 276,
              column: 3
            }
          },
          line: 261
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 264,
              column: 27
            },
            end: {
              line: 264,
              column: 28
            }
          },
          loc: {
            start: {
              line: 264,
              column: 38
            },
            end: {
              line: 264,
              column: 58
            }
          },
          line: 264
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 269,
              column: 30
            },
            end: {
              line: 269,
              column: 31
            }
          },
          loc: {
            start: {
              line: 269,
              column: 41
            },
            end: {
              line: 269,
              column: 58
            }
          },
          line: 269
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 270,
              column: 30
            },
            end: {
              line: 270,
              column: 31
            }
          },
          loc: {
            start: {
              line: 270,
              column: 41
            },
            end: {
              line: 270,
              column: 58
            }
          },
          line: 270
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 278,
              column: 2
            },
            end: {
              line: 278,
              column: 3
            }
          },
          loc: {
            start: {
              line: 278,
              column: 28
            },
            end: {
              line: 334,
              column: 3
            }
          },
          line: 278
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 283,
              column: 18
            },
            end: {
              line: 283,
              column: 19
            }
          },
          loc: {
            start: {
              line: 283,
              column: 29
            },
            end: {
              line: 289,
              column: 5
            }
          },
          line: 283
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 291,
              column: 17
            },
            end: {
              line: 291,
              column: 18
            }
          },
          loc: {
            start: {
              line: 291,
              column: 28
            },
            end: {
              line: 298,
              column: 5
            }
          },
          line: 291
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 300,
              column: 16
            },
            end: {
              line: 300,
              column: 17
            }
          },
          loc: {
            start: {
              line: 300,
              column: 27
            },
            end: {
              line: 321,
              column: 5
            }
          },
          line: 300
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 319,
              column: 39
            },
            end: {
              line: 319,
              column: 40
            }
          },
          loc: {
            start: {
              line: 319,
              column: 50
            },
            end: {
              line: 319,
              column: 67
            }
          },
          line: 319
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 323,
              column: 78
            },
            end: {
              line: 323,
              column: 79
            }
          },
          loc: {
            start: {
              line: 323,
              column: 85
            },
            end: {
              line: 323,
              column: 103
            }
          },
          line: 323
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 325,
              column: 45
            },
            end: {
              line: 325,
              column: 46
            }
          },
          loc: {
            start: {
              line: 325,
              column: 56
            },
            end: {
              line: 325,
              column: 68
            }
          },
          line: 325
        },
        "24": {
          name: "(anonymous_24)",
          decl: {
            start: {
              line: 326,
              column: 43
            },
            end: {
              line: 326,
              column: 44
            }
          },
          loc: {
            start: {
              line: 326,
              column: 54
            },
            end: {
              line: 326,
              column: 64
            }
          },
          line: 326
        },
        "25": {
          name: "(anonymous_25)",
          decl: {
            start: {
              line: 330,
              column: 44
            },
            end: {
              line: 330,
              column: 45
            }
          },
          loc: {
            start: {
              line: 330,
              column: 55
            },
            end: {
              line: 330,
              column: 67
            }
          },
          line: 330
        },
        "26": {
          name: "(anonymous_26)",
          decl: {
            start: {
              line: 331,
              column: 43
            },
            end: {
              line: 331,
              column: 44
            }
          },
          loc: {
            start: {
              line: 331,
              column: 54
            },
            end: {
              line: 331,
              column: 65
            }
          },
          line: 331
        },
        "27": {
          name: "(anonymous_27)",
          decl: {
            start: {
              line: 332,
              column: 42
            },
            end: {
              line: 332,
              column: 43
            }
          },
          loc: {
            start: {
              line: 332,
              column: 53
            },
            end: {
              line: 332,
              column: 63
            }
          },
          line: 332
        },
        "28": {
          name: "(anonymous_28)",
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
              column: 18
            },
            end: {
              line: 352,
              column: 3
            }
          },
          line: 336
        },
        "29": {
          name: "(anonymous_29)",
          decl: {
            start: {
              line: 354,
              column: 2
            },
            end: {
              line: 354,
              column: 3
            }
          },
          loc: {
            start: {
              line: 354,
              column: 25
            },
            end: {
              line: 359,
              column: 3
            }
          },
          line: 354
        },
        "30": {
          name: "(anonymous_30)",
          decl: {
            start: {
              line: 361,
              column: 2
            },
            end: {
              line: 361,
              column: 3
            }
          },
          loc: {
            start: {
              line: 361,
              column: 48
            },
            end: {
              line: 378,
              column: 3
            }
          },
          line: 361
        },
        "31": {
          name: "(anonymous_31)",
          decl: {
            start: {
              line: 380,
              column: 2
            },
            end: {
              line: 380,
              column: 3
            }
          },
          loc: {
            start: {
              line: 380,
              column: 56
            },
            end: {
              line: 393,
              column: 3
            }
          },
          line: 380
        },
        "32": {
          name: "(anonymous_32)",
          decl: {
            start: {
              line: 395,
              column: 2
            },
            end: {
              line: 395,
              column: 3
            }
          },
          loc: {
            start: {
              line: 395,
              column: 38
            },
            end: {
              line: 409,
              column: 3
            }
          },
          line: 395
        },
        "33": {
          name: "(anonymous_33)",
          decl: {
            start: {
              line: 411,
              column: 2
            },
            end: {
              line: 411,
              column: 3
            }
          },
          loc: {
            start: {
              line: 411,
              column: 29
            },
            end: {
              line: 505,
              column: 3
            }
          },
          line: 411
        },
        "34": {
          name: "(anonymous_34)",
          decl: {
            start: {
              line: 482,
              column: 34
            },
            end: {
              line: 482,
              column: 35
            }
          },
          loc: {
            start: {
              line: 482,
              column: 40
            },
            end: {
              line: 492,
              column: 9
            }
          },
          line: 482
        },
        "35": {
          name: "(anonymous_35)",
          decl: {
            start: {
              line: 491,
              column: 21
            },
            end: {
              line: 491,
              column: 22
            }
          },
          loc: {
            start: {
              line: 491,
              column: 27
            },
            end: {
              line: 491,
              column: 62
            }
          },
          line: 491
        },
        "36": {
          name: "(anonymous_36)",
          decl: {
            start: {
              line: 509,
              column: 2
            },
            end: {
              line: 509,
              column: 3
            }
          },
          loc: {
            start: {
              line: 509,
              column: 34
            },
            end: {
              line: 543,
              column: 3
            }
          },
          line: 509
        },
        "37": {
          name: "(anonymous_37)",
          decl: {
            start: {
              line: 510,
              column: 21
            },
            end: {
              line: 510,
              column: 22
            }
          },
          loc: {
            start: {
              line: 510,
              column: 33
            },
            end: {
              line: 542,
              column: 5
            }
          },
          line: 510
        },
        "38": {
          name: "(anonymous_38)",
          decl: {
            start: {
              line: 545,
              column: 2
            },
            end: {
              line: 545,
              column: 3
            }
          },
          loc: {
            start: {
              line: 545,
              column: 37
            },
            end: {
              line: 575,
              column: 3
            }
          },
          line: 545
        },
        "39": {
          name: "(anonymous_39)",
          decl: {
            start: {
              line: 587,
              column: 34
            },
            end: {
              line: 587,
              column: 35
            }
          },
          loc: {
            start: {
              line: 587,
              column: 40
            },
            end: {
              line: 593,
              column: 1
            }
          },
          line: 587
        },
        "40": {
          name: "(anonymous_40)",
          decl: {
            start: {
              line: 603,
              column: 24
            },
            end: {
              line: 603,
              column: 25
            }
          },
          loc: {
            start: {
              line: 603,
              column: 30
            },
            end: {
              line: 606,
              column: 1
            }
          },
          line: 603
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 116,
              column: 30
            },
            end: {
              line: 116,
              column: 104
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 116,
              column: 30
            },
            end: {
              line: 116,
              column: 72
            }
          }, {
            start: {
              line: 116,
              column: 76
            },
            end: {
              line: 116,
              column: 104
            }
          }],
          line: 116
        },
        "1": {
          loc: {
            start: {
              line: 117,
              column: 38
            },
            end: {
              line: 117,
              column: 82
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 117,
              column: 38
            },
            end: {
              line: 117,
              column: 57
            }
          }, {
            start: {
              line: 117,
              column: 61
            },
            end: {
              line: 117,
              column: 82
            }
          }],
          line: 117
        },
        "2": {
          loc: {
            start: {
              line: 135,
              column: 4
            },
            end: {
              line: 137,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 135,
              column: 4
            },
            end: {
              line: 137,
              column: 5
            }
          }, {
            start: {
              line: 135,
              column: 4
            },
            end: {
              line: 137,
              column: 5
            }
          }],
          line: 135
        },
        "3": {
          loc: {
            start: {
              line: 143,
              column: 4
            },
            end: {
              line: 146,
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
              line: 146,
              column: 5
            }
          }, {
            start: {
              line: 143,
              column: 4
            },
            end: {
              line: 146,
              column: 5
            }
          }],
          line: 143
        },
        "4": {
          loc: {
            start: {
              line: 143,
              column: 8
            },
            end: {
              line: 144,
              column: 90
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 143,
              column: 8
            },
            end: {
              line: 143,
              column: 24
            }
          }, {
            start: {
              line: 144,
              column: 7
            },
            end: {
              line: 144,
              column: 38
            }
          }, {
            start: {
              line: 144,
              column: 42
            },
            end: {
              line: 144,
              column: 89
            }
          }],
          line: 143
        },
        "5": {
          loc: {
            start: {
              line: 150,
              column: 4
            },
            end: {
              line: 152,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 150,
              column: 4
            },
            end: {
              line: 152,
              column: 5
            }
          }, {
            start: {
              line: 150,
              column: 4
            },
            end: {
              line: 152,
              column: 5
            }
          }],
          line: 150
        },
        "6": {
          loc: {
            start: {
              line: 156,
              column: 4
            },
            end: {
              line: 158,
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
              line: 158,
              column: 5
            }
          }, {
            start: {
              line: 156,
              column: 4
            },
            end: {
              line: 158,
              column: 5
            }
          }],
          line: 156
        },
        "7": {
          loc: {
            start: {
              line: 160,
              column: 4
            },
            end: {
              line: 163,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 160,
              column: 4
            },
            end: {
              line: 163,
              column: 5
            }
          }, {
            start: {
              line: 160,
              column: 4
            },
            end: {
              line: 163,
              column: 5
            }
          }],
          line: 160
        },
        "8": {
          loc: {
            start: {
              line: 170,
              column: 4
            },
            end: {
              line: 172,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 170,
              column: 4
            },
            end: {
              line: 172,
              column: 5
            }
          }, {
            start: {
              line: 170,
              column: 4
            },
            end: {
              line: 172,
              column: 5
            }
          }],
          line: 170
        },
        "9": {
          loc: {
            start: {
              line: 174,
              column: 4
            },
            end: {
              line: 177,
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
              line: 177,
              column: 5
            }
          }, {
            start: {
              line: 174,
              column: 4
            },
            end: {
              line: 177,
              column: 5
            }
          }],
          line: 174
        },
        "10": {
          loc: {
            start: {
              line: 179,
              column: 4
            },
            end: {
              line: 184,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 179,
              column: 4
            },
            end: {
              line: 184,
              column: 5
            }
          }, {
            start: {
              line: 179,
              column: 4
            },
            end: {
              line: 184,
              column: 5
            }
          }],
          line: 179
        },
        "11": {
          loc: {
            start: {
              line: 179,
              column: 8
            },
            end: {
              line: 179,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 179,
              column: 8
            },
            end: {
              line: 179,
              column: 29
            }
          }, {
            start: {
              line: 179,
              column: 33
            },
            end: {
              line: 179,
              column: 48
            }
          }],
          line: 179
        },
        "12": {
          loc: {
            start: {
              line: 181,
              column: 9
            },
            end: {
              line: 181,
              column: 68
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 181,
              column: 36
            },
            end: {
              line: 181,
              column: 56
            }
          }, {
            start: {
              line: 181,
              column: 59
            },
            end: {
              line: 181,
              column: 68
            }
          }],
          line: 181
        },
        "13": {
          loc: {
            start: {
              line: 192,
              column: 4
            },
            end: {
              line: 194,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 192,
              column: 4
            },
            end: {
              line: 194,
              column: 5
            }
          }, {
            start: {
              line: 192,
              column: 4
            },
            end: {
              line: 194,
              column: 5
            }
          }],
          line: 192
        },
        "14": {
          loc: {
            start: {
              line: 192,
              column: 8
            },
            end: {
              line: 192,
              column: 51
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 192,
              column: 8
            },
            end: {
              line: 192,
              column: 38
            }
          }, {
            start: {
              line: 192,
              column: 42
            },
            end: {
              line: 192,
              column: 51
            }
          }],
          line: 192
        },
        "15": {
          loc: {
            start: {
              line: 196,
              column: 4
            },
            end: {
              line: 199,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 196,
              column: 4
            },
            end: {
              line: 199,
              column: 5
            }
          }, {
            start: {
              line: 196,
              column: 4
            },
            end: {
              line: 199,
              column: 5
            }
          }],
          line: 196
        },
        "16": {
          loc: {
            start: {
              line: 201,
              column: 4
            },
            end: {
              line: 205,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 201,
              column: 4
            },
            end: {
              line: 205,
              column: 5
            }
          }, {
            start: {
              line: 201,
              column: 4
            },
            end: {
              line: 205,
              column: 5
            }
          }],
          line: 201
        },
        "17": {
          loc: {
            start: {
              line: 207,
              column: 22
            },
            end: {
              line: 209,
              column: 22
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 208,
              column: 8
            },
            end: {
              line: 208,
              column: 22
            }
          }, {
            start: {
              line: 209,
              column: 8
            },
            end: {
              line: 209,
              column: 22
            }
          }],
          line: 207
        },
        "18": {
          loc: {
            start: {
              line: 242,
              column: 4
            },
            end: {
              line: 244,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 242,
              column: 4
            },
            end: {
              line: 244,
              column: 5
            }
          }, {
            start: {
              line: 242,
              column: 4
            },
            end: {
              line: 244,
              column: 5
            }
          }],
          line: 242
        },
        "19": {
          loc: {
            start: {
              line: 251,
              column: 4
            },
            end: {
              line: 253,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 251,
              column: 4
            },
            end: {
              line: 253,
              column: 5
            }
          }, {
            start: {
              line: 251,
              column: 4
            },
            end: {
              line: 253,
              column: 5
            }
          }],
          line: 251
        },
        "20": {
          loc: {
            start: {
              line: 256,
              column: 4
            },
            end: {
              line: 258,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 256,
              column: 4
            },
            end: {
              line: 258,
              column: 5
            }
          }, {
            start: {
              line: 256,
              column: 4
            },
            end: {
              line: 258,
              column: 5
            }
          }],
          line: 256
        },
        "21": {
          loc: {
            start: {
              line: 262,
              column: 4
            },
            end: {
              line: 265,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 262,
              column: 4
            },
            end: {
              line: 265,
              column: 5
            }
          }, {
            start: {
              line: 262,
              column: 4
            },
            end: {
              line: 265,
              column: 5
            }
          }],
          line: 262
        },
        "22": {
          loc: {
            start: {
              line: 267,
              column: 4
            },
            end: {
              line: 271,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 267,
              column: 4
            },
            end: {
              line: 271,
              column: 5
            }
          }, {
            start: {
              line: 267,
              column: 4
            },
            end: {
              line: 271,
              column: 5
            }
          }],
          line: 267
        },
        "23": {
          loc: {
            start: {
              line: 273,
              column: 4
            },
            end: {
              line: 275,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 273,
              column: 4
            },
            end: {
              line: 275,
              column: 5
            }
          }, {
            start: {
              line: 273,
              column: 4
            },
            end: {
              line: 275,
              column: 5
            }
          }],
          line: 273
        },
        "24": {
          loc: {
            start: {
              line: 279,
              column: 4
            },
            end: {
              line: 281,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 279,
              column: 4
            },
            end: {
              line: 281,
              column: 5
            }
          }, {
            start: {
              line: 279,
              column: 4
            },
            end: {
              line: 281,
              column: 5
            }
          }],
          line: 279
        },
        "25": {
          loc: {
            start: {
              line: 284,
              column: 6
            },
            end: {
              line: 288,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 284,
              column: 6
            },
            end: {
              line: 288,
              column: 7
            }
          }, {
            start: {
              line: 284,
              column: 6
            },
            end: {
              line: 288,
              column: 7
            }
          }],
          line: 284
        },
        "26": {
          loc: {
            start: {
              line: 284,
              column: 10
            },
            end: {
              line: 284,
              column: 90
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 284,
              column: 10
            },
            end: {
              line: 284,
              column: 28
            }
          }, {
            start: {
              line: 284,
              column: 32
            },
            end: {
              line: 284,
              column: 90
            }
          }],
          line: 284
        },
        "27": {
          loc: {
            start: {
              line: 286,
              column: 13
            },
            end: {
              line: 288,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 286,
              column: 13
            },
            end: {
              line: 288,
              column: 7
            }
          }, {
            start: {
              line: 286,
              column: 13
            },
            end: {
              line: 288,
              column: 7
            }
          }],
          line: 286
        },
        "28": {
          loc: {
            start: {
              line: 293,
              column: 6
            },
            end: {
              line: 297,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 293,
              column: 6
            },
            end: {
              line: 297,
              column: 7
            }
          }, {
            start: {
              line: 293,
              column: 6
            },
            end: {
              line: 297,
              column: 7
            }
          }],
          line: 293
        },
        "29": {
          loc: {
            start: {
              line: 293,
              column: 10
            },
            end: {
              line: 293,
              column: 79
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 293,
              column: 10
            },
            end: {
              line: 293,
              column: 37
            }
          }, {
            start: {
              line: 293,
              column: 41
            },
            end: {
              line: 293,
              column: 79
            }
          }],
          line: 293
        },
        "30": {
          loc: {
            start: {
              line: 301,
              column: 6
            },
            end: {
              line: 303,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 301,
              column: 6
            },
            end: {
              line: 303,
              column: 7
            }
          }, {
            start: {
              line: 301,
              column: 6
            },
            end: {
              line: 303,
              column: 7
            }
          }],
          line: 301
        },
        "31": {
          loc: {
            start: {
              line: 301,
              column: 10
            },
            end: {
              line: 301,
              column: 90
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 301,
              column: 10
            },
            end: {
              line: 301,
              column: 28
            }
          }, {
            start: {
              line: 301,
              column: 32
            },
            end: {
              line: 301,
              column: 90
            }
          }],
          line: 301
        },
        "32": {
          loc: {
            start: {
              line: 306,
              column: 6
            },
            end: {
              line: 320,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 306,
              column: 6
            },
            end: {
              line: 320,
              column: 7
            }
          }, {
            start: {
              line: 306,
              column: 6
            },
            end: {
              line: 320,
              column: 7
            }
          }],
          line: 306
        },
        "33": {
          loc: {
            start: {
              line: 316,
              column: 8
            },
            end: {
              line: 318,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 316,
              column: 8
            },
            end: {
              line: 318,
              column: 9
            }
          }, {
            start: {
              line: 316,
              column: 8
            },
            end: {
              line: 318,
              column: 9
            }
          }],
          line: 316
        },
        "34": {
          loc: {
            start: {
              line: 324,
              column: 4
            },
            end: {
              line: 333,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 324,
              column: 4
            },
            end: {
              line: 333,
              column: 5
            }
          }, {
            start: {
              line: 324,
              column: 4
            },
            end: {
              line: 333,
              column: 5
            }
          }],
          line: 324
        },
        "35": {
          loc: {
            start: {
              line: 337,
              column: 4
            },
            end: {
              line: 339,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 337,
              column: 4
            },
            end: {
              line: 339,
              column: 5
            }
          }, {
            start: {
              line: 337,
              column: 4
            },
            end: {
              line: 339,
              column: 5
            }
          }],
          line: 337
        },
        "36": {
          loc: {
            start: {
              line: 341,
              column: 4
            },
            end: {
              line: 351,
              column: 5
            }
          },
          type: "switch",
          locations: [{
            start: {
              line: 342,
              column: 6
            },
            end: {
              line: 345,
              column: 13
            }
          }, {
            start: {
              line: 346,
              column: 6
            },
            end: {
              line: 349,
              column: 13
            }
          }, {
            start: {
              line: 350,
              column: 6
            },
            end: {
              line: 350,
              column: 14
            }
          }],
          line: 341
        },
        "37": {
          loc: {
            start: {
              line: 355,
              column: 18
            },
            end: {
              line: 357,
              column: 10
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 356,
              column: 8
            },
            end: {
              line: 356,
              column: 73
            }
          }, {
            start: {
              line: 357,
              column: 8
            },
            end: {
              line: 357,
              column: 10
            }
          }],
          line: 355
        },
        "38": {
          loc: {
            start: {
              line: 355,
              column: 18
            },
            end: {
              line: 355,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 355,
              column: 18
            },
            end: {
              line: 355,
              column: 25
            }
          }, {
            start: {
              line: 355,
              column: 29
            },
            end: {
              line: 355,
              column: 47
            }
          }],
          line: 355
        },
        "39": {
          loc: {
            start: {
              line: 366,
              column: 28
            },
            end: {
              line: 367,
              column: 76
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 366,
              column: 28
            },
            end: {
              line: 366,
              column: 43
            }
          }, {
            start: {
              line: 366,
              column: 47
            },
            end: {
              line: 366,
              column: 64
            }
          }, {
            start: {
              line: 367,
              column: 28
            },
            end: {
              line: 367,
              column: 43
            }
          }, {
            start: {
              line: 367,
              column: 47
            },
            end: {
              line: 367,
              column: 76
            }
          }],
          line: 366
        },
        "40": {
          loc: {
            start: {
              line: 369,
              column: 4
            },
            end: {
              line: 371,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 369,
              column: 4
            },
            end: {
              line: 371,
              column: 5
            }
          }, {
            start: {
              line: 369,
              column: 4
            },
            end: {
              line: 371,
              column: 5
            }
          }],
          line: 369
        },
        "41": {
          loc: {
            start: {
              line: 369,
              column: 8
            },
            end: {
              line: 369,
              column: 43
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 369,
              column: 8
            },
            end: {
              line: 369,
              column: 21
            }
          }, {
            start: {
              line: 369,
              column: 25
            },
            end: {
              line: 369,
              column: 43
            }
          }],
          line: 369
        },
        "42": {
          loc: {
            start: {
              line: 373,
              column: 22
            },
            end: {
              line: 373,
              column: 59
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 373,
              column: 53
            },
            end: {
              line: 373,
              column: 55
            }
          }, {
            start: {
              line: 373,
              column: 58
            },
            end: {
              line: 373,
              column: 59
            }
          }],
          line: 373
        },
        "43": {
          loc: {
            start: {
              line: 376,
              column: 11
            },
            end: {
              line: 377,
              column: 68
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 377,
              column: 8
            },
            end: {
              line: 377,
              column: 43
            }
          }, {
            start: {
              line: 377,
              column: 46
            },
            end: {
              line: 377,
              column: 68
            }
          }],
          line: 376
        },
        "44": {
          loc: {
            start: {
              line: 396,
              column: 4
            },
            end: {
              line: 408,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 396,
              column: 4
            },
            end: {
              line: 408,
              column: 5
            }
          }, {
            start: {
              line: 396,
              column: 4
            },
            end: {
              line: 408,
              column: 5
            }
          }],
          line: 396
        },
        "45": {
          loc: {
            start: {
              line: 405,
              column: 6
            },
            end: {
              line: 407,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 405,
              column: 6
            },
            end: {
              line: 407,
              column: 7
            }
          }, {
            start: {
              line: 405,
              column: 6
            },
            end: {
              line: 407,
              column: 7
            }
          }],
          line: 405
        },
        "46": {
          loc: {
            start: {
              line: 414,
              column: 26
            },
            end: {
              line: 415,
              column: 56
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 414,
              column: 26
            },
            end: {
              line: 414,
              column: 33
            }
          }, {
            start: {
              line: 414,
              column: 37
            },
            end: {
              line: 414,
              column: 50
            }
          }, {
            start: {
              line: 415,
              column: 6
            },
            end: {
              line: 415,
              column: 56
            }
          }],
          line: 414
        },
        "47": {
          loc: {
            start: {
              line: 423,
              column: 4
            },
            end: {
              line: 431,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 423,
              column: 4
            },
            end: {
              line: 431,
              column: 5
            }
          }, {
            start: {
              line: 423,
              column: 4
            },
            end: {
              line: 431,
              column: 5
            }
          }],
          line: 423
        },
        "48": {
          loc: {
            start: {
              line: 433,
              column: 4
            },
            end: {
              line: 436,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 433,
              column: 4
            },
            end: {
              line: 436,
              column: 5
            }
          }, {
            start: {
              line: 433,
              column: 4
            },
            end: {
              line: 436,
              column: 5
            }
          }],
          line: 433
        },
        "49": {
          loc: {
            start: {
              line: 433,
              column: 8
            },
            end: {
              line: 433,
              column: 64
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 433,
              column: 8
            },
            end: {
              line: 433,
              column: 19
            }
          }, {
            start: {
              line: 433,
              column: 23
            },
            end: {
              line: 433,
              column: 64
            }
          }],
          line: 433
        },
        "50": {
          loc: {
            start: {
              line: 439,
              column: 4
            },
            end: {
              line: 441,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 439,
              column: 4
            },
            end: {
              line: 441,
              column: 5
            }
          }, {
            start: {
              line: 439,
              column: 4
            },
            end: {
              line: 441,
              column: 5
            }
          }],
          line: 439
        },
        "51": {
          loc: {
            start: {
              line: 443,
              column: 4
            },
            end: {
              line: 446,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 443,
              column: 4
            },
            end: {
              line: 446,
              column: 5
            }
          }, {
            start: {
              line: 443,
              column: 4
            },
            end: {
              line: 446,
              column: 5
            }
          }],
          line: 443
        },
        "52": {
          loc: {
            start: {
              line: 443,
              column: 8
            },
            end: {
              line: 443,
              column: 38
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 443,
              column: 8
            },
            end: {
              line: 443,
              column: 22
            }
          }, {
            start: {
              line: 443,
              column: 26
            },
            end: {
              line: 443,
              column: 38
            }
          }],
          line: 443
        },
        "53": {
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
        "54": {
          loc: {
            start: {
              line: 463,
              column: 4
            },
            end: {
              line: 500,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 463,
              column: 4
            },
            end: {
              line: 500,
              column: 5
            }
          }, {
            start: {
              line: 463,
              column: 4
            },
            end: {
              line: 500,
              column: 5
            }
          }],
          line: 463
        },
        "55": {
          loc: {
            start: {
              line: 472,
              column: 6
            },
            end: {
              line: 477,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 472,
              column: 6
            },
            end: {
              line: 477,
              column: 7
            }
          }, {
            start: {
              line: 472,
              column: 6
            },
            end: {
              line: 477,
              column: 7
            }
          }],
          line: 472
        },
        "56": {
          loc: {
            start: {
              line: 473,
              column: 39
            },
            end: {
              line: 473,
              column: 92
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 473,
              column: 39
            },
            end: {
              line: 473,
              column: 67
            }
          }, {
            start: {
              line: 473,
              column: 71
            },
            end: {
              line: 473,
              column: 92
            }
          }],
          line: 473
        },
        "57": {
          loc: {
            start: {
              line: 476,
              column: 32
            },
            end: {
              line: 476,
              column: 85
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 476,
              column: 32
            },
            end: {
              line: 476,
              column: 60
            }
          }, {
            start: {
              line: 476,
              column: 64
            },
            end: {
              line: 476,
              column: 85
            }
          }],
          line: 476
        },
        "58": {
          loc: {
            start: {
              line: 502,
              column: 4
            },
            end: {
              line: 504,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 502,
              column: 4
            },
            end: {
              line: 504,
              column: 5
            }
          }, {
            start: {
              line: 502,
              column: 4
            },
            end: {
              line: 504,
              column: 5
            }
          }],
          line: 502
        },
        "59": {
          loc: {
            start: {
              line: 517,
              column: 6
            },
            end: {
              line: 522,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 517,
              column: 6
            },
            end: {
              line: 522,
              column: 7
            }
          }, {
            start: {
              line: 517,
              column: 6
            },
            end: {
              line: 522,
              column: 7
            }
          }],
          line: 517
        },
        "60": {
          loc: {
            start: {
              line: 524,
              column: 21
            },
            end: {
              line: 524,
              column: 72
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 524,
              column: 50
            },
            end: {
              line: 524,
              column: 56
            }
          }, {
            start: {
              line: 524,
              column: 59
            },
            end: {
              line: 524,
              column: 72
            }
          }],
          line: 524
        },
        "61": {
          loc: {
            start: {
              line: 526,
              column: 6
            },
            end: {
              line: 529,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 526,
              column: 6
            },
            end: {
              line: 529,
              column: 7
            }
          }, {
            start: {
              line: 526,
              column: 6
            },
            end: {
              line: 529,
              column: 7
            }
          }],
          line: 526
        },
        "62": {
          loc: {
            start: {
              line: 531,
              column: 6
            },
            end: {
              line: 541,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 531,
              column: 6
            },
            end: {
              line: 541,
              column: 7
            }
          }, {
            start: {
              line: 531,
              column: 6
            },
            end: {
              line: 541,
              column: 7
            }
          }],
          line: 531
        },
        "63": {
          loc: {
            start: {
              line: 533,
              column: 13
            },
            end: {
              line: 541,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 533,
              column: 13
            },
            end: {
              line: 541,
              column: 7
            }
          }, {
            start: {
              line: 533,
              column: 13
            },
            end: {
              line: 541,
              column: 7
            }
          }],
          line: 533
        },
        "64": {
          loc: {
            start: {
              line: 534,
              column: 8
            },
            end: {
              line: 536,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 534,
              column: 8
            },
            end: {
              line: 536,
              column: 9
            }
          }, {
            start: {
              line: 534,
              column: 8
            },
            end: {
              line: 536,
              column: 9
            }
          }],
          line: 534
        },
        "65": {
          loc: {
            start: {
              line: 538,
              column: 13
            },
            end: {
              line: 541,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 538,
              column: 13
            },
            end: {
              line: 541,
              column: 7
            }
          }, {
            start: {
              line: 538,
              column: 13
            },
            end: {
              line: 541,
              column: 7
            }
          }],
          line: 538
        },
        "66": {
          loc: {
            start: {
              line: 538,
              column: 17
            },
            end: {
              line: 538,
              column: 49
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 538,
              column: 17
            },
            end: {
              line: 538,
              column: 33
            }
          }, {
            start: {
              line: 538,
              column: 37
            },
            end: {
              line: 538,
              column: 49
            }
          }],
          line: 538
        },
        "67": {
          loc: {
            start: {
              line: 548,
              column: 4
            },
            end: {
              line: 550,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 548,
              column: 4
            },
            end: {
              line: 550,
              column: 5
            }
          }, {
            start: {
              line: 548,
              column: 4
            },
            end: {
              line: 550,
              column: 5
            }
          }],
          line: 548
        },
        "68": {
          loc: {
            start: {
              line: 554,
              column: 4
            },
            end: {
              line: 556,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 554,
              column: 4
            },
            end: {
              line: 556,
              column: 5
            }
          }, {
            start: {
              line: 554,
              column: 4
            },
            end: {
              line: 556,
              column: 5
            }
          }],
          line: 554
        },
        "69": {
          loc: {
            start: {
              line: 554,
              column: 8
            },
            end: {
              line: 554,
              column: 58
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 554,
              column: 8
            },
            end: {
              line: 554,
              column: 15
            }
          }, {
            start: {
              line: 554,
              column: 19
            },
            end: {
              line: 554,
              column: 58
            }
          }],
          line: 554
        },
        "70": {
          loc: {
            start: {
              line: 564,
              column: 4
            },
            end: {
              line: 566,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 564,
              column: 4
            },
            end: {
              line: 566,
              column: 5
            }
          }, {
            start: {
              line: 564,
              column: 4
            },
            end: {
              line: 566,
              column: 5
            }
          }],
          line: 564
        },
        "71": {
          loc: {
            start: {
              line: 570,
              column: 4
            },
            end: {
              line: 572,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 570,
              column: 4
            },
            end: {
              line: 572,
              column: 5
            }
          }, {
            start: {
              line: 570,
              column: 4
            },
            end: {
              line: 572,
              column: 5
            }
          }],
          line: 570
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
        "40": 0
      },
      b: {
        "0": [0, 0],
        "1": [0, 0],
        "2": [0, 0],
        "3": [0, 0],
        "4": [0, 0, 0],
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
        "32": [0, 0],
        "33": [0, 0],
        "34": [0, 0],
        "35": [0, 0],
        "36": [0, 0, 0],
        "37": [0, 0],
        "38": [0, 0],
        "39": [0, 0, 0, 0],
        "40": [0, 0],
        "41": [0, 0],
        "42": [0, 0],
        "43": [0, 0],
        "44": [0, 0],
        "45": [0, 0],
        "46": [0, 0, 0],
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
        "66": [0, 0],
        "67": [0, 0],
        "68": [0, 0],
        "69": [0, 0],
        "70": [0, 0],
        "71": [0, 0]
      },
      _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
      hash: "70ac15b3255bd2c7fe7a90308000ad0037559989"
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

  var NAME = (cov_1qrssl00mz.s[0]++, 'carousel');
  var VERSION = (cov_1qrssl00mz.s[1]++, '4.4.1');
  var DATA_KEY = (cov_1qrssl00mz.s[2]++, 'bs.carousel');
  var EVENT_KEY = (cov_1qrssl00mz.s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_1qrssl00mz.s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_1qrssl00mz.s[5]++, $.fn[NAME]);
  var ARROW_LEFT_KEYCODE = (cov_1qrssl00mz.s[6]++, 37); // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = (cov_1qrssl00mz.s[7]++, 39); // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = (cov_1qrssl00mz.s[8]++, 500); // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = (cov_1qrssl00mz.s[9]++, 40);
  var Default = (cov_1qrssl00mz.s[10]++, {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  });
  var DefaultType = (cov_1qrssl00mz.s[11]++, {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  });
  var Direction = (cov_1qrssl00mz.s[12]++, {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  });
  var Event = (cov_1qrssl00mz.s[13]++, {
    SLIDE: "slide" + EVENT_KEY,
    SLID: "slid" + EVENT_KEY,
    KEYDOWN: "keydown" + EVENT_KEY,
    MOUSEENTER: "mouseenter" + EVENT_KEY,
    MOUSELEAVE: "mouseleave" + EVENT_KEY,
    TOUCHSTART: "touchstart" + EVENT_KEY,
    TOUCHMOVE: "touchmove" + EVENT_KEY,
    TOUCHEND: "touchend" + EVENT_KEY,
    POINTERDOWN: "pointerdown" + EVENT_KEY,
    POINTERUP: "pointerup" + EVENT_KEY,
    DRAG_START: "dragstart" + EVENT_KEY,
    LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  });
  var ClassName = (cov_1qrssl00mz.s[14]++, {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item',
    POINTER_EVENT: 'pointer-event'
  });
  var Selector = (cov_1qrssl00mz.s[15]++, {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    ITEM_IMG: '.carousel-item img',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
  });
  var PointerType = (cov_1qrssl00mz.s[16]++, {
    TOUCH: 'touch',
    PEN: 'pen'
  });
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = /*#__PURE__*/function () {
    function Carousel(element, config) {
      cov_1qrssl00mz.f[0]++;
      cov_1qrssl00mz.s[17]++;
      this._items = null;
      cov_1qrssl00mz.s[18]++;
      this._interval = null;
      cov_1qrssl00mz.s[19]++;
      this._activeElement = null;
      cov_1qrssl00mz.s[20]++;
      this._isPaused = false;
      cov_1qrssl00mz.s[21]++;
      this._isSliding = false;
      cov_1qrssl00mz.s[22]++;
      this.touchTimeout = null;
      cov_1qrssl00mz.s[23]++;
      this.touchStartX = 0;
      cov_1qrssl00mz.s[24]++;
      this.touchDeltaX = 0;
      cov_1qrssl00mz.s[25]++;
      this._config = this._getConfig(config);
      cov_1qrssl00mz.s[26]++;
      this._element = element;
      cov_1qrssl00mz.s[27]++;
      this._indicatorsElement = this._element.querySelector(Selector.INDICATORS);
      cov_1qrssl00mz.s[28]++;
      this._touchSupported = (cov_1qrssl00mz.b[0][0]++, 'ontouchstart' in document.documentElement) || (cov_1qrssl00mz.b[0][1]++, navigator.maxTouchPoints > 0);
      cov_1qrssl00mz.s[29]++;
      this._pointerEvent = Boolean((cov_1qrssl00mz.b[1][0]++, window.PointerEvent) || (cov_1qrssl00mz.b[1][1]++, window.MSPointerEvent));
      cov_1qrssl00mz.s[30]++;

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      cov_1qrssl00mz.f[3]++;
      cov_1qrssl00mz.s[33]++;

      if (!this._isSliding) {
        cov_1qrssl00mz.b[2][0]++;
        cov_1qrssl00mz.s[34]++;

        this._slide(Direction.NEXT);
      } else {
        cov_1qrssl00mz.b[2][1]++;
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      cov_1qrssl00mz.f[4]++;
      cov_1qrssl00mz.s[35]++;

      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if ((cov_1qrssl00mz.b[4][0]++, !document.hidden) && (cov_1qrssl00mz.b[4][1]++, $(this._element).is(':visible')) && (cov_1qrssl00mz.b[4][2]++, $(this._element).css('visibility') !== 'hidden')) {
        cov_1qrssl00mz.b[3][0]++;
        cov_1qrssl00mz.s[36]++;
        this.next();
      } else {
        cov_1qrssl00mz.b[3][1]++;
      }
    };

    _proto.prev = function prev() {
      cov_1qrssl00mz.f[5]++;
      cov_1qrssl00mz.s[37]++;

      if (!this._isSliding) {
        cov_1qrssl00mz.b[5][0]++;
        cov_1qrssl00mz.s[38]++;

        this._slide(Direction.PREV);
      } else {
        cov_1qrssl00mz.b[5][1]++;
      }
    };

    _proto.pause = function pause(event) {
      cov_1qrssl00mz.f[6]++;
      cov_1qrssl00mz.s[39]++;

      if (!event) {
        cov_1qrssl00mz.b[6][0]++;
        cov_1qrssl00mz.s[40]++;
        this._isPaused = true;
      } else {
        cov_1qrssl00mz.b[6][1]++;
      }

      cov_1qrssl00mz.s[41]++;

      if (this._element.querySelector(Selector.NEXT_PREV)) {
        cov_1qrssl00mz.b[7][0]++;
        cov_1qrssl00mz.s[42]++;
        Util.triggerTransitionEnd(this._element);
        cov_1qrssl00mz.s[43]++;
        this.cycle(true);
      } else {
        cov_1qrssl00mz.b[7][1]++;
      }

      cov_1qrssl00mz.s[44]++;
      clearInterval(this._interval);
      cov_1qrssl00mz.s[45]++;
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      cov_1qrssl00mz.f[7]++;
      cov_1qrssl00mz.s[46]++;

      if (!event) {
        cov_1qrssl00mz.b[8][0]++;
        cov_1qrssl00mz.s[47]++;
        this._isPaused = false;
      } else {
        cov_1qrssl00mz.b[8][1]++;
      }

      cov_1qrssl00mz.s[48]++;

      if (this._interval) {
        cov_1qrssl00mz.b[9][0]++;
        cov_1qrssl00mz.s[49]++;
        clearInterval(this._interval);
        cov_1qrssl00mz.s[50]++;
        this._interval = null;
      } else {
        cov_1qrssl00mz.b[9][1]++;
      }

      cov_1qrssl00mz.s[51]++;

      if ((cov_1qrssl00mz.b[11][0]++, this._config.interval) && (cov_1qrssl00mz.b[11][1]++, !this._isPaused)) {
        cov_1qrssl00mz.b[10][0]++;
        cov_1qrssl00mz.s[52]++;
        this._interval = setInterval((document.visibilityState ? (cov_1qrssl00mz.b[12][0]++, this.nextWhenVisible) : (cov_1qrssl00mz.b[12][1]++, this.next)).bind(this), this._config.interval);
      } else {
        cov_1qrssl00mz.b[10][1]++;
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      cov_1qrssl00mz.f[8]++;
      cov_1qrssl00mz.s[53]++;
      this._activeElement = this._element.querySelector(Selector.ACTIVE_ITEM);
      var activeIndex = (cov_1qrssl00mz.s[54]++, this._getItemIndex(this._activeElement));
      cov_1qrssl00mz.s[55]++;

      if ((cov_1qrssl00mz.b[14][0]++, index > this._items.length - 1) || (cov_1qrssl00mz.b[14][1]++, index < 0)) {
        cov_1qrssl00mz.b[13][0]++;
        cov_1qrssl00mz.s[56]++;
        return;
      } else {
        cov_1qrssl00mz.b[13][1]++;
      }

      cov_1qrssl00mz.s[57]++;

      if (this._isSliding) {
        cov_1qrssl00mz.b[15][0]++;
        cov_1qrssl00mz.s[58]++;
        $(this._element).one(Event.SLID, function () {
          cov_1qrssl00mz.f[9]++;
          cov_1qrssl00mz.s[59]++;
          return _this.to(index);
        });
        cov_1qrssl00mz.s[60]++;
        return;
      } else {
        cov_1qrssl00mz.b[15][1]++;
      }

      cov_1qrssl00mz.s[61]++;

      if (activeIndex === index) {
        cov_1qrssl00mz.b[16][0]++;
        cov_1qrssl00mz.s[62]++;
        this.pause();
        cov_1qrssl00mz.s[63]++;
        this.cycle();
        cov_1qrssl00mz.s[64]++;
        return;
      } else {
        cov_1qrssl00mz.b[16][1]++;
      }

      var direction = (cov_1qrssl00mz.s[65]++, index > activeIndex ? (cov_1qrssl00mz.b[17][0]++, Direction.NEXT) : (cov_1qrssl00mz.b[17][1]++, Direction.PREV));
      cov_1qrssl00mz.s[66]++;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      cov_1qrssl00mz.f[10]++;
      cov_1qrssl00mz.s[67]++;
      $(this._element).off(EVENT_KEY);
      cov_1qrssl00mz.s[68]++;
      $.removeData(this._element, DATA_KEY);
      cov_1qrssl00mz.s[69]++;
      this._items = null;
      cov_1qrssl00mz.s[70]++;
      this._config = null;
      cov_1qrssl00mz.s[71]++;
      this._element = null;
      cov_1qrssl00mz.s[72]++;
      this._interval = null;
      cov_1qrssl00mz.s[73]++;
      this._isPaused = null;
      cov_1qrssl00mz.s[74]++;
      this._isSliding = null;
      cov_1qrssl00mz.s[75]++;
      this._activeElement = null;
      cov_1qrssl00mz.s[76]++;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      cov_1qrssl00mz.f[11]++;
      cov_1qrssl00mz.s[77]++;
      config = _objectSpread2(_objectSpread2({}, Default), config);
      cov_1qrssl00mz.s[78]++;
      Util.typeCheckConfig(NAME, config, DefaultType);
      cov_1qrssl00mz.s[79]++;
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      cov_1qrssl00mz.f[12]++;
      var absDeltax = (cov_1qrssl00mz.s[80]++, Math.abs(this.touchDeltaX));
      cov_1qrssl00mz.s[81]++;

      if (absDeltax <= SWIPE_THRESHOLD) {
        cov_1qrssl00mz.b[18][0]++;
        cov_1qrssl00mz.s[82]++;
        return;
      } else {
        cov_1qrssl00mz.b[18][1]++;
      }

      var direction = (cov_1qrssl00mz.s[83]++, absDeltax / this.touchDeltaX);
      cov_1qrssl00mz.s[84]++;
      this.touchDeltaX = 0; // swipe left

      cov_1qrssl00mz.s[85]++;

      if (direction > 0) {
        cov_1qrssl00mz.b[19][0]++;
        cov_1qrssl00mz.s[86]++;
        this.prev();
      } else {
        cov_1qrssl00mz.b[19][1]++;
      } // swipe right


      cov_1qrssl00mz.s[87]++;

      if (direction < 0) {
        cov_1qrssl00mz.b[20][0]++;
        cov_1qrssl00mz.s[88]++;
        this.next();
      } else {
        cov_1qrssl00mz.b[20][1]++;
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      cov_1qrssl00mz.f[13]++;
      cov_1qrssl00mz.s[89]++;

      if (this._config.keyboard) {
        cov_1qrssl00mz.b[21][0]++;
        cov_1qrssl00mz.s[90]++;
        $(this._element).on(Event.KEYDOWN, function (event) {
          cov_1qrssl00mz.f[14]++;
          cov_1qrssl00mz.s[91]++;
          return _this2._keydown(event);
        });
      } else {
        cov_1qrssl00mz.b[21][1]++;
      }

      cov_1qrssl00mz.s[92]++;

      if (this._config.pause === 'hover') {
        cov_1qrssl00mz.b[22][0]++;
        cov_1qrssl00mz.s[93]++;
        $(this._element).on(Event.MOUSEENTER, function (event) {
          cov_1qrssl00mz.f[15]++;
          cov_1qrssl00mz.s[94]++;
          return _this2.pause(event);
        }).on(Event.MOUSELEAVE, function (event) {
          cov_1qrssl00mz.f[16]++;
          cov_1qrssl00mz.s[95]++;
          return _this2.cycle(event);
        });
      } else {
        cov_1qrssl00mz.b[22][1]++;
      }

      cov_1qrssl00mz.s[96]++;

      if (this._config.touch) {
        cov_1qrssl00mz.b[23][0]++;
        cov_1qrssl00mz.s[97]++;

        this._addTouchEventListeners();
      } else {
        cov_1qrssl00mz.b[23][1]++;
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      cov_1qrssl00mz.f[17]++;
      cov_1qrssl00mz.s[98]++;

      if (!this._touchSupported) {
        cov_1qrssl00mz.b[24][0]++;
        cov_1qrssl00mz.s[99]++;
        return;
      } else {
        cov_1qrssl00mz.b[24][1]++;
      }

      cov_1qrssl00mz.s[100]++;

      var start = function start(event) {
        cov_1qrssl00mz.f[18]++;
        cov_1qrssl00mz.s[101]++;

        if ((cov_1qrssl00mz.b[26][0]++, _this3._pointerEvent) && (cov_1qrssl00mz.b[26][1]++, PointerType[event.originalEvent.pointerType.toUpperCase()])) {
          cov_1qrssl00mz.b[25][0]++;
          cov_1qrssl00mz.s[102]++;
          _this3.touchStartX = event.originalEvent.clientX;
        } else {
          cov_1qrssl00mz.b[25][1]++;
          cov_1qrssl00mz.s[103]++;

          if (!_this3._pointerEvent) {
            cov_1qrssl00mz.b[27][0]++;
            cov_1qrssl00mz.s[104]++;
            _this3.touchStartX = event.originalEvent.touches[0].clientX;
          } else {
            cov_1qrssl00mz.b[27][1]++;
          }
        }
      };

      cov_1qrssl00mz.s[105]++;

      var move = function move(event) {
        cov_1qrssl00mz.f[19]++;
        cov_1qrssl00mz.s[106]++;

        // ensure swiping with one touch and not pinching
        if ((cov_1qrssl00mz.b[29][0]++, event.originalEvent.touches) && (cov_1qrssl00mz.b[29][1]++, event.originalEvent.touches.length > 1)) {
          cov_1qrssl00mz.b[28][0]++;
          cov_1qrssl00mz.s[107]++;
          _this3.touchDeltaX = 0;
        } else {
          cov_1qrssl00mz.b[28][1]++;
          cov_1qrssl00mz.s[108]++;
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      cov_1qrssl00mz.s[109]++;

      var end = function end(event) {
        cov_1qrssl00mz.f[20]++;
        cov_1qrssl00mz.s[110]++;

        if ((cov_1qrssl00mz.b[31][0]++, _this3._pointerEvent) && (cov_1qrssl00mz.b[31][1]++, PointerType[event.originalEvent.pointerType.toUpperCase()])) {
          cov_1qrssl00mz.b[30][0]++;
          cov_1qrssl00mz.s[111]++;
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        } else {
          cov_1qrssl00mz.b[30][1]++;
        }

        cov_1qrssl00mz.s[112]++;

        _this3._handleSwipe();

        cov_1qrssl00mz.s[113]++;

        if (_this3._config.pause === 'hover') {
          cov_1qrssl00mz.b[32][0]++;
          cov_1qrssl00mz.s[114]++;

          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          cov_1qrssl00mz.s[115]++;

          if (_this3.touchTimeout) {
            cov_1qrssl00mz.b[33][0]++;
            cov_1qrssl00mz.s[116]++;
            clearTimeout(_this3.touchTimeout);
          } else {
            cov_1qrssl00mz.b[33][1]++;
          }

          cov_1qrssl00mz.s[117]++;
          _this3.touchTimeout = setTimeout(function (event) {
            cov_1qrssl00mz.f[21]++;
            cov_1qrssl00mz.s[118]++;
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        } else {
          cov_1qrssl00mz.b[32][1]++;
        }
      };

      cov_1qrssl00mz.s[119]++;
      $(this._element.querySelectorAll(Selector.ITEM_IMG)).on(Event.DRAG_START, function (e) {
        cov_1qrssl00mz.f[22]++;
        cov_1qrssl00mz.s[120]++;
        return e.preventDefault();
      });
      cov_1qrssl00mz.s[121]++;

      if (this._pointerEvent) {
        cov_1qrssl00mz.b[34][0]++;
        cov_1qrssl00mz.s[122]++;
        $(this._element).on(Event.POINTERDOWN, function (event) {
          cov_1qrssl00mz.f[23]++;
          cov_1qrssl00mz.s[123]++;
          return start(event);
        });
        cov_1qrssl00mz.s[124]++;
        $(this._element).on(Event.POINTERUP, function (event) {
          cov_1qrssl00mz.f[24]++;
          cov_1qrssl00mz.s[125]++;
          return end(event);
        });
        cov_1qrssl00mz.s[126]++;

        this._element.classList.add(ClassName.POINTER_EVENT);
      } else {
        cov_1qrssl00mz.b[34][1]++;
        cov_1qrssl00mz.s[127]++;
        $(this._element).on(Event.TOUCHSTART, function (event) {
          cov_1qrssl00mz.f[25]++;
          cov_1qrssl00mz.s[128]++;
          return start(event);
        });
        cov_1qrssl00mz.s[129]++;
        $(this._element).on(Event.TOUCHMOVE, function (event) {
          cov_1qrssl00mz.f[26]++;
          cov_1qrssl00mz.s[130]++;
          return move(event);
        });
        cov_1qrssl00mz.s[131]++;
        $(this._element).on(Event.TOUCHEND, function (event) {
          cov_1qrssl00mz.f[27]++;
          cov_1qrssl00mz.s[132]++;
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      cov_1qrssl00mz.f[28]++;
      cov_1qrssl00mz.s[133]++;

      if (/input|textarea/i.test(event.target.tagName)) {
        cov_1qrssl00mz.b[35][0]++;
        cov_1qrssl00mz.s[134]++;
        return;
      } else {
        cov_1qrssl00mz.b[35][1]++;
      }

      cov_1qrssl00mz.s[135]++;

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          cov_1qrssl00mz.b[36][0]++;
          cov_1qrssl00mz.s[136]++;
          event.preventDefault();
          cov_1qrssl00mz.s[137]++;
          this.prev();
          cov_1qrssl00mz.s[138]++;
          break;

        case ARROW_RIGHT_KEYCODE:
          cov_1qrssl00mz.b[36][1]++;
          cov_1qrssl00mz.s[139]++;
          event.preventDefault();
          cov_1qrssl00mz.s[140]++;
          this.next();
          cov_1qrssl00mz.s[141]++;
          break;

        default:
          cov_1qrssl00mz.b[36][2]++;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      cov_1qrssl00mz.f[29]++;
      cov_1qrssl00mz.s[142]++;
      this._items = (cov_1qrssl00mz.b[38][0]++, element) && (cov_1qrssl00mz.b[38][1]++, element.parentNode) ? (cov_1qrssl00mz.b[37][0]++, [].slice.call(element.parentNode.querySelectorAll(Selector.ITEM))) : (cov_1qrssl00mz.b[37][1]++, []);
      cov_1qrssl00mz.s[143]++;
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      cov_1qrssl00mz.f[30]++;
      var isNextDirection = (cov_1qrssl00mz.s[144]++, direction === Direction.NEXT);
      var isPrevDirection = (cov_1qrssl00mz.s[145]++, direction === Direction.PREV);
      var activeIndex = (cov_1qrssl00mz.s[146]++, this._getItemIndex(activeElement));
      var lastItemIndex = (cov_1qrssl00mz.s[147]++, this._items.length - 1);
      var isGoingToWrap = (cov_1qrssl00mz.s[148]++, (cov_1qrssl00mz.b[39][0]++, isPrevDirection) && (cov_1qrssl00mz.b[39][1]++, activeIndex === 0) || (cov_1qrssl00mz.b[39][2]++, isNextDirection) && (cov_1qrssl00mz.b[39][3]++, activeIndex === lastItemIndex));
      cov_1qrssl00mz.s[149]++;

      if ((cov_1qrssl00mz.b[41][0]++, isGoingToWrap) && (cov_1qrssl00mz.b[41][1]++, !this._config.wrap)) {
        cov_1qrssl00mz.b[40][0]++;
        cov_1qrssl00mz.s[150]++;
        return activeElement;
      } else {
        cov_1qrssl00mz.b[40][1]++;
      }

      var delta = (cov_1qrssl00mz.s[151]++, direction === Direction.PREV ? (cov_1qrssl00mz.b[42][0]++, -1) : (cov_1qrssl00mz.b[42][1]++, 1));
      var itemIndex = (cov_1qrssl00mz.s[152]++, (activeIndex + delta) % this._items.length);
      cov_1qrssl00mz.s[153]++;
      return itemIndex === -1 ? (cov_1qrssl00mz.b[43][0]++, this._items[this._items.length - 1]) : (cov_1qrssl00mz.b[43][1]++, this._items[itemIndex]);
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      cov_1qrssl00mz.f[31]++;
      var targetIndex = (cov_1qrssl00mz.s[154]++, this._getItemIndex(relatedTarget));
      var fromIndex = (cov_1qrssl00mz.s[155]++, this._getItemIndex(this._element.querySelector(Selector.ACTIVE_ITEM)));
      var slideEvent = (cov_1qrssl00mz.s[156]++, $.Event(Event.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      }));
      cov_1qrssl00mz.s[157]++;
      $(this._element).trigger(slideEvent);
      cov_1qrssl00mz.s[158]++;
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      cov_1qrssl00mz.f[32]++;
      cov_1qrssl00mz.s[159]++;

      if (this._indicatorsElement) {
        cov_1qrssl00mz.b[44][0]++;
        var indicators = (cov_1qrssl00mz.s[160]++, [].slice.call(this._indicatorsElement.querySelectorAll(Selector.ACTIVE)));
        cov_1qrssl00mz.s[161]++;
        $(indicators).removeClass(ClassName.ACTIVE);
        var nextIndicator = (cov_1qrssl00mz.s[162]++, this._indicatorsElement.children[this._getItemIndex(element)]);
        cov_1qrssl00mz.s[163]++;

        if (nextIndicator) {
          cov_1qrssl00mz.b[45][0]++;
          cov_1qrssl00mz.s[164]++;
          $(nextIndicator).addClass(ClassName.ACTIVE);
        } else {
          cov_1qrssl00mz.b[45][1]++;
        }
      } else {
        cov_1qrssl00mz.b[44][1]++;
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      cov_1qrssl00mz.f[33]++;
      var activeElement = (cov_1qrssl00mz.s[165]++, this._element.querySelector(Selector.ACTIVE_ITEM));
      var activeElementIndex = (cov_1qrssl00mz.s[166]++, this._getItemIndex(activeElement));
      var nextElement = (cov_1qrssl00mz.s[167]++, (cov_1qrssl00mz.b[46][0]++, element) || (cov_1qrssl00mz.b[46][1]++, activeElement) && (cov_1qrssl00mz.b[46][2]++, this._getItemByDirection(direction, activeElement)));
      var nextElementIndex = (cov_1qrssl00mz.s[168]++, this._getItemIndex(nextElement));
      var isCycling = (cov_1qrssl00mz.s[169]++, Boolean(this._interval));
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;
      cov_1qrssl00mz.s[170]++;

      if (direction === Direction.NEXT) {
        cov_1qrssl00mz.b[47][0]++;
        cov_1qrssl00mz.s[171]++;
        directionalClassName = ClassName.LEFT;
        cov_1qrssl00mz.s[172]++;
        orderClassName = ClassName.NEXT;
        cov_1qrssl00mz.s[173]++;
        eventDirectionName = Direction.LEFT;
      } else {
        cov_1qrssl00mz.b[47][1]++;
        cov_1qrssl00mz.s[174]++;
        directionalClassName = ClassName.RIGHT;
        cov_1qrssl00mz.s[175]++;
        orderClassName = ClassName.PREV;
        cov_1qrssl00mz.s[176]++;
        eventDirectionName = Direction.RIGHT;
      }

      cov_1qrssl00mz.s[177]++;

      if ((cov_1qrssl00mz.b[49][0]++, nextElement) && (cov_1qrssl00mz.b[49][1]++, $(nextElement).hasClass(ClassName.ACTIVE))) {
        cov_1qrssl00mz.b[48][0]++;
        cov_1qrssl00mz.s[178]++;
        this._isSliding = false;
        cov_1qrssl00mz.s[179]++;
        return;
      } else {
        cov_1qrssl00mz.b[48][1]++;
      }

      var slideEvent = (cov_1qrssl00mz.s[180]++, this._triggerSlideEvent(nextElement, eventDirectionName));
      cov_1qrssl00mz.s[181]++;

      if (slideEvent.isDefaultPrevented()) {
        cov_1qrssl00mz.b[50][0]++;
        cov_1qrssl00mz.s[182]++;
        return;
      } else {
        cov_1qrssl00mz.b[50][1]++;
      }

      cov_1qrssl00mz.s[183]++;

      if ((cov_1qrssl00mz.b[52][0]++, !activeElement) || (cov_1qrssl00mz.b[52][1]++, !nextElement)) {
        cov_1qrssl00mz.b[51][0]++;
        cov_1qrssl00mz.s[184]++;
        // Some weirdness is happening, so we bail
        return;
      } else {
        cov_1qrssl00mz.b[51][1]++;
      }

      cov_1qrssl00mz.s[185]++;
      this._isSliding = true;
      cov_1qrssl00mz.s[186]++;

      if (isCycling) {
        cov_1qrssl00mz.b[53][0]++;
        cov_1qrssl00mz.s[187]++;
        this.pause();
      } else {
        cov_1qrssl00mz.b[53][1]++;
      }

      cov_1qrssl00mz.s[188]++;

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = (cov_1qrssl00mz.s[189]++, $.Event(Event.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      }));
      cov_1qrssl00mz.s[190]++;

      if ($(this._element).hasClass(ClassName.SLIDE)) {
        cov_1qrssl00mz.b[54][0]++;
        cov_1qrssl00mz.s[191]++;
        $(nextElement).addClass(orderClassName);
        cov_1qrssl00mz.s[192]++;
        Util.reflow(nextElement);
        cov_1qrssl00mz.s[193]++;
        $(activeElement).addClass(directionalClassName);
        cov_1qrssl00mz.s[194]++;
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = (cov_1qrssl00mz.s[195]++, parseInt(nextElement.getAttribute('data-interval'), 10));
        cov_1qrssl00mz.s[196]++;

        if (nextElementInterval) {
          cov_1qrssl00mz.b[55][0]++;
          cov_1qrssl00mz.s[197]++;
          this._config.defaultInterval = (cov_1qrssl00mz.b[56][0]++, this._config.defaultInterval) || (cov_1qrssl00mz.b[56][1]++, this._config.interval);
          cov_1qrssl00mz.s[198]++;
          this._config.interval = nextElementInterval;
        } else {
          cov_1qrssl00mz.b[55][1]++;
          cov_1qrssl00mz.s[199]++;
          this._config.interval = (cov_1qrssl00mz.b[57][0]++, this._config.defaultInterval) || (cov_1qrssl00mz.b[57][1]++, this._config.interval);
        }

        var transitionDuration = (cov_1qrssl00mz.s[200]++, Util.getTransitionDurationFromElement(activeElement));
        cov_1qrssl00mz.s[201]++;
        $(activeElement).one(Util.TRANSITION_END, function () {
          cov_1qrssl00mz.f[34]++;
          cov_1qrssl00mz.s[202]++;
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName.ACTIVE);
          cov_1qrssl00mz.s[203]++;
          $(activeElement).removeClass(ClassName.ACTIVE + " " + orderClassName + " " + directionalClassName);
          cov_1qrssl00mz.s[204]++;
          _this4._isSliding = false;
          cov_1qrssl00mz.s[205]++;
          setTimeout(function () {
            cov_1qrssl00mz.f[35]++;
            cov_1qrssl00mz.s[206]++;
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        cov_1qrssl00mz.b[54][1]++;
        cov_1qrssl00mz.s[207]++;
        $(activeElement).removeClass(ClassName.ACTIVE);
        cov_1qrssl00mz.s[208]++;
        $(nextElement).addClass(ClassName.ACTIVE);
        cov_1qrssl00mz.s[209]++;
        this._isSliding = false;
        cov_1qrssl00mz.s[210]++;
        $(this._element).trigger(slidEvent);
      }

      cov_1qrssl00mz.s[211]++;

      if (isCycling) {
        cov_1qrssl00mz.b[58][0]++;
        cov_1qrssl00mz.s[212]++;
        this.cycle();
      } else {
        cov_1qrssl00mz.b[58][1]++;
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      cov_1qrssl00mz.f[36]++;
      cov_1qrssl00mz.s[213]++;
      return this.each(function () {
        cov_1qrssl00mz.f[37]++;
        var data = (cov_1qrssl00mz.s[214]++, $(this).data(DATA_KEY));

        var _config = (cov_1qrssl00mz.s[215]++, _objectSpread2(_objectSpread2({}, Default), $(this).data()));

        cov_1qrssl00mz.s[216]++;

        if (typeof config === 'object') {
          cov_1qrssl00mz.b[59][0]++;
          cov_1qrssl00mz.s[217]++;
          _config = _objectSpread2(_objectSpread2({}, _config), config);
        } else {
          cov_1qrssl00mz.b[59][1]++;
        }

        var action = (cov_1qrssl00mz.s[218]++, typeof config === 'string' ? (cov_1qrssl00mz.b[60][0]++, config) : (cov_1qrssl00mz.b[60][1]++, _config.slide));
        cov_1qrssl00mz.s[219]++;

        if (!data) {
          cov_1qrssl00mz.b[61][0]++;
          cov_1qrssl00mz.s[220]++;
          data = new Carousel(this, _config);
          cov_1qrssl00mz.s[221]++;
          $(this).data(DATA_KEY, data);
        } else {
          cov_1qrssl00mz.b[61][1]++;
        }

        cov_1qrssl00mz.s[222]++;

        if (typeof config === 'number') {
          cov_1qrssl00mz.b[62][0]++;
          cov_1qrssl00mz.s[223]++;
          data.to(config);
        } else {
          cov_1qrssl00mz.b[62][1]++;
          cov_1qrssl00mz.s[224]++;

          if (typeof action === 'string') {
            cov_1qrssl00mz.b[63][0]++;
            cov_1qrssl00mz.s[225]++;

            if (typeof data[action] === 'undefined') {
              cov_1qrssl00mz.b[64][0]++;
              cov_1qrssl00mz.s[226]++;
              throw new TypeError("No method named \"" + action + "\"");
            } else {
              cov_1qrssl00mz.b[64][1]++;
            }

            cov_1qrssl00mz.s[227]++;
            data[action]();
          } else {
            cov_1qrssl00mz.b[63][1]++;
            cov_1qrssl00mz.s[228]++;

            if ((cov_1qrssl00mz.b[66][0]++, _config.interval) && (cov_1qrssl00mz.b[66][1]++, _config.ride)) {
              cov_1qrssl00mz.b[65][0]++;
              cov_1qrssl00mz.s[229]++;
              data.pause();
              cov_1qrssl00mz.s[230]++;
              data.cycle();
            } else {
              cov_1qrssl00mz.b[65][1]++;
            }
          }
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      cov_1qrssl00mz.f[38]++;
      var selector = (cov_1qrssl00mz.s[231]++, Util.getSelectorFromElement(this));
      cov_1qrssl00mz.s[232]++;

      if (!selector) {
        cov_1qrssl00mz.b[67][0]++;
        cov_1qrssl00mz.s[233]++;
        return;
      } else {
        cov_1qrssl00mz.b[67][1]++;
      }

      var target = (cov_1qrssl00mz.s[234]++, $(selector)[0]);
      cov_1qrssl00mz.s[235]++;

      if ((cov_1qrssl00mz.b[69][0]++, !target) || (cov_1qrssl00mz.b[69][1]++, !$(target).hasClass(ClassName.CAROUSEL))) {
        cov_1qrssl00mz.b[68][0]++;
        cov_1qrssl00mz.s[236]++;
        return;
      } else {
        cov_1qrssl00mz.b[68][1]++;
      }

      var config = (cov_1qrssl00mz.s[237]++, _objectSpread2(_objectSpread2({}, $(target).data()), $(this).data()));
      var slideIndex = (cov_1qrssl00mz.s[238]++, this.getAttribute('data-slide-to'));
      cov_1qrssl00mz.s[239]++;

      if (slideIndex) {
        cov_1qrssl00mz.b[70][0]++;
        cov_1qrssl00mz.s[240]++;
        config.interval = false;
      } else {
        cov_1qrssl00mz.b[70][1]++;
      }

      cov_1qrssl00mz.s[241]++;

      Carousel._jQueryInterface.call($(target), config);

      cov_1qrssl00mz.s[242]++;

      if (slideIndex) {
        cov_1qrssl00mz.b[71][0]++;
        cov_1qrssl00mz.s[243]++;
        $(target).data(DATA_KEY).to(slideIndex);
      } else {
        cov_1qrssl00mz.b[71][1]++;
      }

      cov_1qrssl00mz.s[244]++;
      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        cov_1qrssl00mz.f[1]++;
        cov_1qrssl00mz.s[31]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_1qrssl00mz.f[2]++;
        cov_1qrssl00mz.s[32]++;
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  cov_1qrssl00mz.s[245]++;
  $(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);
  cov_1qrssl00mz.s[246]++;
  $(window).on(Event.LOAD_DATA_API, function () {
    cov_1qrssl00mz.f[39]++;
    var carousels = (cov_1qrssl00mz.s[247]++, [].slice.call(document.querySelectorAll(Selector.DATA_RIDE)));
    cov_1qrssl00mz.s[248]++;

    for (var i = (cov_1qrssl00mz.s[249]++, 0), len = (cov_1qrssl00mz.s[250]++, carousels.length); i < len; i++) {
      var $carousel = (cov_1qrssl00mz.s[251]++, $(carousels[i]));
      cov_1qrssl00mz.s[252]++;

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  cov_1qrssl00mz.s[253]++;
  $.fn[NAME] = Carousel._jQueryInterface;
  cov_1qrssl00mz.s[254]++;
  $.fn[NAME].Constructor = Carousel;
  cov_1qrssl00mz.s[255]++;

  $.fn[NAME].noConflict = function () {
    cov_1qrssl00mz.f[40]++;
    cov_1qrssl00mz.s[256]++;
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    cov_1qrssl00mz.s[257]++;
    return Carousel._jQueryInterface;
  };

  return Carousel;

})));
//# sourceMappingURL=carousel.js.map

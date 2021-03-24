/*!
  * Bootstrap carousel.js v4.6.0-2 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2021 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Carousel = factory(global.jQuery, global.Util));
}(this, (function ($, Util) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
  var Util__default = /*#__PURE__*/_interopDefaultLegacy(Util);

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

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function cov_1qrssl00mz() {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/carousel.js";
    var hash = "bbb28de77a7163384dabd722306d5e5c72476236";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/carousel.js",
      statementMap: {
        "0": {
          start: {
            line: 17,
            column: 13
          },
          end: {
            line: 17,
            column: 23
          }
        },
        "1": {
          start: {
            line: 18,
            column: 16
          },
          end: {
            line: 18,
            column: 23
          }
        },
        "2": {
          start: {
            line: 19,
            column: 17
          },
          end: {
            line: 19,
            column: 30
          }
        },
        "3": {
          start: {
            line: 20,
            column: 18
          },
          end: {
            line: 20,
            column: 32
          }
        },
        "4": {
          start: {
            line: 21,
            column: 21
          },
          end: {
            line: 21,
            column: 32
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
            line: 24,
            column: 28
          },
          end: {
            line: 24,
            column: 30
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
            column: 24
          },
          end: {
            line: 26,
            column: 26
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
            column: 23
          },
          end: {
            line: 46,
            column: 29
          }
        },
        "13": {
          start: {
            line: 47,
            column: 23
          },
          end: {
            line: 47,
            column: 29
          }
        },
        "14": {
          start: {
            line: 48,
            column: 23
          },
          end: {
            line: 48,
            column: 29
          }
        },
        "15": {
          start: {
            line: 49,
            column: 24
          },
          end: {
            line: 49,
            column: 31
          }
        },
        "16": {
          start: {
            line: 51,
            column: 20
          },
          end: {
            line: 51,
            column: 39
          }
        },
        "17": {
          start: {
            line: 52,
            column: 19
          },
          end: {
            line: 52,
            column: 37
          }
        },
        "18": {
          start: {
            line: 53,
            column: 22
          },
          end: {
            line: 53,
            column: 43
          }
        },
        "19": {
          start: {
            line: 54,
            column: 25
          },
          end: {
            line: 54,
            column: 49
          }
        },
        "20": {
          start: {
            line: 55,
            column: 25
          },
          end: {
            line: 55,
            column: 49
          }
        },
        "21": {
          start: {
            line: 56,
            column: 25
          },
          end: {
            line: 56,
            column: 49
          }
        },
        "22": {
          start: {
            line: 57,
            column: 24
          },
          end: {
            line: 57,
            column: 47
          }
        },
        "23": {
          start: {
            line: 58,
            column: 23
          },
          end: {
            line: 58,
            column: 45
          }
        },
        "24": {
          start: {
            line: 59,
            column: 26
          },
          end: {
            line: 59,
            column: 51
          }
        },
        "25": {
          start: {
            line: 60,
            column: 24
          },
          end: {
            line: 60,
            column: 47
          }
        },
        "26": {
          start: {
            line: 61,
            column: 25
          },
          end: {
            line: 61,
            column: 48
          }
        },
        "27": {
          start: {
            line: 62,
            column: 28
          },
          end: {
            line: 62,
            column: 61
          }
        },
        "28": {
          start: {
            line: 63,
            column: 29
          },
          end: {
            line: 63,
            column: 63
          }
        },
        "29": {
          start: {
            line: 65,
            column: 28
          },
          end: {
            line: 65,
            column: 38
          }
        },
        "30": {
          start: {
            line: 66,
            column: 26
          },
          end: {
            line: 66,
            column: 34
          }
        },
        "31": {
          start: {
            line: 67,
            column: 25
          },
          end: {
            line: 67,
            column: 32
          }
        },
        "32": {
          start: {
            line: 68,
            column: 25
          },
          end: {
            line: 68,
            column: 46
          }
        },
        "33": {
          start: {
            line: 69,
            column: 24
          },
          end: {
            line: 69,
            column: 44
          }
        },
        "34": {
          start: {
            line: 70,
            column: 24
          },
          end: {
            line: 70,
            column: 44
          }
        },
        "35": {
          start: {
            line: 71,
            column: 24
          },
          end: {
            line: 71,
            column: 44
          }
        },
        "36": {
          start: {
            line: 72,
            column: 33
          },
          end: {
            line: 72,
            column: 48
          }
        },
        "37": {
          start: {
            line: 74,
            column: 24
          },
          end: {
            line: 74,
            column: 33
          }
        },
        "38": {
          start: {
            line: 75,
            column: 29
          },
          end: {
            line: 75,
            column: 52
          }
        },
        "39": {
          start: {
            line: 76,
            column: 22
          },
          end: {
            line: 76,
            column: 38
          }
        },
        "40": {
          start: {
            line: 77,
            column: 26
          },
          end: {
            line: 77,
            column: 46
          }
        },
        "41": {
          start: {
            line: 78,
            column: 27
          },
          end: {
            line: 78,
            column: 69
          }
        },
        "42": {
          start: {
            line: 79,
            column: 28
          },
          end: {
            line: 79,
            column: 50
          }
        },
        "43": {
          start: {
            line: 80,
            column: 28
          },
          end: {
            line: 80,
            column: 59
          }
        },
        "44": {
          start: {
            line: 81,
            column: 27
          },
          end: {
            line: 81,
            column: 51
          }
        },
        "45": {
          start: {
            line: 83,
            column: 20
          },
          end: {
            line: 86,
            column: 1
          }
        },
        "46": {
          start: {
            line: 95,
            column: 4
          },
          end: {
            line: 95,
            column: 22
          }
        },
        "47": {
          start: {
            line: 96,
            column: 4
          },
          end: {
            line: 96,
            column: 25
          }
        },
        "48": {
          start: {
            line: 97,
            column: 4
          },
          end: {
            line: 97,
            column: 30
          }
        },
        "49": {
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 98,
            column: 26
          }
        },
        "50": {
          start: {
            line: 99,
            column: 4
          },
          end: {
            line: 99,
            column: 27
          }
        },
        "51": {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 100,
            column: 28
          }
        },
        "52": {
          start: {
            line: 101,
            column: 4
          },
          end: {
            line: 101,
            column: 24
          }
        },
        "53": {
          start: {
            line: 102,
            column: 4
          },
          end: {
            line: 102,
            column: 24
          }
        },
        "54": {
          start: {
            line: 104,
            column: 4
          },
          end: {
            line: 104,
            column: 42
          }
        },
        "55": {
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 105,
            column: 27
          }
        },
        "56": {
          start: {
            line: 106,
            column: 4
          },
          end: {
            line: 106,
            column: 78
          }
        },
        "57": {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 107,
            column: 101
          }
        },
        "58": {
          start: {
            line: 108,
            column: 4
          },
          end: {
            line: 108,
            column: 78
          }
        },
        "59": {
          start: {
            line: 110,
            column: 4
          },
          end: {
            line: 110,
            column: 29
          }
        },
        "60": {
          start: {
            line: 116,
            column: 4
          },
          end: {
            line: 116,
            column: 18
          }
        },
        "61": {
          start: {
            line: 120,
            column: 4
          },
          end: {
            line: 120,
            column: 18
          }
        },
        "62": {
          start: {
            line: 126,
            column: 4
          },
          end: {
            line: 128,
            column: 5
          }
        },
        "63": {
          start: {
            line: 127,
            column: 6
          },
          end: {
            line: 127,
            column: 33
          }
        },
        "64": {
          start: {
            line: 132,
            column: 21
          },
          end: {
            line: 132,
            column: 37
          }
        },
        "65": {
          start: {
            line: 135,
            column: 4
          },
          end: {
            line: 138,
            column: 5
          }
        },
        "66": {
          start: {
            line: 137,
            column: 6
          },
          end: {
            line: 137,
            column: 17
          }
        },
        "67": {
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 144,
            column: 5
          }
        },
        "68": {
          start: {
            line: 143,
            column: 6
          },
          end: {
            line: 143,
            column: 33
          }
        },
        "69": {
          start: {
            line: 148,
            column: 4
          },
          end: {
            line: 150,
            column: 5
          }
        },
        "70": {
          start: {
            line: 149,
            column: 6
          },
          end: {
            line: 149,
            column: 27
          }
        },
        "71": {
          start: {
            line: 152,
            column: 4
          },
          end: {
            line: 155,
            column: 5
          }
        },
        "72": {
          start: {
            line: 153,
            column: 6
          },
          end: {
            line: 153,
            column: 46
          }
        },
        "73": {
          start: {
            line: 154,
            column: 6
          },
          end: {
            line: 154,
            column: 22
          }
        },
        "74": {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 157,
            column: 33
          }
        },
        "75": {
          start: {
            line: 158,
            column: 4
          },
          end: {
            line: 158,
            column: 25
          }
        },
        "76": {
          start: {
            line: 162,
            column: 4
          },
          end: {
            line: 164,
            column: 5
          }
        },
        "77": {
          start: {
            line: 163,
            column: 6
          },
          end: {
            line: 163,
            column: 28
          }
        },
        "78": {
          start: {
            line: 166,
            column: 4
          },
          end: {
            line: 169,
            column: 5
          }
        },
        "79": {
          start: {
            line: 167,
            column: 6
          },
          end: {
            line: 167,
            column: 35
          }
        },
        "80": {
          start: {
            line: 168,
            column: 6
          },
          end: {
            line: 168,
            column: 27
          }
        },
        "81": {
          start: {
            line: 171,
            column: 4
          },
          end: {
            line: 178,
            column: 5
          }
        },
        "82": {
          start: {
            line: 172,
            column: 6
          },
          end: {
            line: 172,
            column: 28
          }
        },
        "83": {
          start: {
            line: 174,
            column: 6
          },
          end: {
            line: 177,
            column: 7
          }
        },
        "84": {
          start: {
            line: 182,
            column: 4
          },
          end: {
            line: 182,
            column: 75
          }
        },
        "85": {
          start: {
            line: 184,
            column: 24
          },
          end: {
            line: 184,
            column: 63
          }
        },
        "86": {
          start: {
            line: 186,
            column: 4
          },
          end: {
            line: 188,
            column: 5
          }
        },
        "87": {
          start: {
            line: 187,
            column: 6
          },
          end: {
            line: 187,
            column: 12
          }
        },
        "88": {
          start: {
            line: 190,
            column: 4
          },
          end: {
            line: 193,
            column: 5
          }
        },
        "89": {
          start: {
            line: 191,
            column: 6
          },
          end: {
            line: 191,
            column: 60
          }
        },
        "90": {
          start: {
            line: 191,
            column: 45
          },
          end: {
            line: 191,
            column: 59
          }
        },
        "91": {
          start: {
            line: 192,
            column: 6
          },
          end: {
            line: 192,
            column: 12
          }
        },
        "92": {
          start: {
            line: 195,
            column: 4
          },
          end: {
            line: 199,
            column: 5
          }
        },
        "93": {
          start: {
            line: 196,
            column: 6
          },
          end: {
            line: 196,
            column: 18
          }
        },
        "94": {
          start: {
            line: 197,
            column: 6
          },
          end: {
            line: 197,
            column: 18
          }
        },
        "95": {
          start: {
            line: 198,
            column: 6
          },
          end: {
            line: 198,
            column: 12
          }
        },
        "96": {
          start: {
            line: 201,
            column: 22
          },
          end: {
            line: 203,
            column: 20
          }
        },
        "97": {
          start: {
            line: 205,
            column: 4
          },
          end: {
            line: 205,
            column: 46
          }
        },
        "98": {
          start: {
            line: 209,
            column: 4
          },
          end: {
            line: 209,
            column: 35
          }
        },
        "99": {
          start: {
            line: 210,
            column: 4
          },
          end: {
            line: 210,
            column: 41
          }
        },
        "100": {
          start: {
            line: 212,
            column: 4
          },
          end: {
            line: 212,
            column: 22
          }
        },
        "101": {
          start: {
            line: 213,
            column: 4
          },
          end: {
            line: 213,
            column: 23
          }
        },
        "102": {
          start: {
            line: 214,
            column: 4
          },
          end: {
            line: 214,
            column: 24
          }
        },
        "103": {
          start: {
            line: 215,
            column: 4
          },
          end: {
            line: 215,
            column: 25
          }
        },
        "104": {
          start: {
            line: 216,
            column: 4
          },
          end: {
            line: 216,
            column: 25
          }
        },
        "105": {
          start: {
            line: 217,
            column: 4
          },
          end: {
            line: 217,
            column: 26
          }
        },
        "106": {
          start: {
            line: 218,
            column: 4
          },
          end: {
            line: 218,
            column: 30
          }
        },
        "107": {
          start: {
            line: 219,
            column: 4
          },
          end: {
            line: 219,
            column: 34
          }
        },
        "108": {
          start: {
            line: 225,
            column: 4
          },
          end: {
            line: 228,
            column: 5
          }
        },
        "109": {
          start: {
            line: 229,
            column: 4
          },
          end: {
            line: 229,
            column: 51
          }
        },
        "110": {
          start: {
            line: 230,
            column: 4
          },
          end: {
            line: 230,
            column: 17
          }
        },
        "111": {
          start: {
            line: 234,
            column: 22
          },
          end: {
            line: 234,
            column: 48
          }
        },
        "112": {
          start: {
            line: 236,
            column: 4
          },
          end: {
            line: 238,
            column: 5
          }
        },
        "113": {
          start: {
            line: 237,
            column: 6
          },
          end: {
            line: 237,
            column: 12
          }
        },
        "114": {
          start: {
            line: 240,
            column: 22
          },
          end: {
            line: 240,
            column: 50
          }
        },
        "115": {
          start: {
            line: 242,
            column: 4
          },
          end: {
            line: 242,
            column: 24
          }
        },
        "116": {
          start: {
            line: 245,
            column: 4
          },
          end: {
            line: 247,
            column: 5
          }
        },
        "117": {
          start: {
            line: 246,
            column: 6
          },
          end: {
            line: 246,
            column: 17
          }
        },
        "118": {
          start: {
            line: 250,
            column: 4
          },
          end: {
            line: 252,
            column: 5
          }
        },
        "119": {
          start: {
            line: 251,
            column: 6
          },
          end: {
            line: 251,
            column: 17
          }
        },
        "120": {
          start: {
            line: 256,
            column: 4
          },
          end: {
            line: 258,
            column: 5
          }
        },
        "121": {
          start: {
            line: 257,
            column: 6
          },
          end: {
            line: 257,
            column: 71
          }
        },
        "122": {
          start: {
            line: 257,
            column: 50
          },
          end: {
            line: 257,
            column: 70
          }
        },
        "123": {
          start: {
            line: 260,
            column: 4
          },
          end: {
            line: 264,
            column: 5
          }
        },
        "124": {
          start: {
            line: 261,
            column: 6
          },
          end: {
            line: 263,
            column: 57
          }
        },
        "125": {
          start: {
            line: 262,
            column: 39
          },
          end: {
            line: 262,
            column: 56
          }
        },
        "126": {
          start: {
            line: 263,
            column: 39
          },
          end: {
            line: 263,
            column: 56
          }
        },
        "127": {
          start: {
            line: 266,
            column: 4
          },
          end: {
            line: 268,
            column: 5
          }
        },
        "128": {
          start: {
            line: 267,
            column: 6
          },
          end: {
            line: 267,
            column: 36
          }
        },
        "129": {
          start: {
            line: 272,
            column: 4
          },
          end: {
            line: 274,
            column: 5
          }
        },
        "130": {
          start: {
            line: 273,
            column: 6
          },
          end: {
            line: 273,
            column: 12
          }
        },
        "131": {
          start: {
            line: 276,
            column: 18
          },
          end: {
            line: 282,
            column: 5
          }
        },
        "132": {
          start: {
            line: 277,
            column: 6
          },
          end: {
            line: 281,
            column: 7
          }
        },
        "133": {
          start: {
            line: 278,
            column: 8
          },
          end: {
            line: 278,
            column: 54
          }
        },
        "134": {
          start: {
            line: 279,
            column: 13
          },
          end: {
            line: 281,
            column: 7
          }
        },
        "135": {
          start: {
            line: 280,
            column: 8
          },
          end: {
            line: 280,
            column: 65
          }
        },
        "136": {
          start: {
            line: 284,
            column: 17
          },
          end: {
            line: 291,
            column: 5
          }
        },
        "137": {
          start: {
            line: 286,
            column: 6
          },
          end: {
            line: 290,
            column: 7
          }
        },
        "138": {
          start: {
            line: 287,
            column: 8
          },
          end: {
            line: 287,
            column: 28
          }
        },
        "139": {
          start: {
            line: 289,
            column: 8
          },
          end: {
            line: 289,
            column: 84
          }
        },
        "140": {
          start: {
            line: 293,
            column: 16
          },
          end: {
            line: 315,
            column: 5
          }
        },
        "141": {
          start: {
            line: 294,
            column: 6
          },
          end: {
            line: 296,
            column: 7
          }
        },
        "142": {
          start: {
            line: 295,
            column: 8
          },
          end: {
            line: 295,
            column: 73
          }
        },
        "143": {
          start: {
            line: 298,
            column: 6
          },
          end: {
            line: 298,
            column: 25
          }
        },
        "144": {
          start: {
            line: 299,
            column: 6
          },
          end: {
            line: 314,
            column: 7
          }
        },
        "145": {
          start: {
            line: 308,
            column: 8
          },
          end: {
            line: 308,
            column: 20
          }
        },
        "146": {
          start: {
            line: 309,
            column: 8
          },
          end: {
            line: 311,
            column: 9
          }
        },
        "147": {
          start: {
            line: 310,
            column: 10
          },
          end: {
            line: 310,
            column: 41
          }
        },
        "148": {
          start: {
            line: 313,
            column: 8
          },
          end: {
            line: 313,
            column: 114
          }
        },
        "149": {
          start: {
            line: 313,
            column: 48
          },
          end: {
            line: 313,
            column: 65
          }
        },
        "150": {
          start: {
            line: 317,
            column: 4
          },
          end: {
            line: 318,
            column: 52
          }
        },
        "151": {
          start: {
            line: 318,
            column: 33
          },
          end: {
            line: 318,
            column: 51
          }
        },
        "152": {
          start: {
            line: 320,
            column: 4
          },
          end: {
            line: 329,
            column: 5
          }
        },
        "153": {
          start: {
            line: 321,
            column: 6
          },
          end: {
            line: 321,
            column: 67
          }
        },
        "154": {
          start: {
            line: 321,
            column: 54
          },
          end: {
            line: 321,
            column: 66
          }
        },
        "155": {
          start: {
            line: 322,
            column: 6
          },
          end: {
            line: 322,
            column: 63
          }
        },
        "156": {
          start: {
            line: 322,
            column: 52
          },
          end: {
            line: 322,
            column: 62
          }
        },
        "157": {
          start: {
            line: 324,
            column: 6
          },
          end: {
            line: 324,
            column: 59
          }
        },
        "158": {
          start: {
            line: 326,
            column: 6
          },
          end: {
            line: 326,
            column: 66
          }
        },
        "159": {
          start: {
            line: 326,
            column: 53
          },
          end: {
            line: 326,
            column: 65
          }
        },
        "160": {
          start: {
            line: 327,
            column: 6
          },
          end: {
            line: 327,
            column: 64
          }
        },
        "161": {
          start: {
            line: 327,
            column: 52
          },
          end: {
            line: 327,
            column: 63
          }
        },
        "162": {
          start: {
            line: 328,
            column: 6
          },
          end: {
            line: 328,
            column: 62
          }
        },
        "163": {
          start: {
            line: 328,
            column: 51
          },
          end: {
            line: 328,
            column: 61
          }
        },
        "164": {
          start: {
            line: 333,
            column: 4
          },
          end: {
            line: 335,
            column: 5
          }
        },
        "165": {
          start: {
            line: 334,
            column: 6
          },
          end: {
            line: 334,
            column: 12
          }
        },
        "166": {
          start: {
            line: 337,
            column: 4
          },
          end: {
            line: 347,
            column: 5
          }
        },
        "167": {
          start: {
            line: 339,
            column: 8
          },
          end: {
            line: 339,
            column: 30
          }
        },
        "168": {
          start: {
            line: 340,
            column: 8
          },
          end: {
            line: 340,
            column: 19
          }
        },
        "169": {
          start: {
            line: 341,
            column: 8
          },
          end: {
            line: 341,
            column: 13
          }
        },
        "170": {
          start: {
            line: 343,
            column: 8
          },
          end: {
            line: 343,
            column: 30
          }
        },
        "171": {
          start: {
            line: 344,
            column: 8
          },
          end: {
            line: 344,
            column: 19
          }
        },
        "172": {
          start: {
            line: 345,
            column: 8
          },
          end: {
            line: 345,
            column: 13
          }
        },
        "173": {
          start: {
            line: 351,
            column: 4
          },
          end: {
            line: 353,
            column: 8
          }
        },
        "174": {
          start: {
            line: 354,
            column: 4
          },
          end: {
            line: 354,
            column: 39
          }
        },
        "175": {
          start: {
            line: 358,
            column: 28
          },
          end: {
            line: 358,
            column: 56
          }
        },
        "176": {
          start: {
            line: 359,
            column: 28
          },
          end: {
            line: 359,
            column: 56
          }
        },
        "177": {
          start: {
            line: 360,
            column: 24
          },
          end: {
            line: 360,
            column: 57
          }
        },
        "178": {
          start: {
            line: 361,
            column: 26
          },
          end: {
            line: 361,
            column: 48
          }
        },
        "179": {
          start: {
            line: 362,
            column: 26
          },
          end: {
            line: 363,
            column: 76
          }
        },
        "180": {
          start: {
            line: 365,
            column: 4
          },
          end: {
            line: 367,
            column: 5
          }
        },
        "181": {
          start: {
            line: 366,
            column: 6
          },
          end: {
            line: 366,
            column: 26
          }
        },
        "182": {
          start: {
            line: 369,
            column: 18
          },
          end: {
            line: 369,
            column: 55
          }
        },
        "183": {
          start: {
            line: 370,
            column: 22
          },
          end: {
            line: 370,
            column: 64
          }
        },
        "184": {
          start: {
            line: 372,
            column: 4
          },
          end: {
            line: 373,
            column: 66
          }
        },
        "185": {
          start: {
            line: 377,
            column: 24
          },
          end: {
            line: 377,
            column: 57
          }
        },
        "186": {
          start: {
            line: 378,
            column: 22
          },
          end: {
            line: 378,
            column: 91
          }
        },
        "187": {
          start: {
            line: 379,
            column: 23
          },
          end: {
            line: 384,
            column: 6
          }
        },
        "188": {
          start: {
            line: 386,
            column: 4
          },
          end: {
            line: 386,
            column: 40
          }
        },
        "189": {
          start: {
            line: 388,
            column: 4
          },
          end: {
            line: 388,
            column: 21
          }
        },
        "190": {
          start: {
            line: 392,
            column: 4
          },
          end: {
            line: 403,
            column: 5
          }
        },
        "191": {
          start: {
            line: 393,
            column: 25
          },
          end: {
            line: 393,
            column: 97
          }
        },
        "192": {
          start: {
            line: 394,
            column: 6
          },
          end: {
            line: 394,
            column: 50
          }
        },
        "193": {
          start: {
            line: 396,
            column: 28
          },
          end: {
            line: 398,
            column: 7
          }
        },
        "194": {
          start: {
            line: 400,
            column: 6
          },
          end: {
            line: 402,
            column: 7
          }
        },
        "195": {
          start: {
            line: 401,
            column: 8
          },
          end: {
            line: 401,
            column: 52
          }
        },
        "196": {
          start: {
            line: 407,
            column: 20
          },
          end: {
            line: 407,
            column: 92
          }
        },
        "197": {
          start: {
            line: 409,
            column: 4
          },
          end: {
            line: 411,
            column: 5
          }
        },
        "198": {
          start: {
            line: 410,
            column: 6
          },
          end: {
            line: 410,
            column: 12
          }
        },
        "199": {
          start: {
            line: 413,
            column: 28
          },
          end: {
            line: 413,
            column: 79
          }
        },
        "200": {
          start: {
            line: 415,
            column: 4
          },
          end: {
            line: 420,
            column: 5
          }
        },
        "201": {
          start: {
            line: 416,
            column: 6
          },
          end: {
            line: 416,
            column: 90
          }
        },
        "202": {
          start: {
            line: 417,
            column: 6
          },
          end: {
            line: 417,
            column: 45
          }
        },
        "203": {
          start: {
            line: 419,
            column: 6
          },
          end: {
            line: 419,
            column: 83
          }
        },
        "204": {
          start: {
            line: 424,
            column: 26
          },
          end: {
            line: 424,
            column: 75
          }
        },
        "205": {
          start: {
            line: 425,
            column: 31
          },
          end: {
            line: 425,
            column: 64
          }
        },
        "206": {
          start: {
            line: 426,
            column: 24
          },
          end: {
            line: 427,
            column: 56
          }
        },
        "207": {
          start: {
            line: 428,
            column: 29
          },
          end: {
            line: 428,
            column: 60
          }
        },
        "208": {
          start: {
            line: 429,
            column: 22
          },
          end: {
            line: 429,
            column: 45
          }
        },
        "209": {
          start: {
            line: 435,
            column: 4
          },
          end: {
            line: 443,
            column: 5
          }
        },
        "210": {
          start: {
            line: 436,
            column: 6
          },
          end: {
            line: 436,
            column: 44
          }
        },
        "211": {
          start: {
            line: 437,
            column: 6
          },
          end: {
            line: 437,
            column: 38
          }
        },
        "212": {
          start: {
            line: 438,
            column: 6
          },
          end: {
            line: 438,
            column: 41
          }
        },
        "213": {
          start: {
            line: 440,
            column: 6
          },
          end: {
            line: 440,
            column: 45
          }
        },
        "214": {
          start: {
            line: 441,
            column: 6
          },
          end: {
            line: 441,
            column: 38
          }
        },
        "215": {
          start: {
            line: 442,
            column: 6
          },
          end: {
            line: 442,
            column: 42
          }
        },
        "216": {
          start: {
            line: 445,
            column: 4
          },
          end: {
            line: 448,
            column: 5
          }
        },
        "217": {
          start: {
            line: 446,
            column: 6
          },
          end: {
            line: 446,
            column: 29
          }
        },
        "218": {
          start: {
            line: 447,
            column: 6
          },
          end: {
            line: 447,
            column: 12
          }
        },
        "219": {
          start: {
            line: 450,
            column: 23
          },
          end: {
            line: 450,
            column: 79
          }
        },
        "220": {
          start: {
            line: 451,
            column: 4
          },
          end: {
            line: 453,
            column: 5
          }
        },
        "221": {
          start: {
            line: 452,
            column: 6
          },
          end: {
            line: 452,
            column: 12
          }
        },
        "222": {
          start: {
            line: 455,
            column: 4
          },
          end: {
            line: 458,
            column: 5
          }
        },
        "223": {
          start: {
            line: 457,
            column: 6
          },
          end: {
            line: 457,
            column: 12
          }
        },
        "224": {
          start: {
            line: 460,
            column: 4
          },
          end: {
            line: 460,
            column: 26
          }
        },
        "225": {
          start: {
            line: 462,
            column: 4
          },
          end: {
            line: 464,
            column: 5
          }
        },
        "226": {
          start: {
            line: 463,
            column: 6
          },
          end: {
            line: 463,
            column: 18
          }
        },
        "227": {
          start: {
            line: 466,
            column: 4
          },
          end: {
            line: 466,
            column: 48
          }
        },
        "228": {
          start: {
            line: 467,
            column: 4
          },
          end: {
            line: 467,
            column: 37
          }
        },
        "229": {
          start: {
            line: 469,
            column: 22
          },
          end: {
            line: 474,
            column: 6
          }
        },
        "230": {
          start: {
            line: 476,
            column: 4
          },
          end: {
            line: 505,
            column: 5
          }
        },
        "231": {
          start: {
            line: 477,
            column: 6
          },
          end: {
            line: 477,
            column: 45
          }
        },
        "232": {
          start: {
            line: 479,
            column: 6
          },
          end: {
            line: 479,
            column: 30
          }
        },
        "233": {
          start: {
            line: 481,
            column: 6
          },
          end: {
            line: 481,
            column: 53
          }
        },
        "234": {
          start: {
            line: 482,
            column: 6
          },
          end: {
            line: 482,
            column: 51
          }
        },
        "235": {
          start: {
            line: 484,
            column: 33
          },
          end: {
            line: 484,
            column: 85
          }
        },
        "236": {
          start: {
            line: 486,
            column: 6
          },
          end: {
            line: 498,
            column: 49
          }
        },
        "237": {
          start: {
            line: 488,
            column: 10
          },
          end: {
            line: 490,
            column: 40
          }
        },
        "238": {
          start: {
            line: 492,
            column: 10
          },
          end: {
            line: 492,
            column: 104
          }
        },
        "239": {
          start: {
            line: 494,
            column: 10
          },
          end: {
            line: 494,
            column: 33
          }
        },
        "240": {
          start: {
            line: 496,
            column: 10
          },
          end: {
            line: 496,
            column: 66
          }
        },
        "241": {
          start: {
            line: 496,
            column: 27
          },
          end: {
            line: 496,
            column: 62
          }
        },
        "242": {
          start: {
            line: 500,
            column: 6
          },
          end: {
            line: 500,
            column: 53
          }
        },
        "243": {
          start: {
            line: 501,
            column: 6
          },
          end: {
            line: 501,
            column: 48
          }
        },
        "244": {
          start: {
            line: 503,
            column: 6
          },
          end: {
            line: 503,
            column: 29
          }
        },
        "245": {
          start: {
            line: 504,
            column: 6
          },
          end: {
            line: 504,
            column: 41
          }
        },
        "246": {
          start: {
            line: 507,
            column: 4
          },
          end: {
            line: 509,
            column: 5
          }
        },
        "247": {
          start: {
            line: 508,
            column: 6
          },
          end: {
            line: 508,
            column: 18
          }
        },
        "248": {
          start: {
            line: 515,
            column: 4
          },
          end: {
            line: 548,
            column: 6
          }
        },
        "249": {
          start: {
            line: 516,
            column: 17
          },
          end: {
            line: 516,
            column: 39
          }
        },
        "250": {
          start: {
            line: 517,
            column: 20
          },
          end: {
            line: 520,
            column: 7
          }
        },
        "251": {
          start: {
            line: 522,
            column: 6
          },
          end: {
            line: 527,
            column: 7
          }
        },
        "252": {
          start: {
            line: 523,
            column: 8
          },
          end: {
            line: 526,
            column: 9
          }
        },
        "253": {
          start: {
            line: 529,
            column: 21
          },
          end: {
            line: 529,
            column: 72
          }
        },
        "254": {
          start: {
            line: 531,
            column: 6
          },
          end: {
            line: 534,
            column: 7
          }
        },
        "255": {
          start: {
            line: 532,
            column: 8
          },
          end: {
            line: 532,
            column: 42
          }
        },
        "256": {
          start: {
            line: 533,
            column: 8
          },
          end: {
            line: 533,
            column: 36
          }
        },
        "257": {
          start: {
            line: 536,
            column: 6
          },
          end: {
            line: 547,
            column: 7
          }
        },
        "258": {
          start: {
            line: 537,
            column: 8
          },
          end: {
            line: 537,
            column: 23
          }
        },
        "259": {
          start: {
            line: 538,
            column: 13
          },
          end: {
            line: 547,
            column: 7
          }
        },
        "260": {
          start: {
            line: 539,
            column: 8
          },
          end: {
            line: 541,
            column: 9
          }
        },
        "261": {
          start: {
            line: 540,
            column: 10
          },
          end: {
            line: 540,
            column: 60
          }
        },
        "262": {
          start: {
            line: 543,
            column: 8
          },
          end: {
            line: 543,
            column: 22
          }
        },
        "263": {
          start: {
            line: 544,
            column: 13
          },
          end: {
            line: 547,
            column: 7
          }
        },
        "264": {
          start: {
            line: 545,
            column: 8
          },
          end: {
            line: 545,
            column: 20
          }
        },
        "265": {
          start: {
            line: 546,
            column: 8
          },
          end: {
            line: 546,
            column: 20
          }
        },
        "266": {
          start: {
            line: 552,
            column: 21
          },
          end: {
            line: 552,
            column: 54
          }
        },
        "267": {
          start: {
            line: 554,
            column: 4
          },
          end: {
            line: 556,
            column: 5
          }
        },
        "268": {
          start: {
            line: 555,
            column: 6
          },
          end: {
            line: 555,
            column: 12
          }
        },
        "269": {
          start: {
            line: 558,
            column: 19
          },
          end: {
            line: 558,
            column: 33
          }
        },
        "270": {
          start: {
            line: 560,
            column: 4
          },
          end: {
            line: 562,
            column: 5
          }
        },
        "271": {
          start: {
            line: 561,
            column: 6
          },
          end: {
            line: 561,
            column: 12
          }
        },
        "272": {
          start: {
            line: 564,
            column: 19
          },
          end: {
            line: 567,
            column: 5
          }
        },
        "273": {
          start: {
            line: 568,
            column: 23
          },
          end: {
            line: 568,
            column: 57
          }
        },
        "274": {
          start: {
            line: 570,
            column: 4
          },
          end: {
            line: 572,
            column: 5
          }
        },
        "275": {
          start: {
            line: 571,
            column: 6
          },
          end: {
            line: 571,
            column: 29
          }
        },
        "276": {
          start: {
            line: 574,
            column: 4
          },
          end: {
            line: 574,
            column: 53
          }
        },
        "277": {
          start: {
            line: 576,
            column: 4
          },
          end: {
            line: 578,
            column: 5
          }
        },
        "278": {
          start: {
            line: 577,
            column: 6
          },
          end: {
            line: 577,
            column: 45
          }
        },
        "279": {
          start: {
            line: 580,
            column: 4
          },
          end: {
            line: 580,
            column: 26
          }
        },
        "280": {
          start: {
            line: 590,
            column: 0
          },
          end: {
            line: 590,
            column: 88
          }
        },
        "281": {
          start: {
            line: 592,
            column: 0
          },
          end: {
            line: 598,
            column: 2
          }
        },
        "282": {
          start: {
            line: 593,
            column: 20
          },
          end: {
            line: 593,
            column: 80
          }
        },
        "283": {
          start: {
            line: 594,
            column: 2
          },
          end: {
            line: 597,
            column: 3
          }
        },
        "284": {
          start: {
            line: 594,
            column: 15
          },
          end: {
            line: 594,
            column: 16
          }
        },
        "285": {
          start: {
            line: 594,
            column: 24
          },
          end: {
            line: 594,
            column: 40
          }
        },
        "286": {
          start: {
            line: 595,
            column: 22
          },
          end: {
            line: 595,
            column: 37
          }
        },
        "287": {
          start: {
            line: 596,
            column: 4
          },
          end: {
            line: 596,
            column: 63
          }
        },
        "288": {
          start: {
            line: 606,
            column: 0
          },
          end: {
            line: 606,
            column: 38
          }
        },
        "289": {
          start: {
            line: 607,
            column: 0
          },
          end: {
            line: 607,
            column: 33
          }
        },
        "290": {
          start: {
            line: 608,
            column: 0
          },
          end: {
            line: 611,
            column: 1
          }
        },
        "291": {
          start: {
            line: 609,
            column: 2
          },
          end: {
            line: 609,
            column: 33
          }
        },
        "292": {
          start: {
            line: 610,
            column: 2
          },
          end: {
            line: 610,
            column: 34
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
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
              column: 31
            },
            end: {
              line: 111,
              column: 3
            }
          },
          line: 94
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 115,
              column: 2
            },
            end: {
              line: 115,
              column: 3
            }
          },
          loc: {
            start: {
              line: 115,
              column: 23
            },
            end: {
              line: 117,
              column: 3
            }
          },
          line: 115
        },
        "2": {
          name: "(anonymous_2)",
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
              column: 23
            },
            end: {
              line: 121,
              column: 3
            }
          },
          line: 119
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 125,
              column: 2
            },
            end: {
              line: 125,
              column: 3
            }
          },
          loc: {
            start: {
              line: 125,
              column: 9
            },
            end: {
              line: 129,
              column: 3
            }
          },
          line: 125
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 131,
              column: 2
            },
            end: {
              line: 131,
              column: 3
            }
          },
          loc: {
            start: {
              line: 131,
              column: 20
            },
            end: {
              line: 139,
              column: 3
            }
          },
          line: 131
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 141,
              column: 2
            },
            end: {
              line: 141,
              column: 3
            }
          },
          loc: {
            start: {
              line: 141,
              column: 9
            },
            end: {
              line: 145,
              column: 3
            }
          },
          line: 141
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 147,
              column: 2
            },
            end: {
              line: 147,
              column: 3
            }
          },
          loc: {
            start: {
              line: 147,
              column: 15
            },
            end: {
              line: 159,
              column: 3
            }
          },
          line: 147
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 161,
              column: 2
            },
            end: {
              line: 161,
              column: 3
            }
          },
          loc: {
            start: {
              line: 161,
              column: 15
            },
            end: {
              line: 179,
              column: 3
            }
          },
          line: 161
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 181,
              column: 2
            },
            end: {
              line: 181,
              column: 3
            }
          },
          loc: {
            start: {
              line: 181,
              column: 12
            },
            end: {
              line: 206,
              column: 3
            }
          },
          line: 181
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 191,
              column: 39
            },
            end: {
              line: 191,
              column: 40
            }
          },
          loc: {
            start: {
              line: 191,
              column: 45
            },
            end: {
              line: 191,
              column: 59
            }
          },
          line: 191
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 208,
              column: 2
            },
            end: {
              line: 208,
              column: 3
            }
          },
          loc: {
            start: {
              line: 208,
              column: 12
            },
            end: {
              line: 220,
              column: 3
            }
          },
          line: 208
        },
        "11": {
          name: "(anonymous_11)",
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
              column: 21
            },
            end: {
              line: 231,
              column: 3
            }
          },
          line: 224
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 233,
              column: 2
            },
            end: {
              line: 233,
              column: 3
            }
          },
          loc: {
            start: {
              line: 233,
              column: 17
            },
            end: {
              line: 253,
              column: 3
            }
          },
          line: 233
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 255,
              column: 2
            },
            end: {
              line: 255,
              column: 3
            }
          },
          loc: {
            start: {
              line: 255,
              column: 23
            },
            end: {
              line: 269,
              column: 3
            }
          },
          line: 255
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 257,
              column: 41
            },
            end: {
              line: 257,
              column: 42
            }
          },
          loc: {
            start: {
              line: 257,
              column: 50
            },
            end: {
              line: 257,
              column: 70
            }
          },
          line: 257
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 262,
              column: 30
            },
            end: {
              line: 262,
              column: 31
            }
          },
          loc: {
            start: {
              line: 262,
              column: 39
            },
            end: {
              line: 262,
              column: 56
            }
          },
          line: 262
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 263,
              column: 30
            },
            end: {
              line: 263,
              column: 31
            }
          },
          loc: {
            start: {
              line: 263,
              column: 39
            },
            end: {
              line: 263,
              column: 56
            }
          },
          line: 263
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 271,
              column: 2
            },
            end: {
              line: 271,
              column: 3
            }
          },
          loc: {
            start: {
              line: 271,
              column: 28
            },
            end: {
              line: 330,
              column: 3
            }
          },
          line: 271
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 276,
              column: 18
            },
            end: {
              line: 276,
              column: 19
            }
          },
          loc: {
            start: {
              line: 276,
              column: 27
            },
            end: {
              line: 282,
              column: 5
            }
          },
          line: 276
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 284,
              column: 17
            },
            end: {
              line: 284,
              column: 18
            }
          },
          loc: {
            start: {
              line: 284,
              column: 26
            },
            end: {
              line: 291,
              column: 5
            }
          },
          line: 284
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 293,
              column: 16
            },
            end: {
              line: 293,
              column: 17
            }
          },
          loc: {
            start: {
              line: 293,
              column: 25
            },
            end: {
              line: 315,
              column: 5
            }
          },
          line: 293
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 313,
              column: 39
            },
            end: {
              line: 313,
              column: 40
            }
          },
          loc: {
            start: {
              line: 313,
              column: 48
            },
            end: {
              line: 313,
              column: 65
            }
          },
          line: 313
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 318,
              column: 28
            },
            end: {
              line: 318,
              column: 29
            }
          },
          loc: {
            start: {
              line: 318,
              column: 33
            },
            end: {
              line: 318,
              column: 51
            }
          },
          line: 318
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 321,
              column: 45
            },
            end: {
              line: 321,
              column: 46
            }
          },
          loc: {
            start: {
              line: 321,
              column: 54
            },
            end: {
              line: 321,
              column: 66
            }
          },
          line: 321
        },
        "24": {
          name: "(anonymous_24)",
          decl: {
            start: {
              line: 322,
              column: 43
            },
            end: {
              line: 322,
              column: 44
            }
          },
          loc: {
            start: {
              line: 322,
              column: 52
            },
            end: {
              line: 322,
              column: 62
            }
          },
          line: 322
        },
        "25": {
          name: "(anonymous_25)",
          decl: {
            start: {
              line: 326,
              column: 44
            },
            end: {
              line: 326,
              column: 45
            }
          },
          loc: {
            start: {
              line: 326,
              column: 53
            },
            end: {
              line: 326,
              column: 65
            }
          },
          line: 326
        },
        "26": {
          name: "(anonymous_26)",
          decl: {
            start: {
              line: 327,
              column: 43
            },
            end: {
              line: 327,
              column: 44
            }
          },
          loc: {
            start: {
              line: 327,
              column: 52
            },
            end: {
              line: 327,
              column: 63
            }
          },
          line: 327
        },
        "27": {
          name: "(anonymous_27)",
          decl: {
            start: {
              line: 328,
              column: 42
            },
            end: {
              line: 328,
              column: 43
            }
          },
          loc: {
            start: {
              line: 328,
              column: 51
            },
            end: {
              line: 328,
              column: 61
            }
          },
          line: 328
        },
        "28": {
          name: "(anonymous_28)",
          decl: {
            start: {
              line: 332,
              column: 2
            },
            end: {
              line: 332,
              column: 3
            }
          },
          loc: {
            start: {
              line: 332,
              column: 18
            },
            end: {
              line: 348,
              column: 3
            }
          },
          line: 332
        },
        "29": {
          name: "(anonymous_29)",
          decl: {
            start: {
              line: 350,
              column: 2
            },
            end: {
              line: 350,
              column: 3
            }
          },
          loc: {
            start: {
              line: 350,
              column: 25
            },
            end: {
              line: 355,
              column: 3
            }
          },
          line: 350
        },
        "30": {
          name: "(anonymous_30)",
          decl: {
            start: {
              line: 357,
              column: 2
            },
            end: {
              line: 357,
              column: 3
            }
          },
          loc: {
            start: {
              line: 357,
              column: 48
            },
            end: {
              line: 374,
              column: 3
            }
          },
          line: 357
        },
        "31": {
          name: "(anonymous_31)",
          decl: {
            start: {
              line: 376,
              column: 2
            },
            end: {
              line: 376,
              column: 3
            }
          },
          loc: {
            start: {
              line: 376,
              column: 56
            },
            end: {
              line: 389,
              column: 3
            }
          },
          line: 376
        },
        "32": {
          name: "(anonymous_32)",
          decl: {
            start: {
              line: 391,
              column: 2
            },
            end: {
              line: 391,
              column: 3
            }
          },
          loc: {
            start: {
              line: 391,
              column: 38
            },
            end: {
              line: 404,
              column: 3
            }
          },
          line: 391
        },
        "33": {
          name: "(anonymous_33)",
          decl: {
            start: {
              line: 406,
              column: 2
            },
            end: {
              line: 406,
              column: 3
            }
          },
          loc: {
            start: {
              line: 406,
              column: 20
            },
            end: {
              line: 421,
              column: 3
            }
          },
          line: 406
        },
        "34": {
          name: "(anonymous_34)",
          decl: {
            start: {
              line: 423,
              column: 2
            },
            end: {
              line: 423,
              column: 3
            }
          },
          loc: {
            start: {
              line: 423,
              column: 29
            },
            end: {
              line: 510,
              column: 3
            }
          },
          line: 423
        },
        "35": {
          name: "(anonymous_35)",
          decl: {
            start: {
              line: 487,
              column: 34
            },
            end: {
              line: 487,
              column: 35
            }
          },
          loc: {
            start: {
              line: 487,
              column: 40
            },
            end: {
              line: 497,
              column: 9
            }
          },
          line: 487
        },
        "36": {
          name: "(anonymous_36)",
          decl: {
            start: {
              line: 496,
              column: 21
            },
            end: {
              line: 496,
              column: 22
            }
          },
          loc: {
            start: {
              line: 496,
              column: 27
            },
            end: {
              line: 496,
              column: 62
            }
          },
          line: 496
        },
        "37": {
          name: "(anonymous_37)",
          decl: {
            start: {
              line: 514,
              column: 2
            },
            end: {
              line: 514,
              column: 3
            }
          },
          loc: {
            start: {
              line: 514,
              column: 34
            },
            end: {
              line: 549,
              column: 3
            }
          },
          line: 514
        },
        "38": {
          name: "(anonymous_38)",
          decl: {
            start: {
              line: 515,
              column: 21
            },
            end: {
              line: 515,
              column: 22
            }
          },
          loc: {
            start: {
              line: 515,
              column: 33
            },
            end: {
              line: 548,
              column: 5
            }
          },
          line: 515
        },
        "39": {
          name: "(anonymous_39)",
          decl: {
            start: {
              line: 551,
              column: 2
            },
            end: {
              line: 551,
              column: 3
            }
          },
          loc: {
            start: {
              line: 551,
              column: 37
            },
            end: {
              line: 581,
              column: 3
            }
          },
          line: 551
        },
        "40": {
          name: "(anonymous_40)",
          decl: {
            start: {
              line: 592,
              column: 34
            },
            end: {
              line: 592,
              column: 35
            }
          },
          loc: {
            start: {
              line: 592,
              column: 40
            },
            end: {
              line: 598,
              column: 1
            }
          },
          line: 592
        },
        "41": {
          name: "(anonymous_41)",
          decl: {
            start: {
              line: 608,
              column: 24
            },
            end: {
              line: 608,
              column: 25
            }
          },
          loc: {
            start: {
              line: 608,
              column: 30
            },
            end: {
              line: 611,
              column: 1
            }
          },
          line: 608
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 107,
              column: 27
            },
            end: {
              line: 107,
              column: 101
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 107,
              column: 27
            },
            end: {
              line: 107,
              column: 69
            }
          }, {
            start: {
              line: 107,
              column: 73
            },
            end: {
              line: 107,
              column: 101
            }
          }],
          line: 107
        },
        "1": {
          loc: {
            start: {
              line: 108,
              column: 33
            },
            end: {
              line: 108,
              column: 77
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 108,
              column: 33
            },
            end: {
              line: 108,
              column: 52
            }
          }, {
            start: {
              line: 108,
              column: 56
            },
            end: {
              line: 108,
              column: 77
            }
          }],
          line: 108
        },
        "2": {
          loc: {
            start: {
              line: 126,
              column: 4
            },
            end: {
              line: 128,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 126,
              column: 4
            },
            end: {
              line: 128,
              column: 5
            }
          }, {
            start: {
              line: 126,
              column: 4
            },
            end: {
              line: 128,
              column: 5
            }
          }],
          line: 126
        },
        "3": {
          loc: {
            start: {
              line: 135,
              column: 4
            },
            end: {
              line: 138,
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
              line: 138,
              column: 5
            }
          }, {
            start: {
              line: 135,
              column: 4
            },
            end: {
              line: 138,
              column: 5
            }
          }],
          line: 135
        },
        "4": {
          loc: {
            start: {
              line: 135,
              column: 8
            },
            end: {
              line: 136,
              column: 74
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 135,
              column: 8
            },
            end: {
              line: 135,
              column: 24
            }
          }, {
            start: {
              line: 136,
              column: 7
            },
            end: {
              line: 136,
              column: 30
            }
          }, {
            start: {
              line: 136,
              column: 34
            },
            end: {
              line: 136,
              column: 73
            }
          }],
          line: 135
        },
        "5": {
          loc: {
            start: {
              line: 142,
              column: 4
            },
            end: {
              line: 144,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 142,
              column: 4
            },
            end: {
              line: 144,
              column: 5
            }
          }, {
            start: {
              line: 142,
              column: 4
            },
            end: {
              line: 144,
              column: 5
            }
          }],
          line: 142
        },
        "6": {
          loc: {
            start: {
              line: 148,
              column: 4
            },
            end: {
              line: 150,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 148,
              column: 4
            },
            end: {
              line: 150,
              column: 5
            }
          }, {
            start: {
              line: 148,
              column: 4
            },
            end: {
              line: 150,
              column: 5
            }
          }],
          line: 148
        },
        "7": {
          loc: {
            start: {
              line: 152,
              column: 4
            },
            end: {
              line: 155,
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
              line: 155,
              column: 5
            }
          }, {
            start: {
              line: 152,
              column: 4
            },
            end: {
              line: 155,
              column: 5
            }
          }],
          line: 152
        },
        "8": {
          loc: {
            start: {
              line: 162,
              column: 4
            },
            end: {
              line: 164,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 162,
              column: 4
            },
            end: {
              line: 164,
              column: 5
            }
          }, {
            start: {
              line: 162,
              column: 4
            },
            end: {
              line: 164,
              column: 5
            }
          }],
          line: 162
        },
        "9": {
          loc: {
            start: {
              line: 166,
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
              line: 166,
              column: 4
            },
            end: {
              line: 169,
              column: 5
            }
          }, {
            start: {
              line: 166,
              column: 4
            },
            end: {
              line: 169,
              column: 5
            }
          }],
          line: 166
        },
        "10": {
          loc: {
            start: {
              line: 171,
              column: 4
            },
            end: {
              line: 178,
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
              line: 178,
              column: 5
            }
          }, {
            start: {
              line: 171,
              column: 4
            },
            end: {
              line: 178,
              column: 5
            }
          }],
          line: 171
        },
        "11": {
          loc: {
            start: {
              line: 171,
              column: 8
            },
            end: {
              line: 171,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 171,
              column: 8
            },
            end: {
              line: 171,
              column: 29
            }
          }, {
            start: {
              line: 171,
              column: 33
            },
            end: {
              line: 171,
              column: 48
            }
          }],
          line: 171
        },
        "12": {
          loc: {
            start: {
              line: 175,
              column: 9
            },
            end: {
              line: 175,
              column: 68
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 175,
              column: 36
            },
            end: {
              line: 175,
              column: 56
            }
          }, {
            start: {
              line: 175,
              column: 59
            },
            end: {
              line: 175,
              column: 68
            }
          }],
          line: 175
        },
        "13": {
          loc: {
            start: {
              line: 186,
              column: 4
            },
            end: {
              line: 188,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 186,
              column: 4
            },
            end: {
              line: 188,
              column: 5
            }
          }, {
            start: {
              line: 186,
              column: 4
            },
            end: {
              line: 188,
              column: 5
            }
          }],
          line: 186
        },
        "14": {
          loc: {
            start: {
              line: 186,
              column: 8
            },
            end: {
              line: 186,
              column: 51
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 186,
              column: 8
            },
            end: {
              line: 186,
              column: 38
            }
          }, {
            start: {
              line: 186,
              column: 42
            },
            end: {
              line: 186,
              column: 51
            }
          }],
          line: 186
        },
        "15": {
          loc: {
            start: {
              line: 190,
              column: 4
            },
            end: {
              line: 193,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 190,
              column: 4
            },
            end: {
              line: 193,
              column: 5
            }
          }, {
            start: {
              line: 190,
              column: 4
            },
            end: {
              line: 193,
              column: 5
            }
          }],
          line: 190
        },
        "16": {
          loc: {
            start: {
              line: 195,
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
              line: 195,
              column: 4
            },
            end: {
              line: 199,
              column: 5
            }
          }, {
            start: {
              line: 195,
              column: 4
            },
            end: {
              line: 199,
              column: 5
            }
          }],
          line: 195
        },
        "17": {
          loc: {
            start: {
              line: 201,
              column: 22
            },
            end: {
              line: 203,
              column: 20
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 202,
              column: 6
            },
            end: {
              line: 202,
              column: 20
            }
          }, {
            start: {
              line: 203,
              column: 6
            },
            end: {
              line: 203,
              column: 20
            }
          }],
          line: 201
        },
        "18": {
          loc: {
            start: {
              line: 236,
              column: 4
            },
            end: {
              line: 238,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 236,
              column: 4
            },
            end: {
              line: 238,
              column: 5
            }
          }, {
            start: {
              line: 236,
              column: 4
            },
            end: {
              line: 238,
              column: 5
            }
          }],
          line: 236
        },
        "19": {
          loc: {
            start: {
              line: 245,
              column: 4
            },
            end: {
              line: 247,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 245,
              column: 4
            },
            end: {
              line: 247,
              column: 5
            }
          }, {
            start: {
              line: 245,
              column: 4
            },
            end: {
              line: 247,
              column: 5
            }
          }],
          line: 245
        },
        "20": {
          loc: {
            start: {
              line: 250,
              column: 4
            },
            end: {
              line: 252,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 250,
              column: 4
            },
            end: {
              line: 252,
              column: 5
            }
          }, {
            start: {
              line: 250,
              column: 4
            },
            end: {
              line: 252,
              column: 5
            }
          }],
          line: 250
        },
        "21": {
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
        "22": {
          loc: {
            start: {
              line: 260,
              column: 4
            },
            end: {
              line: 264,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 260,
              column: 4
            },
            end: {
              line: 264,
              column: 5
            }
          }, {
            start: {
              line: 260,
              column: 4
            },
            end: {
              line: 264,
              column: 5
            }
          }],
          line: 260
        },
        "23": {
          loc: {
            start: {
              line: 266,
              column: 4
            },
            end: {
              line: 268,
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
              line: 268,
              column: 5
            }
          }, {
            start: {
              line: 266,
              column: 4
            },
            end: {
              line: 268,
              column: 5
            }
          }],
          line: 266
        },
        "24": {
          loc: {
            start: {
              line: 272,
              column: 4
            },
            end: {
              line: 274,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 272,
              column: 4
            },
            end: {
              line: 274,
              column: 5
            }
          }, {
            start: {
              line: 272,
              column: 4
            },
            end: {
              line: 274,
              column: 5
            }
          }],
          line: 272
        },
        "25": {
          loc: {
            start: {
              line: 277,
              column: 6
            },
            end: {
              line: 281,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 277,
              column: 6
            },
            end: {
              line: 281,
              column: 7
            }
          }, {
            start: {
              line: 277,
              column: 6
            },
            end: {
              line: 281,
              column: 7
            }
          }],
          line: 277
        },
        "26": {
          loc: {
            start: {
              line: 277,
              column: 10
            },
            end: {
              line: 277,
              column: 90
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 277,
              column: 10
            },
            end: {
              line: 277,
              column: 28
            }
          }, {
            start: {
              line: 277,
              column: 32
            },
            end: {
              line: 277,
              column: 90
            }
          }],
          line: 277
        },
        "27": {
          loc: {
            start: {
              line: 279,
              column: 13
            },
            end: {
              line: 281,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 279,
              column: 13
            },
            end: {
              line: 281,
              column: 7
            }
          }, {
            start: {
              line: 279,
              column: 13
            },
            end: {
              line: 281,
              column: 7
            }
          }],
          line: 279
        },
        "28": {
          loc: {
            start: {
              line: 286,
              column: 6
            },
            end: {
              line: 290,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 286,
              column: 6
            },
            end: {
              line: 290,
              column: 7
            }
          }, {
            start: {
              line: 286,
              column: 6
            },
            end: {
              line: 290,
              column: 7
            }
          }],
          line: 286
        },
        "29": {
          loc: {
            start: {
              line: 286,
              column: 10
            },
            end: {
              line: 286,
              column: 79
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 286,
              column: 10
            },
            end: {
              line: 286,
              column: 37
            }
          }, {
            start: {
              line: 286,
              column: 41
            },
            end: {
              line: 286,
              column: 79
            }
          }],
          line: 286
        },
        "30": {
          loc: {
            start: {
              line: 294,
              column: 6
            },
            end: {
              line: 296,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 294,
              column: 6
            },
            end: {
              line: 296,
              column: 7
            }
          }, {
            start: {
              line: 294,
              column: 6
            },
            end: {
              line: 296,
              column: 7
            }
          }],
          line: 294
        },
        "31": {
          loc: {
            start: {
              line: 294,
              column: 10
            },
            end: {
              line: 294,
              column: 90
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 294,
              column: 10
            },
            end: {
              line: 294,
              column: 28
            }
          }, {
            start: {
              line: 294,
              column: 32
            },
            end: {
              line: 294,
              column: 90
            }
          }],
          line: 294
        },
        "32": {
          loc: {
            start: {
              line: 299,
              column: 6
            },
            end: {
              line: 314,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 299,
              column: 6
            },
            end: {
              line: 314,
              column: 7
            }
          }, {
            start: {
              line: 299,
              column: 6
            },
            end: {
              line: 314,
              column: 7
            }
          }],
          line: 299
        },
        "33": {
          loc: {
            start: {
              line: 309,
              column: 8
            },
            end: {
              line: 311,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 309,
              column: 8
            },
            end: {
              line: 311,
              column: 9
            }
          }, {
            start: {
              line: 309,
              column: 8
            },
            end: {
              line: 311,
              column: 9
            }
          }],
          line: 309
        },
        "34": {
          loc: {
            start: {
              line: 320,
              column: 4
            },
            end: {
              line: 329,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 320,
              column: 4
            },
            end: {
              line: 329,
              column: 5
            }
          }, {
            start: {
              line: 320,
              column: 4
            },
            end: {
              line: 329,
              column: 5
            }
          }],
          line: 320
        },
        "35": {
          loc: {
            start: {
              line: 333,
              column: 4
            },
            end: {
              line: 335,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 333,
              column: 4
            },
            end: {
              line: 335,
              column: 5
            }
          }, {
            start: {
              line: 333,
              column: 4
            },
            end: {
              line: 335,
              column: 5
            }
          }],
          line: 333
        },
        "36": {
          loc: {
            start: {
              line: 337,
              column: 4
            },
            end: {
              line: 347,
              column: 5
            }
          },
          type: "switch",
          locations: [{
            start: {
              line: 338,
              column: 6
            },
            end: {
              line: 341,
              column: 13
            }
          }, {
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
              line: 346,
              column: 14
            }
          }],
          line: 337
        },
        "37": {
          loc: {
            start: {
              line: 351,
              column: 18
            },
            end: {
              line: 353,
              column: 8
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 352,
              column: 6
            },
            end: {
              line: 352,
              column: 71
            }
          }, {
            start: {
              line: 353,
              column: 6
            },
            end: {
              line: 353,
              column: 8
            }
          }],
          line: 351
        },
        "38": {
          loc: {
            start: {
              line: 351,
              column: 18
            },
            end: {
              line: 351,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 351,
              column: 18
            },
            end: {
              line: 351,
              column: 25
            }
          }, {
            start: {
              line: 351,
              column: 29
            },
            end: {
              line: 351,
              column: 47
            }
          }],
          line: 351
        },
        "39": {
          loc: {
            start: {
              line: 362,
              column: 26
            },
            end: {
              line: 363,
              column: 76
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 362,
              column: 26
            },
            end: {
              line: 362,
              column: 41
            }
          }, {
            start: {
              line: 362,
              column: 45
            },
            end: {
              line: 362,
              column: 62
            }
          }, {
            start: {
              line: 363,
              column: 28
            },
            end: {
              line: 363,
              column: 43
            }
          }, {
            start: {
              line: 363,
              column: 47
            },
            end: {
              line: 363,
              column: 76
            }
          }],
          line: 362
        },
        "40": {
          loc: {
            start: {
              line: 365,
              column: 4
            },
            end: {
              line: 367,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 365,
              column: 4
            },
            end: {
              line: 367,
              column: 5
            }
          }, {
            start: {
              line: 365,
              column: 4
            },
            end: {
              line: 367,
              column: 5
            }
          }],
          line: 365
        },
        "41": {
          loc: {
            start: {
              line: 365,
              column: 8
            },
            end: {
              line: 365,
              column: 43
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 365,
              column: 8
            },
            end: {
              line: 365,
              column: 21
            }
          }, {
            start: {
              line: 365,
              column: 25
            },
            end: {
              line: 365,
              column: 43
            }
          }],
          line: 365
        },
        "42": {
          loc: {
            start: {
              line: 369,
              column: 18
            },
            end: {
              line: 369,
              column: 55
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 369,
              column: 49
            },
            end: {
              line: 369,
              column: 51
            }
          }, {
            start: {
              line: 369,
              column: 54
            },
            end: {
              line: 369,
              column: 55
            }
          }],
          line: 369
        },
        "43": {
          loc: {
            start: {
              line: 372,
              column: 11
            },
            end: {
              line: 373,
              column: 66
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 373,
              column: 6
            },
            end: {
              line: 373,
              column: 41
            }
          }, {
            start: {
              line: 373,
              column: 44
            },
            end: {
              line: 373,
              column: 66
            }
          }],
          line: 372
        },
        "44": {
          loc: {
            start: {
              line: 392,
              column: 4
            },
            end: {
              line: 403,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 392,
              column: 4
            },
            end: {
              line: 403,
              column: 5
            }
          }, {
            start: {
              line: 392,
              column: 4
            },
            end: {
              line: 403,
              column: 5
            }
          }],
          line: 392
        },
        "45": {
          loc: {
            start: {
              line: 400,
              column: 6
            },
            end: {
              line: 402,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 400,
              column: 6
            },
            end: {
              line: 402,
              column: 7
            }
          }, {
            start: {
              line: 400,
              column: 6
            },
            end: {
              line: 402,
              column: 7
            }
          }],
          line: 400
        },
        "46": {
          loc: {
            start: {
              line: 407,
              column: 20
            },
            end: {
              line: 407,
              column: 92
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 407,
              column: 20
            },
            end: {
              line: 407,
              column: 39
            }
          }, {
            start: {
              line: 407,
              column: 43
            },
            end: {
              line: 407,
              column: 92
            }
          }],
          line: 407
        },
        "47": {
          loc: {
            start: {
              line: 409,
              column: 4
            },
            end: {
              line: 411,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 409,
              column: 4
            },
            end: {
              line: 411,
              column: 5
            }
          }, {
            start: {
              line: 409,
              column: 4
            },
            end: {
              line: 411,
              column: 5
            }
          }],
          line: 409
        },
        "48": {
          loc: {
            start: {
              line: 415,
              column: 4
            },
            end: {
              line: 420,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 415,
              column: 4
            },
            end: {
              line: 420,
              column: 5
            }
          }, {
            start: {
              line: 415,
              column: 4
            },
            end: {
              line: 420,
              column: 5
            }
          }],
          line: 415
        },
        "49": {
          loc: {
            start: {
              line: 416,
              column: 37
            },
            end: {
              line: 416,
              column: 90
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 416,
              column: 37
            },
            end: {
              line: 416,
              column: 65
            }
          }, {
            start: {
              line: 416,
              column: 69
            },
            end: {
              line: 416,
              column: 90
            }
          }],
          line: 416
        },
        "50": {
          loc: {
            start: {
              line: 419,
              column: 30
            },
            end: {
              line: 419,
              column: 83
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 419,
              column: 30
            },
            end: {
              line: 419,
              column: 58
            }
          }, {
            start: {
              line: 419,
              column: 62
            },
            end: {
              line: 419,
              column: 83
            }
          }],
          line: 419
        },
        "51": {
          loc: {
            start: {
              line: 426,
              column: 24
            },
            end: {
              line: 427,
              column: 56
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 426,
              column: 24
            },
            end: {
              line: 426,
              column: 31
            }
          }, {
            start: {
              line: 426,
              column: 35
            },
            end: {
              line: 426,
              column: 48
            }
          }, {
            start: {
              line: 427,
              column: 6
            },
            end: {
              line: 427,
              column: 56
            }
          }],
          line: 426
        },
        "52": {
          loc: {
            start: {
              line: 435,
              column: 4
            },
            end: {
              line: 443,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 435,
              column: 4
            },
            end: {
              line: 443,
              column: 5
            }
          }, {
            start: {
              line: 435,
              column: 4
            },
            end: {
              line: 443,
              column: 5
            }
          }],
          line: 435
        },
        "53": {
          loc: {
            start: {
              line: 445,
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
              line: 445,
              column: 4
            },
            end: {
              line: 448,
              column: 5
            }
          }, {
            start: {
              line: 445,
              column: 4
            },
            end: {
              line: 448,
              column: 5
            }
          }],
          line: 445
        },
        "54": {
          loc: {
            start: {
              line: 445,
              column: 8
            },
            end: {
              line: 445,
              column: 65
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 445,
              column: 8
            },
            end: {
              line: 445,
              column: 19
            }
          }, {
            start: {
              line: 445,
              column: 23
            },
            end: {
              line: 445,
              column: 65
            }
          }],
          line: 445
        },
        "55": {
          loc: {
            start: {
              line: 451,
              column: 4
            },
            end: {
              line: 453,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 451,
              column: 4
            },
            end: {
              line: 453,
              column: 5
            }
          }, {
            start: {
              line: 451,
              column: 4
            },
            end: {
              line: 453,
              column: 5
            }
          }],
          line: 451
        },
        "56": {
          loc: {
            start: {
              line: 455,
              column: 4
            },
            end: {
              line: 458,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 455,
              column: 4
            },
            end: {
              line: 458,
              column: 5
            }
          }, {
            start: {
              line: 455,
              column: 4
            },
            end: {
              line: 458,
              column: 5
            }
          }],
          line: 455
        },
        "57": {
          loc: {
            start: {
              line: 455,
              column: 8
            },
            end: {
              line: 455,
              column: 38
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 455,
              column: 8
            },
            end: {
              line: 455,
              column: 22
            }
          }, {
            start: {
              line: 455,
              column: 26
            },
            end: {
              line: 455,
              column: 38
            }
          }],
          line: 455
        },
        "58": {
          loc: {
            start: {
              line: 462,
              column: 4
            },
            end: {
              line: 464,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 462,
              column: 4
            },
            end: {
              line: 464,
              column: 5
            }
          }, {
            start: {
              line: 462,
              column: 4
            },
            end: {
              line: 464,
              column: 5
            }
          }],
          line: 462
        },
        "59": {
          loc: {
            start: {
              line: 476,
              column: 4
            },
            end: {
              line: 505,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 476,
              column: 4
            },
            end: {
              line: 505,
              column: 5
            }
          }, {
            start: {
              line: 476,
              column: 4
            },
            end: {
              line: 505,
              column: 5
            }
          }],
          line: 476
        },
        "60": {
          loc: {
            start: {
              line: 507,
              column: 4
            },
            end: {
              line: 509,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 507,
              column: 4
            },
            end: {
              line: 509,
              column: 5
            }
          }, {
            start: {
              line: 507,
              column: 4
            },
            end: {
              line: 509,
              column: 5
            }
          }],
          line: 507
        },
        "61": {
          loc: {
            start: {
              line: 522,
              column: 6
            },
            end: {
              line: 527,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 522,
              column: 6
            },
            end: {
              line: 527,
              column: 7
            }
          }, {
            start: {
              line: 522,
              column: 6
            },
            end: {
              line: 527,
              column: 7
            }
          }],
          line: 522
        },
        "62": {
          loc: {
            start: {
              line: 529,
              column: 21
            },
            end: {
              line: 529,
              column: 72
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 529,
              column: 50
            },
            end: {
              line: 529,
              column: 56
            }
          }, {
            start: {
              line: 529,
              column: 59
            },
            end: {
              line: 529,
              column: 72
            }
          }],
          line: 529
        },
        "63": {
          loc: {
            start: {
              line: 531,
              column: 6
            },
            end: {
              line: 534,
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
              line: 534,
              column: 7
            }
          }, {
            start: {
              line: 531,
              column: 6
            },
            end: {
              line: 534,
              column: 7
            }
          }],
          line: 531
        },
        "64": {
          loc: {
            start: {
              line: 536,
              column: 6
            },
            end: {
              line: 547,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 536,
              column: 6
            },
            end: {
              line: 547,
              column: 7
            }
          }, {
            start: {
              line: 536,
              column: 6
            },
            end: {
              line: 547,
              column: 7
            }
          }],
          line: 536
        },
        "65": {
          loc: {
            start: {
              line: 538,
              column: 13
            },
            end: {
              line: 547,
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
              line: 547,
              column: 7
            }
          }, {
            start: {
              line: 538,
              column: 13
            },
            end: {
              line: 547,
              column: 7
            }
          }],
          line: 538
        },
        "66": {
          loc: {
            start: {
              line: 539,
              column: 8
            },
            end: {
              line: 541,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 539,
              column: 8
            },
            end: {
              line: 541,
              column: 9
            }
          }, {
            start: {
              line: 539,
              column: 8
            },
            end: {
              line: 541,
              column: 9
            }
          }],
          line: 539
        },
        "67": {
          loc: {
            start: {
              line: 544,
              column: 13
            },
            end: {
              line: 547,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 544,
              column: 13
            },
            end: {
              line: 547,
              column: 7
            }
          }, {
            start: {
              line: 544,
              column: 13
            },
            end: {
              line: 547,
              column: 7
            }
          }],
          line: 544
        },
        "68": {
          loc: {
            start: {
              line: 544,
              column: 17
            },
            end: {
              line: 544,
              column: 49
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 544,
              column: 17
            },
            end: {
              line: 544,
              column: 33
            }
          }, {
            start: {
              line: 544,
              column: 37
            },
            end: {
              line: 544,
              column: 49
            }
          }],
          line: 544
        },
        "69": {
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
        "70": {
          loc: {
            start: {
              line: 560,
              column: 4
            },
            end: {
              line: 562,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 560,
              column: 4
            },
            end: {
              line: 562,
              column: 5
            }
          }, {
            start: {
              line: 560,
              column: 4
            },
            end: {
              line: 562,
              column: 5
            }
          }],
          line: 560
        },
        "71": {
          loc: {
            start: {
              line: 560,
              column: 8
            },
            end: {
              line: 560,
              column: 59
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 560,
              column: 8
            },
            end: {
              line: 560,
              column: 15
            }
          }, {
            start: {
              line: 560,
              column: 19
            },
            end: {
              line: 560,
              column: 59
            }
          }],
          line: 560
        },
        "72": {
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
        },
        "73": {
          loc: {
            start: {
              line: 576,
              column: 4
            },
            end: {
              line: 578,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 576,
              column: 4
            },
            end: {
              line: 578,
              column: 5
            }
          }, {
            start: {
              line: 576,
              column: 4
            },
            end: {
              line: 578,
              column: 5
            }
          }],
          line: 576
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
        "257": 0,
        "258": 0,
        "259": 0,
        "260": 0,
        "261": 0,
        "262": 0,
        "263": 0,
        "264": 0,
        "265": 0,
        "266": 0,
        "267": 0,
        "268": 0,
        "269": 0,
        "270": 0,
        "271": 0,
        "272": 0,
        "273": 0,
        "274": 0,
        "275": 0,
        "276": 0,
        "277": 0,
        "278": 0,
        "279": 0,
        "280": 0,
        "281": 0,
        "282": 0,
        "283": 0,
        "284": 0,
        "285": 0,
        "286": 0,
        "287": 0,
        "288": 0,
        "289": 0,
        "290": 0,
        "291": 0,
        "292": 0
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
        "41": 0
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
        "46": [0, 0],
        "47": [0, 0],
        "48": [0, 0],
        "49": [0, 0],
        "50": [0, 0],
        "51": [0, 0, 0],
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
        "71": [0, 0],
        "72": [0, 0],
        "73": [0, 0]
      },
      _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
      hash: "bbb28de77a7163384dabd722306d5e5c72476236"
    };
    var coverage = global[gcv] || (global[gcv] = {});

    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }

    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_1qrssl00mz = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }

  cov_1qrssl00mz();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_1qrssl00mz().s[0]++, 'carousel');
  var VERSION = (cov_1qrssl00mz().s[1]++, '4.6.0');
  var DATA_KEY = (cov_1qrssl00mz().s[2]++, 'bs.carousel');
  var EVENT_KEY = (cov_1qrssl00mz().s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_1qrssl00mz().s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_1qrssl00mz().s[5]++, $__default['default'].fn[NAME]);
  var ARROW_LEFT_KEYCODE = (cov_1qrssl00mz().s[6]++, 37); // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = (cov_1qrssl00mz().s[7]++, 39); // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = (cov_1qrssl00mz().s[8]++, 500); // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = (cov_1qrssl00mz().s[9]++, 40);
  var Default = (cov_1qrssl00mz().s[10]++, {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  });
  var DefaultType = (cov_1qrssl00mz().s[11]++, {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  });
  var DIRECTION_NEXT = (cov_1qrssl00mz().s[12]++, 'next');
  var DIRECTION_PREV = (cov_1qrssl00mz().s[13]++, 'prev');
  var DIRECTION_LEFT = (cov_1qrssl00mz().s[14]++, 'left');
  var DIRECTION_RIGHT = (cov_1qrssl00mz().s[15]++, 'right');
  var EVENT_SLIDE = (cov_1qrssl00mz().s[16]++, "slide" + EVENT_KEY);
  var EVENT_SLID = (cov_1qrssl00mz().s[17]++, "slid" + EVENT_KEY);
  var EVENT_KEYDOWN = (cov_1qrssl00mz().s[18]++, "keydown" + EVENT_KEY);
  var EVENT_MOUSEENTER = (cov_1qrssl00mz().s[19]++, "mouseenter" + EVENT_KEY);
  var EVENT_MOUSELEAVE = (cov_1qrssl00mz().s[20]++, "mouseleave" + EVENT_KEY);
  var EVENT_TOUCHSTART = (cov_1qrssl00mz().s[21]++, "touchstart" + EVENT_KEY);
  var EVENT_TOUCHMOVE = (cov_1qrssl00mz().s[22]++, "touchmove" + EVENT_KEY);
  var EVENT_TOUCHEND = (cov_1qrssl00mz().s[23]++, "touchend" + EVENT_KEY);
  var EVENT_POINTERDOWN = (cov_1qrssl00mz().s[24]++, "pointerdown" + EVENT_KEY);
  var EVENT_POINTERUP = (cov_1qrssl00mz().s[25]++, "pointerup" + EVENT_KEY);
  var EVENT_DRAG_START = (cov_1qrssl00mz().s[26]++, "dragstart" + EVENT_KEY);
  var EVENT_LOAD_DATA_API = (cov_1qrssl00mz().s[27]++, "load" + EVENT_KEY + DATA_API_KEY);
  var EVENT_CLICK_DATA_API = (cov_1qrssl00mz().s[28]++, "click" + EVENT_KEY + DATA_API_KEY);
  var CLASS_NAME_CAROUSEL = (cov_1qrssl00mz().s[29]++, 'carousel');
  var CLASS_NAME_ACTIVE = (cov_1qrssl00mz().s[30]++, 'active');
  var CLASS_NAME_SLIDE = (cov_1qrssl00mz().s[31]++, 'slide');
  var CLASS_NAME_RIGHT = (cov_1qrssl00mz().s[32]++, 'carousel-item-right');
  var CLASS_NAME_LEFT = (cov_1qrssl00mz().s[33]++, 'carousel-item-left');
  var CLASS_NAME_NEXT = (cov_1qrssl00mz().s[34]++, 'carousel-item-next');
  var CLASS_NAME_PREV = (cov_1qrssl00mz().s[35]++, 'carousel-item-prev');
  var CLASS_NAME_POINTER_EVENT = (cov_1qrssl00mz().s[36]++, 'pointer-event');
  var SELECTOR_ACTIVE = (cov_1qrssl00mz().s[37]++, '.active');
  var SELECTOR_ACTIVE_ITEM = (cov_1qrssl00mz().s[38]++, '.active.carousel-item');
  var SELECTOR_ITEM = (cov_1qrssl00mz().s[39]++, '.carousel-item');
  var SELECTOR_ITEM_IMG = (cov_1qrssl00mz().s[40]++, '.carousel-item img');
  var SELECTOR_NEXT_PREV = (cov_1qrssl00mz().s[41]++, '.carousel-item-next, .carousel-item-prev');
  var SELECTOR_INDICATORS = (cov_1qrssl00mz().s[42]++, '.carousel-indicators');
  var SELECTOR_DATA_SLIDE = (cov_1qrssl00mz().s[43]++, '[data-slide], [data-slide-to]');
  var SELECTOR_DATA_RIDE = (cov_1qrssl00mz().s[44]++, '[data-ride="carousel"]');
  var PointerType = (cov_1qrssl00mz().s[45]++, {
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
      cov_1qrssl00mz().f[0]++;
      cov_1qrssl00mz().s[46]++;
      this._items = null;
      cov_1qrssl00mz().s[47]++;
      this._interval = null;
      cov_1qrssl00mz().s[48]++;
      this._activeElement = null;
      cov_1qrssl00mz().s[49]++;
      this._isPaused = false;
      cov_1qrssl00mz().s[50]++;
      this._isSliding = false;
      cov_1qrssl00mz().s[51]++;
      this.touchTimeout = null;
      cov_1qrssl00mz().s[52]++;
      this.touchStartX = 0;
      cov_1qrssl00mz().s[53]++;
      this.touchDeltaX = 0;
      cov_1qrssl00mz().s[54]++;
      this._config = this._getConfig(config);
      cov_1qrssl00mz().s[55]++;
      this._element = element;
      cov_1qrssl00mz().s[56]++;
      this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
      cov_1qrssl00mz().s[57]++;
      this._touchSupported = (cov_1qrssl00mz().b[0][0]++, 'ontouchstart' in document.documentElement) || (cov_1qrssl00mz().b[0][1]++, navigator.maxTouchPoints > 0);
      cov_1qrssl00mz().s[58]++;
      this._pointerEvent = Boolean((cov_1qrssl00mz().b[1][0]++, window.PointerEvent) || (cov_1qrssl00mz().b[1][1]++, window.MSPointerEvent));
      cov_1qrssl00mz().s[59]++;

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      cov_1qrssl00mz().f[3]++;
      cov_1qrssl00mz().s[62]++;

      if (!this._isSliding) {
        cov_1qrssl00mz().b[2][0]++;
        cov_1qrssl00mz().s[63]++;

        this._slide(DIRECTION_NEXT);
      } else {
        cov_1qrssl00mz().b[2][1]++;
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      cov_1qrssl00mz().f[4]++;
      var $element = (cov_1qrssl00mz().s[64]++, $__default['default'](this._element)); // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible

      cov_1qrssl00mz().s[65]++;

      if ((cov_1qrssl00mz().b[4][0]++, !document.hidden) && (cov_1qrssl00mz().b[4][1]++, $element.is(':visible')) && (cov_1qrssl00mz().b[4][2]++, $element.css('visibility') !== 'hidden')) {
        cov_1qrssl00mz().b[3][0]++;
        cov_1qrssl00mz().s[66]++;
        this.next();
      } else {
        cov_1qrssl00mz().b[3][1]++;
      }
    };

    _proto.prev = function prev() {
      cov_1qrssl00mz().f[5]++;
      cov_1qrssl00mz().s[67]++;

      if (!this._isSliding) {
        cov_1qrssl00mz().b[5][0]++;
        cov_1qrssl00mz().s[68]++;

        this._slide(DIRECTION_PREV);
      } else {
        cov_1qrssl00mz().b[5][1]++;
      }
    };

    _proto.pause = function pause(event) {
      cov_1qrssl00mz().f[6]++;
      cov_1qrssl00mz().s[69]++;

      if (!event) {
        cov_1qrssl00mz().b[6][0]++;
        cov_1qrssl00mz().s[70]++;
        this._isPaused = true;
      } else {
        cov_1qrssl00mz().b[6][1]++;
      }

      cov_1qrssl00mz().s[71]++;

      if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
        cov_1qrssl00mz().b[7][0]++;
        cov_1qrssl00mz().s[72]++;
        Util__default['default'].triggerTransitionEnd(this._element);
        cov_1qrssl00mz().s[73]++;
        this.cycle(true);
      } else {
        cov_1qrssl00mz().b[7][1]++;
      }

      cov_1qrssl00mz().s[74]++;
      clearInterval(this._interval);
      cov_1qrssl00mz().s[75]++;
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      cov_1qrssl00mz().f[7]++;
      cov_1qrssl00mz().s[76]++;

      if (!event) {
        cov_1qrssl00mz().b[8][0]++;
        cov_1qrssl00mz().s[77]++;
        this._isPaused = false;
      } else {
        cov_1qrssl00mz().b[8][1]++;
      }

      cov_1qrssl00mz().s[78]++;

      if (this._interval) {
        cov_1qrssl00mz().b[9][0]++;
        cov_1qrssl00mz().s[79]++;
        clearInterval(this._interval);
        cov_1qrssl00mz().s[80]++;
        this._interval = null;
      } else {
        cov_1qrssl00mz().b[9][1]++;
      }

      cov_1qrssl00mz().s[81]++;

      if ((cov_1qrssl00mz().b[11][0]++, this._config.interval) && (cov_1qrssl00mz().b[11][1]++, !this._isPaused)) {
        cov_1qrssl00mz().b[10][0]++;
        cov_1qrssl00mz().s[82]++;

        this._updateInterval();

        cov_1qrssl00mz().s[83]++;
        this._interval = setInterval((document.visibilityState ? (cov_1qrssl00mz().b[12][0]++, this.nextWhenVisible) : (cov_1qrssl00mz().b[12][1]++, this.next)).bind(this), this._config.interval);
      } else {
        cov_1qrssl00mz().b[10][1]++;
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      cov_1qrssl00mz().f[8]++;
      cov_1qrssl00mz().s[84]++;
      this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);
      var activeIndex = (cov_1qrssl00mz().s[85]++, this._getItemIndex(this._activeElement));
      cov_1qrssl00mz().s[86]++;

      if ((cov_1qrssl00mz().b[14][0]++, index > this._items.length - 1) || (cov_1qrssl00mz().b[14][1]++, index < 0)) {
        cov_1qrssl00mz().b[13][0]++;
        cov_1qrssl00mz().s[87]++;
        return;
      } else {
        cov_1qrssl00mz().b[13][1]++;
      }

      cov_1qrssl00mz().s[88]++;

      if (this._isSliding) {
        cov_1qrssl00mz().b[15][0]++;
        cov_1qrssl00mz().s[89]++;
        $__default['default'](this._element).one(EVENT_SLID, function () {
          cov_1qrssl00mz().f[9]++;
          cov_1qrssl00mz().s[90]++;
          return _this.to(index);
        });
        cov_1qrssl00mz().s[91]++;
        return;
      } else {
        cov_1qrssl00mz().b[15][1]++;
      }

      cov_1qrssl00mz().s[92]++;

      if (activeIndex === index) {
        cov_1qrssl00mz().b[16][0]++;
        cov_1qrssl00mz().s[93]++;
        this.pause();
        cov_1qrssl00mz().s[94]++;
        this.cycle();
        cov_1qrssl00mz().s[95]++;
        return;
      } else {
        cov_1qrssl00mz().b[16][1]++;
      }

      var direction = (cov_1qrssl00mz().s[96]++, index > activeIndex ? (cov_1qrssl00mz().b[17][0]++, DIRECTION_NEXT) : (cov_1qrssl00mz().b[17][1]++, DIRECTION_PREV));
      cov_1qrssl00mz().s[97]++;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      cov_1qrssl00mz().f[10]++;
      cov_1qrssl00mz().s[98]++;
      $__default['default'](this._element).off(EVENT_KEY);
      cov_1qrssl00mz().s[99]++;
      $__default['default'].removeData(this._element, DATA_KEY);
      cov_1qrssl00mz().s[100]++;
      this._items = null;
      cov_1qrssl00mz().s[101]++;
      this._config = null;
      cov_1qrssl00mz().s[102]++;
      this._element = null;
      cov_1qrssl00mz().s[103]++;
      this._interval = null;
      cov_1qrssl00mz().s[104]++;
      this._isPaused = null;
      cov_1qrssl00mz().s[105]++;
      this._isSliding = null;
      cov_1qrssl00mz().s[106]++;
      this._activeElement = null;
      cov_1qrssl00mz().s[107]++;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      cov_1qrssl00mz().f[11]++;
      cov_1qrssl00mz().s[108]++;
      config = _extends({}, Default, config);
      cov_1qrssl00mz().s[109]++;
      Util__default['default'].typeCheckConfig(NAME, config, DefaultType);
      cov_1qrssl00mz().s[110]++;
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      cov_1qrssl00mz().f[12]++;
      var absDeltax = (cov_1qrssl00mz().s[111]++, Math.abs(this.touchDeltaX));
      cov_1qrssl00mz().s[112]++;

      if (absDeltax <= SWIPE_THRESHOLD) {
        cov_1qrssl00mz().b[18][0]++;
        cov_1qrssl00mz().s[113]++;
        return;
      } else {
        cov_1qrssl00mz().b[18][1]++;
      }

      var direction = (cov_1qrssl00mz().s[114]++, absDeltax / this.touchDeltaX);
      cov_1qrssl00mz().s[115]++;
      this.touchDeltaX = 0; // swipe left

      cov_1qrssl00mz().s[116]++;

      if (direction > 0) {
        cov_1qrssl00mz().b[19][0]++;
        cov_1qrssl00mz().s[117]++;
        this.prev();
      } else {
        cov_1qrssl00mz().b[19][1]++;
      } // swipe right


      cov_1qrssl00mz().s[118]++;

      if (direction < 0) {
        cov_1qrssl00mz().b[20][0]++;
        cov_1qrssl00mz().s[119]++;
        this.next();
      } else {
        cov_1qrssl00mz().b[20][1]++;
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      cov_1qrssl00mz().f[13]++;
      cov_1qrssl00mz().s[120]++;

      if (this._config.keyboard) {
        cov_1qrssl00mz().b[21][0]++;
        cov_1qrssl00mz().s[121]++;
        $__default['default'](this._element).on(EVENT_KEYDOWN, function (event) {
          cov_1qrssl00mz().f[14]++;
          cov_1qrssl00mz().s[122]++;
          return _this2._keydown(event);
        });
      } else {
        cov_1qrssl00mz().b[21][1]++;
      }

      cov_1qrssl00mz().s[123]++;

      if (this._config.pause === 'hover') {
        cov_1qrssl00mz().b[22][0]++;
        cov_1qrssl00mz().s[124]++;
        $__default['default'](this._element).on(EVENT_MOUSEENTER, function (event) {
          cov_1qrssl00mz().f[15]++;
          cov_1qrssl00mz().s[125]++;
          return _this2.pause(event);
        }).on(EVENT_MOUSELEAVE, function (event) {
          cov_1qrssl00mz().f[16]++;
          cov_1qrssl00mz().s[126]++;
          return _this2.cycle(event);
        });
      } else {
        cov_1qrssl00mz().b[22][1]++;
      }

      cov_1qrssl00mz().s[127]++;

      if (this._config.touch) {
        cov_1qrssl00mz().b[23][0]++;
        cov_1qrssl00mz().s[128]++;

        this._addTouchEventListeners();
      } else {
        cov_1qrssl00mz().b[23][1]++;
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      cov_1qrssl00mz().f[17]++;
      cov_1qrssl00mz().s[129]++;

      if (!this._touchSupported) {
        cov_1qrssl00mz().b[24][0]++;
        cov_1qrssl00mz().s[130]++;
        return;
      } else {
        cov_1qrssl00mz().b[24][1]++;
      }

      cov_1qrssl00mz().s[131]++;

      var start = function start(event) {
        cov_1qrssl00mz().f[18]++;
        cov_1qrssl00mz().s[132]++;

        if ((cov_1qrssl00mz().b[26][0]++, _this3._pointerEvent) && (cov_1qrssl00mz().b[26][1]++, PointerType[event.originalEvent.pointerType.toUpperCase()])) {
          cov_1qrssl00mz().b[25][0]++;
          cov_1qrssl00mz().s[133]++;
          _this3.touchStartX = event.originalEvent.clientX;
        } else {
          cov_1qrssl00mz().b[25][1]++;
          cov_1qrssl00mz().s[134]++;

          if (!_this3._pointerEvent) {
            cov_1qrssl00mz().b[27][0]++;
            cov_1qrssl00mz().s[135]++;
            _this3.touchStartX = event.originalEvent.touches[0].clientX;
          } else {
            cov_1qrssl00mz().b[27][1]++;
          }
        }
      };

      cov_1qrssl00mz().s[136]++;

      var move = function move(event) {
        cov_1qrssl00mz().f[19]++;
        cov_1qrssl00mz().s[137]++;

        // ensure swiping with one touch and not pinching
        if ((cov_1qrssl00mz().b[29][0]++, event.originalEvent.touches) && (cov_1qrssl00mz().b[29][1]++, event.originalEvent.touches.length > 1)) {
          cov_1qrssl00mz().b[28][0]++;
          cov_1qrssl00mz().s[138]++;
          _this3.touchDeltaX = 0;
        } else {
          cov_1qrssl00mz().b[28][1]++;
          cov_1qrssl00mz().s[139]++;
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      cov_1qrssl00mz().s[140]++;

      var end = function end(event) {
        cov_1qrssl00mz().f[20]++;
        cov_1qrssl00mz().s[141]++;

        if ((cov_1qrssl00mz().b[31][0]++, _this3._pointerEvent) && (cov_1qrssl00mz().b[31][1]++, PointerType[event.originalEvent.pointerType.toUpperCase()])) {
          cov_1qrssl00mz().b[30][0]++;
          cov_1qrssl00mz().s[142]++;
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        } else {
          cov_1qrssl00mz().b[30][1]++;
        }

        cov_1qrssl00mz().s[143]++;

        _this3._handleSwipe();

        cov_1qrssl00mz().s[144]++;

        if (_this3._config.pause === 'hover') {
          cov_1qrssl00mz().b[32][0]++;
          cov_1qrssl00mz().s[145]++;

          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          cov_1qrssl00mz().s[146]++;

          if (_this3.touchTimeout) {
            cov_1qrssl00mz().b[33][0]++;
            cov_1qrssl00mz().s[147]++;
            clearTimeout(_this3.touchTimeout);
          } else {
            cov_1qrssl00mz().b[33][1]++;
          }

          cov_1qrssl00mz().s[148]++;
          _this3.touchTimeout = setTimeout(function (event) {
            cov_1qrssl00mz().f[21]++;
            cov_1qrssl00mz().s[149]++;
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        } else {
          cov_1qrssl00mz().b[32][1]++;
        }
      };

      cov_1qrssl00mz().s[150]++;
      $__default['default'](this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
        cov_1qrssl00mz().f[22]++;
        cov_1qrssl00mz().s[151]++;
        return e.preventDefault();
      });
      cov_1qrssl00mz().s[152]++;

      if (this._pointerEvent) {
        cov_1qrssl00mz().b[34][0]++;
        cov_1qrssl00mz().s[153]++;
        $__default['default'](this._element).on(EVENT_POINTERDOWN, function (event) {
          cov_1qrssl00mz().f[23]++;
          cov_1qrssl00mz().s[154]++;
          return start(event);
        });
        cov_1qrssl00mz().s[155]++;
        $__default['default'](this._element).on(EVENT_POINTERUP, function (event) {
          cov_1qrssl00mz().f[24]++;
          cov_1qrssl00mz().s[156]++;
          return end(event);
        });
        cov_1qrssl00mz().s[157]++;

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        cov_1qrssl00mz().b[34][1]++;
        cov_1qrssl00mz().s[158]++;
        $__default['default'](this._element).on(EVENT_TOUCHSTART, function (event) {
          cov_1qrssl00mz().f[25]++;
          cov_1qrssl00mz().s[159]++;
          return start(event);
        });
        cov_1qrssl00mz().s[160]++;
        $__default['default'](this._element).on(EVENT_TOUCHMOVE, function (event) {
          cov_1qrssl00mz().f[26]++;
          cov_1qrssl00mz().s[161]++;
          return move(event);
        });
        cov_1qrssl00mz().s[162]++;
        $__default['default'](this._element).on(EVENT_TOUCHEND, function (event) {
          cov_1qrssl00mz().f[27]++;
          cov_1qrssl00mz().s[163]++;
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      cov_1qrssl00mz().f[28]++;
      cov_1qrssl00mz().s[164]++;

      if (/input|textarea/i.test(event.target.tagName)) {
        cov_1qrssl00mz().b[35][0]++;
        cov_1qrssl00mz().s[165]++;
        return;
      } else {
        cov_1qrssl00mz().b[35][1]++;
      }

      cov_1qrssl00mz().s[166]++;

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          cov_1qrssl00mz().b[36][0]++;
          cov_1qrssl00mz().s[167]++;
          event.preventDefault();
          cov_1qrssl00mz().s[168]++;
          this.prev();
          cov_1qrssl00mz().s[169]++;
          break;

        case ARROW_RIGHT_KEYCODE:
          cov_1qrssl00mz().b[36][1]++;
          cov_1qrssl00mz().s[170]++;
          event.preventDefault();
          cov_1qrssl00mz().s[171]++;
          this.next();
          cov_1qrssl00mz().s[172]++;
          break;

        default:
          cov_1qrssl00mz().b[36][2]++;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      cov_1qrssl00mz().f[29]++;
      cov_1qrssl00mz().s[173]++;
      this._items = (cov_1qrssl00mz().b[38][0]++, element) && (cov_1qrssl00mz().b[38][1]++, element.parentNode) ? (cov_1qrssl00mz().b[37][0]++, [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM))) : (cov_1qrssl00mz().b[37][1]++, []);
      cov_1qrssl00mz().s[174]++;
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      cov_1qrssl00mz().f[30]++;
      var isNextDirection = (cov_1qrssl00mz().s[175]++, direction === DIRECTION_NEXT);
      var isPrevDirection = (cov_1qrssl00mz().s[176]++, direction === DIRECTION_PREV);
      var activeIndex = (cov_1qrssl00mz().s[177]++, this._getItemIndex(activeElement));
      var lastItemIndex = (cov_1qrssl00mz().s[178]++, this._items.length - 1);
      var isGoingToWrap = (cov_1qrssl00mz().s[179]++, (cov_1qrssl00mz().b[39][0]++, isPrevDirection) && (cov_1qrssl00mz().b[39][1]++, activeIndex === 0) || (cov_1qrssl00mz().b[39][2]++, isNextDirection) && (cov_1qrssl00mz().b[39][3]++, activeIndex === lastItemIndex));
      cov_1qrssl00mz().s[180]++;

      if ((cov_1qrssl00mz().b[41][0]++, isGoingToWrap) && (cov_1qrssl00mz().b[41][1]++, !this._config.wrap)) {
        cov_1qrssl00mz().b[40][0]++;
        cov_1qrssl00mz().s[181]++;
        return activeElement;
      } else {
        cov_1qrssl00mz().b[40][1]++;
      }

      var delta = (cov_1qrssl00mz().s[182]++, direction === DIRECTION_PREV ? (cov_1qrssl00mz().b[42][0]++, -1) : (cov_1qrssl00mz().b[42][1]++, 1));
      var itemIndex = (cov_1qrssl00mz().s[183]++, (activeIndex + delta) % this._items.length);
      cov_1qrssl00mz().s[184]++;
      return itemIndex === -1 ? (cov_1qrssl00mz().b[43][0]++, this._items[this._items.length - 1]) : (cov_1qrssl00mz().b[43][1]++, this._items[itemIndex]);
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      cov_1qrssl00mz().f[31]++;
      var targetIndex = (cov_1qrssl00mz().s[185]++, this._getItemIndex(relatedTarget));
      var fromIndex = (cov_1qrssl00mz().s[186]++, this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM)));
      var slideEvent = (cov_1qrssl00mz().s[187]++, $__default['default'].Event(EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      }));
      cov_1qrssl00mz().s[188]++;
      $__default['default'](this._element).trigger(slideEvent);
      cov_1qrssl00mz().s[189]++;
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      cov_1qrssl00mz().f[32]++;
      cov_1qrssl00mz().s[190]++;

      if (this._indicatorsElement) {
        cov_1qrssl00mz().b[44][0]++;
        var indicators = (cov_1qrssl00mz().s[191]++, [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE)));
        cov_1qrssl00mz().s[192]++;
        $__default['default'](indicators).removeClass(CLASS_NAME_ACTIVE);
        var nextIndicator = (cov_1qrssl00mz().s[193]++, this._indicatorsElement.children[this._getItemIndex(element)]);
        cov_1qrssl00mz().s[194]++;

        if (nextIndicator) {
          cov_1qrssl00mz().b[45][0]++;
          cov_1qrssl00mz().s[195]++;
          $__default['default'](nextIndicator).addClass(CLASS_NAME_ACTIVE);
        } else {
          cov_1qrssl00mz().b[45][1]++;
        }
      } else {
        cov_1qrssl00mz().b[44][1]++;
      }
    };

    _proto._updateInterval = function _updateInterval() {
      cov_1qrssl00mz().f[33]++;
      var element = (cov_1qrssl00mz().s[196]++, (cov_1qrssl00mz().b[46][0]++, this._activeElement) || (cov_1qrssl00mz().b[46][1]++, this._element.querySelector(SELECTOR_ACTIVE_ITEM)));
      cov_1qrssl00mz().s[197]++;

      if (!element) {
        cov_1qrssl00mz().b[47][0]++;
        cov_1qrssl00mz().s[198]++;
        return;
      } else {
        cov_1qrssl00mz().b[47][1]++;
      }

      var elementInterval = (cov_1qrssl00mz().s[199]++, parseInt(element.getAttribute('data-interval'), 10));
      cov_1qrssl00mz().s[200]++;

      if (elementInterval) {
        cov_1qrssl00mz().b[48][0]++;
        cov_1qrssl00mz().s[201]++;
        this._config.defaultInterval = (cov_1qrssl00mz().b[49][0]++, this._config.defaultInterval) || (cov_1qrssl00mz().b[49][1]++, this._config.interval);
        cov_1qrssl00mz().s[202]++;
        this._config.interval = elementInterval;
      } else {
        cov_1qrssl00mz().b[48][1]++;
        cov_1qrssl00mz().s[203]++;
        this._config.interval = (cov_1qrssl00mz().b[50][0]++, this._config.defaultInterval) || (cov_1qrssl00mz().b[50][1]++, this._config.interval);
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      cov_1qrssl00mz().f[34]++;
      var activeElement = (cov_1qrssl00mz().s[204]++, this._element.querySelector(SELECTOR_ACTIVE_ITEM));
      var activeElementIndex = (cov_1qrssl00mz().s[205]++, this._getItemIndex(activeElement));
      var nextElement = (cov_1qrssl00mz().s[206]++, (cov_1qrssl00mz().b[51][0]++, element) || (cov_1qrssl00mz().b[51][1]++, activeElement) && (cov_1qrssl00mz().b[51][2]++, this._getItemByDirection(direction, activeElement)));
      var nextElementIndex = (cov_1qrssl00mz().s[207]++, this._getItemIndex(nextElement));
      var isCycling = (cov_1qrssl00mz().s[208]++, Boolean(this._interval));
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;
      cov_1qrssl00mz().s[209]++;

      if (direction === DIRECTION_NEXT) {
        cov_1qrssl00mz().b[52][0]++;
        cov_1qrssl00mz().s[210]++;
        directionalClassName = CLASS_NAME_LEFT;
        cov_1qrssl00mz().s[211]++;
        orderClassName = CLASS_NAME_NEXT;
        cov_1qrssl00mz().s[212]++;
        eventDirectionName = DIRECTION_LEFT;
      } else {
        cov_1qrssl00mz().b[52][1]++;
        cov_1qrssl00mz().s[213]++;
        directionalClassName = CLASS_NAME_RIGHT;
        cov_1qrssl00mz().s[214]++;
        orderClassName = CLASS_NAME_PREV;
        cov_1qrssl00mz().s[215]++;
        eventDirectionName = DIRECTION_RIGHT;
      }

      cov_1qrssl00mz().s[216]++;

      if ((cov_1qrssl00mz().b[54][0]++, nextElement) && (cov_1qrssl00mz().b[54][1]++, $__default['default'](nextElement).hasClass(CLASS_NAME_ACTIVE))) {
        cov_1qrssl00mz().b[53][0]++;
        cov_1qrssl00mz().s[217]++;
        this._isSliding = false;
        cov_1qrssl00mz().s[218]++;
        return;
      } else {
        cov_1qrssl00mz().b[53][1]++;
      }

      var slideEvent = (cov_1qrssl00mz().s[219]++, this._triggerSlideEvent(nextElement, eventDirectionName));
      cov_1qrssl00mz().s[220]++;

      if (slideEvent.isDefaultPrevented()) {
        cov_1qrssl00mz().b[55][0]++;
        cov_1qrssl00mz().s[221]++;
        return;
      } else {
        cov_1qrssl00mz().b[55][1]++;
      }

      cov_1qrssl00mz().s[222]++;

      if ((cov_1qrssl00mz().b[57][0]++, !activeElement) || (cov_1qrssl00mz().b[57][1]++, !nextElement)) {
        cov_1qrssl00mz().b[56][0]++;
        cov_1qrssl00mz().s[223]++;
        // Some weirdness is happening, so we bail
        return;
      } else {
        cov_1qrssl00mz().b[56][1]++;
      }

      cov_1qrssl00mz().s[224]++;
      this._isSliding = true;
      cov_1qrssl00mz().s[225]++;

      if (isCycling) {
        cov_1qrssl00mz().b[58][0]++;
        cov_1qrssl00mz().s[226]++;
        this.pause();
      } else {
        cov_1qrssl00mz().b[58][1]++;
      }

      cov_1qrssl00mz().s[227]++;

      this._setActiveIndicatorElement(nextElement);

      cov_1qrssl00mz().s[228]++;
      this._activeElement = nextElement;
      var slidEvent = (cov_1qrssl00mz().s[229]++, $__default['default'].Event(EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      }));
      cov_1qrssl00mz().s[230]++;

      if ($__default['default'](this._element).hasClass(CLASS_NAME_SLIDE)) {
        cov_1qrssl00mz().b[59][0]++;
        cov_1qrssl00mz().s[231]++;
        $__default['default'](nextElement).addClass(orderClassName);
        cov_1qrssl00mz().s[232]++;
        Util__default['default'].reflow(nextElement);
        cov_1qrssl00mz().s[233]++;
        $__default['default'](activeElement).addClass(directionalClassName);
        cov_1qrssl00mz().s[234]++;
        $__default['default'](nextElement).addClass(directionalClassName);
        var transitionDuration = (cov_1qrssl00mz().s[235]++, Util__default['default'].getTransitionDurationFromElement(activeElement));
        cov_1qrssl00mz().s[236]++;
        $__default['default'](activeElement).one(Util__default['default'].TRANSITION_END, function () {
          cov_1qrssl00mz().f[35]++;
          cov_1qrssl00mz().s[237]++;
          $__default['default'](nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE);
          cov_1qrssl00mz().s[238]++;
          $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE + " " + orderClassName + " " + directionalClassName);
          cov_1qrssl00mz().s[239]++;
          _this4._isSliding = false;
          cov_1qrssl00mz().s[240]++;
          setTimeout(function () {
            cov_1qrssl00mz().f[36]++;
            cov_1qrssl00mz().s[241]++;
            return $__default['default'](_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        cov_1qrssl00mz().b[59][1]++;
        cov_1qrssl00mz().s[242]++;
        $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE);
        cov_1qrssl00mz().s[243]++;
        $__default['default'](nextElement).addClass(CLASS_NAME_ACTIVE);
        cov_1qrssl00mz().s[244]++;
        this._isSliding = false;
        cov_1qrssl00mz().s[245]++;
        $__default['default'](this._element).trigger(slidEvent);
      }

      cov_1qrssl00mz().s[246]++;

      if (isCycling) {
        cov_1qrssl00mz().b[60][0]++;
        cov_1qrssl00mz().s[247]++;
        this.cycle();
      } else {
        cov_1qrssl00mz().b[60][1]++;
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      cov_1qrssl00mz().f[37]++;
      cov_1qrssl00mz().s[248]++;
      return this.each(function () {
        cov_1qrssl00mz().f[38]++;
        var data = (cov_1qrssl00mz().s[249]++, $__default['default'](this).data(DATA_KEY));

        var _config = (cov_1qrssl00mz().s[250]++, _extends({}, Default, $__default['default'](this).data()));

        cov_1qrssl00mz().s[251]++;

        if (typeof config === 'object') {
          cov_1qrssl00mz().b[61][0]++;
          cov_1qrssl00mz().s[252]++;
          _config = _extends({}, _config, config);
        } else {
          cov_1qrssl00mz().b[61][1]++;
        }

        var action = (cov_1qrssl00mz().s[253]++, typeof config === 'string' ? (cov_1qrssl00mz().b[62][0]++, config) : (cov_1qrssl00mz().b[62][1]++, _config.slide));
        cov_1qrssl00mz().s[254]++;

        if (!data) {
          cov_1qrssl00mz().b[63][0]++;
          cov_1qrssl00mz().s[255]++;
          data = new Carousel(this, _config);
          cov_1qrssl00mz().s[256]++;
          $__default['default'](this).data(DATA_KEY, data);
        } else {
          cov_1qrssl00mz().b[63][1]++;
        }

        cov_1qrssl00mz().s[257]++;

        if (typeof config === 'number') {
          cov_1qrssl00mz().b[64][0]++;
          cov_1qrssl00mz().s[258]++;
          data.to(config);
        } else {
          cov_1qrssl00mz().b[64][1]++;
          cov_1qrssl00mz().s[259]++;

          if (typeof action === 'string') {
            cov_1qrssl00mz().b[65][0]++;
            cov_1qrssl00mz().s[260]++;

            if (typeof data[action] === 'undefined') {
              cov_1qrssl00mz().b[66][0]++;
              cov_1qrssl00mz().s[261]++;
              throw new TypeError("No method named \"" + action + "\"");
            } else {
              cov_1qrssl00mz().b[66][1]++;
            }

            cov_1qrssl00mz().s[262]++;
            data[action]();
          } else {
            cov_1qrssl00mz().b[65][1]++;
            cov_1qrssl00mz().s[263]++;

            if ((cov_1qrssl00mz().b[68][0]++, _config.interval) && (cov_1qrssl00mz().b[68][1]++, _config.ride)) {
              cov_1qrssl00mz().b[67][0]++;
              cov_1qrssl00mz().s[264]++;
              data.pause();
              cov_1qrssl00mz().s[265]++;
              data.cycle();
            } else {
              cov_1qrssl00mz().b[67][1]++;
            }
          }
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      cov_1qrssl00mz().f[39]++;
      var selector = (cov_1qrssl00mz().s[266]++, Util__default['default'].getSelectorFromElement(this));
      cov_1qrssl00mz().s[267]++;

      if (!selector) {
        cov_1qrssl00mz().b[69][0]++;
        cov_1qrssl00mz().s[268]++;
        return;
      } else {
        cov_1qrssl00mz().b[69][1]++;
      }

      var target = (cov_1qrssl00mz().s[269]++, $__default['default'](selector)[0]);
      cov_1qrssl00mz().s[270]++;

      if ((cov_1qrssl00mz().b[71][0]++, !target) || (cov_1qrssl00mz().b[71][1]++, !$__default['default'](target).hasClass(CLASS_NAME_CAROUSEL))) {
        cov_1qrssl00mz().b[70][0]++;
        cov_1qrssl00mz().s[271]++;
        return;
      } else {
        cov_1qrssl00mz().b[70][1]++;
      }

      var config = (cov_1qrssl00mz().s[272]++, _extends({}, $__default['default'](target).data(), $__default['default'](this).data()));
      var slideIndex = (cov_1qrssl00mz().s[273]++, this.getAttribute('data-slide-to'));
      cov_1qrssl00mz().s[274]++;

      if (slideIndex) {
        cov_1qrssl00mz().b[72][0]++;
        cov_1qrssl00mz().s[275]++;
        config.interval = false;
      } else {
        cov_1qrssl00mz().b[72][1]++;
      }

      cov_1qrssl00mz().s[276]++;

      Carousel._jQueryInterface.call($__default['default'](target), config);

      cov_1qrssl00mz().s[277]++;

      if (slideIndex) {
        cov_1qrssl00mz().b[73][0]++;
        cov_1qrssl00mz().s[278]++;
        $__default['default'](target).data(DATA_KEY).to(slideIndex);
      } else {
        cov_1qrssl00mz().b[73][1]++;
      }

      cov_1qrssl00mz().s[279]++;
      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        cov_1qrssl00mz().f[1]++;
        cov_1qrssl00mz().s[60]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_1qrssl00mz().f[2]++;
        cov_1qrssl00mz().s[61]++;
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


  cov_1qrssl00mz().s[280]++;
  $__default['default'](document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
  cov_1qrssl00mz().s[281]++;
  $__default['default'](window).on(EVENT_LOAD_DATA_API, function () {
    cov_1qrssl00mz().f[40]++;
    var carousels = (cov_1qrssl00mz().s[282]++, [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE)));
    cov_1qrssl00mz().s[283]++;

    for (var i = (cov_1qrssl00mz().s[284]++, 0), len = (cov_1qrssl00mz().s[285]++, carousels.length); i < len; i++) {
      var $carousel = (cov_1qrssl00mz().s[286]++, $__default['default'](carousels[i]));
      cov_1qrssl00mz().s[287]++;

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  cov_1qrssl00mz().s[288]++;
  $__default['default'].fn[NAME] = Carousel._jQueryInterface;
  cov_1qrssl00mz().s[289]++;
  $__default['default'].fn[NAME].Constructor = Carousel;
  cov_1qrssl00mz().s[290]++;

  $__default['default'].fn[NAME].noConflict = function () {
    cov_1qrssl00mz().f[41]++;
    cov_1qrssl00mz().s[291]++;
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    cov_1qrssl00mz().s[292]++;
    return Carousel._jQueryInterface;
  };

  return Carousel;

})));
//# sourceMappingURL=carousel.js.map

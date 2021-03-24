/*!
  * Bootstrap collapse.js v4.6.0-2 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2021 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Collapse = factory(global.jQuery, global.Util));
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

  function cov_2itwqk888x() {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/collapse.js";
    var hash = "d029fb23db6c75009e7bc6524d436fde90cf0434";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/collapse.js",
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
            column: 19
          },
          end: {
            line: 34,
            column: 37
          }
        },
        "9": {
          start: {
            line: 35,
            column: 20
          },
          end: {
            line: 35,
            column: 39
          }
        },
        "10": {
          start: {
            line: 36,
            column: 19
          },
          end: {
            line: 36,
            column: 37
          }
        },
        "11": {
          start: {
            line: 37,
            column: 21
          },
          end: {
            line: 37,
            column: 41
          }
        },
        "12": {
          start: {
            line: 38,
            column: 29
          },
          end: {
            line: 38,
            column: 63
          }
        },
        "13": {
          start: {
            line: 40,
            column: 24
          },
          end: {
            line: 40,
            column: 30
          }
        },
        "14": {
          start: {
            line: 41,
            column: 28
          },
          end: {
            line: 41,
            column: 38
          }
        },
        "15": {
          start: {
            line: 42,
            column: 30
          },
          end: {
            line: 42,
            column: 42
          }
        },
        "16": {
          start: {
            line: 43,
            column: 29
          },
          end: {
            line: 43,
            column: 40
          }
        },
        "17": {
          start: {
            line: 45,
            column: 24
          },
          end: {
            line: 45,
            column: 31
          }
        },
        "18": {
          start: {
            line: 46,
            column: 25
          },
          end: {
            line: 46,
            column: 33
          }
        },
        "19": {
          start: {
            line: 48,
            column: 25
          },
          end: {
            line: 48,
            column: 45
          }
        },
        "20": {
          start: {
            line: 49,
            column: 29
          },
          end: {
            line: 49,
            column: 55
          }
        },
        "21": {
          start: {
            line: 59,
            column: 4
          },
          end: {
            line: 59,
            column: 33
          }
        },
        "22": {
          start: {
            line: 60,
            column: 4
          },
          end: {
            line: 60,
            column: 27
          }
        },
        "23": {
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 61,
            column: 42
          }
        },
        "24": {
          start: {
            line: 62,
            column: 4
          },
          end: {
            line: 65,
            column: 6
          }
        },
        "25": {
          start: {
            line: 67,
            column: 23
          },
          end: {
            line: 67,
            column: 85
          }
        },
        "26": {
          start: {
            line: 68,
            column: 4
          },
          end: {
            line: 78,
            column: 5
          }
        },
        "27": {
          start: {
            line: 68,
            column: 17
          },
          end: {
            line: 68,
            column: 18
          }
        },
        "28": {
          start: {
            line: 68,
            column: 26
          },
          end: {
            line: 68,
            column: 43
          }
        },
        "29": {
          start: {
            line: 69,
            column: 19
          },
          end: {
            line: 69,
            column: 32
          }
        },
        "30": {
          start: {
            line: 70,
            column: 23
          },
          end: {
            line: 70,
            column: 56
          }
        },
        "31": {
          start: {
            line: 71,
            column: 28
          },
          end: {
            line: 72,
            column: 51
          }
        },
        "32": {
          start: {
            line: 72,
            column: 29
          },
          end: {
            line: 72,
            column: 50
          }
        },
        "33": {
          start: {
            line: 74,
            column: 6
          },
          end: {
            line: 77,
            column: 7
          }
        },
        "34": {
          start: {
            line: 75,
            column: 8
          },
          end: {
            line: 75,
            column: 33
          }
        },
        "35": {
          start: {
            line: 76,
            column: 8
          },
          end: {
            line: 76,
            column: 37
          }
        },
        "36": {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 80,
            column: 65
          }
        },
        "37": {
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 84,
            column: 5
          }
        },
        "38": {
          start: {
            line: 83,
            column: 6
          },
          end: {
            line: 83,
            column: 71
          }
        },
        "39": {
          start: {
            line: 86,
            column: 4
          },
          end: {
            line: 88,
            column: 5
          }
        },
        "40": {
          start: {
            line: 87,
            column: 6
          },
          end: {
            line: 87,
            column: 19
          }
        },
        "41": {
          start: {
            line: 94,
            column: 4
          },
          end: {
            line: 94,
            column: 18
          }
        },
        "42": {
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 98,
            column: 18
          }
        },
        "43": {
          start: {
            line: 104,
            column: 4
          },
          end: {
            line: 108,
            column: 5
          }
        },
        "44": {
          start: {
            line: 105,
            column: 6
          },
          end: {
            line: 105,
            column: 17
          }
        },
        "45": {
          start: {
            line: 107,
            column: 6
          },
          end: {
            line: 107,
            column: 17
          }
        },
        "46": {
          start: {
            line: 112,
            column: 4
          },
          end: {
            line: 115,
            column: 5
          }
        },
        "47": {
          start: {
            line: 114,
            column: 6
          },
          end: {
            line: 114,
            column: 12
          }
        },
        "48": {
          start: {
            line: 120,
            column: 4
          },
          end: {
            line: 133,
            column: 5
          }
        },
        "49": {
          start: {
            line: 121,
            column: 6
          },
          end: {
            line: 128,
            column: 10
          }
        },
        "50": {
          start: {
            line: 123,
            column: 10
          },
          end: {
            line: 125,
            column: 11
          }
        },
        "51": {
          start: {
            line: 124,
            column: 12
          },
          end: {
            line: 124,
            column: 75
          }
        },
        "52": {
          start: {
            line: 127,
            column: 10
          },
          end: {
            line: 127,
            column: 61
          }
        },
        "53": {
          start: {
            line: 130,
            column: 6
          },
          end: {
            line: 132,
            column: 7
          }
        },
        "54": {
          start: {
            line: 131,
            column: 8
          },
          end: {
            line: 131,
            column: 22
          }
        },
        "55": {
          start: {
            line: 135,
            column: 4
          },
          end: {
            line: 140,
            column: 5
          }
        },
        "56": {
          start: {
            line: 136,
            column: 6
          },
          end: {
            line: 136,
            column: 65
          }
        },
        "57": {
          start: {
            line: 137,
            column: 6
          },
          end: {
            line: 139,
            column: 7
          }
        },
        "58": {
          start: {
            line: 138,
            column: 8
          },
          end: {
            line: 138,
            column: 14
          }
        },
        "59": {
          start: {
            line: 142,
            column: 23
          },
          end: {
            line: 142,
            column: 42
          }
        },
        "60": {
          start: {
            line: 143,
            column: 4
          },
          end: {
            line: 143,
            column: 40
          }
        },
        "61": {
          start: {
            line: 144,
            column: 4
          },
          end: {
            line: 146,
            column: 5
          }
        },
        "62": {
          start: {
            line: 145,
            column: 6
          },
          end: {
            line: 145,
            column: 12
          }
        },
        "63": {
          start: {
            line: 148,
            column: 4
          },
          end: {
            line: 153,
            column: 5
          }
        },
        "64": {
          start: {
            line: 149,
            column: 6
          },
          end: {
            line: 149,
            column: 76
          }
        },
        "65": {
          start: {
            line: 150,
            column: 6
          },
          end: {
            line: 152,
            column: 7
          }
        },
        "66": {
          start: {
            line: 151,
            column: 8
          },
          end: {
            line: 151,
            column: 39
          }
        },
        "67": {
          start: {
            line: 155,
            column: 22
          },
          end: {
            line: 155,
            column: 42
          }
        },
        "68": {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 159,
            column: 38
          }
        },
        "69": {
          start: {
            line: 161,
            column: 4
          },
          end: {
            line: 161,
            column: 38
          }
        },
        "70": {
          start: {
            line: 163,
            column: 4
          },
          end: {
            line: 167,
            column: 5
          }
        },
        "71": {
          start: {
            line: 164,
            column: 6
          },
          end: {
            line: 166,
            column: 36
          }
        },
        "72": {
          start: {
            line: 169,
            column: 4
          },
          end: {
            line: 169,
            column: 31
          }
        },
        "73": {
          start: {
            line: 171,
            column: 21
          },
          end: {
            line: 181,
            column: 5
          }
        },
        "74": {
          start: {
            line: 172,
            column: 6
          },
          end: {
            line: 174,
            column: 62
          }
        },
        "75": {
          start: {
            line: 176,
            column: 6
          },
          end: {
            line: 176,
            column: 41
          }
        },
        "76": {
          start: {
            line: 178,
            column: 6
          },
          end: {
            line: 178,
            column: 34
          }
        },
        "77": {
          start: {
            line: 180,
            column: 6
          },
          end: {
            line: 180,
            column: 43
          }
        },
        "78": {
          start: {
            line: 183,
            column: 33
          },
          end: {
            line: 183,
            column: 80
          }
        },
        "79": {
          start: {
            line: 184,
            column: 23
          },
          end: {
            line: 184,
            column: 54
          }
        },
        "80": {
          start: {
            line: 185,
            column: 31
          },
          end: {
            line: 185,
            column: 83
          }
        },
        "81": {
          start: {
            line: 187,
            column: 4
          },
          end: {
            line: 189,
            column: 47
          }
        },
        "82": {
          start: {
            line: 191,
            column: 4
          },
          end: {
            line: 191,
            column: 69
          }
        },
        "83": {
          start: {
            line: 195,
            column: 4
          },
          end: {
            line: 198,
            column: 5
          }
        },
        "84": {
          start: {
            line: 197,
            column: 6
          },
          end: {
            line: 197,
            column: 12
          }
        },
        "85": {
          start: {
            line: 200,
            column: 23
          },
          end: {
            line: 200,
            column: 42
          }
        },
        "86": {
          start: {
            line: 201,
            column: 4
          },
          end: {
            line: 201,
            column: 40
          }
        },
        "87": {
          start: {
            line: 202,
            column: 4
          },
          end: {
            line: 204,
            column: 5
          }
        },
        "88": {
          start: {
            line: 203,
            column: 6
          },
          end: {
            line: 203,
            column: 12
          }
        },
        "89": {
          start: {
            line: 206,
            column: 22
          },
          end: {
            line: 206,
            column: 42
          }
        },
        "90": {
          start: {
            line: 208,
            column: 4
          },
          end: {
            line: 208,
            column: 92
          }
        },
        "91": {
          start: {
            line: 210,
            column: 4
          },
          end: {
            line: 210,
            column: 30
          }
        },
        "92": {
          start: {
            line: 212,
            column: 4
          },
          end: {
            line: 214,
            column: 63
          }
        },
        "93": {
          start: {
            line: 216,
            column: 31
          },
          end: {
            line: 216,
            column: 56
          }
        },
        "94": {
          start: {
            line: 217,
            column: 4
          },
          end: {
            line: 230,
            column: 5
          }
        },
        "95": {
          start: {
            line: 218,
            column: 6
          },
          end: {
            line: 229,
            column: 7
          }
        },
        "96": {
          start: {
            line: 218,
            column: 19
          },
          end: {
            line: 218,
            column: 20
          }
        },
        "97": {
          start: {
            line: 219,
            column: 24
          },
          end: {
            line: 219,
            column: 45
          }
        },
        "98": {
          start: {
            line: 220,
            column: 25
          },
          end: {
            line: 220,
            column: 61
          }
        },
        "99": {
          start: {
            line: 222,
            column: 8
          },
          end: {
            line: 228,
            column: 9
          }
        },
        "100": {
          start: {
            line: 223,
            column: 24
          },
          end: {
            line: 223,
            column: 77
          }
        },
        "101": {
          start: {
            line: 224,
            column: 10
          },
          end: {
            line: 227,
            column: 11
          }
        },
        "102": {
          start: {
            line: 225,
            column: 12
          },
          end: {
            line: 226,
            column: 43
          }
        },
        "103": {
          start: {
            line: 232,
            column: 4
          },
          end: {
            line: 232,
            column: 31
          }
        },
        "104": {
          start: {
            line: 234,
            column: 21
          },
          end: {
            line: 240,
            column: 5
          }
        },
        "105": {
          start: {
            line: 235,
            column: 6
          },
          end: {
            line: 235,
            column: 34
          }
        },
        "106": {
          start: {
            line: 236,
            column: 6
          },
          end: {
            line: 239,
            column: 30
          }
        },
        "107": {
          start: {
            line: 242,
            column: 4
          },
          end: {
            line: 242,
            column: 39
          }
        },
        "108": {
          start: {
            line: 243,
            column: 31
          },
          end: {
            line: 243,
            column: 83
          }
        },
        "109": {
          start: {
            line: 245,
            column: 4
          },
          end: {
            line: 247,
            column: 47
          }
        },
        "110": {
          start: {
            line: 251,
            column: 4
          },
          end: {
            line: 251,
            column: 43
          }
        },
        "111": {
          start: {
            line: 255,
            column: 4
          },
          end: {
            line: 255,
            column: 41
          }
        },
        "112": {
          start: {
            line: 257,
            column: 4
          },
          end: {
            line: 257,
            column: 23
          }
        },
        "113": {
          start: {
            line: 258,
            column: 4
          },
          end: {
            line: 258,
            column: 23
          }
        },
        "114": {
          start: {
            line: 259,
            column: 4
          },
          end: {
            line: 259,
            column: 24
          }
        },
        "115": {
          start: {
            line: 260,
            column: 4
          },
          end: {
            line: 260,
            column: 29
          }
        },
        "116": {
          start: {
            line: 261,
            column: 4
          },
          end: {
            line: 261,
            column: 32
          }
        },
        "117": {
          start: {
            line: 267,
            column: 4
          },
          end: {
            line: 270,
            column: 5
          }
        },
        "118": {
          start: {
            line: 271,
            column: 4
          },
          end: {
            line: 271,
            column: 42
          }
        },
        "119": {
          start: {
            line: 272,
            column: 4
          },
          end: {
            line: 272,
            column: 51
          }
        },
        "120": {
          start: {
            line: 273,
            column: 4
          },
          end: {
            line: 273,
            column: 17
          }
        },
        "121": {
          start: {
            line: 277,
            column: 21
          },
          end: {
            line: 277,
            column: 63
          }
        },
        "122": {
          start: {
            line: 278,
            column: 4
          },
          end: {
            line: 278,
            column: 56
          }
        },
        "123": {
          start: {
            line: 284,
            column: 4
          },
          end: {
            line: 293,
            column: 5
          }
        },
        "124": {
          start: {
            line: 285,
            column: 6
          },
          end: {
            line: 285,
            column: 34
          }
        },
        "125": {
          start: {
            line: 288,
            column: 6
          },
          end: {
            line: 290,
            column: 7
          }
        },
        "126": {
          start: {
            line: 289,
            column: 8
          },
          end: {
            line: 289,
            column: 39
          }
        },
        "127": {
          start: {
            line: 292,
            column: 6
          },
          end: {
            line: 292,
            column: 58
          }
        },
        "128": {
          start: {
            line: 295,
            column: 21
          },
          end: {
            line: 295,
            column: 85
          }
        },
        "129": {
          start: {
            line: 296,
            column: 21
          },
          end: {
            line: 296,
            column: 69
          }
        },
        "130": {
          start: {
            line: 298,
            column: 4
          },
          end: {
            line: 303,
            column: 6
          }
        },
        "131": {
          start: {
            line: 299,
            column: 6
          },
          end: {
            line: 302,
            column: 7
          }
        },
        "132": {
          start: {
            line: 305,
            column: 4
          },
          end: {
            line: 305,
            column: 17
          }
        },
        "133": {
          start: {
            line: 309,
            column: 19
          },
          end: {
            line: 309,
            column: 55
          }
        },
        "134": {
          start: {
            line: 311,
            column: 4
          },
          end: {
            line: 315,
            column: 5
          }
        },
        "135": {
          start: {
            line: 312,
            column: 6
          },
          end: {
            line: 314,
            column: 38
          }
        },
        "136": {
          start: {
            line: 321,
            column: 21
          },
          end: {
            line: 321,
            column: 57
          }
        },
        "137": {
          start: {
            line: 322,
            column: 4
          },
          end: {
            line: 322,
            column: 61
          }
        },
        "138": {
          start: {
            line: 326,
            column: 4
          },
          end: {
            line: 351,
            column: 6
          }
        },
        "139": {
          start: {
            line: 327,
            column: 23
          },
          end: {
            line: 327,
            column: 30
          }
        },
        "140": {
          start: {
            line: 328,
            column: 17
          },
          end: {
            line: 328,
            column: 40
          }
        },
        "141": {
          start: {
            line: 329,
            column: 22
          },
          end: {
            line: 333,
            column: 7
          }
        },
        "142": {
          start: {
            line: 335,
            column: 6
          },
          end: {
            line: 337,
            column: 7
          }
        },
        "143": {
          start: {
            line: 336,
            column: 8
          },
          end: {
            line: 336,
            column: 30
          }
        },
        "144": {
          start: {
            line: 339,
            column: 6
          },
          end: {
            line: 342,
            column: 7
          }
        },
        "145": {
          start: {
            line: 340,
            column: 8
          },
          end: {
            line: 340,
            column: 42
          }
        },
        "146": {
          start: {
            line: 341,
            column: 8
          },
          end: {
            line: 341,
            column: 37
          }
        },
        "147": {
          start: {
            line: 344,
            column: 6
          },
          end: {
            line: 350,
            column: 7
          }
        },
        "148": {
          start: {
            line: 345,
            column: 8
          },
          end: {
            line: 347,
            column: 9
          }
        },
        "149": {
          start: {
            line: 346,
            column: 10
          },
          end: {
            line: 346,
            column: 60
          }
        },
        "150": {
          start: {
            line: 349,
            column: 8
          },
          end: {
            line: 349,
            column: 22
          }
        },
        "151": {
          start: {
            line: 361,
            column: 0
          },
          end: {
            line: 377,
            column: 2
          }
        },
        "152": {
          start: {
            line: 363,
            column: 2
          },
          end: {
            line: 365,
            column: 3
          }
        },
        "153": {
          start: {
            line: 364,
            column: 4
          },
          end: {
            line: 364,
            column: 26
          }
        },
        "154": {
          start: {
            line: 367,
            column: 19
          },
          end: {
            line: 367,
            column: 26
          }
        },
        "155": {
          start: {
            line: 368,
            column: 19
          },
          end: {
            line: 368,
            column: 52
          }
        },
        "156": {
          start: {
            line: 369,
            column: 20
          },
          end: {
            line: 369,
            column: 70
          }
        },
        "157": {
          start: {
            line: 371,
            column: 2
          },
          end: {
            line: 376,
            column: 4
          }
        },
        "158": {
          start: {
            line: 372,
            column: 20
          },
          end: {
            line: 372,
            column: 27
          }
        },
        "159": {
          start: {
            line: 373,
            column: 17
          },
          end: {
            line: 373,
            column: 39
          }
        },
        "160": {
          start: {
            line: 374,
            column: 19
          },
          end: {
            line: 374,
            column: 52
          }
        },
        "161": {
          start: {
            line: 375,
            column: 4
          },
          end: {
            line: 375,
            column: 51
          }
        },
        "162": {
          start: {
            line: 385,
            column: 0
          },
          end: {
            line: 385,
            column: 38
          }
        },
        "163": {
          start: {
            line: 386,
            column: 0
          },
          end: {
            line: 386,
            column: 33
          }
        },
        "164": {
          start: {
            line: 387,
            column: 0
          },
          end: {
            line: 390,
            column: 1
          }
        },
        "165": {
          start: {
            line: 388,
            column: 2
          },
          end: {
            line: 388,
            column: 33
          }
        },
        "166": {
          start: {
            line: 389,
            column: 2
          },
          end: {
            line: 389,
            column: 34
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 58,
              column: 2
            },
            end: {
              line: 58,
              column: 3
            }
          },
          loc: {
            start: {
              line: 58,
              column: 31
            },
            end: {
              line: 89,
              column: 3
            }
          },
          line: 58
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 72,
              column: 16
            },
            end: {
              line: 72,
              column: 17
            }
          },
          loc: {
            start: {
              line: 72,
              column: 29
            },
            end: {
              line: 72,
              column: 50
            }
          },
          line: 72
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 93,
              column: 2
            },
            end: {
              line: 93,
              column: 3
            }
          },
          loc: {
            start: {
              line: 93,
              column: 23
            },
            end: {
              line: 95,
              column: 3
            }
          },
          line: 93
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 97,
              column: 2
            },
            end: {
              line: 97,
              column: 3
            }
          },
          loc: {
            start: {
              line: 97,
              column: 23
            },
            end: {
              line: 99,
              column: 3
            }
          },
          line: 97
        },
        "4": {
          name: "(anonymous_4)",
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
              column: 11
            },
            end: {
              line: 109,
              column: 3
            }
          },
          line: 103
        },
        "5": {
          name: "(anonymous_5)",
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
              column: 9
            },
            end: {
              line: 192,
              column: 3
            }
          },
          line: 111
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 122,
              column: 16
            },
            end: {
              line: 122,
              column: 17
            }
          },
          loc: {
            start: {
              line: 122,
              column: 24
            },
            end: {
              line: 128,
              column: 9
            }
          },
          line: 122
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 171,
              column: 21
            },
            end: {
              line: 171,
              column: 22
            }
          },
          loc: {
            start: {
              line: 171,
              column: 27
            },
            end: {
              line: 181,
              column: 5
            }
          },
          line: 171
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 194,
              column: 2
            },
            end: {
              line: 194,
              column: 3
            }
          },
          loc: {
            start: {
              line: 194,
              column: 9
            },
            end: {
              line: 248,
              column: 3
            }
          },
          line: 194
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 234,
              column: 21
            },
            end: {
              line: 234,
              column: 22
            }
          },
          loc: {
            start: {
              line: 234,
              column: 27
            },
            end: {
              line: 240,
              column: 5
            }
          },
          line: 234
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 250,
              column: 2
            },
            end: {
              line: 250,
              column: 3
            }
          },
          loc: {
            start: {
              line: 250,
              column: 36
            },
            end: {
              line: 252,
              column: 3
            }
          },
          line: 250
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 254,
              column: 2
            },
            end: {
              line: 254,
              column: 3
            }
          },
          loc: {
            start: {
              line: 254,
              column: 12
            },
            end: {
              line: 262,
              column: 3
            }
          },
          line: 254
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 266,
              column: 2
            },
            end: {
              line: 266,
              column: 3
            }
          },
          loc: {
            start: {
              line: 266,
              column: 21
            },
            end: {
              line: 274,
              column: 3
            }
          },
          line: 266
        },
        "13": {
          name: "(anonymous_13)",
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
              column: 18
            },
            end: {
              line: 279,
              column: 3
            }
          },
          line: 276
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 281,
              column: 2
            },
            end: {
              line: 281,
              column: 3
            }
          },
          loc: {
            start: {
              line: 281,
              column: 15
            },
            end: {
              line: 306,
              column: 3
            }
          },
          line: 281
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 298,
              column: 21
            },
            end: {
              line: 298,
              column: 22
            }
          },
          loc: {
            start: {
              line: 298,
              column: 37
            },
            end: {
              line: 303,
              column: 5
            }
          },
          line: 298
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 308,
              column: 2
            },
            end: {
              line: 308,
              column: 3
            }
          },
          loc: {
            start: {
              line: 308,
              column: 51
            },
            end: {
              line: 316,
              column: 3
            }
          },
          line: 308
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 320,
              column: 2
            },
            end: {
              line: 320,
              column: 3
            }
          },
          loc: {
            start: {
              line: 320,
              column: 40
            },
            end: {
              line: 323,
              column: 3
            }
          },
          line: 320
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 325,
              column: 2
            },
            end: {
              line: 325,
              column: 3
            }
          },
          loc: {
            start: {
              line: 325,
              column: 34
            },
            end: {
              line: 352,
              column: 3
            }
          },
          line: 325
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 326,
              column: 21
            },
            end: {
              line: 326,
              column: 22
            }
          },
          loc: {
            start: {
              line: 326,
              column: 33
            },
            end: {
              line: 351,
              column: 5
            }
          },
          line: 326
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 361,
              column: 59
            },
            end: {
              line: 361,
              column: 60
            }
          },
          loc: {
            start: {
              line: 361,
              column: 76
            },
            end: {
              line: 377,
              column: 1
            }
          },
          line: 361
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 371,
              column: 20
            },
            end: {
              line: 371,
              column: 21
            }
          },
          loc: {
            start: {
              line: 371,
              column: 32
            },
            end: {
              line: 376,
              column: 3
            }
          },
          line: 371
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 387,
              column: 24
            },
            end: {
              line: 387,
              column: 25
            }
          },
          loc: {
            start: {
              line: 387,
              column: 30
            },
            end: {
              line: 390,
              column: 1
            }
          },
          line: 387
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 74,
              column: 6
            },
            end: {
              line: 77,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 74,
              column: 6
            },
            end: {
              line: 77,
              column: 7
            }
          }, {
            start: {
              line: 74,
              column: 6
            },
            end: {
              line: 77,
              column: 7
            }
          }],
          line: 74
        },
        "1": {
          loc: {
            start: {
              line: 74,
              column: 10
            },
            end: {
              line: 74,
              column: 55
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 74,
              column: 10
            },
            end: {
              line: 74,
              column: 27
            }
          }, {
            start: {
              line: 74,
              column: 31
            },
            end: {
              line: 74,
              column: 55
            }
          }],
          line: 74
        },
        "2": {
          loc: {
            start: {
              line: 80,
              column: 19
            },
            end: {
              line: 80,
              column: 65
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 80,
              column: 41
            },
            end: {
              line: 80,
              column: 58
            }
          }, {
            start: {
              line: 80,
              column: 61
            },
            end: {
              line: 80,
              column: 65
            }
          }],
          line: 80
        },
        "3": {
          loc: {
            start: {
              line: 82,
              column: 4
            },
            end: {
              line: 84,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 82,
              column: 4
            },
            end: {
              line: 84,
              column: 5
            }
          }, {
            start: {
              line: 82,
              column: 4
            },
            end: {
              line: 84,
              column: 5
            }
          }],
          line: 82
        },
        "4": {
          loc: {
            start: {
              line: 86,
              column: 4
            },
            end: {
              line: 88,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 86,
              column: 4
            },
            end: {
              line: 88,
              column: 5
            }
          }, {
            start: {
              line: 86,
              column: 4
            },
            end: {
              line: 88,
              column: 5
            }
          }],
          line: 86
        },
        "5": {
          loc: {
            start: {
              line: 104,
              column: 4
            },
            end: {
              line: 108,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 104,
              column: 4
            },
            end: {
              line: 108,
              column: 5
            }
          }, {
            start: {
              line: 104,
              column: 4
            },
            end: {
              line: 108,
              column: 5
            }
          }],
          line: 104
        },
        "6": {
          loc: {
            start: {
              line: 112,
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
              line: 112,
              column: 4
            },
            end: {
              line: 115,
              column: 5
            }
          }, {
            start: {
              line: 112,
              column: 4
            },
            end: {
              line: 115,
              column: 5
            }
          }],
          line: 112
        },
        "7": {
          loc: {
            start: {
              line: 112,
              column: 8
            },
            end: {
              line: 113,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 112,
              column: 8
            },
            end: {
              line: 112,
              column: 29
            }
          }, {
            start: {
              line: 113,
              column: 6
            },
            end: {
              line: 113,
              column: 48
            }
          }],
          line: 112
        },
        "8": {
          loc: {
            start: {
              line: 120,
              column: 4
            },
            end: {
              line: 133,
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
              line: 133,
              column: 5
            }
          }, {
            start: {
              line: 120,
              column: 4
            },
            end: {
              line: 133,
              column: 5
            }
          }],
          line: 120
        },
        "9": {
          loc: {
            start: {
              line: 123,
              column: 10
            },
            end: {
              line: 125,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 123,
              column: 10
            },
            end: {
              line: 125,
              column: 11
            }
          }, {
            start: {
              line: 123,
              column: 10
            },
            end: {
              line: 125,
              column: 11
            }
          }],
          line: 123
        },
        "10": {
          loc: {
            start: {
              line: 130,
              column: 6
            },
            end: {
              line: 132,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 130,
              column: 6
            },
            end: {
              line: 132,
              column: 7
            }
          }, {
            start: {
              line: 130,
              column: 6
            },
            end: {
              line: 132,
              column: 7
            }
          }],
          line: 130
        },
        "11": {
          loc: {
            start: {
              line: 135,
              column: 4
            },
            end: {
              line: 140,
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
              line: 140,
              column: 5
            }
          }, {
            start: {
              line: 135,
              column: 4
            },
            end: {
              line: 140,
              column: 5
            }
          }],
          line: 135
        },
        "12": {
          loc: {
            start: {
              line: 137,
              column: 6
            },
            end: {
              line: 139,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 137,
              column: 6
            },
            end: {
              line: 139,
              column: 7
            }
          }, {
            start: {
              line: 137,
              column: 6
            },
            end: {
              line: 139,
              column: 7
            }
          }],
          line: 137
        },
        "13": {
          loc: {
            start: {
              line: 137,
              column: 10
            },
            end: {
              line: 137,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 137,
              column: 10
            },
            end: {
              line: 137,
              column: 21
            }
          }, {
            start: {
              line: 137,
              column: 25
            },
            end: {
              line: 137,
              column: 53
            }
          }],
          line: 137
        },
        "14": {
          loc: {
            start: {
              line: 144,
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
              line: 144,
              column: 4
            },
            end: {
              line: 146,
              column: 5
            }
          }, {
            start: {
              line: 144,
              column: 4
            },
            end: {
              line: 146,
              column: 5
            }
          }],
          line: 144
        },
        "15": {
          loc: {
            start: {
              line: 148,
              column: 4
            },
            end: {
              line: 153,
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
              line: 153,
              column: 5
            }
          }, {
            start: {
              line: 148,
              column: 4
            },
            end: {
              line: 153,
              column: 5
            }
          }],
          line: 148
        },
        "16": {
          loc: {
            start: {
              line: 150,
              column: 6
            },
            end: {
              line: 152,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 150,
              column: 6
            },
            end: {
              line: 152,
              column: 7
            }
          }, {
            start: {
              line: 150,
              column: 6
            },
            end: {
              line: 152,
              column: 7
            }
          }],
          line: 150
        },
        "17": {
          loc: {
            start: {
              line: 163,
              column: 4
            },
            end: {
              line: 167,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 163,
              column: 4
            },
            end: {
              line: 167,
              column: 5
            }
          }, {
            start: {
              line: 163,
              column: 4
            },
            end: {
              line: 167,
              column: 5
            }
          }],
          line: 163
        },
        "18": {
          loc: {
            start: {
              line: 195,
              column: 4
            },
            end: {
              line: 198,
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
              line: 198,
              column: 5
            }
          }, {
            start: {
              line: 195,
              column: 4
            },
            end: {
              line: 198,
              column: 5
            }
          }],
          line: 195
        },
        "19": {
          loc: {
            start: {
              line: 195,
              column: 8
            },
            end: {
              line: 196,
              column: 49
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 195,
              column: 8
            },
            end: {
              line: 195,
              column: 29
            }
          }, {
            start: {
              line: 196,
              column: 6
            },
            end: {
              line: 196,
              column: 49
            }
          }],
          line: 195
        },
        "20": {
          loc: {
            start: {
              line: 202,
              column: 4
            },
            end: {
              line: 204,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 202,
              column: 4
            },
            end: {
              line: 204,
              column: 5
            }
          }, {
            start: {
              line: 202,
              column: 4
            },
            end: {
              line: 204,
              column: 5
            }
          }],
          line: 202
        },
        "21": {
          loc: {
            start: {
              line: 217,
              column: 4
            },
            end: {
              line: 230,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 217,
              column: 4
            },
            end: {
              line: 230,
              column: 5
            }
          }, {
            start: {
              line: 217,
              column: 4
            },
            end: {
              line: 230,
              column: 5
            }
          }],
          line: 217
        },
        "22": {
          loc: {
            start: {
              line: 222,
              column: 8
            },
            end: {
              line: 228,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 222,
              column: 8
            },
            end: {
              line: 228,
              column: 9
            }
          }, {
            start: {
              line: 222,
              column: 8
            },
            end: {
              line: 228,
              column: 9
            }
          }],
          line: 222
        },
        "23": {
          loc: {
            start: {
              line: 224,
              column: 10
            },
            end: {
              line: 227,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 224,
              column: 10
            },
            end: {
              line: 227,
              column: 11
            }
          }, {
            start: {
              line: 224,
              column: 10
            },
            end: {
              line: 227,
              column: 11
            }
          }],
          line: 224
        },
        "24": {
          loc: {
            start: {
              line: 278,
              column: 11
            },
            end: {
              line: 278,
              column: 56
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 278,
              column: 22
            },
            end: {
              line: 278,
              column: 37
            }
          }, {
            start: {
              line: 278,
              column: 40
            },
            end: {
              line: 278,
              column: 56
            }
          }],
          line: 278
        },
        "25": {
          loc: {
            start: {
              line: 284,
              column: 4
            },
            end: {
              line: 293,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 284,
              column: 4
            },
            end: {
              line: 293,
              column: 5
            }
          }, {
            start: {
              line: 284,
              column: 4
            },
            end: {
              line: 293,
              column: 5
            }
          }],
          line: 284
        },
        "26": {
          loc: {
            start: {
              line: 288,
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
              line: 288,
              column: 6
            },
            end: {
              line: 290,
              column: 7
            }
          }, {
            start: {
              line: 288,
              column: 6
            },
            end: {
              line: 290,
              column: 7
            }
          }],
          line: 288
        },
        "27": {
          loc: {
            start: {
              line: 311,
              column: 4
            },
            end: {
              line: 315,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 311,
              column: 4
            },
            end: {
              line: 315,
              column: 5
            }
          }, {
            start: {
              line: 311,
              column: 4
            },
            end: {
              line: 315,
              column: 5
            }
          }],
          line: 311
        },
        "28": {
          loc: {
            start: {
              line: 322,
              column: 11
            },
            end: {
              line: 322,
              column: 61
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 322,
              column: 22
            },
            end: {
              line: 322,
              column: 54
            }
          }, {
            start: {
              line: 322,
              column: 57
            },
            end: {
              line: 322,
              column: 61
            }
          }],
          line: 322
        },
        "29": {
          loc: {
            start: {
              line: 332,
              column: 12
            },
            end: {
              line: 332,
              column: 62
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 332,
              column: 51
            },
            end: {
              line: 332,
              column: 57
            }
          }, {
            start: {
              line: 332,
              column: 60
            },
            end: {
              line: 332,
              column: 62
            }
          }],
          line: 332
        },
        "30": {
          loc: {
            start: {
              line: 332,
              column: 12
            },
            end: {
              line: 332,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 332,
              column: 12
            },
            end: {
              line: 332,
              column: 38
            }
          }, {
            start: {
              line: 332,
              column: 42
            },
            end: {
              line: 332,
              column: 48
            }
          }],
          line: 332
        },
        "31": {
          loc: {
            start: {
              line: 335,
              column: 6
            },
            end: {
              line: 337,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 335,
              column: 6
            },
            end: {
              line: 337,
              column: 7
            }
          }, {
            start: {
              line: 335,
              column: 6
            },
            end: {
              line: 337,
              column: 7
            }
          }],
          line: 335
        },
        "32": {
          loc: {
            start: {
              line: 335,
              column: 10
            },
            end: {
              line: 335,
              column: 91
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 335,
              column: 10
            },
            end: {
              line: 335,
              column: 15
            }
          }, {
            start: {
              line: 335,
              column: 19
            },
            end: {
              line: 335,
              column: 33
            }
          }, {
            start: {
              line: 335,
              column: 37
            },
            end: {
              line: 335,
              column: 63
            }
          }, {
            start: {
              line: 335,
              column: 67
            },
            end: {
              line: 335,
              column: 91
            }
          }],
          line: 335
        },
        "33": {
          loc: {
            start: {
              line: 339,
              column: 6
            },
            end: {
              line: 342,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 339,
              column: 6
            },
            end: {
              line: 342,
              column: 7
            }
          }, {
            start: {
              line: 339,
              column: 6
            },
            end: {
              line: 342,
              column: 7
            }
          }],
          line: 339
        },
        "34": {
          loc: {
            start: {
              line: 344,
              column: 6
            },
            end: {
              line: 350,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 344,
              column: 6
            },
            end: {
              line: 350,
              column: 7
            }
          }, {
            start: {
              line: 344,
              column: 6
            },
            end: {
              line: 350,
              column: 7
            }
          }],
          line: 344
        },
        "35": {
          loc: {
            start: {
              line: 345,
              column: 8
            },
            end: {
              line: 347,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 345,
              column: 8
            },
            end: {
              line: 347,
              column: 9
            }
          }, {
            start: {
              line: 345,
              column: 8
            },
            end: {
              line: 347,
              column: 9
            }
          }],
          line: 345
        },
        "36": {
          loc: {
            start: {
              line: 363,
              column: 2
            },
            end: {
              line: 365,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 363,
              column: 2
            },
            end: {
              line: 365,
              column: 3
            }
          }, {
            start: {
              line: 363,
              column: 2
            },
            end: {
              line: 365,
              column: 3
            }
          }],
          line: 363
        },
        "37": {
          loc: {
            start: {
              line: 374,
              column: 19
            },
            end: {
              line: 374,
              column: 52
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 374,
              column: 26
            },
            end: {
              line: 374,
              column: 34
            }
          }, {
            start: {
              line: 374,
              column: 37
            },
            end: {
              line: 374,
              column: 52
            }
          }],
          line: 374
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
        "166": 0
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
        "32": [0, 0, 0, 0],
        "33": [0, 0],
        "34": [0, 0],
        "35": [0, 0],
        "36": [0, 0],
        "37": [0, 0]
      },
      _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
      hash: "d029fb23db6c75009e7bc6524d436fde90cf0434"
    };
    var coverage = global[gcv] || (global[gcv] = {});

    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }

    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_2itwqk888x = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }

  cov_2itwqk888x();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_2itwqk888x().s[0]++, 'collapse');
  var VERSION = (cov_2itwqk888x().s[1]++, '4.6.0');
  var DATA_KEY = (cov_2itwqk888x().s[2]++, 'bs.collapse');
  var EVENT_KEY = (cov_2itwqk888x().s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_2itwqk888x().s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_2itwqk888x().s[5]++, $__default['default'].fn[NAME]);
  var Default = (cov_2itwqk888x().s[6]++, {
    toggle: true,
    parent: ''
  });
  var DefaultType = (cov_2itwqk888x().s[7]++, {
    toggle: 'boolean',
    parent: '(string|element)'
  });
  var EVENT_SHOW = (cov_2itwqk888x().s[8]++, "show" + EVENT_KEY);
  var EVENT_SHOWN = (cov_2itwqk888x().s[9]++, "shown" + EVENT_KEY);
  var EVENT_HIDE = (cov_2itwqk888x().s[10]++, "hide" + EVENT_KEY);
  var EVENT_HIDDEN = (cov_2itwqk888x().s[11]++, "hidden" + EVENT_KEY);
  var EVENT_CLICK_DATA_API = (cov_2itwqk888x().s[12]++, "click" + EVENT_KEY + DATA_API_KEY);
  var CLASS_NAME_SHOW = (cov_2itwqk888x().s[13]++, 'show');
  var CLASS_NAME_COLLAPSE = (cov_2itwqk888x().s[14]++, 'collapse');
  var CLASS_NAME_COLLAPSING = (cov_2itwqk888x().s[15]++, 'collapsing');
  var CLASS_NAME_COLLAPSED = (cov_2itwqk888x().s[16]++, 'collapsed');
  var DIMENSION_WIDTH = (cov_2itwqk888x().s[17]++, 'width');
  var DIMENSION_HEIGHT = (cov_2itwqk888x().s[18]++, 'height');
  var SELECTOR_ACTIVES = (cov_2itwqk888x().s[19]++, '.show, .collapsing');
  var SELECTOR_DATA_TOGGLE = (cov_2itwqk888x().s[20]++, '[data-toggle="collapse"]');
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = /*#__PURE__*/function () {
    function Collapse(element, config) {
      cov_2itwqk888x().f[0]++;
      cov_2itwqk888x().s[21]++;
      this._isTransitioning = false;
      cov_2itwqk888x().s[22]++;
      this._element = element;
      cov_2itwqk888x().s[23]++;
      this._config = this._getConfig(config);
      cov_2itwqk888x().s[24]++;
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = (cov_2itwqk888x().s[25]++, [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE)));
      cov_2itwqk888x().s[26]++;

      for (var i = (cov_2itwqk888x().s[27]++, 0), len = (cov_2itwqk888x().s[28]++, toggleList.length); i < len; i++) {
        var elem = (cov_2itwqk888x().s[29]++, toggleList[i]);
        var selector = (cov_2itwqk888x().s[30]++, Util__default['default'].getSelectorFromElement(elem));
        var filterElement = (cov_2itwqk888x().s[31]++, [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          cov_2itwqk888x().f[1]++;
          cov_2itwqk888x().s[32]++;
          return foundElem === element;
        }));
        cov_2itwqk888x().s[33]++;

        if ((cov_2itwqk888x().b[1][0]++, selector !== null) && (cov_2itwqk888x().b[1][1]++, filterElement.length > 0)) {
          cov_2itwqk888x().b[0][0]++;
          cov_2itwqk888x().s[34]++;
          this._selector = selector;
          cov_2itwqk888x().s[35]++;

          this._triggerArray.push(elem);
        } else {
          cov_2itwqk888x().b[0][1]++;
        }
      }

      cov_2itwqk888x().s[36]++;
      this._parent = this._config.parent ? (cov_2itwqk888x().b[2][0]++, this._getParent()) : (cov_2itwqk888x().b[2][1]++, null);
      cov_2itwqk888x().s[37]++;

      if (!this._config.parent) {
        cov_2itwqk888x().b[3][0]++;
        cov_2itwqk888x().s[38]++;

        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      } else {
        cov_2itwqk888x().b[3][1]++;
      }

      cov_2itwqk888x().s[39]++;

      if (this._config.toggle) {
        cov_2itwqk888x().b[4][0]++;
        cov_2itwqk888x().s[40]++;
        this.toggle();
      } else {
        cov_2itwqk888x().b[4][1]++;
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      cov_2itwqk888x().f[4]++;
      cov_2itwqk888x().s[43]++;

      if ($__default['default'](this._element).hasClass(CLASS_NAME_SHOW)) {
        cov_2itwqk888x().b[5][0]++;
        cov_2itwqk888x().s[44]++;
        this.hide();
      } else {
        cov_2itwqk888x().b[5][1]++;
        cov_2itwqk888x().s[45]++;
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      cov_2itwqk888x().f[5]++;
      cov_2itwqk888x().s[46]++;

      if ((cov_2itwqk888x().b[7][0]++, this._isTransitioning) || (cov_2itwqk888x().b[7][1]++, $__default['default'](this._element).hasClass(CLASS_NAME_SHOW))) {
        cov_2itwqk888x().b[6][0]++;
        cov_2itwqk888x().s[47]++;
        return;
      } else {
        cov_2itwqk888x().b[6][1]++;
      }

      var actives;
      var activesData;
      cov_2itwqk888x().s[48]++;

      if (this._parent) {
        cov_2itwqk888x().b[8][0]++;
        cov_2itwqk888x().s[49]++;
        actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
          cov_2itwqk888x().f[6]++;
          cov_2itwqk888x().s[50]++;

          if (typeof _this._config.parent === 'string') {
            cov_2itwqk888x().b[9][0]++;
            cov_2itwqk888x().s[51]++;
            return elem.getAttribute('data-parent') === _this._config.parent;
          } else {
            cov_2itwqk888x().b[9][1]++;
          }

          cov_2itwqk888x().s[52]++;
          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });
        cov_2itwqk888x().s[53]++;

        if (actives.length === 0) {
          cov_2itwqk888x().b[10][0]++;
          cov_2itwqk888x().s[54]++;
          actives = null;
        } else {
          cov_2itwqk888x().b[10][1]++;
        }
      } else {
        cov_2itwqk888x().b[8][1]++;
      }

      cov_2itwqk888x().s[55]++;

      if (actives) {
        cov_2itwqk888x().b[11][0]++;
        cov_2itwqk888x().s[56]++;
        activesData = $__default['default'](actives).not(this._selector).data(DATA_KEY);
        cov_2itwqk888x().s[57]++;

        if ((cov_2itwqk888x().b[13][0]++, activesData) && (cov_2itwqk888x().b[13][1]++, activesData._isTransitioning)) {
          cov_2itwqk888x().b[12][0]++;
          cov_2itwqk888x().s[58]++;
          return;
        } else {
          cov_2itwqk888x().b[12][1]++;
        }
      } else {
        cov_2itwqk888x().b[11][1]++;
      }

      var startEvent = (cov_2itwqk888x().s[59]++, $__default['default'].Event(EVENT_SHOW));
      cov_2itwqk888x().s[60]++;
      $__default['default'](this._element).trigger(startEvent);
      cov_2itwqk888x().s[61]++;

      if (startEvent.isDefaultPrevented()) {
        cov_2itwqk888x().b[14][0]++;
        cov_2itwqk888x().s[62]++;
        return;
      } else {
        cov_2itwqk888x().b[14][1]++;
      }

      cov_2itwqk888x().s[63]++;

      if (actives) {
        cov_2itwqk888x().b[15][0]++;
        cov_2itwqk888x().s[64]++;

        Collapse._jQueryInterface.call($__default['default'](actives).not(this._selector), 'hide');

        cov_2itwqk888x().s[65]++;

        if (!activesData) {
          cov_2itwqk888x().b[16][0]++;
          cov_2itwqk888x().s[66]++;
          $__default['default'](actives).data(DATA_KEY, null);
        } else {
          cov_2itwqk888x().b[16][1]++;
        }
      } else {
        cov_2itwqk888x().b[15][1]++;
      }

      var dimension = (cov_2itwqk888x().s[67]++, this._getDimension());
      cov_2itwqk888x().s[68]++;
      $__default['default'](this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
      cov_2itwqk888x().s[69]++;
      this._element.style[dimension] = 0;
      cov_2itwqk888x().s[70]++;

      if (this._triggerArray.length) {
        cov_2itwqk888x().b[17][0]++;
        cov_2itwqk888x().s[71]++;
        $__default['default'](this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
      } else {
        cov_2itwqk888x().b[17][1]++;
      }

      cov_2itwqk888x().s[72]++;
      this.setTransitioning(true);
      cov_2itwqk888x().s[73]++;

      var complete = function complete() {
        cov_2itwqk888x().f[7]++;
        cov_2itwqk888x().s[74]++;
        $__default['default'](_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW);
        cov_2itwqk888x().s[75]++;
        _this._element.style[dimension] = '';
        cov_2itwqk888x().s[76]++;

        _this.setTransitioning(false);

        cov_2itwqk888x().s[77]++;
        $__default['default'](_this._element).trigger(EVENT_SHOWN);
      };

      var capitalizedDimension = (cov_2itwqk888x().s[78]++, dimension[0].toUpperCase() + dimension.slice(1));
      var scrollSize = (cov_2itwqk888x().s[79]++, "scroll" + capitalizedDimension);
      var transitionDuration = (cov_2itwqk888x().s[80]++, Util__default['default'].getTransitionDurationFromElement(this._element));
      cov_2itwqk888x().s[81]++;
      $__default['default'](this._element).one(Util__default['default'].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      cov_2itwqk888x().s[82]++;
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      cov_2itwqk888x().f[8]++;
      cov_2itwqk888x().s[83]++;

      if ((cov_2itwqk888x().b[19][0]++, this._isTransitioning) || (cov_2itwqk888x().b[19][1]++, !$__default['default'](this._element).hasClass(CLASS_NAME_SHOW))) {
        cov_2itwqk888x().b[18][0]++;
        cov_2itwqk888x().s[84]++;
        return;
      } else {
        cov_2itwqk888x().b[18][1]++;
      }

      var startEvent = (cov_2itwqk888x().s[85]++, $__default['default'].Event(EVENT_HIDE));
      cov_2itwqk888x().s[86]++;
      $__default['default'](this._element).trigger(startEvent);
      cov_2itwqk888x().s[87]++;

      if (startEvent.isDefaultPrevented()) {
        cov_2itwqk888x().b[20][0]++;
        cov_2itwqk888x().s[88]++;
        return;
      } else {
        cov_2itwqk888x().b[20][1]++;
      }

      var dimension = (cov_2itwqk888x().s[89]++, this._getDimension());
      cov_2itwqk888x().s[90]++;
      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      cov_2itwqk888x().s[91]++;
      Util__default['default'].reflow(this._element);
      cov_2itwqk888x().s[92]++;
      $__default['default'](this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW);
      var triggerArrayLength = (cov_2itwqk888x().s[93]++, this._triggerArray.length);
      cov_2itwqk888x().s[94]++;

      if (triggerArrayLength > 0) {
        cov_2itwqk888x().b[21][0]++;
        cov_2itwqk888x().s[95]++;

        for (var i = (cov_2itwqk888x().s[96]++, 0); i < triggerArrayLength; i++) {
          var trigger = (cov_2itwqk888x().s[97]++, this._triggerArray[i]);
          var selector = (cov_2itwqk888x().s[98]++, Util__default['default'].getSelectorFromElement(trigger));
          cov_2itwqk888x().s[99]++;

          if (selector !== null) {
            cov_2itwqk888x().b[22][0]++;
            var $elem = (cov_2itwqk888x().s[100]++, $__default['default']([].slice.call(document.querySelectorAll(selector))));
            cov_2itwqk888x().s[101]++;

            if (!$elem.hasClass(CLASS_NAME_SHOW)) {
              cov_2itwqk888x().b[23][0]++;
              cov_2itwqk888x().s[102]++;
              $__default['default'](trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
            } else {
              cov_2itwqk888x().b[23][1]++;
            }
          } else {
            cov_2itwqk888x().b[22][1]++;
          }
        }
      } else {
        cov_2itwqk888x().b[21][1]++;
      }

      cov_2itwqk888x().s[103]++;
      this.setTransitioning(true);
      cov_2itwqk888x().s[104]++;

      var complete = function complete() {
        cov_2itwqk888x().f[9]++;
        cov_2itwqk888x().s[105]++;

        _this2.setTransitioning(false);

        cov_2itwqk888x().s[106]++;
        $__default['default'](_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN);
      };

      cov_2itwqk888x().s[107]++;
      this._element.style[dimension] = '';
      var transitionDuration = (cov_2itwqk888x().s[108]++, Util__default['default'].getTransitionDurationFromElement(this._element));
      cov_2itwqk888x().s[109]++;
      $__default['default'](this._element).one(Util__default['default'].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      cov_2itwqk888x().f[10]++;
      cov_2itwqk888x().s[110]++;
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      cov_2itwqk888x().f[11]++;
      cov_2itwqk888x().s[111]++;
      $__default['default'].removeData(this._element, DATA_KEY);
      cov_2itwqk888x().s[112]++;
      this._config = null;
      cov_2itwqk888x().s[113]++;
      this._parent = null;
      cov_2itwqk888x().s[114]++;
      this._element = null;
      cov_2itwqk888x().s[115]++;
      this._triggerArray = null;
      cov_2itwqk888x().s[116]++;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      cov_2itwqk888x().f[12]++;
      cov_2itwqk888x().s[117]++;
      config = _extends({}, Default, config);
      cov_2itwqk888x().s[118]++;
      config.toggle = Boolean(config.toggle); // Coerce string values

      cov_2itwqk888x().s[119]++;
      Util__default['default'].typeCheckConfig(NAME, config, DefaultType);
      cov_2itwqk888x().s[120]++;
      return config;
    };

    _proto._getDimension = function _getDimension() {
      cov_2itwqk888x().f[13]++;
      var hasWidth = (cov_2itwqk888x().s[121]++, $__default['default'](this._element).hasClass(DIMENSION_WIDTH));
      cov_2itwqk888x().s[122]++;
      return hasWidth ? (cov_2itwqk888x().b[24][0]++, DIMENSION_WIDTH) : (cov_2itwqk888x().b[24][1]++, DIMENSION_HEIGHT);
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      cov_2itwqk888x().f[14]++;
      var parent;
      cov_2itwqk888x().s[123]++;

      if (Util__default['default'].isElement(this._config.parent)) {
        cov_2itwqk888x().b[25][0]++;
        cov_2itwqk888x().s[124]++;
        parent = this._config.parent; // It's a jQuery object

        cov_2itwqk888x().s[125]++;

        if (typeof this._config.parent.jquery !== 'undefined') {
          cov_2itwqk888x().b[26][0]++;
          cov_2itwqk888x().s[126]++;
          parent = this._config.parent[0];
        } else {
          cov_2itwqk888x().b[26][1]++;
        }
      } else {
        cov_2itwqk888x().b[25][1]++;
        cov_2itwqk888x().s[127]++;
        parent = document.querySelector(this._config.parent);
      }

      var selector = (cov_2itwqk888x().s[128]++, "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]");
      var children = (cov_2itwqk888x().s[129]++, [].slice.call(parent.querySelectorAll(selector)));
      cov_2itwqk888x().s[130]++;
      $__default['default'](children).each(function (i, element) {
        cov_2itwqk888x().f[15]++;
        cov_2itwqk888x().s[131]++;

        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      cov_2itwqk888x().s[132]++;
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      cov_2itwqk888x().f[16]++;
      var isOpen = (cov_2itwqk888x().s[133]++, $__default['default'](element).hasClass(CLASS_NAME_SHOW));
      cov_2itwqk888x().s[134]++;

      if (triggerArray.length) {
        cov_2itwqk888x().b[27][0]++;
        cov_2itwqk888x().s[135]++;
        $__default['default'](triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      } else {
        cov_2itwqk888x().b[27][1]++;
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      cov_2itwqk888x().f[17]++;
      var selector = (cov_2itwqk888x().s[136]++, Util__default['default'].getSelectorFromElement(element));
      cov_2itwqk888x().s[137]++;
      return selector ? (cov_2itwqk888x().b[28][0]++, document.querySelector(selector)) : (cov_2itwqk888x().b[28][1]++, null);
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      cov_2itwqk888x().f[18]++;
      cov_2itwqk888x().s[138]++;
      return this.each(function () {
        cov_2itwqk888x().f[19]++;
        var $element = (cov_2itwqk888x().s[139]++, $__default['default'](this));
        var data = (cov_2itwqk888x().s[140]++, $element.data(DATA_KEY));

        var _config = (cov_2itwqk888x().s[141]++, _extends({}, Default, $element.data(), (cov_2itwqk888x().b[30][0]++, typeof config === 'object') && (cov_2itwqk888x().b[30][1]++, config) ? (cov_2itwqk888x().b[29][0]++, config) : (cov_2itwqk888x().b[29][1]++, {})));

        cov_2itwqk888x().s[142]++;

        if ((cov_2itwqk888x().b[32][0]++, !data) && (cov_2itwqk888x().b[32][1]++, _config.toggle) && (cov_2itwqk888x().b[32][2]++, typeof config === 'string') && (cov_2itwqk888x().b[32][3]++, /show|hide/.test(config))) {
          cov_2itwqk888x().b[31][0]++;
          cov_2itwqk888x().s[143]++;
          _config.toggle = false;
        } else {
          cov_2itwqk888x().b[31][1]++;
        }

        cov_2itwqk888x().s[144]++;

        if (!data) {
          cov_2itwqk888x().b[33][0]++;
          cov_2itwqk888x().s[145]++;
          data = new Collapse(this, _config);
          cov_2itwqk888x().s[146]++;
          $element.data(DATA_KEY, data);
        } else {
          cov_2itwqk888x().b[33][1]++;
        }

        cov_2itwqk888x().s[147]++;

        if (typeof config === 'string') {
          cov_2itwqk888x().b[34][0]++;
          cov_2itwqk888x().s[148]++;

          if (typeof data[config] === 'undefined') {
            cov_2itwqk888x().b[35][0]++;
            cov_2itwqk888x().s[149]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_2itwqk888x().b[35][1]++;
          }

          cov_2itwqk888x().s[150]++;
          data[config]();
        } else {
          cov_2itwqk888x().b[34][1]++;
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        cov_2itwqk888x().f[2]++;
        cov_2itwqk888x().s[41]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_2itwqk888x().f[3]++;
        cov_2itwqk888x().s[42]++;
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


  cov_2itwqk888x().s[151]++;
  $__default['default'](document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    cov_2itwqk888x().f[20]++;
    cov_2itwqk888x().s[152]++;

    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      cov_2itwqk888x().b[36][0]++;
      cov_2itwqk888x().s[153]++;
      event.preventDefault();
    } else {
      cov_2itwqk888x().b[36][1]++;
    }

    var $trigger = (cov_2itwqk888x().s[154]++, $__default['default'](this));
    var selector = (cov_2itwqk888x().s[155]++, Util__default['default'].getSelectorFromElement(this));
    var selectors = (cov_2itwqk888x().s[156]++, [].slice.call(document.querySelectorAll(selector)));
    cov_2itwqk888x().s[157]++;
    $__default['default'](selectors).each(function () {
      cov_2itwqk888x().f[21]++;
      var $target = (cov_2itwqk888x().s[158]++, $__default['default'](this));
      var data = (cov_2itwqk888x().s[159]++, $target.data(DATA_KEY));
      var config = (cov_2itwqk888x().s[160]++, data ? (cov_2itwqk888x().b[37][0]++, 'toggle') : (cov_2itwqk888x().b[37][1]++, $trigger.data()));
      cov_2itwqk888x().s[161]++;

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  cov_2itwqk888x().s[162]++;
  $__default['default'].fn[NAME] = Collapse._jQueryInterface;
  cov_2itwqk888x().s[163]++;
  $__default['default'].fn[NAME].Constructor = Collapse;
  cov_2itwqk888x().s[164]++;

  $__default['default'].fn[NAME].noConflict = function () {
    cov_2itwqk888x().f[22]++;
    cov_2itwqk888x().s[165]++;
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    cov_2itwqk888x().s[166]++;
    return Collapse._jQueryInterface;
  };

  return Collapse;

})));
//# sourceMappingURL=collapse.js.map

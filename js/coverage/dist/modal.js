/*!
  * Bootstrap modal.js v4.6.2-1 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2022 https://github.com/MahdiMajidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Modal = factory(global.jQuery, global.Util));
})(this, (function ($, Util) { 'use strict';

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
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
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

  function cov_1bxzoyh6ou() {
    var path = "C:\\Users\\mmajidzade\\Documents\\GitHub\\bootstrap-v4-rtl\\js\\src\\modal.js";
    var hash = "8bdaa03a147e9576a44592c8d2ec8dc28568a24c";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "C:\\Users\\mmajidzade\\Documents\\GitHub\\bootstrap-v4-rtl\\js\\src\\modal.js",
      statementMap: {
        "0": {
          start: {
            line: 15,
            column: 13
          },
          end: {
            line: 15,
            column: 20
          }
        },
        "1": {
          start: {
            line: 16,
            column: 16
          },
          end: {
            line: 16,
            column: 23
          }
        },
        "2": {
          start: {
            line: 17,
            column: 17
          },
          end: {
            line: 17,
            column: 27
          }
        },
        "3": {
          start: {
            line: 18,
            column: 18
          },
          end: {
            line: 18,
            column: 32
          }
        },
        "4": {
          start: {
            line: 19,
            column: 21
          },
          end: {
            line: 19,
            column: 32
          }
        },
        "5": {
          start: {
            line: 20,
            column: 27
          },
          end: {
            line: 20,
            column: 37
          }
        },
        "6": {
          start: {
            line: 21,
            column: 23
          },
          end: {
            line: 21,
            column: 25
          }
        },
        "7": {
          start: {
            line: 23,
            column: 30
          },
          end: {
            line: 23,
            column: 55
          }
        },
        "8": {
          start: {
            line: 24,
            column: 38
          },
          end: {
            line: 24,
            column: 63
          }
        },
        "9": {
          start: {
            line: 25,
            column: 28
          },
          end: {
            line: 25,
            column: 44
          }
        },
        "10": {
          start: {
            line: 26,
            column: 24
          },
          end: {
            line: 26,
            column: 36
          }
        },
        "11": {
          start: {
            line: 27,
            column: 24
          },
          end: {
            line: 27,
            column: 30
          }
        },
        "12": {
          start: {
            line: 28,
            column: 24
          },
          end: {
            line: 28,
            column: 30
          }
        },
        "13": {
          start: {
            line: 29,
            column: 26
          },
          end: {
            line: 29,
            column: 40
          }
        },
        "14": {
          start: {
            line: 31,
            column: 19
          },
          end: {
            line: 31,
            column: 37
          }
        },
        "15": {
          start: {
            line: 32,
            column: 29
          },
          end: {
            line: 32,
            column: 56
          }
        },
        "16": {
          start: {
            line: 33,
            column: 21
          },
          end: {
            line: 33,
            column: 41
          }
        },
        "17": {
          start: {
            line: 34,
            column: 19
          },
          end: {
            line: 34,
            column: 37
          }
        },
        "18": {
          start: {
            line: 35,
            column: 20
          },
          end: {
            line: 35,
            column: 39
          }
        },
        "19": {
          start: {
            line: 36,
            column: 22
          },
          end: {
            line: 36,
            column: 43
          }
        },
        "20": {
          start: {
            line: 37,
            column: 21
          },
          end: {
            line: 37,
            column: 41
          }
        },
        "21": {
          start: {
            line: 38,
            column: 28
          },
          end: {
            line: 38,
            column: 55
          }
        },
        "22": {
          start: {
            line: 39,
            column: 30
          },
          end: {
            line: 39,
            column: 59
          }
        },
        "23": {
          start: {
            line: 40,
            column: 30
          },
          end: {
            line: 40,
            column: 59
          }
        },
        "24": {
          start: {
            line: 41,
            column: 32
          },
          end: {
            line: 41,
            column: 63
          }
        },
        "25": {
          start: {
            line: 42,
            column: 29
          },
          end: {
            line: 42,
            column: 63
          }
        },
        "26": {
          start: {
            line: 44,
            column: 24
          },
          end: {
            line: 44,
            column: 39
          }
        },
        "27": {
          start: {
            line: 45,
            column: 28
          },
          end: {
            line: 45,
            column: 41
          }
        },
        "28": {
          start: {
            line: 46,
            column: 29
          },
          end: {
            line: 46,
            column: 52
          }
        },
        "29": {
          start: {
            line: 47,
            column: 30
          },
          end: {
            line: 47,
            column: 54
          }
        },
        "30": {
          start: {
            line: 48,
            column: 31
          },
          end: {
            line: 48,
            column: 82
          }
        },
        "31": {
          start: {
            line: 49,
            column: 32
          },
          end: {
            line: 49,
            column: 45
          }
        },
        "32": {
          start: {
            line: 51,
            column: 16
          },
          end: {
            line: 56,
            column: 1
          }
        },
        "33": {
          start: {
            line: 58,
            column: 20
          },
          end: {
            line: 63,
            column: 1
          }
        },
        "34": {
          start: {
            line: 71,
            column: 4
          },
          end: {
            line: 71,
            column: 42
          }
        },
        "35": {
          start: {
            line: 72,
            column: 4
          },
          end: {
            line: 72,
            column: 27
          }
        },
        "36": {
          start: {
            line: 73,
            column: 4
          },
          end: {
            line: 73,
            column: 57
          }
        },
        "37": {
          start: {
            line: 74,
            column: 4
          },
          end: {
            line: 74,
            column: 25
          }
        },
        "38": {
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 75,
            column: 25
          }
        },
        "39": {
          start: {
            line: 76,
            column: 4
          },
          end: {
            line: 76,
            column: 35
          }
        },
        "40": {
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 77,
            column: 37
          }
        },
        "41": {
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 78,
            column: 33
          }
        },
        "42": {
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 79,
            column: 28
          }
        },
        "43": {
          start: {
            line: 84,
            column: 4
          },
          end: {
            line: 84,
            column: 18
          }
        },
        "44": {
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 88,
            column: 18
          }
        },
        "45": {
          start: {
            line: 93,
            column: 4
          },
          end: {
            line: 93,
            column: 65
          }
        },
        "46": {
          start: {
            line: 97,
            column: 4
          },
          end: {
            line: 99,
            column: 5
          }
        },
        "47": {
          start: {
            line: 98,
            column: 6
          },
          end: {
            line: 98,
            column: 12
          }
        },
        "48": {
          start: {
            line: 101,
            column: 22
          },
          end: {
            line: 103,
            column: 6
          }
        },
        "49": {
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 105,
            column: 39
          }
        },
        "50": {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 109,
            column: 5
          }
        },
        "51": {
          start: {
            line: 108,
            column: 6
          },
          end: {
            line: 108,
            column: 12
          }
        },
        "52": {
          start: {
            line: 111,
            column: 4
          },
          end: {
            line: 111,
            column: 24
          }
        },
        "53": {
          start: {
            line: 113,
            column: 4
          },
          end: {
            line: 115,
            column: 5
          }
        },
        "54": {
          start: {
            line: 114,
            column: 6
          },
          end: {
            line: 114,
            column: 34
          }
        },
        "55": {
          start: {
            line: 117,
            column: 4
          },
          end: {
            line: 117,
            column: 26
          }
        },
        "56": {
          start: {
            line: 118,
            column: 4
          },
          end: {
            line: 118,
            column: 24
          }
        },
        "57": {
          start: {
            line: 120,
            column: 4
          },
          end: {
            line: 120,
            column: 24
          }
        },
        "58": {
          start: {
            line: 122,
            column: 4
          },
          end: {
            line: 122,
            column: 26
          }
        },
        "59": {
          start: {
            line: 123,
            column: 4
          },
          end: {
            line: 123,
            column: 26
          }
        },
        "60": {
          start: {
            line: 125,
            column: 4
          },
          end: {
            line: 129,
            column: 5
          }
        },
        "61": {
          start: {
            line: 128,
            column: 15
          },
          end: {
            line: 128,
            column: 31
          }
        },
        "62": {
          start: {
            line: 131,
            column: 4
          },
          end: {
            line: 137,
            column: 6
          }
        },
        "63": {
          start: {
            line: 132,
            column: 6
          },
          end: {
            line: 136,
            column: 8
          }
        },
        "64": {
          start: {
            line: 133,
            column: 8
          },
          end: {
            line: 135,
            column: 9
          }
        },
        "65": {
          start: {
            line: 134,
            column: 10
          },
          end: {
            line: 134,
            column: 42
          }
        },
        "66": {
          start: {
            line: 139,
            column: 4
          },
          end: {
            line: 139,
            column: 62
          }
        },
        "67": {
          start: {
            line: 139,
            column: 29
          },
          end: {
            line: 139,
            column: 61
          }
        },
        "68": {
          start: {
            line: 143,
            column: 4
          },
          end: {
            line: 145,
            column: 5
          }
        },
        "69": {
          start: {
            line: 144,
            column: 6
          },
          end: {
            line: 144,
            column: 28
          }
        },
        "70": {
          start: {
            line: 147,
            column: 4
          },
          end: {
            line: 149,
            column: 5
          }
        },
        "71": {
          start: {
            line: 148,
            column: 6
          },
          end: {
            line: 148,
            column: 12
          }
        },
        "72": {
          start: {
            line: 151,
            column: 22
          },
          end: {
            line: 151,
            column: 41
          }
        },
        "73": {
          start: {
            line: 153,
            column: 4
          },
          end: {
            line: 153,
            column: 39
          }
        },
        "74": {
          start: {
            line: 155,
            column: 4
          },
          end: {
            line: 157,
            column: 5
          }
        },
        "75": {
          start: {
            line: 156,
            column: 6
          },
          end: {
            line: 156,
            column: 12
          }
        },
        "76": {
          start: {
            line: 159,
            column: 4
          },
          end: {
            line: 159,
            column: 25
          }
        },
        "77": {
          start: {
            line: 160,
            column: 23
          },
          end: {
            line: 160,
            column: 65
          }
        },
        "78": {
          start: {
            line: 162,
            column: 4
          },
          end: {
            line: 164,
            column: 5
          }
        },
        "79": {
          start: {
            line: 163,
            column: 6
          },
          end: {
            line: 163,
            column: 34
          }
        },
        "80": {
          start: {
            line: 166,
            column: 4
          },
          end: {
            line: 166,
            column: 26
          }
        },
        "81": {
          start: {
            line: 167,
            column: 4
          },
          end: {
            line: 167,
            column: 26
          }
        },
        "82": {
          start: {
            line: 169,
            column: 4
          },
          end: {
            line: 169,
            column: 34
          }
        },
        "83": {
          start: {
            line: 171,
            column: 4
          },
          end: {
            line: 171,
            column: 49
          }
        },
        "84": {
          start: {
            line: 173,
            column: 4
          },
          end: {
            line: 173,
            column: 45
          }
        },
        "85": {
          start: {
            line: 174,
            column: 4
          },
          end: {
            line: 174,
            column: 48
          }
        },
        "86": {
          start: {
            line: 176,
            column: 4
          },
          end: {
            line: 184,
            column: 5
          }
        },
        "87": {
          start: {
            line: 177,
            column: 33
          },
          end: {
            line: 177,
            column: 85
          }
        },
        "88": {
          start: {
            line: 179,
            column: 6
          },
          end: {
            line: 181,
            column: 49
          }
        },
        "89": {
          start: {
            line: 180,
            column: 43
          },
          end: {
            line: 180,
            column: 65
          }
        },
        "90": {
          start: {
            line: 183,
            column: 6
          },
          end: {
            line: 183,
            column: 23
          }
        },
        "91": {
          start: {
            line: 188,
            column: 4
          },
          end: {
            line: 189,
            column: 60
          }
        },
        "92": {
          start: {
            line: 189,
            column: 30
          },
          end: {
            line: 189,
            column: 59
          }
        },
        "93": {
          start: {
            line: 196,
            column: 4
          },
          end: {
            line: 196,
            column: 34
          }
        },
        "94": {
          start: {
            line: 198,
            column: 4
          },
          end: {
            line: 198,
            column: 41
          }
        },
        "95": {
          start: {
            line: 200,
            column: 4
          },
          end: {
            line: 200,
            column: 23
          }
        },
        "96": {
          start: {
            line: 201,
            column: 4
          },
          end: {
            line: 201,
            column: 24
          }
        },
        "97": {
          start: {
            line: 202,
            column: 4
          },
          end: {
            line: 202,
            column: 23
          }
        },
        "98": {
          start: {
            line: 203,
            column: 4
          },
          end: {
            line: 203,
            column: 25
          }
        },
        "99": {
          start: {
            line: 204,
            column: 4
          },
          end: {
            line: 204,
            column: 24
          }
        },
        "100": {
          start: {
            line: 205,
            column: 4
          },
          end: {
            line: 205,
            column: 34
          }
        },
        "101": {
          start: {
            line: 206,
            column: 4
          },
          end: {
            line: 206,
            column: 36
          }
        },
        "102": {
          start: {
            line: 207,
            column: 4
          },
          end: {
            line: 207,
            column: 32
          }
        },
        "103": {
          start: {
            line: 208,
            column: 4
          },
          end: {
            line: 208,
            column: 31
          }
        },
        "104": {
          start: {
            line: 212,
            column: 4
          },
          end: {
            line: 212,
            column: 24
          }
        },
        "105": {
          start: {
            line: 217,
            column: 4
          },
          end: {
            line: 220,
            column: 5
          }
        },
        "106": {
          start: {
            line: 221,
            column: 4
          },
          end: {
            line: 221,
            column: 51
          }
        },
        "107": {
          start: {
            line: 222,
            column: 4
          },
          end: {
            line: 222,
            column: 17
          }
        },
        "108": {
          start: {
            line: 226,
            column: 31
          },
          end: {
            line: 226,
            column: 60
          }
        },
        "109": {
          start: {
            line: 228,
            column: 4
          },
          end: {
            line: 228,
            column: 48
          }
        },
        "110": {
          start: {
            line: 229,
            column: 4
          },
          end: {
            line: 231,
            column: 5
          }
        },
        "111": {
          start: {
            line: 230,
            column: 6
          },
          end: {
            line: 230,
            column: 12
          }
        },
        "112": {
          start: {
            line: 233,
            column: 31
          },
          end: {
            line: 233,
            column: 97
          }
        },
        "113": {
          start: {
            line: 235,
            column: 4
          },
          end: {
            line: 237,
            column: 5
          }
        },
        "114": {
          start: {
            line: 236,
            column: 6
          },
          end: {
            line: 236,
            column: 46
          }
        },
        "115": {
          start: {
            line: 239,
            column: 4
          },
          end: {
            line: 239,
            column: 50
          }
        },
        "116": {
          start: {
            line: 241,
            column: 36
          },
          end: {
            line: 241,
            column: 87
          }
        },
        "117": {
          start: {
            line: 242,
            column: 4
          },
          end: {
            line: 242,
            column: 45
          }
        },
        "118": {
          start: {
            line: 244,
            column: 4
          },
          end: {
            line: 253,
            column: 52
          }
        },
        "119": {
          start: {
            line: 245,
            column: 6
          },
          end: {
            line: 245,
            column: 55
          }
        },
        "120": {
          start: {
            line: 246,
            column: 6
          },
          end: {
            line: 251,
            column: 7
          }
        },
        "121": {
          start: {
            line: 247,
            column: 8
          },
          end: {
            line: 250,
            column: 71
          }
        },
        "122": {
          start: {
            line: 248,
            column: 10
          },
          end: {
            line: 248,
            column: 44
          }
        },
        "123": {
          start: {
            line: 254,
            column: 4
          },
          end: {
            line: 254,
            column: 25
          }
        },
        "124": {
          start: {
            line: 258,
            column: 23
          },
          end: {
            line: 258,
            column: 65
          }
        },
        "125": {
          start: {
            line: 259,
            column: 22
          },
          end: {
            line: 259,
            column: 91
          }
        },
        "126": {
          start: {
            line: 261,
            column: 4
          },
          end: {
            line: 265,
            column: 5
          }
        },
        "127": {
          start: {
            line: 264,
            column: 6
          },
          end: {
            line: 264,
            column: 46
          }
        },
        "128": {
          start: {
            line: 267,
            column: 4
          },
          end: {
            line: 267,
            column: 41
          }
        },
        "129": {
          start: {
            line: 268,
            column: 4
          },
          end: {
            line: 268,
            column: 48
          }
        },
        "130": {
          start: {
            line: 269,
            column: 4
          },
          end: {
            line: 269,
            column: 50
          }
        },
        "131": {
          start: {
            line: 270,
            column: 4
          },
          end: {
            line: 270,
            column: 48
          }
        },
        "132": {
          start: {
            line: 272,
            column: 4
          },
          end: {
            line: 276,
            column: 5
          }
        },
        "133": {
          start: {
            line: 273,
            column: 6
          },
          end: {
            line: 273,
            column: 29
          }
        },
        "134": {
          start: {
            line: 275,
            column: 6
          },
          end: {
            line: 275,
            column: 33
          }
        },
        "135": {
          start: {
            line: 278,
            column: 4
          },
          end: {
            line: 280,
            column: 5
          }
        },
        "136": {
          start: {
            line: 279,
            column: 6
          },
          end: {
            line: 279,
            column: 32
          }
        },
        "137": {
          start: {
            line: 282,
            column: 4
          },
          end: {
            line: 282,
            column: 46
          }
        },
        "138": {
          start: {
            line: 284,
            column: 4
          },
          end: {
            line: 286,
            column: 5
          }
        },
        "139": {
          start: {
            line: 285,
            column: 6
          },
          end: {
            line: 285,
            column: 26
          }
        },
        "140": {
          start: {
            line: 288,
            column: 23
          },
          end: {
            line: 290,
            column: 6
          }
        },
        "141": {
          start: {
            line: 292,
            column: 31
          },
          end: {
            line: 299,
            column: 5
          }
        },
        "142": {
          start: {
            line: 293,
            column: 6
          },
          end: {
            line: 295,
            column: 7
          }
        },
        "143": {
          start: {
            line: 294,
            column: 8
          },
          end: {
            line: 294,
            column: 29
          }
        },
        "144": {
          start: {
            line: 297,
            column: 6
          },
          end: {
            line: 297,
            column: 35
          }
        },
        "145": {
          start: {
            line: 298,
            column: 6
          },
          end: {
            line: 298,
            column: 42
          }
        },
        "146": {
          start: {
            line: 301,
            column: 4
          },
          end: {
            line: 309,
            column: 5
          }
        },
        "147": {
          start: {
            line: 302,
            column: 33
          },
          end: {
            line: 302,
            column: 84
          }
        },
        "148": {
          start: {
            line: 304,
            column: 6
          },
          end: {
            line: 306,
            column: 49
          }
        },
        "149": {
          start: {
            line: 308,
            column: 6
          },
          end: {
            line: 308,
            column: 26
          }
        },
        "150": {
          start: {
            line: 313,
            column: 4
          },
          end: {
            line: 321,
            column: 8
          }
        },
        "151": {
          start: {
            line: 316,
            column: 8
          },
          end: {
            line: 320,
            column: 9
          }
        },
        "152": {
          start: {
            line: 319,
            column: 10
          },
          end: {
            line: 319,
            column: 31
          }
        },
        "153": {
          start: {
            line: 325,
            column: 4
          },
          end: {
            line: 336,
            column: 5
          }
        },
        "154": {
          start: {
            line: 326,
            column: 6
          },
          end: {
            line: 333,
            column: 8
          }
        },
        "155": {
          start: {
            line: 327,
            column: 8
          },
          end: {
            line: 332,
            column: 9
          }
        },
        "156": {
          start: {
            line: 328,
            column: 10
          },
          end: {
            line: 328,
            column: 32
          }
        },
        "157": {
          start: {
            line: 329,
            column: 10
          },
          end: {
            line: 329,
            column: 21
          }
        },
        "158": {
          start: {
            line: 330,
            column: 15
          },
          end: {
            line: 332,
            column: 9
          }
        },
        "159": {
          start: {
            line: 331,
            column: 10
          },
          end: {
            line: 331,
            column: 43
          }
        },
        "160": {
          start: {
            line: 334,
            column: 11
          },
          end: {
            line: 336,
            column: 5
          }
        },
        "161": {
          start: {
            line: 335,
            column: 6
          },
          end: {
            line: 335,
            column: 49
          }
        },
        "162": {
          start: {
            line: 340,
            column: 4
          },
          end: {
            line: 344,
            column: 5
          }
        },
        "163": {
          start: {
            line: 341,
            column: 6
          },
          end: {
            line: 341,
            column: 67
          }
        },
        "164": {
          start: {
            line: 341,
            column: 42
          },
          end: {
            line: 341,
            column: 66
          }
        },
        "165": {
          start: {
            line: 343,
            column: 6
          },
          end: {
            line: 343,
            column: 33
          }
        },
        "166": {
          start: {
            line: 348,
            column: 4
          },
          end: {
            line: 348,
            column: 40
          }
        },
        "167": {
          start: {
            line: 349,
            column: 4
          },
          end: {
            line: 349,
            column: 51
          }
        },
        "168": {
          start: {
            line: 350,
            column: 4
          },
          end: {
            line: 350,
            column: 47
          }
        },
        "169": {
          start: {
            line: 351,
            column: 4
          },
          end: {
            line: 351,
            column: 41
          }
        },
        "170": {
          start: {
            line: 352,
            column: 4
          },
          end: {
            line: 352,
            column: 33
          }
        },
        "171": {
          start: {
            line: 353,
            column: 4
          },
          end: {
            line: 358,
            column: 6
          }
        },
        "172": {
          start: {
            line: 354,
            column: 6
          },
          end: {
            line: 354,
            column: 51
          }
        },
        "173": {
          start: {
            line: 355,
            column: 6
          },
          end: {
            line: 355,
            column: 30
          }
        },
        "174": {
          start: {
            line: 356,
            column: 6
          },
          end: {
            line: 356,
            column: 28
          }
        },
        "175": {
          start: {
            line: 357,
            column: 6
          },
          end: {
            line: 357,
            column: 44
          }
        },
        "176": {
          start: {
            line: 362,
            column: 4
          },
          end: {
            line: 365,
            column: 5
          }
        },
        "177": {
          start: {
            line: 363,
            column: 6
          },
          end: {
            line: 363,
            column: 32
          }
        },
        "178": {
          start: {
            line: 364,
            column: 6
          },
          end: {
            line: 364,
            column: 27
          }
        },
        "179": {
          start: {
            line: 369,
            column: 20
          },
          end: {
            line: 370,
            column: 26
          }
        },
        "180": {
          start: {
            line: 372,
            column: 4
          },
          end: {
            line: 440,
            column: 5
          }
        },
        "181": {
          start: {
            line: 373,
            column: 6
          },
          end: {
            line: 373,
            column: 52
          }
        },
        "182": {
          start: {
            line: 374,
            column: 6
          },
          end: {
            line: 374,
            column: 52
          }
        },
        "183": {
          start: {
            line: 376,
            column: 6
          },
          end: {
            line: 378,
            column: 7
          }
        },
        "184": {
          start: {
            line: 377,
            column: 8
          },
          end: {
            line: 377,
            column: 45
          }
        },
        "185": {
          start: {
            line: 380,
            column: 6
          },
          end: {
            line: 380,
            column: 47
          }
        },
        "186": {
          start: {
            line: 382,
            column: 6
          },
          end: {
            line: 397,
            column: 8
          }
        },
        "187": {
          start: {
            line: 383,
            column: 8
          },
          end: {
            line: 386,
            column: 9
          }
        },
        "188": {
          start: {
            line: 384,
            column: 10
          },
          end: {
            line: 384,
            column: 43
          }
        },
        "189": {
          start: {
            line: 385,
            column: 10
          },
          end: {
            line: 385,
            column: 16
          }
        },
        "190": {
          start: {
            line: 388,
            column: 8
          },
          end: {
            line: 390,
            column: 9
          }
        },
        "191": {
          start: {
            line: 389,
            column: 10
          },
          end: {
            line: 389,
            column: 16
          }
        },
        "192": {
          start: {
            line: 392,
            column: 8
          },
          end: {
            line: 396,
            column: 9
          }
        },
        "193": {
          start: {
            line: 393,
            column: 10
          },
          end: {
            line: 393,
            column: 43
          }
        },
        "194": {
          start: {
            line: 395,
            column: 10
          },
          end: {
            line: 395,
            column: 21
          }
        },
        "195": {
          start: {
            line: 399,
            column: 6
          },
          end: {
            line: 401,
            column: 7
          }
        },
        "196": {
          start: {
            line: 400,
            column: 8
          },
          end: {
            line: 400,
            column: 35
          }
        },
        "197": {
          start: {
            line: 403,
            column: 6
          },
          end: {
            line: 403,
            column: 49
          }
        },
        "198": {
          start: {
            line: 405,
            column: 6
          },
          end: {
            line: 407,
            column: 7
          }
        },
        "199": {
          start: {
            line: 406,
            column: 8
          },
          end: {
            line: 406,
            column: 14
          }
        },
        "200": {
          start: {
            line: 409,
            column: 6
          },
          end: {
            line: 412,
            column: 7
          }
        },
        "201": {
          start: {
            line: 410,
            column: 8
          },
          end: {
            line: 410,
            column: 18
          }
        },
        "202": {
          start: {
            line: 411,
            column: 8
          },
          end: {
            line: 411,
            column: 14
          }
        },
        "203": {
          start: {
            line: 414,
            column: 41
          },
          end: {
            line: 414,
            column: 94
          }
        },
        "204": {
          start: {
            line: 416,
            column: 6
          },
          end: {
            line: 418,
            column: 57
          }
        },
        "205": {
          start: {
            line: 419,
            column: 11
          },
          end: {
            line: 440,
            column: 5
          }
        },
        "206": {
          start: {
            line: 420,
            column: 6
          },
          end: {
            line: 420,
            column: 52
          }
        },
        "207": {
          start: {
            line: 422,
            column: 29
          },
          end: {
            line: 427,
            column: 7
          }
        },
        "208": {
          start: {
            line: 423,
            column: 8
          },
          end: {
            line: 423,
            column: 30
          }
        },
        "209": {
          start: {
            line: 424,
            column: 8
          },
          end: {
            line: 426,
            column: 9
          }
        },
        "210": {
          start: {
            line: 425,
            column: 10
          },
          end: {
            line: 425,
            column: 20
          }
        },
        "211": {
          start: {
            line: 429,
            column: 6
          },
          end: {
            line: 437,
            column: 7
          }
        },
        "212": {
          start: {
            line: 430,
            column: 43
          },
          end: {
            line: 430,
            column: 96
          }
        },
        "213": {
          start: {
            line: 432,
            column: 8
          },
          end: {
            line: 434,
            column: 59
          }
        },
        "214": {
          start: {
            line: 436,
            column: 8
          },
          end: {
            line: 436,
            column: 24
          }
        },
        "215": {
          start: {
            line: 438,
            column: 11
          },
          end: {
            line: 440,
            column: 5
          }
        },
        "216": {
          start: {
            line: 439,
            column: 6
          },
          end: {
            line: 439,
            column: 16
          }
        },
        "217": {
          start: {
            line: 449,
            column: 31
          },
          end: {
            line: 449,
            column: 97
          }
        },
        "218": {
          start: {
            line: 451,
            column: 4
          },
          end: {
            line: 453,
            column: 5
          }
        },
        "219": {
          start: {
            line: 452,
            column: 6
          },
          end: {
            line: 452,
            column: 67
          }
        },
        "220": {
          start: {
            line: 455,
            column: 4
          },
          end: {
            line: 457,
            column: 5
          }
        },
        "221": {
          start: {
            line: 456,
            column: 6
          },
          end: {
            line: 456,
            column: 68
          }
        },
        "222": {
          start: {
            line: 461,
            column: 4
          },
          end: {
            line: 461,
            column: 40
          }
        },
        "223": {
          start: {
            line: 462,
            column: 4
          },
          end: {
            line: 462,
            column: 41
          }
        },
        "224": {
          start: {
            line: 466,
            column: 17
          },
          end: {
            line: 466,
            column: 54
          }
        },
        "225": {
          start: {
            line: 467,
            column: 4
          },
          end: {
            line: 467,
            column: 84
          }
        },
        "226": {
          start: {
            line: 468,
            column: 4
          },
          end: {
            line: 468,
            column: 52
          }
        },
        "227": {
          start: {
            line: 472,
            column: 4
          },
          end: {
            line: 502,
            column: 5
          }
        },
        "228": {
          start: {
            line: 475,
            column: 27
          },
          end: {
            line: 475,
            column: 91
          }
        },
        "229": {
          start: {
            line: 476,
            column: 28
          },
          end: {
            line: 476,
            column: 93
          }
        },
        "230": {
          start: {
            line: 479,
            column: 6
          },
          end: {
            line: 485,
            column: 8
          }
        },
        "231": {
          start: {
            line: 480,
            column: 30
          },
          end: {
            line: 480,
            column: 56
          }
        },
        "232": {
          start: {
            line: 481,
            column: 34
          },
          end: {
            line: 481,
            column: 65
          }
        },
        "233": {
          start: {
            line: 482,
            column: 8
          },
          end: {
            line: 484,
            column: 92
          }
        },
        "234": {
          start: {
            line: 488,
            column: 6
          },
          end: {
            line: 494,
            column: 8
          }
        },
        "235": {
          start: {
            line: 489,
            column: 29
          },
          end: {
            line: 489,
            column: 54
          }
        },
        "236": {
          start: {
            line: 490,
            column: 33
          },
          end: {
            line: 490,
            column: 63
          }
        },
        "237": {
          start: {
            line: 491,
            column: 8
          },
          end: {
            line: 493,
            column: 90
          }
        },
        "238": {
          start: {
            line: 497,
            column: 28
          },
          end: {
            line: 497,
            column: 60
          }
        },
        "239": {
          start: {
            line: 498,
            column: 32
          },
          end: {
            line: 498,
            column: 69
          }
        },
        "240": {
          start: {
            line: 499,
            column: 6
          },
          end: {
            line: 501,
            column: 90
          }
        },
        "241": {
          start: {
            line: 504,
            column: 4
          },
          end: {
            line: 504,
            column: 46
          }
        },
        "242": {
          start: {
            line: 509,
            column: 25
          },
          end: {
            line: 509,
            column: 89
          }
        },
        "243": {
          start: {
            line: 510,
            column: 4
          },
          end: {
            line: 514,
            column: 6
          }
        },
        "244": {
          start: {
            line: 511,
            column: 22
          },
          end: {
            line: 511,
            column: 54
          }
        },
        "245": {
          start: {
            line: 512,
            column: 6
          },
          end: {
            line: 512,
            column: 44
          }
        },
        "246": {
          start: {
            line: 513,
            column: 6
          },
          end: {
            line: 513,
            column: 57
          }
        },
        "247": {
          start: {
            line: 517,
            column: 21
          },
          end: {
            line: 517,
            column: 91
          }
        },
        "248": {
          start: {
            line: 518,
            column: 4
          },
          end: {
            line: 523,
            column: 6
          }
        },
        "249": {
          start: {
            line: 519,
            column: 21
          },
          end: {
            line: 519,
            column: 52
          }
        },
        "250": {
          start: {
            line: 520,
            column: 6
          },
          end: {
            line: 522,
            column: 7
          }
        },
        "251": {
          start: {
            line: 521,
            column: 8
          },
          end: {
            line: 521,
            column: 73
          }
        },
        "252": {
          start: {
            line: 526,
            column: 20
          },
          end: {
            line: 526,
            column: 58
          }
        },
        "253": {
          start: {
            line: 527,
            column: 4
          },
          end: {
            line: 527,
            column: 48
          }
        },
        "254": {
          start: {
            line: 528,
            column: 4
          },
          end: {
            line: 528,
            column: 61
          }
        },
        "255": {
          start: {
            line: 532,
            column: 22
          },
          end: {
            line: 532,
            column: 51
          }
        },
        "256": {
          start: {
            line: 533,
            column: 4
          },
          end: {
            line: 533,
            column: 55
          }
        },
        "257": {
          start: {
            line: 534,
            column: 4
          },
          end: {
            line: 534,
            column: 40
          }
        },
        "258": {
          start: {
            line: 535,
            column: 27
          },
          end: {
            line: 535,
            column: 90
          }
        },
        "259": {
          start: {
            line: 536,
            column: 4
          },
          end: {
            line: 536,
            column: 40
          }
        },
        "260": {
          start: {
            line: 537,
            column: 4
          },
          end: {
            line: 537,
            column: 25
          }
        },
        "261": {
          start: {
            line: 542,
            column: 4
          },
          end: {
            line: 564,
            column: 6
          }
        },
        "262": {
          start: {
            line: 543,
            column: 17
          },
          end: {
            line: 543,
            column: 39
          }
        },
        "263": {
          start: {
            line: 544,
            column: 22
          },
          end: {
            line: 548,
            column: 7
          }
        },
        "264": {
          start: {
            line: 550,
            column: 6
          },
          end: {
            line: 553,
            column: 7
          }
        },
        "265": {
          start: {
            line: 551,
            column: 8
          },
          end: {
            line: 551,
            column: 39
          }
        },
        "266": {
          start: {
            line: 552,
            column: 8
          },
          end: {
            line: 552,
            column: 36
          }
        },
        "267": {
          start: {
            line: 555,
            column: 6
          },
          end: {
            line: 563,
            column: 7
          }
        },
        "268": {
          start: {
            line: 556,
            column: 8
          },
          end: {
            line: 558,
            column: 9
          }
        },
        "269": {
          start: {
            line: 557,
            column: 10
          },
          end: {
            line: 557,
            column: 60
          }
        },
        "270": {
          start: {
            line: 560,
            column: 8
          },
          end: {
            line: 560,
            column: 35
          }
        },
        "271": {
          start: {
            line: 561,
            column: 13
          },
          end: {
            line: 563,
            column: 7
          }
        },
        "272": {
          start: {
            line: 562,
            column: 8
          },
          end: {
            line: 562,
            column: 32
          }
        },
        "273": {
          start: {
            line: 572,
            column: 0
          },
          end: {
            line: 604,
            column: 2
          }
        },
        "274": {
          start: {
            line: 574,
            column: 19
          },
          end: {
            line: 574,
            column: 52
          }
        },
        "275": {
          start: {
            line: 576,
            column: 2
          },
          end: {
            line: 578,
            column: 3
          }
        },
        "276": {
          start: {
            line: 577,
            column: 4
          },
          end: {
            line: 577,
            column: 45
          }
        },
        "277": {
          start: {
            line: 580,
            column: 17
          },
          end: {
            line: 584,
            column: 5
          }
        },
        "278": {
          start: {
            line: 586,
            column: 2
          },
          end: {
            line: 588,
            column: 3
          }
        },
        "279": {
          start: {
            line: 587,
            column: 4
          },
          end: {
            line: 587,
            column: 26
          }
        },
        "280": {
          start: {
            line: 590,
            column: 18
          },
          end: {
            line: 601,
            column: 4
          }
        },
        "281": {
          start: {
            line: 591,
            column: 4
          },
          end: {
            line: 594,
            column: 5
          }
        },
        "282": {
          start: {
            line: 593,
            column: 6
          },
          end: {
            line: 593,
            column: 12
          }
        },
        "283": {
          start: {
            line: 596,
            column: 4
          },
          end: {
            line: 600,
            column: 6
          }
        },
        "284": {
          start: {
            line: 597,
            column: 6
          },
          end: {
            line: 599,
            column: 7
          }
        },
        "285": {
          start: {
            line: 598,
            column: 8
          },
          end: {
            line: 598,
            column: 20
          }
        },
        "286": {
          start: {
            line: 603,
            column: 2
          },
          end: {
            line: 603,
            column: 54
          }
        },
        "287": {
          start: {
            line: 610,
            column: 0
          },
          end: {
            line: 610,
            column: 35
          }
        },
        "288": {
          start: {
            line: 611,
            column: 0
          },
          end: {
            line: 611,
            column: 30
          }
        },
        "289": {
          start: {
            line: 612,
            column: 0
          },
          end: {
            line: 615,
            column: 1
          }
        },
        "290": {
          start: {
            line: 613,
            column: 2
          },
          end: {
            line: 613,
            column: 33
          }
        },
        "291": {
          start: {
            line: 614,
            column: 2
          },
          end: {
            line: 614,
            column: 31
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 70,
              column: 2
            },
            end: {
              line: 70,
              column: 3
            }
          },
          loc: {
            start: {
              line: 70,
              column: 31
            },
            end: {
              line: 80,
              column: 3
            }
          },
          line: 70
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 83,
              column: 2
            },
            end: {
              line: 83,
              column: 3
            }
          },
          loc: {
            start: {
              line: 83,
              column: 23
            },
            end: {
              line: 85,
              column: 3
            }
          },
          line: 83
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 87,
              column: 2
            },
            end: {
              line: 87,
              column: 3
            }
          },
          loc: {
            start: {
              line: 87,
              column: 23
            },
            end: {
              line: 89,
              column: 3
            }
          },
          line: 87
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 92,
              column: 2
            },
            end: {
              line: 92,
              column: 3
            }
          },
          loc: {
            start: {
              line: 92,
              column: 24
            },
            end: {
              line: 94,
              column: 3
            }
          },
          line: 92
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 96,
              column: 2
            },
            end: {
              line: 96,
              column: 3
            }
          },
          loc: {
            start: {
              line: 96,
              column: 22
            },
            end: {
              line: 140,
              column: 3
            }
          },
          line: 96
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 128,
              column: 6
            },
            end: {
              line: 128,
              column: 7
            }
          },
          loc: {
            start: {
              line: 128,
              column: 15
            },
            end: {
              line: 128,
              column: 31
            }
          },
          line: 128
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 131,
              column: 48
            },
            end: {
              line: 131,
              column: 49
            }
          },
          loc: {
            start: {
              line: 131,
              column: 54
            },
            end: {
              line: 137,
              column: 5
            }
          },
          line: 131
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 132,
              column: 50
            },
            end: {
              line: 132,
              column: 51
            }
          },
          loc: {
            start: {
              line: 132,
              column: 59
            },
            end: {
              line: 136,
              column: 7
            }
          },
          line: 132
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 139,
              column: 23
            },
            end: {
              line: 139,
              column: 24
            }
          },
          loc: {
            start: {
              line: 139,
              column: 29
            },
            end: {
              line: 139,
              column: 61
            }
          },
          line: 139
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 142,
              column: 2
            },
            end: {
              line: 142,
              column: 3
            }
          },
          loc: {
            start: {
              line: 142,
              column: 14
            },
            end: {
              line: 185,
              column: 3
            }
          },
          line: 142
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 180,
              column: 34
            },
            end: {
              line: 180,
              column: 35
            }
          },
          loc: {
            start: {
              line: 180,
              column: 43
            },
            end: {
              line: 180,
              column: 65
            }
          },
          line: 180
        },
        "11": {
          name: "(anonymous_11)",
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
              line: 209,
              column: 3
            }
          },
          line: 187
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 189,
              column: 15
            },
            end: {
              line: 189,
              column: 16
            }
          },
          loc: {
            start: {
              line: 189,
              column: 30
            },
            end: {
              line: 189,
              column: 59
            }
          },
          line: 189
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 211,
              column: 2
            },
            end: {
              line: 211,
              column: 3
            }
          },
          loc: {
            start: {
              line: 211,
              column: 17
            },
            end: {
              line: 213,
              column: 3
            }
          },
          line: 211
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 216,
              column: 2
            },
            end: {
              line: 216,
              column: 3
            }
          },
          loc: {
            start: {
              line: 216,
              column: 21
            },
            end: {
              line: 223,
              column: 3
            }
          },
          line: 216
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 225,
              column: 2
            },
            end: {
              line: 225,
              column: 3
            }
          },
          loc: {
            start: {
              line: 225,
              column: 31
            },
            end: {
              line: 255,
              column: 3
            }
          },
          line: 225
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 244,
              column: 46
            },
            end: {
              line: 244,
              column: 47
            }
          },
          loc: {
            start: {
              line: 244,
              column: 52
            },
            end: {
              line: 252,
              column: 5
            }
          },
          line: 244
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 247,
              column: 50
            },
            end: {
              line: 247,
              column: 51
            }
          },
          loc: {
            start: {
              line: 247,
              column: 56
            },
            end: {
              line: 249,
              column: 9
            }
          },
          line: 247
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 257,
              column: 2
            },
            end: {
              line: 257,
              column: 3
            }
          },
          loc: {
            start: {
              line: 257,
              column: 30
            },
            end: {
              line: 310,
              column: 3
            }
          },
          line: 257
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 292,
              column: 31
            },
            end: {
              line: 292,
              column: 32
            }
          },
          loc: {
            start: {
              line: 292,
              column: 37
            },
            end: {
              line: 299,
              column: 5
            }
          },
          line: 292
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 312,
              column: 2
            },
            end: {
              line: 312,
              column: 3
            }
          },
          loc: {
            start: {
              line: 312,
              column: 18
            },
            end: {
              line: 322,
              column: 3
            }
          },
          line: 312
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 315,
              column: 25
            },
            end: {
              line: 315,
              column: 26
            }
          },
          loc: {
            start: {
              line: 315,
              column: 34
            },
            end: {
              line: 321,
              column: 7
            }
          },
          line: 315
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 324,
              column: 2
            },
            end: {
              line: 324,
              column: 3
            }
          },
          loc: {
            start: {
              line: 324,
              column: 20
            },
            end: {
              line: 337,
              column: 3
            }
          },
          line: 324
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 326,
              column: 49
            },
            end: {
              line: 326,
              column: 50
            }
          },
          loc: {
            start: {
              line: 326,
              column: 58
            },
            end: {
              line: 333,
              column: 7
            }
          },
          line: 326
        },
        "24": {
          name: "(anonymous_24)",
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
        "25": {
          name: "(anonymous_25)",
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
              column: 42
            },
            end: {
              line: 341,
              column: 66
            }
          },
          line: 341
        },
        "26": {
          name: "(anonymous_26)",
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
              line: 359,
              column: 3
            }
          },
          line: 347
        },
        "27": {
          name: "(anonymous_27)",
          decl: {
            start: {
              line: 353,
              column: 23
            },
            end: {
              line: 353,
              column: 24
            }
          },
          loc: {
            start: {
              line: 353,
              column: 29
            },
            end: {
              line: 358,
              column: 5
            }
          },
          line: 353
        },
        "28": {
          name: "(anonymous_28)",
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
              column: 20
            },
            end: {
              line: 366,
              column: 3
            }
          },
          line: 361
        },
        "29": {
          name: "(anonymous_29)",
          decl: {
            start: {
              line: 368,
              column: 2
            },
            end: {
              line: 368,
              column: 3
            }
          },
          loc: {
            start: {
              line: 368,
              column: 26
            },
            end: {
              line: 441,
              column: 3
            }
          },
          line: 368
        },
        "30": {
          name: "(anonymous_30)",
          decl: {
            start: {
              line: 382,
              column: 47
            },
            end: {
              line: 382,
              column: 48
            }
          },
          loc: {
            start: {
              line: 382,
              column: 56
            },
            end: {
              line: 397,
              column: 7
            }
          },
          line: 382
        },
        "31": {
          name: "(anonymous_31)",
          decl: {
            start: {
              line: 422,
              column: 29
            },
            end: {
              line: 422,
              column: 30
            }
          },
          loc: {
            start: {
              line: 422,
              column: 35
            },
            end: {
              line: 427,
              column: 7
            }
          },
          line: 422
        },
        "32": {
          name: "(anonymous_32)",
          decl: {
            start: {
              line: 448,
              column: 2
            },
            end: {
              line: 448,
              column: 3
            }
          },
          loc: {
            start: {
              line: 448,
              column: 18
            },
            end: {
              line: 458,
              column: 3
            }
          },
          line: 448
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
              column: 22
            },
            end: {
              line: 463,
              column: 3
            }
          },
          line: 460
        },
        "34": {
          name: "(anonymous_34)",
          decl: {
            start: {
              line: 465,
              column: 2
            },
            end: {
              line: 465,
              column: 3
            }
          },
          loc: {
            start: {
              line: 465,
              column: 20
            },
            end: {
              line: 469,
              column: 3
            }
          },
          line: 465
        },
        "35": {
          name: "(anonymous_35)",
          decl: {
            start: {
              line: 471,
              column: 2
            },
            end: {
              line: 471,
              column: 3
            }
          },
          loc: {
            start: {
              line: 471,
              column: 18
            },
            end: {
              line: 505,
              column: 3
            }
          },
          line: 471
        },
        "36": {
          name: "(anonymous_36)",
          decl: {
            start: {
              line: 479,
              column: 27
            },
            end: {
              line: 479,
              column: 28
            }
          },
          loc: {
            start: {
              line: 479,
              column: 47
            },
            end: {
              line: 485,
              column: 7
            }
          },
          line: 479
        },
        "37": {
          name: "(anonymous_37)",
          decl: {
            start: {
              line: 488,
              column: 28
            },
            end: {
              line: 488,
              column: 29
            }
          },
          loc: {
            start: {
              line: 488,
              column: 48
            },
            end: {
              line: 494,
              column: 7
            }
          },
          line: 488
        },
        "38": {
          name: "(anonymous_38)",
          decl: {
            start: {
              line: 507,
              column: 2
            },
            end: {
              line: 507,
              column: 3
            }
          },
          loc: {
            start: {
              line: 507,
              column: 20
            },
            end: {
              line: 529,
              column: 3
            }
          },
          line: 507
        },
        "39": {
          name: "(anonymous_39)",
          decl: {
            start: {
              line: 510,
              column: 25
            },
            end: {
              line: 510,
              column: 26
            }
          },
          loc: {
            start: {
              line: 510,
              column: 45
            },
            end: {
              line: 514,
              column: 5
            }
          },
          line: 510
        },
        "40": {
          name: "(anonymous_40)",
          decl: {
            start: {
              line: 518,
              column: 21
            },
            end: {
              line: 518,
              column: 22
            }
          },
          loc: {
            start: {
              line: 518,
              column: 41
            },
            end: {
              line: 523,
              column: 5
            }
          },
          line: 518
        },
        "41": {
          name: "(anonymous_41)",
          decl: {
            start: {
              line: 531,
              column: 2
            },
            end: {
              line: 531,
              column: 3
            }
          },
          loc: {
            start: {
              line: 531,
              column: 23
            },
            end: {
              line: 538,
              column: 3
            }
          },
          line: 531
        },
        "42": {
          name: "(anonymous_42)",
          decl: {
            start: {
              line: 541,
              column: 2
            },
            end: {
              line: 541,
              column: 3
            }
          },
          loc: {
            start: {
              line: 541,
              column: 49
            },
            end: {
              line: 565,
              column: 3
            }
          },
          line: 541
        },
        "43": {
          name: "(anonymous_43)",
          decl: {
            start: {
              line: 542,
              column: 21
            },
            end: {
              line: 542,
              column: 22
            }
          },
          loc: {
            start: {
              line: 542,
              column: 33
            },
            end: {
              line: 564,
              column: 5
            }
          },
          line: 542
        },
        "44": {
          name: "(anonymous_44)",
          decl: {
            start: {
              line: 572,
              column: 59
            },
            end: {
              line: 572,
              column: 60
            }
          },
          loc: {
            start: {
              line: 572,
              column: 76
            },
            end: {
              line: 604,
              column: 1
            }
          },
          line: 572
        },
        "45": {
          name: "(anonymous_45)",
          decl: {
            start: {
              line: 590,
              column: 44
            },
            end: {
              line: 590,
              column: 45
            }
          },
          loc: {
            start: {
              line: 590,
              column: 57
            },
            end: {
              line: 601,
              column: 3
            }
          },
          line: 590
        },
        "46": {
          name: "(anonymous_46)",
          decl: {
            start: {
              line: 596,
              column: 30
            },
            end: {
              line: 596,
              column: 31
            }
          },
          loc: {
            start: {
              line: 596,
              column: 36
            },
            end: {
              line: 600,
              column: 5
            }
          },
          line: 596
        },
        "47": {
          name: "(anonymous_47)",
          decl: {
            start: {
              line: 612,
              column: 24
            },
            end: {
              line: 612,
              column: 25
            }
          },
          loc: {
            start: {
              line: 612,
              column: 30
            },
            end: {
              line: 615,
              column: 1
            }
          },
          line: 612
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 93,
              column: 11
            },
            end: {
              line: 93,
              column: 65
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 93,
              column: 27
            },
            end: {
              line: 93,
              column: 38
            }
          }, {
            start: {
              line: 93,
              column: 41
            },
            end: {
              line: 93,
              column: 65
            }
          }],
          line: 93
        },
        "1": {
          loc: {
            start: {
              line: 97,
              column: 4
            },
            end: {
              line: 99,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 97,
              column: 4
            },
            end: {
              line: 99,
              column: 5
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 97
        },
        "2": {
          loc: {
            start: {
              line: 97,
              column: 8
            },
            end: {
              line: 97,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 97,
              column: 8
            },
            end: {
              line: 97,
              column: 21
            }
          }, {
            start: {
              line: 97,
              column: 25
            },
            end: {
              line: 97,
              column: 46
            }
          }],
          line: 97
        },
        "3": {
          loc: {
            start: {
              line: 107,
              column: 4
            },
            end: {
              line: 109,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 107,
              column: 4
            },
            end: {
              line: 109,
              column: 5
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 107
        },
        "4": {
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
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 113
        },
        "5": {
          loc: {
            start: {
              line: 133,
              column: 8
            },
            end: {
              line: 135,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 133,
              column: 8
            },
            end: {
              line: 135,
              column: 9
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 133
        },
        "6": {
          loc: {
            start: {
              line: 143,
              column: 4
            },
            end: {
              line: 145,
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
              line: 145,
              column: 5
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 143
        },
        "7": {
          loc: {
            start: {
              line: 147,
              column: 4
            },
            end: {
              line: 149,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 147,
              column: 4
            },
            end: {
              line: 149,
              column: 5
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 147
        },
        "8": {
          loc: {
            start: {
              line: 147,
              column: 8
            },
            end: {
              line: 147,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 147,
              column: 8
            },
            end: {
              line: 147,
              column: 22
            }
          }, {
            start: {
              line: 147,
              column: 26
            },
            end: {
              line: 147,
              column: 47
            }
          }],
          line: 147
        },
        "9": {
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
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 155
        },
        "10": {
          loc: {
            start: {
              line: 155,
              column: 8
            },
            end: {
              line: 155,
              column: 56
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 155,
              column: 8
            },
            end: {
              line: 155,
              column: 22
            }
          }, {
            start: {
              line: 155,
              column: 26
            },
            end: {
              line: 155,
              column: 56
            }
          }],
          line: 155
        },
        "11": {
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
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 162
        },
        "12": {
          loc: {
            start: {
              line: 176,
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
              line: 176,
              column: 4
            },
            end: {
              line: 184,
              column: 5
            }
          }, {
            start: {
              line: 182,
              column: 11
            },
            end: {
              line: 184,
              column: 5
            }
          }],
          line: 176
        },
        "13": {
          loc: {
            start: {
              line: 229,
              column: 4
            },
            end: {
              line: 231,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 229,
              column: 4
            },
            end: {
              line: 231,
              column: 5
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 229
        },
        "14": {
          loc: {
            start: {
              line: 235,
              column: 4
            },
            end: {
              line: 237,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 235,
              column: 4
            },
            end: {
              line: 237,
              column: 5
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 235
        },
        "15": {
          loc: {
            start: {
              line: 246,
              column: 6
            },
            end: {
              line: 251,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 246,
              column: 6
            },
            end: {
              line: 251,
              column: 7
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 246
        },
        "16": {
          loc: {
            start: {
              line: 259,
              column: 22
            },
            end: {
              line: 259,
              column: 91
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 259,
              column: 37
            },
            end: {
              line: 259,
              column: 84
            }
          }, {
            start: {
              line: 259,
              column: 87
            },
            end: {
              line: 259,
              column: 91
            }
          }],
          line: 259
        },
        "17": {
          loc: {
            start: {
              line: 261,
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
              line: 261,
              column: 4
            },
            end: {
              line: 265,
              column: 5
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 261
        },
        "18": {
          loc: {
            start: {
              line: 261,
              column: 8
            },
            end: {
              line: 262,
              column: 63
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 261,
              column: 8
            },
            end: {
              line: 261,
              column: 33
            }
          }, {
            start: {
              line: 262,
              column: 8
            },
            end: {
              line: 262,
              column: 63
            }
          }],
          line: 261
        },
        "19": {
          loc: {
            start: {
              line: 272,
              column: 4
            },
            end: {
              line: 276,
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
              line: 276,
              column: 5
            }
          }, {
            start: {
              line: 274,
              column: 11
            },
            end: {
              line: 276,
              column: 5
            }
          }],
          line: 272
        },
        "20": {
          loc: {
            start: {
              line: 272,
              column: 8
            },
            end: {
              line: 272,
              column: 68
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 272,
              column: 8
            },
            end: {
              line: 272,
              column: 55
            }
          }, {
            start: {
              line: 272,
              column: 59
            },
            end: {
              line: 272,
              column: 68
            }
          }],
          line: 272
        },
        "21": {
          loc: {
            start: {
              line: 278,
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
              line: 278,
              column: 4
            },
            end: {
              line: 280,
              column: 5
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 278
        },
        "22": {
          loc: {
            start: {
              line: 284,
              column: 4
            },
            end: {
              line: 286,
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
              line: 286,
              column: 5
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 284
        },
        "23": {
          loc: {
            start: {
              line: 293,
              column: 6
            },
            end: {
              line: 295,
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
              line: 295,
              column: 7
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 293
        },
        "24": {
          loc: {
            start: {
              line: 301,
              column: 4
            },
            end: {
              line: 309,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 301,
              column: 4
            },
            end: {
              line: 309,
              column: 5
            }
          }, {
            start: {
              line: 307,
              column: 11
            },
            end: {
              line: 309,
              column: 5
            }
          }],
          line: 301
        },
        "25": {
          loc: {
            start: {
              line: 316,
              column: 8
            },
            end: {
              line: 320,
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
              line: 320,
              column: 9
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 316
        },
        "26": {
          loc: {
            start: {
              line: 316,
              column: 12
            },
            end: {
              line: 318,
              column: 59
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 316,
              column: 12
            },
            end: {
              line: 316,
              column: 37
            }
          }, {
            start: {
              line: 317,
              column: 12
            },
            end: {
              line: 317,
              column: 42
            }
          }, {
            start: {
              line: 318,
              column: 12
            },
            end: {
              line: 318,
              column: 59
            }
          }],
          line: 316
        },
        "27": {
          loc: {
            start: {
              line: 325,
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
              line: 325,
              column: 4
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
          line: 325
        },
        "28": {
          loc: {
            start: {
              line: 327,
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
              line: 327,
              column: 8
            },
            end: {
              line: 332,
              column: 9
            }
          }, {
            start: {
              line: 330,
              column: 15
            },
            end: {
              line: 332,
              column: 9
            }
          }],
          line: 327
        },
        "29": {
          loc: {
            start: {
              line: 327,
              column: 12
            },
            end: {
              line: 327,
              column: 67
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 327,
              column: 12
            },
            end: {
              line: 327,
              column: 33
            }
          }, {
            start: {
              line: 327,
              column: 37
            },
            end: {
              line: 327,
              column: 67
            }
          }],
          line: 327
        },
        "30": {
          loc: {
            start: {
              line: 330,
              column: 15
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
              column: 15
            },
            end: {
              line: 332,
              column: 9
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 330
        },
        "31": {
          loc: {
            start: {
              line: 330,
              column: 19
            },
            end: {
              line: 330,
              column: 75
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 330,
              column: 19
            },
            end: {
              line: 330,
              column: 41
            }
          }, {
            start: {
              line: 330,
              column: 45
            },
            end: {
              line: 330,
              column: 75
            }
          }],
          line: 330
        },
        "32": {
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
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 334
        },
        "33": {
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
              line: 342,
              column: 11
            },
            end: {
              line: 344,
              column: 5
            }
          }],
          line: 340
        },
        "34": {
          loc: {
            start: {
              line: 362,
              column: 4
            },
            end: {
              line: 365,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 362,
              column: 4
            },
            end: {
              line: 365,
              column: 5
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 362
        },
        "35": {
          loc: {
            start: {
              line: 369,
              column: 20
            },
            end: {
              line: 370,
              column: 26
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 370,
              column: 6
            },
            end: {
              line: 370,
              column: 21
            }
          }, {
            start: {
              line: 370,
              column: 24
            },
            end: {
              line: 370,
              column: 26
            }
          }],
          line: 369
        },
        "36": {
          loc: {
            start: {
              line: 372,
              column: 4
            },
            end: {
              line: 440,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 372,
              column: 4
            },
            end: {
              line: 440,
              column: 5
            }
          }, {
            start: {
              line: 419,
              column: 11
            },
            end: {
              line: 440,
              column: 5
            }
          }],
          line: 372
        },
        "37": {
          loc: {
            start: {
              line: 372,
              column: 8
            },
            end: {
              line: 372,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 372,
              column: 8
            },
            end: {
              line: 372,
              column: 21
            }
          }, {
            start: {
              line: 372,
              column: 25
            },
            end: {
              line: 372,
              column: 46
            }
          }],
          line: 372
        },
        "38": {
          loc: {
            start: {
              line: 376,
              column: 6
            },
            end: {
              line: 378,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 376,
              column: 6
            },
            end: {
              line: 378,
              column: 7
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 376
        },
        "39": {
          loc: {
            start: {
              line: 383,
              column: 8
            },
            end: {
              line: 386,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 383,
              column: 8
            },
            end: {
              line: 386,
              column: 9
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 383
        },
        "40": {
          loc: {
            start: {
              line: 388,
              column: 8
            },
            end: {
              line: 390,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 388,
              column: 8
            },
            end: {
              line: 390,
              column: 9
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 388
        },
        "41": {
          loc: {
            start: {
              line: 392,
              column: 8
            },
            end: {
              line: 396,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 392,
              column: 8
            },
            end: {
              line: 396,
              column: 9
            }
          }, {
            start: {
              line: 394,
              column: 15
            },
            end: {
              line: 396,
              column: 9
            }
          }],
          line: 392
        },
        "42": {
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
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 399
        },
        "43": {
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
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 405
        },
        "44": {
          loc: {
            start: {
              line: 409,
              column: 6
            },
            end: {
              line: 412,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 409,
              column: 6
            },
            end: {
              line: 412,
              column: 7
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 409
        },
        "45": {
          loc: {
            start: {
              line: 419,
              column: 11
            },
            end: {
              line: 440,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 419,
              column: 11
            },
            end: {
              line: 440,
              column: 5
            }
          }, {
            start: {
              line: 438,
              column: 11
            },
            end: {
              line: 440,
              column: 5
            }
          }],
          line: 419
        },
        "46": {
          loc: {
            start: {
              line: 419,
              column: 15
            },
            end: {
              line: 419,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 419,
              column: 15
            },
            end: {
              line: 419,
              column: 29
            }
          }, {
            start: {
              line: 419,
              column: 33
            },
            end: {
              line: 419,
              column: 47
            }
          }],
          line: 419
        },
        "47": {
          loc: {
            start: {
              line: 424,
              column: 8
            },
            end: {
              line: 426,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 424,
              column: 8
            },
            end: {
              line: 426,
              column: 9
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 424
        },
        "48": {
          loc: {
            start: {
              line: 429,
              column: 6
            },
            end: {
              line: 437,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 429,
              column: 6
            },
            end: {
              line: 437,
              column: 7
            }
          }, {
            start: {
              line: 435,
              column: 13
            },
            end: {
              line: 437,
              column: 7
            }
          }],
          line: 429
        },
        "49": {
          loc: {
            start: {
              line: 438,
              column: 11
            },
            end: {
              line: 440,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 438,
              column: 11
            },
            end: {
              line: 440,
              column: 5
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 438
        },
        "50": {
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
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 451
        },
        "51": {
          loc: {
            start: {
              line: 451,
              column: 8
            },
            end: {
              line: 451,
              column: 54
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 451,
              column: 8
            },
            end: {
              line: 451,
              column: 32
            }
          }, {
            start: {
              line: 451,
              column: 36
            },
            end: {
              line: 451,
              column: 54
            }
          }],
          line: 451
        },
        "52": {
          loc: {
            start: {
              line: 455,
              column: 4
            },
            end: {
              line: 457,
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
              line: 457,
              column: 5
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 455
        },
        "53": {
          loc: {
            start: {
              line: 455,
              column: 8
            },
            end: {
              line: 455,
              column: 54
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
              column: 31
            }
          }, {
            start: {
              line: 455,
              column: 35
            },
            end: {
              line: 455,
              column: 54
            }
          }],
          line: 455
        },
        "54": {
          loc: {
            start: {
              line: 472,
              column: 4
            },
            end: {
              line: 502,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 472,
              column: 4
            },
            end: {
              line: 502,
              column: 5
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 472
        },
        "55": {
          loc: {
            start: {
              line: 513,
              column: 35
            },
            end: {
              line: 513,
              column: 57
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 513,
              column: 45
            },
            end: {
              line: 513,
              column: 52
            }
          }, {
            start: {
              line: 513,
              column: 55
            },
            end: {
              line: 513,
              column: 57
            }
          }],
          line: 513
        },
        "56": {
          loc: {
            start: {
              line: 520,
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
              line: 520,
              column: 6
            },
            end: {
              line: 522,
              column: 7
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 520
        },
        "57": {
          loc: {
            start: {
              line: 528,
              column: 39
            },
            end: {
              line: 528,
              column: 61
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 528,
              column: 49
            },
            end: {
              line: 528,
              column: 56
            }
          }, {
            start: {
              line: 528,
              column: 59
            },
            end: {
              line: 528,
              column: 61
            }
          }],
          line: 528
        },
        "58": {
          loc: {
            start: {
              line: 547,
              column: 12
            },
            end: {
              line: 547,
              column: 62
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 547,
              column: 51
            },
            end: {
              line: 547,
              column: 57
            }
          }, {
            start: {
              line: 547,
              column: 60
            },
            end: {
              line: 547,
              column: 62
            }
          }],
          line: 547
        },
        "59": {
          loc: {
            start: {
              line: 547,
              column: 12
            },
            end: {
              line: 547,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 547,
              column: 12
            },
            end: {
              line: 547,
              column: 38
            }
          }, {
            start: {
              line: 547,
              column: 42
            },
            end: {
              line: 547,
              column: 48
            }
          }],
          line: 547
        },
        "60": {
          loc: {
            start: {
              line: 550,
              column: 6
            },
            end: {
              line: 553,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 550,
              column: 6
            },
            end: {
              line: 553,
              column: 7
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 550
        },
        "61": {
          loc: {
            start: {
              line: 555,
              column: 6
            },
            end: {
              line: 563,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 555,
              column: 6
            },
            end: {
              line: 563,
              column: 7
            }
          }, {
            start: {
              line: 561,
              column: 13
            },
            end: {
              line: 563,
              column: 7
            }
          }],
          line: 555
        },
        "62": {
          loc: {
            start: {
              line: 556,
              column: 8
            },
            end: {
              line: 558,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 556,
              column: 8
            },
            end: {
              line: 558,
              column: 9
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 556
        },
        "63": {
          loc: {
            start: {
              line: 561,
              column: 13
            },
            end: {
              line: 563,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 561,
              column: 13
            },
            end: {
              line: 563,
              column: 7
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 561
        },
        "64": {
          loc: {
            start: {
              line: 576,
              column: 2
            },
            end: {
              line: 578,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 576,
              column: 2
            },
            end: {
              line: 578,
              column: 3
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 576
        },
        "65": {
          loc: {
            start: {
              line: 580,
              column: 17
            },
            end: {
              line: 584,
              column: 5
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 581,
              column: 4
            },
            end: {
              line: 581,
              column: 12
            }
          }, {
            start: {
              line: 581,
              column: 15
            },
            end: {
              line: 584,
              column: 5
            }
          }],
          line: 580
        },
        "66": {
          loc: {
            start: {
              line: 586,
              column: 2
            },
            end: {
              line: 588,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 586,
              column: 2
            },
            end: {
              line: 588,
              column: 3
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 586
        },
        "67": {
          loc: {
            start: {
              line: 586,
              column: 6
            },
            end: {
              line: 586,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 586,
              column: 6
            },
            end: {
              line: 586,
              column: 26
            }
          }, {
            start: {
              line: 586,
              column: 30
            },
            end: {
              line: 586,
              column: 53
            }
          }],
          line: 586
        },
        "68": {
          loc: {
            start: {
              line: 591,
              column: 4
            },
            end: {
              line: 594,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 591,
              column: 4
            },
            end: {
              line: 594,
              column: 5
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 591
        },
        "69": {
          loc: {
            start: {
              line: 597,
              column: 6
            },
            end: {
              line: 599,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 597,
              column: 6
            },
            end: {
              line: 599,
              column: 7
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 597
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
        "291": 0
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
        "46": 0,
        "47": 0
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
        "66": [0, 0],
        "67": [0, 0],
        "68": [0, 0],
        "69": [0, 0]
      },
      _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
      hash: "8bdaa03a147e9576a44592c8d2ec8dc28568a24c"
    };
    var coverage = global[gcv] || (global[gcv] = {});

    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }

    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_1bxzoyh6ou = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }

  cov_1bxzoyh6ou();
  /**
   * Constants
   */

  var NAME = (cov_1bxzoyh6ou().s[0]++, 'modal');
  var VERSION = (cov_1bxzoyh6ou().s[1]++, '4.6.2');
  var DATA_KEY = (cov_1bxzoyh6ou().s[2]++, 'bs.modal');
  var EVENT_KEY = (cov_1bxzoyh6ou().s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_1bxzoyh6ou().s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_1bxzoyh6ou().s[5]++, $__default["default"].fn[NAME]);
  var ESCAPE_KEYCODE = (cov_1bxzoyh6ou().s[6]++, 27); // KeyboardEvent.which value for Escape (Esc) key

  var CLASS_NAME_SCROLLABLE = (cov_1bxzoyh6ou().s[7]++, 'modal-dialog-scrollable');
  var CLASS_NAME_SCROLLBAR_MEASURER = (cov_1bxzoyh6ou().s[8]++, 'modal-scrollbar-measure');
  var CLASS_NAME_BACKDROP = (cov_1bxzoyh6ou().s[9]++, 'modal-backdrop');
  var CLASS_NAME_OPEN = (cov_1bxzoyh6ou().s[10]++, 'modal-open');
  var CLASS_NAME_FADE = (cov_1bxzoyh6ou().s[11]++, 'fade');
  var CLASS_NAME_SHOW = (cov_1bxzoyh6ou().s[12]++, 'show');
  var CLASS_NAME_STATIC = (cov_1bxzoyh6ou().s[13]++, 'modal-static');
  var EVENT_HIDE = (cov_1bxzoyh6ou().s[14]++, "hide" + EVENT_KEY);
  var EVENT_HIDE_PREVENTED = (cov_1bxzoyh6ou().s[15]++, "hidePrevented" + EVENT_KEY);
  var EVENT_HIDDEN = (cov_1bxzoyh6ou().s[16]++, "hidden" + EVENT_KEY);
  var EVENT_SHOW = (cov_1bxzoyh6ou().s[17]++, "show" + EVENT_KEY);
  var EVENT_SHOWN = (cov_1bxzoyh6ou().s[18]++, "shown" + EVENT_KEY);
  var EVENT_FOCUSIN = (cov_1bxzoyh6ou().s[19]++, "focusin" + EVENT_KEY);
  var EVENT_RESIZE = (cov_1bxzoyh6ou().s[20]++, "resize" + EVENT_KEY);
  var EVENT_CLICK_DISMISS = (cov_1bxzoyh6ou().s[21]++, "click.dismiss" + EVENT_KEY);
  var EVENT_KEYDOWN_DISMISS = (cov_1bxzoyh6ou().s[22]++, "keydown.dismiss" + EVENT_KEY);
  var EVENT_MOUSEUP_DISMISS = (cov_1bxzoyh6ou().s[23]++, "mouseup.dismiss" + EVENT_KEY);
  var EVENT_MOUSEDOWN_DISMISS = (cov_1bxzoyh6ou().s[24]++, "mousedown.dismiss" + EVENT_KEY);
  var EVENT_CLICK_DATA_API = (cov_1bxzoyh6ou().s[25]++, "click" + EVENT_KEY + DATA_API_KEY);
  var SELECTOR_DIALOG = (cov_1bxzoyh6ou().s[26]++, '.modal-dialog');
  var SELECTOR_MODAL_BODY = (cov_1bxzoyh6ou().s[27]++, '.modal-body');
  var SELECTOR_DATA_TOGGLE = (cov_1bxzoyh6ou().s[28]++, '[data-toggle="modal"]');
  var SELECTOR_DATA_DISMISS = (cov_1bxzoyh6ou().s[29]++, '[data-dismiss="modal"]');
  var SELECTOR_FIXED_CONTENT = (cov_1bxzoyh6ou().s[30]++, '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top');
  var SELECTOR_STICKY_CONTENT = (cov_1bxzoyh6ou().s[31]++, '.sticky-top');
  var Default = (cov_1bxzoyh6ou().s[32]++, {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  });
  var DefaultType = (cov_1bxzoyh6ou().s[33]++, {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  });
  /**
   * Class definition
   */

  var Modal = /*#__PURE__*/function () {
    function Modal(element, config) {
      cov_1bxzoyh6ou().f[0]++;
      cov_1bxzoyh6ou().s[34]++;
      this._config = this._getConfig(config);
      cov_1bxzoyh6ou().s[35]++;
      this._element = element;
      cov_1bxzoyh6ou().s[36]++;
      this._dialog = element.querySelector(SELECTOR_DIALOG);
      cov_1bxzoyh6ou().s[37]++;
      this._backdrop = null;
      cov_1bxzoyh6ou().s[38]++;
      this._isShown = false;
      cov_1bxzoyh6ou().s[39]++;
      this._isBodyOverflowing = false;
      cov_1bxzoyh6ou().s[40]++;
      this._ignoreBackdropClick = false;
      cov_1bxzoyh6ou().s[41]++;
      this._isTransitioning = false;
      cov_1bxzoyh6ou().s[42]++;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      cov_1bxzoyh6ou().f[3]++;
      cov_1bxzoyh6ou().s[45]++;
      return this._isShown ? (cov_1bxzoyh6ou().b[0][0]++, this.hide()) : (cov_1bxzoyh6ou().b[0][1]++, this.show(relatedTarget));
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      cov_1bxzoyh6ou().f[4]++;
      cov_1bxzoyh6ou().s[46]++;

      if ((cov_1bxzoyh6ou().b[2][0]++, this._isShown) || (cov_1bxzoyh6ou().b[2][1]++, this._isTransitioning)) {
        cov_1bxzoyh6ou().b[1][0]++;
        cov_1bxzoyh6ou().s[47]++;
        return;
      } else {
        cov_1bxzoyh6ou().b[1][1]++;
      }

      var showEvent = (cov_1bxzoyh6ou().s[48]++, $__default["default"].Event(EVENT_SHOW, {
        relatedTarget: relatedTarget
      }));
      cov_1bxzoyh6ou().s[49]++;
      $__default["default"](this._element).trigger(showEvent);
      cov_1bxzoyh6ou().s[50]++;

      if (showEvent.isDefaultPrevented()) {
        cov_1bxzoyh6ou().b[3][0]++;
        cov_1bxzoyh6ou().s[51]++;
        return;
      } else {
        cov_1bxzoyh6ou().b[3][1]++;
      }

      cov_1bxzoyh6ou().s[52]++;
      this._isShown = true;
      cov_1bxzoyh6ou().s[53]++;

      if ($__default["default"](this._element).hasClass(CLASS_NAME_FADE)) {
        cov_1bxzoyh6ou().b[4][0]++;
        cov_1bxzoyh6ou().s[54]++;
        this._isTransitioning = true;
      } else {
        cov_1bxzoyh6ou().b[4][1]++;
      }

      cov_1bxzoyh6ou().s[55]++;

      this._checkScrollbar();

      cov_1bxzoyh6ou().s[56]++;

      this._setScrollbar();

      cov_1bxzoyh6ou().s[57]++;

      this._adjustDialog();

      cov_1bxzoyh6ou().s[58]++;

      this._setEscapeEvent();

      cov_1bxzoyh6ou().s[59]++;

      this._setResizeEvent();

      cov_1bxzoyh6ou().s[60]++;
      $__default["default"](this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
        cov_1bxzoyh6ou().f[5]++;
        cov_1bxzoyh6ou().s[61]++;
        return _this.hide(event);
      });
      cov_1bxzoyh6ou().s[62]++;
      $__default["default"](this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
        cov_1bxzoyh6ou().f[6]++;
        cov_1bxzoyh6ou().s[63]++;
        $__default["default"](_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
          cov_1bxzoyh6ou().f[7]++;
          cov_1bxzoyh6ou().s[64]++;

          if ($__default["default"](event.target).is(_this._element)) {
            cov_1bxzoyh6ou().b[5][0]++;
            cov_1bxzoyh6ou().s[65]++;
            _this._ignoreBackdropClick = true;
          } else {
            cov_1bxzoyh6ou().b[5][1]++;
          }
        });
      });
      cov_1bxzoyh6ou().s[66]++;

      this._showBackdrop(function () {
        cov_1bxzoyh6ou().f[8]++;
        cov_1bxzoyh6ou().s[67]++;
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      cov_1bxzoyh6ou().f[9]++;
      cov_1bxzoyh6ou().s[68]++;

      if (event) {
        cov_1bxzoyh6ou().b[6][0]++;
        cov_1bxzoyh6ou().s[69]++;
        event.preventDefault();
      } else {
        cov_1bxzoyh6ou().b[6][1]++;
      }

      cov_1bxzoyh6ou().s[70]++;

      if ((cov_1bxzoyh6ou().b[8][0]++, !this._isShown) || (cov_1bxzoyh6ou().b[8][1]++, this._isTransitioning)) {
        cov_1bxzoyh6ou().b[7][0]++;
        cov_1bxzoyh6ou().s[71]++;
        return;
      } else {
        cov_1bxzoyh6ou().b[7][1]++;
      }

      var hideEvent = (cov_1bxzoyh6ou().s[72]++, $__default["default"].Event(EVENT_HIDE));
      cov_1bxzoyh6ou().s[73]++;
      $__default["default"](this._element).trigger(hideEvent);
      cov_1bxzoyh6ou().s[74]++;

      if ((cov_1bxzoyh6ou().b[10][0]++, !this._isShown) || (cov_1bxzoyh6ou().b[10][1]++, hideEvent.isDefaultPrevented())) {
        cov_1bxzoyh6ou().b[9][0]++;
        cov_1bxzoyh6ou().s[75]++;
        return;
      } else {
        cov_1bxzoyh6ou().b[9][1]++;
      }

      cov_1bxzoyh6ou().s[76]++;
      this._isShown = false;
      var transition = (cov_1bxzoyh6ou().s[77]++, $__default["default"](this._element).hasClass(CLASS_NAME_FADE));
      cov_1bxzoyh6ou().s[78]++;

      if (transition) {
        cov_1bxzoyh6ou().b[11][0]++;
        cov_1bxzoyh6ou().s[79]++;
        this._isTransitioning = true;
      } else {
        cov_1bxzoyh6ou().b[11][1]++;
      }

      cov_1bxzoyh6ou().s[80]++;

      this._setEscapeEvent();

      cov_1bxzoyh6ou().s[81]++;

      this._setResizeEvent();

      cov_1bxzoyh6ou().s[82]++;
      $__default["default"](document).off(EVENT_FOCUSIN);
      cov_1bxzoyh6ou().s[83]++;
      $__default["default"](this._element).removeClass(CLASS_NAME_SHOW);
      cov_1bxzoyh6ou().s[84]++;
      $__default["default"](this._element).off(EVENT_CLICK_DISMISS);
      cov_1bxzoyh6ou().s[85]++;
      $__default["default"](this._dialog).off(EVENT_MOUSEDOWN_DISMISS);
      cov_1bxzoyh6ou().s[86]++;

      if (transition) {
        cov_1bxzoyh6ou().b[12][0]++;
        var transitionDuration = (cov_1bxzoyh6ou().s[87]++, Util__default["default"].getTransitionDurationFromElement(this._element));
        cov_1bxzoyh6ou().s[88]++;
        $__default["default"](this._element).one(Util__default["default"].TRANSITION_END, function (event) {
          cov_1bxzoyh6ou().f[10]++;
          cov_1bxzoyh6ou().s[89]++;
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        cov_1bxzoyh6ou().b[12][1]++;
        cov_1bxzoyh6ou().s[90]++;

        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      cov_1bxzoyh6ou().f[11]++;
      cov_1bxzoyh6ou().s[91]++;
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        cov_1bxzoyh6ou().f[12]++;
        cov_1bxzoyh6ou().s[92]++;
        return $__default["default"](htmlElement).off(EVENT_KEY);
      });
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      cov_1bxzoyh6ou().s[93]++;
      $__default["default"](document).off(EVENT_FOCUSIN);
      cov_1bxzoyh6ou().s[94]++;
      $__default["default"].removeData(this._element, DATA_KEY);
      cov_1bxzoyh6ou().s[95]++;
      this._config = null;
      cov_1bxzoyh6ou().s[96]++;
      this._element = null;
      cov_1bxzoyh6ou().s[97]++;
      this._dialog = null;
      cov_1bxzoyh6ou().s[98]++;
      this._backdrop = null;
      cov_1bxzoyh6ou().s[99]++;
      this._isShown = null;
      cov_1bxzoyh6ou().s[100]++;
      this._isBodyOverflowing = null;
      cov_1bxzoyh6ou().s[101]++;
      this._ignoreBackdropClick = null;
      cov_1bxzoyh6ou().s[102]++;
      this._isTransitioning = null;
      cov_1bxzoyh6ou().s[103]++;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      cov_1bxzoyh6ou().f[13]++;
      cov_1bxzoyh6ou().s[104]++;

      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      cov_1bxzoyh6ou().f[14]++;
      cov_1bxzoyh6ou().s[105]++;
      config = _extends({}, Default, config);
      cov_1bxzoyh6ou().s[106]++;
      Util__default["default"].typeCheckConfig(NAME, config, DefaultType);
      cov_1bxzoyh6ou().s[107]++;
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      cov_1bxzoyh6ou().f[15]++;
      var hideEventPrevented = (cov_1bxzoyh6ou().s[108]++, $__default["default"].Event(EVENT_HIDE_PREVENTED));
      cov_1bxzoyh6ou().s[109]++;
      $__default["default"](this._element).trigger(hideEventPrevented);
      cov_1bxzoyh6ou().s[110]++;

      if (hideEventPrevented.isDefaultPrevented()) {
        cov_1bxzoyh6ou().b[13][0]++;
        cov_1bxzoyh6ou().s[111]++;
        return;
      } else {
        cov_1bxzoyh6ou().b[13][1]++;
      }

      var isModalOverflowing = (cov_1bxzoyh6ou().s[112]++, this._element.scrollHeight > document.documentElement.clientHeight);
      cov_1bxzoyh6ou().s[113]++;

      if (!isModalOverflowing) {
        cov_1bxzoyh6ou().b[14][0]++;
        cov_1bxzoyh6ou().s[114]++;
        this._element.style.overflowY = 'hidden';
      } else {
        cov_1bxzoyh6ou().b[14][1]++;
      }

      cov_1bxzoyh6ou().s[115]++;

      this._element.classList.add(CLASS_NAME_STATIC);

      var modalTransitionDuration = (cov_1bxzoyh6ou().s[116]++, Util__default["default"].getTransitionDurationFromElement(this._dialog));
      cov_1bxzoyh6ou().s[117]++;
      $__default["default"](this._element).off(Util__default["default"].TRANSITION_END);
      cov_1bxzoyh6ou().s[118]++;
      $__default["default"](this._element).one(Util__default["default"].TRANSITION_END, function () {
        cov_1bxzoyh6ou().f[16]++;
        cov_1bxzoyh6ou().s[119]++;

        _this3._element.classList.remove(CLASS_NAME_STATIC);

        cov_1bxzoyh6ou().s[120]++;

        if (!isModalOverflowing) {
          cov_1bxzoyh6ou().b[15][0]++;
          cov_1bxzoyh6ou().s[121]++;
          $__default["default"](_this3._element).one(Util__default["default"].TRANSITION_END, function () {
            cov_1bxzoyh6ou().f[17]++;
            cov_1bxzoyh6ou().s[122]++;
            _this3._element.style.overflowY = '';
          }).emulateTransitionEnd(_this3._element, modalTransitionDuration);
        } else {
          cov_1bxzoyh6ou().b[15][1]++;
        }
      }).emulateTransitionEnd(modalTransitionDuration);
      cov_1bxzoyh6ou().s[123]++;

      this._element.focus();
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      cov_1bxzoyh6ou().f[18]++;
      var transition = (cov_1bxzoyh6ou().s[124]++, $__default["default"](this._element).hasClass(CLASS_NAME_FADE));
      var modalBody = (cov_1bxzoyh6ou().s[125]++, this._dialog ? (cov_1bxzoyh6ou().b[16][0]++, this._dialog.querySelector(SELECTOR_MODAL_BODY)) : (cov_1bxzoyh6ou().b[16][1]++, null));
      cov_1bxzoyh6ou().s[126]++;

      if ((cov_1bxzoyh6ou().b[18][0]++, !this._element.parentNode) || (cov_1bxzoyh6ou().b[18][1]++, this._element.parentNode.nodeType !== Node.ELEMENT_NODE)) {
        cov_1bxzoyh6ou().b[17][0]++;
        cov_1bxzoyh6ou().s[127]++;
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      } else {
        cov_1bxzoyh6ou().b[17][1]++;
      }

      cov_1bxzoyh6ou().s[128]++;
      this._element.style.display = 'block';
      cov_1bxzoyh6ou().s[129]++;

      this._element.removeAttribute('aria-hidden');

      cov_1bxzoyh6ou().s[130]++;

      this._element.setAttribute('aria-modal', true);

      cov_1bxzoyh6ou().s[131]++;

      this._element.setAttribute('role', 'dialog');

      cov_1bxzoyh6ou().s[132]++;

      if ((cov_1bxzoyh6ou().b[20][0]++, $__default["default"](this._dialog).hasClass(CLASS_NAME_SCROLLABLE)) && (cov_1bxzoyh6ou().b[20][1]++, modalBody)) {
        cov_1bxzoyh6ou().b[19][0]++;
        cov_1bxzoyh6ou().s[133]++;
        modalBody.scrollTop = 0;
      } else {
        cov_1bxzoyh6ou().b[19][1]++;
        cov_1bxzoyh6ou().s[134]++;
        this._element.scrollTop = 0;
      }

      cov_1bxzoyh6ou().s[135]++;

      if (transition) {
        cov_1bxzoyh6ou().b[21][0]++;
        cov_1bxzoyh6ou().s[136]++;
        Util__default["default"].reflow(this._element);
      } else {
        cov_1bxzoyh6ou().b[21][1]++;
      }

      cov_1bxzoyh6ou().s[137]++;
      $__default["default"](this._element).addClass(CLASS_NAME_SHOW);
      cov_1bxzoyh6ou().s[138]++;

      if (this._config.focus) {
        cov_1bxzoyh6ou().b[22][0]++;
        cov_1bxzoyh6ou().s[139]++;

        this._enforceFocus();
      } else {
        cov_1bxzoyh6ou().b[22][1]++;
      }

      var shownEvent = (cov_1bxzoyh6ou().s[140]++, $__default["default"].Event(EVENT_SHOWN, {
        relatedTarget: relatedTarget
      }));
      cov_1bxzoyh6ou().s[141]++;

      var transitionComplete = function transitionComplete() {
        cov_1bxzoyh6ou().f[19]++;
        cov_1bxzoyh6ou().s[142]++;

        if (_this4._config.focus) {
          cov_1bxzoyh6ou().b[23][0]++;
          cov_1bxzoyh6ou().s[143]++;

          _this4._element.focus();
        } else {
          cov_1bxzoyh6ou().b[23][1]++;
        }

        cov_1bxzoyh6ou().s[144]++;
        _this4._isTransitioning = false;
        cov_1bxzoyh6ou().s[145]++;
        $__default["default"](_this4._element).trigger(shownEvent);
      };

      cov_1bxzoyh6ou().s[146]++;

      if (transition) {
        cov_1bxzoyh6ou().b[24][0]++;
        var transitionDuration = (cov_1bxzoyh6ou().s[147]++, Util__default["default"].getTransitionDurationFromElement(this._dialog));
        cov_1bxzoyh6ou().s[148]++;
        $__default["default"](this._dialog).one(Util__default["default"].TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        cov_1bxzoyh6ou().b[24][1]++;
        cov_1bxzoyh6ou().s[149]++;
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      cov_1bxzoyh6ou().f[20]++;
      cov_1bxzoyh6ou().s[150]++;
      $__default["default"](document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
      .on(EVENT_FOCUSIN, function (event) {
        cov_1bxzoyh6ou().f[21]++;
        cov_1bxzoyh6ou().s[151]++;

        if ((cov_1bxzoyh6ou().b[26][0]++, document !== event.target) && (cov_1bxzoyh6ou().b[26][1]++, _this5._element !== event.target) && (cov_1bxzoyh6ou().b[26][2]++, $__default["default"](_this5._element).has(event.target).length === 0)) {
          cov_1bxzoyh6ou().b[25][0]++;
          cov_1bxzoyh6ou().s[152]++;

          _this5._element.focus();
        } else {
          cov_1bxzoyh6ou().b[25][1]++;
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      cov_1bxzoyh6ou().f[22]++;
      cov_1bxzoyh6ou().s[153]++;

      if (this._isShown) {
        cov_1bxzoyh6ou().b[27][0]++;
        cov_1bxzoyh6ou().s[154]++;
        $__default["default"](this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
          cov_1bxzoyh6ou().f[23]++;
          cov_1bxzoyh6ou().s[155]++;

          if ((cov_1bxzoyh6ou().b[29][0]++, _this6._config.keyboard) && (cov_1bxzoyh6ou().b[29][1]++, event.which === ESCAPE_KEYCODE)) {
            cov_1bxzoyh6ou().b[28][0]++;
            cov_1bxzoyh6ou().s[156]++;
            event.preventDefault();
            cov_1bxzoyh6ou().s[157]++;

            _this6.hide();
          } else {
            cov_1bxzoyh6ou().b[28][1]++;
            cov_1bxzoyh6ou().s[158]++;

            if ((cov_1bxzoyh6ou().b[31][0]++, !_this6._config.keyboard) && (cov_1bxzoyh6ou().b[31][1]++, event.which === ESCAPE_KEYCODE)) {
              cov_1bxzoyh6ou().b[30][0]++;
              cov_1bxzoyh6ou().s[159]++;

              _this6._triggerBackdropTransition();
            } else {
              cov_1bxzoyh6ou().b[30][1]++;
            }
          }
        });
      } else {
        cov_1bxzoyh6ou().b[27][1]++;
        cov_1bxzoyh6ou().s[160]++;

        if (!this._isShown) {
          cov_1bxzoyh6ou().b[32][0]++;
          cov_1bxzoyh6ou().s[161]++;
          $__default["default"](this._element).off(EVENT_KEYDOWN_DISMISS);
        } else {
          cov_1bxzoyh6ou().b[32][1]++;
        }
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      cov_1bxzoyh6ou().f[24]++;
      cov_1bxzoyh6ou().s[162]++;

      if (this._isShown) {
        cov_1bxzoyh6ou().b[33][0]++;
        cov_1bxzoyh6ou().s[163]++;
        $__default["default"](window).on(EVENT_RESIZE, function (event) {
          cov_1bxzoyh6ou().f[25]++;
          cov_1bxzoyh6ou().s[164]++;
          return _this7.handleUpdate(event);
        });
      } else {
        cov_1bxzoyh6ou().b[33][1]++;
        cov_1bxzoyh6ou().s[165]++;
        $__default["default"](window).off(EVENT_RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      cov_1bxzoyh6ou().f[26]++;
      cov_1bxzoyh6ou().s[166]++;
      this._element.style.display = 'none';
      cov_1bxzoyh6ou().s[167]++;

      this._element.setAttribute('aria-hidden', true);

      cov_1bxzoyh6ou().s[168]++;

      this._element.removeAttribute('aria-modal');

      cov_1bxzoyh6ou().s[169]++;

      this._element.removeAttribute('role');

      cov_1bxzoyh6ou().s[170]++;
      this._isTransitioning = false;
      cov_1bxzoyh6ou().s[171]++;

      this._showBackdrop(function () {
        cov_1bxzoyh6ou().f[27]++;
        cov_1bxzoyh6ou().s[172]++;
        $__default["default"](document.body).removeClass(CLASS_NAME_OPEN);
        cov_1bxzoyh6ou().s[173]++;

        _this8._resetAdjustments();

        cov_1bxzoyh6ou().s[174]++;

        _this8._resetScrollbar();

        cov_1bxzoyh6ou().s[175]++;
        $__default["default"](_this8._element).trigger(EVENT_HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      cov_1bxzoyh6ou().f[28]++;
      cov_1bxzoyh6ou().s[176]++;

      if (this._backdrop) {
        cov_1bxzoyh6ou().b[34][0]++;
        cov_1bxzoyh6ou().s[177]++;
        $__default["default"](this._backdrop).remove();
        cov_1bxzoyh6ou().s[178]++;
        this._backdrop = null;
      } else {
        cov_1bxzoyh6ou().b[34][1]++;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      cov_1bxzoyh6ou().f[29]++;
      var animate = (cov_1bxzoyh6ou().s[179]++, $__default["default"](this._element).hasClass(CLASS_NAME_FADE) ? (cov_1bxzoyh6ou().b[35][0]++, CLASS_NAME_FADE) : (cov_1bxzoyh6ou().b[35][1]++, ''));
      cov_1bxzoyh6ou().s[180]++;

      if ((cov_1bxzoyh6ou().b[37][0]++, this._isShown) && (cov_1bxzoyh6ou().b[37][1]++, this._config.backdrop)) {
        cov_1bxzoyh6ou().b[36][0]++;
        cov_1bxzoyh6ou().s[181]++;
        this._backdrop = document.createElement('div');
        cov_1bxzoyh6ou().s[182]++;
        this._backdrop.className = CLASS_NAME_BACKDROP;
        cov_1bxzoyh6ou().s[183]++;

        if (animate) {
          cov_1bxzoyh6ou().b[38][0]++;
          cov_1bxzoyh6ou().s[184]++;

          this._backdrop.classList.add(animate);
        } else {
          cov_1bxzoyh6ou().b[38][1]++;
        }

        cov_1bxzoyh6ou().s[185]++;
        $__default["default"](this._backdrop).appendTo(document.body);
        cov_1bxzoyh6ou().s[186]++;
        $__default["default"](this._element).on(EVENT_CLICK_DISMISS, function (event) {
          cov_1bxzoyh6ou().f[30]++;
          cov_1bxzoyh6ou().s[187]++;

          if (_this9._ignoreBackdropClick) {
            cov_1bxzoyh6ou().b[39][0]++;
            cov_1bxzoyh6ou().s[188]++;
            _this9._ignoreBackdropClick = false;
            cov_1bxzoyh6ou().s[189]++;
            return;
          } else {
            cov_1bxzoyh6ou().b[39][1]++;
          }

          cov_1bxzoyh6ou().s[190]++;

          if (event.target !== event.currentTarget) {
            cov_1bxzoyh6ou().b[40][0]++;
            cov_1bxzoyh6ou().s[191]++;
            return;
          } else {
            cov_1bxzoyh6ou().b[40][1]++;
          }

          cov_1bxzoyh6ou().s[192]++;

          if (_this9._config.backdrop === 'static') {
            cov_1bxzoyh6ou().b[41][0]++;
            cov_1bxzoyh6ou().s[193]++;

            _this9._triggerBackdropTransition();
          } else {
            cov_1bxzoyh6ou().b[41][1]++;
            cov_1bxzoyh6ou().s[194]++;

            _this9.hide();
          }
        });
        cov_1bxzoyh6ou().s[195]++;

        if (animate) {
          cov_1bxzoyh6ou().b[42][0]++;
          cov_1bxzoyh6ou().s[196]++;
          Util__default["default"].reflow(this._backdrop);
        } else {
          cov_1bxzoyh6ou().b[42][1]++;
        }

        cov_1bxzoyh6ou().s[197]++;
        $__default["default"](this._backdrop).addClass(CLASS_NAME_SHOW);
        cov_1bxzoyh6ou().s[198]++;

        if (!callback) {
          cov_1bxzoyh6ou().b[43][0]++;
          cov_1bxzoyh6ou().s[199]++;
          return;
        } else {
          cov_1bxzoyh6ou().b[43][1]++;
        }

        cov_1bxzoyh6ou().s[200]++;

        if (!animate) {
          cov_1bxzoyh6ou().b[44][0]++;
          cov_1bxzoyh6ou().s[201]++;
          callback();
          cov_1bxzoyh6ou().s[202]++;
          return;
        } else {
          cov_1bxzoyh6ou().b[44][1]++;
        }

        var backdropTransitionDuration = (cov_1bxzoyh6ou().s[203]++, Util__default["default"].getTransitionDurationFromElement(this._backdrop));
        cov_1bxzoyh6ou().s[204]++;
        $__default["default"](this._backdrop).one(Util__default["default"].TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else {
        cov_1bxzoyh6ou().b[36][1]++;
        cov_1bxzoyh6ou().s[205]++;

        if ((cov_1bxzoyh6ou().b[46][0]++, !this._isShown) && (cov_1bxzoyh6ou().b[46][1]++, this._backdrop)) {
          cov_1bxzoyh6ou().b[45][0]++;
          cov_1bxzoyh6ou().s[206]++;
          $__default["default"](this._backdrop).removeClass(CLASS_NAME_SHOW);
          cov_1bxzoyh6ou().s[207]++;

          var callbackRemove = function callbackRemove() {
            cov_1bxzoyh6ou().f[31]++;
            cov_1bxzoyh6ou().s[208]++;

            _this9._removeBackdrop();

            cov_1bxzoyh6ou().s[209]++;

            if (callback) {
              cov_1bxzoyh6ou().b[47][0]++;
              cov_1bxzoyh6ou().s[210]++;
              callback();
            } else {
              cov_1bxzoyh6ou().b[47][1]++;
            }
          };

          cov_1bxzoyh6ou().s[211]++;

          if ($__default["default"](this._element).hasClass(CLASS_NAME_FADE)) {
            cov_1bxzoyh6ou().b[48][0]++;

            var _backdropTransitionDuration = (cov_1bxzoyh6ou().s[212]++, Util__default["default"].getTransitionDurationFromElement(this._backdrop));

            cov_1bxzoyh6ou().s[213]++;
            $__default["default"](this._backdrop).one(Util__default["default"].TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
          } else {
            cov_1bxzoyh6ou().b[48][1]++;
            cov_1bxzoyh6ou().s[214]++;
            callbackRemove();
          }
        } else {
          cov_1bxzoyh6ou().b[45][1]++;
          cov_1bxzoyh6ou().s[215]++;

          if (callback) {
            cov_1bxzoyh6ou().b[49][0]++;
            cov_1bxzoyh6ou().s[216]++;
            callback();
          } else {
            cov_1bxzoyh6ou().b[49][1]++;
          }
        }
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      cov_1bxzoyh6ou().f[32]++;
      var isModalOverflowing = (cov_1bxzoyh6ou().s[217]++, this._element.scrollHeight > document.documentElement.clientHeight);
      cov_1bxzoyh6ou().s[218]++;

      if ((cov_1bxzoyh6ou().b[51][0]++, !this._isBodyOverflowing) && (cov_1bxzoyh6ou().b[51][1]++, isModalOverflowing)) {
        cov_1bxzoyh6ou().b[50][0]++;
        cov_1bxzoyh6ou().s[219]++;
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      } else {
        cov_1bxzoyh6ou().b[50][1]++;
      }

      cov_1bxzoyh6ou().s[220]++;

      if ((cov_1bxzoyh6ou().b[53][0]++, this._isBodyOverflowing) && (cov_1bxzoyh6ou().b[53][1]++, !isModalOverflowing)) {
        cov_1bxzoyh6ou().b[52][0]++;
        cov_1bxzoyh6ou().s[221]++;
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      } else {
        cov_1bxzoyh6ou().b[52][1]++;
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      cov_1bxzoyh6ou().f[33]++;
      cov_1bxzoyh6ou().s[222]++;
      this._element.style.paddingLeft = '';
      cov_1bxzoyh6ou().s[223]++;
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      cov_1bxzoyh6ou().f[34]++;
      var rect = (cov_1bxzoyh6ou().s[224]++, document.body.getBoundingClientRect());
      cov_1bxzoyh6ou().s[225]++;
      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
      cov_1bxzoyh6ou().s[226]++;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      cov_1bxzoyh6ou().f[35]++;
      cov_1bxzoyh6ou().s[227]++;

      if (this._isBodyOverflowing) {
        cov_1bxzoyh6ou().b[54][0]++;
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = (cov_1bxzoyh6ou().s[228]++, [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT)));
        var stickyContent = (cov_1bxzoyh6ou().s[229]++, [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT))); // Adjust fixed content padding

        cov_1bxzoyh6ou().s[230]++;
        $__default["default"](fixedContent).each(function (index, element) {
          cov_1bxzoyh6ou().f[36]++;
          var actualPadding = (cov_1bxzoyh6ou().s[231]++, element.style.paddingRight);
          var calculatedPadding = (cov_1bxzoyh6ou().s[232]++, $__default["default"](element).css('padding-right'));
          cov_1bxzoyh6ou().s[233]++;
          $__default["default"](element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        cov_1bxzoyh6ou().s[234]++;
        $__default["default"](stickyContent).each(function (index, element) {
          cov_1bxzoyh6ou().f[37]++;
          var actualMargin = (cov_1bxzoyh6ou().s[235]++, element.style.marginRight);
          var calculatedMargin = (cov_1bxzoyh6ou().s[236]++, $__default["default"](element).css('margin-right'));
          cov_1bxzoyh6ou().s[237]++;
          $__default["default"](element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = (cov_1bxzoyh6ou().s[238]++, document.body.style.paddingRight);
        var calculatedPadding = (cov_1bxzoyh6ou().s[239]++, $__default["default"](document.body).css('padding-right'));
        cov_1bxzoyh6ou().s[240]++;
        $__default["default"](document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      } else {
        cov_1bxzoyh6ou().b[54][1]++;
      }

      cov_1bxzoyh6ou().s[241]++;
      $__default["default"](document.body).addClass(CLASS_NAME_OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      cov_1bxzoyh6ou().f[38]++;
      // Restore fixed content padding
      var fixedContent = (cov_1bxzoyh6ou().s[242]++, [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT)));
      cov_1bxzoyh6ou().s[243]++;
      $__default["default"](fixedContent).each(function (index, element) {
        cov_1bxzoyh6ou().f[39]++;
        var padding = (cov_1bxzoyh6ou().s[244]++, $__default["default"](element).data('padding-right'));
        cov_1bxzoyh6ou().s[245]++;
        $__default["default"](element).removeData('padding-right');
        cov_1bxzoyh6ou().s[246]++;
        element.style.paddingRight = padding ? (cov_1bxzoyh6ou().b[55][0]++, padding) : (cov_1bxzoyh6ou().b[55][1]++, '');
      }); // Restore sticky content

      var elements = (cov_1bxzoyh6ou().s[247]++, [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT)));
      cov_1bxzoyh6ou().s[248]++;
      $__default["default"](elements).each(function (index, element) {
        cov_1bxzoyh6ou().f[40]++;
        var margin = (cov_1bxzoyh6ou().s[249]++, $__default["default"](element).data('margin-right'));
        cov_1bxzoyh6ou().s[250]++;

        if (typeof margin !== 'undefined') {
          cov_1bxzoyh6ou().b[56][0]++;
          cov_1bxzoyh6ou().s[251]++;
          $__default["default"](element).css('margin-right', margin).removeData('margin-right');
        } else {
          cov_1bxzoyh6ou().b[56][1]++;
        }
      }); // Restore body padding

      var padding = (cov_1bxzoyh6ou().s[252]++, $__default["default"](document.body).data('padding-right'));
      cov_1bxzoyh6ou().s[253]++;
      $__default["default"](document.body).removeData('padding-right');
      cov_1bxzoyh6ou().s[254]++;
      document.body.style.paddingRight = padding ? (cov_1bxzoyh6ou().b[57][0]++, padding) : (cov_1bxzoyh6ou().b[57][1]++, '');
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      cov_1bxzoyh6ou().f[41]++;
      // thx d.walsh
      var scrollDiv = (cov_1bxzoyh6ou().s[255]++, document.createElement('div'));
      cov_1bxzoyh6ou().s[256]++;
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      cov_1bxzoyh6ou().s[257]++;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = (cov_1bxzoyh6ou().s[258]++, scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth);
      cov_1bxzoyh6ou().s[259]++;
      document.body.removeChild(scrollDiv);
      cov_1bxzoyh6ou().s[260]++;
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      cov_1bxzoyh6ou().f[42]++;
      cov_1bxzoyh6ou().s[261]++;
      return this.each(function () {
        cov_1bxzoyh6ou().f[43]++;
        var data = (cov_1bxzoyh6ou().s[262]++, $__default["default"](this).data(DATA_KEY));

        var _config = (cov_1bxzoyh6ou().s[263]++, _extends({}, Default, $__default["default"](this).data(), (cov_1bxzoyh6ou().b[59][0]++, typeof config === 'object') && (cov_1bxzoyh6ou().b[59][1]++, config) ? (cov_1bxzoyh6ou().b[58][0]++, config) : (cov_1bxzoyh6ou().b[58][1]++, {})));

        cov_1bxzoyh6ou().s[264]++;

        if (!data) {
          cov_1bxzoyh6ou().b[60][0]++;
          cov_1bxzoyh6ou().s[265]++;
          data = new Modal(this, _config);
          cov_1bxzoyh6ou().s[266]++;
          $__default["default"](this).data(DATA_KEY, data);
        } else {
          cov_1bxzoyh6ou().b[60][1]++;
        }

        cov_1bxzoyh6ou().s[267]++;

        if (typeof config === 'string') {
          cov_1bxzoyh6ou().b[61][0]++;
          cov_1bxzoyh6ou().s[268]++;

          if (typeof data[config] === 'undefined') {
            cov_1bxzoyh6ou().b[62][0]++;
            cov_1bxzoyh6ou().s[269]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_1bxzoyh6ou().b[62][1]++;
          }

          cov_1bxzoyh6ou().s[270]++;
          data[config](relatedTarget);
        } else {
          cov_1bxzoyh6ou().b[61][1]++;
          cov_1bxzoyh6ou().s[271]++;

          if (_config.show) {
            cov_1bxzoyh6ou().b[63][0]++;
            cov_1bxzoyh6ou().s[272]++;
            data.show(relatedTarget);
          } else {
            cov_1bxzoyh6ou().b[63][1]++;
          }
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        cov_1bxzoyh6ou().f[1]++;
        cov_1bxzoyh6ou().s[43]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_1bxzoyh6ou().f[2]++;
        cov_1bxzoyh6ou().s[44]++;
        return Default;
      }
    }]);

    return Modal;
  }();
  /**
   * Data API implementation
   */


  cov_1bxzoyh6ou().s[273]++;
  $__default["default"](document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    var _this11 = this;

    cov_1bxzoyh6ou().f[44]++;
    var target;
    var selector = (cov_1bxzoyh6ou().s[274]++, Util__default["default"].getSelectorFromElement(this));
    cov_1bxzoyh6ou().s[275]++;

    if (selector) {
      cov_1bxzoyh6ou().b[64][0]++;
      cov_1bxzoyh6ou().s[276]++;
      target = document.querySelector(selector);
    } else {
      cov_1bxzoyh6ou().b[64][1]++;
    }

    var config = (cov_1bxzoyh6ou().s[277]++, $__default["default"](target).data(DATA_KEY) ? (cov_1bxzoyh6ou().b[65][0]++, 'toggle') : (cov_1bxzoyh6ou().b[65][1]++, _extends({}, $__default["default"](target).data(), $__default["default"](this).data())));
    cov_1bxzoyh6ou().s[278]++;

    if ((cov_1bxzoyh6ou().b[67][0]++, this.tagName === 'A') || (cov_1bxzoyh6ou().b[67][1]++, this.tagName === 'AREA')) {
      cov_1bxzoyh6ou().b[66][0]++;
      cov_1bxzoyh6ou().s[279]++;
      event.preventDefault();
    } else {
      cov_1bxzoyh6ou().b[66][1]++;
    }

    var $target = (cov_1bxzoyh6ou().s[280]++, $__default["default"](target).one(EVENT_SHOW, function (showEvent) {
      cov_1bxzoyh6ou().f[45]++;
      cov_1bxzoyh6ou().s[281]++;

      if (showEvent.isDefaultPrevented()) {
        cov_1bxzoyh6ou().b[68][0]++;
        cov_1bxzoyh6ou().s[282]++;
        // Only register focus restorer if modal will actually get shown
        return;
      } else {
        cov_1bxzoyh6ou().b[68][1]++;
      }

      cov_1bxzoyh6ou().s[283]++;
      $target.one(EVENT_HIDDEN, function () {
        cov_1bxzoyh6ou().f[46]++;
        cov_1bxzoyh6ou().s[284]++;

        if ($__default["default"](_this11).is(':visible')) {
          cov_1bxzoyh6ou().b[69][0]++;
          cov_1bxzoyh6ou().s[285]++;

          _this11.focus();
        } else {
          cov_1bxzoyh6ou().b[69][1]++;
        }
      });
    }));
    cov_1bxzoyh6ou().s[286]++;

    Modal._jQueryInterface.call($__default["default"](target), config, this);
  });
  /**
   * jQuery
   */

  cov_1bxzoyh6ou().s[287]++;
  $__default["default"].fn[NAME] = Modal._jQueryInterface;
  cov_1bxzoyh6ou().s[288]++;
  $__default["default"].fn[NAME].Constructor = Modal;
  cov_1bxzoyh6ou().s[289]++;

  $__default["default"].fn[NAME].noConflict = function () {
    cov_1bxzoyh6ou().f[47]++;
    cov_1bxzoyh6ou().s[290]++;
    $__default["default"].fn[NAME] = JQUERY_NO_CONFLICT;
    cov_1bxzoyh6ou().s[291]++;
    return Modal._jQueryInterface;
  };

  return Modal;

}));
//# sourceMappingURL=modal.js.map

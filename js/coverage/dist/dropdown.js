/*!
  * Bootstrap dropdown.js v4.6.0-2 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2021 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('popper.js'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', 'popper.js', './util'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Dropdown = factory(global.jQuery, global.Popper, global.Util));
}(this, (function ($, Popper, Util) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
  var Popper__default = /*#__PURE__*/_interopDefaultLegacy(Popper);
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

  function cov_1nq654px9y() {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/dropdown.js";
    var hash = "3bba4ffc04a84400f3b55e56f9c270952f245428";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/dropdown.js",
      statementMap: {
        "0": {
          start: {
            line: 18,
            column: 13
          },
          end: {
            line: 18,
            column: 23
          }
        },
        "1": {
          start: {
            line: 19,
            column: 16
          },
          end: {
            line: 19,
            column: 23
          }
        },
        "2": {
          start: {
            line: 20,
            column: 17
          },
          end: {
            line: 20,
            column: 30
          }
        },
        "3": {
          start: {
            line: 21,
            column: 18
          },
          end: {
            line: 21,
            column: 32
          }
        },
        "4": {
          start: {
            line: 22,
            column: 21
          },
          end: {
            line: 22,
            column: 32
          }
        },
        "5": {
          start: {
            line: 23,
            column: 27
          },
          end: {
            line: 23,
            column: 37
          }
        },
        "6": {
          start: {
            line: 24,
            column: 23
          },
          end: {
            line: 24,
            column: 25
          }
        },
        "7": {
          start: {
            line: 25,
            column: 22
          },
          end: {
            line: 25,
            column: 24
          }
        },
        "8": {
          start: {
            line: 26,
            column: 20
          },
          end: {
            line: 26,
            column: 21
          }
        },
        "9": {
          start: {
            line: 27,
            column: 25
          },
          end: {
            line: 27,
            column: 27
          }
        },
        "10": {
          start: {
            line: 28,
            column: 27
          },
          end: {
            line: 28,
            column: 29
          }
        },
        "11": {
          start: {
            line: 29,
            column: 33
          },
          end: {
            line: 29,
            column: 34
          }
        },
        "12": {
          start: {
            line: 30,
            column: 23
          },
          end: {
            line: 30,
            column: 96
          }
        },
        "13": {
          start: {
            line: 32,
            column: 19
          },
          end: {
            line: 32,
            column: 37
          }
        },
        "14": {
          start: {
            line: 33,
            column: 21
          },
          end: {
            line: 33,
            column: 41
          }
        },
        "15": {
          start: {
            line: 34,
            column: 19
          },
          end: {
            line: 34,
            column: 37
          }
        },
        "16": {
          start: {
            line: 35,
            column: 20
          },
          end: {
            line: 35,
            column: 39
          }
        },
        "17": {
          start: {
            line: 36,
            column: 20
          },
          end: {
            line: 36,
            column: 39
          }
        },
        "18": {
          start: {
            line: 37,
            column: 29
          },
          end: {
            line: 37,
            column: 63
          }
        },
        "19": {
          start: {
            line: 38,
            column: 31
          },
          end: {
            line: 38,
            column: 67
          }
        },
        "20": {
          start: {
            line: 39,
            column: 29
          },
          end: {
            line: 39,
            column: 63
          }
        },
        "21": {
          start: {
            line: 41,
            column: 28
          },
          end: {
            line: 41,
            column: 38
          }
        },
        "22": {
          start: {
            line: 42,
            column: 24
          },
          end: {
            line: 42,
            column: 30
          }
        },
        "23": {
          start: {
            line: 43,
            column: 26
          },
          end: {
            line: 43,
            column: 34
          }
        },
        "24": {
          start: {
            line: 44,
            column: 29
          },
          end: {
            line: 44,
            column: 40
          }
        },
        "25": {
          start: {
            line: 45,
            column: 28
          },
          end: {
            line: 45,
            column: 38
          }
        },
        "26": {
          start: {
            line: 46,
            column: 29
          },
          end: {
            line: 46,
            column: 50
          }
        },
        "27": {
          start: {
            line: 47,
            column: 35
          },
          end: {
            line: 47,
            column: 52
          }
        },
        "28": {
          start: {
            line: 49,
            column: 29
          },
          end: {
            line: 49,
            column: 55
          }
        },
        "29": {
          start: {
            line: 50,
            column: 28
          },
          end: {
            line: 50,
            column: 44
          }
        },
        "30": {
          start: {
            line: 51,
            column: 22
          },
          end: {
            line: 51,
            column: 38
          }
        },
        "31": {
          start: {
            line: 52,
            column: 28
          },
          end: {
            line: 52,
            column: 41
          }
        },
        "32": {
          start: {
            line: 53,
            column: 31
          },
          end: {
            line: 53,
            column: 92
          }
        },
        "33": {
          start: {
            line: 55,
            column: 22
          },
          end: {
            line: 55,
            column: 33
          }
        },
        "34": {
          start: {
            line: 56,
            column: 25
          },
          end: {
            line: 56,
            column: 34
          }
        },
        "35": {
          start: {
            line: 57,
            column: 25
          },
          end: {
            line: 57,
            column: 39
          }
        },
        "36": {
          start: {
            line: 58,
            column: 28
          },
          end: {
            line: 58,
            column: 40
          }
        },
        "37": {
          start: {
            line: 59,
            column: 24
          },
          end: {
            line: 59,
            column: 37
          }
        },
        "38": {
          start: {
            line: 60,
            column: 23
          },
          end: {
            line: 60,
            column: 35
          }
        },
        "39": {
          start: {
            line: 62,
            column: 16
          },
          end: {
            line: 69,
            column: 1
          }
        },
        "40": {
          start: {
            line: 71,
            column: 20
          },
          end: {
            line: 78,
            column: 1
          }
        },
        "41": {
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 88,
            column: 27
          }
        },
        "42": {
          start: {
            line: 89,
            column: 4
          },
          end: {
            line: 89,
            column: 23
          }
        },
        "43": {
          start: {
            line: 90,
            column: 4
          },
          end: {
            line: 90,
            column: 42
          }
        },
        "44": {
          start: {
            line: 91,
            column: 4
          },
          end: {
            line: 91,
            column: 39
          }
        },
        "45": {
          start: {
            line: 92,
            column: 4
          },
          end: {
            line: 92,
            column: 41
          }
        },
        "46": {
          start: {
            line: 94,
            column: 4
          },
          end: {
            line: 94,
            column: 29
          }
        },
        "47": {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 100,
            column: 18
          }
        },
        "48": {
          start: {
            line: 104,
            column: 4
          },
          end: {
            line: 104,
            column: 18
          }
        },
        "49": {
          start: {
            line: 108,
            column: 4
          },
          end: {
            line: 108,
            column: 22
          }
        },
        "50": {
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 116,
            column: 5
          }
        },
        "51": {
          start: {
            line: 115,
            column: 6
          },
          end: {
            line: 115,
            column: 12
          }
        },
        "52": {
          start: {
            line: 118,
            column: 21
          },
          end: {
            line: 118,
            column: 60
          }
        },
        "53": {
          start: {
            line: 120,
            column: 4
          },
          end: {
            line: 120,
            column: 26
          }
        },
        "54": {
          start: {
            line: 122,
            column: 4
          },
          end: {
            line: 124,
            column: 5
          }
        },
        "55": {
          start: {
            line: 123,
            column: 6
          },
          end: {
            line: 123,
            column: 12
          }
        },
        "56": {
          start: {
            line: 126,
            column: 4
          },
          end: {
            line: 126,
            column: 19
          }
        },
        "57": {
          start: {
            line: 130,
            column: 4
          },
          end: {
            line: 132,
            column: 5
          }
        },
        "58": {
          start: {
            line: 131,
            column: 6
          },
          end: {
            line: 131,
            column: 12
          }
        },
        "59": {
          start: {
            line: 134,
            column: 26
          },
          end: {
            line: 136,
            column: 5
          }
        },
        "60": {
          start: {
            line: 137,
            column: 22
          },
          end: {
            line: 137,
            column: 56
          }
        },
        "61": {
          start: {
            line: 138,
            column: 19
          },
          end: {
            line: 138,
            column: 64
          }
        },
        "62": {
          start: {
            line: 140,
            column: 4
          },
          end: {
            line: 140,
            column: 32
          }
        },
        "63": {
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 144,
            column: 5
          }
        },
        "64": {
          start: {
            line: 143,
            column: 6
          },
          end: {
            line: 143,
            column: 12
          }
        },
        "65": {
          start: {
            line: 147,
            column: 4
          },
          end: {
            line: 177,
            column: 5
          }
        },
        "66": {
          start: {
            line: 152,
            column: 6
          },
          end: {
            line: 154,
            column: 7
          }
        },
        "67": {
          start: {
            line: 153,
            column: 8
          },
          end: {
            line: 153,
            column: 92
          }
        },
        "68": {
          start: {
            line: 156,
            column: 29
          },
          end: {
            line: 156,
            column: 42
          }
        },
        "69": {
          start: {
            line: 158,
            column: 6
          },
          end: {
            line: 167,
            column: 7
          }
        },
        "70": {
          start: {
            line: 159,
            column: 8
          },
          end: {
            line: 159,
            column: 33
          }
        },
        "71": {
          start: {
            line: 160,
            column: 13
          },
          end: {
            line: 167,
            column: 7
          }
        },
        "72": {
          start: {
            line: 161,
            column: 8
          },
          end: {
            line: 161,
            column: 49
          }
        },
        "73": {
          start: {
            line: 164,
            column: 8
          },
          end: {
            line: 166,
            column: 9
          }
        },
        "74": {
          start: {
            line: 165,
            column: 10
          },
          end: {
            line: 165,
            column: 54
          }
        },
        "75": {
          start: {
            line: 172,
            column: 6
          },
          end: {
            line: 174,
            column: 7
          }
        },
        "76": {
          start: {
            line: 173,
            column: 8
          },
          end: {
            line: 173,
            column: 54
          }
        },
        "77": {
          start: {
            line: 176,
            column: 6
          },
          end: {
            line: 176,
            column: 86
          }
        },
        "78": {
          start: {
            line: 183,
            column: 4
          },
          end: {
            line: 186,
            column: 5
          }
        },
        "79": {
          start: {
            line: 185,
            column: 6
          },
          end: {
            line: 185,
            column: 63
          }
        },
        "80": {
          start: {
            line: 188,
            column: 4
          },
          end: {
            line: 188,
            column: 25
          }
        },
        "81": {
          start: {
            line: 189,
            column: 4
          },
          end: {
            line: 189,
            column: 53
          }
        },
        "82": {
          start: {
            line: 191,
            column: 4
          },
          end: {
            line: 191,
            column: 46
          }
        },
        "83": {
          start: {
            line: 192,
            column: 4
          },
          end: {
            line: 194,
            column: 51
          }
        },
        "84": {
          start: {
            line: 198,
            column: 4
          },
          end: {
            line: 200,
            column: 5
          }
        },
        "85": {
          start: {
            line: 199,
            column: 6
          },
          end: {
            line: 199,
            column: 12
          }
        },
        "86": {
          start: {
            line: 202,
            column: 26
          },
          end: {
            line: 204,
            column: 5
          }
        },
        "87": {
          start: {
            line: 205,
            column: 22
          },
          end: {
            line: 205,
            column: 56
          }
        },
        "88": {
          start: {
            line: 206,
            column: 19
          },
          end: {
            line: 206,
            column: 64
          }
        },
        "89": {
          start: {
            line: 208,
            column: 4
          },
          end: {
            line: 208,
            column: 32
          }
        },
        "90": {
          start: {
            line: 210,
            column: 4
          },
          end: {
            line: 212,
            column: 5
          }
        },
        "91": {
          start: {
            line: 211,
            column: 6
          },
          end: {
            line: 211,
            column: 12
          }
        },
        "92": {
          start: {
            line: 214,
            column: 4
          },
          end: {
            line: 216,
            column: 5
          }
        },
        "93": {
          start: {
            line: 215,
            column: 6
          },
          end: {
            line: 215,
            column: 28
          }
        },
        "94": {
          start: {
            line: 218,
            column: 4
          },
          end: {
            line: 218,
            column: 46
          }
        },
        "95": {
          start: {
            line: 219,
            column: 4
          },
          end: {
            line: 221,
            column: 52
          }
        },
        "96": {
          start: {
            line: 225,
            column: 4
          },
          end: {
            line: 225,
            column: 41
          }
        },
        "97": {
          start: {
            line: 226,
            column: 4
          },
          end: {
            line: 226,
            column: 35
          }
        },
        "98": {
          start: {
            line: 227,
            column: 4
          },
          end: {
            line: 227,
            column: 24
          }
        },
        "99": {
          start: {
            line: 228,
            column: 4
          },
          end: {
            line: 228,
            column: 21
          }
        },
        "100": {
          start: {
            line: 229,
            column: 4
          },
          end: {
            line: 232,
            column: 5
          }
        },
        "101": {
          start: {
            line: 230,
            column: 6
          },
          end: {
            line: 230,
            column: 28
          }
        },
        "102": {
          start: {
            line: 231,
            column: 6
          },
          end: {
            line: 231,
            column: 25
          }
        },
        "103": {
          start: {
            line: 236,
            column: 4
          },
          end: {
            line: 236,
            column: 41
          }
        },
        "104": {
          start: {
            line: 237,
            column: 4
          },
          end: {
            line: 239,
            column: 5
          }
        },
        "105": {
          start: {
            line: 238,
            column: 6
          },
          end: {
            line: 238,
            column: 35
          }
        },
        "106": {
          start: {
            line: 245,
            column: 4
          },
          end: {
            line: 249,
            column: 6
          }
        },
        "107": {
          start: {
            line: 246,
            column: 6
          },
          end: {
            line: 246,
            column: 28
          }
        },
        "108": {
          start: {
            line: 247,
            column: 6
          },
          end: {
            line: 247,
            column: 29
          }
        },
        "109": {
          start: {
            line: 248,
            column: 6
          },
          end: {
            line: 248,
            column: 19
          }
        },
        "110": {
          start: {
            line: 253,
            column: 4
          },
          end: {
            line: 257,
            column: 5
          }
        },
        "111": {
          start: {
            line: 259,
            column: 4
          },
          end: {
            line: 263,
            column: 5
          }
        },
        "112": {
          start: {
            line: 265,
            column: 4
          },
          end: {
            line: 265,
            column: 17
          }
        },
        "113": {
          start: {
            line: 269,
            column: 4
          },
          end: {
            line: 275,
            column: 5
          }
        },
        "114": {
          start: {
            line: 270,
            column: 21
          },
          end: {
            line: 270,
            column: 66
          }
        },
        "115": {
          start: {
            line: 272,
            column: 6
          },
          end: {
            line: 274,
            column: 7
          }
        },
        "116": {
          start: {
            line: 273,
            column: 8
          },
          end: {
            line: 273,
            column: 56
          }
        },
        "117": {
          start: {
            line: 277,
            column: 4
          },
          end: {
            line: 277,
            column: 21
          }
        },
        "118": {
          start: {
            line: 281,
            column: 28
          },
          end: {
            line: 281,
            column: 55
          }
        },
        "119": {
          start: {
            line: 282,
            column: 20
          },
          end: {
            line: 282,
            column: 36
          }
        },
        "120": {
          start: {
            line: 285,
            column: 4
          },
          end: {
            line: 295,
            column: 5
          }
        },
        "121": {
          start: {
            line: 286,
            column: 6
          },
          end: {
            line: 288,
            column: 21
          }
        },
        "122": {
          start: {
            line: 289,
            column: 11
          },
          end: {
            line: 295,
            column: 5
          }
        },
        "123": {
          start: {
            line: 290,
            column: 6
          },
          end: {
            line: 290,
            column: 33
          }
        },
        "124": {
          start: {
            line: 291,
            column: 11
          },
          end: {
            line: 295,
            column: 5
          }
        },
        "125": {
          start: {
            line: 292,
            column: 6
          },
          end: {
            line: 292,
            column: 32
          }
        },
        "126": {
          start: {
            line: 293,
            column: 11
          },
          end: {
            line: 295,
            column: 5
          }
        },
        "127": {
          start: {
            line: 294,
            column: 6
          },
          end: {
            line: 294,
            column: 37
          }
        },
        "128": {
          start: {
            line: 297,
            column: 4
          },
          end: {
            line: 297,
            column: 20
          }
        },
        "129": {
          start: {
            line: 301,
            column: 4
          },
          end: {
            line: 301,
            column: 57
          }
        },
        "130": {
          start: {
            line: 305,
            column: 19
          },
          end: {
            line: 305,
            column: 21
          }
        },
        "131": {
          start: {
            line: 307,
            column: 4
          },
          end: {
            line: 318,
            column: 5
          }
        },
        "132": {
          start: {
            line: 308,
            column: 6
          },
          end: {
            line: 315,
            column: 7
          }
        },
        "133": {
          start: {
            line: 309,
            column: 8
          },
          end: {
            line: 312,
            column: 9
          }
        },
        "134": {
          start: {
            line: 314,
            column: 8
          },
          end: {
            line: 314,
            column: 19
          }
        },
        "135": {
          start: {
            line: 317,
            column: 6
          },
          end: {
            line: 317,
            column: 41
          }
        },
        "136": {
          start: {
            line: 320,
            column: 4
          },
          end: {
            line: 320,
            column: 17
          }
        },
        "137": {
          start: {
            line: 324,
            column: 25
          },
          end: {
            line: 335,
            column: 5
          }
        },
        "138": {
          start: {
            line: 338,
            column: 4
          },
          end: {
            line: 342,
            column: 5
          }
        },
        "139": {
          start: {
            line: 339,
            column: 6
          },
          end: {
            line: 341,
            column: 7
          }
        },
        "140": {
          start: {
            line: 344,
            column: 4
          },
          end: {
            line: 347,
            column: 5
          }
        },
        "141": {
          start: {
            line: 353,
            column: 4
          },
          end: {
            line: 369,
            column: 6
          }
        },
        "142": {
          start: {
            line: 354,
            column: 17
          },
          end: {
            line: 354,
            column: 39
          }
        },
        "143": {
          start: {
            line: 355,
            column: 22
          },
          end: {
            line: 355,
            column: 64
          }
        },
        "144": {
          start: {
            line: 357,
            column: 6
          },
          end: {
            line: 360,
            column: 7
          }
        },
        "145": {
          start: {
            line: 358,
            column: 8
          },
          end: {
            line: 358,
            column: 42
          }
        },
        "146": {
          start: {
            line: 359,
            column: 8
          },
          end: {
            line: 359,
            column: 36
          }
        },
        "147": {
          start: {
            line: 362,
            column: 6
          },
          end: {
            line: 368,
            column: 7
          }
        },
        "148": {
          start: {
            line: 363,
            column: 8
          },
          end: {
            line: 365,
            column: 9
          }
        },
        "149": {
          start: {
            line: 364,
            column: 10
          },
          end: {
            line: 364,
            column: 60
          }
        },
        "150": {
          start: {
            line: 367,
            column: 8
          },
          end: {
            line: 367,
            column: 22
          }
        },
        "151": {
          start: {
            line: 373,
            column: 4
          },
          end: {
            line: 376,
            column: 5
          }
        },
        "152": {
          start: {
            line: 375,
            column: 6
          },
          end: {
            line: 375,
            column: 12
          }
        },
        "153": {
          start: {
            line: 378,
            column: 20
          },
          end: {
            line: 378,
            column: 82
          }
        },
        "154": {
          start: {
            line: 380,
            column: 4
          },
          end: {
            line: 428,
            column: 5
          }
        },
        "155": {
          start: {
            line: 380,
            column: 17
          },
          end: {
            line: 380,
            column: 18
          }
        },
        "156": {
          start: {
            line: 380,
            column: 26
          },
          end: {
            line: 380,
            column: 40
          }
        },
        "157": {
          start: {
            line: 381,
            column: 21
          },
          end: {
            line: 381,
            column: 63
          }
        },
        "158": {
          start: {
            line: 382,
            column: 22
          },
          end: {
            line: 382,
            column: 50
          }
        },
        "159": {
          start: {
            line: 383,
            column: 28
          },
          end: {
            line: 385,
            column: 7
          }
        },
        "160": {
          start: {
            line: 387,
            column: 6
          },
          end: {
            line: 389,
            column: 7
          }
        },
        "161": {
          start: {
            line: 388,
            column: 8
          },
          end: {
            line: 388,
            column: 40
          }
        },
        "162": {
          start: {
            line: 391,
            column: 6
          },
          end: {
            line: 393,
            column: 7
          }
        },
        "163": {
          start: {
            line: 392,
            column: 8
          },
          end: {
            line: 392,
            column: 16
          }
        },
        "164": {
          start: {
            line: 395,
            column: 27
          },
          end: {
            line: 395,
            column: 40
          }
        },
        "165": {
          start: {
            line: 396,
            column: 6
          },
          end: {
            line: 398,
            column: 7
          }
        },
        "166": {
          start: {
            line: 397,
            column: 8
          },
          end: {
            line: 397,
            column: 16
          }
        },
        "167": {
          start: {
            line: 400,
            column: 6
          },
          end: {
            line: 404,
            column: 7
          }
        },
        "168": {
          start: {
            line: 403,
            column: 8
          },
          end: {
            line: 403,
            column: 16
          }
        },
        "169": {
          start: {
            line: 406,
            column: 24
          },
          end: {
            line: 406,
            column: 58
          }
        },
        "170": {
          start: {
            line: 407,
            column: 6
          },
          end: {
            line: 407,
            column: 34
          }
        },
        "171": {
          start: {
            line: 408,
            column: 6
          },
          end: {
            line: 410,
            column: 7
          }
        },
        "172": {
          start: {
            line: 409,
            column: 8
          },
          end: {
            line: 409,
            column: 16
          }
        },
        "173": {
          start: {
            line: 414,
            column: 6
          },
          end: {
            line: 416,
            column: 7
          }
        },
        "174": {
          start: {
            line: 415,
            column: 8
          },
          end: {
            line: 415,
            column: 66
          }
        },
        "175": {
          start: {
            line: 418,
            column: 6
          },
          end: {
            line: 418,
            column: 55
          }
        },
        "176": {
          start: {
            line: 420,
            column: 6
          },
          end: {
            line: 422,
            column: 7
          }
        },
        "177": {
          start: {
            line: 421,
            column: 8
          },
          end: {
            line: 421,
            column: 33
          }
        },
        "178": {
          start: {
            line: 424,
            column: 6
          },
          end: {
            line: 424,
            column: 50
          }
        },
        "179": {
          start: {
            line: 425,
            column: 6
          },
          end: {
            line: 427,
            column: 54
          }
        },
        "180": {
          start: {
            line: 433,
            column: 21
          },
          end: {
            line: 433,
            column: 57
          }
        },
        "181": {
          start: {
            line: 435,
            column: 4
          },
          end: {
            line: 437,
            column: 5
          }
        },
        "182": {
          start: {
            line: 436,
            column: 6
          },
          end: {
            line: 436,
            column: 47
          }
        },
        "183": {
          start: {
            line: 439,
            column: 4
          },
          end: {
            line: 439,
            column: 39
          }
        },
        "184": {
          start: {
            line: 451,
            column: 4
          },
          end: {
            line: 456,
            column: 5
          }
        },
        "185": {
          start: {
            line: 455,
            column: 6
          },
          end: {
            line: 455,
            column: 12
          }
        },
        "186": {
          start: {
            line: 458,
            column: 4
          },
          end: {
            line: 460,
            column: 5
          }
        },
        "187": {
          start: {
            line: 459,
            column: 6
          },
          end: {
            line: 459,
            column: 12
          }
        },
        "188": {
          start: {
            line: 462,
            column: 19
          },
          end: {
            line: 462,
            column: 55
          }
        },
        "189": {
          start: {
            line: 463,
            column: 21
          },
          end: {
            line: 463,
            column: 56
          }
        },
        "190": {
          start: {
            line: 465,
            column: 4
          },
          end: {
            line: 467,
            column: 5
          }
        },
        "191": {
          start: {
            line: 466,
            column: 6
          },
          end: {
            line: 466,
            column: 12
          }
        },
        "192": {
          start: {
            line: 469,
            column: 4
          },
          end: {
            line: 469,
            column: 26
          }
        },
        "193": {
          start: {
            line: 470,
            column: 4
          },
          end: {
            line: 470,
            column: 27
          }
        },
        "194": {
          start: {
            line: 472,
            column: 4
          },
          end: {
            line: 479,
            column: 5
          }
        },
        "195": {
          start: {
            line: 473,
            column: 6
          },
          end: {
            line: 475,
            column: 7
          }
        },
        "196": {
          start: {
            line: 474,
            column: 8
          },
          end: {
            line: 474,
            column: 70
          }
        },
        "197": {
          start: {
            line: 477,
            column: 6
          },
          end: {
            line: 477,
            column: 30
          }
        },
        "198": {
          start: {
            line: 478,
            column: 6
          },
          end: {
            line: 478,
            column: 12
          }
        },
        "199": {
          start: {
            line: 481,
            column: 18
          },
          end: {
            line: 482,
            column: 45
          }
        },
        "200": {
          start: {
            line: 482,
            column: 22
          },
          end: {
            line: 482,
            column: 44
          }
        },
        "201": {
          start: {
            line: 484,
            column: 4
          },
          end: {
            line: 486,
            column: 5
          }
        },
        "202": {
          start: {
            line: 485,
            column: 6
          },
          end: {
            line: 485,
            column: 12
          }
        },
        "203": {
          start: {
            line: 488,
            column: 16
          },
          end: {
            line: 488,
            column: 43
          }
        },
        "204": {
          start: {
            line: 490,
            column: 4
          },
          end: {
            line: 492,
            column: 5
          }
        },
        "205": {
          start: {
            line: 491,
            column: 6
          },
          end: {
            line: 491,
            column: 13
          }
        },
        "206": {
          start: {
            line: 494,
            column: 4
          },
          end: {
            line: 496,
            column: 5
          }
        },
        "207": {
          start: {
            line: 495,
            column: 6
          },
          end: {
            line: 495,
            column: 13
          }
        },
        "208": {
          start: {
            line: 498,
            column: 4
          },
          end: {
            line: 500,
            column: 5
          }
        },
        "209": {
          start: {
            line: 499,
            column: 6
          },
          end: {
            line: 499,
            column: 15
          }
        },
        "210": {
          start: {
            line: 502,
            column: 4
          },
          end: {
            line: 502,
            column: 24
          }
        },
        "211": {
          start: {
            line: 512,
            column: 0
          },
          end: {
            line: 523,
            column: 4
          }
        },
        "212": {
          start: {
            line: 517,
            column: 4
          },
          end: {
            line: 517,
            column: 26
          }
        },
        "213": {
          start: {
            line: 518,
            column: 4
          },
          end: {
            line: 518,
            column: 27
          }
        },
        "214": {
          start: {
            line: 519,
            column: 4
          },
          end: {
            line: 519,
            column: 53
          }
        },
        "215": {
          start: {
            line: 522,
            column: 4
          },
          end: {
            line: 522,
            column: 23
          }
        },
        "216": {
          start: {
            line: 531,
            column: 0
          },
          end: {
            line: 531,
            column: 38
          }
        },
        "217": {
          start: {
            line: 532,
            column: 0
          },
          end: {
            line: 532,
            column: 33
          }
        },
        "218": {
          start: {
            line: 533,
            column: 0
          },
          end: {
            line: 536,
            column: 1
          }
        },
        "219": {
          start: {
            line: 534,
            column: 2
          },
          end: {
            line: 534,
            column: 33
          }
        },
        "220": {
          start: {
            line: 535,
            column: 2
          },
          end: {
            line: 535,
            column: 34
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
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
              column: 31
            },
            end: {
              line: 95,
              column: 3
            }
          },
          line: 87
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 99,
              column: 2
            },
            end: {
              line: 99,
              column: 3
            }
          },
          loc: {
            start: {
              line: 99,
              column: 23
            },
            end: {
              line: 101,
              column: 3
            }
          },
          line: 99
        },
        "2": {
          name: "(anonymous_2)",
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
              column: 23
            },
            end: {
              line: 105,
              column: 3
            }
          },
          line: 103
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 107,
              column: 2
            },
            end: {
              line: 107,
              column: 3
            }
          },
          loc: {
            start: {
              line: 107,
              column: 27
            },
            end: {
              line: 109,
              column: 3
            }
          },
          line: 107
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 113,
              column: 2
            },
            end: {
              line: 113,
              column: 3
            }
          },
          loc: {
            start: {
              line: 113,
              column: 11
            },
            end: {
              line: 127,
              column: 3
            }
          },
          line: 113
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 129,
              column: 2
            },
            end: {
              line: 129,
              column: 3
            }
          },
          loc: {
            start: {
              line: 129,
              column: 26
            },
            end: {
              line: 195,
              column: 3
            }
          },
          line: 129
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 197,
              column: 2
            },
            end: {
              line: 197,
              column: 3
            }
          },
          loc: {
            start: {
              line: 197,
              column: 9
            },
            end: {
              line: 222,
              column: 3
            }
          },
          line: 197
        },
        "7": {
          name: "(anonymous_7)",
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
              column: 12
            },
            end: {
              line: 233,
              column: 3
            }
          },
          line: 224
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 235,
              column: 2
            },
            end: {
              line: 235,
              column: 3
            }
          },
          loc: {
            start: {
              line: 235,
              column: 11
            },
            end: {
              line: 240,
              column: 3
            }
          },
          line: 235
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 244,
              column: 2
            },
            end: {
              line: 244,
              column: 3
            }
          },
          loc: {
            start: {
              line: 244,
              column: 23
            },
            end: {
              line: 250,
              column: 3
            }
          },
          line: 244
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 245,
              column: 37
            },
            end: {
              line: 245,
              column: 38
            }
          },
          loc: {
            start: {
              line: 245,
              column: 46
            },
            end: {
              line: 249,
              column: 5
            }
          },
          line: 245
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 252,
              column: 2
            },
            end: {
              line: 252,
              column: 3
            }
          },
          loc: {
            start: {
              line: 252,
              column: 21
            },
            end: {
              line: 266,
              column: 3
            }
          },
          line: 252
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 268,
              column: 2
            },
            end: {
              line: 268,
              column: 3
            }
          },
          loc: {
            start: {
              line: 268,
              column: 20
            },
            end: {
              line: 278,
              column: 3
            }
          },
          line: 268
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 280,
              column: 2
            },
            end: {
              line: 280,
              column: 3
            }
          },
          loc: {
            start: {
              line: 280,
              column: 18
            },
            end: {
              line: 298,
              column: 3
            }
          },
          line: 280
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 300,
              column: 2
            },
            end: {
              line: 300,
              column: 3
            }
          },
          loc: {
            start: {
              line: 300,
              column: 18
            },
            end: {
              line: 302,
              column: 3
            }
          },
          line: 300
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 304,
              column: 2
            },
            end: {
              line: 304,
              column: 3
            }
          },
          loc: {
            start: {
              line: 304,
              column: 15
            },
            end: {
              line: 321,
              column: 3
            }
          },
          line: 304
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 308,
              column: 18
            },
            end: {
              line: 308,
              column: 19
            }
          },
          loc: {
            start: {
              line: 308,
              column: 26
            },
            end: {
              line: 315,
              column: 7
            }
          },
          line: 308
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 323,
              column: 2
            },
            end: {
              line: 323,
              column: 3
            }
          },
          loc: {
            start: {
              line: 323,
              column: 21
            },
            end: {
              line: 348,
              column: 3
            }
          },
          line: 323
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 352,
              column: 2
            },
            end: {
              line: 352,
              column: 3
            }
          },
          loc: {
            start: {
              line: 352,
              column: 34
            },
            end: {
              line: 370,
              column: 3
            }
          },
          line: 352
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 353,
              column: 21
            },
            end: {
              line: 353,
              column: 22
            }
          },
          loc: {
            start: {
              line: 353,
              column: 33
            },
            end: {
              line: 369,
              column: 5
            }
          },
          line: 353
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 372,
              column: 2
            },
            end: {
              line: 372,
              column: 3
            }
          },
          loc: {
            start: {
              line: 372,
              column: 28
            },
            end: {
              line: 429,
              column: 3
            }
          },
          line: 372
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 431,
              column: 2
            },
            end: {
              line: 431,
              column: 3
            }
          },
          loc: {
            start: {
              line: 431,
              column: 40
            },
            end: {
              line: 440,
              column: 3
            }
          },
          line: 431
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 443,
              column: 2
            },
            end: {
              line: 443,
              column: 3
            }
          },
          loc: {
            start: {
              line: 443,
              column: 39
            },
            end: {
              line: 503,
              column: 3
            }
          },
          line: 443
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 482,
              column: 14
            },
            end: {
              line: 482,
              column: 15
            }
          },
          loc: {
            start: {
              line: 482,
              column: 22
            },
            end: {
              line: 482,
              column: 44
            }
          },
          line: 482
        },
        "24": {
          name: "(anonymous_24)",
          decl: {
            start: {
              line: 516,
              column: 50
            },
            end: {
              line: 516,
              column: 51
            }
          },
          loc: {
            start: {
              line: 516,
              column: 67
            },
            end: {
              line: 520,
              column: 3
            }
          },
          line: 516
        },
        "25": {
          name: "(anonymous_25)",
          decl: {
            start: {
              line: 521,
              column: 49
            },
            end: {
              line: 521,
              column: 50
            }
          },
          loc: {
            start: {
              line: 521,
              column: 54
            },
            end: {
              line: 523,
              column: 3
            }
          },
          line: 521
        },
        "26": {
          name: "(anonymous_26)",
          decl: {
            start: {
              line: 533,
              column: 24
            },
            end: {
              line: 533,
              column: 25
            }
          },
          loc: {
            start: {
              line: 533,
              column: 30
            },
            end: {
              line: 536,
              column: 1
            }
          },
          line: 533
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 114,
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
              line: 114,
              column: 4
            },
            end: {
              line: 116,
              column: 5
            }
          }, {
            start: {
              line: 114,
              column: 4
            },
            end: {
              line: 116,
              column: 5
            }
          }],
          line: 114
        },
        "1": {
          loc: {
            start: {
              line: 114,
              column: 8
            },
            end: {
              line: 114,
              column: 80
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 114,
              column: 8
            },
            end: {
              line: 114,
              column: 30
            }
          }, {
            start: {
              line: 114,
              column: 34
            },
            end: {
              line: 114,
              column: 80
            }
          }],
          line: 114
        },
        "2": {
          loc: {
            start: {
              line: 122,
              column: 4
            },
            end: {
              line: 124,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 122,
              column: 4
            },
            end: {
              line: 124,
              column: 5
            }
          }, {
            start: {
              line: 122,
              column: 4
            },
            end: {
              line: 124,
              column: 5
            }
          }],
          line: 122
        },
        "3": {
          loc: {
            start: {
              line: 129,
              column: 7
            },
            end: {
              line: 129,
              column: 24
            }
          },
          type: "default-arg",
          locations: [{
            start: {
              line: 129,
              column: 19
            },
            end: {
              line: 129,
              column: 24
            }
          }],
          line: 129
        },
        "4": {
          loc: {
            start: {
              line: 130,
              column: 4
            },
            end: {
              line: 132,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 130,
              column: 4
            },
            end: {
              line: 132,
              column: 5
            }
          }, {
            start: {
              line: 130,
              column: 4
            },
            end: {
              line: 132,
              column: 5
            }
          }],
          line: 130
        },
        "5": {
          loc: {
            start: {
              line: 130,
              column: 8
            },
            end: {
              line: 130,
              column: 123
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 130,
              column: 8
            },
            end: {
              line: 130,
              column: 30
            }
          }, {
            start: {
              line: 130,
              column: 34
            },
            end: {
              line: 130,
              column: 80
            }
          }, {
            start: {
              line: 130,
              column: 84
            },
            end: {
              line: 130,
              column: 123
            }
          }],
          line: 130
        },
        "6": {
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
        "7": {
          loc: {
            start: {
              line: 147,
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
              line: 147,
              column: 4
            },
            end: {
              line: 177,
              column: 5
            }
          }, {
            start: {
              line: 147,
              column: 4
            },
            end: {
              line: 177,
              column: 5
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
              column: 36
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
              column: 23
            }
          }, {
            start: {
              line: 147,
              column: 27
            },
            end: {
              line: 147,
              column: 36
            }
          }],
          line: 147
        },
        "9": {
          loc: {
            start: {
              line: 152,
              column: 6
            },
            end: {
              line: 154,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 152,
              column: 6
            },
            end: {
              line: 154,
              column: 7
            }
          }, {
            start: {
              line: 152,
              column: 6
            },
            end: {
              line: 154,
              column: 7
            }
          }],
          line: 152
        },
        "10": {
          loc: {
            start: {
              line: 158,
              column: 6
            },
            end: {
              line: 167,
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
              line: 167,
              column: 7
            }
          }, {
            start: {
              line: 158,
              column: 6
            },
            end: {
              line: 167,
              column: 7
            }
          }],
          line: 158
        },
        "11": {
          loc: {
            start: {
              line: 160,
              column: 13
            },
            end: {
              line: 167,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 160,
              column: 13
            },
            end: {
              line: 167,
              column: 7
            }
          }, {
            start: {
              line: 160,
              column: 13
            },
            end: {
              line: 167,
              column: 7
            }
          }],
          line: 160
        },
        "12": {
          loc: {
            start: {
              line: 164,
              column: 8
            },
            end: {
              line: 166,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 164,
              column: 8
            },
            end: {
              line: 166,
              column: 9
            }
          }, {
            start: {
              line: 164,
              column: 8
            },
            end: {
              line: 166,
              column: 9
            }
          }],
          line: 164
        },
        "13": {
          loc: {
            start: {
              line: 172,
              column: 6
            },
            end: {
              line: 174,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 172,
              column: 6
            },
            end: {
              line: 174,
              column: 7
            }
          }, {
            start: {
              line: 172,
              column: 6
            },
            end: {
              line: 174,
              column: 7
            }
          }],
          line: 172
        },
        "14": {
          loc: {
            start: {
              line: 183,
              column: 4
            },
            end: {
              line: 186,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 183,
              column: 4
            },
            end: {
              line: 186,
              column: 5
            }
          }, {
            start: {
              line: 183,
              column: 4
            },
            end: {
              line: 186,
              column: 5
            }
          }],
          line: 183
        },
        "15": {
          loc: {
            start: {
              line: 183,
              column: 8
            },
            end: {
              line: 184,
              column: 59
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 183,
              column: 8
            },
            end: {
              line: 183,
              column: 50
            }
          }, {
            start: {
              line: 184,
              column: 8
            },
            end: {
              line: 184,
              column: 59
            }
          }],
          line: 183
        },
        "16": {
          loc: {
            start: {
              line: 198,
              column: 4
            },
            end: {
              line: 200,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 198,
              column: 4
            },
            end: {
              line: 200,
              column: 5
            }
          }, {
            start: {
              line: 198,
              column: 4
            },
            end: {
              line: 200,
              column: 5
            }
          }],
          line: 198
        },
        "17": {
          loc: {
            start: {
              line: 198,
              column: 8
            },
            end: {
              line: 198,
              column: 124
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 198,
              column: 8
            },
            end: {
              line: 198,
              column: 30
            }
          }, {
            start: {
              line: 198,
              column: 34
            },
            end: {
              line: 198,
              column: 80
            }
          }, {
            start: {
              line: 198,
              column: 84
            },
            end: {
              line: 198,
              column: 124
            }
          }],
          line: 198
        },
        "18": {
          loc: {
            start: {
              line: 210,
              column: 4
            },
            end: {
              line: 212,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 210,
              column: 4
            },
            end: {
              line: 212,
              column: 5
            }
          }, {
            start: {
              line: 210,
              column: 4
            },
            end: {
              line: 212,
              column: 5
            }
          }],
          line: 210
        },
        "19": {
          loc: {
            start: {
              line: 214,
              column: 4
            },
            end: {
              line: 216,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 214,
              column: 4
            },
            end: {
              line: 216,
              column: 5
            }
          }, {
            start: {
              line: 214,
              column: 4
            },
            end: {
              line: 216,
              column: 5
            }
          }],
          line: 214
        },
        "20": {
          loc: {
            start: {
              line: 229,
              column: 4
            },
            end: {
              line: 232,
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
              line: 232,
              column: 5
            }
          }, {
            start: {
              line: 229,
              column: 4
            },
            end: {
              line: 232,
              column: 5
            }
          }],
          line: 229
        },
        "21": {
          loc: {
            start: {
              line: 237,
              column: 4
            },
            end: {
              line: 239,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 237,
              column: 4
            },
            end: {
              line: 239,
              column: 5
            }
          }, {
            start: {
              line: 237,
              column: 4
            },
            end: {
              line: 239,
              column: 5
            }
          }],
          line: 237
        },
        "22": {
          loc: {
            start: {
              line: 269,
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
              line: 269,
              column: 4
            },
            end: {
              line: 275,
              column: 5
            }
          }, {
            start: {
              line: 269,
              column: 4
            },
            end: {
              line: 275,
              column: 5
            }
          }],
          line: 269
        },
        "23": {
          loc: {
            start: {
              line: 272,
              column: 6
            },
            end: {
              line: 274,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 272,
              column: 6
            },
            end: {
              line: 274,
              column: 7
            }
          }, {
            start: {
              line: 272,
              column: 6
            },
            end: {
              line: 274,
              column: 7
            }
          }],
          line: 272
        },
        "24": {
          loc: {
            start: {
              line: 285,
              column: 4
            },
            end: {
              line: 295,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 285,
              column: 4
            },
            end: {
              line: 295,
              column: 5
            }
          }, {
            start: {
              line: 285,
              column: 4
            },
            end: {
              line: 295,
              column: 5
            }
          }],
          line: 285
        },
        "25": {
          loc: {
            start: {
              line: 286,
              column: 18
            },
            end: {
              line: 288,
              column: 21
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 287,
              column: 8
            },
            end: {
              line: 287,
              column: 24
            }
          }, {
            start: {
              line: 288,
              column: 8
            },
            end: {
              line: 288,
              column: 21
            }
          }],
          line: 286
        },
        "26": {
          loc: {
            start: {
              line: 289,
              column: 11
            },
            end: {
              line: 295,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 289,
              column: 11
            },
            end: {
              line: 295,
              column: 5
            }
          }, {
            start: {
              line: 289,
              column: 11
            },
            end: {
              line: 295,
              column: 5
            }
          }],
          line: 289
        },
        "27": {
          loc: {
            start: {
              line: 291,
              column: 11
            },
            end: {
              line: 295,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 291,
              column: 11
            },
            end: {
              line: 295,
              column: 5
            }
          }, {
            start: {
              line: 291,
              column: 11
            },
            end: {
              line: 295,
              column: 5
            }
          }],
          line: 291
        },
        "28": {
          loc: {
            start: {
              line: 293,
              column: 11
            },
            end: {
              line: 295,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 293,
              column: 11
            },
            end: {
              line: 295,
              column: 5
            }
          }, {
            start: {
              line: 293,
              column: 11
            },
            end: {
              line: 295,
              column: 5
            }
          }],
          line: 293
        },
        "29": {
          loc: {
            start: {
              line: 307,
              column: 4
            },
            end: {
              line: 318,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 307,
              column: 4
            },
            end: {
              line: 318,
              column: 5
            }
          }, {
            start: {
              line: 307,
              column: 4
            },
            end: {
              line: 318,
              column: 5
            }
          }],
          line: 307
        },
        "30": {
          loc: {
            start: {
              line: 311,
              column: 14
            },
            end: {
              line: 311,
              column: 68
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 311,
              column: 14
            },
            end: {
              line: 311,
              column: 62
            }
          }, {
            start: {
              line: 311,
              column: 66
            },
            end: {
              line: 311,
              column: 68
            }
          }],
          line: 311
        },
        "31": {
          loc: {
            start: {
              line: 338,
              column: 4
            },
            end: {
              line: 342,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 338,
              column: 4
            },
            end: {
              line: 342,
              column: 5
            }
          }, {
            start: {
              line: 338,
              column: 4
            },
            end: {
              line: 342,
              column: 5
            }
          }],
          line: 338
        },
        "32": {
          loc: {
            start: {
              line: 355,
              column: 22
            },
            end: {
              line: 355,
              column: 64
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 355,
              column: 51
            },
            end: {
              line: 355,
              column: 57
            }
          }, {
            start: {
              line: 355,
              column: 60
            },
            end: {
              line: 355,
              column: 64
            }
          }],
          line: 355
        },
        "33": {
          loc: {
            start: {
              line: 357,
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
              line: 357,
              column: 6
            },
            end: {
              line: 360,
              column: 7
            }
          }, {
            start: {
              line: 357,
              column: 6
            },
            end: {
              line: 360,
              column: 7
            }
          }],
          line: 357
        },
        "34": {
          loc: {
            start: {
              line: 362,
              column: 6
            },
            end: {
              line: 368,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 362,
              column: 6
            },
            end: {
              line: 368,
              column: 7
            }
          }, {
            start: {
              line: 362,
              column: 6
            },
            end: {
              line: 368,
              column: 7
            }
          }],
          line: 362
        },
        "35": {
          loc: {
            start: {
              line: 363,
              column: 8
            },
            end: {
              line: 365,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 363,
              column: 8
            },
            end: {
              line: 365,
              column: 9
            }
          }, {
            start: {
              line: 363,
              column: 8
            },
            end: {
              line: 365,
              column: 9
            }
          }],
          line: 363
        },
        "36": {
          loc: {
            start: {
              line: 373,
              column: 4
            },
            end: {
              line: 376,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 373,
              column: 4
            },
            end: {
              line: 376,
              column: 5
            }
          }, {
            start: {
              line: 373,
              column: 4
            },
            end: {
              line: 376,
              column: 5
            }
          }],
          line: 373
        },
        "37": {
          loc: {
            start: {
              line: 373,
              column: 8
            },
            end: {
              line: 374,
              column: 60
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 373,
              column: 8
            },
            end: {
              line: 373,
              column: 13
            }
          }, {
            start: {
              line: 373,
              column: 18
            },
            end: {
              line: 373,
              column: 58
            }
          }, {
            start: {
              line: 374,
              column: 6
            },
            end: {
              line: 374,
              column: 28
            }
          }, {
            start: {
              line: 374,
              column: 32
            },
            end: {
              line: 374,
              column: 59
            }
          }],
          line: 373
        },
        "38": {
          loc: {
            start: {
              line: 387,
              column: 6
            },
            end: {
              line: 389,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 387,
              column: 6
            },
            end: {
              line: 389,
              column: 7
            }
          }, {
            start: {
              line: 387,
              column: 6
            },
            end: {
              line: 389,
              column: 7
            }
          }],
          line: 387
        },
        "39": {
          loc: {
            start: {
              line: 387,
              column: 10
            },
            end: {
              line: 387,
              column: 41
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 387,
              column: 10
            },
            end: {
              line: 387,
              column: 15
            }
          }, {
            start: {
              line: 387,
              column: 19
            },
            end: {
              line: 387,
              column: 41
            }
          }],
          line: 387
        },
        "40": {
          loc: {
            start: {
              line: 391,
              column: 6
            },
            end: {
              line: 393,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 391,
              column: 6
            },
            end: {
              line: 393,
              column: 7
            }
          }, {
            start: {
              line: 391,
              column: 6
            },
            end: {
              line: 393,
              column: 7
            }
          }],
          line: 391
        },
        "41": {
          loc: {
            start: {
              line: 396,
              column: 6
            },
            end: {
              line: 398,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 396,
              column: 6
            },
            end: {
              line: 398,
              column: 7
            }
          }, {
            start: {
              line: 396,
              column: 6
            },
            end: {
              line: 398,
              column: 7
            }
          }],
          line: 396
        },
        "42": {
          loc: {
            start: {
              line: 400,
              column: 6
            },
            end: {
              line: 404,
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
              line: 404,
              column: 7
            }
          }, {
            start: {
              line: 400,
              column: 6
            },
            end: {
              line: 404,
              column: 7
            }
          }],
          line: 400
        },
        "43": {
          loc: {
            start: {
              line: 400,
              column: 10
            },
            end: {
              line: 402,
              column: 42
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 400,
              column: 10
            },
            end: {
              line: 400,
              column: 15
            }
          }, {
            start: {
              line: 400,
              column: 20
            },
            end: {
              line: 400,
              column: 42
            }
          }, {
            start: {
              line: 401,
              column: 10
            },
            end: {
              line: 401,
              column: 54
            }
          }, {
            start: {
              line: 401,
              column: 58
            },
            end: {
              line: 401,
              column: 80
            }
          }, {
            start: {
              line: 401,
              column: 84
            },
            end: {
              line: 401,
              column: 111
            }
          }, {
            start: {
              line: 402,
              column: 10
            },
            end: {
              line: 402,
              column: 42
            }
          }],
          line: 400
        },
        "44": {
          loc: {
            start: {
              line: 408,
              column: 6
            },
            end: {
              line: 410,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 408,
              column: 6
            },
            end: {
              line: 410,
              column: 7
            }
          }, {
            start: {
              line: 408,
              column: 6
            },
            end: {
              line: 410,
              column: 7
            }
          }],
          line: 408
        },
        "45": {
          loc: {
            start: {
              line: 414,
              column: 6
            },
            end: {
              line: 416,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 414,
              column: 6
            },
            end: {
              line: 416,
              column: 7
            }
          }, {
            start: {
              line: 414,
              column: 6
            },
            end: {
              line: 416,
              column: 7
            }
          }],
          line: 414
        },
        "46": {
          loc: {
            start: {
              line: 420,
              column: 6
            },
            end: {
              line: 422,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 420,
              column: 6
            },
            end: {
              line: 422,
              column: 7
            }
          }, {
            start: {
              line: 420,
              column: 6
            },
            end: {
              line: 422,
              column: 7
            }
          }],
          line: 420
        },
        "47": {
          loc: {
            start: {
              line: 435,
              column: 4
            },
            end: {
              line: 437,
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
              line: 437,
              column: 5
            }
          }, {
            start: {
              line: 435,
              column: 4
            },
            end: {
              line: 437,
              column: 5
            }
          }],
          line: 435
        },
        "48": {
          loc: {
            start: {
              line: 439,
              column: 11
            },
            end: {
              line: 439,
              column: 39
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 439,
              column: 11
            },
            end: {
              line: 439,
              column: 17
            }
          }, {
            start: {
              line: 439,
              column: 21
            },
            end: {
              line: 439,
              column: 39
            }
          }],
          line: 439
        },
        "49": {
          loc: {
            start: {
              line: 451,
              column: 4
            },
            end: {
              line: 456,
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
              line: 456,
              column: 5
            }
          }, {
            start: {
              line: 451,
              column: 4
            },
            end: {
              line: 456,
              column: 5
            }
          }],
          line: 451
        },
        "50": {
          loc: {
            start: {
              line: 451,
              column: 8
            },
            end: {
              line: 454,
              column: 90
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 452,
              column: 6
            },
            end: {
              line: 454,
              column: 54
            }
          }, {
            start: {
              line: 454,
              column: 57
            },
            end: {
              line: 454,
              column: 90
            }
          }],
          line: 451
        },
        "51": {
          loc: {
            start: {
              line: 452,
              column: 6
            },
            end: {
              line: 454,
              column: 54
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 452,
              column: 6
            },
            end: {
              line: 452,
              column: 35
            }
          }, {
            start: {
              line: 452,
              column: 39
            },
            end: {
              line: 452,
              column: 69
            }
          }, {
            start: {
              line: 453,
              column: 7
            },
            end: {
              line: 453,
              column: 41
            }
          }, {
            start: {
              line: 453,
              column: 45
            },
            end: {
              line: 453,
              column: 77
            }
          }, {
            start: {
              line: 454,
              column: 8
            },
            end: {
              line: 454,
              column: 53
            }
          }],
          line: 452
        },
        "52": {
          loc: {
            start: {
              line: 458,
              column: 4
            },
            end: {
              line: 460,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 458,
              column: 4
            },
            end: {
              line: 460,
              column: 5
            }
          }, {
            start: {
              line: 458,
              column: 4
            },
            end: {
              line: 460,
              column: 5
            }
          }],
          line: 458
        },
        "53": {
          loc: {
            start: {
              line: 458,
              column: 8
            },
            end: {
              line: 458,
              column: 62
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 458,
              column: 8
            },
            end: {
              line: 458,
              column: 21
            }
          }, {
            start: {
              line: 458,
              column: 25
            },
            end: {
              line: 458,
              column: 62
            }
          }],
          line: 458
        },
        "54": {
          loc: {
            start: {
              line: 465,
              column: 4
            },
            end: {
              line: 467,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 465,
              column: 4
            },
            end: {
              line: 467,
              column: 5
            }
          }, {
            start: {
              line: 465,
              column: 4
            },
            end: {
              line: 467,
              column: 5
            }
          }],
          line: 465
        },
        "55": {
          loc: {
            start: {
              line: 465,
              column: 8
            },
            end: {
              line: 465,
              column: 51
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 465,
              column: 8
            },
            end: {
              line: 465,
              column: 17
            }
          }, {
            start: {
              line: 465,
              column: 21
            },
            end: {
              line: 465,
              column: 51
            }
          }],
          line: 465
        },
        "56": {
          loc: {
            start: {
              line: 472,
              column: 4
            },
            end: {
              line: 479,
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
              line: 479,
              column: 5
            }
          }, {
            start: {
              line: 472,
              column: 4
            },
            end: {
              line: 479,
              column: 5
            }
          }],
          line: 472
        },
        "57": {
          loc: {
            start: {
              line: 472,
              column: 8
            },
            end: {
              line: 472,
              column: 86
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 472,
              column: 8
            },
            end: {
              line: 472,
              column: 17
            }
          }, {
            start: {
              line: 472,
              column: 22
            },
            end: {
              line: 472,
              column: 52
            }
          }, {
            start: {
              line: 472,
              column: 56
            },
            end: {
              line: 472,
              column: 85
            }
          }],
          line: 472
        },
        "58": {
          loc: {
            start: {
              line: 473,
              column: 6
            },
            end: {
              line: 475,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 473,
              column: 6
            },
            end: {
              line: 475,
              column: 7
            }
          }, {
            start: {
              line: 473,
              column: 6
            },
            end: {
              line: 475,
              column: 7
            }
          }],
          line: 473
        },
        "59": {
          loc: {
            start: {
              line: 484,
              column: 4
            },
            end: {
              line: 486,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 484,
              column: 4
            },
            end: {
              line: 486,
              column: 5
            }
          }, {
            start: {
              line: 484,
              column: 4
            },
            end: {
              line: 486,
              column: 5
            }
          }],
          line: 484
        },
        "60": {
          loc: {
            start: {
              line: 490,
              column: 4
            },
            end: {
              line: 492,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 490,
              column: 4
            },
            end: {
              line: 492,
              column: 5
            }
          }, {
            start: {
              line: 490,
              column: 4
            },
            end: {
              line: 492,
              column: 5
            }
          }],
          line: 490
        },
        "61": {
          loc: {
            start: {
              line: 490,
              column: 8
            },
            end: {
              line: 490,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 490,
              column: 8
            },
            end: {
              line: 490,
              column: 40
            }
          }, {
            start: {
              line: 490,
              column: 44
            },
            end: {
              line: 490,
              column: 53
            }
          }],
          line: 490
        },
        "62": {
          loc: {
            start: {
              line: 494,
              column: 4
            },
            end: {
              line: 496,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 494,
              column: 4
            },
            end: {
              line: 496,
              column: 5
            }
          }, {
            start: {
              line: 494,
              column: 4
            },
            end: {
              line: 496,
              column: 5
            }
          }],
          line: 494
        },
        "63": {
          loc: {
            start: {
              line: 494,
              column: 8
            },
            end: {
              line: 494,
              column: 70
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 494,
              column: 8
            },
            end: {
              line: 494,
              column: 42
            }
          }, {
            start: {
              line: 494,
              column: 46
            },
            end: {
              line: 494,
              column: 70
            }
          }],
          line: 494
        },
        "64": {
          loc: {
            start: {
              line: 498,
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
              line: 498,
              column: 4
            },
            end: {
              line: 500,
              column: 5
            }
          }, {
            start: {
              line: 498,
              column: 4
            },
            end: {
              line: 500,
              column: 5
            }
          }],
          line: 498
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
        "220": 0
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
        "26": 0
      },
      b: {
        "0": [0, 0],
        "1": [0, 0],
        "2": [0, 0],
        "3": [0],
        "4": [0, 0],
        "5": [0, 0, 0],
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
        "17": [0, 0, 0],
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
        "36": [0, 0],
        "37": [0, 0, 0, 0],
        "38": [0, 0],
        "39": [0, 0],
        "40": [0, 0],
        "41": [0, 0],
        "42": [0, 0],
        "43": [0, 0, 0, 0, 0, 0],
        "44": [0, 0],
        "45": [0, 0],
        "46": [0, 0],
        "47": [0, 0],
        "48": [0, 0],
        "49": [0, 0],
        "50": [0, 0],
        "51": [0, 0, 0, 0, 0],
        "52": [0, 0],
        "53": [0, 0],
        "54": [0, 0],
        "55": [0, 0],
        "56": [0, 0],
        "57": [0, 0, 0],
        "58": [0, 0],
        "59": [0, 0],
        "60": [0, 0],
        "61": [0, 0],
        "62": [0, 0],
        "63": [0, 0],
        "64": [0, 0]
      },
      _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
      hash: "3bba4ffc04a84400f3b55e56f9c270952f245428"
    };
    var coverage = global[gcv] || (global[gcv] = {});

    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }

    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_1nq654px9y = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }

  cov_1nq654px9y();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_1nq654px9y().s[0]++, 'dropdown');
  var VERSION = (cov_1nq654px9y().s[1]++, '4.6.0');
  var DATA_KEY = (cov_1nq654px9y().s[2]++, 'bs.dropdown');
  var EVENT_KEY = (cov_1nq654px9y().s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_1nq654px9y().s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_1nq654px9y().s[5]++, $__default['default'].fn[NAME]);
  var ESCAPE_KEYCODE = (cov_1nq654px9y().s[6]++, 27); // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = (cov_1nq654px9y().s[7]++, 32); // KeyboardEvent.which value for space key

  var TAB_KEYCODE = (cov_1nq654px9y().s[8]++, 9); // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = (cov_1nq654px9y().s[9]++, 38); // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = (cov_1nq654px9y().s[10]++, 40); // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = (cov_1nq654px9y().s[11]++, 3); // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = (cov_1nq654px9y().s[12]++, new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE));
  var EVENT_HIDE = (cov_1nq654px9y().s[13]++, "hide" + EVENT_KEY);
  var EVENT_HIDDEN = (cov_1nq654px9y().s[14]++, "hidden" + EVENT_KEY);
  var EVENT_SHOW = (cov_1nq654px9y().s[15]++, "show" + EVENT_KEY);
  var EVENT_SHOWN = (cov_1nq654px9y().s[16]++, "shown" + EVENT_KEY);
  var EVENT_CLICK = (cov_1nq654px9y().s[17]++, "click" + EVENT_KEY);
  var EVENT_CLICK_DATA_API = (cov_1nq654px9y().s[18]++, "click" + EVENT_KEY + DATA_API_KEY);
  var EVENT_KEYDOWN_DATA_API = (cov_1nq654px9y().s[19]++, "keydown" + EVENT_KEY + DATA_API_KEY);
  var EVENT_KEYUP_DATA_API = (cov_1nq654px9y().s[20]++, "keyup" + EVENT_KEY + DATA_API_KEY);
  var CLASS_NAME_DISABLED = (cov_1nq654px9y().s[21]++, 'disabled');
  var CLASS_NAME_SHOW = (cov_1nq654px9y().s[22]++, 'show');
  var CLASS_NAME_DROPUP = (cov_1nq654px9y().s[23]++, 'dropup');
  var CLASS_NAME_DROPRIGHT = (cov_1nq654px9y().s[24]++, 'dropright');
  var CLASS_NAME_DROPLEFT = (cov_1nq654px9y().s[25]++, 'dropleft');
  var CLASS_NAME_MENURIGHT = (cov_1nq654px9y().s[26]++, 'dropdown-menu-right');
  var CLASS_NAME_POSITION_STATIC = (cov_1nq654px9y().s[27]++, 'position-static');
  var SELECTOR_DATA_TOGGLE = (cov_1nq654px9y().s[28]++, '[data-toggle="dropdown"]');
  var SELECTOR_FORM_CHILD = (cov_1nq654px9y().s[29]++, '.dropdown form');
  var SELECTOR_MENU = (cov_1nq654px9y().s[30]++, '.dropdown-menu');
  var SELECTOR_NAVBAR_NAV = (cov_1nq654px9y().s[31]++, '.navbar-nav');
  var SELECTOR_VISIBLE_ITEMS = (cov_1nq654px9y().s[32]++, '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)');
  var PLACEMENT_TOP = (cov_1nq654px9y().s[33]++, 'top-start');
  var PLACEMENT_TOPEND = (cov_1nq654px9y().s[34]++, 'top-end');
  var PLACEMENT_BOTTOM = (cov_1nq654px9y().s[35]++, 'bottom-start');
  var PLACEMENT_BOTTOMEND = (cov_1nq654px9y().s[36]++, 'bottom-end');
  var PLACEMENT_RIGHT = (cov_1nq654px9y().s[37]++, 'right-start');
  var PLACEMENT_LEFT = (cov_1nq654px9y().s[38]++, 'left-start');
  var Default = (cov_1nq654px9y().s[39]++, {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  });
  var DefaultType = (cov_1nq654px9y().s[40]++, {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  });
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      cov_1nq654px9y().f[0]++;
      cov_1nq654px9y().s[41]++;
      this._element = element;
      cov_1nq654px9y().s[42]++;
      this._popper = null;
      cov_1nq654px9y().s[43]++;
      this._config = this._getConfig(config);
      cov_1nq654px9y().s[44]++;
      this._menu = this._getMenuElement();
      cov_1nq654px9y().s[45]++;
      this._inNavbar = this._detectNavbar();
      cov_1nq654px9y().s[46]++;

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      cov_1nq654px9y().f[4]++;
      cov_1nq654px9y().s[50]++;

      if ((cov_1nq654px9y().b[1][0]++, this._element.disabled) || (cov_1nq654px9y().b[1][1]++, $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED))) {
        cov_1nq654px9y().b[0][0]++;
        cov_1nq654px9y().s[51]++;
        return;
      } else {
        cov_1nq654px9y().b[0][1]++;
      }

      var isActive = (cov_1nq654px9y().s[52]++, $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW));
      cov_1nq654px9y().s[53]++;

      Dropdown._clearMenus();

      cov_1nq654px9y().s[54]++;

      if (isActive) {
        cov_1nq654px9y().b[2][0]++;
        cov_1nq654px9y().s[55]++;
        return;
      } else {
        cov_1nq654px9y().b[2][1]++;
      }

      cov_1nq654px9y().s[56]++;
      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = (cov_1nq654px9y().b[3][0]++, false);
      }

      cov_1nq654px9y().f[5]++;
      cov_1nq654px9y().s[57]++;

      if ((cov_1nq654px9y().b[5][0]++, this._element.disabled) || (cov_1nq654px9y().b[5][1]++, $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED)) || (cov_1nq654px9y().b[5][2]++, $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW))) {
        cov_1nq654px9y().b[4][0]++;
        cov_1nq654px9y().s[58]++;
        return;
      } else {
        cov_1nq654px9y().b[4][1]++;
      }

      var relatedTarget = (cov_1nq654px9y().s[59]++, {
        relatedTarget: this._element
      });
      var showEvent = (cov_1nq654px9y().s[60]++, $__default['default'].Event(EVENT_SHOW, relatedTarget));
      var parent = (cov_1nq654px9y().s[61]++, Dropdown._getParentFromElement(this._element));
      cov_1nq654px9y().s[62]++;
      $__default['default'](parent).trigger(showEvent);
      cov_1nq654px9y().s[63]++;

      if (showEvent.isDefaultPrevented()) {
        cov_1nq654px9y().b[6][0]++;
        cov_1nq654px9y().s[64]++;
        return;
      } else {
        cov_1nq654px9y().b[6][1]++;
      } // Totally disable Popper for Dropdowns in Navbar


      cov_1nq654px9y().s[65]++;

      if ((cov_1nq654px9y().b[8][0]++, !this._inNavbar) && (cov_1nq654px9y().b[8][1]++, usePopper)) {
        cov_1nq654px9y().b[7][0]++;
        cov_1nq654px9y().s[66]++;

        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper__default['default'] === 'undefined') {
          cov_1nq654px9y().b[9][0]++;
          cov_1nq654px9y().s[67]++;
          throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
        } else {
          cov_1nq654px9y().b[9][1]++;
        }

        var referenceElement = (cov_1nq654px9y().s[68]++, this._element);
        cov_1nq654px9y().s[69]++;

        if (this._config.reference === 'parent') {
          cov_1nq654px9y().b[10][0]++;
          cov_1nq654px9y().s[70]++;
          referenceElement = parent;
        } else {
          cov_1nq654px9y().b[10][1]++;
          cov_1nq654px9y().s[71]++;

          if (Util__default['default'].isElement(this._config.reference)) {
            cov_1nq654px9y().b[11][0]++;
            cov_1nq654px9y().s[72]++;
            referenceElement = this._config.reference; // Check if it's jQuery element

            cov_1nq654px9y().s[73]++;

            if (typeof this._config.reference.jquery !== 'undefined') {
              cov_1nq654px9y().b[12][0]++;
              cov_1nq654px9y().s[74]++;
              referenceElement = this._config.reference[0];
            } else {
              cov_1nq654px9y().b[12][1]++;
            }
          } else {
            cov_1nq654px9y().b[11][1]++;
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        cov_1nq654px9y().s[75]++;

        if (this._config.boundary !== 'scrollParent') {
          cov_1nq654px9y().b[13][0]++;
          cov_1nq654px9y().s[76]++;
          $__default['default'](parent).addClass(CLASS_NAME_POSITION_STATIC);
        } else {
          cov_1nq654px9y().b[13][1]++;
        }

        cov_1nq654px9y().s[77]++;
        this._popper = new Popper__default['default'](referenceElement, this._menu, this._getPopperConfig());
      } else {
        cov_1nq654px9y().b[7][1]++;
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      cov_1nq654px9y().s[78]++;

      if ((cov_1nq654px9y().b[15][0]++, 'ontouchstart' in document.documentElement) && (cov_1nq654px9y().b[15][1]++, $__default['default'](parent).closest(SELECTOR_NAVBAR_NAV).length === 0)) {
        cov_1nq654px9y().b[14][0]++;
        cov_1nq654px9y().s[79]++;
        $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
      } else {
        cov_1nq654px9y().b[14][1]++;
      }

      cov_1nq654px9y().s[80]++;

      this._element.focus();

      cov_1nq654px9y().s[81]++;

      this._element.setAttribute('aria-expanded', true);

      cov_1nq654px9y().s[82]++;
      $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW);
      cov_1nq654px9y().s[83]++;
      $__default['default'](parent).toggleClass(CLASS_NAME_SHOW).trigger($__default['default'].Event(EVENT_SHOWN, relatedTarget));
    };

    _proto.hide = function hide() {
      cov_1nq654px9y().f[6]++;
      cov_1nq654px9y().s[84]++;

      if ((cov_1nq654px9y().b[17][0]++, this._element.disabled) || (cov_1nq654px9y().b[17][1]++, $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED)) || (cov_1nq654px9y().b[17][2]++, !$__default['default'](this._menu).hasClass(CLASS_NAME_SHOW))) {
        cov_1nq654px9y().b[16][0]++;
        cov_1nq654px9y().s[85]++;
        return;
      } else {
        cov_1nq654px9y().b[16][1]++;
      }

      var relatedTarget = (cov_1nq654px9y().s[86]++, {
        relatedTarget: this._element
      });
      var hideEvent = (cov_1nq654px9y().s[87]++, $__default['default'].Event(EVENT_HIDE, relatedTarget));
      var parent = (cov_1nq654px9y().s[88]++, Dropdown._getParentFromElement(this._element));
      cov_1nq654px9y().s[89]++;
      $__default['default'](parent).trigger(hideEvent);
      cov_1nq654px9y().s[90]++;

      if (hideEvent.isDefaultPrevented()) {
        cov_1nq654px9y().b[18][0]++;
        cov_1nq654px9y().s[91]++;
        return;
      } else {
        cov_1nq654px9y().b[18][1]++;
      }

      cov_1nq654px9y().s[92]++;

      if (this._popper) {
        cov_1nq654px9y().b[19][0]++;
        cov_1nq654px9y().s[93]++;

        this._popper.destroy();
      } else {
        cov_1nq654px9y().b[19][1]++;
      }

      cov_1nq654px9y().s[94]++;
      $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW);
      cov_1nq654px9y().s[95]++;
      $__default['default'](parent).toggleClass(CLASS_NAME_SHOW).trigger($__default['default'].Event(EVENT_HIDDEN, relatedTarget));
    };

    _proto.dispose = function dispose() {
      cov_1nq654px9y().f[7]++;
      cov_1nq654px9y().s[96]++;
      $__default['default'].removeData(this._element, DATA_KEY);
      cov_1nq654px9y().s[97]++;
      $__default['default'](this._element).off(EVENT_KEY);
      cov_1nq654px9y().s[98]++;
      this._element = null;
      cov_1nq654px9y().s[99]++;
      this._menu = null;
      cov_1nq654px9y().s[100]++;

      if (this._popper !== null) {
        cov_1nq654px9y().b[20][0]++;
        cov_1nq654px9y().s[101]++;

        this._popper.destroy();

        cov_1nq654px9y().s[102]++;
        this._popper = null;
      } else {
        cov_1nq654px9y().b[20][1]++;
      }
    };

    _proto.update = function update() {
      cov_1nq654px9y().f[8]++;
      cov_1nq654px9y().s[103]++;
      this._inNavbar = this._detectNavbar();
      cov_1nq654px9y().s[104]++;

      if (this._popper !== null) {
        cov_1nq654px9y().b[21][0]++;
        cov_1nq654px9y().s[105]++;

        this._popper.scheduleUpdate();
      } else {
        cov_1nq654px9y().b[21][1]++;
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      cov_1nq654px9y().f[9]++;
      cov_1nq654px9y().s[106]++;
      $__default['default'](this._element).on(EVENT_CLICK, function (event) {
        cov_1nq654px9y().f[10]++;
        cov_1nq654px9y().s[107]++;
        event.preventDefault();
        cov_1nq654px9y().s[108]++;
        event.stopPropagation();
        cov_1nq654px9y().s[109]++;

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      cov_1nq654px9y().f[11]++;
      cov_1nq654px9y().s[110]++;
      config = _extends({}, this.constructor.Default, $__default['default'](this._element).data(), config);
      cov_1nq654px9y().s[111]++;
      Util__default['default'].typeCheckConfig(NAME, config, this.constructor.DefaultType);
      cov_1nq654px9y().s[112]++;
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      cov_1nq654px9y().f[12]++;
      cov_1nq654px9y().s[113]++;

      if (!this._menu) {
        cov_1nq654px9y().b[22][0]++;
        var parent = (cov_1nq654px9y().s[114]++, Dropdown._getParentFromElement(this._element));
        cov_1nq654px9y().s[115]++;

        if (parent) {
          cov_1nq654px9y().b[23][0]++;
          cov_1nq654px9y().s[116]++;
          this._menu = parent.querySelector(SELECTOR_MENU);
        } else {
          cov_1nq654px9y().b[23][1]++;
        }
      } else {
        cov_1nq654px9y().b[22][1]++;
      }

      cov_1nq654px9y().s[117]++;
      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      cov_1nq654px9y().f[13]++;
      var $parentDropdown = (cov_1nq654px9y().s[118]++, $__default['default'](this._element.parentNode));
      var placement = (cov_1nq654px9y().s[119]++, PLACEMENT_BOTTOM); // Handle dropup

      cov_1nq654px9y().s[120]++;

      if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
        cov_1nq654px9y().b[24][0]++;
        cov_1nq654px9y().s[121]++;
        placement = $__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT) ? (cov_1nq654px9y().b[25][0]++, PLACEMENT_TOPEND) : (cov_1nq654px9y().b[25][1]++, PLACEMENT_TOP);
      } else {
        cov_1nq654px9y().b[24][1]++;
        cov_1nq654px9y().s[122]++;

        if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
          cov_1nq654px9y().b[26][0]++;
          cov_1nq654px9y().s[123]++;
          placement = PLACEMENT_RIGHT;
        } else {
          cov_1nq654px9y().b[26][1]++;
          cov_1nq654px9y().s[124]++;

          if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
            cov_1nq654px9y().b[27][0]++;
            cov_1nq654px9y().s[125]++;
            placement = PLACEMENT_LEFT;
          } else {
            cov_1nq654px9y().b[27][1]++;
            cov_1nq654px9y().s[126]++;

            if ($__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
              cov_1nq654px9y().b[28][0]++;
              cov_1nq654px9y().s[127]++;
              placement = PLACEMENT_BOTTOMEND;
            } else {
              cov_1nq654px9y().b[28][1]++;
            }
          }
        }
      }

      cov_1nq654px9y().s[128]++;
      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      cov_1nq654px9y().f[14]++;
      cov_1nq654px9y().s[129]++;
      return $__default['default'](this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      cov_1nq654px9y().f[15]++;
      var offset = (cov_1nq654px9y().s[130]++, {});
      cov_1nq654px9y().s[131]++;

      if (typeof this._config.offset === 'function') {
        cov_1nq654px9y().b[29][0]++;
        cov_1nq654px9y().s[132]++;

        offset.fn = function (data) {
          cov_1nq654px9y().f[16]++;
          cov_1nq654px9y().s[133]++;
          data.offsets = _extends({}, data.offsets, (cov_1nq654px9y().b[30][0]++, _this2._config.offset(data.offsets, _this2._element)) || (cov_1nq654px9y().b[30][1]++, {}));
          cov_1nq654px9y().s[134]++;
          return data;
        };
      } else {
        cov_1nq654px9y().b[29][1]++;
        cov_1nq654px9y().s[135]++;
        offset.offset = this._config.offset;
      }

      cov_1nq654px9y().s[136]++;
      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      cov_1nq654px9y().f[17]++;
      var popperConfig = (cov_1nq654px9y().s[137]++, {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }); // Disable Popper if we have a static display

      cov_1nq654px9y().s[138]++;

      if (this._config.display === 'static') {
        cov_1nq654px9y().b[31][0]++;
        cov_1nq654px9y().s[139]++;
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      } else {
        cov_1nq654px9y().b[31][1]++;
      }

      cov_1nq654px9y().s[140]++;
      return _extends({}, popperConfig, this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      cov_1nq654px9y().f[18]++;
      cov_1nq654px9y().s[141]++;
      return this.each(function () {
        cov_1nq654px9y().f[19]++;
        var data = (cov_1nq654px9y().s[142]++, $__default['default'](this).data(DATA_KEY));

        var _config = (cov_1nq654px9y().s[143]++, typeof config === 'object' ? (cov_1nq654px9y().b[32][0]++, config) : (cov_1nq654px9y().b[32][1]++, null));

        cov_1nq654px9y().s[144]++;

        if (!data) {
          cov_1nq654px9y().b[33][0]++;
          cov_1nq654px9y().s[145]++;
          data = new Dropdown(this, _config);
          cov_1nq654px9y().s[146]++;
          $__default['default'](this).data(DATA_KEY, data);
        } else {
          cov_1nq654px9y().b[33][1]++;
        }

        cov_1nq654px9y().s[147]++;

        if (typeof config === 'string') {
          cov_1nq654px9y().b[34][0]++;
          cov_1nq654px9y().s[148]++;

          if (typeof data[config] === 'undefined') {
            cov_1nq654px9y().b[35][0]++;
            cov_1nq654px9y().s[149]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_1nq654px9y().b[35][1]++;
          }

          cov_1nq654px9y().s[150]++;
          data[config]();
        } else {
          cov_1nq654px9y().b[34][1]++;
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      cov_1nq654px9y().f[20]++;
      cov_1nq654px9y().s[151]++;

      if ((cov_1nq654px9y().b[37][0]++, event) && ((cov_1nq654px9y().b[37][1]++, event.which === RIGHT_MOUSE_BUTTON_WHICH) || (cov_1nq654px9y().b[37][2]++, event.type === 'keyup') && (cov_1nq654px9y().b[37][3]++, event.which !== TAB_KEYCODE))) {
        cov_1nq654px9y().b[36][0]++;
        cov_1nq654px9y().s[152]++;
        return;
      } else {
        cov_1nq654px9y().b[36][1]++;
      }

      var toggles = (cov_1nq654px9y().s[153]++, [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE)));
      cov_1nq654px9y().s[154]++;

      for (var i = (cov_1nq654px9y().s[155]++, 0), len = (cov_1nq654px9y().s[156]++, toggles.length); i < len; i++) {
        var parent = (cov_1nq654px9y().s[157]++, Dropdown._getParentFromElement(toggles[i]));
        var context = (cov_1nq654px9y().s[158]++, $__default['default'](toggles[i]).data(DATA_KEY));
        var relatedTarget = (cov_1nq654px9y().s[159]++, {
          relatedTarget: toggles[i]
        });
        cov_1nq654px9y().s[160]++;

        if ((cov_1nq654px9y().b[39][0]++, event) && (cov_1nq654px9y().b[39][1]++, event.type === 'click')) {
          cov_1nq654px9y().b[38][0]++;
          cov_1nq654px9y().s[161]++;
          relatedTarget.clickEvent = event;
        } else {
          cov_1nq654px9y().b[38][1]++;
        }

        cov_1nq654px9y().s[162]++;

        if (!context) {
          cov_1nq654px9y().b[40][0]++;
          cov_1nq654px9y().s[163]++;
          continue;
        } else {
          cov_1nq654px9y().b[40][1]++;
        }

        var dropdownMenu = (cov_1nq654px9y().s[164]++, context._menu);
        cov_1nq654px9y().s[165]++;

        if (!$__default['default'](parent).hasClass(CLASS_NAME_SHOW)) {
          cov_1nq654px9y().b[41][0]++;
          cov_1nq654px9y().s[166]++;
          continue;
        } else {
          cov_1nq654px9y().b[41][1]++;
        }

        cov_1nq654px9y().s[167]++;

        if ((cov_1nq654px9y().b[43][0]++, event) && ((cov_1nq654px9y().b[43][1]++, event.type === 'click') && (cov_1nq654px9y().b[43][2]++, /input|textarea/i.test(event.target.tagName)) || (cov_1nq654px9y().b[43][3]++, event.type === 'keyup') && (cov_1nq654px9y().b[43][4]++, event.which === TAB_KEYCODE)) && (cov_1nq654px9y().b[43][5]++, $__default['default'].contains(parent, event.target))) {
          cov_1nq654px9y().b[42][0]++;
          cov_1nq654px9y().s[168]++;
          continue;
        } else {
          cov_1nq654px9y().b[42][1]++;
        }

        var hideEvent = (cov_1nq654px9y().s[169]++, $__default['default'].Event(EVENT_HIDE, relatedTarget));
        cov_1nq654px9y().s[170]++;
        $__default['default'](parent).trigger(hideEvent);
        cov_1nq654px9y().s[171]++;

        if (hideEvent.isDefaultPrevented()) {
          cov_1nq654px9y().b[44][0]++;
          cov_1nq654px9y().s[172]++;
          continue;
        } else {
          cov_1nq654px9y().b[44][1]++;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        cov_1nq654px9y().s[173]++;

        if ('ontouchstart' in document.documentElement) {
          cov_1nq654px9y().b[45][0]++;
          cov_1nq654px9y().s[174]++;
          $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
        } else {
          cov_1nq654px9y().b[45][1]++;
        }

        cov_1nq654px9y().s[175]++;
        toggles[i].setAttribute('aria-expanded', 'false');
        cov_1nq654px9y().s[176]++;

        if (context._popper) {
          cov_1nq654px9y().b[46][0]++;
          cov_1nq654px9y().s[177]++;

          context._popper.destroy();
        } else {
          cov_1nq654px9y().b[46][1]++;
        }

        cov_1nq654px9y().s[178]++;
        $__default['default'](dropdownMenu).removeClass(CLASS_NAME_SHOW);
        cov_1nq654px9y().s[179]++;
        $__default['default'](parent).removeClass(CLASS_NAME_SHOW).trigger($__default['default'].Event(EVENT_HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      cov_1nq654px9y().f[21]++;
      var parent;
      var selector = (cov_1nq654px9y().s[180]++, Util__default['default'].getSelectorFromElement(element));
      cov_1nq654px9y().s[181]++;

      if (selector) {
        cov_1nq654px9y().b[47][0]++;
        cov_1nq654px9y().s[182]++;
        parent = document.querySelector(selector);
      } else {
        cov_1nq654px9y().b[47][1]++;
      }

      cov_1nq654px9y().s[183]++;
      return (cov_1nq654px9y().b[48][0]++, parent) || (cov_1nq654px9y().b[48][1]++, element.parentNode);
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      cov_1nq654px9y().f[22]++;
      cov_1nq654px9y().s[184]++;

      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? (cov_1nq654px9y().b[50][0]++, (cov_1nq654px9y().b[51][0]++, event.which === SPACE_KEYCODE) || (cov_1nq654px9y().b[51][1]++, event.which !== ESCAPE_KEYCODE) && ((cov_1nq654px9y().b[51][2]++, event.which !== ARROW_DOWN_KEYCODE) && (cov_1nq654px9y().b[51][3]++, event.which !== ARROW_UP_KEYCODE) || (cov_1nq654px9y().b[51][4]++, $__default['default'](event.target).closest(SELECTOR_MENU).length))) : (cov_1nq654px9y().b[50][1]++, !REGEXP_KEYDOWN.test(event.which))) {
        cov_1nq654px9y().b[49][0]++;
        cov_1nq654px9y().s[185]++;
        return;
      } else {
        cov_1nq654px9y().b[49][1]++;
      }

      cov_1nq654px9y().s[186]++;

      if ((cov_1nq654px9y().b[53][0]++, this.disabled) || (cov_1nq654px9y().b[53][1]++, $__default['default'](this).hasClass(CLASS_NAME_DISABLED))) {
        cov_1nq654px9y().b[52][0]++;
        cov_1nq654px9y().s[187]++;
        return;
      } else {
        cov_1nq654px9y().b[52][1]++;
      }

      var parent = (cov_1nq654px9y().s[188]++, Dropdown._getParentFromElement(this));
      var isActive = (cov_1nq654px9y().s[189]++, $__default['default'](parent).hasClass(CLASS_NAME_SHOW));
      cov_1nq654px9y().s[190]++;

      if ((cov_1nq654px9y().b[55][0]++, !isActive) && (cov_1nq654px9y().b[55][1]++, event.which === ESCAPE_KEYCODE)) {
        cov_1nq654px9y().b[54][0]++;
        cov_1nq654px9y().s[191]++;
        return;
      } else {
        cov_1nq654px9y().b[54][1]++;
      }

      cov_1nq654px9y().s[192]++;
      event.preventDefault();
      cov_1nq654px9y().s[193]++;
      event.stopPropagation();
      cov_1nq654px9y().s[194]++;

      if ((cov_1nq654px9y().b[57][0]++, !isActive) || (cov_1nq654px9y().b[57][1]++, event.which === ESCAPE_KEYCODE) || (cov_1nq654px9y().b[57][2]++, event.which === SPACE_KEYCODE)) {
        cov_1nq654px9y().b[56][0]++;
        cov_1nq654px9y().s[195]++;

        if (event.which === ESCAPE_KEYCODE) {
          cov_1nq654px9y().b[58][0]++;
          cov_1nq654px9y().s[196]++;
          $__default['default'](parent.querySelector(SELECTOR_DATA_TOGGLE)).trigger('focus');
        } else {
          cov_1nq654px9y().b[58][1]++;
        }

        cov_1nq654px9y().s[197]++;
        $__default['default'](this).trigger('click');
        cov_1nq654px9y().s[198]++;
        return;
      } else {
        cov_1nq654px9y().b[56][1]++;
      }

      var items = (cov_1nq654px9y().s[199]++, [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
        cov_1nq654px9y().f[23]++;
        cov_1nq654px9y().s[200]++;
        return $__default['default'](item).is(':visible');
      }));
      cov_1nq654px9y().s[201]++;

      if (items.length === 0) {
        cov_1nq654px9y().b[59][0]++;
        cov_1nq654px9y().s[202]++;
        return;
      } else {
        cov_1nq654px9y().b[59][1]++;
      }

      var index = (cov_1nq654px9y().s[203]++, items.indexOf(event.target));
      cov_1nq654px9y().s[204]++;

      if ((cov_1nq654px9y().b[61][0]++, event.which === ARROW_UP_KEYCODE) && (cov_1nq654px9y().b[61][1]++, index > 0)) {
        cov_1nq654px9y().b[60][0]++;
        cov_1nq654px9y().s[205]++;
        // Up
        index--;
      } else {
        cov_1nq654px9y().b[60][1]++;
      }

      cov_1nq654px9y().s[206]++;

      if ((cov_1nq654px9y().b[63][0]++, event.which === ARROW_DOWN_KEYCODE) && (cov_1nq654px9y().b[63][1]++, index < items.length - 1)) {
        cov_1nq654px9y().b[62][0]++;
        cov_1nq654px9y().s[207]++;
        // Down
        index++;
      } else {
        cov_1nq654px9y().b[62][1]++;
      }

      cov_1nq654px9y().s[208]++;

      if (index < 0) {
        cov_1nq654px9y().b[64][0]++;
        cov_1nq654px9y().s[209]++;
        index = 0;
      } else {
        cov_1nq654px9y().b[64][1]++;
      }

      cov_1nq654px9y().s[210]++;
      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        cov_1nq654px9y().f[1]++;
        cov_1nq654px9y().s[47]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_1nq654px9y().f[2]++;
        cov_1nq654px9y().s[48]++;
        return Default;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        cov_1nq654px9y().f[3]++;
        cov_1nq654px9y().s[49]++;
        return DefaultType;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  cov_1nq654px9y().s[211]++;
  $__default['default'](document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    cov_1nq654px9y().f[24]++;
    cov_1nq654px9y().s[212]++;
    event.preventDefault();
    cov_1nq654px9y().s[213]++;
    event.stopPropagation();
    cov_1nq654px9y().s[214]++;

    Dropdown._jQueryInterface.call($__default['default'](this), 'toggle');
  }).on(EVENT_CLICK_DATA_API, SELECTOR_FORM_CHILD, function (e) {
    cov_1nq654px9y().f[25]++;
    cov_1nq654px9y().s[215]++;
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  cov_1nq654px9y().s[216]++;
  $__default['default'].fn[NAME] = Dropdown._jQueryInterface;
  cov_1nq654px9y().s[217]++;
  $__default['default'].fn[NAME].Constructor = Dropdown;
  cov_1nq654px9y().s[218]++;

  $__default['default'].fn[NAME].noConflict = function () {
    cov_1nq654px9y().f[26]++;
    cov_1nq654px9y().s[219]++;
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    cov_1nq654px9y().s[220]++;
    return Dropdown._jQueryInterface;
  };

  return Dropdown;

})));
//# sourceMappingURL=dropdown.js.map

/*!
  * Bootstrap dropdown.js v4.4.1-1 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2020 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('popper.js'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', 'popper.js', './util.js'], factory) :
  (global = global || self, global.Dropdown = factory(global.jQuery, global.Popper, global.Util));
}(this, (function ($, Popper, Util) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;
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

  var cov_1nq654px9y = function () {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/dropdown.js";
    var hash = "c6e488692152f3dce88dd0760719aa539a7b3d64";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/dropdown.js",
      statementMap: {
        "0": {
          start: {
            line: 18,
            column: 33
          },
          end: {
            line: 18,
            column: 43
          }
        },
        "1": {
          start: {
            line: 19,
            column: 33
          },
          end: {
            line: 19,
            column: 40
          }
        },
        "2": {
          start: {
            line: 20,
            column: 33
          },
          end: {
            line: 20,
            column: 46
          }
        },
        "3": {
          start: {
            line: 21,
            column: 33
          },
          end: {
            line: 21,
            column: 47
          }
        },
        "4": {
          start: {
            line: 22,
            column: 33
          },
          end: {
            line: 22,
            column: 44
          }
        },
        "5": {
          start: {
            line: 23,
            column: 33
          },
          end: {
            line: 23,
            column: 43
          }
        },
        "6": {
          start: {
            line: 24,
            column: 33
          },
          end: {
            line: 24,
            column: 35
          }
        },
        "7": {
          start: {
            line: 25,
            column: 33
          },
          end: {
            line: 25,
            column: 35
          }
        },
        "8": {
          start: {
            line: 26,
            column: 33
          },
          end: {
            line: 26,
            column: 34
          }
        },
        "9": {
          start: {
            line: 27,
            column: 33
          },
          end: {
            line: 27,
            column: 35
          }
        },
        "10": {
          start: {
            line: 28,
            column: 33
          },
          end: {
            line: 28,
            column: 35
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
            column: 33
          },
          end: {
            line: 30,
            column: 106
          }
        },
        "13": {
          start: {
            line: 32,
            column: 14
          },
          end: {
            line: 41,
            column: 1
          }
        },
        "14": {
          start: {
            line: 43,
            column: 18
          },
          end: {
            line: 52,
            column: 1
          }
        },
        "15": {
          start: {
            line: 54,
            column: 17
          },
          end: {
            line: 60,
            column: 1
          }
        },
        "16": {
          start: {
            line: 62,
            column: 22
          },
          end: {
            line: 71,
            column: 1
          }
        },
        "17": {
          start: {
            line: 73,
            column: 16
          },
          end: {
            line: 80,
            column: 1
          }
        },
        "18": {
          start: {
            line: 82,
            column: 20
          },
          end: {
            line: 89,
            column: 1
          }
        },
        "19": {
          start: {
            line: 99,
            column: 4
          },
          end: {
            line: 99,
            column: 28
          }
        },
        "20": {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 100,
            column: 25
          }
        },
        "21": {
          start: {
            line: 101,
            column: 4
          },
          end: {
            line: 101,
            column: 44
          }
        },
        "22": {
          start: {
            line: 102,
            column: 4
          },
          end: {
            line: 102,
            column: 43
          }
        },
        "23": {
          start: {
            line: 103,
            column: 4
          },
          end: {
            line: 103,
            column: 41
          }
        },
        "24": {
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 105,
            column: 29
          }
        },
        "25": {
          start: {
            line: 111,
            column: 4
          },
          end: {
            line: 111,
            column: 18
          }
        },
        "26": {
          start: {
            line: 115,
            column: 4
          },
          end: {
            line: 115,
            column: 18
          }
        },
        "27": {
          start: {
            line: 119,
            column: 4
          },
          end: {
            line: 119,
            column: 22
          }
        },
        "28": {
          start: {
            line: 125,
            column: 4
          },
          end: {
            line: 127,
            column: 5
          }
        },
        "29": {
          start: {
            line: 126,
            column: 6
          },
          end: {
            line: 126,
            column: 12
          }
        },
        "30": {
          start: {
            line: 129,
            column: 21
          },
          end: {
            line: 129,
            column: 59
          }
        },
        "31": {
          start: {
            line: 131,
            column: 4
          },
          end: {
            line: 131,
            column: 26
          }
        },
        "32": {
          start: {
            line: 133,
            column: 4
          },
          end: {
            line: 135,
            column: 5
          }
        },
        "33": {
          start: {
            line: 134,
            column: 6
          },
          end: {
            line: 134,
            column: 12
          }
        },
        "34": {
          start: {
            line: 137,
            column: 4
          },
          end: {
            line: 137,
            column: 19
          }
        },
        "35": {
          start: {
            line: 141,
            column: 4
          },
          end: {
            line: 143,
            column: 5
          }
        },
        "36": {
          start: {
            line: 142,
            column: 6
          },
          end: {
            line: 142,
            column: 12
          }
        },
        "37": {
          start: {
            line: 145,
            column: 26
          },
          end: {
            line: 147,
            column: 5
          }
        },
        "38": {
          start: {
            line: 148,
            column: 22
          },
          end: {
            line: 148,
            column: 56
          }
        },
        "39": {
          start: {
            line: 149,
            column: 19
          },
          end: {
            line: 149,
            column: 64
          }
        },
        "40": {
          start: {
            line: 151,
            column: 4
          },
          end: {
            line: 151,
            column: 32
          }
        },
        "41": {
          start: {
            line: 153,
            column: 4
          },
          end: {
            line: 155,
            column: 5
          }
        },
        "42": {
          start: {
            line: 154,
            column: 6
          },
          end: {
            line: 154,
            column: 12
          }
        },
        "43": {
          start: {
            line: 158,
            column: 4
          },
          end: {
            line: 187,
            column: 5
          }
        },
        "44": {
          start: {
            line: 163,
            column: 6
          },
          end: {
            line: 165,
            column: 7
          }
        },
        "45": {
          start: {
            line: 164,
            column: 8
          },
          end: {
            line: 164,
            column: 96
          }
        },
        "46": {
          start: {
            line: 167,
            column: 29
          },
          end: {
            line: 167,
            column: 42
          }
        },
        "47": {
          start: {
            line: 169,
            column: 6
          },
          end: {
            line: 178,
            column: 7
          }
        },
        "48": {
          start: {
            line: 170,
            column: 8
          },
          end: {
            line: 170,
            column: 33
          }
        },
        "49": {
          start: {
            line: 171,
            column: 13
          },
          end: {
            line: 178,
            column: 7
          }
        },
        "50": {
          start: {
            line: 172,
            column: 8
          },
          end: {
            line: 172,
            column: 49
          }
        },
        "51": {
          start: {
            line: 175,
            column: 8
          },
          end: {
            line: 177,
            column: 9
          }
        },
        "52": {
          start: {
            line: 176,
            column: 10
          },
          end: {
            line: 176,
            column: 54
          }
        },
        "53": {
          start: {
            line: 183,
            column: 6
          },
          end: {
            line: 185,
            column: 7
          }
        },
        "54": {
          start: {
            line: 184,
            column: 8
          },
          end: {
            line: 184,
            column: 53
          }
        },
        "55": {
          start: {
            line: 186,
            column: 6
          },
          end: {
            line: 186,
            column: 86
          }
        },
        "56": {
          start: {
            line: 193,
            column: 4
          },
          end: {
            line: 196,
            column: 5
          }
        },
        "57": {
          start: {
            line: 195,
            column: 6
          },
          end: {
            line: 195,
            column: 63
          }
        },
        "58": {
          start: {
            line: 198,
            column: 4
          },
          end: {
            line: 198,
            column: 25
          }
        },
        "59": {
          start: {
            line: 199,
            column: 4
          },
          end: {
            line: 199,
            column: 53
          }
        },
        "60": {
          start: {
            line: 201,
            column: 4
          },
          end: {
            line: 201,
            column: 45
          }
        },
        "61": {
          start: {
            line: 202,
            column: 4
          },
          end: {
            line: 204,
            column: 51
          }
        },
        "62": {
          start: {
            line: 208,
            column: 4
          },
          end: {
            line: 210,
            column: 5
          }
        },
        "63": {
          start: {
            line: 209,
            column: 6
          },
          end: {
            line: 209,
            column: 12
          }
        },
        "64": {
          start: {
            line: 212,
            column: 26
          },
          end: {
            line: 214,
            column: 5
          }
        },
        "65": {
          start: {
            line: 215,
            column: 22
          },
          end: {
            line: 215,
            column: 56
          }
        },
        "66": {
          start: {
            line: 216,
            column: 19
          },
          end: {
            line: 216,
            column: 64
          }
        },
        "67": {
          start: {
            line: 218,
            column: 4
          },
          end: {
            line: 218,
            column: 32
          }
        },
        "68": {
          start: {
            line: 220,
            column: 4
          },
          end: {
            line: 222,
            column: 5
          }
        },
        "69": {
          start: {
            line: 221,
            column: 6
          },
          end: {
            line: 221,
            column: 12
          }
        },
        "70": {
          start: {
            line: 224,
            column: 4
          },
          end: {
            line: 226,
            column: 5
          }
        },
        "71": {
          start: {
            line: 225,
            column: 6
          },
          end: {
            line: 225,
            column: 28
          }
        },
        "72": {
          start: {
            line: 228,
            column: 4
          },
          end: {
            line: 228,
            column: 45
          }
        },
        "73": {
          start: {
            line: 229,
            column: 4
          },
          end: {
            line: 231,
            column: 52
          }
        },
        "74": {
          start: {
            line: 235,
            column: 4
          },
          end: {
            line: 235,
            column: 41
          }
        },
        "75": {
          start: {
            line: 236,
            column: 4
          },
          end: {
            line: 236,
            column: 35
          }
        },
        "76": {
          start: {
            line: 237,
            column: 4
          },
          end: {
            line: 237,
            column: 24
          }
        },
        "77": {
          start: {
            line: 238,
            column: 4
          },
          end: {
            line: 238,
            column: 21
          }
        },
        "78": {
          start: {
            line: 239,
            column: 4
          },
          end: {
            line: 242,
            column: 5
          }
        },
        "79": {
          start: {
            line: 240,
            column: 6
          },
          end: {
            line: 240,
            column: 28
          }
        },
        "80": {
          start: {
            line: 241,
            column: 6
          },
          end: {
            line: 241,
            column: 25
          }
        },
        "81": {
          start: {
            line: 246,
            column: 4
          },
          end: {
            line: 246,
            column: 41
          }
        },
        "82": {
          start: {
            line: 247,
            column: 4
          },
          end: {
            line: 249,
            column: 5
          }
        },
        "83": {
          start: {
            line: 248,
            column: 6
          },
          end: {
            line: 248,
            column: 35
          }
        },
        "84": {
          start: {
            line: 255,
            column: 4
          },
          end: {
            line: 259,
            column: 6
          }
        },
        "85": {
          start: {
            line: 256,
            column: 6
          },
          end: {
            line: 256,
            column: 28
          }
        },
        "86": {
          start: {
            line: 257,
            column: 6
          },
          end: {
            line: 257,
            column: 29
          }
        },
        "87": {
          start: {
            line: 258,
            column: 6
          },
          end: {
            line: 258,
            column: 19
          }
        },
        "88": {
          start: {
            line: 263,
            column: 4
          },
          end: {
            line: 267,
            column: 5
          }
        },
        "89": {
          start: {
            line: 269,
            column: 4
          },
          end: {
            line: 273,
            column: 5
          }
        },
        "90": {
          start: {
            line: 275,
            column: 4
          },
          end: {
            line: 275,
            column: 17
          }
        },
        "91": {
          start: {
            line: 279,
            column: 4
          },
          end: {
            line: 285,
            column: 5
          }
        },
        "92": {
          start: {
            line: 280,
            column: 21
          },
          end: {
            line: 280,
            column: 66
          }
        },
        "93": {
          start: {
            line: 282,
            column: 6
          },
          end: {
            line: 284,
            column: 7
          }
        },
        "94": {
          start: {
            line: 283,
            column: 8
          },
          end: {
            line: 283,
            column: 56
          }
        },
        "95": {
          start: {
            line: 286,
            column: 4
          },
          end: {
            line: 286,
            column: 21
          }
        },
        "96": {
          start: {
            line: 290,
            column: 28
          },
          end: {
            line: 290,
            column: 55
          }
        },
        "97": {
          start: {
            line: 291,
            column: 20
          },
          end: {
            line: 291,
            column: 40
          }
        },
        "98": {
          start: {
            line: 294,
            column: 4
          },
          end: {
            line: 305,
            column: 5
          }
        },
        "99": {
          start: {
            line: 295,
            column: 6
          },
          end: {
            line: 295,
            column: 35
          }
        },
        "100": {
          start: {
            line: 296,
            column: 6
          },
          end: {
            line: 298,
            column: 7
          }
        },
        "101": {
          start: {
            line: 297,
            column: 8
          },
          end: {
            line: 297,
            column: 40
          }
        },
        "102": {
          start: {
            line: 299,
            column: 11
          },
          end: {
            line: 305,
            column: 5
          }
        },
        "103": {
          start: {
            line: 300,
            column: 6
          },
          end: {
            line: 300,
            column: 37
          }
        },
        "104": {
          start: {
            line: 301,
            column: 11
          },
          end: {
            line: 305,
            column: 5
          }
        },
        "105": {
          start: {
            line: 302,
            column: 6
          },
          end: {
            line: 302,
            column: 36
          }
        },
        "106": {
          start: {
            line: 303,
            column: 11
          },
          end: {
            line: 305,
            column: 5
          }
        },
        "107": {
          start: {
            line: 304,
            column: 6
          },
          end: {
            line: 304,
            column: 41
          }
        },
        "108": {
          start: {
            line: 306,
            column: 4
          },
          end: {
            line: 306,
            column: 20
          }
        },
        "109": {
          start: {
            line: 310,
            column: 4
          },
          end: {
            line: 310,
            column: 57
          }
        },
        "110": {
          start: {
            line: 314,
            column: 19
          },
          end: {
            line: 314,
            column: 21
          }
        },
        "111": {
          start: {
            line: 316,
            column: 4
          },
          end: {
            line: 327,
            column: 5
          }
        },
        "112": {
          start: {
            line: 317,
            column: 6
          },
          end: {
            line: 324,
            column: 7
          }
        },
        "113": {
          start: {
            line: 318,
            column: 8
          },
          end: {
            line: 321,
            column: 9
          }
        },
        "114": {
          start: {
            line: 323,
            column: 8
          },
          end: {
            line: 323,
            column: 19
          }
        },
        "115": {
          start: {
            line: 326,
            column: 6
          },
          end: {
            line: 326,
            column: 41
          }
        },
        "116": {
          start: {
            line: 329,
            column: 4
          },
          end: {
            line: 329,
            column: 17
          }
        },
        "117": {
          start: {
            line: 333,
            column: 25
          },
          end: {
            line: 344,
            column: 5
          }
        },
        "118": {
          start: {
            line: 347,
            column: 4
          },
          end: {
            line: 351,
            column: 5
          }
        },
        "119": {
          start: {
            line: 348,
            column: 6
          },
          end: {
            line: 350,
            column: 7
          }
        },
        "120": {
          start: {
            line: 353,
            column: 4
          },
          end: {
            line: 356,
            column: 5
          }
        },
        "121": {
          start: {
            line: 362,
            column: 4
          },
          end: {
            line: 377,
            column: 6
          }
        },
        "122": {
          start: {
            line: 363,
            column: 17
          },
          end: {
            line: 363,
            column: 39
          }
        },
        "123": {
          start: {
            line: 364,
            column: 22
          },
          end: {
            line: 364,
            column: 64
          }
        },
        "124": {
          start: {
            line: 366,
            column: 6
          },
          end: {
            line: 369,
            column: 7
          }
        },
        "125": {
          start: {
            line: 367,
            column: 8
          },
          end: {
            line: 367,
            column: 42
          }
        },
        "126": {
          start: {
            line: 368,
            column: 8
          },
          end: {
            line: 368,
            column: 36
          }
        },
        "127": {
          start: {
            line: 371,
            column: 6
          },
          end: {
            line: 376,
            column: 7
          }
        },
        "128": {
          start: {
            line: 372,
            column: 8
          },
          end: {
            line: 374,
            column: 9
          }
        },
        "129": {
          start: {
            line: 373,
            column: 10
          },
          end: {
            line: 373,
            column: 60
          }
        },
        "130": {
          start: {
            line: 375,
            column: 8
          },
          end: {
            line: 375,
            column: 22
          }
        },
        "131": {
          start: {
            line: 381,
            column: 4
          },
          end: {
            line: 384,
            column: 5
          }
        },
        "132": {
          start: {
            line: 383,
            column: 6
          },
          end: {
            line: 383,
            column: 12
          }
        },
        "133": {
          start: {
            line: 386,
            column: 20
          },
          end: {
            line: 386,
            column: 82
          }
        },
        "134": {
          start: {
            line: 388,
            column: 4
          },
          end: {
            line: 436,
            column: 5
          }
        },
        "135": {
          start: {
            line: 388,
            column: 17
          },
          end: {
            line: 388,
            column: 18
          }
        },
        "136": {
          start: {
            line: 388,
            column: 26
          },
          end: {
            line: 388,
            column: 40
          }
        },
        "137": {
          start: {
            line: 389,
            column: 21
          },
          end: {
            line: 389,
            column: 63
          }
        },
        "138": {
          start: {
            line: 390,
            column: 22
          },
          end: {
            line: 390,
            column: 50
          }
        },
        "139": {
          start: {
            line: 391,
            column: 28
          },
          end: {
            line: 393,
            column: 7
          }
        },
        "140": {
          start: {
            line: 395,
            column: 6
          },
          end: {
            line: 397,
            column: 7
          }
        },
        "141": {
          start: {
            line: 396,
            column: 8
          },
          end: {
            line: 396,
            column: 40
          }
        },
        "142": {
          start: {
            line: 399,
            column: 6
          },
          end: {
            line: 401,
            column: 7
          }
        },
        "143": {
          start: {
            line: 400,
            column: 8
          },
          end: {
            line: 400,
            column: 16
          }
        },
        "144": {
          start: {
            line: 403,
            column: 27
          },
          end: {
            line: 403,
            column: 40
          }
        },
        "145": {
          start: {
            line: 404,
            column: 6
          },
          end: {
            line: 406,
            column: 7
          }
        },
        "146": {
          start: {
            line: 405,
            column: 8
          },
          end: {
            line: 405,
            column: 16
          }
        },
        "147": {
          start: {
            line: 408,
            column: 6
          },
          end: {
            line: 412,
            column: 7
          }
        },
        "148": {
          start: {
            line: 411,
            column: 8
          },
          end: {
            line: 411,
            column: 16
          }
        },
        "149": {
          start: {
            line: 414,
            column: 24
          },
          end: {
            line: 414,
            column: 58
          }
        },
        "150": {
          start: {
            line: 415,
            column: 6
          },
          end: {
            line: 415,
            column: 34
          }
        },
        "151": {
          start: {
            line: 416,
            column: 6
          },
          end: {
            line: 418,
            column: 7
          }
        },
        "152": {
          start: {
            line: 417,
            column: 8
          },
          end: {
            line: 417,
            column: 16
          }
        },
        "153": {
          start: {
            line: 422,
            column: 6
          },
          end: {
            line: 424,
            column: 7
          }
        },
        "154": {
          start: {
            line: 423,
            column: 8
          },
          end: {
            line: 423,
            column: 66
          }
        },
        "155": {
          start: {
            line: 426,
            column: 6
          },
          end: {
            line: 426,
            column: 55
          }
        },
        "156": {
          start: {
            line: 428,
            column: 6
          },
          end: {
            line: 430,
            column: 7
          }
        },
        "157": {
          start: {
            line: 429,
            column: 8
          },
          end: {
            line: 429,
            column: 33
          }
        },
        "158": {
          start: {
            line: 432,
            column: 6
          },
          end: {
            line: 432,
            column: 49
          }
        },
        "159": {
          start: {
            line: 433,
            column: 6
          },
          end: {
            line: 435,
            column: 54
          }
        },
        "160": {
          start: {
            line: 441,
            column: 21
          },
          end: {
            line: 441,
            column: 57
          }
        },
        "161": {
          start: {
            line: 443,
            column: 4
          },
          end: {
            line: 445,
            column: 5
          }
        },
        "162": {
          start: {
            line: 444,
            column: 6
          },
          end: {
            line: 444,
            column: 47
          }
        },
        "163": {
          start: {
            line: 447,
            column: 4
          },
          end: {
            line: 447,
            column: 39
          }
        },
        "164": {
          start: {
            line: 459,
            column: 4
          },
          end: {
            line: 464,
            column: 5
          }
        },
        "165": {
          start: {
            line: 463,
            column: 6
          },
          end: {
            line: 463,
            column: 12
          }
        },
        "166": {
          start: {
            line: 466,
            column: 4
          },
          end: {
            line: 466,
            column: 26
          }
        },
        "167": {
          start: {
            line: 467,
            column: 4
          },
          end: {
            line: 467,
            column: 27
          }
        },
        "168": {
          start: {
            line: 469,
            column: 4
          },
          end: {
            line: 471,
            column: 5
          }
        },
        "169": {
          start: {
            line: 470,
            column: 6
          },
          end: {
            line: 470,
            column: 12
          }
        },
        "170": {
          start: {
            line: 473,
            column: 21
          },
          end: {
            line: 473,
            column: 57
          }
        },
        "171": {
          start: {
            line: 474,
            column: 21
          },
          end: {
            line: 474,
            column: 55
          }
        },
        "172": {
          start: {
            line: 476,
            column: 4
          },
          end: {
            line: 478,
            column: 5
          }
        },
        "173": {
          start: {
            line: 477,
            column: 6
          },
          end: {
            line: 477,
            column: 12
          }
        },
        "174": {
          start: {
            line: 480,
            column: 4
          },
          end: {
            line: 488,
            column: 5
          }
        },
        "175": {
          start: {
            line: 481,
            column: 6
          },
          end: {
            line: 484,
            column: 7
          }
        },
        "176": {
          start: {
            line: 482,
            column: 23
          },
          end: {
            line: 482,
            column: 65
          }
        },
        "177": {
          start: {
            line: 483,
            column: 8
          },
          end: {
            line: 483,
            column: 34
          }
        },
        "178": {
          start: {
            line: 486,
            column: 6
          },
          end: {
            line: 486,
            column: 30
          }
        },
        "179": {
          start: {
            line: 487,
            column: 6
          },
          end: {
            line: 487,
            column: 12
          }
        },
        "180": {
          start: {
            line: 490,
            column: 18
          },
          end: {
            line: 491,
            column: 47
          }
        },
        "181": {
          start: {
            line: 491,
            column: 24
          },
          end: {
            line: 491,
            column: 46
          }
        },
        "182": {
          start: {
            line: 493,
            column: 4
          },
          end: {
            line: 495,
            column: 5
          }
        },
        "183": {
          start: {
            line: 494,
            column: 6
          },
          end: {
            line: 494,
            column: 12
          }
        },
        "184": {
          start: {
            line: 497,
            column: 16
          },
          end: {
            line: 497,
            column: 43
          }
        },
        "185": {
          start: {
            line: 499,
            column: 4
          },
          end: {
            line: 501,
            column: 5
          }
        },
        "186": {
          start: {
            line: 500,
            column: 6
          },
          end: {
            line: 500,
            column: 13
          }
        },
        "187": {
          start: {
            line: 503,
            column: 4
          },
          end: {
            line: 505,
            column: 5
          }
        },
        "188": {
          start: {
            line: 504,
            column: 6
          },
          end: {
            line: 504,
            column: 13
          }
        },
        "189": {
          start: {
            line: 507,
            column: 4
          },
          end: {
            line: 509,
            column: 5
          }
        },
        "190": {
          start: {
            line: 508,
            column: 6
          },
          end: {
            line: 508,
            column: 15
          }
        },
        "191": {
          start: {
            line: 511,
            column: 4
          },
          end: {
            line: 511,
            column: 24
          }
        },
        "192": {
          start: {
            line: 521,
            column: 0
          },
          end: {
            line: 532,
            column: 4
          }
        },
        "193": {
          start: {
            line: 526,
            column: 4
          },
          end: {
            line: 526,
            column: 26
          }
        },
        "194": {
          start: {
            line: 527,
            column: 4
          },
          end: {
            line: 527,
            column: 27
          }
        },
        "195": {
          start: {
            line: 528,
            column: 4
          },
          end: {
            line: 528,
            column: 53
          }
        },
        "196": {
          start: {
            line: 531,
            column: 4
          },
          end: {
            line: 531,
            column: 23
          }
        },
        "197": {
          start: {
            line: 540,
            column: 0
          },
          end: {
            line: 540,
            column: 38
          }
        },
        "198": {
          start: {
            line: 541,
            column: 0
          },
          end: {
            line: 541,
            column: 33
          }
        },
        "199": {
          start: {
            line: 542,
            column: 0
          },
          end: {
            line: 545,
            column: 1
          }
        },
        "200": {
          start: {
            line: 543,
            column: 2
          },
          end: {
            line: 543,
            column: 33
          }
        },
        "201": {
          start: {
            line: 544,
            column: 2
          },
          end: {
            line: 544,
            column: 34
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
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
              column: 31
            },
            end: {
              line: 106,
              column: 3
            }
          },
          line: 98
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 110,
              column: 2
            },
            end: {
              line: 110,
              column: 3
            }
          },
          loc: {
            start: {
              line: 110,
              column: 23
            },
            end: {
              line: 112,
              column: 3
            }
          },
          line: 110
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 114,
              column: 2
            },
            end: {
              line: 114,
              column: 3
            }
          },
          loc: {
            start: {
              line: 114,
              column: 23
            },
            end: {
              line: 116,
              column: 3
            }
          },
          line: 114
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 118,
              column: 2
            },
            end: {
              line: 118,
              column: 3
            }
          },
          loc: {
            start: {
              line: 118,
              column: 27
            },
            end: {
              line: 120,
              column: 3
            }
          },
          line: 118
        },
        "4": {
          name: "(anonymous_4)",
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
              column: 11
            },
            end: {
              line: 138,
              column: 3
            }
          },
          line: 124
        },
        "5": {
          name: "(anonymous_5)",
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
              column: 26
            },
            end: {
              line: 205,
              column: 3
            }
          },
          line: 140
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 207,
              column: 2
            },
            end: {
              line: 207,
              column: 3
            }
          },
          loc: {
            start: {
              line: 207,
              column: 9
            },
            end: {
              line: 232,
              column: 3
            }
          },
          line: 207
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 234,
              column: 2
            },
            end: {
              line: 234,
              column: 3
            }
          },
          loc: {
            start: {
              line: 234,
              column: 12
            },
            end: {
              line: 243,
              column: 3
            }
          },
          line: 234
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 245,
              column: 2
            },
            end: {
              line: 245,
              column: 3
            }
          },
          loc: {
            start: {
              line: 245,
              column: 11
            },
            end: {
              line: 250,
              column: 3
            }
          },
          line: 245
        },
        "9": {
          name: "(anonymous_9)",
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
              column: 23
            },
            end: {
              line: 260,
              column: 3
            }
          },
          line: 254
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 255,
              column: 37
            },
            end: {
              line: 255,
              column: 38
            }
          },
          loc: {
            start: {
              line: 255,
              column: 48
            },
            end: {
              line: 259,
              column: 5
            }
          },
          line: 255
        },
        "11": {
          name: "(anonymous_11)",
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
              column: 21
            },
            end: {
              line: 276,
              column: 3
            }
          },
          line: 262
        },
        "12": {
          name: "(anonymous_12)",
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
              column: 20
            },
            end: {
              line: 287,
              column: 3
            }
          },
          line: 278
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 289,
              column: 2
            },
            end: {
              line: 289,
              column: 3
            }
          },
          loc: {
            start: {
              line: 289,
              column: 18
            },
            end: {
              line: 307,
              column: 3
            }
          },
          line: 289
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 309,
              column: 2
            },
            end: {
              line: 309,
              column: 3
            }
          },
          loc: {
            start: {
              line: 309,
              column: 18
            },
            end: {
              line: 311,
              column: 3
            }
          },
          line: 309
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 313,
              column: 2
            },
            end: {
              line: 313,
              column: 3
            }
          },
          loc: {
            start: {
              line: 313,
              column: 15
            },
            end: {
              line: 330,
              column: 3
            }
          },
          line: 313
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 317,
              column: 18
            },
            end: {
              line: 317,
              column: 19
            }
          },
          loc: {
            start: {
              line: 317,
              column: 28
            },
            end: {
              line: 324,
              column: 7
            }
          },
          line: 317
        },
        "17": {
          name: "(anonymous_17)",
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
              column: 21
            },
            end: {
              line: 357,
              column: 3
            }
          },
          line: 332
        },
        "18": {
          name: "(anonymous_18)",
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
              column: 34
            },
            end: {
              line: 378,
              column: 3
            }
          },
          line: 361
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 362,
              column: 21
            },
            end: {
              line: 362,
              column: 22
            }
          },
          loc: {
            start: {
              line: 362,
              column: 33
            },
            end: {
              line: 377,
              column: 5
            }
          },
          line: 362
        },
        "20": {
          name: "(anonymous_20)",
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
              column: 28
            },
            end: {
              line: 437,
              column: 3
            }
          },
          line: 380
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 439,
              column: 2
            },
            end: {
              line: 439,
              column: 3
            }
          },
          loc: {
            start: {
              line: 439,
              column: 40
            },
            end: {
              line: 448,
              column: 3
            }
          },
          line: 439
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 451,
              column: 2
            },
            end: {
              line: 451,
              column: 3
            }
          },
          loc: {
            start: {
              line: 451,
              column: 39
            },
            end: {
              line: 512,
              column: 3
            }
          },
          line: 451
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 491,
              column: 14
            },
            end: {
              line: 491,
              column: 15
            }
          },
          loc: {
            start: {
              line: 491,
              column: 24
            },
            end: {
              line: 491,
              column: 46
            }
          },
          line: 491
        },
        "24": {
          name: "(anonymous_24)",
          decl: {
            start: {
              line: 525,
              column: 50
            },
            end: {
              line: 525,
              column: 51
            }
          },
          loc: {
            start: {
              line: 525,
              column: 67
            },
            end: {
              line: 529,
              column: 3
            }
          },
          line: 525
        },
        "25": {
          name: "(anonymous_25)",
          decl: {
            start: {
              line: 530,
              column: 49
            },
            end: {
              line: 530,
              column: 50
            }
          },
          loc: {
            start: {
              line: 530,
              column: 56
            },
            end: {
              line: 532,
              column: 3
            }
          },
          line: 530
        },
        "26": {
          name: "(anonymous_26)",
          decl: {
            start: {
              line: 542,
              column: 24
            },
            end: {
              line: 542,
              column: 25
            }
          },
          loc: {
            start: {
              line: 542,
              column: 30
            },
            end: {
              line: 545,
              column: 1
            }
          },
          line: 542
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 125,
              column: 4
            },
            end: {
              line: 127,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 125,
              column: 4
            },
            end: {
              line: 127,
              column: 5
            }
          }, {
            start: {
              line: 125,
              column: 4
            },
            end: {
              line: 127,
              column: 5
            }
          }],
          line: 125
        },
        "1": {
          loc: {
            start: {
              line: 125,
              column: 8
            },
            end: {
              line: 125,
              column: 79
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 125,
              column: 8
            },
            end: {
              line: 125,
              column: 30
            }
          }, {
            start: {
              line: 125,
              column: 34
            },
            end: {
              line: 125,
              column: 79
            }
          }],
          line: 125
        },
        "2": {
          loc: {
            start: {
              line: 133,
              column: 4
            },
            end: {
              line: 135,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 133,
              column: 4
            },
            end: {
              line: 135,
              column: 5
            }
          }, {
            start: {
              line: 133,
              column: 4
            },
            end: {
              line: 135,
              column: 5
            }
          }],
          line: 133
        },
        "3": {
          loc: {
            start: {
              line: 140,
              column: 7
            },
            end: {
              line: 140,
              column: 24
            }
          },
          type: "default-arg",
          locations: [{
            start: {
              line: 140,
              column: 19
            },
            end: {
              line: 140,
              column: 24
            }
          }],
          line: 140
        },
        "4": {
          loc: {
            start: {
              line: 141,
              column: 4
            },
            end: {
              line: 143,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 141,
              column: 4
            },
            end: {
              line: 143,
              column: 5
            }
          }, {
            start: {
              line: 141,
              column: 4
            },
            end: {
              line: 143,
              column: 5
            }
          }],
          line: 141
        },
        "5": {
          loc: {
            start: {
              line: 141,
              column: 8
            },
            end: {
              line: 141,
              column: 121
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 141,
              column: 8
            },
            end: {
              line: 141,
              column: 30
            }
          }, {
            start: {
              line: 141,
              column: 34
            },
            end: {
              line: 141,
              column: 79
            }
          }, {
            start: {
              line: 141,
              column: 83
            },
            end: {
              line: 141,
              column: 121
            }
          }],
          line: 141
        },
        "6": {
          loc: {
            start: {
              line: 153,
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
              line: 153,
              column: 4
            },
            end: {
              line: 155,
              column: 5
            }
          }, {
            start: {
              line: 153,
              column: 4
            },
            end: {
              line: 155,
              column: 5
            }
          }],
          line: 153
        },
        "7": {
          loc: {
            start: {
              line: 158,
              column: 4
            },
            end: {
              line: 187,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 158,
              column: 4
            },
            end: {
              line: 187,
              column: 5
            }
          }, {
            start: {
              line: 158,
              column: 4
            },
            end: {
              line: 187,
              column: 5
            }
          }],
          line: 158
        },
        "8": {
          loc: {
            start: {
              line: 158,
              column: 8
            },
            end: {
              line: 158,
              column: 36
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 158,
              column: 8
            },
            end: {
              line: 158,
              column: 23
            }
          }, {
            start: {
              line: 158,
              column: 27
            },
            end: {
              line: 158,
              column: 36
            }
          }],
          line: 158
        },
        "9": {
          loc: {
            start: {
              line: 163,
              column: 6
            },
            end: {
              line: 165,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 163,
              column: 6
            },
            end: {
              line: 165,
              column: 7
            }
          }, {
            start: {
              line: 163,
              column: 6
            },
            end: {
              line: 165,
              column: 7
            }
          }],
          line: 163
        },
        "10": {
          loc: {
            start: {
              line: 169,
              column: 6
            },
            end: {
              line: 178,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 169,
              column: 6
            },
            end: {
              line: 178,
              column: 7
            }
          }, {
            start: {
              line: 169,
              column: 6
            },
            end: {
              line: 178,
              column: 7
            }
          }],
          line: 169
        },
        "11": {
          loc: {
            start: {
              line: 171,
              column: 13
            },
            end: {
              line: 178,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 171,
              column: 13
            },
            end: {
              line: 178,
              column: 7
            }
          }, {
            start: {
              line: 171,
              column: 13
            },
            end: {
              line: 178,
              column: 7
            }
          }],
          line: 171
        },
        "12": {
          loc: {
            start: {
              line: 175,
              column: 8
            },
            end: {
              line: 177,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 175,
              column: 8
            },
            end: {
              line: 177,
              column: 9
            }
          }, {
            start: {
              line: 175,
              column: 8
            },
            end: {
              line: 177,
              column: 9
            }
          }],
          line: 175
        },
        "13": {
          loc: {
            start: {
              line: 183,
              column: 6
            },
            end: {
              line: 185,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 183,
              column: 6
            },
            end: {
              line: 185,
              column: 7
            }
          }, {
            start: {
              line: 183,
              column: 6
            },
            end: {
              line: 185,
              column: 7
            }
          }],
          line: 183
        },
        "14": {
          loc: {
            start: {
              line: 193,
              column: 4
            },
            end: {
              line: 196,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 193,
              column: 4
            },
            end: {
              line: 196,
              column: 5
            }
          }, {
            start: {
              line: 193,
              column: 4
            },
            end: {
              line: 196,
              column: 5
            }
          }],
          line: 193
        },
        "15": {
          loc: {
            start: {
              line: 193,
              column: 8
            },
            end: {
              line: 194,
              column: 59
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 193,
              column: 8
            },
            end: {
              line: 193,
              column: 50
            }
          }, {
            start: {
              line: 194,
              column: 8
            },
            end: {
              line: 194,
              column: 59
            }
          }],
          line: 193
        },
        "16": {
          loc: {
            start: {
              line: 208,
              column: 4
            },
            end: {
              line: 210,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 208,
              column: 4
            },
            end: {
              line: 210,
              column: 5
            }
          }, {
            start: {
              line: 208,
              column: 4
            },
            end: {
              line: 210,
              column: 5
            }
          }],
          line: 208
        },
        "17": {
          loc: {
            start: {
              line: 208,
              column: 8
            },
            end: {
              line: 208,
              column: 122
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 208,
              column: 8
            },
            end: {
              line: 208,
              column: 30
            }
          }, {
            start: {
              line: 208,
              column: 34
            },
            end: {
              line: 208,
              column: 79
            }
          }, {
            start: {
              line: 208,
              column: 83
            },
            end: {
              line: 208,
              column: 122
            }
          }],
          line: 208
        },
        "18": {
          loc: {
            start: {
              line: 220,
              column: 4
            },
            end: {
              line: 222,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 220,
              column: 4
            },
            end: {
              line: 222,
              column: 5
            }
          }, {
            start: {
              line: 220,
              column: 4
            },
            end: {
              line: 222,
              column: 5
            }
          }],
          line: 220
        },
        "19": {
          loc: {
            start: {
              line: 224,
              column: 4
            },
            end: {
              line: 226,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 224,
              column: 4
            },
            end: {
              line: 226,
              column: 5
            }
          }, {
            start: {
              line: 224,
              column: 4
            },
            end: {
              line: 226,
              column: 5
            }
          }],
          line: 224
        },
        "20": {
          loc: {
            start: {
              line: 239,
              column: 4
            },
            end: {
              line: 242,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 239,
              column: 4
            },
            end: {
              line: 242,
              column: 5
            }
          }, {
            start: {
              line: 239,
              column: 4
            },
            end: {
              line: 242,
              column: 5
            }
          }],
          line: 239
        },
        "21": {
          loc: {
            start: {
              line: 247,
              column: 4
            },
            end: {
              line: 249,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 247,
              column: 4
            },
            end: {
              line: 249,
              column: 5
            }
          }, {
            start: {
              line: 247,
              column: 4
            },
            end: {
              line: 249,
              column: 5
            }
          }],
          line: 247
        },
        "22": {
          loc: {
            start: {
              line: 279,
              column: 4
            },
            end: {
              line: 285,
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
              line: 285,
              column: 5
            }
          }, {
            start: {
              line: 279,
              column: 4
            },
            end: {
              line: 285,
              column: 5
            }
          }],
          line: 279
        },
        "23": {
          loc: {
            start: {
              line: 282,
              column: 6
            },
            end: {
              line: 284,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 282,
              column: 6
            },
            end: {
              line: 284,
              column: 7
            }
          }, {
            start: {
              line: 282,
              column: 6
            },
            end: {
              line: 284,
              column: 7
            }
          }],
          line: 282
        },
        "24": {
          loc: {
            start: {
              line: 294,
              column: 4
            },
            end: {
              line: 305,
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
              line: 305,
              column: 5
            }
          }, {
            start: {
              line: 294,
              column: 4
            },
            end: {
              line: 305,
              column: 5
            }
          }],
          line: 294
        },
        "25": {
          loc: {
            start: {
              line: 296,
              column: 6
            },
            end: {
              line: 298,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 296,
              column: 6
            },
            end: {
              line: 298,
              column: 7
            }
          }, {
            start: {
              line: 296,
              column: 6
            },
            end: {
              line: 298,
              column: 7
            }
          }],
          line: 296
        },
        "26": {
          loc: {
            start: {
              line: 299,
              column: 11
            },
            end: {
              line: 305,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 299,
              column: 11
            },
            end: {
              line: 305,
              column: 5
            }
          }, {
            start: {
              line: 299,
              column: 11
            },
            end: {
              line: 305,
              column: 5
            }
          }],
          line: 299
        },
        "27": {
          loc: {
            start: {
              line: 301,
              column: 11
            },
            end: {
              line: 305,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 301,
              column: 11
            },
            end: {
              line: 305,
              column: 5
            }
          }, {
            start: {
              line: 301,
              column: 11
            },
            end: {
              line: 305,
              column: 5
            }
          }],
          line: 301
        },
        "28": {
          loc: {
            start: {
              line: 303,
              column: 11
            },
            end: {
              line: 305,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 303,
              column: 11
            },
            end: {
              line: 305,
              column: 5
            }
          }, {
            start: {
              line: 303,
              column: 11
            },
            end: {
              line: 305,
              column: 5
            }
          }],
          line: 303
        },
        "29": {
          loc: {
            start: {
              line: 316,
              column: 4
            },
            end: {
              line: 327,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 316,
              column: 4
            },
            end: {
              line: 327,
              column: 5
            }
          }, {
            start: {
              line: 316,
              column: 4
            },
            end: {
              line: 327,
              column: 5
            }
          }],
          line: 316
        },
        "30": {
          loc: {
            start: {
              line: 320,
              column: 13
            },
            end: {
              line: 320,
              column: 67
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 320,
              column: 13
            },
            end: {
              line: 320,
              column: 61
            }
          }, {
            start: {
              line: 320,
              column: 65
            },
            end: {
              line: 320,
              column: 67
            }
          }],
          line: 320
        },
        "31": {
          loc: {
            start: {
              line: 347,
              column: 4
            },
            end: {
              line: 351,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 347,
              column: 4
            },
            end: {
              line: 351,
              column: 5
            }
          }, {
            start: {
              line: 347,
              column: 4
            },
            end: {
              line: 351,
              column: 5
            }
          }],
          line: 347
        },
        "32": {
          loc: {
            start: {
              line: 364,
              column: 22
            },
            end: {
              line: 364,
              column: 64
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 364,
              column: 51
            },
            end: {
              line: 364,
              column: 57
            }
          }, {
            start: {
              line: 364,
              column: 60
            },
            end: {
              line: 364,
              column: 64
            }
          }],
          line: 364
        },
        "33": {
          loc: {
            start: {
              line: 366,
              column: 6
            },
            end: {
              line: 369,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 366,
              column: 6
            },
            end: {
              line: 369,
              column: 7
            }
          }, {
            start: {
              line: 366,
              column: 6
            },
            end: {
              line: 369,
              column: 7
            }
          }],
          line: 366
        },
        "34": {
          loc: {
            start: {
              line: 371,
              column: 6
            },
            end: {
              line: 376,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 371,
              column: 6
            },
            end: {
              line: 376,
              column: 7
            }
          }, {
            start: {
              line: 371,
              column: 6
            },
            end: {
              line: 376,
              column: 7
            }
          }],
          line: 371
        },
        "35": {
          loc: {
            start: {
              line: 372,
              column: 8
            },
            end: {
              line: 374,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 372,
              column: 8
            },
            end: {
              line: 374,
              column: 9
            }
          }, {
            start: {
              line: 372,
              column: 8
            },
            end: {
              line: 374,
              column: 9
            }
          }],
          line: 372
        },
        "36": {
          loc: {
            start: {
              line: 381,
              column: 4
            },
            end: {
              line: 384,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 381,
              column: 4
            },
            end: {
              line: 384,
              column: 5
            }
          }, {
            start: {
              line: 381,
              column: 4
            },
            end: {
              line: 384,
              column: 5
            }
          }],
          line: 381
        },
        "37": {
          loc: {
            start: {
              line: 381,
              column: 8
            },
            end: {
              line: 382,
              column: 60
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 381,
              column: 8
            },
            end: {
              line: 381,
              column: 13
            }
          }, {
            start: {
              line: 381,
              column: 18
            },
            end: {
              line: 381,
              column: 58
            }
          }, {
            start: {
              line: 382,
              column: 6
            },
            end: {
              line: 382,
              column: 28
            }
          }, {
            start: {
              line: 382,
              column: 32
            },
            end: {
              line: 382,
              column: 59
            }
          }],
          line: 381
        },
        "38": {
          loc: {
            start: {
              line: 395,
              column: 6
            },
            end: {
              line: 397,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 395,
              column: 6
            },
            end: {
              line: 397,
              column: 7
            }
          }, {
            start: {
              line: 395,
              column: 6
            },
            end: {
              line: 397,
              column: 7
            }
          }],
          line: 395
        },
        "39": {
          loc: {
            start: {
              line: 395,
              column: 10
            },
            end: {
              line: 395,
              column: 41
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 395,
              column: 10
            },
            end: {
              line: 395,
              column: 15
            }
          }, {
            start: {
              line: 395,
              column: 19
            },
            end: {
              line: 395,
              column: 41
            }
          }],
          line: 395
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
              line: 404,
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
              line: 404,
              column: 6
            },
            end: {
              line: 406,
              column: 7
            }
          }, {
            start: {
              line: 404,
              column: 6
            },
            end: {
              line: 406,
              column: 7
            }
          }],
          line: 404
        },
        "42": {
          loc: {
            start: {
              line: 408,
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
              line: 408,
              column: 6
            },
            end: {
              line: 412,
              column: 7
            }
          }, {
            start: {
              line: 408,
              column: 6
            },
            end: {
              line: 412,
              column: 7
            }
          }],
          line: 408
        },
        "43": {
          loc: {
            start: {
              line: 408,
              column: 10
            },
            end: {
              line: 410,
              column: 42
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 408,
              column: 10
            },
            end: {
              line: 408,
              column: 15
            }
          }, {
            start: {
              line: 408,
              column: 20
            },
            end: {
              line: 408,
              column: 42
            }
          }, {
            start: {
              line: 409,
              column: 10
            },
            end: {
              line: 409,
              column: 54
            }
          }, {
            start: {
              line: 409,
              column: 58
            },
            end: {
              line: 409,
              column: 80
            }
          }, {
            start: {
              line: 409,
              column: 84
            },
            end: {
              line: 409,
              column: 111
            }
          }, {
            start: {
              line: 410,
              column: 10
            },
            end: {
              line: 410,
              column: 42
            }
          }],
          line: 408
        },
        "44": {
          loc: {
            start: {
              line: 416,
              column: 6
            },
            end: {
              line: 418,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 416,
              column: 6
            },
            end: {
              line: 418,
              column: 7
            }
          }, {
            start: {
              line: 416,
              column: 6
            },
            end: {
              line: 418,
              column: 7
            }
          }],
          line: 416
        },
        "45": {
          loc: {
            start: {
              line: 422,
              column: 6
            },
            end: {
              line: 424,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 422,
              column: 6
            },
            end: {
              line: 424,
              column: 7
            }
          }, {
            start: {
              line: 422,
              column: 6
            },
            end: {
              line: 424,
              column: 7
            }
          }],
          line: 422
        },
        "46": {
          loc: {
            start: {
              line: 428,
              column: 6
            },
            end: {
              line: 430,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 428,
              column: 6
            },
            end: {
              line: 430,
              column: 7
            }
          }, {
            start: {
              line: 428,
              column: 6
            },
            end: {
              line: 430,
              column: 7
            }
          }],
          line: 428
        },
        "47": {
          loc: {
            start: {
              line: 443,
              column: 4
            },
            end: {
              line: 445,
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
              line: 445,
              column: 5
            }
          }, {
            start: {
              line: 443,
              column: 4
            },
            end: {
              line: 445,
              column: 5
            }
          }],
          line: 443
        },
        "48": {
          loc: {
            start: {
              line: 447,
              column: 11
            },
            end: {
              line: 447,
              column: 39
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 447,
              column: 11
            },
            end: {
              line: 447,
              column: 17
            }
          }, {
            start: {
              line: 447,
              column: 21
            },
            end: {
              line: 447,
              column: 39
            }
          }],
          line: 447
        },
        "49": {
          loc: {
            start: {
              line: 459,
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
              line: 459,
              column: 4
            },
            end: {
              line: 464,
              column: 5
            }
          }, {
            start: {
              line: 459,
              column: 4
            },
            end: {
              line: 464,
              column: 5
            }
          }],
          line: 459
        },
        "50": {
          loc: {
            start: {
              line: 459,
              column: 8
            },
            end: {
              line: 462,
              column: 90
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 460,
              column: 8
            },
            end: {
              line: 462,
              column: 54
            }
          }, {
            start: {
              line: 462,
              column: 57
            },
            end: {
              line: 462,
              column: 90
            }
          }],
          line: 459
        },
        "51": {
          loc: {
            start: {
              line: 460,
              column: 8
            },
            end: {
              line: 462,
              column: 54
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 460,
              column: 8
            },
            end: {
              line: 460,
              column: 37
            }
          }, {
            start: {
              line: 460,
              column: 41
            },
            end: {
              line: 460,
              column: 71
            }
          }, {
            start: {
              line: 461,
              column: 7
            },
            end: {
              line: 461,
              column: 41
            }
          }, {
            start: {
              line: 461,
              column: 45
            },
            end: {
              line: 461,
              column: 77
            }
          }, {
            start: {
              line: 462,
              column: 8
            },
            end: {
              line: 462,
              column: 53
            }
          }],
          line: 460
        },
        "52": {
          loc: {
            start: {
              line: 469,
              column: 4
            },
            end: {
              line: 471,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 469,
              column: 4
            },
            end: {
              line: 471,
              column: 5
            }
          }, {
            start: {
              line: 469,
              column: 4
            },
            end: {
              line: 471,
              column: 5
            }
          }],
          line: 469
        },
        "53": {
          loc: {
            start: {
              line: 469,
              column: 8
            },
            end: {
              line: 469,
              column: 61
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 469,
              column: 8
            },
            end: {
              line: 469,
              column: 21
            }
          }, {
            start: {
              line: 469,
              column: 25
            },
            end: {
              line: 469,
              column: 61
            }
          }],
          line: 469
        },
        "54": {
          loc: {
            start: {
              line: 476,
              column: 4
            },
            end: {
              line: 478,
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
              line: 478,
              column: 5
            }
          }, {
            start: {
              line: 476,
              column: 4
            },
            end: {
              line: 478,
              column: 5
            }
          }],
          line: 476
        },
        "55": {
          loc: {
            start: {
              line: 476,
              column: 8
            },
            end: {
              line: 476,
              column: 51
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 476,
              column: 8
            },
            end: {
              line: 476,
              column: 17
            }
          }, {
            start: {
              line: 476,
              column: 21
            },
            end: {
              line: 476,
              column: 51
            }
          }],
          line: 476
        },
        "56": {
          loc: {
            start: {
              line: 480,
              column: 4
            },
            end: {
              line: 488,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 480,
              column: 4
            },
            end: {
              line: 488,
              column: 5
            }
          }, {
            start: {
              line: 480,
              column: 4
            },
            end: {
              line: 488,
              column: 5
            }
          }],
          line: 480
        },
        "57": {
          loc: {
            start: {
              line: 480,
              column: 8
            },
            end: {
              line: 480,
              column: 98
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 480,
              column: 8
            },
            end: {
              line: 480,
              column: 17
            }
          }, {
            start: {
              line: 480,
              column: 21
            },
            end: {
              line: 480,
              column: 29
            }
          }, {
            start: {
              line: 480,
              column: 34
            },
            end: {
              line: 480,
              column: 64
            }
          }, {
            start: {
              line: 480,
              column: 68
            },
            end: {
              line: 480,
              column: 97
            }
          }],
          line: 480
        },
        "58": {
          loc: {
            start: {
              line: 481,
              column: 6
            },
            end: {
              line: 484,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 481,
              column: 6
            },
            end: {
              line: 484,
              column: 7
            }
          }, {
            start: {
              line: 481,
              column: 6
            },
            end: {
              line: 484,
              column: 7
            }
          }],
          line: 481
        },
        "59": {
          loc: {
            start: {
              line: 493,
              column: 4
            },
            end: {
              line: 495,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 493,
              column: 4
            },
            end: {
              line: 495,
              column: 5
            }
          }, {
            start: {
              line: 493,
              column: 4
            },
            end: {
              line: 495,
              column: 5
            }
          }],
          line: 493
        },
        "60": {
          loc: {
            start: {
              line: 499,
              column: 4
            },
            end: {
              line: 501,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 499,
              column: 4
            },
            end: {
              line: 501,
              column: 5
            }
          }, {
            start: {
              line: 499,
              column: 4
            },
            end: {
              line: 501,
              column: 5
            }
          }],
          line: 499
        },
        "61": {
          loc: {
            start: {
              line: 499,
              column: 8
            },
            end: {
              line: 499,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 499,
              column: 8
            },
            end: {
              line: 499,
              column: 40
            }
          }, {
            start: {
              line: 499,
              column: 44
            },
            end: {
              line: 499,
              column: 53
            }
          }],
          line: 499
        },
        "62": {
          loc: {
            start: {
              line: 503,
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
              line: 503,
              column: 4
            },
            end: {
              line: 505,
              column: 5
            }
          }, {
            start: {
              line: 503,
              column: 4
            },
            end: {
              line: 505,
              column: 5
            }
          }],
          line: 503
        },
        "63": {
          loc: {
            start: {
              line: 503,
              column: 8
            },
            end: {
              line: 503,
              column: 70
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 503,
              column: 8
            },
            end: {
              line: 503,
              column: 42
            }
          }, {
            start: {
              line: 503,
              column: 46
            },
            end: {
              line: 503,
              column: 70
            }
          }],
          line: 503
        },
        "64": {
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
        "201": 0
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
        "57": [0, 0, 0, 0],
        "58": [0, 0],
        "59": [0, 0],
        "60": [0, 0],
        "61": [0, 0],
        "62": [0, 0],
        "63": [0, 0],
        "64": [0, 0]
      },
      _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
      hash: "c6e488692152f3dce88dd0760719aa539a7b3d64"
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

  var NAME = (cov_1nq654px9y.s[0]++, 'dropdown');
  var VERSION = (cov_1nq654px9y.s[1]++, '4.4.1');
  var DATA_KEY = (cov_1nq654px9y.s[2]++, 'bs.dropdown');
  var EVENT_KEY = (cov_1nq654px9y.s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_1nq654px9y.s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_1nq654px9y.s[5]++, $.fn[NAME]);
  var ESCAPE_KEYCODE = (cov_1nq654px9y.s[6]++, 27); // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = (cov_1nq654px9y.s[7]++, 32); // KeyboardEvent.which value for space key

  var TAB_KEYCODE = (cov_1nq654px9y.s[8]++, 9); // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = (cov_1nq654px9y.s[9]++, 38); // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = (cov_1nq654px9y.s[10]++, 40); // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = (cov_1nq654px9y.s[11]++, 3); // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = (cov_1nq654px9y.s[12]++, new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE));
  var Event = (cov_1nq654px9y.s[13]++, {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY,
    KEYUP_DATA_API: "keyup" + EVENT_KEY + DATA_API_KEY
  });
  var ClassName = (cov_1nq654px9y.s[14]++, {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    POSITION_STATIC: 'position-static'
  });
  var Selector = (cov_1nq654px9y.s[15]++, {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
  });
  var AttachmentMap = (cov_1nq654px9y.s[16]++, {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
  });
  var Default = (cov_1nq654px9y.s[17]++, {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  });
  var DefaultType = (cov_1nq654px9y.s[18]++, {
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
      cov_1nq654px9y.f[0]++;
      cov_1nq654px9y.s[19]++;
      this._element = element;
      cov_1nq654px9y.s[20]++;
      this._popper = null;
      cov_1nq654px9y.s[21]++;
      this._config = this._getConfig(config);
      cov_1nq654px9y.s[22]++;
      this._menu = this._getMenuElement();
      cov_1nq654px9y.s[23]++;
      this._inNavbar = this._detectNavbar();
      cov_1nq654px9y.s[24]++;

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      cov_1nq654px9y.f[4]++;
      cov_1nq654px9y.s[28]++;

      if ((cov_1nq654px9y.b[1][0]++, this._element.disabled) || (cov_1nq654px9y.b[1][1]++, $(this._element).hasClass(ClassName.DISABLED))) {
        cov_1nq654px9y.b[0][0]++;
        cov_1nq654px9y.s[29]++;
        return;
      } else {
        cov_1nq654px9y.b[0][1]++;
      }

      var isActive = (cov_1nq654px9y.s[30]++, $(this._menu).hasClass(ClassName.SHOW));
      cov_1nq654px9y.s[31]++;

      Dropdown._clearMenus();

      cov_1nq654px9y.s[32]++;

      if (isActive) {
        cov_1nq654px9y.b[2][0]++;
        cov_1nq654px9y.s[33]++;
        return;
      } else {
        cov_1nq654px9y.b[2][1]++;
      }

      cov_1nq654px9y.s[34]++;
      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = (cov_1nq654px9y.b[3][0]++, false);
      }

      cov_1nq654px9y.f[5]++;
      cov_1nq654px9y.s[35]++;

      if ((cov_1nq654px9y.b[5][0]++, this._element.disabled) || (cov_1nq654px9y.b[5][1]++, $(this._element).hasClass(ClassName.DISABLED)) || (cov_1nq654px9y.b[5][2]++, $(this._menu).hasClass(ClassName.SHOW))) {
        cov_1nq654px9y.b[4][0]++;
        cov_1nq654px9y.s[36]++;
        return;
      } else {
        cov_1nq654px9y.b[4][1]++;
      }

      var relatedTarget = (cov_1nq654px9y.s[37]++, {
        relatedTarget: this._element
      });
      var showEvent = (cov_1nq654px9y.s[38]++, $.Event(Event.SHOW, relatedTarget));
      var parent = (cov_1nq654px9y.s[39]++, Dropdown._getParentFromElement(this._element));
      cov_1nq654px9y.s[40]++;
      $(parent).trigger(showEvent);
      cov_1nq654px9y.s[41]++;

      if (showEvent.isDefaultPrevented()) {
        cov_1nq654px9y.b[6][0]++;
        cov_1nq654px9y.s[42]++;
        return;
      } else {
        cov_1nq654px9y.b[6][1]++;
      } // Disable totally Popper.js for Dropdown in Navbar


      cov_1nq654px9y.s[43]++;

      if ((cov_1nq654px9y.b[8][0]++, !this._inNavbar) && (cov_1nq654px9y.b[8][1]++, usePopper)) {
        cov_1nq654px9y.b[7][0]++;
        cov_1nq654px9y.s[44]++;

        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          cov_1nq654px9y.b[9][0]++;
          cov_1nq654px9y.s[45]++;
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        } else {
          cov_1nq654px9y.b[9][1]++;
        }

        var referenceElement = (cov_1nq654px9y.s[46]++, this._element);
        cov_1nq654px9y.s[47]++;

        if (this._config.reference === 'parent') {
          cov_1nq654px9y.b[10][0]++;
          cov_1nq654px9y.s[48]++;
          referenceElement = parent;
        } else {
          cov_1nq654px9y.b[10][1]++;
          cov_1nq654px9y.s[49]++;

          if (Util.isElement(this._config.reference)) {
            cov_1nq654px9y.b[11][0]++;
            cov_1nq654px9y.s[50]++;
            referenceElement = this._config.reference; // Check if it's jQuery element

            cov_1nq654px9y.s[51]++;

            if (typeof this._config.reference.jquery !== 'undefined') {
              cov_1nq654px9y.b[12][0]++;
              cov_1nq654px9y.s[52]++;
              referenceElement = this._config.reference[0];
            } else {
              cov_1nq654px9y.b[12][1]++;
            }
          } else {
            cov_1nq654px9y.b[11][1]++;
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        cov_1nq654px9y.s[53]++;

        if (this._config.boundary !== 'scrollParent') {
          cov_1nq654px9y.b[13][0]++;
          cov_1nq654px9y.s[54]++;
          $(parent).addClass(ClassName.POSITION_STATIC);
        } else {
          cov_1nq654px9y.b[13][1]++;
        }

        cov_1nq654px9y.s[55]++;
        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } else {
        cov_1nq654px9y.b[7][1]++;
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      cov_1nq654px9y.s[56]++;

      if ((cov_1nq654px9y.b[15][0]++, 'ontouchstart' in document.documentElement) && (cov_1nq654px9y.b[15][1]++, $(parent).closest(Selector.NAVBAR_NAV).length === 0)) {
        cov_1nq654px9y.b[14][0]++;
        cov_1nq654px9y.s[57]++;
        $(document.body).children().on('mouseover', null, $.noop);
      } else {
        cov_1nq654px9y.b[14][1]++;
      }

      cov_1nq654px9y.s[58]++;

      this._element.focus();

      cov_1nq654px9y.s[59]++;

      this._element.setAttribute('aria-expanded', true);

      cov_1nq654px9y.s[60]++;
      $(this._menu).toggleClass(ClassName.SHOW);
      cov_1nq654px9y.s[61]++;
      $(parent).toggleClass(ClassName.SHOW).trigger($.Event(Event.SHOWN, relatedTarget));
    };

    _proto.hide = function hide() {
      cov_1nq654px9y.f[6]++;
      cov_1nq654px9y.s[62]++;

      if ((cov_1nq654px9y.b[17][0]++, this._element.disabled) || (cov_1nq654px9y.b[17][1]++, $(this._element).hasClass(ClassName.DISABLED)) || (cov_1nq654px9y.b[17][2]++, !$(this._menu).hasClass(ClassName.SHOW))) {
        cov_1nq654px9y.b[16][0]++;
        cov_1nq654px9y.s[63]++;
        return;
      } else {
        cov_1nq654px9y.b[16][1]++;
      }

      var relatedTarget = (cov_1nq654px9y.s[64]++, {
        relatedTarget: this._element
      });
      var hideEvent = (cov_1nq654px9y.s[65]++, $.Event(Event.HIDE, relatedTarget));
      var parent = (cov_1nq654px9y.s[66]++, Dropdown._getParentFromElement(this._element));
      cov_1nq654px9y.s[67]++;
      $(parent).trigger(hideEvent);
      cov_1nq654px9y.s[68]++;

      if (hideEvent.isDefaultPrevented()) {
        cov_1nq654px9y.b[18][0]++;
        cov_1nq654px9y.s[69]++;
        return;
      } else {
        cov_1nq654px9y.b[18][1]++;
      }

      cov_1nq654px9y.s[70]++;

      if (this._popper) {
        cov_1nq654px9y.b[19][0]++;
        cov_1nq654px9y.s[71]++;

        this._popper.destroy();
      } else {
        cov_1nq654px9y.b[19][1]++;
      }

      cov_1nq654px9y.s[72]++;
      $(this._menu).toggleClass(ClassName.SHOW);
      cov_1nq654px9y.s[73]++;
      $(parent).toggleClass(ClassName.SHOW).trigger($.Event(Event.HIDDEN, relatedTarget));
    };

    _proto.dispose = function dispose() {
      cov_1nq654px9y.f[7]++;
      cov_1nq654px9y.s[74]++;
      $.removeData(this._element, DATA_KEY);
      cov_1nq654px9y.s[75]++;
      $(this._element).off(EVENT_KEY);
      cov_1nq654px9y.s[76]++;
      this._element = null;
      cov_1nq654px9y.s[77]++;
      this._menu = null;
      cov_1nq654px9y.s[78]++;

      if (this._popper !== null) {
        cov_1nq654px9y.b[20][0]++;
        cov_1nq654px9y.s[79]++;

        this._popper.destroy();

        cov_1nq654px9y.s[80]++;
        this._popper = null;
      } else {
        cov_1nq654px9y.b[20][1]++;
      }
    };

    _proto.update = function update() {
      cov_1nq654px9y.f[8]++;
      cov_1nq654px9y.s[81]++;
      this._inNavbar = this._detectNavbar();
      cov_1nq654px9y.s[82]++;

      if (this._popper !== null) {
        cov_1nq654px9y.b[21][0]++;
        cov_1nq654px9y.s[83]++;

        this._popper.scheduleUpdate();
      } else {
        cov_1nq654px9y.b[21][1]++;
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      cov_1nq654px9y.f[9]++;
      cov_1nq654px9y.s[84]++;
      $(this._element).on(Event.CLICK, function (event) {
        cov_1nq654px9y.f[10]++;
        cov_1nq654px9y.s[85]++;
        event.preventDefault();
        cov_1nq654px9y.s[86]++;
        event.stopPropagation();
        cov_1nq654px9y.s[87]++;

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      cov_1nq654px9y.f[11]++;
      cov_1nq654px9y.s[88]++;
      config = _objectSpread2(_objectSpread2(_objectSpread2({}, this.constructor.Default), $(this._element).data()), config);
      cov_1nq654px9y.s[89]++;
      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      cov_1nq654px9y.s[90]++;
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      cov_1nq654px9y.f[12]++;
      cov_1nq654px9y.s[91]++;

      if (!this._menu) {
        cov_1nq654px9y.b[22][0]++;
        var parent = (cov_1nq654px9y.s[92]++, Dropdown._getParentFromElement(this._element));
        cov_1nq654px9y.s[93]++;

        if (parent) {
          cov_1nq654px9y.b[23][0]++;
          cov_1nq654px9y.s[94]++;
          this._menu = parent.querySelector(Selector.MENU);
        } else {
          cov_1nq654px9y.b[23][1]++;
        }
      } else {
        cov_1nq654px9y.b[22][1]++;
      }

      cov_1nq654px9y.s[95]++;
      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      cov_1nq654px9y.f[13]++;
      var $parentDropdown = (cov_1nq654px9y.s[96]++, $(this._element.parentNode));
      var placement = (cov_1nq654px9y.s[97]++, AttachmentMap.BOTTOM); // Handle dropup

      cov_1nq654px9y.s[98]++;

      if ($parentDropdown.hasClass(ClassName.DROPUP)) {
        cov_1nq654px9y.b[24][0]++;
        cov_1nq654px9y.s[99]++;
        placement = AttachmentMap.TOP;
        cov_1nq654px9y.s[100]++;

        if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
          cov_1nq654px9y.b[25][0]++;
          cov_1nq654px9y.s[101]++;
          placement = AttachmentMap.TOPEND;
        } else {
          cov_1nq654px9y.b[25][1]++;
        }
      } else {
        cov_1nq654px9y.b[24][1]++;
        cov_1nq654px9y.s[102]++;

        if ($parentDropdown.hasClass(ClassName.DROPRIGHT)) {
          cov_1nq654px9y.b[26][0]++;
          cov_1nq654px9y.s[103]++;
          placement = AttachmentMap.RIGHT;
        } else {
          cov_1nq654px9y.b[26][1]++;
          cov_1nq654px9y.s[104]++;

          if ($parentDropdown.hasClass(ClassName.DROPLEFT)) {
            cov_1nq654px9y.b[27][0]++;
            cov_1nq654px9y.s[105]++;
            placement = AttachmentMap.LEFT;
          } else {
            cov_1nq654px9y.b[27][1]++;
            cov_1nq654px9y.s[106]++;

            if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
              cov_1nq654px9y.b[28][0]++;
              cov_1nq654px9y.s[107]++;
              placement = AttachmentMap.BOTTOMEND;
            } else {
              cov_1nq654px9y.b[28][1]++;
            }
          }
        }
      }

      cov_1nq654px9y.s[108]++;
      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      cov_1nq654px9y.f[14]++;
      cov_1nq654px9y.s[109]++;
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      cov_1nq654px9y.f[15]++;
      var offset = (cov_1nq654px9y.s[110]++, {});
      cov_1nq654px9y.s[111]++;

      if (typeof this._config.offset === 'function') {
        cov_1nq654px9y.b[29][0]++;
        cov_1nq654px9y.s[112]++;

        offset.fn = function (data) {
          cov_1nq654px9y.f[16]++;
          cov_1nq654px9y.s[113]++;
          data.offsets = _objectSpread2(_objectSpread2({}, data.offsets), (cov_1nq654px9y.b[30][0]++, _this2._config.offset(data.offsets, _this2._element)) || (cov_1nq654px9y.b[30][1]++, {}));
          cov_1nq654px9y.s[114]++;
          return data;
        };
      } else {
        cov_1nq654px9y.b[29][1]++;
        cov_1nq654px9y.s[115]++;
        offset.offset = this._config.offset;
      }

      cov_1nq654px9y.s[116]++;
      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      cov_1nq654px9y.f[17]++;
      var popperConfig = (cov_1nq654px9y.s[117]++, {
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
      }); // Disable Popper.js if we have a static display

      cov_1nq654px9y.s[118]++;

      if (this._config.display === 'static') {
        cov_1nq654px9y.b[31][0]++;
        cov_1nq654px9y.s[119]++;
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      } else {
        cov_1nq654px9y.b[31][1]++;
      }

      cov_1nq654px9y.s[120]++;
      return _objectSpread2(_objectSpread2({}, popperConfig), this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      cov_1nq654px9y.f[18]++;
      cov_1nq654px9y.s[121]++;
      return this.each(function () {
        cov_1nq654px9y.f[19]++;
        var data = (cov_1nq654px9y.s[122]++, $(this).data(DATA_KEY));

        var _config = (cov_1nq654px9y.s[123]++, typeof config === 'object' ? (cov_1nq654px9y.b[32][0]++, config) : (cov_1nq654px9y.b[32][1]++, null));

        cov_1nq654px9y.s[124]++;

        if (!data) {
          cov_1nq654px9y.b[33][0]++;
          cov_1nq654px9y.s[125]++;
          data = new Dropdown(this, _config);
          cov_1nq654px9y.s[126]++;
          $(this).data(DATA_KEY, data);
        } else {
          cov_1nq654px9y.b[33][1]++;
        }

        cov_1nq654px9y.s[127]++;

        if (typeof config === 'string') {
          cov_1nq654px9y.b[34][0]++;
          cov_1nq654px9y.s[128]++;

          if (typeof data[config] === 'undefined') {
            cov_1nq654px9y.b[35][0]++;
            cov_1nq654px9y.s[129]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_1nq654px9y.b[35][1]++;
          }

          cov_1nq654px9y.s[130]++;
          data[config]();
        } else {
          cov_1nq654px9y.b[34][1]++;
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      cov_1nq654px9y.f[20]++;
      cov_1nq654px9y.s[131]++;

      if ((cov_1nq654px9y.b[37][0]++, event) && ((cov_1nq654px9y.b[37][1]++, event.which === RIGHT_MOUSE_BUTTON_WHICH) || (cov_1nq654px9y.b[37][2]++, event.type === 'keyup') && (cov_1nq654px9y.b[37][3]++, event.which !== TAB_KEYCODE))) {
        cov_1nq654px9y.b[36][0]++;
        cov_1nq654px9y.s[132]++;
        return;
      } else {
        cov_1nq654px9y.b[36][1]++;
      }

      var toggles = (cov_1nq654px9y.s[133]++, [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE)));
      cov_1nq654px9y.s[134]++;

      for (var i = (cov_1nq654px9y.s[135]++, 0), len = (cov_1nq654px9y.s[136]++, toggles.length); i < len; i++) {
        var parent = (cov_1nq654px9y.s[137]++, Dropdown._getParentFromElement(toggles[i]));
        var context = (cov_1nq654px9y.s[138]++, $(toggles[i]).data(DATA_KEY));
        var relatedTarget = (cov_1nq654px9y.s[139]++, {
          relatedTarget: toggles[i]
        });
        cov_1nq654px9y.s[140]++;

        if ((cov_1nq654px9y.b[39][0]++, event) && (cov_1nq654px9y.b[39][1]++, event.type === 'click')) {
          cov_1nq654px9y.b[38][0]++;
          cov_1nq654px9y.s[141]++;
          relatedTarget.clickEvent = event;
        } else {
          cov_1nq654px9y.b[38][1]++;
        }

        cov_1nq654px9y.s[142]++;

        if (!context) {
          cov_1nq654px9y.b[40][0]++;
          cov_1nq654px9y.s[143]++;
          continue;
        } else {
          cov_1nq654px9y.b[40][1]++;
        }

        var dropdownMenu = (cov_1nq654px9y.s[144]++, context._menu);
        cov_1nq654px9y.s[145]++;

        if (!$(parent).hasClass(ClassName.SHOW)) {
          cov_1nq654px9y.b[41][0]++;
          cov_1nq654px9y.s[146]++;
          continue;
        } else {
          cov_1nq654px9y.b[41][1]++;
        }

        cov_1nq654px9y.s[147]++;

        if ((cov_1nq654px9y.b[43][0]++, event) && ((cov_1nq654px9y.b[43][1]++, event.type === 'click') && (cov_1nq654px9y.b[43][2]++, /input|textarea/i.test(event.target.tagName)) || (cov_1nq654px9y.b[43][3]++, event.type === 'keyup') && (cov_1nq654px9y.b[43][4]++, event.which === TAB_KEYCODE)) && (cov_1nq654px9y.b[43][5]++, $.contains(parent, event.target))) {
          cov_1nq654px9y.b[42][0]++;
          cov_1nq654px9y.s[148]++;
          continue;
        } else {
          cov_1nq654px9y.b[42][1]++;
        }

        var hideEvent = (cov_1nq654px9y.s[149]++, $.Event(Event.HIDE, relatedTarget));
        cov_1nq654px9y.s[150]++;
        $(parent).trigger(hideEvent);
        cov_1nq654px9y.s[151]++;

        if (hideEvent.isDefaultPrevented()) {
          cov_1nq654px9y.b[44][0]++;
          cov_1nq654px9y.s[152]++;
          continue;
        } else {
          cov_1nq654px9y.b[44][1]++;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        cov_1nq654px9y.s[153]++;

        if ('ontouchstart' in document.documentElement) {
          cov_1nq654px9y.b[45][0]++;
          cov_1nq654px9y.s[154]++;
          $(document.body).children().off('mouseover', null, $.noop);
        } else {
          cov_1nq654px9y.b[45][1]++;
        }

        cov_1nq654px9y.s[155]++;
        toggles[i].setAttribute('aria-expanded', 'false');
        cov_1nq654px9y.s[156]++;

        if (context._popper) {
          cov_1nq654px9y.b[46][0]++;
          cov_1nq654px9y.s[157]++;

          context._popper.destroy();
        } else {
          cov_1nq654px9y.b[46][1]++;
        }

        cov_1nq654px9y.s[158]++;
        $(dropdownMenu).removeClass(ClassName.SHOW);
        cov_1nq654px9y.s[159]++;
        $(parent).removeClass(ClassName.SHOW).trigger($.Event(Event.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      cov_1nq654px9y.f[21]++;
      var parent;
      var selector = (cov_1nq654px9y.s[160]++, Util.getSelectorFromElement(element));
      cov_1nq654px9y.s[161]++;

      if (selector) {
        cov_1nq654px9y.b[47][0]++;
        cov_1nq654px9y.s[162]++;
        parent = document.querySelector(selector);
      } else {
        cov_1nq654px9y.b[47][1]++;
      }

      cov_1nq654px9y.s[163]++;
      return (cov_1nq654px9y.b[48][0]++, parent) || (cov_1nq654px9y.b[48][1]++, element.parentNode);
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      cov_1nq654px9y.f[22]++;
      cov_1nq654px9y.s[164]++;

      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? (cov_1nq654px9y.b[50][0]++, (cov_1nq654px9y.b[51][0]++, event.which === SPACE_KEYCODE) || (cov_1nq654px9y.b[51][1]++, event.which !== ESCAPE_KEYCODE) && ((cov_1nq654px9y.b[51][2]++, event.which !== ARROW_DOWN_KEYCODE) && (cov_1nq654px9y.b[51][3]++, event.which !== ARROW_UP_KEYCODE) || (cov_1nq654px9y.b[51][4]++, $(event.target).closest(Selector.MENU).length))) : (cov_1nq654px9y.b[50][1]++, !REGEXP_KEYDOWN.test(event.which))) {
        cov_1nq654px9y.b[49][0]++;
        cov_1nq654px9y.s[165]++;
        return;
      } else {
        cov_1nq654px9y.b[49][1]++;
      }

      cov_1nq654px9y.s[166]++;
      event.preventDefault();
      cov_1nq654px9y.s[167]++;
      event.stopPropagation();
      cov_1nq654px9y.s[168]++;

      if ((cov_1nq654px9y.b[53][0]++, this.disabled) || (cov_1nq654px9y.b[53][1]++, $(this).hasClass(ClassName.DISABLED))) {
        cov_1nq654px9y.b[52][0]++;
        cov_1nq654px9y.s[169]++;
        return;
      } else {
        cov_1nq654px9y.b[52][1]++;
      }

      var parent = (cov_1nq654px9y.s[170]++, Dropdown._getParentFromElement(this));
      var isActive = (cov_1nq654px9y.s[171]++, $(parent).hasClass(ClassName.SHOW));
      cov_1nq654px9y.s[172]++;

      if ((cov_1nq654px9y.b[55][0]++, !isActive) && (cov_1nq654px9y.b[55][1]++, event.which === ESCAPE_KEYCODE)) {
        cov_1nq654px9y.b[54][0]++;
        cov_1nq654px9y.s[173]++;
        return;
      } else {
        cov_1nq654px9y.b[54][1]++;
      }

      cov_1nq654px9y.s[174]++;

      if ((cov_1nq654px9y.b[57][0]++, !isActive) || (cov_1nq654px9y.b[57][1]++, isActive) && ((cov_1nq654px9y.b[57][2]++, event.which === ESCAPE_KEYCODE) || (cov_1nq654px9y.b[57][3]++, event.which === SPACE_KEYCODE))) {
        cov_1nq654px9y.b[56][0]++;
        cov_1nq654px9y.s[175]++;

        if (event.which === ESCAPE_KEYCODE) {
          cov_1nq654px9y.b[58][0]++;
          var toggle = (cov_1nq654px9y.s[176]++, parent.querySelector(Selector.DATA_TOGGLE));
          cov_1nq654px9y.s[177]++;
          $(toggle).trigger('focus');
        } else {
          cov_1nq654px9y.b[58][1]++;
        }

        cov_1nq654px9y.s[178]++;
        $(this).trigger('click');
        cov_1nq654px9y.s[179]++;
        return;
      } else {
        cov_1nq654px9y.b[56][1]++;
      }

      var items = (cov_1nq654px9y.s[180]++, [].slice.call(parent.querySelectorAll(Selector.VISIBLE_ITEMS)).filter(function (item) {
        cov_1nq654px9y.f[23]++;
        cov_1nq654px9y.s[181]++;
        return $(item).is(':visible');
      }));
      cov_1nq654px9y.s[182]++;

      if (items.length === 0) {
        cov_1nq654px9y.b[59][0]++;
        cov_1nq654px9y.s[183]++;
        return;
      } else {
        cov_1nq654px9y.b[59][1]++;
      }

      var index = (cov_1nq654px9y.s[184]++, items.indexOf(event.target));
      cov_1nq654px9y.s[185]++;

      if ((cov_1nq654px9y.b[61][0]++, event.which === ARROW_UP_KEYCODE) && (cov_1nq654px9y.b[61][1]++, index > 0)) {
        cov_1nq654px9y.b[60][0]++;
        cov_1nq654px9y.s[186]++;
        // Up
        index--;
      } else {
        cov_1nq654px9y.b[60][1]++;
      }

      cov_1nq654px9y.s[187]++;

      if ((cov_1nq654px9y.b[63][0]++, event.which === ARROW_DOWN_KEYCODE) && (cov_1nq654px9y.b[63][1]++, index < items.length - 1)) {
        cov_1nq654px9y.b[62][0]++;
        cov_1nq654px9y.s[188]++;
        // Down
        index++;
      } else {
        cov_1nq654px9y.b[62][1]++;
      }

      cov_1nq654px9y.s[189]++;

      if (index < 0) {
        cov_1nq654px9y.b[64][0]++;
        cov_1nq654px9y.s[190]++;
        index = 0;
      } else {
        cov_1nq654px9y.b[64][1]++;
      }

      cov_1nq654px9y.s[191]++;
      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        cov_1nq654px9y.f[1]++;
        cov_1nq654px9y.s[25]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_1nq654px9y.f[2]++;
        cov_1nq654px9y.s[26]++;
        return Default;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        cov_1nq654px9y.f[3]++;
        cov_1nq654px9y.s[27]++;
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


  cov_1nq654px9y.s[192]++;
  $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + " " + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    cov_1nq654px9y.f[24]++;
    cov_1nq654px9y.s[193]++;
    event.preventDefault();
    cov_1nq654px9y.s[194]++;
    event.stopPropagation();
    cov_1nq654px9y.s[195]++;

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
    cov_1nq654px9y.f[25]++;
    cov_1nq654px9y.s[196]++;
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  cov_1nq654px9y.s[197]++;
  $.fn[NAME] = Dropdown._jQueryInterface;
  cov_1nq654px9y.s[198]++;
  $.fn[NAME].Constructor = Dropdown;
  cov_1nq654px9y.s[199]++;

  $.fn[NAME].noConflict = function () {
    cov_1nq654px9y.f[26]++;
    cov_1nq654px9y.s[200]++;
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    cov_1nq654px9y.s[201]++;
    return Dropdown._jQueryInterface;
  };

  return Dropdown;

})));
//# sourceMappingURL=dropdown.js.map

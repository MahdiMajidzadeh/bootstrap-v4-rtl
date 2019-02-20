/*!
  * Bootstrap carousel.js v4.3.1-0 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2019 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/data.js'), require('./dom/eventHandler.js'), require('./dom/manipulator.js'), require('./dom/selectorEngine.js'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['./dom/data.js', './dom/eventHandler.js', './dom/manipulator.js', './dom/selectorEngine.js', './util.js'], factory) :
  (global = global || self, global.Carousel = factory(global.Data, global.EventHandler, global.Manipulator, global.SelectorEngine, global.Util));
}(this, function (Data, EventHandler, Manipulator, SelectorEngine, Util) { 'use strict';

  Data = Data && Data.hasOwnProperty('default') ? Data['default'] : Data;
  EventHandler = EventHandler && EventHandler.hasOwnProperty('default') ? EventHandler['default'] : EventHandler;
  Manipulator = Manipulator && Manipulator.hasOwnProperty('default') ? Manipulator['default'] : Manipulator;
  SelectorEngine = SelectorEngine && SelectorEngine.hasOwnProperty('default') ? SelectorEngine['default'] : SelectorEngine;
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

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  var cov_1qrssl00mz = function () {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/carousel.js";
    var hash = "ec02a45e349a062590ddd6d5f724cd391369cae1";

    var Function = function () {}.constructor;

    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/carousel.js",
      statementMap: {
        "0": {
          start: {
            line: 20,
            column: 31
          },
          end: {
            line: 20,
            column: 41
          }
        },
        "1": {
          start: {
            line: 21,
            column: 31
          },
          end: {
            line: 21,
            column: 38
          }
        },
        "2": {
          start: {
            line: 22,
            column: 31
          },
          end: {
            line: 22,
            column: 44
          }
        },
        "3": {
          start: {
            line: 23,
            column: 31
          },
          end: {
            line: 23,
            column: 45
          }
        },
        "4": {
          start: {
            line: 24,
            column: 31
          },
          end: {
            line: 24,
            column: 42
          }
        },
        "5": {
          start: {
            line: 25,
            column: 31
          },
          end: {
            line: 25,
            column: 33
          }
        },
        "6": {
          start: {
            line: 26,
            column: 31
          },
          end: {
            line: 26,
            column: 33
          }
        },
        "7": {
          start: {
            line: 27,
            column: 31
          },
          end: {
            line: 27,
            column: 34
          }
        },
        "8": {
          start: {
            line: 28,
            column: 31
          },
          end: {
            line: 28,
            column: 33
          }
        },
        "9": {
          start: {
            line: 30,
            column: 16
          },
          end: {
            line: 37,
            column: 1
          }
        },
        "10": {
          start: {
            line: 39,
            column: 20
          },
          end: {
            line: 46,
            column: 1
          }
        },
        "11": {
          start: {
            line: 48,
            column: 18
          },
          end: {
            line: 53,
            column: 1
          }
        },
        "12": {
          start: {
            line: 55,
            column: 14
          },
          end: {
            line: 69,
            column: 1
          }
        },
        "13": {
          start: {
            line: 71,
            column: 18
          },
          end: {
            line: 81,
            column: 1
          }
        },
        "14": {
          start: {
            line: 83,
            column: 17
          },
          end: {
            line: 92,
            column: 1
          }
        },
        "15": {
          start: {
            line: 94,
            column: 20
          },
          end: {
            line: 97,
            column: 1
          }
        },
        "16": {
          start: {
            line: 106,
            column: 4
          },
          end: {
            line: 106,
            column: 30
          }
        },
        "17": {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 107,
            column: 30
          }
        },
        "18": {
          start: {
            line: 108,
            column: 4
          },
          end: {
            line: 108,
            column: 30
          }
        },
        "19": {
          start: {
            line: 109,
            column: 4
          },
          end: {
            line: 109,
            column: 31
          }
        },
        "20": {
          start: {
            line: 110,
            column: 4
          },
          end: {
            line: 110,
            column: 31
          }
        },
        "21": {
          start: {
            line: 111,
            column: 4
          },
          end: {
            line: 111,
            column: 30
          }
        },
        "22": {
          start: {
            line: 112,
            column: 4
          },
          end: {
            line: 112,
            column: 27
          }
        },
        "23": {
          start: {
            line: 113,
            column: 4
          },
          end: {
            line: 113,
            column: 27
          }
        },
        "24": {
          start: {
            line: 115,
            column: 4
          },
          end: {
            line: 115,
            column: 53
          }
        },
        "25": {
          start: {
            line: 116,
            column: 4
          },
          end: {
            line: 116,
            column: 37
          }
        },
        "26": {
          start: {
            line: 117,
            column: 4
          },
          end: {
            line: 117,
            column: 88
          }
        },
        "27": {
          start: {
            line: 118,
            column: 4
          },
          end: {
            line: 118,
            column: 104
          }
        },
        "28": {
          start: {
            line: 119,
            column: 4
          },
          end: {
            line: 119,
            column: 83
          }
        },
        "29": {
          start: {
            line: 121,
            column: 4
          },
          end: {
            line: 121,
            column: 29
          }
        },
        "30": {
          start: {
            line: 122,
            column: 4
          },
          end: {
            line: 122,
            column: 41
          }
        },
        "31": {
          start: {
            line: 128,
            column: 4
          },
          end: {
            line: 128,
            column: 18
          }
        },
        "32": {
          start: {
            line: 132,
            column: 4
          },
          end: {
            line: 132,
            column: 18
          }
        },
        "33": {
          start: {
            line: 138,
            column: 4
          },
          end: {
            line: 140,
            column: 5
          }
        },
        "34": {
          start: {
            line: 139,
            column: 6
          },
          end: {
            line: 139,
            column: 33
          }
        },
        "35": {
          start: {
            line: 146,
            column: 4
          },
          end: {
            line: 148,
            column: 5
          }
        },
        "36": {
          start: {
            line: 147,
            column: 6
          },
          end: {
            line: 147,
            column: 17
          }
        },
        "37": {
          start: {
            line: 152,
            column: 4
          },
          end: {
            line: 154,
            column: 5
          }
        },
        "38": {
          start: {
            line: 153,
            column: 6
          },
          end: {
            line: 153,
            column: 33
          }
        },
        "39": {
          start: {
            line: 158,
            column: 4
          },
          end: {
            line: 160,
            column: 5
          }
        },
        "40": {
          start: {
            line: 159,
            column: 6
          },
          end: {
            line: 159,
            column: 27
          }
        },
        "41": {
          start: {
            line: 162,
            column: 4
          },
          end: {
            line: 165,
            column: 5
          }
        },
        "42": {
          start: {
            line: 163,
            column: 6
          },
          end: {
            line: 163,
            column: 46
          }
        },
        "43": {
          start: {
            line: 164,
            column: 6
          },
          end: {
            line: 164,
            column: 22
          }
        },
        "44": {
          start: {
            line: 167,
            column: 4
          },
          end: {
            line: 167,
            column: 33
          }
        },
        "45": {
          start: {
            line: 168,
            column: 4
          },
          end: {
            line: 168,
            column: 25
          }
        },
        "46": {
          start: {
            line: 172,
            column: 4
          },
          end: {
            line: 174,
            column: 5
          }
        },
        "47": {
          start: {
            line: 173,
            column: 6
          },
          end: {
            line: 173,
            column: 28
          }
        },
        "48": {
          start: {
            line: 176,
            column: 4
          },
          end: {
            line: 179,
            column: 5
          }
        },
        "49": {
          start: {
            line: 177,
            column: 6
          },
          end: {
            line: 177,
            column: 35
          }
        },
        "50": {
          start: {
            line: 178,
            column: 6
          },
          end: {
            line: 178,
            column: 27
          }
        },
        "51": {
          start: {
            line: 181,
            column: 4
          },
          end: {
            line: 186,
            column: 5
          }
        },
        "52": {
          start: {
            line: 182,
            column: 6
          },
          end: {
            line: 185,
            column: 7
          }
        },
        "53": {
          start: {
            line: 190,
            column: 4
          },
          end: {
            line: 190,
            column: 85
          }
        },
        "54": {
          start: {
            line: 191,
            column: 24
          },
          end: {
            line: 191,
            column: 63
          }
        },
        "55": {
          start: {
            line: 193,
            column: 4
          },
          end: {
            line: 195,
            column: 5
          }
        },
        "56": {
          start: {
            line: 194,
            column: 6
          },
          end: {
            line: 194,
            column: 12
          }
        },
        "57": {
          start: {
            line: 197,
            column: 4
          },
          end: {
            line: 200,
            column: 5
          }
        },
        "58": {
          start: {
            line: 198,
            column: 6
          },
          end: {
            line: 198,
            column: 71
          }
        },
        "59": {
          start: {
            line: 198,
            column: 56
          },
          end: {
            line: 198,
            column: 70
          }
        },
        "60": {
          start: {
            line: 199,
            column: 6
          },
          end: {
            line: 199,
            column: 12
          }
        },
        "61": {
          start: {
            line: 202,
            column: 4
          },
          end: {
            line: 206,
            column: 5
          }
        },
        "62": {
          start: {
            line: 203,
            column: 6
          },
          end: {
            line: 203,
            column: 18
          }
        },
        "63": {
          start: {
            line: 204,
            column: 6
          },
          end: {
            line: 204,
            column: 18
          }
        },
        "64": {
          start: {
            line: 205,
            column: 6
          },
          end: {
            line: 205,
            column: 12
          }
        },
        "65": {
          start: {
            line: 208,
            column: 22
          },
          end: {
            line: 210,
            column: 22
          }
        },
        "66": {
          start: {
            line: 212,
            column: 4
          },
          end: {
            line: 212,
            column: 46
          }
        },
        "67": {
          start: {
            line: 216,
            column: 4
          },
          end: {
            line: 216,
            column: 46
          }
        },
        "68": {
          start: {
            line: 217,
            column: 4
          },
          end: {
            line: 217,
            column: 44
          }
        },
        "69": {
          start: {
            line: 219,
            column: 4
          },
          end: {
            line: 219,
            column: 34
          }
        },
        "70": {
          start: {
            line: 220,
            column: 4
          },
          end: {
            line: 220,
            column: 34
          }
        },
        "71": {
          start: {
            line: 221,
            column: 4
          },
          end: {
            line: 221,
            column: 34
          }
        },
        "72": {
          start: {
            line: 222,
            column: 4
          },
          end: {
            line: 222,
            column: 34
          }
        },
        "73": {
          start: {
            line: 223,
            column: 4
          },
          end: {
            line: 223,
            column: 34
          }
        },
        "74": {
          start: {
            line: 224,
            column: 4
          },
          end: {
            line: 224,
            column: 34
          }
        },
        "75": {
          start: {
            line: 225,
            column: 4
          },
          end: {
            line: 225,
            column: 34
          }
        },
        "76": {
          start: {
            line: 226,
            column: 4
          },
          end: {
            line: 226,
            column: 34
          }
        },
        "77": {
          start: {
            line: 232,
            column: 4
          },
          end: {
            line: 235,
            column: 5
          }
        },
        "78": {
          start: {
            line: 236,
            column: 4
          },
          end: {
            line: 236,
            column: 51
          }
        },
        "79": {
          start: {
            line: 237,
            column: 4
          },
          end: {
            line: 237,
            column: 17
          }
        },
        "80": {
          start: {
            line: 241,
            column: 22
          },
          end: {
            line: 241,
            column: 48
          }
        },
        "81": {
          start: {
            line: 243,
            column: 4
          },
          end: {
            line: 245,
            column: 5
          }
        },
        "82": {
          start: {
            line: 244,
            column: 6
          },
          end: {
            line: 244,
            column: 12
          }
        },
        "83": {
          start: {
            line: 247,
            column: 22
          },
          end: {
            line: 247,
            column: 50
          }
        },
        "84": {
          start: {
            line: 250,
            column: 4
          },
          end: {
            line: 252,
            column: 5
          }
        },
        "85": {
          start: {
            line: 251,
            column: 6
          },
          end: {
            line: 251,
            column: 17
          }
        },
        "86": {
          start: {
            line: 255,
            column: 4
          },
          end: {
            line: 257,
            column: 5
          }
        },
        "87": {
          start: {
            line: 256,
            column: 6
          },
          end: {
            line: 256,
            column: 17
          }
        },
        "88": {
          start: {
            line: 261,
            column: 4
          },
          end: {
            line: 264,
            column: 5
          }
        },
        "89": {
          start: {
            line: 262,
            column: 6
          },
          end: {
            line: 263,
            column: 74
          }
        },
        "90": {
          start: {
            line: 263,
            column: 53
          },
          end: {
            line: 263,
            column: 73
          }
        },
        "91": {
          start: {
            line: 266,
            column: 4
          },
          end: {
            line: 271,
            column: 5
          }
        },
        "92": {
          start: {
            line: 267,
            column: 6
          },
          end: {
            line: 268,
            column: 74
          }
        },
        "93": {
          start: {
            line: 268,
            column: 56
          },
          end: {
            line: 268,
            column: 73
          }
        },
        "94": {
          start: {
            line: 269,
            column: 6
          },
          end: {
            line: 270,
            column: 74
          }
        },
        "95": {
          start: {
            line: 270,
            column: 56
          },
          end: {
            line: 270,
            column: 73
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
            column: 40
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
            column: 51
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
            column: 70
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
            column: 59
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
            line: 325,
            column: 6
          }
        },
        "120": {
          start: {
            line: 324,
            column: 6
          },
          end: {
            line: 324,
            column: 75
          }
        },
        "121": {
          start: {
            line: 324,
            column: 56
          },
          end: {
            line: 324,
            column: 74
          }
        },
        "122": {
          start: {
            line: 327,
            column: 4
          },
          end: {
            line: 336,
            column: 5
          }
        },
        "123": {
          start: {
            line: 328,
            column: 6
          },
          end: {
            line: 328,
            column: 80
          }
        },
        "124": {
          start: {
            line: 328,
            column: 67
          },
          end: {
            line: 328,
            column: 79
          }
        },
        "125": {
          start: {
            line: 329,
            column: 6
          },
          end: {
            line: 329,
            column: 76
          }
        },
        "126": {
          start: {
            line: 329,
            column: 65
          },
          end: {
            line: 329,
            column: 75
          }
        },
        "127": {
          start: {
            line: 331,
            column: 6
          },
          end: {
            line: 331,
            column: 58
          }
        },
        "128": {
          start: {
            line: 333,
            column: 6
          },
          end: {
            line: 333,
            column: 79
          }
        },
        "129": {
          start: {
            line: 333,
            column: 66
          },
          end: {
            line: 333,
            column: 78
          }
        },
        "130": {
          start: {
            line: 334,
            column: 6
          },
          end: {
            line: 334,
            column: 77
          }
        },
        "131": {
          start: {
            line: 334,
            column: 65
          },
          end: {
            line: 334,
            column: 76
          }
        },
        "132": {
          start: {
            line: 335,
            column: 6
          },
          end: {
            line: 335,
            column: 75
          }
        },
        "133": {
          start: {
            line: 335,
            column: 64
          },
          end: {
            line: 335,
            column: 74
          }
        },
        "134": {
          start: {
            line: 340,
            column: 4
          },
          end: {
            line: 342,
            column: 5
          }
        },
        "135": {
          start: {
            line: 341,
            column: 6
          },
          end: {
            line: 341,
            column: 12
          }
        },
        "136": {
          start: {
            line: 344,
            column: 4
          },
          end: {
            line: 354,
            column: 5
          }
        },
        "137": {
          start: {
            line: 346,
            column: 8
          },
          end: {
            line: 346,
            column: 30
          }
        },
        "138": {
          start: {
            line: 347,
            column: 8
          },
          end: {
            line: 347,
            column: 19
          }
        },
        "139": {
          start: {
            line: 348,
            column: 8
          },
          end: {
            line: 348,
            column: 13
          }
        },
        "140": {
          start: {
            line: 350,
            column: 8
          },
          end: {
            line: 350,
            column: 30
          }
        },
        "141": {
          start: {
            line: 351,
            column: 8
          },
          end: {
            line: 351,
            column: 19
          }
        },
        "142": {
          start: {
            line: 352,
            column: 8
          },
          end: {
            line: 352,
            column: 13
          }
        },
        "143": {
          start: {
            line: 358,
            column: 4
          },
          end: {
            line: 360,
            column: 10
          }
        },
        "144": {
          start: {
            line: 362,
            column: 4
          },
          end: {
            line: 362,
            column: 39
          }
        },
        "145": {
          start: {
            line: 366,
            column: 28
          },
          end: {
            line: 366,
            column: 56
          }
        },
        "146": {
          start: {
            line: 367,
            column: 28
          },
          end: {
            line: 367,
            column: 56
          }
        },
        "147": {
          start: {
            line: 368,
            column: 28
          },
          end: {
            line: 368,
            column: 61
          }
        },
        "148": {
          start: {
            line: 369,
            column: 28
          },
          end: {
            line: 369,
            column: 50
          }
        },
        "149": {
          start: {
            line: 370,
            column: 28
          },
          end: {
            line: 371,
            column: 76
          }
        },
        "150": {
          start: {
            line: 373,
            column: 4
          },
          end: {
            line: 375,
            column: 5
          }
        },
        "151": {
          start: {
            line: 374,
            column: 6
          },
          end: {
            line: 374,
            column: 26
          }
        },
        "152": {
          start: {
            line: 377,
            column: 22
          },
          end: {
            line: 377,
            column: 59
          }
        },
        "153": {
          start: {
            line: 378,
            column: 22
          },
          end: {
            line: 378,
            column: 64
          }
        },
        "154": {
          start: {
            line: 380,
            column: 4
          },
          end: {
            line: 381,
            column: 68
          }
        },
        "155": {
          start: {
            line: 385,
            column: 24
          },
          end: {
            line: 385,
            column: 57
          }
        },
        "156": {
          start: {
            line: 386,
            column: 22
          },
          end: {
            line: 386,
            column: 101
          }
        },
        "157": {
          start: {
            line: 388,
            column: 4
          },
          end: {
            line: 393,
            column: 6
          }
        },
        "158": {
          start: {
            line: 397,
            column: 4
          },
          end: {
            line: 410,
            column: 5
          }
        },
        "159": {
          start: {
            line: 398,
            column: 25
          },
          end: {
            line: 398,
            column: 86
          }
        },
        "160": {
          start: {
            line: 399,
            column: 6
          },
          end: {
            line: 401,
            column: 7
          }
        },
        "161": {
          start: {
            line: 399,
            column: 19
          },
          end: {
            line: 399,
            column: 20
          }
        },
        "162": {
          start: {
            line: 400,
            column: 8
          },
          end: {
            line: 400,
            column: 56
          }
        },
        "163": {
          start: {
            line: 403,
            column: 28
          },
          end: {
            line: 405,
            column: 7
          }
        },
        "164": {
          start: {
            line: 407,
            column: 6
          },
          end: {
            line: 409,
            column: 7
          }
        },
        "165": {
          start: {
            line: 408,
            column: 8
          },
          end: {
            line: 408,
            column: 53
          }
        },
        "166": {
          start: {
            line: 414,
            column: 26
          },
          end: {
            line: 414,
            column: 85
          }
        },
        "167": {
          start: {
            line: 415,
            column: 31
          },
          end: {
            line: 415,
            column: 64
          }
        },
        "168": {
          start: {
            line: 416,
            column: 26
          },
          end: {
            line: 417,
            column: 56
          }
        },
        "169": {
          start: {
            line: 419,
            column: 29
          },
          end: {
            line: 419,
            column: 60
          }
        },
        "170": {
          start: {
            line: 420,
            column: 22
          },
          end: {
            line: 420,
            column: 45
          }
        },
        "171": {
          start: {
            line: 426,
            column: 4
          },
          end: {
            line: 434,
            column: 5
          }
        },
        "172": {
          start: {
            line: 427,
            column: 6
          },
          end: {
            line: 427,
            column: 43
          }
        },
        "173": {
          start: {
            line: 428,
            column: 6
          },
          end: {
            line: 428,
            column: 37
          }
        },
        "174": {
          start: {
            line: 429,
            column: 6
          },
          end: {
            line: 429,
            column: 41
          }
        },
        "175": {
          start: {
            line: 431,
            column: 6
          },
          end: {
            line: 431,
            column: 44
          }
        },
        "176": {
          start: {
            line: 432,
            column: 6
          },
          end: {
            line: 432,
            column: 37
          }
        },
        "177": {
          start: {
            line: 433,
            column: 6
          },
          end: {
            line: 433,
            column: 42
          }
        },
        "178": {
          start: {
            line: 436,
            column: 4
          },
          end: {
            line: 439,
            column: 5
          }
        },
        "179": {
          start: {
            line: 437,
            column: 6
          },
          end: {
            line: 437,
            column: 29
          }
        },
        "180": {
          start: {
            line: 438,
            column: 6
          },
          end: {
            line: 438,
            column: 12
          }
        },
        "181": {
          start: {
            line: 441,
            column: 23
          },
          end: {
            line: 441,
            column: 79
          }
        },
        "182": {
          start: {
            line: 442,
            column: 4
          },
          end: {
            line: 444,
            column: 5
          }
        },
        "183": {
          start: {
            line: 443,
            column: 6
          },
          end: {
            line: 443,
            column: 12
          }
        },
        "184": {
          start: {
            line: 446,
            column: 4
          },
          end: {
            line: 449,
            column: 5
          }
        },
        "185": {
          start: {
            line: 448,
            column: 6
          },
          end: {
            line: 448,
            column: 12
          }
        },
        "186": {
          start: {
            line: 451,
            column: 4
          },
          end: {
            line: 451,
            column: 26
          }
        },
        "187": {
          start: {
            line: 453,
            column: 4
          },
          end: {
            line: 455,
            column: 5
          }
        },
        "188": {
          start: {
            line: 454,
            column: 6
          },
          end: {
            line: 454,
            column: 18
          }
        },
        "189": {
          start: {
            line: 457,
            column: 4
          },
          end: {
            line: 457,
            column: 48
          }
        },
        "190": {
          start: {
            line: 459,
            column: 4
          },
          end: {
            line: 511,
            column: 5
          }
        },
        "191": {
          start: {
            line: 460,
            column: 6
          },
          end: {
            line: 460,
            column: 47
          }
        },
        "192": {
          start: {
            line: 462,
            column: 6
          },
          end: {
            line: 462,
            column: 30
          }
        },
        "193": {
          start: {
            line: 464,
            column: 6
          },
          end: {
            line: 464,
            column: 55
          }
        },
        "194": {
          start: {
            line: 465,
            column: 6
          },
          end: {
            line: 465,
            column: 53
          }
        },
        "195": {
          start: {
            line: 467,
            column: 34
          },
          end: {
            line: 467,
            column: 89
          }
        },
        "196": {
          start: {
            line: 468,
            column: 6
          },
          end: {
            line: 473,
            column: 7
          }
        },
        "197": {
          start: {
            line: 469,
            column: 8
          },
          end: {
            line: 469,
            column: 92
          }
        },
        "198": {
          start: {
            line: 470,
            column: 8
          },
          end: {
            line: 470,
            column: 51
          }
        },
        "199": {
          start: {
            line: 472,
            column: 8
          },
          end: {
            line: 472,
            column: 85
          }
        },
        "200": {
          start: {
            line: 475,
            column: 33
          },
          end: {
            line: 475,
            column: 85
          }
        },
        "201": {
          start: {
            line: 477,
            column: 6
          },
          end: {
            line: 497,
            column: 10
          }
        },
        "202": {
          start: {
            line: 479,
            column: 10
          },
          end: {
            line: 479,
            column: 60
          }
        },
        "203": {
          start: {
            line: 480,
            column: 10
          },
          end: {
            line: 480,
            column: 54
          }
        },
        "204": {
          start: {
            line: 481,
            column: 10
          },
          end: {
            line: 481,
            column: 53
          }
        },
        "205": {
          start: {
            line: 483,
            column: 10
          },
          end: {
            line: 483,
            column: 58
          }
        },
        "206": {
          start: {
            line: 484,
            column: 10
          },
          end: {
            line: 484,
            column: 56
          }
        },
        "207": {
          start: {
            line: 485,
            column: 10
          },
          end: {
            line: 485,
            column: 62
          }
        },
        "208": {
          start: {
            line: 487,
            column: 10
          },
          end: {
            line: 487,
            column: 33
          }
        },
        "209": {
          start: {
            line: 489,
            column: 10
          },
          end: {
            line: 496,
            column: 15
          }
        },
        "210": {
          start: {
            line: 490,
            column: 12
          },
          end: {
            line: 495,
            column: 14
          }
        },
        "211": {
          start: {
            line: 499,
            column: 6
          },
          end: {
            line: 499,
            column: 66
          }
        },
        "212": {
          start: {
            line: 501,
            column: 6
          },
          end: {
            line: 501,
            column: 54
          }
        },
        "213": {
          start: {
            line: 502,
            column: 6
          },
          end: {
            line: 502,
            column: 49
          }
        },
        "214": {
          start: {
            line: 504,
            column: 6
          },
          end: {
            line: 504,
            column: 29
          }
        },
        "215": {
          start: {
            line: 505,
            column: 6
          },
          end: {
            line: 510,
            column: 8
          }
        },
        "216": {
          start: {
            line: 513,
            column: 4
          },
          end: {
            line: 515,
            column: 5
          }
        },
        "217": {
          start: {
            line: 514,
            column: 6
          },
          end: {
            line: 514,
            column: 18
          }
        },
        "218": {
          start: {
            line: 521,
            column: 18
          },
          end: {
            line: 521,
            column: 49
          }
        },
        "219": {
          start: {
            line: 522,
            column: 18
          },
          end: {
            line: 525,
            column: 5
          }
        },
        "220": {
          start: {
            line: 527,
            column: 4
          },
          end: {
            line: 532,
            column: 5
          }
        },
        "221": {
          start: {
            line: 528,
            column: 6
          },
          end: {
            line: 531,
            column: 7
          }
        },
        "222": {
          start: {
            line: 534,
            column: 19
          },
          end: {
            line: 534,
            column: 70
          }
        },
        "223": {
          start: {
            line: 536,
            column: 4
          },
          end: {
            line: 538,
            column: 5
          }
        },
        "224": {
          start: {
            line: 537,
            column: 6
          },
          end: {
            line: 537,
            column: 43
          }
        },
        "225": {
          start: {
            line: 540,
            column: 4
          },
          end: {
            line: 550,
            column: 5
          }
        },
        "226": {
          start: {
            line: 541,
            column: 6
          },
          end: {
            line: 541,
            column: 21
          }
        },
        "227": {
          start: {
            line: 542,
            column: 11
          },
          end: {
            line: 550,
            column: 5
          }
        },
        "228": {
          start: {
            line: 543,
            column: 6
          },
          end: {
            line: 545,
            column: 7
          }
        },
        "229": {
          start: {
            line: 544,
            column: 8
          },
          end: {
            line: 544,
            column: 54
          }
        },
        "230": {
          start: {
            line: 546,
            column: 6
          },
          end: {
            line: 546,
            column: 20
          }
        },
        "231": {
          start: {
            line: 547,
            column: 11
          },
          end: {
            line: 550,
            column: 5
          }
        },
        "232": {
          start: {
            line: 548,
            column: 6
          },
          end: {
            line: 548,
            column: 18
          }
        },
        "233": {
          start: {
            line: 549,
            column: 6
          },
          end: {
            line: 549,
            column: 18
          }
        },
        "234": {
          start: {
            line: 554,
            column: 4
          },
          end: {
            line: 556,
            column: 6
          }
        },
        "235": {
          start: {
            line: 555,
            column: 6
          },
          end: {
            line: 555,
            column: 47
          }
        },
        "236": {
          start: {
            line: 560,
            column: 21
          },
          end: {
            line: 560,
            column: 54
          }
        },
        "237": {
          start: {
            line: 562,
            column: 4
          },
          end: {
            line: 564,
            column: 5
          }
        },
        "238": {
          start: {
            line: 563,
            column: 6
          },
          end: {
            line: 563,
            column: 12
          }
        },
        "239": {
          start: {
            line: 566,
            column: 19
          },
          end: {
            line: 566,
            column: 51
          }
        },
        "240": {
          start: {
            line: 568,
            column: 4
          },
          end: {
            line: 570,
            column: 5
          }
        },
        "241": {
          start: {
            line: 569,
            column: 6
          },
          end: {
            line: 569,
            column: 12
          }
        },
        "242": {
          start: {
            line: 572,
            column: 19
          },
          end: {
            line: 575,
            column: 5
          }
        },
        "243": {
          start: {
            line: 576,
            column: 23
          },
          end: {
            line: 576,
            column: 57
          }
        },
        "244": {
          start: {
            line: 578,
            column: 4
          },
          end: {
            line: 580,
            column: 5
          }
        },
        "245": {
          start: {
            line: 579,
            column: 6
          },
          end: {
            line: 579,
            column: 29
          }
        },
        "246": {
          start: {
            line: 582,
            column: 4
          },
          end: {
            line: 582,
            column: 47
          }
        },
        "247": {
          start: {
            line: 584,
            column: 4
          },
          end: {
            line: 586,
            column: 5
          }
        },
        "248": {
          start: {
            line: 585,
            column: 6
          },
          end: {
            line: 585,
            column: 51
          }
        },
        "249": {
          start: {
            line: 588,
            column: 4
          },
          end: {
            line: 588,
            column: 26
          }
        },
        "250": {
          start: {
            line: 592,
            column: 4
          },
          end: {
            line: 592,
            column: 42
          }
        },
        "251": {
          start: {
            line: 602,
            column: 0
          },
          end: {
            line: 603,
            column: 89
          }
        },
        "252": {
          start: {
            line: 605,
            column: 0
          },
          end: {
            line: 610,
            column: 2
          }
        },
        "253": {
          start: {
            line: 606,
            column: 20
          },
          end: {
            line: 606,
            column: 75
          }
        },
        "254": {
          start: {
            line: 607,
            column: 2
          },
          end: {
            line: 609,
            column: 3
          }
        },
        "255": {
          start: {
            line: 607,
            column: 15
          },
          end: {
            line: 607,
            column: 16
          }
        },
        "256": {
          start: {
            line: 607,
            column: 24
          },
          end: {
            line: 607,
            column: 40
          }
        },
        "257": {
          start: {
            line: 608,
            column: 4
          },
          end: {
            line: 608,
            column: 83
          }
        },
        "258": {
          start: {
            line: 619,
            column: 10
          },
          end: {
            line: 619,
            column: 21
          }
        },
        "259": {
          start: {
            line: 620,
            column: 0
          },
          end: {
            line: 628,
            column: 1
          }
        },
        "260": {
          start: {
            line: 621,
            column: 29
          },
          end: {
            line: 621,
            column: 39
          }
        },
        "261": {
          start: {
            line: 622,
            column: 2
          },
          end: {
            line: 622,
            column: 54
          }
        },
        "262": {
          start: {
            line: 623,
            column: 2
          },
          end: {
            line: 623,
            column: 37
          }
        },
        "263": {
          start: {
            line: 624,
            column: 2
          },
          end: {
            line: 627,
            column: 3
          }
        },
        "264": {
          start: {
            line: 625,
            column: 4
          },
          end: {
            line: 625,
            column: 35
          }
        },
        "265": {
          start: {
            line: 626,
            column: 4
          },
          end: {
            line: 626,
            column: 36
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
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
              column: 31
            },
            end: {
              line: 123,
              column: 3
            }
          },
          line: 105
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 127,
              column: 2
            },
            end: {
              line: 127,
              column: 3
            }
          },
          loc: {
            start: {
              line: 127,
              column: 23
            },
            end: {
              line: 129,
              column: 3
            }
          },
          line: 127
        },
        "2": {
          name: "(anonymous_2)",
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
              column: 23
            },
            end: {
              line: 133,
              column: 3
            }
          },
          line: 131
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 137,
              column: 2
            },
            end: {
              line: 137,
              column: 3
            }
          },
          loc: {
            start: {
              line: 137,
              column: 9
            },
            end: {
              line: 141,
              column: 3
            }
          },
          line: 137
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 143,
              column: 2
            },
            end: {
              line: 143,
              column: 3
            }
          },
          loc: {
            start: {
              line: 143,
              column: 20
            },
            end: {
              line: 149,
              column: 3
            }
          },
          line: 143
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 151,
              column: 2
            },
            end: {
              line: 151,
              column: 3
            }
          },
          loc: {
            start: {
              line: 151,
              column: 9
            },
            end: {
              line: 155,
              column: 3
            }
          },
          line: 151
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 157,
              column: 2
            },
            end: {
              line: 157,
              column: 3
            }
          },
          loc: {
            start: {
              line: 157,
              column: 15
            },
            end: {
              line: 169,
              column: 3
            }
          },
          line: 157
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 171,
              column: 2
            },
            end: {
              line: 171,
              column: 3
            }
          },
          loc: {
            start: {
              line: 171,
              column: 15
            },
            end: {
              line: 187,
              column: 3
            }
          },
          line: 171
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 189,
              column: 2
            },
            end: {
              line: 189,
              column: 3
            }
          },
          loc: {
            start: {
              line: 189,
              column: 12
            },
            end: {
              line: 213,
              column: 3
            }
          },
          line: 189
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 198,
              column: 50
            },
            end: {
              line: 198,
              column: 51
            }
          },
          loc: {
            start: {
              line: 198,
              column: 56
            },
            end: {
              line: 198,
              column: 70
            }
          },
          line: 198
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 215,
              column: 2
            },
            end: {
              line: 215,
              column: 3
            }
          },
          loc: {
            start: {
              line: 215,
              column: 12
            },
            end: {
              line: 227,
              column: 3
            }
          },
          line: 215
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 231,
              column: 2
            },
            end: {
              line: 231,
              column: 3
            }
          },
          loc: {
            start: {
              line: 231,
              column: 21
            },
            end: {
              line: 238,
              column: 3
            }
          },
          line: 231
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 240,
              column: 2
            },
            end: {
              line: 240,
              column: 3
            }
          },
          loc: {
            start: {
              line: 240,
              column: 17
            },
            end: {
              line: 258,
              column: 3
            }
          },
          line: 240
        },
        "13": {
          name: "(anonymous_13)",
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
              column: 23
            },
            end: {
              line: 276,
              column: 3
            }
          },
          line: 260
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 263,
              column: 42
            },
            end: {
              line: 263,
              column: 43
            }
          },
          loc: {
            start: {
              line: 263,
              column: 53
            },
            end: {
              line: 263,
              column: 73
            }
          },
          line: 263
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 268,
              column: 45
            },
            end: {
              line: 268,
              column: 46
            }
          },
          loc: {
            start: {
              line: 268,
              column: 56
            },
            end: {
              line: 268,
              column: 73
            }
          },
          line: 268
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 270,
              column: 45
            },
            end: {
              line: 270,
              column: 46
            }
          },
          loc: {
            start: {
              line: 270,
              column: 56
            },
            end: {
              line: 270,
              column: 73
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
              line: 337,
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
              column: 82
            },
            end: {
              line: 323,
              column: 83
            }
          },
          loc: {
            start: {
              line: 323,
              column: 95
            },
            end: {
              line: 325,
              column: 5
            }
          },
          line: 323
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 324,
              column: 49
            },
            end: {
              line: 324,
              column: 50
            }
          },
          loc: {
            start: {
              line: 324,
              column: 56
            },
            end: {
              line: 324,
              column: 74
            }
          },
          line: 324
        },
        "24": {
          name: "(anonymous_24)",
          decl: {
            start: {
              line: 328,
              column: 56
            },
            end: {
              line: 328,
              column: 57
            }
          },
          loc: {
            start: {
              line: 328,
              column: 67
            },
            end: {
              line: 328,
              column: 79
            }
          },
          line: 328
        },
        "25": {
          name: "(anonymous_25)",
          decl: {
            start: {
              line: 329,
              column: 54
            },
            end: {
              line: 329,
              column: 55
            }
          },
          loc: {
            start: {
              line: 329,
              column: 65
            },
            end: {
              line: 329,
              column: 75
            }
          },
          line: 329
        },
        "26": {
          name: "(anonymous_26)",
          decl: {
            start: {
              line: 333,
              column: 55
            },
            end: {
              line: 333,
              column: 56
            }
          },
          loc: {
            start: {
              line: 333,
              column: 66
            },
            end: {
              line: 333,
              column: 78
            }
          },
          line: 333
        },
        "27": {
          name: "(anonymous_27)",
          decl: {
            start: {
              line: 334,
              column: 54
            },
            end: {
              line: 334,
              column: 55
            }
          },
          loc: {
            start: {
              line: 334,
              column: 65
            },
            end: {
              line: 334,
              column: 76
            }
          },
          line: 334
        },
        "28": {
          name: "(anonymous_28)",
          decl: {
            start: {
              line: 335,
              column: 53
            },
            end: {
              line: 335,
              column: 54
            }
          },
          loc: {
            start: {
              line: 335,
              column: 64
            },
            end: {
              line: 335,
              column: 74
            }
          },
          line: 335
        },
        "29": {
          name: "(anonymous_29)",
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
              column: 18
            },
            end: {
              line: 355,
              column: 3
            }
          },
          line: 339
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
              column: 25
            },
            end: {
              line: 363,
              column: 3
            }
          },
          line: 357
        },
        "31": {
          name: "(anonymous_31)",
          decl: {
            start: {
              line: 365,
              column: 2
            },
            end: {
              line: 365,
              column: 3
            }
          },
          loc: {
            start: {
              line: 365,
              column: 48
            },
            end: {
              line: 382,
              column: 3
            }
          },
          line: 365
        },
        "32": {
          name: "(anonymous_32)",
          decl: {
            start: {
              line: 384,
              column: 2
            },
            end: {
              line: 384,
              column: 3
            }
          },
          loc: {
            start: {
              line: 384,
              column: 56
            },
            end: {
              line: 394,
              column: 3
            }
          },
          line: 384
        },
        "33": {
          name: "(anonymous_33)",
          decl: {
            start: {
              line: 396,
              column: 2
            },
            end: {
              line: 396,
              column: 3
            }
          },
          loc: {
            start: {
              line: 396,
              column: 38
            },
            end: {
              line: 411,
              column: 3
            }
          },
          line: 396
        },
        "34": {
          name: "(anonymous_34)",
          decl: {
            start: {
              line: 413,
              column: 2
            },
            end: {
              line: 413,
              column: 3
            }
          },
          loc: {
            start: {
              line: 413,
              column: 29
            },
            end: {
              line: 516,
              column: 3
            }
          },
          line: 413
        },
        "35": {
          name: "(anonymous_35)",
          decl: {
            start: {
              line: 478,
              column: 49
            },
            end: {
              line: 478,
              column: 50
            }
          },
          loc: {
            start: {
              line: 478,
              column: 55
            },
            end: {
              line: 497,
              column: 9
            }
          },
          line: 478
        },
        "36": {
          name: "(anonymous_36)",
          decl: {
            start: {
              line: 489,
              column: 21
            },
            end: {
              line: 489,
              column: 22
            }
          },
          loc: {
            start: {
              line: 489,
              column: 27
            },
            end: {
              line: 496,
              column: 11
            }
          },
          line: 489
        },
        "37": {
          name: "(anonymous_37)",
          decl: {
            start: {
              line: 520,
              column: 2
            },
            end: {
              line: 520,
              column: 3
            }
          },
          loc: {
            start: {
              line: 520,
              column: 45
            },
            end: {
              line: 551,
              column: 3
            }
          },
          line: 520
        },
        "38": {
          name: "(anonymous_38)",
          decl: {
            start: {
              line: 553,
              column: 2
            },
            end: {
              line: 553,
              column: 3
            }
          },
          loc: {
            start: {
              line: 553,
              column: 34
            },
            end: {
              line: 557,
              column: 3
            }
          },
          line: 553
        },
        "39": {
          name: "(anonymous_39)",
          decl: {
            start: {
              line: 554,
              column: 21
            },
            end: {
              line: 554,
              column: 22
            }
          },
          loc: {
            start: {
              line: 554,
              column: 33
            },
            end: {
              line: 556,
              column: 5
            }
          },
          line: 554
        },
        "40": {
          name: "(anonymous_40)",
          decl: {
            start: {
              line: 559,
              column: 2
            },
            end: {
              line: 559,
              column: 3
            }
          },
          loc: {
            start: {
              line: 559,
              column: 37
            },
            end: {
              line: 589,
              column: 3
            }
          },
          line: 559
        },
        "41": {
          name: "(anonymous_41)",
          decl: {
            start: {
              line: 591,
              column: 2
            },
            end: {
              line: 591,
              column: 3
            }
          },
          loc: {
            start: {
              line: 591,
              column: 31
            },
            end: {
              line: 593,
              column: 3
            }
          },
          line: 591
        },
        "42": {
          name: "(anonymous_42)",
          decl: {
            start: {
              line: 605,
              column: 45
            },
            end: {
              line: 605,
              column: 46
            }
          },
          loc: {
            start: {
              line: 605,
              column: 51
            },
            end: {
              line: 610,
              column: 1
            }
          },
          line: 605
        },
        "43": {
          name: "(anonymous_43)",
          decl: {
            start: {
              line: 624,
              column: 29
            },
            end: {
              line: 624,
              column: 30
            }
          },
          loc: {
            start: {
              line: 624,
              column: 35
            },
            end: {
              line: 627,
              column: 3
            }
          },
          line: 624
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 118,
              column: 30
            },
            end: {
              line: 118,
              column: 104
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 118,
              column: 30
            },
            end: {
              line: 118,
              column: 72
            }
          }, {
            start: {
              line: 118,
              column: 76
            },
            end: {
              line: 118,
              column: 104
            }
          }],
          line: 118
        },
        "1": {
          loc: {
            start: {
              line: 119,
              column: 38
            },
            end: {
              line: 119,
              column: 82
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 119,
              column: 38
            },
            end: {
              line: 119,
              column: 57
            }
          }, {
            start: {
              line: 119,
              column: 61
            },
            end: {
              line: 119,
              column: 82
            }
          }],
          line: 119
        },
        "2": {
          loc: {
            start: {
              line: 138,
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
              line: 138,
              column: 4
            },
            end: {
              line: 140,
              column: 5
            }
          }, {
            start: {
              line: 138,
              column: 4
            },
            end: {
              line: 140,
              column: 5
            }
          }],
          line: 138
        },
        "3": {
          loc: {
            start: {
              line: 146,
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
              line: 146,
              column: 4
            },
            end: {
              line: 148,
              column: 5
            }
          }, {
            start: {
              line: 146,
              column: 4
            },
            end: {
              line: 148,
              column: 5
            }
          }],
          line: 146
        },
        "4": {
          loc: {
            start: {
              line: 146,
              column: 8
            },
            end: {
              line: 146,
              column: 57
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 146,
              column: 8
            },
            end: {
              line: 146,
              column: 24
            }
          }, {
            start: {
              line: 146,
              column: 28
            },
            end: {
              line: 146,
              column: 57
            }
          }],
          line: 146
        },
        "5": {
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
        "6": {
          loc: {
            start: {
              line: 158,
              column: 4
            },
            end: {
              line: 160,
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
              line: 160,
              column: 5
            }
          }, {
            start: {
              line: 158,
              column: 4
            },
            end: {
              line: 160,
              column: 5
            }
          }],
          line: 158
        },
        "7": {
          loc: {
            start: {
              line: 162,
              column: 4
            },
            end: {
              line: 165,
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
              line: 165,
              column: 5
            }
          }, {
            start: {
              line: 162,
              column: 4
            },
            end: {
              line: 165,
              column: 5
            }
          }],
          line: 162
        },
        "8": {
          loc: {
            start: {
              line: 172,
              column: 4
            },
            end: {
              line: 174,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 172,
              column: 4
            },
            end: {
              line: 174,
              column: 5
            }
          }, {
            start: {
              line: 172,
              column: 4
            },
            end: {
              line: 174,
              column: 5
            }
          }],
          line: 172
        },
        "9": {
          loc: {
            start: {
              line: 176,
              column: 4
            },
            end: {
              line: 179,
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
              line: 179,
              column: 5
            }
          }, {
            start: {
              line: 176,
              column: 4
            },
            end: {
              line: 179,
              column: 5
            }
          }],
          line: 176
        },
        "10": {
          loc: {
            start: {
              line: 181,
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
              line: 181,
              column: 4
            },
            end: {
              line: 186,
              column: 5
            }
          }, {
            start: {
              line: 181,
              column: 4
            },
            end: {
              line: 186,
              column: 5
            }
          }],
          line: 181
        },
        "11": {
          loc: {
            start: {
              line: 181,
              column: 8
            },
            end: {
              line: 181,
              column: 64
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 181,
              column: 8
            },
            end: {
              line: 181,
              column: 20
            }
          }, {
            start: {
              line: 181,
              column: 24
            },
            end: {
              line: 181,
              column: 45
            }
          }, {
            start: {
              line: 181,
              column: 49
            },
            end: {
              line: 181,
              column: 64
            }
          }],
          line: 181
        },
        "12": {
          loc: {
            start: {
              line: 183,
              column: 9
            },
            end: {
              line: 183,
              column: 68
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 183,
              column: 36
            },
            end: {
              line: 183,
              column: 56
            }
          }, {
            start: {
              line: 183,
              column: 59
            },
            end: {
              line: 183,
              column: 68
            }
          }],
          line: 183
        },
        "13": {
          loc: {
            start: {
              line: 193,
              column: 4
            },
            end: {
              line: 195,
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
              line: 195,
              column: 5
            }
          }, {
            start: {
              line: 193,
              column: 4
            },
            end: {
              line: 195,
              column: 5
            }
          }],
          line: 193
        },
        "14": {
          loc: {
            start: {
              line: 193,
              column: 8
            },
            end: {
              line: 193,
              column: 51
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
              column: 38
            }
          }, {
            start: {
              line: 193,
              column: 42
            },
            end: {
              line: 193,
              column: 51
            }
          }],
          line: 193
        },
        "15": {
          loc: {
            start: {
              line: 197,
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
              line: 197,
              column: 4
            },
            end: {
              line: 200,
              column: 5
            }
          }, {
            start: {
              line: 197,
              column: 4
            },
            end: {
              line: 200,
              column: 5
            }
          }],
          line: 197
        },
        "16": {
          loc: {
            start: {
              line: 202,
              column: 4
            },
            end: {
              line: 206,
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
              line: 206,
              column: 5
            }
          }, {
            start: {
              line: 202,
              column: 4
            },
            end: {
              line: 206,
              column: 5
            }
          }],
          line: 202
        },
        "17": {
          loc: {
            start: {
              line: 208,
              column: 22
            },
            end: {
              line: 210,
              column: 22
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 209,
              column: 8
            },
            end: {
              line: 209,
              column: 22
            }
          }, {
            start: {
              line: 210,
              column: 8
            },
            end: {
              line: 210,
              column: 22
            }
          }],
          line: 208
        },
        "18": {
          loc: {
            start: {
              line: 243,
              column: 4
            },
            end: {
              line: 245,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 243,
              column: 4
            },
            end: {
              line: 245,
              column: 5
            }
          }, {
            start: {
              line: 243,
              column: 4
            },
            end: {
              line: 245,
              column: 5
            }
          }],
          line: 243
        },
        "19": {
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
        "20": {
          loc: {
            start: {
              line: 255,
              column: 4
            },
            end: {
              line: 257,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 255,
              column: 4
            },
            end: {
              line: 257,
              column: 5
            }
          }, {
            start: {
              line: 255,
              column: 4
            },
            end: {
              line: 257,
              column: 5
            }
          }],
          line: 255
        },
        "21": {
          loc: {
            start: {
              line: 261,
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
              line: 261,
              column: 4
            },
            end: {
              line: 264,
              column: 5
            }
          }, {
            start: {
              line: 261,
              column: 4
            },
            end: {
              line: 264,
              column: 5
            }
          }],
          line: 261
        },
        "22": {
          loc: {
            start: {
              line: 266,
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
              line: 266,
              column: 4
            },
            end: {
              line: 271,
              column: 5
            }
          }, {
            start: {
              line: 266,
              column: 4
            },
            end: {
              line: 271,
              column: 5
            }
          }],
          line: 266
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
              column: 76
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
              column: 76
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
              column: 51
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
              column: 23
            }
          }, {
            start: {
              line: 293,
              column: 27
            },
            end: {
              line: 293,
              column: 51
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
              column: 76
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
              column: 76
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
              line: 327,
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
              line: 327,
              column: 4
            },
            end: {
              line: 336,
              column: 5
            }
          }, {
            start: {
              line: 327,
              column: 4
            },
            end: {
              line: 336,
              column: 5
            }
          }],
          line: 327
        },
        "35": {
          loc: {
            start: {
              line: 340,
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
              line: 340,
              column: 4
            },
            end: {
              line: 342,
              column: 5
            }
          }, {
            start: {
              line: 340,
              column: 4
            },
            end: {
              line: 342,
              column: 5
            }
          }],
          line: 340
        },
        "36": {
          loc: {
            start: {
              line: 344,
              column: 4
            },
            end: {
              line: 354,
              column: 5
            }
          },
          type: "switch",
          locations: [{
            start: {
              line: 345,
              column: 6
            },
            end: {
              line: 348,
              column: 13
            }
          }, {
            start: {
              line: 349,
              column: 6
            },
            end: {
              line: 352,
              column: 13
            }
          }, {
            start: {
              line: 353,
              column: 6
            },
            end: {
              line: 353,
              column: 14
            }
          }],
          line: 344
        },
        "37": {
          loc: {
            start: {
              line: 358,
              column: 18
            },
            end: {
              line: 360,
              column: 10
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 359,
              column: 8
            },
            end: {
              line: 359,
              column: 78
            }
          }, {
            start: {
              line: 360,
              column: 8
            },
            end: {
              line: 360,
              column: 10
            }
          }],
          line: 358
        },
        "38": {
          loc: {
            start: {
              line: 358,
              column: 18
            },
            end: {
              line: 358,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 358,
              column: 18
            },
            end: {
              line: 358,
              column: 25
            }
          }, {
            start: {
              line: 358,
              column: 29
            },
            end: {
              line: 358,
              column: 47
            }
          }],
          line: 358
        },
        "39": {
          loc: {
            start: {
              line: 370,
              column: 28
            },
            end: {
              line: 371,
              column: 76
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 370,
              column: 28
            },
            end: {
              line: 370,
              column: 43
            }
          }, {
            start: {
              line: 370,
              column: 47
            },
            end: {
              line: 370,
              column: 64
            }
          }, {
            start: {
              line: 371,
              column: 28
            },
            end: {
              line: 371,
              column: 43
            }
          }, {
            start: {
              line: 371,
              column: 47
            },
            end: {
              line: 371,
              column: 76
            }
          }],
          line: 370
        },
        "40": {
          loc: {
            start: {
              line: 373,
              column: 4
            },
            end: {
              line: 375,
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
              line: 375,
              column: 5
            }
          }, {
            start: {
              line: 373,
              column: 4
            },
            end: {
              line: 375,
              column: 5
            }
          }],
          line: 373
        },
        "41": {
          loc: {
            start: {
              line: 373,
              column: 8
            },
            end: {
              line: 373,
              column: 43
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
              column: 21
            }
          }, {
            start: {
              line: 373,
              column: 25
            },
            end: {
              line: 373,
              column: 43
            }
          }],
          line: 373
        },
        "42": {
          loc: {
            start: {
              line: 377,
              column: 22
            },
            end: {
              line: 377,
              column: 59
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 377,
              column: 53
            },
            end: {
              line: 377,
              column: 55
            }
          }, {
            start: {
              line: 377,
              column: 58
            },
            end: {
              line: 377,
              column: 59
            }
          }],
          line: 377
        },
        "43": {
          loc: {
            start: {
              line: 380,
              column: 11
            },
            end: {
              line: 381,
              column: 68
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 381,
              column: 8
            },
            end: {
              line: 381,
              column: 43
            }
          }, {
            start: {
              line: 381,
              column: 46
            },
            end: {
              line: 381,
              column: 68
            }
          }],
          line: 380
        },
        "44": {
          loc: {
            start: {
              line: 397,
              column: 4
            },
            end: {
              line: 410,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 397,
              column: 4
            },
            end: {
              line: 410,
              column: 5
            }
          }, {
            start: {
              line: 397,
              column: 4
            },
            end: {
              line: 410,
              column: 5
            }
          }],
          line: 397
        },
        "45": {
          loc: {
            start: {
              line: 407,
              column: 6
            },
            end: {
              line: 409,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 407,
              column: 6
            },
            end: {
              line: 409,
              column: 7
            }
          }, {
            start: {
              line: 407,
              column: 6
            },
            end: {
              line: 409,
              column: 7
            }
          }],
          line: 407
        },
        "46": {
          loc: {
            start: {
              line: 416,
              column: 26
            },
            end: {
              line: 417,
              column: 56
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 416,
              column: 26
            },
            end: {
              line: 416,
              column: 33
            }
          }, {
            start: {
              line: 416,
              column: 37
            },
            end: {
              line: 416,
              column: 50
            }
          }, {
            start: {
              line: 417,
              column: 6
            },
            end: {
              line: 417,
              column: 56
            }
          }],
          line: 416
        },
        "47": {
          loc: {
            start: {
              line: 426,
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
              line: 426,
              column: 4
            },
            end: {
              line: 434,
              column: 5
            }
          }, {
            start: {
              line: 426,
              column: 4
            },
            end: {
              line: 434,
              column: 5
            }
          }],
          line: 426
        },
        "48": {
          loc: {
            start: {
              line: 436,
              column: 4
            },
            end: {
              line: 439,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 436,
              column: 4
            },
            end: {
              line: 439,
              column: 5
            }
          }, {
            start: {
              line: 436,
              column: 4
            },
            end: {
              line: 439,
              column: 5
            }
          }],
          line: 436
        },
        "49": {
          loc: {
            start: {
              line: 436,
              column: 8
            },
            end: {
              line: 436,
              column: 71
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 436,
              column: 8
            },
            end: {
              line: 436,
              column: 19
            }
          }, {
            start: {
              line: 436,
              column: 23
            },
            end: {
              line: 436,
              column: 71
            }
          }],
          line: 436
        },
        "50": {
          loc: {
            start: {
              line: 442,
              column: 4
            },
            end: {
              line: 444,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 442,
              column: 4
            },
            end: {
              line: 444,
              column: 5
            }
          }, {
            start: {
              line: 442,
              column: 4
            },
            end: {
              line: 444,
              column: 5
            }
          }],
          line: 442
        },
        "51": {
          loc: {
            start: {
              line: 446,
              column: 4
            },
            end: {
              line: 449,
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
              line: 449,
              column: 5
            }
          }, {
            start: {
              line: 446,
              column: 4
            },
            end: {
              line: 449,
              column: 5
            }
          }],
          line: 446
        },
        "52": {
          loc: {
            start: {
              line: 446,
              column: 8
            },
            end: {
              line: 446,
              column: 38
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
              column: 22
            }
          }, {
            start: {
              line: 446,
              column: 26
            },
            end: {
              line: 446,
              column: 38
            }
          }],
          line: 446
        },
        "53": {
          loc: {
            start: {
              line: 453,
              column: 4
            },
            end: {
              line: 455,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 453,
              column: 4
            },
            end: {
              line: 455,
              column: 5
            }
          }, {
            start: {
              line: 453,
              column: 4
            },
            end: {
              line: 455,
              column: 5
            }
          }],
          line: 453
        },
        "54": {
          loc: {
            start: {
              line: 459,
              column: 4
            },
            end: {
              line: 511,
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
              line: 511,
              column: 5
            }
          }, {
            start: {
              line: 459,
              column: 4
            },
            end: {
              line: 511,
              column: 5
            }
          }],
          line: 459
        },
        "55": {
          loc: {
            start: {
              line: 468,
              column: 6
            },
            end: {
              line: 473,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 468,
              column: 6
            },
            end: {
              line: 473,
              column: 7
            }
          }, {
            start: {
              line: 468,
              column: 6
            },
            end: {
              line: 473,
              column: 7
            }
          }],
          line: 468
        },
        "56": {
          loc: {
            start: {
              line: 469,
              column: 39
            },
            end: {
              line: 469,
              column: 92
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 469,
              column: 39
            },
            end: {
              line: 469,
              column: 67
            }
          }, {
            start: {
              line: 469,
              column: 71
            },
            end: {
              line: 469,
              column: 92
            }
          }],
          line: 469
        },
        "57": {
          loc: {
            start: {
              line: 472,
              column: 32
            },
            end: {
              line: 472,
              column: 85
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 472,
              column: 32
            },
            end: {
              line: 472,
              column: 60
            }
          }, {
            start: {
              line: 472,
              column: 64
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
              line: 513,
              column: 4
            },
            end: {
              line: 515,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 513,
              column: 4
            },
            end: {
              line: 515,
              column: 5
            }
          }, {
            start: {
              line: 513,
              column: 4
            },
            end: {
              line: 515,
              column: 5
            }
          }],
          line: 513
        },
        "59": {
          loc: {
            start: {
              line: 527,
              column: 4
            },
            end: {
              line: 532,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 527,
              column: 4
            },
            end: {
              line: 532,
              column: 5
            }
          }, {
            start: {
              line: 527,
              column: 4
            },
            end: {
              line: 532,
              column: 5
            }
          }],
          line: 527
        },
        "60": {
          loc: {
            start: {
              line: 534,
              column: 19
            },
            end: {
              line: 534,
              column: 70
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 534,
              column: 48
            },
            end: {
              line: 534,
              column: 54
            }
          }, {
            start: {
              line: 534,
              column: 57
            },
            end: {
              line: 534,
              column: 70
            }
          }],
          line: 534
        },
        "61": {
          loc: {
            start: {
              line: 536,
              column: 4
            },
            end: {
              line: 538,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 536,
              column: 4
            },
            end: {
              line: 538,
              column: 5
            }
          }, {
            start: {
              line: 536,
              column: 4
            },
            end: {
              line: 538,
              column: 5
            }
          }],
          line: 536
        },
        "62": {
          loc: {
            start: {
              line: 540,
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
              line: 540,
              column: 4
            },
            end: {
              line: 550,
              column: 5
            }
          }, {
            start: {
              line: 540,
              column: 4
            },
            end: {
              line: 550,
              column: 5
            }
          }],
          line: 540
        },
        "63": {
          loc: {
            start: {
              line: 542,
              column: 11
            },
            end: {
              line: 550,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 542,
              column: 11
            },
            end: {
              line: 550,
              column: 5
            }
          }, {
            start: {
              line: 542,
              column: 11
            },
            end: {
              line: 550,
              column: 5
            }
          }],
          line: 542
        },
        "64": {
          loc: {
            start: {
              line: 543,
              column: 6
            },
            end: {
              line: 545,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 543,
              column: 6
            },
            end: {
              line: 545,
              column: 7
            }
          }, {
            start: {
              line: 543,
              column: 6
            },
            end: {
              line: 545,
              column: 7
            }
          }],
          line: 543
        },
        "65": {
          loc: {
            start: {
              line: 547,
              column: 11
            },
            end: {
              line: 550,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 547,
              column: 11
            },
            end: {
              line: 550,
              column: 5
            }
          }, {
            start: {
              line: 547,
              column: 11
            },
            end: {
              line: 550,
              column: 5
            }
          }],
          line: 547
        },
        "66": {
          loc: {
            start: {
              line: 547,
              column: 15
            },
            end: {
              line: 547,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 547,
              column: 15
            },
            end: {
              line: 547,
              column: 31
            }
          }, {
            start: {
              line: 547,
              column: 35
            },
            end: {
              line: 547,
              column: 47
            }
          }],
          line: 547
        },
        "67": {
          loc: {
            start: {
              line: 562,
              column: 4
            },
            end: {
              line: 564,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 562,
              column: 4
            },
            end: {
              line: 564,
              column: 5
            }
          }, {
            start: {
              line: 562,
              column: 4
            },
            end: {
              line: 564,
              column: 5
            }
          }],
          line: 562
        },
        "68": {
          loc: {
            start: {
              line: 568,
              column: 4
            },
            end: {
              line: 570,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 568,
              column: 4
            },
            end: {
              line: 570,
              column: 5
            }
          }, {
            start: {
              line: 568,
              column: 4
            },
            end: {
              line: 570,
              column: 5
            }
          }],
          line: 568
        },
        "69": {
          loc: {
            start: {
              line: 568,
              column: 8
            },
            end: {
              line: 568,
              column: 65
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 568,
              column: 8
            },
            end: {
              line: 568,
              column: 15
            }
          }, {
            start: {
              line: 568,
              column: 19
            },
            end: {
              line: 568,
              column: 65
            }
          }],
          line: 568
        },
        "70": {
          loc: {
            start: {
              line: 578,
              column: 4
            },
            end: {
              line: 580,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 578,
              column: 4
            },
            end: {
              line: 580,
              column: 5
            }
          }, {
            start: {
              line: 578,
              column: 4
            },
            end: {
              line: 580,
              column: 5
            }
          }],
          line: 578
        },
        "71": {
          loc: {
            start: {
              line: 584,
              column: 4
            },
            end: {
              line: 586,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 584,
              column: 4
            },
            end: {
              line: 586,
              column: 5
            }
          }, {
            start: {
              line: 584,
              column: 4
            },
            end: {
              line: 586,
              column: 5
            }
          }],
          line: 584
        },
        "72": {
          loc: {
            start: {
              line: 620,
              column: 0
            },
            end: {
              line: 628,
              column: 1
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 620,
              column: 0
            },
            end: {
              line: 628,
              column: 1
            }
          }, {
            start: {
              line: 620,
              column: 0
            },
            end: {
              line: 628,
              column: 1
            }
          }],
          line: 620
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
        "265": 0
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
        "43": 0
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
        "11": [0, 0, 0],
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
        "71": [0, 0],
        "72": [0, 0]
      },
      _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184"
    };
    var coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_1qrssl00mz.s[0]++, 'carousel');
  var VERSION = (cov_1qrssl00mz.s[1]++, '4.3.1');
  var DATA_KEY = (cov_1qrssl00mz.s[2]++, 'bs.carousel');
  var EVENT_KEY = (cov_1qrssl00mz.s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_1qrssl00mz.s[4]++, '.data-api');
  var ARROW_LEFT_KEYCODE = (cov_1qrssl00mz.s[5]++, 37); // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = (cov_1qrssl00mz.s[6]++, 39); // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = (cov_1qrssl00mz.s[7]++, 500); // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = (cov_1qrssl00mz.s[8]++, 40);
  var Default = (cov_1qrssl00mz.s[9]++, {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  });
  var DefaultType = (cov_1qrssl00mz.s[10]++, {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  });
  var Direction = (cov_1qrssl00mz.s[11]++, {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  });
  var Event = (cov_1qrssl00mz.s[12]++, {
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
  var ClassName = (cov_1qrssl00mz.s[13]++, {
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
  var Selector = (cov_1qrssl00mz.s[14]++, {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    ITEM_IMG: '.carousel-item img',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
  });
  var PointerType = (cov_1qrssl00mz.s[15]++, {
    TOUCH: 'touch',
    PEN: 'pen'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  });

  var Carousel =
  /*#__PURE__*/
  function () {
    function Carousel(element, config) {
      cov_1qrssl00mz.f[0]++;
      cov_1qrssl00mz.s[16]++;
      this._items = null;
      cov_1qrssl00mz.s[17]++;
      this._interval = null;
      cov_1qrssl00mz.s[18]++;
      this._activeElement = null;
      cov_1qrssl00mz.s[19]++;
      this._isPaused = false;
      cov_1qrssl00mz.s[20]++;
      this._isSliding = false;
      cov_1qrssl00mz.s[21]++;
      this.touchTimeout = null;
      cov_1qrssl00mz.s[22]++;
      this.touchStartX = 0;
      cov_1qrssl00mz.s[23]++;
      this.touchDeltaX = 0;
      cov_1qrssl00mz.s[24]++;
      this._config = this._getConfig(config);
      cov_1qrssl00mz.s[25]++;
      this._element = element;
      cov_1qrssl00mz.s[26]++;
      this._indicatorsElement = SelectorEngine.findOne(Selector.INDICATORS, this._element);
      cov_1qrssl00mz.s[27]++;
      this._touchSupported = (cov_1qrssl00mz.b[0][0]++, 'ontouchstart' in document.documentElement) || (cov_1qrssl00mz.b[0][1]++, navigator.maxTouchPoints > 0);
      cov_1qrssl00mz.s[28]++;
      this._pointerEvent = Boolean((cov_1qrssl00mz.b[1][0]++, window.PointerEvent) || (cov_1qrssl00mz.b[1][1]++, window.MSPointerEvent));
      cov_1qrssl00mz.s[29]++;

      this._addEventListeners();

      cov_1qrssl00mz.s[30]++;
      Data.setData(element, DATA_KEY, this);
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
      if ((cov_1qrssl00mz.b[4][0]++, !document.hidden) && (cov_1qrssl00mz.b[4][1]++, Util.isVisible(this._element))) {
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

      if (SelectorEngine.findOne(Selector.NEXT_PREV, this._element)) {
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

      if ((cov_1qrssl00mz.b[11][0]++, this._config) && (cov_1qrssl00mz.b[11][1]++, this._config.interval) && (cov_1qrssl00mz.b[11][2]++, !this._isPaused)) {
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
      this._activeElement = SelectorEngine.findOne(Selector.ACTIVE_ITEM, this._element);
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
        EventHandler.one(this._element, Event.SLID, function () {
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
      EventHandler.off(this._element, EVENT_KEY);
      cov_1qrssl00mz.s[68]++;
      Data.removeData(this._element, DATA_KEY);
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
      config = _objectSpread({}, Default, config);
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

      var direction = (cov_1qrssl00mz.s[83]++, absDeltax / this.touchDeltaX); // swipe left

      cov_1qrssl00mz.s[84]++;

      if (direction > 0) {
        cov_1qrssl00mz.b[19][0]++;
        cov_1qrssl00mz.s[85]++;
        this.prev();
      } else {
        cov_1qrssl00mz.b[19][1]++;
      } // swipe right


      cov_1qrssl00mz.s[86]++;

      if (direction < 0) {
        cov_1qrssl00mz.b[20][0]++;
        cov_1qrssl00mz.s[87]++;
        this.next();
      } else {
        cov_1qrssl00mz.b[20][1]++;
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      cov_1qrssl00mz.f[13]++;
      cov_1qrssl00mz.s[88]++;

      if (this._config.keyboard) {
        cov_1qrssl00mz.b[21][0]++;
        cov_1qrssl00mz.s[89]++;
        EventHandler.on(this._element, Event.KEYDOWN, function (event) {
          cov_1qrssl00mz.f[14]++;
          cov_1qrssl00mz.s[90]++;
          return _this2._keydown(event);
        });
      } else {
        cov_1qrssl00mz.b[21][1]++;
      }

      cov_1qrssl00mz.s[91]++;

      if (this._config.pause === 'hover') {
        cov_1qrssl00mz.b[22][0]++;
        cov_1qrssl00mz.s[92]++;
        EventHandler.on(this._element, Event.MOUSEENTER, function (event) {
          cov_1qrssl00mz.f[15]++;
          cov_1qrssl00mz.s[93]++;
          return _this2.pause(event);
        });
        cov_1qrssl00mz.s[94]++;
        EventHandler.on(this._element, Event.MOUSELEAVE, function (event) {
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

        if ((cov_1qrssl00mz.b[26][0]++, _this3._pointerEvent) && (cov_1qrssl00mz.b[26][1]++, PointerType[event.pointerType.toUpperCase()])) {
          cov_1qrssl00mz.b[25][0]++;
          cov_1qrssl00mz.s[102]++;
          _this3.touchStartX = event.clientX;
        } else {
          cov_1qrssl00mz.b[25][1]++;
          cov_1qrssl00mz.s[103]++;

          if (!_this3._pointerEvent) {
            cov_1qrssl00mz.b[27][0]++;
            cov_1qrssl00mz.s[104]++;
            _this3.touchStartX = event.touches[0].clientX;
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
        if ((cov_1qrssl00mz.b[29][0]++, event.touches) && (cov_1qrssl00mz.b[29][1]++, event.touches.length > 1)) {
          cov_1qrssl00mz.b[28][0]++;
          cov_1qrssl00mz.s[107]++;
          _this3.touchDeltaX = 0;
        } else {
          cov_1qrssl00mz.b[28][1]++;
          cov_1qrssl00mz.s[108]++;
          _this3.touchDeltaX = event.touches[0].clientX - _this3.touchStartX;
        }
      };

      cov_1qrssl00mz.s[109]++;

      var end = function end(event) {
        cov_1qrssl00mz.f[20]++;
        cov_1qrssl00mz.s[110]++;

        if ((cov_1qrssl00mz.b[31][0]++, _this3._pointerEvent) && (cov_1qrssl00mz.b[31][1]++, PointerType[event.pointerType.toUpperCase()])) {
          cov_1qrssl00mz.b[30][0]++;
          cov_1qrssl00mz.s[111]++;
          _this3.touchDeltaX = event.clientX - _this3.touchStartX;
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
      Util.makeArray(SelectorEngine.find(Selector.ITEM_IMG, this._element)).forEach(function (itemImg) {
        cov_1qrssl00mz.f[22]++;
        cov_1qrssl00mz.s[120]++;
        EventHandler.on(itemImg, Event.DRAG_START, function (e) {
          cov_1qrssl00mz.f[23]++;
          cov_1qrssl00mz.s[121]++;
          return e.preventDefault();
        });
      });
      cov_1qrssl00mz.s[122]++;

      if (this._pointerEvent) {
        cov_1qrssl00mz.b[34][0]++;
        cov_1qrssl00mz.s[123]++;
        EventHandler.on(this._element, Event.POINTERDOWN, function (event) {
          cov_1qrssl00mz.f[24]++;
          cov_1qrssl00mz.s[124]++;
          return start(event);
        });
        cov_1qrssl00mz.s[125]++;
        EventHandler.on(this._element, Event.POINTERUP, function (event) {
          cov_1qrssl00mz.f[25]++;
          cov_1qrssl00mz.s[126]++;
          return end(event);
        });
        cov_1qrssl00mz.s[127]++;

        this._element.classList.add(ClassName.POINTER_EVENT);
      } else {
        cov_1qrssl00mz.b[34][1]++;
        cov_1qrssl00mz.s[128]++;
        EventHandler.on(this._element, Event.TOUCHSTART, function (event) {
          cov_1qrssl00mz.f[26]++;
          cov_1qrssl00mz.s[129]++;
          return start(event);
        });
        cov_1qrssl00mz.s[130]++;
        EventHandler.on(this._element, Event.TOUCHMOVE, function (event) {
          cov_1qrssl00mz.f[27]++;
          cov_1qrssl00mz.s[131]++;
          return move(event);
        });
        cov_1qrssl00mz.s[132]++;
        EventHandler.on(this._element, Event.TOUCHEND, function (event) {
          cov_1qrssl00mz.f[28]++;
          cov_1qrssl00mz.s[133]++;
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      cov_1qrssl00mz.f[29]++;
      cov_1qrssl00mz.s[134]++;

      if (/input|textarea/i.test(event.target.tagName)) {
        cov_1qrssl00mz.b[35][0]++;
        cov_1qrssl00mz.s[135]++;
        return;
      } else {
        cov_1qrssl00mz.b[35][1]++;
      }

      cov_1qrssl00mz.s[136]++;

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          cov_1qrssl00mz.b[36][0]++;
          cov_1qrssl00mz.s[137]++;
          event.preventDefault();
          cov_1qrssl00mz.s[138]++;
          this.prev();
          cov_1qrssl00mz.s[139]++;
          break;

        case ARROW_RIGHT_KEYCODE:
          cov_1qrssl00mz.b[36][1]++;
          cov_1qrssl00mz.s[140]++;
          event.preventDefault();
          cov_1qrssl00mz.s[141]++;
          this.next();
          cov_1qrssl00mz.s[142]++;
          break;

        default:
          cov_1qrssl00mz.b[36][2]++;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      cov_1qrssl00mz.f[30]++;
      cov_1qrssl00mz.s[143]++;
      this._items = (cov_1qrssl00mz.b[38][0]++, element) && (cov_1qrssl00mz.b[38][1]++, element.parentNode) ? (cov_1qrssl00mz.b[37][0]++, Util.makeArray(SelectorEngine.find(Selector.ITEM, element.parentNode))) : (cov_1qrssl00mz.b[37][1]++, []);
      cov_1qrssl00mz.s[144]++;
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      cov_1qrssl00mz.f[31]++;
      var isNextDirection = (cov_1qrssl00mz.s[145]++, direction === Direction.NEXT);
      var isPrevDirection = (cov_1qrssl00mz.s[146]++, direction === Direction.PREV);
      var activeIndex = (cov_1qrssl00mz.s[147]++, this._getItemIndex(activeElement));
      var lastItemIndex = (cov_1qrssl00mz.s[148]++, this._items.length - 1);
      var isGoingToWrap = (cov_1qrssl00mz.s[149]++, (cov_1qrssl00mz.b[39][0]++, isPrevDirection) && (cov_1qrssl00mz.b[39][1]++, activeIndex === 0) || (cov_1qrssl00mz.b[39][2]++, isNextDirection) && (cov_1qrssl00mz.b[39][3]++, activeIndex === lastItemIndex));
      cov_1qrssl00mz.s[150]++;

      if ((cov_1qrssl00mz.b[41][0]++, isGoingToWrap) && (cov_1qrssl00mz.b[41][1]++, !this._config.wrap)) {
        cov_1qrssl00mz.b[40][0]++;
        cov_1qrssl00mz.s[151]++;
        return activeElement;
      } else {
        cov_1qrssl00mz.b[40][1]++;
      }

      var delta = (cov_1qrssl00mz.s[152]++, direction === Direction.PREV ? (cov_1qrssl00mz.b[42][0]++, -1) : (cov_1qrssl00mz.b[42][1]++, 1));
      var itemIndex = (cov_1qrssl00mz.s[153]++, (activeIndex + delta) % this._items.length);
      cov_1qrssl00mz.s[154]++;
      return itemIndex === -1 ? (cov_1qrssl00mz.b[43][0]++, this._items[this._items.length - 1]) : (cov_1qrssl00mz.b[43][1]++, this._items[itemIndex]);
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      cov_1qrssl00mz.f[32]++;
      var targetIndex = (cov_1qrssl00mz.s[155]++, this._getItemIndex(relatedTarget));
      var fromIndex = (cov_1qrssl00mz.s[156]++, this._getItemIndex(SelectorEngine.findOne(Selector.ACTIVE_ITEM, this._element)));
      cov_1qrssl00mz.s[157]++;
      return EventHandler.trigger(this._element, Event.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      cov_1qrssl00mz.f[33]++;
      cov_1qrssl00mz.s[158]++;

      if (this._indicatorsElement) {
        cov_1qrssl00mz.b[44][0]++;
        var indicators = (cov_1qrssl00mz.s[159]++, SelectorEngine.find(Selector.ACTIVE, this._indicatorsElement));
        cov_1qrssl00mz.s[160]++;

        for (var i = (cov_1qrssl00mz.s[161]++, 0); i < indicators.length; i++) {
          cov_1qrssl00mz.s[162]++;
          indicators[i].classList.remove(ClassName.ACTIVE);
        }

        var nextIndicator = (cov_1qrssl00mz.s[163]++, this._indicatorsElement.children[this._getItemIndex(element)]);
        cov_1qrssl00mz.s[164]++;

        if (nextIndicator) {
          cov_1qrssl00mz.b[45][0]++;
          cov_1qrssl00mz.s[165]++;
          nextIndicator.classList.add(ClassName.ACTIVE);
        } else {
          cov_1qrssl00mz.b[45][1]++;
        }
      } else {
        cov_1qrssl00mz.b[44][1]++;
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      cov_1qrssl00mz.f[34]++;
      var activeElement = (cov_1qrssl00mz.s[166]++, SelectorEngine.findOne(Selector.ACTIVE_ITEM, this._element));
      var activeElementIndex = (cov_1qrssl00mz.s[167]++, this._getItemIndex(activeElement));
      var nextElement = (cov_1qrssl00mz.s[168]++, (cov_1qrssl00mz.b[46][0]++, element) || (cov_1qrssl00mz.b[46][1]++, activeElement) && (cov_1qrssl00mz.b[46][2]++, this._getItemByDirection(direction, activeElement)));
      var nextElementIndex = (cov_1qrssl00mz.s[169]++, this._getItemIndex(nextElement));
      var isCycling = (cov_1qrssl00mz.s[170]++, Boolean(this._interval));
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;
      cov_1qrssl00mz.s[171]++;

      if (direction === Direction.NEXT) {
        cov_1qrssl00mz.b[47][0]++;
        cov_1qrssl00mz.s[172]++;
        directionalClassName = ClassName.LEFT;
        cov_1qrssl00mz.s[173]++;
        orderClassName = ClassName.NEXT;
        cov_1qrssl00mz.s[174]++;
        eventDirectionName = Direction.LEFT;
      } else {
        cov_1qrssl00mz.b[47][1]++;
        cov_1qrssl00mz.s[175]++;
        directionalClassName = ClassName.RIGHT;
        cov_1qrssl00mz.s[176]++;
        orderClassName = ClassName.PREV;
        cov_1qrssl00mz.s[177]++;
        eventDirectionName = Direction.RIGHT;
      }

      cov_1qrssl00mz.s[178]++;

      if ((cov_1qrssl00mz.b[49][0]++, nextElement) && (cov_1qrssl00mz.b[49][1]++, nextElement.classList.contains(ClassName.ACTIVE))) {
        cov_1qrssl00mz.b[48][0]++;
        cov_1qrssl00mz.s[179]++;
        this._isSliding = false;
        cov_1qrssl00mz.s[180]++;
        return;
      } else {
        cov_1qrssl00mz.b[48][1]++;
      }

      var slideEvent = (cov_1qrssl00mz.s[181]++, this._triggerSlideEvent(nextElement, eventDirectionName));
      cov_1qrssl00mz.s[182]++;

      if (slideEvent.defaultPrevented) {
        cov_1qrssl00mz.b[50][0]++;
        cov_1qrssl00mz.s[183]++;
        return;
      } else {
        cov_1qrssl00mz.b[50][1]++;
      }

      cov_1qrssl00mz.s[184]++;

      if ((cov_1qrssl00mz.b[52][0]++, !activeElement) || (cov_1qrssl00mz.b[52][1]++, !nextElement)) {
        cov_1qrssl00mz.b[51][0]++;
        cov_1qrssl00mz.s[185]++;
        // Some weirdness is happening, so we bail
        return;
      } else {
        cov_1qrssl00mz.b[51][1]++;
      }

      cov_1qrssl00mz.s[186]++;
      this._isSliding = true;
      cov_1qrssl00mz.s[187]++;

      if (isCycling) {
        cov_1qrssl00mz.b[53][0]++;
        cov_1qrssl00mz.s[188]++;
        this.pause();
      } else {
        cov_1qrssl00mz.b[53][1]++;
      }

      cov_1qrssl00mz.s[189]++;

      this._setActiveIndicatorElement(nextElement);

      cov_1qrssl00mz.s[190]++;

      if (this._element.classList.contains(ClassName.SLIDE)) {
        cov_1qrssl00mz.b[54][0]++;
        cov_1qrssl00mz.s[191]++;
        nextElement.classList.add(orderClassName);
        cov_1qrssl00mz.s[192]++;
        Util.reflow(nextElement);
        cov_1qrssl00mz.s[193]++;
        activeElement.classList.add(directionalClassName);
        cov_1qrssl00mz.s[194]++;
        nextElement.classList.add(directionalClassName);
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
        EventHandler.one(activeElement, Util.TRANSITION_END, function () {
          cov_1qrssl00mz.f[35]++;
          cov_1qrssl00mz.s[202]++;
          nextElement.classList.remove(directionalClassName);
          cov_1qrssl00mz.s[203]++;
          nextElement.classList.remove(orderClassName);
          cov_1qrssl00mz.s[204]++;
          nextElement.classList.add(ClassName.ACTIVE);
          cov_1qrssl00mz.s[205]++;
          activeElement.classList.remove(ClassName.ACTIVE);
          cov_1qrssl00mz.s[206]++;
          activeElement.classList.remove(orderClassName);
          cov_1qrssl00mz.s[207]++;
          activeElement.classList.remove(directionalClassName);
          cov_1qrssl00mz.s[208]++;
          _this4._isSliding = false;
          cov_1qrssl00mz.s[209]++;
          setTimeout(function () {
            cov_1qrssl00mz.f[36]++;
            cov_1qrssl00mz.s[210]++;
            EventHandler.trigger(_this4._element, Event.SLID, {
              relatedTarget: nextElement,
              direction: eventDirectionName,
              from: activeElementIndex,
              to: nextElementIndex
            });
          }, 0);
        });
        cov_1qrssl00mz.s[211]++;
        Util.emulateTransitionEnd(activeElement, transitionDuration);
      } else {
        cov_1qrssl00mz.b[54][1]++;
        cov_1qrssl00mz.s[212]++;
        activeElement.classList.remove(ClassName.ACTIVE);
        cov_1qrssl00mz.s[213]++;
        nextElement.classList.add(ClassName.ACTIVE);
        cov_1qrssl00mz.s[214]++;
        this._isSliding = false;
        cov_1qrssl00mz.s[215]++;
        EventHandler.trigger(this._element, Event.SLID, {
          relatedTarget: nextElement,
          direction: eventDirectionName,
          from: activeElementIndex,
          to: nextElementIndex
        });
      }

      cov_1qrssl00mz.s[216]++;

      if (isCycling) {
        cov_1qrssl00mz.b[58][0]++;
        cov_1qrssl00mz.s[217]++;
        this.cycle();
      } else {
        cov_1qrssl00mz.b[58][1]++;
      }
    } // Static
    ;

    Carousel._carouselInterface = function _carouselInterface(element, config) {
      cov_1qrssl00mz.f[37]++;
      var data = (cov_1qrssl00mz.s[218]++, Data.getData(element, DATA_KEY));

      var _config = (cov_1qrssl00mz.s[219]++, _objectSpread({}, Default, Manipulator.getDataAttributes(element)));

      cov_1qrssl00mz.s[220]++;

      if (typeof config === 'object') {
        cov_1qrssl00mz.b[59][0]++;
        cov_1qrssl00mz.s[221]++;
        _config = _objectSpread({}, _config, config);
      } else {
        cov_1qrssl00mz.b[59][1]++;
      }

      var action = (cov_1qrssl00mz.s[222]++, typeof config === 'string' ? (cov_1qrssl00mz.b[60][0]++, config) : (cov_1qrssl00mz.b[60][1]++, _config.slide));
      cov_1qrssl00mz.s[223]++;

      if (!data) {
        cov_1qrssl00mz.b[61][0]++;
        cov_1qrssl00mz.s[224]++;
        data = new Carousel(element, _config);
      } else {
        cov_1qrssl00mz.b[61][1]++;
      }

      cov_1qrssl00mz.s[225]++;

      if (typeof config === 'number') {
        cov_1qrssl00mz.b[62][0]++;
        cov_1qrssl00mz.s[226]++;
        data.to(config);
      } else {
        cov_1qrssl00mz.b[62][1]++;
        cov_1qrssl00mz.s[227]++;

        if (typeof action === 'string') {
          cov_1qrssl00mz.b[63][0]++;
          cov_1qrssl00mz.s[228]++;

          if (typeof data[action] === 'undefined') {
            cov_1qrssl00mz.b[64][0]++;
            cov_1qrssl00mz.s[229]++;
            throw new Error("No method named \"" + action + "\"");
          } else {
            cov_1qrssl00mz.b[64][1]++;
          }

          cov_1qrssl00mz.s[230]++;
          data[action]();
        } else {
          cov_1qrssl00mz.b[63][1]++;
          cov_1qrssl00mz.s[231]++;

          if ((cov_1qrssl00mz.b[66][0]++, _config.interval) && (cov_1qrssl00mz.b[66][1]++, _config.ride)) {
            cov_1qrssl00mz.b[65][0]++;
            cov_1qrssl00mz.s[232]++;
            data.pause();
            cov_1qrssl00mz.s[233]++;
            data.cycle();
          } else {
            cov_1qrssl00mz.b[65][1]++;
          }
        }
      }
    };

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      cov_1qrssl00mz.f[38]++;
      cov_1qrssl00mz.s[234]++;
      return this.each(function () {
        cov_1qrssl00mz.f[39]++;
        cov_1qrssl00mz.s[235]++;

        Carousel._carouselInterface(this, config);
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      cov_1qrssl00mz.f[40]++;
      var selector = (cov_1qrssl00mz.s[236]++, Util.getSelectorFromElement(this));
      cov_1qrssl00mz.s[237]++;

      if (!selector) {
        cov_1qrssl00mz.b[67][0]++;
        cov_1qrssl00mz.s[238]++;
        return;
      } else {
        cov_1qrssl00mz.b[67][1]++;
      }

      var target = (cov_1qrssl00mz.s[239]++, SelectorEngine.findOne(selector));
      cov_1qrssl00mz.s[240]++;

      if ((cov_1qrssl00mz.b[69][0]++, !target) || (cov_1qrssl00mz.b[69][1]++, !target.classList.contains(ClassName.CAROUSEL))) {
        cov_1qrssl00mz.b[68][0]++;
        cov_1qrssl00mz.s[241]++;
        return;
      } else {
        cov_1qrssl00mz.b[68][1]++;
      }

      var config = (cov_1qrssl00mz.s[242]++, _objectSpread({}, Manipulator.getDataAttributes(target), Manipulator.getDataAttributes(this)));
      var slideIndex = (cov_1qrssl00mz.s[243]++, this.getAttribute('data-slide-to'));
      cov_1qrssl00mz.s[244]++;

      if (slideIndex) {
        cov_1qrssl00mz.b[70][0]++;
        cov_1qrssl00mz.s[245]++;
        config.interval = false;
      } else {
        cov_1qrssl00mz.b[70][1]++;
      }

      cov_1qrssl00mz.s[246]++;

      Carousel._carouselInterface(target, config);

      cov_1qrssl00mz.s[247]++;

      if (slideIndex) {
        cov_1qrssl00mz.b[71][0]++;
        cov_1qrssl00mz.s[248]++;
        Data.getData(target, DATA_KEY).to(slideIndex);
      } else {
        cov_1qrssl00mz.b[71][1]++;
      }

      cov_1qrssl00mz.s[249]++;
      event.preventDefault();
    };

    Carousel._getInstance = function _getInstance(element) {
      cov_1qrssl00mz.f[41]++;
      cov_1qrssl00mz.s[250]++;
      return Data.getData(element, DATA_KEY);
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


  cov_1qrssl00mz.s[251]++;
  EventHandler.on(document, Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);
  cov_1qrssl00mz.s[252]++;
  EventHandler.on(window, Event.LOAD_DATA_API, function () {
    cov_1qrssl00mz.f[42]++;
    var carousels = (cov_1qrssl00mz.s[253]++, Util.makeArray(SelectorEngine.find(Selector.DATA_RIDE)));
    cov_1qrssl00mz.s[254]++;

    for (var i = (cov_1qrssl00mz.s[255]++, 0), len = (cov_1qrssl00mz.s[256]++, carousels.length); i < len; i++) {
      cov_1qrssl00mz.s[257]++;

      Carousel._carouselInterface(carousels[i], Data.getData(carousels[i], DATA_KEY));
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .carousel to jQuery only if jQuery is present
   */

  var $ = (cov_1qrssl00mz.s[258]++, Util.jQuery);
  cov_1qrssl00mz.s[259]++;

  if (typeof $ !== 'undefined') {
    cov_1qrssl00mz.b[72][0]++;
    var JQUERY_NO_CONFLICT = (cov_1qrssl00mz.s[260]++, $.fn[NAME]);
    cov_1qrssl00mz.s[261]++;
    $.fn[NAME] = Carousel._jQueryInterface;
    cov_1qrssl00mz.s[262]++;
    $.fn[NAME].Constructor = Carousel;
    cov_1qrssl00mz.s[263]++;

    $.fn[NAME].noConflict = function () {
      cov_1qrssl00mz.f[43]++;
      cov_1qrssl00mz.s[264]++;
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      cov_1qrssl00mz.s[265]++;
      return Carousel._jQueryInterface;
    };
  } else {
    cov_1qrssl00mz.b[72][1]++;
  }

  return Carousel;

}));
//# sourceMappingURL=carousel.js.map

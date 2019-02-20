/*!
  * Bootstrap dropdown.js v4.3.1-0 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2019 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/data.js'), require('./dom/eventHandler.js'), require('./dom/manipulator.js'), require('popper.js'), require('./dom/selectorEngine.js'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['./dom/data.js', './dom/eventHandler.js', './dom/manipulator.js', 'popper.js', './dom/selectorEngine.js', './util.js'], factory) :
  (global = global || self, global.Dropdown = factory(global.Data, global.EventHandler, global.Manipulator, global.Popper, global.SelectorEngine, global.Util));
}(this, function (Data, EventHandler, Manipulator, Popper, SelectorEngine, Util) { 'use strict';

  Data = Data && Data.hasOwnProperty('default') ? Data['default'] : Data;
  EventHandler = EventHandler && EventHandler.hasOwnProperty('default') ? EventHandler['default'] : EventHandler;
  Manipulator = Manipulator && Manipulator.hasOwnProperty('default') ? Manipulator['default'] : Manipulator;
  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;
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

  var cov_1nq654px9y = function () {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/dropdown.js";
    var hash = "f81a4aec028c6f5bd2ddbaf7120f3ea1e92c96be";

    var Function = function () {}.constructor;

    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/dropdown.js",
      statementMap: {
        "0": {
          start: {
            line: 21,
            column: 33
          },
          end: {
            line: 21,
            column: 43
          }
        },
        "1": {
          start: {
            line: 22,
            column: 33
          },
          end: {
            line: 22,
            column: 40
          }
        },
        "2": {
          start: {
            line: 23,
            column: 33
          },
          end: {
            line: 23,
            column: 46
          }
        },
        "3": {
          start: {
            line: 24,
            column: 33
          },
          end: {
            line: 24,
            column: 47
          }
        },
        "4": {
          start: {
            line: 25,
            column: 33
          },
          end: {
            line: 25,
            column: 44
          }
        },
        "5": {
          start: {
            line: 26,
            column: 33
          },
          end: {
            line: 26,
            column: 35
          }
        },
        "6": {
          start: {
            line: 27,
            column: 33
          },
          end: {
            line: 27,
            column: 35
          }
        },
        "7": {
          start: {
            line: 28,
            column: 33
          },
          end: {
            line: 28,
            column: 34
          }
        },
        "8": {
          start: {
            line: 29,
            column: 33
          },
          end: {
            line: 29,
            column: 35
          }
        },
        "9": {
          start: {
            line: 30,
            column: 33
          },
          end: {
            line: 30,
            column: 35
          }
        },
        "10": {
          start: {
            line: 31,
            column: 33
          },
          end: {
            line: 31,
            column: 34
          }
        },
        "11": {
          start: {
            line: 32,
            column: 33
          },
          end: {
            line: 32,
            column: 106
          }
        },
        "12": {
          start: {
            line: 34,
            column: 14
          },
          end: {
            line: 43,
            column: 1
          }
        },
        "13": {
          start: {
            line: 45,
            column: 18
          },
          end: {
            line: 54,
            column: 1
          }
        },
        "14": {
          start: {
            line: 56,
            column: 17
          },
          end: {
            line: 62,
            column: 1
          }
        },
        "15": {
          start: {
            line: 64,
            column: 22
          },
          end: {
            line: 73,
            column: 1
          }
        },
        "16": {
          start: {
            line: 75,
            column: 16
          },
          end: {
            line: 81,
            column: 1
          }
        },
        "17": {
          start: {
            line: 83,
            column: 20
          },
          end: {
            line: 89,
            column: 1
          }
        },
        "18": {
          start: {
            line: 99,
            column: 4
          },
          end: {
            line: 99,
            column: 28
          }
        },
        "19": {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 100,
            column: 25
          }
        },
        "20": {
          start: {
            line: 101,
            column: 4
          },
          end: {
            line: 101,
            column: 44
          }
        },
        "21": {
          start: {
            line: 102,
            column: 4
          },
          end: {
            line: 102,
            column: 43
          }
        },
        "22": {
          start: {
            line: 103,
            column: 4
          },
          end: {
            line: 103,
            column: 41
          }
        },
        "23": {
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 105,
            column: 29
          }
        },
        "24": {
          start: {
            line: 106,
            column: 4
          },
          end: {
            line: 106,
            column: 41
          }
        },
        "25": {
          start: {
            line: 112,
            column: 4
          },
          end: {
            line: 112,
            column: 18
          }
        },
        "26": {
          start: {
            line: 116,
            column: 4
          },
          end: {
            line: 116,
            column: 18
          }
        },
        "27": {
          start: {
            line: 120,
            column: 4
          },
          end: {
            line: 120,
            column: 22
          }
        },
        "28": {
          start: {
            line: 126,
            column: 4
          },
          end: {
            line: 128,
            column: 5
          }
        },
        "29": {
          start: {
            line: 127,
            column: 6
          },
          end: {
            line: 127,
            column: 12
          }
        },
        "30": {
          start: {
            line: 130,
            column: 21
          },
          end: {
            line: 130,
            column: 66
          }
        },
        "31": {
          start: {
            line: 131,
            column: 21
          },
          end: {
            line: 131,
            column: 66
          }
        },
        "32": {
          start: {
            line: 133,
            column: 4
          },
          end: {
            line: 133,
            column: 26
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
            column: 12
          }
        },
        "35": {
          start: {
            line: 139,
            column: 26
          },
          end: {
            line: 141,
            column: 5
          }
        },
        "36": {
          start: {
            line: 142,
            column: 22
          },
          end: {
            line: 142,
            column: 77
          }
        },
        "37": {
          start: {
            line: 144,
            column: 4
          },
          end: {
            line: 146,
            column: 5
          }
        },
        "38": {
          start: {
            line: 145,
            column: 6
          },
          end: {
            line: 145,
            column: 12
          }
        },
        "39": {
          start: {
            line: 149,
            column: 4
          },
          end: {
            line: 178,
            column: 5
          }
        },
        "40": {
          start: {
            line: 154,
            column: 6
          },
          end: {
            line: 156,
            column: 7
          }
        },
        "41": {
          start: {
            line: 155,
            column: 8
          },
          end: {
            line: 155,
            column: 95
          }
        },
        "42": {
          start: {
            line: 158,
            column: 29
          },
          end: {
            line: 158,
            column: 42
          }
        },
        "43": {
          start: {
            line: 160,
            column: 6
          },
          end: {
            line: 169,
            column: 7
          }
        },
        "44": {
          start: {
            line: 161,
            column: 8
          },
          end: {
            line: 161,
            column: 33
          }
        },
        "45": {
          start: {
            line: 162,
            column: 13
          },
          end: {
            line: 169,
            column: 7
          }
        },
        "46": {
          start: {
            line: 163,
            column: 8
          },
          end: {
            line: 163,
            column: 49
          }
        },
        "47": {
          start: {
            line: 166,
            column: 8
          },
          end: {
            line: 168,
            column: 9
          }
        },
        "48": {
          start: {
            line: 167,
            column: 10
          },
          end: {
            line: 167,
            column: 54
          }
        },
        "49": {
          start: {
            line: 174,
            column: 6
          },
          end: {
            line: 176,
            column: 7
          }
        },
        "50": {
          start: {
            line: 175,
            column: 8
          },
          end: {
            line: 175,
            column: 55
          }
        },
        "51": {
          start: {
            line: 177,
            column: 6
          },
          end: {
            line: 177,
            column: 86
          }
        },
        "52": {
          start: {
            line: 184,
            column: 4
          },
          end: {
            line: 188,
            column: 5
          }
        },
        "53": {
          start: {
            line: 186,
            column: 6
          },
          end: {
            line: 187,
            column: 81
          }
        },
        "54": {
          start: {
            line: 187,
            column: 27
          },
          end: {
            line: 187,
            column: 80
          }
        },
        "55": {
          start: {
            line: 190,
            column: 4
          },
          end: {
            line: 190,
            column: 25
          }
        },
        "56": {
          start: {
            line: 191,
            column: 4
          },
          end: {
            line: 191,
            column: 53
          }
        },
        "57": {
          start: {
            line: 193,
            column: 4
          },
          end: {
            line: 193,
            column: 55
          }
        },
        "58": {
          start: {
            line: 194,
            column: 4
          },
          end: {
            line: 194,
            column: 51
          }
        },
        "59": {
          start: {
            line: 195,
            column: 4
          },
          end: {
            line: 195,
            column: 60
          }
        },
        "60": {
          start: {
            line: 199,
            column: 4
          },
          end: {
            line: 201,
            column: 5
          }
        },
        "61": {
          start: {
            line: 200,
            column: 6
          },
          end: {
            line: 200,
            column: 12
          }
        },
        "62": {
          start: {
            line: 203,
            column: 19
          },
          end: {
            line: 203,
            column: 64
          }
        },
        "63": {
          start: {
            line: 204,
            column: 26
          },
          end: {
            line: 206,
            column: 5
          }
        },
        "64": {
          start: {
            line: 208,
            column: 22
          },
          end: {
            line: 208,
            column: 77
          }
        },
        "65": {
          start: {
            line: 210,
            column: 4
          },
          end: {
            line: 212,
            column: 5
          }
        },
        "66": {
          start: {
            line: 211,
            column: 6
          },
          end: {
            line: 211,
            column: 12
          }
        },
        "67": {
          start: {
            line: 214,
            column: 4
          },
          end: {
            line: 214,
            column: 55
          }
        },
        "68": {
          start: {
            line: 215,
            column: 4
          },
          end: {
            line: 215,
            column: 51
          }
        },
        "69": {
          start: {
            line: 216,
            column: 4
          },
          end: {
            line: 216,
            column: 60
          }
        },
        "70": {
          start: {
            line: 220,
            column: 4
          },
          end: {
            line: 222,
            column: 5
          }
        },
        "71": {
          start: {
            line: 221,
            column: 6
          },
          end: {
            line: 221,
            column: 12
          }
        },
        "72": {
          start: {
            line: 224,
            column: 19
          },
          end: {
            line: 224,
            column: 64
          }
        },
        "73": {
          start: {
            line: 225,
            column: 26
          },
          end: {
            line: 227,
            column: 5
          }
        },
        "74": {
          start: {
            line: 229,
            column: 22
          },
          end: {
            line: 229,
            column: 77
          }
        },
        "75": {
          start: {
            line: 231,
            column: 4
          },
          end: {
            line: 233,
            column: 5
          }
        },
        "76": {
          start: {
            line: 232,
            column: 6
          },
          end: {
            line: 232,
            column: 12
          }
        },
        "77": {
          start: {
            line: 235,
            column: 4
          },
          end: {
            line: 235,
            column: 55
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
            column: 61
          }
        },
        "80": {
          start: {
            line: 241,
            column: 4
          },
          end: {
            line: 241,
            column: 44
          }
        },
        "81": {
          start: {
            line: 242,
            column: 4
          },
          end: {
            line: 242,
            column: 46
          }
        },
        "82": {
          start: {
            line: 243,
            column: 4
          },
          end: {
            line: 243,
            column: 24
          }
        },
        "83": {
          start: {
            line: 244,
            column: 4
          },
          end: {
            line: 244,
            column: 21
          }
        },
        "84": {
          start: {
            line: 245,
            column: 4
          },
          end: {
            line: 248,
            column: 5
          }
        },
        "85": {
          start: {
            line: 246,
            column: 6
          },
          end: {
            line: 246,
            column: 28
          }
        },
        "86": {
          start: {
            line: 247,
            column: 6
          },
          end: {
            line: 247,
            column: 25
          }
        },
        "87": {
          start: {
            line: 252,
            column: 4
          },
          end: {
            line: 252,
            column: 41
          }
        },
        "88": {
          start: {
            line: 253,
            column: 4
          },
          end: {
            line: 255,
            column: 5
          }
        },
        "89": {
          start: {
            line: 254,
            column: 6
          },
          end: {
            line: 254,
            column: 35
          }
        },
        "90": {
          start: {
            line: 261,
            column: 4
          },
          end: {
            line: 265,
            column: 6
          }
        },
        "91": {
          start: {
            line: 262,
            column: 6
          },
          end: {
            line: 262,
            column: 28
          }
        },
        "92": {
          start: {
            line: 263,
            column: 6
          },
          end: {
            line: 263,
            column: 29
          }
        },
        "93": {
          start: {
            line: 264,
            column: 6
          },
          end: {
            line: 264,
            column: 19
          }
        },
        "94": {
          start: {
            line: 269,
            column: 4
          },
          end: {
            line: 273,
            column: 5
          }
        },
        "95": {
          start: {
            line: 275,
            column: 4
          },
          end: {
            line: 279,
            column: 5
          }
        },
        "96": {
          start: {
            line: 281,
            column: 4
          },
          end: {
            line: 281,
            column: 17
          }
        },
        "97": {
          start: {
            line: 285,
            column: 4
          },
          end: {
            line: 291,
            column: 5
          }
        },
        "98": {
          start: {
            line: 286,
            column: 21
          },
          end: {
            line: 286,
            column: 66
          }
        },
        "99": {
          start: {
            line: 288,
            column: 6
          },
          end: {
            line: 290,
            column: 7
          }
        },
        "100": {
          start: {
            line: 289,
            column: 8
          },
          end: {
            line: 289,
            column: 66
          }
        },
        "101": {
          start: {
            line: 292,
            column: 4
          },
          end: {
            line: 292,
            column: 21
          }
        },
        "102": {
          start: {
            line: 296,
            column: 27
          },
          end: {
            line: 296,
            column: 51
          }
        },
        "103": {
          start: {
            line: 297,
            column: 27
          },
          end: {
            line: 297,
            column: 47
          }
        },
        "104": {
          start: {
            line: 300,
            column: 4
          },
          end: {
            line: 311,
            column: 5
          }
        },
        "105": {
          start: {
            line: 301,
            column: 6
          },
          end: {
            line: 301,
            column: 35
          }
        },
        "106": {
          start: {
            line: 302,
            column: 6
          },
          end: {
            line: 304,
            column: 7
          }
        },
        "107": {
          start: {
            line: 303,
            column: 8
          },
          end: {
            line: 303,
            column: 40
          }
        },
        "108": {
          start: {
            line: 305,
            column: 11
          },
          end: {
            line: 311,
            column: 5
          }
        },
        "109": {
          start: {
            line: 306,
            column: 6
          },
          end: {
            line: 306,
            column: 37
          }
        },
        "110": {
          start: {
            line: 307,
            column: 11
          },
          end: {
            line: 311,
            column: 5
          }
        },
        "111": {
          start: {
            line: 308,
            column: 6
          },
          end: {
            line: 308,
            column: 36
          }
        },
        "112": {
          start: {
            line: 309,
            column: 11
          },
          end: {
            line: 311,
            column: 5
          }
        },
        "113": {
          start: {
            line: 310,
            column: 6
          },
          end: {
            line: 310,
            column: 41
          }
        },
        "114": {
          start: {
            line: 312,
            column: 4
          },
          end: {
            line: 312,
            column: 20
          }
        },
        "115": {
          start: {
            line: 316,
            column: 4
          },
          end: {
            line: 316,
            column: 68
          }
        },
        "116": {
          start: {
            line: 320,
            column: 19
          },
          end: {
            line: 320,
            column: 21
          }
        },
        "117": {
          start: {
            line: 322,
            column: 4
          },
          end: {
            line: 333,
            column: 5
          }
        },
        "118": {
          start: {
            line: 323,
            column: 6
          },
          end: {
            line: 330,
            column: 7
          }
        },
        "119": {
          start: {
            line: 324,
            column: 8
          },
          end: {
            line: 327,
            column: 9
          }
        },
        "120": {
          start: {
            line: 329,
            column: 8
          },
          end: {
            line: 329,
            column: 19
          }
        },
        "121": {
          start: {
            line: 332,
            column: 6
          },
          end: {
            line: 332,
            column: 41
          }
        },
        "122": {
          start: {
            line: 335,
            column: 4
          },
          end: {
            line: 335,
            column: 17
          }
        },
        "123": {
          start: {
            line: 339,
            column: 25
          },
          end: {
            line: 350,
            column: 5
          }
        },
        "124": {
          start: {
            line: 353,
            column: 4
          },
          end: {
            line: 357,
            column: 5
          }
        },
        "125": {
          start: {
            line: 354,
            column: 6
          },
          end: {
            line: 356,
            column: 7
          }
        },
        "126": {
          start: {
            line: 359,
            column: 4
          },
          end: {
            line: 359,
            column: 23
          }
        },
        "127": {
          start: {
            line: 365,
            column: 15
          },
          end: {
            line: 365,
            column: 46
          }
        },
        "128": {
          start: {
            line: 366,
            column: 20
          },
          end: {
            line: 366,
            column: 62
          }
        },
        "129": {
          start: {
            line: 368,
            column: 4
          },
          end: {
            line: 370,
            column: 5
          }
        },
        "130": {
          start: {
            line: 369,
            column: 6
          },
          end: {
            line: 369,
            column: 43
          }
        },
        "131": {
          start: {
            line: 372,
            column: 4
          },
          end: {
            line: 377,
            column: 5
          }
        },
        "132": {
          start: {
            line: 373,
            column: 6
          },
          end: {
            line: 375,
            column: 7
          }
        },
        "133": {
          start: {
            line: 374,
            column: 8
          },
          end: {
            line: 374,
            column: 54
          }
        },
        "134": {
          start: {
            line: 376,
            column: 6
          },
          end: {
            line: 376,
            column: 20
          }
        },
        "135": {
          start: {
            line: 381,
            column: 4
          },
          end: {
            line: 383,
            column: 6
          }
        },
        "136": {
          start: {
            line: 382,
            column: 6
          },
          end: {
            line: 382,
            column: 47
          }
        },
        "137": {
          start: {
            line: 387,
            column: 4
          },
          end: {
            line: 390,
            column: 5
          }
        },
        "138": {
          start: {
            line: 389,
            column: 6
          },
          end: {
            line: 389,
            column: 12
          }
        },
        "139": {
          start: {
            line: 392,
            column: 20
          },
          end: {
            line: 392,
            column: 77
          }
        },
        "140": {
          start: {
            line: 393,
            column: 4
          },
          end: {
            line: 437,
            column: 5
          }
        },
        "141": {
          start: {
            line: 393,
            column: 17
          },
          end: {
            line: 393,
            column: 18
          }
        },
        "142": {
          start: {
            line: 393,
            column: 26
          },
          end: {
            line: 393,
            column: 40
          }
        },
        "143": {
          start: {
            line: 394,
            column: 28
          },
          end: {
            line: 394,
            column: 70
          }
        },
        "144": {
          start: {
            line: 395,
            column: 28
          },
          end: {
            line: 395,
            column: 62
          }
        },
        "145": {
          start: {
            line: 396,
            column: 28
          },
          end: {
            line: 398,
            column: 7
          }
        },
        "146": {
          start: {
            line: 400,
            column: 6
          },
          end: {
            line: 402,
            column: 7
          }
        },
        "147": {
          start: {
            line: 401,
            column: 8
          },
          end: {
            line: 401,
            column: 40
          }
        },
        "148": {
          start: {
            line: 404,
            column: 6
          },
          end: {
            line: 406,
            column: 7
          }
        },
        "149": {
          start: {
            line: 405,
            column: 8
          },
          end: {
            line: 405,
            column: 16
          }
        },
        "150": {
          start: {
            line: 408,
            column: 27
          },
          end: {
            line: 408,
            column: 40
          }
        },
        "151": {
          start: {
            line: 409,
            column: 6
          },
          end: {
            line: 411,
            column: 7
          }
        },
        "152": {
          start: {
            line: 410,
            column: 8
          },
          end: {
            line: 410,
            column: 16
          }
        },
        "153": {
          start: {
            line: 413,
            column: 6
          },
          end: {
            line: 418,
            column: 7
          }
        },
        "154": {
          start: {
            line: 417,
            column: 8
          },
          end: {
            line: 417,
            column: 16
          }
        },
        "155": {
          start: {
            line: 420,
            column: 24
          },
          end: {
            line: 420,
            column: 79
          }
        },
        "156": {
          start: {
            line: 421,
            column: 6
          },
          end: {
            line: 423,
            column: 7
          }
        },
        "157": {
          start: {
            line: 422,
            column: 8
          },
          end: {
            line: 422,
            column: 16
          }
        },
        "158": {
          start: {
            line: 427,
            column: 6
          },
          end: {
            line: 430,
            column: 7
          }
        },
        "159": {
          start: {
            line: 428,
            column: 8
          },
          end: {
            line: 429,
            column: 84
          }
        },
        "160": {
          start: {
            line: 429,
            column: 29
          },
          end: {
            line: 429,
            column: 83
          }
        },
        "161": {
          start: {
            line: 432,
            column: 6
          },
          end: {
            line: 432,
            column: 55
          }
        },
        "162": {
          start: {
            line: 434,
            column: 6
          },
          end: {
            line: 434,
            column: 51
          }
        },
        "163": {
          start: {
            line: 435,
            column: 6
          },
          end: {
            line: 435,
            column: 45
          }
        },
        "164": {
          start: {
            line: 436,
            column: 6
          },
          end: {
            line: 436,
            column: 63
          }
        },
        "165": {
          start: {
            line: 442,
            column: 21
          },
          end: {
            line: 442,
            column: 57
          }
        },
        "166": {
          start: {
            line: 444,
            column: 4
          },
          end: {
            line: 446,
            column: 5
          }
        },
        "167": {
          start: {
            line: 445,
            column: 6
          },
          end: {
            line: 445,
            column: 47
          }
        },
        "168": {
          start: {
            line: 448,
            column: 4
          },
          end: {
            line: 448,
            column: 39
          }
        },
        "169": {
          start: {
            line: 459,
            column: 4
          },
          end: {
            line: 464,
            column: 5
          }
        },
        "170": {
          start: {
            line: 463,
            column: 6
          },
          end: {
            line: 463,
            column: 12
          }
        },
        "171": {
          start: {
            line: 466,
            column: 4
          },
          end: {
            line: 466,
            column: 26
          }
        },
        "172": {
          start: {
            line: 467,
            column: 4
          },
          end: {
            line: 467,
            column: 27
          }
        },
        "173": {
          start: {
            line: 469,
            column: 4
          },
          end: {
            line: 471,
            column: 5
          }
        },
        "174": {
          start: {
            line: 470,
            column: 6
          },
          end: {
            line: 470,
            column: 12
          }
        },
        "175": {
          start: {
            line: 473,
            column: 21
          },
          end: {
            line: 473,
            column: 57
          }
        },
        "176": {
          start: {
            line: 474,
            column: 21
          },
          end: {
            line: 474,
            column: 62
          }
        },
        "177": {
          start: {
            line: 476,
            column: 4
          },
          end: {
            line: 483,
            column: 5
          }
        },
        "178": {
          start: {
            line: 477,
            column: 6
          },
          end: {
            line: 479,
            column: 7
          }
        },
        "179": {
          start: {
            line: 478,
            column: 8
          },
          end: {
            line: 478,
            column: 91
          }
        },
        "180": {
          start: {
            line: 481,
            column: 6
          },
          end: {
            line: 481,
            column: 28
          }
        },
        "181": {
          start: {
            line: 482,
            column: 6
          },
          end: {
            line: 482,
            column: 12
          }
        },
        "182": {
          start: {
            line: 485,
            column: 18
          },
          end: {
            line: 485,
            column: 85
          }
        },
        "183": {
          start: {
            line: 487,
            column: 4
          },
          end: {
            line: 489,
            column: 5
          }
        },
        "184": {
          start: {
            line: 488,
            column: 6
          },
          end: {
            line: 488,
            column: 12
          }
        },
        "185": {
          start: {
            line: 491,
            column: 16
          },
          end: {
            line: 491,
            column: 43
          }
        },
        "186": {
          start: {
            line: 493,
            column: 4
          },
          end: {
            line: 495,
            column: 5
          }
        },
        "187": {
          start: {
            line: 494,
            column: 6
          },
          end: {
            line: 494,
            column: 13
          }
        },
        "188": {
          start: {
            line: 497,
            column: 4
          },
          end: {
            line: 499,
            column: 5
          }
        },
        "189": {
          start: {
            line: 498,
            column: 6
          },
          end: {
            line: 498,
            column: 13
          }
        },
        "190": {
          start: {
            line: 501,
            column: 4
          },
          end: {
            line: 503,
            column: 5
          }
        },
        "191": {
          start: {
            line: 502,
            column: 6
          },
          end: {
            line: 502,
            column: 15
          }
        },
        "192": {
          start: {
            line: 505,
            column: 4
          },
          end: {
            line: 505,
            column: 24
          }
        },
        "193": {
          start: {
            line: 509,
            column: 4
          },
          end: {
            line: 509,
            column: 42
          }
        },
        "194": {
          start: {
            line: 519,
            column: 0
          },
          end: {
            line: 519,
            column: 104
          }
        },
        "195": {
          start: {
            line: 520,
            column: 0
          },
          end: {
            line: 520,
            column: 97
          }
        },
        "196": {
          start: {
            line: 521,
            column: 0
          },
          end: {
            line: 521,
            column: 69
          }
        },
        "197": {
          start: {
            line: 522,
            column: 0
          },
          end: {
            line: 522,
            column: 69
          }
        },
        "198": {
          start: {
            line: 523,
            column: 0
          },
          end: {
            line: 527,
            column: 2
          }
        },
        "199": {
          start: {
            line: 524,
            column: 2
          },
          end: {
            line: 524,
            column: 24
          }
        },
        "200": {
          start: {
            line: 525,
            column: 2
          },
          end: {
            line: 525,
            column: 25
          }
        },
        "201": {
          start: {
            line: 526,
            column: 2
          },
          end: {
            line: 526,
            column: 45
          }
        },
        "202": {
          start: {
            line: 528,
            column: 0
          },
          end: {
            line: 529,
            column: 86
          }
        },
        "203": {
          start: {
            line: 529,
            column: 66
          },
          end: {
            line: 529,
            column: 85
          }
        },
        "204": {
          start: {
            line: 538,
            column: 10
          },
          end: {
            line: 538,
            column: 21
          }
        },
        "205": {
          start: {
            line: 539,
            column: 0
          },
          end: {
            line: 547,
            column: 1
          }
        },
        "206": {
          start: {
            line: 540,
            column: 29
          },
          end: {
            line: 540,
            column: 39
          }
        },
        "207": {
          start: {
            line: 541,
            column: 2
          },
          end: {
            line: 541,
            column: 54
          }
        },
        "208": {
          start: {
            line: 542,
            column: 2
          },
          end: {
            line: 542,
            column: 37
          }
        },
        "209": {
          start: {
            line: 543,
            column: 2
          },
          end: {
            line: 546,
            column: 3
          }
        },
        "210": {
          start: {
            line: 544,
            column: 4
          },
          end: {
            line: 544,
            column: 35
          }
        },
        "211": {
          start: {
            line: 545,
            column: 4
          },
          end: {
            line: 545,
            column: 36
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
              line: 107,
              column: 3
            }
          },
          line: 98
        },
        "1": {
          name: "(anonymous_1)",
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
              column: 23
            },
            end: {
              line: 113,
              column: 3
            }
          },
          line: 111
        },
        "2": {
          name: "(anonymous_2)",
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
        "3": {
          name: "(anonymous_3)",
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
              column: 27
            },
            end: {
              line: 121,
              column: 3
            }
          },
          line: 119
        },
        "4": {
          name: "(anonymous_4)",
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
              column: 11
            },
            end: {
              line: 196,
              column: 3
            }
          },
          line: 125
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 187,
              column: 17
            },
            end: {
              line: 187,
              column: 18
            }
          },
          loc: {
            start: {
              line: 187,
              column: 27
            },
            end: {
              line: 187,
              column: 80
            }
          },
          line: 187
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 198,
              column: 2
            },
            end: {
              line: 198,
              column: 3
            }
          },
          loc: {
            start: {
              line: 198,
              column: 9
            },
            end: {
              line: 217,
              column: 3
            }
          },
          line: 198
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 219,
              column: 2
            },
            end: {
              line: 219,
              column: 3
            }
          },
          loc: {
            start: {
              line: 219,
              column: 9
            },
            end: {
              line: 238,
              column: 3
            }
          },
          line: 219
        },
        "8": {
          name: "(anonymous_8)",
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
              column: 12
            },
            end: {
              line: 249,
              column: 3
            }
          },
          line: 240
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 251,
              column: 2
            },
            end: {
              line: 251,
              column: 3
            }
          },
          loc: {
            start: {
              line: 251,
              column: 11
            },
            end: {
              line: 256,
              column: 3
            }
          },
          line: 251
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
              column: 23
            },
            end: {
              line: 266,
              column: 3
            }
          },
          line: 260
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 261,
              column: 48
            },
            end: {
              line: 261,
              column: 49
            }
          },
          loc: {
            start: {
              line: 261,
              column: 59
            },
            end: {
              line: 265,
              column: 5
            }
          },
          line: 261
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
              column: 21
            },
            end: {
              line: 282,
              column: 3
            }
          },
          line: 268
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 284,
              column: 2
            },
            end: {
              line: 284,
              column: 3
            }
          },
          loc: {
            start: {
              line: 284,
              column: 20
            },
            end: {
              line: 293,
              column: 3
            }
          },
          line: 284
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 295,
              column: 2
            },
            end: {
              line: 295,
              column: 3
            }
          },
          loc: {
            start: {
              line: 295,
              column: 18
            },
            end: {
              line: 313,
              column: 3
            }
          },
          line: 295
        },
        "15": {
          name: "(anonymous_15)",
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
              line: 317,
              column: 3
            }
          },
          line: 315
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
              column: 15
            },
            end: {
              line: 336,
              column: 3
            }
          },
          line: 319
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 323,
              column: 18
            },
            end: {
              line: 323,
              column: 19
            }
          },
          loc: {
            start: {
              line: 323,
              column: 28
            },
            end: {
              line: 330,
              column: 7
            }
          },
          line: 323
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 338,
              column: 2
            },
            end: {
              line: 338,
              column: 3
            }
          },
          loc: {
            start: {
              line: 338,
              column: 21
            },
            end: {
              line: 360,
              column: 3
            }
          },
          line: 338
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 364,
              column: 2
            },
            end: {
              line: 364,
              column: 3
            }
          },
          loc: {
            start: {
              line: 364,
              column: 45
            },
            end: {
              line: 378,
              column: 3
            }
          },
          line: 364
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
              column: 34
            },
            end: {
              line: 384,
              column: 3
            }
          },
          line: 380
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 381,
              column: 21
            },
            end: {
              line: 381,
              column: 22
            }
          },
          loc: {
            start: {
              line: 381,
              column: 33
            },
            end: {
              line: 383,
              column: 5
            }
          },
          line: 381
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 386,
              column: 2
            },
            end: {
              line: 386,
              column: 3
            }
          },
          loc: {
            start: {
              line: 386,
              column: 28
            },
            end: {
              line: 438,
              column: 3
            }
          },
          line: 386
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 429,
              column: 19
            },
            end: {
              line: 429,
              column: 20
            }
          },
          loc: {
            start: {
              line: 429,
              column: 29
            },
            end: {
              line: 429,
              column: 83
            }
          },
          line: 429
        },
        "24": {
          name: "(anonymous_24)",
          decl: {
            start: {
              line: 440,
              column: 2
            },
            end: {
              line: 440,
              column: 3
            }
          },
          loc: {
            start: {
              line: 440,
              column: 40
            },
            end: {
              line: 449,
              column: 3
            }
          },
          line: 440
        },
        "25": {
          name: "(anonymous_25)",
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
              line: 506,
              column: 3
            }
          },
          line: 451
        },
        "26": {
          name: "(anonymous_26)",
          decl: {
            start: {
              line: 508,
              column: 2
            },
            end: {
              line: 508,
              column: 3
            }
          },
          loc: {
            start: {
              line: 508,
              column: 31
            },
            end: {
              line: 510,
              column: 3
            }
          },
          line: 508
        },
        "27": {
          name: "(anonymous_27)",
          decl: {
            start: {
              line: 523,
              column: 70
            },
            end: {
              line: 523,
              column: 71
            }
          },
          loc: {
            start: {
              line: 523,
              column: 87
            },
            end: {
              line: 527,
              column: 1
            }
          },
          line: 523
        },
        "28": {
          name: "(anonymous_28)",
          decl: {
            start: {
              line: 529,
              column: 59
            },
            end: {
              line: 529,
              column: 60
            }
          },
          loc: {
            start: {
              line: 529,
              column: 66
            },
            end: {
              line: 529,
              column: 85
            }
          },
          line: 529
        },
        "29": {
          name: "(anonymous_29)",
          decl: {
            start: {
              line: 543,
              column: 29
            },
            end: {
              line: 543,
              column: 30
            }
          },
          loc: {
            start: {
              line: 543,
              column: 35
            },
            end: {
              line: 546,
              column: 3
            }
          },
          line: 543
        }
      },
      branchMap: {
        "0": {
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
        "1": {
          loc: {
            start: {
              line: 126,
              column: 8
            },
            end: {
              line: 126,
              column: 86
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 126,
              column: 8
            },
            end: {
              line: 126,
              column: 30
            }
          }, {
            start: {
              line: 126,
              column: 34
            },
            end: {
              line: 126,
              column: 86
            }
          }],
          line: 126
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
        "4": {
          loc: {
            start: {
              line: 149,
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
              line: 149,
              column: 4
            },
            end: {
              line: 178,
              column: 5
            }
          }, {
            start: {
              line: 149,
              column: 4
            },
            end: {
              line: 178,
              column: 5
            }
          }],
          line: 149
        },
        "5": {
          loc: {
            start: {
              line: 154,
              column: 6
            },
            end: {
              line: 156,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 154,
              column: 6
            },
            end: {
              line: 156,
              column: 7
            }
          }, {
            start: {
              line: 154,
              column: 6
            },
            end: {
              line: 156,
              column: 7
            }
          }],
          line: 154
        },
        "6": {
          loc: {
            start: {
              line: 160,
              column: 6
            },
            end: {
              line: 169,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 160,
              column: 6
            },
            end: {
              line: 169,
              column: 7
            }
          }, {
            start: {
              line: 160,
              column: 6
            },
            end: {
              line: 169,
              column: 7
            }
          }],
          line: 160
        },
        "7": {
          loc: {
            start: {
              line: 162,
              column: 13
            },
            end: {
              line: 169,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 162,
              column: 13
            },
            end: {
              line: 169,
              column: 7
            }
          }, {
            start: {
              line: 162,
              column: 13
            },
            end: {
              line: 169,
              column: 7
            }
          }],
          line: 162
        },
        "8": {
          loc: {
            start: {
              line: 166,
              column: 8
            },
            end: {
              line: 168,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 166,
              column: 8
            },
            end: {
              line: 168,
              column: 9
            }
          }, {
            start: {
              line: 166,
              column: 8
            },
            end: {
              line: 168,
              column: 9
            }
          }],
          line: 166
        },
        "9": {
          loc: {
            start: {
              line: 174,
              column: 6
            },
            end: {
              line: 176,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 174,
              column: 6
            },
            end: {
              line: 176,
              column: 7
            }
          }, {
            start: {
              line: 174,
              column: 6
            },
            end: {
              line: 176,
              column: 7
            }
          }],
          line: 174
        },
        "10": {
          loc: {
            start: {
              line: 184,
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
              line: 184,
              column: 4
            },
            end: {
              line: 188,
              column: 5
            }
          }, {
            start: {
              line: 184,
              column: 4
            },
            end: {
              line: 188,
              column: 5
            }
          }],
          line: 184
        },
        "11": {
          loc: {
            start: {
              line: 184,
              column: 8
            },
            end: {
              line: 185,
              column: 81
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 184,
              column: 8
            },
            end: {
              line: 184,
              column: 50
            }
          }, {
            start: {
              line: 185,
              column: 6
            },
            end: {
              line: 185,
              column: 81
            }
          }],
          line: 184
        },
        "12": {
          loc: {
            start: {
              line: 199,
              column: 4
            },
            end: {
              line: 201,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 199,
              column: 4
            },
            end: {
              line: 201,
              column: 5
            }
          }, {
            start: {
              line: 199,
              column: 4
            },
            end: {
              line: 201,
              column: 5
            }
          }],
          line: 199
        },
        "13": {
          loc: {
            start: {
              line: 199,
              column: 8
            },
            end: {
              line: 199,
              column: 135
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 199,
              column: 8
            },
            end: {
              line: 199,
              column: 30
            }
          }, {
            start: {
              line: 199,
              column: 34
            },
            end: {
              line: 199,
              column: 86
            }
          }, {
            start: {
              line: 199,
              column: 90
            },
            end: {
              line: 199,
              column: 135
            }
          }],
          line: 199
        },
        "14": {
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
        "15": {
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
        "16": {
          loc: {
            start: {
              line: 220,
              column: 8
            },
            end: {
              line: 220,
              column: 136
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 220,
              column: 8
            },
            end: {
              line: 220,
              column: 30
            }
          }, {
            start: {
              line: 220,
              column: 34
            },
            end: {
              line: 220,
              column: 86
            }
          }, {
            start: {
              line: 220,
              column: 90
            },
            end: {
              line: 220,
              column: 136
            }
          }],
          line: 220
        },
        "17": {
          loc: {
            start: {
              line: 231,
              column: 4
            },
            end: {
              line: 233,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 231,
              column: 4
            },
            end: {
              line: 233,
              column: 5
            }
          }, {
            start: {
              line: 231,
              column: 4
            },
            end: {
              line: 233,
              column: 5
            }
          }],
          line: 231
        },
        "18": {
          loc: {
            start: {
              line: 245,
              column: 4
            },
            end: {
              line: 248,
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
              line: 248,
              column: 5
            }
          }, {
            start: {
              line: 245,
              column: 4
            },
            end: {
              line: 248,
              column: 5
            }
          }],
          line: 245
        },
        "19": {
          loc: {
            start: {
              line: 253,
              column: 4
            },
            end: {
              line: 255,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 253,
              column: 4
            },
            end: {
              line: 255,
              column: 5
            }
          }, {
            start: {
              line: 253,
              column: 4
            },
            end: {
              line: 255,
              column: 5
            }
          }],
          line: 253
        },
        "20": {
          loc: {
            start: {
              line: 285,
              column: 4
            },
            end: {
              line: 291,
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
              line: 291,
              column: 5
            }
          }, {
            start: {
              line: 285,
              column: 4
            },
            end: {
              line: 291,
              column: 5
            }
          }],
          line: 285
        },
        "21": {
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
        "22": {
          loc: {
            start: {
              line: 300,
              column: 4
            },
            end: {
              line: 311,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 300,
              column: 4
            },
            end: {
              line: 311,
              column: 5
            }
          }, {
            start: {
              line: 300,
              column: 4
            },
            end: {
              line: 311,
              column: 5
            }
          }],
          line: 300
        },
        "23": {
          loc: {
            start: {
              line: 302,
              column: 6
            },
            end: {
              line: 304,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 302,
              column: 6
            },
            end: {
              line: 304,
              column: 7
            }
          }, {
            start: {
              line: 302,
              column: 6
            },
            end: {
              line: 304,
              column: 7
            }
          }],
          line: 302
        },
        "24": {
          loc: {
            start: {
              line: 305,
              column: 11
            },
            end: {
              line: 311,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 305,
              column: 11
            },
            end: {
              line: 311,
              column: 5
            }
          }, {
            start: {
              line: 305,
              column: 11
            },
            end: {
              line: 311,
              column: 5
            }
          }],
          line: 305
        },
        "25": {
          loc: {
            start: {
              line: 307,
              column: 11
            },
            end: {
              line: 311,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 307,
              column: 11
            },
            end: {
              line: 311,
              column: 5
            }
          }, {
            start: {
              line: 307,
              column: 11
            },
            end: {
              line: 311,
              column: 5
            }
          }],
          line: 307
        },
        "26": {
          loc: {
            start: {
              line: 309,
              column: 11
            },
            end: {
              line: 311,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 309,
              column: 11
            },
            end: {
              line: 311,
              column: 5
            }
          }, {
            start: {
              line: 309,
              column: 11
            },
            end: {
              line: 311,
              column: 5
            }
          }],
          line: 309
        },
        "27": {
          loc: {
            start: {
              line: 322,
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
              line: 322,
              column: 4
            },
            end: {
              line: 333,
              column: 5
            }
          }, {
            start: {
              line: 322,
              column: 4
            },
            end: {
              line: 333,
              column: 5
            }
          }],
          line: 322
        },
        "28": {
          loc: {
            start: {
              line: 326,
              column: 13
            },
            end: {
              line: 326,
              column: 67
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 326,
              column: 13
            },
            end: {
              line: 326,
              column: 61
            }
          }, {
            start: {
              line: 326,
              column: 65
            },
            end: {
              line: 326,
              column: 67
            }
          }],
          line: 326
        },
        "29": {
          loc: {
            start: {
              line: 353,
              column: 4
            },
            end: {
              line: 357,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 353,
              column: 4
            },
            end: {
              line: 357,
              column: 5
            }
          }, {
            start: {
              line: 353,
              column: 4
            },
            end: {
              line: 357,
              column: 5
            }
          }],
          line: 353
        },
        "30": {
          loc: {
            start: {
              line: 366,
              column: 20
            },
            end: {
              line: 366,
              column: 62
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 366,
              column: 49
            },
            end: {
              line: 366,
              column: 55
            }
          }, {
            start: {
              line: 366,
              column: 58
            },
            end: {
              line: 366,
              column: 62
            }
          }],
          line: 366
        },
        "31": {
          loc: {
            start: {
              line: 368,
              column: 4
            },
            end: {
              line: 370,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 368,
              column: 4
            },
            end: {
              line: 370,
              column: 5
            }
          }, {
            start: {
              line: 368,
              column: 4
            },
            end: {
              line: 370,
              column: 5
            }
          }],
          line: 368
        },
        "32": {
          loc: {
            start: {
              line: 372,
              column: 4
            },
            end: {
              line: 377,
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
              line: 377,
              column: 5
            }
          }, {
            start: {
              line: 372,
              column: 4
            },
            end: {
              line: 377,
              column: 5
            }
          }],
          line: 372
        },
        "33": {
          loc: {
            start: {
              line: 373,
              column: 6
            },
            end: {
              line: 375,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 373,
              column: 6
            },
            end: {
              line: 375,
              column: 7
            }
          }, {
            start: {
              line: 373,
              column: 6
            },
            end: {
              line: 375,
              column: 7
            }
          }],
          line: 373
        },
        "34": {
          loc: {
            start: {
              line: 387,
              column: 4
            },
            end: {
              line: 390,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 387,
              column: 4
            },
            end: {
              line: 390,
              column: 5
            }
          }, {
            start: {
              line: 387,
              column: 4
            },
            end: {
              line: 390,
              column: 5
            }
          }],
          line: 387
        },
        "35": {
          loc: {
            start: {
              line: 387,
              column: 8
            },
            end: {
              line: 388,
              column: 60
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 387,
              column: 8
            },
            end: {
              line: 387,
              column: 13
            }
          }, {
            start: {
              line: 387,
              column: 18
            },
            end: {
              line: 387,
              column: 58
            }
          }, {
            start: {
              line: 388,
              column: 6
            },
            end: {
              line: 388,
              column: 28
            }
          }, {
            start: {
              line: 388,
              column: 32
            },
            end: {
              line: 388,
              column: 59
            }
          }],
          line: 387
        },
        "36": {
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
        "37": {
          loc: {
            start: {
              line: 400,
              column: 10
            },
            end: {
              line: 400,
              column: 41
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
              column: 19
            },
            end: {
              line: 400,
              column: 41
            }
          }],
          line: 400
        },
        "38": {
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
        "39": {
          loc: {
            start: {
              line: 409,
              column: 6
            },
            end: {
              line: 411,
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
              line: 411,
              column: 7
            }
          }, {
            start: {
              line: 409,
              column: 6
            },
            end: {
              line: 411,
              column: 7
            }
          }],
          line: 409
        },
        "40": {
          loc: {
            start: {
              line: 413,
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
              line: 413,
              column: 6
            },
            end: {
              line: 418,
              column: 7
            }
          }, {
            start: {
              line: 413,
              column: 6
            },
            end: {
              line: 418,
              column: 7
            }
          }],
          line: 413
        },
        "41": {
          loc: {
            start: {
              line: 413,
              column: 10
            },
            end: {
              line: 416,
              column: 39
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 413,
              column: 10
            },
            end: {
              line: 413,
              column: 15
            }
          }, {
            start: {
              line: 413,
              column: 20
            },
            end: {
              line: 413,
              column: 42
            }
          }, {
            start: {
              line: 414,
              column: 10
            },
            end: {
              line: 414,
              column: 54
            }
          }, {
            start: {
              line: 415,
              column: 10
            },
            end: {
              line: 415,
              column: 32
            }
          }, {
            start: {
              line: 415,
              column: 36
            },
            end: {
              line: 415,
              column: 63
            }
          }, {
            start: {
              line: 416,
              column: 10
            },
            end: {
              line: 416,
              column: 39
            }
          }],
          line: 413
        },
        "42": {
          loc: {
            start: {
              line: 421,
              column: 6
            },
            end: {
              line: 423,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 421,
              column: 6
            },
            end: {
              line: 423,
              column: 7
            }
          }, {
            start: {
              line: 421,
              column: 6
            },
            end: {
              line: 423,
              column: 7
            }
          }],
          line: 421
        },
        "43": {
          loc: {
            start: {
              line: 427,
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
              line: 427,
              column: 6
            },
            end: {
              line: 430,
              column: 7
            }
          }, {
            start: {
              line: 427,
              column: 6
            },
            end: {
              line: 430,
              column: 7
            }
          }],
          line: 427
        },
        "44": {
          loc: {
            start: {
              line: 444,
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
              line: 444,
              column: 4
            },
            end: {
              line: 446,
              column: 5
            }
          }, {
            start: {
              line: 444,
              column: 4
            },
            end: {
              line: 446,
              column: 5
            }
          }],
          line: 444
        },
        "45": {
          loc: {
            start: {
              line: 448,
              column: 11
            },
            end: {
              line: 448,
              column: 39
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 448,
              column: 11
            },
            end: {
              line: 448,
              column: 17
            }
          }, {
            start: {
              line: 448,
              column: 21
            },
            end: {
              line: 448,
              column: 39
            }
          }],
          line: 448
        },
        "46": {
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
        "47": {
          loc: {
            start: {
              line: 459,
              column: 8
            },
            end: {
              line: 462,
              column: 96
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
              column: 60
            }
          }, {
            start: {
              line: 462,
              column: 63
            },
            end: {
              line: 462,
              column: 96
            }
          }],
          line: 459
        },
        "48": {
          loc: {
            start: {
              line: 460,
              column: 8
            },
            end: {
              line: 462,
              column: 60
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
              column: 59
            }
          }],
          line: 460
        },
        "49": {
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
        "50": {
          loc: {
            start: {
              line: 469,
              column: 8
            },
            end: {
              line: 469,
              column: 68
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
              column: 68
            }
          }],
          line: 469
        },
        "51": {
          loc: {
            start: {
              line: 476,
              column: 4
            },
            end: {
              line: 483,
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
              line: 483,
              column: 5
            }
          }, {
            start: {
              line: 476,
              column: 4
            },
            end: {
              line: 483,
              column: 5
            }
          }],
          line: 476
        },
        "52": {
          loc: {
            start: {
              line: 476,
              column: 8
            },
            end: {
              line: 476,
              column: 98
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
              column: 29
            }
          }, {
            start: {
              line: 476,
              column: 34
            },
            end: {
              line: 476,
              column: 64
            }
          }, {
            start: {
              line: 476,
              column: 68
            },
            end: {
              line: 476,
              column: 97
            }
          }],
          line: 476
        },
        "53": {
          loc: {
            start: {
              line: 477,
              column: 6
            },
            end: {
              line: 479,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 477,
              column: 6
            },
            end: {
              line: 479,
              column: 7
            }
          }, {
            start: {
              line: 477,
              column: 6
            },
            end: {
              line: 479,
              column: 7
            }
          }],
          line: 477
        },
        "54": {
          loc: {
            start: {
              line: 487,
              column: 4
            },
            end: {
              line: 489,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 487,
              column: 4
            },
            end: {
              line: 489,
              column: 5
            }
          }, {
            start: {
              line: 487,
              column: 4
            },
            end: {
              line: 489,
              column: 5
            }
          }],
          line: 487
        },
        "55": {
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
        "56": {
          loc: {
            start: {
              line: 493,
              column: 8
            },
            end: {
              line: 493,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 493,
              column: 8
            },
            end: {
              line: 493,
              column: 40
            }
          }, {
            start: {
              line: 493,
              column: 44
            },
            end: {
              line: 493,
              column: 53
            }
          }],
          line: 493
        },
        "57": {
          loc: {
            start: {
              line: 497,
              column: 4
            },
            end: {
              line: 499,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 497,
              column: 4
            },
            end: {
              line: 499,
              column: 5
            }
          }, {
            start: {
              line: 497,
              column: 4
            },
            end: {
              line: 499,
              column: 5
            }
          }],
          line: 497
        },
        "58": {
          loc: {
            start: {
              line: 497,
              column: 8
            },
            end: {
              line: 497,
              column: 70
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 497,
              column: 8
            },
            end: {
              line: 497,
              column: 42
            }
          }, {
            start: {
              line: 497,
              column: 46
            },
            end: {
              line: 497,
              column: 70
            }
          }],
          line: 497
        },
        "59": {
          loc: {
            start: {
              line: 501,
              column: 4
            },
            end: {
              line: 503,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 501,
              column: 4
            },
            end: {
              line: 503,
              column: 5
            }
          }, {
            start: {
              line: 501,
              column: 4
            },
            end: {
              line: 503,
              column: 5
            }
          }],
          line: 501
        },
        "60": {
          loc: {
            start: {
              line: 539,
              column: 0
            },
            end: {
              line: 547,
              column: 1
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 539,
              column: 0
            },
            end: {
              line: 547,
              column: 1
            }
          }, {
            start: {
              line: 539,
              column: 0
            },
            end: {
              line: 547,
              column: 1
            }
          }],
          line: 539
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
        "211": 0
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
        "29": 0
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
        "13": [0, 0, 0],
        "14": [0, 0],
        "15": [0, 0],
        "16": [0, 0, 0],
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
        "35": [0, 0, 0, 0],
        "36": [0, 0],
        "37": [0, 0],
        "38": [0, 0],
        "39": [0, 0],
        "40": [0, 0],
        "41": [0, 0, 0, 0, 0, 0],
        "42": [0, 0],
        "43": [0, 0],
        "44": [0, 0],
        "45": [0, 0],
        "46": [0, 0],
        "47": [0, 0],
        "48": [0, 0, 0, 0, 0],
        "49": [0, 0],
        "50": [0, 0],
        "51": [0, 0],
        "52": [0, 0, 0, 0],
        "53": [0, 0],
        "54": [0, 0],
        "55": [0, 0],
        "56": [0, 0],
        "57": [0, 0],
        "58": [0, 0],
        "59": [0, 0],
        "60": [0, 0]
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

  var NAME = (cov_1nq654px9y.s[0]++, 'dropdown');
  var VERSION = (cov_1nq654px9y.s[1]++, '4.3.1');
  var DATA_KEY = (cov_1nq654px9y.s[2]++, 'bs.dropdown');
  var EVENT_KEY = (cov_1nq654px9y.s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_1nq654px9y.s[4]++, '.data-api');
  var ESCAPE_KEYCODE = (cov_1nq654px9y.s[5]++, 27); // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = (cov_1nq654px9y.s[6]++, 32); // KeyboardEvent.which value for space key

  var TAB_KEYCODE = (cov_1nq654px9y.s[7]++, 9); // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = (cov_1nq654px9y.s[8]++, 38); // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = (cov_1nq654px9y.s[9]++, 40); // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = (cov_1nq654px9y.s[10]++, 3); // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = (cov_1nq654px9y.s[11]++, new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE));
  var Event = (cov_1nq654px9y.s[12]++, {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY,
    KEYUP_DATA_API: "keyup" + EVENT_KEY + DATA_API_KEY
  });
  var ClassName = (cov_1nq654px9y.s[13]++, {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    POSITION_STATIC: 'position-static'
  });
  var Selector = (cov_1nq654px9y.s[14]++, {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
  });
  var AttachmentMap = (cov_1nq654px9y.s[15]++, {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
  });
  var Default = (cov_1nq654px9y.s[16]++, {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic'
  });
  var DefaultType = (cov_1nq654px9y.s[17]++, {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  });

  var Dropdown =
  /*#__PURE__*/
  function () {
    function Dropdown(element, config) {
      cov_1nq654px9y.f[0]++;
      cov_1nq654px9y.s[18]++;
      this._element = element;
      cov_1nq654px9y.s[19]++;
      this._popper = null;
      cov_1nq654px9y.s[20]++;
      this._config = this._getConfig(config);
      cov_1nq654px9y.s[21]++;
      this._menu = this._getMenuElement();
      cov_1nq654px9y.s[22]++;
      this._inNavbar = this._detectNavbar();
      cov_1nq654px9y.s[23]++;

      this._addEventListeners();

      cov_1nq654px9y.s[24]++;
      Data.setData(element, DATA_KEY, this);
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      cov_1nq654px9y.f[4]++;
      cov_1nq654px9y.s[28]++;

      if ((cov_1nq654px9y.b[1][0]++, this._element.disabled) || (cov_1nq654px9y.b[1][1]++, this._element.classList.contains(ClassName.DISABLED))) {
        cov_1nq654px9y.b[0][0]++;
        cov_1nq654px9y.s[29]++;
        return;
      } else {
        cov_1nq654px9y.b[0][1]++;
      }

      var parent = (cov_1nq654px9y.s[30]++, Dropdown._getParentFromElement(this._element));
      var isActive = (cov_1nq654px9y.s[31]++, this._menu.classList.contains(ClassName.SHOW));
      cov_1nq654px9y.s[32]++;

      Dropdown._clearMenus();

      cov_1nq654px9y.s[33]++;

      if (isActive) {
        cov_1nq654px9y.b[2][0]++;
        cov_1nq654px9y.s[34]++;
        return;
      } else {
        cov_1nq654px9y.b[2][1]++;
      }

      var relatedTarget = (cov_1nq654px9y.s[35]++, {
        relatedTarget: this._element
      });
      var showEvent = (cov_1nq654px9y.s[36]++, EventHandler.trigger(parent, Event.SHOW, relatedTarget));
      cov_1nq654px9y.s[37]++;

      if (showEvent.defaultPrevented) {
        cov_1nq654px9y.b[3][0]++;
        cov_1nq654px9y.s[38]++;
        return;
      } else {
        cov_1nq654px9y.b[3][1]++;
      } // Disable totally Popper.js for Dropdown in Navbar


      cov_1nq654px9y.s[39]++;

      if (!this._inNavbar) {
        cov_1nq654px9y.b[4][0]++;
        cov_1nq654px9y.s[40]++;

        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          cov_1nq654px9y.b[5][0]++;
          cov_1nq654px9y.s[41]++;
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org)');
        } else {
          cov_1nq654px9y.b[5][1]++;
        }

        var referenceElement = (cov_1nq654px9y.s[42]++, this._element);
        cov_1nq654px9y.s[43]++;

        if (this._config.reference === 'parent') {
          cov_1nq654px9y.b[6][0]++;
          cov_1nq654px9y.s[44]++;
          referenceElement = parent;
        } else {
          cov_1nq654px9y.b[6][1]++;
          cov_1nq654px9y.s[45]++;

          if (Util.isElement(this._config.reference)) {
            cov_1nq654px9y.b[7][0]++;
            cov_1nq654px9y.s[46]++;
            referenceElement = this._config.reference; // Check if it's jQuery element

            cov_1nq654px9y.s[47]++;

            if (typeof this._config.reference.jquery !== 'undefined') {
              cov_1nq654px9y.b[8][0]++;
              cov_1nq654px9y.s[48]++;
              referenceElement = this._config.reference[0];
            } else {
              cov_1nq654px9y.b[8][1]++;
            }
          } else {
            cov_1nq654px9y.b[7][1]++;
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        cov_1nq654px9y.s[49]++;

        if (this._config.boundary !== 'scrollParent') {
          cov_1nq654px9y.b[9][0]++;
          cov_1nq654px9y.s[50]++;
          parent.classList.add(ClassName.POSITION_STATIC);
        } else {
          cov_1nq654px9y.b[9][1]++;
        }

        cov_1nq654px9y.s[51]++;
        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } else {
        cov_1nq654px9y.b[4][1]++;
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      cov_1nq654px9y.s[52]++;

      if ((cov_1nq654px9y.b[11][0]++, 'ontouchstart' in document.documentElement) && (cov_1nq654px9y.b[11][1]++, !Util.makeArray(SelectorEngine.closest(parent, Selector.NAVBAR_NAV)).length)) {
        cov_1nq654px9y.b[10][0]++;
        cov_1nq654px9y.s[53]++;
        Util.makeArray(document.body.children).forEach(function (elem) {
          cov_1nq654px9y.f[5]++;
          cov_1nq654px9y.s[54]++;
          return EventHandler.on(elem, 'mouseover', null, Util.noop());
        });
      } else {
        cov_1nq654px9y.b[10][1]++;
      }

      cov_1nq654px9y.s[55]++;

      this._element.focus();

      cov_1nq654px9y.s[56]++;

      this._element.setAttribute('aria-expanded', true);

      cov_1nq654px9y.s[57]++;
      Manipulator.toggleClass(this._menu, ClassName.SHOW);
      cov_1nq654px9y.s[58]++;
      Manipulator.toggleClass(parent, ClassName.SHOW);
      cov_1nq654px9y.s[59]++;
      EventHandler.trigger(parent, Event.SHOWN, relatedTarget);
    };

    _proto.show = function show() {
      cov_1nq654px9y.f[6]++;
      cov_1nq654px9y.s[60]++;

      if ((cov_1nq654px9y.b[13][0]++, this._element.disabled) || (cov_1nq654px9y.b[13][1]++, this._element.classList.contains(ClassName.DISABLED)) || (cov_1nq654px9y.b[13][2]++, this._menu.classList.contains(ClassName.SHOW))) {
        cov_1nq654px9y.b[12][0]++;
        cov_1nq654px9y.s[61]++;
        return;
      } else {
        cov_1nq654px9y.b[12][1]++;
      }

      var parent = (cov_1nq654px9y.s[62]++, Dropdown._getParentFromElement(this._element));
      var relatedTarget = (cov_1nq654px9y.s[63]++, {
        relatedTarget: this._element
      });
      var showEvent = (cov_1nq654px9y.s[64]++, EventHandler.trigger(parent, Event.SHOW, relatedTarget));
      cov_1nq654px9y.s[65]++;

      if (showEvent.defaultPrevented) {
        cov_1nq654px9y.b[14][0]++;
        cov_1nq654px9y.s[66]++;
        return;
      } else {
        cov_1nq654px9y.b[14][1]++;
      }

      cov_1nq654px9y.s[67]++;
      Manipulator.toggleClass(this._menu, ClassName.SHOW);
      cov_1nq654px9y.s[68]++;
      Manipulator.toggleClass(parent, ClassName.SHOW);
      cov_1nq654px9y.s[69]++;
      EventHandler.trigger(parent, Event.SHOWN, relatedTarget);
    };

    _proto.hide = function hide() {
      cov_1nq654px9y.f[7]++;
      cov_1nq654px9y.s[70]++;

      if ((cov_1nq654px9y.b[16][0]++, this._element.disabled) || (cov_1nq654px9y.b[16][1]++, this._element.classList.contains(ClassName.DISABLED)) || (cov_1nq654px9y.b[16][2]++, !this._menu.classList.contains(ClassName.SHOW))) {
        cov_1nq654px9y.b[15][0]++;
        cov_1nq654px9y.s[71]++;
        return;
      } else {
        cov_1nq654px9y.b[15][1]++;
      }

      var parent = (cov_1nq654px9y.s[72]++, Dropdown._getParentFromElement(this._element));
      var relatedTarget = (cov_1nq654px9y.s[73]++, {
        relatedTarget: this._element
      });
      var hideEvent = (cov_1nq654px9y.s[74]++, EventHandler.trigger(parent, Event.HIDE, relatedTarget));
      cov_1nq654px9y.s[75]++;

      if (hideEvent.defaultPrevented) {
        cov_1nq654px9y.b[17][0]++;
        cov_1nq654px9y.s[76]++;
        return;
      } else {
        cov_1nq654px9y.b[17][1]++;
      }

      cov_1nq654px9y.s[77]++;
      Manipulator.toggleClass(this._menu, ClassName.SHOW);
      cov_1nq654px9y.s[78]++;
      Manipulator.toggleClass(parent, ClassName.SHOW);
      cov_1nq654px9y.s[79]++;
      EventHandler.trigger(parent, Event.HIDDEN, relatedTarget);
    };

    _proto.dispose = function dispose() {
      cov_1nq654px9y.f[8]++;
      cov_1nq654px9y.s[80]++;
      Data.removeData(this._element, DATA_KEY);
      cov_1nq654px9y.s[81]++;
      EventHandler.off(this._element, EVENT_KEY);
      cov_1nq654px9y.s[82]++;
      this._element = null;
      cov_1nq654px9y.s[83]++;
      this._menu = null;
      cov_1nq654px9y.s[84]++;

      if (this._popper !== null) {
        cov_1nq654px9y.b[18][0]++;
        cov_1nq654px9y.s[85]++;

        this._popper.destroy();

        cov_1nq654px9y.s[86]++;
        this._popper = null;
      } else {
        cov_1nq654px9y.b[18][1]++;
      }
    };

    _proto.update = function update() {
      cov_1nq654px9y.f[9]++;
      cov_1nq654px9y.s[87]++;
      this._inNavbar = this._detectNavbar();
      cov_1nq654px9y.s[88]++;

      if (this._popper !== null) {
        cov_1nq654px9y.b[19][0]++;
        cov_1nq654px9y.s[89]++;

        this._popper.scheduleUpdate();
      } else {
        cov_1nq654px9y.b[19][1]++;
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      cov_1nq654px9y.f[10]++;
      cov_1nq654px9y.s[90]++;
      EventHandler.on(this._element, Event.CLICK, function (event) {
        cov_1nq654px9y.f[11]++;
        cov_1nq654px9y.s[91]++;
        event.preventDefault();
        cov_1nq654px9y.s[92]++;
        event.stopPropagation();
        cov_1nq654px9y.s[93]++;

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      cov_1nq654px9y.f[12]++;
      cov_1nq654px9y.s[94]++;
      config = _objectSpread({}, this.constructor.Default, Manipulator.getDataAttributes(this._element), config);
      cov_1nq654px9y.s[95]++;
      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      cov_1nq654px9y.s[96]++;
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      cov_1nq654px9y.f[13]++;
      cov_1nq654px9y.s[97]++;

      if (!this._menu) {
        cov_1nq654px9y.b[20][0]++;
        var parent = (cov_1nq654px9y.s[98]++, Dropdown._getParentFromElement(this._element));
        cov_1nq654px9y.s[99]++;

        if (parent) {
          cov_1nq654px9y.b[21][0]++;
          cov_1nq654px9y.s[100]++;
          this._menu = SelectorEngine.findOne(Selector.MENU, parent);
        } else {
          cov_1nq654px9y.b[21][1]++;
        }
      } else {
        cov_1nq654px9y.b[20][1]++;
      }

      cov_1nq654px9y.s[101]++;
      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      cov_1nq654px9y.f[14]++;
      var parentDropdown = (cov_1nq654px9y.s[102]++, this._element.parentNode);
      var placement = (cov_1nq654px9y.s[103]++, AttachmentMap.BOTTOM); // Handle dropup

      cov_1nq654px9y.s[104]++;

      if (parentDropdown.classList.contains(ClassName.DROPUP)) {
        cov_1nq654px9y.b[22][0]++;
        cov_1nq654px9y.s[105]++;
        placement = AttachmentMap.TOP;
        cov_1nq654px9y.s[106]++;

        if (this._menu.classList.contains(ClassName.MENURIGHT)) {
          cov_1nq654px9y.b[23][0]++;
          cov_1nq654px9y.s[107]++;
          placement = AttachmentMap.TOPEND;
        } else {
          cov_1nq654px9y.b[23][1]++;
        }
      } else {
        cov_1nq654px9y.b[22][1]++;
        cov_1nq654px9y.s[108]++;

        if (parentDropdown.classList.contains(ClassName.DROPRIGHT)) {
          cov_1nq654px9y.b[24][0]++;
          cov_1nq654px9y.s[109]++;
          placement = AttachmentMap.RIGHT;
        } else {
          cov_1nq654px9y.b[24][1]++;
          cov_1nq654px9y.s[110]++;

          if (parentDropdown.classList.contains(ClassName.DROPLEFT)) {
            cov_1nq654px9y.b[25][0]++;
            cov_1nq654px9y.s[111]++;
            placement = AttachmentMap.LEFT;
          } else {
            cov_1nq654px9y.b[25][1]++;
            cov_1nq654px9y.s[112]++;

            if (this._menu.classList.contains(ClassName.MENURIGHT)) {
              cov_1nq654px9y.b[26][0]++;
              cov_1nq654px9y.s[113]++;
              placement = AttachmentMap.BOTTOMEND;
            } else {
              cov_1nq654px9y.b[26][1]++;
            }
          }
        }
      }

      cov_1nq654px9y.s[114]++;
      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      cov_1nq654px9y.f[15]++;
      cov_1nq654px9y.s[115]++;
      return Boolean(SelectorEngine.closest(this._element, '.navbar'));
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      cov_1nq654px9y.f[16]++;
      var offset = (cov_1nq654px9y.s[116]++, {});
      cov_1nq654px9y.s[117]++;

      if (typeof this._config.offset === 'function') {
        cov_1nq654px9y.b[27][0]++;
        cov_1nq654px9y.s[118]++;

        offset.fn = function (data) {
          cov_1nq654px9y.f[17]++;
          cov_1nq654px9y.s[119]++;
          data.offsets = _objectSpread({}, data.offsets, (cov_1nq654px9y.b[28][0]++, _this2._config.offset(data.offsets, _this2._element)) || (cov_1nq654px9y.b[28][1]++, {}));
          cov_1nq654px9y.s[120]++;
          return data;
        };
      } else {
        cov_1nq654px9y.b[27][1]++;
        cov_1nq654px9y.s[121]++;
        offset.offset = this._config.offset;
      }

      cov_1nq654px9y.s[122]++;
      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      cov_1nq654px9y.f[18]++;
      var popperConfig = (cov_1nq654px9y.s[123]++, {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        } // Disable Popper.js if we have a static display

      });
      cov_1nq654px9y.s[124]++;

      if (this._config.display === 'static') {
        cov_1nq654px9y.b[29][0]++;
        cov_1nq654px9y.s[125]++;
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      } else {
        cov_1nq654px9y.b[29][1]++;
      }

      cov_1nq654px9y.s[126]++;
      return popperConfig;
    } // Static
    ;

    Dropdown._dropdownInterface = function _dropdownInterface(element, config) {
      cov_1nq654px9y.f[19]++;
      var data = (cov_1nq654px9y.s[127]++, Data.getData(element, DATA_KEY));

      var _config = (cov_1nq654px9y.s[128]++, typeof config === 'object' ? (cov_1nq654px9y.b[30][0]++, config) : (cov_1nq654px9y.b[30][1]++, null));

      cov_1nq654px9y.s[129]++;

      if (!data) {
        cov_1nq654px9y.b[31][0]++;
        cov_1nq654px9y.s[130]++;
        data = new Dropdown(element, _config);
      } else {
        cov_1nq654px9y.b[31][1]++;
      }

      cov_1nq654px9y.s[131]++;

      if (typeof config === 'string') {
        cov_1nq654px9y.b[32][0]++;
        cov_1nq654px9y.s[132]++;

        if (typeof data[config] === 'undefined') {
          cov_1nq654px9y.b[33][0]++;
          cov_1nq654px9y.s[133]++;
          throw new Error("No method named \"" + config + "\"");
        } else {
          cov_1nq654px9y.b[33][1]++;
        }

        cov_1nq654px9y.s[134]++;
        data[config]();
      } else {
        cov_1nq654px9y.b[32][1]++;
      }
    };

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      cov_1nq654px9y.f[20]++;
      cov_1nq654px9y.s[135]++;
      return this.each(function () {
        cov_1nq654px9y.f[21]++;
        cov_1nq654px9y.s[136]++;

        Dropdown._dropdownInterface(this, config);
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      cov_1nq654px9y.f[22]++;
      cov_1nq654px9y.s[137]++;

      if ((cov_1nq654px9y.b[35][0]++, event) && ((cov_1nq654px9y.b[35][1]++, event.which === RIGHT_MOUSE_BUTTON_WHICH) || (cov_1nq654px9y.b[35][2]++, event.type === 'keyup') && (cov_1nq654px9y.b[35][3]++, event.which !== TAB_KEYCODE))) {
        cov_1nq654px9y.b[34][0]++;
        cov_1nq654px9y.s[138]++;
        return;
      } else {
        cov_1nq654px9y.b[34][1]++;
      }

      var toggles = (cov_1nq654px9y.s[139]++, Util.makeArray(SelectorEngine.find(Selector.DATA_TOGGLE)));
      cov_1nq654px9y.s[140]++;

      for (var i = (cov_1nq654px9y.s[141]++, 0), len = (cov_1nq654px9y.s[142]++, toggles.length); i < len; i++) {
        var parent = (cov_1nq654px9y.s[143]++, Dropdown._getParentFromElement(toggles[i]));
        var context = (cov_1nq654px9y.s[144]++, Data.getData(toggles[i], DATA_KEY));
        var relatedTarget = (cov_1nq654px9y.s[145]++, {
          relatedTarget: toggles[i]
        });
        cov_1nq654px9y.s[146]++;

        if ((cov_1nq654px9y.b[37][0]++, event) && (cov_1nq654px9y.b[37][1]++, event.type === 'click')) {
          cov_1nq654px9y.b[36][0]++;
          cov_1nq654px9y.s[147]++;
          relatedTarget.clickEvent = event;
        } else {
          cov_1nq654px9y.b[36][1]++;
        }

        cov_1nq654px9y.s[148]++;

        if (!context) {
          cov_1nq654px9y.b[38][0]++;
          cov_1nq654px9y.s[149]++;
          continue;
        } else {
          cov_1nq654px9y.b[38][1]++;
        }

        var dropdownMenu = (cov_1nq654px9y.s[150]++, context._menu);
        cov_1nq654px9y.s[151]++;

        if (!parent.classList.contains(ClassName.SHOW)) {
          cov_1nq654px9y.b[39][0]++;
          cov_1nq654px9y.s[152]++;
          continue;
        } else {
          cov_1nq654px9y.b[39][1]++;
        }

        cov_1nq654px9y.s[153]++;

        if ((cov_1nq654px9y.b[41][0]++, event) && ((cov_1nq654px9y.b[41][1]++, event.type === 'click') && (cov_1nq654px9y.b[41][2]++, /input|textarea/i.test(event.target.tagName)) || (cov_1nq654px9y.b[41][3]++, event.type === 'keyup') && (cov_1nq654px9y.b[41][4]++, event.which === TAB_KEYCODE)) && (cov_1nq654px9y.b[41][5]++, parent.contains(event.target))) {
          cov_1nq654px9y.b[40][0]++;
          cov_1nq654px9y.s[154]++;
          continue;
        } else {
          cov_1nq654px9y.b[40][1]++;
        }

        var hideEvent = (cov_1nq654px9y.s[155]++, EventHandler.trigger(parent, Event.HIDE, relatedTarget));
        cov_1nq654px9y.s[156]++;

        if (hideEvent.defaultPrevented) {
          cov_1nq654px9y.b[42][0]++;
          cov_1nq654px9y.s[157]++;
          continue;
        } else {
          cov_1nq654px9y.b[42][1]++;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        cov_1nq654px9y.s[158]++;

        if ('ontouchstart' in document.documentElement) {
          cov_1nq654px9y.b[43][0]++;
          cov_1nq654px9y.s[159]++;
          Util.makeArray(document.body.children).forEach(function (elem) {
            cov_1nq654px9y.f[23]++;
            cov_1nq654px9y.s[160]++;
            return EventHandler.off(elem, 'mouseover', null, Util.noop());
          });
        } else {
          cov_1nq654px9y.b[43][1]++;
        }

        cov_1nq654px9y.s[161]++;
        toggles[i].setAttribute('aria-expanded', 'false');
        cov_1nq654px9y.s[162]++;
        dropdownMenu.classList.remove(ClassName.SHOW);
        cov_1nq654px9y.s[163]++;
        parent.classList.remove(ClassName.SHOW);
        cov_1nq654px9y.s[164]++;
        EventHandler.trigger(parent, Event.HIDDEN, relatedTarget);
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      cov_1nq654px9y.f[24]++;
      var parent;
      var selector = (cov_1nq654px9y.s[165]++, Util.getSelectorFromElement(element));
      cov_1nq654px9y.s[166]++;

      if (selector) {
        cov_1nq654px9y.b[44][0]++;
        cov_1nq654px9y.s[167]++;
        parent = SelectorEngine.findOne(selector);
      } else {
        cov_1nq654px9y.b[44][1]++;
      }

      cov_1nq654px9y.s[168]++;
      return (cov_1nq654px9y.b[45][0]++, parent) || (cov_1nq654px9y.b[45][1]++, element.parentNode);
    };

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      cov_1nq654px9y.f[25]++;
      cov_1nq654px9y.s[169]++;

      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? (cov_1nq654px9y.b[47][0]++, (cov_1nq654px9y.b[48][0]++, event.which === SPACE_KEYCODE) || (cov_1nq654px9y.b[48][1]++, event.which !== ESCAPE_KEYCODE) && ((cov_1nq654px9y.b[48][2]++, event.which !== ARROW_DOWN_KEYCODE) && (cov_1nq654px9y.b[48][3]++, event.which !== ARROW_UP_KEYCODE) || (cov_1nq654px9y.b[48][4]++, SelectorEngine.closest(event.target, Selector.MENU)))) : (cov_1nq654px9y.b[47][1]++, !REGEXP_KEYDOWN.test(event.which))) {
        cov_1nq654px9y.b[46][0]++;
        cov_1nq654px9y.s[170]++;
        return;
      } else {
        cov_1nq654px9y.b[46][1]++;
      }

      cov_1nq654px9y.s[171]++;
      event.preventDefault();
      cov_1nq654px9y.s[172]++;
      event.stopPropagation();
      cov_1nq654px9y.s[173]++;

      if ((cov_1nq654px9y.b[50][0]++, this.disabled) || (cov_1nq654px9y.b[50][1]++, this.classList.contains(ClassName.DISABLED))) {
        cov_1nq654px9y.b[49][0]++;
        cov_1nq654px9y.s[174]++;
        return;
      } else {
        cov_1nq654px9y.b[49][1]++;
      }

      var parent = (cov_1nq654px9y.s[175]++, Dropdown._getParentFromElement(this));
      var isActive = (cov_1nq654px9y.s[176]++, parent.classList.contains(ClassName.SHOW));
      cov_1nq654px9y.s[177]++;

      if ((cov_1nq654px9y.b[52][0]++, !isActive) || (cov_1nq654px9y.b[52][1]++, isActive) && ((cov_1nq654px9y.b[52][2]++, event.which === ESCAPE_KEYCODE) || (cov_1nq654px9y.b[52][3]++, event.which === SPACE_KEYCODE))) {
        cov_1nq654px9y.b[51][0]++;
        cov_1nq654px9y.s[178]++;

        if (event.which === ESCAPE_KEYCODE) {
          cov_1nq654px9y.b[53][0]++;
          cov_1nq654px9y.s[179]++;
          EventHandler.trigger(SelectorEngine.findOne(Selector.DATA_TOGGLE, parent), 'focus');
        } else {
          cov_1nq654px9y.b[53][1]++;
        }

        cov_1nq654px9y.s[180]++;

        Dropdown._clearMenus();

        cov_1nq654px9y.s[181]++;
        return;
      } else {
        cov_1nq654px9y.b[51][1]++;
      }

      var items = (cov_1nq654px9y.s[182]++, Util.makeArray(SelectorEngine.find(Selector.VISIBLE_ITEMS, parent)));
      cov_1nq654px9y.s[183]++;

      if (!items.length) {
        cov_1nq654px9y.b[54][0]++;
        cov_1nq654px9y.s[184]++;
        return;
      } else {
        cov_1nq654px9y.b[54][1]++;
      }

      var index = (cov_1nq654px9y.s[185]++, items.indexOf(event.target));
      cov_1nq654px9y.s[186]++;

      if ((cov_1nq654px9y.b[56][0]++, event.which === ARROW_UP_KEYCODE) && (cov_1nq654px9y.b[56][1]++, index > 0)) {
        cov_1nq654px9y.b[55][0]++;
        cov_1nq654px9y.s[187]++;
        // Up
        index--;
      } else {
        cov_1nq654px9y.b[55][1]++;
      }

      cov_1nq654px9y.s[188]++;

      if ((cov_1nq654px9y.b[58][0]++, event.which === ARROW_DOWN_KEYCODE) && (cov_1nq654px9y.b[58][1]++, index < items.length - 1)) {
        cov_1nq654px9y.b[57][0]++;
        cov_1nq654px9y.s[189]++;
        // Down
        index++;
      } else {
        cov_1nq654px9y.b[57][1]++;
      }

      cov_1nq654px9y.s[190]++;

      if (index < 0) {
        cov_1nq654px9y.b[59][0]++;
        cov_1nq654px9y.s[191]++;
        index = 0;
      } else {
        cov_1nq654px9y.b[59][1]++;
      }

      cov_1nq654px9y.s[192]++;
      items[index].focus();
    };

    Dropdown._getInstance = function _getInstance(element) {
      cov_1nq654px9y.f[26]++;
      cov_1nq654px9y.s[193]++;
      return Data.getData(element, DATA_KEY);
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


  cov_1nq654px9y.s[194]++;
  EventHandler.on(document, Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler);
  cov_1nq654px9y.s[195]++;
  EventHandler.on(document, Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler);
  cov_1nq654px9y.s[196]++;
  EventHandler.on(document, Event.CLICK_DATA_API, Dropdown._clearMenus);
  cov_1nq654px9y.s[197]++;
  EventHandler.on(document, Event.KEYUP_DATA_API, Dropdown._clearMenus);
  cov_1nq654px9y.s[198]++;
  EventHandler.on(document, Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    cov_1nq654px9y.f[27]++;
    cov_1nq654px9y.s[199]++;
    event.preventDefault();
    cov_1nq654px9y.s[200]++;
    event.stopPropagation();
    cov_1nq654px9y.s[201]++;

    Dropdown._dropdownInterface(this, 'toggle');
  });
  cov_1nq654px9y.s[202]++;
  EventHandler.on(document, Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
    cov_1nq654px9y.f[28]++;
    cov_1nq654px9y.s[203]++;
    return e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .dropdown to jQuery only if jQuery is present
   */

  var $ = (cov_1nq654px9y.s[204]++, Util.jQuery);
  cov_1nq654px9y.s[205]++;

  if (typeof $ !== 'undefined') {
    cov_1nq654px9y.b[60][0]++;
    var JQUERY_NO_CONFLICT = (cov_1nq654px9y.s[206]++, $.fn[NAME]);
    cov_1nq654px9y.s[207]++;
    $.fn[NAME] = Dropdown._jQueryInterface;
    cov_1nq654px9y.s[208]++;
    $.fn[NAME].Constructor = Dropdown;
    cov_1nq654px9y.s[209]++;

    $.fn[NAME].noConflict = function () {
      cov_1nq654px9y.f[29]++;
      cov_1nq654px9y.s[210]++;
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      cov_1nq654px9y.s[211]++;
      return Dropdown._jQueryInterface;
    };
  } else {
    cov_1nq654px9y.b[60][1]++;
  }

  return Dropdown;

}));
//# sourceMappingURL=dropdown.js.map

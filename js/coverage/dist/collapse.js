/*!
  * Bootstrap collapse.js v4.3.1-0 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2019 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/data.js'), require('./dom/eventHandler.js'), require('./dom/manipulator.js'), require('./dom/selectorEngine.js'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['./dom/data.js', './dom/eventHandler.js', './dom/manipulator.js', './dom/selectorEngine.js', './util.js'], factory) :
  (global = global || self, global.Collapse = factory(global.Data, global.EventHandler, global.Manipulator, global.SelectorEngine, global.Util));
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

  var cov_2itwqk888x = function () {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/collapse.js";
    var hash = "ef57403de2d138fe487da85a9371159cc28cf4b5";

    var Function = function () {}.constructor;

    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/collapse.js",
      statementMap: {
        "0": {
          start: {
            line: 20,
            column: 28
          },
          end: {
            line: 20,
            column: 38
          }
        },
        "1": {
          start: {
            line: 21,
            column: 28
          },
          end: {
            line: 21,
            column: 35
          }
        },
        "2": {
          start: {
            line: 22,
            column: 28
          },
          end: {
            line: 22,
            column: 41
          }
        },
        "3": {
          start: {
            line: 23,
            column: 28
          },
          end: {
            line: 23,
            column: 42
          }
        },
        "4": {
          start: {
            line: 24,
            column: 28
          },
          end: {
            line: 24,
            column: 39
          }
        },
        "5": {
          start: {
            line: 26,
            column: 16
          },
          end: {
            line: 29,
            column: 1
          }
        },
        "6": {
          start: {
            line: 31,
            column: 20
          },
          end: {
            line: 34,
            column: 1
          }
        },
        "7": {
          start: {
            line: 36,
            column: 14
          },
          end: {
            line: 42,
            column: 1
          }
        },
        "8": {
          start: {
            line: 44,
            column: 18
          },
          end: {
            line: 49,
            column: 1
          }
        },
        "9": {
          start: {
            line: 51,
            column: 18
          },
          end: {
            line: 54,
            column: 1
          }
        },
        "10": {
          start: {
            line: 56,
            column: 17
          },
          end: {
            line: 59,
            column: 1
          }
        },
        "11": {
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 69,
            column: 33
          }
        },
        "12": {
          start: {
            line: 70,
            column: 4
          },
          end: {
            line: 70,
            column: 35
          }
        },
        "13": {
          start: {
            line: 71,
            column: 4
          },
          end: {
            line: 71,
            column: 51
          }
        },
        "14": {
          start: {
            line: 72,
            column: 4
          },
          end: {
            line: 75,
            column: 6
          }
        },
        "15": {
          start: {
            line: 77,
            column: 23
          },
          end: {
            line: 77,
            column: 80
          }
        },
        "16": {
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 88,
            column: 5
          }
        },
        "17": {
          start: {
            line: 78,
            column: 17
          },
          end: {
            line: 78,
            column: 18
          }
        },
        "18": {
          start: {
            line: 78,
            column: 26
          },
          end: {
            line: 78,
            column: 43
          }
        },
        "19": {
          start: {
            line: 79,
            column: 19
          },
          end: {
            line: 79,
            column: 32
          }
        },
        "20": {
          start: {
            line: 80,
            column: 23
          },
          end: {
            line: 80,
            column: 56
          }
        },
        "21": {
          start: {
            line: 81,
            column: 28
          },
          end: {
            line: 82,
            column: 53
          }
        },
        "22": {
          start: {
            line: 82,
            column: 31
          },
          end: {
            line: 82,
            column: 52
          }
        },
        "23": {
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 87,
            column: 7
          }
        },
        "24": {
          start: {
            line: 85,
            column: 8
          },
          end: {
            line: 85,
            column: 33
          }
        },
        "25": {
          start: {
            line: 86,
            column: 8
          },
          end: {
            line: 86,
            column: 37
          }
        },
        "26": {
          start: {
            line: 90,
            column: 4
          },
          end: {
            line: 90,
            column: 65
          }
        },
        "27": {
          start: {
            line: 92,
            column: 4
          },
          end: {
            line: 94,
            column: 5
          }
        },
        "28": {
          start: {
            line: 93,
            column: 6
          },
          end: {
            line: 93,
            column: 71
          }
        },
        "29": {
          start: {
            line: 96,
            column: 4
          },
          end: {
            line: 98,
            column: 5
          }
        },
        "30": {
          start: {
            line: 97,
            column: 6
          },
          end: {
            line: 97,
            column: 19
          }
        },
        "31": {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 100,
            column: 41
          }
        },
        "32": {
          start: {
            line: 106,
            column: 4
          },
          end: {
            line: 106,
            column: 18
          }
        },
        "33": {
          start: {
            line: 110,
            column: 4
          },
          end: {
            line: 110,
            column: 18
          }
        },
        "34": {
          start: {
            line: 116,
            column: 4
          },
          end: {
            line: 120,
            column: 5
          }
        },
        "35": {
          start: {
            line: 117,
            column: 6
          },
          end: {
            line: 117,
            column: 17
          }
        },
        "36": {
          start: {
            line: 119,
            column: 6
          },
          end: {
            line: 119,
            column: 17
          }
        },
        "37": {
          start: {
            line: 124,
            column: 4
          },
          end: {
            line: 127,
            column: 5
          }
        },
        "38": {
          start: {
            line: 126,
            column: 6
          },
          end: {
            line: 126,
            column: 12
          }
        },
        "39": {
          start: {
            line: 132,
            column: 4
          },
          end: {
            line: 145,
            column: 5
          }
        },
        "40": {
          start: {
            line: 133,
            column: 6
          },
          end: {
            line: 140,
            column: 10
          }
        },
        "41": {
          start: {
            line: 135,
            column: 10
          },
          end: {
            line: 137,
            column: 11
          }
        },
        "42": {
          start: {
            line: 136,
            column: 12
          },
          end: {
            line: 136,
            column: 75
          }
        },
        "43": {
          start: {
            line: 139,
            column: 10
          },
          end: {
            line: 139,
            column: 60
          }
        },
        "44": {
          start: {
            line: 142,
            column: 6
          },
          end: {
            line: 144,
            column: 7
          }
        },
        "45": {
          start: {
            line: 143,
            column: 8
          },
          end: {
            line: 143,
            column: 22
          }
        },
        "46": {
          start: {
            line: 147,
            column: 22
          },
          end: {
            line: 147,
            column: 60
          }
        },
        "47": {
          start: {
            line: 148,
            column: 4
          },
          end: {
            line: 155,
            column: 5
          }
        },
        "48": {
          start: {
            line: 149,
            column: 29
          },
          end: {
            line: 149,
            column: 73
          }
        },
        "49": {
          start: {
            line: 149,
            column: 54
          },
          end: {
            line: 149,
            column: 72
          }
        },
        "50": {
          start: {
            line: 150,
            column: 6
          },
          end: {
            line: 150,
            column: 88
          }
        },
        "51": {
          start: {
            line: 152,
            column: 6
          },
          end: {
            line: 154,
            column: 7
          }
        },
        "52": {
          start: {
            line: 153,
            column: 8
          },
          end: {
            line: 153,
            column: 14
          }
        },
        "53": {
          start: {
            line: 157,
            column: 23
          },
          end: {
            line: 157,
            column: 70
          }
        },
        "54": {
          start: {
            line: 158,
            column: 4
          },
          end: {
            line: 160,
            column: 5
          }
        },
        "55": {
          start: {
            line: 159,
            column: 6
          },
          end: {
            line: 159,
            column: 12
          }
        },
        "56": {
          start: {
            line: 162,
            column: 4
          },
          end: {
            line: 172,
            column: 5
          }
        },
        "57": {
          start: {
            line: 163,
            column: 6
          },
          end: {
            line: 171,
            column: 8
          }
        },
        "58": {
          start: {
            line: 164,
            column: 8
          },
          end: {
            line: 166,
            column: 9
          }
        },
        "59": {
          start: {
            line: 165,
            column: 10
          },
          end: {
            line: 165,
            column: 57
          }
        },
        "60": {
          start: {
            line: 168,
            column: 8
          },
          end: {
            line: 170,
            column: 9
          }
        },
        "61": {
          start: {
            line: 169,
            column: 10
          },
          end: {
            line: 169,
            column: 50
          }
        },
        "62": {
          start: {
            line: 174,
            column: 22
          },
          end: {
            line: 174,
            column: 42
          }
        },
        "63": {
          start: {
            line: 176,
            column: 4
          },
          end: {
            line: 176,
            column: 54
          }
        },
        "64": {
          start: {
            line: 177,
            column: 4
          },
          end: {
            line: 177,
            column: 53
          }
        },
        "65": {
          start: {
            line: 179,
            column: 4
          },
          end: {
            line: 179,
            column: 38
          }
        },
        "66": {
          start: {
            line: 181,
            column: 4
          },
          end: {
            line: 186,
            column: 5
          }
        },
        "67": {
          start: {
            line: 182,
            column: 6
          },
          end: {
            line: 185,
            column: 8
          }
        },
        "68": {
          start: {
            line: 183,
            column: 8
          },
          end: {
            line: 183,
            column: 53
          }
        },
        "69": {
          start: {
            line: 184,
            column: 8
          },
          end: {
            line: 184,
            column: 51
          }
        },
        "70": {
          start: {
            line: 188,
            column: 4
          },
          end: {
            line: 188,
            column: 31
          }
        },
        "71": {
          start: {
            line: 190,
            column: 21
          },
          end: {
            line: 200,
            column: 5
          }
        },
        "72": {
          start: {
            line: 191,
            column: 6
          },
          end: {
            line: 191,
            column: 58
          }
        },
        "73": {
          start: {
            line: 192,
            column: 6
          },
          end: {
            line: 192,
            column: 53
          }
        },
        "74": {
          start: {
            line: 193,
            column: 6
          },
          end: {
            line: 193,
            column: 49
          }
        },
        "75": {
          start: {
            line: 195,
            column: 6
          },
          end: {
            line: 195,
            column: 41
          }
        },
        "76": {
          start: {
            line: 197,
            column: 6
          },
          end: {
            line: 197,
            column: 34
          }
        },
        "77": {
          start: {
            line: 199,
            column: 6
          },
          end: {
            line: 199,
            column: 54
          }
        },
        "78": {
          start: {
            line: 202,
            column: 33
          },
          end: {
            line: 202,
            column: 80
          }
        },
        "79": {
          start: {
            line: 203,
            column: 23
          },
          end: {
            line: 203,
            column: 54
          }
        },
        "80": {
          start: {
            line: 204,
            column: 31
          },
          end: {
            line: 204,
            column: 83
          }
        },
        "81": {
          start: {
            line: 206,
            column: 4
          },
          end: {
            line: 206,
            column: 66
          }
        },
        "82": {
          start: {
            line: 208,
            column: 4
          },
          end: {
            line: 208,
            column: 64
          }
        },
        "83": {
          start: {
            line: 209,
            column: 4
          },
          end: {
            line: 209,
            column: 69
          }
        },
        "84": {
          start: {
            line: 213,
            column: 4
          },
          end: {
            line: 216,
            column: 5
          }
        },
        "85": {
          start: {
            line: 215,
            column: 6
          },
          end: {
            line: 215,
            column: 12
          }
        },
        "86": {
          start: {
            line: 218,
            column: 23
          },
          end: {
            line: 218,
            column: 70
          }
        },
        "87": {
          start: {
            line: 219,
            column: 4
          },
          end: {
            line: 221,
            column: 5
          }
        },
        "88": {
          start: {
            line: 220,
            column: 6
          },
          end: {
            line: 220,
            column: 12
          }
        },
        "89": {
          start: {
            line: 223,
            column: 22
          },
          end: {
            line: 223,
            column: 42
          }
        },
        "90": {
          start: {
            line: 225,
            column: 4
          },
          end: {
            line: 225,
            column: 92
          }
        },
        "91": {
          start: {
            line: 227,
            column: 4
          },
          end: {
            line: 227,
            column: 30
          }
        },
        "92": {
          start: {
            line: 229,
            column: 4
          },
          end: {
            line: 229,
            column: 53
          }
        },
        "93": {
          start: {
            line: 230,
            column: 4
          },
          end: {
            line: 230,
            column: 54
          }
        },
        "94": {
          start: {
            line: 231,
            column: 4
          },
          end: {
            line: 231,
            column: 50
          }
        },
        "95": {
          start: {
            line: 233,
            column: 31
          },
          end: {
            line: 233,
            column: 56
          }
        },
        "96": {
          start: {
            line: 234,
            column: 4
          },
          end: {
            line: 248,
            column: 5
          }
        },
        "97": {
          start: {
            line: 235,
            column: 6
          },
          end: {
            line: 247,
            column: 7
          }
        },
        "98": {
          start: {
            line: 235,
            column: 19
          },
          end: {
            line: 235,
            column: 20
          }
        },
        "99": {
          start: {
            line: 236,
            column: 24
          },
          end: {
            line: 236,
            column: 45
          }
        },
        "100": {
          start: {
            line: 237,
            column: 25
          },
          end: {
            line: 237,
            column: 61
          }
        },
        "101": {
          start: {
            line: 239,
            column: 8
          },
          end: {
            line: 246,
            column: 9
          }
        },
        "102": {
          start: {
            line: 240,
            column: 23
          },
          end: {
            line: 240,
            column: 55
          }
        },
        "103": {
          start: {
            line: 242,
            column: 10
          },
          end: {
            line: 245,
            column: 11
          }
        },
        "104": {
          start: {
            line: 243,
            column: 12
          },
          end: {
            line: 243,
            column: 54
          }
        },
        "105": {
          start: {
            line: 244,
            column: 12
          },
          end: {
            line: 244,
            column: 56
          }
        },
        "106": {
          start: {
            line: 250,
            column: 4
          },
          end: {
            line: 250,
            column: 31
          }
        },
        "107": {
          start: {
            line: 252,
            column: 21
          },
          end: {
            line: 257,
            column: 5
          }
        },
        "108": {
          start: {
            line: 253,
            column: 6
          },
          end: {
            line: 253,
            column: 34
          }
        },
        "109": {
          start: {
            line: 254,
            column: 6
          },
          end: {
            line: 254,
            column: 58
          }
        },
        "110": {
          start: {
            line: 255,
            column: 6
          },
          end: {
            line: 255,
            column: 53
          }
        },
        "111": {
          start: {
            line: 256,
            column: 6
          },
          end: {
            line: 256,
            column: 55
          }
        },
        "112": {
          start: {
            line: 259,
            column: 4
          },
          end: {
            line: 259,
            column: 39
          }
        },
        "113": {
          start: {
            line: 260,
            column: 31
          },
          end: {
            line: 260,
            column: 83
          }
        },
        "114": {
          start: {
            line: 262,
            column: 4
          },
          end: {
            line: 262,
            column: 66
          }
        },
        "115": {
          start: {
            line: 263,
            column: 4
          },
          end: {
            line: 263,
            column: 64
          }
        },
        "116": {
          start: {
            line: 267,
            column: 4
          },
          end: {
            line: 267,
            column: 43
          }
        },
        "117": {
          start: {
            line: 271,
            column: 4
          },
          end: {
            line: 271,
            column: 44
          }
        },
        "118": {
          start: {
            line: 273,
            column: 4
          },
          end: {
            line: 273,
            column: 32
          }
        },
        "119": {
          start: {
            line: 274,
            column: 4
          },
          end: {
            line: 274,
            column: 32
          }
        },
        "120": {
          start: {
            line: 275,
            column: 4
          },
          end: {
            line: 275,
            column: 32
          }
        },
        "121": {
          start: {
            line: 276,
            column: 4
          },
          end: {
            line: 276,
            column: 32
          }
        },
        "122": {
          start: {
            line: 277,
            column: 4
          },
          end: {
            line: 277,
            column: 32
          }
        },
        "123": {
          start: {
            line: 283,
            column: 4
          },
          end: {
            line: 286,
            column: 5
          }
        },
        "124": {
          start: {
            line: 287,
            column: 4
          },
          end: {
            line: 287,
            column: 42
          }
        },
        "125": {
          start: {
            line: 288,
            column: 4
          },
          end: {
            line: 288,
            column: 51
          }
        },
        "126": {
          start: {
            line: 289,
            column: 4
          },
          end: {
            line: 289,
            column: 17
          }
        },
        "127": {
          start: {
            line: 293,
            column: 21
          },
          end: {
            line: 293,
            column: 70
          }
        },
        "128": {
          start: {
            line: 294,
            column: 4
          },
          end: {
            line: 294,
            column: 56
          }
        },
        "129": {
          start: {
            line: 300,
            column: 4
          },
          end: {
            line: 309,
            column: 5
          }
        },
        "130": {
          start: {
            line: 301,
            column: 6
          },
          end: {
            line: 301,
            column: 34
          }
        },
        "131": {
          start: {
            line: 304,
            column: 6
          },
          end: {
            line: 306,
            column: 7
          }
        },
        "132": {
          start: {
            line: 305,
            column: 8
          },
          end: {
            line: 305,
            column: 39
          }
        },
        "133": {
          start: {
            line: 308,
            column: 6
          },
          end: {
            line: 308,
            column: 58
          }
        },
        "134": {
          start: {
            line: 312,
            column: 6
          },
          end: {
            line: 312,
            column: 70
          }
        },
        "135": {
          start: {
            line: 314,
            column: 4
          },
          end: {
            line: 320,
            column: 8
          }
        },
        "136": {
          start: {
            line: 316,
            column: 8
          },
          end: {
            line: 319,
            column: 9
          }
        },
        "137": {
          start: {
            line: 322,
            column: 4
          },
          end: {
            line: 322,
            column: 17
          }
        },
        "138": {
          start: {
            line: 326,
            column: 4
          },
          end: {
            line: 339,
            column: 5
          }
        },
        "139": {
          start: {
            line: 327,
            column: 21
          },
          end: {
            line: 327,
            column: 63
          }
        },
        "140": {
          start: {
            line: 329,
            column: 6
          },
          end: {
            line: 338,
            column: 7
          }
        },
        "141": {
          start: {
            line: 330,
            column: 8
          },
          end: {
            line: 337,
            column: 10
          }
        },
        "142": {
          start: {
            line: 331,
            column: 10
          },
          end: {
            line: 335,
            column: 11
          }
        },
        "143": {
          start: {
            line: 332,
            column: 12
          },
          end: {
            line: 332,
            column: 51
          }
        },
        "144": {
          start: {
            line: 334,
            column: 12
          },
          end: {
            line: 334,
            column: 54
          }
        },
        "145": {
          start: {
            line: 336,
            column: 10
          },
          end: {
            line: 336,
            column: 52
          }
        },
        "146": {
          start: {
            line: 345,
            column: 21
          },
          end: {
            line: 345,
            column: 57
          }
        },
        "147": {
          start: {
            line: 346,
            column: 4
          },
          end: {
            line: 346,
            column: 61
          }
        },
        "148": {
          start: {
            line: 350,
            column: 20
          },
          end: {
            line: 350,
            column: 51
          }
        },
        "149": {
          start: {
            line: 351,
            column: 20
          },
          end: {
            line: 355,
            column: 5
          }
        },
        "150": {
          start: {
            line: 357,
            column: 4
          },
          end: {
            line: 359,
            column: 5
          }
        },
        "151": {
          start: {
            line: 358,
            column: 6
          },
          end: {
            line: 358,
            column: 28
          }
        },
        "152": {
          start: {
            line: 361,
            column: 4
          },
          end: {
            line: 363,
            column: 5
          }
        },
        "153": {
          start: {
            line: 362,
            column: 6
          },
          end: {
            line: 362,
            column: 43
          }
        },
        "154": {
          start: {
            line: 365,
            column: 4
          },
          end: {
            line: 370,
            column: 5
          }
        },
        "155": {
          start: {
            line: 366,
            column: 6
          },
          end: {
            line: 368,
            column: 7
          }
        },
        "156": {
          start: {
            line: 367,
            column: 8
          },
          end: {
            line: 367,
            column: 54
          }
        },
        "157": {
          start: {
            line: 369,
            column: 6
          },
          end: {
            line: 369,
            column: 20
          }
        },
        "158": {
          start: {
            line: 374,
            column: 4
          },
          end: {
            line: 376,
            column: 6
          }
        },
        "159": {
          start: {
            line: 375,
            column: 6
          },
          end: {
            line: 375,
            column: 47
          }
        },
        "160": {
          start: {
            line: 380,
            column: 4
          },
          end: {
            line: 380,
            column: 42
          }
        },
        "161": {
          start: {
            line: 390,
            column: 0
          },
          end: {
            line: 416,
            column: 2
          }
        },
        "162": {
          start: {
            line: 392,
            column: 2
          },
          end: {
            line: 394,
            column: 3
          }
        },
        "163": {
          start: {
            line: 393,
            column: 4
          },
          end: {
            line: 393,
            column: 26
          }
        },
        "164": {
          start: {
            line: 396,
            column: 27
          },
          end: {
            line: 396,
            column: 62
          }
        },
        "165": {
          start: {
            line: 397,
            column: 27
          },
          end: {
            line: 397,
            column: 60
          }
        },
        "166": {
          start: {
            line: 398,
            column: 27
          },
          end: {
            line: 398,
            column: 72
          }
        },
        "167": {
          start: {
            line: 400,
            column: 2
          },
          end: {
            line: 415,
            column: 4
          }
        },
        "168": {
          start: {
            line: 401,
            column: 17
          },
          end: {
            line: 401,
            column: 48
          }
        },
        "169": {
          start: {
            line: 403,
            column: 4
          },
          end: {
            line: 412,
            column: 5
          }
        },
        "170": {
          start: {
            line: 405,
            column: 6
          },
          end: {
            line: 408,
            column: 7
          }
        },
        "171": {
          start: {
            line: 406,
            column: 8
          },
          end: {
            line: 406,
            column: 48
          }
        },
        "172": {
          start: {
            line: 407,
            column: 8
          },
          end: {
            line: 407,
            column: 40
          }
        },
        "173": {
          start: {
            line: 409,
            column: 6
          },
          end: {
            line: 409,
            column: 23
          }
        },
        "174": {
          start: {
            line: 411,
            column: 6
          },
          end: {
            line: 411,
            column: 26
          }
        },
        "175": {
          start: {
            line: 414,
            column: 4
          },
          end: {
            line: 414,
            column: 48
          }
        },
        "176": {
          start: {
            line: 425,
            column: 10
          },
          end: {
            line: 425,
            column: 21
          }
        },
        "177": {
          start: {
            line: 426,
            column: 0
          },
          end: {
            line: 434,
            column: 1
          }
        },
        "178": {
          start: {
            line: 427,
            column: 30
          },
          end: {
            line: 427,
            column: 40
          }
        },
        "179": {
          start: {
            line: 428,
            column: 2
          },
          end: {
            line: 428,
            column: 55
          }
        },
        "180": {
          start: {
            line: 429,
            column: 2
          },
          end: {
            line: 429,
            column: 38
          }
        },
        "181": {
          start: {
            line: 430,
            column: 2
          },
          end: {
            line: 433,
            column: 3
          }
        },
        "182": {
          start: {
            line: 431,
            column: 4
          },
          end: {
            line: 431,
            column: 35
          }
        },
        "183": {
          start: {
            line: 432,
            column: 4
          },
          end: {
            line: 432,
            column: 36
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 68,
              column: 2
            },
            end: {
              line: 68,
              column: 3
            }
          },
          loc: {
            start: {
              line: 68,
              column: 31
            },
            end: {
              line: 101,
              column: 3
            }
          },
          line: 68
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 82,
              column: 16
            },
            end: {
              line: 82,
              column: 17
            }
          },
          loc: {
            start: {
              line: 82,
              column: 31
            },
            end: {
              line: 82,
              column: 52
            }
          },
          line: 82
        },
        "2": {
          name: "(anonymous_2)",
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
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 109,
              column: 2
            },
            end: {
              line: 109,
              column: 3
            }
          },
          loc: {
            start: {
              line: 109,
              column: 23
            },
            end: {
              line: 111,
              column: 3
            }
          },
          line: 109
        },
        "4": {
          name: "(anonymous_4)",
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
              column: 11
            },
            end: {
              line: 121,
              column: 3
            }
          },
          line: 115
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 123,
              column: 2
            },
            end: {
              line: 123,
              column: 3
            }
          },
          loc: {
            start: {
              line: 123,
              column: 9
            },
            end: {
              line: 210,
              column: 3
            }
          },
          line: 123
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 134,
              column: 16
            },
            end: {
              line: 134,
              column: 17
            }
          },
          loc: {
            start: {
              line: 134,
              column: 26
            },
            end: {
              line: 140,
              column: 9
            }
          },
          line: 134
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 149,
              column: 44
            },
            end: {
              line: 149,
              column: 45
            }
          },
          loc: {
            start: {
              line: 149,
              column: 54
            },
            end: {
              line: 149,
              column: 72
            }
          },
          line: 149
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 163,
              column: 22
            },
            end: {
              line: 163,
              column: 23
            }
          },
          loc: {
            start: {
              line: 163,
              column: 38
            },
            end: {
              line: 171,
              column: 7
            }
          },
          line: 163
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 182,
              column: 33
            },
            end: {
              line: 182,
              column: 34
            }
          },
          loc: {
            start: {
              line: 182,
              column: 46
            },
            end: {
              line: 185,
              column: 7
            }
          },
          line: 182
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 190,
              column: 21
            },
            end: {
              line: 190,
              column: 22
            }
          },
          loc: {
            start: {
              line: 190,
              column: 27
            },
            end: {
              line: 200,
              column: 5
            }
          },
          line: 190
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 212,
              column: 2
            },
            end: {
              line: 212,
              column: 3
            }
          },
          loc: {
            start: {
              line: 212,
              column: 9
            },
            end: {
              line: 264,
              column: 3
            }
          },
          line: 212
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 252,
              column: 21
            },
            end: {
              line: 252,
              column: 22
            }
          },
          loc: {
            start: {
              line: 252,
              column: 27
            },
            end: {
              line: 257,
              column: 5
            }
          },
          line: 252
        },
        "13": {
          name: "(anonymous_13)",
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
              column: 36
            },
            end: {
              line: 268,
              column: 3
            }
          },
          line: 266
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 270,
              column: 2
            },
            end: {
              line: 270,
              column: 3
            }
          },
          loc: {
            start: {
              line: 270,
              column: 12
            },
            end: {
              line: 278,
              column: 3
            }
          },
          line: 270
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 282,
              column: 2
            },
            end: {
              line: 282,
              column: 3
            }
          },
          loc: {
            start: {
              line: 282,
              column: 21
            },
            end: {
              line: 290,
              column: 3
            }
          },
          line: 282
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 292,
              column: 2
            },
            end: {
              line: 292,
              column: 3
            }
          },
          loc: {
            start: {
              line: 292,
              column: 18
            },
            end: {
              line: 295,
              column: 3
            }
          },
          line: 292
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 297,
              column: 2
            },
            end: {
              line: 297,
              column: 3
            }
          },
          loc: {
            start: {
              line: 297,
              column: 15
            },
            end: {
              line: 323,
              column: 3
            }
          },
          line: 297
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 315,
              column: 15
            },
            end: {
              line: 315,
              column: 16
            }
          },
          loc: {
            start: {
              line: 315,
              column: 28
            },
            end: {
              line: 320,
              column: 7
            }
          },
          line: 315
        },
        "19": {
          name: "(anonymous_19)",
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
              column: 51
            },
            end: {
              line: 340,
              column: 3
            }
          },
          line: 325
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 330,
              column: 29
            },
            end: {
              line: 330,
              column: 30
            }
          },
          loc: {
            start: {
              line: 330,
              column: 39
            },
            end: {
              line: 337,
              column: 9
            }
          },
          line: 330
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 344,
              column: 2
            },
            end: {
              line: 344,
              column: 3
            }
          },
          loc: {
            start: {
              line: 344,
              column: 40
            },
            end: {
              line: 347,
              column: 3
            }
          },
          line: 344
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 349,
              column: 2
            },
            end: {
              line: 349,
              column: 3
            }
          },
          loc: {
            start: {
              line: 349,
              column: 45
            },
            end: {
              line: 371,
              column: 3
            }
          },
          line: 349
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 373,
              column: 2
            },
            end: {
              line: 373,
              column: 3
            }
          },
          loc: {
            start: {
              line: 373,
              column: 34
            },
            end: {
              line: 377,
              column: 3
            }
          },
          line: 373
        },
        "24": {
          name: "(anonymous_24)",
          decl: {
            start: {
              line: 374,
              column: 21
            },
            end: {
              line: 374,
              column: 22
            }
          },
          loc: {
            start: {
              line: 374,
              column: 33
            },
            end: {
              line: 376,
              column: 5
            }
          },
          line: 374
        },
        "25": {
          name: "(anonymous_25)",
          decl: {
            start: {
              line: 379,
              column: 2
            },
            end: {
              line: 379,
              column: 3
            }
          },
          loc: {
            start: {
              line: 379,
              column: 31
            },
            end: {
              line: 381,
              column: 3
            }
          },
          line: 379
        },
        "26": {
          name: "(anonymous_26)",
          decl: {
            start: {
              line: 390,
              column: 70
            },
            end: {
              line: 390,
              column: 71
            }
          },
          loc: {
            start: {
              line: 390,
              column: 87
            },
            end: {
              line: 416,
              column: 1
            }
          },
          line: 390
        },
        "27": {
          name: "(anonymous_27)",
          decl: {
            start: {
              line: 400,
              column: 27
            },
            end: {
              line: 400,
              column: 28
            }
          },
          loc: {
            start: {
              line: 400,
              column: 40
            },
            end: {
              line: 415,
              column: 3
            }
          },
          line: 400
        },
        "28": {
          name: "(anonymous_28)",
          decl: {
            start: {
              line: 430,
              column: 30
            },
            end: {
              line: 430,
              column: 31
            }
          },
          loc: {
            start: {
              line: 430,
              column: 36
            },
            end: {
              line: 433,
              column: 3
            }
          },
          line: 430
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 84,
              column: 6
            },
            end: {
              line: 87,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 84,
              column: 6
            },
            end: {
              line: 87,
              column: 7
            }
          }, {
            start: {
              line: 84,
              column: 6
            },
            end: {
              line: 87,
              column: 7
            }
          }],
          line: 84
        },
        "1": {
          loc: {
            start: {
              line: 84,
              column: 10
            },
            end: {
              line: 84,
              column: 51
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 84,
              column: 10
            },
            end: {
              line: 84,
              column: 27
            }
          }, {
            start: {
              line: 84,
              column: 31
            },
            end: {
              line: 84,
              column: 51
            }
          }],
          line: 84
        },
        "2": {
          loc: {
            start: {
              line: 90,
              column: 19
            },
            end: {
              line: 90,
              column: 65
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 90,
              column: 41
            },
            end: {
              line: 90,
              column: 58
            }
          }, {
            start: {
              line: 90,
              column: 61
            },
            end: {
              line: 90,
              column: 65
            }
          }],
          line: 90
        },
        "3": {
          loc: {
            start: {
              line: 92,
              column: 4
            },
            end: {
              line: 94,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 92,
              column: 4
            },
            end: {
              line: 94,
              column: 5
            }
          }, {
            start: {
              line: 92,
              column: 4
            },
            end: {
              line: 94,
              column: 5
            }
          }],
          line: 92
        },
        "4": {
          loc: {
            start: {
              line: 96,
              column: 4
            },
            end: {
              line: 98,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 96,
              column: 4
            },
            end: {
              line: 98,
              column: 5
            }
          }, {
            start: {
              line: 96,
              column: 4
            },
            end: {
              line: 98,
              column: 5
            }
          }],
          line: 96
        },
        "5": {
          loc: {
            start: {
              line: 116,
              column: 4
            },
            end: {
              line: 120,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 116,
              column: 4
            },
            end: {
              line: 120,
              column: 5
            }
          }, {
            start: {
              line: 116,
              column: 4
            },
            end: {
              line: 120,
              column: 5
            }
          }],
          line: 116
        },
        "6": {
          loc: {
            start: {
              line: 124,
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
              line: 124,
              column: 4
            },
            end: {
              line: 127,
              column: 5
            }
          }, {
            start: {
              line: 124,
              column: 4
            },
            end: {
              line: 127,
              column: 5
            }
          }],
          line: 124
        },
        "7": {
          loc: {
            start: {
              line: 124,
              column: 8
            },
            end: {
              line: 125,
              column: 54
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 124,
              column: 8
            },
            end: {
              line: 124,
              column: 29
            }
          }, {
            start: {
              line: 125,
              column: 6
            },
            end: {
              line: 125,
              column: 54
            }
          }],
          line: 124
        },
        "8": {
          loc: {
            start: {
              line: 132,
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
              line: 132,
              column: 4
            },
            end: {
              line: 145,
              column: 5
            }
          }, {
            start: {
              line: 132,
              column: 4
            },
            end: {
              line: 145,
              column: 5
            }
          }],
          line: 132
        },
        "9": {
          loc: {
            start: {
              line: 135,
              column: 10
            },
            end: {
              line: 137,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 135,
              column: 10
            },
            end: {
              line: 137,
              column: 11
            }
          }, {
            start: {
              line: 135,
              column: 10
            },
            end: {
              line: 137,
              column: 11
            }
          }],
          line: 135
        },
        "10": {
          loc: {
            start: {
              line: 142,
              column: 6
            },
            end: {
              line: 144,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 142,
              column: 6
            },
            end: {
              line: 144,
              column: 7
            }
          }, {
            start: {
              line: 142,
              column: 6
            },
            end: {
              line: 144,
              column: 7
            }
          }],
          line: 142
        },
        "11": {
          loc: {
            start: {
              line: 148,
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
              line: 148,
              column: 4
            },
            end: {
              line: 155,
              column: 5
            }
          }, {
            start: {
              line: 148,
              column: 4
            },
            end: {
              line: 155,
              column: 5
            }
          }],
          line: 148
        },
        "12": {
          loc: {
            start: {
              line: 150,
              column: 20
            },
            end: {
              line: 150,
              column: 88
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 150,
              column: 40
            },
            end: {
              line: 150,
              column: 81
            }
          }, {
            start: {
              line: 150,
              column: 84
            },
            end: {
              line: 150,
              column: 88
            }
          }],
          line: 150
        },
        "13": {
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
        "14": {
          loc: {
            start: {
              line: 152,
              column: 10
            },
            end: {
              line: 152,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 152,
              column: 10
            },
            end: {
              line: 152,
              column: 21
            }
          }, {
            start: {
              line: 152,
              column: 25
            },
            end: {
              line: 152,
              column: 53
            }
          }],
          line: 152
        },
        "15": {
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
        "16": {
          loc: {
            start: {
              line: 162,
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
              line: 162,
              column: 4
            },
            end: {
              line: 172,
              column: 5
            }
          }, {
            start: {
              line: 162,
              column: 4
            },
            end: {
              line: 172,
              column: 5
            }
          }],
          line: 162
        },
        "17": {
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
        "18": {
          loc: {
            start: {
              line: 168,
              column: 8
            },
            end: {
              line: 170,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 168,
              column: 8
            },
            end: {
              line: 170,
              column: 9
            }
          }, {
            start: {
              line: 168,
              column: 8
            },
            end: {
              line: 170,
              column: 9
            }
          }],
          line: 168
        },
        "19": {
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
        "20": {
          loc: {
            start: {
              line: 213,
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
              line: 213,
              column: 4
            },
            end: {
              line: 216,
              column: 5
            }
          }, {
            start: {
              line: 213,
              column: 4
            },
            end: {
              line: 216,
              column: 5
            }
          }],
          line: 213
        },
        "21": {
          loc: {
            start: {
              line: 213,
              column: 8
            },
            end: {
              line: 214,
              column: 55
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 213,
              column: 8
            },
            end: {
              line: 213,
              column: 29
            }
          }, {
            start: {
              line: 214,
              column: 6
            },
            end: {
              line: 214,
              column: 55
            }
          }],
          line: 213
        },
        "22": {
          loc: {
            start: {
              line: 219,
              column: 4
            },
            end: {
              line: 221,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 219,
              column: 4
            },
            end: {
              line: 221,
              column: 5
            }
          }, {
            start: {
              line: 219,
              column: 4
            },
            end: {
              line: 221,
              column: 5
            }
          }],
          line: 219
        },
        "23": {
          loc: {
            start: {
              line: 234,
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
              line: 234,
              column: 4
            },
            end: {
              line: 248,
              column: 5
            }
          }, {
            start: {
              line: 234,
              column: 4
            },
            end: {
              line: 248,
              column: 5
            }
          }],
          line: 234
        },
        "24": {
          loc: {
            start: {
              line: 239,
              column: 8
            },
            end: {
              line: 246,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 239,
              column: 8
            },
            end: {
              line: 246,
              column: 9
            }
          }, {
            start: {
              line: 239,
              column: 8
            },
            end: {
              line: 246,
              column: 9
            }
          }],
          line: 239
        },
        "25": {
          loc: {
            start: {
              line: 242,
              column: 10
            },
            end: {
              line: 245,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 242,
              column: 10
            },
            end: {
              line: 245,
              column: 11
            }
          }, {
            start: {
              line: 242,
              column: 10
            },
            end: {
              line: 245,
              column: 11
            }
          }],
          line: 242
        },
        "26": {
          loc: {
            start: {
              line: 294,
              column: 11
            },
            end: {
              line: 294,
              column: 56
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 294,
              column: 22
            },
            end: {
              line: 294,
              column: 37
            }
          }, {
            start: {
              line: 294,
              column: 40
            },
            end: {
              line: 294,
              column: 56
            }
          }],
          line: 294
        },
        "27": {
          loc: {
            start: {
              line: 300,
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
              line: 300,
              column: 4
            },
            end: {
              line: 309,
              column: 5
            }
          }, {
            start: {
              line: 300,
              column: 4
            },
            end: {
              line: 309,
              column: 5
            }
          }],
          line: 300
        },
        "28": {
          loc: {
            start: {
              line: 304,
              column: 6
            },
            end: {
              line: 306,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 304,
              column: 6
            },
            end: {
              line: 306,
              column: 7
            }
          }, {
            start: {
              line: 304,
              column: 6
            },
            end: {
              line: 306,
              column: 7
            }
          }],
          line: 304
        },
        "29": {
          loc: {
            start: {
              line: 304,
              column: 10
            },
            end: {
              line: 304,
              column: 108
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 304,
              column: 10
            },
            end: {
              line: 304,
              column: 59
            }
          }, {
            start: {
              line: 304,
              column: 63
            },
            end: {
              line: 304,
              column: 108
            }
          }],
          line: 304
        },
        "30": {
          loc: {
            start: {
              line: 326,
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
              line: 326,
              column: 4
            },
            end: {
              line: 339,
              column: 5
            }
          }, {
            start: {
              line: 326,
              column: 4
            },
            end: {
              line: 339,
              column: 5
            }
          }],
          line: 326
        },
        "31": {
          loc: {
            start: {
              line: 329,
              column: 6
            },
            end: {
              line: 338,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 329,
              column: 6
            },
            end: {
              line: 338,
              column: 7
            }
          }, {
            start: {
              line: 329,
              column: 6
            },
            end: {
              line: 338,
              column: 7
            }
          }],
          line: 329
        },
        "32": {
          loc: {
            start: {
              line: 331,
              column: 10
            },
            end: {
              line: 335,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 331,
              column: 10
            },
            end: {
              line: 335,
              column: 11
            }
          }, {
            start: {
              line: 331,
              column: 10
            },
            end: {
              line: 335,
              column: 11
            }
          }],
          line: 331
        },
        "33": {
          loc: {
            start: {
              line: 346,
              column: 11
            },
            end: {
              line: 346,
              column: 61
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 346,
              column: 22
            },
            end: {
              line: 346,
              column: 54
            }
          }, {
            start: {
              line: 346,
              column: 57
            },
            end: {
              line: 346,
              column: 61
            }
          }],
          line: 346
        },
        "34": {
          loc: {
            start: {
              line: 354,
              column: 9
            },
            end: {
              line: 354,
              column: 59
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 354,
              column: 48
            },
            end: {
              line: 354,
              column: 54
            }
          }, {
            start: {
              line: 354,
              column: 57
            },
            end: {
              line: 354,
              column: 59
            }
          }],
          line: 354
        },
        "35": {
          loc: {
            start: {
              line: 354,
              column: 9
            },
            end: {
              line: 354,
              column: 45
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 354,
              column: 9
            },
            end: {
              line: 354,
              column: 35
            }
          }, {
            start: {
              line: 354,
              column: 39
            },
            end: {
              line: 354,
              column: 45
            }
          }],
          line: 354
        },
        "36": {
          loc: {
            start: {
              line: 357,
              column: 4
            },
            end: {
              line: 359,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 357,
              column: 4
            },
            end: {
              line: 359,
              column: 5
            }
          }, {
            start: {
              line: 357,
              column: 4
            },
            end: {
              line: 359,
              column: 5
            }
          }],
          line: 357
        },
        "37": {
          loc: {
            start: {
              line: 357,
              column: 8
            },
            end: {
              line: 357,
              column: 59
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 357,
              column: 8
            },
            end: {
              line: 357,
              column: 13
            }
          }, {
            start: {
              line: 357,
              column: 17
            },
            end: {
              line: 357,
              column: 31
            }
          }, {
            start: {
              line: 357,
              column: 35
            },
            end: {
              line: 357,
              column: 59
            }
          }],
          line: 357
        },
        "38": {
          loc: {
            start: {
              line: 361,
              column: 4
            },
            end: {
              line: 363,
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
              line: 363,
              column: 5
            }
          }, {
            start: {
              line: 361,
              column: 4
            },
            end: {
              line: 363,
              column: 5
            }
          }],
          line: 361
        },
        "39": {
          loc: {
            start: {
              line: 365,
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
              line: 365,
              column: 4
            },
            end: {
              line: 370,
              column: 5
            }
          }, {
            start: {
              line: 365,
              column: 4
            },
            end: {
              line: 370,
              column: 5
            }
          }],
          line: 365
        },
        "40": {
          loc: {
            start: {
              line: 366,
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
              line: 366,
              column: 6
            },
            end: {
              line: 368,
              column: 7
            }
          }, {
            start: {
              line: 366,
              column: 6
            },
            end: {
              line: 368,
              column: 7
            }
          }],
          line: 366
        },
        "41": {
          loc: {
            start: {
              line: 392,
              column: 2
            },
            end: {
              line: 394,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 392,
              column: 2
            },
            end: {
              line: 394,
              column: 3
            }
          }, {
            start: {
              line: 392,
              column: 2
            },
            end: {
              line: 394,
              column: 3
            }
          }],
          line: 392
        },
        "42": {
          loc: {
            start: {
              line: 403,
              column: 4
            },
            end: {
              line: 412,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 403,
              column: 4
            },
            end: {
              line: 412,
              column: 5
            }
          }, {
            start: {
              line: 403,
              column: 4
            },
            end: {
              line: 412,
              column: 5
            }
          }],
          line: 403
        },
        "43": {
          loc: {
            start: {
              line: 405,
              column: 6
            },
            end: {
              line: 408,
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
              line: 408,
              column: 7
            }
          }, {
            start: {
              line: 405,
              column: 6
            },
            end: {
              line: 408,
              column: 7
            }
          }],
          line: 405
        },
        "44": {
          loc: {
            start: {
              line: 405,
              column: 10
            },
            end: {
              line: 405,
              column: 73
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 405,
              column: 10
            },
            end: {
              line: 405,
              column: 31
            }
          }, {
            start: {
              line: 405,
              column: 35
            },
            end: {
              line: 405,
              column: 73
            }
          }],
          line: 405
        },
        "45": {
          loc: {
            start: {
              line: 426,
              column: 0
            },
            end: {
              line: 434,
              column: 1
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 426,
              column: 0
            },
            end: {
              line: 434,
              column: 1
            }
          }, {
            start: {
              line: 426,
              column: 0
            },
            end: {
              line: 434,
              column: 1
            }
          }],
          line: 426
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
        "183": 0
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
        "28": 0
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
        "32": [0, 0],
        "33": [0, 0],
        "34": [0, 0],
        "35": [0, 0],
        "36": [0, 0],
        "37": [0, 0, 0],
        "38": [0, 0],
        "39": [0, 0],
        "40": [0, 0],
        "41": [0, 0],
        "42": [0, 0],
        "43": [0, 0],
        "44": [0, 0],
        "45": [0, 0]
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

  var NAME = (cov_2itwqk888x.s[0]++, 'collapse');
  var VERSION = (cov_2itwqk888x.s[1]++, '4.3.1');
  var DATA_KEY = (cov_2itwqk888x.s[2]++, 'bs.collapse');
  var EVENT_KEY = (cov_2itwqk888x.s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_2itwqk888x.s[4]++, '.data-api');
  var Default = (cov_2itwqk888x.s[5]++, {
    toggle: true,
    parent: ''
  });
  var DefaultType = (cov_2itwqk888x.s[6]++, {
    toggle: 'boolean',
    parent: '(string|element)'
  });
  var Event = (cov_2itwqk888x.s[7]++, {
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  });
  var ClassName = (cov_2itwqk888x.s[8]++, {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  });
  var Dimension = (cov_2itwqk888x.s[9]++, {
    WIDTH: 'width',
    HEIGHT: 'height'
  });
  var Selector = (cov_2itwqk888x.s[10]++, {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  });

  var Collapse =
  /*#__PURE__*/
  function () {
    function Collapse(element, config) {
      cov_2itwqk888x.f[0]++;
      cov_2itwqk888x.s[11]++;
      this._isTransitioning = false;
      cov_2itwqk888x.s[12]++;
      this._element = element;
      cov_2itwqk888x.s[13]++;
      this._config = this._getConfig(config);
      cov_2itwqk888x.s[14]++;
      this._triggerArray = Util.makeArray(SelectorEngine.find("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = (cov_2itwqk888x.s[15]++, Util.makeArray(SelectorEngine.find(Selector.DATA_TOGGLE)));
      cov_2itwqk888x.s[16]++;

      for (var i = (cov_2itwqk888x.s[17]++, 0), len = (cov_2itwqk888x.s[18]++, toggleList.length); i < len; i++) {
        var elem = (cov_2itwqk888x.s[19]++, toggleList[i]);
        var selector = (cov_2itwqk888x.s[20]++, Util.getSelectorFromElement(elem));
        var filterElement = (cov_2itwqk888x.s[21]++, Util.makeArray(SelectorEngine.find(selector)).filter(function (foundElem) {
          cov_2itwqk888x.f[1]++;
          cov_2itwqk888x.s[22]++;
          return foundElem === element;
        }));
        cov_2itwqk888x.s[23]++;

        if ((cov_2itwqk888x.b[1][0]++, selector !== null) && (cov_2itwqk888x.b[1][1]++, filterElement.length)) {
          cov_2itwqk888x.b[0][0]++;
          cov_2itwqk888x.s[24]++;
          this._selector = selector;
          cov_2itwqk888x.s[25]++;

          this._triggerArray.push(elem);
        } else {
          cov_2itwqk888x.b[0][1]++;
        }
      }

      cov_2itwqk888x.s[26]++;
      this._parent = this._config.parent ? (cov_2itwqk888x.b[2][0]++, this._getParent()) : (cov_2itwqk888x.b[2][1]++, null);
      cov_2itwqk888x.s[27]++;

      if (!this._config.parent) {
        cov_2itwqk888x.b[3][0]++;
        cov_2itwqk888x.s[28]++;

        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      } else {
        cov_2itwqk888x.b[3][1]++;
      }

      cov_2itwqk888x.s[29]++;

      if (this._config.toggle) {
        cov_2itwqk888x.b[4][0]++;
        cov_2itwqk888x.s[30]++;
        this.toggle();
      } else {
        cov_2itwqk888x.b[4][1]++;
      }

      cov_2itwqk888x.s[31]++;
      Data.setData(element, DATA_KEY, this);
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      cov_2itwqk888x.f[4]++;
      cov_2itwqk888x.s[34]++;

      if (this._element.classList.contains(ClassName.SHOW)) {
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

      if ((cov_2itwqk888x.b[7][0]++, this._isTransitioning) || (cov_2itwqk888x.b[7][1]++, this._element.classList.contains(ClassName.SHOW))) {
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
        actives = Util.makeArray(SelectorEngine.find(Selector.ACTIVES, this._parent)).filter(function (elem) {
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

      var container = (cov_2itwqk888x.s[46]++, SelectorEngine.findOne(this._selector));
      cov_2itwqk888x.s[47]++;

      if (actives) {
        cov_2itwqk888x.b[11][0]++;
        var tempActiveData = (cov_2itwqk888x.s[48]++, actives.filter(function (elem) {
          cov_2itwqk888x.f[7]++;
          cov_2itwqk888x.s[49]++;
          return container !== elem;
        }));
        cov_2itwqk888x.s[50]++;
        activesData = tempActiveData[0] ? (cov_2itwqk888x.b[12][0]++, Data.getData(tempActiveData[0], DATA_KEY)) : (cov_2itwqk888x.b[12][1]++, null);
        cov_2itwqk888x.s[51]++;

        if ((cov_2itwqk888x.b[14][0]++, activesData) && (cov_2itwqk888x.b[14][1]++, activesData._isTransitioning)) {
          cov_2itwqk888x.b[13][0]++;
          cov_2itwqk888x.s[52]++;
          return;
        } else {
          cov_2itwqk888x.b[13][1]++;
        }
      } else {
        cov_2itwqk888x.b[11][1]++;
      }

      var startEvent = (cov_2itwqk888x.s[53]++, EventHandler.trigger(this._element, Event.SHOW));
      cov_2itwqk888x.s[54]++;

      if (startEvent.defaultPrevented) {
        cov_2itwqk888x.b[15][0]++;
        cov_2itwqk888x.s[55]++;
        return;
      } else {
        cov_2itwqk888x.b[15][1]++;
      }

      cov_2itwqk888x.s[56]++;

      if (actives) {
        cov_2itwqk888x.b[16][0]++;
        cov_2itwqk888x.s[57]++;
        actives.forEach(function (elemActive) {
          cov_2itwqk888x.f[8]++;
          cov_2itwqk888x.s[58]++;

          if (container !== elemActive) {
            cov_2itwqk888x.b[17][0]++;
            cov_2itwqk888x.s[59]++;

            Collapse._collapseInterface(elemActive, 'hide');
          } else {
            cov_2itwqk888x.b[17][1]++;
          }

          cov_2itwqk888x.s[60]++;

          if (!activesData) {
            cov_2itwqk888x.b[18][0]++;
            cov_2itwqk888x.s[61]++;
            Data.setData(elemActive, DATA_KEY, null);
          } else {
            cov_2itwqk888x.b[18][1]++;
          }
        });
      } else {
        cov_2itwqk888x.b[16][1]++;
      }

      var dimension = (cov_2itwqk888x.s[62]++, this._getDimension());
      cov_2itwqk888x.s[63]++;

      this._element.classList.remove(ClassName.COLLAPSE);

      cov_2itwqk888x.s[64]++;

      this._element.classList.add(ClassName.COLLAPSING);

      cov_2itwqk888x.s[65]++;
      this._element.style[dimension] = 0;
      cov_2itwqk888x.s[66]++;

      if (this._triggerArray.length) {
        cov_2itwqk888x.b[19][0]++;
        cov_2itwqk888x.s[67]++;

        this._triggerArray.forEach(function (element) {
          cov_2itwqk888x.f[9]++;
          cov_2itwqk888x.s[68]++;
          element.classList.remove(ClassName.COLLAPSED);
          cov_2itwqk888x.s[69]++;
          element.setAttribute('aria-expanded', true);
        });
      } else {
        cov_2itwqk888x.b[19][1]++;
      }

      cov_2itwqk888x.s[70]++;
      this.setTransitioning(true);
      cov_2itwqk888x.s[71]++;

      var complete = function complete() {
        cov_2itwqk888x.f[10]++;
        cov_2itwqk888x.s[72]++;

        _this._element.classList.remove(ClassName.COLLAPSING);

        cov_2itwqk888x.s[73]++;

        _this._element.classList.add(ClassName.COLLAPSE);

        cov_2itwqk888x.s[74]++;

        _this._element.classList.add(ClassName.SHOW);

        cov_2itwqk888x.s[75]++;
        _this._element.style[dimension] = '';
        cov_2itwqk888x.s[76]++;

        _this.setTransitioning(false);

        cov_2itwqk888x.s[77]++;
        EventHandler.trigger(_this._element, Event.SHOWN);
      };

      var capitalizedDimension = (cov_2itwqk888x.s[78]++, dimension[0].toUpperCase() + dimension.slice(1));
      var scrollSize = (cov_2itwqk888x.s[79]++, "scroll" + capitalizedDimension);
      var transitionDuration = (cov_2itwqk888x.s[80]++, Util.getTransitionDurationFromElement(this._element));
      cov_2itwqk888x.s[81]++;
      EventHandler.one(this._element, Util.TRANSITION_END, complete);
      cov_2itwqk888x.s[82]++;
      Util.emulateTransitionEnd(this._element, transitionDuration);
      cov_2itwqk888x.s[83]++;
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      cov_2itwqk888x.f[11]++;
      cov_2itwqk888x.s[84]++;

      if ((cov_2itwqk888x.b[21][0]++, this._isTransitioning) || (cov_2itwqk888x.b[21][1]++, !this._element.classList.contains(ClassName.SHOW))) {
        cov_2itwqk888x.b[20][0]++;
        cov_2itwqk888x.s[85]++;
        return;
      } else {
        cov_2itwqk888x.b[20][1]++;
      }

      var startEvent = (cov_2itwqk888x.s[86]++, EventHandler.trigger(this._element, Event.HIDE));
      cov_2itwqk888x.s[87]++;

      if (startEvent.defaultPrevented) {
        cov_2itwqk888x.b[22][0]++;
        cov_2itwqk888x.s[88]++;
        return;
      } else {
        cov_2itwqk888x.b[22][1]++;
      }

      var dimension = (cov_2itwqk888x.s[89]++, this._getDimension());
      cov_2itwqk888x.s[90]++;
      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      cov_2itwqk888x.s[91]++;
      Util.reflow(this._element);
      cov_2itwqk888x.s[92]++;

      this._element.classList.add(ClassName.COLLAPSING);

      cov_2itwqk888x.s[93]++;

      this._element.classList.remove(ClassName.COLLAPSE);

      cov_2itwqk888x.s[94]++;

      this._element.classList.remove(ClassName.SHOW);

      var triggerArrayLength = (cov_2itwqk888x.s[95]++, this._triggerArray.length);
      cov_2itwqk888x.s[96]++;

      if (triggerArrayLength > 0) {
        cov_2itwqk888x.b[23][0]++;
        cov_2itwqk888x.s[97]++;

        for (var i = (cov_2itwqk888x.s[98]++, 0); i < triggerArrayLength; i++) {
          var trigger = (cov_2itwqk888x.s[99]++, this._triggerArray[i]);
          var selector = (cov_2itwqk888x.s[100]++, Util.getSelectorFromElement(trigger));
          cov_2itwqk888x.s[101]++;

          if (selector !== null) {
            cov_2itwqk888x.b[24][0]++;
            var elem = (cov_2itwqk888x.s[102]++, SelectorEngine.findOne(selector));
            cov_2itwqk888x.s[103]++;

            if (!elem.classList.contains(ClassName.SHOW)) {
              cov_2itwqk888x.b[25][0]++;
              cov_2itwqk888x.s[104]++;
              trigger.classList.add(ClassName.COLLAPSED);
              cov_2itwqk888x.s[105]++;
              trigger.setAttribute('aria-expanded', false);
            } else {
              cov_2itwqk888x.b[25][1]++;
            }
          } else {
            cov_2itwqk888x.b[24][1]++;
          }
        }
      } else {
        cov_2itwqk888x.b[23][1]++;
      }

      cov_2itwqk888x.s[106]++;
      this.setTransitioning(true);
      cov_2itwqk888x.s[107]++;

      var complete = function complete() {
        cov_2itwqk888x.f[12]++;
        cov_2itwqk888x.s[108]++;

        _this2.setTransitioning(false);

        cov_2itwqk888x.s[109]++;

        _this2._element.classList.remove(ClassName.COLLAPSING);

        cov_2itwqk888x.s[110]++;

        _this2._element.classList.add(ClassName.COLLAPSE);

        cov_2itwqk888x.s[111]++;
        EventHandler.trigger(_this2._element, Event.HIDDEN);
      };

      cov_2itwqk888x.s[112]++;
      this._element.style[dimension] = '';
      var transitionDuration = (cov_2itwqk888x.s[113]++, Util.getTransitionDurationFromElement(this._element));
      cov_2itwqk888x.s[114]++;
      EventHandler.one(this._element, Util.TRANSITION_END, complete);
      cov_2itwqk888x.s[115]++;
      Util.emulateTransitionEnd(this._element, transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      cov_2itwqk888x.f[13]++;
      cov_2itwqk888x.s[116]++;
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      cov_2itwqk888x.f[14]++;
      cov_2itwqk888x.s[117]++;
      Data.removeData(this._element, DATA_KEY);
      cov_2itwqk888x.s[118]++;
      this._config = null;
      cov_2itwqk888x.s[119]++;
      this._parent = null;
      cov_2itwqk888x.s[120]++;
      this._element = null;
      cov_2itwqk888x.s[121]++;
      this._triggerArray = null;
      cov_2itwqk888x.s[122]++;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      cov_2itwqk888x.f[15]++;
      cov_2itwqk888x.s[123]++;
      config = _objectSpread({}, Default, config);
      cov_2itwqk888x.s[124]++;
      config.toggle = Boolean(config.toggle); // Coerce string values

      cov_2itwqk888x.s[125]++;
      Util.typeCheckConfig(NAME, config, DefaultType);
      cov_2itwqk888x.s[126]++;
      return config;
    };

    _proto._getDimension = function _getDimension() {
      cov_2itwqk888x.f[16]++;
      var hasWidth = (cov_2itwqk888x.s[127]++, this._element.classList.contains(Dimension.WIDTH));
      cov_2itwqk888x.s[128]++;
      return hasWidth ? (cov_2itwqk888x.b[26][0]++, Dimension.WIDTH) : (cov_2itwqk888x.b[26][1]++, Dimension.HEIGHT);
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      cov_2itwqk888x.f[17]++;
      var parent;
      cov_2itwqk888x.s[129]++;

      if (Util.isElement(this._config.parent)) {
        cov_2itwqk888x.b[27][0]++;
        cov_2itwqk888x.s[130]++;
        parent = this._config.parent; // it's a jQuery object

        cov_2itwqk888x.s[131]++;

        if ((cov_2itwqk888x.b[29][0]++, typeof this._config.parent.jquery !== 'undefined') || (cov_2itwqk888x.b[29][1]++, typeof this._config.parent[0] !== 'undefined')) {
          cov_2itwqk888x.b[28][0]++;
          cov_2itwqk888x.s[132]++;
          parent = this._config.parent[0];
        } else {
          cov_2itwqk888x.b[28][1]++;
        }
      } else {
        cov_2itwqk888x.b[27][1]++;
        cov_2itwqk888x.s[133]++;
        parent = SelectorEngine.findOne(this._config.parent);
      }

      var selector = (cov_2itwqk888x.s[134]++, "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]");
      cov_2itwqk888x.s[135]++;
      Util.makeArray(SelectorEngine.find(selector, parent)).forEach(function (element) {
        cov_2itwqk888x.f[18]++;
        cov_2itwqk888x.s[136]++;

        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      cov_2itwqk888x.s[137]++;
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      cov_2itwqk888x.f[19]++;
      cov_2itwqk888x.s[138]++;

      if (element) {
        cov_2itwqk888x.b[30][0]++;
        var isOpen = (cov_2itwqk888x.s[139]++, element.classList.contains(ClassName.SHOW));
        cov_2itwqk888x.s[140]++;

        if (triggerArray.length) {
          cov_2itwqk888x.b[31][0]++;
          cov_2itwqk888x.s[141]++;
          triggerArray.forEach(function (elem) {
            cov_2itwqk888x.f[20]++;
            cov_2itwqk888x.s[142]++;

            if (!isOpen) {
              cov_2itwqk888x.b[32][0]++;
              cov_2itwqk888x.s[143]++;
              elem.classList.add(ClassName.COLLAPSED);
            } else {
              cov_2itwqk888x.b[32][1]++;
              cov_2itwqk888x.s[144]++;
              elem.classList.remove(ClassName.COLLAPSED);
            }

            cov_2itwqk888x.s[145]++;
            elem.setAttribute('aria-expanded', isOpen);
          });
        } else {
          cov_2itwqk888x.b[31][1]++;
        }
      } else {
        cov_2itwqk888x.b[30][1]++;
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      cov_2itwqk888x.f[21]++;
      var selector = (cov_2itwqk888x.s[146]++, Util.getSelectorFromElement(element));
      cov_2itwqk888x.s[147]++;
      return selector ? (cov_2itwqk888x.b[33][0]++, SelectorEngine.findOne(selector)) : (cov_2itwqk888x.b[33][1]++, null);
    };

    Collapse._collapseInterface = function _collapseInterface(element, config) {
      cov_2itwqk888x.f[22]++;
      var data = (cov_2itwqk888x.s[148]++, Data.getData(element, DATA_KEY));

      var _config = (cov_2itwqk888x.s[149]++, _objectSpread({}, Default, Manipulator.getDataAttributes(element), (cov_2itwqk888x.b[35][0]++, typeof config === 'object') && (cov_2itwqk888x.b[35][1]++, config) ? (cov_2itwqk888x.b[34][0]++, config) : (cov_2itwqk888x.b[34][1]++, {})));

      cov_2itwqk888x.s[150]++;

      if ((cov_2itwqk888x.b[37][0]++, !data) && (cov_2itwqk888x.b[37][1]++, _config.toggle) && (cov_2itwqk888x.b[37][2]++, /show|hide/.test(config))) {
        cov_2itwqk888x.b[36][0]++;
        cov_2itwqk888x.s[151]++;
        _config.toggle = false;
      } else {
        cov_2itwqk888x.b[36][1]++;
      }

      cov_2itwqk888x.s[152]++;

      if (!data) {
        cov_2itwqk888x.b[38][0]++;
        cov_2itwqk888x.s[153]++;
        data = new Collapse(element, _config);
      } else {
        cov_2itwqk888x.b[38][1]++;
      }

      cov_2itwqk888x.s[154]++;

      if (typeof config === 'string') {
        cov_2itwqk888x.b[39][0]++;
        cov_2itwqk888x.s[155]++;

        if (typeof data[config] === 'undefined') {
          cov_2itwqk888x.b[40][0]++;
          cov_2itwqk888x.s[156]++;
          throw new Error("No method named \"" + config + "\"");
        } else {
          cov_2itwqk888x.b[40][1]++;
        }

        cov_2itwqk888x.s[157]++;
        data[config]();
      } else {
        cov_2itwqk888x.b[39][1]++;
      }
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      cov_2itwqk888x.f[23]++;
      cov_2itwqk888x.s[158]++;
      return this.each(function () {
        cov_2itwqk888x.f[24]++;
        cov_2itwqk888x.s[159]++;

        Collapse._collapseInterface(this, config);
      });
    };

    Collapse._getInstance = function _getInstance(element) {
      cov_2itwqk888x.f[25]++;
      cov_2itwqk888x.s[160]++;
      return Data.getData(element, DATA_KEY);
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


  cov_2itwqk888x.s[161]++;
  EventHandler.on(document, Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    cov_2itwqk888x.f[26]++;
    cov_2itwqk888x.s[162]++;

    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A') {
      cov_2itwqk888x.b[41][0]++;
      cov_2itwqk888x.s[163]++;
      event.preventDefault();
    } else {
      cov_2itwqk888x.b[41][1]++;
    }

    var triggerData = (cov_2itwqk888x.s[164]++, Manipulator.getDataAttributes(this));
    var selector = (cov_2itwqk888x.s[165]++, Util.getSelectorFromElement(this));
    var selectorElements = (cov_2itwqk888x.s[166]++, Util.makeArray(SelectorEngine.find(selector)));
    cov_2itwqk888x.s[167]++;
    selectorElements.forEach(function (element) {
      cov_2itwqk888x.f[27]++;
      var data = (cov_2itwqk888x.s[168]++, Data.getData(element, DATA_KEY));
      var config;
      cov_2itwqk888x.s[169]++;

      if (data) {
        cov_2itwqk888x.b[42][0]++;
        cov_2itwqk888x.s[170]++;

        // update parent attribute
        if ((cov_2itwqk888x.b[44][0]++, data._parent === null) && (cov_2itwqk888x.b[44][1]++, typeof triggerData.parent === 'string')) {
          cov_2itwqk888x.b[43][0]++;
          cov_2itwqk888x.s[171]++;
          data._config.parent = triggerData.parent;
          cov_2itwqk888x.s[172]++;
          data._parent = data._getParent();
        } else {
          cov_2itwqk888x.b[43][1]++;
        }

        cov_2itwqk888x.s[173]++;
        config = 'toggle';
      } else {
        cov_2itwqk888x.b[42][1]++;
        cov_2itwqk888x.s[174]++;
        config = triggerData;
      }

      cov_2itwqk888x.s[175]++;

      Collapse._collapseInterface(element, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .collapse to jQuery only if jQuery is present
   */

  var $ = (cov_2itwqk888x.s[176]++, Util.jQuery);
  cov_2itwqk888x.s[177]++;

  if (typeof $ !== 'undefined') {
    cov_2itwqk888x.b[45][0]++;
    var JQUERY_NO_CONFLICT = (cov_2itwqk888x.s[178]++, $.fn[NAME]);
    cov_2itwqk888x.s[179]++;
    $.fn[NAME] = Collapse._jQueryInterface;
    cov_2itwqk888x.s[180]++;
    $.fn[NAME].Constructor = Collapse;
    cov_2itwqk888x.s[181]++;

    $.fn[NAME].noConflict = function () {
      cov_2itwqk888x.f[28]++;
      cov_2itwqk888x.s[182]++;
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      cov_2itwqk888x.s[183]++;
      return Collapse._jQueryInterface;
    };
  } else {
    cov_2itwqk888x.b[45][1]++;
  }

  return Collapse;

}));
//# sourceMappingURL=collapse.js.map

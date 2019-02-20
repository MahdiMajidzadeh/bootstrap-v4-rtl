/*!
  * Bootstrap modal.js v4.3.1-0 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2019 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/data.js'), require('./dom/eventHandler.js'), require('./dom/manipulator.js'), require('./dom/selectorEngine.js'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['./dom/data.js', './dom/eventHandler.js', './dom/manipulator.js', './dom/selectorEngine.js', './util.js'], factory) :
  (global = global || self, global.Modal = factory(global.Data, global.EventHandler, global.Manipulator, global.SelectorEngine, global.Util));
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

  var cov_10c74op6cl = function () {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/modal.js";
    var hash = "9462dd3bf5c007932448b06d4fef70ef6f6c344e";

    var Function = function () {}.constructor;

    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/modal.js",
      statementMap: {
        "0": {
          start: {
            line: 20,
            column: 27
          },
          end: {
            line: 20,
            column: 34
          }
        },
        "1": {
          start: {
            line: 21,
            column: 27
          },
          end: {
            line: 21,
            column: 34
          }
        },
        "2": {
          start: {
            line: 22,
            column: 27
          },
          end: {
            line: 22,
            column: 37
          }
        },
        "3": {
          start: {
            line: 23,
            column: 27
          },
          end: {
            line: 23,
            column: 41
          }
        },
        "4": {
          start: {
            line: 24,
            column: 27
          },
          end: {
            line: 24,
            column: 38
          }
        },
        "5": {
          start: {
            line: 25,
            column: 27
          },
          end: {
            line: 25,
            column: 29
          }
        },
        "6": {
          start: {
            line: 27,
            column: 16
          },
          end: {
            line: 32,
            column: 1
          }
        },
        "7": {
          start: {
            line: 34,
            column: 20
          },
          end: {
            line: 39,
            column: 1
          }
        },
        "8": {
          start: {
            line: 41,
            column: 14
          },
          end: {
            line: 53,
            column: 1
          }
        },
        "9": {
          start: {
            line: 55,
            column: 18
          },
          end: {
            line: 62,
            column: 1
          }
        },
        "10": {
          start: {
            line: 64,
            column: 17
          },
          end: {
            line: 71,
            column: 1
          }
        },
        "11": {
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 81,
            column: 55
          }
        },
        "12": {
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 82,
            column: 39
          }
        },
        "13": {
          start: {
            line: 83,
            column: 4
          },
          end: {
            line: 83,
            column: 80
          }
        },
        "14": {
          start: {
            line: 84,
            column: 4
          },
          end: {
            line: 84,
            column: 36
          }
        },
        "15": {
          start: {
            line: 85,
            column: 4
          },
          end: {
            line: 85,
            column: 37
          }
        },
        "16": {
          start: {
            line: 86,
            column: 4
          },
          end: {
            line: 86,
            column: 37
          }
        },
        "17": {
          start: {
            line: 87,
            column: 4
          },
          end: {
            line: 87,
            column: 37
          }
        },
        "18": {
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 88,
            column: 37
          }
        },
        "19": {
          start: {
            line: 89,
            column: 4
          },
          end: {
            line: 89,
            column: 33
          }
        },
        "20": {
          start: {
            line: 90,
            column: 4
          },
          end: {
            line: 90,
            column: 41
          }
        },
        "21": {
          start: {
            line: 96,
            column: 4
          },
          end: {
            line: 96,
            column: 18
          }
        },
        "22": {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 100,
            column: 18
          }
        },
        "23": {
          start: {
            line: 106,
            column: 4
          },
          end: {
            line: 106,
            column: 65
          }
        },
        "24": {
          start: {
            line: 110,
            column: 4
          },
          end: {
            line: 112,
            column: 5
          }
        },
        "25": {
          start: {
            line: 111,
            column: 6
          },
          end: {
            line: 111,
            column: 12
          }
        },
        "26": {
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 116,
            column: 5
          }
        },
        "27": {
          start: {
            line: 115,
            column: 6
          },
          end: {
            line: 115,
            column: 34
          }
        },
        "28": {
          start: {
            line: 118,
            column: 22
          },
          end: {
            line: 120,
            column: 6
          }
        },
        "29": {
          start: {
            line: 122,
            column: 4
          },
          end: {
            line: 124,
            column: 5
          }
        },
        "30": {
          start: {
            line: 123,
            column: 6
          },
          end: {
            line: 123,
            column: 12
          }
        },
        "31": {
          start: {
            line: 126,
            column: 4
          },
          end: {
            line: 126,
            column: 24
          }
        },
        "32": {
          start: {
            line: 128,
            column: 4
          },
          end: {
            line: 128,
            column: 26
          }
        },
        "33": {
          start: {
            line: 129,
            column: 4
          },
          end: {
            line: 129,
            column: 24
          }
        },
        "34": {
          start: {
            line: 131,
            column: 4
          },
          end: {
            line: 131,
            column: 24
          }
        },
        "35": {
          start: {
            line: 133,
            column: 4
          },
          end: {
            line: 133,
            column: 26
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
            line: 136,
            column: 4
          },
          end: {
            line: 140,
            column: 5
          }
        },
        "38": {
          start: {
            line: 139,
            column: 17
          },
          end: {
            line: 139,
            column: 33
          }
        },
        "39": {
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 148,
            column: 6
          }
        },
        "40": {
          start: {
            line: 143,
            column: 6
          },
          end: {
            line: 147,
            column: 8
          }
        },
        "41": {
          start: {
            line: 144,
            column: 8
          },
          end: {
            line: 146,
            column: 9
          }
        },
        "42": {
          start: {
            line: 145,
            column: 10
          },
          end: {
            line: 145,
            column: 42
          }
        },
        "43": {
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 150,
            column: 62
          }
        },
        "44": {
          start: {
            line: 150,
            column: 29
          },
          end: {
            line: 150,
            column: 61
          }
        },
        "45": {
          start: {
            line: 154,
            column: 4
          },
          end: {
            line: 156,
            column: 5
          }
        },
        "46": {
          start: {
            line: 155,
            column: 6
          },
          end: {
            line: 155,
            column: 28
          }
        },
        "47": {
          start: {
            line: 158,
            column: 4
          },
          end: {
            line: 160,
            column: 5
          }
        },
        "48": {
          start: {
            line: 159,
            column: 6
          },
          end: {
            line: 159,
            column: 12
          }
        },
        "49": {
          start: {
            line: 162,
            column: 22
          },
          end: {
            line: 162,
            column: 69
          }
        },
        "50": {
          start: {
            line: 164,
            column: 4
          },
          end: {
            line: 166,
            column: 5
          }
        },
        "51": {
          start: {
            line: 165,
            column: 6
          },
          end: {
            line: 165,
            column: 12
          }
        },
        "52": {
          start: {
            line: 168,
            column: 4
          },
          end: {
            line: 168,
            column: 25
          }
        },
        "53": {
          start: {
            line: 169,
            column: 23
          },
          end: {
            line: 169,
            column: 71
          }
        },
        "54": {
          start: {
            line: 171,
            column: 4
          },
          end: {
            line: 173,
            column: 5
          }
        },
        "55": {
          start: {
            line: 172,
            column: 6
          },
          end: {
            line: 172,
            column: 34
          }
        },
        "56": {
          start: {
            line: 175,
            column: 4
          },
          end: {
            line: 175,
            column: 26
          }
        },
        "57": {
          start: {
            line: 176,
            column: 4
          },
          end: {
            line: 176,
            column: 26
          }
        },
        "58": {
          start: {
            line: 178,
            column: 4
          },
          end: {
            line: 178,
            column: 45
          }
        },
        "59": {
          start: {
            line: 180,
            column: 4
          },
          end: {
            line: 180,
            column: 50
          }
        },
        "60": {
          start: {
            line: 182,
            column: 4
          },
          end: {
            line: 182,
            column: 56
          }
        },
        "61": {
          start: {
            line: 183,
            column: 4
          },
          end: {
            line: 183,
            column: 59
          }
        },
        "62": {
          start: {
            line: 186,
            column: 4
          },
          end: {
            line: 193,
            column: 5
          }
        },
        "63": {
          start: {
            line: 187,
            column: 34
          },
          end: {
            line: 187,
            column: 86
          }
        },
        "64": {
          start: {
            line: 189,
            column: 6
          },
          end: {
            line: 189,
            column: 93
          }
        },
        "65": {
          start: {
            line: 189,
            column: 70
          },
          end: {
            line: 189,
            column: 92
          }
        },
        "66": {
          start: {
            line: 190,
            column: 6
          },
          end: {
            line: 190,
            column: 66
          }
        },
        "67": {
          start: {
            line: 192,
            column: 6
          },
          end: {
            line: 192,
            column: 23
          }
        },
        "68": {
          start: {
            line: 197,
            column: 4
          },
          end: {
            line: 198,
            column: 73
          }
        },
        "69": {
          start: {
            line: 198,
            column: 32
          },
          end: {
            line: 198,
            column: 72
          }
        },
        "70": {
          start: {
            line: 205,
            column: 4
          },
          end: {
            line: 205,
            column: 45
          }
        },
        "71": {
          start: {
            line: 207,
            column: 4
          },
          end: {
            line: 207,
            column: 44
          }
        },
        "72": {
          start: {
            line: 209,
            column: 4
          },
          end: {
            line: 209,
            column: 36
          }
        },
        "73": {
          start: {
            line: 210,
            column: 4
          },
          end: {
            line: 210,
            column: 36
          }
        },
        "74": {
          start: {
            line: 211,
            column: 4
          },
          end: {
            line: 211,
            column: 36
          }
        },
        "75": {
          start: {
            line: 212,
            column: 4
          },
          end: {
            line: 212,
            column: 36
          }
        },
        "76": {
          start: {
            line: 213,
            column: 4
          },
          end: {
            line: 213,
            column: 36
          }
        },
        "77": {
          start: {
            line: 214,
            column: 4
          },
          end: {
            line: 214,
            column: 36
          }
        },
        "78": {
          start: {
            line: 215,
            column: 4
          },
          end: {
            line: 215,
            column: 36
          }
        },
        "79": {
          start: {
            line: 216,
            column: 4
          },
          end: {
            line: 216,
            column: 36
          }
        },
        "80": {
          start: {
            line: 217,
            column: 4
          },
          end: {
            line: 217,
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
            column: 24
          }
        },
        "82": {
          start: {
            line: 227,
            column: 4
          },
          end: {
            line: 230,
            column: 5
          }
        },
        "83": {
          start: {
            line: 231,
            column: 4
          },
          end: {
            line: 231,
            column: 51
          }
        },
        "84": {
          start: {
            line: 232,
            column: 4
          },
          end: {
            line: 232,
            column: 17
          }
        },
        "85": {
          start: {
            line: 236,
            column: 23
          },
          end: {
            line: 236,
            column: 71
          }
        },
        "86": {
          start: {
            line: 238,
            column: 4
          },
          end: {
            line: 242,
            column: 5
          }
        },
        "87": {
          start: {
            line: 241,
            column: 6
          },
          end: {
            line: 241,
            column: 46
          }
        },
        "88": {
          start: {
            line: 244,
            column: 4
          },
          end: {
            line: 244,
            column: 41
          }
        },
        "89": {
          start: {
            line: 245,
            column: 4
          },
          end: {
            line: 245,
            column: 48
          }
        },
        "90": {
          start: {
            line: 246,
            column: 4
          },
          end: {
            line: 246,
            column: 50
          }
        },
        "91": {
          start: {
            line: 248,
            column: 4
          },
          end: {
            line: 252,
            column: 5
          }
        },
        "92": {
          start: {
            line: 249,
            column: 6
          },
          end: {
            line: 249,
            column: 77
          }
        },
        "93": {
          start: {
            line: 251,
            column: 6
          },
          end: {
            line: 251,
            column: 33
          }
        },
        "94": {
          start: {
            line: 254,
            column: 4
          },
          end: {
            line: 256,
            column: 5
          }
        },
        "95": {
          start: {
            line: 255,
            column: 6
          },
          end: {
            line: 255,
            column: 32
          }
        },
        "96": {
          start: {
            line: 258,
            column: 4
          },
          end: {
            line: 258,
            column: 47
          }
        },
        "97": {
          start: {
            line: 260,
            column: 4
          },
          end: {
            line: 262,
            column: 5
          }
        },
        "98": {
          start: {
            line: 261,
            column: 6
          },
          end: {
            line: 261,
            column: 26
          }
        },
        "99": {
          start: {
            line: 264,
            column: 31
          },
          end: {
            line: 272,
            column: 5
          }
        },
        "100": {
          start: {
            line: 265,
            column: 6
          },
          end: {
            line: 267,
            column: 7
          }
        },
        "101": {
          start: {
            line: 266,
            column: 8
          },
          end: {
            line: 266,
            column: 29
          }
        },
        "102": {
          start: {
            line: 268,
            column: 6
          },
          end: {
            line: 268,
            column: 35
          }
        },
        "103": {
          start: {
            line: 269,
            column: 6
          },
          end: {
            line: 271,
            column: 8
          }
        },
        "104": {
          start: {
            line: 274,
            column: 4
          },
          end: {
            line: 281,
            column: 5
          }
        },
        "105": {
          start: {
            line: 275,
            column: 34
          },
          end: {
            line: 275,
            column: 85
          }
        },
        "106": {
          start: {
            line: 277,
            column: 6
          },
          end: {
            line: 277,
            column: 77
          }
        },
        "107": {
          start: {
            line: 278,
            column: 6
          },
          end: {
            line: 278,
            column: 65
          }
        },
        "108": {
          start: {
            line: 280,
            column: 6
          },
          end: {
            line: 280,
            column: 26
          }
        },
        "109": {
          start: {
            line: 285,
            column: 4
          },
          end: {
            line: 285,
            column: 45
          }
        },
        "110": {
          start: {
            line: 286,
            column: 4
          },
          end: {
            line: 292,
            column: 6
          }
        },
        "111": {
          start: {
            line: 287,
            column: 6
          },
          end: {
            line: 291,
            column: 7
          }
        },
        "112": {
          start: {
            line: 290,
            column: 8
          },
          end: {
            line: 290,
            column: 29
          }
        },
        "113": {
          start: {
            line: 296,
            column: 4
          },
          end: {
            line: 305,
            column: 5
          }
        },
        "114": {
          start: {
            line: 297,
            column: 6
          },
          end: {
            line: 302,
            column: 8
          }
        },
        "115": {
          start: {
            line: 298,
            column: 8
          },
          end: {
            line: 301,
            column: 9
          }
        },
        "116": {
          start: {
            line: 299,
            column: 10
          },
          end: {
            line: 299,
            column: 32
          }
        },
        "117": {
          start: {
            line: 300,
            column: 10
          },
          end: {
            line: 300,
            column: 21
          }
        },
        "118": {
          start: {
            line: 303,
            column: 11
          },
          end: {
            line: 305,
            column: 5
          }
        },
        "119": {
          start: {
            line: 304,
            column: 6
          },
          end: {
            line: 304,
            column: 60
          }
        },
        "120": {
          start: {
            line: 309,
            column: 4
          },
          end: {
            line: 313,
            column: 5
          }
        },
        "121": {
          start: {
            line: 310,
            column: 6
          },
          end: {
            line: 310,
            column: 80
          }
        },
        "122": {
          start: {
            line: 310,
            column: 55
          },
          end: {
            line: 310,
            column: 79
          }
        },
        "123": {
          start: {
            line: 312,
            column: 6
          },
          end: {
            line: 312,
            column: 44
          }
        },
        "124": {
          start: {
            line: 317,
            column: 4
          },
          end: {
            line: 317,
            column: 40
          }
        },
        "125": {
          start: {
            line: 318,
            column: 4
          },
          end: {
            line: 318,
            column: 51
          }
        },
        "126": {
          start: {
            line: 319,
            column: 4
          },
          end: {
            line: 319,
            column: 47
          }
        },
        "127": {
          start: {
            line: 320,
            column: 4
          },
          end: {
            line: 320,
            column: 33
          }
        },
        "128": {
          start: {
            line: 321,
            column: 4
          },
          end: {
            line: 326,
            column: 6
          }
        },
        "129": {
          start: {
            line: 322,
            column: 6
          },
          end: {
            line: 322,
            column: 52
          }
        },
        "130": {
          start: {
            line: 323,
            column: 6
          },
          end: {
            line: 323,
            column: 30
          }
        },
        "131": {
          start: {
            line: 324,
            column: 6
          },
          end: {
            line: 324,
            column: 28
          }
        },
        "132": {
          start: {
            line: 325,
            column: 6
          },
          end: {
            line: 325,
            column: 55
          }
        },
        "133": {
          start: {
            line: 330,
            column: 4
          },
          end: {
            line: 333,
            column: 5
          }
        },
        "134": {
          start: {
            line: 331,
            column: 6
          },
          end: {
            line: 331,
            column: 59
          }
        },
        "135": {
          start: {
            line: 332,
            column: 6
          },
          end: {
            line: 332,
            column: 27
          }
        },
        "136": {
          start: {
            line: 337,
            column: 20
          },
          end: {
            line: 339,
            column: 10
          }
        },
        "137": {
          start: {
            line: 341,
            column: 4
          },
          end: {
            line: 404,
            column: 5
          }
        },
        "138": {
          start: {
            line: 342,
            column: 6
          },
          end: {
            line: 342,
            column: 52
          }
        },
        "139": {
          start: {
            line: 343,
            column: 6
          },
          end: {
            line: 343,
            column: 51
          }
        },
        "140": {
          start: {
            line: 345,
            column: 6
          },
          end: {
            line: 347,
            column: 7
          }
        },
        "141": {
          start: {
            line: 346,
            column: 8
          },
          end: {
            line: 346,
            column: 45
          }
        },
        "142": {
          start: {
            line: 349,
            column: 6
          },
          end: {
            line: 349,
            column: 47
          }
        },
        "143": {
          start: {
            line: 351,
            column: 6
          },
          end: {
            line: 364,
            column: 8
          }
        },
        "144": {
          start: {
            line: 352,
            column: 8
          },
          end: {
            line: 355,
            column: 9
          }
        },
        "145": {
          start: {
            line: 353,
            column: 10
          },
          end: {
            line: 353,
            column: 43
          }
        },
        "146": {
          start: {
            line: 354,
            column: 10
          },
          end: {
            line: 354,
            column: 16
          }
        },
        "147": {
          start: {
            line: 356,
            column: 8
          },
          end: {
            line: 358,
            column: 9
          }
        },
        "148": {
          start: {
            line: 357,
            column: 10
          },
          end: {
            line: 357,
            column: 16
          }
        },
        "149": {
          start: {
            line: 359,
            column: 8
          },
          end: {
            line: 363,
            column: 9
          }
        },
        "150": {
          start: {
            line: 360,
            column: 10
          },
          end: {
            line: 360,
            column: 31
          }
        },
        "151": {
          start: {
            line: 362,
            column: 10
          },
          end: {
            line: 362,
            column: 21
          }
        },
        "152": {
          start: {
            line: 366,
            column: 6
          },
          end: {
            line: 368,
            column: 7
          }
        },
        "153": {
          start: {
            line: 367,
            column: 8
          },
          end: {
            line: 367,
            column: 35
          }
        },
        "154": {
          start: {
            line: 370,
            column: 6
          },
          end: {
            line: 370,
            column: 50
          }
        },
        "155": {
          start: {
            line: 372,
            column: 6
          },
          end: {
            line: 374,
            column: 7
          }
        },
        "156": {
          start: {
            line: 373,
            column: 8
          },
          end: {
            line: 373,
            column: 14
          }
        },
        "157": {
          start: {
            line: 376,
            column: 6
          },
          end: {
            line: 379,
            column: 7
          }
        },
        "158": {
          start: {
            line: 377,
            column: 8
          },
          end: {
            line: 377,
            column: 18
          }
        },
        "159": {
          start: {
            line: 378,
            column: 8
          },
          end: {
            line: 378,
            column: 14
          }
        },
        "160": {
          start: {
            line: 381,
            column: 41
          },
          end: {
            line: 381,
            column: 94
          }
        },
        "161": {
          start: {
            line: 383,
            column: 6
          },
          end: {
            line: 383,
            column: 69
          }
        },
        "162": {
          start: {
            line: 384,
            column: 6
          },
          end: {
            line: 384,
            column: 75
          }
        },
        "163": {
          start: {
            line: 385,
            column: 11
          },
          end: {
            line: 404,
            column: 5
          }
        },
        "164": {
          start: {
            line: 386,
            column: 6
          },
          end: {
            line: 386,
            column: 53
          }
        },
        "165": {
          start: {
            line: 388,
            column: 29
          },
          end: {
            line: 393,
            column: 7
          }
        },
        "166": {
          start: {
            line: 389,
            column: 8
          },
          end: {
            line: 389,
            column: 30
          }
        },
        "167": {
          start: {
            line: 390,
            column: 8
          },
          end: {
            line: 392,
            column: 9
          }
        },
        "168": {
          start: {
            line: 391,
            column: 10
          },
          end: {
            line: 391,
            column: 20
          }
        },
        "169": {
          start: {
            line: 395,
            column: 6
          },
          end: {
            line: 401,
            column: 7
          }
        },
        "170": {
          start: {
            line: 396,
            column: 43
          },
          end: {
            line: 396,
            column: 96
          }
        },
        "171": {
          start: {
            line: 397,
            column: 8
          },
          end: {
            line: 397,
            column: 77
          }
        },
        "172": {
          start: {
            line: 398,
            column: 8
          },
          end: {
            line: 398,
            column: 77
          }
        },
        "173": {
          start: {
            line: 400,
            column: 8
          },
          end: {
            line: 400,
            column: 24
          }
        },
        "174": {
          start: {
            line: 402,
            column: 11
          },
          end: {
            line: 404,
            column: 5
          }
        },
        "175": {
          start: {
            line: 403,
            column: 6
          },
          end: {
            line: 403,
            column: 16
          }
        },
        "176": {
          start: {
            line: 414,
            column: 6
          },
          end: {
            line: 414,
            column: 72
          }
        },
        "177": {
          start: {
            line: 416,
            column: 4
          },
          end: {
            line: 418,
            column: 5
          }
        },
        "178": {
          start: {
            line: 417,
            column: 6
          },
          end: {
            line: 417,
            column: 67
          }
        },
        "179": {
          start: {
            line: 420,
            column: 4
          },
          end: {
            line: 422,
            column: 5
          }
        },
        "180": {
          start: {
            line: 421,
            column: 6
          },
          end: {
            line: 421,
            column: 68
          }
        },
        "181": {
          start: {
            line: 426,
            column: 4
          },
          end: {
            line: 426,
            column: 40
          }
        },
        "182": {
          start: {
            line: 427,
            column: 4
          },
          end: {
            line: 427,
            column: 41
          }
        },
        "183": {
          start: {
            line: 431,
            column: 17
          },
          end: {
            line: 431,
            column: 54
          }
        },
        "184": {
          start: {
            line: 432,
            column: 4
          },
          end: {
            line: 432,
            column: 72
          }
        },
        "185": {
          start: {
            line: 433,
            column: 4
          },
          end: {
            line: 433,
            column: 52
          }
        },
        "186": {
          start: {
            line: 437,
            column: 4
          },
          end: {
            line: 465,
            column: 5
          }
        },
        "187": {
          start: {
            line: 442,
            column: 6
          },
          end: {
            line: 448,
            column: 10
          }
        },
        "188": {
          start: {
            line: 444,
            column: 32
          },
          end: {
            line: 444,
            column: 58
          }
        },
        "189": {
          start: {
            line: 445,
            column: 36
          },
          end: {
            line: 445,
            column: 85
          }
        },
        "190": {
          start: {
            line: 446,
            column: 10
          },
          end: {
            line: 446,
            column: 79
          }
        },
        "191": {
          start: {
            line: 447,
            column: 10
          },
          end: {
            line: 447,
            column: 98
          }
        },
        "192": {
          start: {
            line: 451,
            column: 6
          },
          end: {
            line: 457,
            column: 10
          }
        },
        "193": {
          start: {
            line: 453,
            column: 31
          },
          end: {
            line: 453,
            column: 56
          }
        },
        "194": {
          start: {
            line: 454,
            column: 35
          },
          end: {
            line: 454,
            column: 83
          }
        },
        "195": {
          start: {
            line: 455,
            column: 10
          },
          end: {
            line: 455,
            column: 77
          }
        },
        "196": {
          start: {
            line: 456,
            column: 10
          },
          end: {
            line: 456,
            column: 96
          }
        },
        "197": {
          start: {
            line: 460,
            column: 28
          },
          end: {
            line: 460,
            column: 60
          }
        },
        "198": {
          start: {
            line: 461,
            column: 32
          },
          end: {
            line: 461,
            column: 87
          }
        },
        "199": {
          start: {
            line: 463,
            column: 6
          },
          end: {
            line: 463,
            column: 81
          }
        },
        "200": {
          start: {
            line: 464,
            column: 6
          },
          end: {
            line: 464,
            column: 100
          }
        },
        "201": {
          start: {
            line: 467,
            column: 4
          },
          end: {
            line: 467,
            column: 47
          }
        },
        "202": {
          start: {
            line: 472,
            column: 4
          },
          end: {
            line: 479,
            column: 8
          }
        },
        "203": {
          start: {
            line: 474,
            column: 24
          },
          end: {
            line: 474,
            column: 78
          }
        },
        "204": {
          start: {
            line: 475,
            column: 8
          },
          end: {
            line: 478,
            column: 9
          }
        },
        "205": {
          start: {
            line: 476,
            column: 10
          },
          end: {
            line: 476,
            column: 67
          }
        },
        "206": {
          start: {
            line: 477,
            column: 10
          },
          end: {
            line: 477,
            column: 46
          }
        },
        "207": {
          start: {
            line: 482,
            column: 4
          },
          end: {
            line: 489,
            column: 8
          }
        },
        "208": {
          start: {
            line: 484,
            column: 23
          },
          end: {
            line: 484,
            column: 76
          }
        },
        "209": {
          start: {
            line: 485,
            column: 8
          },
          end: {
            line: 488,
            column: 9
          }
        },
        "210": {
          start: {
            line: 486,
            column: 10
          },
          end: {
            line: 486,
            column: 66
          }
        },
        "211": {
          start: {
            line: 487,
            column: 10
          },
          end: {
            line: 487,
            column: 44
          }
        },
        "212": {
          start: {
            line: 492,
            column: 20
          },
          end: {
            line: 492,
            column: 80
          }
        },
        "213": {
          start: {
            line: 493,
            column: 4
          },
          end: {
            line: 498,
            column: 5
          }
        },
        "214": {
          start: {
            line: 494,
            column: 6
          },
          end: {
            line: 494,
            column: 69
          }
        },
        "215": {
          start: {
            line: 495,
            column: 6
          },
          end: {
            line: 495,
            column: 48
          }
        },
        "216": {
          start: {
            line: 497,
            column: 6
          },
          end: {
            line: 497,
            column: 43
          }
        },
        "217": {
          start: {
            line: 502,
            column: 22
          },
          end: {
            line: 502,
            column: 51
          }
        },
        "218": {
          start: {
            line: 503,
            column: 4
          },
          end: {
            line: 503,
            column: 54
          }
        },
        "219": {
          start: {
            line: 504,
            column: 4
          },
          end: {
            line: 504,
            column: 40
          }
        },
        "220": {
          start: {
            line: 505,
            column: 27
          },
          end: {
            line: 505,
            column: 90
          }
        },
        "221": {
          start: {
            line: 506,
            column: 4
          },
          end: {
            line: 506,
            column: 40
          }
        },
        "222": {
          start: {
            line: 507,
            column: 4
          },
          end: {
            line: 507,
            column: 25
          }
        },
        "223": {
          start: {
            line: 513,
            column: 4
          },
          end: {
            line: 533,
            column: 6
          }
        },
        "224": {
          start: {
            line: 514,
            column: 17
          },
          end: {
            line: 514,
            column: 45
          }
        },
        "225": {
          start: {
            line: 515,
            column: 22
          },
          end: {
            line: 519,
            column: 7
          }
        },
        "226": {
          start: {
            line: 521,
            column: 6
          },
          end: {
            line: 523,
            column: 7
          }
        },
        "227": {
          start: {
            line: 522,
            column: 8
          },
          end: {
            line: 522,
            column: 39
          }
        },
        "228": {
          start: {
            line: 525,
            column: 6
          },
          end: {
            line: 532,
            column: 7
          }
        },
        "229": {
          start: {
            line: 526,
            column: 8
          },
          end: {
            line: 528,
            column: 9
          }
        },
        "230": {
          start: {
            line: 527,
            column: 10
          },
          end: {
            line: 527,
            column: 60
          }
        },
        "231": {
          start: {
            line: 529,
            column: 8
          },
          end: {
            line: 529,
            column: 35
          }
        },
        "232": {
          start: {
            line: 530,
            column: 13
          },
          end: {
            line: 532,
            column: 7
          }
        },
        "233": {
          start: {
            line: 531,
            column: 8
          },
          end: {
            line: 531,
            column: 32
          }
        },
        "234": {
          start: {
            line: 537,
            column: 4
          },
          end: {
            line: 537,
            column: 42
          }
        },
        "235": {
          start: {
            line: 547,
            column: 0
          },
          end: {
            line: 584,
            column: 2
          }
        },
        "236": {
          start: {
            line: 549,
            column: 19
          },
          end: {
            line: 549,
            column: 52
          }
        },
        "237": {
          start: {
            line: 551,
            column: 2
          },
          end: {
            line: 553,
            column: 3
          }
        },
        "238": {
          start: {
            line: 552,
            column: 4
          },
          end: {
            line: 552,
            column: 45
          }
        },
        "239": {
          start: {
            line: 555,
            column: 17
          },
          end: {
            line: 559,
            column: 5
          }
        },
        "240": {
          start: {
            line: 561,
            column: 2
          },
          end: {
            line: 563,
            column: 3
          }
        },
        "241": {
          start: {
            line: 562,
            column: 4
          },
          end: {
            line: 562,
            column: 26
          }
        },
        "242": {
          start: {
            line: 565,
            column: 2
          },
          end: {
            line: 576,
            column: 4
          }
        },
        "243": {
          start: {
            line: 566,
            column: 4
          },
          end: {
            line: 569,
            column: 5
          }
        },
        "244": {
          start: {
            line: 568,
            column: 6
          },
          end: {
            line: 568,
            column: 12
          }
        },
        "245": {
          start: {
            line: 571,
            column: 4
          },
          end: {
            line: 575,
            column: 6
          }
        },
        "246": {
          start: {
            line: 572,
            column: 6
          },
          end: {
            line: 574,
            column: 7
          }
        },
        "247": {
          start: {
            line: 573,
            column: 8
          },
          end: {
            line: 573,
            column: 20
          }
        },
        "248": {
          start: {
            line: 578,
            column: 13
          },
          end: {
            line: 578,
            column: 43
          }
        },
        "249": {
          start: {
            line: 579,
            column: 2
          },
          end: {
            line: 581,
            column: 3
          }
        },
        "250": {
          start: {
            line: 580,
            column: 4
          },
          end: {
            line: 580,
            column: 36
          }
        },
        "251": {
          start: {
            line: 583,
            column: 2
          },
          end: {
            line: 583,
            column: 17
          }
        },
        "252": {
          start: {
            line: 592,
            column: 10
          },
          end: {
            line: 592,
            column: 21
          }
        },
        "253": {
          start: {
            line: 593,
            column: 0
          },
          end: {
            line: 601,
            column: 1
          }
        },
        "254": {
          start: {
            line: 594,
            column: 29
          },
          end: {
            line: 594,
            column: 39
          }
        },
        "255": {
          start: {
            line: 595,
            column: 2
          },
          end: {
            line: 595,
            column: 51
          }
        },
        "256": {
          start: {
            line: 596,
            column: 2
          },
          end: {
            line: 596,
            column: 34
          }
        },
        "257": {
          start: {
            line: 597,
            column: 2
          },
          end: {
            line: 600,
            column: 3
          }
        },
        "258": {
          start: {
            line: 598,
            column: 4
          },
          end: {
            line: 598,
            column: 35
          }
        },
        "259": {
          start: {
            line: 599,
            column: 4
          },
          end: {
            line: 599,
            column: 33
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
              line: 91,
              column: 3
            }
          },
          line: 80
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 95,
              column: 2
            },
            end: {
              line: 95,
              column: 3
            }
          },
          loc: {
            start: {
              line: 95,
              column: 23
            },
            end: {
              line: 97,
              column: 3
            }
          },
          line: 95
        },
        "2": {
          name: "(anonymous_2)",
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
        "3": {
          name: "(anonymous_3)",
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
              column: 24
            },
            end: {
              line: 107,
              column: 3
            }
          },
          line: 105
        },
        "4": {
          name: "(anonymous_4)",
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
              column: 22
            },
            end: {
              line: 151,
              column: 3
            }
          },
          line: 109
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 139,
              column: 6
            },
            end: {
              line: 139,
              column: 7
            }
          },
          loc: {
            start: {
              line: 139,
              column: 17
            },
            end: {
              line: 139,
              column: 33
            }
          },
          line: 139
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 142,
              column: 59
            },
            end: {
              line: 142,
              column: 60
            }
          },
          loc: {
            start: {
              line: 142,
              column: 65
            },
            end: {
              line: 148,
              column: 5
            }
          },
          line: 142
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 143,
              column: 61
            },
            end: {
              line: 143,
              column: 62
            }
          },
          loc: {
            start: {
              line: 143,
              column: 72
            },
            end: {
              line: 147,
              column: 7
            }
          },
          line: 143
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 150,
              column: 23
            },
            end: {
              line: 150,
              column: 24
            }
          },
          loc: {
            start: {
              line: 150,
              column: 29
            },
            end: {
              line: 150,
              column: 61
            }
          },
          line: 150
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 153,
              column: 2
            },
            end: {
              line: 153,
              column: 3
            }
          },
          loc: {
            start: {
              line: 153,
              column: 14
            },
            end: {
              line: 194,
              column: 3
            }
          },
          line: 153
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 189,
              column: 59
            },
            end: {
              line: 189,
              column: 60
            }
          },
          loc: {
            start: {
              line: 189,
              column: 70
            },
            end: {
              line: 189,
              column: 92
            }
          },
          line: 189
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 196,
              column: 2
            },
            end: {
              line: 196,
              column: 3
            }
          },
          loc: {
            start: {
              line: 196,
              column: 12
            },
            end: {
              line: 218,
              column: 3
            }
          },
          line: 196
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 198,
              column: 15
            },
            end: {
              line: 198,
              column: 16
            }
          },
          loc: {
            start: {
              line: 198,
              column: 32
            },
            end: {
              line: 198,
              column: 72
            }
          },
          line: 198
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 220,
              column: 2
            },
            end: {
              line: 220,
              column: 3
            }
          },
          loc: {
            start: {
              line: 220,
              column: 17
            },
            end: {
              line: 222,
              column: 3
            }
          },
          line: 220
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 226,
              column: 2
            },
            end: {
              line: 226,
              column: 3
            }
          },
          loc: {
            start: {
              line: 226,
              column: 21
            },
            end: {
              line: 233,
              column: 3
            }
          },
          line: 226
        },
        "15": {
          name: "(anonymous_15)",
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
              column: 30
            },
            end: {
              line: 282,
              column: 3
            }
          },
          line: 235
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 264,
              column: 31
            },
            end: {
              line: 264,
              column: 32
            }
          },
          loc: {
            start: {
              line: 264,
              column: 37
            },
            end: {
              line: 272,
              column: 5
            }
          },
          line: 264
        },
        "17": {
          name: "(anonymous_17)",
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
              column: 18
            },
            end: {
              line: 293,
              column: 3
            }
          },
          line: 284
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 286,
              column: 45
            },
            end: {
              line: 286,
              column: 46
            }
          },
          loc: {
            start: {
              line: 286,
              column: 56
            },
            end: {
              line: 292,
              column: 5
            }
          },
          line: 286
        },
        "19": {
          name: "(anonymous_19)",
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
              column: 20
            },
            end: {
              line: 306,
              column: 3
            }
          },
          line: 295
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 297,
              column: 60
            },
            end: {
              line: 297,
              column: 61
            }
          },
          loc: {
            start: {
              line: 297,
              column: 71
            },
            end: {
              line: 302,
              column: 7
            }
          },
          line: 297
        },
        "21": {
          name: "(anonymous_21)",
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
              column: 20
            },
            end: {
              line: 314,
              column: 3
            }
          },
          line: 308
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 310,
              column: 44
            },
            end: {
              line: 310,
              column: 45
            }
          },
          loc: {
            start: {
              line: 310,
              column: 55
            },
            end: {
              line: 310,
              column: 79
            }
          },
          line: 310
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 316,
              column: 2
            },
            end: {
              line: 316,
              column: 3
            }
          },
          loc: {
            start: {
              line: 316,
              column: 15
            },
            end: {
              line: 327,
              column: 3
            }
          },
          line: 316
        },
        "24": {
          name: "(anonymous_24)",
          decl: {
            start: {
              line: 321,
              column: 23
            },
            end: {
              line: 321,
              column: 24
            }
          },
          loc: {
            start: {
              line: 321,
              column: 29
            },
            end: {
              line: 326,
              column: 5
            }
          },
          line: 321
        },
        "25": {
          name: "(anonymous_25)",
          decl: {
            start: {
              line: 329,
              column: 2
            },
            end: {
              line: 329,
              column: 3
            }
          },
          loc: {
            start: {
              line: 329,
              column: 20
            },
            end: {
              line: 334,
              column: 3
            }
          },
          line: 329
        },
        "26": {
          name: "(anonymous_26)",
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
              column: 26
            },
            end: {
              line: 405,
              column: 3
            }
          },
          line: 336
        },
        "27": {
          name: "(anonymous_27)",
          decl: {
            start: {
              line: 351,
              column: 58
            },
            end: {
              line: 351,
              column: 59
            }
          },
          loc: {
            start: {
              line: 351,
              column: 69
            },
            end: {
              line: 364,
              column: 7
            }
          },
          line: 351
        },
        "28": {
          name: "(anonymous_28)",
          decl: {
            start: {
              line: 388,
              column: 29
            },
            end: {
              line: 388,
              column: 30
            }
          },
          loc: {
            start: {
              line: 388,
              column: 35
            },
            end: {
              line: 393,
              column: 7
            }
          },
          line: 388
        },
        "29": {
          name: "(anonymous_29)",
          decl: {
            start: {
              line: 412,
              column: 2
            },
            end: {
              line: 412,
              column: 3
            }
          },
          loc: {
            start: {
              line: 412,
              column: 18
            },
            end: {
              line: 423,
              column: 3
            }
          },
          line: 412
        },
        "30": {
          name: "(anonymous_30)",
          decl: {
            start: {
              line: 425,
              column: 2
            },
            end: {
              line: 425,
              column: 3
            }
          },
          loc: {
            start: {
              line: 425,
              column: 22
            },
            end: {
              line: 428,
              column: 3
            }
          },
          line: 425
        },
        "31": {
          name: "(anonymous_31)",
          decl: {
            start: {
              line: 430,
              column: 2
            },
            end: {
              line: 430,
              column: 3
            }
          },
          loc: {
            start: {
              line: 430,
              column: 20
            },
            end: {
              line: 434,
              column: 3
            }
          },
          line: 430
        },
        "32": {
          name: "(anonymous_32)",
          decl: {
            start: {
              line: 436,
              column: 2
            },
            end: {
              line: 436,
              column: 3
            }
          },
          loc: {
            start: {
              line: 436,
              column: 18
            },
            end: {
              line: 468,
              column: 3
            }
          },
          line: 436
        },
        "33": {
          name: "(anonymous_33)",
          decl: {
            start: {
              line: 443,
              column: 17
            },
            end: {
              line: 443,
              column: 18
            }
          },
          loc: {
            start: {
              line: 443,
              column: 30
            },
            end: {
              line: 448,
              column: 9
            }
          },
          line: 443
        },
        "34": {
          name: "(anonymous_34)",
          decl: {
            start: {
              line: 452,
              column: 17
            },
            end: {
              line: 452,
              column: 18
            }
          },
          loc: {
            start: {
              line: 452,
              column: 30
            },
            end: {
              line: 457,
              column: 9
            }
          },
          line: 452
        },
        "35": {
          name: "(anonymous_35)",
          decl: {
            start: {
              line: 470,
              column: 2
            },
            end: {
              line: 470,
              column: 3
            }
          },
          loc: {
            start: {
              line: 470,
              column: 20
            },
            end: {
              line: 499,
              column: 3
            }
          },
          line: 470
        },
        "36": {
          name: "(anonymous_36)",
          decl: {
            start: {
              line: 473,
              column: 15
            },
            end: {
              line: 473,
              column: 16
            }
          },
          loc: {
            start: {
              line: 473,
              column: 28
            },
            end: {
              line: 479,
              column: 7
            }
          },
          line: 473
        },
        "37": {
          name: "(anonymous_37)",
          decl: {
            start: {
              line: 483,
              column: 15
            },
            end: {
              line: 483,
              column: 16
            }
          },
          loc: {
            start: {
              line: 483,
              column: 28
            },
            end: {
              line: 489,
              column: 7
            }
          },
          line: 483
        },
        "38": {
          name: "(anonymous_38)",
          decl: {
            start: {
              line: 501,
              column: 2
            },
            end: {
              line: 501,
              column: 3
            }
          },
          loc: {
            start: {
              line: 501,
              column: 23
            },
            end: {
              line: 508,
              column: 3
            }
          },
          line: 501
        },
        "39": {
          name: "(anonymous_39)",
          decl: {
            start: {
              line: 512,
              column: 2
            },
            end: {
              line: 512,
              column: 3
            }
          },
          loc: {
            start: {
              line: 512,
              column: 49
            },
            end: {
              line: 534,
              column: 3
            }
          },
          line: 512
        },
        "40": {
          name: "(anonymous_40)",
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
              column: 33
            },
            end: {
              line: 533,
              column: 5
            }
          },
          line: 513
        },
        "41": {
          name: "(anonymous_41)",
          decl: {
            start: {
              line: 536,
              column: 2
            },
            end: {
              line: 536,
              column: 3
            }
          },
          loc: {
            start: {
              line: 536,
              column: 31
            },
            end: {
              line: 538,
              column: 3
            }
          },
          line: 536
        },
        "42": {
          name: "(anonymous_42)",
          decl: {
            start: {
              line: 547,
              column: 70
            },
            end: {
              line: 547,
              column: 71
            }
          },
          loc: {
            start: {
              line: 547,
              column: 87
            },
            end: {
              line: 584,
              column: 1
            }
          },
          line: 547
        },
        "43": {
          name: "(anonymous_43)",
          decl: {
            start: {
              line: 565,
              column: 39
            },
            end: {
              line: 565,
              column: 40
            }
          },
          loc: {
            start: {
              line: 565,
              column: 54
            },
            end: {
              line: 576,
              column: 3
            }
          },
          line: 565
        },
        "44": {
          name: "(anonymous_44)",
          decl: {
            start: {
              line: 571,
              column: 43
            },
            end: {
              line: 571,
              column: 44
            }
          },
          loc: {
            start: {
              line: 571,
              column: 49
            },
            end: {
              line: 575,
              column: 5
            }
          },
          line: 571
        },
        "45": {
          name: "(anonymous_45)",
          decl: {
            start: {
              line: 597,
              column: 29
            },
            end: {
              line: 597,
              column: 30
            }
          },
          loc: {
            start: {
              line: 597,
              column: 35
            },
            end: {
              line: 600,
              column: 3
            }
          },
          line: 597
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 106,
              column: 11
            },
            end: {
              line: 106,
              column: 65
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 106,
              column: 27
            },
            end: {
              line: 106,
              column: 38
            }
          }, {
            start: {
              line: 106,
              column: 41
            },
            end: {
              line: 106,
              column: 65
            }
          }],
          line: 106
        },
        "1": {
          loc: {
            start: {
              line: 110,
              column: 4
            },
            end: {
              line: 112,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 110,
              column: 4
            },
            end: {
              line: 112,
              column: 5
            }
          }, {
            start: {
              line: 110,
              column: 4
            },
            end: {
              line: 112,
              column: 5
            }
          }],
          line: 110
        },
        "2": {
          loc: {
            start: {
              line: 110,
              column: 8
            },
            end: {
              line: 110,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 110,
              column: 8
            },
            end: {
              line: 110,
              column: 21
            }
          }, {
            start: {
              line: 110,
              column: 25
            },
            end: {
              line: 110,
              column: 46
            }
          }],
          line: 110
        },
        "3": {
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
        "4": {
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
        "5": {
          loc: {
            start: {
              line: 122,
              column: 8
            },
            end: {
              line: 122,
              column: 51
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 122,
              column: 8
            },
            end: {
              line: 122,
              column: 21
            }
          }, {
            start: {
              line: 122,
              column: 25
            },
            end: {
              line: 122,
              column: 51
            }
          }],
          line: 122
        },
        "6": {
          loc: {
            start: {
              line: 144,
              column: 8
            },
            end: {
              line: 146,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 144,
              column: 8
            },
            end: {
              line: 146,
              column: 9
            }
          }, {
            start: {
              line: 144,
              column: 8
            },
            end: {
              line: 146,
              column: 9
            }
          }],
          line: 144
        },
        "7": {
          loc: {
            start: {
              line: 154,
              column: 4
            },
            end: {
              line: 156,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 154,
              column: 4
            },
            end: {
              line: 156,
              column: 5
            }
          }, {
            start: {
              line: 154,
              column: 4
            },
            end: {
              line: 156,
              column: 5
            }
          }],
          line: 154
        },
        "8": {
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
        "9": {
          loc: {
            start: {
              line: 158,
              column: 8
            },
            end: {
              line: 158,
              column: 47
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
              column: 22
            }
          }, {
            start: {
              line: 158,
              column: 26
            },
            end: {
              line: 158,
              column: 47
            }
          }],
          line: 158
        },
        "10": {
          loc: {
            start: {
              line: 164,
              column: 4
            },
            end: {
              line: 166,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 164,
              column: 4
            },
            end: {
              line: 166,
              column: 5
            }
          }, {
            start: {
              line: 164,
              column: 4
            },
            end: {
              line: 166,
              column: 5
            }
          }],
          line: 164
        },
        "11": {
          loc: {
            start: {
              line: 164,
              column: 8
            },
            end: {
              line: 164,
              column: 52
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 164,
              column: 8
            },
            end: {
              line: 164,
              column: 22
            }
          }, {
            start: {
              line: 164,
              column: 26
            },
            end: {
              line: 164,
              column: 52
            }
          }],
          line: 164
        },
        "12": {
          loc: {
            start: {
              line: 171,
              column: 4
            },
            end: {
              line: 173,
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
              line: 173,
              column: 5
            }
          }, {
            start: {
              line: 171,
              column: 4
            },
            end: {
              line: 173,
              column: 5
            }
          }],
          line: 171
        },
        "13": {
          loc: {
            start: {
              line: 186,
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
              line: 186,
              column: 4
            },
            end: {
              line: 193,
              column: 5
            }
          }, {
            start: {
              line: 186,
              column: 4
            },
            end: {
              line: 193,
              column: 5
            }
          }],
          line: 186
        },
        "14": {
          loc: {
            start: {
              line: 238,
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
              line: 238,
              column: 4
            },
            end: {
              line: 242,
              column: 5
            }
          }, {
            start: {
              line: 238,
              column: 4
            },
            end: {
              line: 242,
              column: 5
            }
          }],
          line: 238
        },
        "15": {
          loc: {
            start: {
              line: 238,
              column: 8
            },
            end: {
              line: 239,
              column: 63
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 238,
              column: 8
            },
            end: {
              line: 238,
              column: 33
            }
          }, {
            start: {
              line: 239,
              column: 8
            },
            end: {
              line: 239,
              column: 63
            }
          }],
          line: 238
        },
        "16": {
          loc: {
            start: {
              line: 248,
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
              line: 248,
              column: 4
            },
            end: {
              line: 252,
              column: 5
            }
          }, {
            start: {
              line: 248,
              column: 4
            },
            end: {
              line: 252,
              column: 5
            }
          }],
          line: 248
        },
        "17": {
          loc: {
            start: {
              line: 254,
              column: 4
            },
            end: {
              line: 256,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 254,
              column: 4
            },
            end: {
              line: 256,
              column: 5
            }
          }, {
            start: {
              line: 254,
              column: 4
            },
            end: {
              line: 256,
              column: 5
            }
          }],
          line: 254
        },
        "18": {
          loc: {
            start: {
              line: 260,
              column: 4
            },
            end: {
              line: 262,
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
              line: 262,
              column: 5
            }
          }, {
            start: {
              line: 260,
              column: 4
            },
            end: {
              line: 262,
              column: 5
            }
          }],
          line: 260
        },
        "19": {
          loc: {
            start: {
              line: 265,
              column: 6
            },
            end: {
              line: 267,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 265,
              column: 6
            },
            end: {
              line: 267,
              column: 7
            }
          }, {
            start: {
              line: 265,
              column: 6
            },
            end: {
              line: 267,
              column: 7
            }
          }],
          line: 265
        },
        "20": {
          loc: {
            start: {
              line: 274,
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
              line: 274,
              column: 4
            },
            end: {
              line: 281,
              column: 5
            }
          }, {
            start: {
              line: 274,
              column: 4
            },
            end: {
              line: 281,
              column: 5
            }
          }],
          line: 274
        },
        "21": {
          loc: {
            start: {
              line: 287,
              column: 6
            },
            end: {
              line: 291,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 287,
              column: 6
            },
            end: {
              line: 291,
              column: 7
            }
          }, {
            start: {
              line: 287,
              column: 6
            },
            end: {
              line: 291,
              column: 7
            }
          }],
          line: 287
        },
        "22": {
          loc: {
            start: {
              line: 287,
              column: 10
            },
            end: {
              line: 289,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 287,
              column: 10
            },
            end: {
              line: 287,
              column: 35
            }
          }, {
            start: {
              line: 288,
              column: 10
            },
            end: {
              line: 288,
              column: 40
            }
          }, {
            start: {
              line: 289,
              column: 10
            },
            end: {
              line: 289,
              column: 47
            }
          }],
          line: 287
        },
        "23": {
          loc: {
            start: {
              line: 296,
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
              line: 296,
              column: 4
            },
            end: {
              line: 305,
              column: 5
            }
          }, {
            start: {
              line: 296,
              column: 4
            },
            end: {
              line: 305,
              column: 5
            }
          }],
          line: 296
        },
        "24": {
          loc: {
            start: {
              line: 296,
              column: 8
            },
            end: {
              line: 296,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 296,
              column: 8
            },
            end: {
              line: 296,
              column: 21
            }
          }, {
            start: {
              line: 296,
              column: 25
            },
            end: {
              line: 296,
              column: 46
            }
          }],
          line: 296
        },
        "25": {
          loc: {
            start: {
              line: 298,
              column: 8
            },
            end: {
              line: 301,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 298,
              column: 8
            },
            end: {
              line: 301,
              column: 9
            }
          }, {
            start: {
              line: 298,
              column: 8
            },
            end: {
              line: 301,
              column: 9
            }
          }],
          line: 298
        },
        "26": {
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
        "27": {
          loc: {
            start: {
              line: 309,
              column: 4
            },
            end: {
              line: 313,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 309,
              column: 4
            },
            end: {
              line: 313,
              column: 5
            }
          }, {
            start: {
              line: 309,
              column: 4
            },
            end: {
              line: 313,
              column: 5
            }
          }],
          line: 309
        },
        "28": {
          loc: {
            start: {
              line: 330,
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
              line: 330,
              column: 4
            },
            end: {
              line: 333,
              column: 5
            }
          }, {
            start: {
              line: 330,
              column: 4
            },
            end: {
              line: 333,
              column: 5
            }
          }],
          line: 330
        },
        "29": {
          loc: {
            start: {
              line: 337,
              column: 20
            },
            end: {
              line: 339,
              column: 10
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 338,
              column: 8
            },
            end: {
              line: 338,
              column: 22
            }
          }, {
            start: {
              line: 339,
              column: 8
            },
            end: {
              line: 339,
              column: 10
            }
          }],
          line: 337
        },
        "30": {
          loc: {
            start: {
              line: 341,
              column: 4
            },
            end: {
              line: 404,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 341,
              column: 4
            },
            end: {
              line: 404,
              column: 5
            }
          }, {
            start: {
              line: 341,
              column: 4
            },
            end: {
              line: 404,
              column: 5
            }
          }],
          line: 341
        },
        "31": {
          loc: {
            start: {
              line: 341,
              column: 8
            },
            end: {
              line: 341,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 341,
              column: 8
            },
            end: {
              line: 341,
              column: 21
            }
          }, {
            start: {
              line: 341,
              column: 25
            },
            end: {
              line: 341,
              column: 46
            }
          }],
          line: 341
        },
        "32": {
          loc: {
            start: {
              line: 345,
              column: 6
            },
            end: {
              line: 347,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 345,
              column: 6
            },
            end: {
              line: 347,
              column: 7
            }
          }, {
            start: {
              line: 345,
              column: 6
            },
            end: {
              line: 347,
              column: 7
            }
          }],
          line: 345
        },
        "33": {
          loc: {
            start: {
              line: 352,
              column: 8
            },
            end: {
              line: 355,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 352,
              column: 8
            },
            end: {
              line: 355,
              column: 9
            }
          }, {
            start: {
              line: 352,
              column: 8
            },
            end: {
              line: 355,
              column: 9
            }
          }],
          line: 352
        },
        "34": {
          loc: {
            start: {
              line: 356,
              column: 8
            },
            end: {
              line: 358,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 356,
              column: 8
            },
            end: {
              line: 358,
              column: 9
            }
          }, {
            start: {
              line: 356,
              column: 8
            },
            end: {
              line: 358,
              column: 9
            }
          }],
          line: 356
        },
        "35": {
          loc: {
            start: {
              line: 359,
              column: 8
            },
            end: {
              line: 363,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 359,
              column: 8
            },
            end: {
              line: 363,
              column: 9
            }
          }, {
            start: {
              line: 359,
              column: 8
            },
            end: {
              line: 363,
              column: 9
            }
          }],
          line: 359
        },
        "36": {
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
        "37": {
          loc: {
            start: {
              line: 372,
              column: 6
            },
            end: {
              line: 374,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 372,
              column: 6
            },
            end: {
              line: 374,
              column: 7
            }
          }, {
            start: {
              line: 372,
              column: 6
            },
            end: {
              line: 374,
              column: 7
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
              line: 379,
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
              line: 379,
              column: 7
            }
          }, {
            start: {
              line: 376,
              column: 6
            },
            end: {
              line: 379,
              column: 7
            }
          }],
          line: 376
        },
        "39": {
          loc: {
            start: {
              line: 385,
              column: 11
            },
            end: {
              line: 404,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 385,
              column: 11
            },
            end: {
              line: 404,
              column: 5
            }
          }, {
            start: {
              line: 385,
              column: 11
            },
            end: {
              line: 404,
              column: 5
            }
          }],
          line: 385
        },
        "40": {
          loc: {
            start: {
              line: 385,
              column: 15
            },
            end: {
              line: 385,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 385,
              column: 15
            },
            end: {
              line: 385,
              column: 29
            }
          }, {
            start: {
              line: 385,
              column: 33
            },
            end: {
              line: 385,
              column: 47
            }
          }],
          line: 385
        },
        "41": {
          loc: {
            start: {
              line: 390,
              column: 8
            },
            end: {
              line: 392,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 390,
              column: 8
            },
            end: {
              line: 392,
              column: 9
            }
          }, {
            start: {
              line: 390,
              column: 8
            },
            end: {
              line: 392,
              column: 9
            }
          }],
          line: 390
        },
        "42": {
          loc: {
            start: {
              line: 395,
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
              line: 395,
              column: 6
            },
            end: {
              line: 401,
              column: 7
            }
          }, {
            start: {
              line: 395,
              column: 6
            },
            end: {
              line: 401,
              column: 7
            }
          }],
          line: 395
        },
        "43": {
          loc: {
            start: {
              line: 402,
              column: 11
            },
            end: {
              line: 404,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 402,
              column: 11
            },
            end: {
              line: 404,
              column: 5
            }
          }, {
            start: {
              line: 402,
              column: 11
            },
            end: {
              line: 404,
              column: 5
            }
          }],
          line: 402
        },
        "44": {
          loc: {
            start: {
              line: 416,
              column: 4
            },
            end: {
              line: 418,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 416,
              column: 4
            },
            end: {
              line: 418,
              column: 5
            }
          }, {
            start: {
              line: 416,
              column: 4
            },
            end: {
              line: 418,
              column: 5
            }
          }],
          line: 416
        },
        "45": {
          loc: {
            start: {
              line: 416,
              column: 8
            },
            end: {
              line: 416,
              column: 54
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 416,
              column: 8
            },
            end: {
              line: 416,
              column: 32
            }
          }, {
            start: {
              line: 416,
              column: 36
            },
            end: {
              line: 416,
              column: 54
            }
          }],
          line: 416
        },
        "46": {
          loc: {
            start: {
              line: 420,
              column: 4
            },
            end: {
              line: 422,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 420,
              column: 4
            },
            end: {
              line: 422,
              column: 5
            }
          }, {
            start: {
              line: 420,
              column: 4
            },
            end: {
              line: 422,
              column: 5
            }
          }],
          line: 420
        },
        "47": {
          loc: {
            start: {
              line: 420,
              column: 8
            },
            end: {
              line: 420,
              column: 54
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 420,
              column: 8
            },
            end: {
              line: 420,
              column: 31
            }
          }, {
            start: {
              line: 420,
              column: 35
            },
            end: {
              line: 420,
              column: 54
            }
          }],
          line: 420
        },
        "48": {
          loc: {
            start: {
              line: 437,
              column: 4
            },
            end: {
              line: 465,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 437,
              column: 4
            },
            end: {
              line: 465,
              column: 5
            }
          }, {
            start: {
              line: 437,
              column: 4
            },
            end: {
              line: 465,
              column: 5
            }
          }],
          line: 437
        },
        "49": {
          loc: {
            start: {
              line: 475,
              column: 8
            },
            end: {
              line: 478,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 475,
              column: 8
            },
            end: {
              line: 478,
              column: 9
            }
          }, {
            start: {
              line: 475,
              column: 8
            },
            end: {
              line: 478,
              column: 9
            }
          }],
          line: 475
        },
        "50": {
          loc: {
            start: {
              line: 485,
              column: 8
            },
            end: {
              line: 488,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 485,
              column: 8
            },
            end: {
              line: 488,
              column: 9
            }
          }, {
            start: {
              line: 485,
              column: 8
            },
            end: {
              line: 488,
              column: 9
            }
          }],
          line: 485
        },
        "51": {
          loc: {
            start: {
              line: 493,
              column: 4
            },
            end: {
              line: 498,
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
              line: 498,
              column: 5
            }
          }, {
            start: {
              line: 493,
              column: 4
            },
            end: {
              line: 498,
              column: 5
            }
          }],
          line: 493
        },
        "52": {
          loc: {
            start: {
              line: 518,
              column: 11
            },
            end: {
              line: 518,
              column: 61
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 518,
              column: 50
            },
            end: {
              line: 518,
              column: 56
            }
          }, {
            start: {
              line: 518,
              column: 59
            },
            end: {
              line: 518,
              column: 61
            }
          }],
          line: 518
        },
        "53": {
          loc: {
            start: {
              line: 518,
              column: 11
            },
            end: {
              line: 518,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 518,
              column: 11
            },
            end: {
              line: 518,
              column: 37
            }
          }, {
            start: {
              line: 518,
              column: 41
            },
            end: {
              line: 518,
              column: 47
            }
          }],
          line: 518
        },
        "54": {
          loc: {
            start: {
              line: 521,
              column: 6
            },
            end: {
              line: 523,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 521,
              column: 6
            },
            end: {
              line: 523,
              column: 7
            }
          }, {
            start: {
              line: 521,
              column: 6
            },
            end: {
              line: 523,
              column: 7
            }
          }],
          line: 521
        },
        "55": {
          loc: {
            start: {
              line: 525,
              column: 6
            },
            end: {
              line: 532,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 525,
              column: 6
            },
            end: {
              line: 532,
              column: 7
            }
          }, {
            start: {
              line: 525,
              column: 6
            },
            end: {
              line: 532,
              column: 7
            }
          }],
          line: 525
        },
        "56": {
          loc: {
            start: {
              line: 526,
              column: 8
            },
            end: {
              line: 528,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 526,
              column: 8
            },
            end: {
              line: 528,
              column: 9
            }
          }, {
            start: {
              line: 526,
              column: 8
            },
            end: {
              line: 528,
              column: 9
            }
          }],
          line: 526
        },
        "57": {
          loc: {
            start: {
              line: 530,
              column: 13
            },
            end: {
              line: 532,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 530,
              column: 13
            },
            end: {
              line: 532,
              column: 7
            }
          }, {
            start: {
              line: 530,
              column: 13
            },
            end: {
              line: 532,
              column: 7
            }
          }],
          line: 530
        },
        "58": {
          loc: {
            start: {
              line: 551,
              column: 2
            },
            end: {
              line: 553,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 551,
              column: 2
            },
            end: {
              line: 553,
              column: 3
            }
          }, {
            start: {
              line: 551,
              column: 2
            },
            end: {
              line: 553,
              column: 3
            }
          }],
          line: 551
        },
        "59": {
          loc: {
            start: {
              line: 555,
              column: 17
            },
            end: {
              line: 559,
              column: 5
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 556,
              column: 6
            },
            end: {
              line: 556,
              column: 14
            }
          }, {
            start: {
              line: 556,
              column: 17
            },
            end: {
              line: 559,
              column: 5
            }
          }],
          line: 555
        },
        "60": {
          loc: {
            start: {
              line: 561,
              column: 2
            },
            end: {
              line: 563,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 561,
              column: 2
            },
            end: {
              line: 563,
              column: 3
            }
          }, {
            start: {
              line: 561,
              column: 2
            },
            end: {
              line: 563,
              column: 3
            }
          }],
          line: 561
        },
        "61": {
          loc: {
            start: {
              line: 561,
              column: 6
            },
            end: {
              line: 561,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 561,
              column: 6
            },
            end: {
              line: 561,
              column: 26
            }
          }, {
            start: {
              line: 561,
              column: 30
            },
            end: {
              line: 561,
              column: 53
            }
          }],
          line: 561
        },
        "62": {
          loc: {
            start: {
              line: 566,
              column: 4
            },
            end: {
              line: 569,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 566,
              column: 4
            },
            end: {
              line: 569,
              column: 5
            }
          }, {
            start: {
              line: 566,
              column: 4
            },
            end: {
              line: 569,
              column: 5
            }
          }],
          line: 566
        },
        "63": {
          loc: {
            start: {
              line: 572,
              column: 6
            },
            end: {
              line: 574,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 572,
              column: 6
            },
            end: {
              line: 574,
              column: 7
            }
          }, {
            start: {
              line: 572,
              column: 6
            },
            end: {
              line: 574,
              column: 7
            }
          }],
          line: 572
        },
        "64": {
          loc: {
            start: {
              line: 579,
              column: 2
            },
            end: {
              line: 581,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 579,
              column: 2
            },
            end: {
              line: 581,
              column: 3
            }
          }, {
            start: {
              line: 579,
              column: 2
            },
            end: {
              line: 581,
              column: 3
            }
          }],
          line: 579
        },
        "65": {
          loc: {
            start: {
              line: 593,
              column: 0
            },
            end: {
              line: 601,
              column: 1
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 593,
              column: 0
            },
            end: {
              line: 601,
              column: 1
            }
          }, {
            start: {
              line: 593,
              column: 0
            },
            end: {
              line: 601,
              column: 1
            }
          }],
          line: 593
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
        "259": 0
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
        "45": 0
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
        "22": [0, 0, 0],
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
        "65": [0, 0]
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

  var NAME = (cov_10c74op6cl.s[0]++, 'modal');
  var VERSION = (cov_10c74op6cl.s[1]++, '4.3.1');
  var DATA_KEY = (cov_10c74op6cl.s[2]++, 'bs.modal');
  var EVENT_KEY = (cov_10c74op6cl.s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_10c74op6cl.s[4]++, '.data-api');
  var ESCAPE_KEYCODE = (cov_10c74op6cl.s[5]++, 27); // KeyboardEvent.which value for Escape (Esc) key

  var Default = (cov_10c74op6cl.s[6]++, {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  });
  var DefaultType = (cov_10c74op6cl.s[7]++, {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  });
  var Event = (cov_10c74op6cl.s[8]++, {
    HIDE: "hide" + EVENT_KEY,
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
  var ClassName = (cov_10c74op6cl.s[9]++, {
    SCROLLABLE: 'modal-dialog-scrollable',
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
  });
  var Selector = (cov_10c74op6cl.s[10]++, {
    DIALOG: '.modal-dialog',
    MODAL_BODY: '.modal-body',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  });

  var Modal =
  /*#__PURE__*/
  function () {
    function Modal(element, config) {
      cov_10c74op6cl.f[0]++;
      cov_10c74op6cl.s[11]++;
      this._config = this._getConfig(config);
      cov_10c74op6cl.s[12]++;
      this._element = element;
      cov_10c74op6cl.s[13]++;
      this._dialog = SelectorEngine.findOne(Selector.DIALOG, element);
      cov_10c74op6cl.s[14]++;
      this._backdrop = null;
      cov_10c74op6cl.s[15]++;
      this._isShown = false;
      cov_10c74op6cl.s[16]++;
      this._isBodyOverflowing = false;
      cov_10c74op6cl.s[17]++;
      this._ignoreBackdropClick = false;
      cov_10c74op6cl.s[18]++;
      this._isTransitioning = false;
      cov_10c74op6cl.s[19]++;
      this._scrollbarWidth = 0;
      cov_10c74op6cl.s[20]++;
      Data.setData(element, DATA_KEY, this);
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

      if (this._element.classList.contains(ClassName.FADE)) {
        cov_10c74op6cl.b[3][0]++;
        cov_10c74op6cl.s[27]++;
        this._isTransitioning = true;
      } else {
        cov_10c74op6cl.b[3][1]++;
      }

      var showEvent = (cov_10c74op6cl.s[28]++, EventHandler.trigger(this._element, Event.SHOW, {
        relatedTarget: relatedTarget
      }));
      cov_10c74op6cl.s[29]++;

      if ((cov_10c74op6cl.b[5][0]++, this._isShown) || (cov_10c74op6cl.b[5][1]++, showEvent.defaultPrevented)) {
        cov_10c74op6cl.b[4][0]++;
        cov_10c74op6cl.s[30]++;
        return;
      } else {
        cov_10c74op6cl.b[4][1]++;
      }

      cov_10c74op6cl.s[31]++;
      this._isShown = true;
      cov_10c74op6cl.s[32]++;

      this._checkScrollbar();

      cov_10c74op6cl.s[33]++;

      this._setScrollbar();

      cov_10c74op6cl.s[34]++;

      this._adjustDialog();

      cov_10c74op6cl.s[35]++;

      this._setEscapeEvent();

      cov_10c74op6cl.s[36]++;

      this._setResizeEvent();

      cov_10c74op6cl.s[37]++;
      EventHandler.on(this._element, Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
        cov_10c74op6cl.f[5]++;
        cov_10c74op6cl.s[38]++;
        return _this.hide(event);
      });
      cov_10c74op6cl.s[39]++;
      EventHandler.on(this._dialog, Event.MOUSEDOWN_DISMISS, function () {
        cov_10c74op6cl.f[6]++;
        cov_10c74op6cl.s[40]++;
        EventHandler.one(_this._element, Event.MOUSEUP_DISMISS, function (event) {
          cov_10c74op6cl.f[7]++;
          cov_10c74op6cl.s[41]++;

          if (event.target === _this._element) {
            cov_10c74op6cl.b[6][0]++;
            cov_10c74op6cl.s[42]++;
            _this._ignoreBackdropClick = true;
          } else {
            cov_10c74op6cl.b[6][1]++;
          }
        });
      });
      cov_10c74op6cl.s[43]++;

      this._showBackdrop(function () {
        cov_10c74op6cl.f[8]++;
        cov_10c74op6cl.s[44]++;
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      cov_10c74op6cl.f[9]++;
      cov_10c74op6cl.s[45]++;

      if (event) {
        cov_10c74op6cl.b[7][0]++;
        cov_10c74op6cl.s[46]++;
        event.preventDefault();
      } else {
        cov_10c74op6cl.b[7][1]++;
      }

      cov_10c74op6cl.s[47]++;

      if ((cov_10c74op6cl.b[9][0]++, !this._isShown) || (cov_10c74op6cl.b[9][1]++, this._isTransitioning)) {
        cov_10c74op6cl.b[8][0]++;
        cov_10c74op6cl.s[48]++;
        return;
      } else {
        cov_10c74op6cl.b[8][1]++;
      }

      var hideEvent = (cov_10c74op6cl.s[49]++, EventHandler.trigger(this._element, Event.HIDE));
      cov_10c74op6cl.s[50]++;

      if ((cov_10c74op6cl.b[11][0]++, !this._isShown) || (cov_10c74op6cl.b[11][1]++, hideEvent.defaultPrevented)) {
        cov_10c74op6cl.b[10][0]++;
        cov_10c74op6cl.s[51]++;
        return;
      } else {
        cov_10c74op6cl.b[10][1]++;
      }

      cov_10c74op6cl.s[52]++;
      this._isShown = false;
      var transition = (cov_10c74op6cl.s[53]++, this._element.classList.contains(ClassName.FADE));
      cov_10c74op6cl.s[54]++;

      if (transition) {
        cov_10c74op6cl.b[12][0]++;
        cov_10c74op6cl.s[55]++;
        this._isTransitioning = true;
      } else {
        cov_10c74op6cl.b[12][1]++;
      }

      cov_10c74op6cl.s[56]++;

      this._setEscapeEvent();

      cov_10c74op6cl.s[57]++;

      this._setResizeEvent();

      cov_10c74op6cl.s[58]++;
      EventHandler.off(document, Event.FOCUSIN);
      cov_10c74op6cl.s[59]++;

      this._element.classList.remove(ClassName.SHOW);

      cov_10c74op6cl.s[60]++;
      EventHandler.off(this._element, Event.CLICK_DISMISS);
      cov_10c74op6cl.s[61]++;
      EventHandler.off(this._dialog, Event.MOUSEDOWN_DISMISS);
      cov_10c74op6cl.s[62]++;

      if (transition) {
        cov_10c74op6cl.b[13][0]++;
        var transitionDuration = (cov_10c74op6cl.s[63]++, Util.getTransitionDurationFromElement(this._element));
        cov_10c74op6cl.s[64]++;
        EventHandler.one(this._element, Util.TRANSITION_END, function (event) {
          cov_10c74op6cl.f[10]++;
          cov_10c74op6cl.s[65]++;
          return _this2._hideModal(event);
        });
        cov_10c74op6cl.s[66]++;
        Util.emulateTransitionEnd(this._element, transitionDuration);
      } else {
        cov_10c74op6cl.b[13][1]++;
        cov_10c74op6cl.s[67]++;

        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      cov_10c74op6cl.f[11]++;
      cov_10c74op6cl.s[68]++;
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        cov_10c74op6cl.f[12]++;
        cov_10c74op6cl.s[69]++;
        return EventHandler.off(htmlElement, EVENT_KEY);
      });
      /**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */

      cov_10c74op6cl.s[70]++;
      EventHandler.off(document, Event.FOCUSIN);
      cov_10c74op6cl.s[71]++;
      Data.removeData(this._element, DATA_KEY);
      cov_10c74op6cl.s[72]++;
      this._config = null;
      cov_10c74op6cl.s[73]++;
      this._element = null;
      cov_10c74op6cl.s[74]++;
      this._dialog = null;
      cov_10c74op6cl.s[75]++;
      this._backdrop = null;
      cov_10c74op6cl.s[76]++;
      this._isShown = null;
      cov_10c74op6cl.s[77]++;
      this._isBodyOverflowing = null;
      cov_10c74op6cl.s[78]++;
      this._ignoreBackdropClick = null;
      cov_10c74op6cl.s[79]++;
      this._isTransitioning = null;
      cov_10c74op6cl.s[80]++;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      cov_10c74op6cl.f[13]++;
      cov_10c74op6cl.s[81]++;

      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      cov_10c74op6cl.f[14]++;
      cov_10c74op6cl.s[82]++;
      config = _objectSpread({}, Default, config);
      cov_10c74op6cl.s[83]++;
      Util.typeCheckConfig(NAME, config, DefaultType);
      cov_10c74op6cl.s[84]++;
      return config;
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this3 = this;

      cov_10c74op6cl.f[15]++;
      var transition = (cov_10c74op6cl.s[85]++, this._element.classList.contains(ClassName.FADE));
      cov_10c74op6cl.s[86]++;

      if ((cov_10c74op6cl.b[15][0]++, !this._element.parentNode) || (cov_10c74op6cl.b[15][1]++, this._element.parentNode.nodeType !== Node.ELEMENT_NODE)) {
        cov_10c74op6cl.b[14][0]++;
        cov_10c74op6cl.s[87]++;
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      } else {
        cov_10c74op6cl.b[14][1]++;
      }

      cov_10c74op6cl.s[88]++;
      this._element.style.display = 'block';
      cov_10c74op6cl.s[89]++;

      this._element.removeAttribute('aria-hidden');

      cov_10c74op6cl.s[90]++;

      this._element.setAttribute('aria-modal', true);

      cov_10c74op6cl.s[91]++;

      if (this._dialog.classList.contains(ClassName.SCROLLABLE)) {
        cov_10c74op6cl.b[16][0]++;
        cov_10c74op6cl.s[92]++;
        SelectorEngine.findOne(Selector.MODAL_BODY, this._dialog).scrollTop = 0;
      } else {
        cov_10c74op6cl.b[16][1]++;
        cov_10c74op6cl.s[93]++;
        this._element.scrollTop = 0;
      }

      cov_10c74op6cl.s[94]++;

      if (transition) {
        cov_10c74op6cl.b[17][0]++;
        cov_10c74op6cl.s[95]++;
        Util.reflow(this._element);
      } else {
        cov_10c74op6cl.b[17][1]++;
      }

      cov_10c74op6cl.s[96]++;

      this._element.classList.add(ClassName.SHOW);

      cov_10c74op6cl.s[97]++;

      if (this._config.focus) {
        cov_10c74op6cl.b[18][0]++;
        cov_10c74op6cl.s[98]++;

        this._enforceFocus();
      } else {
        cov_10c74op6cl.b[18][1]++;
      }

      cov_10c74op6cl.s[99]++;

      var transitionComplete = function transitionComplete() {
        cov_10c74op6cl.f[16]++;
        cov_10c74op6cl.s[100]++;

        if (_this3._config.focus) {
          cov_10c74op6cl.b[19][0]++;
          cov_10c74op6cl.s[101]++;

          _this3._element.focus();
        } else {
          cov_10c74op6cl.b[19][1]++;
        }

        cov_10c74op6cl.s[102]++;
        _this3._isTransitioning = false;
        cov_10c74op6cl.s[103]++;
        EventHandler.trigger(_this3._element, Event.SHOWN, {
          relatedTarget: relatedTarget
        });
      };

      cov_10c74op6cl.s[104]++;

      if (transition) {
        cov_10c74op6cl.b[20][0]++;
        var transitionDuration = (cov_10c74op6cl.s[105]++, Util.getTransitionDurationFromElement(this._dialog));
        cov_10c74op6cl.s[106]++;
        EventHandler.one(this._dialog, Util.TRANSITION_END, transitionComplete);
        cov_10c74op6cl.s[107]++;
        Util.emulateTransitionEnd(this._dialog, transitionDuration);
      } else {
        cov_10c74op6cl.b[20][1]++;
        cov_10c74op6cl.s[108]++;
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this4 = this;

      cov_10c74op6cl.f[17]++;
      cov_10c74op6cl.s[109]++;
      EventHandler.off(document, Event.FOCUSIN); // guard against infinite focus loop

      cov_10c74op6cl.s[110]++;
      EventHandler.on(document, Event.FOCUSIN, function (event) {
        cov_10c74op6cl.f[18]++;
        cov_10c74op6cl.s[111]++;

        if ((cov_10c74op6cl.b[22][0]++, document !== event.target) && (cov_10c74op6cl.b[22][1]++, _this4._element !== event.target) && (cov_10c74op6cl.b[22][2]++, !_this4._element.contains(event.target))) {
          cov_10c74op6cl.b[21][0]++;
          cov_10c74op6cl.s[112]++;

          _this4._element.focus();
        } else {
          cov_10c74op6cl.b[21][1]++;
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this5 = this;

      cov_10c74op6cl.f[19]++;
      cov_10c74op6cl.s[113]++;

      if ((cov_10c74op6cl.b[24][0]++, this._isShown) && (cov_10c74op6cl.b[24][1]++, this._config.keyboard)) {
        cov_10c74op6cl.b[23][0]++;
        cov_10c74op6cl.s[114]++;
        EventHandler.on(this._element, Event.KEYDOWN_DISMISS, function (event) {
          cov_10c74op6cl.f[20]++;
          cov_10c74op6cl.s[115]++;

          if (event.which === ESCAPE_KEYCODE) {
            cov_10c74op6cl.b[25][0]++;
            cov_10c74op6cl.s[116]++;
            event.preventDefault();
            cov_10c74op6cl.s[117]++;

            _this5.hide();
          } else {
            cov_10c74op6cl.b[25][1]++;
          }
        });
      } else {
        cov_10c74op6cl.b[23][1]++;
        cov_10c74op6cl.s[118]++;

        if (!this._isShown) {
          cov_10c74op6cl.b[26][0]++;
          cov_10c74op6cl.s[119]++;
          EventHandler.off(this._element, Event.KEYDOWN_DISMISS);
        } else {
          cov_10c74op6cl.b[26][1]++;
        }
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this6 = this;

      cov_10c74op6cl.f[21]++;
      cov_10c74op6cl.s[120]++;

      if (this._isShown) {
        cov_10c74op6cl.b[27][0]++;
        cov_10c74op6cl.s[121]++;
        EventHandler.on(window, Event.RESIZE, function (event) {
          cov_10c74op6cl.f[22]++;
          cov_10c74op6cl.s[122]++;
          return _this6.handleUpdate(event);
        });
      } else {
        cov_10c74op6cl.b[27][1]++;
        cov_10c74op6cl.s[123]++;
        EventHandler.off(window, Event.RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this7 = this;

      cov_10c74op6cl.f[23]++;
      cov_10c74op6cl.s[124]++;
      this._element.style.display = 'none';
      cov_10c74op6cl.s[125]++;

      this._element.setAttribute('aria-hidden', true);

      cov_10c74op6cl.s[126]++;

      this._element.removeAttribute('aria-modal');

      cov_10c74op6cl.s[127]++;
      this._isTransitioning = false;
      cov_10c74op6cl.s[128]++;

      this._showBackdrop(function () {
        cov_10c74op6cl.f[24]++;
        cov_10c74op6cl.s[129]++;
        document.body.classList.remove(ClassName.OPEN);
        cov_10c74op6cl.s[130]++;

        _this7._resetAdjustments();

        cov_10c74op6cl.s[131]++;

        _this7._resetScrollbar();

        cov_10c74op6cl.s[132]++;
        EventHandler.trigger(_this7._element, Event.HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      cov_10c74op6cl.f[25]++;
      cov_10c74op6cl.s[133]++;

      if (this._backdrop) {
        cov_10c74op6cl.b[28][0]++;
        cov_10c74op6cl.s[134]++;

        this._backdrop.parentNode.removeChild(this._backdrop);

        cov_10c74op6cl.s[135]++;
        this._backdrop = null;
      } else {
        cov_10c74op6cl.b[28][1]++;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this8 = this;

      cov_10c74op6cl.f[26]++;
      var animate = (cov_10c74op6cl.s[136]++, this._element.classList.contains(ClassName.FADE) ? (cov_10c74op6cl.b[29][0]++, ClassName.FADE) : (cov_10c74op6cl.b[29][1]++, ''));
      cov_10c74op6cl.s[137]++;

      if ((cov_10c74op6cl.b[31][0]++, this._isShown) && (cov_10c74op6cl.b[31][1]++, this._config.backdrop)) {
        cov_10c74op6cl.b[30][0]++;
        cov_10c74op6cl.s[138]++;
        this._backdrop = document.createElement('div');
        cov_10c74op6cl.s[139]++;
        this._backdrop.className = ClassName.BACKDROP;
        cov_10c74op6cl.s[140]++;

        if (animate) {
          cov_10c74op6cl.b[32][0]++;
          cov_10c74op6cl.s[141]++;

          this._backdrop.classList.add(animate);
        } else {
          cov_10c74op6cl.b[32][1]++;
        }

        cov_10c74op6cl.s[142]++;
        document.body.appendChild(this._backdrop);
        cov_10c74op6cl.s[143]++;
        EventHandler.on(this._element, Event.CLICK_DISMISS, function (event) {
          cov_10c74op6cl.f[27]++;
          cov_10c74op6cl.s[144]++;

          if (_this8._ignoreBackdropClick) {
            cov_10c74op6cl.b[33][0]++;
            cov_10c74op6cl.s[145]++;
            _this8._ignoreBackdropClick = false;
            cov_10c74op6cl.s[146]++;
            return;
          } else {
            cov_10c74op6cl.b[33][1]++;
          }

          cov_10c74op6cl.s[147]++;

          if (event.target !== event.currentTarget) {
            cov_10c74op6cl.b[34][0]++;
            cov_10c74op6cl.s[148]++;
            return;
          } else {
            cov_10c74op6cl.b[34][1]++;
          }

          cov_10c74op6cl.s[149]++;

          if (_this8._config.backdrop === 'static') {
            cov_10c74op6cl.b[35][0]++;
            cov_10c74op6cl.s[150]++;

            _this8._element.focus();
          } else {
            cov_10c74op6cl.b[35][1]++;
            cov_10c74op6cl.s[151]++;

            _this8.hide();
          }
        });
        cov_10c74op6cl.s[152]++;

        if (animate) {
          cov_10c74op6cl.b[36][0]++;
          cov_10c74op6cl.s[153]++;
          Util.reflow(this._backdrop);
        } else {
          cov_10c74op6cl.b[36][1]++;
        }

        cov_10c74op6cl.s[154]++;

        this._backdrop.classList.add(ClassName.SHOW);

        cov_10c74op6cl.s[155]++;

        if (!callback) {
          cov_10c74op6cl.b[37][0]++;
          cov_10c74op6cl.s[156]++;
          return;
        } else {
          cov_10c74op6cl.b[37][1]++;
        }

        cov_10c74op6cl.s[157]++;

        if (!animate) {
          cov_10c74op6cl.b[38][0]++;
          cov_10c74op6cl.s[158]++;
          callback();
          cov_10c74op6cl.s[159]++;
          return;
        } else {
          cov_10c74op6cl.b[38][1]++;
        }

        var backdropTransitionDuration = (cov_10c74op6cl.s[160]++, Util.getTransitionDurationFromElement(this._backdrop));
        cov_10c74op6cl.s[161]++;
        EventHandler.one(this._backdrop, Util.TRANSITION_END, callback);
        cov_10c74op6cl.s[162]++;
        Util.emulateTransitionEnd(this._backdrop, backdropTransitionDuration);
      } else {
        cov_10c74op6cl.b[30][1]++;
        cov_10c74op6cl.s[163]++;

        if ((cov_10c74op6cl.b[40][0]++, !this._isShown) && (cov_10c74op6cl.b[40][1]++, this._backdrop)) {
          cov_10c74op6cl.b[39][0]++;
          cov_10c74op6cl.s[164]++;

          this._backdrop.classList.remove(ClassName.SHOW);

          cov_10c74op6cl.s[165]++;

          var callbackRemove = function callbackRemove() {
            cov_10c74op6cl.f[28]++;
            cov_10c74op6cl.s[166]++;

            _this8._removeBackdrop();

            cov_10c74op6cl.s[167]++;

            if (callback) {
              cov_10c74op6cl.b[41][0]++;
              cov_10c74op6cl.s[168]++;
              callback();
            } else {
              cov_10c74op6cl.b[41][1]++;
            }
          };

          cov_10c74op6cl.s[169]++;

          if (this._element.classList.contains(ClassName.FADE)) {
            cov_10c74op6cl.b[42][0]++;

            var _backdropTransitionDuration = (cov_10c74op6cl.s[170]++, Util.getTransitionDurationFromElement(this._backdrop));

            cov_10c74op6cl.s[171]++;
            EventHandler.one(this._backdrop, Util.TRANSITION_END, callbackRemove);
            cov_10c74op6cl.s[172]++;
            Util.emulateTransitionEnd(this._backdrop, _backdropTransitionDuration);
          } else {
            cov_10c74op6cl.b[42][1]++;
            cov_10c74op6cl.s[173]++;
            callbackRemove();
          }
        } else {
          cov_10c74op6cl.b[39][1]++;
          cov_10c74op6cl.s[174]++;

          if (callback) {
            cov_10c74op6cl.b[43][0]++;
            cov_10c74op6cl.s[175]++;
            callback();
          } else {
            cov_10c74op6cl.b[43][1]++;
          }
        }
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      cov_10c74op6cl.f[29]++;
      var isModalOverflowing = (cov_10c74op6cl.s[176]++, this._element.scrollHeight > document.documentElement.clientHeight);
      cov_10c74op6cl.s[177]++;

      if ((cov_10c74op6cl.b[45][0]++, !this._isBodyOverflowing) && (cov_10c74op6cl.b[45][1]++, isModalOverflowing)) {
        cov_10c74op6cl.b[44][0]++;
        cov_10c74op6cl.s[178]++;
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      } else {
        cov_10c74op6cl.b[44][1]++;
      }

      cov_10c74op6cl.s[179]++;

      if ((cov_10c74op6cl.b[47][0]++, this._isBodyOverflowing) && (cov_10c74op6cl.b[47][1]++, !isModalOverflowing)) {
        cov_10c74op6cl.b[46][0]++;
        cov_10c74op6cl.s[180]++;
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      } else {
        cov_10c74op6cl.b[46][1]++;
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      cov_10c74op6cl.f[30]++;
      cov_10c74op6cl.s[181]++;
      this._element.style.paddingLeft = '';
      cov_10c74op6cl.s[182]++;
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      cov_10c74op6cl.f[31]++;
      var rect = (cov_10c74op6cl.s[183]++, document.body.getBoundingClientRect());
      cov_10c74op6cl.s[184]++;
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      cov_10c74op6cl.s[185]++;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this9 = this;

      cov_10c74op6cl.f[32]++;
      cov_10c74op6cl.s[186]++;

      if (this._isBodyOverflowing) {
        cov_10c74op6cl.b[48][0]++;
        cov_10c74op6cl.s[187]++;
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        // Adjust fixed content padding
        Util.makeArray(SelectorEngine.find(Selector.FIXED_CONTENT)).forEach(function (element) {
          cov_10c74op6cl.f[33]++;
          var actualPadding = (cov_10c74op6cl.s[188]++, element.style.paddingRight);
          var calculatedPadding = (cov_10c74op6cl.s[189]++, window.getComputedStyle(element)['padding-right']);
          cov_10c74op6cl.s[190]++;
          Manipulator.setDataAttribute(element, 'padding-right', actualPadding);
          cov_10c74op6cl.s[191]++;
          element.style.paddingRight = parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px";
        }); // Adjust sticky content margin

        cov_10c74op6cl.s[192]++;
        Util.makeArray(SelectorEngine.find(Selector.STICKY_CONTENT)).forEach(function (element) {
          cov_10c74op6cl.f[34]++;
          var actualMargin = (cov_10c74op6cl.s[193]++, element.style.marginRight);
          var calculatedMargin = (cov_10c74op6cl.s[194]++, window.getComputedStyle(element)['margin-right']);
          cov_10c74op6cl.s[195]++;
          Manipulator.setDataAttribute(element, 'margin-right', actualMargin);
          cov_10c74op6cl.s[196]++;
          element.style.marginRight = parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px";
        }); // Adjust body padding

        var actualPadding = (cov_10c74op6cl.s[197]++, document.body.style.paddingRight);
        var calculatedPadding = (cov_10c74op6cl.s[198]++, window.getComputedStyle(document.body)['padding-right']);
        cov_10c74op6cl.s[199]++;
        Manipulator.setDataAttribute(document.body, 'padding-right', actualPadding);
        cov_10c74op6cl.s[200]++;
        document.body.style.paddingRight = parseFloat(calculatedPadding) + this._scrollbarWidth + "px";
      } else {
        cov_10c74op6cl.b[48][1]++;
      }

      cov_10c74op6cl.s[201]++;
      document.body.classList.add(ClassName.OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      cov_10c74op6cl.f[35]++;
      cov_10c74op6cl.s[202]++;
      // Restore fixed content padding
      Util.makeArray(SelectorEngine.find(Selector.FIXED_CONTENT)).forEach(function (element) {
        cov_10c74op6cl.f[36]++;
        var padding = (cov_10c74op6cl.s[203]++, Manipulator.getDataAttribute(element, 'padding-right'));
        cov_10c74op6cl.s[204]++;

        if (typeof padding !== 'undefined') {
          cov_10c74op6cl.b[49][0]++;
          cov_10c74op6cl.s[205]++;
          Manipulator.removeDataAttribute(element, 'padding-right');
          cov_10c74op6cl.s[206]++;
          element.style.paddingRight = padding;
        } else {
          cov_10c74op6cl.b[49][1]++;
        }
      }); // Restore sticky content and navbar-toggler margin

      cov_10c74op6cl.s[207]++;
      Util.makeArray(SelectorEngine.find("" + Selector.STICKY_CONTENT)).forEach(function (element) {
        cov_10c74op6cl.f[37]++;
        var margin = (cov_10c74op6cl.s[208]++, Manipulator.getDataAttribute(element, 'margin-right'));
        cov_10c74op6cl.s[209]++;

        if (typeof margin !== 'undefined') {
          cov_10c74op6cl.b[50][0]++;
          cov_10c74op6cl.s[210]++;
          Manipulator.removeDataAttribute(element, 'margin-right');
          cov_10c74op6cl.s[211]++;
          element.style.marginRight = margin;
        } else {
          cov_10c74op6cl.b[50][1]++;
        }
      }); // Restore body padding

      var padding = (cov_10c74op6cl.s[212]++, Manipulator.getDataAttribute(document.body, 'padding-right'));
      cov_10c74op6cl.s[213]++;

      if (typeof padding !== 'undefined') {
        cov_10c74op6cl.b[51][0]++;
        cov_10c74op6cl.s[214]++;
        Manipulator.removeDataAttribute(document.body, 'padding-right');
        cov_10c74op6cl.s[215]++;
        document.body.style.paddingRight = padding;
      } else {
        cov_10c74op6cl.b[51][1]++;
        cov_10c74op6cl.s[216]++;
        document.body.style.paddingRight = '';
      }
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      cov_10c74op6cl.f[38]++;
      // thx d.walsh
      var scrollDiv = (cov_10c74op6cl.s[217]++, document.createElement('div'));
      cov_10c74op6cl.s[218]++;
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
      cov_10c74op6cl.s[219]++;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = (cov_10c74op6cl.s[220]++, scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth);
      cov_10c74op6cl.s[221]++;
      document.body.removeChild(scrollDiv);
      cov_10c74op6cl.s[222]++;
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      cov_10c74op6cl.f[39]++;
      cov_10c74op6cl.s[223]++;
      return this.each(function () {
        cov_10c74op6cl.f[40]++;
        var data = (cov_10c74op6cl.s[224]++, Data.getData(this, DATA_KEY));

        var _config = (cov_10c74op6cl.s[225]++, _objectSpread({}, Default, Manipulator.getDataAttributes(this), (cov_10c74op6cl.b[53][0]++, typeof config === 'object') && (cov_10c74op6cl.b[53][1]++, config) ? (cov_10c74op6cl.b[52][0]++, config) : (cov_10c74op6cl.b[52][1]++, {})));

        cov_10c74op6cl.s[226]++;

        if (!data) {
          cov_10c74op6cl.b[54][0]++;
          cov_10c74op6cl.s[227]++;
          data = new Modal(this, _config);
        } else {
          cov_10c74op6cl.b[54][1]++;
        }

        cov_10c74op6cl.s[228]++;

        if (typeof config === 'string') {
          cov_10c74op6cl.b[55][0]++;
          cov_10c74op6cl.s[229]++;

          if (typeof data[config] === 'undefined') {
            cov_10c74op6cl.b[56][0]++;
            cov_10c74op6cl.s[230]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_10c74op6cl.b[56][1]++;
          }

          cov_10c74op6cl.s[231]++;
          data[config](relatedTarget);
        } else {
          cov_10c74op6cl.b[55][1]++;
          cov_10c74op6cl.s[232]++;

          if (_config.show) {
            cov_10c74op6cl.b[57][0]++;
            cov_10c74op6cl.s[233]++;
            data.show(relatedTarget);
          } else {
            cov_10c74op6cl.b[57][1]++;
          }
        }
      });
    };

    Modal._getInstance = function _getInstance(element) {
      cov_10c74op6cl.f[41]++;
      cov_10c74op6cl.s[234]++;
      return Data.getData(element, DATA_KEY);
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


  cov_10c74op6cl.s[235]++;
  EventHandler.on(document, Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var _this10 = this;

    cov_10c74op6cl.f[42]++;
    var target;
    var selector = (cov_10c74op6cl.s[236]++, Util.getSelectorFromElement(this));
    cov_10c74op6cl.s[237]++;

    if (selector) {
      cov_10c74op6cl.b[58][0]++;
      cov_10c74op6cl.s[238]++;
      target = SelectorEngine.findOne(selector);
    } else {
      cov_10c74op6cl.b[58][1]++;
    }

    var config = (cov_10c74op6cl.s[239]++, Data.getData(target, DATA_KEY) ? (cov_10c74op6cl.b[59][0]++, 'toggle') : (cov_10c74op6cl.b[59][1]++, _objectSpread({}, Manipulator.getDataAttributes(target), Manipulator.getDataAttributes(this))));
    cov_10c74op6cl.s[240]++;

    if ((cov_10c74op6cl.b[61][0]++, this.tagName === 'A') || (cov_10c74op6cl.b[61][1]++, this.tagName === 'AREA')) {
      cov_10c74op6cl.b[60][0]++;
      cov_10c74op6cl.s[241]++;
      event.preventDefault();
    } else {
      cov_10c74op6cl.b[60][1]++;
    }

    cov_10c74op6cl.s[242]++;
    EventHandler.one(target, Event.SHOW, function (showEvent) {
      cov_10c74op6cl.f[43]++;
      cov_10c74op6cl.s[243]++;

      if (showEvent.defaultPrevented) {
        cov_10c74op6cl.b[62][0]++;
        cov_10c74op6cl.s[244]++;
        // only register focus restorer if modal will actually get shown
        return;
      } else {
        cov_10c74op6cl.b[62][1]++;
      }

      cov_10c74op6cl.s[245]++;
      EventHandler.one(target, Event.HIDDEN, function () {
        cov_10c74op6cl.f[44]++;
        cov_10c74op6cl.s[246]++;

        if (Util.isVisible(_this10)) {
          cov_10c74op6cl.b[63][0]++;
          cov_10c74op6cl.s[247]++;

          _this10.focus();
        } else {
          cov_10c74op6cl.b[63][1]++;
        }
      });
    });
    var data = (cov_10c74op6cl.s[248]++, Data.getData(target, DATA_KEY));
    cov_10c74op6cl.s[249]++;

    if (!data) {
      cov_10c74op6cl.b[64][0]++;
      cov_10c74op6cl.s[250]++;
      data = new Modal(target, config);
    } else {
      cov_10c74op6cl.b[64][1]++;
    }

    cov_10c74op6cl.s[251]++;
    data.show(this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  var $ = (cov_10c74op6cl.s[252]++, Util.jQuery);
  cov_10c74op6cl.s[253]++;

  if (typeof $ !== 'undefined') {
    cov_10c74op6cl.b[65][0]++;
    var JQUERY_NO_CONFLICT = (cov_10c74op6cl.s[254]++, $.fn[NAME]);
    cov_10c74op6cl.s[255]++;
    $.fn[NAME] = Modal._jQueryInterface;
    cov_10c74op6cl.s[256]++;
    $.fn[NAME].Constructor = Modal;
    cov_10c74op6cl.s[257]++;

    $.fn[NAME].noConflict = function () {
      cov_10c74op6cl.f[45]++;
      cov_10c74op6cl.s[258]++;
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      cov_10c74op6cl.s[259]++;
      return Modal._jQueryInterface;
    };
  } else {
    cov_10c74op6cl.b[65][1]++;
  }

  return Modal;

}));
//# sourceMappingURL=modal.js.map

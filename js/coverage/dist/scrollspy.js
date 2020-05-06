/*!
  * Bootstrap scrollspy.js v4.4.1-1 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2020 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global = global || self, global.ScrollSpy = factory(global.jQuery, global.Util));
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

  var cov_zabnfcqf9 = function () {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/scrollspy.js";
    var hash = "d168b9f4f489876a44d3f43d1d4758ac7cdfebc5";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/scrollspy.js",
      statementMap: {
        "0": {
          start: {
            line: 17,
            column: 27
          },
          end: {
            line: 17,
            column: 38
          }
        },
        "1": {
          start: {
            line: 18,
            column: 27
          },
          end: {
            line: 18,
            column: 34
          }
        },
        "2": {
          start: {
            line: 19,
            column: 27
          },
          end: {
            line: 19,
            column: 41
          }
        },
        "3": {
          start: {
            line: 20,
            column: 27
          },
          end: {
            line: 20,
            column: 41
          }
        },
        "4": {
          start: {
            line: 21,
            column: 27
          },
          end: {
            line: 21,
            column: 38
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
            line: 28,
            column: 1
          }
        },
        "7": {
          start: {
            line: 30,
            column: 20
          },
          end: {
            line: 34,
            column: 1
          }
        },
        "8": {
          start: {
            line: 36,
            column: 14
          },
          end: {
            line: 40,
            column: 1
          }
        },
        "9": {
          start: {
            line: 42,
            column: 18
          },
          end: {
            line: 46,
            column: 1
          }
        },
        "10": {
          start: {
            line: 48,
            column: 17
          },
          end: {
            line: 58,
            column: 1
          }
        },
        "11": {
          start: {
            line: 60,
            column: 21
          },
          end: {
            line: 63,
            column: 1
          }
        },
        "12": {
          start: {
            line: 73,
            column: 4
          },
          end: {
            line: 73,
            column: 33
          }
        },
        "13": {
          start: {
            line: 74,
            column: 4
          },
          end: {
            line: 74,
            column: 71
          }
        },
        "14": {
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 75,
            column: 49
          }
        },
        "15": {
          start: {
            line: 76,
            column: 4
          },
          end: {
            line: 78,
            column: 77
          }
        },
        "16": {
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 79,
            column: 28
          }
        },
        "17": {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 80,
            column: 28
          }
        },
        "18": {
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 81,
            column: 30
          }
        },
        "19": {
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 82,
            column: 27
          }
        },
        "20": {
          start: {
            line: 84,
            column: 4
          },
          end: {
            line: 84,
            column: 76
          }
        },
        "21": {
          start: {
            line: 84,
            column: 55
          },
          end: {
            line: 84,
            column: 75
          }
        },
        "22": {
          start: {
            line: 86,
            column: 4
          },
          end: {
            line: 86,
            column: 18
          }
        },
        "23": {
          start: {
            line: 87,
            column: 4
          },
          end: {
            line: 87,
            column: 19
          }
        },
        "24": {
          start: {
            line: 93,
            column: 4
          },
          end: {
            line: 93,
            column: 18
          }
        },
        "25": {
          start: {
            line: 97,
            column: 4
          },
          end: {
            line: 97,
            column: 18
          }
        },
        "26": {
          start: {
            line: 103,
            column: 23
          },
          end: {
            line: 104,
            column: 51
          }
        },
        "27": {
          start: {
            line: 106,
            column: 25
          },
          end: {
            line: 107,
            column: 40
          }
        },
        "28": {
          start: {
            line: 109,
            column: 23
          },
          end: {
            line: 110,
            column: 32
          }
        },
        "29": {
          start: {
            line: 112,
            column: 4
          },
          end: {
            line: 112,
            column: 22
          }
        },
        "30": {
          start: {
            line: 113,
            column: 4
          },
          end: {
            line: 113,
            column: 22
          }
        },
        "31": {
          start: {
            line: 115,
            column: 4
          },
          end: {
            line: 115,
            column: 48
          }
        },
        "32": {
          start: {
            line: 117,
            column: 20
          },
          end: {
            line: 117,
            column: 76
          }
        },
        "33": {
          start: {
            line: 119,
            column: 4
          },
          end: {
            line: 145,
            column: 8
          }
        },
        "34": {
          start: {
            line: 122,
            column: 31
          },
          end: {
            line: 122,
            column: 67
          }
        },
        "35": {
          start: {
            line: 124,
            column: 8
          },
          end: {
            line: 126,
            column: 9
          }
        },
        "36": {
          start: {
            line: 125,
            column: 10
          },
          end: {
            line: 125,
            column: 57
          }
        },
        "37": {
          start: {
            line: 128,
            column: 8
          },
          end: {
            line: 137,
            column: 9
          }
        },
        "38": {
          start: {
            line: 129,
            column: 28
          },
          end: {
            line: 129,
            column: 58
          }
        },
        "39": {
          start: {
            line: 130,
            column: 10
          },
          end: {
            line: 136,
            column: 11
          }
        },
        "40": {
          start: {
            line: 132,
            column: 12
          },
          end: {
            line: 135,
            column: 13
          }
        },
        "41": {
          start: {
            line: 138,
            column: 8
          },
          end: {
            line: 138,
            column: 19
          }
        },
        "42": {
          start: {
            line: 140,
            column: 24
          },
          end: {
            line: 140,
            column: 28
          }
        },
        "43": {
          start: {
            line: 141,
            column: 22
          },
          end: {
            line: 141,
            column: 33
          }
        },
        "44": {
          start: {
            line: 143,
            column: 8
          },
          end: {
            line: 143,
            column: 35
          }
        },
        "45": {
          start: {
            line: 144,
            column: 8
          },
          end: {
            line: 144,
            column: 35
          }
        },
        "46": {
          start: {
            line: 149,
            column: 4
          },
          end: {
            line: 149,
            column: 41
          }
        },
        "47": {
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 150,
            column: 41
          }
        },
        "48": {
          start: {
            line: 152,
            column: 4
          },
          end: {
            line: 152,
            column: 30
          }
        },
        "49": {
          start: {
            line: 153,
            column: 4
          },
          end: {
            line: 153,
            column: 30
          }
        },
        "50": {
          start: {
            line: 154,
            column: 4
          },
          end: {
            line: 154,
            column: 30
          }
        },
        "51": {
          start: {
            line: 155,
            column: 4
          },
          end: {
            line: 155,
            column: 30
          }
        },
        "52": {
          start: {
            line: 156,
            column: 4
          },
          end: {
            line: 156,
            column: 30
          }
        },
        "53": {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 157,
            column: 30
          }
        },
        "54": {
          start: {
            line: 158,
            column: 4
          },
          end: {
            line: 158,
            column: 30
          }
        },
        "55": {
          start: {
            line: 159,
            column: 4
          },
          end: {
            line: 159,
            column: 30
          }
        },
        "56": {
          start: {
            line: 165,
            column: 4
          },
          end: {
            line: 168,
            column: 5
          }
        },
        "57": {
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 177,
            column: 5
          }
        },
        "58": {
          start: {
            line: 171,
            column: 15
          },
          end: {
            line: 171,
            column: 42
          }
        },
        "59": {
          start: {
            line: 172,
            column: 6
          },
          end: {
            line: 175,
            column: 7
          }
        },
        "60": {
          start: {
            line: 173,
            column: 8
          },
          end: {
            line: 173,
            column: 30
          }
        },
        "61": {
          start: {
            line: 174,
            column: 8
          },
          end: {
            line: 174,
            column: 39
          }
        },
        "62": {
          start: {
            line: 176,
            column: 6
          },
          end: {
            line: 176,
            column: 30
          }
        },
        "63": {
          start: {
            line: 179,
            column: 4
          },
          end: {
            line: 179,
            column: 51
          }
        },
        "64": {
          start: {
            line: 181,
            column: 4
          },
          end: {
            line: 181,
            column: 17
          }
        },
        "65": {
          start: {
            line: 185,
            column: 4
          },
          end: {
            line: 186,
            column: 71
          }
        },
        "66": {
          start: {
            line: 190,
            column: 4
          },
          end: {
            line: 193,
            column: 5
          }
        },
        "67": {
          start: {
            line: 197,
            column: 4
          },
          end: {
            line: 198,
            column: 79
          }
        },
        "68": {
          start: {
            line: 202,
            column: 25
          },
          end: {
            line: 202,
            column: 67
          }
        },
        "69": {
          start: {
            line: 203,
            column: 25
          },
          end: {
            line: 203,
            column: 48
          }
        },
        "70": {
          start: {
            line: 204,
            column: 25
          },
          end: {
            line: 206,
            column: 29
          }
        },
        "71": {
          start: {
            line: 208,
            column: 4
          },
          end: {
            line: 210,
            column: 5
          }
        },
        "72": {
          start: {
            line: 209,
            column: 6
          },
          end: {
            line: 209,
            column: 20
          }
        },
        "73": {
          start: {
            line: 212,
            column: 4
          },
          end: {
            line: 219,
            column: 5
          }
        },
        "74": {
          start: {
            line: 213,
            column: 21
          },
          end: {
            line: 213,
            column: 60
          }
        },
        "75": {
          start: {
            line: 215,
            column: 6
          },
          end: {
            line: 217,
            column: 7
          }
        },
        "76": {
          start: {
            line: 216,
            column: 8
          },
          end: {
            line: 216,
            column: 30
          }
        },
        "77": {
          start: {
            line: 218,
            column: 6
          },
          end: {
            line: 218,
            column: 12
          }
        },
        "78": {
          start: {
            line: 221,
            column: 4
          },
          end: {
            line: 225,
            column: 5
          }
        },
        "79": {
          start: {
            line: 222,
            column: 6
          },
          end: {
            line: 222,
            column: 31
          }
        },
        "80": {
          start: {
            line: 223,
            column: 6
          },
          end: {
            line: 223,
            column: 19
          }
        },
        "81": {
          start: {
            line: 224,
            column: 6
          },
          end: {
            line: 224,
            column: 12
          }
        },
        "82": {
          start: {
            line: 227,
            column: 25
          },
          end: {
            line: 227,
            column: 45
          }
        },
        "83": {
          start: {
            line: 228,
            column: 4
          },
          end: {
            line: 237,
            column: 5
          }
        },
        "84": {
          start: {
            line: 228,
            column: 17
          },
          end: {
            line: 228,
            column: 29
          }
        },
        "85": {
          start: {
            line: 229,
            column: 29
          },
          end: {
            line: 232,
            column: 47
          }
        },
        "86": {
          start: {
            line: 234,
            column: 6
          },
          end: {
            line: 236,
            column: 7
          }
        },
        "87": {
          start: {
            line: 235,
            column: 8
          },
          end: {
            line: 235,
            column: 40
          }
        },
        "88": {
          start: {
            line: 241,
            column: 4
          },
          end: {
            line: 241,
            column: 31
          }
        },
        "89": {
          start: {
            line: 243,
            column: 4
          },
          end: {
            line: 243,
            column: 17
          }
        },
        "90": {
          start: {
            line: 245,
            column: 20
          },
          end: {
            line: 247,
            column: 94
          }
        },
        "91": {
          start: {
            line: 247,
            column: 25
          },
          end: {
            line: 247,
            column: 93
          }
        },
        "92": {
          start: {
            line: 249,
            column: 18
          },
          end: {
            line: 249,
            column: 80
          }
        },
        "93": {
          start: {
            line: 251,
            column: 4
          },
          end: {
            line: 262,
            column: 5
          }
        },
        "94": {
          start: {
            line: 252,
            column: 6
          },
          end: {
            line: 252,
            column: 96
          }
        },
        "95": {
          start: {
            line: 253,
            column: 6
          },
          end: {
            line: 253,
            column: 38
          }
        },
        "96": {
          start: {
            line: 256,
            column: 6
          },
          end: {
            line: 256,
            column: 38
          }
        },
        "97": {
          start: {
            line: 259,
            column: 6
          },
          end: {
            line: 259,
            column: 125
          }
        },
        "98": {
          start: {
            line: 261,
            column: 6
          },
          end: {
            line: 261,
            column: 125
          }
        },
        "99": {
          start: {
            line: 264,
            column: 4
          },
          end: {
            line: 266,
            column: 6
          }
        },
        "100": {
          start: {
            line: 270,
            column: 4
          },
          end: {
            line: 272,
            column: 65
          }
        },
        "101": {
          start: {
            line: 271,
            column: 24
          },
          end: {
            line: 271,
            column: 65
          }
        },
        "102": {
          start: {
            line: 272,
            column: 25
          },
          end: {
            line: 272,
            column: 64
          }
        },
        "103": {
          start: {
            line: 278,
            column: 4
          },
          end: {
            line: 293,
            column: 6
          }
        },
        "104": {
          start: {
            line: 279,
            column: 17
          },
          end: {
            line: 279,
            column: 39
          }
        },
        "105": {
          start: {
            line: 280,
            column: 22
          },
          end: {
            line: 280,
            column: 58
          }
        },
        "106": {
          start: {
            line: 282,
            column: 6
          },
          end: {
            line: 285,
            column: 7
          }
        },
        "107": {
          start: {
            line: 283,
            column: 8
          },
          end: {
            line: 283,
            column: 43
          }
        },
        "108": {
          start: {
            line: 284,
            column: 8
          },
          end: {
            line: 284,
            column: 36
          }
        },
        "109": {
          start: {
            line: 287,
            column: 6
          },
          end: {
            line: 292,
            column: 7
          }
        },
        "110": {
          start: {
            line: 288,
            column: 8
          },
          end: {
            line: 290,
            column: 9
          }
        },
        "111": {
          start: {
            line: 289,
            column: 10
          },
          end: {
            line: 289,
            column: 60
          }
        },
        "112": {
          start: {
            line: 291,
            column: 8
          },
          end: {
            line: 291,
            column: 22
          }
        },
        "113": {
          start: {
            line: 303,
            column: 0
          },
          end: {
            line: 311,
            column: 2
          }
        },
        "114": {
          start: {
            line: 304,
            column: 21
          },
          end: {
            line: 304,
            column: 80
          }
        },
        "115": {
          start: {
            line: 305,
            column: 27
          },
          end: {
            line: 305,
            column: 44
          }
        },
        "116": {
          start: {
            line: 307,
            column: 2
          },
          end: {
            line: 310,
            column: 3
          }
        },
        "117": {
          start: {
            line: 307,
            column: 15
          },
          end: {
            line: 307,
            column: 31
          }
        },
        "118": {
          start: {
            line: 308,
            column: 17
          },
          end: {
            line: 308,
            column: 33
          }
        },
        "119": {
          start: {
            line: 309,
            column: 4
          },
          end: {
            line: 309,
            column: 54
          }
        },
        "120": {
          start: {
            line: 319,
            column: 0
          },
          end: {
            line: 319,
            column: 39
          }
        },
        "121": {
          start: {
            line: 320,
            column: 0
          },
          end: {
            line: 320,
            column: 34
          }
        },
        "122": {
          start: {
            line: 321,
            column: 0
          },
          end: {
            line: 324,
            column: 1
          }
        },
        "123": {
          start: {
            line: 322,
            column: 2
          },
          end: {
            line: 322,
            column: 33
          }
        },
        "124": {
          start: {
            line: 323,
            column: 2
          },
          end: {
            line: 323,
            column: 35
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 72,
              column: 2
            },
            end: {
              line: 72,
              column: 3
            }
          },
          loc: {
            start: {
              line: 72,
              column: 31
            },
            end: {
              line: 88,
              column: 3
            }
          },
          line: 72
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 84,
              column: 44
            },
            end: {
              line: 84,
              column: 45
            }
          },
          loc: {
            start: {
              line: 84,
              column: 55
            },
            end: {
              line: 84,
              column: 75
            }
          },
          line: 84
        },
        "2": {
          name: "(anonymous_2)",
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
              column: 23
            },
            end: {
              line: 94,
              column: 3
            }
          },
          line: 92
        },
        "3": {
          name: "(anonymous_3)",
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
              column: 23
            },
            end: {
              line: 98,
              column: 3
            }
          },
          line: 96
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 102,
              column: 2
            },
            end: {
              line: 102,
              column: 3
            }
          },
          loc: {
            start: {
              line: 102,
              column: 12
            },
            end: {
              line: 146,
              column: 3
            }
          },
          line: 102
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 120,
              column: 11
            },
            end: {
              line: 120,
              column: 12
            }
          },
          loc: {
            start: {
              line: 120,
              column: 24
            },
            end: {
              line: 139,
              column: 7
            }
          },
          line: 120
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 140,
              column: 14
            },
            end: {
              line: 140,
              column: 15
            }
          },
          loc: {
            start: {
              line: 140,
              column: 24
            },
            end: {
              line: 140,
              column: 28
            }
          },
          line: 140
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 141,
              column: 12
            },
            end: {
              line: 141,
              column: 13
            }
          },
          loc: {
            start: {
              line: 141,
              column: 22
            },
            end: {
              line: 141,
              column: 33
            }
          },
          line: 141
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 142,
              column: 15
            },
            end: {
              line: 142,
              column: 16
            }
          },
          loc: {
            start: {
              line: 142,
              column: 25
            },
            end: {
              line: 145,
              column: 7
            }
          },
          line: 142
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 148,
              column: 2
            },
            end: {
              line: 148,
              column: 3
            }
          },
          loc: {
            start: {
              line: 148,
              column: 12
            },
            end: {
              line: 160,
              column: 3
            }
          },
          line: 148
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 164,
              column: 2
            },
            end: {
              line: 164,
              column: 3
            }
          },
          loc: {
            start: {
              line: 164,
              column: 21
            },
            end: {
              line: 182,
              column: 3
            }
          },
          line: 164
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 184,
              column: 2
            },
            end: {
              line: 184,
              column: 3
            }
          },
          loc: {
            start: {
              line: 184,
              column: 18
            },
            end: {
              line: 187,
              column: 3
            }
          },
          line: 184
        },
        "12": {
          name: "(anonymous_12)",
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
              column: 21
            },
            end: {
              line: 194,
              column: 3
            }
          },
          line: 189
        },
        "13": {
          name: "(anonymous_13)",
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
              column: 21
            },
            end: {
              line: 199,
              column: 3
            }
          },
          line: 196
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 201,
              column: 2
            },
            end: {
              line: 201,
              column: 3
            }
          },
          loc: {
            start: {
              line: 201,
              column: 13
            },
            end: {
              line: 238,
              column: 3
            }
          },
          line: 201
        },
        "15": {
          name: "(anonymous_15)",
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
              column: 20
            },
            end: {
              line: 267,
              column: 3
            }
          },
          line: 240
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 247,
              column: 11
            },
            end: {
              line: 247,
              column: 12
            }
          },
          loc: {
            start: {
              line: 247,
              column: 25
            },
            end: {
              line: 247,
              column: 93
            }
          },
          line: 247
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 269,
              column: 2
            },
            end: {
              line: 269,
              column: 3
            }
          },
          loc: {
            start: {
              line: 269,
              column: 11
            },
            end: {
              line: 273,
              column: 3
            }
          },
          line: 269
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 271,
              column: 14
            },
            end: {
              line: 271,
              column: 15
            }
          },
          loc: {
            start: {
              line: 271,
              column: 24
            },
            end: {
              line: 271,
              column: 65
            }
          },
          line: 271
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 272,
              column: 15
            },
            end: {
              line: 272,
              column: 16
            }
          },
          loc: {
            start: {
              line: 272,
              column: 25
            },
            end: {
              line: 272,
              column: 64
            }
          },
          line: 272
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 277,
              column: 2
            },
            end: {
              line: 277,
              column: 3
            }
          },
          loc: {
            start: {
              line: 277,
              column: 34
            },
            end: {
              line: 294,
              column: 3
            }
          },
          line: 277
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 278,
              column: 21
            },
            end: {
              line: 278,
              column: 22
            }
          },
          loc: {
            start: {
              line: 278,
              column: 33
            },
            end: {
              line: 293,
              column: 5
            }
          },
          line: 278
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 303,
              column: 34
            },
            end: {
              line: 303,
              column: 35
            }
          },
          loc: {
            start: {
              line: 303,
              column: 40
            },
            end: {
              line: 311,
              column: 1
            }
          },
          line: 303
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 321,
              column: 24
            },
            end: {
              line: 321,
              column: 25
            }
          },
          loc: {
            start: {
              line: 321,
              column: 30
            },
            end: {
              line: 324,
              column: 1
            }
          },
          line: 321
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 74,
              column: 26
            },
            end: {
              line: 74,
              column: 71
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 74,
              column: 55
            },
            end: {
              line: 74,
              column: 61
            }
          }, {
            start: {
              line: 74,
              column: 64
            },
            end: {
              line: 74,
              column: 71
            }
          }],
          line: 74
        },
        "1": {
          loc: {
            start: {
              line: 103,
              column: 23
            },
            end: {
              line: 104,
              column: 51
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 104,
              column: 8
            },
            end: {
              line: 104,
              column: 27
            }
          }, {
            start: {
              line: 104,
              column: 30
            },
            end: {
              line: 104,
              column: 51
            }
          }],
          line: 103
        },
        "2": {
          loc: {
            start: {
              line: 106,
              column: 25
            },
            end: {
              line: 107,
              column: 40
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 107,
              column: 8
            },
            end: {
              line: 107,
              column: 18
            }
          }, {
            start: {
              line: 107,
              column: 21
            },
            end: {
              line: 107,
              column: 40
            }
          }],
          line: 106
        },
        "3": {
          loc: {
            start: {
              line: 109,
              column: 23
            },
            end: {
              line: 110,
              column: 32
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 110,
              column: 8
            },
            end: {
              line: 110,
              column: 28
            }
          }, {
            start: {
              line: 110,
              column: 31
            },
            end: {
              line: 110,
              column: 32
            }
          }],
          line: 109
        },
        "4": {
          loc: {
            start: {
              line: 124,
              column: 8
            },
            end: {
              line: 126,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 124,
              column: 8
            },
            end: {
              line: 126,
              column: 9
            }
          }, {
            start: {
              line: 124,
              column: 8
            },
            end: {
              line: 126,
              column: 9
            }
          }],
          line: 124
        },
        "5": {
          loc: {
            start: {
              line: 128,
              column: 8
            },
            end: {
              line: 137,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 128,
              column: 8
            },
            end: {
              line: 137,
              column: 9
            }
          }, {
            start: {
              line: 128,
              column: 8
            },
            end: {
              line: 137,
              column: 9
            }
          }],
          line: 128
        },
        "6": {
          loc: {
            start: {
              line: 130,
              column: 10
            },
            end: {
              line: 136,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 130,
              column: 10
            },
            end: {
              line: 136,
              column: 11
            }
          }, {
            start: {
              line: 130,
              column: 10
            },
            end: {
              line: 136,
              column: 11
            }
          }],
          line: 130
        },
        "7": {
          loc: {
            start: {
              line: 130,
              column: 14
            },
            end: {
              line: 130,
              column: 49
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 130,
              column: 14
            },
            end: {
              line: 130,
              column: 29
            }
          }, {
            start: {
              line: 130,
              column: 33
            },
            end: {
              line: 130,
              column: 49
            }
          }],
          line: 130
        },
        "8": {
          loc: {
            start: {
              line: 167,
              column: 9
            },
            end: {
              line: 167,
              column: 59
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 167,
              column: 48
            },
            end: {
              line: 167,
              column: 54
            }
          }, {
            start: {
              line: 167,
              column: 57
            },
            end: {
              line: 167,
              column: 59
            }
          }],
          line: 167
        },
        "9": {
          loc: {
            start: {
              line: 167,
              column: 9
            },
            end: {
              line: 167,
              column: 45
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 167,
              column: 9
            },
            end: {
              line: 167,
              column: 35
            }
          }, {
            start: {
              line: 167,
              column: 39
            },
            end: {
              line: 167,
              column: 45
            }
          }],
          line: 167
        },
        "10": {
          loc: {
            start: {
              line: 170,
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
              line: 170,
              column: 4
            },
            end: {
              line: 177,
              column: 5
            }
          }, {
            start: {
              line: 170,
              column: 4
            },
            end: {
              line: 177,
              column: 5
            }
          }],
          line: 170
        },
        "11": {
          loc: {
            start: {
              line: 172,
              column: 6
            },
            end: {
              line: 175,
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
              line: 175,
              column: 7
            }
          }, {
            start: {
              line: 172,
              column: 6
            },
            end: {
              line: 175,
              column: 7
            }
          }],
          line: 172
        },
        "12": {
          loc: {
            start: {
              line: 185,
              column: 11
            },
            end: {
              line: 186,
              column: 71
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 186,
              column: 8
            },
            end: {
              line: 186,
              column: 39
            }
          }, {
            start: {
              line: 186,
              column: 42
            },
            end: {
              line: 186,
              column: 71
            }
          }],
          line: 185
        },
        "13": {
          loc: {
            start: {
              line: 190,
              column: 11
            },
            end: {
              line: 193,
              column: 5
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 190,
              column: 11
            },
            end: {
              line: 190,
              column: 43
            }
          }, {
            start: {
              line: 190,
              column: 47
            },
            end: {
              line: 193,
              column: 5
            }
          }],
          line: 190
        },
        "14": {
          loc: {
            start: {
              line: 197,
              column: 11
            },
            end: {
              line: 198,
              column: 79
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 198,
              column: 8
            },
            end: {
              line: 198,
              column: 26
            }
          }, {
            start: {
              line: 198,
              column: 29
            },
            end: {
              line: 198,
              column: 79
            }
          }],
          line: 197
        },
        "15": {
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
        "16": {
          loc: {
            start: {
              line: 212,
              column: 4
            },
            end: {
              line: 219,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 212,
              column: 4
            },
            end: {
              line: 219,
              column: 5
            }
          }, {
            start: {
              line: 212,
              column: 4
            },
            end: {
              line: 219,
              column: 5
            }
          }],
          line: 212
        },
        "17": {
          loc: {
            start: {
              line: 215,
              column: 6
            },
            end: {
              line: 217,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 215,
              column: 6
            },
            end: {
              line: 217,
              column: 7
            }
          }, {
            start: {
              line: 215,
              column: 6
            },
            end: {
              line: 217,
              column: 7
            }
          }],
          line: 215
        },
        "18": {
          loc: {
            start: {
              line: 221,
              column: 4
            },
            end: {
              line: 225,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 221,
              column: 4
            },
            end: {
              line: 225,
              column: 5
            }
          }, {
            start: {
              line: 221,
              column: 4
            },
            end: {
              line: 225,
              column: 5
            }
          }],
          line: 221
        },
        "19": {
          loc: {
            start: {
              line: 221,
              column: 8
            },
            end: {
              line: 221,
              column: 82
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 221,
              column: 8
            },
            end: {
              line: 221,
              column: 26
            }
          }, {
            start: {
              line: 221,
              column: 30
            },
            end: {
              line: 221,
              column: 58
            }
          }, {
            start: {
              line: 221,
              column: 62
            },
            end: {
              line: 221,
              column: 82
            }
          }],
          line: 221
        },
        "20": {
          loc: {
            start: {
              line: 229,
              column: 29
            },
            end: {
              line: 232,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 229,
              column: 29
            },
            end: {
              line: 229,
              column: 68
            }
          }, {
            start: {
              line: 230,
              column: 10
            },
            end: {
              line: 230,
              column: 39
            }
          }, {
            start: {
              line: 231,
              column: 11
            },
            end: {
              line: 231,
              column: 54
            }
          }, {
            start: {
              line: 232,
              column: 14
            },
            end: {
              line: 232,
              column: 46
            }
          }],
          line: 229
        },
        "21": {
          loc: {
            start: {
              line: 234,
              column: 6
            },
            end: {
              line: 236,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 234,
              column: 6
            },
            end: {
              line: 236,
              column: 7
            }
          }, {
            start: {
              line: 234,
              column: 6
            },
            end: {
              line: 236,
              column: 7
            }
          }],
          line: 234
        },
        "22": {
          loc: {
            start: {
              line: 251,
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
              line: 251,
              column: 4
            },
            end: {
              line: 262,
              column: 5
            }
          }, {
            start: {
              line: 251,
              column: 4
            },
            end: {
              line: 262,
              column: 5
            }
          }],
          line: 251
        },
        "23": {
          loc: {
            start: {
              line: 280,
              column: 22
            },
            end: {
              line: 280,
              column: 58
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 280,
              column: 22
            },
            end: {
              line: 280,
              column: 48
            }
          }, {
            start: {
              line: 280,
              column: 52
            },
            end: {
              line: 280,
              column: 58
            }
          }],
          line: 280
        },
        "24": {
          loc: {
            start: {
              line: 282,
              column: 6
            },
            end: {
              line: 285,
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
              line: 285,
              column: 7
            }
          }, {
            start: {
              line: 282,
              column: 6
            },
            end: {
              line: 285,
              column: 7
            }
          }],
          line: 282
        },
        "25": {
          loc: {
            start: {
              line: 287,
              column: 6
            },
            end: {
              line: 292,
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
              line: 292,
              column: 7
            }
          }, {
            start: {
              line: 287,
              column: 6
            },
            end: {
              line: 292,
              column: 7
            }
          }],
          line: 287
        },
        "26": {
          loc: {
            start: {
              line: 288,
              column: 8
            },
            end: {
              line: 290,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 288,
              column: 8
            },
            end: {
              line: 290,
              column: 9
            }
          }, {
            start: {
              line: 288,
              column: 8
            },
            end: {
              line: 290,
              column: 9
            }
          }],
          line: 288
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
        "124": 0
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
        "23": 0
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
        "19": [0, 0, 0],
        "20": [0, 0, 0, 0],
        "21": [0, 0],
        "22": [0, 0],
        "23": [0, 0],
        "24": [0, 0],
        "25": [0, 0],
        "26": [0, 0]
      },
      _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
      hash: "d168b9f4f489876a44d3f43d1d4758ac7cdfebc5"
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

  var NAME = (cov_zabnfcqf9.s[0]++, 'scrollspy');
  var VERSION = (cov_zabnfcqf9.s[1]++, '4.4.1');
  var DATA_KEY = (cov_zabnfcqf9.s[2]++, 'bs.scrollspy');
  var EVENT_KEY = (cov_zabnfcqf9.s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_zabnfcqf9.s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_zabnfcqf9.s[5]++, $.fn[NAME]);
  var Default = (cov_zabnfcqf9.s[6]++, {
    offset: 10,
    method: 'auto',
    target: ''
  });
  var DefaultType = (cov_zabnfcqf9.s[7]++, {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  });
  var Event = (cov_zabnfcqf9.s[8]++, {
    ACTIVATE: "activate" + EVENT_KEY,
    SCROLL: "scroll" + EVENT_KEY,
    LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY
  });
  var ClassName = (cov_zabnfcqf9.s[9]++, {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
  });
  var Selector = (cov_zabnfcqf9.s[10]++, {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    NAV_ITEMS: '.nav-item',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  });
  var OffsetMethod = (cov_zabnfcqf9.s[11]++, {
    OFFSET: 'offset',
    POSITION: 'position'
  });
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = /*#__PURE__*/function () {
    function ScrollSpy(element, config) {
      var _this = this;

      cov_zabnfcqf9.f[0]++;
      cov_zabnfcqf9.s[12]++;
      this._element = element;
      cov_zabnfcqf9.s[13]++;
      this._scrollElement = element.tagName === 'BODY' ? (cov_zabnfcqf9.b[0][0]++, window) : (cov_zabnfcqf9.b[0][1]++, element);
      cov_zabnfcqf9.s[14]++;
      this._config = this._getConfig(config);
      cov_zabnfcqf9.s[15]++;
      this._selector = this._config.target + " " + Selector.NAV_LINKS + "," + (this._config.target + " " + Selector.LIST_ITEMS + ",") + (this._config.target + " " + Selector.DROPDOWN_ITEMS);
      cov_zabnfcqf9.s[16]++;
      this._offsets = [];
      cov_zabnfcqf9.s[17]++;
      this._targets = [];
      cov_zabnfcqf9.s[18]++;
      this._activeTarget = null;
      cov_zabnfcqf9.s[19]++;
      this._scrollHeight = 0;
      cov_zabnfcqf9.s[20]++;
      $(this._scrollElement).on(Event.SCROLL, function (event) {
        cov_zabnfcqf9.f[1]++;
        cov_zabnfcqf9.s[21]++;
        return _this._process(event);
      });
      cov_zabnfcqf9.s[22]++;
      this.refresh();
      cov_zabnfcqf9.s[23]++;

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;

      cov_zabnfcqf9.f[4]++;
      var autoMethod = (cov_zabnfcqf9.s[26]++, this._scrollElement === this._scrollElement.window ? (cov_zabnfcqf9.b[1][0]++, OffsetMethod.OFFSET) : (cov_zabnfcqf9.b[1][1]++, OffsetMethod.POSITION));
      var offsetMethod = (cov_zabnfcqf9.s[27]++, this._config.method === 'auto' ? (cov_zabnfcqf9.b[2][0]++, autoMethod) : (cov_zabnfcqf9.b[2][1]++, this._config.method));
      var offsetBase = (cov_zabnfcqf9.s[28]++, offsetMethod === OffsetMethod.POSITION ? (cov_zabnfcqf9.b[3][0]++, this._getScrollTop()) : (cov_zabnfcqf9.b[3][1]++, 0));
      cov_zabnfcqf9.s[29]++;
      this._offsets = [];
      cov_zabnfcqf9.s[30]++;
      this._targets = [];
      cov_zabnfcqf9.s[31]++;
      this._scrollHeight = this._getScrollHeight();
      var targets = (cov_zabnfcqf9.s[32]++, [].slice.call(document.querySelectorAll(this._selector)));
      cov_zabnfcqf9.s[33]++;
      targets.map(function (element) {
        cov_zabnfcqf9.f[5]++;
        var target;
        var targetSelector = (cov_zabnfcqf9.s[34]++, Util.getSelectorFromElement(element));
        cov_zabnfcqf9.s[35]++;

        if (targetSelector) {
          cov_zabnfcqf9.b[4][0]++;
          cov_zabnfcqf9.s[36]++;
          target = document.querySelector(targetSelector);
        } else {
          cov_zabnfcqf9.b[4][1]++;
        }

        cov_zabnfcqf9.s[37]++;

        if (target) {
          cov_zabnfcqf9.b[5][0]++;
          var targetBCR = (cov_zabnfcqf9.s[38]++, target.getBoundingClientRect());
          cov_zabnfcqf9.s[39]++;

          if ((cov_zabnfcqf9.b[7][0]++, targetBCR.width) || (cov_zabnfcqf9.b[7][1]++, targetBCR.height)) {
            cov_zabnfcqf9.b[6][0]++;
            cov_zabnfcqf9.s[40]++;
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          } else {
            cov_zabnfcqf9.b[6][1]++;
          }
        } else {
          cov_zabnfcqf9.b[5][1]++;
        }

        cov_zabnfcqf9.s[41]++;
        return null;
      }).filter(function (item) {
        cov_zabnfcqf9.f[6]++;
        cov_zabnfcqf9.s[42]++;
        return item;
      }).sort(function (a, b) {
        cov_zabnfcqf9.f[7]++;
        cov_zabnfcqf9.s[43]++;
        return a[0] - b[0];
      }).forEach(function (item) {
        cov_zabnfcqf9.f[8]++;
        cov_zabnfcqf9.s[44]++;

        _this2._offsets.push(item[0]);

        cov_zabnfcqf9.s[45]++;

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      cov_zabnfcqf9.f[9]++;
      cov_zabnfcqf9.s[46]++;
      $.removeData(this._element, DATA_KEY);
      cov_zabnfcqf9.s[47]++;
      $(this._scrollElement).off(EVENT_KEY);
      cov_zabnfcqf9.s[48]++;
      this._element = null;
      cov_zabnfcqf9.s[49]++;
      this._scrollElement = null;
      cov_zabnfcqf9.s[50]++;
      this._config = null;
      cov_zabnfcqf9.s[51]++;
      this._selector = null;
      cov_zabnfcqf9.s[52]++;
      this._offsets = null;
      cov_zabnfcqf9.s[53]++;
      this._targets = null;
      cov_zabnfcqf9.s[54]++;
      this._activeTarget = null;
      cov_zabnfcqf9.s[55]++;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      cov_zabnfcqf9.f[10]++;
      cov_zabnfcqf9.s[56]++;
      config = _objectSpread2(_objectSpread2({}, Default), (cov_zabnfcqf9.b[9][0]++, typeof config === 'object') && (cov_zabnfcqf9.b[9][1]++, config) ? (cov_zabnfcqf9.b[8][0]++, config) : (cov_zabnfcqf9.b[8][1]++, {}));
      cov_zabnfcqf9.s[57]++;

      if (typeof config.target !== 'string') {
        cov_zabnfcqf9.b[10][0]++;
        var id = (cov_zabnfcqf9.s[58]++, $(config.target).attr('id'));
        cov_zabnfcqf9.s[59]++;

        if (!id) {
          cov_zabnfcqf9.b[11][0]++;
          cov_zabnfcqf9.s[60]++;
          id = Util.getUID(NAME);
          cov_zabnfcqf9.s[61]++;
          $(config.target).attr('id', id);
        } else {
          cov_zabnfcqf9.b[11][1]++;
        }

        cov_zabnfcqf9.s[62]++;
        config.target = "#" + id;
      } else {
        cov_zabnfcqf9.b[10][1]++;
      }

      cov_zabnfcqf9.s[63]++;
      Util.typeCheckConfig(NAME, config, DefaultType);
      cov_zabnfcqf9.s[64]++;
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      cov_zabnfcqf9.f[11]++;
      cov_zabnfcqf9.s[65]++;
      return this._scrollElement === window ? (cov_zabnfcqf9.b[12][0]++, this._scrollElement.pageYOffset) : (cov_zabnfcqf9.b[12][1]++, this._scrollElement.scrollTop);
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      cov_zabnfcqf9.f[12]++;
      cov_zabnfcqf9.s[66]++;
      return (cov_zabnfcqf9.b[13][0]++, this._scrollElement.scrollHeight) || (cov_zabnfcqf9.b[13][1]++, Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      cov_zabnfcqf9.f[13]++;
      cov_zabnfcqf9.s[67]++;
      return this._scrollElement === window ? (cov_zabnfcqf9.b[14][0]++, window.innerHeight) : (cov_zabnfcqf9.b[14][1]++, this._scrollElement.getBoundingClientRect().height);
    };

    _proto._process = function _process() {
      cov_zabnfcqf9.f[14]++;
      var scrollTop = (cov_zabnfcqf9.s[68]++, this._getScrollTop() + this._config.offset);
      var scrollHeight = (cov_zabnfcqf9.s[69]++, this._getScrollHeight());
      var maxScroll = (cov_zabnfcqf9.s[70]++, this._config.offset + scrollHeight - this._getOffsetHeight());
      cov_zabnfcqf9.s[71]++;

      if (this._scrollHeight !== scrollHeight) {
        cov_zabnfcqf9.b[15][0]++;
        cov_zabnfcqf9.s[72]++;
        this.refresh();
      } else {
        cov_zabnfcqf9.b[15][1]++;
      }

      cov_zabnfcqf9.s[73]++;

      if (scrollTop >= maxScroll) {
        cov_zabnfcqf9.b[16][0]++;
        var target = (cov_zabnfcqf9.s[74]++, this._targets[this._targets.length - 1]);
        cov_zabnfcqf9.s[75]++;

        if (this._activeTarget !== target) {
          cov_zabnfcqf9.b[17][0]++;
          cov_zabnfcqf9.s[76]++;

          this._activate(target);
        } else {
          cov_zabnfcqf9.b[17][1]++;
        }

        cov_zabnfcqf9.s[77]++;
        return;
      } else {
        cov_zabnfcqf9.b[16][1]++;
      }

      cov_zabnfcqf9.s[78]++;

      if ((cov_zabnfcqf9.b[19][0]++, this._activeTarget) && (cov_zabnfcqf9.b[19][1]++, scrollTop < this._offsets[0]) && (cov_zabnfcqf9.b[19][2]++, this._offsets[0] > 0)) {
        cov_zabnfcqf9.b[18][0]++;
        cov_zabnfcqf9.s[79]++;
        this._activeTarget = null;
        cov_zabnfcqf9.s[80]++;

        this._clear();

        cov_zabnfcqf9.s[81]++;
        return;
      } else {
        cov_zabnfcqf9.b[18][1]++;
      }

      var offsetLength = (cov_zabnfcqf9.s[82]++, this._offsets.length);
      cov_zabnfcqf9.s[83]++;

      for (var i = (cov_zabnfcqf9.s[84]++, offsetLength); i--;) {
        var isActiveTarget = (cov_zabnfcqf9.s[85]++, (cov_zabnfcqf9.b[20][0]++, this._activeTarget !== this._targets[i]) && (cov_zabnfcqf9.b[20][1]++, scrollTop >= this._offsets[i]) && ((cov_zabnfcqf9.b[20][2]++, typeof this._offsets[i + 1] === 'undefined') || (cov_zabnfcqf9.b[20][3]++, scrollTop < this._offsets[i + 1])));
        cov_zabnfcqf9.s[86]++;

        if (isActiveTarget) {
          cov_zabnfcqf9.b[21][0]++;
          cov_zabnfcqf9.s[87]++;

          this._activate(this._targets[i]);
        } else {
          cov_zabnfcqf9.b[21][1]++;
        }
      }
    };

    _proto._activate = function _activate(target) {
      cov_zabnfcqf9.f[15]++;
      cov_zabnfcqf9.s[88]++;
      this._activeTarget = target;
      cov_zabnfcqf9.s[89]++;

      this._clear();

      var queries = (cov_zabnfcqf9.s[90]++, this._selector.split(',').map(function (selector) {
        cov_zabnfcqf9.f[16]++;
        cov_zabnfcqf9.s[91]++;
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      }));
      var $link = (cov_zabnfcqf9.s[92]++, $([].slice.call(document.querySelectorAll(queries.join(',')))));
      cov_zabnfcqf9.s[93]++;

      if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
        cov_zabnfcqf9.b[22][0]++;
        cov_zabnfcqf9.s[94]++;
        $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
        cov_zabnfcqf9.s[95]++;
        $link.addClass(ClassName.ACTIVE);
      } else {
        cov_zabnfcqf9.b[22][1]++;
        cov_zabnfcqf9.s[96]++;
        // Set triggered link as active
        $link.addClass(ClassName.ACTIVE); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        cov_zabnfcqf9.s[97]++;
        $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_LINKS + ", " + Selector.LIST_ITEMS).addClass(ClassName.ACTIVE); // Handle special case when .nav-link is inside .nav-item

        cov_zabnfcqf9.s[98]++;
        $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_ITEMS).children(Selector.NAV_LINKS).addClass(ClassName.ACTIVE);
      }

      cov_zabnfcqf9.s[99]++;
      $(this._scrollElement).trigger(Event.ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      cov_zabnfcqf9.f[17]++;
      cov_zabnfcqf9.s[100]++;
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        cov_zabnfcqf9.f[18]++;
        cov_zabnfcqf9.s[101]++;
        return node.classList.contains(ClassName.ACTIVE);
      }).forEach(function (node) {
        cov_zabnfcqf9.f[19]++;
        cov_zabnfcqf9.s[102]++;
        return node.classList.remove(ClassName.ACTIVE);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      cov_zabnfcqf9.f[20]++;
      cov_zabnfcqf9.s[103]++;
      return this.each(function () {
        cov_zabnfcqf9.f[21]++;
        var data = (cov_zabnfcqf9.s[104]++, $(this).data(DATA_KEY));

        var _config = (cov_zabnfcqf9.s[105]++, (cov_zabnfcqf9.b[23][0]++, typeof config === 'object') && (cov_zabnfcqf9.b[23][1]++, config));

        cov_zabnfcqf9.s[106]++;

        if (!data) {
          cov_zabnfcqf9.b[24][0]++;
          cov_zabnfcqf9.s[107]++;
          data = new ScrollSpy(this, _config);
          cov_zabnfcqf9.s[108]++;
          $(this).data(DATA_KEY, data);
        } else {
          cov_zabnfcqf9.b[24][1]++;
        }

        cov_zabnfcqf9.s[109]++;

        if (typeof config === 'string') {
          cov_zabnfcqf9.b[25][0]++;
          cov_zabnfcqf9.s[110]++;

          if (typeof data[config] === 'undefined') {
            cov_zabnfcqf9.b[26][0]++;
            cov_zabnfcqf9.s[111]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_zabnfcqf9.b[26][1]++;
          }

          cov_zabnfcqf9.s[112]++;
          data[config]();
        } else {
          cov_zabnfcqf9.b[25][1]++;
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        cov_zabnfcqf9.f[2]++;
        cov_zabnfcqf9.s[24]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_zabnfcqf9.f[3]++;
        cov_zabnfcqf9.s[25]++;
        return Default;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  cov_zabnfcqf9.s[113]++;
  $(window).on(Event.LOAD_DATA_API, function () {
    cov_zabnfcqf9.f[22]++;
    var scrollSpys = (cov_zabnfcqf9.s[114]++, [].slice.call(document.querySelectorAll(Selector.DATA_SPY)));
    var scrollSpysLength = (cov_zabnfcqf9.s[115]++, scrollSpys.length);
    cov_zabnfcqf9.s[116]++;

    for (var i = (cov_zabnfcqf9.s[117]++, scrollSpysLength); i--;) {
      var $spy = (cov_zabnfcqf9.s[118]++, $(scrollSpys[i]));
      cov_zabnfcqf9.s[119]++;

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  cov_zabnfcqf9.s[120]++;
  $.fn[NAME] = ScrollSpy._jQueryInterface;
  cov_zabnfcqf9.s[121]++;
  $.fn[NAME].Constructor = ScrollSpy;
  cov_zabnfcqf9.s[122]++;

  $.fn[NAME].noConflict = function () {
    cov_zabnfcqf9.f[23]++;
    cov_zabnfcqf9.s[123]++;
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    cov_zabnfcqf9.s[124]++;
    return ScrollSpy._jQueryInterface;
  };

  return ScrollSpy;

})));
//# sourceMappingURL=scrollspy.js.map

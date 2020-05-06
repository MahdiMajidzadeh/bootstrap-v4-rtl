/*!
  * Bootstrap toast.js v4.4.1-1 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2020 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global = global || self, global.Toast = factory(global.jQuery, global.Util));
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

  var cov_3w8nvp90g = function () {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/toast.js";
    var hash = "1bb5b7d10cb69299e95bbf18b8a7bb35cb7b5e6e";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/toast.js",
      statementMap: {
        "0": {
          start: {
            line: 17,
            column: 27
          },
          end: {
            line: 17,
            column: 34
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
            column: 37
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
            column: 37
          }
        },
        "5": {
          start: {
            line: 23,
            column: 14
          },
          end: {
            line: 29,
            column: 1
          }
        },
        "6": {
          start: {
            line: 31,
            column: 18
          },
          end: {
            line: 36,
            column: 1
          }
        },
        "7": {
          start: {
            line: 38,
            column: 20
          },
          end: {
            line: 42,
            column: 1
          }
        },
        "8": {
          start: {
            line: 44,
            column: 16
          },
          end: {
            line: 48,
            column: 1
          }
        },
        "9": {
          start: {
            line: 50,
            column: 17
          },
          end: {
            line: 52,
            column: 1
          }
        },
        "10": {
          start: {
            line: 62,
            column: 4
          },
          end: {
            line: 62,
            column: 27
          }
        },
        "11": {
          start: {
            line: 63,
            column: 4
          },
          end: {
            line: 63,
            column: 43
          }
        },
        "12": {
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 64,
            column: 24
          }
        },
        "13": {
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 65,
            column: 24
          }
        },
        "14": {
          start: {
            line: 71,
            column: 4
          },
          end: {
            line: 71,
            column: 18
          }
        },
        "15": {
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 75,
            column: 22
          }
        },
        "16": {
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 79,
            column: 18
          }
        },
        "17": {
          start: {
            line: 85,
            column: 22
          },
          end: {
            line: 85,
            column: 41
          }
        },
        "18": {
          start: {
            line: 87,
            column: 4
          },
          end: {
            line: 87,
            column: 39
          }
        },
        "19": {
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 90,
            column: 5
          }
        },
        "20": {
          start: {
            line: 89,
            column: 6
          },
          end: {
            line: 89,
            column: 12
          }
        },
        "21": {
          start: {
            line: 92,
            column: 4
          },
          end: {
            line: 94,
            column: 5
          }
        },
        "22": {
          start: {
            line: 93,
            column: 6
          },
          end: {
            line: 93,
            column: 49
          }
        },
        "23": {
          start: {
            line: 96,
            column: 21
          },
          end: {
            line: 107,
            column: 5
          }
        },
        "24": {
          start: {
            line: 97,
            column: 6
          },
          end: {
            line: 97,
            column: 55
          }
        },
        "25": {
          start: {
            line: 98,
            column: 6
          },
          end: {
            line: 98,
            column: 49
          }
        },
        "26": {
          start: {
            line: 100,
            column: 6
          },
          end: {
            line: 100,
            column: 43
          }
        },
        "27": {
          start: {
            line: 102,
            column: 6
          },
          end: {
            line: 106,
            column: 7
          }
        },
        "28": {
          start: {
            line: 103,
            column: 8
          },
          end: {
            line: 105,
            column: 30
          }
        },
        "29": {
          start: {
            line: 104,
            column: 10
          },
          end: {
            line: 104,
            column: 21
          }
        },
        "30": {
          start: {
            line: 109,
            column: 4
          },
          end: {
            line: 109,
            column: 50
          }
        },
        "31": {
          start: {
            line: 110,
            column: 4
          },
          end: {
            line: 110,
            column: 30
          }
        },
        "32": {
          start: {
            line: 111,
            column: 4
          },
          end: {
            line: 111,
            column: 50
          }
        },
        "33": {
          start: {
            line: 112,
            column: 4
          },
          end: {
            line: 120,
            column: 5
          }
        },
        "34": {
          start: {
            line: 113,
            column: 33
          },
          end: {
            line: 113,
            column: 85
          }
        },
        "35": {
          start: {
            line: 115,
            column: 6
          },
          end: {
            line: 117,
            column: 49
          }
        },
        "36": {
          start: {
            line: 119,
            column: 6
          },
          end: {
            line: 119,
            column: 16
          }
        },
        "37": {
          start: {
            line: 124,
            column: 4
          },
          end: {
            line: 126,
            column: 5
          }
        },
        "38": {
          start: {
            line: 125,
            column: 6
          },
          end: {
            line: 125,
            column: 12
          }
        },
        "39": {
          start: {
            line: 128,
            column: 22
          },
          end: {
            line: 128,
            column: 41
          }
        },
        "40": {
          start: {
            line: 130,
            column: 4
          },
          end: {
            line: 130,
            column: 39
          }
        },
        "41": {
          start: {
            line: 131,
            column: 4
          },
          end: {
            line: 133,
            column: 5
          }
        },
        "42": {
          start: {
            line: 132,
            column: 6
          },
          end: {
            line: 132,
            column: 12
          }
        },
        "43": {
          start: {
            line: 135,
            column: 4
          },
          end: {
            line: 135,
            column: 17
          }
        },
        "44": {
          start: {
            line: 139,
            column: 4
          },
          end: {
            line: 139,
            column: 31
          }
        },
        "45": {
          start: {
            line: 140,
            column: 4
          },
          end: {
            line: 140,
            column: 24
          }
        },
        "46": {
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 144,
            column: 5
          }
        },
        "47": {
          start: {
            line: 143,
            column: 6
          },
          end: {
            line: 143,
            column: 52
          }
        },
        "48": {
          start: {
            line: 146,
            column: 4
          },
          end: {
            line: 146,
            column: 45
          }
        },
        "49": {
          start: {
            line: 148,
            column: 4
          },
          end: {
            line: 148,
            column: 41
          }
        },
        "50": {
          start: {
            line: 149,
            column: 4
          },
          end: {
            line: 149,
            column: 24
          }
        },
        "51": {
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 150,
            column: 24
          }
        },
        "52": {
          start: {
            line: 156,
            column: 4
          },
          end: {
            line: 160,
            column: 5
          }
        },
        "53": {
          start: {
            line: 162,
            column: 4
          },
          end: {
            line: 166,
            column: 5
          }
        },
        "54": {
          start: {
            line: 168,
            column: 4
          },
          end: {
            line: 168,
            column: 17
          }
        },
        "55": {
          start: {
            line: 172,
            column: 4
          },
          end: {
            line: 176,
            column: 5
          }
        },
        "56": {
          start: {
            line: 175,
            column: 12
          },
          end: {
            line: 175,
            column: 23
          }
        },
        "57": {
          start: {
            line: 180,
            column: 21
          },
          end: {
            line: 183,
            column: 5
          }
        },
        "58": {
          start: {
            line: 181,
            column: 6
          },
          end: {
            line: 181,
            column: 49
          }
        },
        "59": {
          start: {
            line: 182,
            column: 6
          },
          end: {
            line: 182,
            column: 44
          }
        },
        "60": {
          start: {
            line: 185,
            column: 4
          },
          end: {
            line: 185,
            column: 50
          }
        },
        "61": {
          start: {
            line: 186,
            column: 4
          },
          end: {
            line: 194,
            column: 5
          }
        },
        "62": {
          start: {
            line: 187,
            column: 33
          },
          end: {
            line: 187,
            column: 85
          }
        },
        "63": {
          start: {
            line: 189,
            column: 6
          },
          end: {
            line: 191,
            column: 49
          }
        },
        "64": {
          start: {
            line: 193,
            column: 6
          },
          end: {
            line: 193,
            column: 16
          }
        },
        "65": {
          start: {
            line: 200,
            column: 4
          },
          end: {
            line: 217,
            column: 6
          }
        },
        "66": {
          start: {
            line: 201,
            column: 23
          },
          end: {
            line: 201,
            column: 30
          }
        },
        "67": {
          start: {
            line: 202,
            column: 23
          },
          end: {
            line: 202,
            column: 46
          }
        },
        "68": {
          start: {
            line: 203,
            column: 23
          },
          end: {
            line: 203,
            column: 59
          }
        },
        "69": {
          start: {
            line: 205,
            column: 6
          },
          end: {
            line: 208,
            column: 7
          }
        },
        "70": {
          start: {
            line: 206,
            column: 8
          },
          end: {
            line: 206,
            column: 39
          }
        },
        "71": {
          start: {
            line: 207,
            column: 8
          },
          end: {
            line: 207,
            column: 37
          }
        },
        "72": {
          start: {
            line: 210,
            column: 6
          },
          end: {
            line: 216,
            column: 7
          }
        },
        "73": {
          start: {
            line: 211,
            column: 8
          },
          end: {
            line: 213,
            column: 9
          }
        },
        "74": {
          start: {
            line: 212,
            column: 10
          },
          end: {
            line: 212,
            column: 60
          }
        },
        "75": {
          start: {
            line: 215,
            column: 8
          },
          end: {
            line: 215,
            column: 26
          }
        },
        "76": {
          start: {
            line: 227,
            column: 0
          },
          end: {
            line: 227,
            column: 47
          }
        },
        "77": {
          start: {
            line: 228,
            column: 0
          },
          end: {
            line: 228,
            column: 30
          }
        },
        "78": {
          start: {
            line: 229,
            column: 0
          },
          end: {
            line: 232,
            column: 1
          }
        },
        "79": {
          start: {
            line: 230,
            column: 2
          },
          end: {
            line: 230,
            column: 33
          }
        },
        "80": {
          start: {
            line: 231,
            column: 2
          },
          end: {
            line: 231,
            column: 31
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 61,
              column: 2
            },
            end: {
              line: 61,
              column: 3
            }
          },
          loc: {
            start: {
              line: 61,
              column: 31
            },
            end: {
              line: 66,
              column: 3
            }
          },
          line: 61
        },
        "1": {
          name: "(anonymous_1)",
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
              column: 23
            },
            end: {
              line: 72,
              column: 3
            }
          },
          line: 70
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 74,
              column: 2
            },
            end: {
              line: 74,
              column: 3
            }
          },
          loc: {
            start: {
              line: 74,
              column: 27
            },
            end: {
              line: 76,
              column: 3
            }
          },
          line: 74
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 78,
              column: 2
            },
            end: {
              line: 78,
              column: 3
            }
          },
          loc: {
            start: {
              line: 78,
              column: 23
            },
            end: {
              line: 80,
              column: 3
            }
          },
          line: 78
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 84,
              column: 2
            },
            end: {
              line: 84,
              column: 3
            }
          },
          loc: {
            start: {
              line: 84,
              column: 9
            },
            end: {
              line: 121,
              column: 3
            }
          },
          line: 84
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 96,
              column: 21
            },
            end: {
              line: 96,
              column: 22
            }
          },
          loc: {
            start: {
              line: 96,
              column: 27
            },
            end: {
              line: 107,
              column: 5
            }
          },
          line: 96
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 103,
              column: 35
            },
            end: {
              line: 103,
              column: 36
            }
          },
          loc: {
            start: {
              line: 103,
              column: 41
            },
            end: {
              line: 105,
              column: 9
            }
          },
          line: 103
        },
        "7": {
          name: "(anonymous_7)",
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
              line: 136,
              column: 3
            }
          },
          line: 123
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 138,
              column: 2
            },
            end: {
              line: 138,
              column: 3
            }
          },
          loc: {
            start: {
              line: 138,
              column: 12
            },
            end: {
              line: 151,
              column: 3
            }
          },
          line: 138
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 155,
              column: 2
            },
            end: {
              line: 155,
              column: 3
            }
          },
          loc: {
            start: {
              line: 155,
              column: 21
            },
            end: {
              line: 169,
              column: 3
            }
          },
          line: 155
        },
        "10": {
          name: "(anonymous_10)",
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
              column: 18
            },
            end: {
              line: 177,
              column: 3
            }
          },
          line: 171
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 175,
              column: 6
            },
            end: {
              line: 175,
              column: 7
            }
          },
          loc: {
            start: {
              line: 175,
              column: 12
            },
            end: {
              line: 175,
              column: 23
            }
          },
          line: 175
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 179,
              column: 2
            },
            end: {
              line: 179,
              column: 3
            }
          },
          loc: {
            start: {
              line: 179,
              column: 11
            },
            end: {
              line: 195,
              column: 3
            }
          },
          line: 179
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 180,
              column: 21
            },
            end: {
              line: 180,
              column: 22
            }
          },
          loc: {
            start: {
              line: 180,
              column: 27
            },
            end: {
              line: 183,
              column: 5
            }
          },
          line: 180
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 199,
              column: 2
            },
            end: {
              line: 199,
              column: 3
            }
          },
          loc: {
            start: {
              line: 199,
              column: 34
            },
            end: {
              line: 218,
              column: 3
            }
          },
          line: 199
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 200,
              column: 21
            },
            end: {
              line: 200,
              column: 22
            }
          },
          loc: {
            start: {
              line: 200,
              column: 33
            },
            end: {
              line: 217,
              column: 5
            }
          },
          line: 200
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 229,
              column: 25
            },
            end: {
              line: 229,
              column: 26
            }
          },
          loc: {
            start: {
              line: 229,
              column: 31
            },
            end: {
              line: 232,
              column: 1
            }
          },
          line: 229
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 88,
              column: 4
            },
            end: {
              line: 90,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 88,
              column: 4
            },
            end: {
              line: 90,
              column: 5
            }
          }, {
            start: {
              line: 88,
              column: 4
            },
            end: {
              line: 90,
              column: 5
            }
          }],
          line: 88
        },
        "1": {
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
        "2": {
          loc: {
            start: {
              line: 102,
              column: 6
            },
            end: {
              line: 106,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 102,
              column: 6
            },
            end: {
              line: 106,
              column: 7
            }
          }, {
            start: {
              line: 102,
              column: 6
            },
            end: {
              line: 106,
              column: 7
            }
          }],
          line: 102
        },
        "3": {
          loc: {
            start: {
              line: 112,
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
              line: 112,
              column: 4
            },
            end: {
              line: 120,
              column: 5
            }
          }, {
            start: {
              line: 112,
              column: 4
            },
            end: {
              line: 120,
              column: 5
            }
          }],
          line: 112
        },
        "4": {
          loc: {
            start: {
              line: 124,
              column: 4
            },
            end: {
              line: 126,
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
              line: 126,
              column: 5
            }
          }, {
            start: {
              line: 124,
              column: 4
            },
            end: {
              line: 126,
              column: 5
            }
          }],
          line: 124
        },
        "5": {
          loc: {
            start: {
              line: 131,
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
              line: 131,
              column: 4
            },
            end: {
              line: 133,
              column: 5
            }
          }, {
            start: {
              line: 131,
              column: 4
            },
            end: {
              line: 133,
              column: 5
            }
          }],
          line: 131
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
              line: 159,
              column: 9
            },
            end: {
              line: 159,
              column: 59
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 159,
              column: 48
            },
            end: {
              line: 159,
              column: 54
            }
          }, {
            start: {
              line: 159,
              column: 57
            },
            end: {
              line: 159,
              column: 59
            }
          }],
          line: 159
        },
        "8": {
          loc: {
            start: {
              line: 159,
              column: 9
            },
            end: {
              line: 159,
              column: 45
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 159,
              column: 9
            },
            end: {
              line: 159,
              column: 35
            }
          }, {
            start: {
              line: 159,
              column: 39
            },
            end: {
              line: 159,
              column: 45
            }
          }],
          line: 159
        },
        "9": {
          loc: {
            start: {
              line: 186,
              column: 4
            },
            end: {
              line: 194,
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
              line: 194,
              column: 5
            }
          }, {
            start: {
              line: 186,
              column: 4
            },
            end: {
              line: 194,
              column: 5
            }
          }],
          line: 186
        },
        "10": {
          loc: {
            start: {
              line: 203,
              column: 23
            },
            end: {
              line: 203,
              column: 59
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 203,
              column: 23
            },
            end: {
              line: 203,
              column: 49
            }
          }, {
            start: {
              line: 203,
              column: 53
            },
            end: {
              line: 203,
              column: 59
            }
          }],
          line: 203
        },
        "11": {
          loc: {
            start: {
              line: 205,
              column: 6
            },
            end: {
              line: 208,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 205,
              column: 6
            },
            end: {
              line: 208,
              column: 7
            }
          }, {
            start: {
              line: 205,
              column: 6
            },
            end: {
              line: 208,
              column: 7
            }
          }],
          line: 205
        },
        "12": {
          loc: {
            start: {
              line: 210,
              column: 6
            },
            end: {
              line: 216,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 210,
              column: 6
            },
            end: {
              line: 216,
              column: 7
            }
          }, {
            start: {
              line: 210,
              column: 6
            },
            end: {
              line: 216,
              column: 7
            }
          }],
          line: 210
        },
        "13": {
          loc: {
            start: {
              line: 211,
              column: 8
            },
            end: {
              line: 213,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 211,
              column: 8
            },
            end: {
              line: 213,
              column: 9
            }
          }, {
            start: {
              line: 211,
              column: 8
            },
            end: {
              line: 213,
              column: 9
            }
          }],
          line: 211
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
        "80": 0
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
        "16": 0
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
        "13": [0, 0]
      },
      _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
      hash: "1bb5b7d10cb69299e95bbf18b8a7bb35cb7b5e6e"
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

  var NAME = (cov_3w8nvp90g.s[0]++, 'toast');
  var VERSION = (cov_3w8nvp90g.s[1]++, '4.4.1');
  var DATA_KEY = (cov_3w8nvp90g.s[2]++, 'bs.toast');
  var EVENT_KEY = (cov_3w8nvp90g.s[3]++, "." + DATA_KEY);
  var JQUERY_NO_CONFLICT = (cov_3w8nvp90g.s[4]++, $.fn[NAME]);
  var Event = (cov_3w8nvp90g.s[5]++, {
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY
  });
  var ClassName = (cov_3w8nvp90g.s[6]++, {
    FADE: 'fade',
    HIDE: 'hide',
    SHOW: 'show',
    SHOWING: 'showing'
  });
  var DefaultType = (cov_3w8nvp90g.s[7]++, {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  });
  var Default = (cov_3w8nvp90g.s[8]++, {
    animation: true,
    autohide: true,
    delay: 500
  });
  var Selector = (cov_3w8nvp90g.s[9]++, {
    DATA_DISMISS: '[data-dismiss="toast"]'
  });
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast = /*#__PURE__*/function () {
    function Toast(element, config) {
      cov_3w8nvp90g.f[0]++;
      cov_3w8nvp90g.s[10]++;
      this._element = element;
      cov_3w8nvp90g.s[11]++;
      this._config = this._getConfig(config);
      cov_3w8nvp90g.s[12]++;
      this._timeout = null;
      cov_3w8nvp90g.s[13]++;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      cov_3w8nvp90g.f[4]++;
      var showEvent = (cov_3w8nvp90g.s[17]++, $.Event(Event.SHOW));
      cov_3w8nvp90g.s[18]++;
      $(this._element).trigger(showEvent);
      cov_3w8nvp90g.s[19]++;

      if (showEvent.isDefaultPrevented()) {
        cov_3w8nvp90g.b[0][0]++;
        cov_3w8nvp90g.s[20]++;
        return;
      } else {
        cov_3w8nvp90g.b[0][1]++;
      }

      cov_3w8nvp90g.s[21]++;

      if (this._config.animation) {
        cov_3w8nvp90g.b[1][0]++;
        cov_3w8nvp90g.s[22]++;

        this._element.classList.add(ClassName.FADE);
      } else {
        cov_3w8nvp90g.b[1][1]++;
      }

      cov_3w8nvp90g.s[23]++;

      var complete = function complete() {
        cov_3w8nvp90g.f[5]++;
        cov_3w8nvp90g.s[24]++;

        _this._element.classList.remove(ClassName.SHOWING);

        cov_3w8nvp90g.s[25]++;

        _this._element.classList.add(ClassName.SHOW);

        cov_3w8nvp90g.s[26]++;
        $(_this._element).trigger(Event.SHOWN);
        cov_3w8nvp90g.s[27]++;

        if (_this._config.autohide) {
          cov_3w8nvp90g.b[2][0]++;
          cov_3w8nvp90g.s[28]++;
          _this._timeout = setTimeout(function () {
            cov_3w8nvp90g.f[6]++;
            cov_3w8nvp90g.s[29]++;

            _this.hide();
          }, _this._config.delay);
        } else {
          cov_3w8nvp90g.b[2][1]++;
        }
      };

      cov_3w8nvp90g.s[30]++;

      this._element.classList.remove(ClassName.HIDE);

      cov_3w8nvp90g.s[31]++;
      Util.reflow(this._element);
      cov_3w8nvp90g.s[32]++;

      this._element.classList.add(ClassName.SHOWING);

      cov_3w8nvp90g.s[33]++;

      if (this._config.animation) {
        cov_3w8nvp90g.b[3][0]++;
        var transitionDuration = (cov_3w8nvp90g.s[34]++, Util.getTransitionDurationFromElement(this._element));
        cov_3w8nvp90g.s[35]++;
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        cov_3w8nvp90g.b[3][1]++;
        cov_3w8nvp90g.s[36]++;
        complete();
      }
    };

    _proto.hide = function hide() {
      cov_3w8nvp90g.f[7]++;
      cov_3w8nvp90g.s[37]++;

      if (!this._element.classList.contains(ClassName.SHOW)) {
        cov_3w8nvp90g.b[4][0]++;
        cov_3w8nvp90g.s[38]++;
        return;
      } else {
        cov_3w8nvp90g.b[4][1]++;
      }

      var hideEvent = (cov_3w8nvp90g.s[39]++, $.Event(Event.HIDE));
      cov_3w8nvp90g.s[40]++;
      $(this._element).trigger(hideEvent);
      cov_3w8nvp90g.s[41]++;

      if (hideEvent.isDefaultPrevented()) {
        cov_3w8nvp90g.b[5][0]++;
        cov_3w8nvp90g.s[42]++;
        return;
      } else {
        cov_3w8nvp90g.b[5][1]++;
      }

      cov_3w8nvp90g.s[43]++;

      this._close();
    };

    _proto.dispose = function dispose() {
      cov_3w8nvp90g.f[8]++;
      cov_3w8nvp90g.s[44]++;
      clearTimeout(this._timeout);
      cov_3w8nvp90g.s[45]++;
      this._timeout = null;
      cov_3w8nvp90g.s[46]++;

      if (this._element.classList.contains(ClassName.SHOW)) {
        cov_3w8nvp90g.b[6][0]++;
        cov_3w8nvp90g.s[47]++;

        this._element.classList.remove(ClassName.SHOW);
      } else {
        cov_3w8nvp90g.b[6][1]++;
      }

      cov_3w8nvp90g.s[48]++;
      $(this._element).off(Event.CLICK_DISMISS);
      cov_3w8nvp90g.s[49]++;
      $.removeData(this._element, DATA_KEY);
      cov_3w8nvp90g.s[50]++;
      this._element = null;
      cov_3w8nvp90g.s[51]++;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      cov_3w8nvp90g.f[9]++;
      cov_3w8nvp90g.s[52]++;
      config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default), $(this._element).data()), (cov_3w8nvp90g.b[8][0]++, typeof config === 'object') && (cov_3w8nvp90g.b[8][1]++, config) ? (cov_3w8nvp90g.b[7][0]++, config) : (cov_3w8nvp90g.b[7][1]++, {}));
      cov_3w8nvp90g.s[53]++;
      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      cov_3w8nvp90g.s[54]++;
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      cov_3w8nvp90g.f[10]++;
      cov_3w8nvp90g.s[55]++;
      $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function () {
        cov_3w8nvp90g.f[11]++;
        cov_3w8nvp90g.s[56]++;
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      cov_3w8nvp90g.f[12]++;
      cov_3w8nvp90g.s[57]++;

      var complete = function complete() {
        cov_3w8nvp90g.f[13]++;
        cov_3w8nvp90g.s[58]++;

        _this3._element.classList.add(ClassName.HIDE);

        cov_3w8nvp90g.s[59]++;
        $(_this3._element).trigger(Event.HIDDEN);
      };

      cov_3w8nvp90g.s[60]++;

      this._element.classList.remove(ClassName.SHOW);

      cov_3w8nvp90g.s[61]++;

      if (this._config.animation) {
        cov_3w8nvp90g.b[9][0]++;
        var transitionDuration = (cov_3w8nvp90g.s[62]++, Util.getTransitionDurationFromElement(this._element));
        cov_3w8nvp90g.s[63]++;
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        cov_3w8nvp90g.b[9][1]++;
        cov_3w8nvp90g.s[64]++;
        complete();
      }
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      cov_3w8nvp90g.f[14]++;
      cov_3w8nvp90g.s[65]++;
      return this.each(function () {
        cov_3w8nvp90g.f[15]++;
        var $element = (cov_3w8nvp90g.s[66]++, $(this));
        var data = (cov_3w8nvp90g.s[67]++, $element.data(DATA_KEY));

        var _config = (cov_3w8nvp90g.s[68]++, (cov_3w8nvp90g.b[10][0]++, typeof config === 'object') && (cov_3w8nvp90g.b[10][1]++, config));

        cov_3w8nvp90g.s[69]++;

        if (!data) {
          cov_3w8nvp90g.b[11][0]++;
          cov_3w8nvp90g.s[70]++;
          data = new Toast(this, _config);
          cov_3w8nvp90g.s[71]++;
          $element.data(DATA_KEY, data);
        } else {
          cov_3w8nvp90g.b[11][1]++;
        }

        cov_3w8nvp90g.s[72]++;

        if (typeof config === 'string') {
          cov_3w8nvp90g.b[12][0]++;
          cov_3w8nvp90g.s[73]++;

          if (typeof data[config] === 'undefined') {
            cov_3w8nvp90g.b[13][0]++;
            cov_3w8nvp90g.s[74]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_3w8nvp90g.b[13][1]++;
          }

          cov_3w8nvp90g.s[75]++;
          data[config](this);
        } else {
          cov_3w8nvp90g.b[12][1]++;
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        cov_3w8nvp90g.f[1]++;
        cov_3w8nvp90g.s[14]++;
        return VERSION;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        cov_3w8nvp90g.f[2]++;
        cov_3w8nvp90g.s[15]++;
        return DefaultType;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_3w8nvp90g.f[3]++;
        cov_3w8nvp90g.s[16]++;
        return Default;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  cov_3w8nvp90g.s[76]++;
  $.fn[NAME] = Toast._jQueryInterface;
  cov_3w8nvp90g.s[77]++;
  $.fn[NAME].Constructor = Toast;
  cov_3w8nvp90g.s[78]++;

  $.fn[NAME].noConflict = function () {
    cov_3w8nvp90g.f[16]++;
    cov_3w8nvp90g.s[79]++;
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    cov_3w8nvp90g.s[80]++;
    return Toast._jQueryInterface;
  };

  return Toast;

})));
//# sourceMappingURL=toast.js.map

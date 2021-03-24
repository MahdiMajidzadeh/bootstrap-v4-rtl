/*!
  * Bootstrap toast.js v4.6.0-2 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2021 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Toast = factory(global.jQuery, global.Util));
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

  function cov_3w8nvp90g() {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/toast.js";
    var hash = "70623d7b16442b43219f6e60b3584d1f82efc5ce";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/toast.js",
      statementMap: {
        "0": {
          start: {
            line: 17,
            column: 13
          },
          end: {
            line: 17,
            column: 20
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
            column: 27
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
            column: 28
          },
          end: {
            line: 23,
            column: 55
          }
        },
        "6": {
          start: {
            line: 24,
            column: 19
          },
          end: {
            line: 24,
            column: 37
          }
        },
        "7": {
          start: {
            line: 25,
            column: 21
          },
          end: {
            line: 25,
            column: 41
          }
        },
        "8": {
          start: {
            line: 26,
            column: 19
          },
          end: {
            line: 26,
            column: 37
          }
        },
        "9": {
          start: {
            line: 27,
            column: 20
          },
          end: {
            line: 27,
            column: 39
          }
        },
        "10": {
          start: {
            line: 29,
            column: 24
          },
          end: {
            line: 29,
            column: 30
          }
        },
        "11": {
          start: {
            line: 30,
            column: 24
          },
          end: {
            line: 30,
            column: 30
          }
        },
        "12": {
          start: {
            line: 31,
            column: 24
          },
          end: {
            line: 31,
            column: 30
          }
        },
        "13": {
          start: {
            line: 32,
            column: 27
          },
          end: {
            line: 32,
            column: 36
          }
        },
        "14": {
          start: {
            line: 34,
            column: 20
          },
          end: {
            line: 38,
            column: 1
          }
        },
        "15": {
          start: {
            line: 40,
            column: 16
          },
          end: {
            line: 44,
            column: 1
          }
        },
        "16": {
          start: {
            line: 46,
            column: 30
          },
          end: {
            line: 46,
            column: 54
          }
        },
        "17": {
          start: {
            line: 56,
            column: 4
          },
          end: {
            line: 56,
            column: 27
          }
        },
        "18": {
          start: {
            line: 57,
            column: 4
          },
          end: {
            line: 57,
            column: 42
          }
        },
        "19": {
          start: {
            line: 58,
            column: 4
          },
          end: {
            line: 58,
            column: 24
          }
        },
        "20": {
          start: {
            line: 59,
            column: 4
          },
          end: {
            line: 59,
            column: 24
          }
        },
        "21": {
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 65,
            column: 18
          }
        },
        "22": {
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 69,
            column: 22
          }
        },
        "23": {
          start: {
            line: 73,
            column: 4
          },
          end: {
            line: 73,
            column: 18
          }
        },
        "24": {
          start: {
            line: 79,
            column: 22
          },
          end: {
            line: 79,
            column: 41
          }
        },
        "25": {
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 81,
            column: 39
          }
        },
        "26": {
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 84,
            column: 5
          }
        },
        "27": {
          start: {
            line: 83,
            column: 6
          },
          end: {
            line: 83,
            column: 12
          }
        },
        "28": {
          start: {
            line: 86,
            column: 4
          },
          end: {
            line: 86,
            column: 24
          }
        },
        "29": {
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 90,
            column: 5
          }
        },
        "30": {
          start: {
            line: 89,
            column: 6
          },
          end: {
            line: 89,
            column: 50
          }
        },
        "31": {
          start: {
            line: 92,
            column: 21
          },
          end: {
            line: 103,
            column: 5
          }
        },
        "32": {
          start: {
            line: 93,
            column: 6
          },
          end: {
            line: 93,
            column: 56
          }
        },
        "33": {
          start: {
            line: 94,
            column: 6
          },
          end: {
            line: 94,
            column: 50
          }
        },
        "34": {
          start: {
            line: 96,
            column: 6
          },
          end: {
            line: 96,
            column: 43
          }
        },
        "35": {
          start: {
            line: 98,
            column: 6
          },
          end: {
            line: 102,
            column: 7
          }
        },
        "36": {
          start: {
            line: 99,
            column: 8
          },
          end: {
            line: 101,
            column: 30
          }
        },
        "37": {
          start: {
            line: 100,
            column: 10
          },
          end: {
            line: 100,
            column: 21
          }
        },
        "38": {
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 105,
            column: 51
          }
        },
        "39": {
          start: {
            line: 106,
            column: 4
          },
          end: {
            line: 106,
            column: 30
          }
        },
        "40": {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 107,
            column: 51
          }
        },
        "41": {
          start: {
            line: 108,
            column: 4
          },
          end: {
            line: 116,
            column: 5
          }
        },
        "42": {
          start: {
            line: 109,
            column: 33
          },
          end: {
            line: 109,
            column: 85
          }
        },
        "43": {
          start: {
            line: 111,
            column: 6
          },
          end: {
            line: 113,
            column: 49
          }
        },
        "44": {
          start: {
            line: 115,
            column: 6
          },
          end: {
            line: 115,
            column: 16
          }
        },
        "45": {
          start: {
            line: 120,
            column: 4
          },
          end: {
            line: 122,
            column: 5
          }
        },
        "46": {
          start: {
            line: 121,
            column: 6
          },
          end: {
            line: 121,
            column: 12
          }
        },
        "47": {
          start: {
            line: 124,
            column: 22
          },
          end: {
            line: 124,
            column: 41
          }
        },
        "48": {
          start: {
            line: 126,
            column: 4
          },
          end: {
            line: 126,
            column: 39
          }
        },
        "49": {
          start: {
            line: 127,
            column: 4
          },
          end: {
            line: 129,
            column: 5
          }
        },
        "50": {
          start: {
            line: 128,
            column: 6
          },
          end: {
            line: 128,
            column: 12
          }
        },
        "51": {
          start: {
            line: 131,
            column: 4
          },
          end: {
            line: 131,
            column: 17
          }
        },
        "52": {
          start: {
            line: 135,
            column: 4
          },
          end: {
            line: 135,
            column: 24
          }
        },
        "53": {
          start: {
            line: 137,
            column: 4
          },
          end: {
            line: 139,
            column: 5
          }
        },
        "54": {
          start: {
            line: 138,
            column: 6
          },
          end: {
            line: 138,
            column: 53
          }
        },
        "55": {
          start: {
            line: 141,
            column: 4
          },
          end: {
            line: 141,
            column: 45
          }
        },
        "56": {
          start: {
            line: 143,
            column: 4
          },
          end: {
            line: 143,
            column: 41
          }
        },
        "57": {
          start: {
            line: 144,
            column: 4
          },
          end: {
            line: 144,
            column: 24
          }
        },
        "58": {
          start: {
            line: 145,
            column: 4
          },
          end: {
            line: 145,
            column: 23
          }
        },
        "59": {
          start: {
            line: 151,
            column: 4
          },
          end: {
            line: 155,
            column: 5
          }
        },
        "60": {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 161,
            column: 5
          }
        },
        "61": {
          start: {
            line: 163,
            column: 4
          },
          end: {
            line: 163,
            column: 17
          }
        },
        "62": {
          start: {
            line: 167,
            column: 4
          },
          end: {
            line: 167,
            column: 86
          }
        },
        "63": {
          start: {
            line: 167,
            column: 74
          },
          end: {
            line: 167,
            column: 85
          }
        },
        "64": {
          start: {
            line: 171,
            column: 21
          },
          end: {
            line: 174,
            column: 5
          }
        },
        "65": {
          start: {
            line: 172,
            column: 6
          },
          end: {
            line: 172,
            column: 50
          }
        },
        "66": {
          start: {
            line: 173,
            column: 6
          },
          end: {
            line: 173,
            column: 44
          }
        },
        "67": {
          start: {
            line: 176,
            column: 4
          },
          end: {
            line: 176,
            column: 51
          }
        },
        "68": {
          start: {
            line: 177,
            column: 4
          },
          end: {
            line: 185,
            column: 5
          }
        },
        "69": {
          start: {
            line: 178,
            column: 33
          },
          end: {
            line: 178,
            column: 85
          }
        },
        "70": {
          start: {
            line: 180,
            column: 6
          },
          end: {
            line: 182,
            column: 49
          }
        },
        "71": {
          start: {
            line: 184,
            column: 6
          },
          end: {
            line: 184,
            column: 16
          }
        },
        "72": {
          start: {
            line: 189,
            column: 4
          },
          end: {
            line: 189,
            column: 31
          }
        },
        "73": {
          start: {
            line: 190,
            column: 4
          },
          end: {
            line: 190,
            column: 24
          }
        },
        "74": {
          start: {
            line: 196,
            column: 4
          },
          end: {
            line: 213,
            column: 6
          }
        },
        "75": {
          start: {
            line: 197,
            column: 23
          },
          end: {
            line: 197,
            column: 30
          }
        },
        "76": {
          start: {
            line: 198,
            column: 17
          },
          end: {
            line: 198,
            column: 40
          }
        },
        "77": {
          start: {
            line: 199,
            column: 22
          },
          end: {
            line: 199,
            column: 58
          }
        },
        "78": {
          start: {
            line: 201,
            column: 6
          },
          end: {
            line: 204,
            column: 7
          }
        },
        "79": {
          start: {
            line: 202,
            column: 8
          },
          end: {
            line: 202,
            column: 39
          }
        },
        "80": {
          start: {
            line: 203,
            column: 8
          },
          end: {
            line: 203,
            column: 37
          }
        },
        "81": {
          start: {
            line: 206,
            column: 6
          },
          end: {
            line: 212,
            column: 7
          }
        },
        "82": {
          start: {
            line: 207,
            column: 8
          },
          end: {
            line: 209,
            column: 9
          }
        },
        "83": {
          start: {
            line: 208,
            column: 10
          },
          end: {
            line: 208,
            column: 60
          }
        },
        "84": {
          start: {
            line: 211,
            column: 8
          },
          end: {
            line: 211,
            column: 26
          }
        },
        "85": {
          start: {
            line: 223,
            column: 0
          },
          end: {
            line: 223,
            column: 35
          }
        },
        "86": {
          start: {
            line: 224,
            column: 0
          },
          end: {
            line: 224,
            column: 30
          }
        },
        "87": {
          start: {
            line: 225,
            column: 0
          },
          end: {
            line: 228,
            column: 1
          }
        },
        "88": {
          start: {
            line: 226,
            column: 2
          },
          end: {
            line: 226,
            column: 33
          }
        },
        "89": {
          start: {
            line: 227,
            column: 2
          },
          end: {
            line: 227,
            column: 31
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 55,
              column: 2
            },
            end: {
              line: 55,
              column: 3
            }
          },
          loc: {
            start: {
              line: 55,
              column: 31
            },
            end: {
              line: 60,
              column: 3
            }
          },
          line: 55
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 64,
              column: 2
            },
            end: {
              line: 64,
              column: 3
            }
          },
          loc: {
            start: {
              line: 64,
              column: 23
            },
            end: {
              line: 66,
              column: 3
            }
          },
          line: 64
        },
        "2": {
          name: "(anonymous_2)",
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
              column: 27
            },
            end: {
              line: 70,
              column: 3
            }
          },
          line: 68
        },
        "3": {
          name: "(anonymous_3)",
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
              column: 23
            },
            end: {
              line: 74,
              column: 3
            }
          },
          line: 72
        },
        "4": {
          name: "(anonymous_4)",
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
              column: 9
            },
            end: {
              line: 117,
              column: 3
            }
          },
          line: 78
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 92,
              column: 21
            },
            end: {
              line: 92,
              column: 22
            }
          },
          loc: {
            start: {
              line: 92,
              column: 27
            },
            end: {
              line: 103,
              column: 5
            }
          },
          line: 92
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 99,
              column: 35
            },
            end: {
              line: 99,
              column: 36
            }
          },
          loc: {
            start: {
              line: 99,
              column: 41
            },
            end: {
              line: 101,
              column: 9
            }
          },
          line: 99
        },
        "7": {
          name: "(anonymous_7)",
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
              column: 9
            },
            end: {
              line: 132,
              column: 3
            }
          },
          line: 119
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 134,
              column: 2
            },
            end: {
              line: 134,
              column: 3
            }
          },
          loc: {
            start: {
              line: 134,
              column: 12
            },
            end: {
              line: 146,
              column: 3
            }
          },
          line: 134
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 150,
              column: 2
            },
            end: {
              line: 150,
              column: 3
            }
          },
          loc: {
            start: {
              line: 150,
              column: 21
            },
            end: {
              line: 164,
              column: 3
            }
          },
          line: 150
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 166,
              column: 2
            },
            end: {
              line: 166,
              column: 3
            }
          },
          loc: {
            start: {
              line: 166,
              column: 18
            },
            end: {
              line: 168,
              column: 3
            }
          },
          line: 166
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 167,
              column: 68
            },
            end: {
              line: 167,
              column: 69
            }
          },
          loc: {
            start: {
              line: 167,
              column: 74
            },
            end: {
              line: 167,
              column: 85
            }
          },
          line: 167
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 170,
              column: 2
            },
            end: {
              line: 170,
              column: 3
            }
          },
          loc: {
            start: {
              line: 170,
              column: 11
            },
            end: {
              line: 186,
              column: 3
            }
          },
          line: 170
        },
        "13": {
          name: "(anonymous_13)",
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
              line: 174,
              column: 5
            }
          },
          line: 171
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 188,
              column: 2
            },
            end: {
              line: 188,
              column: 3
            }
          },
          loc: {
            start: {
              line: 188,
              column: 18
            },
            end: {
              line: 191,
              column: 3
            }
          },
          line: 188
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 195,
              column: 2
            },
            end: {
              line: 195,
              column: 3
            }
          },
          loc: {
            start: {
              line: 195,
              column: 34
            },
            end: {
              line: 214,
              column: 3
            }
          },
          line: 195
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 196,
              column: 21
            },
            end: {
              line: 196,
              column: 22
            }
          },
          loc: {
            start: {
              line: 196,
              column: 33
            },
            end: {
              line: 213,
              column: 5
            }
          },
          line: 196
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 225,
              column: 24
            },
            end: {
              line: 225,
              column: 25
            }
          },
          loc: {
            start: {
              line: 225,
              column: 30
            },
            end: {
              line: 228,
              column: 1
            }
          },
          line: 225
        }
      },
      branchMap: {
        "0": {
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
        "1": {
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
        "2": {
          loc: {
            start: {
              line: 98,
              column: 6
            },
            end: {
              line: 102,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 98,
              column: 6
            },
            end: {
              line: 102,
              column: 7
            }
          }, {
            start: {
              line: 98,
              column: 6
            },
            end: {
              line: 102,
              column: 7
            }
          }],
          line: 98
        },
        "3": {
          loc: {
            start: {
              line: 108,
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
              line: 108,
              column: 4
            },
            end: {
              line: 116,
              column: 5
            }
          }, {
            start: {
              line: 108,
              column: 4
            },
            end: {
              line: 116,
              column: 5
            }
          }],
          line: 108
        },
        "4": {
          loc: {
            start: {
              line: 120,
              column: 4
            },
            end: {
              line: 122,
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
              line: 122,
              column: 5
            }
          }, {
            start: {
              line: 120,
              column: 4
            },
            end: {
              line: 122,
              column: 5
            }
          }],
          line: 120
        },
        "5": {
          loc: {
            start: {
              line: 127,
              column: 4
            },
            end: {
              line: 129,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 127,
              column: 4
            },
            end: {
              line: 129,
              column: 5
            }
          }, {
            start: {
              line: 127,
              column: 4
            },
            end: {
              line: 129,
              column: 5
            }
          }],
          line: 127
        },
        "6": {
          loc: {
            start: {
              line: 137,
              column: 4
            },
            end: {
              line: 139,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 137,
              column: 4
            },
            end: {
              line: 139,
              column: 5
            }
          }, {
            start: {
              line: 137,
              column: 4
            },
            end: {
              line: 139,
              column: 5
            }
          }],
          line: 137
        },
        "7": {
          loc: {
            start: {
              line: 154,
              column: 10
            },
            end: {
              line: 154,
              column: 60
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 154,
              column: 49
            },
            end: {
              line: 154,
              column: 55
            }
          }, {
            start: {
              line: 154,
              column: 58
            },
            end: {
              line: 154,
              column: 60
            }
          }],
          line: 154
        },
        "8": {
          loc: {
            start: {
              line: 154,
              column: 10
            },
            end: {
              line: 154,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 154,
              column: 10
            },
            end: {
              line: 154,
              column: 36
            }
          }, {
            start: {
              line: 154,
              column: 40
            },
            end: {
              line: 154,
              column: 46
            }
          }],
          line: 154
        },
        "9": {
          loc: {
            start: {
              line: 177,
              column: 4
            },
            end: {
              line: 185,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 177,
              column: 4
            },
            end: {
              line: 185,
              column: 5
            }
          }, {
            start: {
              line: 177,
              column: 4
            },
            end: {
              line: 185,
              column: 5
            }
          }],
          line: 177
        },
        "10": {
          loc: {
            start: {
              line: 199,
              column: 22
            },
            end: {
              line: 199,
              column: 58
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 199,
              column: 22
            },
            end: {
              line: 199,
              column: 48
            }
          }, {
            start: {
              line: 199,
              column: 52
            },
            end: {
              line: 199,
              column: 58
            }
          }],
          line: 199
        },
        "11": {
          loc: {
            start: {
              line: 201,
              column: 6
            },
            end: {
              line: 204,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 201,
              column: 6
            },
            end: {
              line: 204,
              column: 7
            }
          }, {
            start: {
              line: 201,
              column: 6
            },
            end: {
              line: 204,
              column: 7
            }
          }],
          line: 201
        },
        "12": {
          loc: {
            start: {
              line: 206,
              column: 6
            },
            end: {
              line: 212,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 206,
              column: 6
            },
            end: {
              line: 212,
              column: 7
            }
          }, {
            start: {
              line: 206,
              column: 6
            },
            end: {
              line: 212,
              column: 7
            }
          }],
          line: 206
        },
        "13": {
          loc: {
            start: {
              line: 207,
              column: 8
            },
            end: {
              line: 209,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 207,
              column: 8
            },
            end: {
              line: 209,
              column: 9
            }
          }, {
            start: {
              line: 207,
              column: 8
            },
            end: {
              line: 209,
              column: 9
            }
          }],
          line: 207
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
        "89": 0
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
        "17": 0
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
      _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
      hash: "70623d7b16442b43219f6e60b3584d1f82efc5ce"
    };
    var coverage = global[gcv] || (global[gcv] = {});

    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }

    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_3w8nvp90g = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }

  cov_3w8nvp90g();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_3w8nvp90g().s[0]++, 'toast');
  var VERSION = (cov_3w8nvp90g().s[1]++, '4.6.0');
  var DATA_KEY = (cov_3w8nvp90g().s[2]++, 'bs.toast');
  var EVENT_KEY = (cov_3w8nvp90g().s[3]++, "." + DATA_KEY);
  var JQUERY_NO_CONFLICT = (cov_3w8nvp90g().s[4]++, $__default['default'].fn[NAME]);
  var EVENT_CLICK_DISMISS = (cov_3w8nvp90g().s[5]++, "click.dismiss" + EVENT_KEY);
  var EVENT_HIDE = (cov_3w8nvp90g().s[6]++, "hide" + EVENT_KEY);
  var EVENT_HIDDEN = (cov_3w8nvp90g().s[7]++, "hidden" + EVENT_KEY);
  var EVENT_SHOW = (cov_3w8nvp90g().s[8]++, "show" + EVENT_KEY);
  var EVENT_SHOWN = (cov_3w8nvp90g().s[9]++, "shown" + EVENT_KEY);
  var CLASS_NAME_FADE = (cov_3w8nvp90g().s[10]++, 'fade');
  var CLASS_NAME_HIDE = (cov_3w8nvp90g().s[11]++, 'hide');
  var CLASS_NAME_SHOW = (cov_3w8nvp90g().s[12]++, 'show');
  var CLASS_NAME_SHOWING = (cov_3w8nvp90g().s[13]++, 'showing');
  var DefaultType = (cov_3w8nvp90g().s[14]++, {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  });
  var Default = (cov_3w8nvp90g().s[15]++, {
    animation: true,
    autohide: true,
    delay: 500
  });
  var SELECTOR_DATA_DISMISS = (cov_3w8nvp90g().s[16]++, '[data-dismiss="toast"]');
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast = /*#__PURE__*/function () {
    function Toast(element, config) {
      cov_3w8nvp90g().f[0]++;
      cov_3w8nvp90g().s[17]++;
      this._element = element;
      cov_3w8nvp90g().s[18]++;
      this._config = this._getConfig(config);
      cov_3w8nvp90g().s[19]++;
      this._timeout = null;
      cov_3w8nvp90g().s[20]++;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      cov_3w8nvp90g().f[4]++;
      var showEvent = (cov_3w8nvp90g().s[24]++, $__default['default'].Event(EVENT_SHOW));
      cov_3w8nvp90g().s[25]++;
      $__default['default'](this._element).trigger(showEvent);
      cov_3w8nvp90g().s[26]++;

      if (showEvent.isDefaultPrevented()) {
        cov_3w8nvp90g().b[0][0]++;
        cov_3w8nvp90g().s[27]++;
        return;
      } else {
        cov_3w8nvp90g().b[0][1]++;
      }

      cov_3w8nvp90g().s[28]++;

      this._clearTimeout();

      cov_3w8nvp90g().s[29]++;

      if (this._config.animation) {
        cov_3w8nvp90g().b[1][0]++;
        cov_3w8nvp90g().s[30]++;

        this._element.classList.add(CLASS_NAME_FADE);
      } else {
        cov_3w8nvp90g().b[1][1]++;
      }

      cov_3w8nvp90g().s[31]++;

      var complete = function complete() {
        cov_3w8nvp90g().f[5]++;
        cov_3w8nvp90g().s[32]++;

        _this._element.classList.remove(CLASS_NAME_SHOWING);

        cov_3w8nvp90g().s[33]++;

        _this._element.classList.add(CLASS_NAME_SHOW);

        cov_3w8nvp90g().s[34]++;
        $__default['default'](_this._element).trigger(EVENT_SHOWN);
        cov_3w8nvp90g().s[35]++;

        if (_this._config.autohide) {
          cov_3w8nvp90g().b[2][0]++;
          cov_3w8nvp90g().s[36]++;
          _this._timeout = setTimeout(function () {
            cov_3w8nvp90g().f[6]++;
            cov_3w8nvp90g().s[37]++;

            _this.hide();
          }, _this._config.delay);
        } else {
          cov_3w8nvp90g().b[2][1]++;
        }
      };

      cov_3w8nvp90g().s[38]++;

      this._element.classList.remove(CLASS_NAME_HIDE);

      cov_3w8nvp90g().s[39]++;
      Util__default['default'].reflow(this._element);
      cov_3w8nvp90g().s[40]++;

      this._element.classList.add(CLASS_NAME_SHOWING);

      cov_3w8nvp90g().s[41]++;

      if (this._config.animation) {
        cov_3w8nvp90g().b[3][0]++;
        var transitionDuration = (cov_3w8nvp90g().s[42]++, Util__default['default'].getTransitionDurationFromElement(this._element));
        cov_3w8nvp90g().s[43]++;
        $__default['default'](this._element).one(Util__default['default'].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        cov_3w8nvp90g().b[3][1]++;
        cov_3w8nvp90g().s[44]++;
        complete();
      }
    };

    _proto.hide = function hide() {
      cov_3w8nvp90g().f[7]++;
      cov_3w8nvp90g().s[45]++;

      if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
        cov_3w8nvp90g().b[4][0]++;
        cov_3w8nvp90g().s[46]++;
        return;
      } else {
        cov_3w8nvp90g().b[4][1]++;
      }

      var hideEvent = (cov_3w8nvp90g().s[47]++, $__default['default'].Event(EVENT_HIDE));
      cov_3w8nvp90g().s[48]++;
      $__default['default'](this._element).trigger(hideEvent);
      cov_3w8nvp90g().s[49]++;

      if (hideEvent.isDefaultPrevented()) {
        cov_3w8nvp90g().b[5][0]++;
        cov_3w8nvp90g().s[50]++;
        return;
      } else {
        cov_3w8nvp90g().b[5][1]++;
      }

      cov_3w8nvp90g().s[51]++;

      this._close();
    };

    _proto.dispose = function dispose() {
      cov_3w8nvp90g().f[8]++;
      cov_3w8nvp90g().s[52]++;

      this._clearTimeout();

      cov_3w8nvp90g().s[53]++;

      if (this._element.classList.contains(CLASS_NAME_SHOW)) {
        cov_3w8nvp90g().b[6][0]++;
        cov_3w8nvp90g().s[54]++;

        this._element.classList.remove(CLASS_NAME_SHOW);
      } else {
        cov_3w8nvp90g().b[6][1]++;
      }

      cov_3w8nvp90g().s[55]++;
      $__default['default'](this._element).off(EVENT_CLICK_DISMISS);
      cov_3w8nvp90g().s[56]++;
      $__default['default'].removeData(this._element, DATA_KEY);
      cov_3w8nvp90g().s[57]++;
      this._element = null;
      cov_3w8nvp90g().s[58]++;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      cov_3w8nvp90g().f[9]++;
      cov_3w8nvp90g().s[59]++;
      config = _extends({}, Default, $__default['default'](this._element).data(), (cov_3w8nvp90g().b[8][0]++, typeof config === 'object') && (cov_3w8nvp90g().b[8][1]++, config) ? (cov_3w8nvp90g().b[7][0]++, config) : (cov_3w8nvp90g().b[7][1]++, {}));
      cov_3w8nvp90g().s[60]++;
      Util__default['default'].typeCheckConfig(NAME, config, this.constructor.DefaultType);
      cov_3w8nvp90g().s[61]++;
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      cov_3w8nvp90g().f[10]++;
      cov_3w8nvp90g().s[62]++;
      $__default['default'](this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function () {
        cov_3w8nvp90g().f[11]++;
        cov_3w8nvp90g().s[63]++;
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      cov_3w8nvp90g().f[12]++;
      cov_3w8nvp90g().s[64]++;

      var complete = function complete() {
        cov_3w8nvp90g().f[13]++;
        cov_3w8nvp90g().s[65]++;

        _this3._element.classList.add(CLASS_NAME_HIDE);

        cov_3w8nvp90g().s[66]++;
        $__default['default'](_this3._element).trigger(EVENT_HIDDEN);
      };

      cov_3w8nvp90g().s[67]++;

      this._element.classList.remove(CLASS_NAME_SHOW);

      cov_3w8nvp90g().s[68]++;

      if (this._config.animation) {
        cov_3w8nvp90g().b[9][0]++;
        var transitionDuration = (cov_3w8nvp90g().s[69]++, Util__default['default'].getTransitionDurationFromElement(this._element));
        cov_3w8nvp90g().s[70]++;
        $__default['default'](this._element).one(Util__default['default'].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        cov_3w8nvp90g().b[9][1]++;
        cov_3w8nvp90g().s[71]++;
        complete();
      }
    };

    _proto._clearTimeout = function _clearTimeout() {
      cov_3w8nvp90g().f[14]++;
      cov_3w8nvp90g().s[72]++;
      clearTimeout(this._timeout);
      cov_3w8nvp90g().s[73]++;
      this._timeout = null;
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      cov_3w8nvp90g().f[15]++;
      cov_3w8nvp90g().s[74]++;
      return this.each(function () {
        cov_3w8nvp90g().f[16]++;
        var $element = (cov_3w8nvp90g().s[75]++, $__default['default'](this));
        var data = (cov_3w8nvp90g().s[76]++, $element.data(DATA_KEY));

        var _config = (cov_3w8nvp90g().s[77]++, (cov_3w8nvp90g().b[10][0]++, typeof config === 'object') && (cov_3w8nvp90g().b[10][1]++, config));

        cov_3w8nvp90g().s[78]++;

        if (!data) {
          cov_3w8nvp90g().b[11][0]++;
          cov_3w8nvp90g().s[79]++;
          data = new Toast(this, _config);
          cov_3w8nvp90g().s[80]++;
          $element.data(DATA_KEY, data);
        } else {
          cov_3w8nvp90g().b[11][1]++;
        }

        cov_3w8nvp90g().s[81]++;

        if (typeof config === 'string') {
          cov_3w8nvp90g().b[12][0]++;
          cov_3w8nvp90g().s[82]++;

          if (typeof data[config] === 'undefined') {
            cov_3w8nvp90g().b[13][0]++;
            cov_3w8nvp90g().s[83]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_3w8nvp90g().b[13][1]++;
          }

          cov_3w8nvp90g().s[84]++;
          data[config](this);
        } else {
          cov_3w8nvp90g().b[12][1]++;
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        cov_3w8nvp90g().f[1]++;
        cov_3w8nvp90g().s[21]++;
        return VERSION;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        cov_3w8nvp90g().f[2]++;
        cov_3w8nvp90g().s[22]++;
        return DefaultType;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_3w8nvp90g().f[3]++;
        cov_3w8nvp90g().s[23]++;
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


  cov_3w8nvp90g().s[85]++;
  $__default['default'].fn[NAME] = Toast._jQueryInterface;
  cov_3w8nvp90g().s[86]++;
  $__default['default'].fn[NAME].Constructor = Toast;
  cov_3w8nvp90g().s[87]++;

  $__default['default'].fn[NAME].noConflict = function () {
    cov_3w8nvp90g().f[17]++;
    cov_3w8nvp90g().s[88]++;
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    cov_3w8nvp90g().s[89]++;
    return Toast._jQueryInterface;
  };

  return Toast;

})));
//# sourceMappingURL=toast.js.map

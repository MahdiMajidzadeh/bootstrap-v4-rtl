/*!
  * Bootstrap tab.js v4.6.0-2 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2021 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Tab = factory(global.jQuery, global.Util));
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

  function cov_heer65qvl() {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/tab.js";
    var hash = "26ba24df83c40762354a2aea52d6f9916d8d5f2d";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/tab.js",
      statementMap: {
        "0": {
          start: {
            line: 17,
            column: 13
          },
          end: {
            line: 17,
            column: 18
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
            column: 25
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
            column: 21
          },
          end: {
            line: 21,
            column: 32
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
            line: 28,
            column: 29
          },
          end: {
            line: 28,
            column: 63
          }
        },
        "11": {
          start: {
            line: 30,
            column: 33
          },
          end: {
            line: 30,
            column: 48
          }
        },
        "12": {
          start: {
            line: 31,
            column: 26
          },
          end: {
            line: 31,
            column: 34
          }
        },
        "13": {
          start: {
            line: 32,
            column: 28
          },
          end: {
            line: 32,
            column: 38
          }
        },
        "14": {
          start: {
            line: 33,
            column: 24
          },
          end: {
            line: 33,
            column: 30
          }
        },
        "15": {
          start: {
            line: 34,
            column: 24
          },
          end: {
            line: 34,
            column: 30
          }
        },
        "16": {
          start: {
            line: 36,
            column: 26
          },
          end: {
            line: 36,
            column: 37
          }
        },
        "17": {
          start: {
            line: 37,
            column: 32
          },
          end: {
            line: 37,
            column: 51
          }
        },
        "18": {
          start: {
            line: 38,
            column: 24
          },
          end: {
            line: 38,
            column: 33
          }
        },
        "19": {
          start: {
            line: 39,
            column: 27
          },
          end: {
            line: 39,
            column: 43
          }
        },
        "20": {
          start: {
            line: 40,
            column: 29
          },
          end: {
            line: 40,
            column: 94
          }
        },
        "21": {
          start: {
            line: 41,
            column: 33
          },
          end: {
            line: 41,
            column: 51
          }
        },
        "22": {
          start: {
            line: 42,
            column: 39
          },
          end: {
            line: 42,
            column: 65
          }
        },
        "23": {
          start: {
            line: 52,
            column: 4
          },
          end: {
            line: 52,
            column: 27
          }
        },
        "24": {
          start: {
            line: 58,
            column: 4
          },
          end: {
            line: 58,
            column: 18
          }
        },
        "25": {
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 69,
            column: 5
          }
        },
        "26": {
          start: {
            line: 68,
            column: 6
          },
          end: {
            line: 68,
            column: 12
          }
        },
        "27": {
          start: {
            line: 73,
            column: 24
          },
          end: {
            line: 73,
            column: 76
          }
        },
        "28": {
          start: {
            line: 74,
            column: 21
          },
          end: {
            line: 74,
            column: 63
          }
        },
        "29": {
          start: {
            line: 76,
            column: 4
          },
          end: {
            line: 80,
            column: 5
          }
        },
        "30": {
          start: {
            line: 77,
            column: 27
          },
          end: {
            line: 77,
            column: 128
          }
        },
        "31": {
          start: {
            line: 78,
            column: 6
          },
          end: {
            line: 78,
            column: 63
          }
        },
        "32": {
          start: {
            line: 79,
            column: 6
          },
          end: {
            line: 79,
            column: 46
          }
        },
        "33": {
          start: {
            line: 82,
            column: 22
          },
          end: {
            line: 84,
            column: 6
          }
        },
        "34": {
          start: {
            line: 86,
            column: 22
          },
          end: {
            line: 88,
            column: 6
          }
        },
        "35": {
          start: {
            line: 90,
            column: 4
          },
          end: {
            line: 92,
            column: 5
          }
        },
        "36": {
          start: {
            line: 91,
            column: 6
          },
          end: {
            line: 91,
            column: 36
          }
        },
        "37": {
          start: {
            line: 94,
            column: 4
          },
          end: {
            line: 94,
            column: 39
          }
        },
        "38": {
          start: {
            line: 96,
            column: 4
          },
          end: {
            line: 99,
            column: 5
          }
        },
        "39": {
          start: {
            line: 98,
            column: 6
          },
          end: {
            line: 98,
            column: 12
          }
        },
        "40": {
          start: {
            line: 101,
            column: 4
          },
          end: {
            line: 103,
            column: 5
          }
        },
        "41": {
          start: {
            line: 102,
            column: 6
          },
          end: {
            line: 102,
            column: 47
          }
        },
        "42": {
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 108,
            column: 5
          }
        },
        "43": {
          start: {
            line: 110,
            column: 21
          },
          end: {
            line: 121,
            column: 5
          }
        },
        "44": {
          start: {
            line: 111,
            column: 26
          },
          end: {
            line: 113,
            column: 8
          }
        },
        "45": {
          start: {
            line: 115,
            column: 25
          },
          end: {
            line: 117,
            column: 8
          }
        },
        "46": {
          start: {
            line: 119,
            column: 6
          },
          end: {
            line: 119,
            column: 38
          }
        },
        "47": {
          start: {
            line: 120,
            column: 6
          },
          end: {
            line: 120,
            column: 42
          }
        },
        "48": {
          start: {
            line: 123,
            column: 4
          },
          end: {
            line: 127,
            column: 5
          }
        },
        "49": {
          start: {
            line: 124,
            column: 6
          },
          end: {
            line: 124,
            column: 57
          }
        },
        "50": {
          start: {
            line: 126,
            column: 6
          },
          end: {
            line: 126,
            column: 16
          }
        },
        "51": {
          start: {
            line: 131,
            column: 4
          },
          end: {
            line: 131,
            column: 41
          }
        },
        "52": {
          start: {
            line: 132,
            column: 4
          },
          end: {
            line: 132,
            column: 24
          }
        },
        "53": {
          start: {
            line: 138,
            column: 27
          },
          end: {
            line: 140,
            column: 44
          }
        },
        "54": {
          start: {
            line: 142,
            column: 19
          },
          end: {
            line: 142,
            column: 36
          }
        },
        "55": {
          start: {
            line: 143,
            column: 28
          },
          end: {
            line: 143,
            column: 87
          }
        },
        "56": {
          start: {
            line: 144,
            column: 21
          },
          end: {
            line: 148,
            column: 5
          }
        },
        "57": {
          start: {
            line: 144,
            column: 27
          },
          end: {
            line: 148,
            column: 5
          }
        },
        "58": {
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 159,
            column: 5
          }
        },
        "59": {
          start: {
            line: 151,
            column: 33
          },
          end: {
            line: 151,
            column: 78
          }
        },
        "60": {
          start: {
            line: 153,
            column: 6
          },
          end: {
            line: 156,
            column: 49
          }
        },
        "61": {
          start: {
            line: 158,
            column: 6
          },
          end: {
            line: 158,
            column: 16
          }
        },
        "62": {
          start: {
            line: 163,
            column: 4
          },
          end: {
            line: 177,
            column: 5
          }
        },
        "63": {
          start: {
            line: 164,
            column: 6
          },
          end: {
            line: 164,
            column: 46
          }
        },
        "64": {
          start: {
            line: 166,
            column: 28
          },
          end: {
            line: 168,
            column: 10
          }
        },
        "65": {
          start: {
            line: 170,
            column: 6
          },
          end: {
            line: 172,
            column: 7
          }
        },
        "66": {
          start: {
            line: 171,
            column: 8
          },
          end: {
            line: 171,
            column: 55
          }
        },
        "67": {
          start: {
            line: 174,
            column: 6
          },
          end: {
            line: 176,
            column: 7
          }
        },
        "68": {
          start: {
            line: 175,
            column: 8
          },
          end: {
            line: 175,
            column: 51
          }
        },
        "69": {
          start: {
            line: 179,
            column: 4
          },
          end: {
            line: 179,
            column: 42
          }
        },
        "70": {
          start: {
            line: 180,
            column: 4
          },
          end: {
            line: 182,
            column: 5
          }
        },
        "71": {
          start: {
            line: 181,
            column: 6
          },
          end: {
            line: 181,
            column: 49
          }
        },
        "72": {
          start: {
            line: 184,
            column: 4
          },
          end: {
            line: 184,
            column: 24
          }
        },
        "73": {
          start: {
            line: 186,
            column: 4
          },
          end: {
            line: 188,
            column: 5
          }
        },
        "74": {
          start: {
            line: 187,
            column: 6
          },
          end: {
            line: 187,
            column: 44
          }
        },
        "75": {
          start: {
            line: 190,
            column: 4
          },
          end: {
            line: 200,
            column: 5
          }
        },
        "76": {
          start: {
            line: 191,
            column: 30
          },
          end: {
            line: 191,
            column: 70
          }
        },
        "77": {
          start: {
            line: 193,
            column: 6
          },
          end: {
            line: 197,
            column: 7
          }
        },
        "78": {
          start: {
            line: 194,
            column: 35
          },
          end: {
            line: 194,
            column: 108
          }
        },
        "79": {
          start: {
            line: 196,
            column: 8
          },
          end: {
            line: 196,
            column: 57
          }
        },
        "80": {
          start: {
            line: 199,
            column: 6
          },
          end: {
            line: 199,
            column: 49
          }
        },
        "81": {
          start: {
            line: 202,
            column: 4
          },
          end: {
            line: 204,
            column: 5
          }
        },
        "82": {
          start: {
            line: 203,
            column: 6
          },
          end: {
            line: 203,
            column: 16
          }
        },
        "83": {
          start: {
            line: 210,
            column: 4
          },
          end: {
            line: 226,
            column: 6
          }
        },
        "84": {
          start: {
            line: 211,
            column: 20
          },
          end: {
            line: 211,
            column: 27
          }
        },
        "85": {
          start: {
            line: 212,
            column: 17
          },
          end: {
            line: 212,
            column: 37
          }
        },
        "86": {
          start: {
            line: 214,
            column: 6
          },
          end: {
            line: 217,
            column: 7
          }
        },
        "87": {
          start: {
            line: 215,
            column: 8
          },
          end: {
            line: 215,
            column: 28
          }
        },
        "88": {
          start: {
            line: 216,
            column: 8
          },
          end: {
            line: 216,
            column: 34
          }
        },
        "89": {
          start: {
            line: 219,
            column: 6
          },
          end: {
            line: 225,
            column: 7
          }
        },
        "90": {
          start: {
            line: 220,
            column: 8
          },
          end: {
            line: 222,
            column: 9
          }
        },
        "91": {
          start: {
            line: 221,
            column: 10
          },
          end: {
            line: 221,
            column: 60
          }
        },
        "92": {
          start: {
            line: 224,
            column: 8
          },
          end: {
            line: 224,
            column: 22
          }
        },
        "93": {
          start: {
            line: 236,
            column: 0
          },
          end: {
            line: 240,
            column: 4
          }
        },
        "94": {
          start: {
            line: 238,
            column: 4
          },
          end: {
            line: 238,
            column: 26
          }
        },
        "95": {
          start: {
            line: 239,
            column: 4
          },
          end: {
            line: 239,
            column: 46
          }
        },
        "96": {
          start: {
            line: 248,
            column: 0
          },
          end: {
            line: 248,
            column: 33
          }
        },
        "97": {
          start: {
            line: 249,
            column: 0
          },
          end: {
            line: 249,
            column: 28
          }
        },
        "98": {
          start: {
            line: 250,
            column: 0
          },
          end: {
            line: 253,
            column: 1
          }
        },
        "99": {
          start: {
            line: 251,
            column: 2
          },
          end: {
            line: 251,
            column: 33
          }
        },
        "100": {
          start: {
            line: 252,
            column: 2
          },
          end: {
            line: 252,
            column: 29
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 51,
              column: 2
            },
            end: {
              line: 51,
              column: 3
            }
          },
          loc: {
            start: {
              line: 51,
              column: 23
            },
            end: {
              line: 53,
              column: 3
            }
          },
          line: 51
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 57,
              column: 2
            },
            end: {
              line: 57,
              column: 3
            }
          },
          loc: {
            start: {
              line: 57,
              column: 23
            },
            end: {
              line: 59,
              column: 3
            }
          },
          line: 57
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 63,
              column: 2
            },
            end: {
              line: 63,
              column: 3
            }
          },
          loc: {
            start: {
              line: 63,
              column: 9
            },
            end: {
              line: 128,
              column: 3
            }
          },
          line: 63
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 110,
              column: 21
            },
            end: {
              line: 110,
              column: 22
            }
          },
          loc: {
            start: {
              line: 110,
              column: 27
            },
            end: {
              line: 121,
              column: 5
            }
          },
          line: 110
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 130,
              column: 2
            },
            end: {
              line: 130,
              column: 3
            }
          },
          loc: {
            start: {
              line: 130,
              column: 12
            },
            end: {
              line: 133,
              column: 3
            }
          },
          line: 130
        },
        "5": {
          name: "(anonymous_5)",
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
              column: 42
            },
            end: {
              line: 160,
              column: 3
            }
          },
          line: 137
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 144,
              column: 21
            },
            end: {
              line: 144,
              column: 22
            }
          },
          loc: {
            start: {
              line: 144,
              column: 27
            },
            end: {
              line: 148,
              column: 5
            }
          },
          line: 144
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 162,
              column: 2
            },
            end: {
              line: 162,
              column: 3
            }
          },
          loc: {
            start: {
              line: 162,
              column: 49
            },
            end: {
              line: 205,
              column: 3
            }
          },
          line: 162
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 209,
              column: 2
            },
            end: {
              line: 209,
              column: 3
            }
          },
          loc: {
            start: {
              line: 209,
              column: 34
            },
            end: {
              line: 227,
              column: 3
            }
          },
          line: 209
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 210,
              column: 21
            },
            end: {
              line: 210,
              column: 22
            }
          },
          loc: {
            start: {
              line: 210,
              column: 33
            },
            end: {
              line: 226,
              column: 5
            }
          },
          line: 210
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 237,
              column: 50
            },
            end: {
              line: 237,
              column: 51
            }
          },
          loc: {
            start: {
              line: 237,
              column: 67
            },
            end: {
              line: 240,
              column: 3
            }
          },
          line: 237
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 250,
              column: 24
            },
            end: {
              line: 250,
              column: 25
            }
          },
          loc: {
            start: {
              line: 250,
              column: 30
            },
            end: {
              line: 253,
              column: 1
            }
          },
          line: 250
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 64,
              column: 4
            },
            end: {
              line: 69,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 64,
              column: 4
            },
            end: {
              line: 69,
              column: 5
            }
          }, {
            start: {
              line: 64,
              column: 4
            },
            end: {
              line: 69,
              column: 5
            }
          }],
          line: 64
        },
        "1": {
          loc: {
            start: {
              line: 64,
              column: 8
            },
            end: {
              line: 67,
              column: 54
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 64,
              column: 8
            },
            end: {
              line: 64,
              column: 32
            }
          }, {
            start: {
              line: 65,
              column: 8
            },
            end: {
              line: 65,
              column: 63
            }
          }, {
            start: {
              line: 66,
              column: 8
            },
            end: {
              line: 66,
              column: 52
            }
          }, {
            start: {
              line: 67,
              column: 8
            },
            end: {
              line: 67,
              column: 54
            }
          }],
          line: 64
        },
        "2": {
          loc: {
            start: {
              line: 76,
              column: 4
            },
            end: {
              line: 80,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 76,
              column: 4
            },
            end: {
              line: 80,
              column: 5
            }
          }, {
            start: {
              line: 76,
              column: 4
            },
            end: {
              line: 80,
              column: 5
            }
          }],
          line: 76
        },
        "3": {
          loc: {
            start: {
              line: 77,
              column: 27
            },
            end: {
              line: 77,
              column: 128
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 77,
              column: 92
            },
            end: {
              line: 77,
              column: 110
            }
          }, {
            start: {
              line: 77,
              column: 113
            },
            end: {
              line: 77,
              column: 128
            }
          }],
          line: 77
        },
        "4": {
          loc: {
            start: {
              line: 77,
              column: 27
            },
            end: {
              line: 77,
              column: 89
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 77,
              column: 27
            },
            end: {
              line: 77,
              column: 56
            }
          }, {
            start: {
              line: 77,
              column: 60
            },
            end: {
              line: 77,
              column: 89
            }
          }],
          line: 77
        },
        "5": {
          loc: {
            start: {
              line: 90,
              column: 4
            },
            end: {
              line: 92,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 90,
              column: 4
            },
            end: {
              line: 92,
              column: 5
            }
          }, {
            start: {
              line: 90,
              column: 4
            },
            end: {
              line: 92,
              column: 5
            }
          }],
          line: 90
        },
        "6": {
          loc: {
            start: {
              line: 96,
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
              line: 96,
              column: 4
            },
            end: {
              line: 99,
              column: 5
            }
          }, {
            start: {
              line: 96,
              column: 4
            },
            end: {
              line: 99,
              column: 5
            }
          }],
          line: 96
        },
        "7": {
          loc: {
            start: {
              line: 96,
              column: 8
            },
            end: {
              line: 97,
              column: 38
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 96,
              column: 8
            },
            end: {
              line: 96,
              column: 38
            }
          }, {
            start: {
              line: 97,
              column: 8
            },
            end: {
              line: 97,
              column: 38
            }
          }],
          line: 96
        },
        "8": {
          loc: {
            start: {
              line: 101,
              column: 4
            },
            end: {
              line: 103,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 101,
              column: 4
            },
            end: {
              line: 103,
              column: 5
            }
          }, {
            start: {
              line: 101,
              column: 4
            },
            end: {
              line: 103,
              column: 5
            }
          }],
          line: 101
        },
        "9": {
          loc: {
            start: {
              line: 123,
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
              line: 123,
              column: 4
            },
            end: {
              line: 127,
              column: 5
            }
          }, {
            start: {
              line: 123,
              column: 4
            },
            end: {
              line: 127,
              column: 5
            }
          }],
          line: 123
        },
        "10": {
          loc: {
            start: {
              line: 138,
              column: 27
            },
            end: {
              line: 140,
              column: 44
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 139,
              column: 6
            },
            end: {
              line: 139,
              column: 43
            }
          }, {
            start: {
              line: 140,
              column: 6
            },
            end: {
              line: 140,
              column: 44
            }
          }],
          line: 138
        },
        "11": {
          loc: {
            start: {
              line: 138,
              column: 27
            },
            end: {
              line: 138,
              column: 100
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 138,
              column: 27
            },
            end: {
              line: 138,
              column: 36
            }
          }, {
            start: {
              line: 138,
              column: 41
            },
            end: {
              line: 138,
              column: 68
            }
          }, {
            start: {
              line: 138,
              column: 72
            },
            end: {
              line: 138,
              column: 99
            }
          }],
          line: 138
        },
        "12": {
          loc: {
            start: {
              line: 143,
              column: 28
            },
            end: {
              line: 143,
              column: 87
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 143,
              column: 28
            },
            end: {
              line: 143,
              column: 36
            }
          }, {
            start: {
              line: 143,
              column: 41
            },
            end: {
              line: 143,
              column: 47
            }
          }, {
            start: {
              line: 143,
              column: 51
            },
            end: {
              line: 143,
              column: 86
            }
          }],
          line: 143
        },
        "13": {
          loc: {
            start: {
              line: 150,
              column: 4
            },
            end: {
              line: 159,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 150,
              column: 4
            },
            end: {
              line: 159,
              column: 5
            }
          }, {
            start: {
              line: 150,
              column: 4
            },
            end: {
              line: 159,
              column: 5
            }
          }],
          line: 150
        },
        "14": {
          loc: {
            start: {
              line: 150,
              column: 8
            },
            end: {
              line: 150,
              column: 33
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 150,
              column: 8
            },
            end: {
              line: 150,
              column: 14
            }
          }, {
            start: {
              line: 150,
              column: 18
            },
            end: {
              line: 150,
              column: 33
            }
          }],
          line: 150
        },
        "15": {
          loc: {
            start: {
              line: 163,
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
              line: 163,
              column: 4
            },
            end: {
              line: 177,
              column: 5
            }
          }, {
            start: {
              line: 163,
              column: 4
            },
            end: {
              line: 177,
              column: 5
            }
          }],
          line: 163
        },
        "16": {
          loc: {
            start: {
              line: 170,
              column: 6
            },
            end: {
              line: 172,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 170,
              column: 6
            },
            end: {
              line: 172,
              column: 7
            }
          }, {
            start: {
              line: 170,
              column: 6
            },
            end: {
              line: 172,
              column: 7
            }
          }],
          line: 170
        },
        "17": {
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
        "18": {
          loc: {
            start: {
              line: 180,
              column: 4
            },
            end: {
              line: 182,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 180,
              column: 4
            },
            end: {
              line: 182,
              column: 5
            }
          }, {
            start: {
              line: 180,
              column: 4
            },
            end: {
              line: 182,
              column: 5
            }
          }],
          line: 180
        },
        "19": {
          loc: {
            start: {
              line: 186,
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
              line: 186,
              column: 4
            },
            end: {
              line: 188,
              column: 5
            }
          }, {
            start: {
              line: 186,
              column: 4
            },
            end: {
              line: 188,
              column: 5
            }
          }],
          line: 186
        },
        "20": {
          loc: {
            start: {
              line: 190,
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
              line: 190,
              column: 4
            },
            end: {
              line: 200,
              column: 5
            }
          }, {
            start: {
              line: 190,
              column: 4
            },
            end: {
              line: 200,
              column: 5
            }
          }],
          line: 190
        },
        "21": {
          loc: {
            start: {
              line: 190,
              column: 8
            },
            end: {
              line: 190,
              column: 86
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 190,
              column: 8
            },
            end: {
              line: 190,
              column: 26
            }
          }, {
            start: {
              line: 190,
              column: 30
            },
            end: {
              line: 190,
              column: 86
            }
          }],
          line: 190
        },
        "22": {
          loc: {
            start: {
              line: 193,
              column: 6
            },
            end: {
              line: 197,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 193,
              column: 6
            },
            end: {
              line: 197,
              column: 7
            }
          }, {
            start: {
              line: 193,
              column: 6
            },
            end: {
              line: 197,
              column: 7
            }
          }],
          line: 193
        },
        "23": {
          loc: {
            start: {
              line: 202,
              column: 4
            },
            end: {
              line: 204,
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
              line: 204,
              column: 5
            }
          }, {
            start: {
              line: 202,
              column: 4
            },
            end: {
              line: 204,
              column: 5
            }
          }],
          line: 202
        },
        "24": {
          loc: {
            start: {
              line: 214,
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
              line: 214,
              column: 6
            },
            end: {
              line: 217,
              column: 7
            }
          }, {
            start: {
              line: 214,
              column: 6
            },
            end: {
              line: 217,
              column: 7
            }
          }],
          line: 214
        },
        "25": {
          loc: {
            start: {
              line: 219,
              column: 6
            },
            end: {
              line: 225,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 219,
              column: 6
            },
            end: {
              line: 225,
              column: 7
            }
          }, {
            start: {
              line: 219,
              column: 6
            },
            end: {
              line: 225,
              column: 7
            }
          }],
          line: 219
        },
        "26": {
          loc: {
            start: {
              line: 220,
              column: 8
            },
            end: {
              line: 222,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 220,
              column: 8
            },
            end: {
              line: 222,
              column: 9
            }
          }, {
            start: {
              line: 220,
              column: 8
            },
            end: {
              line: 222,
              column: 9
            }
          }],
          line: 220
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
        "100": 0
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
        "11": 0
      },
      b: {
        "0": [0, 0],
        "1": [0, 0, 0, 0],
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
        "12": [0, 0, 0],
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
        "26": [0, 0]
      },
      _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
      hash: "26ba24df83c40762354a2aea52d6f9916d8d5f2d"
    };
    var coverage = global[gcv] || (global[gcv] = {});

    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }

    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_heer65qvl = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }

  cov_heer65qvl();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_heer65qvl().s[0]++, 'tab');
  var VERSION = (cov_heer65qvl().s[1]++, '4.6.0');
  var DATA_KEY = (cov_heer65qvl().s[2]++, 'bs.tab');
  var EVENT_KEY = (cov_heer65qvl().s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_heer65qvl().s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_heer65qvl().s[5]++, $__default['default'].fn[NAME]);
  var EVENT_HIDE = (cov_heer65qvl().s[6]++, "hide" + EVENT_KEY);
  var EVENT_HIDDEN = (cov_heer65qvl().s[7]++, "hidden" + EVENT_KEY);
  var EVENT_SHOW = (cov_heer65qvl().s[8]++, "show" + EVENT_KEY);
  var EVENT_SHOWN = (cov_heer65qvl().s[9]++, "shown" + EVENT_KEY);
  var EVENT_CLICK_DATA_API = (cov_heer65qvl().s[10]++, "click" + EVENT_KEY + DATA_API_KEY);
  var CLASS_NAME_DROPDOWN_MENU = (cov_heer65qvl().s[11]++, 'dropdown-menu');
  var CLASS_NAME_ACTIVE = (cov_heer65qvl().s[12]++, 'active');
  var CLASS_NAME_DISABLED = (cov_heer65qvl().s[13]++, 'disabled');
  var CLASS_NAME_FADE = (cov_heer65qvl().s[14]++, 'fade');
  var CLASS_NAME_SHOW = (cov_heer65qvl().s[15]++, 'show');
  var SELECTOR_DROPDOWN = (cov_heer65qvl().s[16]++, '.dropdown');
  var SELECTOR_NAV_LIST_GROUP = (cov_heer65qvl().s[17]++, '.nav, .list-group');
  var SELECTOR_ACTIVE = (cov_heer65qvl().s[18]++, '.active');
  var SELECTOR_ACTIVE_UL = (cov_heer65qvl().s[19]++, '> li > .active');
  var SELECTOR_DATA_TOGGLE = (cov_heer65qvl().s[20]++, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]');
  var SELECTOR_DROPDOWN_TOGGLE = (cov_heer65qvl().s[21]++, '.dropdown-toggle');
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = (cov_heer65qvl().s[22]++, '> .dropdown-menu .active');
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = /*#__PURE__*/function () {
    function Tab(element) {
      cov_heer65qvl().f[0]++;
      cov_heer65qvl().s[23]++;
      this._element = element;
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      cov_heer65qvl().f[2]++;
      cov_heer65qvl().s[25]++;

      if ((cov_heer65qvl().b[1][0]++, this._element.parentNode) && (cov_heer65qvl().b[1][1]++, this._element.parentNode.nodeType === Node.ELEMENT_NODE) && (cov_heer65qvl().b[1][2]++, $__default['default'](this._element).hasClass(CLASS_NAME_ACTIVE)) || (cov_heer65qvl().b[1][3]++, $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED))) {
        cov_heer65qvl().b[0][0]++;
        cov_heer65qvl().s[26]++;
        return;
      } else {
        cov_heer65qvl().b[0][1]++;
      }

      var target;
      var previous;
      var listElement = (cov_heer65qvl().s[27]++, $__default['default'](this._element).closest(SELECTOR_NAV_LIST_GROUP)[0]);
      var selector = (cov_heer65qvl().s[28]++, Util__default['default'].getSelectorFromElement(this._element));
      cov_heer65qvl().s[29]++;

      if (listElement) {
        cov_heer65qvl().b[2][0]++;
        var itemSelector = (cov_heer65qvl().s[30]++, (cov_heer65qvl().b[4][0]++, listElement.nodeName === 'UL') || (cov_heer65qvl().b[4][1]++, listElement.nodeName === 'OL') ? (cov_heer65qvl().b[3][0]++, SELECTOR_ACTIVE_UL) : (cov_heer65qvl().b[3][1]++, SELECTOR_ACTIVE));
        cov_heer65qvl().s[31]++;
        previous = $__default['default'].makeArray($__default['default'](listElement).find(itemSelector));
        cov_heer65qvl().s[32]++;
        previous = previous[previous.length - 1];
      } else {
        cov_heer65qvl().b[2][1]++;
      }

      var hideEvent = (cov_heer65qvl().s[33]++, $__default['default'].Event(EVENT_HIDE, {
        relatedTarget: this._element
      }));
      var showEvent = (cov_heer65qvl().s[34]++, $__default['default'].Event(EVENT_SHOW, {
        relatedTarget: previous
      }));
      cov_heer65qvl().s[35]++;

      if (previous) {
        cov_heer65qvl().b[5][0]++;
        cov_heer65qvl().s[36]++;
        $__default['default'](previous).trigger(hideEvent);
      } else {
        cov_heer65qvl().b[5][1]++;
      }

      cov_heer65qvl().s[37]++;
      $__default['default'](this._element).trigger(showEvent);
      cov_heer65qvl().s[38]++;

      if ((cov_heer65qvl().b[7][0]++, showEvent.isDefaultPrevented()) || (cov_heer65qvl().b[7][1]++, hideEvent.isDefaultPrevented())) {
        cov_heer65qvl().b[6][0]++;
        cov_heer65qvl().s[39]++;
        return;
      } else {
        cov_heer65qvl().b[6][1]++;
      }

      cov_heer65qvl().s[40]++;

      if (selector) {
        cov_heer65qvl().b[8][0]++;
        cov_heer65qvl().s[41]++;
        target = document.querySelector(selector);
      } else {
        cov_heer65qvl().b[8][1]++;
      }

      cov_heer65qvl().s[42]++;

      this._activate(this._element, listElement);

      cov_heer65qvl().s[43]++;

      var complete = function complete() {
        cov_heer65qvl().f[3]++;
        var hiddenEvent = (cov_heer65qvl().s[44]++, $__default['default'].Event(EVENT_HIDDEN, {
          relatedTarget: _this._element
        }));
        var shownEvent = (cov_heer65qvl().s[45]++, $__default['default'].Event(EVENT_SHOWN, {
          relatedTarget: previous
        }));
        cov_heer65qvl().s[46]++;
        $__default['default'](previous).trigger(hiddenEvent);
        cov_heer65qvl().s[47]++;
        $__default['default'](_this._element).trigger(shownEvent);
      };

      cov_heer65qvl().s[48]++;

      if (target) {
        cov_heer65qvl().b[9][0]++;
        cov_heer65qvl().s[49]++;

        this._activate(target, target.parentNode, complete);
      } else {
        cov_heer65qvl().b[9][1]++;
        cov_heer65qvl().s[50]++;
        complete();
      }
    };

    _proto.dispose = function dispose() {
      cov_heer65qvl().f[4]++;
      cov_heer65qvl().s[51]++;
      $__default['default'].removeData(this._element, DATA_KEY);
      cov_heer65qvl().s[52]++;
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      cov_heer65qvl().f[5]++;
      var activeElements = (cov_heer65qvl().s[53]++, (cov_heer65qvl().b[11][0]++, container) && ((cov_heer65qvl().b[11][1]++, container.nodeName === 'UL') || (cov_heer65qvl().b[11][2]++, container.nodeName === 'OL')) ? (cov_heer65qvl().b[10][0]++, $__default['default'](container).find(SELECTOR_ACTIVE_UL)) : (cov_heer65qvl().b[10][1]++, $__default['default'](container).children(SELECTOR_ACTIVE)));
      var active = (cov_heer65qvl().s[54]++, activeElements[0]);
      var isTransitioning = (cov_heer65qvl().s[55]++, (cov_heer65qvl().b[12][0]++, callback) && (cov_heer65qvl().b[12][1]++, active) && (cov_heer65qvl().b[12][2]++, $__default['default'](active).hasClass(CLASS_NAME_FADE)));
      cov_heer65qvl().s[56]++;

      var complete = function complete() {
        cov_heer65qvl().f[6]++;
        cov_heer65qvl().s[57]++;
        return _this2._transitionComplete(element, active, callback);
      };

      cov_heer65qvl().s[58]++;

      if ((cov_heer65qvl().b[14][0]++, active) && (cov_heer65qvl().b[14][1]++, isTransitioning)) {
        cov_heer65qvl().b[13][0]++;
        var transitionDuration = (cov_heer65qvl().s[59]++, Util__default['default'].getTransitionDurationFromElement(active));
        cov_heer65qvl().s[60]++;
        $__default['default'](active).removeClass(CLASS_NAME_SHOW).one(Util__default['default'].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        cov_heer65qvl().b[13][1]++;
        cov_heer65qvl().s[61]++;
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      cov_heer65qvl().f[7]++;
      cov_heer65qvl().s[62]++;

      if (active) {
        cov_heer65qvl().b[15][0]++;
        cov_heer65qvl().s[63]++;
        $__default['default'](active).removeClass(CLASS_NAME_ACTIVE);
        var dropdownChild = (cov_heer65qvl().s[64]++, $__default['default'](active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0]);
        cov_heer65qvl().s[65]++;

        if (dropdownChild) {
          cov_heer65qvl().b[16][0]++;
          cov_heer65qvl().s[66]++;
          $__default['default'](dropdownChild).removeClass(CLASS_NAME_ACTIVE);
        } else {
          cov_heer65qvl().b[16][1]++;
        }

        cov_heer65qvl().s[67]++;

        if (active.getAttribute('role') === 'tab') {
          cov_heer65qvl().b[17][0]++;
          cov_heer65qvl().s[68]++;
          active.setAttribute('aria-selected', false);
        } else {
          cov_heer65qvl().b[17][1]++;
        }
      } else {
        cov_heer65qvl().b[15][1]++;
      }

      cov_heer65qvl().s[69]++;
      $__default['default'](element).addClass(CLASS_NAME_ACTIVE);
      cov_heer65qvl().s[70]++;

      if (element.getAttribute('role') === 'tab') {
        cov_heer65qvl().b[18][0]++;
        cov_heer65qvl().s[71]++;
        element.setAttribute('aria-selected', true);
      } else {
        cov_heer65qvl().b[18][1]++;
      }

      cov_heer65qvl().s[72]++;
      Util__default['default'].reflow(element);
      cov_heer65qvl().s[73]++;

      if (element.classList.contains(CLASS_NAME_FADE)) {
        cov_heer65qvl().b[19][0]++;
        cov_heer65qvl().s[74]++;
        element.classList.add(CLASS_NAME_SHOW);
      } else {
        cov_heer65qvl().b[19][1]++;
      }

      cov_heer65qvl().s[75]++;

      if ((cov_heer65qvl().b[21][0]++, element.parentNode) && (cov_heer65qvl().b[21][1]++, $__default['default'](element.parentNode).hasClass(CLASS_NAME_DROPDOWN_MENU))) {
        cov_heer65qvl().b[20][0]++;
        var dropdownElement = (cov_heer65qvl().s[76]++, $__default['default'](element).closest(SELECTOR_DROPDOWN)[0]);
        cov_heer65qvl().s[77]++;

        if (dropdownElement) {
          cov_heer65qvl().b[22][0]++;
          var dropdownToggleList = (cov_heer65qvl().s[78]++, [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE)));
          cov_heer65qvl().s[79]++;
          $__default['default'](dropdownToggleList).addClass(CLASS_NAME_ACTIVE);
        } else {
          cov_heer65qvl().b[22][1]++;
        }

        cov_heer65qvl().s[80]++;
        element.setAttribute('aria-expanded', true);
      } else {
        cov_heer65qvl().b[20][1]++;
      }

      cov_heer65qvl().s[81]++;

      if (callback) {
        cov_heer65qvl().b[23][0]++;
        cov_heer65qvl().s[82]++;
        callback();
      } else {
        cov_heer65qvl().b[23][1]++;
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      cov_heer65qvl().f[8]++;
      cov_heer65qvl().s[83]++;
      return this.each(function () {
        cov_heer65qvl().f[9]++;
        var $this = (cov_heer65qvl().s[84]++, $__default['default'](this));
        var data = (cov_heer65qvl().s[85]++, $this.data(DATA_KEY));
        cov_heer65qvl().s[86]++;

        if (!data) {
          cov_heer65qvl().b[24][0]++;
          cov_heer65qvl().s[87]++;
          data = new Tab(this);
          cov_heer65qvl().s[88]++;
          $this.data(DATA_KEY, data);
        } else {
          cov_heer65qvl().b[24][1]++;
        }

        cov_heer65qvl().s[89]++;

        if (typeof config === 'string') {
          cov_heer65qvl().b[25][0]++;
          cov_heer65qvl().s[90]++;

          if (typeof data[config] === 'undefined') {
            cov_heer65qvl().b[26][0]++;
            cov_heer65qvl().s[91]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_heer65qvl().b[26][1]++;
          }

          cov_heer65qvl().s[92]++;
          data[config]();
        } else {
          cov_heer65qvl().b[25][1]++;
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        cov_heer65qvl().f[1]++;
        cov_heer65qvl().s[24]++;
        return VERSION;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  cov_heer65qvl().s[93]++;
  $__default['default'](document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    cov_heer65qvl().f[10]++;
    cov_heer65qvl().s[94]++;
    event.preventDefault();
    cov_heer65qvl().s[95]++;

    Tab._jQueryInterface.call($__default['default'](this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  cov_heer65qvl().s[96]++;
  $__default['default'].fn[NAME] = Tab._jQueryInterface;
  cov_heer65qvl().s[97]++;
  $__default['default'].fn[NAME].Constructor = Tab;
  cov_heer65qvl().s[98]++;

  $__default['default'].fn[NAME].noConflict = function () {
    cov_heer65qvl().f[11]++;
    cov_heer65qvl().s[99]++;
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    cov_heer65qvl().s[100]++;
    return Tab._jQueryInterface;
  };

  return Tab;

})));
//# sourceMappingURL=tab.js.map

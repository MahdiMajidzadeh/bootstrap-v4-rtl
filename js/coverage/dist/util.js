/*!
  * Bootstrap util.js v4.6.0-2 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2021 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Util = factory(global.jQuery));
}(this, (function ($) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);

  function cov_21pdy8pr5e() {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/util.js";
    var hash = "1dc6462ca649fb34f6e972e090363a2287a8df99";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/util.js",
      statementMap: {
        "0": {
          start: {
            line: 16,
            column: 23
          },
          end: {
            line: 16,
            column: 38
          }
        },
        "1": {
          start: {
            line: 17,
            column: 16
          },
          end: {
            line: 17,
            column: 23
          }
        },
        "2": {
          start: {
            line: 18,
            column: 32
          },
          end: {
            line: 18,
            column: 36
          }
        },
        "3": {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 24,
            column: 3
          }
        },
        "4": {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 23,
            column: 19
          }
        },
        "5": {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 26,
            column: 68
          }
        },
        "6": {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 40,
            column: 3
          }
        },
        "7": {
          start: {
            line: 34,
            column: 6
          },
          end: {
            line: 36,
            column: 7
          }
        },
        "8": {
          start: {
            line: 35,
            column: 8
          },
          end: {
            line: 35,
            column: 61
          }
        },
        "9": {
          start: {
            line: 38,
            column: 6
          },
          end: {
            line: 38,
            column: 22
          }
        },
        "10": {
          start: {
            line: 44,
            column: 15
          },
          end: {
            line: 44,
            column: 20
          }
        },
        "11": {
          start: {
            line: 46,
            column: 2
          },
          end: {
            line: 48,
            column: 4
          }
        },
        "12": {
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 47,
            column: 17
          }
        },
        "13": {
          start: {
            line: 50,
            column: 2
          },
          end: {
            line: 54,
            column: 14
          }
        },
        "14": {
          start: {
            line: 51,
            column: 4
          },
          end: {
            line: 53,
            column: 5
          }
        },
        "15": {
          start: {
            line: 52,
            column: 6
          },
          end: {
            line: 52,
            column: 37
          }
        },
        "16": {
          start: {
            line: 56,
            column: 2
          },
          end: {
            line: 56,
            column: 13
          }
        },
        "17": {
          start: {
            line: 60,
            column: 2
          },
          end: {
            line: 60,
            column: 51
          }
        },
        "18": {
          start: {
            line: 61,
            column: 2
          },
          end: {
            line: 61,
            column: 71
          }
        },
        "19": {
          start: {
            line: 70,
            column: 13
          },
          end: {
            line: 193,
            column: 1
          }
        },
        "20": {
          start: {
            line: 74,
            column: 4
          },
          end: {
            line: 76,
            column: 45
          }
        },
        "21": {
          start: {
            line: 75,
            column: 6
          },
          end: {
            line: 75,
            column: 43
          }
        },
        "22": {
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 78,
            column: 17
          }
        },
        "23": {
          start: {
            line: 82,
            column: 19
          },
          end: {
            line: 82,
            column: 54
          }
        },
        "24": {
          start: {
            line: 84,
            column: 4
          },
          end: {
            line: 87,
            column: 5
          }
        },
        "25": {
          start: {
            line: 85,
            column: 23
          },
          end: {
            line: 85,
            column: 51
          }
        },
        "26": {
          start: {
            line: 86,
            column: 6
          },
          end: {
            line: 86,
            column: 68
          }
        },
        "27": {
          start: {
            line: 89,
            column: 4
          },
          end: {
            line: 93,
            column: 5
          }
        },
        "28": {
          start: {
            line: 90,
            column: 6
          },
          end: {
            line: 90,
            column: 63
          }
        },
        "29": {
          start: {
            line: 92,
            column: 6
          },
          end: {
            line: 92,
            column: 17
          }
        },
        "30": {
          start: {
            line: 97,
            column: 4
          },
          end: {
            line: 99,
            column: 5
          }
        },
        "31": {
          start: {
            line: 98,
            column: 6
          },
          end: {
            line: 98,
            column: 14
          }
        },
        "32": {
          start: {
            line: 102,
            column: 29
          },
          end: {
            line: 102,
            column: 66
          }
        },
        "33": {
          start: {
            line: 103,
            column: 26
          },
          end: {
            line: 103,
            column: 60
          }
        },
        "34": {
          start: {
            line: 105,
            column: 36
          },
          end: {
            line: 105,
            column: 66
          }
        },
        "35": {
          start: {
            line: 106,
            column: 33
          },
          end: {
            line: 106,
            column: 60
          }
        },
        "36": {
          start: {
            line: 109,
            column: 4
          },
          end: {
            line: 111,
            column: 5
          }
        },
        "37": {
          start: {
            line: 110,
            column: 6
          },
          end: {
            line: 110,
            column: 14
          }
        },
        "38": {
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 114,
            column: 57
          }
        },
        "39": {
          start: {
            line: 115,
            column: 4
          },
          end: {
            line: 115,
            column: 51
          }
        },
        "40": {
          start: {
            line: 117,
            column: 4
          },
          end: {
            line: 117,
            column: 99
          }
        },
        "41": {
          start: {
            line: 121,
            column: 4
          },
          end: {
            line: 121,
            column: 31
          }
        },
        "42": {
          start: {
            line: 125,
            column: 4
          },
          end: {
            line: 125,
            column: 38
          }
        },
        "43": {
          start: {
            line: 129,
            column: 4
          },
          end: {
            line: 129,
            column: 34
          }
        },
        "44": {
          start: {
            line: 133,
            column: 4
          },
          end: {
            line: 133,
            column: 35
          }
        },
        "45": {
          start: {
            line: 137,
            column: 4
          },
          end: {
            line: 151,
            column: 5
          }
        },
        "46": {
          start: {
            line: 138,
            column: 6
          },
          end: {
            line: 150,
            column: 7
          }
        },
        "47": {
          start: {
            line: 139,
            column: 30
          },
          end: {
            line: 139,
            column: 51
          }
        },
        "48": {
          start: {
            line: 140,
            column: 22
          },
          end: {
            line: 140,
            column: 38
          }
        },
        "49": {
          start: {
            line: 141,
            column: 26
          },
          end: {
            line: 142,
            column: 35
          }
        },
        "50": {
          start: {
            line: 144,
            column: 8
          },
          end: {
            line: 149,
            column: 9
          }
        },
        "51": {
          start: {
            line: 145,
            column: 10
          },
          end: {
            line: 148,
            column: 52
          }
        },
        "52": {
          start: {
            line: 155,
            column: 4
          },
          end: {
            line: 157,
            column: 5
          }
        },
        "53": {
          start: {
            line: 156,
            column: 6
          },
          end: {
            line: 156,
            column: 17
          }
        },
        "54": {
          start: {
            line: 160,
            column: 4
          },
          end: {
            line: 163,
            column: 5
          }
        },
        "55": {
          start: {
            line: 161,
            column: 19
          },
          end: {
            line: 161,
            column: 40
          }
        },
        "56": {
          start: {
            line: 162,
            column: 6
          },
          end: {
            line: 162,
            column: 53
          }
        },
        "57": {
          start: {
            line: 165,
            column: 4
          },
          end: {
            line: 167,
            column: 5
          }
        },
        "58": {
          start: {
            line: 166,
            column: 6
          },
          end: {
            line: 166,
            column: 20
          }
        },
        "59": {
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 172,
            column: 5
          }
        },
        "60": {
          start: {
            line: 171,
            column: 6
          },
          end: {
            line: 171,
            column: 17
          }
        },
        "61": {
          start: {
            line: 174,
            column: 4
          },
          end: {
            line: 174,
            column: 50
          }
        },
        "62": {
          start: {
            line: 178,
            column: 4
          },
          end: {
            line: 180,
            column: 5
          }
        },
        "63": {
          start: {
            line: 179,
            column: 6
          },
          end: {
            line: 179,
            column: 125
          }
        },
        "64": {
          start: {
            line: 182,
            column: 20
          },
          end: {
            line: 182,
            column: 56
          }
        },
        "65": {
          start: {
            line: 183,
            column: 21
          },
          end: {
            line: 183,
            column: 22
          }
        },
        "66": {
          start: {
            line: 184,
            column: 20
          },
          end: {
            line: 184,
            column: 21
          }
        },
        "67": {
          start: {
            line: 185,
            column: 21
          },
          end: {
            line: 185,
            column: 22
          }
        },
        "68": {
          start: {
            line: 186,
            column: 21
          },
          end: {
            line: 186,
            column: 22
          }
        },
        "69": {
          start: {
            line: 187,
            column: 21
          },
          end: {
            line: 187,
            column: 22
          }
        },
        "70": {
          start: {
            line: 189,
            column: 4
          },
          end: {
            line: 191,
            column: 5
          }
        },
        "71": {
          start: {
            line: 190,
            column: 6
          },
          end: {
            line: 190,
            column: 101
          }
        },
        "72": {
          start: {
            line: 195,
            column: 0
          },
          end: {
            line: 195,
            column: 22
          }
        },
        "73": {
          start: {
            line: 196,
            column: 0
          },
          end: {
            line: 196,
            column: 25
          }
        }
      },
      fnMap: {
        "0": {
          name: "toType",
          decl: {
            start: {
              line: 21,
              column: 9
            },
            end: {
              line: 21,
              column: 15
            }
          },
          loc: {
            start: {
              line: 21,
              column: 21
            },
            end: {
              line: 27,
              column: 1
            }
          },
          line: 21
        },
        "1": {
          name: "getSpecialTransitionEndEvent",
          decl: {
            start: {
              line: 29,
              column: 9
            },
            end: {
              line: 29,
              column: 37
            }
          },
          loc: {
            start: {
              line: 29,
              column: 40
            },
            end: {
              line: 41,
              column: 1
            }
          },
          line: 29
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 33,
              column: 4
            },
            end: {
              line: 33,
              column: 5
            }
          },
          loc: {
            start: {
              line: 33,
              column: 18
            },
            end: {
              line: 39,
              column: 5
            }
          },
          line: 33
        },
        "3": {
          name: "transitionEndEmulator",
          decl: {
            start: {
              line: 43,
              column: 9
            },
            end: {
              line: 43,
              column: 30
            }
          },
          loc: {
            start: {
              line: 43,
              column: 41
            },
            end: {
              line: 57,
              column: 1
            }
          },
          line: 43
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 46,
              column: 35
            },
            end: {
              line: 46,
              column: 36
            }
          },
          loc: {
            start: {
              line: 46,
              column: 41
            },
            end: {
              line: 48,
              column: 3
            }
          },
          line: 46
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 50,
              column: 13
            },
            end: {
              line: 50,
              column: 14
            }
          },
          loc: {
            start: {
              line: 50,
              column: 19
            },
            end: {
              line: 54,
              column: 3
            }
          },
          line: 50
        },
        "6": {
          name: "setTransitionEndSupport",
          decl: {
            start: {
              line: 59,
              column: 9
            },
            end: {
              line: 59,
              column: 32
            }
          },
          loc: {
            start: {
              line: 59,
              column: 35
            },
            end: {
              line: 62,
              column: 1
            }
          },
          line: 59
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 73,
              column: 2
            },
            end: {
              line: 73,
              column: 3
            }
          },
          loc: {
            start: {
              line: 73,
              column: 17
            },
            end: {
              line: 79,
              column: 3
            }
          },
          line: 73
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 81,
              column: 2
            },
            end: {
              line: 81,
              column: 3
            }
          },
          loc: {
            start: {
              line: 81,
              column: 34
            },
            end: {
              line: 94,
              column: 3
            }
          },
          line: 81
        },
        "9": {
          name: "(anonymous_9)",
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
              column: 44
            },
            end: {
              line: 118,
              column: 3
            }
          },
          line: 96
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 120,
              column: 2
            },
            end: {
              line: 120,
              column: 3
            }
          },
          loc: {
            start: {
              line: 120,
              column: 18
            },
            end: {
              line: 122,
              column: 3
            }
          },
          line: 120
        },
        "11": {
          name: "(anonymous_11)",
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
              column: 32
            },
            end: {
              line: 126,
              column: 3
            }
          },
          line: 124
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 128,
              column: 2
            },
            end: {
              line: 128,
              column: 3
            }
          },
          loc: {
            start: {
              line: 128,
              column: 26
            },
            end: {
              line: 130,
              column: 3
            }
          },
          line: 128
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 132,
              column: 2
            },
            end: {
              line: 132,
              column: 3
            }
          },
          loc: {
            start: {
              line: 132,
              column: 17
            },
            end: {
              line: 134,
              column: 3
            }
          },
          line: 132
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 136,
              column: 2
            },
            end: {
              line: 136,
              column: 3
            }
          },
          loc: {
            start: {
              line: 136,
              column: 54
            },
            end: {
              line: 152,
              column: 3
            }
          },
          line: 136
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 154,
              column: 2
            },
            end: {
              line: 154,
              column: 3
            }
          },
          loc: {
            start: {
              line: 154,
              column: 26
            },
            end: {
              line: 175,
              column: 3
            }
          },
          line: 154
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 177,
              column: 2
            },
            end: {
              line: 177,
              column: 3
            }
          },
          loc: {
            start: {
              line: 177,
              column: 20
            },
            end: {
              line: 192,
              column: 3
            }
          },
          line: 177
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 22,
              column: 2
            },
            end: {
              line: 24,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 22,
              column: 2
            },
            end: {
              line: 24,
              column: 3
            }
          }, {
            start: {
              line: 22,
              column: 2
            },
            end: {
              line: 24,
              column: 3
            }
          }],
          line: 22
        },
        "1": {
          loc: {
            start: {
              line: 22,
              column: 6
            },
            end: {
              line: 22,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 22,
              column: 6
            },
            end: {
              line: 22,
              column: 18
            }
          }, {
            start: {
              line: 22,
              column: 22
            },
            end: {
              line: 22,
              column: 48
            }
          }],
          line: 22
        },
        "2": {
          loc: {
            start: {
              line: 34,
              column: 6
            },
            end: {
              line: 36,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 34,
              column: 6
            },
            end: {
              line: 36,
              column: 7
            }
          }, {
            start: {
              line: 34,
              column: 6
            },
            end: {
              line: 36,
              column: 7
            }
          }],
          line: 34
        },
        "3": {
          loc: {
            start: {
              line: 51,
              column: 4
            },
            end: {
              line: 53,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 51,
              column: 4
            },
            end: {
              line: 53,
              column: 5
            }
          }, {
            start: {
              line: 51,
              column: 4
            },
            end: {
              line: 53,
              column: 5
            }
          }],
          line: 51
        },
        "4": {
          loc: {
            start: {
              line: 84,
              column: 4
            },
            end: {
              line: 87,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 84,
              column: 4
            },
            end: {
              line: 87,
              column: 5
            }
          }, {
            start: {
              line: 84,
              column: 4
            },
            end: {
              line: 87,
              column: 5
            }
          }],
          line: 84
        },
        "5": {
          loc: {
            start: {
              line: 84,
              column: 8
            },
            end: {
              line: 84,
              column: 37
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 84,
              column: 8
            },
            end: {
              line: 84,
              column: 17
            }
          }, {
            start: {
              line: 84,
              column: 21
            },
            end: {
              line: 84,
              column: 37
            }
          }],
          line: 84
        },
        "6": {
          loc: {
            start: {
              line: 86,
              column: 17
            },
            end: {
              line: 86,
              column: 68
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 86,
              column: 48
            },
            end: {
              line: 86,
              column: 63
            }
          }, {
            start: {
              line: 86,
              column: 66
            },
            end: {
              line: 86,
              column: 68
            }
          }],
          line: 86
        },
        "7": {
          loc: {
            start: {
              line: 86,
              column: 17
            },
            end: {
              line: 86,
              column: 45
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 86,
              column: 17
            },
            end: {
              line: 86,
              column: 25
            }
          }, {
            start: {
              line: 86,
              column: 29
            },
            end: {
              line: 86,
              column: 45
            }
          }],
          line: 86
        },
        "8": {
          loc: {
            start: {
              line: 90,
              column: 13
            },
            end: {
              line: 90,
              column: 63
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 90,
              column: 48
            },
            end: {
              line: 90,
              column: 56
            }
          }, {
            start: {
              line: 90,
              column: 59
            },
            end: {
              line: 90,
              column: 63
            }
          }],
          line: 90
        },
        "9": {
          loc: {
            start: {
              line: 97,
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
              line: 97,
              column: 4
            },
            end: {
              line: 99,
              column: 5
            }
          }, {
            start: {
              line: 97,
              column: 4
            },
            end: {
              line: 99,
              column: 5
            }
          }],
          line: 97
        },
        "10": {
          loc: {
            start: {
              line: 109,
              column: 4
            },
            end: {
              line: 111,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 109,
              column: 4
            },
            end: {
              line: 111,
              column: 5
            }
          }, {
            start: {
              line: 109,
              column: 4
            },
            end: {
              line: 111,
              column: 5
            }
          }],
          line: 109
        },
        "11": {
          loc: {
            start: {
              line: 109,
              column: 8
            },
            end: {
              line: 109,
              column: 57
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 109,
              column: 8
            },
            end: {
              line: 109,
              column: 32
            }
          }, {
            start: {
              line: 109,
              column: 36
            },
            end: {
              line: 109,
              column: 57
            }
          }],
          line: 109
        },
        "12": {
          loc: {
            start: {
              line: 133,
              column: 12
            },
            end: {
              line: 133,
              column: 25
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 133,
              column: 12
            },
            end: {
              line: 133,
              column: 18
            }
          }, {
            start: {
              line: 133,
              column: 22
            },
            end: {
              line: 133,
              column: 25
            }
          }],
          line: 133
        },
        "13": {
          loc: {
            start: {
              line: 138,
              column: 6
            },
            end: {
              line: 150,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 138,
              column: 6
            },
            end: {
              line: 150,
              column: 7
            }
          }, {
            start: {
              line: 138,
              column: 6
            },
            end: {
              line: 150,
              column: 7
            }
          }],
          line: 138
        },
        "14": {
          loc: {
            start: {
              line: 141,
              column: 26
            },
            end: {
              line: 142,
              column: 35
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 142,
              column: 10
            },
            end: {
              line: 142,
              column: 19
            }
          }, {
            start: {
              line: 142,
              column: 22
            },
            end: {
              line: 142,
              column: 35
            }
          }],
          line: 141
        },
        "15": {
          loc: {
            start: {
              line: 141,
              column: 26
            },
            end: {
              line: 141,
              column: 56
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 141,
              column: 26
            },
            end: {
              line: 141,
              column: 31
            }
          }, {
            start: {
              line: 141,
              column: 35
            },
            end: {
              line: 141,
              column: 56
            }
          }],
          line: 141
        },
        "16": {
          loc: {
            start: {
              line: 144,
              column: 8
            },
            end: {
              line: 149,
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
              line: 149,
              column: 9
            }
          }, {
            start: {
              line: 144,
              column: 8
            },
            end: {
              line: 149,
              column: 9
            }
          }],
          line: 144
        },
        "17": {
          loc: {
            start: {
              line: 155,
              column: 4
            },
            end: {
              line: 157,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 155,
              column: 4
            },
            end: {
              line: 157,
              column: 5
            }
          }, {
            start: {
              line: 155,
              column: 4
            },
            end: {
              line: 157,
              column: 5
            }
          }],
          line: 155
        },
        "18": {
          loc: {
            start: {
              line: 160,
              column: 4
            },
            end: {
              line: 163,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 160,
              column: 4
            },
            end: {
              line: 163,
              column: 5
            }
          }, {
            start: {
              line: 160,
              column: 4
            },
            end: {
              line: 163,
              column: 5
            }
          }],
          line: 160
        },
        "19": {
          loc: {
            start: {
              line: 162,
              column: 13
            },
            end: {
              line: 162,
              column: 53
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 162,
              column: 42
            },
            end: {
              line: 162,
              column: 46
            }
          }, {
            start: {
              line: 162,
              column: 49
            },
            end: {
              line: 162,
              column: 53
            }
          }],
          line: 162
        },
        "20": {
          loc: {
            start: {
              line: 165,
              column: 4
            },
            end: {
              line: 167,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 165,
              column: 4
            },
            end: {
              line: 167,
              column: 5
            }
          }, {
            start: {
              line: 165,
              column: 4
            },
            end: {
              line: 167,
              column: 5
            }
          }],
          line: 165
        },
        "21": {
          loc: {
            start: {
              line: 170,
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
              line: 170,
              column: 4
            },
            end: {
              line: 172,
              column: 5
            }
          }, {
            start: {
              line: 170,
              column: 4
            },
            end: {
              line: 172,
              column: 5
            }
          }],
          line: 170
        },
        "22": {
          loc: {
            start: {
              line: 178,
              column: 4
            },
            end: {
              line: 180,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 178,
              column: 4
            },
            end: {
              line: 180,
              column: 5
            }
          }, {
            start: {
              line: 178,
              column: 4
            },
            end: {
              line: 180,
              column: 5
            }
          }],
          line: 178
        },
        "23": {
          loc: {
            start: {
              line: 189,
              column: 4
            },
            end: {
              line: 191,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 189,
              column: 4
            },
            end: {
              line: 191,
              column: 5
            }
          }, {
            start: {
              line: 189,
              column: 4
            },
            end: {
              line: 191,
              column: 5
            }
          }],
          line: 189
        },
        "24": {
          loc: {
            start: {
              line: 189,
              column: 8
            },
            end: {
              line: 189,
              column: 158
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 189,
              column: 8
            },
            end: {
              line: 189,
              column: 28
            }
          }, {
            start: {
              line: 189,
              column: 32
            },
            end: {
              line: 189,
              column: 53
            }
          }, {
            start: {
              line: 189,
              column: 57
            },
            end: {
              line: 189,
              column: 80
            }
          }, {
            start: {
              line: 189,
              column: 84
            },
            end: {
              line: 189,
              column: 107
            }
          }, {
            start: {
              line: 189,
              column: 111
            },
            end: {
              line: 189,
              column: 132
            }
          }, {
            start: {
              line: 189,
              column: 136
            },
            end: {
              line: 189,
              column: 158
            }
          }],
          line: 189
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
        "73": 0
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
        "24": [0, 0, 0, 0, 0, 0]
      },
      _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
      hash: "1dc6462ca649fb34f6e972e090363a2287a8df99"
    };
    var coverage = global[gcv] || (global[gcv] = {});

    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }

    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_21pdy8pr5e = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }

  cov_21pdy8pr5e();
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = (cov_21pdy8pr5e().s[0]++, 'transitionend');
  var MAX_UID = (cov_21pdy8pr5e().s[1]++, 1000000);
  var MILLISECONDS_MULTIPLIER = (cov_21pdy8pr5e().s[2]++, 1000); // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    cov_21pdy8pr5e().f[0]++;
    cov_21pdy8pr5e().s[3]++;

    if ((cov_21pdy8pr5e().b[1][0]++, obj === null) || (cov_21pdy8pr5e().b[1][1]++, typeof obj === 'undefined')) {
      cov_21pdy8pr5e().b[0][0]++;
      cov_21pdy8pr5e().s[4]++;
      return "" + obj;
    } else {
      cov_21pdy8pr5e().b[0][1]++;
    }

    cov_21pdy8pr5e().s[5]++;
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    cov_21pdy8pr5e().f[1]++;
    cov_21pdy8pr5e().s[6]++;
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        cov_21pdy8pr5e().f[2]++;
        cov_21pdy8pr5e().s[7]++;

        if ($__default['default'](event.target).is(this)) {
          cov_21pdy8pr5e().b[2][0]++;
          cov_21pdy8pr5e().s[8]++;
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        } else {
          cov_21pdy8pr5e().b[2][1]++;
        }

        cov_21pdy8pr5e().s[9]++;
        return undefined;
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    cov_21pdy8pr5e().f[3]++;
    var called = (cov_21pdy8pr5e().s[10]++, false);
    cov_21pdy8pr5e().s[11]++;
    $__default['default'](this).one(Util.TRANSITION_END, function () {
      cov_21pdy8pr5e().f[4]++;
      cov_21pdy8pr5e().s[12]++;
      called = true;
    });
    cov_21pdy8pr5e().s[13]++;
    setTimeout(function () {
      cov_21pdy8pr5e().f[5]++;
      cov_21pdy8pr5e().s[14]++;

      if (!called) {
        cov_21pdy8pr5e().b[3][0]++;
        cov_21pdy8pr5e().s[15]++;
        Util.triggerTransitionEnd(_this);
      } else {
        cov_21pdy8pr5e().b[3][1]++;
      }
    }, duration);
    cov_21pdy8pr5e().s[16]++;
    return this;
  }

  function setTransitionEndSupport() {
    cov_21pdy8pr5e().f[6]++;
    cov_21pdy8pr5e().s[17]++;
    $__default['default'].fn.emulateTransitionEnd = transitionEndEmulator;
    cov_21pdy8pr5e().s[18]++;
    $__default['default'].event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = (cov_21pdy8pr5e().s[19]++, {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      cov_21pdy8pr5e().f[7]++;
      cov_21pdy8pr5e().s[20]++;

      do {
        cov_21pdy8pr5e().s[21]++;
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      cov_21pdy8pr5e().s[22]++;
      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      cov_21pdy8pr5e().f[8]++;
      var selector = (cov_21pdy8pr5e().s[23]++, element.getAttribute('data-target'));
      cov_21pdy8pr5e().s[24]++;

      if ((cov_21pdy8pr5e().b[5][0]++, !selector) || (cov_21pdy8pr5e().b[5][1]++, selector === '#')) {
        cov_21pdy8pr5e().b[4][0]++;
        var hrefAttr = (cov_21pdy8pr5e().s[25]++, element.getAttribute('href'));
        cov_21pdy8pr5e().s[26]++;
        selector = (cov_21pdy8pr5e().b[7][0]++, hrefAttr) && (cov_21pdy8pr5e().b[7][1]++, hrefAttr !== '#') ? (cov_21pdy8pr5e().b[6][0]++, hrefAttr.trim()) : (cov_21pdy8pr5e().b[6][1]++, '');
      } else {
        cov_21pdy8pr5e().b[4][1]++;
      }

      cov_21pdy8pr5e().s[27]++;

      try {
        cov_21pdy8pr5e().s[28]++;
        return document.querySelector(selector) ? (cov_21pdy8pr5e().b[8][0]++, selector) : (cov_21pdy8pr5e().b[8][1]++, null);
      } catch (_) {
        cov_21pdy8pr5e().s[29]++;
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      cov_21pdy8pr5e().f[9]++;
      cov_21pdy8pr5e().s[30]++;

      if (!element) {
        cov_21pdy8pr5e().b[9][0]++;
        cov_21pdy8pr5e().s[31]++;
        return 0;
      } else {
        cov_21pdy8pr5e().b[9][1]++;
      } // Get transition-duration of the element


      var transitionDuration = (cov_21pdy8pr5e().s[32]++, $__default['default'](element).css('transition-duration'));
      var transitionDelay = (cov_21pdy8pr5e().s[33]++, $__default['default'](element).css('transition-delay'));
      var floatTransitionDuration = (cov_21pdy8pr5e().s[34]++, parseFloat(transitionDuration));
      var floatTransitionDelay = (cov_21pdy8pr5e().s[35]++, parseFloat(transitionDelay)); // Return 0 if element or transition duration is not found

      cov_21pdy8pr5e().s[36]++;

      if ((cov_21pdy8pr5e().b[11][0]++, !floatTransitionDuration) && (cov_21pdy8pr5e().b[11][1]++, !floatTransitionDelay)) {
        cov_21pdy8pr5e().b[10][0]++;
        cov_21pdy8pr5e().s[37]++;
        return 0;
      } else {
        cov_21pdy8pr5e().b[10][1]++;
      } // If multiple durations are defined, take the first


      cov_21pdy8pr5e().s[38]++;
      transitionDuration = transitionDuration.split(',')[0];
      cov_21pdy8pr5e().s[39]++;
      transitionDelay = transitionDelay.split(',')[0];
      cov_21pdy8pr5e().s[40]++;
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      cov_21pdy8pr5e().f[10]++;
      cov_21pdy8pr5e().s[41]++;
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      cov_21pdy8pr5e().f[11]++;
      cov_21pdy8pr5e().s[42]++;
      $__default['default'](element).trigger(TRANSITION_END);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      cov_21pdy8pr5e().f[12]++;
      cov_21pdy8pr5e().s[43]++;
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      cov_21pdy8pr5e().f[13]++;
      cov_21pdy8pr5e().s[44]++;
      return ((cov_21pdy8pr5e().b[12][0]++, obj[0]) || (cov_21pdy8pr5e().b[12][1]++, obj)).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      cov_21pdy8pr5e().f[14]++;
      cov_21pdy8pr5e().s[45]++;

      for (var property in configTypes) {
        cov_21pdy8pr5e().s[46]++;

        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          cov_21pdy8pr5e().b[13][0]++;
          var expectedTypes = (cov_21pdy8pr5e().s[47]++, configTypes[property]);
          var value = (cov_21pdy8pr5e().s[48]++, config[property]);
          var valueType = (cov_21pdy8pr5e().s[49]++, (cov_21pdy8pr5e().b[15][0]++, value) && (cov_21pdy8pr5e().b[15][1]++, Util.isElement(value)) ? (cov_21pdy8pr5e().b[14][0]++, 'element') : (cov_21pdy8pr5e().b[14][1]++, toType(value)));
          cov_21pdy8pr5e().s[50]++;

          if (!new RegExp(expectedTypes).test(valueType)) {
            cov_21pdy8pr5e().b[16][0]++;
            cov_21pdy8pr5e().s[51]++;
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          } else {
            cov_21pdy8pr5e().b[16][1]++;
          }
        } else {
          cov_21pdy8pr5e().b[13][1]++;
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      cov_21pdy8pr5e().f[15]++;
      cov_21pdy8pr5e().s[52]++;

      if (!document.documentElement.attachShadow) {
        cov_21pdy8pr5e().b[17][0]++;
        cov_21pdy8pr5e().s[53]++;
        return null;
      } else {
        cov_21pdy8pr5e().b[17][1]++;
      } // Can find the shadow root otherwise it'll return the document


      cov_21pdy8pr5e().s[54]++;

      if (typeof element.getRootNode === 'function') {
        cov_21pdy8pr5e().b[18][0]++;
        var root = (cov_21pdy8pr5e().s[55]++, element.getRootNode());
        cov_21pdy8pr5e().s[56]++;
        return root instanceof ShadowRoot ? (cov_21pdy8pr5e().b[19][0]++, root) : (cov_21pdy8pr5e().b[19][1]++, null);
      } else {
        cov_21pdy8pr5e().b[18][1]++;
      }

      cov_21pdy8pr5e().s[57]++;

      if (element instanceof ShadowRoot) {
        cov_21pdy8pr5e().b[20][0]++;
        cov_21pdy8pr5e().s[58]++;
        return element;
      } else {
        cov_21pdy8pr5e().b[20][1]++;
      } // when we don't find a shadow root


      cov_21pdy8pr5e().s[59]++;

      if (!element.parentNode) {
        cov_21pdy8pr5e().b[21][0]++;
        cov_21pdy8pr5e().s[60]++;
        return null;
      } else {
        cov_21pdy8pr5e().b[21][1]++;
      }

      cov_21pdy8pr5e().s[61]++;
      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      cov_21pdy8pr5e().f[16]++;
      cov_21pdy8pr5e().s[62]++;

      if (typeof $__default['default'] === 'undefined') {
        cov_21pdy8pr5e().b[22][0]++;
        cov_21pdy8pr5e().s[63]++;
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      } else {
        cov_21pdy8pr5e().b[22][1]++;
      }

      var version = (cov_21pdy8pr5e().s[64]++, $__default['default'].fn.jquery.split(' ')[0].split('.'));
      var minMajor = (cov_21pdy8pr5e().s[65]++, 1);
      var ltMajor = (cov_21pdy8pr5e().s[66]++, 2);
      var minMinor = (cov_21pdy8pr5e().s[67]++, 9);
      var minPatch = (cov_21pdy8pr5e().s[68]++, 1);
      var maxMajor = (cov_21pdy8pr5e().s[69]++, 4);
      cov_21pdy8pr5e().s[70]++;

      if ((cov_21pdy8pr5e().b[24][0]++, version[0] < ltMajor) && (cov_21pdy8pr5e().b[24][1]++, version[1] < minMinor) || (cov_21pdy8pr5e().b[24][2]++, version[0] === minMajor) && (cov_21pdy8pr5e().b[24][3]++, version[1] === minMinor) && (cov_21pdy8pr5e().b[24][4]++, version[2] < minPatch) || (cov_21pdy8pr5e().b[24][5]++, version[0] >= maxMajor)) {
        cov_21pdy8pr5e().b[23][0]++;
        cov_21pdy8pr5e().s[71]++;
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      } else {
        cov_21pdy8pr5e().b[23][1]++;
      }
    }
  });
  cov_21pdy8pr5e().s[72]++;
  Util.jQueryDetection();
  cov_21pdy8pr5e().s[73]++;
  setTransitionEndSupport();

  return Util;

})));
//# sourceMappingURL=util.js.map

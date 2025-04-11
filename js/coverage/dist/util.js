/*!
  * Bootstrap util.js v4.6.2-2 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2025 https://github.com/MahdiMajidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Util = factory(global.jQuery));
})(this, (function ($) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);

  function cov_1b7i9t3gn5() {
    var path = "/Users/mahdi/Documents/app/bootstrap-v4-rtl/js/src/util.js";
    var hash = "a2b4d7c6508acb99f937fe8a40af0ce33283609b";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Users/mahdi/Documents/app/bootstrap-v4-rtl/js/src/util.js",
      statementMap: {
        "0": {
          start: {
            line: 14,
            column: 23
          },
          end: {
            line: 14,
            column: 38
          }
        },
        "1": {
          start: {
            line: 15,
            column: 16
          },
          end: {
            line: 15,
            column: 23
          }
        },
        "2": {
          start: {
            line: 16,
            column: 32
          },
          end: {
            line: 16,
            column: 36
          }
        },
        "3": {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        },
        "4": {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 21,
            column: 19
          }
        },
        "5": {
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 24,
            column: 68
          }
        },
        "6": {
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 38,
            column: 3
          }
        },
        "7": {
          start: {
            line: 32,
            column: 6
          },
          end: {
            line: 34,
            column: 7
          }
        },
        "8": {
          start: {
            line: 33,
            column: 8
          },
          end: {
            line: 33,
            column: 61
          }
        },
        "9": {
          start: {
            line: 36,
            column: 6
          },
          end: {
            line: 36,
            column: 22
          }
        },
        "10": {
          start: {
            line: 42,
            column: 15
          },
          end: {
            line: 42,
            column: 20
          }
        },
        "11": {
          start: {
            line: 44,
            column: 2
          },
          end: {
            line: 46,
            column: 4
          }
        },
        "12": {
          start: {
            line: 45,
            column: 4
          },
          end: {
            line: 45,
            column: 17
          }
        },
        "13": {
          start: {
            line: 48,
            column: 2
          },
          end: {
            line: 52,
            column: 14
          }
        },
        "14": {
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 51,
            column: 5
          }
        },
        "15": {
          start: {
            line: 50,
            column: 6
          },
          end: {
            line: 50,
            column: 37
          }
        },
        "16": {
          start: {
            line: 54,
            column: 2
          },
          end: {
            line: 54,
            column: 13
          }
        },
        "17": {
          start: {
            line: 58,
            column: 2
          },
          end: {
            line: 58,
            column: 51
          }
        },
        "18": {
          start: {
            line: 59,
            column: 2
          },
          end: {
            line: 59,
            column: 71
          }
        },
        "19": {
          start: {
            line: 66,
            column: 13
          },
          end: {
            line: 190,
            column: 1
          }
        },
        "20": {
          start: {
            line: 70,
            column: 4
          },
          end: {
            line: 73,
            column: 45
          }
        },
        "21": {
          start: {
            line: 72,
            column: 6
          },
          end: {
            line: 72,
            column: 43
          }
        },
        "22": {
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 75,
            column: 17
          }
        },
        "23": {
          start: {
            line: 79,
            column: 19
          },
          end: {
            line: 79,
            column: 54
          }
        },
        "24": {
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 84,
            column: 5
          }
        },
        "25": {
          start: {
            line: 82,
            column: 23
          },
          end: {
            line: 82,
            column: 51
          }
        },
        "26": {
          start: {
            line: 83,
            column: 6
          },
          end: {
            line: 83,
            column: 68
          }
        },
        "27": {
          start: {
            line: 86,
            column: 4
          },
          end: {
            line: 90,
            column: 5
          }
        },
        "28": {
          start: {
            line: 87,
            column: 6
          },
          end: {
            line: 87,
            column: 63
          }
        },
        "29": {
          start: {
            line: 89,
            column: 6
          },
          end: {
            line: 89,
            column: 17
          }
        },
        "30": {
          start: {
            line: 94,
            column: 4
          },
          end: {
            line: 96,
            column: 5
          }
        },
        "31": {
          start: {
            line: 95,
            column: 6
          },
          end: {
            line: 95,
            column: 14
          }
        },
        "32": {
          start: {
            line: 99,
            column: 29
          },
          end: {
            line: 99,
            column: 66
          }
        },
        "33": {
          start: {
            line: 100,
            column: 26
          },
          end: {
            line: 100,
            column: 60
          }
        },
        "34": {
          start: {
            line: 102,
            column: 36
          },
          end: {
            line: 102,
            column: 66
          }
        },
        "35": {
          start: {
            line: 103,
            column: 33
          },
          end: {
            line: 103,
            column: 60
          }
        },
        "36": {
          start: {
            line: 106,
            column: 4
          },
          end: {
            line: 108,
            column: 5
          }
        },
        "37": {
          start: {
            line: 107,
            column: 6
          },
          end: {
            line: 107,
            column: 14
          }
        },
        "38": {
          start: {
            line: 111,
            column: 4
          },
          end: {
            line: 111,
            column: 57
          }
        },
        "39": {
          start: {
            line: 112,
            column: 4
          },
          end: {
            line: 112,
            column: 51
          }
        },
        "40": {
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 114,
            column: 99
          }
        },
        "41": {
          start: {
            line: 118,
            column: 4
          },
          end: {
            line: 118,
            column: 31
          }
        },
        "42": {
          start: {
            line: 122,
            column: 4
          },
          end: {
            line: 122,
            column: 38
          }
        },
        "43": {
          start: {
            line: 126,
            column: 4
          },
          end: {
            line: 126,
            column: 34
          }
        },
        "44": {
          start: {
            line: 130,
            column: 4
          },
          end: {
            line: 130,
            column: 35
          }
        },
        "45": {
          start: {
            line: 134,
            column: 4
          },
          end: {
            line: 148,
            column: 5
          }
        },
        "46": {
          start: {
            line: 135,
            column: 6
          },
          end: {
            line: 147,
            column: 7
          }
        },
        "47": {
          start: {
            line: 136,
            column: 30
          },
          end: {
            line: 136,
            column: 51
          }
        },
        "48": {
          start: {
            line: 137,
            column: 22
          },
          end: {
            line: 137,
            column: 38
          }
        },
        "49": {
          start: {
            line: 138,
            column: 26
          },
          end: {
            line: 139,
            column: 35
          }
        },
        "50": {
          start: {
            line: 141,
            column: 8
          },
          end: {
            line: 146,
            column: 9
          }
        },
        "51": {
          start: {
            line: 142,
            column: 10
          },
          end: {
            line: 145,
            column: 52
          }
        },
        "52": {
          start: {
            line: 152,
            column: 4
          },
          end: {
            line: 154,
            column: 5
          }
        },
        "53": {
          start: {
            line: 153,
            column: 6
          },
          end: {
            line: 153,
            column: 17
          }
        },
        "54": {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 160,
            column: 5
          }
        },
        "55": {
          start: {
            line: 158,
            column: 19
          },
          end: {
            line: 158,
            column: 40
          }
        },
        "56": {
          start: {
            line: 159,
            column: 6
          },
          end: {
            line: 159,
            column: 53
          }
        },
        "57": {
          start: {
            line: 162,
            column: 4
          },
          end: {
            line: 164,
            column: 5
          }
        },
        "58": {
          start: {
            line: 163,
            column: 6
          },
          end: {
            line: 163,
            column: 20
          }
        },
        "59": {
          start: {
            line: 167,
            column: 4
          },
          end: {
            line: 169,
            column: 5
          }
        },
        "60": {
          start: {
            line: 168,
            column: 6
          },
          end: {
            line: 168,
            column: 17
          }
        },
        "61": {
          start: {
            line: 171,
            column: 4
          },
          end: {
            line: 171,
            column: 50
          }
        },
        "62": {
          start: {
            line: 175,
            column: 4
          },
          end: {
            line: 177,
            column: 5
          }
        },
        "63": {
          start: {
            line: 176,
            column: 6
          },
          end: {
            line: 176,
            column: 125
          }
        },
        "64": {
          start: {
            line: 179,
            column: 20
          },
          end: {
            line: 179,
            column: 56
          }
        },
        "65": {
          start: {
            line: 180,
            column: 21
          },
          end: {
            line: 180,
            column: 22
          }
        },
        "66": {
          start: {
            line: 181,
            column: 20
          },
          end: {
            line: 181,
            column: 21
          }
        },
        "67": {
          start: {
            line: 182,
            column: 21
          },
          end: {
            line: 182,
            column: 22
          }
        },
        "68": {
          start: {
            line: 183,
            column: 21
          },
          end: {
            line: 183,
            column: 22
          }
        },
        "69": {
          start: {
            line: 184,
            column: 21
          },
          end: {
            line: 184,
            column: 22
          }
        },
        "70": {
          start: {
            line: 186,
            column: 4
          },
          end: {
            line: 188,
            column: 5
          }
        },
        "71": {
          start: {
            line: 187,
            column: 6
          },
          end: {
            line: 187,
            column: 101
          }
        },
        "72": {
          start: {
            line: 192,
            column: 0
          },
          end: {
            line: 192,
            column: 22
          }
        },
        "73": {
          start: {
            line: 193,
            column: 0
          },
          end: {
            line: 193,
            column: 25
          }
        }
      },
      fnMap: {
        "0": {
          name: "toType",
          decl: {
            start: {
              line: 19,
              column: 9
            },
            end: {
              line: 19,
              column: 15
            }
          },
          loc: {
            start: {
              line: 19,
              column: 21
            },
            end: {
              line: 25,
              column: 1
            }
          },
          line: 19
        },
        "1": {
          name: "getSpecialTransitionEndEvent",
          decl: {
            start: {
              line: 27,
              column: 9
            },
            end: {
              line: 27,
              column: 37
            }
          },
          loc: {
            start: {
              line: 27,
              column: 40
            },
            end: {
              line: 39,
              column: 1
            }
          },
          line: 27
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 31,
              column: 4
            },
            end: {
              line: 31,
              column: 5
            }
          },
          loc: {
            start: {
              line: 31,
              column: 18
            },
            end: {
              line: 37,
              column: 5
            }
          },
          line: 31
        },
        "3": {
          name: "transitionEndEmulator",
          decl: {
            start: {
              line: 41,
              column: 9
            },
            end: {
              line: 41,
              column: 30
            }
          },
          loc: {
            start: {
              line: 41,
              column: 41
            },
            end: {
              line: 55,
              column: 1
            }
          },
          line: 41
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 44,
              column: 35
            },
            end: {
              line: 44,
              column: 36
            }
          },
          loc: {
            start: {
              line: 44,
              column: 41
            },
            end: {
              line: 46,
              column: 3
            }
          },
          line: 44
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 48,
              column: 13
            },
            end: {
              line: 48,
              column: 14
            }
          },
          loc: {
            start: {
              line: 48,
              column: 19
            },
            end: {
              line: 52,
              column: 3
            }
          },
          line: 48
        },
        "6": {
          name: "setTransitionEndSupport",
          decl: {
            start: {
              line: 57,
              column: 9
            },
            end: {
              line: 57,
              column: 32
            }
          },
          loc: {
            start: {
              line: 57,
              column: 35
            },
            end: {
              line: 60,
              column: 1
            }
          },
          line: 57
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 69,
              column: 2
            },
            end: {
              line: 69,
              column: 3
            }
          },
          loc: {
            start: {
              line: 69,
              column: 17
            },
            end: {
              line: 76,
              column: 3
            }
          },
          line: 69
        },
        "8": {
          name: "(anonymous_8)",
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
              column: 34
            },
            end: {
              line: 91,
              column: 3
            }
          },
          line: 78
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 93,
              column: 2
            },
            end: {
              line: 93,
              column: 3
            }
          },
          loc: {
            start: {
              line: 93,
              column: 44
            },
            end: {
              line: 115,
              column: 3
            }
          },
          line: 93
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 117,
              column: 2
            },
            end: {
              line: 117,
              column: 3
            }
          },
          loc: {
            start: {
              line: 117,
              column: 18
            },
            end: {
              line: 119,
              column: 3
            }
          },
          line: 117
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 121,
              column: 2
            },
            end: {
              line: 121,
              column: 3
            }
          },
          loc: {
            start: {
              line: 121,
              column: 32
            },
            end: {
              line: 123,
              column: 3
            }
          },
          line: 121
        },
        "12": {
          name: "(anonymous_12)",
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
              column: 26
            },
            end: {
              line: 127,
              column: 3
            }
          },
          line: 125
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 129,
              column: 2
            },
            end: {
              line: 129,
              column: 3
            }
          },
          loc: {
            start: {
              line: 129,
              column: 17
            },
            end: {
              line: 131,
              column: 3
            }
          },
          line: 129
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 133,
              column: 2
            },
            end: {
              line: 133,
              column: 3
            }
          },
          loc: {
            start: {
              line: 133,
              column: 54
            },
            end: {
              line: 149,
              column: 3
            }
          },
          line: 133
        },
        "15": {
          name: "(anonymous_15)",
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
              column: 26
            },
            end: {
              line: 172,
              column: 3
            }
          },
          line: 151
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 174,
              column: 2
            },
            end: {
              line: 174,
              column: 3
            }
          },
          loc: {
            start: {
              line: 174,
              column: 20
            },
            end: {
              line: 189,
              column: 3
            }
          },
          line: 174
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 20,
              column: 2
            },
            end: {
              line: 22,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 20,
              column: 2
            },
            end: {
              line: 22,
              column: 3
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 20
        },
        "1": {
          loc: {
            start: {
              line: 20,
              column: 6
            },
            end: {
              line: 20,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 20,
              column: 6
            },
            end: {
              line: 20,
              column: 18
            }
          }, {
            start: {
              line: 20,
              column: 22
            },
            end: {
              line: 20,
              column: 48
            }
          }],
          line: 20
        },
        "2": {
          loc: {
            start: {
              line: 32,
              column: 6
            },
            end: {
              line: 34,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 32,
              column: 6
            },
            end: {
              line: 34,
              column: 7
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 32
        },
        "3": {
          loc: {
            start: {
              line: 49,
              column: 4
            },
            end: {
              line: 51,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 49,
              column: 4
            },
            end: {
              line: 51,
              column: 5
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 49
        },
        "4": {
          loc: {
            start: {
              line: 81,
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
              line: 81,
              column: 4
            },
            end: {
              line: 84,
              column: 5
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 81
        },
        "5": {
          loc: {
            start: {
              line: 81,
              column: 8
            },
            end: {
              line: 81,
              column: 37
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 81,
              column: 8
            },
            end: {
              line: 81,
              column: 17
            }
          }, {
            start: {
              line: 81,
              column: 21
            },
            end: {
              line: 81,
              column: 37
            }
          }],
          line: 81
        },
        "6": {
          loc: {
            start: {
              line: 83,
              column: 17
            },
            end: {
              line: 83,
              column: 68
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 83,
              column: 48
            },
            end: {
              line: 83,
              column: 63
            }
          }, {
            start: {
              line: 83,
              column: 66
            },
            end: {
              line: 83,
              column: 68
            }
          }],
          line: 83
        },
        "7": {
          loc: {
            start: {
              line: 83,
              column: 17
            },
            end: {
              line: 83,
              column: 45
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 83,
              column: 17
            },
            end: {
              line: 83,
              column: 25
            }
          }, {
            start: {
              line: 83,
              column: 29
            },
            end: {
              line: 83,
              column: 45
            }
          }],
          line: 83
        },
        "8": {
          loc: {
            start: {
              line: 87,
              column: 13
            },
            end: {
              line: 87,
              column: 63
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 87,
              column: 48
            },
            end: {
              line: 87,
              column: 56
            }
          }, {
            start: {
              line: 87,
              column: 59
            },
            end: {
              line: 87,
              column: 63
            }
          }],
          line: 87
        },
        "9": {
          loc: {
            start: {
              line: 94,
              column: 4
            },
            end: {
              line: 96,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 94,
              column: 4
            },
            end: {
              line: 96,
              column: 5
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 94
        },
        "10": {
          loc: {
            start: {
              line: 106,
              column: 4
            },
            end: {
              line: 108,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 106,
              column: 4
            },
            end: {
              line: 108,
              column: 5
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 106
        },
        "11": {
          loc: {
            start: {
              line: 106,
              column: 8
            },
            end: {
              line: 106,
              column: 57
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 106,
              column: 8
            },
            end: {
              line: 106,
              column: 32
            }
          }, {
            start: {
              line: 106,
              column: 36
            },
            end: {
              line: 106,
              column: 57
            }
          }],
          line: 106
        },
        "12": {
          loc: {
            start: {
              line: 130,
              column: 12
            },
            end: {
              line: 130,
              column: 25
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 130,
              column: 12
            },
            end: {
              line: 130,
              column: 18
            }
          }, {
            start: {
              line: 130,
              column: 22
            },
            end: {
              line: 130,
              column: 25
            }
          }],
          line: 130
        },
        "13": {
          loc: {
            start: {
              line: 135,
              column: 6
            },
            end: {
              line: 147,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 135,
              column: 6
            },
            end: {
              line: 147,
              column: 7
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 135
        },
        "14": {
          loc: {
            start: {
              line: 138,
              column: 26
            },
            end: {
              line: 139,
              column: 35
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 139,
              column: 10
            },
            end: {
              line: 139,
              column: 19
            }
          }, {
            start: {
              line: 139,
              column: 22
            },
            end: {
              line: 139,
              column: 35
            }
          }],
          line: 138
        },
        "15": {
          loc: {
            start: {
              line: 138,
              column: 26
            },
            end: {
              line: 138,
              column: 56
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 138,
              column: 26
            },
            end: {
              line: 138,
              column: 31
            }
          }, {
            start: {
              line: 138,
              column: 35
            },
            end: {
              line: 138,
              column: 56
            }
          }],
          line: 138
        },
        "16": {
          loc: {
            start: {
              line: 141,
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
              line: 141,
              column: 8
            },
            end: {
              line: 146,
              column: 9
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 141
        },
        "17": {
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
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 152
        },
        "18": {
          loc: {
            start: {
              line: 157,
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
              line: 157,
              column: 4
            },
            end: {
              line: 160,
              column: 5
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 157
        },
        "19": {
          loc: {
            start: {
              line: 159,
              column: 13
            },
            end: {
              line: 159,
              column: 53
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 159,
              column: 42
            },
            end: {
              line: 159,
              column: 46
            }
          }, {
            start: {
              line: 159,
              column: 49
            },
            end: {
              line: 159,
              column: 53
            }
          }],
          line: 159
        },
        "20": {
          loc: {
            start: {
              line: 162,
              column: 4
            },
            end: {
              line: 164,
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
              line: 164,
              column: 5
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 162
        },
        "21": {
          loc: {
            start: {
              line: 167,
              column: 4
            },
            end: {
              line: 169,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 167,
              column: 4
            },
            end: {
              line: 169,
              column: 5
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 167
        },
        "22": {
          loc: {
            start: {
              line: 175,
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
              line: 175,
              column: 4
            },
            end: {
              line: 177,
              column: 5
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 175
        },
        "23": {
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
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 186
        },
        "24": {
          loc: {
            start: {
              line: 186,
              column: 8
            },
            end: {
              line: 186,
              column: 158
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 186,
              column: 8
            },
            end: {
              line: 186,
              column: 28
            }
          }, {
            start: {
              line: 186,
              column: 32
            },
            end: {
              line: 186,
              column: 53
            }
          }, {
            start: {
              line: 186,
              column: 57
            },
            end: {
              line: 186,
              column: 80
            }
          }, {
            start: {
              line: 186,
              column: 84
            },
            end: {
              line: 186,
              column: 107
            }
          }, {
            start: {
              line: 186,
              column: 111
            },
            end: {
              line: 186,
              column: 132
            }
          }, {
            start: {
              line: 186,
              column: 136
            },
            end: {
              line: 186,
              column: 158
            }
          }],
          line: 186
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
      hash: "a2b4d7c6508acb99f937fe8a40af0ce33283609b"
    };
    var coverage = global[gcv] || (global[gcv] = {});
    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }
    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_1b7i9t3gn5 = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }
  cov_1b7i9t3gn5();

  /**
   * Private TransitionEnd Helpers
   */

  var TRANSITION_END = (cov_1b7i9t3gn5().s[0]++, 'transitionend');
  var MAX_UID = (cov_1b7i9t3gn5().s[1]++, 1000000);
  var MILLISECONDS_MULTIPLIER = (cov_1b7i9t3gn5().s[2]++, 1000);

  // Shoutout AngusCroll (https://goo.gl/pxwQGp)
  function toType(obj) {
    cov_1b7i9t3gn5().f[0]++;
    cov_1b7i9t3gn5().s[3]++;
    if ((cov_1b7i9t3gn5().b[1][0]++, obj === null) || (cov_1b7i9t3gn5().b[1][1]++, typeof obj === 'undefined')) {
      cov_1b7i9t3gn5().b[0][0]++;
      cov_1b7i9t3gn5().s[4]++;
      return "" + obj;
    } else {
      cov_1b7i9t3gn5().b[0][1]++;
    }
    cov_1b7i9t3gn5().s[5]++;
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }
  function getSpecialTransitionEndEvent() {
    cov_1b7i9t3gn5().f[1]++;
    cov_1b7i9t3gn5().s[6]++;
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        cov_1b7i9t3gn5().f[2]++;
        cov_1b7i9t3gn5().s[7]++;
        if ($__default["default"](event.target).is(this)) {
          cov_1b7i9t3gn5().b[2][0]++;
          cov_1b7i9t3gn5().s[8]++;
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        } else {
          cov_1b7i9t3gn5().b[2][1]++;
        }
        cov_1b7i9t3gn5().s[9]++;
        return undefined;
      }
    };
  }
  function transitionEndEmulator(duration) {
    var _this = this;
    cov_1b7i9t3gn5().f[3]++;
    var called = (cov_1b7i9t3gn5().s[10]++, false);
    cov_1b7i9t3gn5().s[11]++;
    $__default["default"](this).one(Util.TRANSITION_END, function () {
      cov_1b7i9t3gn5().f[4]++;
      cov_1b7i9t3gn5().s[12]++;
      called = true;
    });
    cov_1b7i9t3gn5().s[13]++;
    setTimeout(function () {
      cov_1b7i9t3gn5().f[5]++;
      cov_1b7i9t3gn5().s[14]++;
      if (!called) {
        cov_1b7i9t3gn5().b[3][0]++;
        cov_1b7i9t3gn5().s[15]++;
        Util.triggerTransitionEnd(_this);
      } else {
        cov_1b7i9t3gn5().b[3][1]++;
      }
    }, duration);
    cov_1b7i9t3gn5().s[16]++;
    return this;
  }
  function setTransitionEndSupport() {
    cov_1b7i9t3gn5().f[6]++;
    cov_1b7i9t3gn5().s[17]++;
    $__default["default"].fn.emulateTransitionEnd = transitionEndEmulator;
    cov_1b7i9t3gn5().s[18]++;
    $__default["default"].event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }

  /**
   * Public Util API
   */

  var Util = (cov_1b7i9t3gn5().s[19]++, {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      cov_1b7i9t3gn5().f[7]++;
      cov_1b7i9t3gn5().s[20]++;
      do {
        cov_1b7i9t3gn5().s[21]++;
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));
      cov_1b7i9t3gn5().s[22]++;
      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      cov_1b7i9t3gn5().f[8]++;
      var selector = (cov_1b7i9t3gn5().s[23]++, element.getAttribute('data-target'));
      cov_1b7i9t3gn5().s[24]++;
      if ((cov_1b7i9t3gn5().b[5][0]++, !selector) || (cov_1b7i9t3gn5().b[5][1]++, selector === '#')) {
        cov_1b7i9t3gn5().b[4][0]++;
        var hrefAttr = (cov_1b7i9t3gn5().s[25]++, element.getAttribute('href'));
        cov_1b7i9t3gn5().s[26]++;
        selector = (cov_1b7i9t3gn5().b[7][0]++, hrefAttr) && (cov_1b7i9t3gn5().b[7][1]++, hrefAttr !== '#') ? (cov_1b7i9t3gn5().b[6][0]++, hrefAttr.trim()) : (cov_1b7i9t3gn5().b[6][1]++, '');
      } else {
        cov_1b7i9t3gn5().b[4][1]++;
      }
      cov_1b7i9t3gn5().s[27]++;
      try {
        cov_1b7i9t3gn5().s[28]++;
        return document.querySelector(selector) ? (cov_1b7i9t3gn5().b[8][0]++, selector) : (cov_1b7i9t3gn5().b[8][1]++, null);
      } catch (_) {
        cov_1b7i9t3gn5().s[29]++;
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      cov_1b7i9t3gn5().f[9]++;
      cov_1b7i9t3gn5().s[30]++;
      if (!element) {
        cov_1b7i9t3gn5().b[9][0]++;
        cov_1b7i9t3gn5().s[31]++;
        return 0;
      } else {
        cov_1b7i9t3gn5().b[9][1]++;
      }

      // Get transition-duration of the element
      var transitionDuration = (cov_1b7i9t3gn5().s[32]++, $__default["default"](element).css('transition-duration'));
      var transitionDelay = (cov_1b7i9t3gn5().s[33]++, $__default["default"](element).css('transition-delay'));
      var floatTransitionDuration = (cov_1b7i9t3gn5().s[34]++, parseFloat(transitionDuration));
      var floatTransitionDelay = (cov_1b7i9t3gn5().s[35]++, parseFloat(transitionDelay));

      // Return 0 if element or transition duration is not found
      cov_1b7i9t3gn5().s[36]++;
      if ((cov_1b7i9t3gn5().b[11][0]++, !floatTransitionDuration) && (cov_1b7i9t3gn5().b[11][1]++, !floatTransitionDelay)) {
        cov_1b7i9t3gn5().b[10][0]++;
        cov_1b7i9t3gn5().s[37]++;
        return 0;
      } else {
        cov_1b7i9t3gn5().b[10][1]++;
      }

      // If multiple durations are defined, take the first
      cov_1b7i9t3gn5().s[38]++;
      transitionDuration = transitionDuration.split(',')[0];
      cov_1b7i9t3gn5().s[39]++;
      transitionDelay = transitionDelay.split(',')[0];
      cov_1b7i9t3gn5().s[40]++;
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      cov_1b7i9t3gn5().f[10]++;
      cov_1b7i9t3gn5().s[41]++;
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      cov_1b7i9t3gn5().f[11]++;
      cov_1b7i9t3gn5().s[42]++;
      $__default["default"](element).trigger(TRANSITION_END);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      cov_1b7i9t3gn5().f[12]++;
      cov_1b7i9t3gn5().s[43]++;
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      cov_1b7i9t3gn5().f[13]++;
      cov_1b7i9t3gn5().s[44]++;
      return ((cov_1b7i9t3gn5().b[12][0]++, obj[0]) || (cov_1b7i9t3gn5().b[12][1]++, obj)).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      cov_1b7i9t3gn5().f[14]++;
      cov_1b7i9t3gn5().s[45]++;
      for (var property in configTypes) {
        cov_1b7i9t3gn5().s[46]++;
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          cov_1b7i9t3gn5().b[13][0]++;
          var expectedTypes = (cov_1b7i9t3gn5().s[47]++, configTypes[property]);
          var value = (cov_1b7i9t3gn5().s[48]++, config[property]);
          var valueType = (cov_1b7i9t3gn5().s[49]++, (cov_1b7i9t3gn5().b[15][0]++, value) && (cov_1b7i9t3gn5().b[15][1]++, Util.isElement(value)) ? (cov_1b7i9t3gn5().b[14][0]++, 'element') : (cov_1b7i9t3gn5().b[14][1]++, toType(value)));
          cov_1b7i9t3gn5().s[50]++;
          if (!new RegExp(expectedTypes).test(valueType)) {
            cov_1b7i9t3gn5().b[16][0]++;
            cov_1b7i9t3gn5().s[51]++;
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          } else {
            cov_1b7i9t3gn5().b[16][1]++;
          }
        } else {
          cov_1b7i9t3gn5().b[13][1]++;
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      cov_1b7i9t3gn5().f[15]++;
      cov_1b7i9t3gn5().s[52]++;
      if (!document.documentElement.attachShadow) {
        cov_1b7i9t3gn5().b[17][0]++;
        cov_1b7i9t3gn5().s[53]++;
        return null;
      } else {
        cov_1b7i9t3gn5().b[17][1]++;
      }

      // Can find the shadow root otherwise it'll return the document
      cov_1b7i9t3gn5().s[54]++;
      if (typeof element.getRootNode === 'function') {
        cov_1b7i9t3gn5().b[18][0]++;
        var root = (cov_1b7i9t3gn5().s[55]++, element.getRootNode());
        cov_1b7i9t3gn5().s[56]++;
        return root instanceof ShadowRoot ? (cov_1b7i9t3gn5().b[19][0]++, root) : (cov_1b7i9t3gn5().b[19][1]++, null);
      } else {
        cov_1b7i9t3gn5().b[18][1]++;
      }
      cov_1b7i9t3gn5().s[57]++;
      if (element instanceof ShadowRoot) {
        cov_1b7i9t3gn5().b[20][0]++;
        cov_1b7i9t3gn5().s[58]++;
        return element;
      } else {
        cov_1b7i9t3gn5().b[20][1]++;
      }

      // when we don't find a shadow root
      cov_1b7i9t3gn5().s[59]++;
      if (!element.parentNode) {
        cov_1b7i9t3gn5().b[21][0]++;
        cov_1b7i9t3gn5().s[60]++;
        return null;
      } else {
        cov_1b7i9t3gn5().b[21][1]++;
      }
      cov_1b7i9t3gn5().s[61]++;
      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      cov_1b7i9t3gn5().f[16]++;
      cov_1b7i9t3gn5().s[62]++;
      if (typeof $__default["default"] === 'undefined') {
        cov_1b7i9t3gn5().b[22][0]++;
        cov_1b7i9t3gn5().s[63]++;
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      } else {
        cov_1b7i9t3gn5().b[22][1]++;
      }
      var version = (cov_1b7i9t3gn5().s[64]++, $__default["default"].fn.jquery.split(' ')[0].split('.'));
      var minMajor = (cov_1b7i9t3gn5().s[65]++, 1);
      var ltMajor = (cov_1b7i9t3gn5().s[66]++, 2);
      var minMinor = (cov_1b7i9t3gn5().s[67]++, 9);
      var minPatch = (cov_1b7i9t3gn5().s[68]++, 1);
      var maxMajor = (cov_1b7i9t3gn5().s[69]++, 4);
      cov_1b7i9t3gn5().s[70]++;
      if ((cov_1b7i9t3gn5().b[24][0]++, version[0] < ltMajor) && (cov_1b7i9t3gn5().b[24][1]++, version[1] < minMinor) || (cov_1b7i9t3gn5().b[24][2]++, version[0] === minMajor) && (cov_1b7i9t3gn5().b[24][3]++, version[1] === minMinor) && (cov_1b7i9t3gn5().b[24][4]++, version[2] < minPatch) || (cov_1b7i9t3gn5().b[24][5]++, version[0] >= maxMajor)) {
        cov_1b7i9t3gn5().b[23][0]++;
        cov_1b7i9t3gn5().s[71]++;
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      } else {
        cov_1b7i9t3gn5().b[23][1]++;
      }
    }
  });
  cov_1b7i9t3gn5().s[72]++;
  Util.jQueryDetection();
  cov_1b7i9t3gn5().s[73]++;
  setTransitionEndSupport();

  return Util;

}));
//# sourceMappingURL=util.js.map

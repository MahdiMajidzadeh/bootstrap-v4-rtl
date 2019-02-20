/*!
  * Bootstrap util.js v4.3.1-0 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2019 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Util = factory());
}(this, function () { 'use strict';

  var cov_21pdy8pr5e = function () {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/util.js";
    var hash = "3b826621d95792b180294cac62f5f13f50e320e1";

    var Function = function () {}.constructor;

    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/util.js",
      statementMap: {
        "0": {
          start: {
            line: 14,
            column: 16
          },
          end: {
            line: 14,
            column: 23
          }
        },
        "1": {
          start: {
            line: 15,
            column: 32
          },
          end: {
            line: 15,
            column: 36
          }
        },
        "2": {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 19,
            column: 68
          }
        },
        "3": {
          start: {
            line: 28,
            column: 13
          },
          end: {
            line: 177,
            column: 1
          }
        },
        "4": {
          start: {
            line: 32,
            column: 4
          },
          end: {
            line: 35,
            column: 45
          }
        },
        "5": {
          start: {
            line: 34,
            column: 6
          },
          end: {
            line: 34,
            column: 43
          }
        },
        "6": {
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 36,
            column: 17
          }
        },
        "7": {
          start: {
            line: 40,
            column: 19
          },
          end: {
            line: 40,
            column: 54
          }
        },
        "8": {
          start: {
            line: 42,
            column: 4
          },
          end: {
            line: 45,
            column: 5
          }
        },
        "9": {
          start: {
            line: 43,
            column: 23
          },
          end: {
            line: 43,
            column: 51
          }
        },
        "10": {
          start: {
            line: 44,
            column: 6
          },
          end: {
            line: 44,
            column: 68
          }
        },
        "11": {
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 51,
            column: 5
          }
        },
        "12": {
          start: {
            line: 48,
            column: 6
          },
          end: {
            line: 48,
            column: 63
          }
        },
        "13": {
          start: {
            line: 50,
            column: 6
          },
          end: {
            line: 50,
            column: 17
          }
        },
        "14": {
          start: {
            line: 55,
            column: 4
          },
          end: {
            line: 57,
            column: 5
          }
        },
        "15": {
          start: {
            line: 56,
            column: 6
          },
          end: {
            line: 56,
            column: 14
          }
        },
        "16": {
          start: {
            line: 60,
            column: 29
          },
          end: {
            line: 60,
            column: 80
          }
        },
        "17": {
          start: {
            line: 61,
            column: 26
          },
          end: {
            line: 61,
            column: 74
          }
        },
        "18": {
          start: {
            line: 63,
            column: 36
          },
          end: {
            line: 63,
            column: 66
          }
        },
        "19": {
          start: {
            line: 64,
            column: 33
          },
          end: {
            line: 64,
            column: 60
          }
        },
        "20": {
          start: {
            line: 67,
            column: 4
          },
          end: {
            line: 69,
            column: 5
          }
        },
        "21": {
          start: {
            line: 68,
            column: 6
          },
          end: {
            line: 68,
            column: 14
          }
        },
        "22": {
          start: {
            line: 72,
            column: 4
          },
          end: {
            line: 72,
            column: 57
          }
        },
        "23": {
          start: {
            line: 73,
            column: 4
          },
          end: {
            line: 73,
            column: 51
          }
        },
        "24": {
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 75,
            column: 99
          }
        },
        "25": {
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 79,
            column: 31
          }
        },
        "26": {
          start: {
            line: 83,
            column: 4
          },
          end: {
            line: 83,
            column: 57
          }
        },
        "27": {
          start: {
            line: 87,
            column: 4
          },
          end: {
            line: 87,
            column: 35
          }
        },
        "28": {
          start: {
            line: 91,
            column: 17
          },
          end: {
            line: 91,
            column: 22
          }
        },
        "29": {
          start: {
            line: 92,
            column: 28
          },
          end: {
            line: 92,
            column: 29
          }
        },
        "30": {
          start: {
            line: 93,
            column: 29
          },
          end: {
            line: 93,
            column: 55
          }
        },
        "31": {
          start: {
            line: 95,
            column: 6
          },
          end: {
            line: 95,
            column: 19
          }
        },
        "32": {
          start: {
            line: 96,
            column: 6
          },
          end: {
            line: 96,
            column: 64
          }
        },
        "33": {
          start: {
            line: 99,
            column: 4
          },
          end: {
            line: 99,
            column: 59
          }
        },
        "34": {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 104,
            column: 24
          }
        },
        "35": {
          start: {
            line: 101,
            column: 6
          },
          end: {
            line: 103,
            column: 7
          }
        },
        "36": {
          start: {
            line: 102,
            column: 8
          },
          end: {
            line: 102,
            column: 42
          }
        },
        "37": {
          start: {
            line: 108,
            column: 4
          },
          end: {
            line: 122,
            column: 5
          }
        },
        "38": {
          start: {
            line: 109,
            column: 6
          },
          end: {
            line: 121,
            column: 7
          }
        },
        "39": {
          start: {
            line: 110,
            column: 30
          },
          end: {
            line: 110,
            column: 51
          }
        },
        "40": {
          start: {
            line: 111,
            column: 30
          },
          end: {
            line: 111,
            column: 46
          }
        },
        "41": {
          start: {
            line: 112,
            column: 30
          },
          end: {
            line: 113,
            column: 37
          }
        },
        "42": {
          start: {
            line: 115,
            column: 8
          },
          end: {
            line: 120,
            column: 9
          }
        },
        "43": {
          start: {
            line: 116,
            column: 10
          },
          end: {
            line: 119,
            column: 52
          }
        },
        "44": {
          start: {
            line: 126,
            column: 4
          },
          end: {
            line: 128,
            column: 5
          }
        },
        "45": {
          start: {
            line: 127,
            column: 6
          },
          end: {
            line: 127,
            column: 15
          }
        },
        "46": {
          start: {
            line: 130,
            column: 4
          },
          end: {
            line: 130,
            column: 34
          }
        },
        "47": {
          start: {
            line: 134,
            column: 4
          },
          end: {
            line: 136,
            column: 5
          }
        },
        "48": {
          start: {
            line: 135,
            column: 6
          },
          end: {
            line: 135,
            column: 18
          }
        },
        "49": {
          start: {
            line: 138,
            column: 4
          },
          end: {
            line: 142,
            column: 5
          }
        },
        "50": {
          start: {
            line: 139,
            column: 6
          },
          end: {
            line: 141,
            column: 45
          }
        },
        "51": {
          start: {
            line: 143,
            column: 4
          },
          end: {
            line: 143,
            column: 16
          }
        },
        "52": {
          start: {
            line: 147,
            column: 4
          },
          end: {
            line: 149,
            column: 5
          }
        },
        "53": {
          start: {
            line: 148,
            column: 6
          },
          end: {
            line: 148,
            column: 17
          }
        },
        "54": {
          start: {
            line: 152,
            column: 4
          },
          end: {
            line: 155,
            column: 5
          }
        },
        "55": {
          start: {
            line: 153,
            column: 19
          },
          end: {
            line: 153,
            column: 40
          }
        },
        "56": {
          start: {
            line: 154,
            column: 6
          },
          end: {
            line: 154,
            column: 53
          }
        },
        "57": {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 159,
            column: 5
          }
        },
        "58": {
          start: {
            line: 158,
            column: 6
          },
          end: {
            line: 158,
            column: 20
          }
        },
        "59": {
          start: {
            line: 162,
            column: 4
          },
          end: {
            line: 164,
            column: 5
          }
        },
        "60": {
          start: {
            line: 163,
            column: 6
          },
          end: {
            line: 163,
            column: 17
          }
        },
        "61": {
          start: {
            line: 166,
            column: 4
          },
          end: {
            line: 166,
            column: 50
          }
        },
        "62": {
          start: {
            line: 171,
            column: 4
          },
          end: {
            line: 171,
            column: 25
          }
        },
        "63": {
          start: {
            line: 175,
            column: 4
          },
          end: {
            line: 175,
            column: 24
          }
        }
      },
      fnMap: {
        "0": {
          name: "toType",
          decl: {
            start: {
              line: 18,
              column: 9
            },
            end: {
              line: 18,
              column: 15
            }
          },
          loc: {
            start: {
              line: 18,
              column: 21
            },
            end: {
              line: 20,
              column: 1
            }
          },
          line: 18
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 31,
              column: 2
            },
            end: {
              line: 31,
              column: 3
            }
          },
          loc: {
            start: {
              line: 31,
              column: 17
            },
            end: {
              line: 37,
              column: 3
            }
          },
          line: 31
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 39,
              column: 2
            },
            end: {
              line: 39,
              column: 3
            }
          },
          loc: {
            start: {
              line: 39,
              column: 34
            },
            end: {
              line: 52,
              column: 3
            }
          },
          line: 39
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 54,
              column: 2
            },
            end: {
              line: 54,
              column: 3
            }
          },
          loc: {
            start: {
              line: 54,
              column: 44
            },
            end: {
              line: 76,
              column: 3
            }
          },
          line: 54
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
              column: 18
            },
            end: {
              line: 80,
              column: 3
            }
          },
          line: 78
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 82,
              column: 2
            },
            end: {
              line: 82,
              column: 3
            }
          },
          loc: {
            start: {
              line: 82,
              column: 32
            },
            end: {
              line: 84,
              column: 3
            }
          },
          line: 82
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 86,
              column: 2
            },
            end: {
              line: 86,
              column: 3
            }
          },
          loc: {
            start: {
              line: 86,
              column: 17
            },
            end: {
              line: 88,
              column: 3
            }
          },
          line: 86
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 90,
              column: 2
            },
            end: {
              line: 90,
              column: 3
            }
          },
          loc: {
            start: {
              line: 90,
              column: 42
            },
            end: {
              line: 105,
              column: 3
            }
          },
          line: 90
        },
        "8": {
          name: "listener",
          decl: {
            start: {
              line: 94,
              column: 13
            },
            end: {
              line: 94,
              column: 21
            }
          },
          loc: {
            start: {
              line: 94,
              column: 24
            },
            end: {
              line: 97,
              column: 5
            }
          },
          line: 94
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 100,
              column: 15
            },
            end: {
              line: 100,
              column: 16
            }
          },
          loc: {
            start: {
              line: 100,
              column: 21
            },
            end: {
              line: 104,
              column: 5
            }
          },
          line: 100
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 107,
              column: 2
            },
            end: {
              line: 107,
              column: 3
            }
          },
          loc: {
            start: {
              line: 107,
              column: 54
            },
            end: {
              line: 123,
              column: 3
            }
          },
          line: 107
        },
        "11": {
          name: "(anonymous_11)",
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
              column: 22
            },
            end: {
              line: 131,
              column: 3
            }
          },
          line: 125
        },
        "12": {
          name: "(anonymous_12)",
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
              column: 21
            },
            end: {
              line: 144,
              column: 3
            }
          },
          line: 133
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 146,
              column: 2
            },
            end: {
              line: 146,
              column: 3
            }
          },
          loc: {
            start: {
              line: 146,
              column: 26
            },
            end: {
              line: 167,
              column: 3
            }
          },
          line: 146
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 169,
              column: 2
            },
            end: {
              line: 169,
              column: 3
            }
          },
          loc: {
            start: {
              line: 169,
              column: 9
            },
            end: {
              line: 172,
              column: 3
            }
          },
          line: 169
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 171,
              column: 11
            },
            end: {
              line: 171,
              column: 12
            }
          },
          loc: {
            start: {
              line: 171,
              column: 23
            },
            end: {
              line: 171,
              column: 25
            }
          },
          line: 171
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
              column: 15
            },
            end: {
              line: 176,
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
              line: 42,
              column: 4
            },
            end: {
              line: 45,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 42,
              column: 4
            },
            end: {
              line: 45,
              column: 5
            }
          }, {
            start: {
              line: 42,
              column: 4
            },
            end: {
              line: 45,
              column: 5
            }
          }],
          line: 42
        },
        "1": {
          loc: {
            start: {
              line: 42,
              column: 8
            },
            end: {
              line: 42,
              column: 37
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 42,
              column: 8
            },
            end: {
              line: 42,
              column: 17
            }
          }, {
            start: {
              line: 42,
              column: 21
            },
            end: {
              line: 42,
              column: 37
            }
          }],
          line: 42
        },
        "2": {
          loc: {
            start: {
              line: 44,
              column: 17
            },
            end: {
              line: 44,
              column: 68
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 44,
              column: 48
            },
            end: {
              line: 44,
              column: 63
            }
          }, {
            start: {
              line: 44,
              column: 66
            },
            end: {
              line: 44,
              column: 68
            }
          }],
          line: 44
        },
        "3": {
          loc: {
            start: {
              line: 44,
              column: 17
            },
            end: {
              line: 44,
              column: 45
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 44,
              column: 17
            },
            end: {
              line: 44,
              column: 25
            }
          }, {
            start: {
              line: 44,
              column: 29
            },
            end: {
              line: 44,
              column: 45
            }
          }],
          line: 44
        },
        "4": {
          loc: {
            start: {
              line: 48,
              column: 13
            },
            end: {
              line: 48,
              column: 63
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 48,
              column: 48
            },
            end: {
              line: 48,
              column: 56
            }
          }, {
            start: {
              line: 48,
              column: 59
            },
            end: {
              line: 48,
              column: 63
            }
          }],
          line: 48
        },
        "5": {
          loc: {
            start: {
              line: 55,
              column: 4
            },
            end: {
              line: 57,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 55,
              column: 4
            },
            end: {
              line: 57,
              column: 5
            }
          }, {
            start: {
              line: 55,
              column: 4
            },
            end: {
              line: 57,
              column: 5
            }
          }],
          line: 55
        },
        "6": {
          loc: {
            start: {
              line: 67,
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
              line: 67,
              column: 4
            },
            end: {
              line: 69,
              column: 5
            }
          }, {
            start: {
              line: 67,
              column: 4
            },
            end: {
              line: 69,
              column: 5
            }
          }],
          line: 67
        },
        "7": {
          loc: {
            start: {
              line: 67,
              column: 8
            },
            end: {
              line: 67,
              column: 57
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 67,
              column: 8
            },
            end: {
              line: 67,
              column: 32
            }
          }, {
            start: {
              line: 67,
              column: 36
            },
            end: {
              line: 67,
              column: 57
            }
          }],
          line: 67
        },
        "8": {
          loc: {
            start: {
              line: 87,
              column: 12
            },
            end: {
              line: 87,
              column: 25
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 87,
              column: 12
            },
            end: {
              line: 87,
              column: 18
            }
          }, {
            start: {
              line: 87,
              column: 22
            },
            end: {
              line: 87,
              column: 25
            }
          }],
          line: 87
        },
        "9": {
          loc: {
            start: {
              line: 101,
              column: 6
            },
            end: {
              line: 103,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 101,
              column: 6
            },
            end: {
              line: 103,
              column: 7
            }
          }, {
            start: {
              line: 101,
              column: 6
            },
            end: {
              line: 103,
              column: 7
            }
          }],
          line: 101
        },
        "10": {
          loc: {
            start: {
              line: 109,
              column: 6
            },
            end: {
              line: 121,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 109,
              column: 6
            },
            end: {
              line: 121,
              column: 7
            }
          }, {
            start: {
              line: 109,
              column: 6
            },
            end: {
              line: 121,
              column: 7
            }
          }],
          line: 109
        },
        "11": {
          loc: {
            start: {
              line: 112,
              column: 30
            },
            end: {
              line: 113,
              column: 37
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 113,
              column: 12
            },
            end: {
              line: 113,
              column: 21
            }
          }, {
            start: {
              line: 113,
              column: 24
            },
            end: {
              line: 113,
              column: 37
            }
          }],
          line: 112
        },
        "12": {
          loc: {
            start: {
              line: 112,
              column: 30
            },
            end: {
              line: 112,
              column: 60
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 112,
              column: 30
            },
            end: {
              line: 112,
              column: 35
            }
          }, {
            start: {
              line: 112,
              column: 39
            },
            end: {
              line: 112,
              column: 60
            }
          }],
          line: 112
        },
        "13": {
          loc: {
            start: {
              line: 115,
              column: 8
            },
            end: {
              line: 120,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 115,
              column: 8
            },
            end: {
              line: 120,
              column: 9
            }
          }, {
            start: {
              line: 115,
              column: 8
            },
            end: {
              line: 120,
              column: 9
            }
          }],
          line: 115
        },
        "14": {
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
        "15": {
          loc: {
            start: {
              line: 134,
              column: 4
            },
            end: {
              line: 136,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 134,
              column: 4
            },
            end: {
              line: 136,
              column: 5
            }
          }, {
            start: {
              line: 134,
              column: 4
            },
            end: {
              line: 136,
              column: 5
            }
          }],
          line: 134
        },
        "16": {
          loc: {
            start: {
              line: 138,
              column: 4
            },
            end: {
              line: 142,
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
              line: 142,
              column: 5
            }
          }, {
            start: {
              line: 138,
              column: 4
            },
            end: {
              line: 142,
              column: 5
            }
          }],
          line: 138
        },
        "17": {
          loc: {
            start: {
              line: 138,
              column: 8
            },
            end: {
              line: 138,
              column: 112
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 138,
              column: 8
            },
            end: {
              line: 138,
              column: 30
            }
          }, {
            start: {
              line: 138,
              column: 34
            },
            end: {
              line: 138,
              column: 61
            }
          }, {
            start: {
              line: 138,
              column: 65
            },
            end: {
              line: 138,
              column: 112
            }
          }],
          line: 138
        },
        "18": {
          loc: {
            start: {
              line: 139,
              column: 13
            },
            end: {
              line: 141,
              column: 45
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 139,
              column: 13
            },
            end: {
              line: 139,
              column: 45
            }
          }, {
            start: {
              line: 140,
              column: 8
            },
            end: {
              line: 140,
              column: 51
            }
          }, {
            start: {
              line: 141,
              column: 8
            },
            end: {
              line: 141,
              column: 45
            }
          }],
          line: 139
        },
        "19": {
          loc: {
            start: {
              line: 147,
              column: 4
            },
            end: {
              line: 149,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 147,
              column: 4
            },
            end: {
              line: 149,
              column: 5
            }
          }, {
            start: {
              line: 147,
              column: 4
            },
            end: {
              line: 149,
              column: 5
            }
          }],
          line: 147
        },
        "20": {
          loc: {
            start: {
              line: 152,
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
              line: 152,
              column: 4
            },
            end: {
              line: 155,
              column: 5
            }
          }, {
            start: {
              line: 152,
              column: 4
            },
            end: {
              line: 155,
              column: 5
            }
          }],
          line: 152
        },
        "21": {
          loc: {
            start: {
              line: 154,
              column: 13
            },
            end: {
              line: 154,
              column: 53
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 154,
              column: 42
            },
            end: {
              line: 154,
              column: 46
            }
          }, {
            start: {
              line: 154,
              column: 49
            },
            end: {
              line: 154,
              column: 53
            }
          }],
          line: 154
        },
        "22": {
          loc: {
            start: {
              line: 157,
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
              line: 157,
              column: 4
            },
            end: {
              line: 159,
              column: 5
            }
          }, {
            start: {
              line: 157,
              column: 4
            },
            end: {
              line: 159,
              column: 5
            }
          }],
          line: 157
        },
        "23": {
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
              line: 162,
              column: 4
            },
            end: {
              line: 164,
              column: 5
            }
          }],
          line: 162
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
        "63": 0
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
        "17": [0, 0, 0],
        "18": [0, 0, 0],
        "19": [0, 0],
        "20": [0, 0],
        "21": [0, 0],
        "22": [0, 0],
        "23": [0, 0]
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
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */
  var MAX_UID = (cov_21pdy8pr5e.s[0]++, 1000000);
  var MILLISECONDS_MULTIPLIER = (cov_21pdy8pr5e.s[1]++, 1000); // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    cov_21pdy8pr5e.f[0]++;
    cov_21pdy8pr5e.s[2]++;
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = (cov_21pdy8pr5e.s[3]++, {
    TRANSITION_END: 'transitionend',
    getUID: function getUID(prefix) {
      cov_21pdy8pr5e.f[1]++;
      cov_21pdy8pr5e.s[4]++;

      do {
        cov_21pdy8pr5e.s[5]++;
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      cov_21pdy8pr5e.s[6]++;
      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      cov_21pdy8pr5e.f[2]++;
      var selector = (cov_21pdy8pr5e.s[7]++, element.getAttribute('data-target'));
      cov_21pdy8pr5e.s[8]++;

      if ((cov_21pdy8pr5e.b[1][0]++, !selector) || (cov_21pdy8pr5e.b[1][1]++, selector === '#')) {
        cov_21pdy8pr5e.b[0][0]++;
        var hrefAttr = (cov_21pdy8pr5e.s[9]++, element.getAttribute('href'));
        cov_21pdy8pr5e.s[10]++;
        selector = (cov_21pdy8pr5e.b[3][0]++, hrefAttr) && (cov_21pdy8pr5e.b[3][1]++, hrefAttr !== '#') ? (cov_21pdy8pr5e.b[2][0]++, hrefAttr.trim()) : (cov_21pdy8pr5e.b[2][1]++, '');
      } else {
        cov_21pdy8pr5e.b[0][1]++;
      }

      cov_21pdy8pr5e.s[11]++;

      try {
        cov_21pdy8pr5e.s[12]++;
        return document.querySelector(selector) ? (cov_21pdy8pr5e.b[4][0]++, selector) : (cov_21pdy8pr5e.b[4][1]++, null);
      } catch (err) {
        cov_21pdy8pr5e.s[13]++;
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      cov_21pdy8pr5e.f[3]++;
      cov_21pdy8pr5e.s[14]++;

      if (!element) {
        cov_21pdy8pr5e.b[5][0]++;
        cov_21pdy8pr5e.s[15]++;
        return 0;
      } else {
        cov_21pdy8pr5e.b[5][1]++;
      } // Get transition-duration of the element


      var transitionDuration = (cov_21pdy8pr5e.s[16]++, window.getComputedStyle(element).transitionDuration);
      var transitionDelay = (cov_21pdy8pr5e.s[17]++, window.getComputedStyle(element).transitionDelay);
      var floatTransitionDuration = (cov_21pdy8pr5e.s[18]++, parseFloat(transitionDuration));
      var floatTransitionDelay = (cov_21pdy8pr5e.s[19]++, parseFloat(transitionDelay)); // Return 0 if element or transition duration is not found

      cov_21pdy8pr5e.s[20]++;

      if ((cov_21pdy8pr5e.b[7][0]++, !floatTransitionDuration) && (cov_21pdy8pr5e.b[7][1]++, !floatTransitionDelay)) {
        cov_21pdy8pr5e.b[6][0]++;
        cov_21pdy8pr5e.s[21]++;
        return 0;
      } else {
        cov_21pdy8pr5e.b[6][1]++;
      } // If multiple durations are defined, take the first


      cov_21pdy8pr5e.s[22]++;
      transitionDuration = transitionDuration.split(',')[0];
      cov_21pdy8pr5e.s[23]++;
      transitionDelay = transitionDelay.split(',')[0];
      cov_21pdy8pr5e.s[24]++;
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      cov_21pdy8pr5e.f[4]++;
      cov_21pdy8pr5e.s[25]++;
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      cov_21pdy8pr5e.f[5]++;
      cov_21pdy8pr5e.s[26]++;
      element.dispatchEvent(new Event(Util.TRANSITION_END));
    },
    isElement: function isElement(obj) {
      cov_21pdy8pr5e.f[6]++;
      cov_21pdy8pr5e.s[27]++;
      return ((cov_21pdy8pr5e.b[8][0]++, obj[0]) || (cov_21pdy8pr5e.b[8][1]++, obj)).nodeType;
    },
    emulateTransitionEnd: function emulateTransitionEnd(element, duration) {
      cov_21pdy8pr5e.f[7]++;
      var called = (cov_21pdy8pr5e.s[28]++, false);
      var durationPadding = (cov_21pdy8pr5e.s[29]++, 5);
      var emulatedDuration = (cov_21pdy8pr5e.s[30]++, duration + durationPadding);

      function listener() {
        cov_21pdy8pr5e.f[8]++;
        cov_21pdy8pr5e.s[31]++;
        called = true;
        cov_21pdy8pr5e.s[32]++;
        element.removeEventListener(Util.TRANSITION_END, listener);
      }

      cov_21pdy8pr5e.s[33]++;
      element.addEventListener(Util.TRANSITION_END, listener);
      cov_21pdy8pr5e.s[34]++;
      setTimeout(function () {
        cov_21pdy8pr5e.f[9]++;
        cov_21pdy8pr5e.s[35]++;

        if (!called) {
          cov_21pdy8pr5e.b[9][0]++;
          cov_21pdy8pr5e.s[36]++;
          Util.triggerTransitionEnd(element);
        } else {
          cov_21pdy8pr5e.b[9][1]++;
        }
      }, emulatedDuration);
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      cov_21pdy8pr5e.f[10]++;
      cov_21pdy8pr5e.s[37]++;

      for (var property in configTypes) {
        cov_21pdy8pr5e.s[38]++;

        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          cov_21pdy8pr5e.b[10][0]++;
          var expectedTypes = (cov_21pdy8pr5e.s[39]++, configTypes[property]);
          var value = (cov_21pdy8pr5e.s[40]++, config[property]);
          var valueType = (cov_21pdy8pr5e.s[41]++, (cov_21pdy8pr5e.b[12][0]++, value) && (cov_21pdy8pr5e.b[12][1]++, Util.isElement(value)) ? (cov_21pdy8pr5e.b[11][0]++, 'element') : (cov_21pdy8pr5e.b[11][1]++, toType(value)));
          cov_21pdy8pr5e.s[42]++;

          if (!new RegExp(expectedTypes).test(valueType)) {
            cov_21pdy8pr5e.b[13][0]++;
            cov_21pdy8pr5e.s[43]++;
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          } else {
            cov_21pdy8pr5e.b[13][1]++;
          }
        } else {
          cov_21pdy8pr5e.b[10][1]++;
        }
      }
    },
    makeArray: function makeArray(nodeList) {
      cov_21pdy8pr5e.f[11]++;
      cov_21pdy8pr5e.s[44]++;

      if (!nodeList) {
        cov_21pdy8pr5e.b[14][0]++;
        cov_21pdy8pr5e.s[45]++;
        return [];
      } else {
        cov_21pdy8pr5e.b[14][1]++;
      }

      cov_21pdy8pr5e.s[46]++;
      return [].slice.call(nodeList);
    },
    isVisible: function isVisible(element) {
      cov_21pdy8pr5e.f[12]++;
      cov_21pdy8pr5e.s[47]++;

      if (!element) {
        cov_21pdy8pr5e.b[15][0]++;
        cov_21pdy8pr5e.s[48]++;
        return false;
      } else {
        cov_21pdy8pr5e.b[15][1]++;
      }

      cov_21pdy8pr5e.s[49]++;

      if ((cov_21pdy8pr5e.b[17][0]++, element.style !== null) && (cov_21pdy8pr5e.b[17][1]++, element.parentNode !== null) && (cov_21pdy8pr5e.b[17][2]++, typeof element.parentNode.style !== 'undefined')) {
        cov_21pdy8pr5e.b[16][0]++;
        cov_21pdy8pr5e.s[50]++;
        return (cov_21pdy8pr5e.b[18][0]++, element.style.display !== 'none') && (cov_21pdy8pr5e.b[18][1]++, element.parentNode.style.display !== 'none') && (cov_21pdy8pr5e.b[18][2]++, element.style.visibility !== 'hidden');
      } else {
        cov_21pdy8pr5e.b[16][1]++;
      }

      cov_21pdy8pr5e.s[51]++;
      return false;
    },
    findShadowRoot: function findShadowRoot(element) {
      cov_21pdy8pr5e.f[13]++;
      cov_21pdy8pr5e.s[52]++;

      if (!document.documentElement.attachShadow) {
        cov_21pdy8pr5e.b[19][0]++;
        cov_21pdy8pr5e.s[53]++;
        return null;
      } else {
        cov_21pdy8pr5e.b[19][1]++;
      } // Can find the shadow root otherwise it'll return the document


      cov_21pdy8pr5e.s[54]++;

      if (typeof element.getRootNode === 'function') {
        cov_21pdy8pr5e.b[20][0]++;
        var root = (cov_21pdy8pr5e.s[55]++, element.getRootNode());
        cov_21pdy8pr5e.s[56]++;
        return root instanceof ShadowRoot ? (cov_21pdy8pr5e.b[21][0]++, root) : (cov_21pdy8pr5e.b[21][1]++, null);
      } else {
        cov_21pdy8pr5e.b[20][1]++;
      }

      cov_21pdy8pr5e.s[57]++;

      if (element instanceof ShadowRoot) {
        cov_21pdy8pr5e.b[22][0]++;
        cov_21pdy8pr5e.s[58]++;
        return element;
      } else {
        cov_21pdy8pr5e.b[22][1]++;
      } // when we don't find a shadow root


      cov_21pdy8pr5e.s[59]++;

      if (!element.parentNode) {
        cov_21pdy8pr5e.b[23][0]++;
        cov_21pdy8pr5e.s[60]++;
        return null;
      } else {
        cov_21pdy8pr5e.b[23][1]++;
      }

      cov_21pdy8pr5e.s[61]++;
      return Util.findShadowRoot(element.parentNode);
    },
    noop: function noop() {
      cov_21pdy8pr5e.f[14]++;
      cov_21pdy8pr5e.s[62]++;
      // eslint-disable-next-line no-empty-function
      return function () {
        cov_21pdy8pr5e.f[15]++;
      };
    },

    get jQuery() {
      cov_21pdy8pr5e.f[16]++;
      cov_21pdy8pr5e.s[63]++;
      return window.jQuery;
    }

  });

  return Util;

}));
//# sourceMappingURL=util.js.map

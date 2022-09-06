/*!
  * Bootstrap tab.js v4.6.2-1 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2022 https://github.com/MahdiMajidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Tab = factory(global.jQuery, global.Util));
})(this, (function ($, Util) { 'use strict';

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
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function cov_1p6jraxhcd() {
    var path = "C:\\Users\\mmajidzade\\Documents\\GitHub\\bootstrap-v4-rtl\\js\\src\\tab.js";
    var hash = "2261fb9511539bc503068624fc25f5a3b4d3b839";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "C:\\Users\\mmajidzade\\Documents\\GitHub\\bootstrap-v4-rtl\\js\\src\\tab.js",
      statementMap: {
        "0": {
          start: {
            line: 15,
            column: 13
          },
          end: {
            line: 15,
            column: 18
          }
        },
        "1": {
          start: {
            line: 16,
            column: 16
          },
          end: {
            line: 16,
            column: 23
          }
        },
        "2": {
          start: {
            line: 17,
            column: 17
          },
          end: {
            line: 17,
            column: 25
          }
        },
        "3": {
          start: {
            line: 18,
            column: 18
          },
          end: {
            line: 18,
            column: 32
          }
        },
        "4": {
          start: {
            line: 19,
            column: 21
          },
          end: {
            line: 19,
            column: 32
          }
        },
        "5": {
          start: {
            line: 20,
            column: 27
          },
          end: {
            line: 20,
            column: 37
          }
        },
        "6": {
          start: {
            line: 22,
            column: 33
          },
          end: {
            line: 22,
            column: 48
          }
        },
        "7": {
          start: {
            line: 23,
            column: 26
          },
          end: {
            line: 23,
            column: 34
          }
        },
        "8": {
          start: {
            line: 24,
            column: 28
          },
          end: {
            line: 24,
            column: 38
          }
        },
        "9": {
          start: {
            line: 25,
            column: 24
          },
          end: {
            line: 25,
            column: 30
          }
        },
        "10": {
          start: {
            line: 26,
            column: 24
          },
          end: {
            line: 26,
            column: 30
          }
        },
        "11": {
          start: {
            line: 28,
            column: 19
          },
          end: {
            line: 28,
            column: 37
          }
        },
        "12": {
          start: {
            line: 29,
            column: 21
          },
          end: {
            line: 29,
            column: 41
          }
        },
        "13": {
          start: {
            line: 30,
            column: 19
          },
          end: {
            line: 30,
            column: 37
          }
        },
        "14": {
          start: {
            line: 31,
            column: 20
          },
          end: {
            line: 31,
            column: 39
          }
        },
        "15": {
          start: {
            line: 32,
            column: 29
          },
          end: {
            line: 32,
            column: 63
          }
        },
        "16": {
          start: {
            line: 34,
            column: 26
          },
          end: {
            line: 34,
            column: 37
          }
        },
        "17": {
          start: {
            line: 35,
            column: 32
          },
          end: {
            line: 35,
            column: 51
          }
        },
        "18": {
          start: {
            line: 36,
            column: 24
          },
          end: {
            line: 36,
            column: 33
          }
        },
        "19": {
          start: {
            line: 37,
            column: 27
          },
          end: {
            line: 37,
            column: 43
          }
        },
        "20": {
          start: {
            line: 38,
            column: 29
          },
          end: {
            line: 38,
            column: 94
          }
        },
        "21": {
          start: {
            line: 39,
            column: 33
          },
          end: {
            line: 39,
            column: 51
          }
        },
        "22": {
          start: {
            line: 40,
            column: 39
          },
          end: {
            line: 40,
            column: 65
          }
        },
        "23": {
          start: {
            line: 48,
            column: 4
          },
          end: {
            line: 48,
            column: 27
          }
        },
        "24": {
          start: {
            line: 53,
            column: 4
          },
          end: {
            line: 53,
            column: 18
          }
        },
        "25": {
          start: {
            line: 58,
            column: 4
          },
          end: {
            line: 64,
            column: 5
          }
        },
        "26": {
          start: {
            line: 63,
            column: 6
          },
          end: {
            line: 63,
            column: 12
          }
        },
        "27": {
          start: {
            line: 68,
            column: 24
          },
          end: {
            line: 68,
            column: 76
          }
        },
        "28": {
          start: {
            line: 69,
            column: 21
          },
          end: {
            line: 69,
            column: 63
          }
        },
        "29": {
          start: {
            line: 71,
            column: 4
          },
          end: {
            line: 75,
            column: 5
          }
        },
        "30": {
          start: {
            line: 72,
            column: 27
          },
          end: {
            line: 72,
            column: 128
          }
        },
        "31": {
          start: {
            line: 73,
            column: 6
          },
          end: {
            line: 73,
            column: 63
          }
        },
        "32": {
          start: {
            line: 74,
            column: 6
          },
          end: {
            line: 74,
            column: 46
          }
        },
        "33": {
          start: {
            line: 77,
            column: 22
          },
          end: {
            line: 79,
            column: 6
          }
        },
        "34": {
          start: {
            line: 81,
            column: 22
          },
          end: {
            line: 83,
            column: 6
          }
        },
        "35": {
          start: {
            line: 85,
            column: 4
          },
          end: {
            line: 87,
            column: 5
          }
        },
        "36": {
          start: {
            line: 86,
            column: 6
          },
          end: {
            line: 86,
            column: 36
          }
        },
        "37": {
          start: {
            line: 89,
            column: 4
          },
          end: {
            line: 89,
            column: 39
          }
        },
        "38": {
          start: {
            line: 91,
            column: 4
          },
          end: {
            line: 94,
            column: 5
          }
        },
        "39": {
          start: {
            line: 93,
            column: 6
          },
          end: {
            line: 93,
            column: 12
          }
        },
        "40": {
          start: {
            line: 96,
            column: 4
          },
          end: {
            line: 98,
            column: 5
          }
        },
        "41": {
          start: {
            line: 97,
            column: 6
          },
          end: {
            line: 97,
            column: 47
          }
        },
        "42": {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 103,
            column: 5
          }
        },
        "43": {
          start: {
            line: 105,
            column: 21
          },
          end: {
            line: 116,
            column: 5
          }
        },
        "44": {
          start: {
            line: 106,
            column: 26
          },
          end: {
            line: 108,
            column: 8
          }
        },
        "45": {
          start: {
            line: 110,
            column: 25
          },
          end: {
            line: 112,
            column: 8
          }
        },
        "46": {
          start: {
            line: 114,
            column: 6
          },
          end: {
            line: 114,
            column: 38
          }
        },
        "47": {
          start: {
            line: 115,
            column: 6
          },
          end: {
            line: 115,
            column: 42
          }
        },
        "48": {
          start: {
            line: 118,
            column: 4
          },
          end: {
            line: 122,
            column: 5
          }
        },
        "49": {
          start: {
            line: 119,
            column: 6
          },
          end: {
            line: 119,
            column: 57
          }
        },
        "50": {
          start: {
            line: 121,
            column: 6
          },
          end: {
            line: 121,
            column: 16
          }
        },
        "51": {
          start: {
            line: 126,
            column: 4
          },
          end: {
            line: 126,
            column: 41
          }
        },
        "52": {
          start: {
            line: 127,
            column: 4
          },
          end: {
            line: 127,
            column: 24
          }
        },
        "53": {
          start: {
            line: 132,
            column: 27
          },
          end: {
            line: 134,
            column: 44
          }
        },
        "54": {
          start: {
            line: 136,
            column: 19
          },
          end: {
            line: 136,
            column: 36
          }
        },
        "55": {
          start: {
            line: 137,
            column: 28
          },
          end: {
            line: 137,
            column: 87
          }
        },
        "56": {
          start: {
            line: 138,
            column: 21
          },
          end: {
            line: 142,
            column: 5
          }
        },
        "57": {
          start: {
            line: 138,
            column: 27
          },
          end: {
            line: 142,
            column: 5
          }
        },
        "58": {
          start: {
            line: 144,
            column: 4
          },
          end: {
            line: 153,
            column: 5
          }
        },
        "59": {
          start: {
            line: 145,
            column: 33
          },
          end: {
            line: 145,
            column: 78
          }
        },
        "60": {
          start: {
            line: 147,
            column: 6
          },
          end: {
            line: 150,
            column: 49
          }
        },
        "61": {
          start: {
            line: 152,
            column: 6
          },
          end: {
            line: 152,
            column: 16
          }
        },
        "62": {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 171,
            column: 5
          }
        },
        "63": {
          start: {
            line: 158,
            column: 6
          },
          end: {
            line: 158,
            column: 46
          }
        },
        "64": {
          start: {
            line: 160,
            column: 28
          },
          end: {
            line: 162,
            column: 10
          }
        },
        "65": {
          start: {
            line: 164,
            column: 6
          },
          end: {
            line: 166,
            column: 7
          }
        },
        "66": {
          start: {
            line: 165,
            column: 8
          },
          end: {
            line: 165,
            column: 55
          }
        },
        "67": {
          start: {
            line: 168,
            column: 6
          },
          end: {
            line: 170,
            column: 7
          }
        },
        "68": {
          start: {
            line: 169,
            column: 8
          },
          end: {
            line: 169,
            column: 51
          }
        },
        "69": {
          start: {
            line: 173,
            column: 4
          },
          end: {
            line: 173,
            column: 42
          }
        },
        "70": {
          start: {
            line: 174,
            column: 4
          },
          end: {
            line: 176,
            column: 5
          }
        },
        "71": {
          start: {
            line: 175,
            column: 6
          },
          end: {
            line: 175,
            column: 49
          }
        },
        "72": {
          start: {
            line: 178,
            column: 4
          },
          end: {
            line: 178,
            column: 24
          }
        },
        "73": {
          start: {
            line: 180,
            column: 4
          },
          end: {
            line: 182,
            column: 5
          }
        },
        "74": {
          start: {
            line: 181,
            column: 6
          },
          end: {
            line: 181,
            column: 44
          }
        },
        "75": {
          start: {
            line: 184,
            column: 17
          },
          end: {
            line: 184,
            column: 35
          }
        },
        "76": {
          start: {
            line: 185,
            column: 4
          },
          end: {
            line: 187,
            column: 5
          }
        },
        "77": {
          start: {
            line: 186,
            column: 6
          },
          end: {
            line: 186,
            column: 32
          }
        },
        "78": {
          start: {
            line: 189,
            column: 4
          },
          end: {
            line: 199,
            column: 5
          }
        },
        "79": {
          start: {
            line: 190,
            column: 30
          },
          end: {
            line: 190,
            column: 70
          }
        },
        "80": {
          start: {
            line: 192,
            column: 6
          },
          end: {
            line: 196,
            column: 7
          }
        },
        "81": {
          start: {
            line: 193,
            column: 35
          },
          end: {
            line: 193,
            column: 108
          }
        },
        "82": {
          start: {
            line: 195,
            column: 8
          },
          end: {
            line: 195,
            column: 57
          }
        },
        "83": {
          start: {
            line: 198,
            column: 6
          },
          end: {
            line: 198,
            column: 49
          }
        },
        "84": {
          start: {
            line: 201,
            column: 4
          },
          end: {
            line: 203,
            column: 5
          }
        },
        "85": {
          start: {
            line: 202,
            column: 6
          },
          end: {
            line: 202,
            column: 16
          }
        },
        "86": {
          start: {
            line: 208,
            column: 4
          },
          end: {
            line: 224,
            column: 6
          }
        },
        "87": {
          start: {
            line: 209,
            column: 20
          },
          end: {
            line: 209,
            column: 27
          }
        },
        "88": {
          start: {
            line: 210,
            column: 17
          },
          end: {
            line: 210,
            column: 37
          }
        },
        "89": {
          start: {
            line: 212,
            column: 6
          },
          end: {
            line: 215,
            column: 7
          }
        },
        "90": {
          start: {
            line: 213,
            column: 8
          },
          end: {
            line: 213,
            column: 28
          }
        },
        "91": {
          start: {
            line: 214,
            column: 8
          },
          end: {
            line: 214,
            column: 34
          }
        },
        "92": {
          start: {
            line: 217,
            column: 6
          },
          end: {
            line: 223,
            column: 7
          }
        },
        "93": {
          start: {
            line: 218,
            column: 8
          },
          end: {
            line: 220,
            column: 9
          }
        },
        "94": {
          start: {
            line: 219,
            column: 10
          },
          end: {
            line: 219,
            column: 60
          }
        },
        "95": {
          start: {
            line: 222,
            column: 8
          },
          end: {
            line: 222,
            column: 22
          }
        },
        "96": {
          start: {
            line: 232,
            column: 0
          },
          end: {
            line: 236,
            column: 4
          }
        },
        "97": {
          start: {
            line: 234,
            column: 4
          },
          end: {
            line: 234,
            column: 26
          }
        },
        "98": {
          start: {
            line: 235,
            column: 4
          },
          end: {
            line: 235,
            column: 46
          }
        },
        "99": {
          start: {
            line: 242,
            column: 0
          },
          end: {
            line: 242,
            column: 33
          }
        },
        "100": {
          start: {
            line: 243,
            column: 0
          },
          end: {
            line: 243,
            column: 28
          }
        },
        "101": {
          start: {
            line: 244,
            column: 0
          },
          end: {
            line: 247,
            column: 1
          }
        },
        "102": {
          start: {
            line: 245,
            column: 2
          },
          end: {
            line: 245,
            column: 33
          }
        },
        "103": {
          start: {
            line: 246,
            column: 2
          },
          end: {
            line: 246,
            column: 29
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 47,
              column: 2
            },
            end: {
              line: 47,
              column: 3
            }
          },
          loc: {
            start: {
              line: 47,
              column: 23
            },
            end: {
              line: 49,
              column: 3
            }
          },
          line: 47
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 52,
              column: 2
            },
            end: {
              line: 52,
              column: 3
            }
          },
          loc: {
            start: {
              line: 52,
              column: 23
            },
            end: {
              line: 54,
              column: 3
            }
          },
          line: 52
        },
        "2": {
          name: "(anonymous_2)",
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
              column: 9
            },
            end: {
              line: 123,
              column: 3
            }
          },
          line: 57
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 105,
              column: 21
            },
            end: {
              line: 105,
              column: 22
            }
          },
          loc: {
            start: {
              line: 105,
              column: 27
            },
            end: {
              line: 116,
              column: 5
            }
          },
          line: 105
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
              column: 12
            },
            end: {
              line: 128,
              column: 3
            }
          },
          line: 125
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 131,
              column: 2
            },
            end: {
              line: 131,
              column: 3
            }
          },
          loc: {
            start: {
              line: 131,
              column: 42
            },
            end: {
              line: 154,
              column: 3
            }
          },
          line: 131
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 138,
              column: 21
            },
            end: {
              line: 138,
              column: 22
            }
          },
          loc: {
            start: {
              line: 138,
              column: 27
            },
            end: {
              line: 142,
              column: 5
            }
          },
          line: 138
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 156,
              column: 2
            },
            end: {
              line: 156,
              column: 3
            }
          },
          loc: {
            start: {
              line: 156,
              column: 49
            },
            end: {
              line: 204,
              column: 3
            }
          },
          line: 156
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 207,
              column: 2
            },
            end: {
              line: 207,
              column: 3
            }
          },
          loc: {
            start: {
              line: 207,
              column: 34
            },
            end: {
              line: 225,
              column: 3
            }
          },
          line: 207
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 208,
              column: 21
            },
            end: {
              line: 208,
              column: 22
            }
          },
          loc: {
            start: {
              line: 208,
              column: 33
            },
            end: {
              line: 224,
              column: 5
            }
          },
          line: 208
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 233,
              column: 50
            },
            end: {
              line: 233,
              column: 51
            }
          },
          loc: {
            start: {
              line: 233,
              column: 67
            },
            end: {
              line: 236,
              column: 3
            }
          },
          line: 233
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 244,
              column: 24
            },
            end: {
              line: 244,
              column: 25
            }
          },
          loc: {
            start: {
              line: 244,
              column: 30
            },
            end: {
              line: 247,
              column: 1
            }
          },
          line: 244
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 58,
              column: 4
            },
            end: {
              line: 64,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 58,
              column: 4
            },
            end: {
              line: 64,
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
          line: 58
        },
        "1": {
          loc: {
            start: {
              line: 58,
              column: 8
            },
            end: {
              line: 62,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 58,
              column: 8
            },
            end: {
              line: 58,
              column: 32
            }
          }, {
            start: {
              line: 59,
              column: 8
            },
            end: {
              line: 59,
              column: 63
            }
          }, {
            start: {
              line: 60,
              column: 8
            },
            end: {
              line: 60,
              column: 52
            }
          }, {
            start: {
              line: 61,
              column: 8
            },
            end: {
              line: 61,
              column: 54
            }
          }, {
            start: {
              line: 62,
              column: 8
            },
            end: {
              line: 62,
              column: 46
            }
          }],
          line: 58
        },
        "2": {
          loc: {
            start: {
              line: 71,
              column: 4
            },
            end: {
              line: 75,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 71,
              column: 4
            },
            end: {
              line: 75,
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
          line: 71
        },
        "3": {
          loc: {
            start: {
              line: 72,
              column: 27
            },
            end: {
              line: 72,
              column: 128
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 72,
              column: 92
            },
            end: {
              line: 72,
              column: 110
            }
          }, {
            start: {
              line: 72,
              column: 113
            },
            end: {
              line: 72,
              column: 128
            }
          }],
          line: 72
        },
        "4": {
          loc: {
            start: {
              line: 72,
              column: 27
            },
            end: {
              line: 72,
              column: 89
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 72,
              column: 27
            },
            end: {
              line: 72,
              column: 56
            }
          }, {
            start: {
              line: 72,
              column: 60
            },
            end: {
              line: 72,
              column: 89
            }
          }],
          line: 72
        },
        "5": {
          loc: {
            start: {
              line: 85,
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
              line: 85,
              column: 4
            },
            end: {
              line: 87,
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
          line: 85
        },
        "6": {
          loc: {
            start: {
              line: 91,
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
              line: 91,
              column: 4
            },
            end: {
              line: 94,
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
          line: 91
        },
        "7": {
          loc: {
            start: {
              line: 91,
              column: 8
            },
            end: {
              line: 92,
              column: 38
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 91,
              column: 8
            },
            end: {
              line: 91,
              column: 38
            }
          }, {
            start: {
              line: 92,
              column: 8
            },
            end: {
              line: 92,
              column: 38
            }
          }],
          line: 91
        },
        "8": {
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
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 96
        },
        "9": {
          loc: {
            start: {
              line: 118,
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
              line: 118,
              column: 4
            },
            end: {
              line: 122,
              column: 5
            }
          }, {
            start: {
              line: 120,
              column: 11
            },
            end: {
              line: 122,
              column: 5
            }
          }],
          line: 118
        },
        "10": {
          loc: {
            start: {
              line: 132,
              column: 27
            },
            end: {
              line: 134,
              column: 44
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 133,
              column: 6
            },
            end: {
              line: 133,
              column: 43
            }
          }, {
            start: {
              line: 134,
              column: 6
            },
            end: {
              line: 134,
              column: 44
            }
          }],
          line: 132
        },
        "11": {
          loc: {
            start: {
              line: 132,
              column: 27
            },
            end: {
              line: 132,
              column: 100
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 132,
              column: 27
            },
            end: {
              line: 132,
              column: 36
            }
          }, {
            start: {
              line: 132,
              column: 41
            },
            end: {
              line: 132,
              column: 68
            }
          }, {
            start: {
              line: 132,
              column: 72
            },
            end: {
              line: 132,
              column: 99
            }
          }],
          line: 132
        },
        "12": {
          loc: {
            start: {
              line: 137,
              column: 28
            },
            end: {
              line: 137,
              column: 87
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 137,
              column: 28
            },
            end: {
              line: 137,
              column: 36
            }
          }, {
            start: {
              line: 137,
              column: 41
            },
            end: {
              line: 137,
              column: 47
            }
          }, {
            start: {
              line: 137,
              column: 51
            },
            end: {
              line: 137,
              column: 86
            }
          }],
          line: 137
        },
        "13": {
          loc: {
            start: {
              line: 144,
              column: 4
            },
            end: {
              line: 153,
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
              line: 153,
              column: 5
            }
          }, {
            start: {
              line: 151,
              column: 11
            },
            end: {
              line: 153,
              column: 5
            }
          }],
          line: 144
        },
        "14": {
          loc: {
            start: {
              line: 144,
              column: 8
            },
            end: {
              line: 144,
              column: 33
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 144,
              column: 8
            },
            end: {
              line: 144,
              column: 14
            }
          }, {
            start: {
              line: 144,
              column: 18
            },
            end: {
              line: 144,
              column: 33
            }
          }],
          line: 144
        },
        "15": {
          loc: {
            start: {
              line: 157,
              column: 4
            },
            end: {
              line: 171,
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
              line: 171,
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
        "16": {
          loc: {
            start: {
              line: 164,
              column: 6
            },
            end: {
              line: 166,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 164,
              column: 6
            },
            end: {
              line: 166,
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
          line: 164
        },
        "17": {
          loc: {
            start: {
              line: 168,
              column: 6
            },
            end: {
              line: 170,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 168,
              column: 6
            },
            end: {
              line: 170,
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
          line: 168
        },
        "18": {
          loc: {
            start: {
              line: 174,
              column: 4
            },
            end: {
              line: 176,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 174,
              column: 4
            },
            end: {
              line: 176,
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
          line: 174
        },
        "19": {
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
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 180
        },
        "20": {
          loc: {
            start: {
              line: 185,
              column: 4
            },
            end: {
              line: 187,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 185,
              column: 4
            },
            end: {
              line: 187,
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
          line: 185
        },
        "21": {
          loc: {
            start: {
              line: 185,
              column: 8
            },
            end: {
              line: 185,
              column: 42
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 185,
              column: 8
            },
            end: {
              line: 185,
              column: 14
            }
          }, {
            start: {
              line: 185,
              column: 18
            },
            end: {
              line: 185,
              column: 42
            }
          }],
          line: 185
        },
        "22": {
          loc: {
            start: {
              line: 189,
              column: 4
            },
            end: {
              line: 199,
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
              line: 199,
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
          line: 189
        },
        "23": {
          loc: {
            start: {
              line: 189,
              column: 8
            },
            end: {
              line: 189,
              column: 62
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
              column: 14
            }
          }, {
            start: {
              line: 189,
              column: 18
            },
            end: {
              line: 189,
              column: 62
            }
          }],
          line: 189
        },
        "24": {
          loc: {
            start: {
              line: 192,
              column: 6
            },
            end: {
              line: 196,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 192,
              column: 6
            },
            end: {
              line: 196,
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
          line: 192
        },
        "25": {
          loc: {
            start: {
              line: 201,
              column: 4
            },
            end: {
              line: 203,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 201,
              column: 4
            },
            end: {
              line: 203,
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
          line: 201
        },
        "26": {
          loc: {
            start: {
              line: 212,
              column: 6
            },
            end: {
              line: 215,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 212,
              column: 6
            },
            end: {
              line: 215,
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
          line: 212
        },
        "27": {
          loc: {
            start: {
              line: 217,
              column: 6
            },
            end: {
              line: 223,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 217,
              column: 6
            },
            end: {
              line: 223,
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
          line: 217
        },
        "28": {
          loc: {
            start: {
              line: 218,
              column: 8
            },
            end: {
              line: 220,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 218,
              column: 8
            },
            end: {
              line: 220,
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
          line: 218
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
        "103": 0
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
        "1": [0, 0, 0, 0, 0],
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
        "26": [0, 0],
        "27": [0, 0],
        "28": [0, 0]
      },
      _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
      hash: "2261fb9511539bc503068624fc25f5a3b4d3b839"
    };
    var coverage = global[gcv] || (global[gcv] = {});

    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }

    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_1p6jraxhcd = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }

  cov_1p6jraxhcd();
  /**
   * Constants
   */

  var NAME = (cov_1p6jraxhcd().s[0]++, 'tab');
  var VERSION = (cov_1p6jraxhcd().s[1]++, '4.6.2');
  var DATA_KEY = (cov_1p6jraxhcd().s[2]++, 'bs.tab');
  var EVENT_KEY = (cov_1p6jraxhcd().s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_1p6jraxhcd().s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_1p6jraxhcd().s[5]++, $__default["default"].fn[NAME]);
  var CLASS_NAME_DROPDOWN_MENU = (cov_1p6jraxhcd().s[6]++, 'dropdown-menu');
  var CLASS_NAME_ACTIVE = (cov_1p6jraxhcd().s[7]++, 'active');
  var CLASS_NAME_DISABLED = (cov_1p6jraxhcd().s[8]++, 'disabled');
  var CLASS_NAME_FADE = (cov_1p6jraxhcd().s[9]++, 'fade');
  var CLASS_NAME_SHOW = (cov_1p6jraxhcd().s[10]++, 'show');
  var EVENT_HIDE = (cov_1p6jraxhcd().s[11]++, "hide" + EVENT_KEY);
  var EVENT_HIDDEN = (cov_1p6jraxhcd().s[12]++, "hidden" + EVENT_KEY);
  var EVENT_SHOW = (cov_1p6jraxhcd().s[13]++, "show" + EVENT_KEY);
  var EVENT_SHOWN = (cov_1p6jraxhcd().s[14]++, "shown" + EVENT_KEY);
  var EVENT_CLICK_DATA_API = (cov_1p6jraxhcd().s[15]++, "click" + EVENT_KEY + DATA_API_KEY);
  var SELECTOR_DROPDOWN = (cov_1p6jraxhcd().s[16]++, '.dropdown');
  var SELECTOR_NAV_LIST_GROUP = (cov_1p6jraxhcd().s[17]++, '.nav, .list-group');
  var SELECTOR_ACTIVE = (cov_1p6jraxhcd().s[18]++, '.active');
  var SELECTOR_ACTIVE_UL = (cov_1p6jraxhcd().s[19]++, '> li > .active');
  var SELECTOR_DATA_TOGGLE = (cov_1p6jraxhcd().s[20]++, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]');
  var SELECTOR_DROPDOWN_TOGGLE = (cov_1p6jraxhcd().s[21]++, '.dropdown-toggle');
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = (cov_1p6jraxhcd().s[22]++, '> .dropdown-menu .active');
  /**
   * Class definition
   */

  var Tab = /*#__PURE__*/function () {
    function Tab(element) {
      cov_1p6jraxhcd().f[0]++;
      cov_1p6jraxhcd().s[23]++;
      this._element = element;
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      cov_1p6jraxhcd().f[2]++;
      cov_1p6jraxhcd().s[25]++;

      if ((cov_1p6jraxhcd().b[1][0]++, this._element.parentNode) && (cov_1p6jraxhcd().b[1][1]++, this._element.parentNode.nodeType === Node.ELEMENT_NODE) && (cov_1p6jraxhcd().b[1][2]++, $__default["default"](this._element).hasClass(CLASS_NAME_ACTIVE)) || (cov_1p6jraxhcd().b[1][3]++, $__default["default"](this._element).hasClass(CLASS_NAME_DISABLED)) || (cov_1p6jraxhcd().b[1][4]++, this._element.hasAttribute('disabled'))) {
        cov_1p6jraxhcd().b[0][0]++;
        cov_1p6jraxhcd().s[26]++;
        return;
      } else {
        cov_1p6jraxhcd().b[0][1]++;
      }

      var target;
      var previous;
      var listElement = (cov_1p6jraxhcd().s[27]++, $__default["default"](this._element).closest(SELECTOR_NAV_LIST_GROUP)[0]);
      var selector = (cov_1p6jraxhcd().s[28]++, Util__default["default"].getSelectorFromElement(this._element));
      cov_1p6jraxhcd().s[29]++;

      if (listElement) {
        cov_1p6jraxhcd().b[2][0]++;
        var itemSelector = (cov_1p6jraxhcd().s[30]++, (cov_1p6jraxhcd().b[4][0]++, listElement.nodeName === 'UL') || (cov_1p6jraxhcd().b[4][1]++, listElement.nodeName === 'OL') ? (cov_1p6jraxhcd().b[3][0]++, SELECTOR_ACTIVE_UL) : (cov_1p6jraxhcd().b[3][1]++, SELECTOR_ACTIVE));
        cov_1p6jraxhcd().s[31]++;
        previous = $__default["default"].makeArray($__default["default"](listElement).find(itemSelector));
        cov_1p6jraxhcd().s[32]++;
        previous = previous[previous.length - 1];
      } else {
        cov_1p6jraxhcd().b[2][1]++;
      }

      var hideEvent = (cov_1p6jraxhcd().s[33]++, $__default["default"].Event(EVENT_HIDE, {
        relatedTarget: this._element
      }));
      var showEvent = (cov_1p6jraxhcd().s[34]++, $__default["default"].Event(EVENT_SHOW, {
        relatedTarget: previous
      }));
      cov_1p6jraxhcd().s[35]++;

      if (previous) {
        cov_1p6jraxhcd().b[5][0]++;
        cov_1p6jraxhcd().s[36]++;
        $__default["default"](previous).trigger(hideEvent);
      } else {
        cov_1p6jraxhcd().b[5][1]++;
      }

      cov_1p6jraxhcd().s[37]++;
      $__default["default"](this._element).trigger(showEvent);
      cov_1p6jraxhcd().s[38]++;

      if ((cov_1p6jraxhcd().b[7][0]++, showEvent.isDefaultPrevented()) || (cov_1p6jraxhcd().b[7][1]++, hideEvent.isDefaultPrevented())) {
        cov_1p6jraxhcd().b[6][0]++;
        cov_1p6jraxhcd().s[39]++;
        return;
      } else {
        cov_1p6jraxhcd().b[6][1]++;
      }

      cov_1p6jraxhcd().s[40]++;

      if (selector) {
        cov_1p6jraxhcd().b[8][0]++;
        cov_1p6jraxhcd().s[41]++;
        target = document.querySelector(selector);
      } else {
        cov_1p6jraxhcd().b[8][1]++;
      }

      cov_1p6jraxhcd().s[42]++;

      this._activate(this._element, listElement);

      cov_1p6jraxhcd().s[43]++;

      var complete = function complete() {
        cov_1p6jraxhcd().f[3]++;
        var hiddenEvent = (cov_1p6jraxhcd().s[44]++, $__default["default"].Event(EVENT_HIDDEN, {
          relatedTarget: _this._element
        }));
        var shownEvent = (cov_1p6jraxhcd().s[45]++, $__default["default"].Event(EVENT_SHOWN, {
          relatedTarget: previous
        }));
        cov_1p6jraxhcd().s[46]++;
        $__default["default"](previous).trigger(hiddenEvent);
        cov_1p6jraxhcd().s[47]++;
        $__default["default"](_this._element).trigger(shownEvent);
      };

      cov_1p6jraxhcd().s[48]++;

      if (target) {
        cov_1p6jraxhcd().b[9][0]++;
        cov_1p6jraxhcd().s[49]++;

        this._activate(target, target.parentNode, complete);
      } else {
        cov_1p6jraxhcd().b[9][1]++;
        cov_1p6jraxhcd().s[50]++;
        complete();
      }
    };

    _proto.dispose = function dispose() {
      cov_1p6jraxhcd().f[4]++;
      cov_1p6jraxhcd().s[51]++;
      $__default["default"].removeData(this._element, DATA_KEY);
      cov_1p6jraxhcd().s[52]++;
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      cov_1p6jraxhcd().f[5]++;
      var activeElements = (cov_1p6jraxhcd().s[53]++, (cov_1p6jraxhcd().b[11][0]++, container) && ((cov_1p6jraxhcd().b[11][1]++, container.nodeName === 'UL') || (cov_1p6jraxhcd().b[11][2]++, container.nodeName === 'OL')) ? (cov_1p6jraxhcd().b[10][0]++, $__default["default"](container).find(SELECTOR_ACTIVE_UL)) : (cov_1p6jraxhcd().b[10][1]++, $__default["default"](container).children(SELECTOR_ACTIVE)));
      var active = (cov_1p6jraxhcd().s[54]++, activeElements[0]);
      var isTransitioning = (cov_1p6jraxhcd().s[55]++, (cov_1p6jraxhcd().b[12][0]++, callback) && (cov_1p6jraxhcd().b[12][1]++, active) && (cov_1p6jraxhcd().b[12][2]++, $__default["default"](active).hasClass(CLASS_NAME_FADE)));
      cov_1p6jraxhcd().s[56]++;

      var complete = function complete() {
        cov_1p6jraxhcd().f[6]++;
        cov_1p6jraxhcd().s[57]++;
        return _this2._transitionComplete(element, active, callback);
      };

      cov_1p6jraxhcd().s[58]++;

      if ((cov_1p6jraxhcd().b[14][0]++, active) && (cov_1p6jraxhcd().b[14][1]++, isTransitioning)) {
        cov_1p6jraxhcd().b[13][0]++;
        var transitionDuration = (cov_1p6jraxhcd().s[59]++, Util__default["default"].getTransitionDurationFromElement(active));
        cov_1p6jraxhcd().s[60]++;
        $__default["default"](active).removeClass(CLASS_NAME_SHOW).one(Util__default["default"].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        cov_1p6jraxhcd().b[13][1]++;
        cov_1p6jraxhcd().s[61]++;
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      cov_1p6jraxhcd().f[7]++;
      cov_1p6jraxhcd().s[62]++;

      if (active) {
        cov_1p6jraxhcd().b[15][0]++;
        cov_1p6jraxhcd().s[63]++;
        $__default["default"](active).removeClass(CLASS_NAME_ACTIVE);
        var dropdownChild = (cov_1p6jraxhcd().s[64]++, $__default["default"](active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0]);
        cov_1p6jraxhcd().s[65]++;

        if (dropdownChild) {
          cov_1p6jraxhcd().b[16][0]++;
          cov_1p6jraxhcd().s[66]++;
          $__default["default"](dropdownChild).removeClass(CLASS_NAME_ACTIVE);
        } else {
          cov_1p6jraxhcd().b[16][1]++;
        }

        cov_1p6jraxhcd().s[67]++;

        if (active.getAttribute('role') === 'tab') {
          cov_1p6jraxhcd().b[17][0]++;
          cov_1p6jraxhcd().s[68]++;
          active.setAttribute('aria-selected', false);
        } else {
          cov_1p6jraxhcd().b[17][1]++;
        }
      } else {
        cov_1p6jraxhcd().b[15][1]++;
      }

      cov_1p6jraxhcd().s[69]++;
      $__default["default"](element).addClass(CLASS_NAME_ACTIVE);
      cov_1p6jraxhcd().s[70]++;

      if (element.getAttribute('role') === 'tab') {
        cov_1p6jraxhcd().b[18][0]++;
        cov_1p6jraxhcd().s[71]++;
        element.setAttribute('aria-selected', true);
      } else {
        cov_1p6jraxhcd().b[18][1]++;
      }

      cov_1p6jraxhcd().s[72]++;
      Util__default["default"].reflow(element);
      cov_1p6jraxhcd().s[73]++;

      if (element.classList.contains(CLASS_NAME_FADE)) {
        cov_1p6jraxhcd().b[19][0]++;
        cov_1p6jraxhcd().s[74]++;
        element.classList.add(CLASS_NAME_SHOW);
      } else {
        cov_1p6jraxhcd().b[19][1]++;
      }

      var parent = (cov_1p6jraxhcd().s[75]++, element.parentNode);
      cov_1p6jraxhcd().s[76]++;

      if ((cov_1p6jraxhcd().b[21][0]++, parent) && (cov_1p6jraxhcd().b[21][1]++, parent.nodeName === 'LI')) {
        cov_1p6jraxhcd().b[20][0]++;
        cov_1p6jraxhcd().s[77]++;
        parent = parent.parentNode;
      } else {
        cov_1p6jraxhcd().b[20][1]++;
      }

      cov_1p6jraxhcd().s[78]++;

      if ((cov_1p6jraxhcd().b[23][0]++, parent) && (cov_1p6jraxhcd().b[23][1]++, $__default["default"](parent).hasClass(CLASS_NAME_DROPDOWN_MENU))) {
        cov_1p6jraxhcd().b[22][0]++;
        var dropdownElement = (cov_1p6jraxhcd().s[79]++, $__default["default"](element).closest(SELECTOR_DROPDOWN)[0]);
        cov_1p6jraxhcd().s[80]++;

        if (dropdownElement) {
          cov_1p6jraxhcd().b[24][0]++;
          var dropdownToggleList = (cov_1p6jraxhcd().s[81]++, [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE)));
          cov_1p6jraxhcd().s[82]++;
          $__default["default"](dropdownToggleList).addClass(CLASS_NAME_ACTIVE);
        } else {
          cov_1p6jraxhcd().b[24][1]++;
        }

        cov_1p6jraxhcd().s[83]++;
        element.setAttribute('aria-expanded', true);
      } else {
        cov_1p6jraxhcd().b[22][1]++;
      }

      cov_1p6jraxhcd().s[84]++;

      if (callback) {
        cov_1p6jraxhcd().b[25][0]++;
        cov_1p6jraxhcd().s[85]++;
        callback();
      } else {
        cov_1p6jraxhcd().b[25][1]++;
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      cov_1p6jraxhcd().f[8]++;
      cov_1p6jraxhcd().s[86]++;
      return this.each(function () {
        cov_1p6jraxhcd().f[9]++;
        var $this = (cov_1p6jraxhcd().s[87]++, $__default["default"](this));
        var data = (cov_1p6jraxhcd().s[88]++, $this.data(DATA_KEY));
        cov_1p6jraxhcd().s[89]++;

        if (!data) {
          cov_1p6jraxhcd().b[26][0]++;
          cov_1p6jraxhcd().s[90]++;
          data = new Tab(this);
          cov_1p6jraxhcd().s[91]++;
          $this.data(DATA_KEY, data);
        } else {
          cov_1p6jraxhcd().b[26][1]++;
        }

        cov_1p6jraxhcd().s[92]++;

        if (typeof config === 'string') {
          cov_1p6jraxhcd().b[27][0]++;
          cov_1p6jraxhcd().s[93]++;

          if (typeof data[config] === 'undefined') {
            cov_1p6jraxhcd().b[28][0]++;
            cov_1p6jraxhcd().s[94]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_1p6jraxhcd().b[28][1]++;
          }

          cov_1p6jraxhcd().s[95]++;
          data[config]();
        } else {
          cov_1p6jraxhcd().b[27][1]++;
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        cov_1p6jraxhcd().f[1]++;
        cov_1p6jraxhcd().s[24]++;
        return VERSION;
      }
    }]);

    return Tab;
  }();
  /**
   * Data API implementation
   */


  cov_1p6jraxhcd().s[96]++;
  $__default["default"](document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    cov_1p6jraxhcd().f[10]++;
    cov_1p6jraxhcd().s[97]++;
    event.preventDefault();
    cov_1p6jraxhcd().s[98]++;

    Tab._jQueryInterface.call($__default["default"](this), 'show');
  });
  /**
   * jQuery
   */

  cov_1p6jraxhcd().s[99]++;
  $__default["default"].fn[NAME] = Tab._jQueryInterface;
  cov_1p6jraxhcd().s[100]++;
  $__default["default"].fn[NAME].Constructor = Tab;
  cov_1p6jraxhcd().s[101]++;

  $__default["default"].fn[NAME].noConflict = function () {
    cov_1p6jraxhcd().f[11]++;
    cov_1p6jraxhcd().s[102]++;
    $__default["default"].fn[NAME] = JQUERY_NO_CONFLICT;
    cov_1p6jraxhcd().s[103]++;
    return Tab._jQueryInterface;
  };

  return Tab;

}));
//# sourceMappingURL=tab.js.map

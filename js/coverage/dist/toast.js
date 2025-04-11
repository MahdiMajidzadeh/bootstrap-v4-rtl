/*!
  * Bootstrap toast.js v4.6.2-2 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2025 https://github.com/MahdiMajidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Toast = factory(global.jQuery, global.Util));
})(this, (function ($, Util) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
  var Util__default = /*#__PURE__*/_interopDefaultLegacy(Util);

  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function (n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }

  function cov_15y0x12a77() {
    var path = "/Users/mahdi/Documents/app/bootstrap-v4-rtl/js/src/toast.js";
    var hash = "79e4aa153f0e810b8957ec232c6f87464aab3c61";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Users/mahdi/Documents/app/bootstrap-v4-rtl/js/src/toast.js",
      statementMap: {
        "0": {
          start: {
            line: 15,
            column: 13
          },
          end: {
            line: 15,
            column: 20
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
            column: 27
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
            column: 27
          },
          end: {
            line: 19,
            column: 37
          }
        },
        "5": {
          start: {
            line: 21,
            column: 24
          },
          end: {
            line: 21,
            column: 30
          }
        },
        "6": {
          start: {
            line: 22,
            column: 24
          },
          end: {
            line: 22,
            column: 30
          }
        },
        "7": {
          start: {
            line: 23,
            column: 24
          },
          end: {
            line: 23,
            column: 30
          }
        },
        "8": {
          start: {
            line: 24,
            column: 27
          },
          end: {
            line: 24,
            column: 36
          }
        },
        "9": {
          start: {
            line: 26,
            column: 28
          },
          end: {
            line: 26,
            column: 55
          }
        },
        "10": {
          start: {
            line: 27,
            column: 19
          },
          end: {
            line: 27,
            column: 37
          }
        },
        "11": {
          start: {
            line: 28,
            column: 21
          },
          end: {
            line: 28,
            column: 41
          }
        },
        "12": {
          start: {
            line: 29,
            column: 19
          },
          end: {
            line: 29,
            column: 37
          }
        },
        "13": {
          start: {
            line: 30,
            column: 20
          },
          end: {
            line: 30,
            column: 39
          }
        },
        "14": {
          start: {
            line: 32,
            column: 30
          },
          end: {
            line: 32,
            column: 54
          }
        },
        "15": {
          start: {
            line: 34,
            column: 16
          },
          end: {
            line: 38,
            column: 1
          }
        },
        "16": {
          start: {
            line: 40,
            column: 20
          },
          end: {
            line: 44,
            column: 1
          }
        },
        "17": {
          start: {
            line: 52,
            column: 4
          },
          end: {
            line: 52,
            column: 27
          }
        },
        "18": {
          start: {
            line: 53,
            column: 4
          },
          end: {
            line: 53,
            column: 42
          }
        },
        "19": {
          start: {
            line: 54,
            column: 4
          },
          end: {
            line: 54,
            column: 24
          }
        },
        "20": {
          start: {
            line: 55,
            column: 4
          },
          end: {
            line: 55,
            column: 24
          }
        },
        "21": {
          start: {
            line: 60,
            column: 4
          },
          end: {
            line: 60,
            column: 18
          }
        },
        "22": {
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 64,
            column: 22
          }
        },
        "23": {
          start: {
            line: 68,
            column: 4
          },
          end: {
            line: 68,
            column: 18
          }
        },
        "24": {
          start: {
            line: 73,
            column: 22
          },
          end: {
            line: 73,
            column: 41
          }
        },
        "25": {
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 75,
            column: 39
          }
        },
        "26": {
          start: {
            line: 76,
            column: 4
          },
          end: {
            line: 78,
            column: 5
          }
        },
        "27": {
          start: {
            line: 77,
            column: 6
          },
          end: {
            line: 77,
            column: 12
          }
        },
        "28": {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 80,
            column: 24
          }
        },
        "29": {
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 84,
            column: 5
          }
        },
        "30": {
          start: {
            line: 83,
            column: 6
          },
          end: {
            line: 83,
            column: 50
          }
        },
        "31": {
          start: {
            line: 86,
            column: 21
          },
          end: {
            line: 97,
            column: 5
          }
        },
        "32": {
          start: {
            line: 87,
            column: 6
          },
          end: {
            line: 87,
            column: 56
          }
        },
        "33": {
          start: {
            line: 88,
            column: 6
          },
          end: {
            line: 88,
            column: 50
          }
        },
        "34": {
          start: {
            line: 90,
            column: 6
          },
          end: {
            line: 90,
            column: 43
          }
        },
        "35": {
          start: {
            line: 92,
            column: 6
          },
          end: {
            line: 96,
            column: 7
          }
        },
        "36": {
          start: {
            line: 93,
            column: 8
          },
          end: {
            line: 95,
            column: 30
          }
        },
        "37": {
          start: {
            line: 94,
            column: 10
          },
          end: {
            line: 94,
            column: 21
          }
        },
        "38": {
          start: {
            line: 99,
            column: 4
          },
          end: {
            line: 99,
            column: 51
          }
        },
        "39": {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 100,
            column: 30
          }
        },
        "40": {
          start: {
            line: 101,
            column: 4
          },
          end: {
            line: 101,
            column: 51
          }
        },
        "41": {
          start: {
            line: 102,
            column: 4
          },
          end: {
            line: 110,
            column: 5
          }
        },
        "42": {
          start: {
            line: 103,
            column: 33
          },
          end: {
            line: 103,
            column: 85
          }
        },
        "43": {
          start: {
            line: 105,
            column: 6
          },
          end: {
            line: 107,
            column: 49
          }
        },
        "44": {
          start: {
            line: 109,
            column: 6
          },
          end: {
            line: 109,
            column: 16
          }
        },
        "45": {
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 116,
            column: 5
          }
        },
        "46": {
          start: {
            line: 115,
            column: 6
          },
          end: {
            line: 115,
            column: 12
          }
        },
        "47": {
          start: {
            line: 118,
            column: 22
          },
          end: {
            line: 118,
            column: 41
          }
        },
        "48": {
          start: {
            line: 120,
            column: 4
          },
          end: {
            line: 120,
            column: 39
          }
        },
        "49": {
          start: {
            line: 121,
            column: 4
          },
          end: {
            line: 123,
            column: 5
          }
        },
        "50": {
          start: {
            line: 122,
            column: 6
          },
          end: {
            line: 122,
            column: 12
          }
        },
        "51": {
          start: {
            line: 125,
            column: 4
          },
          end: {
            line: 125,
            column: 17
          }
        },
        "52": {
          start: {
            line: 129,
            column: 4
          },
          end: {
            line: 129,
            column: 24
          }
        },
        "53": {
          start: {
            line: 131,
            column: 4
          },
          end: {
            line: 133,
            column: 5
          }
        },
        "54": {
          start: {
            line: 132,
            column: 6
          },
          end: {
            line: 132,
            column: 53
          }
        },
        "55": {
          start: {
            line: 135,
            column: 4
          },
          end: {
            line: 135,
            column: 45
          }
        },
        "56": {
          start: {
            line: 137,
            column: 4
          },
          end: {
            line: 137,
            column: 41
          }
        },
        "57": {
          start: {
            line: 138,
            column: 4
          },
          end: {
            line: 138,
            column: 24
          }
        },
        "58": {
          start: {
            line: 139,
            column: 4
          },
          end: {
            line: 139,
            column: 23
          }
        },
        "59": {
          start: {
            line: 144,
            column: 4
          },
          end: {
            line: 148,
            column: 5
          }
        },
        "60": {
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 154,
            column: 5
          }
        },
        "61": {
          start: {
            line: 156,
            column: 4
          },
          end: {
            line: 156,
            column: 17
          }
        },
        "62": {
          start: {
            line: 160,
            column: 4
          },
          end: {
            line: 160,
            column: 86
          }
        },
        "63": {
          start: {
            line: 160,
            column: 74
          },
          end: {
            line: 160,
            column: 85
          }
        },
        "64": {
          start: {
            line: 164,
            column: 21
          },
          end: {
            line: 167,
            column: 5
          }
        },
        "65": {
          start: {
            line: 165,
            column: 6
          },
          end: {
            line: 165,
            column: 50
          }
        },
        "66": {
          start: {
            line: 166,
            column: 6
          },
          end: {
            line: 166,
            column: 44
          }
        },
        "67": {
          start: {
            line: 169,
            column: 4
          },
          end: {
            line: 169,
            column: 51
          }
        },
        "68": {
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 178,
            column: 5
          }
        },
        "69": {
          start: {
            line: 171,
            column: 33
          },
          end: {
            line: 171,
            column: 85
          }
        },
        "70": {
          start: {
            line: 173,
            column: 6
          },
          end: {
            line: 175,
            column: 49
          }
        },
        "71": {
          start: {
            line: 177,
            column: 6
          },
          end: {
            line: 177,
            column: 16
          }
        },
        "72": {
          start: {
            line: 182,
            column: 4
          },
          end: {
            line: 182,
            column: 31
          }
        },
        "73": {
          start: {
            line: 183,
            column: 4
          },
          end: {
            line: 183,
            column: 24
          }
        },
        "74": {
          start: {
            line: 188,
            column: 4
          },
          end: {
            line: 205,
            column: 6
          }
        },
        "75": {
          start: {
            line: 189,
            column: 23
          },
          end: {
            line: 189,
            column: 30
          }
        },
        "76": {
          start: {
            line: 190,
            column: 17
          },
          end: {
            line: 190,
            column: 40
          }
        },
        "77": {
          start: {
            line: 191,
            column: 22
          },
          end: {
            line: 191,
            column: 58
          }
        },
        "78": {
          start: {
            line: 193,
            column: 6
          },
          end: {
            line: 196,
            column: 7
          }
        },
        "79": {
          start: {
            line: 194,
            column: 8
          },
          end: {
            line: 194,
            column: 39
          }
        },
        "80": {
          start: {
            line: 195,
            column: 8
          },
          end: {
            line: 195,
            column: 37
          }
        },
        "81": {
          start: {
            line: 198,
            column: 6
          },
          end: {
            line: 204,
            column: 7
          }
        },
        "82": {
          start: {
            line: 199,
            column: 8
          },
          end: {
            line: 201,
            column: 9
          }
        },
        "83": {
          start: {
            line: 200,
            column: 10
          },
          end: {
            line: 200,
            column: 60
          }
        },
        "84": {
          start: {
            line: 203,
            column: 8
          },
          end: {
            line: 203,
            column: 26
          }
        },
        "85": {
          start: {
            line: 213,
            column: 0
          },
          end: {
            line: 213,
            column: 35
          }
        },
        "86": {
          start: {
            line: 214,
            column: 0
          },
          end: {
            line: 214,
            column: 30
          }
        },
        "87": {
          start: {
            line: 215,
            column: 0
          },
          end: {
            line: 218,
            column: 1
          }
        },
        "88": {
          start: {
            line: 216,
            column: 2
          },
          end: {
            line: 216,
            column: 33
          }
        },
        "89": {
          start: {
            line: 217,
            column: 2
          },
          end: {
            line: 217,
            column: 31
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
              column: 31
            },
            end: {
              line: 56,
              column: 3
            }
          },
          line: 51
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 59,
              column: 2
            },
            end: {
              line: 59,
              column: 3
            }
          },
          loc: {
            start: {
              line: 59,
              column: 23
            },
            end: {
              line: 61,
              column: 3
            }
          },
          line: 59
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
              column: 27
            },
            end: {
              line: 65,
              column: 3
            }
          },
          line: 63
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 67,
              column: 2
            },
            end: {
              line: 67,
              column: 3
            }
          },
          loc: {
            start: {
              line: 67,
              column: 23
            },
            end: {
              line: 69,
              column: 3
            }
          },
          line: 67
        },
        "4": {
          name: "(anonymous_4)",
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
              column: 9
            },
            end: {
              line: 111,
              column: 3
            }
          },
          line: 72
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 86,
              column: 21
            },
            end: {
              line: 86,
              column: 22
            }
          },
          loc: {
            start: {
              line: 86,
              column: 27
            },
            end: {
              line: 97,
              column: 5
            }
          },
          line: 86
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 93,
              column: 35
            },
            end: {
              line: 93,
              column: 36
            }
          },
          loc: {
            start: {
              line: 93,
              column: 41
            },
            end: {
              line: 95,
              column: 9
            }
          },
          line: 93
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 113,
              column: 2
            },
            end: {
              line: 113,
              column: 3
            }
          },
          loc: {
            start: {
              line: 113,
              column: 9
            },
            end: {
              line: 126,
              column: 3
            }
          },
          line: 113
        },
        "8": {
          name: "(anonymous_8)",
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
              column: 12
            },
            end: {
              line: 140,
              column: 3
            }
          },
          line: 128
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 143,
              column: 2
            },
            end: {
              line: 143,
              column: 3
            }
          },
          loc: {
            start: {
              line: 143,
              column: 21
            },
            end: {
              line: 157,
              column: 3
            }
          },
          line: 143
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 159,
              column: 2
            },
            end: {
              line: 159,
              column: 3
            }
          },
          loc: {
            start: {
              line: 159,
              column: 18
            },
            end: {
              line: 161,
              column: 3
            }
          },
          line: 159
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 160,
              column: 68
            },
            end: {
              line: 160,
              column: 69
            }
          },
          loc: {
            start: {
              line: 160,
              column: 74
            },
            end: {
              line: 160,
              column: 85
            }
          },
          line: 160
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 163,
              column: 2
            },
            end: {
              line: 163,
              column: 3
            }
          },
          loc: {
            start: {
              line: 163,
              column: 11
            },
            end: {
              line: 179,
              column: 3
            }
          },
          line: 163
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 164,
              column: 21
            },
            end: {
              line: 164,
              column: 22
            }
          },
          loc: {
            start: {
              line: 164,
              column: 27
            },
            end: {
              line: 167,
              column: 5
            }
          },
          line: 164
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 181,
              column: 2
            },
            end: {
              line: 181,
              column: 3
            }
          },
          loc: {
            start: {
              line: 181,
              column: 18
            },
            end: {
              line: 184,
              column: 3
            }
          },
          line: 181
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 187,
              column: 2
            },
            end: {
              line: 187,
              column: 3
            }
          },
          loc: {
            start: {
              line: 187,
              column: 34
            },
            end: {
              line: 206,
              column: 3
            }
          },
          line: 187
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 188,
              column: 21
            },
            end: {
              line: 188,
              column: 22
            }
          },
          loc: {
            start: {
              line: 188,
              column: 33
            },
            end: {
              line: 205,
              column: 5
            }
          },
          line: 188
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 215,
              column: 24
            },
            end: {
              line: 215,
              column: 25
            }
          },
          loc: {
            start: {
              line: 215,
              column: 30
            },
            end: {
              line: 218,
              column: 1
            }
          },
          line: 215
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 76,
              column: 4
            },
            end: {
              line: 78,
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
              line: 78,
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
          line: 76
        },
        "1": {
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
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 82
        },
        "2": {
          loc: {
            start: {
              line: 92,
              column: 6
            },
            end: {
              line: 96,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 92,
              column: 6
            },
            end: {
              line: 96,
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
          line: 92
        },
        "3": {
          loc: {
            start: {
              line: 102,
              column: 4
            },
            end: {
              line: 110,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 102,
              column: 4
            },
            end: {
              line: 110,
              column: 5
            }
          }, {
            start: {
              line: 108,
              column: 11
            },
            end: {
              line: 110,
              column: 5
            }
          }],
          line: 102
        },
        "4": {
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
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 114
        },
        "5": {
          loc: {
            start: {
              line: 121,
              column: 4
            },
            end: {
              line: 123,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 121,
              column: 4
            },
            end: {
              line: 123,
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
          line: 121
        },
        "6": {
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
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 131
        },
        "7": {
          loc: {
            start: {
              line: 147,
              column: 10
            },
            end: {
              line: 147,
              column: 60
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 147,
              column: 49
            },
            end: {
              line: 147,
              column: 55
            }
          }, {
            start: {
              line: 147,
              column: 58
            },
            end: {
              line: 147,
              column: 60
            }
          }],
          line: 147
        },
        "8": {
          loc: {
            start: {
              line: 147,
              column: 10
            },
            end: {
              line: 147,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 147,
              column: 10
            },
            end: {
              line: 147,
              column: 36
            }
          }, {
            start: {
              line: 147,
              column: 40
            },
            end: {
              line: 147,
              column: 46
            }
          }],
          line: 147
        },
        "9": {
          loc: {
            start: {
              line: 170,
              column: 4
            },
            end: {
              line: 178,
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
              line: 178,
              column: 5
            }
          }, {
            start: {
              line: 176,
              column: 11
            },
            end: {
              line: 178,
              column: 5
            }
          }],
          line: 170
        },
        "10": {
          loc: {
            start: {
              line: 191,
              column: 22
            },
            end: {
              line: 191,
              column: 58
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 191,
              column: 22
            },
            end: {
              line: 191,
              column: 48
            }
          }, {
            start: {
              line: 191,
              column: 52
            },
            end: {
              line: 191,
              column: 58
            }
          }],
          line: 191
        },
        "11": {
          loc: {
            start: {
              line: 193,
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
              line: 193,
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
          line: 193
        },
        "12": {
          loc: {
            start: {
              line: 198,
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
              line: 198,
              column: 6
            },
            end: {
              line: 204,
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
          line: 198
        },
        "13": {
          loc: {
            start: {
              line: 199,
              column: 8
            },
            end: {
              line: 201,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 199,
              column: 8
            },
            end: {
              line: 201,
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
          line: 199
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
      hash: "79e4aa153f0e810b8957ec232c6f87464aab3c61"
    };
    var coverage = global[gcv] || (global[gcv] = {});
    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }
    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_15y0x12a77 = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }
  cov_15y0x12a77();

  /**
   * Constants
   */

  var NAME = (cov_15y0x12a77().s[0]++, 'toast');
  var VERSION = (cov_15y0x12a77().s[1]++, '4.6.2');
  var DATA_KEY = (cov_15y0x12a77().s[2]++, 'bs.toast');
  var EVENT_KEY = (cov_15y0x12a77().s[3]++, "." + DATA_KEY);
  var JQUERY_NO_CONFLICT = (cov_15y0x12a77().s[4]++, $__default["default"].fn[NAME]);
  var CLASS_NAME_FADE = (cov_15y0x12a77().s[5]++, 'fade');
  var CLASS_NAME_HIDE = (cov_15y0x12a77().s[6]++, 'hide');
  var CLASS_NAME_SHOW = (cov_15y0x12a77().s[7]++, 'show');
  var CLASS_NAME_SHOWING = (cov_15y0x12a77().s[8]++, 'showing');
  var EVENT_CLICK_DISMISS = (cov_15y0x12a77().s[9]++, "click.dismiss" + EVENT_KEY);
  var EVENT_HIDE = (cov_15y0x12a77().s[10]++, "hide" + EVENT_KEY);
  var EVENT_HIDDEN = (cov_15y0x12a77().s[11]++, "hidden" + EVENT_KEY);
  var EVENT_SHOW = (cov_15y0x12a77().s[12]++, "show" + EVENT_KEY);
  var EVENT_SHOWN = (cov_15y0x12a77().s[13]++, "shown" + EVENT_KEY);
  var SELECTOR_DATA_DISMISS = (cov_15y0x12a77().s[14]++, '[data-dismiss="toast"]');
  var Default = (cov_15y0x12a77().s[15]++, {
    animation: true,
    autohide: true,
    delay: 500
  });
  var DefaultType = (cov_15y0x12a77().s[16]++, {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  });

  /**
   * Class definition
   */
  var Toast = /*#__PURE__*/function () {
    function Toast(element, config) {
      cov_15y0x12a77().f[0]++;
      cov_15y0x12a77().s[17]++;
      this._element = element;
      cov_15y0x12a77().s[18]++;
      this._config = this._getConfig(config);
      cov_15y0x12a77().s[19]++;
      this._timeout = null;
      cov_15y0x12a77().s[20]++;
      this._setListeners();
    }

    // Getters
    var _proto = Toast.prototype;
    // Public
    _proto.show = function show() {
      var _this = this;
      cov_15y0x12a77().f[4]++;
      var showEvent = (cov_15y0x12a77().s[24]++, $__default["default"].Event(EVENT_SHOW));
      cov_15y0x12a77().s[25]++;
      $__default["default"](this._element).trigger(showEvent);
      cov_15y0x12a77().s[26]++;
      if (showEvent.isDefaultPrevented()) {
        cov_15y0x12a77().b[0][0]++;
        cov_15y0x12a77().s[27]++;
        return;
      } else {
        cov_15y0x12a77().b[0][1]++;
      }
      cov_15y0x12a77().s[28]++;
      this._clearTimeout();
      cov_15y0x12a77().s[29]++;
      if (this._config.animation) {
        cov_15y0x12a77().b[1][0]++;
        cov_15y0x12a77().s[30]++;
        this._element.classList.add(CLASS_NAME_FADE);
      } else {
        cov_15y0x12a77().b[1][1]++;
      }
      cov_15y0x12a77().s[31]++;
      var complete = function complete() {
        cov_15y0x12a77().f[5]++;
        cov_15y0x12a77().s[32]++;
        _this._element.classList.remove(CLASS_NAME_SHOWING);
        cov_15y0x12a77().s[33]++;
        _this._element.classList.add(CLASS_NAME_SHOW);
        cov_15y0x12a77().s[34]++;
        $__default["default"](_this._element).trigger(EVENT_SHOWN);
        cov_15y0x12a77().s[35]++;
        if (_this._config.autohide) {
          cov_15y0x12a77().b[2][0]++;
          cov_15y0x12a77().s[36]++;
          _this._timeout = setTimeout(function () {
            cov_15y0x12a77().f[6]++;
            cov_15y0x12a77().s[37]++;
            _this.hide();
          }, _this._config.delay);
        } else {
          cov_15y0x12a77().b[2][1]++;
        }
      };
      cov_15y0x12a77().s[38]++;
      this._element.classList.remove(CLASS_NAME_HIDE);
      cov_15y0x12a77().s[39]++;
      Util__default["default"].reflow(this._element);
      cov_15y0x12a77().s[40]++;
      this._element.classList.add(CLASS_NAME_SHOWING);
      cov_15y0x12a77().s[41]++;
      if (this._config.animation) {
        cov_15y0x12a77().b[3][0]++;
        var transitionDuration = (cov_15y0x12a77().s[42]++, Util__default["default"].getTransitionDurationFromElement(this._element));
        cov_15y0x12a77().s[43]++;
        $__default["default"](this._element).one(Util__default["default"].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        cov_15y0x12a77().b[3][1]++;
        cov_15y0x12a77().s[44]++;
        complete();
      }
    };
    _proto.hide = function hide() {
      cov_15y0x12a77().f[7]++;
      cov_15y0x12a77().s[45]++;
      if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
        cov_15y0x12a77().b[4][0]++;
        cov_15y0x12a77().s[46]++;
        return;
      } else {
        cov_15y0x12a77().b[4][1]++;
      }
      var hideEvent = (cov_15y0x12a77().s[47]++, $__default["default"].Event(EVENT_HIDE));
      cov_15y0x12a77().s[48]++;
      $__default["default"](this._element).trigger(hideEvent);
      cov_15y0x12a77().s[49]++;
      if (hideEvent.isDefaultPrevented()) {
        cov_15y0x12a77().b[5][0]++;
        cov_15y0x12a77().s[50]++;
        return;
      } else {
        cov_15y0x12a77().b[5][1]++;
      }
      cov_15y0x12a77().s[51]++;
      this._close();
    };
    _proto.dispose = function dispose() {
      cov_15y0x12a77().f[8]++;
      cov_15y0x12a77().s[52]++;
      this._clearTimeout();
      cov_15y0x12a77().s[53]++;
      if (this._element.classList.contains(CLASS_NAME_SHOW)) {
        cov_15y0x12a77().b[6][0]++;
        cov_15y0x12a77().s[54]++;
        this._element.classList.remove(CLASS_NAME_SHOW);
      } else {
        cov_15y0x12a77().b[6][1]++;
      }
      cov_15y0x12a77().s[55]++;
      $__default["default"](this._element).off(EVENT_CLICK_DISMISS);
      cov_15y0x12a77().s[56]++;
      $__default["default"].removeData(this._element, DATA_KEY);
      cov_15y0x12a77().s[57]++;
      this._element = null;
      cov_15y0x12a77().s[58]++;
      this._config = null;
    }

    // Private
    ;
    _proto._getConfig = function _getConfig(config) {
      cov_15y0x12a77().f[9]++;
      cov_15y0x12a77().s[59]++;
      config = _extends({}, Default, $__default["default"](this._element).data(), (cov_15y0x12a77().b[8][0]++, typeof config === 'object') && (cov_15y0x12a77().b[8][1]++, config) ? (cov_15y0x12a77().b[7][0]++, config) : (cov_15y0x12a77().b[7][1]++, {}));
      cov_15y0x12a77().s[60]++;
      Util__default["default"].typeCheckConfig(NAME, config, this.constructor.DefaultType);
      cov_15y0x12a77().s[61]++;
      return config;
    };
    _proto._setListeners = function _setListeners() {
      var _this2 = this;
      cov_15y0x12a77().f[10]++;
      cov_15y0x12a77().s[62]++;
      $__default["default"](this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function () {
        cov_15y0x12a77().f[11]++;
        cov_15y0x12a77().s[63]++;
        return _this2.hide();
      });
    };
    _proto._close = function _close() {
      var _this3 = this;
      cov_15y0x12a77().f[12]++;
      cov_15y0x12a77().s[64]++;
      var complete = function complete() {
        cov_15y0x12a77().f[13]++;
        cov_15y0x12a77().s[65]++;
        _this3._element.classList.add(CLASS_NAME_HIDE);
        cov_15y0x12a77().s[66]++;
        $__default["default"](_this3._element).trigger(EVENT_HIDDEN);
      };
      cov_15y0x12a77().s[67]++;
      this._element.classList.remove(CLASS_NAME_SHOW);
      cov_15y0x12a77().s[68]++;
      if (this._config.animation) {
        cov_15y0x12a77().b[9][0]++;
        var transitionDuration = (cov_15y0x12a77().s[69]++, Util__default["default"].getTransitionDurationFromElement(this._element));
        cov_15y0x12a77().s[70]++;
        $__default["default"](this._element).one(Util__default["default"].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        cov_15y0x12a77().b[9][1]++;
        cov_15y0x12a77().s[71]++;
        complete();
      }
    };
    _proto._clearTimeout = function _clearTimeout() {
      cov_15y0x12a77().f[14]++;
      cov_15y0x12a77().s[72]++;
      clearTimeout(this._timeout);
      cov_15y0x12a77().s[73]++;
      this._timeout = null;
    }

    // Static
    ;
    Toast._jQueryInterface = function _jQueryInterface(config) {
      cov_15y0x12a77().f[15]++;
      cov_15y0x12a77().s[74]++;
      return this.each(function () {
        cov_15y0x12a77().f[16]++;
        var $element = (cov_15y0x12a77().s[75]++, $__default["default"](this));
        var data = (cov_15y0x12a77().s[76]++, $element.data(DATA_KEY));
        var _config = (cov_15y0x12a77().s[77]++, (cov_15y0x12a77().b[10][0]++, typeof config === 'object') && (cov_15y0x12a77().b[10][1]++, config));
        cov_15y0x12a77().s[78]++;
        if (!data) {
          cov_15y0x12a77().b[11][0]++;
          cov_15y0x12a77().s[79]++;
          data = new Toast(this, _config);
          cov_15y0x12a77().s[80]++;
          $element.data(DATA_KEY, data);
        } else {
          cov_15y0x12a77().b[11][1]++;
        }
        cov_15y0x12a77().s[81]++;
        if (typeof config === 'string') {
          cov_15y0x12a77().b[12][0]++;
          cov_15y0x12a77().s[82]++;
          if (typeof data[config] === 'undefined') {
            cov_15y0x12a77().b[13][0]++;
            cov_15y0x12a77().s[83]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_15y0x12a77().b[13][1]++;
          }
          cov_15y0x12a77().s[84]++;
          data[config](this);
        } else {
          cov_15y0x12a77().b[12][1]++;
        }
      });
    };
    return _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        cov_15y0x12a77().f[1]++;
        cov_15y0x12a77().s[21]++;
        return VERSION;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        cov_15y0x12a77().f[2]++;
        cov_15y0x12a77().s[22]++;
        return DefaultType;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_15y0x12a77().f[3]++;
        cov_15y0x12a77().s[23]++;
        return Default;
      }
    }]);
  }();
  /**
   * jQuery
   */
  cov_15y0x12a77().s[85]++;
  $__default["default"].fn[NAME] = Toast._jQueryInterface;
  cov_15y0x12a77().s[86]++;
  $__default["default"].fn[NAME].Constructor = Toast;
  cov_15y0x12a77().s[87]++;
  $__default["default"].fn[NAME].noConflict = function () {
    cov_15y0x12a77().f[17]++;
    cov_15y0x12a77().s[88]++;
    $__default["default"].fn[NAME] = JQUERY_NO_CONFLICT;
    cov_15y0x12a77().s[89]++;
    return Toast._jQueryInterface;
  };

  return Toast;

}));
//# sourceMappingURL=toast.js.map

/*!
  * Bootstrap popover.js v4.6.2-2 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2025 https://github.com/MahdiMajidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./tooltip.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './tooltip'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Popover = factory(global.jQuery, global.Tooltip));
})(this, (function ($, Tooltip) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
  var Tooltip__default = /*#__PURE__*/_interopDefaultLegacy(Tooltip);

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
  function _inheritsLoose(t, o) {
    t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
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

  function cov_aam7eijdr() {
    var path = "/Users/mahdi/Documents/app/bootstrap-v4-rtl/js/src/popover.js";
    var hash = "4516ebc26ef69be707bf9a5d67af0f91e2e1597e";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Users/mahdi/Documents/app/bootstrap-v4-rtl/js/src/popover.js",
      statementMap: {
        "0": {
          start: {
            line: 15,
            column: 13
          },
          end: {
            line: 15,
            column: 22
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
            column: 29
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
            line: 20,
            column: 21
          },
          end: {
            line: 20,
            column: 33
          }
        },
        "6": {
          start: {
            line: 21,
            column: 27
          },
          end: {
            line: 21,
            column: 72
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
            column: 24
          },
          end: {
            line: 24,
            column: 30
          }
        },
        "9": {
          start: {
            line: 26,
            column: 23
          },
          end: {
            line: 26,
            column: 40
          }
        },
        "10": {
          start: {
            line: 27,
            column: 25
          },
          end: {
            line: 27,
            column: 40
          }
        },
        "11": {
          start: {
            line: 29,
            column: 16
          },
          end: {
            line: 38,
            column: 1
          }
        },
        "12": {
          start: {
            line: 40,
            column: 20
          },
          end: {
            line: 43,
            column: 1
          }
        },
        "13": {
          start: {
            line: 45,
            column: 14
          },
          end: {
            line: 56,
            column: 1
          }
        },
        "14": {
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 65,
            column: 18
          }
        },
        "15": {
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 69,
            column: 18
          }
        },
        "16": {
          start: {
            line: 73,
            column: 4
          },
          end: {
            line: 73,
            column: 15
          }
        },
        "17": {
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 77,
            column: 19
          }
        },
        "18": {
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 81,
            column: 16
          }
        },
        "19": {
          start: {
            line: 85,
            column: 4
          },
          end: {
            line: 85,
            column: 20
          }
        },
        "20": {
          start: {
            line: 89,
            column: 4
          },
          end: {
            line: 89,
            column: 22
          }
        },
        "21": {
          start: {
            line: 94,
            column: 4
          },
          end: {
            line: 94,
            column: 48
          }
        },
        "22": {
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 98,
            column: 69
          }
        },
        "23": {
          start: {
            line: 102,
            column: 4
          },
          end: {
            line: 102,
            column: 53
          }
        },
        "24": {
          start: {
            line: 103,
            column: 4
          },
          end: {
            line: 103,
            column: 19
          }
        },
        "25": {
          start: {
            line: 107,
            column: 17
          },
          end: {
            line: 107,
            column: 40
          }
        },
        "26": {
          start: {
            line: 110,
            column: 4
          },
          end: {
            line: 110,
            column: 70
          }
        },
        "27": {
          start: {
            line: 111,
            column: 18
          },
          end: {
            line: 111,
            column: 36
          }
        },
        "28": {
          start: {
            line: 112,
            column: 4
          },
          end: {
            line: 114,
            column: 5
          }
        },
        "29": {
          start: {
            line: 113,
            column: 6
          },
          end: {
            line: 113,
            column: 42
          }
        },
        "30": {
          start: {
            line: 116,
            column: 4
          },
          end: {
            line: 116,
            column: 64
          }
        },
        "31": {
          start: {
            line: 118,
            column: 4
          },
          end: {
            line: 118,
            column: 61
          }
        },
        "32": {
          start: {
            line: 123,
            column: 4
          },
          end: {
            line: 124,
            column: 25
          }
        },
        "33": {
          start: {
            line: 128,
            column: 17
          },
          end: {
            line: 128,
            column: 40
          }
        },
        "34": {
          start: {
            line: 129,
            column: 21
          },
          end: {
            line: 129,
            column: 65
          }
        },
        "35": {
          start: {
            line: 130,
            column: 4
          },
          end: {
            line: 132,
            column: 5
          }
        },
        "36": {
          start: {
            line: 131,
            column: 6
          },
          end: {
            line: 131,
            column: 41
          }
        },
        "37": {
          start: {
            line: 137,
            column: 4
          },
          end: {
            line: 157,
            column: 6
          }
        },
        "38": {
          start: {
            line: 138,
            column: 17
          },
          end: {
            line: 138,
            column: 39
          }
        },
        "39": {
          start: {
            line: 139,
            column: 22
          },
          end: {
            line: 139,
            column: 64
          }
        },
        "40": {
          start: {
            line: 141,
            column: 6
          },
          end: {
            line: 143,
            column: 7
          }
        },
        "41": {
          start: {
            line: 142,
            column: 8
          },
          end: {
            line: 142,
            column: 14
          }
        },
        "42": {
          start: {
            line: 145,
            column: 6
          },
          end: {
            line: 148,
            column: 7
          }
        },
        "43": {
          start: {
            line: 146,
            column: 8
          },
          end: {
            line: 146,
            column: 41
          }
        },
        "44": {
          start: {
            line: 147,
            column: 8
          },
          end: {
            line: 147,
            column: 36
          }
        },
        "45": {
          start: {
            line: 150,
            column: 6
          },
          end: {
            line: 156,
            column: 7
          }
        },
        "46": {
          start: {
            line: 151,
            column: 8
          },
          end: {
            line: 153,
            column: 9
          }
        },
        "47": {
          start: {
            line: 152,
            column: 10
          },
          end: {
            line: 152,
            column: 60
          }
        },
        "48": {
          start: {
            line: 155,
            column: 8
          },
          end: {
            line: 155,
            column: 22
          }
        },
        "49": {
          start: {
            line: 165,
            column: 0
          },
          end: {
            line: 165,
            column: 37
          }
        },
        "50": {
          start: {
            line: 166,
            column: 0
          },
          end: {
            line: 166,
            column: 32
          }
        },
        "51": {
          start: {
            line: 167,
            column: 0
          },
          end: {
            line: 170,
            column: 1
          }
        },
        "52": {
          start: {
            line: 168,
            column: 2
          },
          end: {
            line: 168,
            column: 33
          }
        },
        "53": {
          start: {
            line: 169,
            column: 2
          },
          end: {
            line: 169,
            column: 33
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
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
        "1": {
          name: "(anonymous_1)",
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
              column: 23
            },
            end: {
              line: 70,
              column: 3
            }
          },
          line: 68
        },
        "2": {
          name: "(anonymous_2)",
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
              column: 20
            },
            end: {
              line: 74,
              column: 3
            }
          },
          line: 72
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 76,
              column: 2
            },
            end: {
              line: 76,
              column: 3
            }
          },
          loc: {
            start: {
              line: 76,
              column: 24
            },
            end: {
              line: 78,
              column: 3
            }
          },
          line: 76
        },
        "4": {
          name: "(anonymous_4)",
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
              column: 21
            },
            end: {
              line: 82,
              column: 3
            }
          },
          line: 80
        },
        "5": {
          name: "(anonymous_5)",
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
              column: 25
            },
            end: {
              line: 86,
              column: 3
            }
          },
          line: 84
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 88,
              column: 2
            },
            end: {
              line: 88,
              column: 3
            }
          },
          loc: {
            start: {
              line: 88,
              column: 27
            },
            end: {
              line: 90,
              column: 3
            }
          },
          line: 88
        },
        "7": {
          name: "(anonymous_7)",
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
              column: 18
            },
            end: {
              line: 95,
              column: 3
            }
          },
          line: 93
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 97,
              column: 2
            },
            end: {
              line: 97,
              column: 3
            }
          },
          loc: {
            start: {
              line: 97,
              column: 33
            },
            end: {
              line: 99,
              column: 3
            }
          },
          line: 97
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 101,
              column: 2
            },
            end: {
              line: 101,
              column: 3
            }
          },
          loc: {
            start: {
              line: 101,
              column: 18
            },
            end: {
              line: 104,
              column: 3
            }
          },
          line: 101
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 106,
              column: 2
            },
            end: {
              line: 106,
              column: 3
            }
          },
          loc: {
            start: {
              line: 106,
              column: 15
            },
            end: {
              line: 119,
              column: 3
            }
          },
          line: 106
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 122,
              column: 2
            },
            end: {
              line: 122,
              column: 3
            }
          },
          loc: {
            start: {
              line: 122,
              column: 16
            },
            end: {
              line: 125,
              column: 3
            }
          },
          line: 122
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 127,
              column: 2
            },
            end: {
              line: 127,
              column: 3
            }
          },
          loc: {
            start: {
              line: 127,
              column: 19
            },
            end: {
              line: 133,
              column: 3
            }
          },
          line: 127
        },
        "13": {
          name: "(anonymous_13)",
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
              column: 34
            },
            end: {
              line: 158,
              column: 3
            }
          },
          line: 136
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 137,
              column: 21
            },
            end: {
              line: 137,
              column: 22
            }
          },
          loc: {
            start: {
              line: 137,
              column: 33
            },
            end: {
              line: 157,
              column: 5
            }
          },
          line: 137
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 167,
              column: 24
            },
            end: {
              line: 167,
              column: 25
            }
          },
          loc: {
            start: {
              line: 167,
              column: 30
            },
            end: {
              line: 170,
              column: 1
            }
          },
          line: 167
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 94,
              column: 11
            },
            end: {
              line: 94,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 94,
              column: 11
            },
            end: {
              line: 94,
              column: 26
            }
          }, {
            start: {
              line: 94,
              column: 30
            },
            end: {
              line: 94,
              column: 48
            }
          }],
          line: 94
        },
        "1": {
          loc: {
            start: {
              line: 102,
              column: 15
            },
            end: {
              line: 102,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 102,
              column: 15
            },
            end: {
              line: 102,
              column: 23
            }
          }, {
            start: {
              line: 102,
              column: 27
            },
            end: {
              line: 102,
              column: 53
            }
          }],
          line: 102
        },
        "2": {
          loc: {
            start: {
              line: 112,
              column: 4
            },
            end: {
              line: 114,
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
              line: 114,
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
          line: 112
        },
        "3": {
          loc: {
            start: {
              line: 123,
              column: 11
            },
            end: {
              line: 124,
              column: 25
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 123,
              column: 11
            },
            end: {
              line: 123,
              column: 52
            }
          }, {
            start: {
              line: 124,
              column: 6
            },
            end: {
              line: 124,
              column: 25
            }
          }],
          line: 123
        },
        "4": {
          loc: {
            start: {
              line: 130,
              column: 4
            },
            end: {
              line: 132,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 130,
              column: 4
            },
            end: {
              line: 132,
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
          line: 130
        },
        "5": {
          loc: {
            start: {
              line: 130,
              column: 8
            },
            end: {
              line: 130,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 130,
              column: 8
            },
            end: {
              line: 130,
              column: 25
            }
          }, {
            start: {
              line: 130,
              column: 29
            },
            end: {
              line: 130,
              column: 48
            }
          }],
          line: 130
        },
        "6": {
          loc: {
            start: {
              line: 139,
              column: 22
            },
            end: {
              line: 139,
              column: 64
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 139,
              column: 51
            },
            end: {
              line: 139,
              column: 57
            }
          }, {
            start: {
              line: 139,
              column: 60
            },
            end: {
              line: 139,
              column: 64
            }
          }],
          line: 139
        },
        "7": {
          loc: {
            start: {
              line: 141,
              column: 6
            },
            end: {
              line: 143,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 141,
              column: 6
            },
            end: {
              line: 143,
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
          line: 141
        },
        "8": {
          loc: {
            start: {
              line: 141,
              column: 10
            },
            end: {
              line: 141,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 141,
              column: 10
            },
            end: {
              line: 141,
              column: 15
            }
          }, {
            start: {
              line: 141,
              column: 19
            },
            end: {
              line: 141,
              column: 46
            }
          }],
          line: 141
        },
        "9": {
          loc: {
            start: {
              line: 145,
              column: 6
            },
            end: {
              line: 148,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 145,
              column: 6
            },
            end: {
              line: 148,
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
          line: 145
        },
        "10": {
          loc: {
            start: {
              line: 150,
              column: 6
            },
            end: {
              line: 156,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 150,
              column: 6
            },
            end: {
              line: 156,
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
          line: 150
        },
        "11": {
          loc: {
            start: {
              line: 151,
              column: 8
            },
            end: {
              line: 153,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 151,
              column: 8
            },
            end: {
              line: 153,
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
          line: 151
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
        "53": 0
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
        "15": 0
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
        "11": [0, 0]
      },
      _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
      hash: "4516ebc26ef69be707bf9a5d67af0f91e2e1597e"
    };
    var coverage = global[gcv] || (global[gcv] = {});
    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }
    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_aam7eijdr = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }
  cov_aam7eijdr();

  /**
   * Constants
   */

  var NAME = (cov_aam7eijdr().s[0]++, 'popover');
  var VERSION = (cov_aam7eijdr().s[1]++, '4.6.2');
  var DATA_KEY = (cov_aam7eijdr().s[2]++, 'bs.popover');
  var EVENT_KEY = (cov_aam7eijdr().s[3]++, "." + DATA_KEY);
  var JQUERY_NO_CONFLICT = (cov_aam7eijdr().s[4]++, $__default["default"].fn[NAME]);
  var CLASS_PREFIX = (cov_aam7eijdr().s[5]++, 'bs-popover');
  var BSCLS_PREFIX_REGEX = (cov_aam7eijdr().s[6]++, new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g'));
  var CLASS_NAME_FADE = (cov_aam7eijdr().s[7]++, 'fade');
  var CLASS_NAME_SHOW = (cov_aam7eijdr().s[8]++, 'show');
  var SELECTOR_TITLE = (cov_aam7eijdr().s[9]++, '.popover-header');
  var SELECTOR_CONTENT = (cov_aam7eijdr().s[10]++, '.popover-body');
  var Default = (cov_aam7eijdr().s[11]++, _extends({}, Tooltip__default["default"].Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  }));
  var DefaultType = (cov_aam7eijdr().s[12]++, _extends({}, Tooltip__default["default"].DefaultType, {
    content: '(string|element|function)'
  }));
  var Event = (cov_aam7eijdr().s[13]++, {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    INSERTED: "inserted" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    FOCUSOUT: "focusout" + EVENT_KEY,
    MOUSEENTER: "mouseenter" + EVENT_KEY,
    MOUSELEAVE: "mouseleave" + EVENT_KEY
  });

  /**
   * Class definition
   */
  var Popover = /*#__PURE__*/function (_Tooltip) {
    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }
    _inheritsLoose(Popover, _Tooltip);
    var _proto = Popover.prototype;
    // Overrides
    _proto.isWithContent = function isWithContent() {
      cov_aam7eijdr().f[7]++;
      cov_aam7eijdr().s[21]++;
      return (cov_aam7eijdr().b[0][0]++, this.getTitle()) || (cov_aam7eijdr().b[0][1]++, this._getContent());
    };
    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      cov_aam7eijdr().f[8]++;
      cov_aam7eijdr().s[22]++;
      $__default["default"](this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };
    _proto.getTipElement = function getTipElement() {
      cov_aam7eijdr().f[9]++;
      cov_aam7eijdr().s[23]++;
      this.tip = (cov_aam7eijdr().b[1][0]++, this.tip) || (cov_aam7eijdr().b[1][1]++, $__default["default"](this.config.template)[0]);
      cov_aam7eijdr().s[24]++;
      return this.tip;
    };
    _proto.setContent = function setContent() {
      cov_aam7eijdr().f[10]++;
      var $tip = (cov_aam7eijdr().s[25]++, $__default["default"](this.getTipElement()));

      // We use append for html objects to maintain js events
      cov_aam7eijdr().s[26]++;
      this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());
      var content = (cov_aam7eijdr().s[27]++, this._getContent());
      cov_aam7eijdr().s[28]++;
      if (typeof content === 'function') {
        cov_aam7eijdr().b[2][0]++;
        cov_aam7eijdr().s[29]++;
        content = content.call(this.element);
      } else {
        cov_aam7eijdr().b[2][1]++;
      }
      cov_aam7eijdr().s[30]++;
      this.setElementContent($tip.find(SELECTOR_CONTENT), content);
      cov_aam7eijdr().s[31]++;
      $tip.removeClass(CLASS_NAME_FADE + " " + CLASS_NAME_SHOW);
    }

    // Private
    ;
    _proto._getContent = function _getContent() {
      cov_aam7eijdr().f[11]++;
      cov_aam7eijdr().s[32]++;
      return (cov_aam7eijdr().b[3][0]++, this.element.getAttribute('data-content')) || (cov_aam7eijdr().b[3][1]++, this.config.content);
    };
    _proto._cleanTipClass = function _cleanTipClass() {
      cov_aam7eijdr().f[12]++;
      var $tip = (cov_aam7eijdr().s[33]++, $__default["default"](this.getTipElement()));
      var tabClass = (cov_aam7eijdr().s[34]++, $tip.attr('class').match(BSCLS_PREFIX_REGEX));
      cov_aam7eijdr().s[35]++;
      if ((cov_aam7eijdr().b[5][0]++, tabClass !== null) && (cov_aam7eijdr().b[5][1]++, tabClass.length > 0)) {
        cov_aam7eijdr().b[4][0]++;
        cov_aam7eijdr().s[36]++;
        $tip.removeClass(tabClass.join(''));
      } else {
        cov_aam7eijdr().b[4][1]++;
      }
    }

    // Static
    ;
    Popover._jQueryInterface = function _jQueryInterface(config) {
      cov_aam7eijdr().f[13]++;
      cov_aam7eijdr().s[37]++;
      return this.each(function () {
        cov_aam7eijdr().f[14]++;
        var data = (cov_aam7eijdr().s[38]++, $__default["default"](this).data(DATA_KEY));
        var _config = (cov_aam7eijdr().s[39]++, typeof config === 'object' ? (cov_aam7eijdr().b[6][0]++, config) : (cov_aam7eijdr().b[6][1]++, null));
        cov_aam7eijdr().s[40]++;
        if ((cov_aam7eijdr().b[8][0]++, !data) && (cov_aam7eijdr().b[8][1]++, /dispose|hide/.test(config))) {
          cov_aam7eijdr().b[7][0]++;
          cov_aam7eijdr().s[41]++;
          return;
        } else {
          cov_aam7eijdr().b[7][1]++;
        }
        cov_aam7eijdr().s[42]++;
        if (!data) {
          cov_aam7eijdr().b[9][0]++;
          cov_aam7eijdr().s[43]++;
          data = new Popover(this, _config);
          cov_aam7eijdr().s[44]++;
          $__default["default"](this).data(DATA_KEY, data);
        } else {
          cov_aam7eijdr().b[9][1]++;
        }
        cov_aam7eijdr().s[45]++;
        if (typeof config === 'string') {
          cov_aam7eijdr().b[10][0]++;
          cov_aam7eijdr().s[46]++;
          if (typeof data[config] === 'undefined') {
            cov_aam7eijdr().b[11][0]++;
            cov_aam7eijdr().s[47]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_aam7eijdr().b[11][1]++;
          }
          cov_aam7eijdr().s[48]++;
          data[config]();
        } else {
          cov_aam7eijdr().b[10][1]++;
        }
      });
    };
    return _createClass(Popover, null, [{
      key: "VERSION",
      get:
      // Getters
      function get() {
        cov_aam7eijdr().f[0]++;
        cov_aam7eijdr().s[14]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_aam7eijdr().f[1]++;
        cov_aam7eijdr().s[15]++;
        return Default;
      }
    }, {
      key: "NAME",
      get: function get() {
        cov_aam7eijdr().f[2]++;
        cov_aam7eijdr().s[16]++;
        return NAME;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        cov_aam7eijdr().f[3]++;
        cov_aam7eijdr().s[17]++;
        return DATA_KEY;
      }
    }, {
      key: "Event",
      get: function get() {
        cov_aam7eijdr().f[4]++;
        cov_aam7eijdr().s[18]++;
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        cov_aam7eijdr().f[5]++;
        cov_aam7eijdr().s[19]++;
        return EVENT_KEY;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        cov_aam7eijdr().f[6]++;
        cov_aam7eijdr().s[20]++;
        return DefaultType;
      }
    }]);
  }(Tooltip__default["default"]);
  /**
   * jQuery
   */
  cov_aam7eijdr().s[49]++;
  $__default["default"].fn[NAME] = Popover._jQueryInterface;
  cov_aam7eijdr().s[50]++;
  $__default["default"].fn[NAME].Constructor = Popover;
  cov_aam7eijdr().s[51]++;
  $__default["default"].fn[NAME].noConflict = function () {
    cov_aam7eijdr().f[15]++;
    cov_aam7eijdr().s[52]++;
    $__default["default"].fn[NAME] = JQUERY_NO_CONFLICT;
    cov_aam7eijdr().s[53]++;
    return Popover._jQueryInterface;
  };

  return Popover;

}));
//# sourceMappingURL=popover.js.map

/*!
  * Bootstrap scrollspy.js v4.6.2-2 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2025 https://github.com/MahdiMajidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ScrollSpy = factory(global.jQuery, global.Util));
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

  function cov_tybiq4qev() {
    var path = "/Users/mahdi/Documents/app/bootstrap-v4-rtl/js/src/scrollspy.js";
    var hash = "2d0463ff23319adb5fdfc27beed01ce83aa26290";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Users/mahdi/Documents/app/bootstrap-v4-rtl/js/src/scrollspy.js",
      statementMap: {
        "0": {
          start: {
            line: 15,
            column: 13
          },
          end: {
            line: 15,
            column: 24
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
            column: 31
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
            line: 25,
            column: 23
          },
          end: {
            line: 25,
            column: 45
          }
        },
        "9": {
          start: {
            line: 26,
            column: 21
          },
          end: {
            line: 26,
            column: 41
          }
        },
        "10": {
          start: {
            line: 27,
            column: 28
          },
          end: {
            line: 27,
            column: 61
          }
        },
        "11": {
          start: {
            line: 29,
            column: 22
          },
          end: {
            line: 29,
            column: 30
          }
        },
        "12": {
          start: {
            line: 30,
            column: 24
          },
          end: {
            line: 30,
            column: 34
          }
        },
        "13": {
          start: {
            line: 32,
            column: 26
          },
          end: {
            line: 32,
            column: 47
          }
        },
        "14": {
          start: {
            line: 33,
            column: 32
          },
          end: {
            line: 33,
            column: 51
          }
        },
        "15": {
          start: {
            line: 34,
            column: 27
          },
          end: {
            line: 34,
            column: 38
          }
        },
        "16": {
          start: {
            line: 35,
            column: 27
          },
          end: {
            line: 35,
            column: 38
          }
        },
        "17": {
          start: {
            line: 36,
            column: 28
          },
          end: {
            line: 36,
            column: 46
          }
        },
        "18": {
          start: {
            line: 37,
            column: 26
          },
          end: {
            line: 37,
            column: 37
          }
        },
        "19": {
          start: {
            line: 38,
            column: 32
          },
          end: {
            line: 38,
            column: 48
          }
        },
        "20": {
          start: {
            line: 39,
            column: 33
          },
          end: {
            line: 39,
            column: 51
          }
        },
        "21": {
          start: {
            line: 41,
            column: 16
          },
          end: {
            line: 45,
            column: 1
          }
        },
        "22": {
          start: {
            line: 47,
            column: 20
          },
          end: {
            line: 51,
            column: 1
          }
        },
        "23": {
          start: {
            line: 59,
            column: 4
          },
          end: {
            line: 59,
            column: 27
          }
        },
        "24": {
          start: {
            line: 60,
            column: 4
          },
          end: {
            line: 60,
            column: 71
          }
        },
        "25": {
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 61,
            column: 42
          }
        },
        "26": {
          start: {
            line: 62,
            column: 4
          },
          end: {
            line: 64,
            column: 77
          }
        },
        "27": {
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 65,
            column: 22
          }
        },
        "28": {
          start: {
            line: 66,
            column: 4
          },
          end: {
            line: 66,
            column: 22
          }
        },
        "29": {
          start: {
            line: 67,
            column: 4
          },
          end: {
            line: 67,
            column: 29
          }
        },
        "30": {
          start: {
            line: 68,
            column: 4
          },
          end: {
            line: 68,
            column: 26
          }
        },
        "31": {
          start: {
            line: 70,
            column: 4
          },
          end: {
            line: 70,
            column: 74
          }
        },
        "32": {
          start: {
            line: 70,
            column: 53
          },
          end: {
            line: 70,
            column: 73
          }
        },
        "33": {
          start: {
            line: 72,
            column: 4
          },
          end: {
            line: 72,
            column: 18
          }
        },
        "34": {
          start: {
            line: 73,
            column: 4
          },
          end: {
            line: 73,
            column: 19
          }
        },
        "35": {
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 78,
            column: 18
          }
        },
        "36": {
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 82,
            column: 18
          }
        },
        "37": {
          start: {
            line: 87,
            column: 23
          },
          end: {
            line: 88,
            column: 37
          }
        },
        "38": {
          start: {
            line: 90,
            column: 25
          },
          end: {
            line: 91,
            column: 38
          }
        },
        "39": {
          start: {
            line: 93,
            column: 23
          },
          end: {
            line: 94,
            column: 30
          }
        },
        "40": {
          start: {
            line: 96,
            column: 4
          },
          end: {
            line: 96,
            column: 22
          }
        },
        "41": {
          start: {
            line: 97,
            column: 4
          },
          end: {
            line: 97,
            column: 22
          }
        },
        "42": {
          start: {
            line: 99,
            column: 4
          },
          end: {
            line: 99,
            column: 48
          }
        },
        "43": {
          start: {
            line: 101,
            column: 20
          },
          end: {
            line: 101,
            column: 76
          }
        },
        "44": {
          start: {
            line: 103,
            column: 4
          },
          end: {
            line: 130,
            column: 8
          }
        },
        "45": {
          start: {
            line: 106,
            column: 31
          },
          end: {
            line: 106,
            column: 67
          }
        },
        "46": {
          start: {
            line: 108,
            column: 8
          },
          end: {
            line: 110,
            column: 9
          }
        },
        "47": {
          start: {
            line: 109,
            column: 10
          },
          end: {
            line: 109,
            column: 57
          }
        },
        "48": {
          start: {
            line: 112,
            column: 8
          },
          end: {
            line: 121,
            column: 9
          }
        },
        "49": {
          start: {
            line: 113,
            column: 28
          },
          end: {
            line: 113,
            column: 58
          }
        },
        "50": {
          start: {
            line: 114,
            column: 10
          },
          end: {
            line: 120,
            column: 11
          }
        },
        "51": {
          start: {
            line: 116,
            column: 12
          },
          end: {
            line: 119,
            column: 13
          }
        },
        "52": {
          start: {
            line: 123,
            column: 8
          },
          end: {
            line: 123,
            column: 19
          }
        },
        "53": {
          start: {
            line: 126,
            column: 22
          },
          end: {
            line: 126,
            column: 33
          }
        },
        "54": {
          start: {
            line: 128,
            column: 8
          },
          end: {
            line: 128,
            column: 35
          }
        },
        "55": {
          start: {
            line: 129,
            column: 8
          },
          end: {
            line: 129,
            column: 35
          }
        },
        "56": {
          start: {
            line: 134,
            column: 4
          },
          end: {
            line: 134,
            column: 41
          }
        },
        "57": {
          start: {
            line: 135,
            column: 4
          },
          end: {
            line: 135,
            column: 41
          }
        },
        "58": {
          start: {
            line: 137,
            column: 4
          },
          end: {
            line: 137,
            column: 24
          }
        },
        "59": {
          start: {
            line: 138,
            column: 4
          },
          end: {
            line: 138,
            column: 30
          }
        },
        "60": {
          start: {
            line: 139,
            column: 4
          },
          end: {
            line: 139,
            column: 23
          }
        },
        "61": {
          start: {
            line: 140,
            column: 4
          },
          end: {
            line: 140,
            column: 25
          }
        },
        "62": {
          start: {
            line: 141,
            column: 4
          },
          end: {
            line: 141,
            column: 24
          }
        },
        "63": {
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 142,
            column: 24
          }
        },
        "64": {
          start: {
            line: 143,
            column: 4
          },
          end: {
            line: 143,
            column: 29
          }
        },
        "65": {
          start: {
            line: 144,
            column: 4
          },
          end: {
            line: 144,
            column: 29
          }
        },
        "66": {
          start: {
            line: 149,
            column: 4
          },
          end: {
            line: 152,
            column: 5
          }
        },
        "67": {
          start: {
            line: 154,
            column: 4
          },
          end: {
            line: 162,
            column: 5
          }
        },
        "68": {
          start: {
            line: 155,
            column: 15
          },
          end: {
            line: 155,
            column: 42
          }
        },
        "69": {
          start: {
            line: 156,
            column: 6
          },
          end: {
            line: 159,
            column: 7
          }
        },
        "70": {
          start: {
            line: 157,
            column: 8
          },
          end: {
            line: 157,
            column: 30
          }
        },
        "71": {
          start: {
            line: 158,
            column: 8
          },
          end: {
            line: 158,
            column: 39
          }
        },
        "72": {
          start: {
            line: 161,
            column: 6
          },
          end: {
            line: 161,
            column: 30
          }
        },
        "73": {
          start: {
            line: 164,
            column: 4
          },
          end: {
            line: 164,
            column: 51
          }
        },
        "74": {
          start: {
            line: 166,
            column: 4
          },
          end: {
            line: 166,
            column: 17
          }
        },
        "75": {
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 171,
            column: 69
          }
        },
        "76": {
          start: {
            line: 175,
            column: 4
          },
          end: {
            line: 178,
            column: 5
          }
        },
        "77": {
          start: {
            line: 182,
            column: 4
          },
          end: {
            line: 183,
            column: 77
          }
        },
        "78": {
          start: {
            line: 187,
            column: 22
          },
          end: {
            line: 187,
            column: 64
          }
        },
        "79": {
          start: {
            line: 188,
            column: 25
          },
          end: {
            line: 188,
            column: 48
          }
        },
        "80": {
          start: {
            line: 189,
            column: 22
          },
          end: {
            line: 189,
            column: 82
          }
        },
        "81": {
          start: {
            line: 191,
            column: 4
          },
          end: {
            line: 193,
            column: 5
          }
        },
        "82": {
          start: {
            line: 192,
            column: 6
          },
          end: {
            line: 192,
            column: 20
          }
        },
        "83": {
          start: {
            line: 195,
            column: 4
          },
          end: {
            line: 203,
            column: 5
          }
        },
        "84": {
          start: {
            line: 196,
            column: 21
          },
          end: {
            line: 196,
            column: 60
          }
        },
        "85": {
          start: {
            line: 198,
            column: 6
          },
          end: {
            line: 200,
            column: 7
          }
        },
        "86": {
          start: {
            line: 199,
            column: 8
          },
          end: {
            line: 199,
            column: 30
          }
        },
        "87": {
          start: {
            line: 202,
            column: 6
          },
          end: {
            line: 202,
            column: 12
          }
        },
        "88": {
          start: {
            line: 205,
            column: 4
          },
          end: {
            line: 209,
            column: 5
          }
        },
        "89": {
          start: {
            line: 206,
            column: 6
          },
          end: {
            line: 206,
            column: 31
          }
        },
        "90": {
          start: {
            line: 207,
            column: 6
          },
          end: {
            line: 207,
            column: 19
          }
        },
        "91": {
          start: {
            line: 208,
            column: 6
          },
          end: {
            line: 208,
            column: 12
          }
        },
        "92": {
          start: {
            line: 211,
            column: 4
          },
          end: {
            line: 220,
            column: 5
          }
        },
        "93": {
          start: {
            line: 211,
            column: 17
          },
          end: {
            line: 211,
            column: 37
          }
        },
        "94": {
          start: {
            line: 212,
            column: 29
          },
          end: {
            line: 215,
            column: 47
          }
        },
        "95": {
          start: {
            line: 217,
            column: 6
          },
          end: {
            line: 219,
            column: 7
          }
        },
        "96": {
          start: {
            line: 218,
            column: 8
          },
          end: {
            line: 218,
            column: 40
          }
        },
        "97": {
          start: {
            line: 224,
            column: 4
          },
          end: {
            line: 224,
            column: 31
          }
        },
        "98": {
          start: {
            line: 226,
            column: 4
          },
          end: {
            line: 226,
            column: 17
          }
        },
        "99": {
          start: {
            line: 228,
            column: 20
          },
          end: {
            line: 230,
            column: 92
          }
        },
        "100": {
          start: {
            line: 230,
            column: 23
          },
          end: {
            line: 230,
            column: 91
          }
        },
        "101": {
          start: {
            line: 232,
            column: 18
          },
          end: {
            line: 232,
            column: 80
          }
        },
        "102": {
          start: {
            line: 234,
            column: 4
          },
          end: {
            line: 252,
            column: 5
          }
        },
        "103": {
          start: {
            line: 235,
            column: 6
          },
          end: {
            line: 237,
            column: 36
          }
        },
        "104": {
          start: {
            line: 238,
            column: 6
          },
          end: {
            line: 238,
            column: 39
          }
        },
        "105": {
          start: {
            line: 241,
            column: 6
          },
          end: {
            line: 241,
            column: 39
          }
        },
        "106": {
          start: {
            line: 244,
            column: 6
          },
          end: {
            line: 246,
            column: 36
          }
        },
        "107": {
          start: {
            line: 248,
            column: 6
          },
          end: {
            line: 251,
            column: 36
          }
        },
        "108": {
          start: {
            line: 254,
            column: 4
          },
          end: {
            line: 256,
            column: 6
          }
        },
        "109": {
          start: {
            line: 260,
            column: 4
          },
          end: {
            line: 262,
            column: 64
          }
        },
        "110": {
          start: {
            line: 261,
            column: 22
          },
          end: {
            line: 261,
            column: 64
          }
        },
        "111": {
          start: {
            line: 262,
            column: 23
          },
          end: {
            line: 262,
            column: 63
          }
        },
        "112": {
          start: {
            line: 267,
            column: 4
          },
          end: {
            line: 283,
            column: 6
          }
        },
        "113": {
          start: {
            line: 268,
            column: 17
          },
          end: {
            line: 268,
            column: 39
          }
        },
        "114": {
          start: {
            line: 269,
            column: 22
          },
          end: {
            line: 269,
            column: 58
          }
        },
        "115": {
          start: {
            line: 271,
            column: 6
          },
          end: {
            line: 274,
            column: 7
          }
        },
        "116": {
          start: {
            line: 272,
            column: 8
          },
          end: {
            line: 272,
            column: 43
          }
        },
        "117": {
          start: {
            line: 273,
            column: 8
          },
          end: {
            line: 273,
            column: 36
          }
        },
        "118": {
          start: {
            line: 276,
            column: 6
          },
          end: {
            line: 282,
            column: 7
          }
        },
        "119": {
          start: {
            line: 277,
            column: 8
          },
          end: {
            line: 279,
            column: 9
          }
        },
        "120": {
          start: {
            line: 278,
            column: 10
          },
          end: {
            line: 278,
            column: 60
          }
        },
        "121": {
          start: {
            line: 281,
            column: 8
          },
          end: {
            line: 281,
            column: 22
          }
        },
        "122": {
          start: {
            line: 291,
            column: 0
          },
          end: {
            line: 299,
            column: 2
          }
        },
        "123": {
          start: {
            line: 292,
            column: 21
          },
          end: {
            line: 292,
            column: 80
          }
        },
        "124": {
          start: {
            line: 293,
            column: 27
          },
          end: {
            line: 293,
            column: 44
          }
        },
        "125": {
          start: {
            line: 295,
            column: 2
          },
          end: {
            line: 298,
            column: 3
          }
        },
        "126": {
          start: {
            line: 295,
            column: 15
          },
          end: {
            line: 295,
            column: 31
          }
        },
        "127": {
          start: {
            line: 296,
            column: 17
          },
          end: {
            line: 296,
            column: 33
          }
        },
        "128": {
          start: {
            line: 297,
            column: 4
          },
          end: {
            line: 297,
            column: 54
          }
        },
        "129": {
          start: {
            line: 305,
            column: 0
          },
          end: {
            line: 305,
            column: 39
          }
        },
        "130": {
          start: {
            line: 306,
            column: 0
          },
          end: {
            line: 306,
            column: 34
          }
        },
        "131": {
          start: {
            line: 307,
            column: 0
          },
          end: {
            line: 310,
            column: 1
          }
        },
        "132": {
          start: {
            line: 308,
            column: 2
          },
          end: {
            line: 308,
            column: 33
          }
        },
        "133": {
          start: {
            line: 309,
            column: 2
          },
          end: {
            line: 309,
            column: 35
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 58,
              column: 2
            },
            end: {
              line: 58,
              column: 3
            }
          },
          loc: {
            start: {
              line: 58,
              column: 31
            },
            end: {
              line: 74,
              column: 3
            }
          },
          line: 58
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 70,
              column: 44
            },
            end: {
              line: 70,
              column: 45
            }
          },
          loc: {
            start: {
              line: 70,
              column: 53
            },
            end: {
              line: 70,
              column: 73
            }
          },
          line: 70
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 77,
              column: 2
            },
            end: {
              line: 77,
              column: 3
            }
          },
          loc: {
            start: {
              line: 77,
              column: 23
            },
            end: {
              line: 79,
              column: 3
            }
          },
          line: 77
        },
        "3": {
          name: "(anonymous_3)",
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
              column: 23
            },
            end: {
              line: 83,
              column: 3
            }
          },
          line: 81
        },
        "4": {
          name: "(anonymous_4)",
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
              column: 12
            },
            end: {
              line: 131,
              column: 3
            }
          },
          line: 86
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 104,
              column: 11
            },
            end: {
              line: 104,
              column: 12
            }
          },
          loc: {
            start: {
              line: 104,
              column: 22
            },
            end: {
              line: 124,
              column: 7
            }
          },
          line: 104
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 126,
              column: 12
            },
            end: {
              line: 126,
              column: 13
            }
          },
          loc: {
            start: {
              line: 126,
              column: 22
            },
            end: {
              line: 126,
              column: 33
            }
          },
          line: 126
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 127,
              column: 15
            },
            end: {
              line: 127,
              column: 16
            }
          },
          loc: {
            start: {
              line: 127,
              column: 23
            },
            end: {
              line: 130,
              column: 7
            }
          },
          line: 127
        },
        "8": {
          name: "(anonymous_8)",
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
              column: 12
            },
            end: {
              line: 145,
              column: 3
            }
          },
          line: 133
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
              column: 21
            },
            end: {
              line: 167,
              column: 3
            }
          },
          line: 148
        },
        "10": {
          name: "(anonymous_10)",
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
              column: 18
            },
            end: {
              line: 172,
              column: 3
            }
          },
          line: 169
        },
        "11": {
          name: "(anonymous_11)",
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
              column: 21
            },
            end: {
              line: 179,
              column: 3
            }
          },
          line: 174
        },
        "12": {
          name: "(anonymous_12)",
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
              column: 21
            },
            end: {
              line: 184,
              column: 3
            }
          },
          line: 181
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 186,
              column: 2
            },
            end: {
              line: 186,
              column: 3
            }
          },
          loc: {
            start: {
              line: 186,
              column: 13
            },
            end: {
              line: 221,
              column: 3
            }
          },
          line: 186
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 223,
              column: 2
            },
            end: {
              line: 223,
              column: 3
            }
          },
          loc: {
            start: {
              line: 223,
              column: 20
            },
            end: {
              line: 257,
              column: 3
            }
          },
          line: 223
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 230,
              column: 11
            },
            end: {
              line: 230,
              column: 12
            }
          },
          loc: {
            start: {
              line: 230,
              column: 23
            },
            end: {
              line: 230,
              column: 91
            }
          },
          line: 230
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 259,
              column: 2
            },
            end: {
              line: 259,
              column: 3
            }
          },
          loc: {
            start: {
              line: 259,
              column: 11
            },
            end: {
              line: 263,
              column: 3
            }
          },
          line: 259
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 261,
              column: 14
            },
            end: {
              line: 261,
              column: 15
            }
          },
          loc: {
            start: {
              line: 261,
              column: 22
            },
            end: {
              line: 261,
              column: 64
            }
          },
          line: 261
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 262,
              column: 15
            },
            end: {
              line: 262,
              column: 16
            }
          },
          loc: {
            start: {
              line: 262,
              column: 23
            },
            end: {
              line: 262,
              column: 63
            }
          },
          line: 262
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 266,
              column: 2
            },
            end: {
              line: 266,
              column: 3
            }
          },
          loc: {
            start: {
              line: 266,
              column: 34
            },
            end: {
              line: 284,
              column: 3
            }
          },
          line: 266
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 267,
              column: 21
            },
            end: {
              line: 267,
              column: 22
            }
          },
          loc: {
            start: {
              line: 267,
              column: 33
            },
            end: {
              line: 283,
              column: 5
            }
          },
          line: 267
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 291,
              column: 34
            },
            end: {
              line: 291,
              column: 35
            }
          },
          loc: {
            start: {
              line: 291,
              column: 40
            },
            end: {
              line: 299,
              column: 1
            }
          },
          line: 291
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 307,
              column: 24
            },
            end: {
              line: 307,
              column: 25
            }
          },
          loc: {
            start: {
              line: 307,
              column: 30
            },
            end: {
              line: 310,
              column: 1
            }
          },
          line: 307
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 60,
              column: 26
            },
            end: {
              line: 60,
              column: 71
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 60,
              column: 55
            },
            end: {
              line: 60,
              column: 61
            }
          }, {
            start: {
              line: 60,
              column: 64
            },
            end: {
              line: 60,
              column: 71
            }
          }],
          line: 60
        },
        "1": {
          loc: {
            start: {
              line: 87,
              column: 23
            },
            end: {
              line: 88,
              column: 37
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 88,
              column: 6
            },
            end: {
              line: 88,
              column: 19
            }
          }, {
            start: {
              line: 88,
              column: 22
            },
            end: {
              line: 88,
              column: 37
            }
          }],
          line: 87
        },
        "2": {
          loc: {
            start: {
              line: 90,
              column: 25
            },
            end: {
              line: 91,
              column: 38
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 91,
              column: 6
            },
            end: {
              line: 91,
              column: 16
            }
          }, {
            start: {
              line: 91,
              column: 19
            },
            end: {
              line: 91,
              column: 38
            }
          }],
          line: 90
        },
        "3": {
          loc: {
            start: {
              line: 93,
              column: 23
            },
            end: {
              line: 94,
              column: 30
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 94,
              column: 6
            },
            end: {
              line: 94,
              column: 26
            }
          }, {
            start: {
              line: 94,
              column: 29
            },
            end: {
              line: 94,
              column: 30
            }
          }],
          line: 93
        },
        "4": {
          loc: {
            start: {
              line: 108,
              column: 8
            },
            end: {
              line: 110,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 108,
              column: 8
            },
            end: {
              line: 110,
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
          line: 108
        },
        "5": {
          loc: {
            start: {
              line: 112,
              column: 8
            },
            end: {
              line: 121,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 112,
              column: 8
            },
            end: {
              line: 121,
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
          line: 112
        },
        "6": {
          loc: {
            start: {
              line: 114,
              column: 10
            },
            end: {
              line: 120,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 114,
              column: 10
            },
            end: {
              line: 120,
              column: 11
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
        "7": {
          loc: {
            start: {
              line: 114,
              column: 14
            },
            end: {
              line: 114,
              column: 49
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 114,
              column: 14
            },
            end: {
              line: 114,
              column: 29
            }
          }, {
            start: {
              line: 114,
              column: 33
            },
            end: {
              line: 114,
              column: 49
            }
          }],
          line: 114
        },
        "8": {
          loc: {
            start: {
              line: 151,
              column: 10
            },
            end: {
              line: 151,
              column: 60
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 151,
              column: 49
            },
            end: {
              line: 151,
              column: 55
            }
          }, {
            start: {
              line: 151,
              column: 58
            },
            end: {
              line: 151,
              column: 60
            }
          }],
          line: 151
        },
        "9": {
          loc: {
            start: {
              line: 151,
              column: 10
            },
            end: {
              line: 151,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 151,
              column: 10
            },
            end: {
              line: 151,
              column: 36
            }
          }, {
            start: {
              line: 151,
              column: 40
            },
            end: {
              line: 151,
              column: 46
            }
          }],
          line: 151
        },
        "10": {
          loc: {
            start: {
              line: 154,
              column: 4
            },
            end: {
              line: 162,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 154,
              column: 4
            },
            end: {
              line: 162,
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
          line: 154
        },
        "11": {
          loc: {
            start: {
              line: 154,
              column: 8
            },
            end: {
              line: 154,
              column: 74
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 154,
              column: 8
            },
            end: {
              line: 154,
              column: 41
            }
          }, {
            start: {
              line: 154,
              column: 45
            },
            end: {
              line: 154,
              column: 74
            }
          }],
          line: 154
        },
        "12": {
          loc: {
            start: {
              line: 156,
              column: 6
            },
            end: {
              line: 159,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 156,
              column: 6
            },
            end: {
              line: 159,
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
          line: 156
        },
        "13": {
          loc: {
            start: {
              line: 170,
              column: 11
            },
            end: {
              line: 171,
              column: 69
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 171,
              column: 6
            },
            end: {
              line: 171,
              column: 37
            }
          }, {
            start: {
              line: 171,
              column: 40
            },
            end: {
              line: 171,
              column: 69
            }
          }],
          line: 170
        },
        "14": {
          loc: {
            start: {
              line: 175,
              column: 11
            },
            end: {
              line: 178,
              column: 5
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 175,
              column: 11
            },
            end: {
              line: 175,
              column: 43
            }
          }, {
            start: {
              line: 175,
              column: 47
            },
            end: {
              line: 178,
              column: 5
            }
          }],
          line: 175
        },
        "15": {
          loc: {
            start: {
              line: 182,
              column: 11
            },
            end: {
              line: 183,
              column: 77
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 183,
              column: 6
            },
            end: {
              line: 183,
              column: 24
            }
          }, {
            start: {
              line: 183,
              column: 27
            },
            end: {
              line: 183,
              column: 77
            }
          }],
          line: 182
        },
        "16": {
          loc: {
            start: {
              line: 191,
              column: 4
            },
            end: {
              line: 193,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 191,
              column: 4
            },
            end: {
              line: 193,
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
          line: 191
        },
        "17": {
          loc: {
            start: {
              line: 195,
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
              line: 195,
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
          line: 195
        },
        "18": {
          loc: {
            start: {
              line: 198,
              column: 6
            },
            end: {
              line: 200,
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
              line: 200,
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
        "19": {
          loc: {
            start: {
              line: 205,
              column: 4
            },
            end: {
              line: 209,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 205,
              column: 4
            },
            end: {
              line: 209,
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
          line: 205
        },
        "20": {
          loc: {
            start: {
              line: 205,
              column: 8
            },
            end: {
              line: 205,
              column: 82
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 205,
              column: 8
            },
            end: {
              line: 205,
              column: 26
            }
          }, {
            start: {
              line: 205,
              column: 30
            },
            end: {
              line: 205,
              column: 58
            }
          }, {
            start: {
              line: 205,
              column: 62
            },
            end: {
              line: 205,
              column: 82
            }
          }],
          line: 205
        },
        "21": {
          loc: {
            start: {
              line: 212,
              column: 29
            },
            end: {
              line: 215,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 212,
              column: 29
            },
            end: {
              line: 212,
              column: 68
            }
          }, {
            start: {
              line: 213,
              column: 10
            },
            end: {
              line: 213,
              column: 39
            }
          }, {
            start: {
              line: 214,
              column: 11
            },
            end: {
              line: 214,
              column: 54
            }
          }, {
            start: {
              line: 215,
              column: 14
            },
            end: {
              line: 215,
              column: 46
            }
          }],
          line: 212
        },
        "22": {
          loc: {
            start: {
              line: 217,
              column: 6
            },
            end: {
              line: 219,
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
              line: 219,
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
        "23": {
          loc: {
            start: {
              line: 234,
              column: 4
            },
            end: {
              line: 252,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 234,
              column: 4
            },
            end: {
              line: 252,
              column: 5
            }
          }, {
            start: {
              line: 239,
              column: 11
            },
            end: {
              line: 252,
              column: 5
            }
          }],
          line: 234
        },
        "24": {
          loc: {
            start: {
              line: 269,
              column: 22
            },
            end: {
              line: 269,
              column: 58
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 269,
              column: 22
            },
            end: {
              line: 269,
              column: 48
            }
          }, {
            start: {
              line: 269,
              column: 52
            },
            end: {
              line: 269,
              column: 58
            }
          }],
          line: 269
        },
        "25": {
          loc: {
            start: {
              line: 271,
              column: 6
            },
            end: {
              line: 274,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 271,
              column: 6
            },
            end: {
              line: 274,
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
          line: 271
        },
        "26": {
          loc: {
            start: {
              line: 276,
              column: 6
            },
            end: {
              line: 282,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 276,
              column: 6
            },
            end: {
              line: 282,
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
          line: 276
        },
        "27": {
          loc: {
            start: {
              line: 277,
              column: 8
            },
            end: {
              line: 279,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 277,
              column: 8
            },
            end: {
              line: 279,
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
          line: 277
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
        "124": 0,
        "125": 0,
        "126": 0,
        "127": 0,
        "128": 0,
        "129": 0,
        "130": 0,
        "131": 0,
        "132": 0,
        "133": 0
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
        "22": 0
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
        "20": [0, 0, 0],
        "21": [0, 0, 0, 0],
        "22": [0, 0],
        "23": [0, 0],
        "24": [0, 0],
        "25": [0, 0],
        "26": [0, 0],
        "27": [0, 0]
      },
      _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
      hash: "2d0463ff23319adb5fdfc27beed01ce83aa26290"
    };
    var coverage = global[gcv] || (global[gcv] = {});
    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }
    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_tybiq4qev = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }
  cov_tybiq4qev();

  /**
   * Constants
   */

  var NAME = (cov_tybiq4qev().s[0]++, 'scrollspy');
  var VERSION = (cov_tybiq4qev().s[1]++, '4.6.2');
  var DATA_KEY = (cov_tybiq4qev().s[2]++, 'bs.scrollspy');
  var EVENT_KEY = (cov_tybiq4qev().s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_tybiq4qev().s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_tybiq4qev().s[5]++, $__default["default"].fn[NAME]);
  var CLASS_NAME_DROPDOWN_ITEM = (cov_tybiq4qev().s[6]++, 'dropdown-item');
  var CLASS_NAME_ACTIVE = (cov_tybiq4qev().s[7]++, 'active');
  var EVENT_ACTIVATE = (cov_tybiq4qev().s[8]++, "activate" + EVENT_KEY);
  var EVENT_SCROLL = (cov_tybiq4qev().s[9]++, "scroll" + EVENT_KEY);
  var EVENT_LOAD_DATA_API = (cov_tybiq4qev().s[10]++, "load" + EVENT_KEY + DATA_API_KEY);
  var METHOD_OFFSET = (cov_tybiq4qev().s[11]++, 'offset');
  var METHOD_POSITION = (cov_tybiq4qev().s[12]++, 'position');
  var SELECTOR_DATA_SPY = (cov_tybiq4qev().s[13]++, '[data-spy="scroll"]');
  var SELECTOR_NAV_LIST_GROUP = (cov_tybiq4qev().s[14]++, '.nav, .list-group');
  var SELECTOR_NAV_LINKS = (cov_tybiq4qev().s[15]++, '.nav-link');
  var SELECTOR_NAV_ITEMS = (cov_tybiq4qev().s[16]++, '.nav-item');
  var SELECTOR_LIST_ITEMS = (cov_tybiq4qev().s[17]++, '.list-group-item');
  var SELECTOR_DROPDOWN = (cov_tybiq4qev().s[18]++, '.dropdown');
  var SELECTOR_DROPDOWN_ITEMS = (cov_tybiq4qev().s[19]++, '.dropdown-item');
  var SELECTOR_DROPDOWN_TOGGLE = (cov_tybiq4qev().s[20]++, '.dropdown-toggle');
  var Default = (cov_tybiq4qev().s[21]++, {
    offset: 10,
    method: 'auto',
    target: ''
  });
  var DefaultType = (cov_tybiq4qev().s[22]++, {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  });

  /**
   * Class definition
   */
  var ScrollSpy = /*#__PURE__*/function () {
    function ScrollSpy(element, config) {
      var _this = this;
      cov_tybiq4qev().f[0]++;
      cov_tybiq4qev().s[23]++;
      this._element = element;
      cov_tybiq4qev().s[24]++;
      this._scrollElement = element.tagName === 'BODY' ? (cov_tybiq4qev().b[0][0]++, window) : (cov_tybiq4qev().b[0][1]++, element);
      cov_tybiq4qev().s[25]++;
      this._config = this._getConfig(config);
      cov_tybiq4qev().s[26]++;
      this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
      cov_tybiq4qev().s[27]++;
      this._offsets = [];
      cov_tybiq4qev().s[28]++;
      this._targets = [];
      cov_tybiq4qev().s[29]++;
      this._activeTarget = null;
      cov_tybiq4qev().s[30]++;
      this._scrollHeight = 0;
      cov_tybiq4qev().s[31]++;
      $__default["default"](this._scrollElement).on(EVENT_SCROLL, function (event) {
        cov_tybiq4qev().f[1]++;
        cov_tybiq4qev().s[32]++;
        return _this._process(event);
      });
      cov_tybiq4qev().s[33]++;
      this.refresh();
      cov_tybiq4qev().s[34]++;
      this._process();
    }

    // Getters
    var _proto = ScrollSpy.prototype;
    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;
      cov_tybiq4qev().f[4]++;
      var autoMethod = (cov_tybiq4qev().s[37]++, this._scrollElement === this._scrollElement.window ? (cov_tybiq4qev().b[1][0]++, METHOD_OFFSET) : (cov_tybiq4qev().b[1][1]++, METHOD_POSITION));
      var offsetMethod = (cov_tybiq4qev().s[38]++, this._config.method === 'auto' ? (cov_tybiq4qev().b[2][0]++, autoMethod) : (cov_tybiq4qev().b[2][1]++, this._config.method));
      var offsetBase = (cov_tybiq4qev().s[39]++, offsetMethod === METHOD_POSITION ? (cov_tybiq4qev().b[3][0]++, this._getScrollTop()) : (cov_tybiq4qev().b[3][1]++, 0));
      cov_tybiq4qev().s[40]++;
      this._offsets = [];
      cov_tybiq4qev().s[41]++;
      this._targets = [];
      cov_tybiq4qev().s[42]++;
      this._scrollHeight = this._getScrollHeight();
      var targets = (cov_tybiq4qev().s[43]++, [].slice.call(document.querySelectorAll(this._selector)));
      cov_tybiq4qev().s[44]++;
      targets.map(function (element) {
        cov_tybiq4qev().f[5]++;
        var target;
        var targetSelector = (cov_tybiq4qev().s[45]++, Util__default["default"].getSelectorFromElement(element));
        cov_tybiq4qev().s[46]++;
        if (targetSelector) {
          cov_tybiq4qev().b[4][0]++;
          cov_tybiq4qev().s[47]++;
          target = document.querySelector(targetSelector);
        } else {
          cov_tybiq4qev().b[4][1]++;
        }
        cov_tybiq4qev().s[48]++;
        if (target) {
          cov_tybiq4qev().b[5][0]++;
          var targetBCR = (cov_tybiq4qev().s[49]++, target.getBoundingClientRect());
          cov_tybiq4qev().s[50]++;
          if ((cov_tybiq4qev().b[7][0]++, targetBCR.width) || (cov_tybiq4qev().b[7][1]++, targetBCR.height)) {
            cov_tybiq4qev().b[6][0]++;
            cov_tybiq4qev().s[51]++;
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$__default["default"](target)[offsetMethod]().top + offsetBase, targetSelector];
          } else {
            cov_tybiq4qev().b[6][1]++;
          }
        } else {
          cov_tybiq4qev().b[5][1]++;
        }
        cov_tybiq4qev().s[52]++;
        return null;
      }).filter(Boolean).sort(function (a, b) {
        cov_tybiq4qev().f[6]++;
        cov_tybiq4qev().s[53]++;
        return a[0] - b[0];
      }).forEach(function (item) {
        cov_tybiq4qev().f[7]++;
        cov_tybiq4qev().s[54]++;
        _this2._offsets.push(item[0]);
        cov_tybiq4qev().s[55]++;
        _this2._targets.push(item[1]);
      });
    };
    _proto.dispose = function dispose() {
      cov_tybiq4qev().f[8]++;
      cov_tybiq4qev().s[56]++;
      $__default["default"].removeData(this._element, DATA_KEY);
      cov_tybiq4qev().s[57]++;
      $__default["default"](this._scrollElement).off(EVENT_KEY);
      cov_tybiq4qev().s[58]++;
      this._element = null;
      cov_tybiq4qev().s[59]++;
      this._scrollElement = null;
      cov_tybiq4qev().s[60]++;
      this._config = null;
      cov_tybiq4qev().s[61]++;
      this._selector = null;
      cov_tybiq4qev().s[62]++;
      this._offsets = null;
      cov_tybiq4qev().s[63]++;
      this._targets = null;
      cov_tybiq4qev().s[64]++;
      this._activeTarget = null;
      cov_tybiq4qev().s[65]++;
      this._scrollHeight = null;
    }

    // Private
    ;
    _proto._getConfig = function _getConfig(config) {
      cov_tybiq4qev().f[9]++;
      cov_tybiq4qev().s[66]++;
      config = _extends({}, Default, (cov_tybiq4qev().b[9][0]++, typeof config === 'object') && (cov_tybiq4qev().b[9][1]++, config) ? (cov_tybiq4qev().b[8][0]++, config) : (cov_tybiq4qev().b[8][1]++, {}));
      cov_tybiq4qev().s[67]++;
      if ((cov_tybiq4qev().b[11][0]++, typeof config.target !== 'string') && (cov_tybiq4qev().b[11][1]++, Util__default["default"].isElement(config.target))) {
        cov_tybiq4qev().b[10][0]++;
        var id = (cov_tybiq4qev().s[68]++, $__default["default"](config.target).attr('id'));
        cov_tybiq4qev().s[69]++;
        if (!id) {
          cov_tybiq4qev().b[12][0]++;
          cov_tybiq4qev().s[70]++;
          id = Util__default["default"].getUID(NAME);
          cov_tybiq4qev().s[71]++;
          $__default["default"](config.target).attr('id', id);
        } else {
          cov_tybiq4qev().b[12][1]++;
        }
        cov_tybiq4qev().s[72]++;
        config.target = "#" + id;
      } else {
        cov_tybiq4qev().b[10][1]++;
      }
      cov_tybiq4qev().s[73]++;
      Util__default["default"].typeCheckConfig(NAME, config, DefaultType);
      cov_tybiq4qev().s[74]++;
      return config;
    };
    _proto._getScrollTop = function _getScrollTop() {
      cov_tybiq4qev().f[10]++;
      cov_tybiq4qev().s[75]++;
      return this._scrollElement === window ? (cov_tybiq4qev().b[13][0]++, this._scrollElement.pageYOffset) : (cov_tybiq4qev().b[13][1]++, this._scrollElement.scrollTop);
    };
    _proto._getScrollHeight = function _getScrollHeight() {
      cov_tybiq4qev().f[11]++;
      cov_tybiq4qev().s[76]++;
      return (cov_tybiq4qev().b[14][0]++, this._scrollElement.scrollHeight) || (cov_tybiq4qev().b[14][1]++, Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
    };
    _proto._getOffsetHeight = function _getOffsetHeight() {
      cov_tybiq4qev().f[12]++;
      cov_tybiq4qev().s[77]++;
      return this._scrollElement === window ? (cov_tybiq4qev().b[15][0]++, window.innerHeight) : (cov_tybiq4qev().b[15][1]++, this._scrollElement.getBoundingClientRect().height);
    };
    _proto._process = function _process() {
      cov_tybiq4qev().f[13]++;
      var scrollTop = (cov_tybiq4qev().s[78]++, this._getScrollTop() + this._config.offset);
      var scrollHeight = (cov_tybiq4qev().s[79]++, this._getScrollHeight());
      var maxScroll = (cov_tybiq4qev().s[80]++, this._config.offset + scrollHeight - this._getOffsetHeight());
      cov_tybiq4qev().s[81]++;
      if (this._scrollHeight !== scrollHeight) {
        cov_tybiq4qev().b[16][0]++;
        cov_tybiq4qev().s[82]++;
        this.refresh();
      } else {
        cov_tybiq4qev().b[16][1]++;
      }
      cov_tybiq4qev().s[83]++;
      if (scrollTop >= maxScroll) {
        cov_tybiq4qev().b[17][0]++;
        var target = (cov_tybiq4qev().s[84]++, this._targets[this._targets.length - 1]);
        cov_tybiq4qev().s[85]++;
        if (this._activeTarget !== target) {
          cov_tybiq4qev().b[18][0]++;
          cov_tybiq4qev().s[86]++;
          this._activate(target);
        } else {
          cov_tybiq4qev().b[18][1]++;
        }
        cov_tybiq4qev().s[87]++;
        return;
      } else {
        cov_tybiq4qev().b[17][1]++;
      }
      cov_tybiq4qev().s[88]++;
      if ((cov_tybiq4qev().b[20][0]++, this._activeTarget) && (cov_tybiq4qev().b[20][1]++, scrollTop < this._offsets[0]) && (cov_tybiq4qev().b[20][2]++, this._offsets[0] > 0)) {
        cov_tybiq4qev().b[19][0]++;
        cov_tybiq4qev().s[89]++;
        this._activeTarget = null;
        cov_tybiq4qev().s[90]++;
        this._clear();
        cov_tybiq4qev().s[91]++;
        return;
      } else {
        cov_tybiq4qev().b[19][1]++;
      }
      cov_tybiq4qev().s[92]++;
      for (var i = (cov_tybiq4qev().s[93]++, this._offsets.length); i--;) {
        var isActiveTarget = (cov_tybiq4qev().s[94]++, (cov_tybiq4qev().b[21][0]++, this._activeTarget !== this._targets[i]) && (cov_tybiq4qev().b[21][1]++, scrollTop >= this._offsets[i]) && ((cov_tybiq4qev().b[21][2]++, typeof this._offsets[i + 1] === 'undefined') || (cov_tybiq4qev().b[21][3]++, scrollTop < this._offsets[i + 1])));
        cov_tybiq4qev().s[95]++;
        if (isActiveTarget) {
          cov_tybiq4qev().b[22][0]++;
          cov_tybiq4qev().s[96]++;
          this._activate(this._targets[i]);
        } else {
          cov_tybiq4qev().b[22][1]++;
        }
      }
    };
    _proto._activate = function _activate(target) {
      cov_tybiq4qev().f[14]++;
      cov_tybiq4qev().s[97]++;
      this._activeTarget = target;
      cov_tybiq4qev().s[98]++;
      this._clear();
      var queries = (cov_tybiq4qev().s[99]++, this._selector.split(',').map(function (selector) {
        cov_tybiq4qev().f[15]++;
        cov_tybiq4qev().s[100]++;
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      }));
      var $link = (cov_tybiq4qev().s[101]++, $__default["default"]([].slice.call(document.querySelectorAll(queries.join(',')))));
      cov_tybiq4qev().s[102]++;
      if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
        cov_tybiq4qev().b[23][0]++;
        cov_tybiq4qev().s[103]++;
        $link.closest(SELECTOR_DROPDOWN).find(SELECTOR_DROPDOWN_TOGGLE).addClass(CLASS_NAME_ACTIVE);
        cov_tybiq4qev().s[104]++;
        $link.addClass(CLASS_NAME_ACTIVE);
      } else {
        cov_tybiq4qev().b[23][1]++;
        cov_tybiq4qev().s[105]++;
        // Set triggered link as active
        $link.addClass(CLASS_NAME_ACTIVE);
        // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        cov_tybiq4qev().s[106]++;
        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE);
        // Handle special case when .nav-link is inside .nav-item
        cov_tybiq4qev().s[107]++;
        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE);
      }
      cov_tybiq4qev().s[108]++;
      $__default["default"](this._scrollElement).trigger(EVENT_ACTIVATE, {
        relatedTarget: target
      });
    };
    _proto._clear = function _clear() {
      cov_tybiq4qev().f[16]++;
      cov_tybiq4qev().s[109]++;
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        cov_tybiq4qev().f[17]++;
        cov_tybiq4qev().s[110]++;
        return node.classList.contains(CLASS_NAME_ACTIVE);
      }).forEach(function (node) {
        cov_tybiq4qev().f[18]++;
        cov_tybiq4qev().s[111]++;
        return node.classList.remove(CLASS_NAME_ACTIVE);
      });
    }

    // Static
    ;
    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      cov_tybiq4qev().f[19]++;
      cov_tybiq4qev().s[112]++;
      return this.each(function () {
        cov_tybiq4qev().f[20]++;
        var data = (cov_tybiq4qev().s[113]++, $__default["default"](this).data(DATA_KEY));
        var _config = (cov_tybiq4qev().s[114]++, (cov_tybiq4qev().b[24][0]++, typeof config === 'object') && (cov_tybiq4qev().b[24][1]++, config));
        cov_tybiq4qev().s[115]++;
        if (!data) {
          cov_tybiq4qev().b[25][0]++;
          cov_tybiq4qev().s[116]++;
          data = new ScrollSpy(this, _config);
          cov_tybiq4qev().s[117]++;
          $__default["default"](this).data(DATA_KEY, data);
        } else {
          cov_tybiq4qev().b[25][1]++;
        }
        cov_tybiq4qev().s[118]++;
        if (typeof config === 'string') {
          cov_tybiq4qev().b[26][0]++;
          cov_tybiq4qev().s[119]++;
          if (typeof data[config] === 'undefined') {
            cov_tybiq4qev().b[27][0]++;
            cov_tybiq4qev().s[120]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_tybiq4qev().b[27][1]++;
          }
          cov_tybiq4qev().s[121]++;
          data[config]();
        } else {
          cov_tybiq4qev().b[26][1]++;
        }
      });
    };
    return _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        cov_tybiq4qev().f[2]++;
        cov_tybiq4qev().s[35]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_tybiq4qev().f[3]++;
        cov_tybiq4qev().s[36]++;
        return Default;
      }
    }]);
  }();
  /**
   * Data API implementation
   */
  cov_tybiq4qev().s[122]++;
  $__default["default"](window).on(EVENT_LOAD_DATA_API, function () {
    cov_tybiq4qev().f[21]++;
    var scrollSpys = (cov_tybiq4qev().s[123]++, [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY)));
    var scrollSpysLength = (cov_tybiq4qev().s[124]++, scrollSpys.length);
    cov_tybiq4qev().s[125]++;
    for (var i = (cov_tybiq4qev().s[126]++, scrollSpysLength); i--;) {
      var $spy = (cov_tybiq4qev().s[127]++, $__default["default"](scrollSpys[i]));
      cov_tybiq4qev().s[128]++;
      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });

  /**
   * jQuery
   */
  cov_tybiq4qev().s[129]++;
  $__default["default"].fn[NAME] = ScrollSpy._jQueryInterface;
  cov_tybiq4qev().s[130]++;
  $__default["default"].fn[NAME].Constructor = ScrollSpy;
  cov_tybiq4qev().s[131]++;
  $__default["default"].fn[NAME].noConflict = function () {
    cov_tybiq4qev().f[22]++;
    cov_tybiq4qev().s[132]++;
    $__default["default"].fn[NAME] = JQUERY_NO_CONFLICT;
    cov_tybiq4qev().s[133]++;
    return ScrollSpy._jQueryInterface;
  };

  return ScrollSpy;

}));
//# sourceMappingURL=scrollspy.js.map

/*!
  * Bootstrap collapse.js v4.6.2-2 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2025 https://github.com/MahdiMajidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Collapse = factory(global.jQuery, global.Util));
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

  function cov_c61spwi8m() {
    var path = "/Users/mahdi/Documents/app/bootstrap-v4-rtl/js/src/collapse.js";
    var hash = "d03f7a36e2b2e7468593e204cb411d8a682ab442";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Users/mahdi/Documents/app/bootstrap-v4-rtl/js/src/collapse.js",
      statementMap: {
        "0": {
          start: {
            line: 15,
            column: 13
          },
          end: {
            line: 15,
            column: 23
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
            column: 30
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
            column: 28
          },
          end: {
            line: 23,
            column: 38
          }
        },
        "8": {
          start: {
            line: 24,
            column: 30
          },
          end: {
            line: 24,
            column: 42
          }
        },
        "9": {
          start: {
            line: 25,
            column: 29
          },
          end: {
            line: 25,
            column: 40
          }
        },
        "10": {
          start: {
            line: 27,
            column: 24
          },
          end: {
            line: 27,
            column: 31
          }
        },
        "11": {
          start: {
            line: 28,
            column: 25
          },
          end: {
            line: 28,
            column: 33
          }
        },
        "12": {
          start: {
            line: 30,
            column: 19
          },
          end: {
            line: 30,
            column: 37
          }
        },
        "13": {
          start: {
            line: 31,
            column: 20
          },
          end: {
            line: 31,
            column: 39
          }
        },
        "14": {
          start: {
            line: 32,
            column: 19
          },
          end: {
            line: 32,
            column: 37
          }
        },
        "15": {
          start: {
            line: 33,
            column: 21
          },
          end: {
            line: 33,
            column: 41
          }
        },
        "16": {
          start: {
            line: 34,
            column: 29
          },
          end: {
            line: 34,
            column: 63
          }
        },
        "17": {
          start: {
            line: 36,
            column: 25
          },
          end: {
            line: 36,
            column: 45
          }
        },
        "18": {
          start: {
            line: 37,
            column: 29
          },
          end: {
            line: 37,
            column: 55
          }
        },
        "19": {
          start: {
            line: 39,
            column: 16
          },
          end: {
            line: 42,
            column: 1
          }
        },
        "20": {
          start: {
            line: 44,
            column: 20
          },
          end: {
            line: 47,
            column: 1
          }
        },
        "21": {
          start: {
            line: 55,
            column: 4
          },
          end: {
            line: 55,
            column: 33
          }
        },
        "22": {
          start: {
            line: 56,
            column: 4
          },
          end: {
            line: 56,
            column: 27
          }
        },
        "23": {
          start: {
            line: 57,
            column: 4
          },
          end: {
            line: 57,
            column: 42
          }
        },
        "24": {
          start: {
            line: 58,
            column: 4
          },
          end: {
            line: 61,
            column: 6
          }
        },
        "25": {
          start: {
            line: 63,
            column: 23
          },
          end: {
            line: 63,
            column: 85
          }
        },
        "26": {
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 74,
            column: 5
          }
        },
        "27": {
          start: {
            line: 64,
            column: 17
          },
          end: {
            line: 64,
            column: 18
          }
        },
        "28": {
          start: {
            line: 64,
            column: 26
          },
          end: {
            line: 64,
            column: 43
          }
        },
        "29": {
          start: {
            line: 65,
            column: 19
          },
          end: {
            line: 65,
            column: 32
          }
        },
        "30": {
          start: {
            line: 66,
            column: 23
          },
          end: {
            line: 66,
            column: 56
          }
        },
        "31": {
          start: {
            line: 67,
            column: 28
          },
          end: {
            line: 68,
            column: 51
          }
        },
        "32": {
          start: {
            line: 68,
            column: 29
          },
          end: {
            line: 68,
            column: 50
          }
        },
        "33": {
          start: {
            line: 70,
            column: 6
          },
          end: {
            line: 73,
            column: 7
          }
        },
        "34": {
          start: {
            line: 71,
            column: 8
          },
          end: {
            line: 71,
            column: 33
          }
        },
        "35": {
          start: {
            line: 72,
            column: 8
          },
          end: {
            line: 72,
            column: 37
          }
        },
        "36": {
          start: {
            line: 76,
            column: 4
          },
          end: {
            line: 76,
            column: 65
          }
        },
        "37": {
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 80,
            column: 5
          }
        },
        "38": {
          start: {
            line: 79,
            column: 6
          },
          end: {
            line: 79,
            column: 71
          }
        },
        "39": {
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 84,
            column: 5
          }
        },
        "40": {
          start: {
            line: 83,
            column: 6
          },
          end: {
            line: 83,
            column: 19
          }
        },
        "41": {
          start: {
            line: 89,
            column: 4
          },
          end: {
            line: 89,
            column: 18
          }
        },
        "42": {
          start: {
            line: 93,
            column: 4
          },
          end: {
            line: 93,
            column: 18
          }
        },
        "43": {
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 102,
            column: 5
          }
        },
        "44": {
          start: {
            line: 99,
            column: 6
          },
          end: {
            line: 99,
            column: 17
          }
        },
        "45": {
          start: {
            line: 101,
            column: 6
          },
          end: {
            line: 101,
            column: 17
          }
        },
        "46": {
          start: {
            line: 106,
            column: 4
          },
          end: {
            line: 109,
            column: 5
          }
        },
        "47": {
          start: {
            line: 108,
            column: 6
          },
          end: {
            line: 108,
            column: 12
          }
        },
        "48": {
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 127,
            column: 5
          }
        },
        "49": {
          start: {
            line: 115,
            column: 6
          },
          end: {
            line: 122,
            column: 10
          }
        },
        "50": {
          start: {
            line: 117,
            column: 10
          },
          end: {
            line: 119,
            column: 11
          }
        },
        "51": {
          start: {
            line: 118,
            column: 12
          },
          end: {
            line: 118,
            column: 75
          }
        },
        "52": {
          start: {
            line: 121,
            column: 10
          },
          end: {
            line: 121,
            column: 61
          }
        },
        "53": {
          start: {
            line: 124,
            column: 6
          },
          end: {
            line: 126,
            column: 7
          }
        },
        "54": {
          start: {
            line: 125,
            column: 8
          },
          end: {
            line: 125,
            column: 22
          }
        },
        "55": {
          start: {
            line: 129,
            column: 4
          },
          end: {
            line: 134,
            column: 5
          }
        },
        "56": {
          start: {
            line: 130,
            column: 6
          },
          end: {
            line: 130,
            column: 65
          }
        },
        "57": {
          start: {
            line: 131,
            column: 6
          },
          end: {
            line: 133,
            column: 7
          }
        },
        "58": {
          start: {
            line: 132,
            column: 8
          },
          end: {
            line: 132,
            column: 14
          }
        },
        "59": {
          start: {
            line: 136,
            column: 23
          },
          end: {
            line: 136,
            column: 42
          }
        },
        "60": {
          start: {
            line: 137,
            column: 4
          },
          end: {
            line: 137,
            column: 40
          }
        },
        "61": {
          start: {
            line: 138,
            column: 4
          },
          end: {
            line: 140,
            column: 5
          }
        },
        "62": {
          start: {
            line: 139,
            column: 6
          },
          end: {
            line: 139,
            column: 12
          }
        },
        "63": {
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 147,
            column: 5
          }
        },
        "64": {
          start: {
            line: 143,
            column: 6
          },
          end: {
            line: 143,
            column: 76
          }
        },
        "65": {
          start: {
            line: 144,
            column: 6
          },
          end: {
            line: 146,
            column: 7
          }
        },
        "66": {
          start: {
            line: 145,
            column: 8
          },
          end: {
            line: 145,
            column: 39
          }
        },
        "67": {
          start: {
            line: 149,
            column: 22
          },
          end: {
            line: 149,
            column: 42
          }
        },
        "68": {
          start: {
            line: 151,
            column: 4
          },
          end: {
            line: 153,
            column: 38
          }
        },
        "69": {
          start: {
            line: 155,
            column: 4
          },
          end: {
            line: 155,
            column: 38
          }
        },
        "70": {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 161,
            column: 5
          }
        },
        "71": {
          start: {
            line: 158,
            column: 6
          },
          end: {
            line: 160,
            column: 36
          }
        },
        "72": {
          start: {
            line: 163,
            column: 4
          },
          end: {
            line: 163,
            column: 31
          }
        },
        "73": {
          start: {
            line: 165,
            column: 21
          },
          end: {
            line: 175,
            column: 5
          }
        },
        "74": {
          start: {
            line: 166,
            column: 6
          },
          end: {
            line: 168,
            column: 62
          }
        },
        "75": {
          start: {
            line: 170,
            column: 6
          },
          end: {
            line: 170,
            column: 41
          }
        },
        "76": {
          start: {
            line: 172,
            column: 6
          },
          end: {
            line: 172,
            column: 34
          }
        },
        "77": {
          start: {
            line: 174,
            column: 6
          },
          end: {
            line: 174,
            column: 43
          }
        },
        "78": {
          start: {
            line: 177,
            column: 33
          },
          end: {
            line: 177,
            column: 80
          }
        },
        "79": {
          start: {
            line: 178,
            column: 23
          },
          end: {
            line: 178,
            column: 54
          }
        },
        "80": {
          start: {
            line: 179,
            column: 31
          },
          end: {
            line: 179,
            column: 83
          }
        },
        "81": {
          start: {
            line: 181,
            column: 4
          },
          end: {
            line: 183,
            column: 47
          }
        },
        "82": {
          start: {
            line: 185,
            column: 4
          },
          end: {
            line: 185,
            column: 69
          }
        },
        "83": {
          start: {
            line: 189,
            column: 4
          },
          end: {
            line: 192,
            column: 5
          }
        },
        "84": {
          start: {
            line: 191,
            column: 6
          },
          end: {
            line: 191,
            column: 12
          }
        },
        "85": {
          start: {
            line: 194,
            column: 23
          },
          end: {
            line: 194,
            column: 42
          }
        },
        "86": {
          start: {
            line: 195,
            column: 4
          },
          end: {
            line: 195,
            column: 40
          }
        },
        "87": {
          start: {
            line: 196,
            column: 4
          },
          end: {
            line: 198,
            column: 5
          }
        },
        "88": {
          start: {
            line: 197,
            column: 6
          },
          end: {
            line: 197,
            column: 12
          }
        },
        "89": {
          start: {
            line: 200,
            column: 22
          },
          end: {
            line: 200,
            column: 42
          }
        },
        "90": {
          start: {
            line: 202,
            column: 4
          },
          end: {
            line: 202,
            column: 92
          }
        },
        "91": {
          start: {
            line: 204,
            column: 4
          },
          end: {
            line: 204,
            column: 30
          }
        },
        "92": {
          start: {
            line: 206,
            column: 4
          },
          end: {
            line: 208,
            column: 63
          }
        },
        "93": {
          start: {
            line: 210,
            column: 31
          },
          end: {
            line: 210,
            column: 56
          }
        },
        "94": {
          start: {
            line: 211,
            column: 4
          },
          end: {
            line: 224,
            column: 5
          }
        },
        "95": {
          start: {
            line: 212,
            column: 6
          },
          end: {
            line: 223,
            column: 7
          }
        },
        "96": {
          start: {
            line: 212,
            column: 19
          },
          end: {
            line: 212,
            column: 20
          }
        },
        "97": {
          start: {
            line: 213,
            column: 24
          },
          end: {
            line: 213,
            column: 45
          }
        },
        "98": {
          start: {
            line: 214,
            column: 25
          },
          end: {
            line: 214,
            column: 61
          }
        },
        "99": {
          start: {
            line: 216,
            column: 8
          },
          end: {
            line: 222,
            column: 9
          }
        },
        "100": {
          start: {
            line: 217,
            column: 24
          },
          end: {
            line: 217,
            column: 77
          }
        },
        "101": {
          start: {
            line: 218,
            column: 10
          },
          end: {
            line: 221,
            column: 11
          }
        },
        "102": {
          start: {
            line: 219,
            column: 12
          },
          end: {
            line: 220,
            column: 43
          }
        },
        "103": {
          start: {
            line: 226,
            column: 4
          },
          end: {
            line: 226,
            column: 31
          }
        },
        "104": {
          start: {
            line: 228,
            column: 21
          },
          end: {
            line: 234,
            column: 5
          }
        },
        "105": {
          start: {
            line: 229,
            column: 6
          },
          end: {
            line: 229,
            column: 34
          }
        },
        "106": {
          start: {
            line: 230,
            column: 6
          },
          end: {
            line: 233,
            column: 30
          }
        },
        "107": {
          start: {
            line: 236,
            column: 4
          },
          end: {
            line: 236,
            column: 39
          }
        },
        "108": {
          start: {
            line: 237,
            column: 31
          },
          end: {
            line: 237,
            column: 83
          }
        },
        "109": {
          start: {
            line: 239,
            column: 4
          },
          end: {
            line: 241,
            column: 47
          }
        },
        "110": {
          start: {
            line: 245,
            column: 4
          },
          end: {
            line: 245,
            column: 43
          }
        },
        "111": {
          start: {
            line: 249,
            column: 4
          },
          end: {
            line: 249,
            column: 41
          }
        },
        "112": {
          start: {
            line: 251,
            column: 4
          },
          end: {
            line: 251,
            column: 23
          }
        },
        "113": {
          start: {
            line: 252,
            column: 4
          },
          end: {
            line: 252,
            column: 23
          }
        },
        "114": {
          start: {
            line: 253,
            column: 4
          },
          end: {
            line: 253,
            column: 24
          }
        },
        "115": {
          start: {
            line: 254,
            column: 4
          },
          end: {
            line: 254,
            column: 29
          }
        },
        "116": {
          start: {
            line: 255,
            column: 4
          },
          end: {
            line: 255,
            column: 32
          }
        },
        "117": {
          start: {
            line: 260,
            column: 4
          },
          end: {
            line: 263,
            column: 5
          }
        },
        "118": {
          start: {
            line: 264,
            column: 4
          },
          end: {
            line: 264,
            column: 42
          }
        },
        "119": {
          start: {
            line: 265,
            column: 4
          },
          end: {
            line: 265,
            column: 51
          }
        },
        "120": {
          start: {
            line: 266,
            column: 4
          },
          end: {
            line: 266,
            column: 17
          }
        },
        "121": {
          start: {
            line: 270,
            column: 21
          },
          end: {
            line: 270,
            column: 63
          }
        },
        "122": {
          start: {
            line: 271,
            column: 4
          },
          end: {
            line: 271,
            column: 56
          }
        },
        "123": {
          start: {
            line: 277,
            column: 4
          },
          end: {
            line: 286,
            column: 5
          }
        },
        "124": {
          start: {
            line: 278,
            column: 6
          },
          end: {
            line: 278,
            column: 34
          }
        },
        "125": {
          start: {
            line: 281,
            column: 6
          },
          end: {
            line: 283,
            column: 7
          }
        },
        "126": {
          start: {
            line: 282,
            column: 8
          },
          end: {
            line: 282,
            column: 39
          }
        },
        "127": {
          start: {
            line: 285,
            column: 6
          },
          end: {
            line: 285,
            column: 58
          }
        },
        "128": {
          start: {
            line: 288,
            column: 21
          },
          end: {
            line: 288,
            column: 85
          }
        },
        "129": {
          start: {
            line: 289,
            column: 21
          },
          end: {
            line: 289,
            column: 69
          }
        },
        "130": {
          start: {
            line: 291,
            column: 4
          },
          end: {
            line: 296,
            column: 6
          }
        },
        "131": {
          start: {
            line: 292,
            column: 6
          },
          end: {
            line: 295,
            column: 7
          }
        },
        "132": {
          start: {
            line: 298,
            column: 4
          },
          end: {
            line: 298,
            column: 17
          }
        },
        "133": {
          start: {
            line: 302,
            column: 19
          },
          end: {
            line: 302,
            column: 55
          }
        },
        "134": {
          start: {
            line: 304,
            column: 4
          },
          end: {
            line: 308,
            column: 5
          }
        },
        "135": {
          start: {
            line: 305,
            column: 6
          },
          end: {
            line: 307,
            column: 38
          }
        },
        "136": {
          start: {
            line: 313,
            column: 21
          },
          end: {
            line: 313,
            column: 57
          }
        },
        "137": {
          start: {
            line: 314,
            column: 4
          },
          end: {
            line: 314,
            column: 61
          }
        },
        "138": {
          start: {
            line: 318,
            column: 4
          },
          end: {
            line: 343,
            column: 6
          }
        },
        "139": {
          start: {
            line: 319,
            column: 23
          },
          end: {
            line: 319,
            column: 30
          }
        },
        "140": {
          start: {
            line: 320,
            column: 17
          },
          end: {
            line: 320,
            column: 40
          }
        },
        "141": {
          start: {
            line: 321,
            column: 22
          },
          end: {
            line: 325,
            column: 7
          }
        },
        "142": {
          start: {
            line: 327,
            column: 6
          },
          end: {
            line: 329,
            column: 7
          }
        },
        "143": {
          start: {
            line: 328,
            column: 8
          },
          end: {
            line: 328,
            column: 30
          }
        },
        "144": {
          start: {
            line: 331,
            column: 6
          },
          end: {
            line: 334,
            column: 7
          }
        },
        "145": {
          start: {
            line: 332,
            column: 8
          },
          end: {
            line: 332,
            column: 42
          }
        },
        "146": {
          start: {
            line: 333,
            column: 8
          },
          end: {
            line: 333,
            column: 37
          }
        },
        "147": {
          start: {
            line: 336,
            column: 6
          },
          end: {
            line: 342,
            column: 7
          }
        },
        "148": {
          start: {
            line: 337,
            column: 8
          },
          end: {
            line: 339,
            column: 9
          }
        },
        "149": {
          start: {
            line: 338,
            column: 10
          },
          end: {
            line: 338,
            column: 60
          }
        },
        "150": {
          start: {
            line: 341,
            column: 8
          },
          end: {
            line: 341,
            column: 22
          }
        },
        "151": {
          start: {
            line: 351,
            column: 0
          },
          end: {
            line: 367,
            column: 2
          }
        },
        "152": {
          start: {
            line: 353,
            column: 2
          },
          end: {
            line: 355,
            column: 3
          }
        },
        "153": {
          start: {
            line: 354,
            column: 4
          },
          end: {
            line: 354,
            column: 26
          }
        },
        "154": {
          start: {
            line: 357,
            column: 19
          },
          end: {
            line: 357,
            column: 26
          }
        },
        "155": {
          start: {
            line: 358,
            column: 19
          },
          end: {
            line: 358,
            column: 52
          }
        },
        "156": {
          start: {
            line: 359,
            column: 20
          },
          end: {
            line: 359,
            column: 70
          }
        },
        "157": {
          start: {
            line: 361,
            column: 2
          },
          end: {
            line: 366,
            column: 4
          }
        },
        "158": {
          start: {
            line: 362,
            column: 20
          },
          end: {
            line: 362,
            column: 27
          }
        },
        "159": {
          start: {
            line: 363,
            column: 17
          },
          end: {
            line: 363,
            column: 39
          }
        },
        "160": {
          start: {
            line: 364,
            column: 19
          },
          end: {
            line: 364,
            column: 52
          }
        },
        "161": {
          start: {
            line: 365,
            column: 4
          },
          end: {
            line: 365,
            column: 51
          }
        },
        "162": {
          start: {
            line: 373,
            column: 0
          },
          end: {
            line: 373,
            column: 38
          }
        },
        "163": {
          start: {
            line: 374,
            column: 0
          },
          end: {
            line: 374,
            column: 33
          }
        },
        "164": {
          start: {
            line: 375,
            column: 0
          },
          end: {
            line: 378,
            column: 1
          }
        },
        "165": {
          start: {
            line: 376,
            column: 2
          },
          end: {
            line: 376,
            column: 33
          }
        },
        "166": {
          start: {
            line: 377,
            column: 2
          },
          end: {
            line: 377,
            column: 34
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
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
              column: 31
            },
            end: {
              line: 85,
              column: 3
            }
          },
          line: 54
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 68,
              column: 16
            },
            end: {
              line: 68,
              column: 17
            }
          },
          loc: {
            start: {
              line: 68,
              column: 29
            },
            end: {
              line: 68,
              column: 50
            }
          },
          line: 68
        },
        "2": {
          name: "(anonymous_2)",
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
              column: 23
            },
            end: {
              line: 90,
              column: 3
            }
          },
          line: 88
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 92,
              column: 2
            },
            end: {
              line: 92,
              column: 3
            }
          },
          loc: {
            start: {
              line: 92,
              column: 23
            },
            end: {
              line: 94,
              column: 3
            }
          },
          line: 92
        },
        "4": {
          name: "(anonymous_4)",
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
              column: 11
            },
            end: {
              line: 103,
              column: 3
            }
          },
          line: 97
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 105,
              column: 2
            },
            end: {
              line: 105,
              column: 3
            }
          },
          loc: {
            start: {
              line: 105,
              column: 9
            },
            end: {
              line: 186,
              column: 3
            }
          },
          line: 105
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 116,
              column: 16
            },
            end: {
              line: 116,
              column: 17
            }
          },
          loc: {
            start: {
              line: 116,
              column: 24
            },
            end: {
              line: 122,
              column: 9
            }
          },
          line: 116
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 165,
              column: 21
            },
            end: {
              line: 165,
              column: 22
            }
          },
          loc: {
            start: {
              line: 165,
              column: 27
            },
            end: {
              line: 175,
              column: 5
            }
          },
          line: 165
        },
        "8": {
          name: "(anonymous_8)",
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
              column: 9
            },
            end: {
              line: 242,
              column: 3
            }
          },
          line: 188
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 228,
              column: 21
            },
            end: {
              line: 228,
              column: 22
            }
          },
          loc: {
            start: {
              line: 228,
              column: 27
            },
            end: {
              line: 234,
              column: 5
            }
          },
          line: 228
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 244,
              column: 2
            },
            end: {
              line: 244,
              column: 3
            }
          },
          loc: {
            start: {
              line: 244,
              column: 36
            },
            end: {
              line: 246,
              column: 3
            }
          },
          line: 244
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 248,
              column: 2
            },
            end: {
              line: 248,
              column: 3
            }
          },
          loc: {
            start: {
              line: 248,
              column: 12
            },
            end: {
              line: 256,
              column: 3
            }
          },
          line: 248
        },
        "12": {
          name: "(anonymous_12)",
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
              column: 21
            },
            end: {
              line: 267,
              column: 3
            }
          },
          line: 259
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 269,
              column: 2
            },
            end: {
              line: 269,
              column: 3
            }
          },
          loc: {
            start: {
              line: 269,
              column: 18
            },
            end: {
              line: 272,
              column: 3
            }
          },
          line: 269
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 274,
              column: 2
            },
            end: {
              line: 274,
              column: 3
            }
          },
          loc: {
            start: {
              line: 274,
              column: 15
            },
            end: {
              line: 299,
              column: 3
            }
          },
          line: 274
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 291,
              column: 21
            },
            end: {
              line: 291,
              column: 22
            }
          },
          loc: {
            start: {
              line: 291,
              column: 37
            },
            end: {
              line: 296,
              column: 5
            }
          },
          line: 291
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 301,
              column: 2
            },
            end: {
              line: 301,
              column: 3
            }
          },
          loc: {
            start: {
              line: 301,
              column: 51
            },
            end: {
              line: 309,
              column: 3
            }
          },
          line: 301
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 312,
              column: 2
            },
            end: {
              line: 312,
              column: 3
            }
          },
          loc: {
            start: {
              line: 312,
              column: 40
            },
            end: {
              line: 315,
              column: 3
            }
          },
          line: 312
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 317,
              column: 2
            },
            end: {
              line: 317,
              column: 3
            }
          },
          loc: {
            start: {
              line: 317,
              column: 34
            },
            end: {
              line: 344,
              column: 3
            }
          },
          line: 317
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 318,
              column: 21
            },
            end: {
              line: 318,
              column: 22
            }
          },
          loc: {
            start: {
              line: 318,
              column: 33
            },
            end: {
              line: 343,
              column: 5
            }
          },
          line: 318
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 351,
              column: 59
            },
            end: {
              line: 351,
              column: 60
            }
          },
          loc: {
            start: {
              line: 351,
              column: 76
            },
            end: {
              line: 367,
              column: 1
            }
          },
          line: 351
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 361,
              column: 20
            },
            end: {
              line: 361,
              column: 21
            }
          },
          loc: {
            start: {
              line: 361,
              column: 32
            },
            end: {
              line: 366,
              column: 3
            }
          },
          line: 361
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 375,
              column: 24
            },
            end: {
              line: 375,
              column: 25
            }
          },
          loc: {
            start: {
              line: 375,
              column: 30
            },
            end: {
              line: 378,
              column: 1
            }
          },
          line: 375
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 70,
              column: 6
            },
            end: {
              line: 73,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 70,
              column: 6
            },
            end: {
              line: 73,
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
          line: 70
        },
        "1": {
          loc: {
            start: {
              line: 70,
              column: 10
            },
            end: {
              line: 70,
              column: 55
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 70,
              column: 10
            },
            end: {
              line: 70,
              column: 27
            }
          }, {
            start: {
              line: 70,
              column: 31
            },
            end: {
              line: 70,
              column: 55
            }
          }],
          line: 70
        },
        "2": {
          loc: {
            start: {
              line: 76,
              column: 19
            },
            end: {
              line: 76,
              column: 65
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 76,
              column: 41
            },
            end: {
              line: 76,
              column: 58
            }
          }, {
            start: {
              line: 76,
              column: 61
            },
            end: {
              line: 76,
              column: 65
            }
          }],
          line: 76
        },
        "3": {
          loc: {
            start: {
              line: 78,
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
              line: 78,
              column: 4
            },
            end: {
              line: 80,
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
          line: 78
        },
        "4": {
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
        "5": {
          loc: {
            start: {
              line: 98,
              column: 4
            },
            end: {
              line: 102,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 98,
              column: 4
            },
            end: {
              line: 102,
              column: 5
            }
          }, {
            start: {
              line: 100,
              column: 11
            },
            end: {
              line: 102,
              column: 5
            }
          }],
          line: 98
        },
        "6": {
          loc: {
            start: {
              line: 106,
              column: 4
            },
            end: {
              line: 109,
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
              line: 109,
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
        "7": {
          loc: {
            start: {
              line: 106,
              column: 8
            },
            end: {
              line: 107,
              column: 48
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
              column: 29
            }
          }, {
            start: {
              line: 107,
              column: 6
            },
            end: {
              line: 107,
              column: 48
            }
          }],
          line: 106
        },
        "8": {
          loc: {
            start: {
              line: 114,
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
              line: 114,
              column: 4
            },
            end: {
              line: 127,
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
        "9": {
          loc: {
            start: {
              line: 117,
              column: 10
            },
            end: {
              line: 119,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 117,
              column: 10
            },
            end: {
              line: 119,
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
          line: 117
        },
        "10": {
          loc: {
            start: {
              line: 124,
              column: 6
            },
            end: {
              line: 126,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 124,
              column: 6
            },
            end: {
              line: 126,
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
          line: 124
        },
        "11": {
          loc: {
            start: {
              line: 129,
              column: 4
            },
            end: {
              line: 134,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 129,
              column: 4
            },
            end: {
              line: 134,
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
          line: 129
        },
        "12": {
          loc: {
            start: {
              line: 131,
              column: 6
            },
            end: {
              line: 133,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 131,
              column: 6
            },
            end: {
              line: 133,
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
          line: 131
        },
        "13": {
          loc: {
            start: {
              line: 131,
              column: 10
            },
            end: {
              line: 131,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 131,
              column: 10
            },
            end: {
              line: 131,
              column: 21
            }
          }, {
            start: {
              line: 131,
              column: 25
            },
            end: {
              line: 131,
              column: 53
            }
          }],
          line: 131
        },
        "14": {
          loc: {
            start: {
              line: 138,
              column: 4
            },
            end: {
              line: 140,
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
              line: 140,
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
          line: 138
        },
        "15": {
          loc: {
            start: {
              line: 142,
              column: 4
            },
            end: {
              line: 147,
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
              line: 147,
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
          line: 142
        },
        "16": {
          loc: {
            start: {
              line: 144,
              column: 6
            },
            end: {
              line: 146,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 144,
              column: 6
            },
            end: {
              line: 146,
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
          line: 144
        },
        "17": {
          loc: {
            start: {
              line: 157,
              column: 4
            },
            end: {
              line: 161,
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
              line: 161,
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
        "18": {
          loc: {
            start: {
              line: 189,
              column: 4
            },
            end: {
              line: 192,
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
              line: 192,
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
        "19": {
          loc: {
            start: {
              line: 189,
              column: 8
            },
            end: {
              line: 190,
              column: 49
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
              column: 29
            }
          }, {
            start: {
              line: 190,
              column: 6
            },
            end: {
              line: 190,
              column: 49
            }
          }],
          line: 189
        },
        "20": {
          loc: {
            start: {
              line: 196,
              column: 4
            },
            end: {
              line: 198,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 196,
              column: 4
            },
            end: {
              line: 198,
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
          line: 196
        },
        "21": {
          loc: {
            start: {
              line: 211,
              column: 4
            },
            end: {
              line: 224,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 211,
              column: 4
            },
            end: {
              line: 224,
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
          line: 211
        },
        "22": {
          loc: {
            start: {
              line: 216,
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
              line: 216,
              column: 8
            },
            end: {
              line: 222,
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
          line: 216
        },
        "23": {
          loc: {
            start: {
              line: 218,
              column: 10
            },
            end: {
              line: 221,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 218,
              column: 10
            },
            end: {
              line: 221,
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
          line: 218
        },
        "24": {
          loc: {
            start: {
              line: 271,
              column: 11
            },
            end: {
              line: 271,
              column: 56
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 271,
              column: 22
            },
            end: {
              line: 271,
              column: 37
            }
          }, {
            start: {
              line: 271,
              column: 40
            },
            end: {
              line: 271,
              column: 56
            }
          }],
          line: 271
        },
        "25": {
          loc: {
            start: {
              line: 277,
              column: 4
            },
            end: {
              line: 286,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 277,
              column: 4
            },
            end: {
              line: 286,
              column: 5
            }
          }, {
            start: {
              line: 284,
              column: 11
            },
            end: {
              line: 286,
              column: 5
            }
          }],
          line: 277
        },
        "26": {
          loc: {
            start: {
              line: 281,
              column: 6
            },
            end: {
              line: 283,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 281,
              column: 6
            },
            end: {
              line: 283,
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
          line: 281
        },
        "27": {
          loc: {
            start: {
              line: 304,
              column: 4
            },
            end: {
              line: 308,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 304,
              column: 4
            },
            end: {
              line: 308,
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
          line: 304
        },
        "28": {
          loc: {
            start: {
              line: 314,
              column: 11
            },
            end: {
              line: 314,
              column: 61
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 314,
              column: 22
            },
            end: {
              line: 314,
              column: 54
            }
          }, {
            start: {
              line: 314,
              column: 57
            },
            end: {
              line: 314,
              column: 61
            }
          }],
          line: 314
        },
        "29": {
          loc: {
            start: {
              line: 324,
              column: 12
            },
            end: {
              line: 324,
              column: 62
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 324,
              column: 51
            },
            end: {
              line: 324,
              column: 57
            }
          }, {
            start: {
              line: 324,
              column: 60
            },
            end: {
              line: 324,
              column: 62
            }
          }],
          line: 324
        },
        "30": {
          loc: {
            start: {
              line: 324,
              column: 12
            },
            end: {
              line: 324,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 324,
              column: 12
            },
            end: {
              line: 324,
              column: 38
            }
          }, {
            start: {
              line: 324,
              column: 42
            },
            end: {
              line: 324,
              column: 48
            }
          }],
          line: 324
        },
        "31": {
          loc: {
            start: {
              line: 327,
              column: 6
            },
            end: {
              line: 329,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 327,
              column: 6
            },
            end: {
              line: 329,
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
          line: 327
        },
        "32": {
          loc: {
            start: {
              line: 327,
              column: 10
            },
            end: {
              line: 327,
              column: 91
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 327,
              column: 10
            },
            end: {
              line: 327,
              column: 15
            }
          }, {
            start: {
              line: 327,
              column: 19
            },
            end: {
              line: 327,
              column: 33
            }
          }, {
            start: {
              line: 327,
              column: 37
            },
            end: {
              line: 327,
              column: 63
            }
          }, {
            start: {
              line: 327,
              column: 67
            },
            end: {
              line: 327,
              column: 91
            }
          }],
          line: 327
        },
        "33": {
          loc: {
            start: {
              line: 331,
              column: 6
            },
            end: {
              line: 334,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 331,
              column: 6
            },
            end: {
              line: 334,
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
          line: 331
        },
        "34": {
          loc: {
            start: {
              line: 336,
              column: 6
            },
            end: {
              line: 342,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 336,
              column: 6
            },
            end: {
              line: 342,
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
          line: 336
        },
        "35": {
          loc: {
            start: {
              line: 337,
              column: 8
            },
            end: {
              line: 339,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 337,
              column: 8
            },
            end: {
              line: 339,
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
          line: 337
        },
        "36": {
          loc: {
            start: {
              line: 353,
              column: 2
            },
            end: {
              line: 355,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 353,
              column: 2
            },
            end: {
              line: 355,
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
          line: 353
        },
        "37": {
          loc: {
            start: {
              line: 364,
              column: 19
            },
            end: {
              line: 364,
              column: 52
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 364,
              column: 26
            },
            end: {
              line: 364,
              column: 34
            }
          }, {
            start: {
              line: 364,
              column: 37
            },
            end: {
              line: 364,
              column: 52
            }
          }],
          line: 364
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
        "133": 0,
        "134": 0,
        "135": 0,
        "136": 0,
        "137": 0,
        "138": 0,
        "139": 0,
        "140": 0,
        "141": 0,
        "142": 0,
        "143": 0,
        "144": 0,
        "145": 0,
        "146": 0,
        "147": 0,
        "148": 0,
        "149": 0,
        "150": 0,
        "151": 0,
        "152": 0,
        "153": 0,
        "154": 0,
        "155": 0,
        "156": 0,
        "157": 0,
        "158": 0,
        "159": 0,
        "160": 0,
        "161": 0,
        "162": 0,
        "163": 0,
        "164": 0,
        "165": 0,
        "166": 0
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
        "20": [0, 0],
        "21": [0, 0],
        "22": [0, 0],
        "23": [0, 0],
        "24": [0, 0],
        "25": [0, 0],
        "26": [0, 0],
        "27": [0, 0],
        "28": [0, 0],
        "29": [0, 0],
        "30": [0, 0],
        "31": [0, 0],
        "32": [0, 0, 0, 0],
        "33": [0, 0],
        "34": [0, 0],
        "35": [0, 0],
        "36": [0, 0],
        "37": [0, 0]
      },
      _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
      hash: "d03f7a36e2b2e7468593e204cb411d8a682ab442"
    };
    var coverage = global[gcv] || (global[gcv] = {});
    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }
    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_c61spwi8m = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }
  cov_c61spwi8m();

  /**
   * Constants
   */

  var NAME = (cov_c61spwi8m().s[0]++, 'collapse');
  var VERSION = (cov_c61spwi8m().s[1]++, '4.6.2');
  var DATA_KEY = (cov_c61spwi8m().s[2]++, 'bs.collapse');
  var EVENT_KEY = (cov_c61spwi8m().s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_c61spwi8m().s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_c61spwi8m().s[5]++, $__default["default"].fn[NAME]);
  var CLASS_NAME_SHOW = (cov_c61spwi8m().s[6]++, 'show');
  var CLASS_NAME_COLLAPSE = (cov_c61spwi8m().s[7]++, 'collapse');
  var CLASS_NAME_COLLAPSING = (cov_c61spwi8m().s[8]++, 'collapsing');
  var CLASS_NAME_COLLAPSED = (cov_c61spwi8m().s[9]++, 'collapsed');
  var DIMENSION_WIDTH = (cov_c61spwi8m().s[10]++, 'width');
  var DIMENSION_HEIGHT = (cov_c61spwi8m().s[11]++, 'height');
  var EVENT_SHOW = (cov_c61spwi8m().s[12]++, "show" + EVENT_KEY);
  var EVENT_SHOWN = (cov_c61spwi8m().s[13]++, "shown" + EVENT_KEY);
  var EVENT_HIDE = (cov_c61spwi8m().s[14]++, "hide" + EVENT_KEY);
  var EVENT_HIDDEN = (cov_c61spwi8m().s[15]++, "hidden" + EVENT_KEY);
  var EVENT_CLICK_DATA_API = (cov_c61spwi8m().s[16]++, "click" + EVENT_KEY + DATA_API_KEY);
  var SELECTOR_ACTIVES = (cov_c61spwi8m().s[17]++, '.show, .collapsing');
  var SELECTOR_DATA_TOGGLE = (cov_c61spwi8m().s[18]++, '[data-toggle="collapse"]');
  var Default = (cov_c61spwi8m().s[19]++, {
    toggle: true,
    parent: ''
  });
  var DefaultType = (cov_c61spwi8m().s[20]++, {
    toggle: 'boolean',
    parent: '(string|element)'
  });

  /**
   * Class definition
   */
  var Collapse = /*#__PURE__*/function () {
    function Collapse(element, config) {
      cov_c61spwi8m().f[0]++;
      cov_c61spwi8m().s[21]++;
      this._isTransitioning = false;
      cov_c61spwi8m().s[22]++;
      this._element = element;
      cov_c61spwi8m().s[23]++;
      this._config = this._getConfig(config);
      cov_c61spwi8m().s[24]++;
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = (cov_c61spwi8m().s[25]++, [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE)));
      cov_c61spwi8m().s[26]++;
      for (var i = (cov_c61spwi8m().s[27]++, 0), len = (cov_c61spwi8m().s[28]++, toggleList.length); i < len; i++) {
        var elem = (cov_c61spwi8m().s[29]++, toggleList[i]);
        var selector = (cov_c61spwi8m().s[30]++, Util__default["default"].getSelectorFromElement(elem));
        var filterElement = (cov_c61spwi8m().s[31]++, [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          cov_c61spwi8m().f[1]++;
          cov_c61spwi8m().s[32]++;
          return foundElem === element;
        }));
        cov_c61spwi8m().s[33]++;
        if ((cov_c61spwi8m().b[1][0]++, selector !== null) && (cov_c61spwi8m().b[1][1]++, filterElement.length > 0)) {
          cov_c61spwi8m().b[0][0]++;
          cov_c61spwi8m().s[34]++;
          this._selector = selector;
          cov_c61spwi8m().s[35]++;
          this._triggerArray.push(elem);
        } else {
          cov_c61spwi8m().b[0][1]++;
        }
      }
      cov_c61spwi8m().s[36]++;
      this._parent = this._config.parent ? (cov_c61spwi8m().b[2][0]++, this._getParent()) : (cov_c61spwi8m().b[2][1]++, null);
      cov_c61spwi8m().s[37]++;
      if (!this._config.parent) {
        cov_c61spwi8m().b[3][0]++;
        cov_c61spwi8m().s[38]++;
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      } else {
        cov_c61spwi8m().b[3][1]++;
      }
      cov_c61spwi8m().s[39]++;
      if (this._config.toggle) {
        cov_c61spwi8m().b[4][0]++;
        cov_c61spwi8m().s[40]++;
        this.toggle();
      } else {
        cov_c61spwi8m().b[4][1]++;
      }
    }

    // Getters
    var _proto = Collapse.prototype;
    // Public
    _proto.toggle = function toggle() {
      cov_c61spwi8m().f[4]++;
      cov_c61spwi8m().s[43]++;
      if ($__default["default"](this._element).hasClass(CLASS_NAME_SHOW)) {
        cov_c61spwi8m().b[5][0]++;
        cov_c61spwi8m().s[44]++;
        this.hide();
      } else {
        cov_c61spwi8m().b[5][1]++;
        cov_c61spwi8m().s[45]++;
        this.show();
      }
    };
    _proto.show = function show() {
      var _this = this;
      cov_c61spwi8m().f[5]++;
      cov_c61spwi8m().s[46]++;
      if ((cov_c61spwi8m().b[7][0]++, this._isTransitioning) || (cov_c61spwi8m().b[7][1]++, $__default["default"](this._element).hasClass(CLASS_NAME_SHOW))) {
        cov_c61spwi8m().b[6][0]++;
        cov_c61spwi8m().s[47]++;
        return;
      } else {
        cov_c61spwi8m().b[6][1]++;
      }
      var actives;
      var activesData;
      cov_c61spwi8m().s[48]++;
      if (this._parent) {
        cov_c61spwi8m().b[8][0]++;
        cov_c61spwi8m().s[49]++;
        actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
          cov_c61spwi8m().f[6]++;
          cov_c61spwi8m().s[50]++;
          if (typeof _this._config.parent === 'string') {
            cov_c61spwi8m().b[9][0]++;
            cov_c61spwi8m().s[51]++;
            return elem.getAttribute('data-parent') === _this._config.parent;
          } else {
            cov_c61spwi8m().b[9][1]++;
          }
          cov_c61spwi8m().s[52]++;
          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });
        cov_c61spwi8m().s[53]++;
        if (actives.length === 0) {
          cov_c61spwi8m().b[10][0]++;
          cov_c61spwi8m().s[54]++;
          actives = null;
        } else {
          cov_c61spwi8m().b[10][1]++;
        }
      } else {
        cov_c61spwi8m().b[8][1]++;
      }
      cov_c61spwi8m().s[55]++;
      if (actives) {
        cov_c61spwi8m().b[11][0]++;
        cov_c61spwi8m().s[56]++;
        activesData = $__default["default"](actives).not(this._selector).data(DATA_KEY);
        cov_c61spwi8m().s[57]++;
        if ((cov_c61spwi8m().b[13][0]++, activesData) && (cov_c61spwi8m().b[13][1]++, activesData._isTransitioning)) {
          cov_c61spwi8m().b[12][0]++;
          cov_c61spwi8m().s[58]++;
          return;
        } else {
          cov_c61spwi8m().b[12][1]++;
        }
      } else {
        cov_c61spwi8m().b[11][1]++;
      }
      var startEvent = (cov_c61spwi8m().s[59]++, $__default["default"].Event(EVENT_SHOW));
      cov_c61spwi8m().s[60]++;
      $__default["default"](this._element).trigger(startEvent);
      cov_c61spwi8m().s[61]++;
      if (startEvent.isDefaultPrevented()) {
        cov_c61spwi8m().b[14][0]++;
        cov_c61spwi8m().s[62]++;
        return;
      } else {
        cov_c61spwi8m().b[14][1]++;
      }
      cov_c61spwi8m().s[63]++;
      if (actives) {
        cov_c61spwi8m().b[15][0]++;
        cov_c61spwi8m().s[64]++;
        Collapse._jQueryInterface.call($__default["default"](actives).not(this._selector), 'hide');
        cov_c61spwi8m().s[65]++;
        if (!activesData) {
          cov_c61spwi8m().b[16][0]++;
          cov_c61spwi8m().s[66]++;
          $__default["default"](actives).data(DATA_KEY, null);
        } else {
          cov_c61spwi8m().b[16][1]++;
        }
      } else {
        cov_c61spwi8m().b[15][1]++;
      }
      var dimension = (cov_c61spwi8m().s[67]++, this._getDimension());
      cov_c61spwi8m().s[68]++;
      $__default["default"](this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
      cov_c61spwi8m().s[69]++;
      this._element.style[dimension] = 0;
      cov_c61spwi8m().s[70]++;
      if (this._triggerArray.length) {
        cov_c61spwi8m().b[17][0]++;
        cov_c61spwi8m().s[71]++;
        $__default["default"](this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
      } else {
        cov_c61spwi8m().b[17][1]++;
      }
      cov_c61spwi8m().s[72]++;
      this.setTransitioning(true);
      cov_c61spwi8m().s[73]++;
      var complete = function complete() {
        cov_c61spwi8m().f[7]++;
        cov_c61spwi8m().s[74]++;
        $__default["default"](_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW);
        cov_c61spwi8m().s[75]++;
        _this._element.style[dimension] = '';
        cov_c61spwi8m().s[76]++;
        _this.setTransitioning(false);
        cov_c61spwi8m().s[77]++;
        $__default["default"](_this._element).trigger(EVENT_SHOWN);
      };
      var capitalizedDimension = (cov_c61spwi8m().s[78]++, dimension[0].toUpperCase() + dimension.slice(1));
      var scrollSize = (cov_c61spwi8m().s[79]++, "scroll" + capitalizedDimension);
      var transitionDuration = (cov_c61spwi8m().s[80]++, Util__default["default"].getTransitionDurationFromElement(this._element));
      cov_c61spwi8m().s[81]++;
      $__default["default"](this._element).one(Util__default["default"].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      cov_c61spwi8m().s[82]++;
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };
    _proto.hide = function hide() {
      var _this2 = this;
      cov_c61spwi8m().f[8]++;
      cov_c61spwi8m().s[83]++;
      if ((cov_c61spwi8m().b[19][0]++, this._isTransitioning) || (cov_c61spwi8m().b[19][1]++, !$__default["default"](this._element).hasClass(CLASS_NAME_SHOW))) {
        cov_c61spwi8m().b[18][0]++;
        cov_c61spwi8m().s[84]++;
        return;
      } else {
        cov_c61spwi8m().b[18][1]++;
      }
      var startEvent = (cov_c61spwi8m().s[85]++, $__default["default"].Event(EVENT_HIDE));
      cov_c61spwi8m().s[86]++;
      $__default["default"](this._element).trigger(startEvent);
      cov_c61spwi8m().s[87]++;
      if (startEvent.isDefaultPrevented()) {
        cov_c61spwi8m().b[20][0]++;
        cov_c61spwi8m().s[88]++;
        return;
      } else {
        cov_c61spwi8m().b[20][1]++;
      }
      var dimension = (cov_c61spwi8m().s[89]++, this._getDimension());
      cov_c61spwi8m().s[90]++;
      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      cov_c61spwi8m().s[91]++;
      Util__default["default"].reflow(this._element);
      cov_c61spwi8m().s[92]++;
      $__default["default"](this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW);
      var triggerArrayLength = (cov_c61spwi8m().s[93]++, this._triggerArray.length);
      cov_c61spwi8m().s[94]++;
      if (triggerArrayLength > 0) {
        cov_c61spwi8m().b[21][0]++;
        cov_c61spwi8m().s[95]++;
        for (var i = (cov_c61spwi8m().s[96]++, 0); i < triggerArrayLength; i++) {
          var trigger = (cov_c61spwi8m().s[97]++, this._triggerArray[i]);
          var selector = (cov_c61spwi8m().s[98]++, Util__default["default"].getSelectorFromElement(trigger));
          cov_c61spwi8m().s[99]++;
          if (selector !== null) {
            cov_c61spwi8m().b[22][0]++;
            var $elem = (cov_c61spwi8m().s[100]++, $__default["default"]([].slice.call(document.querySelectorAll(selector))));
            cov_c61spwi8m().s[101]++;
            if (!$elem.hasClass(CLASS_NAME_SHOW)) {
              cov_c61spwi8m().b[23][0]++;
              cov_c61spwi8m().s[102]++;
              $__default["default"](trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
            } else {
              cov_c61spwi8m().b[23][1]++;
            }
          } else {
            cov_c61spwi8m().b[22][1]++;
          }
        }
      } else {
        cov_c61spwi8m().b[21][1]++;
      }
      cov_c61spwi8m().s[103]++;
      this.setTransitioning(true);
      cov_c61spwi8m().s[104]++;
      var complete = function complete() {
        cov_c61spwi8m().f[9]++;
        cov_c61spwi8m().s[105]++;
        _this2.setTransitioning(false);
        cov_c61spwi8m().s[106]++;
        $__default["default"](_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN);
      };
      cov_c61spwi8m().s[107]++;
      this._element.style[dimension] = '';
      var transitionDuration = (cov_c61spwi8m().s[108]++, Util__default["default"].getTransitionDurationFromElement(this._element));
      cov_c61spwi8m().s[109]++;
      $__default["default"](this._element).one(Util__default["default"].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };
    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      cov_c61spwi8m().f[10]++;
      cov_c61spwi8m().s[110]++;
      this._isTransitioning = isTransitioning;
    };
    _proto.dispose = function dispose() {
      cov_c61spwi8m().f[11]++;
      cov_c61spwi8m().s[111]++;
      $__default["default"].removeData(this._element, DATA_KEY);
      cov_c61spwi8m().s[112]++;
      this._config = null;
      cov_c61spwi8m().s[113]++;
      this._parent = null;
      cov_c61spwi8m().s[114]++;
      this._element = null;
      cov_c61spwi8m().s[115]++;
      this._triggerArray = null;
      cov_c61spwi8m().s[116]++;
      this._isTransitioning = null;
    }

    // Private
    ;
    _proto._getConfig = function _getConfig(config) {
      cov_c61spwi8m().f[12]++;
      cov_c61spwi8m().s[117]++;
      config = _extends({}, Default, config);
      cov_c61spwi8m().s[118]++;
      config.toggle = Boolean(config.toggle); // Coerce string values
      cov_c61spwi8m().s[119]++;
      Util__default["default"].typeCheckConfig(NAME, config, DefaultType);
      cov_c61spwi8m().s[120]++;
      return config;
    };
    _proto._getDimension = function _getDimension() {
      cov_c61spwi8m().f[13]++;
      var hasWidth = (cov_c61spwi8m().s[121]++, $__default["default"](this._element).hasClass(DIMENSION_WIDTH));
      cov_c61spwi8m().s[122]++;
      return hasWidth ? (cov_c61spwi8m().b[24][0]++, DIMENSION_WIDTH) : (cov_c61spwi8m().b[24][1]++, DIMENSION_HEIGHT);
    };
    _proto._getParent = function _getParent() {
      var _this3 = this;
      cov_c61spwi8m().f[14]++;
      var parent;
      cov_c61spwi8m().s[123]++;
      if (Util__default["default"].isElement(this._config.parent)) {
        cov_c61spwi8m().b[25][0]++;
        cov_c61spwi8m().s[124]++;
        parent = this._config.parent;

        // It's a jQuery object
        cov_c61spwi8m().s[125]++;
        if (typeof this._config.parent.jquery !== 'undefined') {
          cov_c61spwi8m().b[26][0]++;
          cov_c61spwi8m().s[126]++;
          parent = this._config.parent[0];
        } else {
          cov_c61spwi8m().b[26][1]++;
        }
      } else {
        cov_c61spwi8m().b[25][1]++;
        cov_c61spwi8m().s[127]++;
        parent = document.querySelector(this._config.parent);
      }
      var selector = (cov_c61spwi8m().s[128]++, "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]");
      var children = (cov_c61spwi8m().s[129]++, [].slice.call(parent.querySelectorAll(selector)));
      cov_c61spwi8m().s[130]++;
      $__default["default"](children).each(function (i, element) {
        cov_c61spwi8m().f[15]++;
        cov_c61spwi8m().s[131]++;
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      cov_c61spwi8m().s[132]++;
      return parent;
    };
    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      cov_c61spwi8m().f[16]++;
      var isOpen = (cov_c61spwi8m().s[133]++, $__default["default"](element).hasClass(CLASS_NAME_SHOW));
      cov_c61spwi8m().s[134]++;
      if (triggerArray.length) {
        cov_c61spwi8m().b[27][0]++;
        cov_c61spwi8m().s[135]++;
        $__default["default"](triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      } else {
        cov_c61spwi8m().b[27][1]++;
      }
    }

    // Static
    ;
    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      cov_c61spwi8m().f[17]++;
      var selector = (cov_c61spwi8m().s[136]++, Util__default["default"].getSelectorFromElement(element));
      cov_c61spwi8m().s[137]++;
      return selector ? (cov_c61spwi8m().b[28][0]++, document.querySelector(selector)) : (cov_c61spwi8m().b[28][1]++, null);
    };
    Collapse._jQueryInterface = function _jQueryInterface(config) {
      cov_c61spwi8m().f[18]++;
      cov_c61spwi8m().s[138]++;
      return this.each(function () {
        cov_c61spwi8m().f[19]++;
        var $element = (cov_c61spwi8m().s[139]++, $__default["default"](this));
        var data = (cov_c61spwi8m().s[140]++, $element.data(DATA_KEY));
        var _config = (cov_c61spwi8m().s[141]++, _extends({}, Default, $element.data(), (cov_c61spwi8m().b[30][0]++, typeof config === 'object') && (cov_c61spwi8m().b[30][1]++, config) ? (cov_c61spwi8m().b[29][0]++, config) : (cov_c61spwi8m().b[29][1]++, {})));
        cov_c61spwi8m().s[142]++;
        if ((cov_c61spwi8m().b[32][0]++, !data) && (cov_c61spwi8m().b[32][1]++, _config.toggle) && (cov_c61spwi8m().b[32][2]++, typeof config === 'string') && (cov_c61spwi8m().b[32][3]++, /show|hide/.test(config))) {
          cov_c61spwi8m().b[31][0]++;
          cov_c61spwi8m().s[143]++;
          _config.toggle = false;
        } else {
          cov_c61spwi8m().b[31][1]++;
        }
        cov_c61spwi8m().s[144]++;
        if (!data) {
          cov_c61spwi8m().b[33][0]++;
          cov_c61spwi8m().s[145]++;
          data = new Collapse(this, _config);
          cov_c61spwi8m().s[146]++;
          $element.data(DATA_KEY, data);
        } else {
          cov_c61spwi8m().b[33][1]++;
        }
        cov_c61spwi8m().s[147]++;
        if (typeof config === 'string') {
          cov_c61spwi8m().b[34][0]++;
          cov_c61spwi8m().s[148]++;
          if (typeof data[config] === 'undefined') {
            cov_c61spwi8m().b[35][0]++;
            cov_c61spwi8m().s[149]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_c61spwi8m().b[35][1]++;
          }
          cov_c61spwi8m().s[150]++;
          data[config]();
        } else {
          cov_c61spwi8m().b[34][1]++;
        }
      });
    };
    return _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        cov_c61spwi8m().f[2]++;
        cov_c61spwi8m().s[41]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_c61spwi8m().f[3]++;
        cov_c61spwi8m().s[42]++;
        return Default;
      }
    }]);
  }();
  /**
   * Data API implementation
   */
  cov_c61spwi8m().s[151]++;
  $__default["default"](document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    cov_c61spwi8m().f[20]++;
    cov_c61spwi8m().s[152]++;
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      cov_c61spwi8m().b[36][0]++;
      cov_c61spwi8m().s[153]++;
      event.preventDefault();
    } else {
      cov_c61spwi8m().b[36][1]++;
    }
    var $trigger = (cov_c61spwi8m().s[154]++, $__default["default"](this));
    var selector = (cov_c61spwi8m().s[155]++, Util__default["default"].getSelectorFromElement(this));
    var selectors = (cov_c61spwi8m().s[156]++, [].slice.call(document.querySelectorAll(selector)));
    cov_c61spwi8m().s[157]++;
    $__default["default"](selectors).each(function () {
      cov_c61spwi8m().f[21]++;
      var $target = (cov_c61spwi8m().s[158]++, $__default["default"](this));
      var data = (cov_c61spwi8m().s[159]++, $target.data(DATA_KEY));
      var config = (cov_c61spwi8m().s[160]++, data ? (cov_c61spwi8m().b[37][0]++, 'toggle') : (cov_c61spwi8m().b[37][1]++, $trigger.data()));
      cov_c61spwi8m().s[161]++;
      Collapse._jQueryInterface.call($target, config);
    });
  });

  /**
   * jQuery
   */
  cov_c61spwi8m().s[162]++;
  $__default["default"].fn[NAME] = Collapse._jQueryInterface;
  cov_c61spwi8m().s[163]++;
  $__default["default"].fn[NAME].Constructor = Collapse;
  cov_c61spwi8m().s[164]++;
  $__default["default"].fn[NAME].noConflict = function () {
    cov_c61spwi8m().f[22]++;
    cov_c61spwi8m().s[165]++;
    $__default["default"].fn[NAME] = JQUERY_NO_CONFLICT;
    cov_c61spwi8m().s[166]++;
    return Collapse._jQueryInterface;
  };

  return Collapse;

}));
//# sourceMappingURL=collapse.js.map

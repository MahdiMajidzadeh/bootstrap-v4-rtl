/*!
  * Bootstrap carousel.js v4.6.2-1 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2022 https://github.com/MahdiMajidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Carousel = factory(global.jQuery, global.Util));
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

  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
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

  function cov_2rrfhvy759() {
    var path = "C:\\Users\\mmajidzade\\Documents\\GitHub\\bootstrap-v4-rtl\\js\\src\\carousel.js";
    var hash = "252ac1ebfee4b8e85947ee09186b314d0d248eca";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "C:\\Users\\mmajidzade\\Documents\\GitHub\\bootstrap-v4-rtl\\js\\src\\carousel.js",
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
            line: 21,
            column: 27
          },
          end: {
            line: 21,
            column: 29
          }
        },
        "7": {
          start: {
            line: 22,
            column: 28
          },
          end: {
            line: 22,
            column: 30
          }
        },
        "8": {
          start: {
            line: 23,
            column: 31
          },
          end: {
            line: 23,
            column: 34
          }
        },
        "9": {
          start: {
            line: 24,
            column: 24
          },
          end: {
            line: 24,
            column: 26
          }
        },
        "10": {
          start: {
            line: 26,
            column: 28
          },
          end: {
            line: 26,
            column: 38
          }
        },
        "11": {
          start: {
            line: 27,
            column: 26
          },
          end: {
            line: 27,
            column: 34
          }
        },
        "12": {
          start: {
            line: 28,
            column: 25
          },
          end: {
            line: 28,
            column: 32
          }
        },
        "13": {
          start: {
            line: 29,
            column: 25
          },
          end: {
            line: 29,
            column: 46
          }
        },
        "14": {
          start: {
            line: 30,
            column: 24
          },
          end: {
            line: 30,
            column: 44
          }
        },
        "15": {
          start: {
            line: 31,
            column: 24
          },
          end: {
            line: 31,
            column: 44
          }
        },
        "16": {
          start: {
            line: 32,
            column: 24
          },
          end: {
            line: 32,
            column: 44
          }
        },
        "17": {
          start: {
            line: 33,
            column: 33
          },
          end: {
            line: 33,
            column: 48
          }
        },
        "18": {
          start: {
            line: 35,
            column: 23
          },
          end: {
            line: 35,
            column: 29
          }
        },
        "19": {
          start: {
            line: 36,
            column: 23
          },
          end: {
            line: 36,
            column: 29
          }
        },
        "20": {
          start: {
            line: 37,
            column: 23
          },
          end: {
            line: 37,
            column: 29
          }
        },
        "21": {
          start: {
            line: 38,
            column: 24
          },
          end: {
            line: 38,
            column: 31
          }
        },
        "22": {
          start: {
            line: 40,
            column: 20
          },
          end: {
            line: 40,
            column: 39
          }
        },
        "23": {
          start: {
            line: 41,
            column: 19
          },
          end: {
            line: 41,
            column: 37
          }
        },
        "24": {
          start: {
            line: 42,
            column: 22
          },
          end: {
            line: 42,
            column: 43
          }
        },
        "25": {
          start: {
            line: 43,
            column: 25
          },
          end: {
            line: 43,
            column: 49
          }
        },
        "26": {
          start: {
            line: 44,
            column: 25
          },
          end: {
            line: 44,
            column: 49
          }
        },
        "27": {
          start: {
            line: 45,
            column: 25
          },
          end: {
            line: 45,
            column: 49
          }
        },
        "28": {
          start: {
            line: 46,
            column: 24
          },
          end: {
            line: 46,
            column: 47
          }
        },
        "29": {
          start: {
            line: 47,
            column: 23
          },
          end: {
            line: 47,
            column: 45
          }
        },
        "30": {
          start: {
            line: 48,
            column: 26
          },
          end: {
            line: 48,
            column: 51
          }
        },
        "31": {
          start: {
            line: 49,
            column: 24
          },
          end: {
            line: 49,
            column: 47
          }
        },
        "32": {
          start: {
            line: 50,
            column: 25
          },
          end: {
            line: 50,
            column: 48
          }
        },
        "33": {
          start: {
            line: 51,
            column: 28
          },
          end: {
            line: 51,
            column: 61
          }
        },
        "34": {
          start: {
            line: 52,
            column: 29
          },
          end: {
            line: 52,
            column: 63
          }
        },
        "35": {
          start: {
            line: 54,
            column: 24
          },
          end: {
            line: 54,
            column: 33
          }
        },
        "36": {
          start: {
            line: 55,
            column: 29
          },
          end: {
            line: 55,
            column: 52
          }
        },
        "37": {
          start: {
            line: 56,
            column: 22
          },
          end: {
            line: 56,
            column: 38
          }
        },
        "38": {
          start: {
            line: 57,
            column: 26
          },
          end: {
            line: 57,
            column: 46
          }
        },
        "39": {
          start: {
            line: 58,
            column: 27
          },
          end: {
            line: 58,
            column: 69
          }
        },
        "40": {
          start: {
            line: 59,
            column: 28
          },
          end: {
            line: 59,
            column: 50
          }
        },
        "41": {
          start: {
            line: 60,
            column: 28
          },
          end: {
            line: 60,
            column: 59
          }
        },
        "42": {
          start: {
            line: 61,
            column: 27
          },
          end: {
            line: 61,
            column: 51
          }
        },
        "43": {
          start: {
            line: 63,
            column: 16
          },
          end: {
            line: 70,
            column: 1
          }
        },
        "44": {
          start: {
            line: 72,
            column: 20
          },
          end: {
            line: 79,
            column: 1
          }
        },
        "45": {
          start: {
            line: 81,
            column: 20
          },
          end: {
            line: 84,
            column: 1
          }
        },
        "46": {
          start: {
            line: 92,
            column: 4
          },
          end: {
            line: 92,
            column: 22
          }
        },
        "47": {
          start: {
            line: 93,
            column: 4
          },
          end: {
            line: 93,
            column: 25
          }
        },
        "48": {
          start: {
            line: 94,
            column: 4
          },
          end: {
            line: 94,
            column: 30
          }
        },
        "49": {
          start: {
            line: 95,
            column: 4
          },
          end: {
            line: 95,
            column: 26
          }
        },
        "50": {
          start: {
            line: 96,
            column: 4
          },
          end: {
            line: 96,
            column: 27
          }
        },
        "51": {
          start: {
            line: 97,
            column: 4
          },
          end: {
            line: 97,
            column: 28
          }
        },
        "52": {
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 98,
            column: 24
          }
        },
        "53": {
          start: {
            line: 99,
            column: 4
          },
          end: {
            line: 99,
            column: 24
          }
        },
        "54": {
          start: {
            line: 101,
            column: 4
          },
          end: {
            line: 101,
            column: 42
          }
        },
        "55": {
          start: {
            line: 102,
            column: 4
          },
          end: {
            line: 102,
            column: 27
          }
        },
        "56": {
          start: {
            line: 103,
            column: 4
          },
          end: {
            line: 103,
            column: 78
          }
        },
        "57": {
          start: {
            line: 104,
            column: 4
          },
          end: {
            line: 104,
            column: 101
          }
        },
        "58": {
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 105,
            column: 78
          }
        },
        "59": {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 107,
            column: 29
          }
        },
        "60": {
          start: {
            line: 112,
            column: 4
          },
          end: {
            line: 112,
            column: 18
          }
        },
        "61": {
          start: {
            line: 116,
            column: 4
          },
          end: {
            line: 116,
            column: 18
          }
        },
        "62": {
          start: {
            line: 121,
            column: 4
          },
          end: {
            line: 123,
            column: 5
          }
        },
        "63": {
          start: {
            line: 122,
            column: 6
          },
          end: {
            line: 122,
            column: 33
          }
        },
        "64": {
          start: {
            line: 127,
            column: 21
          },
          end: {
            line: 127,
            column: 37
          }
        },
        "65": {
          start: {
            line: 130,
            column: 4
          },
          end: {
            line: 133,
            column: 5
          }
        },
        "66": {
          start: {
            line: 132,
            column: 6
          },
          end: {
            line: 132,
            column: 17
          }
        },
        "67": {
          start: {
            line: 137,
            column: 4
          },
          end: {
            line: 139,
            column: 5
          }
        },
        "68": {
          start: {
            line: 138,
            column: 6
          },
          end: {
            line: 138,
            column: 33
          }
        },
        "69": {
          start: {
            line: 143,
            column: 4
          },
          end: {
            line: 145,
            column: 5
          }
        },
        "70": {
          start: {
            line: 144,
            column: 6
          },
          end: {
            line: 144,
            column: 27
          }
        },
        "71": {
          start: {
            line: 147,
            column: 4
          },
          end: {
            line: 150,
            column: 5
          }
        },
        "72": {
          start: {
            line: 148,
            column: 6
          },
          end: {
            line: 148,
            column: 46
          }
        },
        "73": {
          start: {
            line: 149,
            column: 6
          },
          end: {
            line: 149,
            column: 22
          }
        },
        "74": {
          start: {
            line: 152,
            column: 4
          },
          end: {
            line: 152,
            column: 33
          }
        },
        "75": {
          start: {
            line: 153,
            column: 4
          },
          end: {
            line: 153,
            column: 25
          }
        },
        "76": {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 159,
            column: 5
          }
        },
        "77": {
          start: {
            line: 158,
            column: 6
          },
          end: {
            line: 158,
            column: 28
          }
        },
        "78": {
          start: {
            line: 161,
            column: 4
          },
          end: {
            line: 164,
            column: 5
          }
        },
        "79": {
          start: {
            line: 162,
            column: 6
          },
          end: {
            line: 162,
            column: 35
          }
        },
        "80": {
          start: {
            line: 163,
            column: 6
          },
          end: {
            line: 163,
            column: 27
          }
        },
        "81": {
          start: {
            line: 166,
            column: 4
          },
          end: {
            line: 173,
            column: 5
          }
        },
        "82": {
          start: {
            line: 167,
            column: 6
          },
          end: {
            line: 167,
            column: 28
          }
        },
        "83": {
          start: {
            line: 169,
            column: 6
          },
          end: {
            line: 172,
            column: 7
          }
        },
        "84": {
          start: {
            line: 177,
            column: 4
          },
          end: {
            line: 177,
            column: 75
          }
        },
        "85": {
          start: {
            line: 179,
            column: 24
          },
          end: {
            line: 179,
            column: 63
          }
        },
        "86": {
          start: {
            line: 181,
            column: 4
          },
          end: {
            line: 183,
            column: 5
          }
        },
        "87": {
          start: {
            line: 182,
            column: 6
          },
          end: {
            line: 182,
            column: 12
          }
        },
        "88": {
          start: {
            line: 185,
            column: 4
          },
          end: {
            line: 188,
            column: 5
          }
        },
        "89": {
          start: {
            line: 186,
            column: 6
          },
          end: {
            line: 186,
            column: 60
          }
        },
        "90": {
          start: {
            line: 186,
            column: 45
          },
          end: {
            line: 186,
            column: 59
          }
        },
        "91": {
          start: {
            line: 187,
            column: 6
          },
          end: {
            line: 187,
            column: 12
          }
        },
        "92": {
          start: {
            line: 190,
            column: 4
          },
          end: {
            line: 194,
            column: 5
          }
        },
        "93": {
          start: {
            line: 191,
            column: 6
          },
          end: {
            line: 191,
            column: 18
          }
        },
        "94": {
          start: {
            line: 192,
            column: 6
          },
          end: {
            line: 192,
            column: 18
          }
        },
        "95": {
          start: {
            line: 193,
            column: 6
          },
          end: {
            line: 193,
            column: 12
          }
        },
        "96": {
          start: {
            line: 196,
            column: 22
          },
          end: {
            line: 198,
            column: 20
          }
        },
        "97": {
          start: {
            line: 200,
            column: 4
          },
          end: {
            line: 200,
            column: 46
          }
        },
        "98": {
          start: {
            line: 204,
            column: 4
          },
          end: {
            line: 204,
            column: 35
          }
        },
        "99": {
          start: {
            line: 205,
            column: 4
          },
          end: {
            line: 205,
            column: 41
          }
        },
        "100": {
          start: {
            line: 207,
            column: 4
          },
          end: {
            line: 207,
            column: 22
          }
        },
        "101": {
          start: {
            line: 208,
            column: 4
          },
          end: {
            line: 208,
            column: 23
          }
        },
        "102": {
          start: {
            line: 209,
            column: 4
          },
          end: {
            line: 209,
            column: 24
          }
        },
        "103": {
          start: {
            line: 210,
            column: 4
          },
          end: {
            line: 210,
            column: 25
          }
        },
        "104": {
          start: {
            line: 211,
            column: 4
          },
          end: {
            line: 211,
            column: 25
          }
        },
        "105": {
          start: {
            line: 212,
            column: 4
          },
          end: {
            line: 212,
            column: 26
          }
        },
        "106": {
          start: {
            line: 213,
            column: 4
          },
          end: {
            line: 213,
            column: 30
          }
        },
        "107": {
          start: {
            line: 214,
            column: 4
          },
          end: {
            line: 214,
            column: 34
          }
        },
        "108": {
          start: {
            line: 219,
            column: 4
          },
          end: {
            line: 222,
            column: 5
          }
        },
        "109": {
          start: {
            line: 223,
            column: 4
          },
          end: {
            line: 223,
            column: 51
          }
        },
        "110": {
          start: {
            line: 224,
            column: 4
          },
          end: {
            line: 224,
            column: 17
          }
        },
        "111": {
          start: {
            line: 228,
            column: 22
          },
          end: {
            line: 228,
            column: 48
          }
        },
        "112": {
          start: {
            line: 230,
            column: 4
          },
          end: {
            line: 232,
            column: 5
          }
        },
        "113": {
          start: {
            line: 231,
            column: 6
          },
          end: {
            line: 231,
            column: 12
          }
        },
        "114": {
          start: {
            line: 234,
            column: 22
          },
          end: {
            line: 234,
            column: 50
          }
        },
        "115": {
          start: {
            line: 236,
            column: 4
          },
          end: {
            line: 236,
            column: 24
          }
        },
        "116": {
          start: {
            line: 239,
            column: 4
          },
          end: {
            line: 241,
            column: 5
          }
        },
        "117": {
          start: {
            line: 240,
            column: 6
          },
          end: {
            line: 240,
            column: 17
          }
        },
        "118": {
          start: {
            line: 244,
            column: 4
          },
          end: {
            line: 246,
            column: 5
          }
        },
        "119": {
          start: {
            line: 245,
            column: 6
          },
          end: {
            line: 245,
            column: 17
          }
        },
        "120": {
          start: {
            line: 250,
            column: 4
          },
          end: {
            line: 252,
            column: 5
          }
        },
        "121": {
          start: {
            line: 251,
            column: 6
          },
          end: {
            line: 251,
            column: 71
          }
        },
        "122": {
          start: {
            line: 251,
            column: 50
          },
          end: {
            line: 251,
            column: 70
          }
        },
        "123": {
          start: {
            line: 254,
            column: 4
          },
          end: {
            line: 258,
            column: 5
          }
        },
        "124": {
          start: {
            line: 255,
            column: 6
          },
          end: {
            line: 257,
            column: 57
          }
        },
        "125": {
          start: {
            line: 256,
            column: 39
          },
          end: {
            line: 256,
            column: 56
          }
        },
        "126": {
          start: {
            line: 257,
            column: 39
          },
          end: {
            line: 257,
            column: 56
          }
        },
        "127": {
          start: {
            line: 260,
            column: 4
          },
          end: {
            line: 262,
            column: 5
          }
        },
        "128": {
          start: {
            line: 261,
            column: 6
          },
          end: {
            line: 261,
            column: 36
          }
        },
        "129": {
          start: {
            line: 266,
            column: 4
          },
          end: {
            line: 268,
            column: 5
          }
        },
        "130": {
          start: {
            line: 267,
            column: 6
          },
          end: {
            line: 267,
            column: 12
          }
        },
        "131": {
          start: {
            line: 270,
            column: 18
          },
          end: {
            line: 276,
            column: 5
          }
        },
        "132": {
          start: {
            line: 271,
            column: 6
          },
          end: {
            line: 275,
            column: 7
          }
        },
        "133": {
          start: {
            line: 272,
            column: 8
          },
          end: {
            line: 272,
            column: 54
          }
        },
        "134": {
          start: {
            line: 273,
            column: 13
          },
          end: {
            line: 275,
            column: 7
          }
        },
        "135": {
          start: {
            line: 274,
            column: 8
          },
          end: {
            line: 274,
            column: 65
          }
        },
        "136": {
          start: {
            line: 278,
            column: 17
          },
          end: {
            line: 283,
            column: 5
          }
        },
        "137": {
          start: {
            line: 280,
            column: 6
          },
          end: {
            line: 282,
            column: 65
          }
        },
        "138": {
          start: {
            line: 285,
            column: 16
          },
          end: {
            line: 307,
            column: 5
          }
        },
        "139": {
          start: {
            line: 286,
            column: 6
          },
          end: {
            line: 288,
            column: 7
          }
        },
        "140": {
          start: {
            line: 287,
            column: 8
          },
          end: {
            line: 287,
            column: 73
          }
        },
        "141": {
          start: {
            line: 290,
            column: 6
          },
          end: {
            line: 290,
            column: 25
          }
        },
        "142": {
          start: {
            line: 291,
            column: 6
          },
          end: {
            line: 306,
            column: 7
          }
        },
        "143": {
          start: {
            line: 300,
            column: 8
          },
          end: {
            line: 300,
            column: 20
          }
        },
        "144": {
          start: {
            line: 301,
            column: 8
          },
          end: {
            line: 303,
            column: 9
          }
        },
        "145": {
          start: {
            line: 302,
            column: 10
          },
          end: {
            line: 302,
            column: 41
          }
        },
        "146": {
          start: {
            line: 305,
            column: 8
          },
          end: {
            line: 305,
            column: 114
          }
        },
        "147": {
          start: {
            line: 305,
            column: 48
          },
          end: {
            line: 305,
            column: 65
          }
        },
        "148": {
          start: {
            line: 309,
            column: 4
          },
          end: {
            line: 310,
            column: 52
          }
        },
        "149": {
          start: {
            line: 310,
            column: 33
          },
          end: {
            line: 310,
            column: 51
          }
        },
        "150": {
          start: {
            line: 312,
            column: 4
          },
          end: {
            line: 321,
            column: 5
          }
        },
        "151": {
          start: {
            line: 313,
            column: 6
          },
          end: {
            line: 313,
            column: 67
          }
        },
        "152": {
          start: {
            line: 313,
            column: 54
          },
          end: {
            line: 313,
            column: 66
          }
        },
        "153": {
          start: {
            line: 314,
            column: 6
          },
          end: {
            line: 314,
            column: 63
          }
        },
        "154": {
          start: {
            line: 314,
            column: 52
          },
          end: {
            line: 314,
            column: 62
          }
        },
        "155": {
          start: {
            line: 316,
            column: 6
          },
          end: {
            line: 316,
            column: 59
          }
        },
        "156": {
          start: {
            line: 318,
            column: 6
          },
          end: {
            line: 318,
            column: 66
          }
        },
        "157": {
          start: {
            line: 318,
            column: 53
          },
          end: {
            line: 318,
            column: 65
          }
        },
        "158": {
          start: {
            line: 319,
            column: 6
          },
          end: {
            line: 319,
            column: 64
          }
        },
        "159": {
          start: {
            line: 319,
            column: 52
          },
          end: {
            line: 319,
            column: 63
          }
        },
        "160": {
          start: {
            line: 320,
            column: 6
          },
          end: {
            line: 320,
            column: 62
          }
        },
        "161": {
          start: {
            line: 320,
            column: 51
          },
          end: {
            line: 320,
            column: 61
          }
        },
        "162": {
          start: {
            line: 325,
            column: 4
          },
          end: {
            line: 327,
            column: 5
          }
        },
        "163": {
          start: {
            line: 326,
            column: 6
          },
          end: {
            line: 326,
            column: 12
          }
        },
        "164": {
          start: {
            line: 329,
            column: 4
          },
          end: {
            line: 339,
            column: 5
          }
        },
        "165": {
          start: {
            line: 331,
            column: 8
          },
          end: {
            line: 331,
            column: 30
          }
        },
        "166": {
          start: {
            line: 332,
            column: 8
          },
          end: {
            line: 332,
            column: 19
          }
        },
        "167": {
          start: {
            line: 333,
            column: 8
          },
          end: {
            line: 333,
            column: 13
          }
        },
        "168": {
          start: {
            line: 335,
            column: 8
          },
          end: {
            line: 335,
            column: 30
          }
        },
        "169": {
          start: {
            line: 336,
            column: 8
          },
          end: {
            line: 336,
            column: 19
          }
        },
        "170": {
          start: {
            line: 337,
            column: 8
          },
          end: {
            line: 337,
            column: 13
          }
        },
        "171": {
          start: {
            line: 343,
            column: 4
          },
          end: {
            line: 345,
            column: 8
          }
        },
        "172": {
          start: {
            line: 346,
            column: 4
          },
          end: {
            line: 346,
            column: 39
          }
        },
        "173": {
          start: {
            line: 350,
            column: 28
          },
          end: {
            line: 350,
            column: 56
          }
        },
        "174": {
          start: {
            line: 351,
            column: 28
          },
          end: {
            line: 351,
            column: 56
          }
        },
        "175": {
          start: {
            line: 352,
            column: 24
          },
          end: {
            line: 352,
            column: 57
          }
        },
        "176": {
          start: {
            line: 353,
            column: 26
          },
          end: {
            line: 353,
            column: 48
          }
        },
        "177": {
          start: {
            line: 354,
            column: 26
          },
          end: {
            line: 355,
            column: 76
          }
        },
        "178": {
          start: {
            line: 357,
            column: 4
          },
          end: {
            line: 359,
            column: 5
          }
        },
        "179": {
          start: {
            line: 358,
            column: 6
          },
          end: {
            line: 358,
            column: 26
          }
        },
        "180": {
          start: {
            line: 361,
            column: 18
          },
          end: {
            line: 361,
            column: 55
          }
        },
        "181": {
          start: {
            line: 362,
            column: 22
          },
          end: {
            line: 362,
            column: 64
          }
        },
        "182": {
          start: {
            line: 364,
            column: 4
          },
          end: {
            line: 365,
            column: 66
          }
        },
        "183": {
          start: {
            line: 369,
            column: 24
          },
          end: {
            line: 369,
            column: 57
          }
        },
        "184": {
          start: {
            line: 370,
            column: 22
          },
          end: {
            line: 370,
            column: 91
          }
        },
        "185": {
          start: {
            line: 371,
            column: 23
          },
          end: {
            line: 376,
            column: 6
          }
        },
        "186": {
          start: {
            line: 378,
            column: 4
          },
          end: {
            line: 378,
            column: 40
          }
        },
        "187": {
          start: {
            line: 380,
            column: 4
          },
          end: {
            line: 380,
            column: 21
          }
        },
        "188": {
          start: {
            line: 384,
            column: 4
          },
          end: {
            line: 395,
            column: 5
          }
        },
        "189": {
          start: {
            line: 385,
            column: 25
          },
          end: {
            line: 385,
            column: 97
          }
        },
        "190": {
          start: {
            line: 386,
            column: 6
          },
          end: {
            line: 386,
            column: 50
          }
        },
        "191": {
          start: {
            line: 388,
            column: 28
          },
          end: {
            line: 390,
            column: 7
          }
        },
        "192": {
          start: {
            line: 392,
            column: 6
          },
          end: {
            line: 394,
            column: 7
          }
        },
        "193": {
          start: {
            line: 393,
            column: 8
          },
          end: {
            line: 393,
            column: 52
          }
        },
        "194": {
          start: {
            line: 399,
            column: 20
          },
          end: {
            line: 399,
            column: 92
          }
        },
        "195": {
          start: {
            line: 401,
            column: 4
          },
          end: {
            line: 403,
            column: 5
          }
        },
        "196": {
          start: {
            line: 402,
            column: 6
          },
          end: {
            line: 402,
            column: 12
          }
        },
        "197": {
          start: {
            line: 405,
            column: 28
          },
          end: {
            line: 405,
            column: 79
          }
        },
        "198": {
          start: {
            line: 407,
            column: 4
          },
          end: {
            line: 412,
            column: 5
          }
        },
        "199": {
          start: {
            line: 408,
            column: 6
          },
          end: {
            line: 408,
            column: 90
          }
        },
        "200": {
          start: {
            line: 409,
            column: 6
          },
          end: {
            line: 409,
            column: 45
          }
        },
        "201": {
          start: {
            line: 411,
            column: 6
          },
          end: {
            line: 411,
            column: 83
          }
        },
        "202": {
          start: {
            line: 416,
            column: 26
          },
          end: {
            line: 416,
            column: 75
          }
        },
        "203": {
          start: {
            line: 417,
            column: 31
          },
          end: {
            line: 417,
            column: 64
          }
        },
        "204": {
          start: {
            line: 418,
            column: 24
          },
          end: {
            line: 419,
            column: 56
          }
        },
        "205": {
          start: {
            line: 420,
            column: 29
          },
          end: {
            line: 420,
            column: 60
          }
        },
        "206": {
          start: {
            line: 421,
            column: 22
          },
          end: {
            line: 421,
            column: 45
          }
        },
        "207": {
          start: {
            line: 427,
            column: 4
          },
          end: {
            line: 435,
            column: 5
          }
        },
        "208": {
          start: {
            line: 428,
            column: 6
          },
          end: {
            line: 428,
            column: 44
          }
        },
        "209": {
          start: {
            line: 429,
            column: 6
          },
          end: {
            line: 429,
            column: 38
          }
        },
        "210": {
          start: {
            line: 430,
            column: 6
          },
          end: {
            line: 430,
            column: 41
          }
        },
        "211": {
          start: {
            line: 432,
            column: 6
          },
          end: {
            line: 432,
            column: 45
          }
        },
        "212": {
          start: {
            line: 433,
            column: 6
          },
          end: {
            line: 433,
            column: 38
          }
        },
        "213": {
          start: {
            line: 434,
            column: 6
          },
          end: {
            line: 434,
            column: 42
          }
        },
        "214": {
          start: {
            line: 437,
            column: 4
          },
          end: {
            line: 440,
            column: 5
          }
        },
        "215": {
          start: {
            line: 438,
            column: 6
          },
          end: {
            line: 438,
            column: 29
          }
        },
        "216": {
          start: {
            line: 439,
            column: 6
          },
          end: {
            line: 439,
            column: 12
          }
        },
        "217": {
          start: {
            line: 442,
            column: 23
          },
          end: {
            line: 442,
            column: 79
          }
        },
        "218": {
          start: {
            line: 443,
            column: 4
          },
          end: {
            line: 445,
            column: 5
          }
        },
        "219": {
          start: {
            line: 444,
            column: 6
          },
          end: {
            line: 444,
            column: 12
          }
        },
        "220": {
          start: {
            line: 447,
            column: 4
          },
          end: {
            line: 450,
            column: 5
          }
        },
        "221": {
          start: {
            line: 449,
            column: 6
          },
          end: {
            line: 449,
            column: 12
          }
        },
        "222": {
          start: {
            line: 452,
            column: 4
          },
          end: {
            line: 452,
            column: 26
          }
        },
        "223": {
          start: {
            line: 454,
            column: 4
          },
          end: {
            line: 456,
            column: 5
          }
        },
        "224": {
          start: {
            line: 455,
            column: 6
          },
          end: {
            line: 455,
            column: 18
          }
        },
        "225": {
          start: {
            line: 458,
            column: 4
          },
          end: {
            line: 458,
            column: 48
          }
        },
        "226": {
          start: {
            line: 459,
            column: 4
          },
          end: {
            line: 459,
            column: 37
          }
        },
        "227": {
          start: {
            line: 461,
            column: 22
          },
          end: {
            line: 466,
            column: 6
          }
        },
        "228": {
          start: {
            line: 468,
            column: 4
          },
          end: {
            line: 497,
            column: 5
          }
        },
        "229": {
          start: {
            line: 469,
            column: 6
          },
          end: {
            line: 469,
            column: 45
          }
        },
        "230": {
          start: {
            line: 471,
            column: 6
          },
          end: {
            line: 471,
            column: 30
          }
        },
        "231": {
          start: {
            line: 473,
            column: 6
          },
          end: {
            line: 473,
            column: 53
          }
        },
        "232": {
          start: {
            line: 474,
            column: 6
          },
          end: {
            line: 474,
            column: 51
          }
        },
        "233": {
          start: {
            line: 476,
            column: 33
          },
          end: {
            line: 476,
            column: 85
          }
        },
        "234": {
          start: {
            line: 478,
            column: 6
          },
          end: {
            line: 490,
            column: 49
          }
        },
        "235": {
          start: {
            line: 480,
            column: 10
          },
          end: {
            line: 482,
            column: 40
          }
        },
        "236": {
          start: {
            line: 484,
            column: 10
          },
          end: {
            line: 484,
            column: 104
          }
        },
        "237": {
          start: {
            line: 486,
            column: 10
          },
          end: {
            line: 486,
            column: 33
          }
        },
        "238": {
          start: {
            line: 488,
            column: 10
          },
          end: {
            line: 488,
            column: 66
          }
        },
        "239": {
          start: {
            line: 488,
            column: 27
          },
          end: {
            line: 488,
            column: 62
          }
        },
        "240": {
          start: {
            line: 492,
            column: 6
          },
          end: {
            line: 492,
            column: 53
          }
        },
        "241": {
          start: {
            line: 493,
            column: 6
          },
          end: {
            line: 493,
            column: 48
          }
        },
        "242": {
          start: {
            line: 495,
            column: 6
          },
          end: {
            line: 495,
            column: 29
          }
        },
        "243": {
          start: {
            line: 496,
            column: 6
          },
          end: {
            line: 496,
            column: 41
          }
        },
        "244": {
          start: {
            line: 499,
            column: 4
          },
          end: {
            line: 501,
            column: 5
          }
        },
        "245": {
          start: {
            line: 500,
            column: 6
          },
          end: {
            line: 500,
            column: 18
          }
        },
        "246": {
          start: {
            line: 506,
            column: 4
          },
          end: {
            line: 539,
            column: 6
          }
        },
        "247": {
          start: {
            line: 507,
            column: 17
          },
          end: {
            line: 507,
            column: 39
          }
        },
        "248": {
          start: {
            line: 508,
            column: 20
          },
          end: {
            line: 511,
            column: 7
          }
        },
        "249": {
          start: {
            line: 513,
            column: 6
          },
          end: {
            line: 518,
            column: 7
          }
        },
        "250": {
          start: {
            line: 514,
            column: 8
          },
          end: {
            line: 517,
            column: 9
          }
        },
        "251": {
          start: {
            line: 520,
            column: 21
          },
          end: {
            line: 520,
            column: 72
          }
        },
        "252": {
          start: {
            line: 522,
            column: 6
          },
          end: {
            line: 525,
            column: 7
          }
        },
        "253": {
          start: {
            line: 523,
            column: 8
          },
          end: {
            line: 523,
            column: 42
          }
        },
        "254": {
          start: {
            line: 524,
            column: 8
          },
          end: {
            line: 524,
            column: 36
          }
        },
        "255": {
          start: {
            line: 527,
            column: 6
          },
          end: {
            line: 538,
            column: 7
          }
        },
        "256": {
          start: {
            line: 528,
            column: 8
          },
          end: {
            line: 528,
            column: 23
          }
        },
        "257": {
          start: {
            line: 529,
            column: 13
          },
          end: {
            line: 538,
            column: 7
          }
        },
        "258": {
          start: {
            line: 530,
            column: 8
          },
          end: {
            line: 532,
            column: 9
          }
        },
        "259": {
          start: {
            line: 531,
            column: 10
          },
          end: {
            line: 531,
            column: 60
          }
        },
        "260": {
          start: {
            line: 534,
            column: 8
          },
          end: {
            line: 534,
            column: 22
          }
        },
        "261": {
          start: {
            line: 535,
            column: 13
          },
          end: {
            line: 538,
            column: 7
          }
        },
        "262": {
          start: {
            line: 536,
            column: 8
          },
          end: {
            line: 536,
            column: 20
          }
        },
        "263": {
          start: {
            line: 537,
            column: 8
          },
          end: {
            line: 537,
            column: 20
          }
        },
        "264": {
          start: {
            line: 543,
            column: 21
          },
          end: {
            line: 543,
            column: 54
          }
        },
        "265": {
          start: {
            line: 545,
            column: 4
          },
          end: {
            line: 547,
            column: 5
          }
        },
        "266": {
          start: {
            line: 546,
            column: 6
          },
          end: {
            line: 546,
            column: 12
          }
        },
        "267": {
          start: {
            line: 549,
            column: 19
          },
          end: {
            line: 549,
            column: 33
          }
        },
        "268": {
          start: {
            line: 551,
            column: 4
          },
          end: {
            line: 553,
            column: 5
          }
        },
        "269": {
          start: {
            line: 552,
            column: 6
          },
          end: {
            line: 552,
            column: 12
          }
        },
        "270": {
          start: {
            line: 555,
            column: 19
          },
          end: {
            line: 558,
            column: 5
          }
        },
        "271": {
          start: {
            line: 559,
            column: 23
          },
          end: {
            line: 559,
            column: 57
          }
        },
        "272": {
          start: {
            line: 561,
            column: 4
          },
          end: {
            line: 563,
            column: 5
          }
        },
        "273": {
          start: {
            line: 562,
            column: 6
          },
          end: {
            line: 562,
            column: 29
          }
        },
        "274": {
          start: {
            line: 565,
            column: 4
          },
          end: {
            line: 565,
            column: 53
          }
        },
        "275": {
          start: {
            line: 567,
            column: 4
          },
          end: {
            line: 569,
            column: 5
          }
        },
        "276": {
          start: {
            line: 568,
            column: 6
          },
          end: {
            line: 568,
            column: 45
          }
        },
        "277": {
          start: {
            line: 571,
            column: 4
          },
          end: {
            line: 571,
            column: 26
          }
        },
        "278": {
          start: {
            line: 579,
            column: 0
          },
          end: {
            line: 579,
            column: 88
          }
        },
        "279": {
          start: {
            line: 581,
            column: 0
          },
          end: {
            line: 587,
            column: 2
          }
        },
        "280": {
          start: {
            line: 582,
            column: 20
          },
          end: {
            line: 582,
            column: 80
          }
        },
        "281": {
          start: {
            line: 583,
            column: 2
          },
          end: {
            line: 586,
            column: 3
          }
        },
        "282": {
          start: {
            line: 583,
            column: 15
          },
          end: {
            line: 583,
            column: 16
          }
        },
        "283": {
          start: {
            line: 583,
            column: 24
          },
          end: {
            line: 583,
            column: 40
          }
        },
        "284": {
          start: {
            line: 584,
            column: 22
          },
          end: {
            line: 584,
            column: 37
          }
        },
        "285": {
          start: {
            line: 585,
            column: 4
          },
          end: {
            line: 585,
            column: 63
          }
        },
        "286": {
          start: {
            line: 593,
            column: 0
          },
          end: {
            line: 593,
            column: 38
          }
        },
        "287": {
          start: {
            line: 594,
            column: 0
          },
          end: {
            line: 594,
            column: 33
          }
        },
        "288": {
          start: {
            line: 595,
            column: 0
          },
          end: {
            line: 598,
            column: 1
          }
        },
        "289": {
          start: {
            line: 596,
            column: 2
          },
          end: {
            line: 596,
            column: 33
          }
        },
        "290": {
          start: {
            line: 597,
            column: 2
          },
          end: {
            line: 597,
            column: 34
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 91,
              column: 2
            },
            end: {
              line: 91,
              column: 3
            }
          },
          loc: {
            start: {
              line: 91,
              column: 31
            },
            end: {
              line: 108,
              column: 3
            }
          },
          line: 91
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 111,
              column: 2
            },
            end: {
              line: 111,
              column: 3
            }
          },
          loc: {
            start: {
              line: 111,
              column: 23
            },
            end: {
              line: 113,
              column: 3
            }
          },
          line: 111
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 115,
              column: 2
            },
            end: {
              line: 115,
              column: 3
            }
          },
          loc: {
            start: {
              line: 115,
              column: 23
            },
            end: {
              line: 117,
              column: 3
            }
          },
          line: 115
        },
        "3": {
          name: "(anonymous_3)",
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
              column: 9
            },
            end: {
              line: 124,
              column: 3
            }
          },
          line: 120
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 126,
              column: 2
            },
            end: {
              line: 126,
              column: 3
            }
          },
          loc: {
            start: {
              line: 126,
              column: 20
            },
            end: {
              line: 134,
              column: 3
            }
          },
          line: 126
        },
        "5": {
          name: "(anonymous_5)",
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
              column: 9
            },
            end: {
              line: 140,
              column: 3
            }
          },
          line: 136
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 142,
              column: 2
            },
            end: {
              line: 142,
              column: 3
            }
          },
          loc: {
            start: {
              line: 142,
              column: 15
            },
            end: {
              line: 154,
              column: 3
            }
          },
          line: 142
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
              column: 15
            },
            end: {
              line: 174,
              column: 3
            }
          },
          line: 156
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 176,
              column: 2
            },
            end: {
              line: 176,
              column: 3
            }
          },
          loc: {
            start: {
              line: 176,
              column: 12
            },
            end: {
              line: 201,
              column: 3
            }
          },
          line: 176
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 186,
              column: 39
            },
            end: {
              line: 186,
              column: 40
            }
          },
          loc: {
            start: {
              line: 186,
              column: 45
            },
            end: {
              line: 186,
              column: 59
            }
          },
          line: 186
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 203,
              column: 2
            },
            end: {
              line: 203,
              column: 3
            }
          },
          loc: {
            start: {
              line: 203,
              column: 12
            },
            end: {
              line: 215,
              column: 3
            }
          },
          line: 203
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 218,
              column: 2
            },
            end: {
              line: 218,
              column: 3
            }
          },
          loc: {
            start: {
              line: 218,
              column: 21
            },
            end: {
              line: 225,
              column: 3
            }
          },
          line: 218
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 227,
              column: 2
            },
            end: {
              line: 227,
              column: 3
            }
          },
          loc: {
            start: {
              line: 227,
              column: 17
            },
            end: {
              line: 247,
              column: 3
            }
          },
          line: 227
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 249,
              column: 2
            },
            end: {
              line: 249,
              column: 3
            }
          },
          loc: {
            start: {
              line: 249,
              column: 23
            },
            end: {
              line: 263,
              column: 3
            }
          },
          line: 249
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 251,
              column: 41
            },
            end: {
              line: 251,
              column: 42
            }
          },
          loc: {
            start: {
              line: 251,
              column: 50
            },
            end: {
              line: 251,
              column: 70
            }
          },
          line: 251
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 256,
              column: 30
            },
            end: {
              line: 256,
              column: 31
            }
          },
          loc: {
            start: {
              line: 256,
              column: 39
            },
            end: {
              line: 256,
              column: 56
            }
          },
          line: 256
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 257,
              column: 30
            },
            end: {
              line: 257,
              column: 31
            }
          },
          loc: {
            start: {
              line: 257,
              column: 39
            },
            end: {
              line: 257,
              column: 56
            }
          },
          line: 257
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 265,
              column: 2
            },
            end: {
              line: 265,
              column: 3
            }
          },
          loc: {
            start: {
              line: 265,
              column: 28
            },
            end: {
              line: 322,
              column: 3
            }
          },
          line: 265
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 270,
              column: 18
            },
            end: {
              line: 270,
              column: 19
            }
          },
          loc: {
            start: {
              line: 270,
              column: 27
            },
            end: {
              line: 276,
              column: 5
            }
          },
          line: 270
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 278,
              column: 17
            },
            end: {
              line: 278,
              column: 18
            }
          },
          loc: {
            start: {
              line: 278,
              column: 26
            },
            end: {
              line: 283,
              column: 5
            }
          },
          line: 278
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 285,
              column: 16
            },
            end: {
              line: 285,
              column: 17
            }
          },
          loc: {
            start: {
              line: 285,
              column: 25
            },
            end: {
              line: 307,
              column: 5
            }
          },
          line: 285
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 305,
              column: 39
            },
            end: {
              line: 305,
              column: 40
            }
          },
          loc: {
            start: {
              line: 305,
              column: 48
            },
            end: {
              line: 305,
              column: 65
            }
          },
          line: 305
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 310,
              column: 28
            },
            end: {
              line: 310,
              column: 29
            }
          },
          loc: {
            start: {
              line: 310,
              column: 33
            },
            end: {
              line: 310,
              column: 51
            }
          },
          line: 310
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 313,
              column: 45
            },
            end: {
              line: 313,
              column: 46
            }
          },
          loc: {
            start: {
              line: 313,
              column: 54
            },
            end: {
              line: 313,
              column: 66
            }
          },
          line: 313
        },
        "24": {
          name: "(anonymous_24)",
          decl: {
            start: {
              line: 314,
              column: 43
            },
            end: {
              line: 314,
              column: 44
            }
          },
          loc: {
            start: {
              line: 314,
              column: 52
            },
            end: {
              line: 314,
              column: 62
            }
          },
          line: 314
        },
        "25": {
          name: "(anonymous_25)",
          decl: {
            start: {
              line: 318,
              column: 44
            },
            end: {
              line: 318,
              column: 45
            }
          },
          loc: {
            start: {
              line: 318,
              column: 53
            },
            end: {
              line: 318,
              column: 65
            }
          },
          line: 318
        },
        "26": {
          name: "(anonymous_26)",
          decl: {
            start: {
              line: 319,
              column: 43
            },
            end: {
              line: 319,
              column: 44
            }
          },
          loc: {
            start: {
              line: 319,
              column: 52
            },
            end: {
              line: 319,
              column: 63
            }
          },
          line: 319
        },
        "27": {
          name: "(anonymous_27)",
          decl: {
            start: {
              line: 320,
              column: 42
            },
            end: {
              line: 320,
              column: 43
            }
          },
          loc: {
            start: {
              line: 320,
              column: 51
            },
            end: {
              line: 320,
              column: 61
            }
          },
          line: 320
        },
        "28": {
          name: "(anonymous_28)",
          decl: {
            start: {
              line: 324,
              column: 2
            },
            end: {
              line: 324,
              column: 3
            }
          },
          loc: {
            start: {
              line: 324,
              column: 18
            },
            end: {
              line: 340,
              column: 3
            }
          },
          line: 324
        },
        "29": {
          name: "(anonymous_29)",
          decl: {
            start: {
              line: 342,
              column: 2
            },
            end: {
              line: 342,
              column: 3
            }
          },
          loc: {
            start: {
              line: 342,
              column: 25
            },
            end: {
              line: 347,
              column: 3
            }
          },
          line: 342
        },
        "30": {
          name: "(anonymous_30)",
          decl: {
            start: {
              line: 349,
              column: 2
            },
            end: {
              line: 349,
              column: 3
            }
          },
          loc: {
            start: {
              line: 349,
              column: 48
            },
            end: {
              line: 366,
              column: 3
            }
          },
          line: 349
        },
        "31": {
          name: "(anonymous_31)",
          decl: {
            start: {
              line: 368,
              column: 2
            },
            end: {
              line: 368,
              column: 3
            }
          },
          loc: {
            start: {
              line: 368,
              column: 56
            },
            end: {
              line: 381,
              column: 3
            }
          },
          line: 368
        },
        "32": {
          name: "(anonymous_32)",
          decl: {
            start: {
              line: 383,
              column: 2
            },
            end: {
              line: 383,
              column: 3
            }
          },
          loc: {
            start: {
              line: 383,
              column: 38
            },
            end: {
              line: 396,
              column: 3
            }
          },
          line: 383
        },
        "33": {
          name: "(anonymous_33)",
          decl: {
            start: {
              line: 398,
              column: 2
            },
            end: {
              line: 398,
              column: 3
            }
          },
          loc: {
            start: {
              line: 398,
              column: 20
            },
            end: {
              line: 413,
              column: 3
            }
          },
          line: 398
        },
        "34": {
          name: "(anonymous_34)",
          decl: {
            start: {
              line: 415,
              column: 2
            },
            end: {
              line: 415,
              column: 3
            }
          },
          loc: {
            start: {
              line: 415,
              column: 29
            },
            end: {
              line: 502,
              column: 3
            }
          },
          line: 415
        },
        "35": {
          name: "(anonymous_35)",
          decl: {
            start: {
              line: 479,
              column: 34
            },
            end: {
              line: 479,
              column: 35
            }
          },
          loc: {
            start: {
              line: 479,
              column: 40
            },
            end: {
              line: 489,
              column: 9
            }
          },
          line: 479
        },
        "36": {
          name: "(anonymous_36)",
          decl: {
            start: {
              line: 488,
              column: 21
            },
            end: {
              line: 488,
              column: 22
            }
          },
          loc: {
            start: {
              line: 488,
              column: 27
            },
            end: {
              line: 488,
              column: 62
            }
          },
          line: 488
        },
        "37": {
          name: "(anonymous_37)",
          decl: {
            start: {
              line: 505,
              column: 2
            },
            end: {
              line: 505,
              column: 3
            }
          },
          loc: {
            start: {
              line: 505,
              column: 34
            },
            end: {
              line: 540,
              column: 3
            }
          },
          line: 505
        },
        "38": {
          name: "(anonymous_38)",
          decl: {
            start: {
              line: 506,
              column: 21
            },
            end: {
              line: 506,
              column: 22
            }
          },
          loc: {
            start: {
              line: 506,
              column: 33
            },
            end: {
              line: 539,
              column: 5
            }
          },
          line: 506
        },
        "39": {
          name: "(anonymous_39)",
          decl: {
            start: {
              line: 542,
              column: 2
            },
            end: {
              line: 542,
              column: 3
            }
          },
          loc: {
            start: {
              line: 542,
              column: 37
            },
            end: {
              line: 572,
              column: 3
            }
          },
          line: 542
        },
        "40": {
          name: "(anonymous_40)",
          decl: {
            start: {
              line: 581,
              column: 34
            },
            end: {
              line: 581,
              column: 35
            }
          },
          loc: {
            start: {
              line: 581,
              column: 40
            },
            end: {
              line: 587,
              column: 1
            }
          },
          line: 581
        },
        "41": {
          name: "(anonymous_41)",
          decl: {
            start: {
              line: 595,
              column: 24
            },
            end: {
              line: 595,
              column: 25
            }
          },
          loc: {
            start: {
              line: 595,
              column: 30
            },
            end: {
              line: 598,
              column: 1
            }
          },
          line: 595
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 104,
              column: 27
            },
            end: {
              line: 104,
              column: 101
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 104,
              column: 27
            },
            end: {
              line: 104,
              column: 69
            }
          }, {
            start: {
              line: 104,
              column: 73
            },
            end: {
              line: 104,
              column: 101
            }
          }],
          line: 104
        },
        "1": {
          loc: {
            start: {
              line: 105,
              column: 33
            },
            end: {
              line: 105,
              column: 77
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 105,
              column: 33
            },
            end: {
              line: 105,
              column: 52
            }
          }, {
            start: {
              line: 105,
              column: 56
            },
            end: {
              line: 105,
              column: 77
            }
          }],
          line: 105
        },
        "2": {
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
        "3": {
          loc: {
            start: {
              line: 130,
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
              line: 130,
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
          line: 130
        },
        "4": {
          loc: {
            start: {
              line: 130,
              column: 8
            },
            end: {
              line: 131,
              column: 74
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
              column: 24
            }
          }, {
            start: {
              line: 131,
              column: 7
            },
            end: {
              line: 131,
              column: 30
            }
          }, {
            start: {
              line: 131,
              column: 34
            },
            end: {
              line: 131,
              column: 73
            }
          }],
          line: 130
        },
        "5": {
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
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 137
        },
        "6": {
          loc: {
            start: {
              line: 143,
              column: 4
            },
            end: {
              line: 145,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 143,
              column: 4
            },
            end: {
              line: 145,
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
          line: 143
        },
        "7": {
          loc: {
            start: {
              line: 147,
              column: 4
            },
            end: {
              line: 150,
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
              line: 150,
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
          line: 147
        },
        "8": {
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
        "9": {
          loc: {
            start: {
              line: 161,
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
              line: 161,
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
          line: 161
        },
        "10": {
          loc: {
            start: {
              line: 166,
              column: 4
            },
            end: {
              line: 173,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 166,
              column: 4
            },
            end: {
              line: 173,
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
          line: 166
        },
        "11": {
          loc: {
            start: {
              line: 166,
              column: 8
            },
            end: {
              line: 166,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 166,
              column: 8
            },
            end: {
              line: 166,
              column: 29
            }
          }, {
            start: {
              line: 166,
              column: 33
            },
            end: {
              line: 166,
              column: 48
            }
          }],
          line: 166
        },
        "12": {
          loc: {
            start: {
              line: 170,
              column: 9
            },
            end: {
              line: 170,
              column: 68
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 170,
              column: 36
            },
            end: {
              line: 170,
              column: 56
            }
          }, {
            start: {
              line: 170,
              column: 59
            },
            end: {
              line: 170,
              column: 68
            }
          }],
          line: 170
        },
        "13": {
          loc: {
            start: {
              line: 181,
              column: 4
            },
            end: {
              line: 183,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 181,
              column: 4
            },
            end: {
              line: 183,
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
          line: 181
        },
        "14": {
          loc: {
            start: {
              line: 181,
              column: 8
            },
            end: {
              line: 181,
              column: 51
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 181,
              column: 8
            },
            end: {
              line: 181,
              column: 38
            }
          }, {
            start: {
              line: 181,
              column: 42
            },
            end: {
              line: 181,
              column: 51
            }
          }],
          line: 181
        },
        "15": {
          loc: {
            start: {
              line: 185,
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
              line: 185,
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
          line: 185
        },
        "16": {
          loc: {
            start: {
              line: 190,
              column: 4
            },
            end: {
              line: 194,
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
              line: 194,
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
          line: 190
        },
        "17": {
          loc: {
            start: {
              line: 196,
              column: 22
            },
            end: {
              line: 198,
              column: 20
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 197,
              column: 6
            },
            end: {
              line: 197,
              column: 20
            }
          }, {
            start: {
              line: 198,
              column: 6
            },
            end: {
              line: 198,
              column: 20
            }
          }],
          line: 196
        },
        "18": {
          loc: {
            start: {
              line: 230,
              column: 4
            },
            end: {
              line: 232,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 230,
              column: 4
            },
            end: {
              line: 232,
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
          line: 230
        },
        "19": {
          loc: {
            start: {
              line: 239,
              column: 4
            },
            end: {
              line: 241,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 239,
              column: 4
            },
            end: {
              line: 241,
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
          line: 239
        },
        "20": {
          loc: {
            start: {
              line: 244,
              column: 4
            },
            end: {
              line: 246,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 244,
              column: 4
            },
            end: {
              line: 246,
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
          line: 244
        },
        "21": {
          loc: {
            start: {
              line: 250,
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
              line: 250,
              column: 4
            },
            end: {
              line: 252,
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
          line: 250
        },
        "22": {
          loc: {
            start: {
              line: 254,
              column: 4
            },
            end: {
              line: 258,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 254,
              column: 4
            },
            end: {
              line: 258,
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
          line: 254
        },
        "23": {
          loc: {
            start: {
              line: 260,
              column: 4
            },
            end: {
              line: 262,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 260,
              column: 4
            },
            end: {
              line: 262,
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
          line: 260
        },
        "24": {
          loc: {
            start: {
              line: 266,
              column: 4
            },
            end: {
              line: 268,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 266,
              column: 4
            },
            end: {
              line: 268,
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
          line: 266
        },
        "25": {
          loc: {
            start: {
              line: 271,
              column: 6
            },
            end: {
              line: 275,
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
              line: 275,
              column: 7
            }
          }, {
            start: {
              line: 273,
              column: 13
            },
            end: {
              line: 275,
              column: 7
            }
          }],
          line: 271
        },
        "26": {
          loc: {
            start: {
              line: 271,
              column: 10
            },
            end: {
              line: 271,
              column: 90
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 271,
              column: 10
            },
            end: {
              line: 271,
              column: 28
            }
          }, {
            start: {
              line: 271,
              column: 32
            },
            end: {
              line: 271,
              column: 90
            }
          }],
          line: 271
        },
        "27": {
          loc: {
            start: {
              line: 273,
              column: 13
            },
            end: {
              line: 275,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 273,
              column: 13
            },
            end: {
              line: 275,
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
          line: 273
        },
        "28": {
          loc: {
            start: {
              line: 280,
              column: 25
            },
            end: {
              line: 282,
              column: 65
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 281,
              column: 8
            },
            end: {
              line: 281,
              column: 9
            }
          }, {
            start: {
              line: 282,
              column: 8
            },
            end: {
              line: 282,
              column: 65
            }
          }],
          line: 280
        },
        "29": {
          loc: {
            start: {
              line: 280,
              column: 25
            },
            end: {
              line: 280,
              column: 94
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 280,
              column: 25
            },
            end: {
              line: 280,
              column: 52
            }
          }, {
            start: {
              line: 280,
              column: 56
            },
            end: {
              line: 280,
              column: 94
            }
          }],
          line: 280
        },
        "30": {
          loc: {
            start: {
              line: 286,
              column: 6
            },
            end: {
              line: 288,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 286,
              column: 6
            },
            end: {
              line: 288,
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
          line: 286
        },
        "31": {
          loc: {
            start: {
              line: 286,
              column: 10
            },
            end: {
              line: 286,
              column: 90
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 286,
              column: 10
            },
            end: {
              line: 286,
              column: 28
            }
          }, {
            start: {
              line: 286,
              column: 32
            },
            end: {
              line: 286,
              column: 90
            }
          }],
          line: 286
        },
        "32": {
          loc: {
            start: {
              line: 291,
              column: 6
            },
            end: {
              line: 306,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 291,
              column: 6
            },
            end: {
              line: 306,
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
          line: 291
        },
        "33": {
          loc: {
            start: {
              line: 301,
              column: 8
            },
            end: {
              line: 303,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 301,
              column: 8
            },
            end: {
              line: 303,
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
          line: 301
        },
        "34": {
          loc: {
            start: {
              line: 312,
              column: 4
            },
            end: {
              line: 321,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 312,
              column: 4
            },
            end: {
              line: 321,
              column: 5
            }
          }, {
            start: {
              line: 317,
              column: 11
            },
            end: {
              line: 321,
              column: 5
            }
          }],
          line: 312
        },
        "35": {
          loc: {
            start: {
              line: 325,
              column: 4
            },
            end: {
              line: 327,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 325,
              column: 4
            },
            end: {
              line: 327,
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
          line: 325
        },
        "36": {
          loc: {
            start: {
              line: 329,
              column: 4
            },
            end: {
              line: 339,
              column: 5
            }
          },
          type: "switch",
          locations: [{
            start: {
              line: 330,
              column: 6
            },
            end: {
              line: 333,
              column: 13
            }
          }, {
            start: {
              line: 334,
              column: 6
            },
            end: {
              line: 337,
              column: 13
            }
          }, {
            start: {
              line: 338,
              column: 6
            },
            end: {
              line: 338,
              column: 14
            }
          }],
          line: 329
        },
        "37": {
          loc: {
            start: {
              line: 343,
              column: 18
            },
            end: {
              line: 345,
              column: 8
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 344,
              column: 6
            },
            end: {
              line: 344,
              column: 71
            }
          }, {
            start: {
              line: 345,
              column: 6
            },
            end: {
              line: 345,
              column: 8
            }
          }],
          line: 343
        },
        "38": {
          loc: {
            start: {
              line: 343,
              column: 18
            },
            end: {
              line: 343,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 343,
              column: 18
            },
            end: {
              line: 343,
              column: 25
            }
          }, {
            start: {
              line: 343,
              column: 29
            },
            end: {
              line: 343,
              column: 47
            }
          }],
          line: 343
        },
        "39": {
          loc: {
            start: {
              line: 354,
              column: 26
            },
            end: {
              line: 355,
              column: 76
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 354,
              column: 26
            },
            end: {
              line: 354,
              column: 41
            }
          }, {
            start: {
              line: 354,
              column: 45
            },
            end: {
              line: 354,
              column: 62
            }
          }, {
            start: {
              line: 355,
              column: 28
            },
            end: {
              line: 355,
              column: 43
            }
          }, {
            start: {
              line: 355,
              column: 47
            },
            end: {
              line: 355,
              column: 76
            }
          }],
          line: 354
        },
        "40": {
          loc: {
            start: {
              line: 357,
              column: 4
            },
            end: {
              line: 359,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 357,
              column: 4
            },
            end: {
              line: 359,
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
          line: 357
        },
        "41": {
          loc: {
            start: {
              line: 357,
              column: 8
            },
            end: {
              line: 357,
              column: 43
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 357,
              column: 8
            },
            end: {
              line: 357,
              column: 21
            }
          }, {
            start: {
              line: 357,
              column: 25
            },
            end: {
              line: 357,
              column: 43
            }
          }],
          line: 357
        },
        "42": {
          loc: {
            start: {
              line: 361,
              column: 18
            },
            end: {
              line: 361,
              column: 55
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 361,
              column: 49
            },
            end: {
              line: 361,
              column: 51
            }
          }, {
            start: {
              line: 361,
              column: 54
            },
            end: {
              line: 361,
              column: 55
            }
          }],
          line: 361
        },
        "43": {
          loc: {
            start: {
              line: 364,
              column: 11
            },
            end: {
              line: 365,
              column: 66
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 365,
              column: 6
            },
            end: {
              line: 365,
              column: 41
            }
          }, {
            start: {
              line: 365,
              column: 44
            },
            end: {
              line: 365,
              column: 66
            }
          }],
          line: 364
        },
        "44": {
          loc: {
            start: {
              line: 384,
              column: 4
            },
            end: {
              line: 395,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 384,
              column: 4
            },
            end: {
              line: 395,
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
          line: 384
        },
        "45": {
          loc: {
            start: {
              line: 392,
              column: 6
            },
            end: {
              line: 394,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 392,
              column: 6
            },
            end: {
              line: 394,
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
          line: 392
        },
        "46": {
          loc: {
            start: {
              line: 399,
              column: 20
            },
            end: {
              line: 399,
              column: 92
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 399,
              column: 20
            },
            end: {
              line: 399,
              column: 39
            }
          }, {
            start: {
              line: 399,
              column: 43
            },
            end: {
              line: 399,
              column: 92
            }
          }],
          line: 399
        },
        "47": {
          loc: {
            start: {
              line: 401,
              column: 4
            },
            end: {
              line: 403,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 401,
              column: 4
            },
            end: {
              line: 403,
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
          line: 401
        },
        "48": {
          loc: {
            start: {
              line: 407,
              column: 4
            },
            end: {
              line: 412,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 407,
              column: 4
            },
            end: {
              line: 412,
              column: 5
            }
          }, {
            start: {
              line: 410,
              column: 11
            },
            end: {
              line: 412,
              column: 5
            }
          }],
          line: 407
        },
        "49": {
          loc: {
            start: {
              line: 408,
              column: 37
            },
            end: {
              line: 408,
              column: 90
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 408,
              column: 37
            },
            end: {
              line: 408,
              column: 65
            }
          }, {
            start: {
              line: 408,
              column: 69
            },
            end: {
              line: 408,
              column: 90
            }
          }],
          line: 408
        },
        "50": {
          loc: {
            start: {
              line: 411,
              column: 30
            },
            end: {
              line: 411,
              column: 83
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 411,
              column: 30
            },
            end: {
              line: 411,
              column: 58
            }
          }, {
            start: {
              line: 411,
              column: 62
            },
            end: {
              line: 411,
              column: 83
            }
          }],
          line: 411
        },
        "51": {
          loc: {
            start: {
              line: 418,
              column: 24
            },
            end: {
              line: 419,
              column: 56
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 418,
              column: 24
            },
            end: {
              line: 418,
              column: 31
            }
          }, {
            start: {
              line: 418,
              column: 35
            },
            end: {
              line: 418,
              column: 48
            }
          }, {
            start: {
              line: 419,
              column: 6
            },
            end: {
              line: 419,
              column: 56
            }
          }],
          line: 418
        },
        "52": {
          loc: {
            start: {
              line: 427,
              column: 4
            },
            end: {
              line: 435,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 427,
              column: 4
            },
            end: {
              line: 435,
              column: 5
            }
          }, {
            start: {
              line: 431,
              column: 11
            },
            end: {
              line: 435,
              column: 5
            }
          }],
          line: 427
        },
        "53": {
          loc: {
            start: {
              line: 437,
              column: 4
            },
            end: {
              line: 440,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 437,
              column: 4
            },
            end: {
              line: 440,
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
          line: 437
        },
        "54": {
          loc: {
            start: {
              line: 437,
              column: 8
            },
            end: {
              line: 437,
              column: 65
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 437,
              column: 8
            },
            end: {
              line: 437,
              column: 19
            }
          }, {
            start: {
              line: 437,
              column: 23
            },
            end: {
              line: 437,
              column: 65
            }
          }],
          line: 437
        },
        "55": {
          loc: {
            start: {
              line: 443,
              column: 4
            },
            end: {
              line: 445,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 443,
              column: 4
            },
            end: {
              line: 445,
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
          line: 443
        },
        "56": {
          loc: {
            start: {
              line: 447,
              column: 4
            },
            end: {
              line: 450,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 447,
              column: 4
            },
            end: {
              line: 450,
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
          line: 447
        },
        "57": {
          loc: {
            start: {
              line: 447,
              column: 8
            },
            end: {
              line: 447,
              column: 38
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 447,
              column: 8
            },
            end: {
              line: 447,
              column: 22
            }
          }, {
            start: {
              line: 447,
              column: 26
            },
            end: {
              line: 447,
              column: 38
            }
          }],
          line: 447
        },
        "58": {
          loc: {
            start: {
              line: 454,
              column: 4
            },
            end: {
              line: 456,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 454,
              column: 4
            },
            end: {
              line: 456,
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
          line: 454
        },
        "59": {
          loc: {
            start: {
              line: 468,
              column: 4
            },
            end: {
              line: 497,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 468,
              column: 4
            },
            end: {
              line: 497,
              column: 5
            }
          }, {
            start: {
              line: 491,
              column: 11
            },
            end: {
              line: 497,
              column: 5
            }
          }],
          line: 468
        },
        "60": {
          loc: {
            start: {
              line: 499,
              column: 4
            },
            end: {
              line: 501,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 499,
              column: 4
            },
            end: {
              line: 501,
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
          line: 499
        },
        "61": {
          loc: {
            start: {
              line: 513,
              column: 6
            },
            end: {
              line: 518,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 513,
              column: 6
            },
            end: {
              line: 518,
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
          line: 513
        },
        "62": {
          loc: {
            start: {
              line: 520,
              column: 21
            },
            end: {
              line: 520,
              column: 72
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 520,
              column: 50
            },
            end: {
              line: 520,
              column: 56
            }
          }, {
            start: {
              line: 520,
              column: 59
            },
            end: {
              line: 520,
              column: 72
            }
          }],
          line: 520
        },
        "63": {
          loc: {
            start: {
              line: 522,
              column: 6
            },
            end: {
              line: 525,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 522,
              column: 6
            },
            end: {
              line: 525,
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
          line: 522
        },
        "64": {
          loc: {
            start: {
              line: 527,
              column: 6
            },
            end: {
              line: 538,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 527,
              column: 6
            },
            end: {
              line: 538,
              column: 7
            }
          }, {
            start: {
              line: 529,
              column: 13
            },
            end: {
              line: 538,
              column: 7
            }
          }],
          line: 527
        },
        "65": {
          loc: {
            start: {
              line: 529,
              column: 13
            },
            end: {
              line: 538,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 529,
              column: 13
            },
            end: {
              line: 538,
              column: 7
            }
          }, {
            start: {
              line: 535,
              column: 13
            },
            end: {
              line: 538,
              column: 7
            }
          }],
          line: 529
        },
        "66": {
          loc: {
            start: {
              line: 530,
              column: 8
            },
            end: {
              line: 532,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 530,
              column: 8
            },
            end: {
              line: 532,
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
          line: 530
        },
        "67": {
          loc: {
            start: {
              line: 535,
              column: 13
            },
            end: {
              line: 538,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 535,
              column: 13
            },
            end: {
              line: 538,
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
          line: 535
        },
        "68": {
          loc: {
            start: {
              line: 535,
              column: 17
            },
            end: {
              line: 535,
              column: 49
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 535,
              column: 17
            },
            end: {
              line: 535,
              column: 33
            }
          }, {
            start: {
              line: 535,
              column: 37
            },
            end: {
              line: 535,
              column: 49
            }
          }],
          line: 535
        },
        "69": {
          loc: {
            start: {
              line: 545,
              column: 4
            },
            end: {
              line: 547,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 545,
              column: 4
            },
            end: {
              line: 547,
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
          line: 545
        },
        "70": {
          loc: {
            start: {
              line: 551,
              column: 4
            },
            end: {
              line: 553,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 551,
              column: 4
            },
            end: {
              line: 553,
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
          line: 551
        },
        "71": {
          loc: {
            start: {
              line: 551,
              column: 8
            },
            end: {
              line: 551,
              column: 59
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 551,
              column: 8
            },
            end: {
              line: 551,
              column: 15
            }
          }, {
            start: {
              line: 551,
              column: 19
            },
            end: {
              line: 551,
              column: 59
            }
          }],
          line: 551
        },
        "72": {
          loc: {
            start: {
              line: 561,
              column: 4
            },
            end: {
              line: 563,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 561,
              column: 4
            },
            end: {
              line: 563,
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
          line: 561
        },
        "73": {
          loc: {
            start: {
              line: 567,
              column: 4
            },
            end: {
              line: 569,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 567,
              column: 4
            },
            end: {
              line: 569,
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
          line: 567
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
        "166": 0,
        "167": 0,
        "168": 0,
        "169": 0,
        "170": 0,
        "171": 0,
        "172": 0,
        "173": 0,
        "174": 0,
        "175": 0,
        "176": 0,
        "177": 0,
        "178": 0,
        "179": 0,
        "180": 0,
        "181": 0,
        "182": 0,
        "183": 0,
        "184": 0,
        "185": 0,
        "186": 0,
        "187": 0,
        "188": 0,
        "189": 0,
        "190": 0,
        "191": 0,
        "192": 0,
        "193": 0,
        "194": 0,
        "195": 0,
        "196": 0,
        "197": 0,
        "198": 0,
        "199": 0,
        "200": 0,
        "201": 0,
        "202": 0,
        "203": 0,
        "204": 0,
        "205": 0,
        "206": 0,
        "207": 0,
        "208": 0,
        "209": 0,
        "210": 0,
        "211": 0,
        "212": 0,
        "213": 0,
        "214": 0,
        "215": 0,
        "216": 0,
        "217": 0,
        "218": 0,
        "219": 0,
        "220": 0,
        "221": 0,
        "222": 0,
        "223": 0,
        "224": 0,
        "225": 0,
        "226": 0,
        "227": 0,
        "228": 0,
        "229": 0,
        "230": 0,
        "231": 0,
        "232": 0,
        "233": 0,
        "234": 0,
        "235": 0,
        "236": 0,
        "237": 0,
        "238": 0,
        "239": 0,
        "240": 0,
        "241": 0,
        "242": 0,
        "243": 0,
        "244": 0,
        "245": 0,
        "246": 0,
        "247": 0,
        "248": 0,
        "249": 0,
        "250": 0,
        "251": 0,
        "252": 0,
        "253": 0,
        "254": 0,
        "255": 0,
        "256": 0,
        "257": 0,
        "258": 0,
        "259": 0,
        "260": 0,
        "261": 0,
        "262": 0,
        "263": 0,
        "264": 0,
        "265": 0,
        "266": 0,
        "267": 0,
        "268": 0,
        "269": 0,
        "270": 0,
        "271": 0,
        "272": 0,
        "273": 0,
        "274": 0,
        "275": 0,
        "276": 0,
        "277": 0,
        "278": 0,
        "279": 0,
        "280": 0,
        "281": 0,
        "282": 0,
        "283": 0,
        "284": 0,
        "285": 0,
        "286": 0,
        "287": 0,
        "288": 0,
        "289": 0,
        "290": 0
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
        "41": 0
      },
      b: {
        "0": [0, 0],
        "1": [0, 0],
        "2": [0, 0],
        "3": [0, 0],
        "4": [0, 0, 0],
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
        "32": [0, 0],
        "33": [0, 0],
        "34": [0, 0],
        "35": [0, 0],
        "36": [0, 0, 0],
        "37": [0, 0],
        "38": [0, 0],
        "39": [0, 0, 0, 0],
        "40": [0, 0],
        "41": [0, 0],
        "42": [0, 0],
        "43": [0, 0],
        "44": [0, 0],
        "45": [0, 0],
        "46": [0, 0],
        "47": [0, 0],
        "48": [0, 0],
        "49": [0, 0],
        "50": [0, 0],
        "51": [0, 0, 0],
        "52": [0, 0],
        "53": [0, 0],
        "54": [0, 0],
        "55": [0, 0],
        "56": [0, 0],
        "57": [0, 0],
        "58": [0, 0],
        "59": [0, 0],
        "60": [0, 0],
        "61": [0, 0],
        "62": [0, 0],
        "63": [0, 0],
        "64": [0, 0],
        "65": [0, 0],
        "66": [0, 0],
        "67": [0, 0],
        "68": [0, 0],
        "69": [0, 0],
        "70": [0, 0],
        "71": [0, 0],
        "72": [0, 0],
        "73": [0, 0]
      },
      _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
      hash: "252ac1ebfee4b8e85947ee09186b314d0d248eca"
    };
    var coverage = global[gcv] || (global[gcv] = {});

    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }

    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_2rrfhvy759 = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }

  cov_2rrfhvy759();
  /**
   * Constants
   */

  var NAME = (cov_2rrfhvy759().s[0]++, 'carousel');
  var VERSION = (cov_2rrfhvy759().s[1]++, '4.6.2');
  var DATA_KEY = (cov_2rrfhvy759().s[2]++, 'bs.carousel');
  var EVENT_KEY = (cov_2rrfhvy759().s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_2rrfhvy759().s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_2rrfhvy759().s[5]++, $__default["default"].fn[NAME]);
  var ARROW_LEFT_KEYCODE = (cov_2rrfhvy759().s[6]++, 37); // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = (cov_2rrfhvy759().s[7]++, 39); // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = (cov_2rrfhvy759().s[8]++, 500); // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = (cov_2rrfhvy759().s[9]++, 40);
  var CLASS_NAME_CAROUSEL = (cov_2rrfhvy759().s[10]++, 'carousel');
  var CLASS_NAME_ACTIVE = (cov_2rrfhvy759().s[11]++, 'active');
  var CLASS_NAME_SLIDE = (cov_2rrfhvy759().s[12]++, 'slide');
  var CLASS_NAME_RIGHT = (cov_2rrfhvy759().s[13]++, 'carousel-item-right');
  var CLASS_NAME_LEFT = (cov_2rrfhvy759().s[14]++, 'carousel-item-left');
  var CLASS_NAME_NEXT = (cov_2rrfhvy759().s[15]++, 'carousel-item-next');
  var CLASS_NAME_PREV = (cov_2rrfhvy759().s[16]++, 'carousel-item-prev');
  var CLASS_NAME_POINTER_EVENT = (cov_2rrfhvy759().s[17]++, 'pointer-event');
  var DIRECTION_NEXT = (cov_2rrfhvy759().s[18]++, 'next');
  var DIRECTION_PREV = (cov_2rrfhvy759().s[19]++, 'prev');
  var DIRECTION_LEFT = (cov_2rrfhvy759().s[20]++, 'left');
  var DIRECTION_RIGHT = (cov_2rrfhvy759().s[21]++, 'right');
  var EVENT_SLIDE = (cov_2rrfhvy759().s[22]++, "slide" + EVENT_KEY);
  var EVENT_SLID = (cov_2rrfhvy759().s[23]++, "slid" + EVENT_KEY);
  var EVENT_KEYDOWN = (cov_2rrfhvy759().s[24]++, "keydown" + EVENT_KEY);
  var EVENT_MOUSEENTER = (cov_2rrfhvy759().s[25]++, "mouseenter" + EVENT_KEY);
  var EVENT_MOUSELEAVE = (cov_2rrfhvy759().s[26]++, "mouseleave" + EVENT_KEY);
  var EVENT_TOUCHSTART = (cov_2rrfhvy759().s[27]++, "touchstart" + EVENT_KEY);
  var EVENT_TOUCHMOVE = (cov_2rrfhvy759().s[28]++, "touchmove" + EVENT_KEY);
  var EVENT_TOUCHEND = (cov_2rrfhvy759().s[29]++, "touchend" + EVENT_KEY);
  var EVENT_POINTERDOWN = (cov_2rrfhvy759().s[30]++, "pointerdown" + EVENT_KEY);
  var EVENT_POINTERUP = (cov_2rrfhvy759().s[31]++, "pointerup" + EVENT_KEY);
  var EVENT_DRAG_START = (cov_2rrfhvy759().s[32]++, "dragstart" + EVENT_KEY);
  var EVENT_LOAD_DATA_API = (cov_2rrfhvy759().s[33]++, "load" + EVENT_KEY + DATA_API_KEY);
  var EVENT_CLICK_DATA_API = (cov_2rrfhvy759().s[34]++, "click" + EVENT_KEY + DATA_API_KEY);
  var SELECTOR_ACTIVE = (cov_2rrfhvy759().s[35]++, '.active');
  var SELECTOR_ACTIVE_ITEM = (cov_2rrfhvy759().s[36]++, '.active.carousel-item');
  var SELECTOR_ITEM = (cov_2rrfhvy759().s[37]++, '.carousel-item');
  var SELECTOR_ITEM_IMG = (cov_2rrfhvy759().s[38]++, '.carousel-item img');
  var SELECTOR_NEXT_PREV = (cov_2rrfhvy759().s[39]++, '.carousel-item-next, .carousel-item-prev');
  var SELECTOR_INDICATORS = (cov_2rrfhvy759().s[40]++, '.carousel-indicators');
  var SELECTOR_DATA_SLIDE = (cov_2rrfhvy759().s[41]++, '[data-slide], [data-slide-to]');
  var SELECTOR_DATA_RIDE = (cov_2rrfhvy759().s[42]++, '[data-ride="carousel"]');
  var Default = (cov_2rrfhvy759().s[43]++, {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  });
  var DefaultType = (cov_2rrfhvy759().s[44]++, {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  });
  var PointerType = (cov_2rrfhvy759().s[45]++, {
    TOUCH: 'touch',
    PEN: 'pen'
  });
  /**
   * Class definition
   */

  var Carousel = /*#__PURE__*/function () {
    function Carousel(element, config) {
      cov_2rrfhvy759().f[0]++;
      cov_2rrfhvy759().s[46]++;
      this._items = null;
      cov_2rrfhvy759().s[47]++;
      this._interval = null;
      cov_2rrfhvy759().s[48]++;
      this._activeElement = null;
      cov_2rrfhvy759().s[49]++;
      this._isPaused = false;
      cov_2rrfhvy759().s[50]++;
      this._isSliding = false;
      cov_2rrfhvy759().s[51]++;
      this.touchTimeout = null;
      cov_2rrfhvy759().s[52]++;
      this.touchStartX = 0;
      cov_2rrfhvy759().s[53]++;
      this.touchDeltaX = 0;
      cov_2rrfhvy759().s[54]++;
      this._config = this._getConfig(config);
      cov_2rrfhvy759().s[55]++;
      this._element = element;
      cov_2rrfhvy759().s[56]++;
      this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
      cov_2rrfhvy759().s[57]++;
      this._touchSupported = (cov_2rrfhvy759().b[0][0]++, 'ontouchstart' in document.documentElement) || (cov_2rrfhvy759().b[0][1]++, navigator.maxTouchPoints > 0);
      cov_2rrfhvy759().s[58]++;
      this._pointerEvent = Boolean((cov_2rrfhvy759().b[1][0]++, window.PointerEvent) || (cov_2rrfhvy759().b[1][1]++, window.MSPointerEvent));
      cov_2rrfhvy759().s[59]++;

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      cov_2rrfhvy759().f[3]++;
      cov_2rrfhvy759().s[62]++;

      if (!this._isSliding) {
        cov_2rrfhvy759().b[2][0]++;
        cov_2rrfhvy759().s[63]++;

        this._slide(DIRECTION_NEXT);
      } else {
        cov_2rrfhvy759().b[2][1]++;
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      cov_2rrfhvy759().f[4]++;
      var $element = (cov_2rrfhvy759().s[64]++, $__default["default"](this._element)); // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible

      cov_2rrfhvy759().s[65]++;

      if ((cov_2rrfhvy759().b[4][0]++, !document.hidden) && (cov_2rrfhvy759().b[4][1]++, $element.is(':visible')) && (cov_2rrfhvy759().b[4][2]++, $element.css('visibility') !== 'hidden')) {
        cov_2rrfhvy759().b[3][0]++;
        cov_2rrfhvy759().s[66]++;
        this.next();
      } else {
        cov_2rrfhvy759().b[3][1]++;
      }
    };

    _proto.prev = function prev() {
      cov_2rrfhvy759().f[5]++;
      cov_2rrfhvy759().s[67]++;

      if (!this._isSliding) {
        cov_2rrfhvy759().b[5][0]++;
        cov_2rrfhvy759().s[68]++;

        this._slide(DIRECTION_PREV);
      } else {
        cov_2rrfhvy759().b[5][1]++;
      }
    };

    _proto.pause = function pause(event) {
      cov_2rrfhvy759().f[6]++;
      cov_2rrfhvy759().s[69]++;

      if (!event) {
        cov_2rrfhvy759().b[6][0]++;
        cov_2rrfhvy759().s[70]++;
        this._isPaused = true;
      } else {
        cov_2rrfhvy759().b[6][1]++;
      }

      cov_2rrfhvy759().s[71]++;

      if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
        cov_2rrfhvy759().b[7][0]++;
        cov_2rrfhvy759().s[72]++;
        Util__default["default"].triggerTransitionEnd(this._element);
        cov_2rrfhvy759().s[73]++;
        this.cycle(true);
      } else {
        cov_2rrfhvy759().b[7][1]++;
      }

      cov_2rrfhvy759().s[74]++;
      clearInterval(this._interval);
      cov_2rrfhvy759().s[75]++;
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      cov_2rrfhvy759().f[7]++;
      cov_2rrfhvy759().s[76]++;

      if (!event) {
        cov_2rrfhvy759().b[8][0]++;
        cov_2rrfhvy759().s[77]++;
        this._isPaused = false;
      } else {
        cov_2rrfhvy759().b[8][1]++;
      }

      cov_2rrfhvy759().s[78]++;

      if (this._interval) {
        cov_2rrfhvy759().b[9][0]++;
        cov_2rrfhvy759().s[79]++;
        clearInterval(this._interval);
        cov_2rrfhvy759().s[80]++;
        this._interval = null;
      } else {
        cov_2rrfhvy759().b[9][1]++;
      }

      cov_2rrfhvy759().s[81]++;

      if ((cov_2rrfhvy759().b[11][0]++, this._config.interval) && (cov_2rrfhvy759().b[11][1]++, !this._isPaused)) {
        cov_2rrfhvy759().b[10][0]++;
        cov_2rrfhvy759().s[82]++;

        this._updateInterval();

        cov_2rrfhvy759().s[83]++;
        this._interval = setInterval((document.visibilityState ? (cov_2rrfhvy759().b[12][0]++, this.nextWhenVisible) : (cov_2rrfhvy759().b[12][1]++, this.next)).bind(this), this._config.interval);
      } else {
        cov_2rrfhvy759().b[10][1]++;
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      cov_2rrfhvy759().f[8]++;
      cov_2rrfhvy759().s[84]++;
      this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);
      var activeIndex = (cov_2rrfhvy759().s[85]++, this._getItemIndex(this._activeElement));
      cov_2rrfhvy759().s[86]++;

      if ((cov_2rrfhvy759().b[14][0]++, index > this._items.length - 1) || (cov_2rrfhvy759().b[14][1]++, index < 0)) {
        cov_2rrfhvy759().b[13][0]++;
        cov_2rrfhvy759().s[87]++;
        return;
      } else {
        cov_2rrfhvy759().b[13][1]++;
      }

      cov_2rrfhvy759().s[88]++;

      if (this._isSliding) {
        cov_2rrfhvy759().b[15][0]++;
        cov_2rrfhvy759().s[89]++;
        $__default["default"](this._element).one(EVENT_SLID, function () {
          cov_2rrfhvy759().f[9]++;
          cov_2rrfhvy759().s[90]++;
          return _this.to(index);
        });
        cov_2rrfhvy759().s[91]++;
        return;
      } else {
        cov_2rrfhvy759().b[15][1]++;
      }

      cov_2rrfhvy759().s[92]++;

      if (activeIndex === index) {
        cov_2rrfhvy759().b[16][0]++;
        cov_2rrfhvy759().s[93]++;
        this.pause();
        cov_2rrfhvy759().s[94]++;
        this.cycle();
        cov_2rrfhvy759().s[95]++;
        return;
      } else {
        cov_2rrfhvy759().b[16][1]++;
      }

      var direction = (cov_2rrfhvy759().s[96]++, index > activeIndex ? (cov_2rrfhvy759().b[17][0]++, DIRECTION_NEXT) : (cov_2rrfhvy759().b[17][1]++, DIRECTION_PREV));
      cov_2rrfhvy759().s[97]++;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      cov_2rrfhvy759().f[10]++;
      cov_2rrfhvy759().s[98]++;
      $__default["default"](this._element).off(EVENT_KEY);
      cov_2rrfhvy759().s[99]++;
      $__default["default"].removeData(this._element, DATA_KEY);
      cov_2rrfhvy759().s[100]++;
      this._items = null;
      cov_2rrfhvy759().s[101]++;
      this._config = null;
      cov_2rrfhvy759().s[102]++;
      this._element = null;
      cov_2rrfhvy759().s[103]++;
      this._interval = null;
      cov_2rrfhvy759().s[104]++;
      this._isPaused = null;
      cov_2rrfhvy759().s[105]++;
      this._isSliding = null;
      cov_2rrfhvy759().s[106]++;
      this._activeElement = null;
      cov_2rrfhvy759().s[107]++;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      cov_2rrfhvy759().f[11]++;
      cov_2rrfhvy759().s[108]++;
      config = _extends({}, Default, config);
      cov_2rrfhvy759().s[109]++;
      Util__default["default"].typeCheckConfig(NAME, config, DefaultType);
      cov_2rrfhvy759().s[110]++;
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      cov_2rrfhvy759().f[12]++;
      var absDeltax = (cov_2rrfhvy759().s[111]++, Math.abs(this.touchDeltaX));
      cov_2rrfhvy759().s[112]++;

      if (absDeltax <= SWIPE_THRESHOLD) {
        cov_2rrfhvy759().b[18][0]++;
        cov_2rrfhvy759().s[113]++;
        return;
      } else {
        cov_2rrfhvy759().b[18][1]++;
      }

      var direction = (cov_2rrfhvy759().s[114]++, absDeltax / this.touchDeltaX);
      cov_2rrfhvy759().s[115]++;
      this.touchDeltaX = 0; // swipe left

      cov_2rrfhvy759().s[116]++;

      if (direction > 0) {
        cov_2rrfhvy759().b[19][0]++;
        cov_2rrfhvy759().s[117]++;
        this.prev();
      } else {
        cov_2rrfhvy759().b[19][1]++;
      } // swipe right


      cov_2rrfhvy759().s[118]++;

      if (direction < 0) {
        cov_2rrfhvy759().b[20][0]++;
        cov_2rrfhvy759().s[119]++;
        this.next();
      } else {
        cov_2rrfhvy759().b[20][1]++;
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      cov_2rrfhvy759().f[13]++;
      cov_2rrfhvy759().s[120]++;

      if (this._config.keyboard) {
        cov_2rrfhvy759().b[21][0]++;
        cov_2rrfhvy759().s[121]++;
        $__default["default"](this._element).on(EVENT_KEYDOWN, function (event) {
          cov_2rrfhvy759().f[14]++;
          cov_2rrfhvy759().s[122]++;
          return _this2._keydown(event);
        });
      } else {
        cov_2rrfhvy759().b[21][1]++;
      }

      cov_2rrfhvy759().s[123]++;

      if (this._config.pause === 'hover') {
        cov_2rrfhvy759().b[22][0]++;
        cov_2rrfhvy759().s[124]++;
        $__default["default"](this._element).on(EVENT_MOUSEENTER, function (event) {
          cov_2rrfhvy759().f[15]++;
          cov_2rrfhvy759().s[125]++;
          return _this2.pause(event);
        }).on(EVENT_MOUSELEAVE, function (event) {
          cov_2rrfhvy759().f[16]++;
          cov_2rrfhvy759().s[126]++;
          return _this2.cycle(event);
        });
      } else {
        cov_2rrfhvy759().b[22][1]++;
      }

      cov_2rrfhvy759().s[127]++;

      if (this._config.touch) {
        cov_2rrfhvy759().b[23][0]++;
        cov_2rrfhvy759().s[128]++;

        this._addTouchEventListeners();
      } else {
        cov_2rrfhvy759().b[23][1]++;
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      cov_2rrfhvy759().f[17]++;
      cov_2rrfhvy759().s[129]++;

      if (!this._touchSupported) {
        cov_2rrfhvy759().b[24][0]++;
        cov_2rrfhvy759().s[130]++;
        return;
      } else {
        cov_2rrfhvy759().b[24][1]++;
      }

      cov_2rrfhvy759().s[131]++;

      var start = function start(event) {
        cov_2rrfhvy759().f[18]++;
        cov_2rrfhvy759().s[132]++;

        if ((cov_2rrfhvy759().b[26][0]++, _this3._pointerEvent) && (cov_2rrfhvy759().b[26][1]++, PointerType[event.originalEvent.pointerType.toUpperCase()])) {
          cov_2rrfhvy759().b[25][0]++;
          cov_2rrfhvy759().s[133]++;
          _this3.touchStartX = event.originalEvent.clientX;
        } else {
          cov_2rrfhvy759().b[25][1]++;
          cov_2rrfhvy759().s[134]++;

          if (!_this3._pointerEvent) {
            cov_2rrfhvy759().b[27][0]++;
            cov_2rrfhvy759().s[135]++;
            _this3.touchStartX = event.originalEvent.touches[0].clientX;
          } else {
            cov_2rrfhvy759().b[27][1]++;
          }
        }
      };

      cov_2rrfhvy759().s[136]++;

      var move = function move(event) {
        cov_2rrfhvy759().f[19]++;
        cov_2rrfhvy759().s[137]++;
        // ensure swiping with one touch and not pinching
        _this3.touchDeltaX = (cov_2rrfhvy759().b[29][0]++, event.originalEvent.touches) && (cov_2rrfhvy759().b[29][1]++, event.originalEvent.touches.length > 1) ? (cov_2rrfhvy759().b[28][0]++, 0) : (cov_2rrfhvy759().b[28][1]++, event.originalEvent.touches[0].clientX - _this3.touchStartX);
      };

      cov_2rrfhvy759().s[138]++;

      var end = function end(event) {
        cov_2rrfhvy759().f[20]++;
        cov_2rrfhvy759().s[139]++;

        if ((cov_2rrfhvy759().b[31][0]++, _this3._pointerEvent) && (cov_2rrfhvy759().b[31][1]++, PointerType[event.originalEvent.pointerType.toUpperCase()])) {
          cov_2rrfhvy759().b[30][0]++;
          cov_2rrfhvy759().s[140]++;
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        } else {
          cov_2rrfhvy759().b[30][1]++;
        }

        cov_2rrfhvy759().s[141]++;

        _this3._handleSwipe();

        cov_2rrfhvy759().s[142]++;

        if (_this3._config.pause === 'hover') {
          cov_2rrfhvy759().b[32][0]++;
          cov_2rrfhvy759().s[143]++;

          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          cov_2rrfhvy759().s[144]++;

          if (_this3.touchTimeout) {
            cov_2rrfhvy759().b[33][0]++;
            cov_2rrfhvy759().s[145]++;
            clearTimeout(_this3.touchTimeout);
          } else {
            cov_2rrfhvy759().b[33][1]++;
          }

          cov_2rrfhvy759().s[146]++;
          _this3.touchTimeout = setTimeout(function (event) {
            cov_2rrfhvy759().f[21]++;
            cov_2rrfhvy759().s[147]++;
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        } else {
          cov_2rrfhvy759().b[32][1]++;
        }
      };

      cov_2rrfhvy759().s[148]++;
      $__default["default"](this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
        cov_2rrfhvy759().f[22]++;
        cov_2rrfhvy759().s[149]++;
        return e.preventDefault();
      });
      cov_2rrfhvy759().s[150]++;

      if (this._pointerEvent) {
        cov_2rrfhvy759().b[34][0]++;
        cov_2rrfhvy759().s[151]++;
        $__default["default"](this._element).on(EVENT_POINTERDOWN, function (event) {
          cov_2rrfhvy759().f[23]++;
          cov_2rrfhvy759().s[152]++;
          return start(event);
        });
        cov_2rrfhvy759().s[153]++;
        $__default["default"](this._element).on(EVENT_POINTERUP, function (event) {
          cov_2rrfhvy759().f[24]++;
          cov_2rrfhvy759().s[154]++;
          return end(event);
        });
        cov_2rrfhvy759().s[155]++;

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        cov_2rrfhvy759().b[34][1]++;
        cov_2rrfhvy759().s[156]++;
        $__default["default"](this._element).on(EVENT_TOUCHSTART, function (event) {
          cov_2rrfhvy759().f[25]++;
          cov_2rrfhvy759().s[157]++;
          return start(event);
        });
        cov_2rrfhvy759().s[158]++;
        $__default["default"](this._element).on(EVENT_TOUCHMOVE, function (event) {
          cov_2rrfhvy759().f[26]++;
          cov_2rrfhvy759().s[159]++;
          return move(event);
        });
        cov_2rrfhvy759().s[160]++;
        $__default["default"](this._element).on(EVENT_TOUCHEND, function (event) {
          cov_2rrfhvy759().f[27]++;
          cov_2rrfhvy759().s[161]++;
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      cov_2rrfhvy759().f[28]++;
      cov_2rrfhvy759().s[162]++;

      if (/input|textarea/i.test(event.target.tagName)) {
        cov_2rrfhvy759().b[35][0]++;
        cov_2rrfhvy759().s[163]++;
        return;
      } else {
        cov_2rrfhvy759().b[35][1]++;
      }

      cov_2rrfhvy759().s[164]++;

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          cov_2rrfhvy759().b[36][0]++;
          cov_2rrfhvy759().s[165]++;
          event.preventDefault();
          cov_2rrfhvy759().s[166]++;
          this.prev();
          cov_2rrfhvy759().s[167]++;
          break;

        case ARROW_RIGHT_KEYCODE:
          cov_2rrfhvy759().b[36][1]++;
          cov_2rrfhvy759().s[168]++;
          event.preventDefault();
          cov_2rrfhvy759().s[169]++;
          this.next();
          cov_2rrfhvy759().s[170]++;
          break;

        default:
          cov_2rrfhvy759().b[36][2]++;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      cov_2rrfhvy759().f[29]++;
      cov_2rrfhvy759().s[171]++;
      this._items = (cov_2rrfhvy759().b[38][0]++, element) && (cov_2rrfhvy759().b[38][1]++, element.parentNode) ? (cov_2rrfhvy759().b[37][0]++, [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM))) : (cov_2rrfhvy759().b[37][1]++, []);
      cov_2rrfhvy759().s[172]++;
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      cov_2rrfhvy759().f[30]++;
      var isNextDirection = (cov_2rrfhvy759().s[173]++, direction === DIRECTION_NEXT);
      var isPrevDirection = (cov_2rrfhvy759().s[174]++, direction === DIRECTION_PREV);
      var activeIndex = (cov_2rrfhvy759().s[175]++, this._getItemIndex(activeElement));
      var lastItemIndex = (cov_2rrfhvy759().s[176]++, this._items.length - 1);
      var isGoingToWrap = (cov_2rrfhvy759().s[177]++, (cov_2rrfhvy759().b[39][0]++, isPrevDirection) && (cov_2rrfhvy759().b[39][1]++, activeIndex === 0) || (cov_2rrfhvy759().b[39][2]++, isNextDirection) && (cov_2rrfhvy759().b[39][3]++, activeIndex === lastItemIndex));
      cov_2rrfhvy759().s[178]++;

      if ((cov_2rrfhvy759().b[41][0]++, isGoingToWrap) && (cov_2rrfhvy759().b[41][1]++, !this._config.wrap)) {
        cov_2rrfhvy759().b[40][0]++;
        cov_2rrfhvy759().s[179]++;
        return activeElement;
      } else {
        cov_2rrfhvy759().b[40][1]++;
      }

      var delta = (cov_2rrfhvy759().s[180]++, direction === DIRECTION_PREV ? (cov_2rrfhvy759().b[42][0]++, -1) : (cov_2rrfhvy759().b[42][1]++, 1));
      var itemIndex = (cov_2rrfhvy759().s[181]++, (activeIndex + delta) % this._items.length);
      cov_2rrfhvy759().s[182]++;
      return itemIndex === -1 ? (cov_2rrfhvy759().b[43][0]++, this._items[this._items.length - 1]) : (cov_2rrfhvy759().b[43][1]++, this._items[itemIndex]);
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      cov_2rrfhvy759().f[31]++;
      var targetIndex = (cov_2rrfhvy759().s[183]++, this._getItemIndex(relatedTarget));
      var fromIndex = (cov_2rrfhvy759().s[184]++, this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM)));
      var slideEvent = (cov_2rrfhvy759().s[185]++, $__default["default"].Event(EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      }));
      cov_2rrfhvy759().s[186]++;
      $__default["default"](this._element).trigger(slideEvent);
      cov_2rrfhvy759().s[187]++;
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      cov_2rrfhvy759().f[32]++;
      cov_2rrfhvy759().s[188]++;

      if (this._indicatorsElement) {
        cov_2rrfhvy759().b[44][0]++;
        var indicators = (cov_2rrfhvy759().s[189]++, [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE)));
        cov_2rrfhvy759().s[190]++;
        $__default["default"](indicators).removeClass(CLASS_NAME_ACTIVE);
        var nextIndicator = (cov_2rrfhvy759().s[191]++, this._indicatorsElement.children[this._getItemIndex(element)]);
        cov_2rrfhvy759().s[192]++;

        if (nextIndicator) {
          cov_2rrfhvy759().b[45][0]++;
          cov_2rrfhvy759().s[193]++;
          $__default["default"](nextIndicator).addClass(CLASS_NAME_ACTIVE);
        } else {
          cov_2rrfhvy759().b[45][1]++;
        }
      } else {
        cov_2rrfhvy759().b[44][1]++;
      }
    };

    _proto._updateInterval = function _updateInterval() {
      cov_2rrfhvy759().f[33]++;
      var element = (cov_2rrfhvy759().s[194]++, (cov_2rrfhvy759().b[46][0]++, this._activeElement) || (cov_2rrfhvy759().b[46][1]++, this._element.querySelector(SELECTOR_ACTIVE_ITEM)));
      cov_2rrfhvy759().s[195]++;

      if (!element) {
        cov_2rrfhvy759().b[47][0]++;
        cov_2rrfhvy759().s[196]++;
        return;
      } else {
        cov_2rrfhvy759().b[47][1]++;
      }

      var elementInterval = (cov_2rrfhvy759().s[197]++, parseInt(element.getAttribute('data-interval'), 10));
      cov_2rrfhvy759().s[198]++;

      if (elementInterval) {
        cov_2rrfhvy759().b[48][0]++;
        cov_2rrfhvy759().s[199]++;
        this._config.defaultInterval = (cov_2rrfhvy759().b[49][0]++, this._config.defaultInterval) || (cov_2rrfhvy759().b[49][1]++, this._config.interval);
        cov_2rrfhvy759().s[200]++;
        this._config.interval = elementInterval;
      } else {
        cov_2rrfhvy759().b[48][1]++;
        cov_2rrfhvy759().s[201]++;
        this._config.interval = (cov_2rrfhvy759().b[50][0]++, this._config.defaultInterval) || (cov_2rrfhvy759().b[50][1]++, this._config.interval);
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      cov_2rrfhvy759().f[34]++;
      var activeElement = (cov_2rrfhvy759().s[202]++, this._element.querySelector(SELECTOR_ACTIVE_ITEM));
      var activeElementIndex = (cov_2rrfhvy759().s[203]++, this._getItemIndex(activeElement));
      var nextElement = (cov_2rrfhvy759().s[204]++, (cov_2rrfhvy759().b[51][0]++, element) || (cov_2rrfhvy759().b[51][1]++, activeElement) && (cov_2rrfhvy759().b[51][2]++, this._getItemByDirection(direction, activeElement)));
      var nextElementIndex = (cov_2rrfhvy759().s[205]++, this._getItemIndex(nextElement));
      var isCycling = (cov_2rrfhvy759().s[206]++, Boolean(this._interval));
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;
      cov_2rrfhvy759().s[207]++;

      if (direction === DIRECTION_NEXT) {
        cov_2rrfhvy759().b[52][0]++;
        cov_2rrfhvy759().s[208]++;
        directionalClassName = CLASS_NAME_LEFT;
        cov_2rrfhvy759().s[209]++;
        orderClassName = CLASS_NAME_NEXT;
        cov_2rrfhvy759().s[210]++;
        eventDirectionName = DIRECTION_LEFT;
      } else {
        cov_2rrfhvy759().b[52][1]++;
        cov_2rrfhvy759().s[211]++;
        directionalClassName = CLASS_NAME_RIGHT;
        cov_2rrfhvy759().s[212]++;
        orderClassName = CLASS_NAME_PREV;
        cov_2rrfhvy759().s[213]++;
        eventDirectionName = DIRECTION_RIGHT;
      }

      cov_2rrfhvy759().s[214]++;

      if ((cov_2rrfhvy759().b[54][0]++, nextElement) && (cov_2rrfhvy759().b[54][1]++, $__default["default"](nextElement).hasClass(CLASS_NAME_ACTIVE))) {
        cov_2rrfhvy759().b[53][0]++;
        cov_2rrfhvy759().s[215]++;
        this._isSliding = false;
        cov_2rrfhvy759().s[216]++;
        return;
      } else {
        cov_2rrfhvy759().b[53][1]++;
      }

      var slideEvent = (cov_2rrfhvy759().s[217]++, this._triggerSlideEvent(nextElement, eventDirectionName));
      cov_2rrfhvy759().s[218]++;

      if (slideEvent.isDefaultPrevented()) {
        cov_2rrfhvy759().b[55][0]++;
        cov_2rrfhvy759().s[219]++;
        return;
      } else {
        cov_2rrfhvy759().b[55][1]++;
      }

      cov_2rrfhvy759().s[220]++;

      if ((cov_2rrfhvy759().b[57][0]++, !activeElement) || (cov_2rrfhvy759().b[57][1]++, !nextElement)) {
        cov_2rrfhvy759().b[56][0]++;
        cov_2rrfhvy759().s[221]++;
        // Some weirdness is happening, so we bail
        return;
      } else {
        cov_2rrfhvy759().b[56][1]++;
      }

      cov_2rrfhvy759().s[222]++;
      this._isSliding = true;
      cov_2rrfhvy759().s[223]++;

      if (isCycling) {
        cov_2rrfhvy759().b[58][0]++;
        cov_2rrfhvy759().s[224]++;
        this.pause();
      } else {
        cov_2rrfhvy759().b[58][1]++;
      }

      cov_2rrfhvy759().s[225]++;

      this._setActiveIndicatorElement(nextElement);

      cov_2rrfhvy759().s[226]++;
      this._activeElement = nextElement;
      var slidEvent = (cov_2rrfhvy759().s[227]++, $__default["default"].Event(EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      }));
      cov_2rrfhvy759().s[228]++;

      if ($__default["default"](this._element).hasClass(CLASS_NAME_SLIDE)) {
        cov_2rrfhvy759().b[59][0]++;
        cov_2rrfhvy759().s[229]++;
        $__default["default"](nextElement).addClass(orderClassName);
        cov_2rrfhvy759().s[230]++;
        Util__default["default"].reflow(nextElement);
        cov_2rrfhvy759().s[231]++;
        $__default["default"](activeElement).addClass(directionalClassName);
        cov_2rrfhvy759().s[232]++;
        $__default["default"](nextElement).addClass(directionalClassName);
        var transitionDuration = (cov_2rrfhvy759().s[233]++, Util__default["default"].getTransitionDurationFromElement(activeElement));
        cov_2rrfhvy759().s[234]++;
        $__default["default"](activeElement).one(Util__default["default"].TRANSITION_END, function () {
          cov_2rrfhvy759().f[35]++;
          cov_2rrfhvy759().s[235]++;
          $__default["default"](nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE);
          cov_2rrfhvy759().s[236]++;
          $__default["default"](activeElement).removeClass(CLASS_NAME_ACTIVE + " " + orderClassName + " " + directionalClassName);
          cov_2rrfhvy759().s[237]++;
          _this4._isSliding = false;
          cov_2rrfhvy759().s[238]++;
          setTimeout(function () {
            cov_2rrfhvy759().f[36]++;
            cov_2rrfhvy759().s[239]++;
            return $__default["default"](_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        cov_2rrfhvy759().b[59][1]++;
        cov_2rrfhvy759().s[240]++;
        $__default["default"](activeElement).removeClass(CLASS_NAME_ACTIVE);
        cov_2rrfhvy759().s[241]++;
        $__default["default"](nextElement).addClass(CLASS_NAME_ACTIVE);
        cov_2rrfhvy759().s[242]++;
        this._isSliding = false;
        cov_2rrfhvy759().s[243]++;
        $__default["default"](this._element).trigger(slidEvent);
      }

      cov_2rrfhvy759().s[244]++;

      if (isCycling) {
        cov_2rrfhvy759().b[60][0]++;
        cov_2rrfhvy759().s[245]++;
        this.cycle();
      } else {
        cov_2rrfhvy759().b[60][1]++;
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      cov_2rrfhvy759().f[37]++;
      cov_2rrfhvy759().s[246]++;
      return this.each(function () {
        cov_2rrfhvy759().f[38]++;
        var data = (cov_2rrfhvy759().s[247]++, $__default["default"](this).data(DATA_KEY));

        var _config = (cov_2rrfhvy759().s[248]++, _extends({}, Default, $__default["default"](this).data()));

        cov_2rrfhvy759().s[249]++;

        if (typeof config === 'object') {
          cov_2rrfhvy759().b[61][0]++;
          cov_2rrfhvy759().s[250]++;
          _config = _extends({}, _config, config);
        } else {
          cov_2rrfhvy759().b[61][1]++;
        }

        var action = (cov_2rrfhvy759().s[251]++, typeof config === 'string' ? (cov_2rrfhvy759().b[62][0]++, config) : (cov_2rrfhvy759().b[62][1]++, _config.slide));
        cov_2rrfhvy759().s[252]++;

        if (!data) {
          cov_2rrfhvy759().b[63][0]++;
          cov_2rrfhvy759().s[253]++;
          data = new Carousel(this, _config);
          cov_2rrfhvy759().s[254]++;
          $__default["default"](this).data(DATA_KEY, data);
        } else {
          cov_2rrfhvy759().b[63][1]++;
        }

        cov_2rrfhvy759().s[255]++;

        if (typeof config === 'number') {
          cov_2rrfhvy759().b[64][0]++;
          cov_2rrfhvy759().s[256]++;
          data.to(config);
        } else {
          cov_2rrfhvy759().b[64][1]++;
          cov_2rrfhvy759().s[257]++;

          if (typeof action === 'string') {
            cov_2rrfhvy759().b[65][0]++;
            cov_2rrfhvy759().s[258]++;

            if (typeof data[action] === 'undefined') {
              cov_2rrfhvy759().b[66][0]++;
              cov_2rrfhvy759().s[259]++;
              throw new TypeError("No method named \"" + action + "\"");
            } else {
              cov_2rrfhvy759().b[66][1]++;
            }

            cov_2rrfhvy759().s[260]++;
            data[action]();
          } else {
            cov_2rrfhvy759().b[65][1]++;
            cov_2rrfhvy759().s[261]++;

            if ((cov_2rrfhvy759().b[68][0]++, _config.interval) && (cov_2rrfhvy759().b[68][1]++, _config.ride)) {
              cov_2rrfhvy759().b[67][0]++;
              cov_2rrfhvy759().s[262]++;
              data.pause();
              cov_2rrfhvy759().s[263]++;
              data.cycle();
            } else {
              cov_2rrfhvy759().b[67][1]++;
            }
          }
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      cov_2rrfhvy759().f[39]++;
      var selector = (cov_2rrfhvy759().s[264]++, Util__default["default"].getSelectorFromElement(this));
      cov_2rrfhvy759().s[265]++;

      if (!selector) {
        cov_2rrfhvy759().b[69][0]++;
        cov_2rrfhvy759().s[266]++;
        return;
      } else {
        cov_2rrfhvy759().b[69][1]++;
      }

      var target = (cov_2rrfhvy759().s[267]++, $__default["default"](selector)[0]);
      cov_2rrfhvy759().s[268]++;

      if ((cov_2rrfhvy759().b[71][0]++, !target) || (cov_2rrfhvy759().b[71][1]++, !$__default["default"](target).hasClass(CLASS_NAME_CAROUSEL))) {
        cov_2rrfhvy759().b[70][0]++;
        cov_2rrfhvy759().s[269]++;
        return;
      } else {
        cov_2rrfhvy759().b[70][1]++;
      }

      var config = (cov_2rrfhvy759().s[270]++, _extends({}, $__default["default"](target).data(), $__default["default"](this).data()));
      var slideIndex = (cov_2rrfhvy759().s[271]++, this.getAttribute('data-slide-to'));
      cov_2rrfhvy759().s[272]++;

      if (slideIndex) {
        cov_2rrfhvy759().b[72][0]++;
        cov_2rrfhvy759().s[273]++;
        config.interval = false;
      } else {
        cov_2rrfhvy759().b[72][1]++;
      }

      cov_2rrfhvy759().s[274]++;

      Carousel._jQueryInterface.call($__default["default"](target), config);

      cov_2rrfhvy759().s[275]++;

      if (slideIndex) {
        cov_2rrfhvy759().b[73][0]++;
        cov_2rrfhvy759().s[276]++;
        $__default["default"](target).data(DATA_KEY).to(slideIndex);
      } else {
        cov_2rrfhvy759().b[73][1]++;
      }

      cov_2rrfhvy759().s[277]++;
      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        cov_2rrfhvy759().f[1]++;
        cov_2rrfhvy759().s[60]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_2rrfhvy759().f[2]++;
        cov_2rrfhvy759().s[61]++;
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * Data API implementation
   */


  cov_2rrfhvy759().s[278]++;
  $__default["default"](document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
  cov_2rrfhvy759().s[279]++;
  $__default["default"](window).on(EVENT_LOAD_DATA_API, function () {
    cov_2rrfhvy759().f[40]++;
    var carousels = (cov_2rrfhvy759().s[280]++, [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE)));
    cov_2rrfhvy759().s[281]++;

    for (var i = (cov_2rrfhvy759().s[282]++, 0), len = (cov_2rrfhvy759().s[283]++, carousels.length); i < len; i++) {
      var $carousel = (cov_2rrfhvy759().s[284]++, $__default["default"](carousels[i]));
      cov_2rrfhvy759().s[285]++;

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * jQuery
   */

  cov_2rrfhvy759().s[286]++;
  $__default["default"].fn[NAME] = Carousel._jQueryInterface;
  cov_2rrfhvy759().s[287]++;
  $__default["default"].fn[NAME].Constructor = Carousel;
  cov_2rrfhvy759().s[288]++;

  $__default["default"].fn[NAME].noConflict = function () {
    cov_2rrfhvy759().f[41]++;
    cov_2rrfhvy759().s[289]++;
    $__default["default"].fn[NAME] = JQUERY_NO_CONFLICT;
    cov_2rrfhvy759().s[290]++;
    return Carousel._jQueryInterface;
  };

  return Carousel;

}));
//# sourceMappingURL=carousel.js.map

/*!
  * Bootstrap button.js v4.6.0-2 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2021 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Button = factory(global.jQuery));
}(this, (function ($) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);

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

  function cov_2b2z8qvtnt() {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/button.js";
    var hash = "d795d62d5e23934caea12a50fe8211a90525b67e";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/button.js",
      statementMap: {
        "0": {
          start: {
            line: 16,
            column: 13
          },
          end: {
            line: 16,
            column: 21
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
            column: 17
          },
          end: {
            line: 18,
            column: 28
          }
        },
        "3": {
          start: {
            line: 19,
            column: 18
          },
          end: {
            line: 19,
            column: 32
          }
        },
        "4": {
          start: {
            line: 20,
            column: 21
          },
          end: {
            line: 20,
            column: 32
          }
        },
        "5": {
          start: {
            line: 21,
            column: 27
          },
          end: {
            line: 21,
            column: 37
          }
        },
        "6": {
          start: {
            line: 23,
            column: 26
          },
          end: {
            line: 23,
            column: 34
          }
        },
        "7": {
          start: {
            line: 24,
            column: 26
          },
          end: {
            line: 24,
            column: 31
          }
        },
        "8": {
          start: {
            line: 25,
            column: 25
          },
          end: {
            line: 25,
            column: 32
          }
        },
        "9": {
          start: {
            line: 27,
            column: 36
          },
          end: {
            line: 27,
            column: 61
          }
        },
        "10": {
          start: {
            line: 28,
            column: 30
          },
          end: {
            line: 28,
            column: 55
          }
        },
        "11": {
          start: {
            line: 29,
            column: 29
          },
          end: {
            line: 29,
            column: 53
          }
        },
        "12": {
          start: {
            line: 30,
            column: 38
          },
          end: {
            line: 30,
            column: 68
          }
        },
        "13": {
          start: {
            line: 31,
            column: 23
          },
          end: {
            line: 31,
            column: 51
          }
        },
        "14": {
          start: {
            line: 32,
            column: 24
          },
          end: {
            line: 32,
            column: 33
          }
        },
        "15": {
          start: {
            line: 33,
            column: 24
          },
          end: {
            line: 33,
            column: 30
          }
        },
        "16": {
          start: {
            line: 35,
            column: 29
          },
          end: {
            line: 35,
            column: 63
          }
        },
        "17": {
          start: {
            line: 36,
            column: 34
          },
          end: {
            line: 37,
            column: 59
          }
        },
        "18": {
          start: {
            line: 38,
            column: 28
          },
          end: {
            line: 38,
            column: 61
          }
        },
        "19": {
          start: {
            line: 48,
            column: 4
          },
          end: {
            line: 48,
            column: 27
          }
        },
        "20": {
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 49,
            column: 41
          }
        },
        "21": {
          start: {
            line: 55,
            column: 4
          },
          end: {
            line: 55,
            column: 18
          }
        },
        "22": {
          start: {
            line: 61,
            column: 29
          },
          end: {
            line: 61,
            column: 33
          }
        },
        "23": {
          start: {
            line: 62,
            column: 25
          },
          end: {
            line: 62,
            column: 29
          }
        },
        "24": {
          start: {
            line: 63,
            column: 24
          },
          end: {
            line: 63,
            column: 74
          }
        },
        "25": {
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 95,
            column: 5
          }
        },
        "26": {
          start: {
            line: 66,
            column: 20
          },
          end: {
            line: 66,
            column: 63
          }
        },
        "27": {
          start: {
            line: 68,
            column: 6
          },
          end: {
            line: 94,
            column: 7
          }
        },
        "28": {
          start: {
            line: 69,
            column: 8
          },
          end: {
            line: 79,
            column: 9
          }
        },
        "29": {
          start: {
            line: 70,
            column: 10
          },
          end: {
            line: 78,
            column: 11
          }
        },
        "30": {
          start: {
            line: 71,
            column: 12
          },
          end: {
            line: 71,
            column: 38
          }
        },
        "31": {
          start: {
            line: 73,
            column: 34
          },
          end: {
            line: 73,
            column: 76
          }
        },
        "32": {
          start: {
            line: 75,
            column: 12
          },
          end: {
            line: 77,
            column: 13
          }
        },
        "33": {
          start: {
            line: 76,
            column: 14
          },
          end: {
            line: 76,
            column: 61
          }
        },
        "34": {
          start: {
            line: 81,
            column: 8
          },
          end: {
            line: 90,
            column: 9
          }
        },
        "35": {
          start: {
            line: 83,
            column: 10
          },
          end: {
            line: 85,
            column: 11
          }
        },
        "36": {
          start: {
            line: 84,
            column: 12
          },
          end: {
            line: 84,
            column: 80
          }
        },
        "37": {
          start: {
            line: 87,
            column: 10
          },
          end: {
            line: 89,
            column: 11
          }
        },
        "38": {
          start: {
            line: 88,
            column: 12
          },
          end: {
            line: 88,
            column: 38
          }
        },
        "39": {
          start: {
            line: 92,
            column: 8
          },
          end: {
            line: 92,
            column: 21
          }
        },
        "40": {
          start: {
            line: 93,
            column: 8
          },
          end: {
            line: 93,
            column: 30
          }
        },
        "41": {
          start: {
            line: 97,
            column: 4
          },
          end: {
            line: 105,
            column: 5
          }
        },
        "42": {
          start: {
            line: 98,
            column: 6
          },
          end: {
            line: 100,
            column: 7
          }
        },
        "43": {
          start: {
            line: 99,
            column: 8
          },
          end: {
            line: 99,
            column: 104
          }
        },
        "44": {
          start: {
            line: 102,
            column: 6
          },
          end: {
            line: 104,
            column: 7
          }
        },
        "45": {
          start: {
            line: 103,
            column: 8
          },
          end: {
            line: 103,
            column: 55
          }
        },
        "46": {
          start: {
            line: 109,
            column: 4
          },
          end: {
            line: 109,
            column: 41
          }
        },
        "47": {
          start: {
            line: 110,
            column: 4
          },
          end: {
            line: 110,
            column: 24
          }
        },
        "48": {
          start: {
            line: 116,
            column: 4
          },
          end: {
            line: 130,
            column: 6
          }
        },
        "49": {
          start: {
            line: 117,
            column: 23
          },
          end: {
            line: 117,
            column: 30
          }
        },
        "50": {
          start: {
            line: 118,
            column: 17
          },
          end: {
            line: 118,
            column: 40
          }
        },
        "51": {
          start: {
            line: 120,
            column: 6
          },
          end: {
            line: 123,
            column: 7
          }
        },
        "52": {
          start: {
            line: 121,
            column: 8
          },
          end: {
            line: 121,
            column: 31
          }
        },
        "53": {
          start: {
            line: 122,
            column: 8
          },
          end: {
            line: 122,
            column: 37
          }
        },
        "54": {
          start: {
            line: 125,
            column: 6
          },
          end: {
            line: 125,
            column: 56
          }
        },
        "55": {
          start: {
            line: 127,
            column: 6
          },
          end: {
            line: 129,
            column: 7
          }
        },
        "56": {
          start: {
            line: 128,
            column: 8
          },
          end: {
            line: 128,
            column: 22
          }
        },
        "57": {
          start: {
            line: 140,
            column: 0
          },
          end: {
            line: 167,
            column: 4
          }
        },
        "58": {
          start: {
            line: 142,
            column: 17
          },
          end: {
            line: 142,
            column: 29
          }
        },
        "59": {
          start: {
            line: 143,
            column: 26
          },
          end: {
            line: 143,
            column: 32
          }
        },
        "60": {
          start: {
            line: 145,
            column: 4
          },
          end: {
            line: 147,
            column: 5
          }
        },
        "61": {
          start: {
            line: 146,
            column: 6
          },
          end: {
            line: 146,
            column: 52
          }
        },
        "62": {
          start: {
            line: 149,
            column: 4
          },
          end: {
            line: 162,
            column: 5
          }
        },
        "63": {
          start: {
            line: 150,
            column: 6
          },
          end: {
            line: 150,
            column: 28
          }
        },
        "64": {
          start: {
            line: 152,
            column: 23
          },
          end: {
            line: 152,
            column: 59
          }
        },
        "65": {
          start: {
            line: 154,
            column: 6
          },
          end: {
            line: 157,
            column: 7
          }
        },
        "66": {
          start: {
            line: 155,
            column: 8
          },
          end: {
            line: 155,
            column: 30
          }
        },
        "67": {
          start: {
            line: 156,
            column: 8
          },
          end: {
            line: 156,
            column: 14
          }
        },
        "68": {
          start: {
            line: 159,
            column: 6
          },
          end: {
            line: 161,
            column: 7
          }
        },
        "69": {
          start: {
            line: 160,
            column: 8
          },
          end: {
            line: 160,
            column: 92
          }
        },
        "70": {
          start: {
            line: 165,
            column: 19
          },
          end: {
            line: 165,
            column: 62
          }
        },
        "71": {
          start: {
            line: 166,
            column: 4
          },
          end: {
            line: 166,
            column: 76
          }
        },
        "72": {
          start: {
            line: 169,
            column: 0
          },
          end: {
            line: 194,
            column: 2
          }
        },
        "73": {
          start: {
            line: 173,
            column: 16
          },
          end: {
            line: 173,
            column: 87
          }
        },
        "74": {
          start: {
            line: 174,
            column: 2
          },
          end: {
            line: 182,
            column: 3
          }
        },
        "75": {
          start: {
            line: 174,
            column: 15
          },
          end: {
            line: 174,
            column: 16
          }
        },
        "76": {
          start: {
            line: 174,
            column: 24
          },
          end: {
            line: 174,
            column: 38
          }
        },
        "77": {
          start: {
            line: 175,
            column: 19
          },
          end: {
            line: 175,
            column: 29
          }
        },
        "78": {
          start: {
            line: 176,
            column: 18
          },
          end: {
            line: 176,
            column: 54
          }
        },
        "79": {
          start: {
            line: 177,
            column: 4
          },
          end: {
            line: 181,
            column: 5
          }
        },
        "80": {
          start: {
            line: 178,
            column: 6
          },
          end: {
            line: 178,
            column: 45
          }
        },
        "81": {
          start: {
            line: 180,
            column: 6
          },
          end: {
            line: 180,
            column: 48
          }
        },
        "82": {
          start: {
            line: 185,
            column: 2
          },
          end: {
            line: 185,
            column: 74
          }
        },
        "83": {
          start: {
            line: 186,
            column: 2
          },
          end: {
            line: 193,
            column: 3
          }
        },
        "84": {
          start: {
            line: 186,
            column: 15
          },
          end: {
            line: 186,
            column: 16
          }
        },
        "85": {
          start: {
            line: 186,
            column: 24
          },
          end: {
            line: 186,
            column: 38
          }
        },
        "86": {
          start: {
            line: 187,
            column: 19
          },
          end: {
            line: 187,
            column: 29
          }
        },
        "87": {
          start: {
            line: 188,
            column: 4
          },
          end: {
            line: 192,
            column: 5
          }
        },
        "88": {
          start: {
            line: 189,
            column: 6
          },
          end: {
            line: 189,
            column: 45
          }
        },
        "89": {
          start: {
            line: 191,
            column: 6
          },
          end: {
            line: 191,
            column: 48
          }
        },
        "90": {
          start: {
            line: 202,
            column: 0
          },
          end: {
            line: 202,
            column: 36
          }
        },
        "91": {
          start: {
            line: 203,
            column: 0
          },
          end: {
            line: 203,
            column: 31
          }
        },
        "92": {
          start: {
            line: 204,
            column: 0
          },
          end: {
            line: 207,
            column: 1
          }
        },
        "93": {
          start: {
            line: 205,
            column: 2
          },
          end: {
            line: 205,
            column: 33
          }
        },
        "94": {
          start: {
            line: 206,
            column: 2
          },
          end: {
            line: 206,
            column: 32
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
              line: 50,
              column: 3
            }
          },
          line: 47
        },
        "1": {
          name: "(anonymous_1)",
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
              column: 23
            },
            end: {
              line: 56,
              column: 3
            }
          },
          line: 54
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 60,
              column: 2
            },
            end: {
              line: 60,
              column: 3
            }
          },
          loc: {
            start: {
              line: 60,
              column: 11
            },
            end: {
              line: 106,
              column: 3
            }
          },
          line: 60
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 108,
              column: 2
            },
            end: {
              line: 108,
              column: 3
            }
          },
          loc: {
            start: {
              line: 108,
              column: 12
            },
            end: {
              line: 111,
              column: 3
            }
          },
          line: 108
        },
        "4": {
          name: "(anonymous_4)",
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
              column: 54
            },
            end: {
              line: 131,
              column: 3
            }
          },
          line: 115
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 116,
              column: 21
            },
            end: {
              line: 116,
              column: 22
            }
          },
          loc: {
            start: {
              line: 116,
              column: 33
            },
            end: {
              line: 130,
              column: 5
            }
          },
          line: 116
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 141,
              column: 57
            },
            end: {
              line: 141,
              column: 58
            }
          },
          loc: {
            start: {
              line: 141,
              column: 66
            },
            end: {
              line: 163,
              column: 3
            }
          },
          line: 141
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 164,
              column: 62
            },
            end: {
              line: 164,
              column: 63
            }
          },
          loc: {
            start: {
              line: 164,
              column: 71
            },
            end: {
              line: 167,
              column: 3
            }
          },
          line: 164
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 169,
              column: 34
            },
            end: {
              line: 169,
              column: 35
            }
          },
          loc: {
            start: {
              line: 169,
              column: 40
            },
            end: {
              line: 194,
              column: 1
            }
          },
          line: 169
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 204,
              column: 24
            },
            end: {
              line: 204,
              column: 25
            }
          },
          loc: {
            start: {
              line: 204,
              column: 30
            },
            end: {
              line: 207,
              column: 1
            }
          },
          line: 204
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 65,
              column: 4
            },
            end: {
              line: 95,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 65,
              column: 4
            },
            end: {
              line: 95,
              column: 5
            }
          }, {
            start: {
              line: 65,
              column: 4
            },
            end: {
              line: 95,
              column: 5
            }
          }],
          line: 65
        },
        "1": {
          loc: {
            start: {
              line: 68,
              column: 6
            },
            end: {
              line: 94,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 68,
              column: 6
            },
            end: {
              line: 94,
              column: 7
            }
          }, {
            start: {
              line: 68,
              column: 6
            },
            end: {
              line: 94,
              column: 7
            }
          }],
          line: 68
        },
        "2": {
          loc: {
            start: {
              line: 69,
              column: 8
            },
            end: {
              line: 79,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 69,
              column: 8
            },
            end: {
              line: 79,
              column: 9
            }
          }, {
            start: {
              line: 69,
              column: 8
            },
            end: {
              line: 79,
              column: 9
            }
          }],
          line: 69
        },
        "3": {
          loc: {
            start: {
              line: 70,
              column: 10
            },
            end: {
              line: 78,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 70,
              column: 10
            },
            end: {
              line: 78,
              column: 11
            }
          }, {
            start: {
              line: 70,
              column: 10
            },
            end: {
              line: 78,
              column: 11
            }
          }],
          line: 70
        },
        "4": {
          loc: {
            start: {
              line: 70,
              column: 14
            },
            end: {
              line: 70,
              column: 82
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 70,
              column: 14
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
              column: 82
            }
          }],
          line: 70
        },
        "5": {
          loc: {
            start: {
              line: 75,
              column: 12
            },
            end: {
              line: 77,
              column: 13
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 75,
              column: 12
            },
            end: {
              line: 77,
              column: 13
            }
          }, {
            start: {
              line: 75,
              column: 12
            },
            end: {
              line: 77,
              column: 13
            }
          }],
          line: 75
        },
        "6": {
          loc: {
            start: {
              line: 81,
              column: 8
            },
            end: {
              line: 90,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 81,
              column: 8
            },
            end: {
              line: 90,
              column: 9
            }
          }, {
            start: {
              line: 81,
              column: 8
            },
            end: {
              line: 90,
              column: 9
            }
          }],
          line: 81
        },
        "7": {
          loc: {
            start: {
              line: 83,
              column: 10
            },
            end: {
              line: 85,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 83,
              column: 10
            },
            end: {
              line: 85,
              column: 11
            }
          }, {
            start: {
              line: 83,
              column: 10
            },
            end: {
              line: 85,
              column: 11
            }
          }],
          line: 83
        },
        "8": {
          loc: {
            start: {
              line: 83,
              column: 14
            },
            end: {
              line: 83,
              column: 65
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 83,
              column: 14
            },
            end: {
              line: 83,
              column: 39
            }
          }, {
            start: {
              line: 83,
              column: 43
            },
            end: {
              line: 83,
              column: 65
            }
          }],
          line: 83
        },
        "9": {
          loc: {
            start: {
              line: 87,
              column: 10
            },
            end: {
              line: 89,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 87,
              column: 10
            },
            end: {
              line: 89,
              column: 11
            }
          }, {
            start: {
              line: 87,
              column: 10
            },
            end: {
              line: 89,
              column: 11
            }
          }],
          line: 87
        },
        "10": {
          loc: {
            start: {
              line: 97,
              column: 4
            },
            end: {
              line: 105,
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
              line: 105,
              column: 5
            }
          }, {
            start: {
              line: 97,
              column: 4
            },
            end: {
              line: 105,
              column: 5
            }
          }],
          line: 97
        },
        "11": {
          loc: {
            start: {
              line: 97,
              column: 10
            },
            end: {
              line: 97,
              column: 96
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 97,
              column: 10
            },
            end: {
              line: 97,
              column: 48
            }
          }, {
            start: {
              line: 97,
              column: 52
            },
            end: {
              line: 97,
              column: 96
            }
          }],
          line: 97
        },
        "12": {
          loc: {
            start: {
              line: 98,
              column: 6
            },
            end: {
              line: 100,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 98,
              column: 6
            },
            end: {
              line: 100,
              column: 7
            }
          }, {
            start: {
              line: 98,
              column: 6
            },
            end: {
              line: 100,
              column: 7
            }
          }],
          line: 98
        },
        "13": {
          loc: {
            start: {
              line: 102,
              column: 6
            },
            end: {
              line: 104,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 102,
              column: 6
            },
            end: {
              line: 104,
              column: 7
            }
          }, {
            start: {
              line: 102,
              column: 6
            },
            end: {
              line: 104,
              column: 7
            }
          }],
          line: 102
        },
        "14": {
          loc: {
            start: {
              line: 120,
              column: 6
            },
            end: {
              line: 123,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 120,
              column: 6
            },
            end: {
              line: 123,
              column: 7
            }
          }, {
            start: {
              line: 120,
              column: 6
            },
            end: {
              line: 123,
              column: 7
            }
          }],
          line: 120
        },
        "15": {
          loc: {
            start: {
              line: 127,
              column: 6
            },
            end: {
              line: 129,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 127,
              column: 6
            },
            end: {
              line: 129,
              column: 7
            }
          }, {
            start: {
              line: 127,
              column: 6
            },
            end: {
              line: 129,
              column: 7
            }
          }],
          line: 127
        },
        "16": {
          loc: {
            start: {
              line: 145,
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
              line: 145,
              column: 4
            },
            end: {
              line: 147,
              column: 5
            }
          }, {
            start: {
              line: 145,
              column: 4
            },
            end: {
              line: 147,
              column: 5
            }
          }],
          line: 145
        },
        "17": {
          loc: {
            start: {
              line: 149,
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
              line: 149,
              column: 4
            },
            end: {
              line: 162,
              column: 5
            }
          }, {
            start: {
              line: 149,
              column: 4
            },
            end: {
              line: 162,
              column: 5
            }
          }],
          line: 149
        },
        "18": {
          loc: {
            start: {
              line: 149,
              column: 8
            },
            end: {
              line: 149,
              column: 91
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 149,
              column: 8
            },
            end: {
              line: 149,
              column: 15
            }
          }, {
            start: {
              line: 149,
              column: 19
            },
            end: {
              line: 149,
              column: 50
            }
          }, {
            start: {
              line: 149,
              column: 54
            },
            end: {
              line: 149,
              column: 91
            }
          }],
          line: 149
        },
        "19": {
          loc: {
            start: {
              line: 154,
              column: 6
            },
            end: {
              line: 157,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 154,
              column: 6
            },
            end: {
              line: 157,
              column: 7
            }
          }, {
            start: {
              line: 154,
              column: 6
            },
            end: {
              line: 157,
              column: 7
            }
          }],
          line: 154
        },
        "20": {
          loc: {
            start: {
              line: 154,
              column: 10
            },
            end: {
              line: 154,
              column: 100
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 154,
              column: 10
            },
            end: {
              line: 154,
              column: 18
            }
          }, {
            start: {
              line: 154,
              column: 23
            },
            end: {
              line: 154,
              column: 56
            }
          }, {
            start: {
              line: 154,
              column: 60
            },
            end: {
              line: 154,
              column: 99
            }
          }],
          line: 154
        },
        "21": {
          loc: {
            start: {
              line: 159,
              column: 6
            },
            end: {
              line: 161,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 159,
              column: 6
            },
            end: {
              line: 161,
              column: 7
            }
          }, {
            start: {
              line: 159,
              column: 6
            },
            end: {
              line: 161,
              column: 7
            }
          }],
          line: 159
        },
        "22": {
          loc: {
            start: {
              line: 159,
              column: 10
            },
            end: {
              line: 159,
              column: 73
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 159,
              column: 10
            },
            end: {
              line: 159,
              column: 43
            }
          }, {
            start: {
              line: 159,
              column: 47
            },
            end: {
              line: 159,
              column: 73
            }
          }],
          line: 159
        },
        "23": {
          loc: {
            start: {
              line: 177,
              column: 4
            },
            end: {
              line: 181,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 177,
              column: 4
            },
            end: {
              line: 181,
              column: 5
            }
          }, {
            start: {
              line: 177,
              column: 4
            },
            end: {
              line: 181,
              column: 5
            }
          }],
          line: 177
        },
        "24": {
          loc: {
            start: {
              line: 177,
              column: 8
            },
            end: {
              line: 177,
              column: 54
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 177,
              column: 8
            },
            end: {
              line: 177,
              column: 21
            }
          }, {
            start: {
              line: 177,
              column: 25
            },
            end: {
              line: 177,
              column: 54
            }
          }],
          line: 177
        },
        "25": {
          loc: {
            start: {
              line: 188,
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
              line: 188,
              column: 4
            },
            end: {
              line: 192,
              column: 5
            }
          }, {
            start: {
              line: 188,
              column: 4
            },
            end: {
              line: 192,
              column: 5
            }
          }],
          line: 188
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
        "94": 0
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
        "9": 0
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
        "18": [0, 0, 0],
        "19": [0, 0],
        "20": [0, 0, 0],
        "21": [0, 0],
        "22": [0, 0],
        "23": [0, 0],
        "24": [0, 0],
        "25": [0, 0]
      },
      _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
      hash: "d795d62d5e23934caea12a50fe8211a90525b67e"
    };
    var coverage = global[gcv] || (global[gcv] = {});

    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }

    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_2b2z8qvtnt = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }

  cov_2b2z8qvtnt();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_2b2z8qvtnt().s[0]++, 'button');
  var VERSION = (cov_2b2z8qvtnt().s[1]++, '4.6.0');
  var DATA_KEY = (cov_2b2z8qvtnt().s[2]++, 'bs.button');
  var EVENT_KEY = (cov_2b2z8qvtnt().s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_2b2z8qvtnt().s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_2b2z8qvtnt().s[5]++, $__default['default'].fn[NAME]);
  var CLASS_NAME_ACTIVE = (cov_2b2z8qvtnt().s[6]++, 'active');
  var CLASS_NAME_BUTTON = (cov_2b2z8qvtnt().s[7]++, 'btn');
  var CLASS_NAME_FOCUS = (cov_2b2z8qvtnt().s[8]++, 'focus');
  var SELECTOR_DATA_TOGGLE_CARROT = (cov_2b2z8qvtnt().s[9]++, '[data-toggle^="button"]');
  var SELECTOR_DATA_TOGGLES = (cov_2b2z8qvtnt().s[10]++, '[data-toggle="buttons"]');
  var SELECTOR_DATA_TOGGLE = (cov_2b2z8qvtnt().s[11]++, '[data-toggle="button"]');
  var SELECTOR_DATA_TOGGLES_BUTTONS = (cov_2b2z8qvtnt().s[12]++, '[data-toggle="buttons"] .btn');
  var SELECTOR_INPUT = (cov_2b2z8qvtnt().s[13]++, 'input:not([type="hidden"])');
  var SELECTOR_ACTIVE = (cov_2b2z8qvtnt().s[14]++, '.active');
  var SELECTOR_BUTTON = (cov_2b2z8qvtnt().s[15]++, '.btn');
  var EVENT_CLICK_DATA_API = (cov_2b2z8qvtnt().s[16]++, "click" + EVENT_KEY + DATA_API_KEY);
  var EVENT_FOCUS_BLUR_DATA_API = (cov_2b2z8qvtnt().s[17]++, "focus" + EVENT_KEY + DATA_API_KEY + " " + ("blur" + EVENT_KEY + DATA_API_KEY));
  var EVENT_LOAD_DATA_API = (cov_2b2z8qvtnt().s[18]++, "load" + EVENT_KEY + DATA_API_KEY);
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = /*#__PURE__*/function () {
    function Button(element) {
      cov_2b2z8qvtnt().f[0]++;
      cov_2b2z8qvtnt().s[19]++;
      this._element = element;
      cov_2b2z8qvtnt().s[20]++;
      this.shouldAvoidTriggerChange = false;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      cov_2b2z8qvtnt().f[2]++;
      var triggerChangeEvent = (cov_2b2z8qvtnt().s[22]++, true);
      var addAriaPressed = (cov_2b2z8qvtnt().s[23]++, true);
      var rootElement = (cov_2b2z8qvtnt().s[24]++, $__default['default'](this._element).closest(SELECTOR_DATA_TOGGLES)[0]);
      cov_2b2z8qvtnt().s[25]++;

      if (rootElement) {
        cov_2b2z8qvtnt().b[0][0]++;
        var input = (cov_2b2z8qvtnt().s[26]++, this._element.querySelector(SELECTOR_INPUT));
        cov_2b2z8qvtnt().s[27]++;

        if (input) {
          cov_2b2z8qvtnt().b[1][0]++;
          cov_2b2z8qvtnt().s[28]++;

          if (input.type === 'radio') {
            cov_2b2z8qvtnt().b[2][0]++;
            cov_2b2z8qvtnt().s[29]++;

            if ((cov_2b2z8qvtnt().b[4][0]++, input.checked) && (cov_2b2z8qvtnt().b[4][1]++, this._element.classList.contains(CLASS_NAME_ACTIVE))) {
              cov_2b2z8qvtnt().b[3][0]++;
              cov_2b2z8qvtnt().s[30]++;
              triggerChangeEvent = false;
            } else {
              cov_2b2z8qvtnt().b[3][1]++;
              var activeElement = (cov_2b2z8qvtnt().s[31]++, rootElement.querySelector(SELECTOR_ACTIVE));
              cov_2b2z8qvtnt().s[32]++;

              if (activeElement) {
                cov_2b2z8qvtnt().b[5][0]++;
                cov_2b2z8qvtnt().s[33]++;
                $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE);
              } else {
                cov_2b2z8qvtnt().b[5][1]++;
              }
            }
          } else {
            cov_2b2z8qvtnt().b[2][1]++;
          }

          cov_2b2z8qvtnt().s[34]++;

          if (triggerChangeEvent) {
            cov_2b2z8qvtnt().b[6][0]++;
            cov_2b2z8qvtnt().s[35]++;

            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            if ((cov_2b2z8qvtnt().b[8][0]++, input.type === 'checkbox') || (cov_2b2z8qvtnt().b[8][1]++, input.type === 'radio')) {
              cov_2b2z8qvtnt().b[7][0]++;
              cov_2b2z8qvtnt().s[36]++;
              input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE);
            } else {
              cov_2b2z8qvtnt().b[7][1]++;
            }

            cov_2b2z8qvtnt().s[37]++;

            if (!this.shouldAvoidTriggerChange) {
              cov_2b2z8qvtnt().b[9][0]++;
              cov_2b2z8qvtnt().s[38]++;
              $__default['default'](input).trigger('change');
            } else {
              cov_2b2z8qvtnt().b[9][1]++;
            }
          } else {
            cov_2b2z8qvtnt().b[6][1]++;
          }

          cov_2b2z8qvtnt().s[39]++;
          input.focus();
          cov_2b2z8qvtnt().s[40]++;
          addAriaPressed = false;
        } else {
          cov_2b2z8qvtnt().b[1][1]++;
        }
      } else {
        cov_2b2z8qvtnt().b[0][1]++;
      }

      cov_2b2z8qvtnt().s[41]++;

      if (!((cov_2b2z8qvtnt().b[11][0]++, this._element.hasAttribute('disabled')) || (cov_2b2z8qvtnt().b[11][1]++, this._element.classList.contains('disabled')))) {
        cov_2b2z8qvtnt().b[10][0]++;
        cov_2b2z8qvtnt().s[42]++;

        if (addAriaPressed) {
          cov_2b2z8qvtnt().b[12][0]++;
          cov_2b2z8qvtnt().s[43]++;

          this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE));
        } else {
          cov_2b2z8qvtnt().b[12][1]++;
        }

        cov_2b2z8qvtnt().s[44]++;

        if (triggerChangeEvent) {
          cov_2b2z8qvtnt().b[13][0]++;
          cov_2b2z8qvtnt().s[45]++;
          $__default['default'](this._element).toggleClass(CLASS_NAME_ACTIVE);
        } else {
          cov_2b2z8qvtnt().b[13][1]++;
        }
      } else {
        cov_2b2z8qvtnt().b[10][1]++;
      }
    };

    _proto.dispose = function dispose() {
      cov_2b2z8qvtnt().f[3]++;
      cov_2b2z8qvtnt().s[46]++;
      $__default['default'].removeData(this._element, DATA_KEY);
      cov_2b2z8qvtnt().s[47]++;
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config, avoidTriggerChange) {
      cov_2b2z8qvtnt().f[4]++;
      cov_2b2z8qvtnt().s[48]++;
      return this.each(function () {
        cov_2b2z8qvtnt().f[5]++;
        var $element = (cov_2b2z8qvtnt().s[49]++, $__default['default'](this));
        var data = (cov_2b2z8qvtnt().s[50]++, $element.data(DATA_KEY));
        cov_2b2z8qvtnt().s[51]++;

        if (!data) {
          cov_2b2z8qvtnt().b[14][0]++;
          cov_2b2z8qvtnt().s[52]++;
          data = new Button(this);
          cov_2b2z8qvtnt().s[53]++;
          $element.data(DATA_KEY, data);
        } else {
          cov_2b2z8qvtnt().b[14][1]++;
        }

        cov_2b2z8qvtnt().s[54]++;
        data.shouldAvoidTriggerChange = avoidTriggerChange;
        cov_2b2z8qvtnt().s[55]++;

        if (config === 'toggle') {
          cov_2b2z8qvtnt().b[15][0]++;
          cov_2b2z8qvtnt().s[56]++;
          data[config]();
        } else {
          cov_2b2z8qvtnt().b[15][1]++;
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        cov_2b2z8qvtnt().f[1]++;
        cov_2b2z8qvtnt().s[21]++;
        return VERSION;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  cov_2b2z8qvtnt().s[57]++;
  $__default['default'](document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    cov_2b2z8qvtnt().f[6]++;
    var button = (cov_2b2z8qvtnt().s[58]++, event.target);
    var initialButton = (cov_2b2z8qvtnt().s[59]++, button);
    cov_2b2z8qvtnt().s[60]++;

    if (!$__default['default'](button).hasClass(CLASS_NAME_BUTTON)) {
      cov_2b2z8qvtnt().b[16][0]++;
      cov_2b2z8qvtnt().s[61]++;
      button = $__default['default'](button).closest(SELECTOR_BUTTON)[0];
    } else {
      cov_2b2z8qvtnt().b[16][1]++;
    }

    cov_2b2z8qvtnt().s[62]++;

    if ((cov_2b2z8qvtnt().b[18][0]++, !button) || (cov_2b2z8qvtnt().b[18][1]++, button.hasAttribute('disabled')) || (cov_2b2z8qvtnt().b[18][2]++, button.classList.contains('disabled'))) {
      cov_2b2z8qvtnt().b[17][0]++;
      cov_2b2z8qvtnt().s[63]++;
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      cov_2b2z8qvtnt().b[17][1]++;
      var inputBtn = (cov_2b2z8qvtnt().s[64]++, button.querySelector(SELECTOR_INPUT));
      cov_2b2z8qvtnt().s[65]++;

      if ((cov_2b2z8qvtnt().b[20][0]++, inputBtn) && ((cov_2b2z8qvtnt().b[20][1]++, inputBtn.hasAttribute('disabled')) || (cov_2b2z8qvtnt().b[20][2]++, inputBtn.classList.contains('disabled')))) {
        cov_2b2z8qvtnt().b[19][0]++;
        cov_2b2z8qvtnt().s[66]++;
        event.preventDefault(); // work around Firefox bug #1540995

        cov_2b2z8qvtnt().s[67]++;
        return;
      } else {
        cov_2b2z8qvtnt().b[19][1]++;
      }

      cov_2b2z8qvtnt().s[68]++;

      if ((cov_2b2z8qvtnt().b[22][0]++, initialButton.tagName === 'INPUT') || (cov_2b2z8qvtnt().b[22][1]++, button.tagName !== 'LABEL')) {
        cov_2b2z8qvtnt().b[21][0]++;
        cov_2b2z8qvtnt().s[69]++;

        Button._jQueryInterface.call($__default['default'](button), 'toggle', initialButton.tagName === 'INPUT');
      } else {
        cov_2b2z8qvtnt().b[21][1]++;
      }
    }
  }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    cov_2b2z8qvtnt().f[7]++;
    var button = (cov_2b2z8qvtnt().s[70]++, $__default['default'](event.target).closest(SELECTOR_BUTTON)[0]);
    cov_2b2z8qvtnt().s[71]++;
    $__default['default'](button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
  });
  cov_2b2z8qvtnt().s[72]++;
  $__default['default'](window).on(EVENT_LOAD_DATA_API, function () {
    cov_2b2z8qvtnt().f[8]++;
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = (cov_2b2z8qvtnt().s[73]++, [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS)));
    cov_2b2z8qvtnt().s[74]++;

    for (var i = (cov_2b2z8qvtnt().s[75]++, 0), len = (cov_2b2z8qvtnt().s[76]++, buttons.length); i < len; i++) {
      var button = (cov_2b2z8qvtnt().s[77]++, buttons[i]);
      var input = (cov_2b2z8qvtnt().s[78]++, button.querySelector(SELECTOR_INPUT));
      cov_2b2z8qvtnt().s[79]++;

      if ((cov_2b2z8qvtnt().b[24][0]++, input.checked) || (cov_2b2z8qvtnt().b[24][1]++, input.hasAttribute('checked'))) {
        cov_2b2z8qvtnt().b[23][0]++;
        cov_2b2z8qvtnt().s[80]++;
        button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        cov_2b2z8qvtnt().b[23][1]++;
        cov_2b2z8qvtnt().s[81]++;
        button.classList.remove(CLASS_NAME_ACTIVE);
      }
    } // find all button toggles


    cov_2b2z8qvtnt().s[82]++;
    buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));
    cov_2b2z8qvtnt().s[83]++;

    for (var _i = (cov_2b2z8qvtnt().s[84]++, 0), _len = (cov_2b2z8qvtnt().s[85]++, buttons.length); _i < _len; _i++) {
      var _button = (cov_2b2z8qvtnt().s[86]++, buttons[_i]);

      cov_2b2z8qvtnt().s[87]++;

      if (_button.getAttribute('aria-pressed') === 'true') {
        cov_2b2z8qvtnt().b[25][0]++;
        cov_2b2z8qvtnt().s[88]++;

        _button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        cov_2b2z8qvtnt().b[25][1]++;
        cov_2b2z8qvtnt().s[89]++;

        _button.classList.remove(CLASS_NAME_ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  cov_2b2z8qvtnt().s[90]++;
  $__default['default'].fn[NAME] = Button._jQueryInterface;
  cov_2b2z8qvtnt().s[91]++;
  $__default['default'].fn[NAME].Constructor = Button;
  cov_2b2z8qvtnt().s[92]++;

  $__default['default'].fn[NAME].noConflict = function () {
    cov_2b2z8qvtnt().f[9]++;
    cov_2b2z8qvtnt().s[93]++;
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    cov_2b2z8qvtnt().s[94]++;
    return Button._jQueryInterface;
  };

  return Button;

})));
//# sourceMappingURL=button.js.map

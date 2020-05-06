/*!
  * Bootstrap button.js v4.4.1-1 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2020 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, global.Button = factory(global.jQuery));
}(this, (function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

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

  var cov_2b2z8qvtnt = function () {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/button.js";
    var hash = "4b8e0e8b39712eb4ef45355a78838e760d9c6229";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/button.js",
      statementMap: {
        "0": {
          start: {
            line: 16,
            column: 28
          },
          end: {
            line: 16,
            column: 36
          }
        },
        "1": {
          start: {
            line: 17,
            column: 28
          },
          end: {
            line: 17,
            column: 35
          }
        },
        "2": {
          start: {
            line: 18,
            column: 28
          },
          end: {
            line: 18,
            column: 39
          }
        },
        "3": {
          start: {
            line: 19,
            column: 28
          },
          end: {
            line: 19,
            column: 42
          }
        },
        "4": {
          start: {
            line: 20,
            column: 28
          },
          end: {
            line: 20,
            column: 39
          }
        },
        "5": {
          start: {
            line: 21,
            column: 28
          },
          end: {
            line: 21,
            column: 38
          }
        },
        "6": {
          start: {
            line: 23,
            column: 18
          },
          end: {
            line: 27,
            column: 1
          }
        },
        "7": {
          start: {
            line: 29,
            column: 17
          },
          end: {
            line: 37,
            column: 1
          }
        },
        "8": {
          start: {
            line: 39,
            column: 14
          },
          end: {
            line: 44,
            column: 1
          }
        },
        "9": {
          start: {
            line: 54,
            column: 4
          },
          end: {
            line: 54,
            column: 27
          }
        },
        "10": {
          start: {
            line: 60,
            column: 4
          },
          end: {
            line: 60,
            column: 18
          }
        },
        "11": {
          start: {
            line: 66,
            column: 29
          },
          end: {
            line: 66,
            column: 33
          }
        },
        "12": {
          start: {
            line: 67,
            column: 25
          },
          end: {
            line: 67,
            column: 29
          }
        },
        "13": {
          start: {
            line: 68,
            column: 24
          },
          end: {
            line: 70,
            column: 8
          }
        },
        "14": {
          start: {
            line: 72,
            column: 4
          },
          end: {
            line: 104,
            column: 5
          }
        },
        "15": {
          start: {
            line: 73,
            column: 20
          },
          end: {
            line: 73,
            column: 63
          }
        },
        "16": {
          start: {
            line: 75,
            column: 6
          },
          end: {
            line: 103,
            column: 7
          }
        },
        "17": {
          start: {
            line: 76,
            column: 8
          },
          end: {
            line: 94,
            column: 9
          }
        },
        "18": {
          start: {
            line: 77,
            column: 10
          },
          end: {
            line: 86,
            column: 11
          }
        },
        "19": {
          start: {
            line: 79,
            column: 12
          },
          end: {
            line: 79,
            column: 38
          }
        },
        "20": {
          start: {
            line: 81,
            column: 34
          },
          end: {
            line: 81,
            column: 76
          }
        },
        "21": {
          start: {
            line: 83,
            column: 12
          },
          end: {
            line: 85,
            column: 13
          }
        },
        "22": {
          start: {
            line: 84,
            column: 14
          },
          end: {
            line: 84,
            column: 60
          }
        },
        "23": {
          start: {
            line: 87,
            column: 15
          },
          end: {
            line: 94,
            column: 9
          }
        },
        "24": {
          start: {
            line: 88,
            column: 10
          },
          end: {
            line: 90,
            column: 11
          }
        },
        "25": {
          start: {
            line: 89,
            column: 12
          },
          end: {
            line: 89,
            column: 38
          }
        },
        "26": {
          start: {
            line: 93,
            column: 10
          },
          end: {
            line: 93,
            column: 36
          }
        },
        "27": {
          start: {
            line: 96,
            column: 8
          },
          end: {
            line: 99,
            column: 9
          }
        },
        "28": {
          start: {
            line: 97,
            column: 10
          },
          end: {
            line: 97,
            column: 77
          }
        },
        "29": {
          start: {
            line: 98,
            column: 10
          },
          end: {
            line: 98,
            column: 36
          }
        },
        "30": {
          start: {
            line: 101,
            column: 8
          },
          end: {
            line: 101,
            column: 21
          }
        },
        "31": {
          start: {
            line: 102,
            column: 8
          },
          end: {
            line: 102,
            column: 30
          }
        },
        "32": {
          start: {
            line: 106,
            column: 4
          },
          end: {
            line: 115,
            column: 5
          }
        },
        "33": {
          start: {
            line: 107,
            column: 6
          },
          end: {
            line: 110,
            column: 7
          }
        },
        "34": {
          start: {
            line: 108,
            column: 8
          },
          end: {
            line: 109,
            column: 62
          }
        },
        "35": {
          start: {
            line: 112,
            column: 6
          },
          end: {
            line: 114,
            column: 7
          }
        },
        "36": {
          start: {
            line: 113,
            column: 8
          },
          end: {
            line: 113,
            column: 54
          }
        },
        "37": {
          start: {
            line: 119,
            column: 4
          },
          end: {
            line: 119,
            column: 41
          }
        },
        "38": {
          start: {
            line: 120,
            column: 4
          },
          end: {
            line: 120,
            column: 24
          }
        },
        "39": {
          start: {
            line: 126,
            column: 4
          },
          end: {
            line: 137,
            column: 6
          }
        },
        "40": {
          start: {
            line: 127,
            column: 17
          },
          end: {
            line: 127,
            column: 39
          }
        },
        "41": {
          start: {
            line: 129,
            column: 6
          },
          end: {
            line: 132,
            column: 7
          }
        },
        "42": {
          start: {
            line: 130,
            column: 8
          },
          end: {
            line: 130,
            column: 31
          }
        },
        "43": {
          start: {
            line: 131,
            column: 8
          },
          end: {
            line: 131,
            column: 36
          }
        },
        "44": {
          start: {
            line: 134,
            column: 6
          },
          end: {
            line: 136,
            column: 7
          }
        },
        "45": {
          start: {
            line: 135,
            column: 8
          },
          end: {
            line: 135,
            column: 22
          }
        },
        "46": {
          start: {
            line: 147,
            column: 0
          },
          end: {
            line: 171,
            column: 4
          }
        },
        "47": {
          start: {
            line: 149,
            column: 17
          },
          end: {
            line: 149,
            column: 29
          }
        },
        "48": {
          start: {
            line: 151,
            column: 4
          },
          end: {
            line: 153,
            column: 5
          }
        },
        "49": {
          start: {
            line: 152,
            column: 6
          },
          end: {
            line: 152,
            column: 52
          }
        },
        "50": {
          start: {
            line: 155,
            column: 4
          },
          end: {
            line: 166,
            column: 5
          }
        },
        "51": {
          start: {
            line: 156,
            column: 6
          },
          end: {
            line: 156,
            column: 28
          }
        },
        "52": {
          start: {
            line: 158,
            column: 23
          },
          end: {
            line: 158,
            column: 59
          }
        },
        "53": {
          start: {
            line: 160,
            column: 6
          },
          end: {
            line: 163,
            column: 7
          }
        },
        "54": {
          start: {
            line: 161,
            column: 8
          },
          end: {
            line: 161,
            column: 30
          }
        },
        "55": {
          start: {
            line: 162,
            column: 8
          },
          end: {
            line: 162,
            column: 14
          }
        },
        "56": {
          start: {
            line: 165,
            column: 6
          },
          end: {
            line: 165,
            column: 55
          }
        },
        "57": {
          start: {
            line: 169,
            column: 19
          },
          end: {
            line: 169,
            column: 62
          }
        },
        "58": {
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 170,
            column: 75
          }
        },
        "59": {
          start: {
            line: 173,
            column: 0
          },
          end: {
            line: 198,
            column: 2
          }
        },
        "60": {
          start: {
            line: 177,
            column: 16
          },
          end: {
            line: 177,
            column: 87
          }
        },
        "61": {
          start: {
            line: 178,
            column: 2
          },
          end: {
            line: 186,
            column: 3
          }
        },
        "62": {
          start: {
            line: 178,
            column: 15
          },
          end: {
            line: 178,
            column: 16
          }
        },
        "63": {
          start: {
            line: 178,
            column: 24
          },
          end: {
            line: 178,
            column: 38
          }
        },
        "64": {
          start: {
            line: 179,
            column: 19
          },
          end: {
            line: 179,
            column: 29
          }
        },
        "65": {
          start: {
            line: 180,
            column: 18
          },
          end: {
            line: 180,
            column: 54
          }
        },
        "66": {
          start: {
            line: 181,
            column: 4
          },
          end: {
            line: 185,
            column: 5
          }
        },
        "67": {
          start: {
            line: 182,
            column: 6
          },
          end: {
            line: 182,
            column: 44
          }
        },
        "68": {
          start: {
            line: 184,
            column: 6
          },
          end: {
            line: 184,
            column: 47
          }
        },
        "69": {
          start: {
            line: 189,
            column: 2
          },
          end: {
            line: 189,
            column: 74
          }
        },
        "70": {
          start: {
            line: 190,
            column: 2
          },
          end: {
            line: 197,
            column: 3
          }
        },
        "71": {
          start: {
            line: 190,
            column: 15
          },
          end: {
            line: 190,
            column: 16
          }
        },
        "72": {
          start: {
            line: 190,
            column: 24
          },
          end: {
            line: 190,
            column: 38
          }
        },
        "73": {
          start: {
            line: 191,
            column: 19
          },
          end: {
            line: 191,
            column: 29
          }
        },
        "74": {
          start: {
            line: 192,
            column: 4
          },
          end: {
            line: 196,
            column: 5
          }
        },
        "75": {
          start: {
            line: 193,
            column: 6
          },
          end: {
            line: 193,
            column: 44
          }
        },
        "76": {
          start: {
            line: 195,
            column: 6
          },
          end: {
            line: 195,
            column: 47
          }
        },
        "77": {
          start: {
            line: 206,
            column: 0
          },
          end: {
            line: 206,
            column: 36
          }
        },
        "78": {
          start: {
            line: 207,
            column: 0
          },
          end: {
            line: 207,
            column: 31
          }
        },
        "79": {
          start: {
            line: 208,
            column: 0
          },
          end: {
            line: 211,
            column: 1
          }
        },
        "80": {
          start: {
            line: 209,
            column: 2
          },
          end: {
            line: 209,
            column: 33
          }
        },
        "81": {
          start: {
            line: 210,
            column: 2
          },
          end: {
            line: 210,
            column: 32
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 53,
              column: 2
            },
            end: {
              line: 53,
              column: 3
            }
          },
          loc: {
            start: {
              line: 53,
              column: 23
            },
            end: {
              line: 55,
              column: 3
            }
          },
          line: 53
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
              line: 65,
              column: 2
            },
            end: {
              line: 65,
              column: 3
            }
          },
          loc: {
            start: {
              line: 65,
              column: 11
            },
            end: {
              line: 116,
              column: 3
            }
          },
          line: 65
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 118,
              column: 2
            },
            end: {
              line: 118,
              column: 3
            }
          },
          loc: {
            start: {
              line: 118,
              column: 12
            },
            end: {
              line: 121,
              column: 3
            }
          },
          line: 118
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
              column: 34
            },
            end: {
              line: 138,
              column: 3
            }
          },
          line: 125
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 126,
              column: 21
            },
            end: {
              line: 126,
              column: 22
            }
          },
          loc: {
            start: {
              line: 126,
              column: 33
            },
            end: {
              line: 137,
              column: 5
            }
          },
          line: 126
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 148,
              column: 57
            },
            end: {
              line: 148,
              column: 58
            }
          },
          loc: {
            start: {
              line: 148,
              column: 68
            },
            end: {
              line: 167,
              column: 3
            }
          },
          line: 148
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 168,
              column: 62
            },
            end: {
              line: 168,
              column: 63
            }
          },
          loc: {
            start: {
              line: 168,
              column: 73
            },
            end: {
              line: 171,
              column: 3
            }
          },
          line: 168
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 173,
              column: 34
            },
            end: {
              line: 173,
              column: 35
            }
          },
          loc: {
            start: {
              line: 173,
              column: 40
            },
            end: {
              line: 198,
              column: 1
            }
          },
          line: 173
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 208,
              column: 24
            },
            end: {
              line: 208,
              column: 25
            }
          },
          loc: {
            start: {
              line: 208,
              column: 30
            },
            end: {
              line: 211,
              column: 1
            }
          },
          line: 208
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 72,
              column: 4
            },
            end: {
              line: 104,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 72,
              column: 4
            },
            end: {
              line: 104,
              column: 5
            }
          }, {
            start: {
              line: 72,
              column: 4
            },
            end: {
              line: 104,
              column: 5
            }
          }],
          line: 72
        },
        "1": {
          loc: {
            start: {
              line: 75,
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
              line: 75,
              column: 6
            },
            end: {
              line: 103,
              column: 7
            }
          }, {
            start: {
              line: 75,
              column: 6
            },
            end: {
              line: 103,
              column: 7
            }
          }],
          line: 75
        },
        "2": {
          loc: {
            start: {
              line: 76,
              column: 8
            },
            end: {
              line: 94,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 76,
              column: 8
            },
            end: {
              line: 94,
              column: 9
            }
          }, {
            start: {
              line: 76,
              column: 8
            },
            end: {
              line: 94,
              column: 9
            }
          }],
          line: 76
        },
        "3": {
          loc: {
            start: {
              line: 77,
              column: 10
            },
            end: {
              line: 86,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 77,
              column: 10
            },
            end: {
              line: 86,
              column: 11
            }
          }, {
            start: {
              line: 77,
              column: 10
            },
            end: {
              line: 86,
              column: 11
            }
          }],
          line: 77
        },
        "4": {
          loc: {
            start: {
              line: 77,
              column: 14
            },
            end: {
              line: 78,
              column: 62
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 77,
              column: 14
            },
            end: {
              line: 77,
              column: 27
            }
          }, {
            start: {
              line: 78,
              column: 12
            },
            end: {
              line: 78,
              column: 62
            }
          }],
          line: 77
        },
        "5": {
          loc: {
            start: {
              line: 83,
              column: 12
            },
            end: {
              line: 85,
              column: 13
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 83,
              column: 12
            },
            end: {
              line: 85,
              column: 13
            }
          }, {
            start: {
              line: 83,
              column: 12
            },
            end: {
              line: 85,
              column: 13
            }
          }],
          line: 83
        },
        "6": {
          loc: {
            start: {
              line: 87,
              column: 15
            },
            end: {
              line: 94,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 87,
              column: 15
            },
            end: {
              line: 94,
              column: 9
            }
          }, {
            start: {
              line: 87,
              column: 15
            },
            end: {
              line: 94,
              column: 9
            }
          }],
          line: 87
        },
        "7": {
          loc: {
            start: {
              line: 88,
              column: 10
            },
            end: {
              line: 90,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 88,
              column: 10
            },
            end: {
              line: 90,
              column: 11
            }
          }, {
            start: {
              line: 88,
              column: 10
            },
            end: {
              line: 90,
              column: 11
            }
          }],
          line: 88
        },
        "8": {
          loc: {
            start: {
              line: 88,
              column: 14
            },
            end: {
              line: 88,
              column: 119
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 88,
              column: 14
            },
            end: {
              line: 88,
              column: 47
            }
          }, {
            start: {
              line: 88,
              column: 51
            },
            end: {
              line: 88,
              column: 119
            }
          }],
          line: 88
        },
        "9": {
          loc: {
            start: {
              line: 96,
              column: 8
            },
            end: {
              line: 99,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 96,
              column: 8
            },
            end: {
              line: 99,
              column: 9
            }
          }, {
            start: {
              line: 96,
              column: 8
            },
            end: {
              line: 99,
              column: 9
            }
          }],
          line: 96
        },
        "10": {
          loc: {
            start: {
              line: 106,
              column: 4
            },
            end: {
              line: 115,
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
              line: 115,
              column: 5
            }
          }, {
            start: {
              line: 106,
              column: 4
            },
            end: {
              line: 115,
              column: 5
            }
          }],
          line: 106
        },
        "11": {
          loc: {
            start: {
              line: 106,
              column: 10
            },
            end: {
              line: 106,
              column: 96
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 106,
              column: 10
            },
            end: {
              line: 106,
              column: 48
            }
          }, {
            start: {
              line: 106,
              column: 52
            },
            end: {
              line: 106,
              column: 96
            }
          }],
          line: 106
        },
        "12": {
          loc: {
            start: {
              line: 107,
              column: 6
            },
            end: {
              line: 110,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 107,
              column: 6
            },
            end: {
              line: 110,
              column: 7
            }
          }, {
            start: {
              line: 107,
              column: 6
            },
            end: {
              line: 110,
              column: 7
            }
          }],
          line: 107
        },
        "13": {
          loc: {
            start: {
              line: 112,
              column: 6
            },
            end: {
              line: 114,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 112,
              column: 6
            },
            end: {
              line: 114,
              column: 7
            }
          }, {
            start: {
              line: 112,
              column: 6
            },
            end: {
              line: 114,
              column: 7
            }
          }],
          line: 112
        },
        "14": {
          loc: {
            start: {
              line: 129,
              column: 6
            },
            end: {
              line: 132,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 129,
              column: 6
            },
            end: {
              line: 132,
              column: 7
            }
          }, {
            start: {
              line: 129,
              column: 6
            },
            end: {
              line: 132,
              column: 7
            }
          }],
          line: 129
        },
        "15": {
          loc: {
            start: {
              line: 134,
              column: 6
            },
            end: {
              line: 136,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 134,
              column: 6
            },
            end: {
              line: 136,
              column: 7
            }
          }, {
            start: {
              line: 134,
              column: 6
            },
            end: {
              line: 136,
              column: 7
            }
          }],
          line: 134
        },
        "16": {
          loc: {
            start: {
              line: 151,
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
              line: 151,
              column: 4
            },
            end: {
              line: 153,
              column: 5
            }
          }, {
            start: {
              line: 151,
              column: 4
            },
            end: {
              line: 153,
              column: 5
            }
          }],
          line: 151
        },
        "17": {
          loc: {
            start: {
              line: 155,
              column: 4
            },
            end: {
              line: 166,
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
              line: 166,
              column: 5
            }
          }, {
            start: {
              line: 155,
              column: 4
            },
            end: {
              line: 166,
              column: 5
            }
          }],
          line: 155
        },
        "18": {
          loc: {
            start: {
              line: 155,
              column: 8
            },
            end: {
              line: 155,
              column: 91
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 155,
              column: 8
            },
            end: {
              line: 155,
              column: 15
            }
          }, {
            start: {
              line: 155,
              column: 19
            },
            end: {
              line: 155,
              column: 50
            }
          }, {
            start: {
              line: 155,
              column: 54
            },
            end: {
              line: 155,
              column: 91
            }
          }],
          line: 155
        },
        "19": {
          loc: {
            start: {
              line: 160,
              column: 6
            },
            end: {
              line: 163,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 160,
              column: 6
            },
            end: {
              line: 163,
              column: 7
            }
          }, {
            start: {
              line: 160,
              column: 6
            },
            end: {
              line: 163,
              column: 7
            }
          }],
          line: 160
        },
        "20": {
          loc: {
            start: {
              line: 160,
              column: 10
            },
            end: {
              line: 160,
              column: 100
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 160,
              column: 10
            },
            end: {
              line: 160,
              column: 18
            }
          }, {
            start: {
              line: 160,
              column: 23
            },
            end: {
              line: 160,
              column: 56
            }
          }, {
            start: {
              line: 160,
              column: 60
            },
            end: {
              line: 160,
              column: 99
            }
          }],
          line: 160
        },
        "21": {
          loc: {
            start: {
              line: 181,
              column: 4
            },
            end: {
              line: 185,
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
              line: 185,
              column: 5
            }
          }, {
            start: {
              line: 181,
              column: 4
            },
            end: {
              line: 185,
              column: 5
            }
          }],
          line: 181
        },
        "22": {
          loc: {
            start: {
              line: 181,
              column: 8
            },
            end: {
              line: 181,
              column: 54
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
              column: 21
            }
          }, {
            start: {
              line: 181,
              column: 25
            },
            end: {
              line: 181,
              column: 54
            }
          }],
          line: 181
        },
        "23": {
          loc: {
            start: {
              line: 192,
              column: 4
            },
            end: {
              line: 196,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 192,
              column: 4
            },
            end: {
              line: 196,
              column: 5
            }
          }, {
            start: {
              line: 192,
              column: 4
            },
            end: {
              line: 196,
              column: 5
            }
          }],
          line: 192
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
        "81": 0
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
        "23": [0, 0]
      },
      _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
      hash: "4b8e0e8b39712eb4ef45355a78838e760d9c6229"
    };
    var coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    return coverage[path] = coverageData;
  }();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_2b2z8qvtnt.s[0]++, 'button');
  var VERSION = (cov_2b2z8qvtnt.s[1]++, '4.4.1');
  var DATA_KEY = (cov_2b2z8qvtnt.s[2]++, 'bs.button');
  var EVENT_KEY = (cov_2b2z8qvtnt.s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_2b2z8qvtnt.s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_2b2z8qvtnt.s[5]++, $.fn[NAME]);
  var ClassName = (cov_2b2z8qvtnt.s[6]++, {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  });
  var Selector = (cov_2b2z8qvtnt.s[7]++, {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLES: '[data-toggle="buttons"]',
    DATA_TOGGLE: '[data-toggle="button"]',
    DATA_TOGGLES_BUTTONS: '[data-toggle="buttons"] .btn',
    INPUT: 'input:not([type="hidden"])',
    ACTIVE: '.active',
    BUTTON: '.btn'
  });
  var Event = (cov_2b2z8qvtnt.s[8]++, {
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY + DATA_API_KEY + " " + ("blur" + EVENT_KEY + DATA_API_KEY),
    LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY
  });
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = /*#__PURE__*/function () {
    function Button(element) {
      cov_2b2z8qvtnt.f[0]++;
      cov_2b2z8qvtnt.s[9]++;
      this._element = element;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      cov_2b2z8qvtnt.f[2]++;
      var triggerChangeEvent = (cov_2b2z8qvtnt.s[11]++, true);
      var addAriaPressed = (cov_2b2z8qvtnt.s[12]++, true);
      var rootElement = (cov_2b2z8qvtnt.s[13]++, $(this._element).closest(Selector.DATA_TOGGLES)[0]);
      cov_2b2z8qvtnt.s[14]++;

      if (rootElement) {
        cov_2b2z8qvtnt.b[0][0]++;
        var input = (cov_2b2z8qvtnt.s[15]++, this._element.querySelector(Selector.INPUT));
        cov_2b2z8qvtnt.s[16]++;

        if (input) {
          cov_2b2z8qvtnt.b[1][0]++;
          cov_2b2z8qvtnt.s[17]++;

          if (input.type === 'radio') {
            cov_2b2z8qvtnt.b[2][0]++;
            cov_2b2z8qvtnt.s[18]++;

            if ((cov_2b2z8qvtnt.b[4][0]++, input.checked) && (cov_2b2z8qvtnt.b[4][1]++, this._element.classList.contains(ClassName.ACTIVE))) {
              cov_2b2z8qvtnt.b[3][0]++;
              cov_2b2z8qvtnt.s[19]++;
              triggerChangeEvent = false;
            } else {
              cov_2b2z8qvtnt.b[3][1]++;
              var activeElement = (cov_2b2z8qvtnt.s[20]++, rootElement.querySelector(Selector.ACTIVE));
              cov_2b2z8qvtnt.s[21]++;

              if (activeElement) {
                cov_2b2z8qvtnt.b[5][0]++;
                cov_2b2z8qvtnt.s[22]++;
                $(activeElement).removeClass(ClassName.ACTIVE);
              } else {
                cov_2b2z8qvtnt.b[5][1]++;
              }
            }
          } else {
            cov_2b2z8qvtnt.b[2][1]++;
            cov_2b2z8qvtnt.s[23]++;

            if (input.type === 'checkbox') {
              cov_2b2z8qvtnt.b[6][0]++;
              cov_2b2z8qvtnt.s[24]++;

              if ((cov_2b2z8qvtnt.b[8][0]++, this._element.tagName === 'LABEL') && (cov_2b2z8qvtnt.b[8][1]++, input.checked === this._element.classList.contains(ClassName.ACTIVE))) {
                cov_2b2z8qvtnt.b[7][0]++;
                cov_2b2z8qvtnt.s[25]++;
                triggerChangeEvent = false;
              } else {
                cov_2b2z8qvtnt.b[7][1]++;
              }
            } else {
              cov_2b2z8qvtnt.b[6][1]++;
              cov_2b2z8qvtnt.s[26]++;
              // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
              triggerChangeEvent = false;
            }
          }

          cov_2b2z8qvtnt.s[27]++;

          if (triggerChangeEvent) {
            cov_2b2z8qvtnt.b[9][0]++;
            cov_2b2z8qvtnt.s[28]++;
            input.checked = !this._element.classList.contains(ClassName.ACTIVE);
            cov_2b2z8qvtnt.s[29]++;
            $(input).trigger('change');
          } else {
            cov_2b2z8qvtnt.b[9][1]++;
          }

          cov_2b2z8qvtnt.s[30]++;
          input.focus();
          cov_2b2z8qvtnt.s[31]++;
          addAriaPressed = false;
        } else {
          cov_2b2z8qvtnt.b[1][1]++;
        }
      } else {
        cov_2b2z8qvtnt.b[0][1]++;
      }

      cov_2b2z8qvtnt.s[32]++;

      if (!((cov_2b2z8qvtnt.b[11][0]++, this._element.hasAttribute('disabled')) || (cov_2b2z8qvtnt.b[11][1]++, this._element.classList.contains('disabled')))) {
        cov_2b2z8qvtnt.b[10][0]++;
        cov_2b2z8qvtnt.s[33]++;

        if (addAriaPressed) {
          cov_2b2z8qvtnt.b[12][0]++;
          cov_2b2z8qvtnt.s[34]++;

          this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName.ACTIVE));
        } else {
          cov_2b2z8qvtnt.b[12][1]++;
        }

        cov_2b2z8qvtnt.s[35]++;

        if (triggerChangeEvent) {
          cov_2b2z8qvtnt.b[13][0]++;
          cov_2b2z8qvtnt.s[36]++;
          $(this._element).toggleClass(ClassName.ACTIVE);
        } else {
          cov_2b2z8qvtnt.b[13][1]++;
        }
      } else {
        cov_2b2z8qvtnt.b[10][1]++;
      }
    };

    _proto.dispose = function dispose() {
      cov_2b2z8qvtnt.f[3]++;
      cov_2b2z8qvtnt.s[37]++;
      $.removeData(this._element, DATA_KEY);
      cov_2b2z8qvtnt.s[38]++;
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      cov_2b2z8qvtnt.f[4]++;
      cov_2b2z8qvtnt.s[39]++;
      return this.each(function () {
        cov_2b2z8qvtnt.f[5]++;
        var data = (cov_2b2z8qvtnt.s[40]++, $(this).data(DATA_KEY));
        cov_2b2z8qvtnt.s[41]++;

        if (!data) {
          cov_2b2z8qvtnt.b[14][0]++;
          cov_2b2z8qvtnt.s[42]++;
          data = new Button(this);
          cov_2b2z8qvtnt.s[43]++;
          $(this).data(DATA_KEY, data);
        } else {
          cov_2b2z8qvtnt.b[14][1]++;
        }

        cov_2b2z8qvtnt.s[44]++;

        if (config === 'toggle') {
          cov_2b2z8qvtnt.b[15][0]++;
          cov_2b2z8qvtnt.s[45]++;
          data[config]();
        } else {
          cov_2b2z8qvtnt.b[15][1]++;
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        cov_2b2z8qvtnt.f[1]++;
        cov_2b2z8qvtnt.s[10]++;
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


  cov_2b2z8qvtnt.s[46]++;
  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    cov_2b2z8qvtnt.f[6]++;
    var button = (cov_2b2z8qvtnt.s[47]++, event.target);
    cov_2b2z8qvtnt.s[48]++;

    if (!$(button).hasClass(ClassName.BUTTON)) {
      cov_2b2z8qvtnt.b[16][0]++;
      cov_2b2z8qvtnt.s[49]++;
      button = $(button).closest(Selector.BUTTON)[0];
    } else {
      cov_2b2z8qvtnt.b[16][1]++;
    }

    cov_2b2z8qvtnt.s[50]++;

    if ((cov_2b2z8qvtnt.b[18][0]++, !button) || (cov_2b2z8qvtnt.b[18][1]++, button.hasAttribute('disabled')) || (cov_2b2z8qvtnt.b[18][2]++, button.classList.contains('disabled'))) {
      cov_2b2z8qvtnt.b[17][0]++;
      cov_2b2z8qvtnt.s[51]++;
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      cov_2b2z8qvtnt.b[17][1]++;
      var inputBtn = (cov_2b2z8qvtnt.s[52]++, button.querySelector(Selector.INPUT));
      cov_2b2z8qvtnt.s[53]++;

      if ((cov_2b2z8qvtnt.b[20][0]++, inputBtn) && ((cov_2b2z8qvtnt.b[20][1]++, inputBtn.hasAttribute('disabled')) || (cov_2b2z8qvtnt.b[20][2]++, inputBtn.classList.contains('disabled')))) {
        cov_2b2z8qvtnt.b[19][0]++;
        cov_2b2z8qvtnt.s[54]++;
        event.preventDefault(); // work around Firefox bug #1540995

        cov_2b2z8qvtnt.s[55]++;
        return;
      } else {
        cov_2b2z8qvtnt.b[19][1]++;
      }

      cov_2b2z8qvtnt.s[56]++;

      Button._jQueryInterface.call($(button), 'toggle');
    }
  }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    cov_2b2z8qvtnt.f[7]++;
    var button = (cov_2b2z8qvtnt.s[57]++, $(event.target).closest(Selector.BUTTON)[0]);
    cov_2b2z8qvtnt.s[58]++;
    $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
  });
  cov_2b2z8qvtnt.s[59]++;
  $(window).on(Event.LOAD_DATA_API, function () {
    cov_2b2z8qvtnt.f[8]++;
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = (cov_2b2z8qvtnt.s[60]++, [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLES_BUTTONS)));
    cov_2b2z8qvtnt.s[61]++;

    for (var i = (cov_2b2z8qvtnt.s[62]++, 0), len = (cov_2b2z8qvtnt.s[63]++, buttons.length); i < len; i++) {
      var button = (cov_2b2z8qvtnt.s[64]++, buttons[i]);
      var input = (cov_2b2z8qvtnt.s[65]++, button.querySelector(Selector.INPUT));
      cov_2b2z8qvtnt.s[66]++;

      if ((cov_2b2z8qvtnt.b[22][0]++, input.checked) || (cov_2b2z8qvtnt.b[22][1]++, input.hasAttribute('checked'))) {
        cov_2b2z8qvtnt.b[21][0]++;
        cov_2b2z8qvtnt.s[67]++;
        button.classList.add(ClassName.ACTIVE);
      } else {
        cov_2b2z8qvtnt.b[21][1]++;
        cov_2b2z8qvtnt.s[68]++;
        button.classList.remove(ClassName.ACTIVE);
      }
    } // find all button toggles


    cov_2b2z8qvtnt.s[69]++;
    buttons = [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE));
    cov_2b2z8qvtnt.s[70]++;

    for (var _i = (cov_2b2z8qvtnt.s[71]++, 0), _len = (cov_2b2z8qvtnt.s[72]++, buttons.length); _i < _len; _i++) {
      var _button = (cov_2b2z8qvtnt.s[73]++, buttons[_i]);

      cov_2b2z8qvtnt.s[74]++;

      if (_button.getAttribute('aria-pressed') === 'true') {
        cov_2b2z8qvtnt.b[23][0]++;
        cov_2b2z8qvtnt.s[75]++;

        _button.classList.add(ClassName.ACTIVE);
      } else {
        cov_2b2z8qvtnt.b[23][1]++;
        cov_2b2z8qvtnt.s[76]++;

        _button.classList.remove(ClassName.ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  cov_2b2z8qvtnt.s[77]++;
  $.fn[NAME] = Button._jQueryInterface;
  cov_2b2z8qvtnt.s[78]++;
  $.fn[NAME].Constructor = Button;
  cov_2b2z8qvtnt.s[79]++;

  $.fn[NAME].noConflict = function () {
    cov_2b2z8qvtnt.f[9]++;
    cov_2b2z8qvtnt.s[80]++;
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    cov_2b2z8qvtnt.s[81]++;
    return Button._jQueryInterface;
  };

  return Button;

})));
//# sourceMappingURL=button.js.map

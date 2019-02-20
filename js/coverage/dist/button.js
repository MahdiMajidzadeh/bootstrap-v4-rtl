/*!
  * Bootstrap button.js v4.3.1-0 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2019 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/data.js'), require('./dom/eventHandler.js'), require('./dom/selectorEngine.js'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['./dom/data.js', './dom/eventHandler.js', './dom/selectorEngine.js', './util.js'], factory) :
  (global = global || self, global.Button = factory(global.Data, global.EventHandler, global.SelectorEngine, global.Util));
}(this, function (Data, EventHandler, SelectorEngine, Util) { 'use strict';

  Data = Data && Data.hasOwnProperty('default') ? Data['default'] : Data;
  EventHandler = EventHandler && EventHandler.hasOwnProperty('default') ? EventHandler['default'] : EventHandler;
  SelectorEngine = SelectorEngine && SelectorEngine.hasOwnProperty('default') ? SelectorEngine['default'] : SelectorEngine;
  Util = Util && Util.hasOwnProperty('default') ? Util['default'] : Util;

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
    var hash = "4d9327e233e3b6212fbe21f2286bcccb807874ad";

    var Function = function () {}.constructor;

    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/button.js",
      statementMap: {
        "0": {
          start: {
            line: 19,
            column: 28
          },
          end: {
            line: 19,
            column: 36
          }
        },
        "1": {
          start: {
            line: 20,
            column: 28
          },
          end: {
            line: 20,
            column: 35
          }
        },
        "2": {
          start: {
            line: 21,
            column: 28
          },
          end: {
            line: 21,
            column: 39
          }
        },
        "3": {
          start: {
            line: 22,
            column: 28
          },
          end: {
            line: 22,
            column: 42
          }
        },
        "4": {
          start: {
            line: 23,
            column: 28
          },
          end: {
            line: 23,
            column: 39
          }
        },
        "5": {
          start: {
            line: 25,
            column: 18
          },
          end: {
            line: 29,
            column: 1
          }
        },
        "6": {
          start: {
            line: 31,
            column: 17
          },
          end: {
            line: 37,
            column: 1
          }
        },
        "7": {
          start: {
            line: 39,
            column: 14
          },
          end: {
            line: 43,
            column: 1
          }
        },
        "8": {
          start: {
            line: 53,
            column: 4
          },
          end: {
            line: 53,
            column: 27
          }
        },
        "9": {
          start: {
            line: 54,
            column: 4
          },
          end: {
            line: 54,
            column: 41
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
            line: 69,
            column: 24
          },
          end: {
            line: 72,
            column: 5
          }
        },
        "14": {
          start: {
            line: 74,
            column: 4
          },
          end: {
            line: 106,
            column: 5
          }
        },
        "15": {
          start: {
            line: 75,
            column: 20
          },
          end: {
            line: 75,
            column: 73
          }
        },
        "16": {
          start: {
            line: 77,
            column: 6
          },
          end: {
            line: 105,
            column: 7
          }
        },
        "17": {
          start: {
            line: 78,
            column: 8
          },
          end: {
            line: 89,
            column: 9
          }
        },
        "18": {
          start: {
            line: 79,
            column: 10
          },
          end: {
            line: 88,
            column: 11
          }
        },
        "19": {
          start: {
            line: 81,
            column: 12
          },
          end: {
            line: 81,
            column: 38
          }
        },
        "20": {
          start: {
            line: 83,
            column: 34
          },
          end: {
            line: 83,
            column: 86
          }
        },
        "21": {
          start: {
            line: 85,
            column: 12
          },
          end: {
            line: 87,
            column: 13
          }
        },
        "22": {
          start: {
            line: 86,
            column: 14
          },
          end: {
            line: 86,
            column: 62
          }
        },
        "23": {
          start: {
            line: 91,
            column: 8
          },
          end: {
            line: 101,
            column: 9
          }
        },
        "24": {
          start: {
            line: 92,
            column: 10
          },
          end: {
            line: 97,
            column: 11
          }
        },
        "25": {
          start: {
            line: 96,
            column: 12
          },
          end: {
            line: 96,
            column: 18
          }
        },
        "26": {
          start: {
            line: 99,
            column: 10
          },
          end: {
            line: 99,
            column: 77
          }
        },
        "27": {
          start: {
            line: 100,
            column: 10
          },
          end: {
            line: 100,
            column: 47
          }
        },
        "28": {
          start: {
            line: 103,
            column: 8
          },
          end: {
            line: 103,
            column: 21
          }
        },
        "29": {
          start: {
            line: 104,
            column: 8
          },
          end: {
            line: 104,
            column: 30
          }
        },
        "30": {
          start: {
            line: 108,
            column: 4
          },
          end: {
            line: 111,
            column: 5
          }
        },
        "31": {
          start: {
            line: 109,
            column: 6
          },
          end: {
            line: 110,
            column: 60
          }
        },
        "32": {
          start: {
            line: 113,
            column: 4
          },
          end: {
            line: 115,
            column: 5
          }
        },
        "33": {
          start: {
            line: 114,
            column: 6
          },
          end: {
            line: 114,
            column: 54
          }
        },
        "34": {
          start: {
            line: 119,
            column: 4
          },
          end: {
            line: 119,
            column: 44
          }
        },
        "35": {
          start: {
            line: 120,
            column: 4
          },
          end: {
            line: 120,
            column: 24
          }
        },
        "36": {
          start: {
            line: 126,
            column: 4
          },
          end: {
            line: 136,
            column: 6
          }
        },
        "37": {
          start: {
            line: 127,
            column: 17
          },
          end: {
            line: 127,
            column: 45
          }
        },
        "38": {
          start: {
            line: 129,
            column: 6
          },
          end: {
            line: 131,
            column: 7
          }
        },
        "39": {
          start: {
            line: 130,
            column: 8
          },
          end: {
            line: 130,
            column: 31
          }
        },
        "40": {
          start: {
            line: 133,
            column: 6
          },
          end: {
            line: 135,
            column: 7
          }
        },
        "41": {
          start: {
            line: 134,
            column: 8
          },
          end: {
            line: 134,
            column: 22
          }
        },
        "42": {
          start: {
            line: 140,
            column: 4
          },
          end: {
            line: 140,
            column: 42
          }
        },
        "43": {
          start: {
            line: 150,
            column: 0
          },
          end: {
            line: 164,
            column: 2
          }
        },
        "44": {
          start: {
            line: 151,
            column: 2
          },
          end: {
            line: 151,
            column: 24
          }
        },
        "45": {
          start: {
            line: 153,
            column: 15
          },
          end: {
            line: 153,
            column: 27
          }
        },
        "46": {
          start: {
            line: 154,
            column: 2
          },
          end: {
            line: 156,
            column: 3
          }
        },
        "47": {
          start: {
            line: 155,
            column: 4
          },
          end: {
            line: 155,
            column: 60
          }
        },
        "48": {
          start: {
            line: 158,
            column: 13
          },
          end: {
            line: 158,
            column: 43
          }
        },
        "49": {
          start: {
            line: 159,
            column: 2
          },
          end: {
            line: 162,
            column: 3
          }
        },
        "50": {
          start: {
            line: 160,
            column: 4
          },
          end: {
            line: 160,
            column: 29
          }
        },
        "51": {
          start: {
            line: 161,
            column: 4
          },
          end: {
            line: 161,
            column: 40
          }
        },
        "52": {
          start: {
            line: 163,
            column: 2
          },
          end: {
            line: 163,
            column: 15
          }
        },
        "53": {
          start: {
            line: 166,
            column: 0
          },
          end: {
            line: 169,
            column: 2
          }
        },
        "54": {
          start: {
            line: 167,
            column: 17
          },
          end: {
            line: 167,
            column: 70
          }
        },
        "55": {
          start: {
            line: 168,
            column: 2
          },
          end: {
            line: 168,
            column: 39
          }
        },
        "56": {
          start: {
            line: 171,
            column: 0
          },
          end: {
            line: 174,
            column: 2
          }
        },
        "57": {
          start: {
            line: 172,
            column: 17
          },
          end: {
            line: 172,
            column: 70
          }
        },
        "58": {
          start: {
            line: 173,
            column: 2
          },
          end: {
            line: 173,
            column: 42
          }
        },
        "59": {
          start: {
            line: 183,
            column: 10
          },
          end: {
            line: 183,
            column: 21
          }
        },
        "60": {
          start: {
            line: 184,
            column: 0
          },
          end: {
            line: 193,
            column: 1
          }
        },
        "61": {
          start: {
            line: 185,
            column: 30
          },
          end: {
            line: 185,
            column: 40
          }
        },
        "62": {
          start: {
            line: 186,
            column: 2
          },
          end: {
            line: 186,
            column: 53
          }
        },
        "63": {
          start: {
            line: 187,
            column: 2
          },
          end: {
            line: 187,
            column: 36
          }
        },
        "64": {
          start: {
            line: 189,
            column: 2
          },
          end: {
            line: 192,
            column: 3
          }
        },
        "65": {
          start: {
            line: 190,
            column: 4
          },
          end: {
            line: 190,
            column: 35
          }
        },
        "66": {
          start: {
            line: 191,
            column: 4
          },
          end: {
            line: 191,
            column: 34
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
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
              line: 55,
              column: 3
            }
          },
          line: 52
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
              line: 137,
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
              line: 136,
              column: 5
            }
          },
          line: 126
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 139,
              column: 2
            },
            end: {
              line: 139,
              column: 3
            }
          },
          loc: {
            start: {
              line: 139,
              column: 31
            },
            end: {
              line: 141,
              column: 3
            }
          },
          line: 139
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 150,
              column: 77
            },
            end: {
              line: 150,
              column: 78
            }
          },
          loc: {
            start: {
              line: 150,
              column: 88
            },
            end: {
              line: 164,
              column: 1
            }
          },
          line: 150
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 166,
              column: 77
            },
            end: {
              line: 166,
              column: 78
            }
          },
          loc: {
            start: {
              line: 166,
              column: 88
            },
            end: {
              line: 169,
              column: 1
            }
          },
          line: 166
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 171,
              column: 76
            },
            end: {
              line: 171,
              column: 77
            }
          },
          loc: {
            start: {
              line: 171,
              column: 87
            },
            end: {
              line: 174,
              column: 1
            }
          },
          line: 171
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 189,
              column: 27
            },
            end: {
              line: 189,
              column: 28
            }
          },
          loc: {
            start: {
              line: 189,
              column: 33
            },
            end: {
              line: 192,
              column: 3
            }
          },
          line: 189
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 74,
              column: 4
            },
            end: {
              line: 106,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 74,
              column: 4
            },
            end: {
              line: 106,
              column: 5
            }
          }, {
            start: {
              line: 74,
              column: 4
            },
            end: {
              line: 106,
              column: 5
            }
          }],
          line: 74
        },
        "1": {
          loc: {
            start: {
              line: 77,
              column: 6
            },
            end: {
              line: 105,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 77,
              column: 6
            },
            end: {
              line: 105,
              column: 7
            }
          }, {
            start: {
              line: 77,
              column: 6
            },
            end: {
              line: 105,
              column: 7
            }
          }],
          line: 77
        },
        "2": {
          loc: {
            start: {
              line: 78,
              column: 8
            },
            end: {
              line: 89,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 78,
              column: 8
            },
            end: {
              line: 89,
              column: 9
            }
          }, {
            start: {
              line: 78,
              column: 8
            },
            end: {
              line: 89,
              column: 9
            }
          }],
          line: 78
        },
        "3": {
          loc: {
            start: {
              line: 79,
              column: 10
            },
            end: {
              line: 88,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 79,
              column: 10
            },
            end: {
              line: 88,
              column: 11
            }
          }, {
            start: {
              line: 79,
              column: 10
            },
            end: {
              line: 88,
              column: 11
            }
          }],
          line: 79
        },
        "4": {
          loc: {
            start: {
              line: 79,
              column: 14
            },
            end: {
              line: 80,
              column: 62
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 79,
              column: 14
            },
            end: {
              line: 79,
              column: 27
            }
          }, {
            start: {
              line: 80,
              column: 12
            },
            end: {
              line: 80,
              column: 62
            }
          }],
          line: 79
        },
        "5": {
          loc: {
            start: {
              line: 85,
              column: 12
            },
            end: {
              line: 87,
              column: 13
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 85,
              column: 12
            },
            end: {
              line: 87,
              column: 13
            }
          }, {
            start: {
              line: 85,
              column: 12
            },
            end: {
              line: 87,
              column: 13
            }
          }],
          line: 85
        },
        "6": {
          loc: {
            start: {
              line: 91,
              column: 8
            },
            end: {
              line: 101,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 91,
              column: 8
            },
            end: {
              line: 101,
              column: 9
            }
          }, {
            start: {
              line: 91,
              column: 8
            },
            end: {
              line: 101,
              column: 9
            }
          }],
          line: 91
        },
        "7": {
          loc: {
            start: {
              line: 92,
              column: 10
            },
            end: {
              line: 97,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 92,
              column: 10
            },
            end: {
              line: 97,
              column: 11
            }
          }, {
            start: {
              line: 92,
              column: 10
            },
            end: {
              line: 97,
              column: 11
            }
          }],
          line: 92
        },
        "8": {
          loc: {
            start: {
              line: 92,
              column: 14
            },
            end: {
              line: 95,
              column: 54
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 92,
              column: 14
            },
            end: {
              line: 92,
              column: 44
            }
          }, {
            start: {
              line: 93,
              column: 12
            },
            end: {
              line: 93,
              column: 48
            }
          }, {
            start: {
              line: 94,
              column: 12
            },
            end: {
              line: 94,
              column: 48
            }
          }, {
            start: {
              line: 95,
              column: 12
            },
            end: {
              line: 95,
              column: 54
            }
          }],
          line: 92
        },
        "9": {
          loc: {
            start: {
              line: 108,
              column: 4
            },
            end: {
              line: 111,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 108,
              column: 4
            },
            end: {
              line: 111,
              column: 5
            }
          }, {
            start: {
              line: 108,
              column: 4
            },
            end: {
              line: 111,
              column: 5
            }
          }],
          line: 108
        },
        "10": {
          loc: {
            start: {
              line: 113,
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
              line: 113,
              column: 4
            },
            end: {
              line: 115,
              column: 5
            }
          }, {
            start: {
              line: 113,
              column: 4
            },
            end: {
              line: 115,
              column: 5
            }
          }],
          line: 113
        },
        "11": {
          loc: {
            start: {
              line: 129,
              column: 6
            },
            end: {
              line: 131,
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
              line: 131,
              column: 7
            }
          }, {
            start: {
              line: 129,
              column: 6
            },
            end: {
              line: 131,
              column: 7
            }
          }],
          line: 129
        },
        "12": {
          loc: {
            start: {
              line: 133,
              column: 6
            },
            end: {
              line: 135,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 133,
              column: 6
            },
            end: {
              line: 135,
              column: 7
            }
          }, {
            start: {
              line: 133,
              column: 6
            },
            end: {
              line: 135,
              column: 7
            }
          }],
          line: 133
        },
        "13": {
          loc: {
            start: {
              line: 154,
              column: 2
            },
            end: {
              line: 156,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 154,
              column: 2
            },
            end: {
              line: 156,
              column: 3
            }
          }, {
            start: {
              line: 154,
              column: 2
            },
            end: {
              line: 156,
              column: 3
            }
          }],
          line: 154
        },
        "14": {
          loc: {
            start: {
              line: 159,
              column: 2
            },
            end: {
              line: 162,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 159,
              column: 2
            },
            end: {
              line: 162,
              column: 3
            }
          }, {
            start: {
              line: 159,
              column: 2
            },
            end: {
              line: 162,
              column: 3
            }
          }],
          line: 159
        },
        "15": {
          loc: {
            start: {
              line: 184,
              column: 0
            },
            end: {
              line: 193,
              column: 1
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 184,
              column: 0
            },
            end: {
              line: 193,
              column: 1
            }
          }, {
            start: {
              line: 184,
              column: 0
            },
            end: {
              line: 193,
              column: 1
            }
          }],
          line: 184
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
        "66": 0
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
        "10": 0
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
        "8": [0, 0, 0, 0],
        "9": [0, 0],
        "10": [0, 0],
        "11": [0, 0],
        "12": [0, 0],
        "13": [0, 0],
        "14": [0, 0],
        "15": [0, 0]
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
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_2b2z8qvtnt.s[0]++, 'button');
  var VERSION = (cov_2b2z8qvtnt.s[1]++, '4.3.1');
  var DATA_KEY = (cov_2b2z8qvtnt.s[2]++, 'bs.button');
  var EVENT_KEY = (cov_2b2z8qvtnt.s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_2b2z8qvtnt.s[4]++, '.data-api');
  var ClassName = (cov_2b2z8qvtnt.s[5]++, {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  });
  var Selector = (cov_2b2z8qvtnt.s[6]++, {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLE: '[data-toggle="buttons"]',
    INPUT: 'input:not([type="hidden"])',
    ACTIVE: '.active',
    BUTTON: '.btn'
  });
  var Event = (cov_2b2z8qvtnt.s[7]++, {
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
    FOCUS_DATA_API: "focus" + EVENT_KEY + DATA_API_KEY,
    BLUR_DATA_API: "blur" + EVENT_KEY + DATA_API_KEY
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  });

  var Button =
  /*#__PURE__*/
  function () {
    function Button(element) {
      cov_2b2z8qvtnt.f[0]++;
      cov_2b2z8qvtnt.s[8]++;
      this._element = element;
      cov_2b2z8qvtnt.s[9]++;
      Data.setData(element, DATA_KEY, this);
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      cov_2b2z8qvtnt.f[2]++;
      var triggerChangeEvent = (cov_2b2z8qvtnt.s[11]++, true);
      var addAriaPressed = (cov_2b2z8qvtnt.s[12]++, true);
      var rootElement = (cov_2b2z8qvtnt.s[13]++, SelectorEngine.closest(this._element, Selector.DATA_TOGGLE));
      cov_2b2z8qvtnt.s[14]++;

      if (rootElement) {
        cov_2b2z8qvtnt.b[0][0]++;
        var input = (cov_2b2z8qvtnt.s[15]++, SelectorEngine.findOne(Selector.INPUT, this._element));
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
              var activeElement = (cov_2b2z8qvtnt.s[20]++, SelectorEngine.findOne(Selector.ACTIVE, rootElement));
              cov_2b2z8qvtnt.s[21]++;

              if (activeElement) {
                cov_2b2z8qvtnt.b[5][0]++;
                cov_2b2z8qvtnt.s[22]++;
                activeElement.classList.remove(ClassName.ACTIVE);
              } else {
                cov_2b2z8qvtnt.b[5][1]++;
              }
            }
          } else {
            cov_2b2z8qvtnt.b[2][1]++;
          }

          cov_2b2z8qvtnt.s[23]++;

          if (triggerChangeEvent) {
            cov_2b2z8qvtnt.b[6][0]++;
            cov_2b2z8qvtnt.s[24]++;

            if ((cov_2b2z8qvtnt.b[8][0]++, input.hasAttribute('disabled')) || (cov_2b2z8qvtnt.b[8][1]++, rootElement.hasAttribute('disabled')) || (cov_2b2z8qvtnt.b[8][2]++, input.classList.contains('disabled')) || (cov_2b2z8qvtnt.b[8][3]++, rootElement.classList.contains('disabled'))) {
              cov_2b2z8qvtnt.b[7][0]++;
              cov_2b2z8qvtnt.s[25]++;
              return;
            } else {
              cov_2b2z8qvtnt.b[7][1]++;
            }

            cov_2b2z8qvtnt.s[26]++;
            input.checked = !this._element.classList.contains(ClassName.ACTIVE);
            cov_2b2z8qvtnt.s[27]++;
            EventHandler.trigger(input, 'change');
          } else {
            cov_2b2z8qvtnt.b[6][1]++;
          }

          cov_2b2z8qvtnt.s[28]++;
          input.focus();
          cov_2b2z8qvtnt.s[29]++;
          addAriaPressed = false;
        } else {
          cov_2b2z8qvtnt.b[1][1]++;
        }
      } else {
        cov_2b2z8qvtnt.b[0][1]++;
      }

      cov_2b2z8qvtnt.s[30]++;

      if (addAriaPressed) {
        cov_2b2z8qvtnt.b[9][0]++;
        cov_2b2z8qvtnt.s[31]++;

        this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName.ACTIVE));
      } else {
        cov_2b2z8qvtnt.b[9][1]++;
      }

      cov_2b2z8qvtnt.s[32]++;

      if (triggerChangeEvent) {
        cov_2b2z8qvtnt.b[10][0]++;
        cov_2b2z8qvtnt.s[33]++;

        this._element.classList.toggle(ClassName.ACTIVE);
      } else {
        cov_2b2z8qvtnt.b[10][1]++;
      }
    };

    _proto.dispose = function dispose() {
      cov_2b2z8qvtnt.f[3]++;
      cov_2b2z8qvtnt.s[34]++;
      Data.removeData(this._element, DATA_KEY);
      cov_2b2z8qvtnt.s[35]++;
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      cov_2b2z8qvtnt.f[4]++;
      cov_2b2z8qvtnt.s[36]++;
      return this.each(function () {
        cov_2b2z8qvtnt.f[5]++;
        var data = (cov_2b2z8qvtnt.s[37]++, Data.getData(this, DATA_KEY));
        cov_2b2z8qvtnt.s[38]++;

        if (!data) {
          cov_2b2z8qvtnt.b[11][0]++;
          cov_2b2z8qvtnt.s[39]++;
          data = new Button(this);
        } else {
          cov_2b2z8qvtnt.b[11][1]++;
        }

        cov_2b2z8qvtnt.s[40]++;

        if (config === 'toggle') {
          cov_2b2z8qvtnt.b[12][0]++;
          cov_2b2z8qvtnt.s[41]++;
          data[config]();
        } else {
          cov_2b2z8qvtnt.b[12][1]++;
        }
      });
    };

    Button._getInstance = function _getInstance(element) {
      cov_2b2z8qvtnt.f[6]++;
      cov_2b2z8qvtnt.s[42]++;
      return Data.getData(element, DATA_KEY);
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


  cov_2b2z8qvtnt.s[43]++;
  EventHandler.on(document, Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    cov_2b2z8qvtnt.f[7]++;
    cov_2b2z8qvtnt.s[44]++;
    event.preventDefault();
    var button = (cov_2b2z8qvtnt.s[45]++, event.target);
    cov_2b2z8qvtnt.s[46]++;

    if (!button.classList.contains(ClassName.BUTTON)) {
      cov_2b2z8qvtnt.b[13][0]++;
      cov_2b2z8qvtnt.s[47]++;
      button = SelectorEngine.closest(button, Selector.BUTTON);
    } else {
      cov_2b2z8qvtnt.b[13][1]++;
    }

    var data = (cov_2b2z8qvtnt.s[48]++, Data.getData(button, DATA_KEY));
    cov_2b2z8qvtnt.s[49]++;

    if (!data) {
      cov_2b2z8qvtnt.b[14][0]++;
      cov_2b2z8qvtnt.s[50]++;
      data = new Button(button);
      cov_2b2z8qvtnt.s[51]++;
      Data.setData(button, DATA_KEY, data);
    } else {
      cov_2b2z8qvtnt.b[14][1]++;
    }

    cov_2b2z8qvtnt.s[52]++;
    data.toggle();
  });
  cov_2b2z8qvtnt.s[53]++;
  EventHandler.on(document, Event.FOCUS_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    cov_2b2z8qvtnt.f[8]++;
    var button = (cov_2b2z8qvtnt.s[54]++, SelectorEngine.closest(event.target, Selector.BUTTON));
    cov_2b2z8qvtnt.s[55]++;
    button.classList.add(ClassName.FOCUS);
  });
  cov_2b2z8qvtnt.s[56]++;
  EventHandler.on(document, Event.BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    cov_2b2z8qvtnt.f[9]++;
    var button = (cov_2b2z8qvtnt.s[57]++, SelectorEngine.closest(event.target, Selector.BUTTON));
    cov_2b2z8qvtnt.s[58]++;
    button.classList.remove(ClassName.FOCUS);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .button to jQuery only if jQuery is present
   */

  var $ = (cov_2b2z8qvtnt.s[59]++, Util.jQuery);
  cov_2b2z8qvtnt.s[60]++;

  if (typeof $ !== 'undefined') {
    cov_2b2z8qvtnt.b[15][0]++;
    var JQUERY_NO_CONFLICT = (cov_2b2z8qvtnt.s[61]++, $.fn[NAME]);
    cov_2b2z8qvtnt.s[62]++;
    $.fn[NAME] = Button._jQueryInterface;
    cov_2b2z8qvtnt.s[63]++;
    $.fn[NAME].Constructor = Button;
    cov_2b2z8qvtnt.s[64]++;

    $.fn[NAME].noConflict = function () {
      cov_2b2z8qvtnt.f[10]++;
      cov_2b2z8qvtnt.s[65]++;
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      cov_2b2z8qvtnt.s[66]++;
      return Button._jQueryInterface;
    };
  } else {
    cov_2b2z8qvtnt.b[15][1]++;
  }

  return Button;

}));
//# sourceMappingURL=button.js.map

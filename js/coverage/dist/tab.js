/*!
  * Bootstrap tab.js v4.3.1-0 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2019 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/data.js'), require('./dom/eventHandler.js'), require('./dom/selectorEngine.js'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['./dom/data.js', './dom/eventHandler.js', './dom/selectorEngine.js', './util.js'], factory) :
  (global = global || self, global.Tab = factory(global.Data, global.EventHandler, global.SelectorEngine, global.Util));
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

  var cov_heer65qvl = function () {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/tab.js";
    var hash = "2cbdd050e18a30d42dd1cc0be8b6e6b9a1eb89ab";

    var Function = function () {}.constructor;

    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/tab.js",
      statementMap: {
        "0": {
          start: {
            line: 19,
            column: 27
          },
          end: {
            line: 19,
            column: 32
          }
        },
        "1": {
          start: {
            line: 20,
            column: 27
          },
          end: {
            line: 20,
            column: 34
          }
        },
        "2": {
          start: {
            line: 21,
            column: 27
          },
          end: {
            line: 21,
            column: 35
          }
        },
        "3": {
          start: {
            line: 22,
            column: 27
          },
          end: {
            line: 22,
            column: 41
          }
        },
        "4": {
          start: {
            line: 23,
            column: 27
          },
          end: {
            line: 23,
            column: 38
          }
        },
        "5": {
          start: {
            line: 25,
            column: 14
          },
          end: {
            line: 31,
            column: 1
          }
        },
        "6": {
          start: {
            line: 33,
            column: 18
          },
          end: {
            line: 39,
            column: 1
          }
        },
        "7": {
          start: {
            line: 41,
            column: 17
          },
          end: {
            line: 49,
            column: 1
          }
        },
        "8": {
          start: {
            line: 59,
            column: 4
          },
          end: {
            line: 59,
            column: 27
          }
        },
        "9": {
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 61,
            column: 47
          }
        },
        "10": {
          start: {
            line: 67,
            column: 4
          },
          end: {
            line: 67,
            column: 18
          }
        },
        "11": {
          start: {
            line: 73,
            column: 4
          },
          end: {
            line: 78,
            column: 5
          }
        },
        "12": {
          start: {
            line: 77,
            column: 6
          },
          end: {
            line: 77,
            column: 12
          }
        },
        "13": {
          start: {
            line: 82,
            column: 24
          },
          end: {
            line: 82,
            column: 86
          }
        },
        "14": {
          start: {
            line: 83,
            column: 21
          },
          end: {
            line: 83,
            column: 63
          }
        },
        "15": {
          start: {
            line: 85,
            column: 4
          },
          end: {
            line: 89,
            column: 5
          }
        },
        "16": {
          start: {
            line: 86,
            column: 27
          },
          end: {
            line: 86,
            column: 128
          }
        },
        "17": {
          start: {
            line: 87,
            column: 6
          },
          end: {
            line: 87,
            column: 79
          }
        },
        "18": {
          start: {
            line: 88,
            column: 6
          },
          end: {
            line: 88,
            column: 46
          }
        },
        "19": {
          start: {
            line: 91,
            column: 20
          },
          end: {
            line: 91,
            column: 24
          }
        },
        "20": {
          start: {
            line: 93,
            column: 4
          },
          end: {
            line: 97,
            column: 5
          }
        },
        "21": {
          start: {
            line: 94,
            column: 6
          },
          end: {
            line: 96,
            column: 8
          }
        },
        "22": {
          start: {
            line: 99,
            column: 22
          },
          end: {
            line: 101,
            column: 6
          }
        },
        "23": {
          start: {
            line: 103,
            column: 4
          },
          end: {
            line: 106,
            column: 5
          }
        },
        "24": {
          start: {
            line: 105,
            column: 6
          },
          end: {
            line: 105,
            column: 12
          }
        },
        "25": {
          start: {
            line: 108,
            column: 4
          },
          end: {
            line: 110,
            column: 5
          }
        },
        "26": {
          start: {
            line: 109,
            column: 6
          },
          end: {
            line: 109,
            column: 47
          }
        },
        "27": {
          start: {
            line: 112,
            column: 4
          },
          end: {
            line: 115,
            column: 5
          }
        },
        "28": {
          start: {
            line: 117,
            column: 21
          },
          end: {
            line: 124,
            column: 5
          }
        },
        "29": {
          start: {
            line: 118,
            column: 6
          },
          end: {
            line: 120,
            column: 8
          }
        },
        "30": {
          start: {
            line: 121,
            column: 6
          },
          end: {
            line: 123,
            column: 8
          }
        },
        "31": {
          start: {
            line: 126,
            column: 4
          },
          end: {
            line: 130,
            column: 5
          }
        },
        "32": {
          start: {
            line: 127,
            column: 6
          },
          end: {
            line: 127,
            column: 57
          }
        },
        "33": {
          start: {
            line: 129,
            column: 6
          },
          end: {
            line: 129,
            column: 16
          }
        },
        "34": {
          start: {
            line: 134,
            column: 4
          },
          end: {
            line: 134,
            column: 44
          }
        },
        "35": {
          start: {
            line: 135,
            column: 4
          },
          end: {
            line: 135,
            column: 24
          }
        },
        "36": {
          start: {
            line: 141,
            column: 27
          },
          end: {
            line: 143,
            column: 59
          }
        },
        "37": {
          start: {
            line: 145,
            column: 28
          },
          end: {
            line: 145,
            column: 45
          }
        },
        "38": {
          start: {
            line: 146,
            column: 28
          },
          end: {
            line: 147,
            column: 59
          }
        },
        "39": {
          start: {
            line: 149,
            column: 21
          },
          end: {
            line: 153,
            column: 5
          }
        },
        "40": {
          start: {
            line: 149,
            column: 27
          },
          end: {
            line: 153,
            column: 5
          }
        },
        "41": {
          start: {
            line: 155,
            column: 4
          },
          end: {
            line: 163,
            column: 5
          }
        },
        "42": {
          start: {
            line: 156,
            column: 33
          },
          end: {
            line: 156,
            column: 78
          }
        },
        "43": {
          start: {
            line: 157,
            column: 6
          },
          end: {
            line: 157,
            column: 45
          }
        },
        "44": {
          start: {
            line: 159,
            column: 6
          },
          end: {
            line: 159,
            column: 61
          }
        },
        "45": {
          start: {
            line: 160,
            column: 6
          },
          end: {
            line: 160,
            column: 59
          }
        },
        "46": {
          start: {
            line: 162,
            column: 6
          },
          end: {
            line: 162,
            column: 16
          }
        },
        "47": {
          start: {
            line: 167,
            column: 4
          },
          end: {
            line: 179,
            column: 5
          }
        },
        "48": {
          start: {
            line: 168,
            column: 6
          },
          end: {
            line: 168,
            column: 47
          }
        },
        "49": {
          start: {
            line: 170,
            column: 28
          },
          end: {
            line: 170,
            column: 101
          }
        },
        "50": {
          start: {
            line: 172,
            column: 6
          },
          end: {
            line: 174,
            column: 7
          }
        },
        "51": {
          start: {
            line: 173,
            column: 8
          },
          end: {
            line: 173,
            column: 56
          }
        },
        "52": {
          start: {
            line: 176,
            column: 6
          },
          end: {
            line: 178,
            column: 7
          }
        },
        "53": {
          start: {
            line: 177,
            column: 8
          },
          end: {
            line: 177,
            column: 51
          }
        },
        "54": {
          start: {
            line: 181,
            column: 4
          },
          end: {
            line: 181,
            column: 43
          }
        },
        "55": {
          start: {
            line: 182,
            column: 4
          },
          end: {
            line: 184,
            column: 5
          }
        },
        "56": {
          start: {
            line: 183,
            column: 6
          },
          end: {
            line: 183,
            column: 49
          }
        },
        "57": {
          start: {
            line: 186,
            column: 4
          },
          end: {
            line: 186,
            column: 24
          }
        },
        "58": {
          start: {
            line: 188,
            column: 4
          },
          end: {
            line: 190,
            column: 5
          }
        },
        "59": {
          start: {
            line: 189,
            column: 6
          },
          end: {
            line: 189,
            column: 43
          }
        },
        "60": {
          start: {
            line: 192,
            column: 4
          },
          end: {
            line: 201,
            column: 5
          }
        },
        "61": {
          start: {
            line: 193,
            column: 30
          },
          end: {
            line: 193,
            column: 80
          }
        },
        "62": {
          start: {
            line: 195,
            column: 6
          },
          end: {
            line: 198,
            column: 7
          }
        },
        "63": {
          start: {
            line: 196,
            column: 8
          },
          end: {
            line: 197,
            column: 74
          }
        },
        "64": {
          start: {
            line: 197,
            column: 33
          },
          end: {
            line: 197,
            column: 73
          }
        },
        "65": {
          start: {
            line: 200,
            column: 6
          },
          end: {
            line: 200,
            column: 49
          }
        },
        "66": {
          start: {
            line: 203,
            column: 4
          },
          end: {
            line: 205,
            column: 5
          }
        },
        "67": {
          start: {
            line: 204,
            column: 6
          },
          end: {
            line: 204,
            column: 16
          }
        },
        "68": {
          start: {
            line: 211,
            column: 4
          },
          end: {
            line: 220,
            column: 6
          }
        },
        "69": {
          start: {
            line: 212,
            column: 19
          },
          end: {
            line: 212,
            column: 64
          }
        },
        "70": {
          start: {
            line: 214,
            column: 6
          },
          end: {
            line: 219,
            column: 7
          }
        },
        "71": {
          start: {
            line: 215,
            column: 8
          },
          end: {
            line: 217,
            column: 9
          }
        },
        "72": {
          start: {
            line: 216,
            column: 10
          },
          end: {
            line: 216,
            column: 60
          }
        },
        "73": {
          start: {
            line: 218,
            column: 8
          },
          end: {
            line: 218,
            column: 22
          }
        },
        "74": {
          start: {
            line: 224,
            column: 4
          },
          end: {
            line: 224,
            column: 42
          }
        },
        "75": {
          start: {
            line: 234,
            column: 0
          },
          end: {
            line: 239,
            column: 2
          }
        },
        "76": {
          start: {
            line: 235,
            column: 2
          },
          end: {
            line: 235,
            column: 24
          }
        },
        "77": {
          start: {
            line: 237,
            column: 15
          },
          end: {
            line: 237,
            column: 60
          }
        },
        "78": {
          start: {
            line: 238,
            column: 2
          },
          end: {
            line: 238,
            column: 13
          }
        },
        "79": {
          start: {
            line: 247,
            column: 10
          },
          end: {
            line: 247,
            column: 21
          }
        },
        "80": {
          start: {
            line: 248,
            column: 0
          },
          end: {
            line: 256,
            column: 1
          }
        },
        "81": {
          start: {
            line: 249,
            column: 29
          },
          end: {
            line: 249,
            column: 39
          }
        },
        "82": {
          start: {
            line: 250,
            column: 2
          },
          end: {
            line: 250,
            column: 49
          }
        },
        "83": {
          start: {
            line: 251,
            column: 2
          },
          end: {
            line: 251,
            column: 32
          }
        },
        "84": {
          start: {
            line: 252,
            column: 2
          },
          end: {
            line: 255,
            column: 3
          }
        },
        "85": {
          start: {
            line: 253,
            column: 4
          },
          end: {
            line: 253,
            column: 35
          }
        },
        "86": {
          start: {
            line: 254,
            column: 4
          },
          end: {
            line: 254,
            column: 31
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
              column: 23
            },
            end: {
              line: 62,
              column: 3
            }
          },
          line: 58
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 66,
              column: 2
            },
            end: {
              line: 66,
              column: 3
            }
          },
          loc: {
            start: {
              line: 66,
              column: 23
            },
            end: {
              line: 68,
              column: 3
            }
          },
          line: 66
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
              column: 9
            },
            end: {
              line: 131,
              column: 3
            }
          },
          line: 72
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 117,
              column: 21
            },
            end: {
              line: 117,
              column: 22
            }
          },
          loc: {
            start: {
              line: 117,
              column: 27
            },
            end: {
              line: 124,
              column: 5
            }
          },
          line: 117
        },
        "4": {
          name: "(anonymous_4)",
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
              line: 136,
              column: 3
            }
          },
          line: 133
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 140,
              column: 2
            },
            end: {
              line: 140,
              column: 3
            }
          },
          loc: {
            start: {
              line: 140,
              column: 42
            },
            end: {
              line: 164,
              column: 3
            }
          },
          line: 140
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 149,
              column: 21
            },
            end: {
              line: 149,
              column: 22
            }
          },
          loc: {
            start: {
              line: 149,
              column: 27
            },
            end: {
              line: 153,
              column: 5
            }
          },
          line: 149
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 166,
              column: 2
            },
            end: {
              line: 166,
              column: 3
            }
          },
          loc: {
            start: {
              line: 166,
              column: 49
            },
            end: {
              line: 206,
              column: 3
            }
          },
          line: 166
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 197,
              column: 19
            },
            end: {
              line: 197,
              column: 20
            }
          },
          loc: {
            start: {
              line: 197,
              column: 33
            },
            end: {
              line: 197,
              column: 73
            }
          },
          line: 197
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 210,
              column: 2
            },
            end: {
              line: 210,
              column: 3
            }
          },
          loc: {
            start: {
              line: 210,
              column: 34
            },
            end: {
              line: 221,
              column: 3
            }
          },
          line: 210
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 211,
              column: 21
            },
            end: {
              line: 211,
              column: 22
            }
          },
          loc: {
            start: {
              line: 211,
              column: 33
            },
            end: {
              line: 220,
              column: 5
            }
          },
          line: 211
        },
        "11": {
          name: "(anonymous_11)",
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
              column: 31
            },
            end: {
              line: 225,
              column: 3
            }
          },
          line: 223
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 234,
              column: 70
            },
            end: {
              line: 234,
              column: 71
            }
          },
          loc: {
            start: {
              line: 234,
              column: 87
            },
            end: {
              line: 239,
              column: 1
            }
          },
          line: 234
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 252,
              column: 29
            },
            end: {
              line: 252,
              column: 30
            }
          },
          loc: {
            start: {
              line: 252,
              column: 35
            },
            end: {
              line: 255,
              column: 3
            }
          },
          line: 252
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 73,
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
              line: 73,
              column: 4
            },
            end: {
              line: 78,
              column: 5
            }
          }, {
            start: {
              line: 73,
              column: 4
            },
            end: {
              line: 78,
              column: 5
            }
          }],
          line: 73
        },
        "1": {
          loc: {
            start: {
              line: 73,
              column: 8
            },
            end: {
              line: 76,
              column: 58
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 73,
              column: 8
            },
            end: {
              line: 73,
              column: 32
            }
          }, {
            start: {
              line: 74,
              column: 6
            },
            end: {
              line: 74,
              column: 61
            }
          }, {
            start: {
              line: 75,
              column: 6
            },
            end: {
              line: 75,
              column: 56
            }
          }, {
            start: {
              line: 76,
              column: 6
            },
            end: {
              line: 76,
              column: 58
            }
          }],
          line: 73
        },
        "2": {
          loc: {
            start: {
              line: 85,
              column: 4
            },
            end: {
              line: 89,
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
              line: 89,
              column: 5
            }
          }, {
            start: {
              line: 85,
              column: 4
            },
            end: {
              line: 89,
              column: 5
            }
          }],
          line: 85
        },
        "3": {
          loc: {
            start: {
              line: 86,
              column: 27
            },
            end: {
              line: 86,
              column: 128
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 86,
              column: 92
            },
            end: {
              line: 86,
              column: 110
            }
          }, {
            start: {
              line: 86,
              column: 113
            },
            end: {
              line: 86,
              column: 128
            }
          }],
          line: 86
        },
        "4": {
          loc: {
            start: {
              line: 86,
              column: 27
            },
            end: {
              line: 86,
              column: 89
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 86,
              column: 27
            },
            end: {
              line: 86,
              column: 56
            }
          }, {
            start: {
              line: 86,
              column: 60
            },
            end: {
              line: 86,
              column: 89
            }
          }],
          line: 86
        },
        "5": {
          loc: {
            start: {
              line: 93,
              column: 4
            },
            end: {
              line: 97,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 93,
              column: 4
            },
            end: {
              line: 97,
              column: 5
            }
          }, {
            start: {
              line: 93,
              column: 4
            },
            end: {
              line: 97,
              column: 5
            }
          }],
          line: 93
        },
        "6": {
          loc: {
            start: {
              line: 103,
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
              line: 103,
              column: 4
            },
            end: {
              line: 106,
              column: 5
            }
          }, {
            start: {
              line: 103,
              column: 4
            },
            end: {
              line: 106,
              column: 5
            }
          }],
          line: 103
        },
        "7": {
          loc: {
            start: {
              line: 103,
              column: 8
            },
            end: {
              line: 104,
              column: 54
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 103,
              column: 8
            },
            end: {
              line: 103,
              column: 34
            }
          }, {
            start: {
              line: 104,
              column: 6
            },
            end: {
              line: 104,
              column: 24
            }
          }, {
            start: {
              line: 104,
              column: 28
            },
            end: {
              line: 104,
              column: 54
            }
          }],
          line: 103
        },
        "8": {
          loc: {
            start: {
              line: 108,
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
              line: 108,
              column: 4
            },
            end: {
              line: 110,
              column: 5
            }
          }, {
            start: {
              line: 108,
              column: 4
            },
            end: {
              line: 110,
              column: 5
            }
          }],
          line: 108
        },
        "9": {
          loc: {
            start: {
              line: 126,
              column: 4
            },
            end: {
              line: 130,
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
              line: 130,
              column: 5
            }
          }, {
            start: {
              line: 126,
              column: 4
            },
            end: {
              line: 130,
              column: 5
            }
          }],
          line: 126
        },
        "10": {
          loc: {
            start: {
              line: 141,
              column: 27
            },
            end: {
              line: 143,
              column: 59
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 142,
              column: 8
            },
            end: {
              line: 142,
              column: 58
            }
          }, {
            start: {
              line: 143,
              column: 8
            },
            end: {
              line: 143,
              column: 59
            }
          }],
          line: 141
        },
        "11": {
          loc: {
            start: {
              line: 141,
              column: 27
            },
            end: {
              line: 141,
              column: 100
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 141,
              column: 27
            },
            end: {
              line: 141,
              column: 36
            }
          }, {
            start: {
              line: 141,
              column: 41
            },
            end: {
              line: 141,
              column: 68
            }
          }, {
            start: {
              line: 141,
              column: 72
            },
            end: {
              line: 141,
              column: 99
            }
          }],
          line: 141
        },
        "12": {
          loc: {
            start: {
              line: 146,
              column: 28
            },
            end: {
              line: 147,
              column: 59
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 146,
              column: 28
            },
            end: {
              line: 146,
              column: 36
            }
          }, {
            start: {
              line: 147,
              column: 7
            },
            end: {
              line: 147,
              column: 13
            }
          }, {
            start: {
              line: 147,
              column: 17
            },
            end: {
              line: 147,
              column: 58
            }
          }],
          line: 146
        },
        "13": {
          loc: {
            start: {
              line: 155,
              column: 4
            },
            end: {
              line: 163,
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
              line: 163,
              column: 5
            }
          }, {
            start: {
              line: 155,
              column: 4
            },
            end: {
              line: 163,
              column: 5
            }
          }],
          line: 155
        },
        "14": {
          loc: {
            start: {
              line: 155,
              column: 8
            },
            end: {
              line: 155,
              column: 33
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
              column: 14
            }
          }, {
            start: {
              line: 155,
              column: 18
            },
            end: {
              line: 155,
              column: 33
            }
          }],
          line: 155
        },
        "15": {
          loc: {
            start: {
              line: 167,
              column: 4
            },
            end: {
              line: 179,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 167,
              column: 4
            },
            end: {
              line: 179,
              column: 5
            }
          }, {
            start: {
              line: 167,
              column: 4
            },
            end: {
              line: 179,
              column: 5
            }
          }],
          line: 167
        },
        "16": {
          loc: {
            start: {
              line: 172,
              column: 6
            },
            end: {
              line: 174,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 172,
              column: 6
            },
            end: {
              line: 174,
              column: 7
            }
          }, {
            start: {
              line: 172,
              column: 6
            },
            end: {
              line: 174,
              column: 7
            }
          }],
          line: 172
        },
        "17": {
          loc: {
            start: {
              line: 176,
              column: 6
            },
            end: {
              line: 178,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 176,
              column: 6
            },
            end: {
              line: 178,
              column: 7
            }
          }, {
            start: {
              line: 176,
              column: 6
            },
            end: {
              line: 178,
              column: 7
            }
          }],
          line: 176
        },
        "18": {
          loc: {
            start: {
              line: 182,
              column: 4
            },
            end: {
              line: 184,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 182,
              column: 4
            },
            end: {
              line: 184,
              column: 5
            }
          }, {
            start: {
              line: 182,
              column: 4
            },
            end: {
              line: 184,
              column: 5
            }
          }],
          line: 182
        },
        "19": {
          loc: {
            start: {
              line: 188,
              column: 4
            },
            end: {
              line: 190,
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
              line: 190,
              column: 5
            }
          }, {
            start: {
              line: 188,
              column: 4
            },
            end: {
              line: 190,
              column: 5
            }
          }],
          line: 188
        },
        "20": {
          loc: {
            start: {
              line: 192,
              column: 4
            },
            end: {
              line: 201,
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
              line: 201,
              column: 5
            }
          }, {
            start: {
              line: 192,
              column: 4
            },
            end: {
              line: 201,
              column: 5
            }
          }],
          line: 192
        },
        "21": {
          loc: {
            start: {
              line: 192,
              column: 8
            },
            end: {
              line: 192,
              column: 92
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 192,
              column: 8
            },
            end: {
              line: 192,
              column: 26
            }
          }, {
            start: {
              line: 192,
              column: 30
            },
            end: {
              line: 192,
              column: 92
            }
          }],
          line: 192
        },
        "22": {
          loc: {
            start: {
              line: 195,
              column: 6
            },
            end: {
              line: 198,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 195,
              column: 6
            },
            end: {
              line: 198,
              column: 7
            }
          }, {
            start: {
              line: 195,
              column: 6
            },
            end: {
              line: 198,
              column: 7
            }
          }],
          line: 195
        },
        "23": {
          loc: {
            start: {
              line: 203,
              column: 4
            },
            end: {
              line: 205,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 203,
              column: 4
            },
            end: {
              line: 205,
              column: 5
            }
          }, {
            start: {
              line: 203,
              column: 4
            },
            end: {
              line: 205,
              column: 5
            }
          }],
          line: 203
        },
        "24": {
          loc: {
            start: {
              line: 212,
              column: 19
            },
            end: {
              line: 212,
              column: 64
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 212,
              column: 19
            },
            end: {
              line: 212,
              column: 47
            }
          }, {
            start: {
              line: 212,
              column: 51
            },
            end: {
              line: 212,
              column: 64
            }
          }],
          line: 212
        },
        "25": {
          loc: {
            start: {
              line: 214,
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
              line: 214,
              column: 6
            },
            end: {
              line: 219,
              column: 7
            }
          }, {
            start: {
              line: 214,
              column: 6
            },
            end: {
              line: 219,
              column: 7
            }
          }],
          line: 214
        },
        "26": {
          loc: {
            start: {
              line: 215,
              column: 8
            },
            end: {
              line: 217,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 215,
              column: 8
            },
            end: {
              line: 217,
              column: 9
            }
          }, {
            start: {
              line: 215,
              column: 8
            },
            end: {
              line: 217,
              column: 9
            }
          }],
          line: 215
        },
        "27": {
          loc: {
            start: {
              line: 237,
              column: 15
            },
            end: {
              line: 237,
              column: 60
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 237,
              column: 15
            },
            end: {
              line: 237,
              column: 43
            }
          }, {
            start: {
              line: 237,
              column: 47
            },
            end: {
              line: 237,
              column: 60
            }
          }],
          line: 237
        },
        "28": {
          loc: {
            start: {
              line: 248,
              column: 0
            },
            end: {
              line: 256,
              column: 1
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 248,
              column: 0
            },
            end: {
              line: 256,
              column: 1
            }
          }, {
            start: {
              line: 248,
              column: 0
            },
            end: {
              line: 256,
              column: 1
            }
          }],
          line: 248
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
        "86": 0
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
        "13": 0
      },
      b: {
        "0": [0, 0],
        "1": [0, 0, 0, 0],
        "2": [0, 0],
        "3": [0, 0],
        "4": [0, 0],
        "5": [0, 0],
        "6": [0, 0],
        "7": [0, 0, 0],
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

  var NAME = (cov_heer65qvl.s[0]++, 'tab');
  var VERSION = (cov_heer65qvl.s[1]++, '4.3.1');
  var DATA_KEY = (cov_heer65qvl.s[2]++, 'bs.tab');
  var EVENT_KEY = (cov_heer65qvl.s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_heer65qvl.s[4]++, '.data-api');
  var Event = (cov_heer65qvl.s[5]++, {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  });
  var ClassName = (cov_heer65qvl.s[6]++, {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  });
  var Selector = (cov_heer65qvl.s[7]++, {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVE_UL: ':scope > li > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: ':scope > .dropdown-menu .active'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  });

  var Tab =
  /*#__PURE__*/
  function () {
    function Tab(element) {
      cov_heer65qvl.f[0]++;
      cov_heer65qvl.s[8]++;
      this._element = element;
      cov_heer65qvl.s[9]++;
      Data.setData(this._element, DATA_KEY, this);
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      cov_heer65qvl.f[2]++;
      cov_heer65qvl.s[11]++;

      if ((cov_heer65qvl.b[1][0]++, this._element.parentNode) && (cov_heer65qvl.b[1][1]++, this._element.parentNode.nodeType === Node.ELEMENT_NODE) && (cov_heer65qvl.b[1][2]++, this._element.classList.contains(ClassName.ACTIVE)) || (cov_heer65qvl.b[1][3]++, this._element.classList.contains(ClassName.DISABLED))) {
        cov_heer65qvl.b[0][0]++;
        cov_heer65qvl.s[12]++;
        return;
      } else {
        cov_heer65qvl.b[0][1]++;
      }

      var target;
      var previous;
      var listElement = (cov_heer65qvl.s[13]++, SelectorEngine.closest(this._element, Selector.NAV_LIST_GROUP));
      var selector = (cov_heer65qvl.s[14]++, Util.getSelectorFromElement(this._element));
      cov_heer65qvl.s[15]++;

      if (listElement) {
        cov_heer65qvl.b[2][0]++;
        var itemSelector = (cov_heer65qvl.s[16]++, (cov_heer65qvl.b[4][0]++, listElement.nodeName === 'UL') || (cov_heer65qvl.b[4][1]++, listElement.nodeName === 'OL') ? (cov_heer65qvl.b[3][0]++, Selector.ACTIVE_UL) : (cov_heer65qvl.b[3][1]++, Selector.ACTIVE));
        cov_heer65qvl.s[17]++;
        previous = Util.makeArray(SelectorEngine.find(itemSelector, listElement));
        cov_heer65qvl.s[18]++;
        previous = previous[previous.length - 1];
      } else {
        cov_heer65qvl.b[2][1]++;
      }

      var hideEvent = (cov_heer65qvl.s[19]++, null);
      cov_heer65qvl.s[20]++;

      if (previous) {
        cov_heer65qvl.b[5][0]++;
        cov_heer65qvl.s[21]++;
        hideEvent = EventHandler.trigger(previous, Event.HIDE, {
          relatedTarget: this._element
        });
      } else {
        cov_heer65qvl.b[5][1]++;
      }

      var showEvent = (cov_heer65qvl.s[22]++, EventHandler.trigger(this._element, Event.SHOW, {
        relatedTarget: previous
      }));
      cov_heer65qvl.s[23]++;

      if ((cov_heer65qvl.b[7][0]++, showEvent.defaultPrevented) || (cov_heer65qvl.b[7][1]++, hideEvent !== null) && (cov_heer65qvl.b[7][2]++, hideEvent.defaultPrevented)) {
        cov_heer65qvl.b[6][0]++;
        cov_heer65qvl.s[24]++;
        return;
      } else {
        cov_heer65qvl.b[6][1]++;
      }

      cov_heer65qvl.s[25]++;

      if (selector) {
        cov_heer65qvl.b[8][0]++;
        cov_heer65qvl.s[26]++;
        target = SelectorEngine.findOne(selector);
      } else {
        cov_heer65qvl.b[8][1]++;
      }

      cov_heer65qvl.s[27]++;

      this._activate(this._element, listElement);

      cov_heer65qvl.s[28]++;

      var complete = function complete() {
        cov_heer65qvl.f[3]++;
        cov_heer65qvl.s[29]++;
        EventHandler.trigger(previous, Event.HIDDEN, {
          relatedTarget: _this._element
        });
        cov_heer65qvl.s[30]++;
        EventHandler.trigger(_this._element, Event.SHOWN, {
          relatedTarget: previous
        });
      };

      cov_heer65qvl.s[31]++;

      if (target) {
        cov_heer65qvl.b[9][0]++;
        cov_heer65qvl.s[32]++;

        this._activate(target, target.parentNode, complete);
      } else {
        cov_heer65qvl.b[9][1]++;
        cov_heer65qvl.s[33]++;
        complete();
      }
    };

    _proto.dispose = function dispose() {
      cov_heer65qvl.f[4]++;
      cov_heer65qvl.s[34]++;
      Data.removeData(this._element, DATA_KEY);
      cov_heer65qvl.s[35]++;
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      cov_heer65qvl.f[5]++;
      var activeElements = (cov_heer65qvl.s[36]++, (cov_heer65qvl.b[11][0]++, container) && ((cov_heer65qvl.b[11][1]++, container.nodeName === 'UL') || (cov_heer65qvl.b[11][2]++, container.nodeName === 'OL')) ? (cov_heer65qvl.b[10][0]++, SelectorEngine.find(Selector.ACTIVE_UL, container)) : (cov_heer65qvl.b[10][1]++, SelectorEngine.children(container, Selector.ACTIVE)));
      var active = (cov_heer65qvl.s[37]++, activeElements[0]);
      var isTransitioning = (cov_heer65qvl.s[38]++, (cov_heer65qvl.b[12][0]++, callback) && (cov_heer65qvl.b[12][1]++, active) && (cov_heer65qvl.b[12][2]++, active.classList.contains(ClassName.FADE)));
      cov_heer65qvl.s[39]++;

      var complete = function complete() {
        cov_heer65qvl.f[6]++;
        cov_heer65qvl.s[40]++;
        return _this2._transitionComplete(element, active, callback);
      };

      cov_heer65qvl.s[41]++;

      if ((cov_heer65qvl.b[14][0]++, active) && (cov_heer65qvl.b[14][1]++, isTransitioning)) {
        cov_heer65qvl.b[13][0]++;
        var transitionDuration = (cov_heer65qvl.s[42]++, Util.getTransitionDurationFromElement(active));
        cov_heer65qvl.s[43]++;
        active.classList.remove(ClassName.SHOW);
        cov_heer65qvl.s[44]++;
        EventHandler.one(active, Util.TRANSITION_END, complete);
        cov_heer65qvl.s[45]++;
        Util.emulateTransitionEnd(active, transitionDuration);
      } else {
        cov_heer65qvl.b[13][1]++;
        cov_heer65qvl.s[46]++;
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      cov_heer65qvl.f[7]++;
      cov_heer65qvl.s[47]++;

      if (active) {
        cov_heer65qvl.b[15][0]++;
        cov_heer65qvl.s[48]++;
        active.classList.remove(ClassName.ACTIVE);
        var dropdownChild = (cov_heer65qvl.s[49]++, SelectorEngine.findOne(Selector.DROPDOWN_ACTIVE_CHILD, active.parentNode));
        cov_heer65qvl.s[50]++;

        if (dropdownChild) {
          cov_heer65qvl.b[16][0]++;
          cov_heer65qvl.s[51]++;
          dropdownChild.classList.remove(ClassName.ACTIVE);
        } else {
          cov_heer65qvl.b[16][1]++;
        }

        cov_heer65qvl.s[52]++;

        if (active.getAttribute('role') === 'tab') {
          cov_heer65qvl.b[17][0]++;
          cov_heer65qvl.s[53]++;
          active.setAttribute('aria-selected', false);
        } else {
          cov_heer65qvl.b[17][1]++;
        }
      } else {
        cov_heer65qvl.b[15][1]++;
      }

      cov_heer65qvl.s[54]++;
      element.classList.add(ClassName.ACTIVE);
      cov_heer65qvl.s[55]++;

      if (element.getAttribute('role') === 'tab') {
        cov_heer65qvl.b[18][0]++;
        cov_heer65qvl.s[56]++;
        element.setAttribute('aria-selected', true);
      } else {
        cov_heer65qvl.b[18][1]++;
      }

      cov_heer65qvl.s[57]++;
      Util.reflow(element);
      cov_heer65qvl.s[58]++;

      if (element.classList.contains(ClassName.FADE)) {
        cov_heer65qvl.b[19][0]++;
        cov_heer65qvl.s[59]++;
        element.classList.add(ClassName.SHOW);
      } else {
        cov_heer65qvl.b[19][1]++;
      }

      cov_heer65qvl.s[60]++;

      if ((cov_heer65qvl.b[21][0]++, element.parentNode) && (cov_heer65qvl.b[21][1]++, element.parentNode.classList.contains(ClassName.DROPDOWN_MENU))) {
        cov_heer65qvl.b[20][0]++;
        var dropdownElement = (cov_heer65qvl.s[61]++, SelectorEngine.closest(element, Selector.DROPDOWN));
        cov_heer65qvl.s[62]++;

        if (dropdownElement) {
          cov_heer65qvl.b[22][0]++;
          cov_heer65qvl.s[63]++;
          Util.makeArray(SelectorEngine.find(Selector.DROPDOWN_TOGGLE)).forEach(function (dropdown) {
            cov_heer65qvl.f[8]++;
            cov_heer65qvl.s[64]++;
            return dropdown.classList.add(ClassName.ACTIVE);
          });
        } else {
          cov_heer65qvl.b[22][1]++;
        }

        cov_heer65qvl.s[65]++;
        element.setAttribute('aria-expanded', true);
      } else {
        cov_heer65qvl.b[20][1]++;
      }

      cov_heer65qvl.s[66]++;

      if (callback) {
        cov_heer65qvl.b[23][0]++;
        cov_heer65qvl.s[67]++;
        callback();
      } else {
        cov_heer65qvl.b[23][1]++;
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      cov_heer65qvl.f[9]++;
      cov_heer65qvl.s[68]++;
      return this.each(function () {
        cov_heer65qvl.f[10]++;
        var data = (cov_heer65qvl.s[69]++, (cov_heer65qvl.b[24][0]++, Data.getData(this, DATA_KEY)) || (cov_heer65qvl.b[24][1]++, new Tab(this)));
        cov_heer65qvl.s[70]++;

        if (typeof config === 'string') {
          cov_heer65qvl.b[25][0]++;
          cov_heer65qvl.s[71]++;

          if (typeof data[config] === 'undefined') {
            cov_heer65qvl.b[26][0]++;
            cov_heer65qvl.s[72]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_heer65qvl.b[26][1]++;
          }

          cov_heer65qvl.s[73]++;
          data[config]();
        } else {
          cov_heer65qvl.b[25][1]++;
        }
      });
    };

    Tab._getInstance = function _getInstance(element) {
      cov_heer65qvl.f[11]++;
      cov_heer65qvl.s[74]++;
      return Data.getData(element, DATA_KEY);
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        cov_heer65qvl.f[1]++;
        cov_heer65qvl.s[10]++;
        return VERSION;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  cov_heer65qvl.s[75]++;
  EventHandler.on(document, Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    cov_heer65qvl.f[12]++;
    cov_heer65qvl.s[76]++;
    event.preventDefault();
    var data = (cov_heer65qvl.s[77]++, (cov_heer65qvl.b[27][0]++, Data.getData(this, DATA_KEY)) || (cov_heer65qvl.b[27][1]++, new Tab(this)));
    cov_heer65qvl.s[78]++;
    data.show();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  var $ = (cov_heer65qvl.s[79]++, Util.jQuery);
  cov_heer65qvl.s[80]++;

  if (typeof $ !== 'undefined') {
    cov_heer65qvl.b[28][0]++;
    var JQUERY_NO_CONFLICT = (cov_heer65qvl.s[81]++, $.fn[NAME]);
    cov_heer65qvl.s[82]++;
    $.fn[NAME] = Tab._jQueryInterface;
    cov_heer65qvl.s[83]++;
    $.fn[NAME].Constructor = Tab;
    cov_heer65qvl.s[84]++;

    $.fn[NAME].noConflict = function () {
      cov_heer65qvl.f[13]++;
      cov_heer65qvl.s[85]++;
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      cov_heer65qvl.s[86]++;
      return Tab._jQueryInterface;
    };
  } else {
    cov_heer65qvl.b[28][1]++;
  }

  return Tab;

}));
//# sourceMappingURL=tab.js.map

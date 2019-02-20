/*!
  * Bootstrap alert.js v4.3.1-0 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2019 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/data.js'), require('./dom/eventHandler.js'), require('./dom/selectorEngine.js'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['./dom/data.js', './dom/eventHandler.js', './dom/selectorEngine.js', './util.js'], factory) :
  (global = global || self, global.Alert = factory(global.Data, global.EventHandler, global.SelectorEngine, global.Util));
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

  var cov_r5uu6l95z = function () {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/alert.js";
    var hash = "e096bd2c6b8a0acde6ef7c3ae63e40286bab2378";

    var Function = function () {}.constructor;

    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/alert.js",
      statementMap: {
        "0": {
          start: {
            line: 19,
            column: 28
          },
          end: {
            line: 19,
            column: 35
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
            column: 38
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
            column: 17
          },
          end: {
            line: 27,
            column: 1
          }
        },
        "6": {
          start: {
            line: 29,
            column: 14
          },
          end: {
            line: 33,
            column: 1
          }
        },
        "7": {
          start: {
            line: 35,
            column: 18
          },
          end: {
            line: 39,
            column: 1
          }
        },
        "8": {
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 49,
            column: 27
          }
        },
        "9": {
          start: {
            line: 50,
            column: 4
          },
          end: {
            line: 52,
            column: 5
          }
        },
        "10": {
          start: {
            line: 51,
            column: 6
          },
          end: {
            line: 51,
            column: 43
          }
        },
        "11": {
          start: {
            line: 58,
            column: 4
          },
          end: {
            line: 58,
            column: 18
          }
        },
        "12": {
          start: {
            line: 64,
            column: 22
          },
          end: {
            line: 64,
            column: 35
          }
        },
        "13": {
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 67,
            column: 5
          }
        },
        "14": {
          start: {
            line: 66,
            column: 6
          },
          end: {
            line: 66,
            column: 49
          }
        },
        "15": {
          start: {
            line: 69,
            column: 24
          },
          end: {
            line: 69,
            column: 60
          }
        },
        "16": {
          start: {
            line: 71,
            column: 4
          },
          end: {
            line: 73,
            column: 5
          }
        },
        "17": {
          start: {
            line: 72,
            column: 6
          },
          end: {
            line: 72,
            column: 12
          }
        },
        "18": {
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 75,
            column: 36
          }
        },
        "19": {
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 79,
            column: 44
          }
        },
        "20": {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 80,
            column: 24
          }
        },
        "21": {
          start: {
            line: 86,
            column: 21
          },
          end: {
            line: 86,
            column: 57
          }
        },
        "22": {
          start: {
            line: 87,
            column: 21
          },
          end: {
            line: 87,
            column: 26
          }
        },
        "23": {
          start: {
            line: 89,
            column: 4
          },
          end: {
            line: 91,
            column: 5
          }
        },
        "24": {
          start: {
            line: 90,
            column: 6
          },
          end: {
            line: 90,
            column: 47
          }
        },
        "25": {
          start: {
            line: 93,
            column: 4
          },
          end: {
            line: 95,
            column: 5
          }
        },
        "26": {
          start: {
            line: 94,
            column: 6
          },
          end: {
            line: 94,
            column: 69
          }
        },
        "27": {
          start: {
            line: 97,
            column: 4
          },
          end: {
            line: 97,
            column: 17
          }
        },
        "28": {
          start: {
            line: 101,
            column: 4
          },
          end: {
            line: 101,
            column: 53
          }
        },
        "29": {
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 105,
            column: 44
          }
        },
        "30": {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 110,
            column: 5
          }
        },
        "31": {
          start: {
            line: 108,
            column: 6
          },
          end: {
            line: 108,
            column: 35
          }
        },
        "32": {
          start: {
            line: 109,
            column: 6
          },
          end: {
            line: 109,
            column: 12
          }
        },
        "33": {
          start: {
            line: 112,
            column: 31
          },
          end: {
            line: 112,
            column: 77
          }
        },
        "34": {
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 115,
            column: 89
          }
        },
        "35": {
          start: {
            line: 115,
            column: 52
          },
          end: {
            line: 115,
            column: 88
          }
        },
        "36": {
          start: {
            line: 116,
            column: 4
          },
          end: {
            line: 116,
            column: 58
          }
        },
        "37": {
          start: {
            line: 120,
            column: 4
          },
          end: {
            line: 122,
            column: 5
          }
        },
        "38": {
          start: {
            line: 121,
            column: 6
          },
          end: {
            line: 121,
            column: 45
          }
        },
        "39": {
          start: {
            line: 124,
            column: 4
          },
          end: {
            line: 124,
            column: 47
          }
        },
        "40": {
          start: {
            line: 130,
            column: 4
          },
          end: {
            line: 140,
            column: 6
          }
        },
        "41": {
          start: {
            line: 131,
            column: 17
          },
          end: {
            line: 131,
            column: 45
          }
        },
        "42": {
          start: {
            line: 133,
            column: 6
          },
          end: {
            line: 135,
            column: 7
          }
        },
        "43": {
          start: {
            line: 134,
            column: 8
          },
          end: {
            line: 134,
            column: 30
          }
        },
        "44": {
          start: {
            line: 137,
            column: 6
          },
          end: {
            line: 139,
            column: 7
          }
        },
        "45": {
          start: {
            line: 138,
            column: 8
          },
          end: {
            line: 138,
            column: 26
          }
        },
        "46": {
          start: {
            line: 144,
            column: 4
          },
          end: {
            line: 150,
            column: 5
          }
        },
        "47": {
          start: {
            line: 145,
            column: 6
          },
          end: {
            line: 147,
            column: 7
          }
        },
        "48": {
          start: {
            line: 146,
            column: 8
          },
          end: {
            line: 146,
            column: 30
          }
        },
        "49": {
          start: {
            line: 149,
            column: 6
          },
          end: {
            line: 149,
            column: 31
          }
        },
        "50": {
          start: {
            line: 154,
            column: 4
          },
          end: {
            line: 154,
            column: 42
          }
        },
        "51": {
          start: {
            line: 163,
            column: 0
          },
          end: {
            line: 164,
            column: 90
          }
        },
        "52": {
          start: {
            line: 173,
            column: 10
          },
          end: {
            line: 173,
            column: 21
          }
        },
        "53": {
          start: {
            line: 174,
            column: 0
          },
          end: {
            line: 182,
            column: 1
          }
        },
        "54": {
          start: {
            line: 175,
            column: 29
          },
          end: {
            line: 175,
            column: 39
          }
        },
        "55": {
          start: {
            line: 176,
            column: 2
          },
          end: {
            line: 176,
            column: 51
          }
        },
        "56": {
          start: {
            line: 177,
            column: 2
          },
          end: {
            line: 177,
            column: 34
          }
        },
        "57": {
          start: {
            line: 178,
            column: 2
          },
          end: {
            line: 181,
            column: 3
          }
        },
        "58": {
          start: {
            line: 179,
            column: 4
          },
          end: {
            line: 179,
            column: 35
          }
        },
        "59": {
          start: {
            line: 180,
            column: 4
          },
          end: {
            line: 180,
            column: 33
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 48,
              column: 2
            },
            end: {
              line: 48,
              column: 3
            }
          },
          loc: {
            start: {
              line: 48,
              column: 23
            },
            end: {
              line: 53,
              column: 3
            }
          },
          line: 48
        },
        "1": {
          name: "(anonymous_1)",
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
              column: 23
            },
            end: {
              line: 59,
              column: 3
            }
          },
          line: 57
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
              column: 17
            },
            end: {
              line: 76,
              column: 3
            }
          },
          line: 63
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 78,
              column: 2
            },
            end: {
              line: 78,
              column: 3
            }
          },
          loc: {
            start: {
              line: 78,
              column: 12
            },
            end: {
              line: 81,
              column: 3
            }
          },
          line: 78
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 85,
              column: 2
            },
            end: {
              line: 85,
              column: 3
            }
          },
          loc: {
            start: {
              line: 85,
              column: 27
            },
            end: {
              line: 98,
              column: 3
            }
          },
          line: 85
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 100,
              column: 2
            },
            end: {
              line: 100,
              column: 3
            }
          },
          loc: {
            start: {
              line: 100,
              column: 30
            },
            end: {
              line: 102,
              column: 3
            }
          },
          line: 100
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 104,
              column: 2
            },
            end: {
              line: 104,
              column: 3
            }
          },
          loc: {
            start: {
              line: 104,
              column: 26
            },
            end: {
              line: 117,
              column: 3
            }
          },
          line: 104
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 115,
              column: 41
            },
            end: {
              line: 115,
              column: 42
            }
          },
          loc: {
            start: {
              line: 115,
              column: 52
            },
            end: {
              line: 115,
              column: 88
            }
          },
          line: 115
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 119,
              column: 2
            },
            end: {
              line: 119,
              column: 3
            }
          },
          loc: {
            start: {
              line: 119,
              column: 27
            },
            end: {
              line: 125,
              column: 3
            }
          },
          line: 119
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 129,
              column: 2
            },
            end: {
              line: 129,
              column: 3
            }
          },
          loc: {
            start: {
              line: 129,
              column: 34
            },
            end: {
              line: 141,
              column: 3
            }
          },
          line: 129
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 130,
              column: 21
            },
            end: {
              line: 130,
              column: 22
            }
          },
          loc: {
            start: {
              line: 130,
              column: 33
            },
            end: {
              line: 140,
              column: 5
            }
          },
          line: 130
        },
        "11": {
          name: "(anonymous_11)",
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
              column: 39
            },
            end: {
              line: 151,
              column: 3
            }
          },
          line: 143
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 144,
              column: 11
            },
            end: {
              line: 144,
              column: 12
            }
          },
          loc: {
            start: {
              line: 144,
              column: 28
            },
            end: {
              line: 150,
              column: 5
            }
          },
          line: 144
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 153,
              column: 2
            },
            end: {
              line: 153,
              column: 3
            }
          },
          loc: {
            start: {
              line: 153,
              column: 31
            },
            end: {
              line: 155,
              column: 3
            }
          },
          line: 153
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 178,
              column: 29
            },
            end: {
              line: 178,
              column: 30
            }
          },
          loc: {
            start: {
              line: 178,
              column: 35
            },
            end: {
              line: 181,
              column: 3
            }
          },
          line: 178
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 50,
              column: 4
            },
            end: {
              line: 52,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 50,
              column: 4
            },
            end: {
              line: 52,
              column: 5
            }
          }, {
            start: {
              line: 50,
              column: 4
            },
            end: {
              line: 52,
              column: 5
            }
          }],
          line: 50
        },
        "1": {
          loc: {
            start: {
              line: 65,
              column: 4
            },
            end: {
              line: 67,
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
              line: 67,
              column: 5
            }
          }, {
            start: {
              line: 65,
              column: 4
            },
            end: {
              line: 67,
              column: 5
            }
          }],
          line: 65
        },
        "2": {
          loc: {
            start: {
              line: 71,
              column: 4
            },
            end: {
              line: 73,
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
              line: 73,
              column: 5
            }
          }, {
            start: {
              line: 71,
              column: 4
            },
            end: {
              line: 73,
              column: 5
            }
          }],
          line: 71
        },
        "3": {
          loc: {
            start: {
              line: 71,
              column: 8
            },
            end: {
              line: 71,
              column: 60
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 71,
              column: 8
            },
            end: {
              line: 71,
              column: 28
            }
          }, {
            start: {
              line: 71,
              column: 32
            },
            end: {
              line: 71,
              column: 60
            }
          }],
          line: 71
        },
        "4": {
          loc: {
            start: {
              line: 89,
              column: 4
            },
            end: {
              line: 91,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 89,
              column: 4
            },
            end: {
              line: 91,
              column: 5
            }
          }, {
            start: {
              line: 89,
              column: 4
            },
            end: {
              line: 91,
              column: 5
            }
          }],
          line: 89
        },
        "5": {
          loc: {
            start: {
              line: 93,
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
              line: 93,
              column: 4
            },
            end: {
              line: 95,
              column: 5
            }
          }, {
            start: {
              line: 93,
              column: 4
            },
            end: {
              line: 95,
              column: 5
            }
          }],
          line: 93
        },
        "6": {
          loc: {
            start: {
              line: 107,
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
              line: 107,
              column: 4
            },
            end: {
              line: 110,
              column: 5
            }
          }, {
            start: {
              line: 107,
              column: 4
            },
            end: {
              line: 110,
              column: 5
            }
          }],
          line: 107
        },
        "7": {
          loc: {
            start: {
              line: 120,
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
              line: 120,
              column: 4
            },
            end: {
              line: 122,
              column: 5
            }
          }, {
            start: {
              line: 120,
              column: 4
            },
            end: {
              line: 122,
              column: 5
            }
          }],
          line: 120
        },
        "8": {
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
        "9": {
          loc: {
            start: {
              line: 137,
              column: 6
            },
            end: {
              line: 139,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 137,
              column: 6
            },
            end: {
              line: 139,
              column: 7
            }
          }, {
            start: {
              line: 137,
              column: 6
            },
            end: {
              line: 139,
              column: 7
            }
          }],
          line: 137
        },
        "10": {
          loc: {
            start: {
              line: 145,
              column: 6
            },
            end: {
              line: 147,
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
              line: 147,
              column: 7
            }
          }, {
            start: {
              line: 145,
              column: 6
            },
            end: {
              line: 147,
              column: 7
            }
          }],
          line: 145
        },
        "11": {
          loc: {
            start: {
              line: 174,
              column: 0
            },
            end: {
              line: 182,
              column: 1
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 174,
              column: 0
            },
            end: {
              line: 182,
              column: 1
            }
          }, {
            start: {
              line: 174,
              column: 0
            },
            end: {
              line: 182,
              column: 1
            }
          }],
          line: 174
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
        "59": 0
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
        "14": 0
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

  var NAME = (cov_r5uu6l95z.s[0]++, 'alert');
  var VERSION = (cov_r5uu6l95z.s[1]++, '4.3.1');
  var DATA_KEY = (cov_r5uu6l95z.s[2]++, 'bs.alert');
  var EVENT_KEY = (cov_r5uu6l95z.s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_r5uu6l95z.s[4]++, '.data-api');
  var Selector = (cov_r5uu6l95z.s[5]++, {
    DISMISS: '[data-dismiss="alert"]'
  });
  var Event = (cov_r5uu6l95z.s[6]++, {
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  });
  var ClassName = (cov_r5uu6l95z.s[7]++, {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  });

  var Alert =
  /*#__PURE__*/
  function () {
    function Alert(element) {
      cov_r5uu6l95z.f[0]++;
      cov_r5uu6l95z.s[8]++;
      this._element = element;
      cov_r5uu6l95z.s[9]++;

      if (this._element) {
        cov_r5uu6l95z.b[0][0]++;
        cov_r5uu6l95z.s[10]++;
        Data.setData(element, DATA_KEY, this);
      } else {
        cov_r5uu6l95z.b[0][1]++;
      }
    } // Getters


    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      cov_r5uu6l95z.f[2]++;
      var rootElement = (cov_r5uu6l95z.s[12]++, this._element);
      cov_r5uu6l95z.s[13]++;

      if (element) {
        cov_r5uu6l95z.b[1][0]++;
        cov_r5uu6l95z.s[14]++;
        rootElement = this._getRootElement(element);
      } else {
        cov_r5uu6l95z.b[1][1]++;
      }

      var customEvent = (cov_r5uu6l95z.s[15]++, this._triggerCloseEvent(rootElement));
      cov_r5uu6l95z.s[16]++;

      if ((cov_r5uu6l95z.b[3][0]++, customEvent === null) || (cov_r5uu6l95z.b[3][1]++, customEvent.defaultPrevented)) {
        cov_r5uu6l95z.b[2][0]++;
        cov_r5uu6l95z.s[17]++;
        return;
      } else {
        cov_r5uu6l95z.b[2][1]++;
      }

      cov_r5uu6l95z.s[18]++;

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      cov_r5uu6l95z.f[3]++;
      cov_r5uu6l95z.s[19]++;
      Data.removeData(this._element, DATA_KEY);
      cov_r5uu6l95z.s[20]++;
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      cov_r5uu6l95z.f[4]++;
      var selector = (cov_r5uu6l95z.s[21]++, Util.getSelectorFromElement(element));
      var parent = (cov_r5uu6l95z.s[22]++, false);
      cov_r5uu6l95z.s[23]++;

      if (selector) {
        cov_r5uu6l95z.b[4][0]++;
        cov_r5uu6l95z.s[24]++;
        parent = SelectorEngine.findOne(selector);
      } else {
        cov_r5uu6l95z.b[4][1]++;
      }

      cov_r5uu6l95z.s[25]++;

      if (!parent) {
        cov_r5uu6l95z.b[5][0]++;
        cov_r5uu6l95z.s[26]++;
        parent = SelectorEngine.closest(element, "." + ClassName.ALERT);
      } else {
        cov_r5uu6l95z.b[5][1]++;
      }

      cov_r5uu6l95z.s[27]++;
      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      cov_r5uu6l95z.f[5]++;
      cov_r5uu6l95z.s[28]++;
      return EventHandler.trigger(element, Event.CLOSE);
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      cov_r5uu6l95z.f[6]++;
      cov_r5uu6l95z.s[29]++;
      element.classList.remove(ClassName.SHOW);
      cov_r5uu6l95z.s[30]++;

      if (!element.classList.contains(ClassName.FADE)) {
        cov_r5uu6l95z.b[6][0]++;
        cov_r5uu6l95z.s[31]++;

        this._destroyElement(element);

        cov_r5uu6l95z.s[32]++;
        return;
      } else {
        cov_r5uu6l95z.b[6][1]++;
      }

      var transitionDuration = (cov_r5uu6l95z.s[33]++, Util.getTransitionDurationFromElement(element));
      cov_r5uu6l95z.s[34]++;
      EventHandler.one(element, Util.TRANSITION_END, function (event) {
        cov_r5uu6l95z.f[7]++;
        cov_r5uu6l95z.s[35]++;
        return _this._destroyElement(element, event);
      });
      cov_r5uu6l95z.s[36]++;
      Util.emulateTransitionEnd(element, transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      cov_r5uu6l95z.f[8]++;
      cov_r5uu6l95z.s[37]++;

      if (element.parentNode) {
        cov_r5uu6l95z.b[7][0]++;
        cov_r5uu6l95z.s[38]++;
        element.parentNode.removeChild(element);
      } else {
        cov_r5uu6l95z.b[7][1]++;
      }

      cov_r5uu6l95z.s[39]++;
      EventHandler.trigger(element, Event.CLOSED);
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      cov_r5uu6l95z.f[9]++;
      cov_r5uu6l95z.s[40]++;
      return this.each(function () {
        cov_r5uu6l95z.f[10]++;
        var data = (cov_r5uu6l95z.s[41]++, Data.getData(this, DATA_KEY));
        cov_r5uu6l95z.s[42]++;

        if (!data) {
          cov_r5uu6l95z.b[8][0]++;
          cov_r5uu6l95z.s[43]++;
          data = new Alert(this);
        } else {
          cov_r5uu6l95z.b[8][1]++;
        }

        cov_r5uu6l95z.s[44]++;

        if (config === 'close') {
          cov_r5uu6l95z.b[9][0]++;
          cov_r5uu6l95z.s[45]++;
          data[config](this);
        } else {
          cov_r5uu6l95z.b[9][1]++;
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      cov_r5uu6l95z.f[11]++;
      cov_r5uu6l95z.s[46]++;
      return function (event) {
        cov_r5uu6l95z.f[12]++;
        cov_r5uu6l95z.s[47]++;

        if (event) {
          cov_r5uu6l95z.b[10][0]++;
          cov_r5uu6l95z.s[48]++;
          event.preventDefault();
        } else {
          cov_r5uu6l95z.b[10][1]++;
        }

        cov_r5uu6l95z.s[49]++;
        alertInstance.close(this);
      };
    };

    Alert._getInstance = function _getInstance(element) {
      cov_r5uu6l95z.f[13]++;
      cov_r5uu6l95z.s[50]++;
      return Data.getData(element, DATA_KEY);
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        cov_r5uu6l95z.f[1]++;
        cov_r5uu6l95z.s[11]++;
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  cov_r5uu6l95z.s[51]++;
  EventHandler.on(document, Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .alert to jQuery only if jQuery is present
   */

  var $ = (cov_r5uu6l95z.s[52]++, Util.jQuery);
  cov_r5uu6l95z.s[53]++;

  if (typeof $ !== 'undefined') {
    cov_r5uu6l95z.b[11][0]++;
    var JQUERY_NO_CONFLICT = (cov_r5uu6l95z.s[54]++, $.fn[NAME]);
    cov_r5uu6l95z.s[55]++;
    $.fn[NAME] = Alert._jQueryInterface;
    cov_r5uu6l95z.s[56]++;
    $.fn[NAME].Constructor = Alert;
    cov_r5uu6l95z.s[57]++;

    $.fn[NAME].noConflict = function () {
      cov_r5uu6l95z.f[14]++;
      cov_r5uu6l95z.s[58]++;
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      cov_r5uu6l95z.s[59]++;
      return Alert._jQueryInterface;
    };
  } else {
    cov_r5uu6l95z.b[11][1]++;
  }

  return Alert;

}));
//# sourceMappingURL=alert.js.map

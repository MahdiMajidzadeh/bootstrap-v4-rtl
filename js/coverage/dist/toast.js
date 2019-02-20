/*!
  * Bootstrap toast.js v4.3.1-0 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2019 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/data.js'), require('./dom/eventHandler.js'), require('./dom/manipulator.js'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['./dom/data.js', './dom/eventHandler.js', './dom/manipulator.js', './util.js'], factory) :
  (global = global || self, global.Toast = factory(global.Data, global.EventHandler, global.Manipulator, global.Util));
}(this, function (Data, EventHandler, Manipulator, Util) { 'use strict';

  Data = Data && Data.hasOwnProperty('default') ? Data['default'] : Data;
  EventHandler = EventHandler && EventHandler.hasOwnProperty('default') ? EventHandler['default'] : EventHandler;
  Manipulator = Manipulator && Manipulator.hasOwnProperty('default') ? Manipulator['default'] : Manipulator;
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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  var cov_3w8nvp90g = function () {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/toast.js";
    var hash = "90b103184493eff5249d9582881a42fe8d38423a";

    var Function = function () {}.constructor;

    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/toast.js",
      statementMap: {
        "0": {
          start: {
            line: 19,
            column: 18
          },
          end: {
            line: 19,
            column: 25
          }
        },
        "1": {
          start: {
            line: 20,
            column: 18
          },
          end: {
            line: 20,
            column: 25
          }
        },
        "2": {
          start: {
            line: 21,
            column: 18
          },
          end: {
            line: 21,
            column: 28
          }
        },
        "3": {
          start: {
            line: 22,
            column: 18
          },
          end: {
            line: 22,
            column: 32
          }
        },
        "4": {
          start: {
            line: 24,
            column: 14
          },
          end: {
            line: 30,
            column: 1
          }
        },
        "5": {
          start: {
            line: 32,
            column: 18
          },
          end: {
            line: 37,
            column: 1
          }
        },
        "6": {
          start: {
            line: 39,
            column: 20
          },
          end: {
            line: 43,
            column: 1
          }
        },
        "7": {
          start: {
            line: 45,
            column: 16
          },
          end: {
            line: 49,
            column: 1
          }
        },
        "8": {
          start: {
            line: 51,
            column: 17
          },
          end: {
            line: 53,
            column: 1
          }
        },
        "9": {
          start: {
            line: 63,
            column: 4
          },
          end: {
            line: 63,
            column: 27
          }
        },
        "10": {
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 64,
            column: 43
          }
        },
        "11": {
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 65,
            column: 24
          }
        },
        "12": {
          start: {
            line: 66,
            column: 4
          },
          end: {
            line: 66,
            column: 24
          }
        },
        "13": {
          start: {
            line: 67,
            column: 4
          },
          end: {
            line: 67,
            column: 41
          }
        },
        "14": {
          start: {
            line: 73,
            column: 4
          },
          end: {
            line: 73,
            column: 18
          }
        },
        "15": {
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 77,
            column: 22
          }
        },
        "16": {
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 81,
            column: 18
          }
        },
        "17": {
          start: {
            line: 87,
            column: 4
          },
          end: {
            line: 87,
            column: 51
          }
        },
        "18": {
          start: {
            line: 89,
            column: 4
          },
          end: {
            line: 91,
            column: 5
          }
        },
        "19": {
          start: {
            line: 90,
            column: 6
          },
          end: {
            line: 90,
            column: 49
          }
        },
        "20": {
          start: {
            line: 93,
            column: 21
          },
          end: {
            line: 102,
            column: 5
          }
        },
        "21": {
          start: {
            line: 94,
            column: 6
          },
          end: {
            line: 94,
            column: 55
          }
        },
        "22": {
          start: {
            line: 95,
            column: 6
          },
          end: {
            line: 95,
            column: 49
          }
        },
        "23": {
          start: {
            line: 97,
            column: 6
          },
          end: {
            line: 97,
            column: 54
          }
        },
        "24": {
          start: {
            line: 99,
            column: 6
          },
          end: {
            line: 101,
            column: 7
          }
        },
        "25": {
          start: {
            line: 100,
            column: 8
          },
          end: {
            line: 100,
            column: 19
          }
        },
        "26": {
          start: {
            line: 104,
            column: 4
          },
          end: {
            line: 104,
            column: 50
          }
        },
        "27": {
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 105,
            column: 50
          }
        },
        "28": {
          start: {
            line: 106,
            column: 4
          },
          end: {
            line: 113,
            column: 5
          }
        },
        "29": {
          start: {
            line: 107,
            column: 33
          },
          end: {
            line: 107,
            column: 85
          }
        },
        "30": {
          start: {
            line: 109,
            column: 6
          },
          end: {
            line: 109,
            column: 68
          }
        },
        "31": {
          start: {
            line: 110,
            column: 6
          },
          end: {
            line: 110,
            column: 66
          }
        },
        "32": {
          start: {
            line: 112,
            column: 6
          },
          end: {
            line: 112,
            column: 16
          }
        },
        "33": {
          start: {
            line: 117,
            column: 4
          },
          end: {
            line: 119,
            column: 5
          }
        },
        "34": {
          start: {
            line: 118,
            column: 6
          },
          end: {
            line: 118,
            column: 12
          }
        },
        "35": {
          start: {
            line: 121,
            column: 4
          },
          end: {
            line: 121,
            column: 51
          }
        },
        "36": {
          start: {
            line: 123,
            column: 4
          },
          end: {
            line: 129,
            column: 5
          }
        },
        "37": {
          start: {
            line: 124,
            column: 6
          },
          end: {
            line: 124,
            column: 19
          }
        },
        "38": {
          start: {
            line: 126,
            column: 6
          },
          end: {
            line: 128,
            column: 28
          }
        },
        "39": {
          start: {
            line: 127,
            column: 8
          },
          end: {
            line: 127,
            column: 21
          }
        },
        "40": {
          start: {
            line: 133,
            column: 4
          },
          end: {
            line: 133,
            column: 31
          }
        },
        "41": {
          start: {
            line: 134,
            column: 4
          },
          end: {
            line: 134,
            column: 24
          }
        },
        "42": {
          start: {
            line: 136,
            column: 4
          },
          end: {
            line: 138,
            column: 5
          }
        },
        "43": {
          start: {
            line: 137,
            column: 6
          },
          end: {
            line: 137,
            column: 52
          }
        },
        "44": {
          start: {
            line: 140,
            column: 4
          },
          end: {
            line: 140,
            column: 56
          }
        },
        "45": {
          start: {
            line: 141,
            column: 4
          },
          end: {
            line: 141,
            column: 44
          }
        },
        "46": {
          start: {
            line: 143,
            column: 4
          },
          end: {
            line: 143,
            column: 24
          }
        },
        "47": {
          start: {
            line: 144,
            column: 4
          },
          end: {
            line: 144,
            column: 24
          }
        },
        "48": {
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 154,
            column: 5
          }
        },
        "49": {
          start: {
            line: 156,
            column: 4
          },
          end: {
            line: 160,
            column: 5
          }
        },
        "50": {
          start: {
            line: 162,
            column: 4
          },
          end: {
            line: 162,
            column: 17
          }
        },
        "51": {
          start: {
            line: 166,
            column: 4
          },
          end: {
            line: 171,
            column: 5
          }
        },
        "52": {
          start: {
            line: 170,
            column: 12
          },
          end: {
            line: 170,
            column: 27
          }
        },
        "53": {
          start: {
            line: 175,
            column: 21
          },
          end: {
            line: 178,
            column: 5
          }
        },
        "54": {
          start: {
            line: 176,
            column: 6
          },
          end: {
            line: 176,
            column: 49
          }
        },
        "55": {
          start: {
            line: 177,
            column: 6
          },
          end: {
            line: 177,
            column: 55
          }
        },
        "56": {
          start: {
            line: 180,
            column: 4
          },
          end: {
            line: 180,
            column: 50
          }
        },
        "57": {
          start: {
            line: 181,
            column: 4
          },
          end: {
            line: 188,
            column: 5
          }
        },
        "58": {
          start: {
            line: 182,
            column: 33
          },
          end: {
            line: 182,
            column: 85
          }
        },
        "59": {
          start: {
            line: 184,
            column: 6
          },
          end: {
            line: 184,
            column: 68
          }
        },
        "60": {
          start: {
            line: 185,
            column: 6
          },
          end: {
            line: 185,
            column: 66
          }
        },
        "61": {
          start: {
            line: 187,
            column: 6
          },
          end: {
            line: 187,
            column: 16
          }
        },
        "62": {
          start: {
            line: 194,
            column: 4
          },
          end: {
            line: 209,
            column: 6
          }
        },
        "63": {
          start: {
            line: 195,
            column: 23
          },
          end: {
            line: 195,
            column: 51
          }
        },
        "64": {
          start: {
            line: 196,
            column: 23
          },
          end: {
            line: 196,
            column: 59
          }
        },
        "65": {
          start: {
            line: 198,
            column: 6
          },
          end: {
            line: 200,
            column: 7
          }
        },
        "66": {
          start: {
            line: 199,
            column: 8
          },
          end: {
            line: 199,
            column: 39
          }
        },
        "67": {
          start: {
            line: 202,
            column: 6
          },
          end: {
            line: 208,
            column: 7
          }
        },
        "68": {
          start: {
            line: 203,
            column: 8
          },
          end: {
            line: 205,
            column: 9
          }
        },
        "69": {
          start: {
            line: 204,
            column: 10
          },
          end: {
            line: 204,
            column: 60
          }
        },
        "70": {
          start: {
            line: 207,
            column: 8
          },
          end: {
            line: 207,
            column: 26
          }
        },
        "71": {
          start: {
            line: 213,
            column: 4
          },
          end: {
            line: 213,
            column: 42
          }
        },
        "72": {
          start: {
            line: 224,
            column: 10
          },
          end: {
            line: 224,
            column: 21
          }
        },
        "73": {
          start: {
            line: 225,
            column: 0
          },
          end: {
            line: 233,
            column: 1
          }
        },
        "74": {
          start: {
            line: 226,
            column: 29
          },
          end: {
            line: 226,
            column: 39
          }
        },
        "75": {
          start: {
            line: 227,
            column: 2
          },
          end: {
            line: 227,
            column: 51
          }
        },
        "76": {
          start: {
            line: 228,
            column: 2
          },
          end: {
            line: 228,
            column: 34
          }
        },
        "77": {
          start: {
            line: 229,
            column: 2
          },
          end: {
            line: 232,
            column: 3
          }
        },
        "78": {
          start: {
            line: 230,
            column: 4
          },
          end: {
            line: 230,
            column: 35
          }
        },
        "79": {
          start: {
            line: 231,
            column: 4
          },
          end: {
            line: 231,
            column: 33
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 62,
              column: 2
            },
            end: {
              line: 62,
              column: 3
            }
          },
          loc: {
            start: {
              line: 62,
              column: 31
            },
            end: {
              line: 68,
              column: 3
            }
          },
          line: 62
        },
        "1": {
          name: "(anonymous_1)",
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
              column: 23
            },
            end: {
              line: 74,
              column: 3
            }
          },
          line: 72
        },
        "2": {
          name: "(anonymous_2)",
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
              column: 27
            },
            end: {
              line: 78,
              column: 3
            }
          },
          line: 76
        },
        "3": {
          name: "(anonymous_3)",
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
              column: 23
            },
            end: {
              line: 82,
              column: 3
            }
          },
          line: 80
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
              column: 9
            },
            end: {
              line: 114,
              column: 3
            }
          },
          line: 86
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 93,
              column: 21
            },
            end: {
              line: 93,
              column: 22
            }
          },
          loc: {
            start: {
              line: 93,
              column: 27
            },
            end: {
              line: 102,
              column: 5
            }
          },
          line: 93
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 116,
              column: 2
            },
            end: {
              line: 116,
              column: 3
            }
          },
          loc: {
            start: {
              line: 116,
              column: 23
            },
            end: {
              line: 130,
              column: 3
            }
          },
          line: 116
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 126,
              column: 33
            },
            end: {
              line: 126,
              column: 34
            }
          },
          loc: {
            start: {
              line: 126,
              column: 39
            },
            end: {
              line: 128,
              column: 7
            }
          },
          line: 126
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 132,
              column: 2
            },
            end: {
              line: 132,
              column: 3
            }
          },
          loc: {
            start: {
              line: 132,
              column: 12
            },
            end: {
              line: 145,
              column: 3
            }
          },
          line: 132
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 149,
              column: 2
            },
            end: {
              line: 149,
              column: 3
            }
          },
          loc: {
            start: {
              line: 149,
              column: 21
            },
            end: {
              line: 163,
              column: 3
            }
          },
          line: 149
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 165,
              column: 2
            },
            end: {
              line: 165,
              column: 3
            }
          },
          loc: {
            start: {
              line: 165,
              column: 18
            },
            end: {
              line: 172,
              column: 3
            }
          },
          line: 165
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 170,
              column: 6
            },
            end: {
              line: 170,
              column: 7
            }
          },
          loc: {
            start: {
              line: 170,
              column: 12
            },
            end: {
              line: 170,
              column: 27
            }
          },
          line: 170
        },
        "12": {
          name: "(anonymous_12)",
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
              column: 11
            },
            end: {
              line: 189,
              column: 3
            }
          },
          line: 174
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 175,
              column: 21
            },
            end: {
              line: 175,
              column: 22
            }
          },
          loc: {
            start: {
              line: 175,
              column: 27
            },
            end: {
              line: 178,
              column: 5
            }
          },
          line: 175
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 193,
              column: 2
            },
            end: {
              line: 193,
              column: 3
            }
          },
          loc: {
            start: {
              line: 193,
              column: 34
            },
            end: {
              line: 210,
              column: 3
            }
          },
          line: 193
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 194,
              column: 21
            },
            end: {
              line: 194,
              column: 22
            }
          },
          loc: {
            start: {
              line: 194,
              column: 33
            },
            end: {
              line: 209,
              column: 5
            }
          },
          line: 194
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 212,
              column: 2
            },
            end: {
              line: 212,
              column: 3
            }
          },
          loc: {
            start: {
              line: 212,
              column: 31
            },
            end: {
              line: 214,
              column: 3
            }
          },
          line: 212
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 229,
              column: 29
            },
            end: {
              line: 229,
              column: 30
            }
          },
          loc: {
            start: {
              line: 229,
              column: 35
            },
            end: {
              line: 232,
              column: 3
            }
          },
          line: 229
        }
      },
      branchMap: {
        "0": {
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
        "1": {
          loc: {
            start: {
              line: 99,
              column: 6
            },
            end: {
              line: 101,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 99,
              column: 6
            },
            end: {
              line: 101,
              column: 7
            }
          }, {
            start: {
              line: 99,
              column: 6
            },
            end: {
              line: 101,
              column: 7
            }
          }],
          line: 99
        },
        "2": {
          loc: {
            start: {
              line: 106,
              column: 4
            },
            end: {
              line: 113,
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
              line: 113,
              column: 5
            }
          }, {
            start: {
              line: 106,
              column: 4
            },
            end: {
              line: 113,
              column: 5
            }
          }],
          line: 106
        },
        "3": {
          loc: {
            start: {
              line: 117,
              column: 4
            },
            end: {
              line: 119,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 117,
              column: 4
            },
            end: {
              line: 119,
              column: 5
            }
          }, {
            start: {
              line: 117,
              column: 4
            },
            end: {
              line: 119,
              column: 5
            }
          }],
          line: 117
        },
        "4": {
          loc: {
            start: {
              line: 123,
              column: 4
            },
            end: {
              line: 129,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 123,
              column: 4
            },
            end: {
              line: 129,
              column: 5
            }
          }, {
            start: {
              line: 123,
              column: 4
            },
            end: {
              line: 129,
              column: 5
            }
          }],
          line: 123
        },
        "5": {
          loc: {
            start: {
              line: 136,
              column: 4
            },
            end: {
              line: 138,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 136,
              column: 4
            },
            end: {
              line: 138,
              column: 5
            }
          }, {
            start: {
              line: 136,
              column: 4
            },
            end: {
              line: 138,
              column: 5
            }
          }],
          line: 136
        },
        "6": {
          loc: {
            start: {
              line: 153,
              column: 9
            },
            end: {
              line: 153,
              column: 59
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 153,
              column: 48
            },
            end: {
              line: 153,
              column: 54
            }
          }, {
            start: {
              line: 153,
              column: 57
            },
            end: {
              line: 153,
              column: 59
            }
          }],
          line: 153
        },
        "7": {
          loc: {
            start: {
              line: 153,
              column: 9
            },
            end: {
              line: 153,
              column: 45
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 153,
              column: 9
            },
            end: {
              line: 153,
              column: 35
            }
          }, {
            start: {
              line: 153,
              column: 39
            },
            end: {
              line: 153,
              column: 45
            }
          }],
          line: 153
        },
        "8": {
          loc: {
            start: {
              line: 181,
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
              line: 181,
              column: 4
            },
            end: {
              line: 188,
              column: 5
            }
          }, {
            start: {
              line: 181,
              column: 4
            },
            end: {
              line: 188,
              column: 5
            }
          }],
          line: 181
        },
        "9": {
          loc: {
            start: {
              line: 196,
              column: 23
            },
            end: {
              line: 196,
              column: 59
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 196,
              column: 23
            },
            end: {
              line: 196,
              column: 49
            }
          }, {
            start: {
              line: 196,
              column: 53
            },
            end: {
              line: 196,
              column: 59
            }
          }],
          line: 196
        },
        "10": {
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
              line: 198,
              column: 6
            },
            end: {
              line: 200,
              column: 7
            }
          }],
          line: 198
        },
        "11": {
          loc: {
            start: {
              line: 202,
              column: 6
            },
            end: {
              line: 208,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 202,
              column: 6
            },
            end: {
              line: 208,
              column: 7
            }
          }, {
            start: {
              line: 202,
              column: 6
            },
            end: {
              line: 208,
              column: 7
            }
          }],
          line: 202
        },
        "12": {
          loc: {
            start: {
              line: 203,
              column: 8
            },
            end: {
              line: 205,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 203,
              column: 8
            },
            end: {
              line: 205,
              column: 9
            }
          }, {
            start: {
              line: 203,
              column: 8
            },
            end: {
              line: 205,
              column: 9
            }
          }],
          line: 203
        },
        "13": {
          loc: {
            start: {
              line: 225,
              column: 0
            },
            end: {
              line: 233,
              column: 1
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 225,
              column: 0
            },
            end: {
              line: 233,
              column: 1
            }
          }, {
            start: {
              line: 225,
              column: 0
            },
            end: {
              line: 233,
              column: 1
            }
          }],
          line: 225
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
        "79": 0
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

  var NAME = (cov_3w8nvp90g.s[0]++, 'toast');
  var VERSION = (cov_3w8nvp90g.s[1]++, '4.3.1');
  var DATA_KEY = (cov_3w8nvp90g.s[2]++, 'bs.toast');
  var EVENT_KEY = (cov_3w8nvp90g.s[3]++, "." + DATA_KEY);
  var Event = (cov_3w8nvp90g.s[4]++, {
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY
  });
  var ClassName = (cov_3w8nvp90g.s[5]++, {
    FADE: 'fade',
    HIDE: 'hide',
    SHOW: 'show',
    SHOWING: 'showing'
  });
  var DefaultType = (cov_3w8nvp90g.s[6]++, {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  });
  var Default = (cov_3w8nvp90g.s[7]++, {
    animation: true,
    autohide: true,
    delay: 500
  });
  var Selector = (cov_3w8nvp90g.s[8]++, {
    DATA_DISMISS: '[data-dismiss="toast"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  });

  var Toast =
  /*#__PURE__*/
  function () {
    function Toast(element, config) {
      cov_3w8nvp90g.f[0]++;
      cov_3w8nvp90g.s[9]++;
      this._element = element;
      cov_3w8nvp90g.s[10]++;
      this._config = this._getConfig(config);
      cov_3w8nvp90g.s[11]++;
      this._timeout = null;
      cov_3w8nvp90g.s[12]++;

      this._setListeners();

      cov_3w8nvp90g.s[13]++;
      Data.setData(element, DATA_KEY, this);
    } // Getters


    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      cov_3w8nvp90g.f[4]++;
      cov_3w8nvp90g.s[17]++;
      EventHandler.trigger(this._element, Event.SHOW);
      cov_3w8nvp90g.s[18]++;

      if (this._config.animation) {
        cov_3w8nvp90g.b[0][0]++;
        cov_3w8nvp90g.s[19]++;

        this._element.classList.add(ClassName.FADE);
      } else {
        cov_3w8nvp90g.b[0][1]++;
      }

      cov_3w8nvp90g.s[20]++;

      var complete = function complete() {
        cov_3w8nvp90g.f[5]++;
        cov_3w8nvp90g.s[21]++;

        _this._element.classList.remove(ClassName.SHOWING);

        cov_3w8nvp90g.s[22]++;

        _this._element.classList.add(ClassName.SHOW);

        cov_3w8nvp90g.s[23]++;
        EventHandler.trigger(_this._element, Event.SHOWN);
        cov_3w8nvp90g.s[24]++;

        if (_this._config.autohide) {
          cov_3w8nvp90g.b[1][0]++;
          cov_3w8nvp90g.s[25]++;

          _this.hide();
        } else {
          cov_3w8nvp90g.b[1][1]++;
        }
      };

      cov_3w8nvp90g.s[26]++;

      this._element.classList.remove(ClassName.HIDE);

      cov_3w8nvp90g.s[27]++;

      this._element.classList.add(ClassName.SHOWING);

      cov_3w8nvp90g.s[28]++;

      if (this._config.animation) {
        cov_3w8nvp90g.b[2][0]++;
        var transitionDuration = (cov_3w8nvp90g.s[29]++, Util.getTransitionDurationFromElement(this._element));
        cov_3w8nvp90g.s[30]++;
        EventHandler.one(this._element, Util.TRANSITION_END, complete);
        cov_3w8nvp90g.s[31]++;
        Util.emulateTransitionEnd(this._element, transitionDuration);
      } else {
        cov_3w8nvp90g.b[2][1]++;
        cov_3w8nvp90g.s[32]++;
        complete();
      }
    };

    _proto.hide = function hide(withoutTimeout) {
      var _this2 = this;

      cov_3w8nvp90g.f[6]++;
      cov_3w8nvp90g.s[33]++;

      if (!this._element.classList.contains(ClassName.SHOW)) {
        cov_3w8nvp90g.b[3][0]++;
        cov_3w8nvp90g.s[34]++;
        return;
      } else {
        cov_3w8nvp90g.b[3][1]++;
      }

      cov_3w8nvp90g.s[35]++;
      EventHandler.trigger(this._element, Event.HIDE);
      cov_3w8nvp90g.s[36]++;

      if (withoutTimeout) {
        cov_3w8nvp90g.b[4][0]++;
        cov_3w8nvp90g.s[37]++;

        this._close();
      } else {
        cov_3w8nvp90g.b[4][1]++;
        cov_3w8nvp90g.s[38]++;
        this._timeout = setTimeout(function () {
          cov_3w8nvp90g.f[7]++;
          cov_3w8nvp90g.s[39]++;

          _this2._close();
        }, this._config.delay);
      }
    };

    _proto.dispose = function dispose() {
      cov_3w8nvp90g.f[8]++;
      cov_3w8nvp90g.s[40]++;
      clearTimeout(this._timeout);
      cov_3w8nvp90g.s[41]++;
      this._timeout = null;
      cov_3w8nvp90g.s[42]++;

      if (this._element.classList.contains(ClassName.SHOW)) {
        cov_3w8nvp90g.b[5][0]++;
        cov_3w8nvp90g.s[43]++;

        this._element.classList.remove(ClassName.SHOW);
      } else {
        cov_3w8nvp90g.b[5][1]++;
      }

      cov_3w8nvp90g.s[44]++;
      EventHandler.off(this._element, Event.CLICK_DISMISS);
      cov_3w8nvp90g.s[45]++;
      Data.removeData(this._element, DATA_KEY);
      cov_3w8nvp90g.s[46]++;
      this._element = null;
      cov_3w8nvp90g.s[47]++;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      cov_3w8nvp90g.f[9]++;
      cov_3w8nvp90g.s[48]++;
      config = _objectSpread({}, Default, Manipulator.getDataAttributes(this._element), (cov_3w8nvp90g.b[7][0]++, typeof config === 'object') && (cov_3w8nvp90g.b[7][1]++, config) ? (cov_3w8nvp90g.b[6][0]++, config) : (cov_3w8nvp90g.b[6][1]++, {}));
      cov_3w8nvp90g.s[49]++;
      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      cov_3w8nvp90g.s[50]++;
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this3 = this;

      cov_3w8nvp90g.f[10]++;
      cov_3w8nvp90g.s[51]++;
      EventHandler.on(this._element, Event.CLICK_DISMISS, Selector.DATA_DISMISS, function () {
        cov_3w8nvp90g.f[11]++;
        cov_3w8nvp90g.s[52]++;
        return _this3.hide(true);
      });
    };

    _proto._close = function _close() {
      var _this4 = this;

      cov_3w8nvp90g.f[12]++;
      cov_3w8nvp90g.s[53]++;

      var complete = function complete() {
        cov_3w8nvp90g.f[13]++;
        cov_3w8nvp90g.s[54]++;

        _this4._element.classList.add(ClassName.HIDE);

        cov_3w8nvp90g.s[55]++;
        EventHandler.trigger(_this4._element, Event.HIDDEN);
      };

      cov_3w8nvp90g.s[56]++;

      this._element.classList.remove(ClassName.SHOW);

      cov_3w8nvp90g.s[57]++;

      if (this._config.animation) {
        cov_3w8nvp90g.b[8][0]++;
        var transitionDuration = (cov_3w8nvp90g.s[58]++, Util.getTransitionDurationFromElement(this._element));
        cov_3w8nvp90g.s[59]++;
        EventHandler.one(this._element, Util.TRANSITION_END, complete);
        cov_3w8nvp90g.s[60]++;
        Util.emulateTransitionEnd(this._element, transitionDuration);
      } else {
        cov_3w8nvp90g.b[8][1]++;
        cov_3w8nvp90g.s[61]++;
        complete();
      }
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      cov_3w8nvp90g.f[14]++;
      cov_3w8nvp90g.s[62]++;
      return this.each(function () {
        cov_3w8nvp90g.f[15]++;
        var data = (cov_3w8nvp90g.s[63]++, Data.getData(this, DATA_KEY));

        var _config = (cov_3w8nvp90g.s[64]++, (cov_3w8nvp90g.b[9][0]++, typeof config === 'object') && (cov_3w8nvp90g.b[9][1]++, config));

        cov_3w8nvp90g.s[65]++;

        if (!data) {
          cov_3w8nvp90g.b[10][0]++;
          cov_3w8nvp90g.s[66]++;
          data = new Toast(this, _config);
        } else {
          cov_3w8nvp90g.b[10][1]++;
        }

        cov_3w8nvp90g.s[67]++;

        if (typeof config === 'string') {
          cov_3w8nvp90g.b[11][0]++;
          cov_3w8nvp90g.s[68]++;

          if (typeof data[config] === 'undefined') {
            cov_3w8nvp90g.b[12][0]++;
            cov_3w8nvp90g.s[69]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_3w8nvp90g.b[12][1]++;
          }

          cov_3w8nvp90g.s[70]++;
          data[config](this);
        } else {
          cov_3w8nvp90g.b[11][1]++;
        }
      });
    };

    Toast._getInstance = function _getInstance(element) {
      cov_3w8nvp90g.f[16]++;
      cov_3w8nvp90g.s[71]++;
      return Data.getData(element, DATA_KEY);
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        cov_3w8nvp90g.f[1]++;
        cov_3w8nvp90g.s[14]++;
        return VERSION;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        cov_3w8nvp90g.f[2]++;
        cov_3w8nvp90g.s[15]++;
        return DefaultType;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_3w8nvp90g.f[3]++;
        cov_3w8nvp90g.s[16]++;
        return Default;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   *  add .toast to jQuery only if jQuery is present
   */


  var $ = (cov_3w8nvp90g.s[72]++, Util.jQuery);
  cov_3w8nvp90g.s[73]++;

  if (typeof $ !== 'undefined') {
    cov_3w8nvp90g.b[13][0]++;
    var JQUERY_NO_CONFLICT = (cov_3w8nvp90g.s[74]++, $.fn[NAME]);
    cov_3w8nvp90g.s[75]++;
    $.fn[NAME] = Toast._jQueryInterface;
    cov_3w8nvp90g.s[76]++;
    $.fn[NAME].Constructor = Toast;
    cov_3w8nvp90g.s[77]++;

    $.fn[NAME].noConflict = function () {
      cov_3w8nvp90g.f[17]++;
      cov_3w8nvp90g.s[78]++;
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      cov_3w8nvp90g.s[79]++;
      return Toast._jQueryInterface;
    };
  } else {
    cov_3w8nvp90g.b[13][1]++;
  }

  return Toast;

}));
//# sourceMappingURL=toast.js.map

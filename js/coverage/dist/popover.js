/*!
  * Bootstrap popover.js v4.3.1-0 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2019 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/data.js'), require('./dom/selectorEngine.js'), require('./tooltip.js'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['./dom/data.js', './dom/selectorEngine.js', './tooltip.js', './util.js'], factory) :
  (global = global || self, global.Popover = factory(global.Data, global.SelectorEngine, global.Tooltip, global.Util));
}(this, function (Data, SelectorEngine, Tooltip, Util) { 'use strict';

  Data = Data && Data.hasOwnProperty('default') ? Data['default'] : Data;
  SelectorEngine = SelectorEngine && SelectorEngine.hasOwnProperty('default') ? SelectorEngine['default'] : SelectorEngine;
  Tooltip = Tooltip && Tooltip.hasOwnProperty('default') ? Tooltip['default'] : Tooltip;
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

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var cov_28z7zlrdsn = function () {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/popover.js";
    var hash = "fdcf02112663e0177ef61442deeb780f875c54e9";

    var Function = function () {}.constructor;

    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/popover.js",
      statementMap: {
        "0": {
          start: {
            line: 19,
            column: 28
          },
          end: {
            line: 19,
            column: 37
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
            column: 40
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
            column: 40
          }
        },
        "5": {
          start: {
            line: 24,
            column: 28
          },
          end: {
            line: 24,
            column: 73
          }
        },
        "6": {
          start: {
            line: 26,
            column: 16
          },
          end: {
            line: 35,
            column: 1
          }
        },
        "7": {
          start: {
            line: 37,
            column: 20
          },
          end: {
            line: 40,
            column: 1
          }
        },
        "8": {
          start: {
            line: 42,
            column: 18
          },
          end: {
            line: 45,
            column: 1
          }
        },
        "9": {
          start: {
            line: 47,
            column: 17
          },
          end: {
            line: 50,
            column: 1
          }
        },
        "10": {
          start: {
            line: 52,
            column: 14
          },
          end: {
            line: 63,
            column: 1
          }
        },
        "11": {
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 75,
            column: 18
          }
        },
        "12": {
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 79,
            column: 18
          }
        },
        "13": {
          start: {
            line: 83,
            column: 4
          },
          end: {
            line: 83,
            column: 15
          }
        },
        "14": {
          start: {
            line: 87,
            column: 4
          },
          end: {
            line: 87,
            column: 19
          }
        },
        "15": {
          start: {
            line: 91,
            column: 4
          },
          end: {
            line: 91,
            column: 16
          }
        },
        "16": {
          start: {
            line: 95,
            column: 4
          },
          end: {
            line: 95,
            column: 20
          }
        },
        "17": {
          start: {
            line: 99,
            column: 4
          },
          end: {
            line: 99,
            column: 22
          }
        },
        "18": {
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 105,
            column: 48
          }
        },
        "19": {
          start: {
            line: 109,
            column: 4
          },
          end: {
            line: 109,
            column: 71
          }
        },
        "20": {
          start: {
            line: 113,
            column: 16
          },
          end: {
            line: 113,
            column: 36
          }
        },
        "21": {
          start: {
            line: 116,
            column: 4
          },
          end: {
            line: 116,
            column: 88
          }
        },
        "22": {
          start: {
            line: 117,
            column: 18
          },
          end: {
            line: 117,
            column: 36
          }
        },
        "23": {
          start: {
            line: 118,
            column: 4
          },
          end: {
            line: 120,
            column: 5
          }
        },
        "24": {
          start: {
            line: 119,
            column: 6
          },
          end: {
            line: 119,
            column: 42
          }
        },
        "25": {
          start: {
            line: 121,
            column: 4
          },
          end: {
            line: 121,
            column: 82
          }
        },
        "26": {
          start: {
            line: 123,
            column: 4
          },
          end: {
            line: 123,
            column: 40
          }
        },
        "27": {
          start: {
            line: 124,
            column: 4
          },
          end: {
            line: 124,
            column: 40
          }
        },
        "28": {
          start: {
            line: 130,
            column: 4
          },
          end: {
            line: 131,
            column: 25
          }
        },
        "29": {
          start: {
            line: 135,
            column: 16
          },
          end: {
            line: 135,
            column: 36
          }
        },
        "30": {
          start: {
            line: 136,
            column: 21
          },
          end: {
            line: 136,
            column: 72
          }
        },
        "31": {
          start: {
            line: 138,
            column: 4
          },
          end: {
            line: 141,
            column: 5
          }
        },
        "32": {
          start: {
            line: 139,
            column: 6
          },
          end: {
            line: 140,
            column: 58
          }
        },
        "33": {
          start: {
            line: 139,
            column: 30
          },
          end: {
            line: 139,
            column: 42
          }
        },
        "34": {
          start: {
            line: 140,
            column: 29
          },
          end: {
            line: 140,
            column: 57
          }
        },
        "35": {
          start: {
            line: 147,
            column: 4
          },
          end: {
            line: 166,
            column: 6
          }
        },
        "36": {
          start: {
            line: 148,
            column: 22
          },
          end: {
            line: 148,
            column: 50
          }
        },
        "37": {
          start: {
            line: 149,
            column: 22
          },
          end: {
            line: 149,
            column: 64
          }
        },
        "38": {
          start: {
            line: 151,
            column: 6
          },
          end: {
            line: 153,
            column: 7
          }
        },
        "39": {
          start: {
            line: 152,
            column: 8
          },
          end: {
            line: 152,
            column: 14
          }
        },
        "40": {
          start: {
            line: 155,
            column: 6
          },
          end: {
            line: 158,
            column: 7
          }
        },
        "41": {
          start: {
            line: 156,
            column: 8
          },
          end: {
            line: 156,
            column: 41
          }
        },
        "42": {
          start: {
            line: 157,
            column: 8
          },
          end: {
            line: 157,
            column: 42
          }
        },
        "43": {
          start: {
            line: 160,
            column: 6
          },
          end: {
            line: 165,
            column: 7
          }
        },
        "44": {
          start: {
            line: 161,
            column: 8
          },
          end: {
            line: 163,
            column: 9
          }
        },
        "45": {
          start: {
            line: 162,
            column: 10
          },
          end: {
            line: 162,
            column: 60
          }
        },
        "46": {
          start: {
            line: 164,
            column: 8
          },
          end: {
            line: 164,
            column: 22
          }
        },
        "47": {
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 170,
            column: 42
          }
        },
        "48": {
          start: {
            line: 180,
            column: 10
          },
          end: {
            line: 180,
            column: 21
          }
        },
        "49": {
          start: {
            line: 181,
            column: 0
          },
          end: {
            line: 189,
            column: 1
          }
        },
        "50": {
          start: {
            line: 182,
            column: 29
          },
          end: {
            line: 182,
            column: 39
          }
        },
        "51": {
          start: {
            line: 183,
            column: 2
          },
          end: {
            line: 183,
            column: 53
          }
        },
        "52": {
          start: {
            line: 184,
            column: 2
          },
          end: {
            line: 184,
            column: 36
          }
        },
        "53": {
          start: {
            line: 185,
            column: 2
          },
          end: {
            line: 188,
            column: 3
          }
        },
        "54": {
          start: {
            line: 186,
            column: 4
          },
          end: {
            line: 186,
            column: 35
          }
        },
        "55": {
          start: {
            line: 187,
            column: 4
          },
          end: {
            line: 187,
            column: 35
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 74,
              column: 2
            },
            end: {
              line: 74,
              column: 3
            }
          },
          loc: {
            start: {
              line: 74,
              column: 23
            },
            end: {
              line: 76,
              column: 3
            }
          },
          line: 74
        },
        "1": {
          name: "(anonymous_1)",
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
              column: 23
            },
            end: {
              line: 80,
              column: 3
            }
          },
          line: 78
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 82,
              column: 2
            },
            end: {
              line: 82,
              column: 3
            }
          },
          loc: {
            start: {
              line: 82,
              column: 20
            },
            end: {
              line: 84,
              column: 3
            }
          },
          line: 82
        },
        "3": {
          name: "(anonymous_3)",
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
              column: 24
            },
            end: {
              line: 88,
              column: 3
            }
          },
          line: 86
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 90,
              column: 2
            },
            end: {
              line: 90,
              column: 3
            }
          },
          loc: {
            start: {
              line: 90,
              column: 21
            },
            end: {
              line: 92,
              column: 3
            }
          },
          line: 90
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 94,
              column: 2
            },
            end: {
              line: 94,
              column: 3
            }
          },
          loc: {
            start: {
              line: 94,
              column: 25
            },
            end: {
              line: 96,
              column: 3
            }
          },
          line: 94
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 98,
              column: 2
            },
            end: {
              line: 98,
              column: 3
            }
          },
          loc: {
            start: {
              line: 98,
              column: 27
            },
            end: {
              line: 100,
              column: 3
            }
          },
          line: 98
        },
        "7": {
          name: "(anonymous_7)",
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
              column: 18
            },
            end: {
              line: 106,
              column: 3
            }
          },
          line: 104
        },
        "8": {
          name: "(anonymous_8)",
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
              column: 33
            },
            end: {
              line: 110,
              column: 3
            }
          },
          line: 108
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 112,
              column: 2
            },
            end: {
              line: 112,
              column: 3
            }
          },
          loc: {
            start: {
              line: 112,
              column: 15
            },
            end: {
              line: 125,
              column: 3
            }
          },
          line: 112
        },
        "10": {
          name: "(anonymous_10)",
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
              column: 16
            },
            end: {
              line: 132,
              column: 3
            }
          },
          line: 129
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 134,
              column: 2
            },
            end: {
              line: 134,
              column: 3
            }
          },
          loc: {
            start: {
              line: 134,
              column: 19
            },
            end: {
              line: 142,
              column: 3
            }
          },
          line: 134
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 139,
              column: 19
            },
            end: {
              line: 139,
              column: 20
            }
          },
          loc: {
            start: {
              line: 139,
              column: 30
            },
            end: {
              line: 139,
              column: 42
            }
          },
          line: 139
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 140,
              column: 17
            },
            end: {
              line: 140,
              column: 18
            }
          },
          loc: {
            start: {
              line: 140,
              column: 29
            },
            end: {
              line: 140,
              column: 57
            }
          },
          line: 140
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 146,
              column: 2
            },
            end: {
              line: 146,
              column: 3
            }
          },
          loc: {
            start: {
              line: 146,
              column: 34
            },
            end: {
              line: 167,
              column: 3
            }
          },
          line: 146
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 147,
              column: 21
            },
            end: {
              line: 147,
              column: 22
            }
          },
          loc: {
            start: {
              line: 147,
              column: 33
            },
            end: {
              line: 166,
              column: 5
            }
          },
          line: 147
        },
        "16": {
          name: "(anonymous_16)",
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
              column: 31
            },
            end: {
              line: 171,
              column: 3
            }
          },
          line: 169
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 185,
              column: 29
            },
            end: {
              line: 185,
              column: 30
            }
          },
          loc: {
            start: {
              line: 185,
              column: 35
            },
            end: {
              line: 188,
              column: 3
            }
          },
          line: 185
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 105,
              column: 11
            },
            end: {
              line: 105,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 105,
              column: 11
            },
            end: {
              line: 105,
              column: 26
            }
          }, {
            start: {
              line: 105,
              column: 30
            },
            end: {
              line: 105,
              column: 48
            }
          }],
          line: 105
        },
        "1": {
          loc: {
            start: {
              line: 118,
              column: 4
            },
            end: {
              line: 120,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 118,
              column: 4
            },
            end: {
              line: 120,
              column: 5
            }
          }, {
            start: {
              line: 118,
              column: 4
            },
            end: {
              line: 120,
              column: 5
            }
          }],
          line: 118
        },
        "2": {
          loc: {
            start: {
              line: 130,
              column: 11
            },
            end: {
              line: 131,
              column: 25
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 130,
              column: 11
            },
            end: {
              line: 130,
              column: 52
            }
          }, {
            start: {
              line: 131,
              column: 6
            },
            end: {
              line: 131,
              column: 25
            }
          }],
          line: 130
        },
        "3": {
          loc: {
            start: {
              line: 138,
              column: 4
            },
            end: {
              line: 141,
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
              line: 141,
              column: 5
            }
          }, {
            start: {
              line: 138,
              column: 4
            },
            end: {
              line: 141,
              column: 5
            }
          }],
          line: 138
        },
        "4": {
          loc: {
            start: {
              line: 138,
              column: 8
            },
            end: {
              line: 138,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 138,
              column: 8
            },
            end: {
              line: 138,
              column: 25
            }
          }, {
            start: {
              line: 138,
              column: 29
            },
            end: {
              line: 138,
              column: 48
            }
          }],
          line: 138
        },
        "5": {
          loc: {
            start: {
              line: 149,
              column: 22
            },
            end: {
              line: 149,
              column: 64
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 149,
              column: 51
            },
            end: {
              line: 149,
              column: 57
            }
          }, {
            start: {
              line: 149,
              column: 60
            },
            end: {
              line: 149,
              column: 64
            }
          }],
          line: 149
        },
        "6": {
          loc: {
            start: {
              line: 151,
              column: 6
            },
            end: {
              line: 153,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 151,
              column: 6
            },
            end: {
              line: 153,
              column: 7
            }
          }, {
            start: {
              line: 151,
              column: 6
            },
            end: {
              line: 153,
              column: 7
            }
          }],
          line: 151
        },
        "7": {
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
              column: 15
            }
          }, {
            start: {
              line: 151,
              column: 19
            },
            end: {
              line: 151,
              column: 46
            }
          }],
          line: 151
        },
        "8": {
          loc: {
            start: {
              line: 155,
              column: 6
            },
            end: {
              line: 158,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 155,
              column: 6
            },
            end: {
              line: 158,
              column: 7
            }
          }, {
            start: {
              line: 155,
              column: 6
            },
            end: {
              line: 158,
              column: 7
            }
          }],
          line: 155
        },
        "9": {
          loc: {
            start: {
              line: 160,
              column: 6
            },
            end: {
              line: 165,
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
              line: 165,
              column: 7
            }
          }, {
            start: {
              line: 160,
              column: 6
            },
            end: {
              line: 165,
              column: 7
            }
          }],
          line: 160
        },
        "10": {
          loc: {
            start: {
              line: 161,
              column: 8
            },
            end: {
              line: 163,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 161,
              column: 8
            },
            end: {
              line: 163,
              column: 9
            }
          }, {
            start: {
              line: 161,
              column: 8
            },
            end: {
              line: 163,
              column: 9
            }
          }],
          line: 161
        },
        "11": {
          loc: {
            start: {
              line: 181,
              column: 0
            },
            end: {
              line: 189,
              column: 1
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 181,
              column: 0
            },
            end: {
              line: 189,
              column: 1
            }
          }, {
            start: {
              line: 181,
              column: 0
            },
            end: {
              line: 189,
              column: 1
            }
          }],
          line: 181
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
        "55": 0
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

  var NAME = (cov_28z7zlrdsn.s[0]++, 'popover');
  var VERSION = (cov_28z7zlrdsn.s[1]++, '4.3.1');
  var DATA_KEY = (cov_28z7zlrdsn.s[2]++, 'bs.popover');
  var EVENT_KEY = (cov_28z7zlrdsn.s[3]++, "." + DATA_KEY);
  var CLASS_PREFIX = (cov_28z7zlrdsn.s[4]++, 'bs-popover');
  var BSCLS_PREFIX_REGEX = (cov_28z7zlrdsn.s[5]++, new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g'));
  var Default = (cov_28z7zlrdsn.s[6]++, _objectSpread({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  }));
  var DefaultType = (cov_28z7zlrdsn.s[7]++, _objectSpread({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  }));
  var ClassName = (cov_28z7zlrdsn.s[8]++, {
    FADE: 'fade',
    SHOW: 'show'
  });
  var Selector = (cov_28z7zlrdsn.s[9]++, {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  });
  var Event = (cov_28z7zlrdsn.s[10]++, {
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
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  });

  var Popover =
  /*#__PURE__*/
  function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      cov_28z7zlrdsn.f[7]++;
      cov_28z7zlrdsn.s[18]++;
      return (cov_28z7zlrdsn.b[0][0]++, this.getTitle()) || (cov_28z7zlrdsn.b[0][1]++, this._getContent());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      cov_28z7zlrdsn.f[8]++;
      cov_28z7zlrdsn.s[19]++;
      this.getTipElement().classList.add(CLASS_PREFIX + "-" + attachment);
    };

    _proto.setContent = function setContent() {
      cov_28z7zlrdsn.f[9]++;
      var tip = (cov_28z7zlrdsn.s[20]++, this.getTipElement()); // we use append for html objects to maintain js events

      cov_28z7zlrdsn.s[21]++;
      this.setElementContent(SelectorEngine.findOne(Selector.TITLE, tip), this.getTitle());
      var content = (cov_28z7zlrdsn.s[22]++, this._getContent());
      cov_28z7zlrdsn.s[23]++;

      if (typeof content === 'function') {
        cov_28z7zlrdsn.b[1][0]++;
        cov_28z7zlrdsn.s[24]++;
        content = content.call(this.element);
      } else {
        cov_28z7zlrdsn.b[1][1]++;
      }

      cov_28z7zlrdsn.s[25]++;
      this.setElementContent(SelectorEngine.findOne(Selector.CONTENT, tip), content);
      cov_28z7zlrdsn.s[26]++;
      tip.classList.remove(ClassName.FADE);
      cov_28z7zlrdsn.s[27]++;
      tip.classList.remove(ClassName.SHOW);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      cov_28z7zlrdsn.f[10]++;
      cov_28z7zlrdsn.s[28]++;
      return (cov_28z7zlrdsn.b[2][0]++, this.element.getAttribute('data-content')) || (cov_28z7zlrdsn.b[2][1]++, this.config.content);
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      cov_28z7zlrdsn.f[11]++;
      var tip = (cov_28z7zlrdsn.s[29]++, this.getTipElement());
      var tabClass = (cov_28z7zlrdsn.s[30]++, tip.getAttribute('class').match(BSCLS_PREFIX_REGEX));
      cov_28z7zlrdsn.s[31]++;

      if ((cov_28z7zlrdsn.b[4][0]++, tabClass !== null) && (cov_28z7zlrdsn.b[4][1]++, tabClass.length > 0)) {
        cov_28z7zlrdsn.b[3][0]++;
        cov_28z7zlrdsn.s[32]++;
        tabClass.map(function (token) {
          cov_28z7zlrdsn.f[12]++;
          cov_28z7zlrdsn.s[33]++;
          return token.trim();
        }).forEach(function (tClass) {
          cov_28z7zlrdsn.f[13]++;
          cov_28z7zlrdsn.s[34]++;
          return tip.classList.remove(tClass);
        });
      } else {
        cov_28z7zlrdsn.b[3][1]++;
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      cov_28z7zlrdsn.f[14]++;
      cov_28z7zlrdsn.s[35]++;
      return this.each(function () {
        cov_28z7zlrdsn.f[15]++;
        var data = (cov_28z7zlrdsn.s[36]++, Data.getData(this, DATA_KEY));

        var _config = (cov_28z7zlrdsn.s[37]++, typeof config === 'object' ? (cov_28z7zlrdsn.b[5][0]++, config) : (cov_28z7zlrdsn.b[5][1]++, null));

        cov_28z7zlrdsn.s[38]++;

        if ((cov_28z7zlrdsn.b[7][0]++, !data) && (cov_28z7zlrdsn.b[7][1]++, /dispose|hide/.test(config))) {
          cov_28z7zlrdsn.b[6][0]++;
          cov_28z7zlrdsn.s[39]++;
          return;
        } else {
          cov_28z7zlrdsn.b[6][1]++;
        }

        cov_28z7zlrdsn.s[40]++;

        if (!data) {
          cov_28z7zlrdsn.b[8][0]++;
          cov_28z7zlrdsn.s[41]++;
          data = new Popover(this, _config);
          cov_28z7zlrdsn.s[42]++;
          Data.setData(this, DATA_KEY, data);
        } else {
          cov_28z7zlrdsn.b[8][1]++;
        }

        cov_28z7zlrdsn.s[43]++;

        if (typeof config === 'string') {
          cov_28z7zlrdsn.b[9][0]++;
          cov_28z7zlrdsn.s[44]++;

          if (typeof data[config] === 'undefined') {
            cov_28z7zlrdsn.b[10][0]++;
            cov_28z7zlrdsn.s[45]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_28z7zlrdsn.b[10][1]++;
          }

          cov_28z7zlrdsn.s[46]++;
          data[config]();
        } else {
          cov_28z7zlrdsn.b[9][1]++;
        }
      });
    };

    Popover._getInstance = function _getInstance(element) {
      cov_28z7zlrdsn.f[16]++;
      cov_28z7zlrdsn.s[47]++;
      return Data.getData(element, DATA_KEY);
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        cov_28z7zlrdsn.f[0]++;
        cov_28z7zlrdsn.s[11]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_28z7zlrdsn.f[1]++;
        cov_28z7zlrdsn.s[12]++;
        return Default;
      }
    }, {
      key: "NAME",
      get: function get() {
        cov_28z7zlrdsn.f[2]++;
        cov_28z7zlrdsn.s[13]++;
        return NAME;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        cov_28z7zlrdsn.f[3]++;
        cov_28z7zlrdsn.s[14]++;
        return DATA_KEY;
      }
    }, {
      key: "Event",
      get: function get() {
        cov_28z7zlrdsn.f[4]++;
        cov_28z7zlrdsn.s[15]++;
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        cov_28z7zlrdsn.f[5]++;
        cov_28z7zlrdsn.s[16]++;
        return EVENT_KEY;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        cov_28z7zlrdsn.f[6]++;
        cov_28z7zlrdsn.s[17]++;
        return DefaultType;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  var $ = (cov_28z7zlrdsn.s[48]++, Util.jQuery);
  cov_28z7zlrdsn.s[49]++;

  if (typeof $ !== 'undefined') {
    cov_28z7zlrdsn.b[11][0]++;
    var JQUERY_NO_CONFLICT = (cov_28z7zlrdsn.s[50]++, $.fn[NAME]);
    cov_28z7zlrdsn.s[51]++;
    $.fn[NAME] = Popover._jQueryInterface;
    cov_28z7zlrdsn.s[52]++;
    $.fn[NAME].Constructor = Popover;
    cov_28z7zlrdsn.s[53]++;

    $.fn[NAME].noConflict = function () {
      cov_28z7zlrdsn.f[17]++;
      cov_28z7zlrdsn.s[54]++;
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      cov_28z7zlrdsn.s[55]++;
      return Popover._jQueryInterface;
    };
  } else {
    cov_28z7zlrdsn.b[11][1]++;
  }

  return Popover;

}));
//# sourceMappingURL=popover.js.map

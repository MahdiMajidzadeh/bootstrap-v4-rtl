/*!
  * Bootstrap popover.js v4.4.1-1 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2020 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./tooltip.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './tooltip.js'], factory) :
  (global = global || self, global.Popover = factory(global.jQuery, global.Tooltip));
}(this, (function ($, Tooltip) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Tooltip = Tooltip && Tooltip.hasOwnProperty('default') ? Tooltip['default'] : Tooltip;

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

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
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
    var hash = "ec5ccd7e9ed2e65061b969acf24f1583d508a067";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/popover.js",
      statementMap: {
        "0": {
          start: {
            line: 17,
            column: 28
          },
          end: {
            line: 17,
            column: 37
          }
        },
        "1": {
          start: {
            line: 18,
            column: 28
          },
          end: {
            line: 18,
            column: 35
          }
        },
        "2": {
          start: {
            line: 19,
            column: 28
          },
          end: {
            line: 19,
            column: 40
          }
        },
        "3": {
          start: {
            line: 20,
            column: 28
          },
          end: {
            line: 20,
            column: 42
          }
        },
        "4": {
          start: {
            line: 21,
            column: 28
          },
          end: {
            line: 21,
            column: 38
          }
        },
        "5": {
          start: {
            line: 22,
            column: 28
          },
          end: {
            line: 22,
            column: 40
          }
        },
        "6": {
          start: {
            line: 23,
            column: 28
          },
          end: {
            line: 23,
            column: 73
          }
        },
        "7": {
          start: {
            line: 25,
            column: 16
          },
          end: {
            line: 34,
            column: 1
          }
        },
        "8": {
          start: {
            line: 36,
            column: 20
          },
          end: {
            line: 39,
            column: 1
          }
        },
        "9": {
          start: {
            line: 41,
            column: 18
          },
          end: {
            line: 44,
            column: 1
          }
        },
        "10": {
          start: {
            line: 46,
            column: 17
          },
          end: {
            line: 49,
            column: 1
          }
        },
        "11": {
          start: {
            line: 51,
            column: 14
          },
          end: {
            line: 62,
            column: 1
          }
        },
        "12": {
          start: {
            line: 74,
            column: 4
          },
          end: {
            line: 74,
            column: 18
          }
        },
        "13": {
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 78,
            column: 18
          }
        },
        "14": {
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 82,
            column: 15
          }
        },
        "15": {
          start: {
            line: 86,
            column: 4
          },
          end: {
            line: 86,
            column: 19
          }
        },
        "16": {
          start: {
            line: 90,
            column: 4
          },
          end: {
            line: 90,
            column: 16
          }
        },
        "17": {
          start: {
            line: 94,
            column: 4
          },
          end: {
            line: 94,
            column: 20
          }
        },
        "18": {
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 98,
            column: 22
          }
        },
        "19": {
          start: {
            line: 104,
            column: 4
          },
          end: {
            line: 104,
            column: 48
          }
        },
        "20": {
          start: {
            line: 108,
            column: 4
          },
          end: {
            line: 108,
            column: 69
          }
        },
        "21": {
          start: {
            line: 112,
            column: 4
          },
          end: {
            line: 112,
            column: 53
          }
        },
        "22": {
          start: {
            line: 113,
            column: 4
          },
          end: {
            line: 113,
            column: 19
          }
        },
        "23": {
          start: {
            line: 117,
            column: 17
          },
          end: {
            line: 117,
            column: 40
          }
        },
        "24": {
          start: {
            line: 120,
            column: 4
          },
          end: {
            line: 120,
            column: 70
          }
        },
        "25": {
          start: {
            line: 121,
            column: 18
          },
          end: {
            line: 121,
            column: 36
          }
        },
        "26": {
          start: {
            line: 122,
            column: 4
          },
          end: {
            line: 124,
            column: 5
          }
        },
        "27": {
          start: {
            line: 123,
            column: 6
          },
          end: {
            line: 123,
            column: 42
          }
        },
        "28": {
          start: {
            line: 125,
            column: 4
          },
          end: {
            line: 125,
            column: 64
          }
        },
        "29": {
          start: {
            line: 127,
            column: 4
          },
          end: {
            line: 127,
            column: 59
          }
        },
        "30": {
          start: {
            line: 133,
            column: 4
          },
          end: {
            line: 134,
            column: 25
          }
        },
        "31": {
          start: {
            line: 138,
            column: 17
          },
          end: {
            line: 138,
            column: 40
          }
        },
        "32": {
          start: {
            line: 139,
            column: 21
          },
          end: {
            line: 139,
            column: 65
          }
        },
        "33": {
          start: {
            line: 140,
            column: 4
          },
          end: {
            line: 142,
            column: 5
          }
        },
        "34": {
          start: {
            line: 141,
            column: 6
          },
          end: {
            line: 141,
            column: 41
          }
        },
        "35": {
          start: {
            line: 148,
            column: 4
          },
          end: {
            line: 167,
            column: 6
          }
        },
        "36": {
          start: {
            line: 149,
            column: 17
          },
          end: {
            line: 149,
            column: 39
          }
        },
        "37": {
          start: {
            line: 150,
            column: 22
          },
          end: {
            line: 150,
            column: 64
          }
        },
        "38": {
          start: {
            line: 152,
            column: 6
          },
          end: {
            line: 154,
            column: 7
          }
        },
        "39": {
          start: {
            line: 153,
            column: 8
          },
          end: {
            line: 153,
            column: 14
          }
        },
        "40": {
          start: {
            line: 156,
            column: 6
          },
          end: {
            line: 159,
            column: 7
          }
        },
        "41": {
          start: {
            line: 157,
            column: 8
          },
          end: {
            line: 157,
            column: 41
          }
        },
        "42": {
          start: {
            line: 158,
            column: 8
          },
          end: {
            line: 158,
            column: 36
          }
        },
        "43": {
          start: {
            line: 161,
            column: 6
          },
          end: {
            line: 166,
            column: 7
          }
        },
        "44": {
          start: {
            line: 162,
            column: 8
          },
          end: {
            line: 164,
            column: 9
          }
        },
        "45": {
          start: {
            line: 163,
            column: 10
          },
          end: {
            line: 163,
            column: 60
          }
        },
        "46": {
          start: {
            line: 165,
            column: 8
          },
          end: {
            line: 165,
            column: 22
          }
        },
        "47": {
          start: {
            line: 177,
            column: 0
          },
          end: {
            line: 177,
            column: 37
          }
        },
        "48": {
          start: {
            line: 178,
            column: 0
          },
          end: {
            line: 178,
            column: 32
          }
        },
        "49": {
          start: {
            line: 179,
            column: 0
          },
          end: {
            line: 182,
            column: 1
          }
        },
        "50": {
          start: {
            line: 180,
            column: 2
          },
          end: {
            line: 180,
            column: 33
          }
        },
        "51": {
          start: {
            line: 181,
            column: 2
          },
          end: {
            line: 181,
            column: 33
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 73,
              column: 2
            },
            end: {
              line: 73,
              column: 3
            }
          },
          loc: {
            start: {
              line: 73,
              column: 23
            },
            end: {
              line: 75,
              column: 3
            }
          },
          line: 73
        },
        "1": {
          name: "(anonymous_1)",
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
        "2": {
          name: "(anonymous_2)",
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
              column: 20
            },
            end: {
              line: 83,
              column: 3
            }
          },
          line: 81
        },
        "3": {
          name: "(anonymous_3)",
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
              column: 24
            },
            end: {
              line: 87,
              column: 3
            }
          },
          line: 85
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 89,
              column: 2
            },
            end: {
              line: 89,
              column: 3
            }
          },
          loc: {
            start: {
              line: 89,
              column: 21
            },
            end: {
              line: 91,
              column: 3
            }
          },
          line: 89
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 93,
              column: 2
            },
            end: {
              line: 93,
              column: 3
            }
          },
          loc: {
            start: {
              line: 93,
              column: 25
            },
            end: {
              line: 95,
              column: 3
            }
          },
          line: 93
        },
        "6": {
          name: "(anonymous_6)",
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
              column: 27
            },
            end: {
              line: 99,
              column: 3
            }
          },
          line: 97
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 103,
              column: 2
            },
            end: {
              line: 103,
              column: 3
            }
          },
          loc: {
            start: {
              line: 103,
              column: 18
            },
            end: {
              line: 105,
              column: 3
            }
          },
          line: 103
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 107,
              column: 2
            },
            end: {
              line: 107,
              column: 3
            }
          },
          loc: {
            start: {
              line: 107,
              column: 33
            },
            end: {
              line: 109,
              column: 3
            }
          },
          line: 107
        },
        "9": {
          name: "(anonymous_9)",
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
              column: 18
            },
            end: {
              line: 114,
              column: 3
            }
          },
          line: 111
        },
        "10": {
          name: "(anonymous_10)",
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
              column: 15
            },
            end: {
              line: 128,
              column: 3
            }
          },
          line: 116
        },
        "11": {
          name: "(anonymous_11)",
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
              column: 16
            },
            end: {
              line: 135,
              column: 3
            }
          },
          line: 132
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 137,
              column: 2
            },
            end: {
              line: 137,
              column: 3
            }
          },
          loc: {
            start: {
              line: 137,
              column: 19
            },
            end: {
              line: 143,
              column: 3
            }
          },
          line: 137
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 147,
              column: 2
            },
            end: {
              line: 147,
              column: 3
            }
          },
          loc: {
            start: {
              line: 147,
              column: 34
            },
            end: {
              line: 168,
              column: 3
            }
          },
          line: 147
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 148,
              column: 21
            },
            end: {
              line: 148,
              column: 22
            }
          },
          loc: {
            start: {
              line: 148,
              column: 33
            },
            end: {
              line: 167,
              column: 5
            }
          },
          line: 148
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 179,
              column: 24
            },
            end: {
              line: 179,
              column: 25
            }
          },
          loc: {
            start: {
              line: 179,
              column: 30
            },
            end: {
              line: 182,
              column: 1
            }
          },
          line: 179
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 104,
              column: 11
            },
            end: {
              line: 104,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 104,
              column: 11
            },
            end: {
              line: 104,
              column: 26
            }
          }, {
            start: {
              line: 104,
              column: 30
            },
            end: {
              line: 104,
              column: 48
            }
          }],
          line: 104
        },
        "1": {
          loc: {
            start: {
              line: 112,
              column: 15
            },
            end: {
              line: 112,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 112,
              column: 15
            },
            end: {
              line: 112,
              column: 23
            }
          }, {
            start: {
              line: 112,
              column: 27
            },
            end: {
              line: 112,
              column: 53
            }
          }],
          line: 112
        },
        "2": {
          loc: {
            start: {
              line: 122,
              column: 4
            },
            end: {
              line: 124,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 122,
              column: 4
            },
            end: {
              line: 124,
              column: 5
            }
          }, {
            start: {
              line: 122,
              column: 4
            },
            end: {
              line: 124,
              column: 5
            }
          }],
          line: 122
        },
        "3": {
          loc: {
            start: {
              line: 133,
              column: 11
            },
            end: {
              line: 134,
              column: 25
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 133,
              column: 11
            },
            end: {
              line: 133,
              column: 52
            }
          }, {
            start: {
              line: 134,
              column: 6
            },
            end: {
              line: 134,
              column: 25
            }
          }],
          line: 133
        },
        "4": {
          loc: {
            start: {
              line: 140,
              column: 4
            },
            end: {
              line: 142,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 140,
              column: 4
            },
            end: {
              line: 142,
              column: 5
            }
          }, {
            start: {
              line: 140,
              column: 4
            },
            end: {
              line: 142,
              column: 5
            }
          }],
          line: 140
        },
        "5": {
          loc: {
            start: {
              line: 140,
              column: 8
            },
            end: {
              line: 140,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 140,
              column: 8
            },
            end: {
              line: 140,
              column: 25
            }
          }, {
            start: {
              line: 140,
              column: 29
            },
            end: {
              line: 140,
              column: 48
            }
          }],
          line: 140
        },
        "6": {
          loc: {
            start: {
              line: 150,
              column: 22
            },
            end: {
              line: 150,
              column: 64
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 150,
              column: 51
            },
            end: {
              line: 150,
              column: 57
            }
          }, {
            start: {
              line: 150,
              column: 60
            },
            end: {
              line: 150,
              column: 64
            }
          }],
          line: 150
        },
        "7": {
          loc: {
            start: {
              line: 152,
              column: 6
            },
            end: {
              line: 154,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 152,
              column: 6
            },
            end: {
              line: 154,
              column: 7
            }
          }, {
            start: {
              line: 152,
              column: 6
            },
            end: {
              line: 154,
              column: 7
            }
          }],
          line: 152
        },
        "8": {
          loc: {
            start: {
              line: 152,
              column: 10
            },
            end: {
              line: 152,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 152,
              column: 10
            },
            end: {
              line: 152,
              column: 15
            }
          }, {
            start: {
              line: 152,
              column: 19
            },
            end: {
              line: 152,
              column: 46
            }
          }],
          line: 152
        },
        "9": {
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
              line: 156,
              column: 6
            },
            end: {
              line: 159,
              column: 7
            }
          }],
          line: 156
        },
        "10": {
          loc: {
            start: {
              line: 161,
              column: 6
            },
            end: {
              line: 166,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 161,
              column: 6
            },
            end: {
              line: 166,
              column: 7
            }
          }, {
            start: {
              line: 161,
              column: 6
            },
            end: {
              line: 166,
              column: 7
            }
          }],
          line: 161
        },
        "11": {
          loc: {
            start: {
              line: 162,
              column: 8
            },
            end: {
              line: 164,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 162,
              column: 8
            },
            end: {
              line: 164,
              column: 9
            }
          }, {
            start: {
              line: 162,
              column: 8
            },
            end: {
              line: 164,
              column: 9
            }
          }],
          line: 162
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
        "51": 0
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
        "15": 0
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
      _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
      hash: "ec5ccd7e9ed2e65061b969acf24f1583d508a067"
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

  var NAME = (cov_28z7zlrdsn.s[0]++, 'popover');
  var VERSION = (cov_28z7zlrdsn.s[1]++, '4.4.1');
  var DATA_KEY = (cov_28z7zlrdsn.s[2]++, 'bs.popover');
  var EVENT_KEY = (cov_28z7zlrdsn.s[3]++, "." + DATA_KEY);
  var JQUERY_NO_CONFLICT = (cov_28z7zlrdsn.s[4]++, $.fn[NAME]);
  var CLASS_PREFIX = (cov_28z7zlrdsn.s[5]++, 'bs-popover');
  var BSCLS_PREFIX_REGEX = (cov_28z7zlrdsn.s[6]++, new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g'));
  var Default = (cov_28z7zlrdsn.s[7]++, _objectSpread2(_objectSpread2({}, Tooltip.Default), {}, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  }));
  var DefaultType = (cov_28z7zlrdsn.s[8]++, _objectSpread2(_objectSpread2({}, Tooltip.DefaultType), {}, {
    content: '(string|element|function)'
  }));
  var ClassName = (cov_28z7zlrdsn.s[9]++, {
    FADE: 'fade',
    SHOW: 'show'
  });
  var Selector = (cov_28z7zlrdsn.s[10]++, {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  });
  var Event = (cov_28z7zlrdsn.s[11]++, {
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
  });
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      cov_28z7zlrdsn.f[7]++;
      cov_28z7zlrdsn.s[19]++;
      return (cov_28z7zlrdsn.b[0][0]++, this.getTitle()) || (cov_28z7zlrdsn.b[0][1]++, this._getContent());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      cov_28z7zlrdsn.f[8]++;
      cov_28z7zlrdsn.s[20]++;
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      cov_28z7zlrdsn.f[9]++;
      cov_28z7zlrdsn.s[21]++;
      this.tip = (cov_28z7zlrdsn.b[1][0]++, this.tip) || (cov_28z7zlrdsn.b[1][1]++, $(this.config.template)[0]);
      cov_28z7zlrdsn.s[22]++;
      return this.tip;
    };

    _proto.setContent = function setContent() {
      cov_28z7zlrdsn.f[10]++;
      var $tip = (cov_28z7zlrdsn.s[23]++, $(this.getTipElement())); // We use append for html objects to maintain js events

      cov_28z7zlrdsn.s[24]++;
      this.setElementContent($tip.find(Selector.TITLE), this.getTitle());
      var content = (cov_28z7zlrdsn.s[25]++, this._getContent());
      cov_28z7zlrdsn.s[26]++;

      if (typeof content === 'function') {
        cov_28z7zlrdsn.b[2][0]++;
        cov_28z7zlrdsn.s[27]++;
        content = content.call(this.element);
      } else {
        cov_28z7zlrdsn.b[2][1]++;
      }

      cov_28z7zlrdsn.s[28]++;
      this.setElementContent($tip.find(Selector.CONTENT), content);
      cov_28z7zlrdsn.s[29]++;
      $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      cov_28z7zlrdsn.f[11]++;
      cov_28z7zlrdsn.s[30]++;
      return (cov_28z7zlrdsn.b[3][0]++, this.element.getAttribute('data-content')) || (cov_28z7zlrdsn.b[3][1]++, this.config.content);
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      cov_28z7zlrdsn.f[12]++;
      var $tip = (cov_28z7zlrdsn.s[31]++, $(this.getTipElement()));
      var tabClass = (cov_28z7zlrdsn.s[32]++, $tip.attr('class').match(BSCLS_PREFIX_REGEX));
      cov_28z7zlrdsn.s[33]++;

      if ((cov_28z7zlrdsn.b[5][0]++, tabClass !== null) && (cov_28z7zlrdsn.b[5][1]++, tabClass.length > 0)) {
        cov_28z7zlrdsn.b[4][0]++;
        cov_28z7zlrdsn.s[34]++;
        $tip.removeClass(tabClass.join(''));
      } else {
        cov_28z7zlrdsn.b[4][1]++;
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      cov_28z7zlrdsn.f[13]++;
      cov_28z7zlrdsn.s[35]++;
      return this.each(function () {
        cov_28z7zlrdsn.f[14]++;
        var data = (cov_28z7zlrdsn.s[36]++, $(this).data(DATA_KEY));

        var _config = (cov_28z7zlrdsn.s[37]++, typeof config === 'object' ? (cov_28z7zlrdsn.b[6][0]++, config) : (cov_28z7zlrdsn.b[6][1]++, null));

        cov_28z7zlrdsn.s[38]++;

        if ((cov_28z7zlrdsn.b[8][0]++, !data) && (cov_28z7zlrdsn.b[8][1]++, /dispose|hide/.test(config))) {
          cov_28z7zlrdsn.b[7][0]++;
          cov_28z7zlrdsn.s[39]++;
          return;
        } else {
          cov_28z7zlrdsn.b[7][1]++;
        }

        cov_28z7zlrdsn.s[40]++;

        if (!data) {
          cov_28z7zlrdsn.b[9][0]++;
          cov_28z7zlrdsn.s[41]++;
          data = new Popover(this, _config);
          cov_28z7zlrdsn.s[42]++;
          $(this).data(DATA_KEY, data);
        } else {
          cov_28z7zlrdsn.b[9][1]++;
        }

        cov_28z7zlrdsn.s[43]++;

        if (typeof config === 'string') {
          cov_28z7zlrdsn.b[10][0]++;
          cov_28z7zlrdsn.s[44]++;

          if (typeof data[config] === 'undefined') {
            cov_28z7zlrdsn.b[11][0]++;
            cov_28z7zlrdsn.s[45]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_28z7zlrdsn.b[11][1]++;
          }

          cov_28z7zlrdsn.s[46]++;
          data[config]();
        } else {
          cov_28z7zlrdsn.b[10][1]++;
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        cov_28z7zlrdsn.f[0]++;
        cov_28z7zlrdsn.s[12]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_28z7zlrdsn.f[1]++;
        cov_28z7zlrdsn.s[13]++;
        return Default;
      }
    }, {
      key: "NAME",
      get: function get() {
        cov_28z7zlrdsn.f[2]++;
        cov_28z7zlrdsn.s[14]++;
        return NAME;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        cov_28z7zlrdsn.f[3]++;
        cov_28z7zlrdsn.s[15]++;
        return DATA_KEY;
      }
    }, {
      key: "Event",
      get: function get() {
        cov_28z7zlrdsn.f[4]++;
        cov_28z7zlrdsn.s[16]++;
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        cov_28z7zlrdsn.f[5]++;
        cov_28z7zlrdsn.s[17]++;
        return EVENT_KEY;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        cov_28z7zlrdsn.f[6]++;
        cov_28z7zlrdsn.s[18]++;
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


  cov_28z7zlrdsn.s[47]++;
  $.fn[NAME] = Popover._jQueryInterface;
  cov_28z7zlrdsn.s[48]++;
  $.fn[NAME].Constructor = Popover;
  cov_28z7zlrdsn.s[49]++;

  $.fn[NAME].noConflict = function () {
    cov_28z7zlrdsn.f[15]++;
    cov_28z7zlrdsn.s[50]++;
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    cov_28z7zlrdsn.s[51]++;
    return Popover._jQueryInterface;
  };

  return Popover;

})));
//# sourceMappingURL=popover.js.map

/*!
  * Bootstrap popover.js v4.6.0-2 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2021 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./tooltip.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './tooltip'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Popover = factory(global.jQuery, global.Tooltip));
}(this, (function ($, Tooltip) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
  var Tooltip__default = /*#__PURE__*/_interopDefaultLegacy(Tooltip);

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

  function _extends() {
    _extends = Object.assign || function (target) {
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

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function cov_28z7zlrdsn() {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/popover.js";
    var hash = "6964524ee7620f93b893f645b34c54549f1e7e83";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/popover.js",
      statementMap: {
        "0": {
          start: {
            line: 17,
            column: 13
          },
          end: {
            line: 17,
            column: 22
          }
        },
        "1": {
          start: {
            line: 18,
            column: 16
          },
          end: {
            line: 18,
            column: 23
          }
        },
        "2": {
          start: {
            line: 19,
            column: 17
          },
          end: {
            line: 19,
            column: 29
          }
        },
        "3": {
          start: {
            line: 20,
            column: 18
          },
          end: {
            line: 20,
            column: 32
          }
        },
        "4": {
          start: {
            line: 21,
            column: 27
          },
          end: {
            line: 21,
            column: 37
          }
        },
        "5": {
          start: {
            line: 22,
            column: 21
          },
          end: {
            line: 22,
            column: 33
          }
        },
        "6": {
          start: {
            line: 23,
            column: 27
          },
          end: {
            line: 23,
            column: 72
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
            column: 24
          },
          end: {
            line: 41,
            column: 30
          }
        },
        "10": {
          start: {
            line: 42,
            column: 24
          },
          end: {
            line: 42,
            column: 30
          }
        },
        "11": {
          start: {
            line: 44,
            column: 23
          },
          end: {
            line: 44,
            column: 40
          }
        },
        "12": {
          start: {
            line: 45,
            column: 25
          },
          end: {
            line: 45,
            column: 40
          }
        },
        "13": {
          start: {
            line: 47,
            column: 14
          },
          end: {
            line: 58,
            column: 1
          }
        },
        "14": {
          start: {
            line: 70,
            column: 4
          },
          end: {
            line: 70,
            column: 18
          }
        },
        "15": {
          start: {
            line: 74,
            column: 4
          },
          end: {
            line: 74,
            column: 18
          }
        },
        "16": {
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 78,
            column: 15
          }
        },
        "17": {
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 82,
            column: 19
          }
        },
        "18": {
          start: {
            line: 86,
            column: 4
          },
          end: {
            line: 86,
            column: 16
          }
        },
        "19": {
          start: {
            line: 90,
            column: 4
          },
          end: {
            line: 90,
            column: 20
          }
        },
        "20": {
          start: {
            line: 94,
            column: 4
          },
          end: {
            line: 94,
            column: 22
          }
        },
        "21": {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 100,
            column: 48
          }
        },
        "22": {
          start: {
            line: 104,
            column: 4
          },
          end: {
            line: 104,
            column: 69
          }
        },
        "23": {
          start: {
            line: 108,
            column: 4
          },
          end: {
            line: 108,
            column: 53
          }
        },
        "24": {
          start: {
            line: 109,
            column: 4
          },
          end: {
            line: 109,
            column: 19
          }
        },
        "25": {
          start: {
            line: 113,
            column: 17
          },
          end: {
            line: 113,
            column: 40
          }
        },
        "26": {
          start: {
            line: 116,
            column: 4
          },
          end: {
            line: 116,
            column: 70
          }
        },
        "27": {
          start: {
            line: 117,
            column: 18
          },
          end: {
            line: 117,
            column: 36
          }
        },
        "28": {
          start: {
            line: 118,
            column: 4
          },
          end: {
            line: 120,
            column: 5
          }
        },
        "29": {
          start: {
            line: 119,
            column: 6
          },
          end: {
            line: 119,
            column: 42
          }
        },
        "30": {
          start: {
            line: 122,
            column: 4
          },
          end: {
            line: 122,
            column: 64
          }
        },
        "31": {
          start: {
            line: 124,
            column: 4
          },
          end: {
            line: 124,
            column: 61
          }
        },
        "32": {
          start: {
            line: 130,
            column: 4
          },
          end: {
            line: 131,
            column: 25
          }
        },
        "33": {
          start: {
            line: 135,
            column: 17
          },
          end: {
            line: 135,
            column: 40
          }
        },
        "34": {
          start: {
            line: 136,
            column: 21
          },
          end: {
            line: 136,
            column: 65
          }
        },
        "35": {
          start: {
            line: 137,
            column: 4
          },
          end: {
            line: 139,
            column: 5
          }
        },
        "36": {
          start: {
            line: 138,
            column: 6
          },
          end: {
            line: 138,
            column: 41
          }
        },
        "37": {
          start: {
            line: 145,
            column: 4
          },
          end: {
            line: 165,
            column: 6
          }
        },
        "38": {
          start: {
            line: 146,
            column: 17
          },
          end: {
            line: 146,
            column: 39
          }
        },
        "39": {
          start: {
            line: 147,
            column: 22
          },
          end: {
            line: 147,
            column: 64
          }
        },
        "40": {
          start: {
            line: 149,
            column: 6
          },
          end: {
            line: 151,
            column: 7
          }
        },
        "41": {
          start: {
            line: 150,
            column: 8
          },
          end: {
            line: 150,
            column: 14
          }
        },
        "42": {
          start: {
            line: 153,
            column: 6
          },
          end: {
            line: 156,
            column: 7
          }
        },
        "43": {
          start: {
            line: 154,
            column: 8
          },
          end: {
            line: 154,
            column: 41
          }
        },
        "44": {
          start: {
            line: 155,
            column: 8
          },
          end: {
            line: 155,
            column: 36
          }
        },
        "45": {
          start: {
            line: 158,
            column: 6
          },
          end: {
            line: 164,
            column: 7
          }
        },
        "46": {
          start: {
            line: 159,
            column: 8
          },
          end: {
            line: 161,
            column: 9
          }
        },
        "47": {
          start: {
            line: 160,
            column: 10
          },
          end: {
            line: 160,
            column: 60
          }
        },
        "48": {
          start: {
            line: 163,
            column: 8
          },
          end: {
            line: 163,
            column: 22
          }
        },
        "49": {
          start: {
            line: 175,
            column: 0
          },
          end: {
            line: 175,
            column: 37
          }
        },
        "50": {
          start: {
            line: 176,
            column: 0
          },
          end: {
            line: 176,
            column: 32
          }
        },
        "51": {
          start: {
            line: 177,
            column: 0
          },
          end: {
            line: 180,
            column: 1
          }
        },
        "52": {
          start: {
            line: 178,
            column: 2
          },
          end: {
            line: 178,
            column: 33
          }
        },
        "53": {
          start: {
            line: 179,
            column: 2
          },
          end: {
            line: 179,
            column: 33
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 69,
              column: 2
            },
            end: {
              line: 69,
              column: 3
            }
          },
          loc: {
            start: {
              line: 69,
              column: 23
            },
            end: {
              line: 71,
              column: 3
            }
          },
          line: 69
        },
        "1": {
          name: "(anonymous_1)",
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
        "2": {
          name: "(anonymous_2)",
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
              column: 20
            },
            end: {
              line: 79,
              column: 3
            }
          },
          line: 77
        },
        "3": {
          name: "(anonymous_3)",
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
              column: 24
            },
            end: {
              line: 83,
              column: 3
            }
          },
          line: 81
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
              column: 21
            },
            end: {
              line: 87,
              column: 3
            }
          },
          line: 85
        },
        "5": {
          name: "(anonymous_5)",
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
              column: 25
            },
            end: {
              line: 91,
              column: 3
            }
          },
          line: 89
        },
        "6": {
          name: "(anonymous_6)",
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
              column: 27
            },
            end: {
              line: 95,
              column: 3
            }
          },
          line: 93
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 99,
              column: 2
            },
            end: {
              line: 99,
              column: 3
            }
          },
          loc: {
            start: {
              line: 99,
              column: 18
            },
            end: {
              line: 101,
              column: 3
            }
          },
          line: 99
        },
        "8": {
          name: "(anonymous_8)",
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
              column: 33
            },
            end: {
              line: 105,
              column: 3
            }
          },
          line: 103
        },
        "9": {
          name: "(anonymous_9)",
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
              column: 18
            },
            end: {
              line: 110,
              column: 3
            }
          },
          line: 107
        },
        "10": {
          name: "(anonymous_10)",
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
        "11": {
          name: "(anonymous_11)",
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
        "12": {
          name: "(anonymous_12)",
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
              line: 140,
              column: 3
            }
          },
          line: 134
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 144,
              column: 2
            },
            end: {
              line: 144,
              column: 3
            }
          },
          loc: {
            start: {
              line: 144,
              column: 34
            },
            end: {
              line: 166,
              column: 3
            }
          },
          line: 144
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 145,
              column: 21
            },
            end: {
              line: 145,
              column: 22
            }
          },
          loc: {
            start: {
              line: 145,
              column: 33
            },
            end: {
              line: 165,
              column: 5
            }
          },
          line: 145
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 177,
              column: 24
            },
            end: {
              line: 177,
              column: 25
            }
          },
          loc: {
            start: {
              line: 177,
              column: 30
            },
            end: {
              line: 180,
              column: 1
            }
          },
          line: 177
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 100,
              column: 11
            },
            end: {
              line: 100,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 100,
              column: 11
            },
            end: {
              line: 100,
              column: 26
            }
          }, {
            start: {
              line: 100,
              column: 30
            },
            end: {
              line: 100,
              column: 48
            }
          }],
          line: 100
        },
        "1": {
          loc: {
            start: {
              line: 108,
              column: 15
            },
            end: {
              line: 108,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 108,
              column: 15
            },
            end: {
              line: 108,
              column: 23
            }
          }, {
            start: {
              line: 108,
              column: 27
            },
            end: {
              line: 108,
              column: 53
            }
          }],
          line: 108
        },
        "2": {
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
        "3": {
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
        "4": {
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
              line: 137,
              column: 4
            },
            end: {
              line: 139,
              column: 5
            }
          }],
          line: 137
        },
        "5": {
          loc: {
            start: {
              line: 137,
              column: 8
            },
            end: {
              line: 137,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 137,
              column: 8
            },
            end: {
              line: 137,
              column: 25
            }
          }, {
            start: {
              line: 137,
              column: 29
            },
            end: {
              line: 137,
              column: 48
            }
          }],
          line: 137
        },
        "6": {
          loc: {
            start: {
              line: 147,
              column: 22
            },
            end: {
              line: 147,
              column: 64
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 147,
              column: 51
            },
            end: {
              line: 147,
              column: 57
            }
          }, {
            start: {
              line: 147,
              column: 60
            },
            end: {
              line: 147,
              column: 64
            }
          }],
          line: 147
        },
        "7": {
          loc: {
            start: {
              line: 149,
              column: 6
            },
            end: {
              line: 151,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 149,
              column: 6
            },
            end: {
              line: 151,
              column: 7
            }
          }, {
            start: {
              line: 149,
              column: 6
            },
            end: {
              line: 151,
              column: 7
            }
          }],
          line: 149
        },
        "8": {
          loc: {
            start: {
              line: 149,
              column: 10
            },
            end: {
              line: 149,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 149,
              column: 10
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
              column: 46
            }
          }],
          line: 149
        },
        "9": {
          loc: {
            start: {
              line: 153,
              column: 6
            },
            end: {
              line: 156,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 153,
              column: 6
            },
            end: {
              line: 156,
              column: 7
            }
          }, {
            start: {
              line: 153,
              column: 6
            },
            end: {
              line: 156,
              column: 7
            }
          }],
          line: 153
        },
        "10": {
          loc: {
            start: {
              line: 158,
              column: 6
            },
            end: {
              line: 164,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 158,
              column: 6
            },
            end: {
              line: 164,
              column: 7
            }
          }, {
            start: {
              line: 158,
              column: 6
            },
            end: {
              line: 164,
              column: 7
            }
          }],
          line: 158
        },
        "11": {
          loc: {
            start: {
              line: 159,
              column: 8
            },
            end: {
              line: 161,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 159,
              column: 8
            },
            end: {
              line: 161,
              column: 9
            }
          }, {
            start: {
              line: 159,
              column: 8
            },
            end: {
              line: 161,
              column: 9
            }
          }],
          line: 159
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
        "53": 0
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
      _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
      hash: "6964524ee7620f93b893f645b34c54549f1e7e83"
    };
    var coverage = global[gcv] || (global[gcv] = {});

    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }

    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_28z7zlrdsn = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }

  cov_28z7zlrdsn();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_28z7zlrdsn().s[0]++, 'popover');
  var VERSION = (cov_28z7zlrdsn().s[1]++, '4.6.0');
  var DATA_KEY = (cov_28z7zlrdsn().s[2]++, 'bs.popover');
  var EVENT_KEY = (cov_28z7zlrdsn().s[3]++, "." + DATA_KEY);
  var JQUERY_NO_CONFLICT = (cov_28z7zlrdsn().s[4]++, $__default['default'].fn[NAME]);
  var CLASS_PREFIX = (cov_28z7zlrdsn().s[5]++, 'bs-popover');
  var BSCLS_PREFIX_REGEX = (cov_28z7zlrdsn().s[6]++, new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g'));
  var Default = (cov_28z7zlrdsn().s[7]++, _extends({}, Tooltip__default['default'].Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  }));
  var DefaultType = (cov_28z7zlrdsn().s[8]++, _extends({}, Tooltip__default['default'].DefaultType, {
    content: '(string|element|function)'
  }));
  var CLASS_NAME_FADE = (cov_28z7zlrdsn().s[9]++, 'fade');
  var CLASS_NAME_SHOW = (cov_28z7zlrdsn().s[10]++, 'show');
  var SELECTOR_TITLE = (cov_28z7zlrdsn().s[11]++, '.popover-header');
  var SELECTOR_CONTENT = (cov_28z7zlrdsn().s[12]++, '.popover-body');
  var Event = (cov_28z7zlrdsn().s[13]++, {
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
      cov_28z7zlrdsn().f[7]++;
      cov_28z7zlrdsn().s[21]++;
      return (cov_28z7zlrdsn().b[0][0]++, this.getTitle()) || (cov_28z7zlrdsn().b[0][1]++, this._getContent());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      cov_28z7zlrdsn().f[8]++;
      cov_28z7zlrdsn().s[22]++;
      $__default['default'](this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      cov_28z7zlrdsn().f[9]++;
      cov_28z7zlrdsn().s[23]++;
      this.tip = (cov_28z7zlrdsn().b[1][0]++, this.tip) || (cov_28z7zlrdsn().b[1][1]++, $__default['default'](this.config.template)[0]);
      cov_28z7zlrdsn().s[24]++;
      return this.tip;
    };

    _proto.setContent = function setContent() {
      cov_28z7zlrdsn().f[10]++;
      var $tip = (cov_28z7zlrdsn().s[25]++, $__default['default'](this.getTipElement())); // We use append for html objects to maintain js events

      cov_28z7zlrdsn().s[26]++;
      this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());
      var content = (cov_28z7zlrdsn().s[27]++, this._getContent());
      cov_28z7zlrdsn().s[28]++;

      if (typeof content === 'function') {
        cov_28z7zlrdsn().b[2][0]++;
        cov_28z7zlrdsn().s[29]++;
        content = content.call(this.element);
      } else {
        cov_28z7zlrdsn().b[2][1]++;
      }

      cov_28z7zlrdsn().s[30]++;
      this.setElementContent($tip.find(SELECTOR_CONTENT), content);
      cov_28z7zlrdsn().s[31]++;
      $tip.removeClass(CLASS_NAME_FADE + " " + CLASS_NAME_SHOW);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      cov_28z7zlrdsn().f[11]++;
      cov_28z7zlrdsn().s[32]++;
      return (cov_28z7zlrdsn().b[3][0]++, this.element.getAttribute('data-content')) || (cov_28z7zlrdsn().b[3][1]++, this.config.content);
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      cov_28z7zlrdsn().f[12]++;
      var $tip = (cov_28z7zlrdsn().s[33]++, $__default['default'](this.getTipElement()));
      var tabClass = (cov_28z7zlrdsn().s[34]++, $tip.attr('class').match(BSCLS_PREFIX_REGEX));
      cov_28z7zlrdsn().s[35]++;

      if ((cov_28z7zlrdsn().b[5][0]++, tabClass !== null) && (cov_28z7zlrdsn().b[5][1]++, tabClass.length > 0)) {
        cov_28z7zlrdsn().b[4][0]++;
        cov_28z7zlrdsn().s[36]++;
        $tip.removeClass(tabClass.join(''));
      } else {
        cov_28z7zlrdsn().b[4][1]++;
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      cov_28z7zlrdsn().f[13]++;
      cov_28z7zlrdsn().s[37]++;
      return this.each(function () {
        cov_28z7zlrdsn().f[14]++;
        var data = (cov_28z7zlrdsn().s[38]++, $__default['default'](this).data(DATA_KEY));

        var _config = (cov_28z7zlrdsn().s[39]++, typeof config === 'object' ? (cov_28z7zlrdsn().b[6][0]++, config) : (cov_28z7zlrdsn().b[6][1]++, null));

        cov_28z7zlrdsn().s[40]++;

        if ((cov_28z7zlrdsn().b[8][0]++, !data) && (cov_28z7zlrdsn().b[8][1]++, /dispose|hide/.test(config))) {
          cov_28z7zlrdsn().b[7][0]++;
          cov_28z7zlrdsn().s[41]++;
          return;
        } else {
          cov_28z7zlrdsn().b[7][1]++;
        }

        cov_28z7zlrdsn().s[42]++;

        if (!data) {
          cov_28z7zlrdsn().b[9][0]++;
          cov_28z7zlrdsn().s[43]++;
          data = new Popover(this, _config);
          cov_28z7zlrdsn().s[44]++;
          $__default['default'](this).data(DATA_KEY, data);
        } else {
          cov_28z7zlrdsn().b[9][1]++;
        }

        cov_28z7zlrdsn().s[45]++;

        if (typeof config === 'string') {
          cov_28z7zlrdsn().b[10][0]++;
          cov_28z7zlrdsn().s[46]++;

          if (typeof data[config] === 'undefined') {
            cov_28z7zlrdsn().b[11][0]++;
            cov_28z7zlrdsn().s[47]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_28z7zlrdsn().b[11][1]++;
          }

          cov_28z7zlrdsn().s[48]++;
          data[config]();
        } else {
          cov_28z7zlrdsn().b[10][1]++;
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        cov_28z7zlrdsn().f[0]++;
        cov_28z7zlrdsn().s[14]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_28z7zlrdsn().f[1]++;
        cov_28z7zlrdsn().s[15]++;
        return Default;
      }
    }, {
      key: "NAME",
      get: function get() {
        cov_28z7zlrdsn().f[2]++;
        cov_28z7zlrdsn().s[16]++;
        return NAME;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        cov_28z7zlrdsn().f[3]++;
        cov_28z7zlrdsn().s[17]++;
        return DATA_KEY;
      }
    }, {
      key: "Event",
      get: function get() {
        cov_28z7zlrdsn().f[4]++;
        cov_28z7zlrdsn().s[18]++;
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        cov_28z7zlrdsn().f[5]++;
        cov_28z7zlrdsn().s[19]++;
        return EVENT_KEY;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        cov_28z7zlrdsn().f[6]++;
        cov_28z7zlrdsn().s[20]++;
        return DefaultType;
      }
    }]);

    return Popover;
  }(Tooltip__default['default']);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  cov_28z7zlrdsn().s[49]++;
  $__default['default'].fn[NAME] = Popover._jQueryInterface;
  cov_28z7zlrdsn().s[50]++;
  $__default['default'].fn[NAME].Constructor = Popover;
  cov_28z7zlrdsn().s[51]++;

  $__default['default'].fn[NAME].noConflict = function () {
    cov_28z7zlrdsn().f[15]++;
    cov_28z7zlrdsn().s[52]++;
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    cov_28z7zlrdsn().s[53]++;
    return Popover._jQueryInterface;
  };

  return Popover;

})));
//# sourceMappingURL=popover.js.map

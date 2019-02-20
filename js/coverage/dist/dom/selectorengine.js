/*!
  * Bootstrap selectorengine.js v4.3.1-0 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2019 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./polyfill.js'), require('../util.js')) :
  typeof define === 'function' && define.amd ? define(['./polyfill.js', '../util.js'], factory) :
  (global = global || self, global.SelectorEngine = factory(global.Polyfill, global.Util));
}(this, function (Polyfill, Util) { 'use strict';

  Polyfill = Polyfill && Polyfill.hasOwnProperty('default') ? Polyfill['default'] : Polyfill;
  Util = Util && Util.hasOwnProperty('default') ? Util['default'] : Util;

  var cov_2gtdqki14c = function () {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/dom/selectorEngine.js";
    var hash = "7c6f47783d3e718cab20f79fc74f90bba4f552eb";

    var Function = function () {}.constructor;

    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/dom/selectorEngine.js",
      statementMap: {
        "0": {
          start: {
            line: 17,
            column: 15
          },
          end: {
            line: 17,
            column: 28
          }
        },
        "1": {
          start: {
            line: 18,
            column: 16
          },
          end: {
            line: 18,
            column: 32
          }
        },
        "2": {
          start: {
            line: 19,
            column: 18
          },
          end: {
            line: 19,
            column: 19
          }
        },
        "3": {
          start: {
            line: 21,
            column: 23
          },
          end: {
            line: 97,
            column: 1
          }
        },
        "4": {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 23,
            column: 36
          }
        },
        "5": {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        },
        "6": {
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 28,
            column: 17
          }
        },
        "7": {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 31,
            column: 41
          }
        },
        "8": {
          start: {
            line: 35,
            column: 4
          },
          end: {
            line: 37,
            column: 5
          }
        },
        "9": {
          start: {
            line: 36,
            column: 6
          },
          end: {
            line: 36,
            column: 17
          }
        },
        "10": {
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 39,
            column: 42
          }
        },
        "11": {
          start: {
            line: 43,
            column: 4
          },
          end: {
            line: 45,
            column: 5
          }
        },
        "12": {
          start: {
            line: 44,
            column: 6
          },
          end: {
            line: 44,
            column: 17
          }
        },
        "13": {
          start: {
            line: 47,
            column: 21
          },
          end: {
            line: 47,
            column: 53
          }
        },
        "14": {
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 49,
            column: 68
          }
        },
        "15": {
          start: {
            line: 49,
            column: 38
          },
          end: {
            line: 49,
            column: 67
          }
        },
        "16": {
          start: {
            line: 53,
            column: 4
          },
          end: {
            line: 55,
            column: 5
          }
        },
        "17": {
          start: {
            line: 54,
            column: 6
          },
          end: {
            line: 54,
            column: 17
          }
        },
        "18": {
          start: {
            line: 57,
            column: 20
          },
          end: {
            line: 57,
            column: 22
          }
        },
        "19": {
          start: {
            line: 58,
            column: 19
          },
          end: {
            line: 58,
            column: 37
          }
        },
        "20": {
          start: {
            line: 60,
            column: 4
          },
          end: {
            line: 66,
            column: 5
          }
        },
        "21": {
          start: {
            line: 61,
            column: 6
          },
          end: {
            line: 63,
            column: 7
          }
        },
        "22": {
          start: {
            line: 62,
            column: 8
          },
          end: {
            line: 62,
            column: 30
          }
        },
        "23": {
          start: {
            line: 65,
            column: 6
          },
          end: {
            line: 65,
            column: 36
          }
        },
        "24": {
          start: {
            line: 68,
            column: 4
          },
          end: {
            line: 68,
            column: 18
          }
        },
        "25": {
          start: {
            line: 72,
            column: 4
          },
          end: {
            line: 74,
            column: 5
          }
        },
        "26": {
          start: {
            line: 73,
            column: 6
          },
          end: {
            line: 73,
            column: 17
          }
        },
        "27": {
          start: {
            line: 76,
            column: 4
          },
          end: {
            line: 76,
            column: 36
          }
        },
        "28": {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 82,
            column: 5
          }
        },
        "29": {
          start: {
            line: 81,
            column: 6
          },
          end: {
            line: 81,
            column: 17
          }
        },
        "30": {
          start: {
            line: 84,
            column: 21
          },
          end: {
            line: 84,
            column: 23
          }
        },
        "31": {
          start: {
            line: 85,
            column: 19
          },
          end: {
            line: 85,
            column: 42
          }
        },
        "32": {
          start: {
            line: 87,
            column: 4
          },
          end: {
            line: 93,
            column: 5
          }
        },
        "33": {
          start: {
            line: 88,
            column: 6
          },
          end: {
            line: 90,
            column: 7
          }
        },
        "34": {
          start: {
            line: 89,
            column: 8
          },
          end: {
            line: 89,
            column: 31
          }
        },
        "35": {
          start: {
            line: 92,
            column: 6
          },
          end: {
            line: 92,
            column: 41
          }
        },
        "36": {
          start: {
            line: 95,
            column: 4
          },
          end: {
            line: 95,
            column: 19
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 22,
              column: 2
            },
            end: {
              line: 22,
              column: 3
            }
          },
          loc: {
            start: {
              line: 22,
              column: 29
            },
            end: {
              line: 24,
              column: 3
            }
          },
          line: 22
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 26,
              column: 2
            },
            end: {
              line: 26,
              column: 3
            }
          },
          loc: {
            start: {
              line: 26,
              column: 53
            },
            end: {
              line: 32,
              column: 3
            }
          },
          line: 26
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 34,
              column: 2
            },
            end: {
              line: 34,
              column: 3
            }
          },
          loc: {
            start: {
              line: 34,
              column: 56
            },
            end: {
              line: 40,
              column: 3
            }
          },
          line: 34
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 42,
              column: 2
            },
            end: {
              line: 42,
              column: 3
            }
          },
          loc: {
            start: {
              line: 42,
              column: 30
            },
            end: {
              line: 50,
              column: 3
            }
          },
          line: 42
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 49,
              column: 27
            },
            end: {
              line: 49,
              column: 28
            }
          },
          loc: {
            start: {
              line: 49,
              column: 38
            },
            end: {
              line: 49,
              column: 67
            }
          },
          line: 49
        },
        "5": {
          name: "(anonymous_5)",
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
              column: 29
            },
            end: {
              line: 69,
              column: 3
            }
          },
          line: 52
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 71,
              column: 2
            },
            end: {
              line: 71,
              column: 3
            }
          },
          loc: {
            start: {
              line: 71,
              column: 29
            },
            end: {
              line: 77,
              column: 3
            }
          },
          line: 71
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 79,
              column: 2
            },
            end: {
              line: 79,
              column: 3
            }
          },
          loc: {
            start: {
              line: 79,
              column: 26
            },
            end: {
              line: 96,
              column: 3
            }
          },
          line: 79
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 26,
              column: 17
            },
            end: {
              line: 26,
              column: 51
            }
          },
          type: "default-arg",
          locations: [{
            start: {
              line: 26,
              column: 27
            },
            end: {
              line: 26,
              column: 51
            }
          }],
          line: 26
        },
        "1": {
          loc: {
            start: {
              line: 27,
              column: 4
            },
            end: {
              line: 29,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 27,
              column: 4
            },
            end: {
              line: 29,
              column: 5
            }
          }, {
            start: {
              line: 27,
              column: 4
            },
            end: {
              line: 29,
              column: 5
            }
          }],
          line: 27
        },
        "2": {
          loc: {
            start: {
              line: 34,
              column: 20
            },
            end: {
              line: 34,
              column: 54
            }
          },
          type: "default-arg",
          locations: [{
            start: {
              line: 34,
              column: 30
            },
            end: {
              line: 34,
              column: 54
            }
          }],
          line: 34
        },
        "3": {
          loc: {
            start: {
              line: 35,
              column: 4
            },
            end: {
              line: 37,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 35,
              column: 4
            },
            end: {
              line: 37,
              column: 5
            }
          }, {
            start: {
              line: 35,
              column: 4
            },
            end: {
              line: 37,
              column: 5
            }
          }],
          line: 35
        },
        "4": {
          loc: {
            start: {
              line: 43,
              column: 4
            },
            end: {
              line: 45,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 43,
              column: 4
            },
            end: {
              line: 45,
              column: 5
            }
          }, {
            start: {
              line: 43,
              column: 4
            },
            end: {
              line: 45,
              column: 5
            }
          }],
          line: 43
        },
        "5": {
          loc: {
            start: {
              line: 53,
              column: 4
            },
            end: {
              line: 55,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 53,
              column: 4
            },
            end: {
              line: 55,
              column: 5
            }
          }, {
            start: {
              line: 53,
              column: 4
            },
            end: {
              line: 55,
              column: 5
            }
          }],
          line: 53
        },
        "6": {
          loc: {
            start: {
              line: 60,
              column: 11
            },
            end: {
              line: 60,
              column: 97
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 60,
              column: 11
            },
            end: {
              line: 60,
              column: 19
            }
          }, {
            start: {
              line: 60,
              column: 23
            },
            end: {
              line: 60,
              column: 62
            }
          }, {
            start: {
              line: 60,
              column: 66
            },
            end: {
              line: 60,
              column: 97
            }
          }],
          line: 60
        },
        "7": {
          loc: {
            start: {
              line: 61,
              column: 6
            },
            end: {
              line: 63,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 61,
              column: 6
            },
            end: {
              line: 63,
              column: 7
            }
          }, {
            start: {
              line: 61,
              column: 6
            },
            end: {
              line: 63,
              column: 7
            }
          }],
          line: 61
        },
        "8": {
          loc: {
            start: {
              line: 72,
              column: 4
            },
            end: {
              line: 74,
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
              line: 74,
              column: 5
            }
          }, {
            start: {
              line: 72,
              column: 4
            },
            end: {
              line: 74,
              column: 5
            }
          }],
          line: 72
        },
        "9": {
          loc: {
            start: {
              line: 80,
              column: 4
            },
            end: {
              line: 82,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 80,
              column: 4
            },
            end: {
              line: 82,
              column: 5
            }
          }, {
            start: {
              line: 80,
              column: 4
            },
            end: {
              line: 82,
              column: 5
            }
          }],
          line: 80
        },
        "10": {
          loc: {
            start: {
              line: 87,
              column: 11
            },
            end: {
              line: 87,
              column: 97
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 87,
              column: 11
            },
            end: {
              line: 87,
              column: 19
            }
          }, {
            start: {
              line: 87,
              column: 23
            },
            end: {
              line: 87,
              column: 62
            }
          }, {
            start: {
              line: 87,
              column: 66
            },
            end: {
              line: 87,
              column: 97
            }
          }],
          line: 87
        },
        "11": {
          loc: {
            start: {
              line: 88,
              column: 6
            },
            end: {
              line: 90,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 88,
              column: 6
            },
            end: {
              line: 90,
              column: 7
            }
          }, {
            start: {
              line: 88,
              column: 6
            },
            end: {
              line: 90,
              column: 7
            }
          }],
          line: 88
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
        "36": 0
      },
      f: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0
      },
      b: {
        "0": [0],
        "1": [0, 0],
        "2": [0],
        "3": [0, 0],
        "4": [0, 0],
        "5": [0, 0],
        "6": [0, 0, 0],
        "7": [0, 0],
        "8": [0, 0],
        "9": [0, 0],
        "10": [0, 0, 0],
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

  var findFn = (cov_2gtdqki14c.s[0]++, Polyfill.find);

  var _findOne = (cov_2gtdqki14c.s[1]++, Polyfill.findOne);

  var NODE_TEXT = (cov_2gtdqki14c.s[2]++, 3);
  var SelectorEngine = (cov_2gtdqki14c.s[3]++, {
    matches: function matches(element, selector) {
      cov_2gtdqki14c.f[0]++;
      cov_2gtdqki14c.s[4]++;
      return element.matches(selector);
    },
    find: function find(selector, element) {
      if (element === void 0) {
        element = (cov_2gtdqki14c.b[0][0]++, document.documentElement);
      }

      cov_2gtdqki14c.f[1]++;
      cov_2gtdqki14c.s[5]++;

      if (typeof selector !== 'string') {
        cov_2gtdqki14c.b[1][0]++;
        cov_2gtdqki14c.s[6]++;
        return null;
      } else {
        cov_2gtdqki14c.b[1][1]++;
      }

      cov_2gtdqki14c.s[7]++;
      return findFn.call(element, selector);
    },
    findOne: function findOne(selector, element) {
      if (element === void 0) {
        element = (cov_2gtdqki14c.b[2][0]++, document.documentElement);
      }

      cov_2gtdqki14c.f[2]++;
      cov_2gtdqki14c.s[8]++;

      if (typeof selector !== 'string') {
        cov_2gtdqki14c.b[3][0]++;
        cov_2gtdqki14c.s[9]++;
        return null;
      } else {
        cov_2gtdqki14c.b[3][1]++;
      }

      cov_2gtdqki14c.s[10]++;
      return _findOne.call(element, selector);
    },
    children: function children(element, selector) {
      var _this = this;

      cov_2gtdqki14c.f[3]++;
      cov_2gtdqki14c.s[11]++;

      if (typeof selector !== 'string') {
        cov_2gtdqki14c.b[4][0]++;
        cov_2gtdqki14c.s[12]++;
        return null;
      } else {
        cov_2gtdqki14c.b[4][1]++;
      }

      var children = (cov_2gtdqki14c.s[13]++, Util.makeArray(element.children));
      cov_2gtdqki14c.s[14]++;
      return children.filter(function (child) {
        cov_2gtdqki14c.f[4]++;
        cov_2gtdqki14c.s[15]++;
        return _this.matches(child, selector);
      });
    },
    parents: function parents(element, selector) {
      cov_2gtdqki14c.f[5]++;
      cov_2gtdqki14c.s[16]++;

      if (typeof selector !== 'string') {
        cov_2gtdqki14c.b[5][0]++;
        cov_2gtdqki14c.s[17]++;
        return null;
      } else {
        cov_2gtdqki14c.b[5][1]++;
      }

      var parents = (cov_2gtdqki14c.s[18]++, []);
      var ancestor = (cov_2gtdqki14c.s[19]++, element.parentNode);
      cov_2gtdqki14c.s[20]++;

      while ((cov_2gtdqki14c.b[6][0]++, ancestor) && (cov_2gtdqki14c.b[6][1]++, ancestor.nodeType === Node.ELEMENT_NODE) && (cov_2gtdqki14c.b[6][2]++, ancestor.nodeType !== NODE_TEXT)) {
        cov_2gtdqki14c.s[21]++;

        if (this.matches(ancestor, selector)) {
          cov_2gtdqki14c.b[7][0]++;
          cov_2gtdqki14c.s[22]++;
          parents.push(ancestor);
        } else {
          cov_2gtdqki14c.b[7][1]++;
        }

        cov_2gtdqki14c.s[23]++;
        ancestor = ancestor.parentNode;
      }

      cov_2gtdqki14c.s[24]++;
      return parents;
    },
    closest: function closest(element, selector) {
      cov_2gtdqki14c.f[6]++;
      cov_2gtdqki14c.s[25]++;

      if (typeof selector !== 'string') {
        cov_2gtdqki14c.b[8][0]++;
        cov_2gtdqki14c.s[26]++;
        return null;
      } else {
        cov_2gtdqki14c.b[8][1]++;
      }

      cov_2gtdqki14c.s[27]++;
      return element.closest(selector);
    },
    prev: function prev(element, selector) {
      cov_2gtdqki14c.f[7]++;
      cov_2gtdqki14c.s[28]++;

      if (typeof selector !== 'string') {
        cov_2gtdqki14c.b[9][0]++;
        cov_2gtdqki14c.s[29]++;
        return null;
      } else {
        cov_2gtdqki14c.b[9][1]++;
      }

      var siblings = (cov_2gtdqki14c.s[30]++, []);
      var previous = (cov_2gtdqki14c.s[31]++, element.previousSibling);
      cov_2gtdqki14c.s[32]++;

      while ((cov_2gtdqki14c.b[10][0]++, previous) && (cov_2gtdqki14c.b[10][1]++, previous.nodeType === Node.ELEMENT_NODE) && (cov_2gtdqki14c.b[10][2]++, previous.nodeType !== NODE_TEXT)) {
        cov_2gtdqki14c.s[33]++;

        if (this.matches(previous, selector)) {
          cov_2gtdqki14c.b[11][0]++;
          cov_2gtdqki14c.s[34]++;
          siblings.push(previous);
        } else {
          cov_2gtdqki14c.b[11][1]++;
        }

        cov_2gtdqki14c.s[35]++;
        previous = previous.previousSibling;
      }

      cov_2gtdqki14c.s[36]++;
      return siblings;
    }
  });

  return SelectorEngine;

}));
//# sourceMappingURL=selectorengine.js.map

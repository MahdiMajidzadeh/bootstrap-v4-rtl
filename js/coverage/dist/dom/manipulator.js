/*!
  * Bootstrap manipulator.js v4.3.1-0 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2019 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Manipulator = factory());
}(this, function () { 'use strict';

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

  var cov_16m0x9fi2r = function () {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/dom/manipulator.js";
    var hash = "9f20037b21f35a42addfad231e9d2f3dd6132f69";

    var Function = function () {}.constructor;

    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/dom/manipulator.js",
      statementMap: {
        "0": {
          start: {
            line: 8,
            column: 21
          },
          end: {
            line: 8,
            column: 29
          }
        },
        "1": {
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        },
        "2": {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 12,
            column: 15
          }
        },
        "3": {
          start: {
            line: 13,
            column: 9
          },
          end: {
            line: 21,
            column: 3
          }
        },
        "4": {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 14,
            column: 16
          }
        },
        "5": {
          start: {
            line: 15,
            column: 9
          },
          end: {
            line: 21,
            column: 3
          }
        },
        "6": {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 15
          }
        },
        "7": {
          start: {
            line: 17,
            column: 9
          },
          end: {
            line: 21,
            column: 3
          }
        },
        "8": {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 18,
            column: 22
          }
        },
        "9": {
          start: {
            line: 19,
            column: 9
          },
          end: {
            line: 21,
            column: 3
          }
        },
        "10": {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 20,
            column: 15
          }
        },
        "11": {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 23,
            column: 12
          }
        },
        "12": {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 27,
            column: 62
          }
        },
        "13": {
          start: {
            line: 27,
            column: 44
          },
          end: {
            line: 27,
            column: 61
          }
        },
        "14": {
          start: {
            line: 30,
            column: 20
          },
          end: {
            line: 89,
            column: 1
          }
        },
        "15": {
          start: {
            line: 32,
            column: 4
          },
          end: {
            line: 32,
            column: 64
          }
        },
        "16": {
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 36,
            column: 60
          }
        },
        "17": {
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 42,
            column: 5
          }
        },
        "18": {
          start: {
            line: 41,
            column: 6
          },
          end: {
            line: 41,
            column: 15
          }
        },
        "19": {
          start: {
            line: 44,
            column: 23
          },
          end: {
            line: 46,
            column: 5
          }
        },
        "20": {
          start: {
            line: 48,
            column: 4
          },
          end: {
            line: 51,
            column: 8
          }
        },
        "21": {
          start: {
            line: 50,
            column: 8
          },
          end: {
            line: 50,
            column: 56
          }
        },
        "22": {
          start: {
            line: 53,
            column: 4
          },
          end: {
            line: 53,
            column: 21
          }
        },
        "23": {
          start: {
            line: 57,
            column: 4
          },
          end: {
            line: 59,
            column: 5
          }
        },
        "24": {
          start: {
            line: 63,
            column: 17
          },
          end: {
            line: 63,
            column: 48
          }
        },
        "25": {
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 68,
            column: 5
          }
        },
        "26": {
          start: {
            line: 72,
            column: 4
          },
          end: {
            line: 75,
            column: 5
          }
        },
        "27": {
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 81,
            column: 5
          }
        },
        "28": {
          start: {
            line: 80,
            column: 6
          },
          end: {
            line: 80,
            column: 12
          }
        },
        "29": {
          start: {
            line: 83,
            column: 4
          },
          end: {
            line: 87,
            column: 5
          }
        },
        "30": {
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 84,
            column: 41
          }
        },
        "31": {
          start: {
            line: 86,
            column: 6
          },
          end: {
            line: 86,
            column: 38
          }
        }
      },
      fnMap: {
        "0": {
          name: "normalizeData",
          decl: {
            start: {
              line: 10,
              column: 9
            },
            end: {
              line: 10,
              column: 22
            }
          },
          loc: {
            start: {
              line: 10,
              column: 28
            },
            end: {
              line: 24,
              column: 1
            }
          },
          line: 10
        },
        "1": {
          name: "normalizeDataKey",
          decl: {
            start: {
              line: 26,
              column: 9
            },
            end: {
              line: 26,
              column: 25
            }
          },
          loc: {
            start: {
              line: 26,
              column: 31
            },
            end: {
              line: 28,
              column: 1
            }
          },
          line: 26
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 27,
              column: 35
            },
            end: {
              line: 27,
              column: 36
            }
          },
          loc: {
            start: {
              line: 27,
              column: 44
            },
            end: {
              line: 27,
              column: 61
            }
          },
          line: 27
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 31,
              column: 2
            },
            end: {
              line: 31,
              column: 3
            }
          },
          loc: {
            start: {
              line: 31,
              column: 40
            },
            end: {
              line: 33,
              column: 3
            }
          },
          line: 31
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 35,
              column: 2
            },
            end: {
              line: 35,
              column: 3
            }
          },
          loc: {
            start: {
              line: 35,
              column: 36
            },
            end: {
              line: 37,
              column: 3
            }
          },
          line: 35
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 39,
              column: 2
            },
            end: {
              line: 39,
              column: 3
            }
          },
          loc: {
            start: {
              line: 39,
              column: 29
            },
            end: {
              line: 54,
              column: 3
            }
          },
          line: 39
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 49,
              column: 15
            },
            end: {
              line: 49,
              column: 16
            }
          },
          loc: {
            start: {
              line: 49,
              column: 24
            },
            end: {
              line: 51,
              column: 7
            }
          },
          line: 49
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 56,
              column: 2
            },
            end: {
              line: 56,
              column: 3
            }
          },
          loc: {
            start: {
              line: 56,
              column: 33
            },
            end: {
              line: 60,
              column: 3
            }
          },
          line: 56
        },
        "8": {
          name: "(anonymous_8)",
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
              column: 18
            },
            end: {
              line: 69,
              column: 3
            }
          },
          line: 62
        },
        "9": {
          name: "(anonymous_9)",
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
              column: 20
            },
            end: {
              line: 76,
              column: 3
            }
          },
          line: 71
        },
        "10": {
          name: "(anonymous_10)",
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
              column: 34
            },
            end: {
              line: 88,
              column: 3
            }
          },
          line: 78
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 11,
              column: 2
            },
            end: {
              line: 21,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 11,
              column: 2
            },
            end: {
              line: 21,
              column: 3
            }
          }, {
            start: {
              line: 11,
              column: 2
            },
            end: {
              line: 21,
              column: 3
            }
          }],
          line: 11
        },
        "1": {
          loc: {
            start: {
              line: 13,
              column: 9
            },
            end: {
              line: 21,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 13,
              column: 9
            },
            end: {
              line: 21,
              column: 3
            }
          }, {
            start: {
              line: 13,
              column: 9
            },
            end: {
              line: 21,
              column: 3
            }
          }],
          line: 13
        },
        "2": {
          loc: {
            start: {
              line: 15,
              column: 9
            },
            end: {
              line: 21,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 15,
              column: 9
            },
            end: {
              line: 21,
              column: 3
            }
          }, {
            start: {
              line: 15,
              column: 9
            },
            end: {
              line: 21,
              column: 3
            }
          }],
          line: 15
        },
        "3": {
          loc: {
            start: {
              line: 17,
              column: 9
            },
            end: {
              line: 21,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 17,
              column: 9
            },
            end: {
              line: 21,
              column: 3
            }
          }, {
            start: {
              line: 17,
              column: 9
            },
            end: {
              line: 21,
              column: 3
            }
          }],
          line: 17
        },
        "4": {
          loc: {
            start: {
              line: 19,
              column: 9
            },
            end: {
              line: 21,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 19,
              column: 9
            },
            end: {
              line: 21,
              column: 3
            }
          }, {
            start: {
              line: 19,
              column: 9
            },
            end: {
              line: 21,
              column: 3
            }
          }],
          line: 19
        },
        "5": {
          loc: {
            start: {
              line: 40,
              column: 4
            },
            end: {
              line: 42,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 40,
              column: 4
            },
            end: {
              line: 42,
              column: 5
            }
          }, {
            start: {
              line: 40,
              column: 4
            },
            end: {
              line: 42,
              column: 5
            }
          }],
          line: 40
        },
        "6": {
          loc: {
            start: {
              line: 79,
              column: 4
            },
            end: {
              line: 81,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 79,
              column: 4
            },
            end: {
              line: 81,
              column: 5
            }
          }, {
            start: {
              line: 79,
              column: 4
            },
            end: {
              line: 81,
              column: 5
            }
          }],
          line: 79
        },
        "7": {
          loc: {
            start: {
              line: 83,
              column: 4
            },
            end: {
              line: 87,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 83,
              column: 4
            },
            end: {
              line: 87,
              column: 5
            }
          }, {
            start: {
              line: 83,
              column: 4
            },
            end: {
              line: 87,
              column: 5
            }
          }],
          line: 83
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
        "31": 0
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
        "7": [0, 0]
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
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  var regexDataKey = (cov_16m0x9fi2r.s[0]++, /[A-Z]/g);

  function normalizeData(val) {
    cov_16m0x9fi2r.f[0]++;
    cov_16m0x9fi2r.s[1]++;

    if (val === 'true') {
      cov_16m0x9fi2r.b[0][0]++;
      cov_16m0x9fi2r.s[2]++;
      return true;
    } else {
      cov_16m0x9fi2r.b[0][1]++;
      cov_16m0x9fi2r.s[3]++;

      if (val === 'false') {
        cov_16m0x9fi2r.b[1][0]++;
        cov_16m0x9fi2r.s[4]++;
        return false;
      } else {
        cov_16m0x9fi2r.b[1][1]++;
        cov_16m0x9fi2r.s[5]++;

        if (val === 'null') {
          cov_16m0x9fi2r.b[2][0]++;
          cov_16m0x9fi2r.s[6]++;
          return null;
        } else {
          cov_16m0x9fi2r.b[2][1]++;
          cov_16m0x9fi2r.s[7]++;

          if (val === Number(val).toString()) {
            cov_16m0x9fi2r.b[3][0]++;
            cov_16m0x9fi2r.s[8]++;
            return Number(val);
          } else {
            cov_16m0x9fi2r.b[3][1]++;
            cov_16m0x9fi2r.s[9]++;

            if (val === '') {
              cov_16m0x9fi2r.b[4][0]++;
              cov_16m0x9fi2r.s[10]++;
              return null;
            } else {
              cov_16m0x9fi2r.b[4][1]++;
            }
          }
        }
      }
    }

    cov_16m0x9fi2r.s[11]++;
    return val;
  }

  function normalizeDataKey(key) {
    cov_16m0x9fi2r.f[1]++;
    cov_16m0x9fi2r.s[12]++;
    return key.replace(regexDataKey, function (chr) {
      cov_16m0x9fi2r.f[2]++;
      cov_16m0x9fi2r.s[13]++;
      return chr.toLowerCase();
    });
  }

  var Manipulator = (cov_16m0x9fi2r.s[14]++, {
    setDataAttribute: function setDataAttribute(element, key, value) {
      cov_16m0x9fi2r.f[3]++;
      cov_16m0x9fi2r.s[15]++;
      element.setAttribute("data-" + normalizeDataKey(key), value);
    },
    removeDataAttribute: function removeDataAttribute(element, key) {
      cov_16m0x9fi2r.f[4]++;
      cov_16m0x9fi2r.s[16]++;
      element.removeAttribute("data-" + normalizeDataKey(key));
    },
    getDataAttributes: function getDataAttributes(element) {
      cov_16m0x9fi2r.f[5]++;
      cov_16m0x9fi2r.s[17]++;

      if (!element) {
        cov_16m0x9fi2r.b[5][0]++;
        cov_16m0x9fi2r.s[18]++;
        return {};
      } else {
        cov_16m0x9fi2r.b[5][1]++;
      }

      var attributes = (cov_16m0x9fi2r.s[19]++, _objectSpread({}, element.dataset));
      cov_16m0x9fi2r.s[20]++;
      Object.keys(attributes).forEach(function (key) {
        cov_16m0x9fi2r.f[6]++;
        cov_16m0x9fi2r.s[21]++;
        attributes[key] = normalizeData(attributes[key]);
      });
      cov_16m0x9fi2r.s[22]++;
      return attributes;
    },
    getDataAttribute: function getDataAttribute(element, key) {
      cov_16m0x9fi2r.f[7]++;
      cov_16m0x9fi2r.s[23]++;
      return normalizeData(element.getAttribute("data-" + normalizeDataKey(key)));
    },
    offset: function offset(element) {
      cov_16m0x9fi2r.f[8]++;
      var rect = (cov_16m0x9fi2r.s[24]++, element.getBoundingClientRect());
      cov_16m0x9fi2r.s[25]++;
      return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
      };
    },
    position: function position(element) {
      cov_16m0x9fi2r.f[9]++;
      cov_16m0x9fi2r.s[26]++;
      return {
        top: element.offsetTop,
        left: element.offsetLeft
      };
    },
    toggleClass: function toggleClass(element, className) {
      cov_16m0x9fi2r.f[10]++;
      cov_16m0x9fi2r.s[27]++;

      if (!element) {
        cov_16m0x9fi2r.b[6][0]++;
        cov_16m0x9fi2r.s[28]++;
        return;
      } else {
        cov_16m0x9fi2r.b[6][1]++;
      }

      cov_16m0x9fi2r.s[29]++;

      if (element.classList.contains(className)) {
        cov_16m0x9fi2r.b[7][0]++;
        cov_16m0x9fi2r.s[30]++;
        element.classList.remove(className);
      } else {
        cov_16m0x9fi2r.b[7][1]++;
        cov_16m0x9fi2r.s[31]++;
        element.classList.add(className);
      }
    }
  });

  return Manipulator;

}));
//# sourceMappingURL=manipulator.js.map

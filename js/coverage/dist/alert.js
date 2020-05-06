/*!
  * Bootstrap alert.js v4.4.1-1 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2020 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global = global || self, global.Alert = factory(global.jQuery, global.Util));
}(this, (function ($, Util) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
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
    var hash = "defac879a22573690aab9a1e637b619cac911ddd";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/alert.js",
      statementMap: {
        "0": {
          start: {
            line: 17,
            column: 28
          },
          end: {
            line: 17,
            column: 35
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
            column: 38
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
            column: 39
          }
        },
        "5": {
          start: {
            line: 22,
            column: 28
          },
          end: {
            line: 22,
            column: 38
          }
        },
        "6": {
          start: {
            line: 24,
            column: 17
          },
          end: {
            line: 26,
            column: 1
          }
        },
        "7": {
          start: {
            line: 28,
            column: 14
          },
          end: {
            line: 32,
            column: 1
          }
        },
        "8": {
          start: {
            line: 34,
            column: 18
          },
          end: {
            line: 38,
            column: 1
          }
        },
        "9": {
          start: {
            line: 48,
            column: 4
          },
          end: {
            line: 48,
            column: 27
          }
        },
        "10": {
          start: {
            line: 54,
            column: 4
          },
          end: {
            line: 54,
            column: 18
          }
        },
        "11": {
          start: {
            line: 60,
            column: 22
          },
          end: {
            line: 60,
            column: 35
          }
        },
        "12": {
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 63,
            column: 5
          }
        },
        "13": {
          start: {
            line: 62,
            column: 6
          },
          end: {
            line: 62,
            column: 49
          }
        },
        "14": {
          start: {
            line: 65,
            column: 24
          },
          end: {
            line: 65,
            column: 60
          }
        },
        "15": {
          start: {
            line: 67,
            column: 4
          },
          end: {
            line: 69,
            column: 5
          }
        },
        "16": {
          start: {
            line: 68,
            column: 6
          },
          end: {
            line: 68,
            column: 12
          }
        },
        "17": {
          start: {
            line: 71,
            column: 4
          },
          end: {
            line: 71,
            column: 36
          }
        },
        "18": {
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 75,
            column: 41
          }
        },
        "19": {
          start: {
            line: 76,
            column: 4
          },
          end: {
            line: 76,
            column: 24
          }
        },
        "20": {
          start: {
            line: 82,
            column: 21
          },
          end: {
            line: 82,
            column: 57
          }
        },
        "21": {
          start: {
            line: 83,
            column: 21
          },
          end: {
            line: 83,
            column: 26
          }
        },
        "22": {
          start: {
            line: 85,
            column: 4
          },
          end: {
            line: 87,
            column: 5
          }
        },
        "23": {
          start: {
            line: 86,
            column: 6
          },
          end: {
            line: 86,
            column: 47
          }
        },
        "24": {
          start: {
            line: 89,
            column: 4
          },
          end: {
            line: 91,
            column: 5
          }
        },
        "25": {
          start: {
            line: 90,
            column: 6
          },
          end: {
            line: 90,
            column: 59
          }
        },
        "26": {
          start: {
            line: 93,
            column: 4
          },
          end: {
            line: 93,
            column: 17
          }
        },
        "27": {
          start: {
            line: 97,
            column: 23
          },
          end: {
            line: 97,
            column: 43
          }
        },
        "28": {
          start: {
            line: 99,
            column: 4
          },
          end: {
            line: 99,
            column: 34
          }
        },
        "29": {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 100,
            column: 21
          }
        },
        "30": {
          start: {
            line: 104,
            column: 4
          },
          end: {
            line: 104,
            column: 42
          }
        },
        "31": {
          start: {
            line: 106,
            column: 4
          },
          end: {
            line: 109,
            column: 5
          }
        },
        "32": {
          start: {
            line: 107,
            column: 6
          },
          end: {
            line: 107,
            column: 35
          }
        },
        "33": {
          start: {
            line: 108,
            column: 6
          },
          end: {
            line: 108,
            column: 12
          }
        },
        "34": {
          start: {
            line: 111,
            column: 31
          },
          end: {
            line: 111,
            column: 77
          }
        },
        "35": {
          start: {
            line: 113,
            column: 4
          },
          end: {
            line: 115,
            column: 47
          }
        },
        "36": {
          start: {
            line: 114,
            column: 43
          },
          end: {
            line: 114,
            column: 79
          }
        },
        "37": {
          start: {
            line: 119,
            column: 4
          },
          end: {
            line: 122,
            column: 15
          }
        },
        "38": {
          start: {
            line: 128,
            column: 4
          },
          end: {
            line: 140,
            column: 6
          }
        },
        "39": {
          start: {
            line: 129,
            column: 23
          },
          end: {
            line: 129,
            column: 30
          }
        },
        "40": {
          start: {
            line: 130,
            column: 23
          },
          end: {
            line: 130,
            column: 46
          }
        },
        "41": {
          start: {
            line: 132,
            column: 6
          },
          end: {
            line: 135,
            column: 7
          }
        },
        "42": {
          start: {
            line: 133,
            column: 8
          },
          end: {
            line: 133,
            column: 30
          }
        },
        "43": {
          start: {
            line: 134,
            column: 8
          },
          end: {
            line: 134,
            column: 37
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
            line: 160,
            column: 0
          },
          end: {
            line: 164,
            column: 1
          }
        },
        "51": {
          start: {
            line: 172,
            column: 0
          },
          end: {
            line: 172,
            column: 47
          }
        },
        "52": {
          start: {
            line: 173,
            column: 0
          },
          end: {
            line: 173,
            column: 30
          }
        },
        "53": {
          start: {
            line: 174,
            column: 0
          },
          end: {
            line: 177,
            column: 1
          }
        },
        "54": {
          start: {
            line: 175,
            column: 2
          },
          end: {
            line: 175,
            column: 33
          }
        },
        "55": {
          start: {
            line: 176,
            column: 2
          },
          end: {
            line: 176,
            column: 31
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 47,
              column: 2
            },
            end: {
              line: 47,
              column: 3
            }
          },
          loc: {
            start: {
              line: 47,
              column: 23
            },
            end: {
              line: 49,
              column: 3
            }
          },
          line: 47
        },
        "1": {
          name: "(anonymous_1)",
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
        "2": {
          name: "(anonymous_2)",
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
              column: 17
            },
            end: {
              line: 72,
              column: 3
            }
          },
          line: 59
        },
        "3": {
          name: "(anonymous_3)",
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
              column: 12
            },
            end: {
              line: 77,
              column: 3
            }
          },
          line: 74
        },
        "4": {
          name: "(anonymous_4)",
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
              column: 27
            },
            end: {
              line: 94,
              column: 3
            }
          },
          line: 81
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 96,
              column: 2
            },
            end: {
              line: 96,
              column: 3
            }
          },
          loc: {
            start: {
              line: 96,
              column: 30
            },
            end: {
              line: 101,
              column: 3
            }
          },
          line: 96
        },
        "6": {
          name: "(anonymous_6)",
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
              column: 26
            },
            end: {
              line: 116,
              column: 3
            }
          },
          line: 103
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 114,
              column: 32
            },
            end: {
              line: 114,
              column: 33
            }
          },
          loc: {
            start: {
              line: 114,
              column: 43
            },
            end: {
              line: 114,
              column: 79
            }
          },
          line: 114
        },
        "8": {
          name: "(anonymous_8)",
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
              column: 27
            },
            end: {
              line: 123,
              column: 3
            }
          },
          line: 118
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 127,
              column: 2
            },
            end: {
              line: 127,
              column: 3
            }
          },
          loc: {
            start: {
              line: 127,
              column: 34
            },
            end: {
              line: 141,
              column: 3
            }
          },
          line: 127
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 128,
              column: 21
            },
            end: {
              line: 128,
              column: 22
            }
          },
          loc: {
            start: {
              line: 128,
              column: 33
            },
            end: {
              line: 140,
              column: 5
            }
          },
          line: 128
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
              line: 174,
              column: 25
            },
            end: {
              line: 174,
              column: 26
            }
          },
          loc: {
            start: {
              line: 174,
              column: 31
            },
            end: {
              line: 177,
              column: 1
            }
          },
          line: 174
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 61,
              column: 4
            },
            end: {
              line: 63,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 61,
              column: 4
            },
            end: {
              line: 63,
              column: 5
            }
          }, {
            start: {
              line: 61,
              column: 4
            },
            end: {
              line: 63,
              column: 5
            }
          }],
          line: 61
        },
        "1": {
          loc: {
            start: {
              line: 67,
              column: 4
            },
            end: {
              line: 69,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 67,
              column: 4
            },
            end: {
              line: 69,
              column: 5
            }
          }, {
            start: {
              line: 67,
              column: 4
            },
            end: {
              line: 69,
              column: 5
            }
          }],
          line: 67
        },
        "2": {
          loc: {
            start: {
              line: 85,
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
              line: 85,
              column: 4
            },
            end: {
              line: 87,
              column: 5
            }
          }, {
            start: {
              line: 85,
              column: 4
            },
            end: {
              line: 87,
              column: 5
            }
          }],
          line: 85
        },
        "3": {
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
        "4": {
          loc: {
            start: {
              line: 106,
              column: 4
            },
            end: {
              line: 109,
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
              line: 109,
              column: 5
            }
          }, {
            start: {
              line: 106,
              column: 4
            },
            end: {
              line: 109,
              column: 5
            }
          }],
          line: 106
        },
        "5": {
          loc: {
            start: {
              line: 132,
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
              line: 132,
              column: 6
            },
            end: {
              line: 135,
              column: 7
            }
          }, {
            start: {
              line: 132,
              column: 6
            },
            end: {
              line: 135,
              column: 7
            }
          }],
          line: 132
        },
        "6": {
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
        "7": {
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
        "13": 0
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
      _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
      hash: "defac879a22573690aab9a1e637b619cac911ddd"
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

  var NAME = (cov_r5uu6l95z.s[0]++, 'alert');
  var VERSION = (cov_r5uu6l95z.s[1]++, '4.4.1');
  var DATA_KEY = (cov_r5uu6l95z.s[2]++, 'bs.alert');
  var EVENT_KEY = (cov_r5uu6l95z.s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_r5uu6l95z.s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_r5uu6l95z.s[5]++, $.fn[NAME]);
  var Selector = (cov_r5uu6l95z.s[6]++, {
    DISMISS: '[data-dismiss="alert"]'
  });
  var Event = (cov_r5uu6l95z.s[7]++, {
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  });
  var ClassName = (cov_r5uu6l95z.s[8]++, {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
  });
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = /*#__PURE__*/function () {
    function Alert(element) {
      cov_r5uu6l95z.f[0]++;
      cov_r5uu6l95z.s[9]++;
      this._element = element;
    } // Getters


    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      cov_r5uu6l95z.f[2]++;
      var rootElement = (cov_r5uu6l95z.s[11]++, this._element);
      cov_r5uu6l95z.s[12]++;

      if (element) {
        cov_r5uu6l95z.b[0][0]++;
        cov_r5uu6l95z.s[13]++;
        rootElement = this._getRootElement(element);
      } else {
        cov_r5uu6l95z.b[0][1]++;
      }

      var customEvent = (cov_r5uu6l95z.s[14]++, this._triggerCloseEvent(rootElement));
      cov_r5uu6l95z.s[15]++;

      if (customEvent.isDefaultPrevented()) {
        cov_r5uu6l95z.b[1][0]++;
        cov_r5uu6l95z.s[16]++;
        return;
      } else {
        cov_r5uu6l95z.b[1][1]++;
      }

      cov_r5uu6l95z.s[17]++;

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      cov_r5uu6l95z.f[3]++;
      cov_r5uu6l95z.s[18]++;
      $.removeData(this._element, DATA_KEY);
      cov_r5uu6l95z.s[19]++;
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      cov_r5uu6l95z.f[4]++;
      var selector = (cov_r5uu6l95z.s[20]++, Util.getSelectorFromElement(element));
      var parent = (cov_r5uu6l95z.s[21]++, false);
      cov_r5uu6l95z.s[22]++;

      if (selector) {
        cov_r5uu6l95z.b[2][0]++;
        cov_r5uu6l95z.s[23]++;
        parent = document.querySelector(selector);
      } else {
        cov_r5uu6l95z.b[2][1]++;
      }

      cov_r5uu6l95z.s[24]++;

      if (!parent) {
        cov_r5uu6l95z.b[3][0]++;
        cov_r5uu6l95z.s[25]++;
        parent = $(element).closest("." + ClassName.ALERT)[0];
      } else {
        cov_r5uu6l95z.b[3][1]++;
      }

      cov_r5uu6l95z.s[26]++;
      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      cov_r5uu6l95z.f[5]++;
      var closeEvent = (cov_r5uu6l95z.s[27]++, $.Event(Event.CLOSE));
      cov_r5uu6l95z.s[28]++;
      $(element).trigger(closeEvent);
      cov_r5uu6l95z.s[29]++;
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      cov_r5uu6l95z.f[6]++;
      cov_r5uu6l95z.s[30]++;
      $(element).removeClass(ClassName.SHOW);
      cov_r5uu6l95z.s[31]++;

      if (!$(element).hasClass(ClassName.FADE)) {
        cov_r5uu6l95z.b[4][0]++;
        cov_r5uu6l95z.s[32]++;

        this._destroyElement(element);

        cov_r5uu6l95z.s[33]++;
        return;
      } else {
        cov_r5uu6l95z.b[4][1]++;
      }

      var transitionDuration = (cov_r5uu6l95z.s[34]++, Util.getTransitionDurationFromElement(element));
      cov_r5uu6l95z.s[35]++;
      $(element).one(Util.TRANSITION_END, function (event) {
        cov_r5uu6l95z.f[7]++;
        cov_r5uu6l95z.s[36]++;
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      cov_r5uu6l95z.f[8]++;
      cov_r5uu6l95z.s[37]++;
      $(element).detach().trigger(Event.CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      cov_r5uu6l95z.f[9]++;
      cov_r5uu6l95z.s[38]++;
      return this.each(function () {
        cov_r5uu6l95z.f[10]++;
        var $element = (cov_r5uu6l95z.s[39]++, $(this));
        var data = (cov_r5uu6l95z.s[40]++, $element.data(DATA_KEY));
        cov_r5uu6l95z.s[41]++;

        if (!data) {
          cov_r5uu6l95z.b[5][0]++;
          cov_r5uu6l95z.s[42]++;
          data = new Alert(this);
          cov_r5uu6l95z.s[43]++;
          $element.data(DATA_KEY, data);
        } else {
          cov_r5uu6l95z.b[5][1]++;
        }

        cov_r5uu6l95z.s[44]++;

        if (config === 'close') {
          cov_r5uu6l95z.b[6][0]++;
          cov_r5uu6l95z.s[45]++;
          data[config](this);
        } else {
          cov_r5uu6l95z.b[6][1]++;
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
          cov_r5uu6l95z.b[7][0]++;
          cov_r5uu6l95z.s[48]++;
          event.preventDefault();
        } else {
          cov_r5uu6l95z.b[7][1]++;
        }

        cov_r5uu6l95z.s[49]++;
        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        cov_r5uu6l95z.f[1]++;
        cov_r5uu6l95z.s[10]++;
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


  cov_r5uu6l95z.s[50]++;
  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  cov_r5uu6l95z.s[51]++;
  $.fn[NAME] = Alert._jQueryInterface;
  cov_r5uu6l95z.s[52]++;
  $.fn[NAME].Constructor = Alert;
  cov_r5uu6l95z.s[53]++;

  $.fn[NAME].noConflict = function () {
    cov_r5uu6l95z.f[13]++;
    cov_r5uu6l95z.s[54]++;
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    cov_r5uu6l95z.s[55]++;
    return Alert._jQueryInterface;
  };

  return Alert;

})));
//# sourceMappingURL=alert.js.map

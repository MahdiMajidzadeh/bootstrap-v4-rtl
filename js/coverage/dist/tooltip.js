/*!
  * Bootstrap tooltip.js v4.4.1-1 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2020 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('popper.js'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', 'popper.js', './util.js'], factory) :
  (global = global || self, global.Tooltip = factory(global.jQuery, global.Popper, global.Util));
}(this, (function ($, Popper, Util) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;
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

  var cov_1zpyx52306 = function () {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/tools/sanitizer.js";
    var hash = "eb79f24a15b171b25dc6d8926cd654a6126dbb11";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/tools/sanitizer.js",
      statementMap: {
        "0": {
          start: {
            line: 8,
            column: 17
          },
          end: {
            line: 17,
            column: 1
          }
        },
        "1": {
          start: {
            line: 19,
            column: 31
          },
          end: {
            line: 19,
            column: 47
          }
        },
        "2": {
          start: {
            line: 21,
            column: 32
          },
          end: {
            line: 53,
            column: 1
          }
        },
        "3": {
          start: {
            line: 60,
            column: 25
          },
          end: {
            line: 60,
            column: 86
          }
        },
        "4": {
          start: {
            line: 67,
            column: 25
          },
          end: {
            line: 67,
            column: 158
          }
        },
        "5": {
          start: {
            line: 70,
            column: 19
          },
          end: {
            line: 70,
            column: 46
          }
        },
        "6": {
          start: {
            line: 72,
            column: 2
          },
          end: {
            line: 78,
            column: 3
          }
        },
        "7": {
          start: {
            line: 73,
            column: 4
          },
          end: {
            line: 75,
            column: 5
          }
        },
        "8": {
          start: {
            line: 74,
            column: 6
          },
          end: {
            line: 74,
            column: 102
          }
        },
        "9": {
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 77,
            column: 15
          }
        },
        "10": {
          start: {
            line: 80,
            column: 17
          },
          end: {
            line: 80,
            column: 88
          }
        },
        "11": {
          start: {
            line: 80,
            column: 60
          },
          end: {
            line: 80,
            column: 87
          }
        },
        "12": {
          start: {
            line: 83,
            column: 2
          },
          end: {
            line: 87,
            column: 3
          }
        },
        "13": {
          start: {
            line: 83,
            column: 15
          },
          end: {
            line: 83,
            column: 16
          }
        },
        "14": {
          start: {
            line: 83,
            column: 22
          },
          end: {
            line: 83,
            column: 35
          }
        },
        "15": {
          start: {
            line: 84,
            column: 4
          },
          end: {
            line: 86,
            column: 5
          }
        },
        "16": {
          start: {
            line: 85,
            column: 6
          },
          end: {
            line: 85,
            column: 17
          }
        },
        "17": {
          start: {
            line: 89,
            column: 2
          },
          end: {
            line: 89,
            column: 14
          }
        },
        "18": {
          start: {
            line: 93,
            column: 2
          },
          end: {
            line: 95,
            column: 3
          }
        },
        "19": {
          start: {
            line: 94,
            column: 4
          },
          end: {
            line: 94,
            column: 21
          }
        },
        "20": {
          start: {
            line: 97,
            column: 2
          },
          end: {
            line: 99,
            column: 3
          }
        },
        "21": {
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 98,
            column: 33
          }
        },
        "22": {
          start: {
            line: 101,
            column: 20
          },
          end: {
            line: 101,
            column: 42
          }
        },
        "23": {
          start: {
            line: 102,
            column: 26
          },
          end: {
            line: 102,
            column: 76
          }
        },
        "24": {
          start: {
            line: 103,
            column: 24
          },
          end: {
            line: 103,
            column: 46
          }
        },
        "25": {
          start: {
            line: 104,
            column: 19
          },
          end: {
            line: 104,
            column: 76
          }
        },
        "26": {
          start: {
            line: 106,
            column: 2
          },
          end: {
            line: 124,
            column: 3
          }
        },
        "27": {
          start: {
            line: 106,
            column: 15
          },
          end: {
            line: 106,
            column: 16
          }
        },
        "28": {
          start: {
            line: 106,
            column: 24
          },
          end: {
            line: 106,
            column: 39
          }
        },
        "29": {
          start: {
            line: 107,
            column: 15
          },
          end: {
            line: 107,
            column: 26
          }
        },
        "30": {
          start: {
            line: 108,
            column: 19
          },
          end: {
            line: 108,
            column: 44
          }
        },
        "31": {
          start: {
            line: 110,
            column: 4
          },
          end: {
            line: 114,
            column: 5
          }
        },
        "32": {
          start: {
            line: 111,
            column: 6
          },
          end: {
            line: 111,
            column: 35
          }
        },
        "33": {
          start: {
            line: 113,
            column: 6
          },
          end: {
            line: 113,
            column: 14
          }
        },
        "34": {
          start: {
            line: 116,
            column: 26
          },
          end: {
            line: 116,
            column: 54
          }
        },
        "35": {
          start: {
            line: 117,
            column: 34
          },
          end: {
            line: 117,
            column: 90
          }
        },
        "36": {
          start: {
            line: 119,
            column: 4
          },
          end: {
            line: 123,
            column: 6
          }
        },
        "37": {
          start: {
            line: 120,
            column: 6
          },
          end: {
            line: 122,
            column: 7
          }
        },
        "38": {
          start: {
            line: 121,
            column: 8
          },
          end: {
            line: 121,
            column: 41
          }
        },
        "39": {
          start: {
            line: 126,
            column: 2
          },
          end: {
            line: 126,
            column: 39
          }
        }
      },
      fnMap: {
        "0": {
          name: "allowedAttribute",
          decl: {
            start: {
              line: 69,
              column: 9
            },
            end: {
              line: 69,
              column: 25
            }
          },
          loc: {
            start: {
              line: 69,
              column: 54
            },
            end: {
              line: 90,
              column: 1
            }
          },
          line: 69
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 80,
              column: 45
            },
            end: {
              line: 80,
              column: 46
            }
          },
          loc: {
            start: {
              line: 80,
              column: 60
            },
            end: {
              line: 80,
              column: 87
            }
          },
          line: 80
        },
        "2": {
          name: "sanitizeHtml",
          decl: {
            start: {
              line: 92,
              column: 16
            },
            end: {
              line: 92,
              column: 28
            }
          },
          loc: {
            start: {
              line: 92,
              column: 64
            },
            end: {
              line: 127,
              column: 1
            }
          },
          line: 92
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 119,
              column: 26
            },
            end: {
              line: 119,
              column: 27
            }
          },
          loc: {
            start: {
              line: 119,
              column: 36
            },
            end: {
              line: 123,
              column: 5
            }
          },
          line: 119
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 72,
              column: 2
            },
            end: {
              line: 78,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 72,
              column: 2
            },
            end: {
              line: 78,
              column: 3
            }
          }, {
            start: {
              line: 72,
              column: 2
            },
            end: {
              line: 78,
              column: 3
            }
          }],
          line: 72
        },
        "1": {
          loc: {
            start: {
              line: 73,
              column: 4
            },
            end: {
              line: 75,
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
              line: 75,
              column: 5
            }
          }, {
            start: {
              line: 73,
              column: 4
            },
            end: {
              line: 75,
              column: 5
            }
          }],
          line: 73
        },
        "2": {
          loc: {
            start: {
              line: 74,
              column: 21
            },
            end: {
              line: 74,
              column: 101
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 74,
              column: 21
            },
            end: {
              line: 74,
              column: 59
            }
          }, {
            start: {
              line: 74,
              column: 63
            },
            end: {
              line: 74,
              column: 101
            }
          }],
          line: 74
        },
        "3": {
          loc: {
            start: {
              line: 84,
              column: 4
            },
            end: {
              line: 86,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 84,
              column: 4
            },
            end: {
              line: 86,
              column: 5
            }
          }, {
            start: {
              line: 84,
              column: 4
            },
            end: {
              line: 86,
              column: 5
            }
          }],
          line: 84
        },
        "4": {
          loc: {
            start: {
              line: 93,
              column: 2
            },
            end: {
              line: 95,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 93,
              column: 2
            },
            end: {
              line: 95,
              column: 3
            }
          }, {
            start: {
              line: 93,
              column: 2
            },
            end: {
              line: 95,
              column: 3
            }
          }],
          line: 93
        },
        "5": {
          loc: {
            start: {
              line: 97,
              column: 2
            },
            end: {
              line: 99,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 97,
              column: 2
            },
            end: {
              line: 99,
              column: 3
            }
          }, {
            start: {
              line: 97,
              column: 2
            },
            end: {
              line: 99,
              column: 3
            }
          }],
          line: 97
        },
        "6": {
          loc: {
            start: {
              line: 97,
              column: 6
            },
            end: {
              line: 97,
              column: 52
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 97,
              column: 6
            },
            end: {
              line: 97,
              column: 16
            }
          }, {
            start: {
              line: 97,
              column: 20
            },
            end: {
              line: 97,
              column: 52
            }
          }],
          line: 97
        },
        "7": {
          loc: {
            start: {
              line: 110,
              column: 4
            },
            end: {
              line: 114,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 110,
              column: 4
            },
            end: {
              line: 114,
              column: 5
            }
          }, {
            start: {
              line: 110,
              column: 4
            },
            end: {
              line: 114,
              column: 5
            }
          }],
          line: 110
        },
        "8": {
          loc: {
            start: {
              line: 117,
              column: 44
            },
            end: {
              line: 117,
              column: 64
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 117,
              column: 44
            },
            end: {
              line: 117,
              column: 58
            }
          }, {
            start: {
              line: 117,
              column: 62
            },
            end: {
              line: 117,
              column: 64
            }
          }],
          line: 117
        },
        "9": {
          loc: {
            start: {
              line: 117,
              column: 66
            },
            end: {
              line: 117,
              column: 89
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 117,
              column: 66
            },
            end: {
              line: 117,
              column: 83
            }
          }, {
            start: {
              line: 117,
              column: 87
            },
            end: {
              line: 117,
              column: 89
            }
          }],
          line: 117
        },
        "10": {
          loc: {
            start: {
              line: 120,
              column: 6
            },
            end: {
              line: 122,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 120,
              column: 6
            },
            end: {
              line: 122,
              column: 7
            }
          }, {
            start: {
              line: 120,
              column: 6
            },
            end: {
              line: 122,
              column: 7
            }
          }],
          line: 120
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
        "39": 0
      },
      f: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0
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
        "10": [0, 0]
      },
      _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
      hash: "eb79f24a15b171b25dc6d8926cd654a6126dbb11"
    };
    var coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    return coverage[path] = coverageData;
  }();

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.4.1): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  var uriAttrs = (cov_1zpyx52306.s[0]++, ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
  var ARIA_ATTRIBUTE_PATTERN = (cov_1zpyx52306.s[1]++, /^aria-[\w-]*$/i);
  var DefaultWhitelist = (cov_1zpyx52306.s[2]++, {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  });
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = (cov_1zpyx52306.s[3]++, /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi);
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = (cov_1zpyx52306.s[4]++, /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i);

  function allowedAttribute(attr, allowedAttributeList) {
    cov_1zpyx52306.f[0]++;
    var attrName = (cov_1zpyx52306.s[5]++, attr.nodeName.toLowerCase());
    cov_1zpyx52306.s[6]++;

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      cov_1zpyx52306.b[0][0]++;
      cov_1zpyx52306.s[7]++;

      if (uriAttrs.indexOf(attrName) !== -1) {
        cov_1zpyx52306.b[1][0]++;
        cov_1zpyx52306.s[8]++;
        return Boolean((cov_1zpyx52306.b[2][0]++, attr.nodeValue.match(SAFE_URL_PATTERN)) || (cov_1zpyx52306.b[2][1]++, attr.nodeValue.match(DATA_URL_PATTERN)));
      } else {
        cov_1zpyx52306.b[1][1]++;
      }

      cov_1zpyx52306.s[9]++;
      return true;
    } else {
      cov_1zpyx52306.b[0][1]++;
    }

    var regExp = (cov_1zpyx52306.s[10]++, allowedAttributeList.filter(function (attrRegex) {
      cov_1zpyx52306.f[1]++;
      cov_1zpyx52306.s[11]++;
      return attrRegex instanceof RegExp;
    })); // Check if a regular expression validates the attribute.

    cov_1zpyx52306.s[12]++;

    for (var i = (cov_1zpyx52306.s[13]++, 0), l = (cov_1zpyx52306.s[14]++, regExp.length); i < l; i++) {
      cov_1zpyx52306.s[15]++;

      if (attrName.match(regExp[i])) {
        cov_1zpyx52306.b[3][0]++;
        cov_1zpyx52306.s[16]++;
        return true;
      } else {
        cov_1zpyx52306.b[3][1]++;
      }
    }

    cov_1zpyx52306.s[17]++;
    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    cov_1zpyx52306.f[2]++;
    cov_1zpyx52306.s[18]++;

    if (unsafeHtml.length === 0) {
      cov_1zpyx52306.b[4][0]++;
      cov_1zpyx52306.s[19]++;
      return unsafeHtml;
    } else {
      cov_1zpyx52306.b[4][1]++;
    }

    cov_1zpyx52306.s[20]++;

    if ((cov_1zpyx52306.b[6][0]++, sanitizeFn) && (cov_1zpyx52306.b[6][1]++, typeof sanitizeFn === 'function')) {
      cov_1zpyx52306.b[5][0]++;
      cov_1zpyx52306.s[21]++;
      return sanitizeFn(unsafeHtml);
    } else {
      cov_1zpyx52306.b[5][1]++;
    }

    var domParser = (cov_1zpyx52306.s[22]++, new window.DOMParser());
    var createdDocument = (cov_1zpyx52306.s[23]++, domParser.parseFromString(unsafeHtml, 'text/html'));
    var whitelistKeys = (cov_1zpyx52306.s[24]++, Object.keys(whiteList));
    var elements = (cov_1zpyx52306.s[25]++, [].slice.call(createdDocument.body.querySelectorAll('*')));
    cov_1zpyx52306.s[26]++;

    var _loop = function _loop(i, len) {
      var el = (cov_1zpyx52306.s[29]++, elements[i]);
      var elName = (cov_1zpyx52306.s[30]++, el.nodeName.toLowerCase());
      cov_1zpyx52306.s[31]++;

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        cov_1zpyx52306.b[7][0]++;
        cov_1zpyx52306.s[32]++;
        el.parentNode.removeChild(el);
        cov_1zpyx52306.s[33]++;
        return "continue";
      } else {
        cov_1zpyx52306.b[7][1]++;
      }

      var attributeList = (cov_1zpyx52306.s[34]++, [].slice.call(el.attributes));
      var whitelistedAttributes = (cov_1zpyx52306.s[35]++, [].concat((cov_1zpyx52306.b[8][0]++, whiteList['*']) || (cov_1zpyx52306.b[8][1]++, []), (cov_1zpyx52306.b[9][0]++, whiteList[elName]) || (cov_1zpyx52306.b[9][1]++, [])));
      cov_1zpyx52306.s[36]++;
      attributeList.forEach(function (attr) {
        cov_1zpyx52306.f[3]++;
        cov_1zpyx52306.s[37]++;

        if (!allowedAttribute(attr, whitelistedAttributes)) {
          cov_1zpyx52306.b[10][0]++;
          cov_1zpyx52306.s[38]++;
          el.removeAttribute(attr.nodeName);
        } else {
          cov_1zpyx52306.b[10][1]++;
        }
      });
    };

    for (var i = (cov_1zpyx52306.s[27]++, 0), len = (cov_1zpyx52306.s[28]++, elements.length); i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    cov_1zpyx52306.s[39]++;
    return createdDocument.body.innerHTML;
  }

  var cov_1daa9w7v20 = function () {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/tooltip.js";
    var hash = "7f92c5318708b21e4da7e92104ed69e05496722e";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/tooltip.js",
      statementMap: {
        "0": {
          start: {
            line: 22,
            column: 30
          },
          end: {
            line: 22,
            column: 39
          }
        },
        "1": {
          start: {
            line: 23,
            column: 30
          },
          end: {
            line: 23,
            column: 37
          }
        },
        "2": {
          start: {
            line: 24,
            column: 30
          },
          end: {
            line: 24,
            column: 42
          }
        },
        "3": {
          start: {
            line: 25,
            column: 30
          },
          end: {
            line: 25,
            column: 44
          }
        },
        "4": {
          start: {
            line: 26,
            column: 30
          },
          end: {
            line: 26,
            column: 40
          }
        },
        "5": {
          start: {
            line: 27,
            column: 30
          },
          end: {
            line: 27,
            column: 42
          }
        },
        "6": {
          start: {
            line: 28,
            column: 30
          },
          end: {
            line: 28,
            column: 75
          }
        },
        "7": {
          start: {
            line: 29,
            column: 30
          },
          end: {
            line: 29,
            column: 69
          }
        },
        "8": {
          start: {
            line: 31,
            column: 20
          },
          end: {
            line: 48,
            column: 1
          }
        },
        "9": {
          start: {
            line: 50,
            column: 22
          },
          end: {
            line: 56,
            column: 1
          }
        },
        "10": {
          start: {
            line: 58,
            column: 16
          },
          end: {
            line: 77,
            column: 1
          }
        },
        "11": {
          start: {
            line: 79,
            column: 19
          },
          end: {
            line: 82,
            column: 1
          }
        },
        "12": {
          start: {
            line: 84,
            column: 14
          },
          end: {
            line: 95,
            column: 1
          }
        },
        "13": {
          start: {
            line: 97,
            column: 18
          },
          end: {
            line: 100,
            column: 1
          }
        },
        "14": {
          start: {
            line: 102,
            column: 17
          },
          end: {
            line: 106,
            column: 1
          }
        },
        "15": {
          start: {
            line: 108,
            column: 16
          },
          end: {
            line: 113,
            column: 1
          }
        },
        "16": {
          start: {
            line: 124,
            column: 4
          },
          end: {
            line: 126,
            column: 5
          }
        },
        "17": {
          start: {
            line: 125,
            column: 6
          },
          end: {
            line: 125,
            column: 93
          }
        },
        "18": {
          start: {
            line: 129,
            column: 4
          },
          end: {
            line: 129,
            column: 30
          }
        },
        "19": {
          start: {
            line: 130,
            column: 4
          },
          end: {
            line: 130,
            column: 27
          }
        },
        "20": {
          start: {
            line: 131,
            column: 4
          },
          end: {
            line: 131,
            column: 28
          }
        },
        "21": {
          start: {
            line: 132,
            column: 4
          },
          end: {
            line: 132,
            column: 28
          }
        },
        "22": {
          start: {
            line: 133,
            column: 4
          },
          end: {
            line: 133,
            column: 30
          }
        },
        "23": {
          start: {
            line: 136,
            column: 4
          },
          end: {
            line: 136,
            column: 26
          }
        },
        "24": {
          start: {
            line: 137,
            column: 4
          },
          end: {
            line: 137,
            column: 42
          }
        },
        "25": {
          start: {
            line: 138,
            column: 4
          },
          end: {
            line: 138,
            column: 23
          }
        },
        "26": {
          start: {
            line: 140,
            column: 4
          },
          end: {
            line: 140,
            column: 24
          }
        },
        "27": {
          start: {
            line: 146,
            column: 4
          },
          end: {
            line: 146,
            column: 18
          }
        },
        "28": {
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 150,
            column: 18
          }
        },
        "29": {
          start: {
            line: 154,
            column: 4
          },
          end: {
            line: 154,
            column: 15
          }
        },
        "30": {
          start: {
            line: 158,
            column: 4
          },
          end: {
            line: 158,
            column: 19
          }
        },
        "31": {
          start: {
            line: 162,
            column: 4
          },
          end: {
            line: 162,
            column: 16
          }
        },
        "32": {
          start: {
            line: 166,
            column: 4
          },
          end: {
            line: 166,
            column: 20
          }
        },
        "33": {
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 170,
            column: 22
          }
        },
        "34": {
          start: {
            line: 176,
            column: 4
          },
          end: {
            line: 176,
            column: 26
          }
        },
        "35": {
          start: {
            line: 180,
            column: 4
          },
          end: {
            line: 180,
            column: 27
          }
        },
        "36": {
          start: {
            line: 184,
            column: 4
          },
          end: {
            line: 184,
            column: 38
          }
        },
        "37": {
          start: {
            line: 188,
            column: 4
          },
          end: {
            line: 190,
            column: 5
          }
        },
        "38": {
          start: {
            line: 189,
            column: 6
          },
          end: {
            line: 189,
            column: 12
          }
        },
        "39": {
          start: {
            line: 192,
            column: 4
          },
          end: {
            line: 218,
            column: 5
          }
        },
        "40": {
          start: {
            line: 193,
            column: 22
          },
          end: {
            line: 193,
            column: 47
          }
        },
        "41": {
          start: {
            line: 194,
            column: 20
          },
          end: {
            line: 194,
            column: 56
          }
        },
        "42": {
          start: {
            line: 196,
            column: 6
          },
          end: {
            line: 202,
            column: 7
          }
        },
        "43": {
          start: {
            line: 197,
            column: 8
          },
          end: {
            line: 200,
            column: 9
          }
        },
        "44": {
          start: {
            line: 201,
            column: 8
          },
          end: {
            line: 201,
            column: 53
          }
        },
        "45": {
          start: {
            line: 204,
            column: 6
          },
          end: {
            line: 204,
            column: 66
          }
        },
        "46": {
          start: {
            line: 206,
            column: 6
          },
          end: {
            line: 210,
            column: 7
          }
        },
        "47": {
          start: {
            line: 207,
            column: 8
          },
          end: {
            line: 207,
            column: 37
          }
        },
        "48": {
          start: {
            line: 209,
            column: 8
          },
          end: {
            line: 209,
            column: 37
          }
        },
        "49": {
          start: {
            line: 212,
            column: 6
          },
          end: {
            line: 215,
            column: 7
          }
        },
        "50": {
          start: {
            line: 213,
            column: 8
          },
          end: {
            line: 213,
            column: 31
          }
        },
        "51": {
          start: {
            line: 214,
            column: 8
          },
          end: {
            line: 214,
            column: 14
          }
        },
        "52": {
          start: {
            line: 217,
            column: 6
          },
          end: {
            line: 217,
            column: 29
          }
        },
        "53": {
          start: {
            line: 222,
            column: 4
          },
          end: {
            line: 222,
            column: 31
          }
        },
        "54": {
          start: {
            line: 224,
            column: 4
          },
          end: {
            line: 224,
            column: 57
          }
        },
        "55": {
          start: {
            line: 226,
            column: 4
          },
          end: {
            line: 226,
            column: 51
          }
        },
        "56": {
          start: {
            line: 227,
            column: 4
          },
          end: {
            line: 227,
            column: 82
          }
        },
        "57": {
          start: {
            line: 229,
            column: 4
          },
          end: {
            line: 231,
            column: 5
          }
        },
        "58": {
          start: {
            line: 230,
            column: 6
          },
          end: {
            line: 230,
            column: 26
          }
        },
        "59": {
          start: {
            line: 233,
            column: 4
          },
          end: {
            line: 233,
            column: 30
          }
        },
        "60": {
          start: {
            line: 234,
            column: 4
          },
          end: {
            line: 234,
            column: 30
          }
        },
        "61": {
          start: {
            line: 235,
            column: 4
          },
          end: {
            line: 235,
            column: 30
          }
        },
        "62": {
          start: {
            line: 236,
            column: 4
          },
          end: {
            line: 236,
            column: 30
          }
        },
        "63": {
          start: {
            line: 237,
            column: 4
          },
          end: {
            line: 239,
            column: 5
          }
        },
        "64": {
          start: {
            line: 238,
            column: 6
          },
          end: {
            line: 238,
            column: 28
          }
        },
        "65": {
          start: {
            line: 241,
            column: 4
          },
          end: {
            line: 241,
            column: 23
          }
        },
        "66": {
          start: {
            line: 242,
            column: 4
          },
          end: {
            line: 242,
            column: 23
          }
        },
        "67": {
          start: {
            line: 243,
            column: 4
          },
          end: {
            line: 243,
            column: 23
          }
        },
        "68": {
          start: {
            line: 244,
            column: 4
          },
          end: {
            line: 244,
            column: 23
          }
        },
        "69": {
          start: {
            line: 248,
            column: 4
          },
          end: {
            line: 250,
            column: 5
          }
        },
        "70": {
          start: {
            line: 249,
            column: 6
          },
          end: {
            line: 249,
            column: 60
          }
        },
        "71": {
          start: {
            line: 252,
            column: 22
          },
          end: {
            line: 252,
            column: 58
          }
        },
        "72": {
          start: {
            line: 253,
            column: 4
          },
          end: {
            line: 329,
            column: 5
          }
        },
        "73": {
          start: {
            line: 254,
            column: 6
          },
          end: {
            line: 254,
            column: 40
          }
        },
        "74": {
          start: {
            line: 256,
            column: 25
          },
          end: {
            line: 256,
            column: 58
          }
        },
        "75": {
          start: {
            line: 257,
            column: 25
          },
          end: {
            line: 260,
            column: 7
          }
        },
        "76": {
          start: {
            line: 262,
            column: 6
          },
          end: {
            line: 264,
            column: 7
          }
        },
        "77": {
          start: {
            line: 263,
            column: 8
          },
          end: {
            line: 263,
            column: 14
          }
        },
        "78": {
          start: {
            line: 266,
            column: 20
          },
          end: {
            line: 266,
            column: 40
          }
        },
        "79": {
          start: {
            line: 267,
            column: 20
          },
          end: {
            line: 267,
            column: 54
          }
        },
        "80": {
          start: {
            line: 269,
            column: 6
          },
          end: {
            line: 269,
            column: 35
          }
        },
        "81": {
          start: {
            line: 270,
            column: 6
          },
          end: {
            line: 270,
            column: 58
          }
        },
        "82": {
          start: {
            line: 272,
            column: 6
          },
          end: {
            line: 272,
            column: 23
          }
        },
        "83": {
          start: {
            line: 274,
            column: 6
          },
          end: {
            line: 276,
            column: 7
          }
        },
        "84": {
          start: {
            line: 275,
            column: 8
          },
          end: {
            line: 275,
            column: 39
          }
        },
        "85": {
          start: {
            line: 278,
            column: 25
          },
          end: {
            line: 280,
            column: 31
          }
        },
        "86": {
          start: {
            line: 282,
            column: 25
          },
          end: {
            line: 282,
            column: 55
          }
        },
        "87": {
          start: {
            line: 283,
            column: 6
          },
          end: {
            line: 283,
            column: 41
          }
        },
        "88": {
          start: {
            line: 285,
            column: 24
          },
          end: {
            line: 285,
            column: 44
          }
        },
        "89": {
          start: {
            line: 286,
            column: 6
          },
          end: {
            line: 286,
            column: 50
          }
        },
        "90": {
          start: {
            line: 288,
            column: 6
          },
          end: {
            line: 290,
            column: 7
          }
        },
        "91": {
          start: {
            line: 289,
            column: 8
          },
          end: {
            line: 289,
            column: 34
          }
        },
        "92": {
          start: {
            line: 292,
            column: 6
          },
          end: {
            line: 292,
            column: 62
          }
        },
        "93": {
          start: {
            line: 294,
            column: 6
          },
          end: {
            line: 294,
            column: 85
          }
        },
        "94": {
          start: {
            line: 296,
            column: 6
          },
          end: {
            line: 296,
            column: 37
          }
        },
        "95": {
          start: {
            line: 302,
            column: 6
          },
          end: {
            line: 304,
            column: 7
          }
        },
        "96": {
          start: {
            line: 303,
            column: 8
          },
          end: {
            line: 303,
            column: 65
          }
        },
        "97": {
          start: {
            line: 306,
            column: 23
          },
          end: {
            line: 318,
            column: 7
          }
        },
        "98": {
          start: {
            line: 307,
            column: 8
          },
          end: {
            line: 309,
            column: 9
          }
        },
        "99": {
          start: {
            line: 308,
            column: 10
          },
          end: {
            line: 308,
            column: 31
          }
        },
        "100": {
          start: {
            line: 310,
            column: 31
          },
          end: {
            line: 310,
            column: 47
          }
        },
        "101": {
          start: {
            line: 311,
            column: 8
          },
          end: {
            line: 311,
            column: 35
          }
        },
        "102": {
          start: {
            line: 313,
            column: 8
          },
          end: {
            line: 313,
            column: 61
          }
        },
        "103": {
          start: {
            line: 315,
            column: 8
          },
          end: {
            line: 317,
            column: 9
          }
        },
        "104": {
          start: {
            line: 316,
            column: 10
          },
          end: {
            line: 316,
            column: 33
          }
        },
        "105": {
          start: {
            line: 320,
            column: 6
          },
          end: {
            line: 328,
            column: 7
          }
        },
        "106": {
          start: {
            line: 321,
            column: 35
          },
          end: {
            line: 321,
            column: 82
          }
        },
        "107": {
          start: {
            line: 323,
            column: 8
          },
          end: {
            line: 325,
            column: 51
          }
        },
        "108": {
          start: {
            line: 327,
            column: 8
          },
          end: {
            line: 327,
            column: 18
          }
        },
        "109": {
          start: {
            line: 333,
            column: 22
          },
          end: {
            line: 333,
            column: 42
          }
        },
        "110": {
          start: {
            line: 334,
            column: 22
          },
          end: {
            line: 334,
            column: 58
          }
        },
        "111": {
          start: {
            line: 335,
            column: 21
          },
          end: {
            line: 350,
            column: 5
          }
        },
        "112": {
          start: {
            line: 336,
            column: 6
          },
          end: {
            line: 338,
            column: 7
          }
        },
        "113": {
          start: {
            line: 337,
            column: 8
          },
          end: {
            line: 337,
            column: 39
          }
        },
        "114": {
          start: {
            line: 340,
            column: 6
          },
          end: {
            line: 340,
            column: 27
          }
        },
        "115": {
          start: {
            line: 341,
            column: 6
          },
          end: {
            line: 341,
            column: 54
          }
        },
        "116": {
          start: {
            line: 342,
            column: 6
          },
          end: {
            line: 342,
            column: 60
          }
        },
        "117": {
          start: {
            line: 343,
            column: 6
          },
          end: {
            line: 345,
            column: 7
          }
        },
        "118": {
          start: {
            line: 344,
            column: 8
          },
          end: {
            line: 344,
            column: 30
          }
        },
        "119": {
          start: {
            line: 347,
            column: 6
          },
          end: {
            line: 349,
            column: 7
          }
        },
        "120": {
          start: {
            line: 348,
            column: 8
          },
          end: {
            line: 348,
            column: 18
          }
        },
        "121": {
          start: {
            line: 352,
            column: 4
          },
          end: {
            line: 352,
            column: 38
          }
        },
        "122": {
          start: {
            line: 354,
            column: 4
          },
          end: {
            line: 356,
            column: 5
          }
        },
        "123": {
          start: {
            line: 355,
            column: 6
          },
          end: {
            line: 355,
            column: 12
          }
        },
        "124": {
          start: {
            line: 358,
            column: 4
          },
          end: {
            line: 358,
            column: 38
          }
        },
        "125": {
          start: {
            line: 362,
            column: 4
          },
          end: {
            line: 364,
            column: 5
          }
        },
        "126": {
          start: {
            line: 363,
            column: 6
          },
          end: {
            line: 363,
            column: 64
          }
        },
        "127": {
          start: {
            line: 366,
            column: 4
          },
          end: {
            line: 366,
            column: 46
          }
        },
        "128": {
          start: {
            line: 367,
            column: 4
          },
          end: {
            line: 367,
            column: 46
          }
        },
        "129": {
          start: {
            line: 368,
            column: 4
          },
          end: {
            line: 368,
            column: 46
          }
        },
        "130": {
          start: {
            line: 370,
            column: 4
          },
          end: {
            line: 378,
            column: 5
          }
        },
        "131": {
          start: {
            line: 371,
            column: 33
          },
          end: {
            line: 371,
            column: 75
          }
        },
        "132": {
          start: {
            line: 373,
            column: 6
          },
          end: {
            line: 375,
            column: 49
          }
        },
        "133": {
          start: {
            line: 377,
            column: 6
          },
          end: {
            line: 377,
            column: 16
          }
        },
        "134": {
          start: {
            line: 380,
            column: 4
          },
          end: {
            line: 380,
            column: 25
          }
        },
        "135": {
          start: {
            line: 384,
            column: 4
          },
          end: {
            line: 386,
            column: 5
          }
        },
        "136": {
          start: {
            line: 385,
            column: 6
          },
          end: {
            line: 385,
            column: 35
          }
        },
        "137": {
          start: {
            line: 392,
            column: 4
          },
          end: {
            line: 392,
            column: 35
          }
        },
        "138": {
          start: {
            line: 396,
            column: 4
          },
          end: {
            line: 396,
            column: 69
          }
        },
        "139": {
          start: {
            line: 400,
            column: 4
          },
          end: {
            line: 400,
            column: 53
          }
        },
        "140": {
          start: {
            line: 401,
            column: 4
          },
          end: {
            line: 401,
            column: 19
          }
        },
        "141": {
          start: {
            line: 405,
            column: 16
          },
          end: {
            line: 405,
            column: 36
          }
        },
        "142": {
          start: {
            line: 406,
            column: 4
          },
          end: {
            line: 406,
            column: 92
          }
        },
        "143": {
          start: {
            line: 407,
            column: 4
          },
          end: {
            line: 407,
            column: 61
          }
        },
        "144": {
          start: {
            line: 411,
            column: 4
          },
          end: {
            line: 422,
            column: 5
          }
        },
        "145": {
          start: {
            line: 413,
            column: 6
          },
          end: {
            line: 419,
            column: 7
          }
        },
        "146": {
          start: {
            line: 414,
            column: 8
          },
          end: {
            line: 416,
            column: 9
          }
        },
        "147": {
          start: {
            line: 415,
            column: 10
          },
          end: {
            line: 415,
            column: 42
          }
        },
        "148": {
          start: {
            line: 418,
            column: 8
          },
          end: {
            line: 418,
            column: 40
          }
        },
        "149": {
          start: {
            line: 421,
            column: 6
          },
          end: {
            line: 421,
            column: 12
          }
        },
        "150": {
          start: {
            line: 424,
            column: 4
          },
          end: {
            line: 432,
            column: 5
          }
        },
        "151": {
          start: {
            line: 425,
            column: 6
          },
          end: {
            line: 427,
            column: 7
          }
        },
        "152": {
          start: {
            line: 426,
            column: 8
          },
          end: {
            line: 426,
            column: 86
          }
        },
        "153": {
          start: {
            line: 429,
            column: 6
          },
          end: {
            line: 429,
            column: 28
          }
        },
        "154": {
          start: {
            line: 431,
            column: 6
          },
          end: {
            line: 431,
            column: 28
          }
        },
        "155": {
          start: {
            line: 436,
            column: 16
          },
          end: {
            line: 436,
            column: 64
          }
        },
        "156": {
          start: {
            line: 438,
            column: 4
          },
          end: {
            line: 442,
            column: 5
          }
        },
        "157": {
          start: {
            line: 439,
            column: 6
          },
          end: {
            line: 441,
            column: 27
          }
        },
        "158": {
          start: {
            line: 444,
            column: 4
          },
          end: {
            line: 444,
            column: 16
          }
        },
        "159": {
          start: {
            line: 450,
            column: 28
          },
          end: {
            line: 470,
            column: 5
          }
        },
        "160": {
          start: {
            line: 465,
            column: 8
          },
          end: {
            line: 467,
            column: 9
          }
        },
        "161": {
          start: {
            line: 466,
            column: 10
          },
          end: {
            line: 466,
            column: 49
          }
        },
        "162": {
          start: {
            line: 469,
            column: 26
          },
          end: {
            line: 469,
            column: 65
          }
        },
        "163": {
          start: {
            line: 472,
            column: 4
          },
          end: {
            line: 475,
            column: 5
          }
        },
        "164": {
          start: {
            line: 479,
            column: 19
          },
          end: {
            line: 479,
            column: 21
          }
        },
        "165": {
          start: {
            line: 481,
            column: 4
          },
          end: {
            line: 492,
            column: 5
          }
        },
        "166": {
          start: {
            line: 482,
            column: 6
          },
          end: {
            line: 489,
            column: 7
          }
        },
        "167": {
          start: {
            line: 483,
            column: 8
          },
          end: {
            line: 486,
            column: 9
          }
        },
        "168": {
          start: {
            line: 488,
            column: 8
          },
          end: {
            line: 488,
            column: 19
          }
        },
        "169": {
          start: {
            line: 491,
            column: 6
          },
          end: {
            line: 491,
            column: 40
          }
        },
        "170": {
          start: {
            line: 494,
            column: 4
          },
          end: {
            line: 494,
            column: 17
          }
        },
        "171": {
          start: {
            line: 498,
            column: 4
          },
          end: {
            line: 500,
            column: 5
          }
        },
        "172": {
          start: {
            line: 499,
            column: 6
          },
          end: {
            line: 499,
            column: 26
          }
        },
        "173": {
          start: {
            line: 502,
            column: 4
          },
          end: {
            line: 504,
            column: 5
          }
        },
        "174": {
          start: {
            line: 503,
            column: 6
          },
          end: {
            line: 503,
            column: 37
          }
        },
        "175": {
          start: {
            line: 506,
            column: 4
          },
          end: {
            line: 506,
            column: 50
          }
        },
        "176": {
          start: {
            line: 510,
            column: 4
          },
          end: {
            line: 510,
            column: 49
          }
        },
        "177": {
          start: {
            line: 514,
            column: 21
          },
          end: {
            line: 514,
            column: 51
          }
        },
        "178": {
          start: {
            line: 516,
            column: 4
          },
          end: {
            line: 543,
            column: 6
          }
        },
        "179": {
          start: {
            line: 517,
            column: 6
          },
          end: {
            line: 542,
            column: 7
          }
        },
        "180": {
          start: {
            line: 518,
            column: 8
          },
          end: {
            line: 522,
            column: 9
          }
        },
        "181": {
          start: {
            line: 521,
            column: 21
          },
          end: {
            line: 521,
            column: 39
          }
        },
        "182": {
          start: {
            line: 523,
            column: 13
          },
          end: {
            line: 542,
            column: 7
          }
        },
        "183": {
          start: {
            line: 524,
            column: 24
          },
          end: {
            line: 526,
            column: 42
          }
        },
        "184": {
          start: {
            line: 527,
            column: 25
          },
          end: {
            line: 529,
            column: 43
          }
        },
        "185": {
          start: {
            line: 531,
            column: 8
          },
          end: {
            line: 541,
            column: 11
          }
        },
        "186": {
          start: {
            line: 535,
            column: 23
          },
          end: {
            line: 535,
            column: 41
          }
        },
        "187": {
          start: {
            line: 540,
            column: 23
          },
          end: {
            line: 540,
            column: 41
          }
        },
        "188": {
          start: {
            line: 545,
            column: 4
          },
          end: {
            line: 549,
            column: 5
          }
        },
        "189": {
          start: {
            line: 546,
            column: 6
          },
          end: {
            line: 548,
            column: 7
          }
        },
        "190": {
          start: {
            line: 547,
            column: 8
          },
          end: {
            line: 547,
            column: 19
          }
        },
        "191": {
          start: {
            line: 551,
            column: 4
          },
          end: {
            line: 554,
            column: 5
          }
        },
        "192": {
          start: {
            line: 556,
            column: 4
          },
          end: {
            line: 564,
            column: 5
          }
        },
        "193": {
          start: {
            line: 557,
            column: 6
          },
          end: {
            line: 561,
            column: 7
          }
        },
        "194": {
          start: {
            line: 563,
            column: 6
          },
          end: {
            line: 563,
            column: 22
          }
        },
        "195": {
          start: {
            line: 568,
            column: 22
          },
          end: {
            line: 568,
            column: 77
          }
        },
        "196": {
          start: {
            line: 570,
            column: 4
          },
          end: {
            line: 577,
            column: 5
          }
        },
        "197": {
          start: {
            line: 571,
            column: 6
          },
          end: {
            line: 574,
            column: 7
          }
        },
        "198": {
          start: {
            line: 576,
            column: 6
          },
          end: {
            line: 576,
            column: 44
          }
        },
        "199": {
          start: {
            line: 581,
            column: 20
          },
          end: {
            line: 581,
            column: 45
          }
        },
        "200": {
          start: {
            line: 582,
            column: 4
          },
          end: {
            line: 582,
            column: 61
          }
        },
        "201": {
          start: {
            line: 584,
            column: 4
          },
          end: {
            line: 590,
            column: 5
          }
        },
        "202": {
          start: {
            line: 585,
            column: 6
          },
          end: {
            line: 588,
            column: 7
          }
        },
        "203": {
          start: {
            line: 589,
            column: 6
          },
          end: {
            line: 589,
            column: 51
          }
        },
        "204": {
          start: {
            line: 592,
            column: 4
          },
          end: {
            line: 596,
            column: 5
          }
        },
        "205": {
          start: {
            line: 593,
            column: 6
          },
          end: {
            line: 595,
            column: 14
          }
        },
        "206": {
          start: {
            line: 598,
            column: 4
          },
          end: {
            line: 601,
            column: 5
          }
        },
        "207": {
          start: {
            line: 599,
            column: 6
          },
          end: {
            line: 599,
            column: 43
          }
        },
        "208": {
          start: {
            line: 600,
            column: 6
          },
          end: {
            line: 600,
            column: 12
          }
        },
        "209": {
          start: {
            line: 603,
            column: 4
          },
          end: {
            line: 603,
            column: 34
          }
        },
        "210": {
          start: {
            line: 605,
            column: 4
          },
          end: {
            line: 605,
            column: 41
          }
        },
        "211": {
          start: {
            line: 607,
            column: 4
          },
          end: {
            line: 610,
            column: 5
          }
        },
        "212": {
          start: {
            line: 608,
            column: 6
          },
          end: {
            line: 608,
            column: 20
          }
        },
        "213": {
          start: {
            line: 609,
            column: 6
          },
          end: {
            line: 609,
            column: 12
          }
        },
        "214": {
          start: {
            line: 612,
            column: 4
          },
          end: {
            line: 616,
            column: 33
          }
        },
        "215": {
          start: {
            line: 613,
            column: 6
          },
          end: {
            line: 615,
            column: 7
          }
        },
        "216": {
          start: {
            line: 614,
            column: 8
          },
          end: {
            line: 614,
            column: 22
          }
        },
        "217": {
          start: {
            line: 620,
            column: 20
          },
          end: {
            line: 620,
            column: 45
          }
        },
        "218": {
          start: {
            line: 621,
            column: 4
          },
          end: {
            line: 621,
            column: 61
          }
        },
        "219": {
          start: {
            line: 623,
            column: 4
          },
          end: {
            line: 629,
            column: 5
          }
        },
        "220": {
          start: {
            line: 624,
            column: 6
          },
          end: {
            line: 627,
            column: 7
          }
        },
        "221": {
          start: {
            line: 628,
            column: 6
          },
          end: {
            line: 628,
            column: 51
          }
        },
        "222": {
          start: {
            line: 631,
            column: 4
          },
          end: {
            line: 635,
            column: 5
          }
        },
        "223": {
          start: {
            line: 632,
            column: 6
          },
          end: {
            line: 634,
            column: 15
          }
        },
        "224": {
          start: {
            line: 637,
            column: 4
          },
          end: {
            line: 639,
            column: 5
          }
        },
        "225": {
          start: {
            line: 638,
            column: 6
          },
          end: {
            line: 638,
            column: 12
          }
        },
        "226": {
          start: {
            line: 641,
            column: 4
          },
          end: {
            line: 641,
            column: 34
          }
        },
        "227": {
          start: {
            line: 643,
            column: 4
          },
          end: {
            line: 643,
            column: 40
          }
        },
        "228": {
          start: {
            line: 645,
            column: 4
          },
          end: {
            line: 648,
            column: 5
          }
        },
        "229": {
          start: {
            line: 646,
            column: 6
          },
          end: {
            line: 646,
            column: 20
          }
        },
        "230": {
          start: {
            line: 647,
            column: 6
          },
          end: {
            line: 647,
            column: 12
          }
        },
        "231": {
          start: {
            line: 650,
            column: 4
          },
          end: {
            line: 654,
            column: 33
          }
        },
        "232": {
          start: {
            line: 651,
            column: 6
          },
          end: {
            line: 653,
            column: 7
          }
        },
        "233": {
          start: {
            line: 652,
            column: 8
          },
          end: {
            line: 652,
            column: 22
          }
        },
        "234": {
          start: {
            line: 658,
            column: 4
          },
          end: {
            line: 662,
            column: 5
          }
        },
        "235": {
          start: {
            line: 659,
            column: 6
          },
          end: {
            line: 661,
            column: 7
          }
        },
        "236": {
          start: {
            line: 660,
            column: 8
          },
          end: {
            line: 660,
            column: 19
          }
        },
        "237": {
          start: {
            line: 664,
            column: 4
          },
          end: {
            line: 664,
            column: 16
          }
        },
        "238": {
          start: {
            line: 668,
            column: 27
          },
          end: {
            line: 668,
            column: 49
          }
        },
        "239": {
          start: {
            line: 670,
            column: 4
          },
          end: {
            line: 675,
            column: 8
          }
        },
        "240": {
          start: {
            line: 672,
            column: 8
          },
          end: {
            line: 674,
            column: 9
          }
        },
        "241": {
          start: {
            line: 673,
            column: 10
          },
          end: {
            line: 673,
            column: 41
          }
        },
        "242": {
          start: {
            line: 677,
            column: 4
          },
          end: {
            line: 681,
            column: 5
          }
        },
        "243": {
          start: {
            line: 683,
            column: 4
          },
          end: {
            line: 688,
            column: 5
          }
        },
        "244": {
          start: {
            line: 684,
            column: 6
          },
          end: {
            line: 687,
            column: 7
          }
        },
        "245": {
          start: {
            line: 690,
            column: 4
          },
          end: {
            line: 692,
            column: 5
          }
        },
        "246": {
          start: {
            line: 691,
            column: 6
          },
          end: {
            line: 691,
            column: 44
          }
        },
        "247": {
          start: {
            line: 694,
            column: 4
          },
          end: {
            line: 696,
            column: 5
          }
        },
        "248": {
          start: {
            line: 695,
            column: 6
          },
          end: {
            line: 695,
            column: 48
          }
        },
        "249": {
          start: {
            line: 698,
            column: 4
          },
          end: {
            line: 702,
            column: 5
          }
        },
        "250": {
          start: {
            line: 704,
            column: 4
          },
          end: {
            line: 706,
            column: 5
          }
        },
        "251": {
          start: {
            line: 705,
            column: 6
          },
          end: {
            line: 705,
            column: 90
          }
        },
        "252": {
          start: {
            line: 708,
            column: 4
          },
          end: {
            line: 708,
            column: 17
          }
        },
        "253": {
          start: {
            line: 712,
            column: 19
          },
          end: {
            line: 712,
            column: 21
          }
        },
        "254": {
          start: {
            line: 714,
            column: 4
          },
          end: {
            line: 720,
            column: 5
          }
        },
        "255": {
          start: {
            line: 715,
            column: 6
          },
          end: {
            line: 719,
            column: 7
          }
        },
        "256": {
          start: {
            line: 716,
            column: 8
          },
          end: {
            line: 718,
            column: 9
          }
        },
        "257": {
          start: {
            line: 717,
            column: 10
          },
          end: {
            line: 717,
            column: 40
          }
        },
        "258": {
          start: {
            line: 722,
            column: 4
          },
          end: {
            line: 722,
            column: 17
          }
        },
        "259": {
          start: {
            line: 726,
            column: 17
          },
          end: {
            line: 726,
            column: 40
          }
        },
        "260": {
          start: {
            line: 727,
            column: 21
          },
          end: {
            line: 727,
            column: 65
          }
        },
        "261": {
          start: {
            line: 728,
            column: 4
          },
          end: {
            line: 730,
            column: 5
          }
        },
        "262": {
          start: {
            line: 729,
            column: 6
          },
          end: {
            line: 729,
            column: 41
          }
        },
        "263": {
          start: {
            line: 734,
            column: 27
          },
          end: {
            line: 734,
            column: 46
          }
        },
        "264": {
          start: {
            line: 735,
            column: 4
          },
          end: {
            line: 735,
            column: 36
          }
        },
        "265": {
          start: {
            line: 736,
            column: 4
          },
          end: {
            line: 736,
            column: 25
          }
        },
        "266": {
          start: {
            line: 737,
            column: 4
          },
          end: {
            line: 737,
            column: 70
          }
        },
        "267": {
          start: {
            line: 741,
            column: 16
          },
          end: {
            line: 741,
            column: 36
          }
        },
        "268": {
          start: {
            line: 742,
            column: 32
          },
          end: {
            line: 742,
            column: 53
          }
        },
        "269": {
          start: {
            line: 744,
            column: 4
          },
          end: {
            line: 746,
            column: 5
          }
        },
        "270": {
          start: {
            line: 745,
            column: 6
          },
          end: {
            line: 745,
            column: 12
          }
        },
        "271": {
          start: {
            line: 748,
            column: 4
          },
          end: {
            line: 748,
            column: 38
          }
        },
        "272": {
          start: {
            line: 749,
            column: 4
          },
          end: {
            line: 749,
            column: 33
          }
        },
        "273": {
          start: {
            line: 750,
            column: 4
          },
          end: {
            line: 750,
            column: 15
          }
        },
        "274": {
          start: {
            line: 751,
            column: 4
          },
          end: {
            line: 751,
            column: 15
          }
        },
        "275": {
          start: {
            line: 752,
            column: 4
          },
          end: {
            line: 752,
            column: 47
          }
        },
        "276": {
          start: {
            line: 758,
            column: 4
          },
          end: {
            line: 777,
            column: 6
          }
        },
        "277": {
          start: {
            line: 759,
            column: 17
          },
          end: {
            line: 759,
            column: 39
          }
        },
        "278": {
          start: {
            line: 760,
            column: 22
          },
          end: {
            line: 760,
            column: 58
          }
        },
        "279": {
          start: {
            line: 762,
            column: 6
          },
          end: {
            line: 764,
            column: 7
          }
        },
        "280": {
          start: {
            line: 763,
            column: 8
          },
          end: {
            line: 763,
            column: 14
          }
        },
        "281": {
          start: {
            line: 766,
            column: 6
          },
          end: {
            line: 769,
            column: 7
          }
        },
        "282": {
          start: {
            line: 767,
            column: 8
          },
          end: {
            line: 767,
            column: 41
          }
        },
        "283": {
          start: {
            line: 768,
            column: 8
          },
          end: {
            line: 768,
            column: 36
          }
        },
        "284": {
          start: {
            line: 771,
            column: 6
          },
          end: {
            line: 776,
            column: 7
          }
        },
        "285": {
          start: {
            line: 772,
            column: 8
          },
          end: {
            line: 774,
            column: 9
          }
        },
        "286": {
          start: {
            line: 773,
            column: 10
          },
          end: {
            line: 773,
            column: 60
          }
        },
        "287": {
          start: {
            line: 775,
            column: 8
          },
          end: {
            line: 775,
            column: 22
          }
        },
        "288": {
          start: {
            line: 787,
            column: 0
          },
          end: {
            line: 787,
            column: 37
          }
        },
        "289": {
          start: {
            line: 788,
            column: 0
          },
          end: {
            line: 788,
            column: 32
          }
        },
        "290": {
          start: {
            line: 789,
            column: 0
          },
          end: {
            line: 792,
            column: 1
          }
        },
        "291": {
          start: {
            line: 790,
            column: 2
          },
          end: {
            line: 790,
            column: 33
          }
        },
        "292": {
          start: {
            line: 791,
            column: 2
          },
          end: {
            line: 791,
            column: 33
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 123,
              column: 2
            },
            end: {
              line: 123,
              column: 3
            }
          },
          loc: {
            start: {
              line: 123,
              column: 31
            },
            end: {
              line: 141,
              column: 3
            }
          },
          line: 123
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 145,
              column: 2
            },
            end: {
              line: 145,
              column: 3
            }
          },
          loc: {
            start: {
              line: 145,
              column: 23
            },
            end: {
              line: 147,
              column: 3
            }
          },
          line: 145
        },
        "2": {
          name: "(anonymous_2)",
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
              column: 23
            },
            end: {
              line: 151,
              column: 3
            }
          },
          line: 149
        },
        "3": {
          name: "(anonymous_3)",
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
              column: 20
            },
            end: {
              line: 155,
              column: 3
            }
          },
          line: 153
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 157,
              column: 2
            },
            end: {
              line: 157,
              column: 3
            }
          },
          loc: {
            start: {
              line: 157,
              column: 24
            },
            end: {
              line: 159,
              column: 3
            }
          },
          line: 157
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 161,
              column: 2
            },
            end: {
              line: 161,
              column: 3
            }
          },
          loc: {
            start: {
              line: 161,
              column: 21
            },
            end: {
              line: 163,
              column: 3
            }
          },
          line: 161
        },
        "6": {
          name: "(anonymous_6)",
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
              column: 25
            },
            end: {
              line: 167,
              column: 3
            }
          },
          line: 165
        },
        "7": {
          name: "(anonymous_7)",
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
              column: 27
            },
            end: {
              line: 171,
              column: 3
            }
          },
          line: 169
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 175,
              column: 2
            },
            end: {
              line: 175,
              column: 3
            }
          },
          loc: {
            start: {
              line: 175,
              column: 11
            },
            end: {
              line: 177,
              column: 3
            }
          },
          line: 175
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 179,
              column: 2
            },
            end: {
              line: 179,
              column: 3
            }
          },
          loc: {
            start: {
              line: 179,
              column: 12
            },
            end: {
              line: 181,
              column: 3
            }
          },
          line: 179
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 183,
              column: 2
            },
            end: {
              line: 183,
              column: 3
            }
          },
          loc: {
            start: {
              line: 183,
              column: 18
            },
            end: {
              line: 185,
              column: 3
            }
          },
          line: 183
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 187,
              column: 2
            },
            end: {
              line: 187,
              column: 3
            }
          },
          loc: {
            start: {
              line: 187,
              column: 16
            },
            end: {
              line: 219,
              column: 3
            }
          },
          line: 187
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 221,
              column: 2
            },
            end: {
              line: 221,
              column: 3
            }
          },
          loc: {
            start: {
              line: 221,
              column: 12
            },
            end: {
              line: 245,
              column: 3
            }
          },
          line: 221
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 247,
              column: 2
            },
            end: {
              line: 247,
              column: 3
            }
          },
          loc: {
            start: {
              line: 247,
              column: 9
            },
            end: {
              line: 330,
              column: 3
            }
          },
          line: 247
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 306,
              column: 23
            },
            end: {
              line: 306,
              column: 24
            }
          },
          loc: {
            start: {
              line: 306,
              column: 29
            },
            end: {
              line: 318,
              column: 7
            }
          },
          line: 306
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 332,
              column: 2
            },
            end: {
              line: 332,
              column: 3
            }
          },
          loc: {
            start: {
              line: 332,
              column: 17
            },
            end: {
              line: 381,
              column: 3
            }
          },
          line: 332
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 335,
              column: 21
            },
            end: {
              line: 335,
              column: 22
            }
          },
          loc: {
            start: {
              line: 335,
              column: 27
            },
            end: {
              line: 350,
              column: 5
            }
          },
          line: 335
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 383,
              column: 2
            },
            end: {
              line: 383,
              column: 3
            }
          },
          loc: {
            start: {
              line: 383,
              column: 11
            },
            end: {
              line: 387,
              column: 3
            }
          },
          line: 383
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 391,
              column: 2
            },
            end: {
              line: 391,
              column: 3
            }
          },
          loc: {
            start: {
              line: 391,
              column: 18
            },
            end: {
              line: 393,
              column: 3
            }
          },
          line: 391
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 395,
              column: 2
            },
            end: {
              line: 395,
              column: 3
            }
          },
          loc: {
            start: {
              line: 395,
              column: 33
            },
            end: {
              line: 397,
              column: 3
            }
          },
          line: 395
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 399,
              column: 2
            },
            end: {
              line: 399,
              column: 3
            }
          },
          loc: {
            start: {
              line: 399,
              column: 18
            },
            end: {
              line: 402,
              column: 3
            }
          },
          line: 399
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 404,
              column: 2
            },
            end: {
              line: 404,
              column: 3
            }
          },
          loc: {
            start: {
              line: 404,
              column: 15
            },
            end: {
              line: 408,
              column: 3
            }
          },
          line: 404
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 410,
              column: 2
            },
            end: {
              line: 410,
              column: 3
            }
          },
          loc: {
            start: {
              line: 410,
              column: 39
            },
            end: {
              line: 433,
              column: 3
            }
          },
          line: 410
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 435,
              column: 2
            },
            end: {
              line: 435,
              column: 3
            }
          },
          loc: {
            start: {
              line: 435,
              column: 13
            },
            end: {
              line: 445,
              column: 3
            }
          },
          line: 435
        },
        "24": {
          name: "(anonymous_24)",
          decl: {
            start: {
              line: 449,
              column: 2
            },
            end: {
              line: 449,
              column: 3
            }
          },
          loc: {
            start: {
              line: 449,
              column: 31
            },
            end: {
              line: 476,
              column: 3
            }
          },
          line: 449
        },
        "25": {
          name: "(anonymous_25)",
          decl: {
            start: {
              line: 464,
              column: 16
            },
            end: {
              line: 464,
              column: 17
            }
          },
          loc: {
            start: {
              line: 464,
              column: 26
            },
            end: {
              line: 468,
              column: 7
            }
          },
          line: 464
        },
        "26": {
          name: "(anonymous_26)",
          decl: {
            start: {
              line: 469,
              column: 16
            },
            end: {
              line: 469,
              column: 17
            }
          },
          loc: {
            start: {
              line: 469,
              column: 26
            },
            end: {
              line: 469,
              column: 65
            }
          },
          line: 469
        },
        "27": {
          name: "(anonymous_27)",
          decl: {
            start: {
              line: 478,
              column: 2
            },
            end: {
              line: 478,
              column: 3
            }
          },
          loc: {
            start: {
              line: 478,
              column: 15
            },
            end: {
              line: 495,
              column: 3
            }
          },
          line: 478
        },
        "28": {
          name: "(anonymous_28)",
          decl: {
            start: {
              line: 482,
              column: 18
            },
            end: {
              line: 482,
              column: 19
            }
          },
          loc: {
            start: {
              line: 482,
              column: 28
            },
            end: {
              line: 489,
              column: 7
            }
          },
          line: 482
        },
        "29": {
          name: "(anonymous_29)",
          decl: {
            start: {
              line: 497,
              column: 2
            },
            end: {
              line: 497,
              column: 3
            }
          },
          loc: {
            start: {
              line: 497,
              column: 18
            },
            end: {
              line: 507,
              column: 3
            }
          },
          line: 497
        },
        "30": {
          name: "(anonymous_30)",
          decl: {
            start: {
              line: 509,
              column: 2
            },
            end: {
              line: 509,
              column: 3
            }
          },
          loc: {
            start: {
              line: 509,
              column: 28
            },
            end: {
              line: 511,
              column: 3
            }
          },
          line: 509
        },
        "31": {
          name: "(anonymous_31)",
          decl: {
            start: {
              line: 513,
              column: 2
            },
            end: {
              line: 513,
              column: 3
            }
          },
          loc: {
            start: {
              line: 513,
              column: 18
            },
            end: {
              line: 565,
              column: 3
            }
          },
          line: 513
        },
        "32": {
          name: "(anonymous_32)",
          decl: {
            start: {
              line: 516,
              column: 21
            },
            end: {
              line: 516,
              column: 22
            }
          },
          loc: {
            start: {
              line: 516,
              column: 34
            },
            end: {
              line: 543,
              column: 5
            }
          },
          line: 516
        },
        "33": {
          name: "(anonymous_33)",
          decl: {
            start: {
              line: 521,
              column: 10
            },
            end: {
              line: 521,
              column: 11
            }
          },
          loc: {
            start: {
              line: 521,
              column: 21
            },
            end: {
              line: 521,
              column: 39
            }
          },
          line: 521
        },
        "34": {
          name: "(anonymous_34)",
          decl: {
            start: {
              line: 535,
              column: 12
            },
            end: {
              line: 535,
              column: 13
            }
          },
          loc: {
            start: {
              line: 535,
              column: 23
            },
            end: {
              line: 535,
              column: 41
            }
          },
          line: 535
        },
        "35": {
          name: "(anonymous_35)",
          decl: {
            start: {
              line: 540,
              column: 12
            },
            end: {
              line: 540,
              column: 13
            }
          },
          loc: {
            start: {
              line: 540,
              column: 23
            },
            end: {
              line: 540,
              column: 41
            }
          },
          line: 540
        },
        "36": {
          name: "(anonymous_36)",
          decl: {
            start: {
              line: 545,
              column: 29
            },
            end: {
              line: 545,
              column: 30
            }
          },
          loc: {
            start: {
              line: 545,
              column: 35
            },
            end: {
              line: 549,
              column: 5
            }
          },
          line: 545
        },
        "37": {
          name: "(anonymous_37)",
          decl: {
            start: {
              line: 567,
              column: 2
            },
            end: {
              line: 567,
              column: 3
            }
          },
          loc: {
            start: {
              line: 567,
              column: 14
            },
            end: {
              line: 578,
              column: 3
            }
          },
          line: 567
        },
        "38": {
          name: "(anonymous_38)",
          decl: {
            start: {
              line: 580,
              column: 2
            },
            end: {
              line: 580,
              column: 3
            }
          },
          loc: {
            start: {
              line: 580,
              column: 25
            },
            end: {
              line: 617,
              column: 3
            }
          },
          line: 580
        },
        "39": {
          name: "(anonymous_39)",
          decl: {
            start: {
              line: 612,
              column: 34
            },
            end: {
              line: 612,
              column: 35
            }
          },
          loc: {
            start: {
              line: 612,
              column: 40
            },
            end: {
              line: 616,
              column: 5
            }
          },
          line: 612
        },
        "40": {
          name: "(anonymous_40)",
          decl: {
            start: {
              line: 619,
              column: 2
            },
            end: {
              line: 619,
              column: 3
            }
          },
          loc: {
            start: {
              line: 619,
              column: 25
            },
            end: {
              line: 655,
              column: 3
            }
          },
          line: 619
        },
        "41": {
          name: "(anonymous_41)",
          decl: {
            start: {
              line: 650,
              column: 34
            },
            end: {
              line: 650,
              column: 35
            }
          },
          loc: {
            start: {
              line: 650,
              column: 40
            },
            end: {
              line: 654,
              column: 5
            }
          },
          line: 650
        },
        "42": {
          name: "(anonymous_42)",
          decl: {
            start: {
              line: 657,
              column: 2
            },
            end: {
              line: 657,
              column: 3
            }
          },
          loc: {
            start: {
              line: 657,
              column: 25
            },
            end: {
              line: 665,
              column: 3
            }
          },
          line: 657
        },
        "43": {
          name: "(anonymous_43)",
          decl: {
            start: {
              line: 667,
              column: 2
            },
            end: {
              line: 667,
              column: 3
            }
          },
          loc: {
            start: {
              line: 667,
              column: 21
            },
            end: {
              line: 709,
              column: 3
            }
          },
          line: 667
        },
        "44": {
          name: "(anonymous_44)",
          decl: {
            start: {
              line: 671,
              column: 15
            },
            end: {
              line: 671,
              column: 16
            }
          },
          loc: {
            start: {
              line: 671,
              column: 29
            },
            end: {
              line: 675,
              column: 7
            }
          },
          line: 671
        },
        "45": {
          name: "(anonymous_45)",
          decl: {
            start: {
              line: 711,
              column: 2
            },
            end: {
              line: 711,
              column: 3
            }
          },
          loc: {
            start: {
              line: 711,
              column: 23
            },
            end: {
              line: 723,
              column: 3
            }
          },
          line: 711
        },
        "46": {
          name: "(anonymous_46)",
          decl: {
            start: {
              line: 725,
              column: 2
            },
            end: {
              line: 725,
              column: 3
            }
          },
          loc: {
            start: {
              line: 725,
              column: 19
            },
            end: {
              line: 731,
              column: 3
            }
          },
          line: 725
        },
        "47": {
          name: "(anonymous_47)",
          decl: {
            start: {
              line: 733,
              column: 2
            },
            end: {
              line: 733,
              column: 3
            }
          },
          loc: {
            start: {
              line: 733,
              column: 43
            },
            end: {
              line: 738,
              column: 3
            }
          },
          line: 733
        },
        "48": {
          name: "(anonymous_48)",
          decl: {
            start: {
              line: 740,
              column: 2
            },
            end: {
              line: 740,
              column: 3
            }
          },
          loc: {
            start: {
              line: 740,
              column: 19
            },
            end: {
              line: 753,
              column: 3
            }
          },
          line: 740
        },
        "49": {
          name: "(anonymous_49)",
          decl: {
            start: {
              line: 757,
              column: 2
            },
            end: {
              line: 757,
              column: 3
            }
          },
          loc: {
            start: {
              line: 757,
              column: 34
            },
            end: {
              line: 778,
              column: 3
            }
          },
          line: 757
        },
        "50": {
          name: "(anonymous_50)",
          decl: {
            start: {
              line: 758,
              column: 21
            },
            end: {
              line: 758,
              column: 22
            }
          },
          loc: {
            start: {
              line: 758,
              column: 33
            },
            end: {
              line: 777,
              column: 5
            }
          },
          line: 758
        },
        "51": {
          name: "(anonymous_51)",
          decl: {
            start: {
              line: 789,
              column: 24
            },
            end: {
              line: 789,
              column: 25
            }
          },
          loc: {
            start: {
              line: 789,
              column: 30
            },
            end: {
              line: 792,
              column: 1
            }
          },
          line: 789
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 124,
              column: 4
            },
            end: {
              line: 126,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 124,
              column: 4
            },
            end: {
              line: 126,
              column: 5
            }
          }, {
            start: {
              line: 124,
              column: 4
            },
            end: {
              line: 126,
              column: 5
            }
          }],
          line: 124
        },
        "1": {
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
        "2": {
          loc: {
            start: {
              line: 192,
              column: 4
            },
            end: {
              line: 218,
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
              line: 218,
              column: 5
            }
          }, {
            start: {
              line: 192,
              column: 4
            },
            end: {
              line: 218,
              column: 5
            }
          }],
          line: 192
        },
        "3": {
          loc: {
            start: {
              line: 196,
              column: 6
            },
            end: {
              line: 202,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 196,
              column: 6
            },
            end: {
              line: 202,
              column: 7
            }
          }, {
            start: {
              line: 196,
              column: 6
            },
            end: {
              line: 202,
              column: 7
            }
          }],
          line: 196
        },
        "4": {
          loc: {
            start: {
              line: 206,
              column: 6
            },
            end: {
              line: 210,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 206,
              column: 6
            },
            end: {
              line: 210,
              column: 7
            }
          }, {
            start: {
              line: 206,
              column: 6
            },
            end: {
              line: 210,
              column: 7
            }
          }],
          line: 206
        },
        "5": {
          loc: {
            start: {
              line: 212,
              column: 6
            },
            end: {
              line: 215,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 212,
              column: 6
            },
            end: {
              line: 215,
              column: 7
            }
          }, {
            start: {
              line: 212,
              column: 6
            },
            end: {
              line: 215,
              column: 7
            }
          }],
          line: 212
        },
        "6": {
          loc: {
            start: {
              line: 229,
              column: 4
            },
            end: {
              line: 231,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 229,
              column: 4
            },
            end: {
              line: 231,
              column: 5
            }
          }, {
            start: {
              line: 229,
              column: 4
            },
            end: {
              line: 231,
              column: 5
            }
          }],
          line: 229
        },
        "7": {
          loc: {
            start: {
              line: 237,
              column: 4
            },
            end: {
              line: 239,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 237,
              column: 4
            },
            end: {
              line: 239,
              column: 5
            }
          }, {
            start: {
              line: 237,
              column: 4
            },
            end: {
              line: 239,
              column: 5
            }
          }],
          line: 237
        },
        "8": {
          loc: {
            start: {
              line: 248,
              column: 4
            },
            end: {
              line: 250,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 248,
              column: 4
            },
            end: {
              line: 250,
              column: 5
            }
          }, {
            start: {
              line: 248,
              column: 4
            },
            end: {
              line: 250,
              column: 5
            }
          }],
          line: 248
        },
        "9": {
          loc: {
            start: {
              line: 253,
              column: 4
            },
            end: {
              line: 329,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 253,
              column: 4
            },
            end: {
              line: 329,
              column: 5
            }
          }, {
            start: {
              line: 253,
              column: 4
            },
            end: {
              line: 329,
              column: 5
            }
          }],
          line: 253
        },
        "10": {
          loc: {
            start: {
              line: 253,
              column: 8
            },
            end: {
              line: 253,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 253,
              column: 8
            },
            end: {
              line: 253,
              column: 28
            }
          }, {
            start: {
              line: 253,
              column: 32
            },
            end: {
              line: 253,
              column: 47
            }
          }],
          line: 253
        },
        "11": {
          loc: {
            start: {
              line: 258,
              column: 8
            },
            end: {
              line: 258,
              column: 85
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 258,
              column: 30
            },
            end: {
              line: 258,
              column: 40
            }
          }, {
            start: {
              line: 258,
              column: 43
            },
            end: {
              line: 258,
              column: 85
            }
          }],
          line: 258
        },
        "12": {
          loc: {
            start: {
              line: 262,
              column: 6
            },
            end: {
              line: 264,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 262,
              column: 6
            },
            end: {
              line: 264,
              column: 7
            }
          }, {
            start: {
              line: 262,
              column: 6
            },
            end: {
              line: 264,
              column: 7
            }
          }],
          line: 262
        },
        "13": {
          loc: {
            start: {
              line: 262,
              column: 10
            },
            end: {
              line: 262,
              column: 55
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 262,
              column: 10
            },
            end: {
              line: 262,
              column: 40
            }
          }, {
            start: {
              line: 262,
              column: 44
            },
            end: {
              line: 262,
              column: 55
            }
          }],
          line: 262
        },
        "14": {
          loc: {
            start: {
              line: 274,
              column: 6
            },
            end: {
              line: 276,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 274,
              column: 6
            },
            end: {
              line: 276,
              column: 7
            }
          }, {
            start: {
              line: 274,
              column: 6
            },
            end: {
              line: 276,
              column: 7
            }
          }],
          line: 274
        },
        "15": {
          loc: {
            start: {
              line: 278,
              column: 25
            },
            end: {
              line: 280,
              column: 31
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 279,
              column: 10
            },
            end: {
              line: 279,
              column: 61
            }
          }, {
            start: {
              line: 280,
              column: 10
            },
            end: {
              line: 280,
              column: 31
            }
          }],
          line: 278
        },
        "16": {
          loc: {
            start: {
              line: 288,
              column: 6
            },
            end: {
              line: 290,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 288,
              column: 6
            },
            end: {
              line: 290,
              column: 7
            }
          }, {
            start: {
              line: 288,
              column: 6
            },
            end: {
              line: 290,
              column: 7
            }
          }],
          line: 288
        },
        "17": {
          loc: {
            start: {
              line: 302,
              column: 6
            },
            end: {
              line: 304,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 302,
              column: 6
            },
            end: {
              line: 304,
              column: 7
            }
          }, {
            start: {
              line: 302,
              column: 6
            },
            end: {
              line: 304,
              column: 7
            }
          }],
          line: 302
        },
        "18": {
          loc: {
            start: {
              line: 307,
              column: 8
            },
            end: {
              line: 309,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 307,
              column: 8
            },
            end: {
              line: 309,
              column: 9
            }
          }, {
            start: {
              line: 307,
              column: 8
            },
            end: {
              line: 309,
              column: 9
            }
          }],
          line: 307
        },
        "19": {
          loc: {
            start: {
              line: 315,
              column: 8
            },
            end: {
              line: 317,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 315,
              column: 8
            },
            end: {
              line: 317,
              column: 9
            }
          }, {
            start: {
              line: 315,
              column: 8
            },
            end: {
              line: 317,
              column: 9
            }
          }],
          line: 315
        },
        "20": {
          loc: {
            start: {
              line: 320,
              column: 6
            },
            end: {
              line: 328,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 320,
              column: 6
            },
            end: {
              line: 328,
              column: 7
            }
          }, {
            start: {
              line: 320,
              column: 6
            },
            end: {
              line: 328,
              column: 7
            }
          }],
          line: 320
        },
        "21": {
          loc: {
            start: {
              line: 336,
              column: 6
            },
            end: {
              line: 338,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 336,
              column: 6
            },
            end: {
              line: 338,
              column: 7
            }
          }, {
            start: {
              line: 336,
              column: 6
            },
            end: {
              line: 338,
              column: 7
            }
          }],
          line: 336
        },
        "22": {
          loc: {
            start: {
              line: 336,
              column: 10
            },
            end: {
              line: 336,
              column: 64
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 336,
              column: 10
            },
            end: {
              line: 336,
              column: 46
            }
          }, {
            start: {
              line: 336,
              column: 50
            },
            end: {
              line: 336,
              column: 64
            }
          }],
          line: 336
        },
        "23": {
          loc: {
            start: {
              line: 343,
              column: 6
            },
            end: {
              line: 345,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 343,
              column: 6
            },
            end: {
              line: 345,
              column: 7
            }
          }, {
            start: {
              line: 343,
              column: 6
            },
            end: {
              line: 345,
              column: 7
            }
          }],
          line: 343
        },
        "24": {
          loc: {
            start: {
              line: 347,
              column: 6
            },
            end: {
              line: 349,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 347,
              column: 6
            },
            end: {
              line: 349,
              column: 7
            }
          }, {
            start: {
              line: 347,
              column: 6
            },
            end: {
              line: 349,
              column: 7
            }
          }],
          line: 347
        },
        "25": {
          loc: {
            start: {
              line: 354,
              column: 4
            },
            end: {
              line: 356,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 354,
              column: 4
            },
            end: {
              line: 356,
              column: 5
            }
          }, {
            start: {
              line: 354,
              column: 4
            },
            end: {
              line: 356,
              column: 5
            }
          }],
          line: 354
        },
        "26": {
          loc: {
            start: {
              line: 362,
              column: 4
            },
            end: {
              line: 364,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 362,
              column: 4
            },
            end: {
              line: 364,
              column: 5
            }
          }, {
            start: {
              line: 362,
              column: 4
            },
            end: {
              line: 364,
              column: 5
            }
          }],
          line: 362
        },
        "27": {
          loc: {
            start: {
              line: 370,
              column: 4
            },
            end: {
              line: 378,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 370,
              column: 4
            },
            end: {
              line: 378,
              column: 5
            }
          }, {
            start: {
              line: 370,
              column: 4
            },
            end: {
              line: 378,
              column: 5
            }
          }],
          line: 370
        },
        "28": {
          loc: {
            start: {
              line: 384,
              column: 4
            },
            end: {
              line: 386,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 384,
              column: 4
            },
            end: {
              line: 386,
              column: 5
            }
          }, {
            start: {
              line: 384,
              column: 4
            },
            end: {
              line: 386,
              column: 5
            }
          }],
          line: 384
        },
        "29": {
          loc: {
            start: {
              line: 400,
              column: 15
            },
            end: {
              line: 400,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 400,
              column: 15
            },
            end: {
              line: 400,
              column: 23
            }
          }, {
            start: {
              line: 400,
              column: 27
            },
            end: {
              line: 400,
              column: 53
            }
          }],
          line: 400
        },
        "30": {
          loc: {
            start: {
              line: 411,
              column: 4
            },
            end: {
              line: 422,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 411,
              column: 4
            },
            end: {
              line: 422,
              column: 5
            }
          }, {
            start: {
              line: 411,
              column: 4
            },
            end: {
              line: 422,
              column: 5
            }
          }],
          line: 411
        },
        "31": {
          loc: {
            start: {
              line: 411,
              column: 8
            },
            end: {
              line: 411,
              column: 75
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 411,
              column: 8
            },
            end: {
              line: 411,
              column: 35
            }
          }, {
            start: {
              line: 411,
              column: 40
            },
            end: {
              line: 411,
              column: 56
            }
          }, {
            start: {
              line: 411,
              column: 60
            },
            end: {
              line: 411,
              column: 74
            }
          }],
          line: 411
        },
        "32": {
          loc: {
            start: {
              line: 413,
              column: 6
            },
            end: {
              line: 419,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 413,
              column: 6
            },
            end: {
              line: 419,
              column: 7
            }
          }, {
            start: {
              line: 413,
              column: 6
            },
            end: {
              line: 419,
              column: 7
            }
          }],
          line: 413
        },
        "33": {
          loc: {
            start: {
              line: 414,
              column: 8
            },
            end: {
              line: 416,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 414,
              column: 8
            },
            end: {
              line: 416,
              column: 9
            }
          }, {
            start: {
              line: 414,
              column: 8
            },
            end: {
              line: 416,
              column: 9
            }
          }],
          line: 414
        },
        "34": {
          loc: {
            start: {
              line: 424,
              column: 4
            },
            end: {
              line: 432,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 424,
              column: 4
            },
            end: {
              line: 432,
              column: 5
            }
          }, {
            start: {
              line: 424,
              column: 4
            },
            end: {
              line: 432,
              column: 5
            }
          }],
          line: 424
        },
        "35": {
          loc: {
            start: {
              line: 425,
              column: 6
            },
            end: {
              line: 427,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 425,
              column: 6
            },
            end: {
              line: 427,
              column: 7
            }
          }, {
            start: {
              line: 425,
              column: 6
            },
            end: {
              line: 427,
              column: 7
            }
          }],
          line: 425
        },
        "36": {
          loc: {
            start: {
              line: 438,
              column: 4
            },
            end: {
              line: 442,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 438,
              column: 4
            },
            end: {
              line: 442,
              column: 5
            }
          }, {
            start: {
              line: 438,
              column: 4
            },
            end: {
              line: 442,
              column: 5
            }
          }],
          line: 438
        },
        "37": {
          loc: {
            start: {
              line: 439,
              column: 14
            },
            end: {
              line: 441,
              column: 27
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 440,
              column: 10
            },
            end: {
              line: 440,
              column: 46
            }
          }, {
            start: {
              line: 441,
              column: 10
            },
            end: {
              line: 441,
              column: 27
            }
          }],
          line: 439
        },
        "38": {
          loc: {
            start: {
              line: 465,
              column: 8
            },
            end: {
              line: 467,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 465,
              column: 8
            },
            end: {
              line: 467,
              column: 9
            }
          }, {
            start: {
              line: 465,
              column: 8
            },
            end: {
              line: 467,
              column: 9
            }
          }],
          line: 465
        },
        "39": {
          loc: {
            start: {
              line: 481,
              column: 4
            },
            end: {
              line: 492,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 481,
              column: 4
            },
            end: {
              line: 492,
              column: 5
            }
          }, {
            start: {
              line: 481,
              column: 4
            },
            end: {
              line: 492,
              column: 5
            }
          }],
          line: 481
        },
        "40": {
          loc: {
            start: {
              line: 485,
              column: 13
            },
            end: {
              line: 485,
              column: 65
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 485,
              column: 13
            },
            end: {
              line: 485,
              column: 59
            }
          }, {
            start: {
              line: 485,
              column: 63
            },
            end: {
              line: 485,
              column: 65
            }
          }],
          line: 485
        },
        "41": {
          loc: {
            start: {
              line: 498,
              column: 4
            },
            end: {
              line: 500,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 498,
              column: 4
            },
            end: {
              line: 500,
              column: 5
            }
          }, {
            start: {
              line: 498,
              column: 4
            },
            end: {
              line: 500,
              column: 5
            }
          }],
          line: 498
        },
        "42": {
          loc: {
            start: {
              line: 502,
              column: 4
            },
            end: {
              line: 504,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 502,
              column: 4
            },
            end: {
              line: 504,
              column: 5
            }
          }, {
            start: {
              line: 502,
              column: 4
            },
            end: {
              line: 504,
              column: 5
            }
          }],
          line: 502
        },
        "43": {
          loc: {
            start: {
              line: 517,
              column: 6
            },
            end: {
              line: 542,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 517,
              column: 6
            },
            end: {
              line: 542,
              column: 7
            }
          }, {
            start: {
              line: 517,
              column: 6
            },
            end: {
              line: 542,
              column: 7
            }
          }],
          line: 517
        },
        "44": {
          loc: {
            start: {
              line: 523,
              column: 13
            },
            end: {
              line: 542,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 523,
              column: 13
            },
            end: {
              line: 542,
              column: 7
            }
          }, {
            start: {
              line: 523,
              column: 13
            },
            end: {
              line: 542,
              column: 7
            }
          }],
          line: 523
        },
        "45": {
          loc: {
            start: {
              line: 524,
              column: 24
            },
            end: {
              line: 526,
              column: 42
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 525,
              column: 12
            },
            end: {
              line: 525,
              column: 45
            }
          }, {
            start: {
              line: 526,
              column: 12
            },
            end: {
              line: 526,
              column: 42
            }
          }],
          line: 524
        },
        "46": {
          loc: {
            start: {
              line: 527,
              column: 25
            },
            end: {
              line: 529,
              column: 43
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 528,
              column: 12
            },
            end: {
              line: 528,
              column: 45
            }
          }, {
            start: {
              line: 529,
              column: 12
            },
            end: {
              line: 529,
              column: 43
            }
          }],
          line: 527
        },
        "47": {
          loc: {
            start: {
              line: 546,
              column: 6
            },
            end: {
              line: 548,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 546,
              column: 6
            },
            end: {
              line: 548,
              column: 7
            }
          }, {
            start: {
              line: 546,
              column: 6
            },
            end: {
              line: 548,
              column: 7
            }
          }],
          line: 546
        },
        "48": {
          loc: {
            start: {
              line: 556,
              column: 4
            },
            end: {
              line: 564,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 556,
              column: 4
            },
            end: {
              line: 564,
              column: 5
            }
          }, {
            start: {
              line: 556,
              column: 4
            },
            end: {
              line: 564,
              column: 5
            }
          }],
          line: 556
        },
        "49": {
          loc: {
            start: {
              line: 570,
              column: 4
            },
            end: {
              line: 577,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 570,
              column: 4
            },
            end: {
              line: 577,
              column: 5
            }
          }, {
            start: {
              line: 570,
              column: 4
            },
            end: {
              line: 577,
              column: 5
            }
          }],
          line: 570
        },
        "50": {
          loc: {
            start: {
              line: 570,
              column: 8
            },
            end: {
              line: 570,
              column: 68
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 570,
              column: 8
            },
            end: {
              line: 570,
              column: 42
            }
          }, {
            start: {
              line: 570,
              column: 46
            },
            end: {
              line: 570,
              column: 68
            }
          }],
          line: 570
        },
        "51": {
          loc: {
            start: {
              line: 573,
              column: 8
            },
            end: {
              line: 573,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 573,
              column: 8
            },
            end: {
              line: 573,
              column: 42
            }
          }, {
            start: {
              line: 573,
              column: 46
            },
            end: {
              line: 573,
              column: 48
            }
          }],
          line: 573
        },
        "52": {
          loc: {
            start: {
              line: 582,
              column: 14
            },
            end: {
              line: 582,
              column: 61
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 582,
              column: 14
            },
            end: {
              line: 582,
              column: 21
            }
          }, {
            start: {
              line: 582,
              column: 25
            },
            end: {
              line: 582,
              column: 61
            }
          }],
          line: 582
        },
        "53": {
          loc: {
            start: {
              line: 584,
              column: 4
            },
            end: {
              line: 590,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 584,
              column: 4
            },
            end: {
              line: 590,
              column: 5
            }
          }, {
            start: {
              line: 584,
              column: 4
            },
            end: {
              line: 590,
              column: 5
            }
          }],
          line: 584
        },
        "54": {
          loc: {
            start: {
              line: 592,
              column: 4
            },
            end: {
              line: 596,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 592,
              column: 4
            },
            end: {
              line: 596,
              column: 5
            }
          }, {
            start: {
              line: 592,
              column: 4
            },
            end: {
              line: 596,
              column: 5
            }
          }],
          line: 592
        },
        "55": {
          loc: {
            start: {
              line: 594,
              column: 8
            },
            end: {
              line: 594,
              column: 64
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 594,
              column: 35
            },
            end: {
              line: 594,
              column: 48
            }
          }, {
            start: {
              line: 594,
              column: 51
            },
            end: {
              line: 594,
              column: 64
            }
          }],
          line: 594
        },
        "56": {
          loc: {
            start: {
              line: 598,
              column: 4
            },
            end: {
              line: 601,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 598,
              column: 4
            },
            end: {
              line: 601,
              column: 5
            }
          }, {
            start: {
              line: 598,
              column: 4
            },
            end: {
              line: 601,
              column: 5
            }
          }],
          line: 598
        },
        "57": {
          loc: {
            start: {
              line: 598,
              column: 8
            },
            end: {
              line: 598,
              column: 102
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 598,
              column: 8
            },
            end: {
              line: 598,
              column: 59
            }
          }, {
            start: {
              line: 598,
              column: 63
            },
            end: {
              line: 598,
              column: 102
            }
          }],
          line: 598
        },
        "58": {
          loc: {
            start: {
              line: 607,
              column: 4
            },
            end: {
              line: 610,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 607,
              column: 4
            },
            end: {
              line: 610,
              column: 5
            }
          }, {
            start: {
              line: 607,
              column: 4
            },
            end: {
              line: 610,
              column: 5
            }
          }],
          line: 607
        },
        "59": {
          loc: {
            start: {
              line: 607,
              column: 8
            },
            end: {
              line: 607,
              column: 59
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 607,
              column: 8
            },
            end: {
              line: 607,
              column: 29
            }
          }, {
            start: {
              line: 607,
              column: 33
            },
            end: {
              line: 607,
              column: 59
            }
          }],
          line: 607
        },
        "60": {
          loc: {
            start: {
              line: 613,
              column: 6
            },
            end: {
              line: 615,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 613,
              column: 6
            },
            end: {
              line: 615,
              column: 7
            }
          }, {
            start: {
              line: 613,
              column: 6
            },
            end: {
              line: 615,
              column: 7
            }
          }],
          line: 613
        },
        "61": {
          loc: {
            start: {
              line: 621,
              column: 14
            },
            end: {
              line: 621,
              column: 61
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 621,
              column: 14
            },
            end: {
              line: 621,
              column: 21
            }
          }, {
            start: {
              line: 621,
              column: 25
            },
            end: {
              line: 621,
              column: 61
            }
          }],
          line: 621
        },
        "62": {
          loc: {
            start: {
              line: 623,
              column: 4
            },
            end: {
              line: 629,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 623,
              column: 4
            },
            end: {
              line: 629,
              column: 5
            }
          }, {
            start: {
              line: 623,
              column: 4
            },
            end: {
              line: 629,
              column: 5
            }
          }],
          line: 623
        },
        "63": {
          loc: {
            start: {
              line: 631,
              column: 4
            },
            end: {
              line: 635,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 631,
              column: 4
            },
            end: {
              line: 635,
              column: 5
            }
          }, {
            start: {
              line: 631,
              column: 4
            },
            end: {
              line: 635,
              column: 5
            }
          }],
          line: 631
        },
        "64": {
          loc: {
            start: {
              line: 633,
              column: 8
            },
            end: {
              line: 633,
              column: 65
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 633,
              column: 36
            },
            end: {
              line: 633,
              column: 49
            }
          }, {
            start: {
              line: 633,
              column: 52
            },
            end: {
              line: 633,
              column: 65
            }
          }],
          line: 633
        },
        "65": {
          loc: {
            start: {
              line: 637,
              column: 4
            },
            end: {
              line: 639,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 637,
              column: 4
            },
            end: {
              line: 639,
              column: 5
            }
          }, {
            start: {
              line: 637,
              column: 4
            },
            end: {
              line: 639,
              column: 5
            }
          }],
          line: 637
        },
        "66": {
          loc: {
            start: {
              line: 645,
              column: 4
            },
            end: {
              line: 648,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 645,
              column: 4
            },
            end: {
              line: 648,
              column: 5
            }
          }, {
            start: {
              line: 645,
              column: 4
            },
            end: {
              line: 648,
              column: 5
            }
          }],
          line: 645
        },
        "67": {
          loc: {
            start: {
              line: 645,
              column: 8
            },
            end: {
              line: 645,
              column: 59
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 645,
              column: 8
            },
            end: {
              line: 645,
              column: 29
            }
          }, {
            start: {
              line: 645,
              column: 33
            },
            end: {
              line: 645,
              column: 59
            }
          }],
          line: 645
        },
        "68": {
          loc: {
            start: {
              line: 651,
              column: 6
            },
            end: {
              line: 653,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 651,
              column: 6
            },
            end: {
              line: 653,
              column: 7
            }
          }, {
            start: {
              line: 651,
              column: 6
            },
            end: {
              line: 653,
              column: 7
            }
          }],
          line: 651
        },
        "69": {
          loc: {
            start: {
              line: 659,
              column: 6
            },
            end: {
              line: 661,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 659,
              column: 6
            },
            end: {
              line: 661,
              column: 7
            }
          }, {
            start: {
              line: 659,
              column: 6
            },
            end: {
              line: 661,
              column: 7
            }
          }],
          line: 659
        },
        "70": {
          loc: {
            start: {
              line: 672,
              column: 8
            },
            end: {
              line: 674,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 672,
              column: 8
            },
            end: {
              line: 674,
              column: 9
            }
          }, {
            start: {
              line: 672,
              column: 8
            },
            end: {
              line: 674,
              column: 9
            }
          }],
          line: 672
        },
        "71": {
          loc: {
            start: {
              line: 680,
              column: 9
            },
            end: {
              line: 680,
              column: 59
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 680,
              column: 48
            },
            end: {
              line: 680,
              column: 54
            }
          }, {
            start: {
              line: 680,
              column: 57
            },
            end: {
              line: 680,
              column: 59
            }
          }],
          line: 680
        },
        "72": {
          loc: {
            start: {
              line: 680,
              column: 9
            },
            end: {
              line: 680,
              column: 45
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 680,
              column: 9
            },
            end: {
              line: 680,
              column: 35
            }
          }, {
            start: {
              line: 680,
              column: 39
            },
            end: {
              line: 680,
              column: 45
            }
          }],
          line: 680
        },
        "73": {
          loc: {
            start: {
              line: 683,
              column: 4
            },
            end: {
              line: 688,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 683,
              column: 4
            },
            end: {
              line: 688,
              column: 5
            }
          }, {
            start: {
              line: 683,
              column: 4
            },
            end: {
              line: 688,
              column: 5
            }
          }],
          line: 683
        },
        "74": {
          loc: {
            start: {
              line: 690,
              column: 4
            },
            end: {
              line: 692,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 690,
              column: 4
            },
            end: {
              line: 692,
              column: 5
            }
          }, {
            start: {
              line: 690,
              column: 4
            },
            end: {
              line: 692,
              column: 5
            }
          }],
          line: 690
        },
        "75": {
          loc: {
            start: {
              line: 694,
              column: 4
            },
            end: {
              line: 696,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 694,
              column: 4
            },
            end: {
              line: 696,
              column: 5
            }
          }, {
            start: {
              line: 694,
              column: 4
            },
            end: {
              line: 696,
              column: 5
            }
          }],
          line: 694
        },
        "76": {
          loc: {
            start: {
              line: 704,
              column: 4
            },
            end: {
              line: 706,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 704,
              column: 4
            },
            end: {
              line: 706,
              column: 5
            }
          }, {
            start: {
              line: 704,
              column: 4
            },
            end: {
              line: 706,
              column: 5
            }
          }],
          line: 704
        },
        "77": {
          loc: {
            start: {
              line: 714,
              column: 4
            },
            end: {
              line: 720,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 714,
              column: 4
            },
            end: {
              line: 720,
              column: 5
            }
          }, {
            start: {
              line: 714,
              column: 4
            },
            end: {
              line: 720,
              column: 5
            }
          }],
          line: 714
        },
        "78": {
          loc: {
            start: {
              line: 716,
              column: 8
            },
            end: {
              line: 718,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 716,
              column: 8
            },
            end: {
              line: 718,
              column: 9
            }
          }, {
            start: {
              line: 716,
              column: 8
            },
            end: {
              line: 718,
              column: 9
            }
          }],
          line: 716
        },
        "79": {
          loc: {
            start: {
              line: 728,
              column: 4
            },
            end: {
              line: 730,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 728,
              column: 4
            },
            end: {
              line: 730,
              column: 5
            }
          }, {
            start: {
              line: 728,
              column: 4
            },
            end: {
              line: 730,
              column: 5
            }
          }],
          line: 728
        },
        "80": {
          loc: {
            start: {
              line: 728,
              column: 8
            },
            end: {
              line: 728,
              column: 44
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 728,
              column: 8
            },
            end: {
              line: 728,
              column: 25
            }
          }, {
            start: {
              line: 728,
              column: 29
            },
            end: {
              line: 728,
              column: 44
            }
          }],
          line: 728
        },
        "81": {
          loc: {
            start: {
              line: 744,
              column: 4
            },
            end: {
              line: 746,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 744,
              column: 4
            },
            end: {
              line: 746,
              column: 5
            }
          }, {
            start: {
              line: 744,
              column: 4
            },
            end: {
              line: 746,
              column: 5
            }
          }],
          line: 744
        },
        "82": {
          loc: {
            start: {
              line: 760,
              column: 22
            },
            end: {
              line: 760,
              column: 58
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 760,
              column: 22
            },
            end: {
              line: 760,
              column: 48
            }
          }, {
            start: {
              line: 760,
              column: 52
            },
            end: {
              line: 760,
              column: 58
            }
          }],
          line: 760
        },
        "83": {
          loc: {
            start: {
              line: 762,
              column: 6
            },
            end: {
              line: 764,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 762,
              column: 6
            },
            end: {
              line: 764,
              column: 7
            }
          }, {
            start: {
              line: 762,
              column: 6
            },
            end: {
              line: 764,
              column: 7
            }
          }],
          line: 762
        },
        "84": {
          loc: {
            start: {
              line: 762,
              column: 10
            },
            end: {
              line: 762,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 762,
              column: 10
            },
            end: {
              line: 762,
              column: 15
            }
          }, {
            start: {
              line: 762,
              column: 19
            },
            end: {
              line: 762,
              column: 46
            }
          }],
          line: 762
        },
        "85": {
          loc: {
            start: {
              line: 766,
              column: 6
            },
            end: {
              line: 769,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 766,
              column: 6
            },
            end: {
              line: 769,
              column: 7
            }
          }, {
            start: {
              line: 766,
              column: 6
            },
            end: {
              line: 769,
              column: 7
            }
          }],
          line: 766
        },
        "86": {
          loc: {
            start: {
              line: 771,
              column: 6
            },
            end: {
              line: 776,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 771,
              column: 6
            },
            end: {
              line: 776,
              column: 7
            }
          }, {
            start: {
              line: 771,
              column: 6
            },
            end: {
              line: 776,
              column: 7
            }
          }],
          line: 771
        },
        "87": {
          loc: {
            start: {
              line: 772,
              column: 8
            },
            end: {
              line: 774,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 772,
              column: 8
            },
            end: {
              line: 774,
              column: 9
            }
          }, {
            start: {
              line: 772,
              column: 8
            },
            end: {
              line: 774,
              column: 9
            }
          }],
          line: 772
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
        "86": 0,
        "87": 0,
        "88": 0,
        "89": 0,
        "90": 0,
        "91": 0,
        "92": 0,
        "93": 0,
        "94": 0,
        "95": 0,
        "96": 0,
        "97": 0,
        "98": 0,
        "99": 0,
        "100": 0,
        "101": 0,
        "102": 0,
        "103": 0,
        "104": 0,
        "105": 0,
        "106": 0,
        "107": 0,
        "108": 0,
        "109": 0,
        "110": 0,
        "111": 0,
        "112": 0,
        "113": 0,
        "114": 0,
        "115": 0,
        "116": 0,
        "117": 0,
        "118": 0,
        "119": 0,
        "120": 0,
        "121": 0,
        "122": 0,
        "123": 0,
        "124": 0,
        "125": 0,
        "126": 0,
        "127": 0,
        "128": 0,
        "129": 0,
        "130": 0,
        "131": 0,
        "132": 0,
        "133": 0,
        "134": 0,
        "135": 0,
        "136": 0,
        "137": 0,
        "138": 0,
        "139": 0,
        "140": 0,
        "141": 0,
        "142": 0,
        "143": 0,
        "144": 0,
        "145": 0,
        "146": 0,
        "147": 0,
        "148": 0,
        "149": 0,
        "150": 0,
        "151": 0,
        "152": 0,
        "153": 0,
        "154": 0,
        "155": 0,
        "156": 0,
        "157": 0,
        "158": 0,
        "159": 0,
        "160": 0,
        "161": 0,
        "162": 0,
        "163": 0,
        "164": 0,
        "165": 0,
        "166": 0,
        "167": 0,
        "168": 0,
        "169": 0,
        "170": 0,
        "171": 0,
        "172": 0,
        "173": 0,
        "174": 0,
        "175": 0,
        "176": 0,
        "177": 0,
        "178": 0,
        "179": 0,
        "180": 0,
        "181": 0,
        "182": 0,
        "183": 0,
        "184": 0,
        "185": 0,
        "186": 0,
        "187": 0,
        "188": 0,
        "189": 0,
        "190": 0,
        "191": 0,
        "192": 0,
        "193": 0,
        "194": 0,
        "195": 0,
        "196": 0,
        "197": 0,
        "198": 0,
        "199": 0,
        "200": 0,
        "201": 0,
        "202": 0,
        "203": 0,
        "204": 0,
        "205": 0,
        "206": 0,
        "207": 0,
        "208": 0,
        "209": 0,
        "210": 0,
        "211": 0,
        "212": 0,
        "213": 0,
        "214": 0,
        "215": 0,
        "216": 0,
        "217": 0,
        "218": 0,
        "219": 0,
        "220": 0,
        "221": 0,
        "222": 0,
        "223": 0,
        "224": 0,
        "225": 0,
        "226": 0,
        "227": 0,
        "228": 0,
        "229": 0,
        "230": 0,
        "231": 0,
        "232": 0,
        "233": 0,
        "234": 0,
        "235": 0,
        "236": 0,
        "237": 0,
        "238": 0,
        "239": 0,
        "240": 0,
        "241": 0,
        "242": 0,
        "243": 0,
        "244": 0,
        "245": 0,
        "246": 0,
        "247": 0,
        "248": 0,
        "249": 0,
        "250": 0,
        "251": 0,
        "252": 0,
        "253": 0,
        "254": 0,
        "255": 0,
        "256": 0,
        "257": 0,
        "258": 0,
        "259": 0,
        "260": 0,
        "261": 0,
        "262": 0,
        "263": 0,
        "264": 0,
        "265": 0,
        "266": 0,
        "267": 0,
        "268": 0,
        "269": 0,
        "270": 0,
        "271": 0,
        "272": 0,
        "273": 0,
        "274": 0,
        "275": 0,
        "276": 0,
        "277": 0,
        "278": 0,
        "279": 0,
        "280": 0,
        "281": 0,
        "282": 0,
        "283": 0,
        "284": 0,
        "285": 0,
        "286": 0,
        "287": 0,
        "288": 0,
        "289": 0,
        "290": 0,
        "291": 0,
        "292": 0
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
        "28": [0, 0],
        "29": [0, 0],
        "30": [0, 0],
        "31": [0, 0, 0],
        "32": [0, 0],
        "33": [0, 0],
        "34": [0, 0],
        "35": [0, 0],
        "36": [0, 0],
        "37": [0, 0],
        "38": [0, 0],
        "39": [0, 0],
        "40": [0, 0],
        "41": [0, 0],
        "42": [0, 0],
        "43": [0, 0],
        "44": [0, 0],
        "45": [0, 0],
        "46": [0, 0],
        "47": [0, 0],
        "48": [0, 0],
        "49": [0, 0],
        "50": [0, 0],
        "51": [0, 0],
        "52": [0, 0],
        "53": [0, 0],
        "54": [0, 0],
        "55": [0, 0],
        "56": [0, 0],
        "57": [0, 0],
        "58": [0, 0],
        "59": [0, 0],
        "60": [0, 0],
        "61": [0, 0],
        "62": [0, 0],
        "63": [0, 0],
        "64": [0, 0],
        "65": [0, 0],
        "66": [0, 0],
        "67": [0, 0],
        "68": [0, 0],
        "69": [0, 0],
        "70": [0, 0],
        "71": [0, 0],
        "72": [0, 0],
        "73": [0, 0],
        "74": [0, 0],
        "75": [0, 0],
        "76": [0, 0],
        "77": [0, 0],
        "78": [0, 0],
        "79": [0, 0],
        "80": [0, 0],
        "81": [0, 0],
        "82": [0, 0],
        "83": [0, 0],
        "84": [0, 0],
        "85": [0, 0],
        "86": [0, 0],
        "87": [0, 0]
      },
      _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
      hash: "7f92c5318708b21e4da7e92104ed69e05496722e"
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

  var NAME = (cov_1daa9w7v20.s[0]++, 'tooltip');
  var VERSION = (cov_1daa9w7v20.s[1]++, '4.4.1');
  var DATA_KEY = (cov_1daa9w7v20.s[2]++, 'bs.tooltip');
  var EVENT_KEY = (cov_1daa9w7v20.s[3]++, "." + DATA_KEY);
  var JQUERY_NO_CONFLICT = (cov_1daa9w7v20.s[4]++, $.fn[NAME]);
  var CLASS_PREFIX = (cov_1daa9w7v20.s[5]++, 'bs-tooltip');
  var BSCLS_PREFIX_REGEX = (cov_1daa9w7v20.s[6]++, new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g'));
  var DISALLOWED_ATTRIBUTES = (cov_1daa9w7v20.s[7]++, ['sanitize', 'whiteList', 'sanitizeFn']);
  var DefaultType = (cov_1daa9w7v20.s[8]++, {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  });
  var AttachmentMap = (cov_1daa9w7v20.s[9]++, {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  });
  var Default = (cov_1daa9w7v20.s[10]++, {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  });
  var HoverState = (cov_1daa9w7v20.s[11]++, {
    SHOW: 'show',
    OUT: 'out'
  });
  var Event = (cov_1daa9w7v20.s[12]++, {
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
  var ClassName = (cov_1daa9w7v20.s[13]++, {
    FADE: 'fade',
    SHOW: 'show'
  });
  var Selector = (cov_1daa9w7v20.s[14]++, {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  });
  var Trigger = (cov_1daa9w7v20.s[15]++, {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
  });
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = /*#__PURE__*/function () {
    function Tooltip(element, config) {
      cov_1daa9w7v20.f[0]++;
      cov_1daa9w7v20.s[16]++;

      if (typeof Popper === 'undefined') {
        cov_1daa9w7v20.b[0][0]++;
        cov_1daa9w7v20.s[17]++;
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } else {
        cov_1daa9w7v20.b[0][1]++;
      } // private


      cov_1daa9w7v20.s[18]++;
      this._isEnabled = true;
      cov_1daa9w7v20.s[19]++;
      this._timeout = 0;
      cov_1daa9w7v20.s[20]++;
      this._hoverState = '';
      cov_1daa9w7v20.s[21]++;
      this._activeTrigger = {};
      cov_1daa9w7v20.s[22]++;
      this._popper = null; // Protected

      cov_1daa9w7v20.s[23]++;
      this.element = element;
      cov_1daa9w7v20.s[24]++;
      this.config = this._getConfig(config);
      cov_1daa9w7v20.s[25]++;
      this.tip = null;
      cov_1daa9w7v20.s[26]++;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      cov_1daa9w7v20.f[8]++;
      cov_1daa9w7v20.s[34]++;
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      cov_1daa9w7v20.f[9]++;
      cov_1daa9w7v20.s[35]++;
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      cov_1daa9w7v20.f[10]++;
      cov_1daa9w7v20.s[36]++;
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      cov_1daa9w7v20.f[11]++;
      cov_1daa9w7v20.s[37]++;

      if (!this._isEnabled) {
        cov_1daa9w7v20.b[1][0]++;
        cov_1daa9w7v20.s[38]++;
        return;
      } else {
        cov_1daa9w7v20.b[1][1]++;
      }

      cov_1daa9w7v20.s[39]++;

      if (event) {
        cov_1daa9w7v20.b[2][0]++;
        var dataKey = (cov_1daa9w7v20.s[40]++, this.constructor.DATA_KEY);
        var context = (cov_1daa9w7v20.s[41]++, $(event.currentTarget).data(dataKey));
        cov_1daa9w7v20.s[42]++;

        if (!context) {
          cov_1daa9w7v20.b[3][0]++;
          cov_1daa9w7v20.s[43]++;
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          cov_1daa9w7v20.s[44]++;
          $(event.currentTarget).data(dataKey, context);
        } else {
          cov_1daa9w7v20.b[3][1]++;
        }

        cov_1daa9w7v20.s[45]++;
        context._activeTrigger.click = !context._activeTrigger.click;
        cov_1daa9w7v20.s[46]++;

        if (context._isWithActiveTrigger()) {
          cov_1daa9w7v20.b[4][0]++;
          cov_1daa9w7v20.s[47]++;

          context._enter(null, context);
        } else {
          cov_1daa9w7v20.b[4][1]++;
          cov_1daa9w7v20.s[48]++;

          context._leave(null, context);
        }
      } else {
        cov_1daa9w7v20.b[2][1]++;
        cov_1daa9w7v20.s[49]++;

        if ($(this.getTipElement()).hasClass(ClassName.SHOW)) {
          cov_1daa9w7v20.b[5][0]++;
          cov_1daa9w7v20.s[50]++;

          this._leave(null, this);

          cov_1daa9w7v20.s[51]++;
          return;
        } else {
          cov_1daa9w7v20.b[5][1]++;
        }

        cov_1daa9w7v20.s[52]++;

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      cov_1daa9w7v20.f[12]++;
      cov_1daa9w7v20.s[53]++;
      clearTimeout(this._timeout);
      cov_1daa9w7v20.s[54]++;
      $.removeData(this.element, this.constructor.DATA_KEY);
      cov_1daa9w7v20.s[55]++;
      $(this.element).off(this.constructor.EVENT_KEY);
      cov_1daa9w7v20.s[56]++;
      $(this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);
      cov_1daa9w7v20.s[57]++;

      if (this.tip) {
        cov_1daa9w7v20.b[6][0]++;
        cov_1daa9w7v20.s[58]++;
        $(this.tip).remove();
      } else {
        cov_1daa9w7v20.b[6][1]++;
      }

      cov_1daa9w7v20.s[59]++;
      this._isEnabled = null;
      cov_1daa9w7v20.s[60]++;
      this._timeout = null;
      cov_1daa9w7v20.s[61]++;
      this._hoverState = null;
      cov_1daa9w7v20.s[62]++;
      this._activeTrigger = null;
      cov_1daa9w7v20.s[63]++;

      if (this._popper) {
        cov_1daa9w7v20.b[7][0]++;
        cov_1daa9w7v20.s[64]++;

        this._popper.destroy();
      } else {
        cov_1daa9w7v20.b[7][1]++;
      }

      cov_1daa9w7v20.s[65]++;
      this._popper = null;
      cov_1daa9w7v20.s[66]++;
      this.element = null;
      cov_1daa9w7v20.s[67]++;
      this.config = null;
      cov_1daa9w7v20.s[68]++;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      cov_1daa9w7v20.f[13]++;
      cov_1daa9w7v20.s[69]++;

      if ($(this.element).css('display') === 'none') {
        cov_1daa9w7v20.b[8][0]++;
        cov_1daa9w7v20.s[70]++;
        throw new Error('Please use show on visible elements');
      } else {
        cov_1daa9w7v20.b[8][1]++;
      }

      var showEvent = (cov_1daa9w7v20.s[71]++, $.Event(this.constructor.Event.SHOW));
      cov_1daa9w7v20.s[72]++;

      if ((cov_1daa9w7v20.b[10][0]++, this.isWithContent()) && (cov_1daa9w7v20.b[10][1]++, this._isEnabled)) {
        cov_1daa9w7v20.b[9][0]++;
        cov_1daa9w7v20.s[73]++;
        $(this.element).trigger(showEvent);
        var shadowRoot = (cov_1daa9w7v20.s[74]++, Util.findShadowRoot(this.element));
        var isInTheDom = (cov_1daa9w7v20.s[75]++, $.contains(shadowRoot !== null ? (cov_1daa9w7v20.b[11][0]++, shadowRoot) : (cov_1daa9w7v20.b[11][1]++, this.element.ownerDocument.documentElement), this.element));
        cov_1daa9w7v20.s[76]++;

        if ((cov_1daa9w7v20.b[13][0]++, showEvent.isDefaultPrevented()) || (cov_1daa9w7v20.b[13][1]++, !isInTheDom)) {
          cov_1daa9w7v20.b[12][0]++;
          cov_1daa9w7v20.s[77]++;
          return;
        } else {
          cov_1daa9w7v20.b[12][1]++;
        }

        var tip = (cov_1daa9w7v20.s[78]++, this.getTipElement());
        var tipId = (cov_1daa9w7v20.s[79]++, Util.getUID(this.constructor.NAME));
        cov_1daa9w7v20.s[80]++;
        tip.setAttribute('id', tipId);
        cov_1daa9w7v20.s[81]++;
        this.element.setAttribute('aria-describedby', tipId);
        cov_1daa9w7v20.s[82]++;
        this.setContent();
        cov_1daa9w7v20.s[83]++;

        if (this.config.animation) {
          cov_1daa9w7v20.b[14][0]++;
          cov_1daa9w7v20.s[84]++;
          $(tip).addClass(ClassName.FADE);
        } else {
          cov_1daa9w7v20.b[14][1]++;
        }

        var placement = (cov_1daa9w7v20.s[85]++, typeof this.config.placement === 'function' ? (cov_1daa9w7v20.b[15][0]++, this.config.placement.call(this, tip, this.element)) : (cov_1daa9w7v20.b[15][1]++, this.config.placement));
        var attachment = (cov_1daa9w7v20.s[86]++, this._getAttachment(placement));
        cov_1daa9w7v20.s[87]++;
        this.addAttachmentClass(attachment);
        var container = (cov_1daa9w7v20.s[88]++, this._getContainer());
        cov_1daa9w7v20.s[89]++;
        $(tip).data(this.constructor.DATA_KEY, this);
        cov_1daa9w7v20.s[90]++;

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          cov_1daa9w7v20.b[16][0]++;
          cov_1daa9w7v20.s[91]++;
          $(tip).appendTo(container);
        } else {
          cov_1daa9w7v20.b[16][1]++;
        }

        cov_1daa9w7v20.s[92]++;
        $(this.element).trigger(this.constructor.Event.INSERTED);
        cov_1daa9w7v20.s[93]++;
        this._popper = new Popper(this.element, tip, this._getPopperConfig(attachment));
        cov_1daa9w7v20.s[94]++;
        $(tip).addClass(ClassName.SHOW); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        cov_1daa9w7v20.s[95]++;

        if ('ontouchstart' in document.documentElement) {
          cov_1daa9w7v20.b[17][0]++;
          cov_1daa9w7v20.s[96]++;
          $(document.body).children().on('mouseover', null, $.noop);
        } else {
          cov_1daa9w7v20.b[17][1]++;
        }

        cov_1daa9w7v20.s[97]++;

        var complete = function complete() {
          cov_1daa9w7v20.f[14]++;
          cov_1daa9w7v20.s[98]++;

          if (_this.config.animation) {
            cov_1daa9w7v20.b[18][0]++;
            cov_1daa9w7v20.s[99]++;

            _this._fixTransition();
          } else {
            cov_1daa9w7v20.b[18][1]++;
          }

          var prevHoverState = (cov_1daa9w7v20.s[100]++, _this._hoverState);
          cov_1daa9w7v20.s[101]++;
          _this._hoverState = null;
          cov_1daa9w7v20.s[102]++;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);
          cov_1daa9w7v20.s[103]++;

          if (prevHoverState === HoverState.OUT) {
            cov_1daa9w7v20.b[19][0]++;
            cov_1daa9w7v20.s[104]++;

            _this._leave(null, _this);
          } else {
            cov_1daa9w7v20.b[19][1]++;
          }
        };

        cov_1daa9w7v20.s[105]++;

        if ($(this.tip).hasClass(ClassName.FADE)) {
          cov_1daa9w7v20.b[20][0]++;
          var transitionDuration = (cov_1daa9w7v20.s[106]++, Util.getTransitionDurationFromElement(this.tip));
          cov_1daa9w7v20.s[107]++;
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          cov_1daa9w7v20.b[20][1]++;
          cov_1daa9w7v20.s[108]++;
          complete();
        }
      } else {
        cov_1daa9w7v20.b[9][1]++;
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      cov_1daa9w7v20.f[15]++;
      var tip = (cov_1daa9w7v20.s[109]++, this.getTipElement());
      var hideEvent = (cov_1daa9w7v20.s[110]++, $.Event(this.constructor.Event.HIDE));
      cov_1daa9w7v20.s[111]++;

      var complete = function complete() {
        cov_1daa9w7v20.f[16]++;
        cov_1daa9w7v20.s[112]++;

        if ((cov_1daa9w7v20.b[22][0]++, _this2._hoverState !== HoverState.SHOW) && (cov_1daa9w7v20.b[22][1]++, tip.parentNode)) {
          cov_1daa9w7v20.b[21][0]++;
          cov_1daa9w7v20.s[113]++;
          tip.parentNode.removeChild(tip);
        } else {
          cov_1daa9w7v20.b[21][1]++;
        }

        cov_1daa9w7v20.s[114]++;

        _this2._cleanTipClass();

        cov_1daa9w7v20.s[115]++;

        _this2.element.removeAttribute('aria-describedby');

        cov_1daa9w7v20.s[116]++;
        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);
        cov_1daa9w7v20.s[117]++;

        if (_this2._popper !== null) {
          cov_1daa9w7v20.b[23][0]++;
          cov_1daa9w7v20.s[118]++;

          _this2._popper.destroy();
        } else {
          cov_1daa9w7v20.b[23][1]++;
        }

        cov_1daa9w7v20.s[119]++;

        if (callback) {
          cov_1daa9w7v20.b[24][0]++;
          cov_1daa9w7v20.s[120]++;
          callback();
        } else {
          cov_1daa9w7v20.b[24][1]++;
        }
      };

      cov_1daa9w7v20.s[121]++;
      $(this.element).trigger(hideEvent);
      cov_1daa9w7v20.s[122]++;

      if (hideEvent.isDefaultPrevented()) {
        cov_1daa9w7v20.b[25][0]++;
        cov_1daa9w7v20.s[123]++;
        return;
      } else {
        cov_1daa9w7v20.b[25][1]++;
      }

      cov_1daa9w7v20.s[124]++;
      $(tip).removeClass(ClassName.SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      cov_1daa9w7v20.s[125]++;

      if ('ontouchstart' in document.documentElement) {
        cov_1daa9w7v20.b[26][0]++;
        cov_1daa9w7v20.s[126]++;
        $(document.body).children().off('mouseover', null, $.noop);
      } else {
        cov_1daa9w7v20.b[26][1]++;
      }

      cov_1daa9w7v20.s[127]++;
      this._activeTrigger[Trigger.CLICK] = false;
      cov_1daa9w7v20.s[128]++;
      this._activeTrigger[Trigger.FOCUS] = false;
      cov_1daa9w7v20.s[129]++;
      this._activeTrigger[Trigger.HOVER] = false;
      cov_1daa9w7v20.s[130]++;

      if ($(this.tip).hasClass(ClassName.FADE)) {
        cov_1daa9w7v20.b[27][0]++;
        var transitionDuration = (cov_1daa9w7v20.s[131]++, Util.getTransitionDurationFromElement(tip));
        cov_1daa9w7v20.s[132]++;
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        cov_1daa9w7v20.b[27][1]++;
        cov_1daa9w7v20.s[133]++;
        complete();
      }

      cov_1daa9w7v20.s[134]++;
      this._hoverState = '';
    };

    _proto.update = function update() {
      cov_1daa9w7v20.f[17]++;
      cov_1daa9w7v20.s[135]++;

      if (this._popper !== null) {
        cov_1daa9w7v20.b[28][0]++;
        cov_1daa9w7v20.s[136]++;

        this._popper.scheduleUpdate();
      } else {
        cov_1daa9w7v20.b[28][1]++;
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      cov_1daa9w7v20.f[18]++;
      cov_1daa9w7v20.s[137]++;
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      cov_1daa9w7v20.f[19]++;
      cov_1daa9w7v20.s[138]++;
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      cov_1daa9w7v20.f[20]++;
      cov_1daa9w7v20.s[139]++;
      this.tip = (cov_1daa9w7v20.b[29][0]++, this.tip) || (cov_1daa9w7v20.b[29][1]++, $(this.config.template)[0]);
      cov_1daa9w7v20.s[140]++;
      return this.tip;
    };

    _proto.setContent = function setContent() {
      cov_1daa9w7v20.f[21]++;
      var tip = (cov_1daa9w7v20.s[141]++, this.getTipElement());
      cov_1daa9w7v20.s[142]++;
      this.setElementContent($(tip.querySelectorAll(Selector.TOOLTIP_INNER)), this.getTitle());
      cov_1daa9w7v20.s[143]++;
      $(tip).removeClass(ClassName.FADE + " " + ClassName.SHOW);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      cov_1daa9w7v20.f[22]++;
      cov_1daa9w7v20.s[144]++;

      if ((cov_1daa9w7v20.b[31][0]++, typeof content === 'object') && ((cov_1daa9w7v20.b[31][1]++, content.nodeType) || (cov_1daa9w7v20.b[31][2]++, content.jquery))) {
        cov_1daa9w7v20.b[30][0]++;
        cov_1daa9w7v20.s[145]++;

        // Content is a DOM node or a jQuery
        if (this.config.html) {
          cov_1daa9w7v20.b[32][0]++;
          cov_1daa9w7v20.s[146]++;

          if (!$(content).parent().is($element)) {
            cov_1daa9w7v20.b[33][0]++;
            cov_1daa9w7v20.s[147]++;
            $element.empty().append(content);
          } else {
            cov_1daa9w7v20.b[33][1]++;
          }
        } else {
          cov_1daa9w7v20.b[32][1]++;
          cov_1daa9w7v20.s[148]++;
          $element.text($(content).text());
        }

        cov_1daa9w7v20.s[149]++;
        return;
      } else {
        cov_1daa9w7v20.b[30][1]++;
      }

      cov_1daa9w7v20.s[150]++;

      if (this.config.html) {
        cov_1daa9w7v20.b[34][0]++;
        cov_1daa9w7v20.s[151]++;

        if (this.config.sanitize) {
          cov_1daa9w7v20.b[35][0]++;
          cov_1daa9w7v20.s[152]++;
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        } else {
          cov_1daa9w7v20.b[35][1]++;
        }

        cov_1daa9w7v20.s[153]++;
        $element.html(content);
      } else {
        cov_1daa9w7v20.b[34][1]++;
        cov_1daa9w7v20.s[154]++;
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      cov_1daa9w7v20.f[23]++;
      var title = (cov_1daa9w7v20.s[155]++, this.element.getAttribute('data-original-title'));
      cov_1daa9w7v20.s[156]++;

      if (!title) {
        cov_1daa9w7v20.b[36][0]++;
        cov_1daa9w7v20.s[157]++;
        title = typeof this.config.title === 'function' ? (cov_1daa9w7v20.b[37][0]++, this.config.title.call(this.element)) : (cov_1daa9w7v20.b[37][1]++, this.config.title);
      } else {
        cov_1daa9w7v20.b[36][1]++;
      }

      cov_1daa9w7v20.s[158]++;
      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      cov_1daa9w7v20.f[24]++;
      var defaultBsConfig = (cov_1daa9w7v20.s[159]++, {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: Selector.ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          cov_1daa9w7v20.f[25]++;
          cov_1daa9w7v20.s[160]++;

          if (data.originalPlacement !== data.placement) {
            cov_1daa9w7v20.b[38][0]++;
            cov_1daa9w7v20.s[161]++;

            _this3._handlePopperPlacementChange(data);
          } else {
            cov_1daa9w7v20.b[38][1]++;
          }
        },
        onUpdate: function onUpdate(data) {
          cov_1daa9w7v20.f[26]++;
          cov_1daa9w7v20.s[162]++;
          return _this3._handlePopperPlacementChange(data);
        }
      });
      cov_1daa9w7v20.s[163]++;
      return _objectSpread2(_objectSpread2({}, defaultBsConfig), this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      cov_1daa9w7v20.f[27]++;
      var offset = (cov_1daa9w7v20.s[164]++, {});
      cov_1daa9w7v20.s[165]++;

      if (typeof this.config.offset === 'function') {
        cov_1daa9w7v20.b[39][0]++;
        cov_1daa9w7v20.s[166]++;

        offset.fn = function (data) {
          cov_1daa9w7v20.f[28]++;
          cov_1daa9w7v20.s[167]++;
          data.offsets = _objectSpread2(_objectSpread2({}, data.offsets), (cov_1daa9w7v20.b[40][0]++, _this4.config.offset(data.offsets, _this4.element)) || (cov_1daa9w7v20.b[40][1]++, {}));
          cov_1daa9w7v20.s[168]++;
          return data;
        };
      } else {
        cov_1daa9w7v20.b[39][1]++;
        cov_1daa9w7v20.s[169]++;
        offset.offset = this.config.offset;
      }

      cov_1daa9w7v20.s[170]++;
      return offset;
    };

    _proto._getContainer = function _getContainer() {
      cov_1daa9w7v20.f[29]++;
      cov_1daa9w7v20.s[171]++;

      if (this.config.container === false) {
        cov_1daa9w7v20.b[41][0]++;
        cov_1daa9w7v20.s[172]++;
        return document.body;
      } else {
        cov_1daa9w7v20.b[41][1]++;
      }

      cov_1daa9w7v20.s[173]++;

      if (Util.isElement(this.config.container)) {
        cov_1daa9w7v20.b[42][0]++;
        cov_1daa9w7v20.s[174]++;
        return $(this.config.container);
      } else {
        cov_1daa9w7v20.b[42][1]++;
      }

      cov_1daa9w7v20.s[175]++;
      return $(document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      cov_1daa9w7v20.f[30]++;
      cov_1daa9w7v20.s[176]++;
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      cov_1daa9w7v20.f[31]++;
      var triggers = (cov_1daa9w7v20.s[177]++, this.config.trigger.split(' '));
      cov_1daa9w7v20.s[178]++;
      triggers.forEach(function (trigger) {
        cov_1daa9w7v20.f[32]++;
        cov_1daa9w7v20.s[179]++;

        if (trigger === 'click') {
          cov_1daa9w7v20.b[43][0]++;
          cov_1daa9w7v20.s[180]++;
          $(_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            cov_1daa9w7v20.f[33]++;
            cov_1daa9w7v20.s[181]++;
            return _this5.toggle(event);
          });
        } else {
          cov_1daa9w7v20.b[43][1]++;
          cov_1daa9w7v20.s[182]++;

          if (trigger !== Trigger.MANUAL) {
            cov_1daa9w7v20.b[44][0]++;
            var eventIn = (cov_1daa9w7v20.s[183]++, trigger === Trigger.HOVER ? (cov_1daa9w7v20.b[45][0]++, _this5.constructor.Event.MOUSEENTER) : (cov_1daa9w7v20.b[45][1]++, _this5.constructor.Event.FOCUSIN));
            var eventOut = (cov_1daa9w7v20.s[184]++, trigger === Trigger.HOVER ? (cov_1daa9w7v20.b[46][0]++, _this5.constructor.Event.MOUSELEAVE) : (cov_1daa9w7v20.b[46][1]++, _this5.constructor.Event.FOCUSOUT));
            cov_1daa9w7v20.s[185]++;
            $(_this5.element).on(eventIn, _this5.config.selector, function (event) {
              cov_1daa9w7v20.f[34]++;
              cov_1daa9w7v20.s[186]++;
              return _this5._enter(event);
            }).on(eventOut, _this5.config.selector, function (event) {
              cov_1daa9w7v20.f[35]++;
              cov_1daa9w7v20.s[187]++;
              return _this5._leave(event);
            });
          } else {
            cov_1daa9w7v20.b[44][1]++;
          }
        }
      });
      cov_1daa9w7v20.s[188]++;

      this._hideModalHandler = function () {
        cov_1daa9w7v20.f[36]++;
        cov_1daa9w7v20.s[189]++;

        if (_this5.element) {
          cov_1daa9w7v20.b[47][0]++;
          cov_1daa9w7v20.s[190]++;

          _this5.hide();
        } else {
          cov_1daa9w7v20.b[47][1]++;
        }
      };

      cov_1daa9w7v20.s[191]++;
      $(this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);
      cov_1daa9w7v20.s[192]++;

      if (this.config.selector) {
        cov_1daa9w7v20.b[48][0]++;
        cov_1daa9w7v20.s[193]++;
        this.config = _objectSpread2(_objectSpread2({}, this.config), {}, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        cov_1daa9w7v20.b[48][1]++;
        cov_1daa9w7v20.s[194]++;

        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      cov_1daa9w7v20.f[37]++;
      var titleType = (cov_1daa9w7v20.s[195]++, typeof this.element.getAttribute('data-original-title'));
      cov_1daa9w7v20.s[196]++;

      if ((cov_1daa9w7v20.b[50][0]++, this.element.getAttribute('title')) || (cov_1daa9w7v20.b[50][1]++, titleType !== 'string')) {
        cov_1daa9w7v20.b[49][0]++;
        cov_1daa9w7v20.s[197]++;
        this.element.setAttribute('data-original-title', (cov_1daa9w7v20.b[51][0]++, this.element.getAttribute('title')) || (cov_1daa9w7v20.b[51][1]++, ''));
        cov_1daa9w7v20.s[198]++;
        this.element.setAttribute('title', '');
      } else {
        cov_1daa9w7v20.b[49][1]++;
      }
    };

    _proto._enter = function _enter(event, context) {
      cov_1daa9w7v20.f[38]++;
      var dataKey = (cov_1daa9w7v20.s[199]++, this.constructor.DATA_KEY);
      cov_1daa9w7v20.s[200]++;
      context = (cov_1daa9w7v20.b[52][0]++, context) || (cov_1daa9w7v20.b[52][1]++, $(event.currentTarget).data(dataKey));
      cov_1daa9w7v20.s[201]++;

      if (!context) {
        cov_1daa9w7v20.b[53][0]++;
        cov_1daa9w7v20.s[202]++;
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        cov_1daa9w7v20.s[203]++;
        $(event.currentTarget).data(dataKey, context);
      } else {
        cov_1daa9w7v20.b[53][1]++;
      }

      cov_1daa9w7v20.s[204]++;

      if (event) {
        cov_1daa9w7v20.b[54][0]++;
        cov_1daa9w7v20.s[205]++;
        context._activeTrigger[event.type === 'focusin' ? (cov_1daa9w7v20.b[55][0]++, Trigger.FOCUS) : (cov_1daa9w7v20.b[55][1]++, Trigger.HOVER)] = true;
      } else {
        cov_1daa9w7v20.b[54][1]++;
      }

      cov_1daa9w7v20.s[206]++;

      if ((cov_1daa9w7v20.b[57][0]++, $(context.getTipElement()).hasClass(ClassName.SHOW)) || (cov_1daa9w7v20.b[57][1]++, context._hoverState === HoverState.SHOW)) {
        cov_1daa9w7v20.b[56][0]++;
        cov_1daa9w7v20.s[207]++;
        context._hoverState = HoverState.SHOW;
        cov_1daa9w7v20.s[208]++;
        return;
      } else {
        cov_1daa9w7v20.b[56][1]++;
      }

      cov_1daa9w7v20.s[209]++;
      clearTimeout(context._timeout);
      cov_1daa9w7v20.s[210]++;
      context._hoverState = HoverState.SHOW;
      cov_1daa9w7v20.s[211]++;

      if ((cov_1daa9w7v20.b[59][0]++, !context.config.delay) || (cov_1daa9w7v20.b[59][1]++, !context.config.delay.show)) {
        cov_1daa9w7v20.b[58][0]++;
        cov_1daa9w7v20.s[212]++;
        context.show();
        cov_1daa9w7v20.s[213]++;
        return;
      } else {
        cov_1daa9w7v20.b[58][1]++;
      }

      cov_1daa9w7v20.s[214]++;
      context._timeout = setTimeout(function () {
        cov_1daa9w7v20.f[39]++;
        cov_1daa9w7v20.s[215]++;

        if (context._hoverState === HoverState.SHOW) {
          cov_1daa9w7v20.b[60][0]++;
          cov_1daa9w7v20.s[216]++;
          context.show();
        } else {
          cov_1daa9w7v20.b[60][1]++;
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      cov_1daa9w7v20.f[40]++;
      var dataKey = (cov_1daa9w7v20.s[217]++, this.constructor.DATA_KEY);
      cov_1daa9w7v20.s[218]++;
      context = (cov_1daa9w7v20.b[61][0]++, context) || (cov_1daa9w7v20.b[61][1]++, $(event.currentTarget).data(dataKey));
      cov_1daa9w7v20.s[219]++;

      if (!context) {
        cov_1daa9w7v20.b[62][0]++;
        cov_1daa9w7v20.s[220]++;
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        cov_1daa9w7v20.s[221]++;
        $(event.currentTarget).data(dataKey, context);
      } else {
        cov_1daa9w7v20.b[62][1]++;
      }

      cov_1daa9w7v20.s[222]++;

      if (event) {
        cov_1daa9w7v20.b[63][0]++;
        cov_1daa9w7v20.s[223]++;
        context._activeTrigger[event.type === 'focusout' ? (cov_1daa9w7v20.b[64][0]++, Trigger.FOCUS) : (cov_1daa9w7v20.b[64][1]++, Trigger.HOVER)] = false;
      } else {
        cov_1daa9w7v20.b[63][1]++;
      }

      cov_1daa9w7v20.s[224]++;

      if (context._isWithActiveTrigger()) {
        cov_1daa9w7v20.b[65][0]++;
        cov_1daa9w7v20.s[225]++;
        return;
      } else {
        cov_1daa9w7v20.b[65][1]++;
      }

      cov_1daa9w7v20.s[226]++;
      clearTimeout(context._timeout);
      cov_1daa9w7v20.s[227]++;
      context._hoverState = HoverState.OUT;
      cov_1daa9w7v20.s[228]++;

      if ((cov_1daa9w7v20.b[67][0]++, !context.config.delay) || (cov_1daa9w7v20.b[67][1]++, !context.config.delay.hide)) {
        cov_1daa9w7v20.b[66][0]++;
        cov_1daa9w7v20.s[229]++;
        context.hide();
        cov_1daa9w7v20.s[230]++;
        return;
      } else {
        cov_1daa9w7v20.b[66][1]++;
      }

      cov_1daa9w7v20.s[231]++;
      context._timeout = setTimeout(function () {
        cov_1daa9w7v20.f[41]++;
        cov_1daa9w7v20.s[232]++;

        if (context._hoverState === HoverState.OUT) {
          cov_1daa9w7v20.b[68][0]++;
          cov_1daa9w7v20.s[233]++;
          context.hide();
        } else {
          cov_1daa9w7v20.b[68][1]++;
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      cov_1daa9w7v20.f[42]++;
      cov_1daa9w7v20.s[234]++;

      for (var trigger in this._activeTrigger) {
        cov_1daa9w7v20.s[235]++;

        if (this._activeTrigger[trigger]) {
          cov_1daa9w7v20.b[69][0]++;
          cov_1daa9w7v20.s[236]++;
          return true;
        } else {
          cov_1daa9w7v20.b[69][1]++;
        }
      }

      cov_1daa9w7v20.s[237]++;
      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      cov_1daa9w7v20.f[43]++;
      var dataAttributes = (cov_1daa9w7v20.s[238]++, $(this.element).data());
      cov_1daa9w7v20.s[239]++;
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        cov_1daa9w7v20.f[44]++;
        cov_1daa9w7v20.s[240]++;

        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          cov_1daa9w7v20.b[70][0]++;
          cov_1daa9w7v20.s[241]++;
          delete dataAttributes[dataAttr];
        } else {
          cov_1daa9w7v20.b[70][1]++;
        }
      });
      cov_1daa9w7v20.s[242]++;
      config = _objectSpread2(_objectSpread2(_objectSpread2({}, this.constructor.Default), dataAttributes), (cov_1daa9w7v20.b[72][0]++, typeof config === 'object') && (cov_1daa9w7v20.b[72][1]++, config) ? (cov_1daa9w7v20.b[71][0]++, config) : (cov_1daa9w7v20.b[71][1]++, {}));
      cov_1daa9w7v20.s[243]++;

      if (typeof config.delay === 'number') {
        cov_1daa9w7v20.b[73][0]++;
        cov_1daa9w7v20.s[244]++;
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      } else {
        cov_1daa9w7v20.b[73][1]++;
      }

      cov_1daa9w7v20.s[245]++;

      if (typeof config.title === 'number') {
        cov_1daa9w7v20.b[74][0]++;
        cov_1daa9w7v20.s[246]++;
        config.title = config.title.toString();
      } else {
        cov_1daa9w7v20.b[74][1]++;
      }

      cov_1daa9w7v20.s[247]++;

      if (typeof config.content === 'number') {
        cov_1daa9w7v20.b[75][0]++;
        cov_1daa9w7v20.s[248]++;
        config.content = config.content.toString();
      } else {
        cov_1daa9w7v20.b[75][1]++;
      }

      cov_1daa9w7v20.s[249]++;
      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      cov_1daa9w7v20.s[250]++;

      if (config.sanitize) {
        cov_1daa9w7v20.b[76][0]++;
        cov_1daa9w7v20.s[251]++;
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      } else {
        cov_1daa9w7v20.b[76][1]++;
      }

      cov_1daa9w7v20.s[252]++;
      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      cov_1daa9w7v20.f[45]++;
      var config = (cov_1daa9w7v20.s[253]++, {});
      cov_1daa9w7v20.s[254]++;

      if (this.config) {
        cov_1daa9w7v20.b[77][0]++;
        cov_1daa9w7v20.s[255]++;

        for (var key in this.config) {
          cov_1daa9w7v20.s[256]++;

          if (this.constructor.Default[key] !== this.config[key]) {
            cov_1daa9w7v20.b[78][0]++;
            cov_1daa9w7v20.s[257]++;
            config[key] = this.config[key];
          } else {
            cov_1daa9w7v20.b[78][1]++;
          }
        }
      } else {
        cov_1daa9w7v20.b[77][1]++;
      }

      cov_1daa9w7v20.s[258]++;
      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      cov_1daa9w7v20.f[46]++;
      var $tip = (cov_1daa9w7v20.s[259]++, $(this.getTipElement()));
      var tabClass = (cov_1daa9w7v20.s[260]++, $tip.attr('class').match(BSCLS_PREFIX_REGEX));
      cov_1daa9w7v20.s[261]++;

      if ((cov_1daa9w7v20.b[80][0]++, tabClass !== null) && (cov_1daa9w7v20.b[80][1]++, tabClass.length)) {
        cov_1daa9w7v20.b[79][0]++;
        cov_1daa9w7v20.s[262]++;
        $tip.removeClass(tabClass.join(''));
      } else {
        cov_1daa9w7v20.b[79][1]++;
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      cov_1daa9w7v20.f[47]++;
      var popperInstance = (cov_1daa9w7v20.s[263]++, popperData.instance);
      cov_1daa9w7v20.s[264]++;
      this.tip = popperInstance.popper;
      cov_1daa9w7v20.s[265]++;

      this._cleanTipClass();

      cov_1daa9w7v20.s[266]++;
      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      cov_1daa9w7v20.f[48]++;
      var tip = (cov_1daa9w7v20.s[267]++, this.getTipElement());
      var initConfigAnimation = (cov_1daa9w7v20.s[268]++, this.config.animation);
      cov_1daa9w7v20.s[269]++;

      if (tip.getAttribute('x-placement') !== null) {
        cov_1daa9w7v20.b[81][0]++;
        cov_1daa9w7v20.s[270]++;
        return;
      } else {
        cov_1daa9w7v20.b[81][1]++;
      }

      cov_1daa9w7v20.s[271]++;
      $(tip).removeClass(ClassName.FADE);
      cov_1daa9w7v20.s[272]++;
      this.config.animation = false;
      cov_1daa9w7v20.s[273]++;
      this.hide();
      cov_1daa9w7v20.s[274]++;
      this.show();
      cov_1daa9w7v20.s[275]++;
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      cov_1daa9w7v20.f[49]++;
      cov_1daa9w7v20.s[276]++;
      return this.each(function () {
        cov_1daa9w7v20.f[50]++;
        var data = (cov_1daa9w7v20.s[277]++, $(this).data(DATA_KEY));

        var _config = (cov_1daa9w7v20.s[278]++, (cov_1daa9w7v20.b[82][0]++, typeof config === 'object') && (cov_1daa9w7v20.b[82][1]++, config));

        cov_1daa9w7v20.s[279]++;

        if ((cov_1daa9w7v20.b[84][0]++, !data) && (cov_1daa9w7v20.b[84][1]++, /dispose|hide/.test(config))) {
          cov_1daa9w7v20.b[83][0]++;
          cov_1daa9w7v20.s[280]++;
          return;
        } else {
          cov_1daa9w7v20.b[83][1]++;
        }

        cov_1daa9w7v20.s[281]++;

        if (!data) {
          cov_1daa9w7v20.b[85][0]++;
          cov_1daa9w7v20.s[282]++;
          data = new Tooltip(this, _config);
          cov_1daa9w7v20.s[283]++;
          $(this).data(DATA_KEY, data);
        } else {
          cov_1daa9w7v20.b[85][1]++;
        }

        cov_1daa9w7v20.s[284]++;

        if (typeof config === 'string') {
          cov_1daa9w7v20.b[86][0]++;
          cov_1daa9w7v20.s[285]++;

          if (typeof data[config] === 'undefined') {
            cov_1daa9w7v20.b[87][0]++;
            cov_1daa9w7v20.s[286]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_1daa9w7v20.b[87][1]++;
          }

          cov_1daa9w7v20.s[287]++;
          data[config]();
        } else {
          cov_1daa9w7v20.b[86][1]++;
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        cov_1daa9w7v20.f[1]++;
        cov_1daa9w7v20.s[27]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_1daa9w7v20.f[2]++;
        cov_1daa9w7v20.s[28]++;
        return Default;
      }
    }, {
      key: "NAME",
      get: function get() {
        cov_1daa9w7v20.f[3]++;
        cov_1daa9w7v20.s[29]++;
        return NAME;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        cov_1daa9w7v20.f[4]++;
        cov_1daa9w7v20.s[30]++;
        return DATA_KEY;
      }
    }, {
      key: "Event",
      get: function get() {
        cov_1daa9w7v20.f[5]++;
        cov_1daa9w7v20.s[31]++;
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        cov_1daa9w7v20.f[6]++;
        cov_1daa9w7v20.s[32]++;
        return EVENT_KEY;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        cov_1daa9w7v20.f[7]++;
        cov_1daa9w7v20.s[33]++;
        return DefaultType;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  cov_1daa9w7v20.s[288]++;
  $.fn[NAME] = Tooltip._jQueryInterface;
  cov_1daa9w7v20.s[289]++;
  $.fn[NAME].Constructor = Tooltip;
  cov_1daa9w7v20.s[290]++;

  $.fn[NAME].noConflict = function () {
    cov_1daa9w7v20.f[51]++;
    cov_1daa9w7v20.s[291]++;
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    cov_1daa9w7v20.s[292]++;
    return Tooltip._jQueryInterface;
  };

  return Tooltip;

})));
//# sourceMappingURL=tooltip.js.map

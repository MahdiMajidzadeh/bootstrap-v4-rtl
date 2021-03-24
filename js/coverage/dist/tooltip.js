/*!
  * Bootstrap tooltip.js v4.6.0-2 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2021 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('popper.js'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', 'popper.js', './util'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Tooltip = factory(global.jQuery, global.Popper, global.Util));
}(this, (function ($, Popper, Util) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
  var Popper__default = /*#__PURE__*/_interopDefaultLegacy(Popper);
  var Util__default = /*#__PURE__*/_interopDefaultLegacy(Util);

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

  function cov_1zpyx52306() {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/tools/sanitizer.js";
    var hash = "ec98f00f0fd3c44e5a1d03debd82a548046d7303";
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
            column: 157
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
            column: 86
          }
        },
        "11": {
          start: {
            line: 80,
            column: 58
          },
          end: {
            line: 80,
            column: 85
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
            column: 24
          },
          end: {
            line: 83,
            column: 37
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
              column: 58
            },
            end: {
              line: 80,
              column: 85
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
              column: 34
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
      _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
      hash: "ec98f00f0fd3c44e5a1d03debd82a548046d7303"
    };
    var coverage = global[gcv] || (global[gcv] = {});

    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }

    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_1zpyx52306 = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }

  cov_1zpyx52306();

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.6.0): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  var uriAttrs = (cov_1zpyx52306().s[0]++, ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
  var ARIA_ATTRIBUTE_PATTERN = (cov_1zpyx52306().s[1]++, /^aria-[\w-]*$/i);
  var DefaultWhitelist = (cov_1zpyx52306().s[2]++, {
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
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
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

  var SAFE_URL_PATTERN = (cov_1zpyx52306().s[3]++, /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi);
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = (cov_1zpyx52306().s[4]++, /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i);

  function allowedAttribute(attr, allowedAttributeList) {
    cov_1zpyx52306().f[0]++;
    var attrName = (cov_1zpyx52306().s[5]++, attr.nodeName.toLowerCase());
    cov_1zpyx52306().s[6]++;

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      cov_1zpyx52306().b[0][0]++;
      cov_1zpyx52306().s[7]++;

      if (uriAttrs.indexOf(attrName) !== -1) {
        cov_1zpyx52306().b[1][0]++;
        cov_1zpyx52306().s[8]++;
        return Boolean((cov_1zpyx52306().b[2][0]++, attr.nodeValue.match(SAFE_URL_PATTERN)) || (cov_1zpyx52306().b[2][1]++, attr.nodeValue.match(DATA_URL_PATTERN)));
      } else {
        cov_1zpyx52306().b[1][1]++;
      }

      cov_1zpyx52306().s[9]++;
      return true;
    } else {
      cov_1zpyx52306().b[0][1]++;
    }

    var regExp = (cov_1zpyx52306().s[10]++, allowedAttributeList.filter(function (attrRegex) {
      cov_1zpyx52306().f[1]++;
      cov_1zpyx52306().s[11]++;
      return attrRegex instanceof RegExp;
    })); // Check if a regular expression validates the attribute.

    cov_1zpyx52306().s[12]++;

    for (var i = (cov_1zpyx52306().s[13]++, 0), len = (cov_1zpyx52306().s[14]++, regExp.length); i < len; i++) {
      cov_1zpyx52306().s[15]++;

      if (attrName.match(regExp[i])) {
        cov_1zpyx52306().b[3][0]++;
        cov_1zpyx52306().s[16]++;
        return true;
      } else {
        cov_1zpyx52306().b[3][1]++;
      }
    }

    cov_1zpyx52306().s[17]++;
    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    cov_1zpyx52306().f[2]++;
    cov_1zpyx52306().s[18]++;

    if (unsafeHtml.length === 0) {
      cov_1zpyx52306().b[4][0]++;
      cov_1zpyx52306().s[19]++;
      return unsafeHtml;
    } else {
      cov_1zpyx52306().b[4][1]++;
    }

    cov_1zpyx52306().s[20]++;

    if ((cov_1zpyx52306().b[6][0]++, sanitizeFn) && (cov_1zpyx52306().b[6][1]++, typeof sanitizeFn === 'function')) {
      cov_1zpyx52306().b[5][0]++;
      cov_1zpyx52306().s[21]++;
      return sanitizeFn(unsafeHtml);
    } else {
      cov_1zpyx52306().b[5][1]++;
    }

    var domParser = (cov_1zpyx52306().s[22]++, new window.DOMParser());
    var createdDocument = (cov_1zpyx52306().s[23]++, domParser.parseFromString(unsafeHtml, 'text/html'));
    var whitelistKeys = (cov_1zpyx52306().s[24]++, Object.keys(whiteList));
    var elements = (cov_1zpyx52306().s[25]++, [].slice.call(createdDocument.body.querySelectorAll('*')));
    cov_1zpyx52306().s[26]++;

    var _loop = function _loop(i, len) {
      var el = (cov_1zpyx52306().s[29]++, elements[i]);
      var elName = (cov_1zpyx52306().s[30]++, el.nodeName.toLowerCase());
      cov_1zpyx52306().s[31]++;

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        cov_1zpyx52306().b[7][0]++;
        cov_1zpyx52306().s[32]++;
        el.parentNode.removeChild(el);
        cov_1zpyx52306().s[33]++;
        return "continue";
      } else {
        cov_1zpyx52306().b[7][1]++;
      }

      var attributeList = (cov_1zpyx52306().s[34]++, [].slice.call(el.attributes));
      var whitelistedAttributes = (cov_1zpyx52306().s[35]++, [].concat((cov_1zpyx52306().b[8][0]++, whiteList['*']) || (cov_1zpyx52306().b[8][1]++, []), (cov_1zpyx52306().b[9][0]++, whiteList[elName]) || (cov_1zpyx52306().b[9][1]++, [])));
      cov_1zpyx52306().s[36]++;
      attributeList.forEach(function (attr) {
        cov_1zpyx52306().f[3]++;
        cov_1zpyx52306().s[37]++;

        if (!allowedAttribute(attr, whitelistedAttributes)) {
          cov_1zpyx52306().b[10][0]++;
          cov_1zpyx52306().s[38]++;
          el.removeAttribute(attr.nodeName);
        } else {
          cov_1zpyx52306().b[10][1]++;
        }
      });
    };

    for (var i = (cov_1zpyx52306().s[27]++, 0), len = (cov_1zpyx52306().s[28]++, elements.length); i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    cov_1zpyx52306().s[39]++;
    return createdDocument.body.innerHTML;
  }

  function cov_1daa9w7v20() {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/tooltip.js";
    var hash = "6487a2e1cf4cdbcff8fd16705d2961c33dad22de";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/tooltip.js",
      statementMap: {
        "0": {
          start: {
            line: 22,
            column: 13
          },
          end: {
            line: 22,
            column: 22
          }
        },
        "1": {
          start: {
            line: 23,
            column: 16
          },
          end: {
            line: 23,
            column: 23
          }
        },
        "2": {
          start: {
            line: 24,
            column: 17
          },
          end: {
            line: 24,
            column: 29
          }
        },
        "3": {
          start: {
            line: 25,
            column: 18
          },
          end: {
            line: 25,
            column: 32
          }
        },
        "4": {
          start: {
            line: 26,
            column: 27
          },
          end: {
            line: 26,
            column: 37
          }
        },
        "5": {
          start: {
            line: 27,
            column: 21
          },
          end: {
            line: 27,
            column: 33
          }
        },
        "6": {
          start: {
            line: 28,
            column: 27
          },
          end: {
            line: 28,
            column: 72
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
            line: 49,
            column: 1
          }
        },
        "9": {
          start: {
            line: 51,
            column: 22
          },
          end: {
            line: 57,
            column: 1
          }
        },
        "10": {
          start: {
            line: 59,
            column: 16
          },
          end: {
            line: 79,
            column: 1
          }
        },
        "11": {
          start: {
            line: 81,
            column: 25
          },
          end: {
            line: 81,
            column: 31
          }
        },
        "12": {
          start: {
            line: 82,
            column: 24
          },
          end: {
            line: 82,
            column: 29
          }
        },
        "13": {
          start: {
            line: 84,
            column: 14
          },
          end: {
            line: 95,
            column: 1
          }
        },
        "14": {
          start: {
            line: 97,
            column: 24
          },
          end: {
            line: 97,
            column: 30
          }
        },
        "15": {
          start: {
            line: 98,
            column: 24
          },
          end: {
            line: 98,
            column: 30
          }
        },
        "16": {
          start: {
            line: 100,
            column: 31
          },
          end: {
            line: 100,
            column: 47
          }
        },
        "17": {
          start: {
            line: 101,
            column: 23
          },
          end: {
            line: 101,
            column: 31
          }
        },
        "18": {
          start: {
            line: 103,
            column: 22
          },
          end: {
            line: 103,
            column: 29
          }
        },
        "19": {
          start: {
            line: 104,
            column: 22
          },
          end: {
            line: 104,
            column: 29
          }
        },
        "20": {
          start: {
            line: 105,
            column: 22
          },
          end: {
            line: 105,
            column: 29
          }
        },
        "21": {
          start: {
            line: 106,
            column: 23
          },
          end: {
            line: 106,
            column: 31
          }
        },
        "22": {
          start: {
            line: 116,
            column: 4
          },
          end: {
            line: 118,
            column: 5
          }
        },
        "23": {
          start: {
            line: 117,
            column: 6
          },
          end: {
            line: 117,
            column: 89
          }
        },
        "24": {
          start: {
            line: 121,
            column: 4
          },
          end: {
            line: 121,
            column: 26
          }
        },
        "25": {
          start: {
            line: 122,
            column: 4
          },
          end: {
            line: 122,
            column: 21
          }
        },
        "26": {
          start: {
            line: 123,
            column: 4
          },
          end: {
            line: 123,
            column: 25
          }
        },
        "27": {
          start: {
            line: 124,
            column: 4
          },
          end: {
            line: 124,
            column: 28
          }
        },
        "28": {
          start: {
            line: 125,
            column: 4
          },
          end: {
            line: 125,
            column: 23
          }
        },
        "29": {
          start: {
            line: 128,
            column: 4
          },
          end: {
            line: 128,
            column: 26
          }
        },
        "30": {
          start: {
            line: 129,
            column: 4
          },
          end: {
            line: 129,
            column: 41
          }
        },
        "31": {
          start: {
            line: 130,
            column: 4
          },
          end: {
            line: 130,
            column: 19
          }
        },
        "32": {
          start: {
            line: 132,
            column: 4
          },
          end: {
            line: 132,
            column: 24
          }
        },
        "33": {
          start: {
            line: 138,
            column: 4
          },
          end: {
            line: 138,
            column: 18
          }
        },
        "34": {
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 142,
            column: 18
          }
        },
        "35": {
          start: {
            line: 146,
            column: 4
          },
          end: {
            line: 146,
            column: 15
          }
        },
        "36": {
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 150,
            column: 19
          }
        },
        "37": {
          start: {
            line: 154,
            column: 4
          },
          end: {
            line: 154,
            column: 16
          }
        },
        "38": {
          start: {
            line: 158,
            column: 4
          },
          end: {
            line: 158,
            column: 20
          }
        },
        "39": {
          start: {
            line: 162,
            column: 4
          },
          end: {
            line: 162,
            column: 22
          }
        },
        "40": {
          start: {
            line: 168,
            column: 4
          },
          end: {
            line: 168,
            column: 26
          }
        },
        "41": {
          start: {
            line: 172,
            column: 4
          },
          end: {
            line: 172,
            column: 27
          }
        },
        "42": {
          start: {
            line: 176,
            column: 4
          },
          end: {
            line: 176,
            column: 38
          }
        },
        "43": {
          start: {
            line: 180,
            column: 4
          },
          end: {
            line: 182,
            column: 5
          }
        },
        "44": {
          start: {
            line: 181,
            column: 6
          },
          end: {
            line: 181,
            column: 12
          }
        },
        "45": {
          start: {
            line: 184,
            column: 4
          },
          end: {
            line: 210,
            column: 5
          }
        },
        "46": {
          start: {
            line: 185,
            column: 22
          },
          end: {
            line: 185,
            column: 47
          }
        },
        "47": {
          start: {
            line: 186,
            column: 20
          },
          end: {
            line: 186,
            column: 56
          }
        },
        "48": {
          start: {
            line: 188,
            column: 6
          },
          end: {
            line: 194,
            column: 7
          }
        },
        "49": {
          start: {
            line: 189,
            column: 8
          },
          end: {
            line: 192,
            column: 9
          }
        },
        "50": {
          start: {
            line: 193,
            column: 8
          },
          end: {
            line: 193,
            column: 53
          }
        },
        "51": {
          start: {
            line: 196,
            column: 6
          },
          end: {
            line: 196,
            column: 66
          }
        },
        "52": {
          start: {
            line: 198,
            column: 6
          },
          end: {
            line: 202,
            column: 7
          }
        },
        "53": {
          start: {
            line: 199,
            column: 8
          },
          end: {
            line: 199,
            column: 37
          }
        },
        "54": {
          start: {
            line: 201,
            column: 8
          },
          end: {
            line: 201,
            column: 37
          }
        },
        "55": {
          start: {
            line: 204,
            column: 6
          },
          end: {
            line: 207,
            column: 7
          }
        },
        "56": {
          start: {
            line: 205,
            column: 8
          },
          end: {
            line: 205,
            column: 31
          }
        },
        "57": {
          start: {
            line: 206,
            column: 8
          },
          end: {
            line: 206,
            column: 14
          }
        },
        "58": {
          start: {
            line: 209,
            column: 6
          },
          end: {
            line: 209,
            column: 29
          }
        },
        "59": {
          start: {
            line: 214,
            column: 4
          },
          end: {
            line: 214,
            column: 31
          }
        },
        "60": {
          start: {
            line: 216,
            column: 4
          },
          end: {
            line: 216,
            column: 57
          }
        },
        "61": {
          start: {
            line: 218,
            column: 4
          },
          end: {
            line: 218,
            column: 51
          }
        },
        "62": {
          start: {
            line: 219,
            column: 4
          },
          end: {
            line: 219,
            column: 82
          }
        },
        "63": {
          start: {
            line: 221,
            column: 4
          },
          end: {
            line: 223,
            column: 5
          }
        },
        "64": {
          start: {
            line: 222,
            column: 6
          },
          end: {
            line: 222,
            column: 26
          }
        },
        "65": {
          start: {
            line: 225,
            column: 4
          },
          end: {
            line: 225,
            column: 26
          }
        },
        "66": {
          start: {
            line: 226,
            column: 4
          },
          end: {
            line: 226,
            column: 24
          }
        },
        "67": {
          start: {
            line: 227,
            column: 4
          },
          end: {
            line: 227,
            column: 27
          }
        },
        "68": {
          start: {
            line: 228,
            column: 4
          },
          end: {
            line: 228,
            column: 30
          }
        },
        "69": {
          start: {
            line: 229,
            column: 4
          },
          end: {
            line: 231,
            column: 5
          }
        },
        "70": {
          start: {
            line: 230,
            column: 6
          },
          end: {
            line: 230,
            column: 28
          }
        },
        "71": {
          start: {
            line: 233,
            column: 4
          },
          end: {
            line: 233,
            column: 23
          }
        },
        "72": {
          start: {
            line: 234,
            column: 4
          },
          end: {
            line: 234,
            column: 23
          }
        },
        "73": {
          start: {
            line: 235,
            column: 4
          },
          end: {
            line: 235,
            column: 22
          }
        },
        "74": {
          start: {
            line: 236,
            column: 4
          },
          end: {
            line: 236,
            column: 19
          }
        },
        "75": {
          start: {
            line: 240,
            column: 4
          },
          end: {
            line: 242,
            column: 5
          }
        },
        "76": {
          start: {
            line: 241,
            column: 6
          },
          end: {
            line: 241,
            column: 60
          }
        },
        "77": {
          start: {
            line: 244,
            column: 22
          },
          end: {
            line: 244,
            column: 58
          }
        },
        "78": {
          start: {
            line: 245,
            column: 4
          },
          end: {
            line: 323,
            column: 5
          }
        },
        "79": {
          start: {
            line: 246,
            column: 6
          },
          end: {
            line: 246,
            column: 40
          }
        },
        "80": {
          start: {
            line: 248,
            column: 25
          },
          end: {
            line: 248,
            column: 58
          }
        },
        "81": {
          start: {
            line: 249,
            column: 25
          },
          end: {
            line: 252,
            column: 7
          }
        },
        "82": {
          start: {
            line: 254,
            column: 6
          },
          end: {
            line: 256,
            column: 7
          }
        },
        "83": {
          start: {
            line: 255,
            column: 8
          },
          end: {
            line: 255,
            column: 14
          }
        },
        "84": {
          start: {
            line: 258,
            column: 18
          },
          end: {
            line: 258,
            column: 38
          }
        },
        "85": {
          start: {
            line: 259,
            column: 20
          },
          end: {
            line: 259,
            column: 54
          }
        },
        "86": {
          start: {
            line: 261,
            column: 6
          },
          end: {
            line: 261,
            column: 35
          }
        },
        "87": {
          start: {
            line: 262,
            column: 6
          },
          end: {
            line: 262,
            column: 58
          }
        },
        "88": {
          start: {
            line: 264,
            column: 6
          },
          end: {
            line: 264,
            column: 23
          }
        },
        "89": {
          start: {
            line: 266,
            column: 6
          },
          end: {
            line: 268,
            column: 7
          }
        },
        "90": {
          start: {
            line: 267,
            column: 8
          },
          end: {
            line: 267,
            column: 40
          }
        },
        "91": {
          start: {
            line: 270,
            column: 24
          },
          end: {
            line: 272,
            column: 29
          }
        },
        "92": {
          start: {
            line: 274,
            column: 25
          },
          end: {
            line: 274,
            column: 55
          }
        },
        "93": {
          start: {
            line: 275,
            column: 6
          },
          end: {
            line: 275,
            column: 41
          }
        },
        "94": {
          start: {
            line: 277,
            column: 24
          },
          end: {
            line: 277,
            column: 44
          }
        },
        "95": {
          start: {
            line: 278,
            column: 6
          },
          end: {
            line: 278,
            column: 50
          }
        },
        "96": {
          start: {
            line: 280,
            column: 6
          },
          end: {
            line: 282,
            column: 7
          }
        },
        "97": {
          start: {
            line: 281,
            column: 8
          },
          end: {
            line: 281,
            column: 34
          }
        },
        "98": {
          start: {
            line: 284,
            column: 6
          },
          end: {
            line: 284,
            column: 62
          }
        },
        "99": {
          start: {
            line: 286,
            column: 6
          },
          end: {
            line: 286,
            column: 85
          }
        },
        "100": {
          start: {
            line: 288,
            column: 6
          },
          end: {
            line: 288,
            column: 38
          }
        },
        "101": {
          start: {
            line: 289,
            column: 6
          },
          end: {
            line: 289,
            column: 46
          }
        },
        "102": {
          start: {
            line: 295,
            column: 6
          },
          end: {
            line: 297,
            column: 7
          }
        },
        "103": {
          start: {
            line: 296,
            column: 8
          },
          end: {
            line: 296,
            column: 65
          }
        },
        "104": {
          start: {
            line: 299,
            column: 23
          },
          end: {
            line: 312,
            column: 7
          }
        },
        "105": {
          start: {
            line: 300,
            column: 8
          },
          end: {
            line: 302,
            column: 9
          }
        },
        "106": {
          start: {
            line: 301,
            column: 10
          },
          end: {
            line: 301,
            column: 31
          }
        },
        "107": {
          start: {
            line: 304,
            column: 31
          },
          end: {
            line: 304,
            column: 47
          }
        },
        "108": {
          start: {
            line: 305,
            column: 8
          },
          end: {
            line: 305,
            column: 31
          }
        },
        "109": {
          start: {
            line: 307,
            column: 8
          },
          end: {
            line: 307,
            column: 61
          }
        },
        "110": {
          start: {
            line: 309,
            column: 8
          },
          end: {
            line: 311,
            column: 9
          }
        },
        "111": {
          start: {
            line: 310,
            column: 10
          },
          end: {
            line: 310,
            column: 33
          }
        },
        "112": {
          start: {
            line: 314,
            column: 6
          },
          end: {
            line: 322,
            column: 7
          }
        },
        "113": {
          start: {
            line: 315,
            column: 35
          },
          end: {
            line: 315,
            column: 82
          }
        },
        "114": {
          start: {
            line: 317,
            column: 8
          },
          end: {
            line: 319,
            column: 51
          }
        },
        "115": {
          start: {
            line: 321,
            column: 8
          },
          end: {
            line: 321,
            column: 18
          }
        },
        "116": {
          start: {
            line: 327,
            column: 16
          },
          end: {
            line: 327,
            column: 36
          }
        },
        "117": {
          start: {
            line: 328,
            column: 22
          },
          end: {
            line: 328,
            column: 58
          }
        },
        "118": {
          start: {
            line: 329,
            column: 21
          },
          end: {
            line: 344,
            column: 5
          }
        },
        "119": {
          start: {
            line: 330,
            column: 6
          },
          end: {
            line: 332,
            column: 7
          }
        },
        "120": {
          start: {
            line: 331,
            column: 8
          },
          end: {
            line: 331,
            column: 39
          }
        },
        "121": {
          start: {
            line: 334,
            column: 6
          },
          end: {
            line: 334,
            column: 27
          }
        },
        "122": {
          start: {
            line: 335,
            column: 6
          },
          end: {
            line: 335,
            column: 54
          }
        },
        "123": {
          start: {
            line: 336,
            column: 6
          },
          end: {
            line: 336,
            column: 60
          }
        },
        "124": {
          start: {
            line: 337,
            column: 6
          },
          end: {
            line: 339,
            column: 7
          }
        },
        "125": {
          start: {
            line: 338,
            column: 8
          },
          end: {
            line: 338,
            column: 30
          }
        },
        "126": {
          start: {
            line: 341,
            column: 6
          },
          end: {
            line: 343,
            column: 7
          }
        },
        "127": {
          start: {
            line: 342,
            column: 8
          },
          end: {
            line: 342,
            column: 18
          }
        },
        "128": {
          start: {
            line: 346,
            column: 4
          },
          end: {
            line: 346,
            column: 38
          }
        },
        "129": {
          start: {
            line: 348,
            column: 4
          },
          end: {
            line: 350,
            column: 5
          }
        },
        "130": {
          start: {
            line: 349,
            column: 6
          },
          end: {
            line: 349,
            column: 12
          }
        },
        "131": {
          start: {
            line: 352,
            column: 4
          },
          end: {
            line: 352,
            column: 39
          }
        },
        "132": {
          start: {
            line: 356,
            column: 4
          },
          end: {
            line: 358,
            column: 5
          }
        },
        "133": {
          start: {
            line: 357,
            column: 6
          },
          end: {
            line: 357,
            column: 64
          }
        },
        "134": {
          start: {
            line: 360,
            column: 4
          },
          end: {
            line: 360,
            column: 46
          }
        },
        "135": {
          start: {
            line: 361,
            column: 4
          },
          end: {
            line: 361,
            column: 46
          }
        },
        "136": {
          start: {
            line: 362,
            column: 4
          },
          end: {
            line: 362,
            column: 46
          }
        },
        "137": {
          start: {
            line: 364,
            column: 4
          },
          end: {
            line: 372,
            column: 5
          }
        },
        "138": {
          start: {
            line: 365,
            column: 33
          },
          end: {
            line: 365,
            column: 75
          }
        },
        "139": {
          start: {
            line: 367,
            column: 6
          },
          end: {
            line: 369,
            column: 49
          }
        },
        "140": {
          start: {
            line: 371,
            column: 6
          },
          end: {
            line: 371,
            column: 16
          }
        },
        "141": {
          start: {
            line: 374,
            column: 4
          },
          end: {
            line: 374,
            column: 25
          }
        },
        "142": {
          start: {
            line: 378,
            column: 4
          },
          end: {
            line: 380,
            column: 5
          }
        },
        "143": {
          start: {
            line: 379,
            column: 6
          },
          end: {
            line: 379,
            column: 35
          }
        },
        "144": {
          start: {
            line: 386,
            column: 4
          },
          end: {
            line: 386,
            column: 35
          }
        },
        "145": {
          start: {
            line: 390,
            column: 4
          },
          end: {
            line: 390,
            column: 69
          }
        },
        "146": {
          start: {
            line: 394,
            column: 4
          },
          end: {
            line: 394,
            column: 53
          }
        },
        "147": {
          start: {
            line: 395,
            column: 4
          },
          end: {
            line: 395,
            column: 19
          }
        },
        "148": {
          start: {
            line: 399,
            column: 16
          },
          end: {
            line: 399,
            column: 36
          }
        },
        "149": {
          start: {
            line: 400,
            column: 4
          },
          end: {
            line: 400,
            column: 92
          }
        },
        "150": {
          start: {
            line: 401,
            column: 4
          },
          end: {
            line: 401,
            column: 63
          }
        },
        "151": {
          start: {
            line: 405,
            column: 4
          },
          end: {
            line: 416,
            column: 5
          }
        },
        "152": {
          start: {
            line: 407,
            column: 6
          },
          end: {
            line: 413,
            column: 7
          }
        },
        "153": {
          start: {
            line: 408,
            column: 8
          },
          end: {
            line: 410,
            column: 9
          }
        },
        "154": {
          start: {
            line: 409,
            column: 10
          },
          end: {
            line: 409,
            column: 42
          }
        },
        "155": {
          start: {
            line: 412,
            column: 8
          },
          end: {
            line: 412,
            column: 40
          }
        },
        "156": {
          start: {
            line: 415,
            column: 6
          },
          end: {
            line: 415,
            column: 12
          }
        },
        "157": {
          start: {
            line: 418,
            column: 4
          },
          end: {
            line: 426,
            column: 5
          }
        },
        "158": {
          start: {
            line: 419,
            column: 6
          },
          end: {
            line: 421,
            column: 7
          }
        },
        "159": {
          start: {
            line: 420,
            column: 8
          },
          end: {
            line: 420,
            column: 86
          }
        },
        "160": {
          start: {
            line: 423,
            column: 6
          },
          end: {
            line: 423,
            column: 28
          }
        },
        "161": {
          start: {
            line: 425,
            column: 6
          },
          end: {
            line: 425,
            column: 28
          }
        },
        "162": {
          start: {
            line: 430,
            column: 16
          },
          end: {
            line: 430,
            column: 64
          }
        },
        "163": {
          start: {
            line: 432,
            column: 4
          },
          end: {
            line: 436,
            column: 5
          }
        },
        "164": {
          start: {
            line: 433,
            column: 6
          },
          end: {
            line: 435,
            column: 25
          }
        },
        "165": {
          start: {
            line: 438,
            column: 4
          },
          end: {
            line: 438,
            column: 16
          }
        },
        "166": {
          start: {
            line: 444,
            column: 28
          },
          end: {
            line: 464,
            column: 5
          }
        },
        "167": {
          start: {
            line: 459,
            column: 8
          },
          end: {
            line: 461,
            column: 9
          }
        },
        "168": {
          start: {
            line: 460,
            column: 10
          },
          end: {
            line: 460,
            column: 49
          }
        },
        "169": {
          start: {
            line: 463,
            column: 24
          },
          end: {
            line: 463,
            column: 63
          }
        },
        "170": {
          start: {
            line: 466,
            column: 4
          },
          end: {
            line: 469,
            column: 5
          }
        },
        "171": {
          start: {
            line: 473,
            column: 19
          },
          end: {
            line: 473,
            column: 21
          }
        },
        "172": {
          start: {
            line: 475,
            column: 4
          },
          end: {
            line: 486,
            column: 5
          }
        },
        "173": {
          start: {
            line: 476,
            column: 6
          },
          end: {
            line: 483,
            column: 7
          }
        },
        "174": {
          start: {
            line: 477,
            column: 8
          },
          end: {
            line: 480,
            column: 9
          }
        },
        "175": {
          start: {
            line: 482,
            column: 8
          },
          end: {
            line: 482,
            column: 19
          }
        },
        "176": {
          start: {
            line: 485,
            column: 6
          },
          end: {
            line: 485,
            column: 40
          }
        },
        "177": {
          start: {
            line: 488,
            column: 4
          },
          end: {
            line: 488,
            column: 17
          }
        },
        "178": {
          start: {
            line: 492,
            column: 4
          },
          end: {
            line: 494,
            column: 5
          }
        },
        "179": {
          start: {
            line: 493,
            column: 6
          },
          end: {
            line: 493,
            column: 26
          }
        },
        "180": {
          start: {
            line: 496,
            column: 4
          },
          end: {
            line: 498,
            column: 5
          }
        },
        "181": {
          start: {
            line: 497,
            column: 6
          },
          end: {
            line: 497,
            column: 37
          }
        },
        "182": {
          start: {
            line: 500,
            column: 4
          },
          end: {
            line: 500,
            column: 50
          }
        },
        "183": {
          start: {
            line: 504,
            column: 4
          },
          end: {
            line: 504,
            column: 49
          }
        },
        "184": {
          start: {
            line: 508,
            column: 21
          },
          end: {
            line: 508,
            column: 51
          }
        },
        "185": {
          start: {
            line: 510,
            column: 4
          },
          end: {
            line: 529,
            column: 6
          }
        },
        "186": {
          start: {
            line: 511,
            column: 6
          },
          end: {
            line: 528,
            column: 7
          }
        },
        "187": {
          start: {
            line: 512,
            column: 8
          },
          end: {
            line: 516,
            column: 9
          }
        },
        "188": {
          start: {
            line: 515,
            column: 19
          },
          end: {
            line: 515,
            column: 37
          }
        },
        "189": {
          start: {
            line: 517,
            column: 13
          },
          end: {
            line: 528,
            column: 7
          }
        },
        "190": {
          start: {
            line: 518,
            column: 24
          },
          end: {
            line: 520,
            column: 40
          }
        },
        "191": {
          start: {
            line: 521,
            column: 25
          },
          end: {
            line: 523,
            column: 41
          }
        },
        "192": {
          start: {
            line: 525,
            column: 8
          },
          end: {
            line: 527,
            column: 74
          }
        },
        "193": {
          start: {
            line: 526,
            column: 54
          },
          end: {
            line: 526,
            column: 72
          }
        },
        "194": {
          start: {
            line: 527,
            column: 55
          },
          end: {
            line: 527,
            column: 73
          }
        },
        "195": {
          start: {
            line: 531,
            column: 4
          },
          end: {
            line: 535,
            column: 5
          }
        },
        "196": {
          start: {
            line: 532,
            column: 6
          },
          end: {
            line: 534,
            column: 7
          }
        },
        "197": {
          start: {
            line: 533,
            column: 8
          },
          end: {
            line: 533,
            column: 19
          }
        },
        "198": {
          start: {
            line: 537,
            column: 4
          },
          end: {
            line: 537,
            column: 81
          }
        },
        "199": {
          start: {
            line: 539,
            column: 4
          },
          end: {
            line: 547,
            column: 5
          }
        },
        "200": {
          start: {
            line: 540,
            column: 6
          },
          end: {
            line: 544,
            column: 7
          }
        },
        "201": {
          start: {
            line: 546,
            column: 6
          },
          end: {
            line: 546,
            column: 22
          }
        },
        "202": {
          start: {
            line: 551,
            column: 22
          },
          end: {
            line: 551,
            column: 77
          }
        },
        "203": {
          start: {
            line: 553,
            column: 4
          },
          end: {
            line: 560,
            column: 5
          }
        },
        "204": {
          start: {
            line: 554,
            column: 6
          },
          end: {
            line: 557,
            column: 7
          }
        },
        "205": {
          start: {
            line: 559,
            column: 6
          },
          end: {
            line: 559,
            column: 44
          }
        },
        "206": {
          start: {
            line: 564,
            column: 20
          },
          end: {
            line: 564,
            column: 45
          }
        },
        "207": {
          start: {
            line: 565,
            column: 4
          },
          end: {
            line: 565,
            column: 61
          }
        },
        "208": {
          start: {
            line: 567,
            column: 4
          },
          end: {
            line: 573,
            column: 5
          }
        },
        "209": {
          start: {
            line: 568,
            column: 6
          },
          end: {
            line: 571,
            column: 7
          }
        },
        "210": {
          start: {
            line: 572,
            column: 6
          },
          end: {
            line: 572,
            column: 51
          }
        },
        "211": {
          start: {
            line: 575,
            column: 4
          },
          end: {
            line: 579,
            column: 5
          }
        },
        "212": {
          start: {
            line: 576,
            column: 6
          },
          end: {
            line: 578,
            column: 14
          }
        },
        "213": {
          start: {
            line: 581,
            column: 4
          },
          end: {
            line: 584,
            column: 5
          }
        },
        "214": {
          start: {
            line: 582,
            column: 6
          },
          end: {
            line: 582,
            column: 44
          }
        },
        "215": {
          start: {
            line: 583,
            column: 6
          },
          end: {
            line: 583,
            column: 12
          }
        },
        "216": {
          start: {
            line: 586,
            column: 4
          },
          end: {
            line: 586,
            column: 34
          }
        },
        "217": {
          start: {
            line: 588,
            column: 4
          },
          end: {
            line: 588,
            column: 42
          }
        },
        "218": {
          start: {
            line: 590,
            column: 4
          },
          end: {
            line: 593,
            column: 5
          }
        },
        "219": {
          start: {
            line: 591,
            column: 6
          },
          end: {
            line: 591,
            column: 20
          }
        },
        "220": {
          start: {
            line: 592,
            column: 6
          },
          end: {
            line: 592,
            column: 12
          }
        },
        "221": {
          start: {
            line: 595,
            column: 4
          },
          end: {
            line: 599,
            column: 33
          }
        },
        "222": {
          start: {
            line: 596,
            column: 6
          },
          end: {
            line: 598,
            column: 7
          }
        },
        "223": {
          start: {
            line: 597,
            column: 8
          },
          end: {
            line: 597,
            column: 22
          }
        },
        "224": {
          start: {
            line: 603,
            column: 20
          },
          end: {
            line: 603,
            column: 45
          }
        },
        "225": {
          start: {
            line: 604,
            column: 4
          },
          end: {
            line: 604,
            column: 61
          }
        },
        "226": {
          start: {
            line: 606,
            column: 4
          },
          end: {
            line: 612,
            column: 5
          }
        },
        "227": {
          start: {
            line: 607,
            column: 6
          },
          end: {
            line: 610,
            column: 7
          }
        },
        "228": {
          start: {
            line: 611,
            column: 6
          },
          end: {
            line: 611,
            column: 51
          }
        },
        "229": {
          start: {
            line: 614,
            column: 4
          },
          end: {
            line: 618,
            column: 5
          }
        },
        "230": {
          start: {
            line: 615,
            column: 6
          },
          end: {
            line: 617,
            column: 15
          }
        },
        "231": {
          start: {
            line: 620,
            column: 4
          },
          end: {
            line: 622,
            column: 5
          }
        },
        "232": {
          start: {
            line: 621,
            column: 6
          },
          end: {
            line: 621,
            column: 12
          }
        },
        "233": {
          start: {
            line: 624,
            column: 4
          },
          end: {
            line: 624,
            column: 34
          }
        },
        "234": {
          start: {
            line: 626,
            column: 4
          },
          end: {
            line: 626,
            column: 41
          }
        },
        "235": {
          start: {
            line: 628,
            column: 4
          },
          end: {
            line: 631,
            column: 5
          }
        },
        "236": {
          start: {
            line: 629,
            column: 6
          },
          end: {
            line: 629,
            column: 20
          }
        },
        "237": {
          start: {
            line: 630,
            column: 6
          },
          end: {
            line: 630,
            column: 12
          }
        },
        "238": {
          start: {
            line: 633,
            column: 4
          },
          end: {
            line: 637,
            column: 33
          }
        },
        "239": {
          start: {
            line: 634,
            column: 6
          },
          end: {
            line: 636,
            column: 7
          }
        },
        "240": {
          start: {
            line: 635,
            column: 8
          },
          end: {
            line: 635,
            column: 22
          }
        },
        "241": {
          start: {
            line: 641,
            column: 4
          },
          end: {
            line: 645,
            column: 5
          }
        },
        "242": {
          start: {
            line: 642,
            column: 6
          },
          end: {
            line: 644,
            column: 7
          }
        },
        "243": {
          start: {
            line: 643,
            column: 8
          },
          end: {
            line: 643,
            column: 19
          }
        },
        "244": {
          start: {
            line: 647,
            column: 4
          },
          end: {
            line: 647,
            column: 16
          }
        },
        "245": {
          start: {
            line: 651,
            column: 27
          },
          end: {
            line: 651,
            column: 49
          }
        },
        "246": {
          start: {
            line: 653,
            column: 4
          },
          end: {
            line: 658,
            column: 8
          }
        },
        "247": {
          start: {
            line: 655,
            column: 8
          },
          end: {
            line: 657,
            column: 9
          }
        },
        "248": {
          start: {
            line: 656,
            column: 10
          },
          end: {
            line: 656,
            column: 41
          }
        },
        "249": {
          start: {
            line: 660,
            column: 4
          },
          end: {
            line: 664,
            column: 5
          }
        },
        "250": {
          start: {
            line: 666,
            column: 4
          },
          end: {
            line: 671,
            column: 5
          }
        },
        "251": {
          start: {
            line: 667,
            column: 6
          },
          end: {
            line: 670,
            column: 7
          }
        },
        "252": {
          start: {
            line: 673,
            column: 4
          },
          end: {
            line: 675,
            column: 5
          }
        },
        "253": {
          start: {
            line: 674,
            column: 6
          },
          end: {
            line: 674,
            column: 44
          }
        },
        "254": {
          start: {
            line: 677,
            column: 4
          },
          end: {
            line: 679,
            column: 5
          }
        },
        "255": {
          start: {
            line: 678,
            column: 6
          },
          end: {
            line: 678,
            column: 48
          }
        },
        "256": {
          start: {
            line: 681,
            column: 4
          },
          end: {
            line: 685,
            column: 5
          }
        },
        "257": {
          start: {
            line: 687,
            column: 4
          },
          end: {
            line: 689,
            column: 5
          }
        },
        "258": {
          start: {
            line: 688,
            column: 6
          },
          end: {
            line: 688,
            column: 90
          }
        },
        "259": {
          start: {
            line: 691,
            column: 4
          },
          end: {
            line: 691,
            column: 17
          }
        },
        "260": {
          start: {
            line: 695,
            column: 19
          },
          end: {
            line: 695,
            column: 21
          }
        },
        "261": {
          start: {
            line: 697,
            column: 4
          },
          end: {
            line: 703,
            column: 5
          }
        },
        "262": {
          start: {
            line: 698,
            column: 6
          },
          end: {
            line: 702,
            column: 7
          }
        },
        "263": {
          start: {
            line: 699,
            column: 8
          },
          end: {
            line: 701,
            column: 9
          }
        },
        "264": {
          start: {
            line: 700,
            column: 10
          },
          end: {
            line: 700,
            column: 40
          }
        },
        "265": {
          start: {
            line: 705,
            column: 4
          },
          end: {
            line: 705,
            column: 17
          }
        },
        "266": {
          start: {
            line: 709,
            column: 17
          },
          end: {
            line: 709,
            column: 40
          }
        },
        "267": {
          start: {
            line: 710,
            column: 21
          },
          end: {
            line: 710,
            column: 65
          }
        },
        "268": {
          start: {
            line: 711,
            column: 4
          },
          end: {
            line: 713,
            column: 5
          }
        },
        "269": {
          start: {
            line: 712,
            column: 6
          },
          end: {
            line: 712,
            column: 41
          }
        },
        "270": {
          start: {
            line: 717,
            column: 4
          },
          end: {
            line: 717,
            column: 41
          }
        },
        "271": {
          start: {
            line: 718,
            column: 4
          },
          end: {
            line: 718,
            column: 25
          }
        },
        "272": {
          start: {
            line: 719,
            column: 4
          },
          end: {
            line: 719,
            column: 70
          }
        },
        "273": {
          start: {
            line: 723,
            column: 16
          },
          end: {
            line: 723,
            column: 36
          }
        },
        "274": {
          start: {
            line: 724,
            column: 32
          },
          end: {
            line: 724,
            column: 53
          }
        },
        "275": {
          start: {
            line: 726,
            column: 4
          },
          end: {
            line: 728,
            column: 5
          }
        },
        "276": {
          start: {
            line: 727,
            column: 6
          },
          end: {
            line: 727,
            column: 12
          }
        },
        "277": {
          start: {
            line: 730,
            column: 4
          },
          end: {
            line: 730,
            column: 39
          }
        },
        "278": {
          start: {
            line: 731,
            column: 4
          },
          end: {
            line: 731,
            column: 33
          }
        },
        "279": {
          start: {
            line: 732,
            column: 4
          },
          end: {
            line: 732,
            column: 15
          }
        },
        "280": {
          start: {
            line: 733,
            column: 4
          },
          end: {
            line: 733,
            column: 15
          }
        },
        "281": {
          start: {
            line: 734,
            column: 4
          },
          end: {
            line: 734,
            column: 47
          }
        },
        "282": {
          start: {
            line: 740,
            column: 4
          },
          end: {
            line: 761,
            column: 6
          }
        },
        "283": {
          start: {
            line: 741,
            column: 23
          },
          end: {
            line: 741,
            column: 30
          }
        },
        "284": {
          start: {
            line: 742,
            column: 17
          },
          end: {
            line: 742,
            column: 40
          }
        },
        "285": {
          start: {
            line: 743,
            column: 22
          },
          end: {
            line: 743,
            column: 58
          }
        },
        "286": {
          start: {
            line: 745,
            column: 6
          },
          end: {
            line: 747,
            column: 7
          }
        },
        "287": {
          start: {
            line: 746,
            column: 8
          },
          end: {
            line: 746,
            column: 14
          }
        },
        "288": {
          start: {
            line: 749,
            column: 6
          },
          end: {
            line: 752,
            column: 7
          }
        },
        "289": {
          start: {
            line: 750,
            column: 8
          },
          end: {
            line: 750,
            column: 41
          }
        },
        "290": {
          start: {
            line: 751,
            column: 8
          },
          end: {
            line: 751,
            column: 37
          }
        },
        "291": {
          start: {
            line: 754,
            column: 6
          },
          end: {
            line: 760,
            column: 7
          }
        },
        "292": {
          start: {
            line: 755,
            column: 8
          },
          end: {
            line: 757,
            column: 9
          }
        },
        "293": {
          start: {
            line: 756,
            column: 10
          },
          end: {
            line: 756,
            column: 60
          }
        },
        "294": {
          start: {
            line: 759,
            column: 8
          },
          end: {
            line: 759,
            column: 22
          }
        },
        "295": {
          start: {
            line: 771,
            column: 0
          },
          end: {
            line: 771,
            column: 37
          }
        },
        "296": {
          start: {
            line: 772,
            column: 0
          },
          end: {
            line: 772,
            column: 32
          }
        },
        "297": {
          start: {
            line: 773,
            column: 0
          },
          end: {
            line: 776,
            column: 1
          }
        },
        "298": {
          start: {
            line: 774,
            column: 2
          },
          end: {
            line: 774,
            column: 33
          }
        },
        "299": {
          start: {
            line: 775,
            column: 2
          },
          end: {
            line: 775,
            column: 33
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 115,
              column: 2
            },
            end: {
              line: 115,
              column: 3
            }
          },
          loc: {
            start: {
              line: 115,
              column: 31
            },
            end: {
              line: 133,
              column: 3
            }
          },
          line: 115
        },
        "1": {
          name: "(anonymous_1)",
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
              column: 23
            },
            end: {
              line: 139,
              column: 3
            }
          },
          line: 137
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 141,
              column: 2
            },
            end: {
              line: 141,
              column: 3
            }
          },
          loc: {
            start: {
              line: 141,
              column: 23
            },
            end: {
              line: 143,
              column: 3
            }
          },
          line: 141
        },
        "3": {
          name: "(anonymous_3)",
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
              column: 20
            },
            end: {
              line: 147,
              column: 3
            }
          },
          line: 145
        },
        "4": {
          name: "(anonymous_4)",
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
              column: 24
            },
            end: {
              line: 151,
              column: 3
            }
          },
          line: 149
        },
        "5": {
          name: "(anonymous_5)",
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
              column: 21
            },
            end: {
              line: 155,
              column: 3
            }
          },
          line: 153
        },
        "6": {
          name: "(anonymous_6)",
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
              column: 25
            },
            end: {
              line: 159,
              column: 3
            }
          },
          line: 157
        },
        "7": {
          name: "(anonymous_7)",
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
              column: 27
            },
            end: {
              line: 163,
              column: 3
            }
          },
          line: 161
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 167,
              column: 2
            },
            end: {
              line: 167,
              column: 3
            }
          },
          loc: {
            start: {
              line: 167,
              column: 11
            },
            end: {
              line: 169,
              column: 3
            }
          },
          line: 167
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 171,
              column: 2
            },
            end: {
              line: 171,
              column: 3
            }
          },
          loc: {
            start: {
              line: 171,
              column: 12
            },
            end: {
              line: 173,
              column: 3
            }
          },
          line: 171
        },
        "10": {
          name: "(anonymous_10)",
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
              column: 18
            },
            end: {
              line: 177,
              column: 3
            }
          },
          line: 175
        },
        "11": {
          name: "(anonymous_11)",
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
              column: 16
            },
            end: {
              line: 211,
              column: 3
            }
          },
          line: 179
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 213,
              column: 2
            },
            end: {
              line: 213,
              column: 3
            }
          },
          loc: {
            start: {
              line: 213,
              column: 12
            },
            end: {
              line: 237,
              column: 3
            }
          },
          line: 213
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 239,
              column: 2
            },
            end: {
              line: 239,
              column: 3
            }
          },
          loc: {
            start: {
              line: 239,
              column: 9
            },
            end: {
              line: 324,
              column: 3
            }
          },
          line: 239
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 299,
              column: 23
            },
            end: {
              line: 299,
              column: 24
            }
          },
          loc: {
            start: {
              line: 299,
              column: 29
            },
            end: {
              line: 312,
              column: 7
            }
          },
          line: 299
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 326,
              column: 2
            },
            end: {
              line: 326,
              column: 3
            }
          },
          loc: {
            start: {
              line: 326,
              column: 17
            },
            end: {
              line: 375,
              column: 3
            }
          },
          line: 326
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 329,
              column: 21
            },
            end: {
              line: 329,
              column: 22
            }
          },
          loc: {
            start: {
              line: 329,
              column: 27
            },
            end: {
              line: 344,
              column: 5
            }
          },
          line: 329
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 377,
              column: 2
            },
            end: {
              line: 377,
              column: 3
            }
          },
          loc: {
            start: {
              line: 377,
              column: 11
            },
            end: {
              line: 381,
              column: 3
            }
          },
          line: 377
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 385,
              column: 2
            },
            end: {
              line: 385,
              column: 3
            }
          },
          loc: {
            start: {
              line: 385,
              column: 18
            },
            end: {
              line: 387,
              column: 3
            }
          },
          line: 385
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 389,
              column: 2
            },
            end: {
              line: 389,
              column: 3
            }
          },
          loc: {
            start: {
              line: 389,
              column: 33
            },
            end: {
              line: 391,
              column: 3
            }
          },
          line: 389
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 393,
              column: 2
            },
            end: {
              line: 393,
              column: 3
            }
          },
          loc: {
            start: {
              line: 393,
              column: 18
            },
            end: {
              line: 396,
              column: 3
            }
          },
          line: 393
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 398,
              column: 2
            },
            end: {
              line: 398,
              column: 3
            }
          },
          loc: {
            start: {
              line: 398,
              column: 15
            },
            end: {
              line: 402,
              column: 3
            }
          },
          line: 398
        },
        "22": {
          name: "(anonymous_22)",
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
              column: 39
            },
            end: {
              line: 427,
              column: 3
            }
          },
          line: 404
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 429,
              column: 2
            },
            end: {
              line: 429,
              column: 3
            }
          },
          loc: {
            start: {
              line: 429,
              column: 13
            },
            end: {
              line: 439,
              column: 3
            }
          },
          line: 429
        },
        "24": {
          name: "(anonymous_24)",
          decl: {
            start: {
              line: 443,
              column: 2
            },
            end: {
              line: 443,
              column: 3
            }
          },
          loc: {
            start: {
              line: 443,
              column: 31
            },
            end: {
              line: 470,
              column: 3
            }
          },
          line: 443
        },
        "25": {
          name: "(anonymous_25)",
          decl: {
            start: {
              line: 458,
              column: 16
            },
            end: {
              line: 458,
              column: 17
            }
          },
          loc: {
            start: {
              line: 458,
              column: 24
            },
            end: {
              line: 462,
              column: 7
            }
          },
          line: 458
        },
        "26": {
          name: "(anonymous_26)",
          decl: {
            start: {
              line: 463,
              column: 16
            },
            end: {
              line: 463,
              column: 17
            }
          },
          loc: {
            start: {
              line: 463,
              column: 24
            },
            end: {
              line: 463,
              column: 63
            }
          },
          line: 463
        },
        "27": {
          name: "(anonymous_27)",
          decl: {
            start: {
              line: 472,
              column: 2
            },
            end: {
              line: 472,
              column: 3
            }
          },
          loc: {
            start: {
              line: 472,
              column: 15
            },
            end: {
              line: 489,
              column: 3
            }
          },
          line: 472
        },
        "28": {
          name: "(anonymous_28)",
          decl: {
            start: {
              line: 476,
              column: 18
            },
            end: {
              line: 476,
              column: 19
            }
          },
          loc: {
            start: {
              line: 476,
              column: 26
            },
            end: {
              line: 483,
              column: 7
            }
          },
          line: 476
        },
        "29": {
          name: "(anonymous_29)",
          decl: {
            start: {
              line: 491,
              column: 2
            },
            end: {
              line: 491,
              column: 3
            }
          },
          loc: {
            start: {
              line: 491,
              column: 18
            },
            end: {
              line: 501,
              column: 3
            }
          },
          line: 491
        },
        "30": {
          name: "(anonymous_30)",
          decl: {
            start: {
              line: 503,
              column: 2
            },
            end: {
              line: 503,
              column: 3
            }
          },
          loc: {
            start: {
              line: 503,
              column: 28
            },
            end: {
              line: 505,
              column: 3
            }
          },
          line: 503
        },
        "31": {
          name: "(anonymous_31)",
          decl: {
            start: {
              line: 507,
              column: 2
            },
            end: {
              line: 507,
              column: 3
            }
          },
          loc: {
            start: {
              line: 507,
              column: 18
            },
            end: {
              line: 548,
              column: 3
            }
          },
          line: 507
        },
        "32": {
          name: "(anonymous_32)",
          decl: {
            start: {
              line: 510,
              column: 21
            },
            end: {
              line: 510,
              column: 22
            }
          },
          loc: {
            start: {
              line: 510,
              column: 32
            },
            end: {
              line: 529,
              column: 5
            }
          },
          line: 510
        },
        "33": {
          name: "(anonymous_33)",
          decl: {
            start: {
              line: 515,
              column: 10
            },
            end: {
              line: 515,
              column: 11
            }
          },
          loc: {
            start: {
              line: 515,
              column: 19
            },
            end: {
              line: 515,
              column: 37
            }
          },
          line: 515
        },
        "34": {
          name: "(anonymous_34)",
          decl: {
            start: {
              line: 526,
              column: 45
            },
            end: {
              line: 526,
              column: 46
            }
          },
          loc: {
            start: {
              line: 526,
              column: 54
            },
            end: {
              line: 526,
              column: 72
            }
          },
          line: 526
        },
        "35": {
          name: "(anonymous_35)",
          decl: {
            start: {
              line: 527,
              column: 46
            },
            end: {
              line: 527,
              column: 47
            }
          },
          loc: {
            start: {
              line: 527,
              column: 55
            },
            end: {
              line: 527,
              column: 73
            }
          },
          line: 527
        },
        "36": {
          name: "(anonymous_36)",
          decl: {
            start: {
              line: 531,
              column: 29
            },
            end: {
              line: 531,
              column: 30
            }
          },
          loc: {
            start: {
              line: 531,
              column: 35
            },
            end: {
              line: 535,
              column: 5
            }
          },
          line: 531
        },
        "37": {
          name: "(anonymous_37)",
          decl: {
            start: {
              line: 550,
              column: 2
            },
            end: {
              line: 550,
              column: 3
            }
          },
          loc: {
            start: {
              line: 550,
              column: 14
            },
            end: {
              line: 561,
              column: 3
            }
          },
          line: 550
        },
        "38": {
          name: "(anonymous_38)",
          decl: {
            start: {
              line: 563,
              column: 2
            },
            end: {
              line: 563,
              column: 3
            }
          },
          loc: {
            start: {
              line: 563,
              column: 25
            },
            end: {
              line: 600,
              column: 3
            }
          },
          line: 563
        },
        "39": {
          name: "(anonymous_39)",
          decl: {
            start: {
              line: 595,
              column: 34
            },
            end: {
              line: 595,
              column: 35
            }
          },
          loc: {
            start: {
              line: 595,
              column: 40
            },
            end: {
              line: 599,
              column: 5
            }
          },
          line: 595
        },
        "40": {
          name: "(anonymous_40)",
          decl: {
            start: {
              line: 602,
              column: 2
            },
            end: {
              line: 602,
              column: 3
            }
          },
          loc: {
            start: {
              line: 602,
              column: 25
            },
            end: {
              line: 638,
              column: 3
            }
          },
          line: 602
        },
        "41": {
          name: "(anonymous_41)",
          decl: {
            start: {
              line: 633,
              column: 34
            },
            end: {
              line: 633,
              column: 35
            }
          },
          loc: {
            start: {
              line: 633,
              column: 40
            },
            end: {
              line: 637,
              column: 5
            }
          },
          line: 633
        },
        "42": {
          name: "(anonymous_42)",
          decl: {
            start: {
              line: 640,
              column: 2
            },
            end: {
              line: 640,
              column: 3
            }
          },
          loc: {
            start: {
              line: 640,
              column: 25
            },
            end: {
              line: 648,
              column: 3
            }
          },
          line: 640
        },
        "43": {
          name: "(anonymous_43)",
          decl: {
            start: {
              line: 650,
              column: 2
            },
            end: {
              line: 650,
              column: 3
            }
          },
          loc: {
            start: {
              line: 650,
              column: 21
            },
            end: {
              line: 692,
              column: 3
            }
          },
          line: 650
        },
        "44": {
          name: "(anonymous_44)",
          decl: {
            start: {
              line: 654,
              column: 15
            },
            end: {
              line: 654,
              column: 16
            }
          },
          loc: {
            start: {
              line: 654,
              column: 27
            },
            end: {
              line: 658,
              column: 7
            }
          },
          line: 654
        },
        "45": {
          name: "(anonymous_45)",
          decl: {
            start: {
              line: 694,
              column: 2
            },
            end: {
              line: 694,
              column: 3
            }
          },
          loc: {
            start: {
              line: 694,
              column: 23
            },
            end: {
              line: 706,
              column: 3
            }
          },
          line: 694
        },
        "46": {
          name: "(anonymous_46)",
          decl: {
            start: {
              line: 708,
              column: 2
            },
            end: {
              line: 708,
              column: 3
            }
          },
          loc: {
            start: {
              line: 708,
              column: 19
            },
            end: {
              line: 714,
              column: 3
            }
          },
          line: 708
        },
        "47": {
          name: "(anonymous_47)",
          decl: {
            start: {
              line: 716,
              column: 2
            },
            end: {
              line: 716,
              column: 3
            }
          },
          loc: {
            start: {
              line: 716,
              column: 43
            },
            end: {
              line: 720,
              column: 3
            }
          },
          line: 716
        },
        "48": {
          name: "(anonymous_48)",
          decl: {
            start: {
              line: 722,
              column: 2
            },
            end: {
              line: 722,
              column: 3
            }
          },
          loc: {
            start: {
              line: 722,
              column: 19
            },
            end: {
              line: 735,
              column: 3
            }
          },
          line: 722
        },
        "49": {
          name: "(anonymous_49)",
          decl: {
            start: {
              line: 739,
              column: 2
            },
            end: {
              line: 739,
              column: 3
            }
          },
          loc: {
            start: {
              line: 739,
              column: 34
            },
            end: {
              line: 762,
              column: 3
            }
          },
          line: 739
        },
        "50": {
          name: "(anonymous_50)",
          decl: {
            start: {
              line: 740,
              column: 21
            },
            end: {
              line: 740,
              column: 22
            }
          },
          loc: {
            start: {
              line: 740,
              column: 33
            },
            end: {
              line: 761,
              column: 5
            }
          },
          line: 740
        },
        "51": {
          name: "(anonymous_51)",
          decl: {
            start: {
              line: 773,
              column: 24
            },
            end: {
              line: 773,
              column: 25
            }
          },
          loc: {
            start: {
              line: 773,
              column: 30
            },
            end: {
              line: 776,
              column: 1
            }
          },
          line: 773
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 116,
              column: 4
            },
            end: {
              line: 118,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 116,
              column: 4
            },
            end: {
              line: 118,
              column: 5
            }
          }, {
            start: {
              line: 116,
              column: 4
            },
            end: {
              line: 118,
              column: 5
            }
          }],
          line: 116
        },
        "1": {
          loc: {
            start: {
              line: 180,
              column: 4
            },
            end: {
              line: 182,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 180,
              column: 4
            },
            end: {
              line: 182,
              column: 5
            }
          }, {
            start: {
              line: 180,
              column: 4
            },
            end: {
              line: 182,
              column: 5
            }
          }],
          line: 180
        },
        "2": {
          loc: {
            start: {
              line: 184,
              column: 4
            },
            end: {
              line: 210,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 184,
              column: 4
            },
            end: {
              line: 210,
              column: 5
            }
          }, {
            start: {
              line: 184,
              column: 4
            },
            end: {
              line: 210,
              column: 5
            }
          }],
          line: 184
        },
        "3": {
          loc: {
            start: {
              line: 188,
              column: 6
            },
            end: {
              line: 194,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 188,
              column: 6
            },
            end: {
              line: 194,
              column: 7
            }
          }, {
            start: {
              line: 188,
              column: 6
            },
            end: {
              line: 194,
              column: 7
            }
          }],
          line: 188
        },
        "4": {
          loc: {
            start: {
              line: 198,
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
              line: 198,
              column: 6
            },
            end: {
              line: 202,
              column: 7
            }
          }, {
            start: {
              line: 198,
              column: 6
            },
            end: {
              line: 202,
              column: 7
            }
          }],
          line: 198
        },
        "5": {
          loc: {
            start: {
              line: 204,
              column: 6
            },
            end: {
              line: 207,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 204,
              column: 6
            },
            end: {
              line: 207,
              column: 7
            }
          }, {
            start: {
              line: 204,
              column: 6
            },
            end: {
              line: 207,
              column: 7
            }
          }],
          line: 204
        },
        "6": {
          loc: {
            start: {
              line: 221,
              column: 4
            },
            end: {
              line: 223,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 221,
              column: 4
            },
            end: {
              line: 223,
              column: 5
            }
          }, {
            start: {
              line: 221,
              column: 4
            },
            end: {
              line: 223,
              column: 5
            }
          }],
          line: 221
        },
        "7": {
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
        "8": {
          loc: {
            start: {
              line: 240,
              column: 4
            },
            end: {
              line: 242,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 240,
              column: 4
            },
            end: {
              line: 242,
              column: 5
            }
          }, {
            start: {
              line: 240,
              column: 4
            },
            end: {
              line: 242,
              column: 5
            }
          }],
          line: 240
        },
        "9": {
          loc: {
            start: {
              line: 245,
              column: 4
            },
            end: {
              line: 323,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 245,
              column: 4
            },
            end: {
              line: 323,
              column: 5
            }
          }, {
            start: {
              line: 245,
              column: 4
            },
            end: {
              line: 323,
              column: 5
            }
          }],
          line: 245
        },
        "10": {
          loc: {
            start: {
              line: 245,
              column: 8
            },
            end: {
              line: 245,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 245,
              column: 8
            },
            end: {
              line: 245,
              column: 28
            }
          }, {
            start: {
              line: 245,
              column: 32
            },
            end: {
              line: 245,
              column: 47
            }
          }],
          line: 245
        },
        "11": {
          loc: {
            start: {
              line: 250,
              column: 8
            },
            end: {
              line: 250,
              column: 85
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 250,
              column: 30
            },
            end: {
              line: 250,
              column: 40
            }
          }, {
            start: {
              line: 250,
              column: 43
            },
            end: {
              line: 250,
              column: 85
            }
          }],
          line: 250
        },
        "12": {
          loc: {
            start: {
              line: 254,
              column: 6
            },
            end: {
              line: 256,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 254,
              column: 6
            },
            end: {
              line: 256,
              column: 7
            }
          }, {
            start: {
              line: 254,
              column: 6
            },
            end: {
              line: 256,
              column: 7
            }
          }],
          line: 254
        },
        "13": {
          loc: {
            start: {
              line: 254,
              column: 10
            },
            end: {
              line: 254,
              column: 55
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 254,
              column: 10
            },
            end: {
              line: 254,
              column: 40
            }
          }, {
            start: {
              line: 254,
              column: 44
            },
            end: {
              line: 254,
              column: 55
            }
          }],
          line: 254
        },
        "14": {
          loc: {
            start: {
              line: 266,
              column: 6
            },
            end: {
              line: 268,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 266,
              column: 6
            },
            end: {
              line: 268,
              column: 7
            }
          }, {
            start: {
              line: 266,
              column: 6
            },
            end: {
              line: 268,
              column: 7
            }
          }],
          line: 266
        },
        "15": {
          loc: {
            start: {
              line: 270,
              column: 24
            },
            end: {
              line: 272,
              column: 29
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 271,
              column: 8
            },
            end: {
              line: 271,
              column: 59
            }
          }, {
            start: {
              line: 272,
              column: 8
            },
            end: {
              line: 272,
              column: 29
            }
          }],
          line: 270
        },
        "16": {
          loc: {
            start: {
              line: 280,
              column: 6
            },
            end: {
              line: 282,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 280,
              column: 6
            },
            end: {
              line: 282,
              column: 7
            }
          }, {
            start: {
              line: 280,
              column: 6
            },
            end: {
              line: 282,
              column: 7
            }
          }],
          line: 280
        },
        "17": {
          loc: {
            start: {
              line: 295,
              column: 6
            },
            end: {
              line: 297,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 295,
              column: 6
            },
            end: {
              line: 297,
              column: 7
            }
          }, {
            start: {
              line: 295,
              column: 6
            },
            end: {
              line: 297,
              column: 7
            }
          }],
          line: 295
        },
        "18": {
          loc: {
            start: {
              line: 300,
              column: 8
            },
            end: {
              line: 302,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 300,
              column: 8
            },
            end: {
              line: 302,
              column: 9
            }
          }, {
            start: {
              line: 300,
              column: 8
            },
            end: {
              line: 302,
              column: 9
            }
          }],
          line: 300
        },
        "19": {
          loc: {
            start: {
              line: 309,
              column: 8
            },
            end: {
              line: 311,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 309,
              column: 8
            },
            end: {
              line: 311,
              column: 9
            }
          }, {
            start: {
              line: 309,
              column: 8
            },
            end: {
              line: 311,
              column: 9
            }
          }],
          line: 309
        },
        "20": {
          loc: {
            start: {
              line: 314,
              column: 6
            },
            end: {
              line: 322,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 314,
              column: 6
            },
            end: {
              line: 322,
              column: 7
            }
          }, {
            start: {
              line: 314,
              column: 6
            },
            end: {
              line: 322,
              column: 7
            }
          }],
          line: 314
        },
        "21": {
          loc: {
            start: {
              line: 330,
              column: 6
            },
            end: {
              line: 332,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 330,
              column: 6
            },
            end: {
              line: 332,
              column: 7
            }
          }, {
            start: {
              line: 330,
              column: 6
            },
            end: {
              line: 332,
              column: 7
            }
          }],
          line: 330
        },
        "22": {
          loc: {
            start: {
              line: 330,
              column: 10
            },
            end: {
              line: 330,
              column: 65
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 330,
              column: 10
            },
            end: {
              line: 330,
              column: 47
            }
          }, {
            start: {
              line: 330,
              column: 51
            },
            end: {
              line: 330,
              column: 65
            }
          }],
          line: 330
        },
        "23": {
          loc: {
            start: {
              line: 337,
              column: 6
            },
            end: {
              line: 339,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 337,
              column: 6
            },
            end: {
              line: 339,
              column: 7
            }
          }, {
            start: {
              line: 337,
              column: 6
            },
            end: {
              line: 339,
              column: 7
            }
          }],
          line: 337
        },
        "24": {
          loc: {
            start: {
              line: 341,
              column: 6
            },
            end: {
              line: 343,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 341,
              column: 6
            },
            end: {
              line: 343,
              column: 7
            }
          }, {
            start: {
              line: 341,
              column: 6
            },
            end: {
              line: 343,
              column: 7
            }
          }],
          line: 341
        },
        "25": {
          loc: {
            start: {
              line: 348,
              column: 4
            },
            end: {
              line: 350,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 348,
              column: 4
            },
            end: {
              line: 350,
              column: 5
            }
          }, {
            start: {
              line: 348,
              column: 4
            },
            end: {
              line: 350,
              column: 5
            }
          }],
          line: 348
        },
        "26": {
          loc: {
            start: {
              line: 356,
              column: 4
            },
            end: {
              line: 358,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 356,
              column: 4
            },
            end: {
              line: 358,
              column: 5
            }
          }, {
            start: {
              line: 356,
              column: 4
            },
            end: {
              line: 358,
              column: 5
            }
          }],
          line: 356
        },
        "27": {
          loc: {
            start: {
              line: 364,
              column: 4
            },
            end: {
              line: 372,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 364,
              column: 4
            },
            end: {
              line: 372,
              column: 5
            }
          }, {
            start: {
              line: 364,
              column: 4
            },
            end: {
              line: 372,
              column: 5
            }
          }],
          line: 364
        },
        "28": {
          loc: {
            start: {
              line: 378,
              column: 4
            },
            end: {
              line: 380,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 378,
              column: 4
            },
            end: {
              line: 380,
              column: 5
            }
          }, {
            start: {
              line: 378,
              column: 4
            },
            end: {
              line: 380,
              column: 5
            }
          }],
          line: 378
        },
        "29": {
          loc: {
            start: {
              line: 394,
              column: 15
            },
            end: {
              line: 394,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 394,
              column: 15
            },
            end: {
              line: 394,
              column: 23
            }
          }, {
            start: {
              line: 394,
              column: 27
            },
            end: {
              line: 394,
              column: 53
            }
          }],
          line: 394
        },
        "30": {
          loc: {
            start: {
              line: 405,
              column: 4
            },
            end: {
              line: 416,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 405,
              column: 4
            },
            end: {
              line: 416,
              column: 5
            }
          }, {
            start: {
              line: 405,
              column: 4
            },
            end: {
              line: 416,
              column: 5
            }
          }],
          line: 405
        },
        "31": {
          loc: {
            start: {
              line: 405,
              column: 8
            },
            end: {
              line: 405,
              column: 75
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 405,
              column: 8
            },
            end: {
              line: 405,
              column: 35
            }
          }, {
            start: {
              line: 405,
              column: 40
            },
            end: {
              line: 405,
              column: 56
            }
          }, {
            start: {
              line: 405,
              column: 60
            },
            end: {
              line: 405,
              column: 74
            }
          }],
          line: 405
        },
        "32": {
          loc: {
            start: {
              line: 407,
              column: 6
            },
            end: {
              line: 413,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 407,
              column: 6
            },
            end: {
              line: 413,
              column: 7
            }
          }, {
            start: {
              line: 407,
              column: 6
            },
            end: {
              line: 413,
              column: 7
            }
          }],
          line: 407
        },
        "33": {
          loc: {
            start: {
              line: 408,
              column: 8
            },
            end: {
              line: 410,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 408,
              column: 8
            },
            end: {
              line: 410,
              column: 9
            }
          }, {
            start: {
              line: 408,
              column: 8
            },
            end: {
              line: 410,
              column: 9
            }
          }],
          line: 408
        },
        "34": {
          loc: {
            start: {
              line: 418,
              column: 4
            },
            end: {
              line: 426,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 418,
              column: 4
            },
            end: {
              line: 426,
              column: 5
            }
          }, {
            start: {
              line: 418,
              column: 4
            },
            end: {
              line: 426,
              column: 5
            }
          }],
          line: 418
        },
        "35": {
          loc: {
            start: {
              line: 419,
              column: 6
            },
            end: {
              line: 421,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 419,
              column: 6
            },
            end: {
              line: 421,
              column: 7
            }
          }, {
            start: {
              line: 419,
              column: 6
            },
            end: {
              line: 421,
              column: 7
            }
          }],
          line: 419
        },
        "36": {
          loc: {
            start: {
              line: 432,
              column: 4
            },
            end: {
              line: 436,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 432,
              column: 4
            },
            end: {
              line: 436,
              column: 5
            }
          }, {
            start: {
              line: 432,
              column: 4
            },
            end: {
              line: 436,
              column: 5
            }
          }],
          line: 432
        },
        "37": {
          loc: {
            start: {
              line: 433,
              column: 14
            },
            end: {
              line: 435,
              column: 25
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 434,
              column: 8
            },
            end: {
              line: 434,
              column: 44
            }
          }, {
            start: {
              line: 435,
              column: 8
            },
            end: {
              line: 435,
              column: 25
            }
          }],
          line: 433
        },
        "38": {
          loc: {
            start: {
              line: 459,
              column: 8
            },
            end: {
              line: 461,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 459,
              column: 8
            },
            end: {
              line: 461,
              column: 9
            }
          }, {
            start: {
              line: 459,
              column: 8
            },
            end: {
              line: 461,
              column: 9
            }
          }],
          line: 459
        },
        "39": {
          loc: {
            start: {
              line: 475,
              column: 4
            },
            end: {
              line: 486,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 475,
              column: 4
            },
            end: {
              line: 486,
              column: 5
            }
          }, {
            start: {
              line: 475,
              column: 4
            },
            end: {
              line: 486,
              column: 5
            }
          }],
          line: 475
        },
        "40": {
          loc: {
            start: {
              line: 479,
              column: 14
            },
            end: {
              line: 479,
              column: 66
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 479,
              column: 14
            },
            end: {
              line: 479,
              column: 60
            }
          }, {
            start: {
              line: 479,
              column: 64
            },
            end: {
              line: 479,
              column: 66
            }
          }],
          line: 479
        },
        "41": {
          loc: {
            start: {
              line: 492,
              column: 4
            },
            end: {
              line: 494,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 492,
              column: 4
            },
            end: {
              line: 494,
              column: 5
            }
          }, {
            start: {
              line: 492,
              column: 4
            },
            end: {
              line: 494,
              column: 5
            }
          }],
          line: 492
        },
        "42": {
          loc: {
            start: {
              line: 496,
              column: 4
            },
            end: {
              line: 498,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 496,
              column: 4
            },
            end: {
              line: 498,
              column: 5
            }
          }, {
            start: {
              line: 496,
              column: 4
            },
            end: {
              line: 498,
              column: 5
            }
          }],
          line: 496
        },
        "43": {
          loc: {
            start: {
              line: 511,
              column: 6
            },
            end: {
              line: 528,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 511,
              column: 6
            },
            end: {
              line: 528,
              column: 7
            }
          }, {
            start: {
              line: 511,
              column: 6
            },
            end: {
              line: 528,
              column: 7
            }
          }],
          line: 511
        },
        "44": {
          loc: {
            start: {
              line: 517,
              column: 13
            },
            end: {
              line: 528,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 517,
              column: 13
            },
            end: {
              line: 528,
              column: 7
            }
          }, {
            start: {
              line: 517,
              column: 13
            },
            end: {
              line: 528,
              column: 7
            }
          }],
          line: 517
        },
        "45": {
          loc: {
            start: {
              line: 518,
              column: 24
            },
            end: {
              line: 520,
              column: 40
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 519,
              column: 10
            },
            end: {
              line: 519,
              column: 43
            }
          }, {
            start: {
              line: 520,
              column: 10
            },
            end: {
              line: 520,
              column: 40
            }
          }],
          line: 518
        },
        "46": {
          loc: {
            start: {
              line: 521,
              column: 25
            },
            end: {
              line: 523,
              column: 41
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 522,
              column: 10
            },
            end: {
              line: 522,
              column: 43
            }
          }, {
            start: {
              line: 523,
              column: 10
            },
            end: {
              line: 523,
              column: 41
            }
          }],
          line: 521
        },
        "47": {
          loc: {
            start: {
              line: 532,
              column: 6
            },
            end: {
              line: 534,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 532,
              column: 6
            },
            end: {
              line: 534,
              column: 7
            }
          }, {
            start: {
              line: 532,
              column: 6
            },
            end: {
              line: 534,
              column: 7
            }
          }],
          line: 532
        },
        "48": {
          loc: {
            start: {
              line: 539,
              column: 4
            },
            end: {
              line: 547,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 539,
              column: 4
            },
            end: {
              line: 547,
              column: 5
            }
          }, {
            start: {
              line: 539,
              column: 4
            },
            end: {
              line: 547,
              column: 5
            }
          }],
          line: 539
        },
        "49": {
          loc: {
            start: {
              line: 553,
              column: 4
            },
            end: {
              line: 560,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 553,
              column: 4
            },
            end: {
              line: 560,
              column: 5
            }
          }, {
            start: {
              line: 553,
              column: 4
            },
            end: {
              line: 560,
              column: 5
            }
          }],
          line: 553
        },
        "50": {
          loc: {
            start: {
              line: 553,
              column: 8
            },
            end: {
              line: 553,
              column: 68
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 553,
              column: 8
            },
            end: {
              line: 553,
              column: 42
            }
          }, {
            start: {
              line: 553,
              column: 46
            },
            end: {
              line: 553,
              column: 68
            }
          }],
          line: 553
        },
        "51": {
          loc: {
            start: {
              line: 556,
              column: 8
            },
            end: {
              line: 556,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 556,
              column: 8
            },
            end: {
              line: 556,
              column: 42
            }
          }, {
            start: {
              line: 556,
              column: 46
            },
            end: {
              line: 556,
              column: 48
            }
          }],
          line: 556
        },
        "52": {
          loc: {
            start: {
              line: 565,
              column: 14
            },
            end: {
              line: 565,
              column: 61
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 565,
              column: 14
            },
            end: {
              line: 565,
              column: 21
            }
          }, {
            start: {
              line: 565,
              column: 25
            },
            end: {
              line: 565,
              column: 61
            }
          }],
          line: 565
        },
        "53": {
          loc: {
            start: {
              line: 567,
              column: 4
            },
            end: {
              line: 573,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 567,
              column: 4
            },
            end: {
              line: 573,
              column: 5
            }
          }, {
            start: {
              line: 567,
              column: 4
            },
            end: {
              line: 573,
              column: 5
            }
          }],
          line: 567
        },
        "54": {
          loc: {
            start: {
              line: 575,
              column: 4
            },
            end: {
              line: 579,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 575,
              column: 4
            },
            end: {
              line: 579,
              column: 5
            }
          }, {
            start: {
              line: 575,
              column: 4
            },
            end: {
              line: 579,
              column: 5
            }
          }],
          line: 575
        },
        "55": {
          loc: {
            start: {
              line: 577,
              column: 8
            },
            end: {
              line: 577,
              column: 64
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 577,
              column: 35
            },
            end: {
              line: 577,
              column: 48
            }
          }, {
            start: {
              line: 577,
              column: 51
            },
            end: {
              line: 577,
              column: 64
            }
          }],
          line: 577
        },
        "56": {
          loc: {
            start: {
              line: 581,
              column: 4
            },
            end: {
              line: 584,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 581,
              column: 4
            },
            end: {
              line: 584,
              column: 5
            }
          }, {
            start: {
              line: 581,
              column: 4
            },
            end: {
              line: 584,
              column: 5
            }
          }],
          line: 581
        },
        "57": {
          loc: {
            start: {
              line: 581,
              column: 8
            },
            end: {
              line: 581,
              column: 104
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 581,
              column: 8
            },
            end: {
              line: 581,
              column: 60
            }
          }, {
            start: {
              line: 581,
              column: 64
            },
            end: {
              line: 581,
              column: 104
            }
          }],
          line: 581
        },
        "58": {
          loc: {
            start: {
              line: 590,
              column: 4
            },
            end: {
              line: 593,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 590,
              column: 4
            },
            end: {
              line: 593,
              column: 5
            }
          }, {
            start: {
              line: 590,
              column: 4
            },
            end: {
              line: 593,
              column: 5
            }
          }],
          line: 590
        },
        "59": {
          loc: {
            start: {
              line: 590,
              column: 8
            },
            end: {
              line: 590,
              column: 59
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 590,
              column: 8
            },
            end: {
              line: 590,
              column: 29
            }
          }, {
            start: {
              line: 590,
              column: 33
            },
            end: {
              line: 590,
              column: 59
            }
          }],
          line: 590
        },
        "60": {
          loc: {
            start: {
              line: 596,
              column: 6
            },
            end: {
              line: 598,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 596,
              column: 6
            },
            end: {
              line: 598,
              column: 7
            }
          }, {
            start: {
              line: 596,
              column: 6
            },
            end: {
              line: 598,
              column: 7
            }
          }],
          line: 596
        },
        "61": {
          loc: {
            start: {
              line: 604,
              column: 14
            },
            end: {
              line: 604,
              column: 61
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 604,
              column: 14
            },
            end: {
              line: 604,
              column: 21
            }
          }, {
            start: {
              line: 604,
              column: 25
            },
            end: {
              line: 604,
              column: 61
            }
          }],
          line: 604
        },
        "62": {
          loc: {
            start: {
              line: 606,
              column: 4
            },
            end: {
              line: 612,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 606,
              column: 4
            },
            end: {
              line: 612,
              column: 5
            }
          }, {
            start: {
              line: 606,
              column: 4
            },
            end: {
              line: 612,
              column: 5
            }
          }],
          line: 606
        },
        "63": {
          loc: {
            start: {
              line: 614,
              column: 4
            },
            end: {
              line: 618,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 614,
              column: 4
            },
            end: {
              line: 618,
              column: 5
            }
          }, {
            start: {
              line: 614,
              column: 4
            },
            end: {
              line: 618,
              column: 5
            }
          }],
          line: 614
        },
        "64": {
          loc: {
            start: {
              line: 616,
              column: 8
            },
            end: {
              line: 616,
              column: 65
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 616,
              column: 36
            },
            end: {
              line: 616,
              column: 49
            }
          }, {
            start: {
              line: 616,
              column: 52
            },
            end: {
              line: 616,
              column: 65
            }
          }],
          line: 616
        },
        "65": {
          loc: {
            start: {
              line: 620,
              column: 4
            },
            end: {
              line: 622,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 620,
              column: 4
            },
            end: {
              line: 622,
              column: 5
            }
          }, {
            start: {
              line: 620,
              column: 4
            },
            end: {
              line: 622,
              column: 5
            }
          }],
          line: 620
        },
        "66": {
          loc: {
            start: {
              line: 628,
              column: 4
            },
            end: {
              line: 631,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 628,
              column: 4
            },
            end: {
              line: 631,
              column: 5
            }
          }, {
            start: {
              line: 628,
              column: 4
            },
            end: {
              line: 631,
              column: 5
            }
          }],
          line: 628
        },
        "67": {
          loc: {
            start: {
              line: 628,
              column: 8
            },
            end: {
              line: 628,
              column: 59
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 628,
              column: 8
            },
            end: {
              line: 628,
              column: 29
            }
          }, {
            start: {
              line: 628,
              column: 33
            },
            end: {
              line: 628,
              column: 59
            }
          }],
          line: 628
        },
        "68": {
          loc: {
            start: {
              line: 634,
              column: 6
            },
            end: {
              line: 636,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 634,
              column: 6
            },
            end: {
              line: 636,
              column: 7
            }
          }, {
            start: {
              line: 634,
              column: 6
            },
            end: {
              line: 636,
              column: 7
            }
          }],
          line: 634
        },
        "69": {
          loc: {
            start: {
              line: 642,
              column: 6
            },
            end: {
              line: 644,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 642,
              column: 6
            },
            end: {
              line: 644,
              column: 7
            }
          }, {
            start: {
              line: 642,
              column: 6
            },
            end: {
              line: 644,
              column: 7
            }
          }],
          line: 642
        },
        "70": {
          loc: {
            start: {
              line: 655,
              column: 8
            },
            end: {
              line: 657,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 655,
              column: 8
            },
            end: {
              line: 657,
              column: 9
            }
          }, {
            start: {
              line: 655,
              column: 8
            },
            end: {
              line: 657,
              column: 9
            }
          }],
          line: 655
        },
        "71": {
          loc: {
            start: {
              line: 663,
              column: 10
            },
            end: {
              line: 663,
              column: 60
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 663,
              column: 49
            },
            end: {
              line: 663,
              column: 55
            }
          }, {
            start: {
              line: 663,
              column: 58
            },
            end: {
              line: 663,
              column: 60
            }
          }],
          line: 663
        },
        "72": {
          loc: {
            start: {
              line: 663,
              column: 10
            },
            end: {
              line: 663,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 663,
              column: 10
            },
            end: {
              line: 663,
              column: 36
            }
          }, {
            start: {
              line: 663,
              column: 40
            },
            end: {
              line: 663,
              column: 46
            }
          }],
          line: 663
        },
        "73": {
          loc: {
            start: {
              line: 666,
              column: 4
            },
            end: {
              line: 671,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 666,
              column: 4
            },
            end: {
              line: 671,
              column: 5
            }
          }, {
            start: {
              line: 666,
              column: 4
            },
            end: {
              line: 671,
              column: 5
            }
          }],
          line: 666
        },
        "74": {
          loc: {
            start: {
              line: 673,
              column: 4
            },
            end: {
              line: 675,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 673,
              column: 4
            },
            end: {
              line: 675,
              column: 5
            }
          }, {
            start: {
              line: 673,
              column: 4
            },
            end: {
              line: 675,
              column: 5
            }
          }],
          line: 673
        },
        "75": {
          loc: {
            start: {
              line: 677,
              column: 4
            },
            end: {
              line: 679,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 677,
              column: 4
            },
            end: {
              line: 679,
              column: 5
            }
          }, {
            start: {
              line: 677,
              column: 4
            },
            end: {
              line: 679,
              column: 5
            }
          }],
          line: 677
        },
        "76": {
          loc: {
            start: {
              line: 687,
              column: 4
            },
            end: {
              line: 689,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 687,
              column: 4
            },
            end: {
              line: 689,
              column: 5
            }
          }, {
            start: {
              line: 687,
              column: 4
            },
            end: {
              line: 689,
              column: 5
            }
          }],
          line: 687
        },
        "77": {
          loc: {
            start: {
              line: 697,
              column: 4
            },
            end: {
              line: 703,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 697,
              column: 4
            },
            end: {
              line: 703,
              column: 5
            }
          }, {
            start: {
              line: 697,
              column: 4
            },
            end: {
              line: 703,
              column: 5
            }
          }],
          line: 697
        },
        "78": {
          loc: {
            start: {
              line: 699,
              column: 8
            },
            end: {
              line: 701,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 699,
              column: 8
            },
            end: {
              line: 701,
              column: 9
            }
          }, {
            start: {
              line: 699,
              column: 8
            },
            end: {
              line: 701,
              column: 9
            }
          }],
          line: 699
        },
        "79": {
          loc: {
            start: {
              line: 711,
              column: 4
            },
            end: {
              line: 713,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 711,
              column: 4
            },
            end: {
              line: 713,
              column: 5
            }
          }, {
            start: {
              line: 711,
              column: 4
            },
            end: {
              line: 713,
              column: 5
            }
          }],
          line: 711
        },
        "80": {
          loc: {
            start: {
              line: 711,
              column: 8
            },
            end: {
              line: 711,
              column: 44
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 711,
              column: 8
            },
            end: {
              line: 711,
              column: 25
            }
          }, {
            start: {
              line: 711,
              column: 29
            },
            end: {
              line: 711,
              column: 44
            }
          }],
          line: 711
        },
        "81": {
          loc: {
            start: {
              line: 726,
              column: 4
            },
            end: {
              line: 728,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 726,
              column: 4
            },
            end: {
              line: 728,
              column: 5
            }
          }, {
            start: {
              line: 726,
              column: 4
            },
            end: {
              line: 728,
              column: 5
            }
          }],
          line: 726
        },
        "82": {
          loc: {
            start: {
              line: 743,
              column: 22
            },
            end: {
              line: 743,
              column: 58
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 743,
              column: 22
            },
            end: {
              line: 743,
              column: 48
            }
          }, {
            start: {
              line: 743,
              column: 52
            },
            end: {
              line: 743,
              column: 58
            }
          }],
          line: 743
        },
        "83": {
          loc: {
            start: {
              line: 745,
              column: 6
            },
            end: {
              line: 747,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 745,
              column: 6
            },
            end: {
              line: 747,
              column: 7
            }
          }, {
            start: {
              line: 745,
              column: 6
            },
            end: {
              line: 747,
              column: 7
            }
          }],
          line: 745
        },
        "84": {
          loc: {
            start: {
              line: 745,
              column: 10
            },
            end: {
              line: 745,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 745,
              column: 10
            },
            end: {
              line: 745,
              column: 15
            }
          }, {
            start: {
              line: 745,
              column: 19
            },
            end: {
              line: 745,
              column: 46
            }
          }],
          line: 745
        },
        "85": {
          loc: {
            start: {
              line: 749,
              column: 6
            },
            end: {
              line: 752,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 749,
              column: 6
            },
            end: {
              line: 752,
              column: 7
            }
          }, {
            start: {
              line: 749,
              column: 6
            },
            end: {
              line: 752,
              column: 7
            }
          }],
          line: 749
        },
        "86": {
          loc: {
            start: {
              line: 754,
              column: 6
            },
            end: {
              line: 760,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 754,
              column: 6
            },
            end: {
              line: 760,
              column: 7
            }
          }, {
            start: {
              line: 754,
              column: 6
            },
            end: {
              line: 760,
              column: 7
            }
          }],
          line: 754
        },
        "87": {
          loc: {
            start: {
              line: 755,
              column: 8
            },
            end: {
              line: 757,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 755,
              column: 8
            },
            end: {
              line: 757,
              column: 9
            }
          }, {
            start: {
              line: 755,
              column: 8
            },
            end: {
              line: 757,
              column: 9
            }
          }],
          line: 755
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
        "292": 0,
        "293": 0,
        "294": 0,
        "295": 0,
        "296": 0,
        "297": 0,
        "298": 0,
        "299": 0
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
      _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
      hash: "6487a2e1cf4cdbcff8fd16705d2961c33dad22de"
    };
    var coverage = global[gcv] || (global[gcv] = {});

    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }

    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_1daa9w7v20 = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }

  cov_1daa9w7v20();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_1daa9w7v20().s[0]++, 'tooltip');
  var VERSION = (cov_1daa9w7v20().s[1]++, '4.6.0');
  var DATA_KEY = (cov_1daa9w7v20().s[2]++, 'bs.tooltip');
  var EVENT_KEY = (cov_1daa9w7v20().s[3]++, "." + DATA_KEY);
  var JQUERY_NO_CONFLICT = (cov_1daa9w7v20().s[4]++, $__default['default'].fn[NAME]);
  var CLASS_PREFIX = (cov_1daa9w7v20().s[5]++, 'bs-tooltip');
  var BSCLS_PREFIX_REGEX = (cov_1daa9w7v20().s[6]++, new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g'));
  var DISALLOWED_ATTRIBUTES = (cov_1daa9w7v20().s[7]++, ['sanitize', 'whiteList', 'sanitizeFn']);
  var DefaultType = (cov_1daa9w7v20().s[8]++, {
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
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  });
  var AttachmentMap = (cov_1daa9w7v20().s[9]++, {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  });
  var Default = (cov_1daa9w7v20().s[10]++, {
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
    customClass: '',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  });
  var HOVER_STATE_SHOW = (cov_1daa9w7v20().s[11]++, 'show');
  var HOVER_STATE_OUT = (cov_1daa9w7v20().s[12]++, 'out');
  var Event = (cov_1daa9w7v20().s[13]++, {
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
  var CLASS_NAME_FADE = (cov_1daa9w7v20().s[14]++, 'fade');
  var CLASS_NAME_SHOW = (cov_1daa9w7v20().s[15]++, 'show');
  var SELECTOR_TOOLTIP_INNER = (cov_1daa9w7v20().s[16]++, '.tooltip-inner');
  var SELECTOR_ARROW = (cov_1daa9w7v20().s[17]++, '.arrow');
  var TRIGGER_HOVER = (cov_1daa9w7v20().s[18]++, 'hover');
  var TRIGGER_FOCUS = (cov_1daa9w7v20().s[19]++, 'focus');
  var TRIGGER_CLICK = (cov_1daa9w7v20().s[20]++, 'click');
  var TRIGGER_MANUAL = (cov_1daa9w7v20().s[21]++, 'manual');
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = /*#__PURE__*/function () {
    function Tooltip(element, config) {
      cov_1daa9w7v20().f[0]++;
      cov_1daa9w7v20().s[22]++;

      if (typeof Popper__default['default'] === 'undefined') {
        cov_1daa9w7v20().b[0][0]++;
        cov_1daa9w7v20().s[23]++;
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      } else {
        cov_1daa9w7v20().b[0][1]++;
      } // private


      cov_1daa9w7v20().s[24]++;
      this._isEnabled = true;
      cov_1daa9w7v20().s[25]++;
      this._timeout = 0;
      cov_1daa9w7v20().s[26]++;
      this._hoverState = '';
      cov_1daa9w7v20().s[27]++;
      this._activeTrigger = {};
      cov_1daa9w7v20().s[28]++;
      this._popper = null; // Protected

      cov_1daa9w7v20().s[29]++;
      this.element = element;
      cov_1daa9w7v20().s[30]++;
      this.config = this._getConfig(config);
      cov_1daa9w7v20().s[31]++;
      this.tip = null;
      cov_1daa9w7v20().s[32]++;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      cov_1daa9w7v20().f[8]++;
      cov_1daa9w7v20().s[40]++;
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      cov_1daa9w7v20().f[9]++;
      cov_1daa9w7v20().s[41]++;
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      cov_1daa9w7v20().f[10]++;
      cov_1daa9w7v20().s[42]++;
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      cov_1daa9w7v20().f[11]++;
      cov_1daa9w7v20().s[43]++;

      if (!this._isEnabled) {
        cov_1daa9w7v20().b[1][0]++;
        cov_1daa9w7v20().s[44]++;
        return;
      } else {
        cov_1daa9w7v20().b[1][1]++;
      }

      cov_1daa9w7v20().s[45]++;

      if (event) {
        cov_1daa9w7v20().b[2][0]++;
        var dataKey = (cov_1daa9w7v20().s[46]++, this.constructor.DATA_KEY);
        var context = (cov_1daa9w7v20().s[47]++, $__default['default'](event.currentTarget).data(dataKey));
        cov_1daa9w7v20().s[48]++;

        if (!context) {
          cov_1daa9w7v20().b[3][0]++;
          cov_1daa9w7v20().s[49]++;
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          cov_1daa9w7v20().s[50]++;
          $__default['default'](event.currentTarget).data(dataKey, context);
        } else {
          cov_1daa9w7v20().b[3][1]++;
        }

        cov_1daa9w7v20().s[51]++;
        context._activeTrigger.click = !context._activeTrigger.click;
        cov_1daa9w7v20().s[52]++;

        if (context._isWithActiveTrigger()) {
          cov_1daa9w7v20().b[4][0]++;
          cov_1daa9w7v20().s[53]++;

          context._enter(null, context);
        } else {
          cov_1daa9w7v20().b[4][1]++;
          cov_1daa9w7v20().s[54]++;

          context._leave(null, context);
        }
      } else {
        cov_1daa9w7v20().b[2][1]++;
        cov_1daa9w7v20().s[55]++;

        if ($__default['default'](this.getTipElement()).hasClass(CLASS_NAME_SHOW)) {
          cov_1daa9w7v20().b[5][0]++;
          cov_1daa9w7v20().s[56]++;

          this._leave(null, this);

          cov_1daa9w7v20().s[57]++;
          return;
        } else {
          cov_1daa9w7v20().b[5][1]++;
        }

        cov_1daa9w7v20().s[58]++;

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      cov_1daa9w7v20().f[12]++;
      cov_1daa9w7v20().s[59]++;
      clearTimeout(this._timeout);
      cov_1daa9w7v20().s[60]++;
      $__default['default'].removeData(this.element, this.constructor.DATA_KEY);
      cov_1daa9w7v20().s[61]++;
      $__default['default'](this.element).off(this.constructor.EVENT_KEY);
      cov_1daa9w7v20().s[62]++;
      $__default['default'](this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);
      cov_1daa9w7v20().s[63]++;

      if (this.tip) {
        cov_1daa9w7v20().b[6][0]++;
        cov_1daa9w7v20().s[64]++;
        $__default['default'](this.tip).remove();
      } else {
        cov_1daa9w7v20().b[6][1]++;
      }

      cov_1daa9w7v20().s[65]++;
      this._isEnabled = null;
      cov_1daa9w7v20().s[66]++;
      this._timeout = null;
      cov_1daa9w7v20().s[67]++;
      this._hoverState = null;
      cov_1daa9w7v20().s[68]++;
      this._activeTrigger = null;
      cov_1daa9w7v20().s[69]++;

      if (this._popper) {
        cov_1daa9w7v20().b[7][0]++;
        cov_1daa9w7v20().s[70]++;

        this._popper.destroy();
      } else {
        cov_1daa9w7v20().b[7][1]++;
      }

      cov_1daa9w7v20().s[71]++;
      this._popper = null;
      cov_1daa9w7v20().s[72]++;
      this.element = null;
      cov_1daa9w7v20().s[73]++;
      this.config = null;
      cov_1daa9w7v20().s[74]++;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      cov_1daa9w7v20().f[13]++;
      cov_1daa9w7v20().s[75]++;

      if ($__default['default'](this.element).css('display') === 'none') {
        cov_1daa9w7v20().b[8][0]++;
        cov_1daa9w7v20().s[76]++;
        throw new Error('Please use show on visible elements');
      } else {
        cov_1daa9w7v20().b[8][1]++;
      }

      var showEvent = (cov_1daa9w7v20().s[77]++, $__default['default'].Event(this.constructor.Event.SHOW));
      cov_1daa9w7v20().s[78]++;

      if ((cov_1daa9w7v20().b[10][0]++, this.isWithContent()) && (cov_1daa9w7v20().b[10][1]++, this._isEnabled)) {
        cov_1daa9w7v20().b[9][0]++;
        cov_1daa9w7v20().s[79]++;
        $__default['default'](this.element).trigger(showEvent);
        var shadowRoot = (cov_1daa9w7v20().s[80]++, Util__default['default'].findShadowRoot(this.element));
        var isInTheDom = (cov_1daa9w7v20().s[81]++, $__default['default'].contains(shadowRoot !== null ? (cov_1daa9w7v20().b[11][0]++, shadowRoot) : (cov_1daa9w7v20().b[11][1]++, this.element.ownerDocument.documentElement), this.element));
        cov_1daa9w7v20().s[82]++;

        if ((cov_1daa9w7v20().b[13][0]++, showEvent.isDefaultPrevented()) || (cov_1daa9w7v20().b[13][1]++, !isInTheDom)) {
          cov_1daa9w7v20().b[12][0]++;
          cov_1daa9w7v20().s[83]++;
          return;
        } else {
          cov_1daa9w7v20().b[12][1]++;
        }

        var tip = (cov_1daa9w7v20().s[84]++, this.getTipElement());
        var tipId = (cov_1daa9w7v20().s[85]++, Util__default['default'].getUID(this.constructor.NAME));
        cov_1daa9w7v20().s[86]++;
        tip.setAttribute('id', tipId);
        cov_1daa9w7v20().s[87]++;
        this.element.setAttribute('aria-describedby', tipId);
        cov_1daa9w7v20().s[88]++;
        this.setContent();
        cov_1daa9w7v20().s[89]++;

        if (this.config.animation) {
          cov_1daa9w7v20().b[14][0]++;
          cov_1daa9w7v20().s[90]++;
          $__default['default'](tip).addClass(CLASS_NAME_FADE);
        } else {
          cov_1daa9w7v20().b[14][1]++;
        }

        var placement = (cov_1daa9w7v20().s[91]++, typeof this.config.placement === 'function' ? (cov_1daa9w7v20().b[15][0]++, this.config.placement.call(this, tip, this.element)) : (cov_1daa9w7v20().b[15][1]++, this.config.placement));
        var attachment = (cov_1daa9w7v20().s[92]++, this._getAttachment(placement));
        cov_1daa9w7v20().s[93]++;
        this.addAttachmentClass(attachment);
        var container = (cov_1daa9w7v20().s[94]++, this._getContainer());
        cov_1daa9w7v20().s[95]++;
        $__default['default'](tip).data(this.constructor.DATA_KEY, this);
        cov_1daa9w7v20().s[96]++;

        if (!$__default['default'].contains(this.element.ownerDocument.documentElement, this.tip)) {
          cov_1daa9w7v20().b[16][0]++;
          cov_1daa9w7v20().s[97]++;
          $__default['default'](tip).appendTo(container);
        } else {
          cov_1daa9w7v20().b[16][1]++;
        }

        cov_1daa9w7v20().s[98]++;
        $__default['default'](this.element).trigger(this.constructor.Event.INSERTED);
        cov_1daa9w7v20().s[99]++;
        this._popper = new Popper__default['default'](this.element, tip, this._getPopperConfig(attachment));
        cov_1daa9w7v20().s[100]++;
        $__default['default'](tip).addClass(CLASS_NAME_SHOW);
        cov_1daa9w7v20().s[101]++;
        $__default['default'](tip).addClass(this.config.customClass); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        cov_1daa9w7v20().s[102]++;

        if ('ontouchstart' in document.documentElement) {
          cov_1daa9w7v20().b[17][0]++;
          cov_1daa9w7v20().s[103]++;
          $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
        } else {
          cov_1daa9w7v20().b[17][1]++;
        }

        cov_1daa9w7v20().s[104]++;

        var complete = function complete() {
          cov_1daa9w7v20().f[14]++;
          cov_1daa9w7v20().s[105]++;

          if (_this.config.animation) {
            cov_1daa9w7v20().b[18][0]++;
            cov_1daa9w7v20().s[106]++;

            _this._fixTransition();
          } else {
            cov_1daa9w7v20().b[18][1]++;
          }

          var prevHoverState = (cov_1daa9w7v20().s[107]++, _this._hoverState);
          cov_1daa9w7v20().s[108]++;
          _this._hoverState = null;
          cov_1daa9w7v20().s[109]++;
          $__default['default'](_this.element).trigger(_this.constructor.Event.SHOWN);
          cov_1daa9w7v20().s[110]++;

          if (prevHoverState === HOVER_STATE_OUT) {
            cov_1daa9w7v20().b[19][0]++;
            cov_1daa9w7v20().s[111]++;

            _this._leave(null, _this);
          } else {
            cov_1daa9w7v20().b[19][1]++;
          }
        };

        cov_1daa9w7v20().s[112]++;

        if ($__default['default'](this.tip).hasClass(CLASS_NAME_FADE)) {
          cov_1daa9w7v20().b[20][0]++;
          var transitionDuration = (cov_1daa9w7v20().s[113]++, Util__default['default'].getTransitionDurationFromElement(this.tip));
          cov_1daa9w7v20().s[114]++;
          $__default['default'](this.tip).one(Util__default['default'].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          cov_1daa9w7v20().b[20][1]++;
          cov_1daa9w7v20().s[115]++;
          complete();
        }
      } else {
        cov_1daa9w7v20().b[9][1]++;
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      cov_1daa9w7v20().f[15]++;
      var tip = (cov_1daa9w7v20().s[116]++, this.getTipElement());
      var hideEvent = (cov_1daa9w7v20().s[117]++, $__default['default'].Event(this.constructor.Event.HIDE));
      cov_1daa9w7v20().s[118]++;

      var complete = function complete() {
        cov_1daa9w7v20().f[16]++;
        cov_1daa9w7v20().s[119]++;

        if ((cov_1daa9w7v20().b[22][0]++, _this2._hoverState !== HOVER_STATE_SHOW) && (cov_1daa9w7v20().b[22][1]++, tip.parentNode)) {
          cov_1daa9w7v20().b[21][0]++;
          cov_1daa9w7v20().s[120]++;
          tip.parentNode.removeChild(tip);
        } else {
          cov_1daa9w7v20().b[21][1]++;
        }

        cov_1daa9w7v20().s[121]++;

        _this2._cleanTipClass();

        cov_1daa9w7v20().s[122]++;

        _this2.element.removeAttribute('aria-describedby');

        cov_1daa9w7v20().s[123]++;
        $__default['default'](_this2.element).trigger(_this2.constructor.Event.HIDDEN);
        cov_1daa9w7v20().s[124]++;

        if (_this2._popper !== null) {
          cov_1daa9w7v20().b[23][0]++;
          cov_1daa9w7v20().s[125]++;

          _this2._popper.destroy();
        } else {
          cov_1daa9w7v20().b[23][1]++;
        }

        cov_1daa9w7v20().s[126]++;

        if (callback) {
          cov_1daa9w7v20().b[24][0]++;
          cov_1daa9w7v20().s[127]++;
          callback();
        } else {
          cov_1daa9w7v20().b[24][1]++;
        }
      };

      cov_1daa9w7v20().s[128]++;
      $__default['default'](this.element).trigger(hideEvent);
      cov_1daa9w7v20().s[129]++;

      if (hideEvent.isDefaultPrevented()) {
        cov_1daa9w7v20().b[25][0]++;
        cov_1daa9w7v20().s[130]++;
        return;
      } else {
        cov_1daa9w7v20().b[25][1]++;
      }

      cov_1daa9w7v20().s[131]++;
      $__default['default'](tip).removeClass(CLASS_NAME_SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      cov_1daa9w7v20().s[132]++;

      if ('ontouchstart' in document.documentElement) {
        cov_1daa9w7v20().b[26][0]++;
        cov_1daa9w7v20().s[133]++;
        $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
      } else {
        cov_1daa9w7v20().b[26][1]++;
      }

      cov_1daa9w7v20().s[134]++;
      this._activeTrigger[TRIGGER_CLICK] = false;
      cov_1daa9w7v20().s[135]++;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      cov_1daa9w7v20().s[136]++;
      this._activeTrigger[TRIGGER_HOVER] = false;
      cov_1daa9w7v20().s[137]++;

      if ($__default['default'](this.tip).hasClass(CLASS_NAME_FADE)) {
        cov_1daa9w7v20().b[27][0]++;
        var transitionDuration = (cov_1daa9w7v20().s[138]++, Util__default['default'].getTransitionDurationFromElement(tip));
        cov_1daa9w7v20().s[139]++;
        $__default['default'](tip).one(Util__default['default'].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        cov_1daa9w7v20().b[27][1]++;
        cov_1daa9w7v20().s[140]++;
        complete();
      }

      cov_1daa9w7v20().s[141]++;
      this._hoverState = '';
    };

    _proto.update = function update() {
      cov_1daa9w7v20().f[17]++;
      cov_1daa9w7v20().s[142]++;

      if (this._popper !== null) {
        cov_1daa9w7v20().b[28][0]++;
        cov_1daa9w7v20().s[143]++;

        this._popper.scheduleUpdate();
      } else {
        cov_1daa9w7v20().b[28][1]++;
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      cov_1daa9w7v20().f[18]++;
      cov_1daa9w7v20().s[144]++;
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      cov_1daa9w7v20().f[19]++;
      cov_1daa9w7v20().s[145]++;
      $__default['default'](this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      cov_1daa9w7v20().f[20]++;
      cov_1daa9w7v20().s[146]++;
      this.tip = (cov_1daa9w7v20().b[29][0]++, this.tip) || (cov_1daa9w7v20().b[29][1]++, $__default['default'](this.config.template)[0]);
      cov_1daa9w7v20().s[147]++;
      return this.tip;
    };

    _proto.setContent = function setContent() {
      cov_1daa9w7v20().f[21]++;
      var tip = (cov_1daa9w7v20().s[148]++, this.getTipElement());
      cov_1daa9w7v20().s[149]++;
      this.setElementContent($__default['default'](tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)), this.getTitle());
      cov_1daa9w7v20().s[150]++;
      $__default['default'](tip).removeClass(CLASS_NAME_FADE + " " + CLASS_NAME_SHOW);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      cov_1daa9w7v20().f[22]++;
      cov_1daa9w7v20().s[151]++;

      if ((cov_1daa9w7v20().b[31][0]++, typeof content === 'object') && ((cov_1daa9w7v20().b[31][1]++, content.nodeType) || (cov_1daa9w7v20().b[31][2]++, content.jquery))) {
        cov_1daa9w7v20().b[30][0]++;
        cov_1daa9w7v20().s[152]++;

        // Content is a DOM node or a jQuery
        if (this.config.html) {
          cov_1daa9w7v20().b[32][0]++;
          cov_1daa9w7v20().s[153]++;

          if (!$__default['default'](content).parent().is($element)) {
            cov_1daa9w7v20().b[33][0]++;
            cov_1daa9w7v20().s[154]++;
            $element.empty().append(content);
          } else {
            cov_1daa9w7v20().b[33][1]++;
          }
        } else {
          cov_1daa9w7v20().b[32][1]++;
          cov_1daa9w7v20().s[155]++;
          $element.text($__default['default'](content).text());
        }

        cov_1daa9w7v20().s[156]++;
        return;
      } else {
        cov_1daa9w7v20().b[30][1]++;
      }

      cov_1daa9w7v20().s[157]++;

      if (this.config.html) {
        cov_1daa9w7v20().b[34][0]++;
        cov_1daa9w7v20().s[158]++;

        if (this.config.sanitize) {
          cov_1daa9w7v20().b[35][0]++;
          cov_1daa9w7v20().s[159]++;
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        } else {
          cov_1daa9w7v20().b[35][1]++;
        }

        cov_1daa9w7v20().s[160]++;
        $element.html(content);
      } else {
        cov_1daa9w7v20().b[34][1]++;
        cov_1daa9w7v20().s[161]++;
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      cov_1daa9w7v20().f[23]++;
      var title = (cov_1daa9w7v20().s[162]++, this.element.getAttribute('data-original-title'));
      cov_1daa9w7v20().s[163]++;

      if (!title) {
        cov_1daa9w7v20().b[36][0]++;
        cov_1daa9w7v20().s[164]++;
        title = typeof this.config.title === 'function' ? (cov_1daa9w7v20().b[37][0]++, this.config.title.call(this.element)) : (cov_1daa9w7v20().b[37][1]++, this.config.title);
      } else {
        cov_1daa9w7v20().b[36][1]++;
      }

      cov_1daa9w7v20().s[165]++;
      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      cov_1daa9w7v20().f[24]++;
      var defaultBsConfig = (cov_1daa9w7v20().s[166]++, {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: SELECTOR_ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          cov_1daa9w7v20().f[25]++;
          cov_1daa9w7v20().s[167]++;

          if (data.originalPlacement !== data.placement) {
            cov_1daa9w7v20().b[38][0]++;
            cov_1daa9w7v20().s[168]++;

            _this3._handlePopperPlacementChange(data);
          } else {
            cov_1daa9w7v20().b[38][1]++;
          }
        },
        onUpdate: function onUpdate(data) {
          cov_1daa9w7v20().f[26]++;
          cov_1daa9w7v20().s[169]++;
          return _this3._handlePopperPlacementChange(data);
        }
      });
      cov_1daa9w7v20().s[170]++;
      return _extends({}, defaultBsConfig, this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      cov_1daa9w7v20().f[27]++;
      var offset = (cov_1daa9w7v20().s[171]++, {});
      cov_1daa9w7v20().s[172]++;

      if (typeof this.config.offset === 'function') {
        cov_1daa9w7v20().b[39][0]++;
        cov_1daa9w7v20().s[173]++;

        offset.fn = function (data) {
          cov_1daa9w7v20().f[28]++;
          cov_1daa9w7v20().s[174]++;
          data.offsets = _extends({}, data.offsets, (cov_1daa9w7v20().b[40][0]++, _this4.config.offset(data.offsets, _this4.element)) || (cov_1daa9w7v20().b[40][1]++, {}));
          cov_1daa9w7v20().s[175]++;
          return data;
        };
      } else {
        cov_1daa9w7v20().b[39][1]++;
        cov_1daa9w7v20().s[176]++;
        offset.offset = this.config.offset;
      }

      cov_1daa9w7v20().s[177]++;
      return offset;
    };

    _proto._getContainer = function _getContainer() {
      cov_1daa9w7v20().f[29]++;
      cov_1daa9w7v20().s[178]++;

      if (this.config.container === false) {
        cov_1daa9w7v20().b[41][0]++;
        cov_1daa9w7v20().s[179]++;
        return document.body;
      } else {
        cov_1daa9w7v20().b[41][1]++;
      }

      cov_1daa9w7v20().s[180]++;

      if (Util__default['default'].isElement(this.config.container)) {
        cov_1daa9w7v20().b[42][0]++;
        cov_1daa9w7v20().s[181]++;
        return $__default['default'](this.config.container);
      } else {
        cov_1daa9w7v20().b[42][1]++;
      }

      cov_1daa9w7v20().s[182]++;
      return $__default['default'](document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      cov_1daa9w7v20().f[30]++;
      cov_1daa9w7v20().s[183]++;
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      cov_1daa9w7v20().f[31]++;
      var triggers = (cov_1daa9w7v20().s[184]++, this.config.trigger.split(' '));
      cov_1daa9w7v20().s[185]++;
      triggers.forEach(function (trigger) {
        cov_1daa9w7v20().f[32]++;
        cov_1daa9w7v20().s[186]++;

        if (trigger === 'click') {
          cov_1daa9w7v20().b[43][0]++;
          cov_1daa9w7v20().s[187]++;
          $__default['default'](_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            cov_1daa9w7v20().f[33]++;
            cov_1daa9w7v20().s[188]++;
            return _this5.toggle(event);
          });
        } else {
          cov_1daa9w7v20().b[43][1]++;
          cov_1daa9w7v20().s[189]++;

          if (trigger !== TRIGGER_MANUAL) {
            cov_1daa9w7v20().b[44][0]++;
            var eventIn = (cov_1daa9w7v20().s[190]++, trigger === TRIGGER_HOVER ? (cov_1daa9w7v20().b[45][0]++, _this5.constructor.Event.MOUSEENTER) : (cov_1daa9w7v20().b[45][1]++, _this5.constructor.Event.FOCUSIN));
            var eventOut = (cov_1daa9w7v20().s[191]++, trigger === TRIGGER_HOVER ? (cov_1daa9w7v20().b[46][0]++, _this5.constructor.Event.MOUSELEAVE) : (cov_1daa9w7v20().b[46][1]++, _this5.constructor.Event.FOCUSOUT));
            cov_1daa9w7v20().s[192]++;
            $__default['default'](_this5.element).on(eventIn, _this5.config.selector, function (event) {
              cov_1daa9w7v20().f[34]++;
              cov_1daa9w7v20().s[193]++;
              return _this5._enter(event);
            }).on(eventOut, _this5.config.selector, function (event) {
              cov_1daa9w7v20().f[35]++;
              cov_1daa9w7v20().s[194]++;
              return _this5._leave(event);
            });
          } else {
            cov_1daa9w7v20().b[44][1]++;
          }
        }
      });
      cov_1daa9w7v20().s[195]++;

      this._hideModalHandler = function () {
        cov_1daa9w7v20().f[36]++;
        cov_1daa9w7v20().s[196]++;

        if (_this5.element) {
          cov_1daa9w7v20().b[47][0]++;
          cov_1daa9w7v20().s[197]++;

          _this5.hide();
        } else {
          cov_1daa9w7v20().b[47][1]++;
        }
      };

      cov_1daa9w7v20().s[198]++;
      $__default['default'](this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);
      cov_1daa9w7v20().s[199]++;

      if (this.config.selector) {
        cov_1daa9w7v20().b[48][0]++;
        cov_1daa9w7v20().s[200]++;
        this.config = _extends({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        cov_1daa9w7v20().b[48][1]++;
        cov_1daa9w7v20().s[201]++;

        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      cov_1daa9w7v20().f[37]++;
      var titleType = (cov_1daa9w7v20().s[202]++, typeof this.element.getAttribute('data-original-title'));
      cov_1daa9w7v20().s[203]++;

      if ((cov_1daa9w7v20().b[50][0]++, this.element.getAttribute('title')) || (cov_1daa9w7v20().b[50][1]++, titleType !== 'string')) {
        cov_1daa9w7v20().b[49][0]++;
        cov_1daa9w7v20().s[204]++;
        this.element.setAttribute('data-original-title', (cov_1daa9w7v20().b[51][0]++, this.element.getAttribute('title')) || (cov_1daa9w7v20().b[51][1]++, ''));
        cov_1daa9w7v20().s[205]++;
        this.element.setAttribute('title', '');
      } else {
        cov_1daa9w7v20().b[49][1]++;
      }
    };

    _proto._enter = function _enter(event, context) {
      cov_1daa9w7v20().f[38]++;
      var dataKey = (cov_1daa9w7v20().s[206]++, this.constructor.DATA_KEY);
      cov_1daa9w7v20().s[207]++;
      context = (cov_1daa9w7v20().b[52][0]++, context) || (cov_1daa9w7v20().b[52][1]++, $__default['default'](event.currentTarget).data(dataKey));
      cov_1daa9w7v20().s[208]++;

      if (!context) {
        cov_1daa9w7v20().b[53][0]++;
        cov_1daa9w7v20().s[209]++;
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        cov_1daa9w7v20().s[210]++;
        $__default['default'](event.currentTarget).data(dataKey, context);
      } else {
        cov_1daa9w7v20().b[53][1]++;
      }

      cov_1daa9w7v20().s[211]++;

      if (event) {
        cov_1daa9w7v20().b[54][0]++;
        cov_1daa9w7v20().s[212]++;
        context._activeTrigger[event.type === 'focusin' ? (cov_1daa9w7v20().b[55][0]++, TRIGGER_FOCUS) : (cov_1daa9w7v20().b[55][1]++, TRIGGER_HOVER)] = true;
      } else {
        cov_1daa9w7v20().b[54][1]++;
      }

      cov_1daa9w7v20().s[213]++;

      if ((cov_1daa9w7v20().b[57][0]++, $__default['default'](context.getTipElement()).hasClass(CLASS_NAME_SHOW)) || (cov_1daa9w7v20().b[57][1]++, context._hoverState === HOVER_STATE_SHOW)) {
        cov_1daa9w7v20().b[56][0]++;
        cov_1daa9w7v20().s[214]++;
        context._hoverState = HOVER_STATE_SHOW;
        cov_1daa9w7v20().s[215]++;
        return;
      } else {
        cov_1daa9w7v20().b[56][1]++;
      }

      cov_1daa9w7v20().s[216]++;
      clearTimeout(context._timeout);
      cov_1daa9w7v20().s[217]++;
      context._hoverState = HOVER_STATE_SHOW;
      cov_1daa9w7v20().s[218]++;

      if ((cov_1daa9w7v20().b[59][0]++, !context.config.delay) || (cov_1daa9w7v20().b[59][1]++, !context.config.delay.show)) {
        cov_1daa9w7v20().b[58][0]++;
        cov_1daa9w7v20().s[219]++;
        context.show();
        cov_1daa9w7v20().s[220]++;
        return;
      } else {
        cov_1daa9w7v20().b[58][1]++;
      }

      cov_1daa9w7v20().s[221]++;
      context._timeout = setTimeout(function () {
        cov_1daa9w7v20().f[39]++;
        cov_1daa9w7v20().s[222]++;

        if (context._hoverState === HOVER_STATE_SHOW) {
          cov_1daa9w7v20().b[60][0]++;
          cov_1daa9w7v20().s[223]++;
          context.show();
        } else {
          cov_1daa9w7v20().b[60][1]++;
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      cov_1daa9w7v20().f[40]++;
      var dataKey = (cov_1daa9w7v20().s[224]++, this.constructor.DATA_KEY);
      cov_1daa9w7v20().s[225]++;
      context = (cov_1daa9w7v20().b[61][0]++, context) || (cov_1daa9w7v20().b[61][1]++, $__default['default'](event.currentTarget).data(dataKey));
      cov_1daa9w7v20().s[226]++;

      if (!context) {
        cov_1daa9w7v20().b[62][0]++;
        cov_1daa9w7v20().s[227]++;
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        cov_1daa9w7v20().s[228]++;
        $__default['default'](event.currentTarget).data(dataKey, context);
      } else {
        cov_1daa9w7v20().b[62][1]++;
      }

      cov_1daa9w7v20().s[229]++;

      if (event) {
        cov_1daa9w7v20().b[63][0]++;
        cov_1daa9w7v20().s[230]++;
        context._activeTrigger[event.type === 'focusout' ? (cov_1daa9w7v20().b[64][0]++, TRIGGER_FOCUS) : (cov_1daa9w7v20().b[64][1]++, TRIGGER_HOVER)] = false;
      } else {
        cov_1daa9w7v20().b[63][1]++;
      }

      cov_1daa9w7v20().s[231]++;

      if (context._isWithActiveTrigger()) {
        cov_1daa9w7v20().b[65][0]++;
        cov_1daa9w7v20().s[232]++;
        return;
      } else {
        cov_1daa9w7v20().b[65][1]++;
      }

      cov_1daa9w7v20().s[233]++;
      clearTimeout(context._timeout);
      cov_1daa9w7v20().s[234]++;
      context._hoverState = HOVER_STATE_OUT;
      cov_1daa9w7v20().s[235]++;

      if ((cov_1daa9w7v20().b[67][0]++, !context.config.delay) || (cov_1daa9w7v20().b[67][1]++, !context.config.delay.hide)) {
        cov_1daa9w7v20().b[66][0]++;
        cov_1daa9w7v20().s[236]++;
        context.hide();
        cov_1daa9w7v20().s[237]++;
        return;
      } else {
        cov_1daa9w7v20().b[66][1]++;
      }

      cov_1daa9w7v20().s[238]++;
      context._timeout = setTimeout(function () {
        cov_1daa9w7v20().f[41]++;
        cov_1daa9w7v20().s[239]++;

        if (context._hoverState === HOVER_STATE_OUT) {
          cov_1daa9w7v20().b[68][0]++;
          cov_1daa9w7v20().s[240]++;
          context.hide();
        } else {
          cov_1daa9w7v20().b[68][1]++;
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      cov_1daa9w7v20().f[42]++;
      cov_1daa9w7v20().s[241]++;

      for (var trigger in this._activeTrigger) {
        cov_1daa9w7v20().s[242]++;

        if (this._activeTrigger[trigger]) {
          cov_1daa9w7v20().b[69][0]++;
          cov_1daa9w7v20().s[243]++;
          return true;
        } else {
          cov_1daa9w7v20().b[69][1]++;
        }
      }

      cov_1daa9w7v20().s[244]++;
      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      cov_1daa9w7v20().f[43]++;
      var dataAttributes = (cov_1daa9w7v20().s[245]++, $__default['default'](this.element).data());
      cov_1daa9w7v20().s[246]++;
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        cov_1daa9w7v20().f[44]++;
        cov_1daa9w7v20().s[247]++;

        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          cov_1daa9w7v20().b[70][0]++;
          cov_1daa9w7v20().s[248]++;
          delete dataAttributes[dataAttr];
        } else {
          cov_1daa9w7v20().b[70][1]++;
        }
      });
      cov_1daa9w7v20().s[249]++;
      config = _extends({}, this.constructor.Default, dataAttributes, (cov_1daa9w7v20().b[72][0]++, typeof config === 'object') && (cov_1daa9w7v20().b[72][1]++, config) ? (cov_1daa9w7v20().b[71][0]++, config) : (cov_1daa9w7v20().b[71][1]++, {}));
      cov_1daa9w7v20().s[250]++;

      if (typeof config.delay === 'number') {
        cov_1daa9w7v20().b[73][0]++;
        cov_1daa9w7v20().s[251]++;
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      } else {
        cov_1daa9w7v20().b[73][1]++;
      }

      cov_1daa9w7v20().s[252]++;

      if (typeof config.title === 'number') {
        cov_1daa9w7v20().b[74][0]++;
        cov_1daa9w7v20().s[253]++;
        config.title = config.title.toString();
      } else {
        cov_1daa9w7v20().b[74][1]++;
      }

      cov_1daa9w7v20().s[254]++;

      if (typeof config.content === 'number') {
        cov_1daa9w7v20().b[75][0]++;
        cov_1daa9w7v20().s[255]++;
        config.content = config.content.toString();
      } else {
        cov_1daa9w7v20().b[75][1]++;
      }

      cov_1daa9w7v20().s[256]++;
      Util__default['default'].typeCheckConfig(NAME, config, this.constructor.DefaultType);
      cov_1daa9w7v20().s[257]++;

      if (config.sanitize) {
        cov_1daa9w7v20().b[76][0]++;
        cov_1daa9w7v20().s[258]++;
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      } else {
        cov_1daa9w7v20().b[76][1]++;
      }

      cov_1daa9w7v20().s[259]++;
      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      cov_1daa9w7v20().f[45]++;
      var config = (cov_1daa9w7v20().s[260]++, {});
      cov_1daa9w7v20().s[261]++;

      if (this.config) {
        cov_1daa9w7v20().b[77][0]++;
        cov_1daa9w7v20().s[262]++;

        for (var key in this.config) {
          cov_1daa9w7v20().s[263]++;

          if (this.constructor.Default[key] !== this.config[key]) {
            cov_1daa9w7v20().b[78][0]++;
            cov_1daa9w7v20().s[264]++;
            config[key] = this.config[key];
          } else {
            cov_1daa9w7v20().b[78][1]++;
          }
        }
      } else {
        cov_1daa9w7v20().b[77][1]++;
      }

      cov_1daa9w7v20().s[265]++;
      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      cov_1daa9w7v20().f[46]++;
      var $tip = (cov_1daa9w7v20().s[266]++, $__default['default'](this.getTipElement()));
      var tabClass = (cov_1daa9w7v20().s[267]++, $tip.attr('class').match(BSCLS_PREFIX_REGEX));
      cov_1daa9w7v20().s[268]++;

      if ((cov_1daa9w7v20().b[80][0]++, tabClass !== null) && (cov_1daa9w7v20().b[80][1]++, tabClass.length)) {
        cov_1daa9w7v20().b[79][0]++;
        cov_1daa9w7v20().s[269]++;
        $tip.removeClass(tabClass.join(''));
      } else {
        cov_1daa9w7v20().b[79][1]++;
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      cov_1daa9w7v20().f[47]++;
      cov_1daa9w7v20().s[270]++;
      this.tip = popperData.instance.popper;
      cov_1daa9w7v20().s[271]++;

      this._cleanTipClass();

      cov_1daa9w7v20().s[272]++;
      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      cov_1daa9w7v20().f[48]++;
      var tip = (cov_1daa9w7v20().s[273]++, this.getTipElement());
      var initConfigAnimation = (cov_1daa9w7v20().s[274]++, this.config.animation);
      cov_1daa9w7v20().s[275]++;

      if (tip.getAttribute('x-placement') !== null) {
        cov_1daa9w7v20().b[81][0]++;
        cov_1daa9w7v20().s[276]++;
        return;
      } else {
        cov_1daa9w7v20().b[81][1]++;
      }

      cov_1daa9w7v20().s[277]++;
      $__default['default'](tip).removeClass(CLASS_NAME_FADE);
      cov_1daa9w7v20().s[278]++;
      this.config.animation = false;
      cov_1daa9w7v20().s[279]++;
      this.hide();
      cov_1daa9w7v20().s[280]++;
      this.show();
      cov_1daa9w7v20().s[281]++;
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      cov_1daa9w7v20().f[49]++;
      cov_1daa9w7v20().s[282]++;
      return this.each(function () {
        cov_1daa9w7v20().f[50]++;
        var $element = (cov_1daa9w7v20().s[283]++, $__default['default'](this));
        var data = (cov_1daa9w7v20().s[284]++, $element.data(DATA_KEY));

        var _config = (cov_1daa9w7v20().s[285]++, (cov_1daa9w7v20().b[82][0]++, typeof config === 'object') && (cov_1daa9w7v20().b[82][1]++, config));

        cov_1daa9w7v20().s[286]++;

        if ((cov_1daa9w7v20().b[84][0]++, !data) && (cov_1daa9w7v20().b[84][1]++, /dispose|hide/.test(config))) {
          cov_1daa9w7v20().b[83][0]++;
          cov_1daa9w7v20().s[287]++;
          return;
        } else {
          cov_1daa9w7v20().b[83][1]++;
        }

        cov_1daa9w7v20().s[288]++;

        if (!data) {
          cov_1daa9w7v20().b[85][0]++;
          cov_1daa9w7v20().s[289]++;
          data = new Tooltip(this, _config);
          cov_1daa9w7v20().s[290]++;
          $element.data(DATA_KEY, data);
        } else {
          cov_1daa9w7v20().b[85][1]++;
        }

        cov_1daa9w7v20().s[291]++;

        if (typeof config === 'string') {
          cov_1daa9w7v20().b[86][0]++;
          cov_1daa9w7v20().s[292]++;

          if (typeof data[config] === 'undefined') {
            cov_1daa9w7v20().b[87][0]++;
            cov_1daa9w7v20().s[293]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_1daa9w7v20().b[87][1]++;
          }

          cov_1daa9w7v20().s[294]++;
          data[config]();
        } else {
          cov_1daa9w7v20().b[86][1]++;
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        cov_1daa9w7v20().f[1]++;
        cov_1daa9w7v20().s[33]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_1daa9w7v20().f[2]++;
        cov_1daa9w7v20().s[34]++;
        return Default;
      }
    }, {
      key: "NAME",
      get: function get() {
        cov_1daa9w7v20().f[3]++;
        cov_1daa9w7v20().s[35]++;
        return NAME;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        cov_1daa9w7v20().f[4]++;
        cov_1daa9w7v20().s[36]++;
        return DATA_KEY;
      }
    }, {
      key: "Event",
      get: function get() {
        cov_1daa9w7v20().f[5]++;
        cov_1daa9w7v20().s[37]++;
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        cov_1daa9w7v20().f[6]++;
        cov_1daa9w7v20().s[38]++;
        return EVENT_KEY;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        cov_1daa9w7v20().f[7]++;
        cov_1daa9w7v20().s[39]++;
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


  cov_1daa9w7v20().s[295]++;
  $__default['default'].fn[NAME] = Tooltip._jQueryInterface;
  cov_1daa9w7v20().s[296]++;
  $__default['default'].fn[NAME].Constructor = Tooltip;
  cov_1daa9w7v20().s[297]++;

  $__default['default'].fn[NAME].noConflict = function () {
    cov_1daa9w7v20().f[51]++;
    cov_1daa9w7v20().s[298]++;
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    cov_1daa9w7v20().s[299]++;
    return Tooltip._jQueryInterface;
  };

  return Tooltip;

})));
//# sourceMappingURL=tooltip.js.map

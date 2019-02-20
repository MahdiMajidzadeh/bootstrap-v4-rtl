/*!
  * Bootstrap eventhandler.js v4.3.1-0 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2019 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./polyfill.js'), require('../util.js')) :
  typeof define === 'function' && define.amd ? define(['./polyfill.js', '../util.js'], factory) :
  (global = global || self, global.EventHandler = factory(global.Polyfill, global.Util));
}(this, function (Polyfill, Util) { 'use strict';

  Polyfill = Polyfill && Polyfill.hasOwnProperty('default') ? Polyfill['default'] : Polyfill;
  Util = Util && Util.hasOwnProperty('default') ? Util['default'] : Util;

  var cov_mii02e0rm = function () {
    var path = "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/dom/eventHandler.js";
    var hash = "b707e117f30dc4ae64cdb1e741b0e9be4131d478";

    var Function = function () {}.constructor;

    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Library/WebServer/Documents/bootstrap-v4-rtl/js/src/dom/eventHandler.js",
      statementMap: {
        "0": {
          start: {
            line: 17,
            column: 23
          },
          end: {
            line: 17,
            column: 43
          }
        },
        "1": {
          start: {
            line: 18,
            column: 23
          },
          end: {
            line: 18,
            column: 29
          }
        },
        "2": {
          start: {
            line: 19,
            column: 23
          },
          end: {
            line: 19,
            column: 29
          }
        },
        "3": {
          start: {
            line: 20,
            column: 23
          },
          end: {
            line: 20,
            column: 31
          }
        },
        "4": {
          start: {
            line: 21,
            column: 23
          },
          end: {
            line: 21,
            column: 25
          }
        },
        "5": {
          start: {
            line: 22,
            column: 23
          },
          end: {
            line: 22,
            column: 24
          }
        },
        "6": {
          start: {
            line: 23,
            column: 23
          },
          end: {
            line: 26,
            column: 1
          }
        },
        "7": {
          start: {
            line: 27,
            column: 23
          },
          end: {
            line: 39,
            column: 1
          }
        },
        "8": {
          start: {
            line: 48,
            column: 2
          },
          end: {
            line: 48,
            column: 73
          }
        },
        "9": {
          start: {
            line: 52,
            column: 14
          },
          end: {
            line: 52,
            column: 34
          }
        },
        "10": {
          start: {
            line: 53,
            column: 2
          },
          end: {
            line: 53,
            column: 24
          }
        },
        "11": {
          start: {
            line: 55,
            column: 2
          },
          end: {
            line: 55,
            column: 54
          }
        },
        "12": {
          start: {
            line: 60,
            column: 2
          },
          end: {
            line: 62,
            column: 3
          }
        },
        "13": {
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 61,
            column: 74
          }
        },
        "14": {
          start: {
            line: 64,
            column: 2
          },
          end: {
            line: 64,
            column: 32
          }
        },
        "15": {
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 75,
            column: 3
          }
        },
        "16": {
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 69,
            column: 28
          }
        },
        "17": {
          start: {
            line: 70,
            column: 4
          },
          end: {
            line: 72,
            column: 5
          }
        },
        "18": {
          start: {
            line: 71,
            column: 6
          },
          end: {
            line: 71,
            column: 47
          }
        },
        "19": {
          start: {
            line: 74,
            column: 4
          },
          end: {
            line: 74,
            column: 37
          }
        },
        "20": {
          start: {
            line: 79,
            column: 2
          },
          end: {
            line: 98,
            column: 3
          }
        },
        "21": {
          start: {
            line: 80,
            column: 24
          },
          end: {
            line: 80,
            column: 58
          }
        },
        "22": {
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 94,
            column: 5
          }
        },
        "23": {
          start: {
            line: 82,
            column: 22
          },
          end: {
            line: 82,
            column: 34
          }
        },
        "24": {
          start: {
            line: 83,
            column: 6
          },
          end: {
            line: 93,
            column: 7
          }
        },
        "25": {
          start: {
            line: 83,
            column: 19
          },
          end: {
            line: 83,
            column: 37
          }
        },
        "26": {
          start: {
            line: 84,
            column: 8
          },
          end: {
            line: 92,
            column: 9
          }
        },
        "27": {
          start: {
            line: 85,
            column: 10
          },
          end: {
            line: 85,
            column: 33
          }
        },
        "28": {
          start: {
            line: 87,
            column: 10
          },
          end: {
            line: 89,
            column: 11
          }
        },
        "29": {
          start: {
            line: 88,
            column: 12
          },
          end: {
            line: 88,
            column: 53
          }
        },
        "30": {
          start: {
            line: 91,
            column: 10
          },
          end: {
            line: 91,
            column: 42
          }
        },
        "31": {
          start: {
            line: 97,
            column: 4
          },
          end: {
            line: 97,
            column: 15
          }
        },
        "32": {
          start: {
            line: 102,
            column: 18
          },
          end: {
            line: 102,
            column: 37
          }
        },
        "33": {
          start: {
            line: 104,
            column: 2
          },
          end: {
            line: 111,
            column: 3
          }
        },
        "34": {
          start: {
            line: 104,
            column: 15
          },
          end: {
            line: 104,
            column: 16
          }
        },
        "35": {
          start: {
            line: 105,
            column: 16
          },
          end: {
            line: 105,
            column: 26
          }
        },
        "36": {
          start: {
            line: 106,
            column: 18
          },
          end: {
            line: 106,
            column: 29
          }
        },
        "37": {
          start: {
            line: 108,
            column: 4
          },
          end: {
            line: 110,
            column: 5
          }
        },
        "38": {
          start: {
            line: 109,
            column: 6
          },
          end: {
            line: 109,
            column: 24
          }
        },
        "39": {
          start: {
            line: 113,
            column: 2
          },
          end: {
            line: 113,
            column: 13
          }
        },
        "40": {
          start: {
            line: 117,
            column: 21
          },
          end: {
            line: 117,
            column: 48
          }
        },
        "41": {
          start: {
            line: 118,
            column: 26
          },
          end: {
            line: 118,
            column: 61
          }
        },
        "42": {
          start: {
            line: 121,
            column: 18
          },
          end: {
            line: 121,
            column: 63
          }
        },
        "43": {
          start: {
            line: 122,
            column: 17
          },
          end: {
            line: 122,
            column: 40
          }
        },
        "44": {
          start: {
            line: 124,
            column: 2
          },
          end: {
            line: 126,
            column: 3
          }
        },
        "45": {
          start: {
            line: 125,
            column: 4
          },
          end: {
            line: 125,
            column: 22
          }
        },
        "46": {
          start: {
            line: 128,
            column: 19
          },
          end: {
            line: 128,
            column: 55
          }
        },
        "47": {
          start: {
            line: 130,
            column: 2
          },
          end: {
            line: 132,
            column: 3
          }
        },
        "48": {
          start: {
            line: 131,
            column: 4
          },
          end: {
            line: 131,
            column: 33
          }
        },
        "49": {
          start: {
            line: 134,
            column: 2
          },
          end: {
            line: 134,
            column: 49
          }
        },
        "50": {
          start: {
            line: 138,
            column: 2
          },
          end: {
            line: 140,
            column: 3
          }
        },
        "51": {
          start: {
            line: 139,
            column: 4
          },
          end: {
            line: 139,
            column: 10
          }
        },
        "52": {
          start: {
            line: 142,
            column: 2
          },
          end: {
            line: 145,
            column: 3
          }
        },
        "53": {
          start: {
            line: 143,
            column: 4
          },
          end: {
            line: 143,
            column: 26
          }
        },
        "54": {
          start: {
            line: 144,
            column: 4
          },
          end: {
            line: 144,
            column: 23
          }
        },
        "55": {
          start: {
            line: 147,
            column: 51
          },
          end: {
            line: 147,
            column: 108
          }
        },
        "56": {
          start: {
            line: 148,
            column: 21
          },
          end: {
            line: 148,
            column: 38
          }
        },
        "57": {
          start: {
            line: 149,
            column: 21
          },
          end: {
            line: 149,
            column: 66
          }
        },
        "58": {
          start: {
            line: 150,
            column: 21
          },
          end: {
            line: 150,
            column: 88
          }
        },
        "59": {
          start: {
            line: 152,
            column: 2
          },
          end: {
            line: 156,
            column: 3
          }
        },
        "60": {
          start: {
            line: 153,
            column: 4
          },
          end: {
            line: 153,
            column: 51
          }
        },
        "61": {
          start: {
            line: 155,
            column: 4
          },
          end: {
            line: 155,
            column: 10
          }
        },
        "62": {
          start: {
            line: 158,
            column: 14
          },
          end: {
            line: 158,
            column: 89
          }
        },
        "63": {
          start: {
            line: 159,
            column: 14
          },
          end: {
            line: 159,
            column: 123
          }
        },
        "64": {
          start: {
            line: 161,
            column: 2
          },
          end: {
            line: 161,
            column: 53
          }
        },
        "65": {
          start: {
            line: 162,
            column: 2
          },
          end: {
            line: 162,
            column: 38
          }
        },
        "66": {
          start: {
            line: 163,
            column: 2
          },
          end: {
            line: 163,
            column: 20
          }
        },
        "67": {
          start: {
            line: 164,
            column: 2
          },
          end: {
            line: 164,
            column: 19
          }
        },
        "68": {
          start: {
            line: 165,
            column: 2
          },
          end: {
            line: 165,
            column: 20
          }
        },
        "69": {
          start: {
            line: 167,
            column: 2
          },
          end: {
            line: 167,
            column: 53
          }
        },
        "70": {
          start: {
            line: 171,
            column: 13
          },
          end: {
            line: 171,
            column: 72
          }
        },
        "71": {
          start: {
            line: 173,
            column: 2
          },
          end: {
            line: 175,
            column: 3
          }
        },
        "72": {
          start: {
            line: 174,
            column: 4
          },
          end: {
            line: 174,
            column: 10
          }
        },
        "73": {
          start: {
            line: 177,
            column: 2
          },
          end: {
            line: 177,
            column: 73
          }
        },
        "74": {
          start: {
            line: 178,
            column: 2
          },
          end: {
            line: 178,
            column: 39
          }
        },
        "75": {
          start: {
            line: 182,
            column: 28
          },
          end: {
            line: 182,
            column: 51
          }
        },
        "76": {
          start: {
            line: 184,
            column: 2
          },
          end: {
            line: 191,
            column: 6
          }
        },
        "77": {
          start: {
            line: 186,
            column: 6
          },
          end: {
            line: 190,
            column: 7
          }
        },
        "78": {
          start: {
            line: 187,
            column: 22
          },
          end: {
            line: 187,
            column: 51
          }
        },
        "79": {
          start: {
            line: 189,
            column: 8
          },
          end: {
            line: 189,
            column: 98
          }
        },
        "80": {
          start: {
            line: 194,
            column: 21
          },
          end: {
            line: 310,
            column: 1
          }
        },
        "81": {
          start: {
            line: 196,
            column: 4
          },
          end: {
            line: 196,
            column: 60
          }
        },
        "82": {
          start: {
            line: 200,
            column: 4
          },
          end: {
            line: 200,
            column: 59
          }
        },
        "83": {
          start: {
            line: 204,
            column: 4
          },
          end: {
            line: 206,
            column: 5
          }
        },
        "84": {
          start: {
            line: 205,
            column: 6
          },
          end: {
            line: 205,
            column: 12
          }
        },
        "85": {
          start: {
            line: 208,
            column: 53
          },
          end: {
            line: 208,
            column: 110
          }
        },
        "86": {
          start: {
            line: 209,
            column: 24
          },
          end: {
            line: 209,
            column: 55
          }
        },
        "87": {
          start: {
            line: 210,
            column: 19
          },
          end: {
            line: 210,
            column: 36
          }
        },
        "88": {
          start: {
            line: 211,
            column: 24
          },
          end: {
            line: 211,
            column: 59
          }
        },
        "89": {
          start: {
            line: 213,
            column: 4
          },
          end: {
            line: 221,
            column: 5
          }
        },
        "90": {
          start: {
            line: 215,
            column: 6
          },
          end: {
            line: 217,
            column: 7
          }
        },
        "91": {
          start: {
            line: 216,
            column: 8
          },
          end: {
            line: 216,
            column: 14
          }
        },
        "92": {
          start: {
            line: 219,
            column: 6
          },
          end: {
            line: 219,
            column: 93
          }
        },
        "93": {
          start: {
            line: 220,
            column: 6
          },
          end: {
            line: 220,
            column: 12
          }
        },
        "94": {
          start: {
            line: 223,
            column: 4
          },
          end: {
            line: 228,
            column: 5
          }
        },
        "95": {
          start: {
            line: 224,
            column: 6
          },
          end: {
            line: 227,
            column: 10
          }
        },
        "96": {
          start: {
            line: 226,
            column: 10
          },
          end: {
            line: 226,
            column: 94
          }
        },
        "97": {
          start: {
            line: 230,
            column: 30
          },
          end: {
            line: 230,
            column: 53
          }
        },
        "98": {
          start: {
            line: 231,
            column: 4
          },
          end: {
            line: 240,
            column: 8
          }
        },
        "99": {
          start: {
            line: 233,
            column: 27
          },
          end: {
            line: 233,
            column: 65
          }
        },
        "100": {
          start: {
            line: 235,
            column: 8
          },
          end: {
            line: 239,
            column: 9
          }
        },
        "101": {
          start: {
            line: 236,
            column: 24
          },
          end: {
            line: 236,
            column: 54
          }
        },
        "102": {
          start: {
            line: 238,
            column: 10
          },
          end: {
            line: 238,
            column: 100
          }
        },
        "103": {
          start: {
            line: 244,
            column: 4
          },
          end: {
            line: 246,
            column: 5
          }
        },
        "104": {
          start: {
            line: 245,
            column: 6
          },
          end: {
            line: 245,
            column: 17
          }
        },
        "105": {
          start: {
            line: 248,
            column: 24
          },
          end: {
            line: 248,
            column: 57
          }
        },
        "106": {
          start: {
            line: 249,
            column: 24
          },
          end: {
            line: 249,
            column: 43
          }
        },
        "107": {
          start: {
            line: 250,
            column: 24
          },
          end: {
            line: 250,
            column: 60
          }
        },
        "108": {
          start: {
            line: 251,
            column: 14
          },
          end: {
            line: 251,
            column: 25
          }
        },
        "109": {
          start: {
            line: 254,
            column: 18
          },
          end: {
            line: 254,
            column: 22
          }
        },
        "110": {
          start: {
            line: 255,
            column: 25
          },
          end: {
            line: 255,
            column: 29
          }
        },
        "111": {
          start: {
            line: 256,
            column: 27
          },
          end: {
            line: 256,
            column: 32
          }
        },
        "112": {
          start: {
            line: 257,
            column: 14
          },
          end: {
            line: 257,
            column: 18
          }
        },
        "113": {
          start: {
            line: 259,
            column: 4
          },
          end: {
            line: 266,
            column: 5
          }
        },
        "114": {
          start: {
            line: 260,
            column: 6
          },
          end: {
            line: 260,
            column: 40
          }
        },
        "115": {
          start: {
            line: 262,
            column: 6
          },
          end: {
            line: 262,
            column: 37
          }
        },
        "116": {
          start: {
            line: 263,
            column: 6
          },
          end: {
            line: 263,
            column: 51
          }
        },
        "117": {
          start: {
            line: 264,
            column: 6
          },
          end: {
            line: 264,
            column: 67
          }
        },
        "118": {
          start: {
            line: 265,
            column: 6
          },
          end: {
            line: 265,
            column: 57
          }
        },
        "119": {
          start: {
            line: 268,
            column: 4
          },
          end: {
            line: 276,
            column: 5
          }
        },
        "120": {
          start: {
            line: 269,
            column: 6
          },
          end: {
            line: 269,
            column: 46
          }
        },
        "121": {
          start: {
            line: 270,
            column: 6
          },
          end: {
            line: 270,
            column: 45
          }
        },
        "122": {
          start: {
            line: 272,
            column: 6
          },
          end: {
            line: 275,
            column: 8
          }
        },
        "123": {
          start: {
            line: 279,
            column: 4
          },
          end: {
            line: 288,
            column: 5
          }
        },
        "124": {
          start: {
            line: 280,
            column: 6
          },
          end: {
            line: 287,
            column: 10
          }
        },
        "125": {
          start: {
            line: 282,
            column: 10
          },
          end: {
            line: 286,
            column: 12
          }
        },
        "126": {
          start: {
            line: 284,
            column: 14
          },
          end: {
            line: 284,
            column: 30
          }
        },
        "127": {
          start: {
            line: 290,
            column: 4
          },
          end: {
            line: 298,
            column: 5
          }
        },
        "128": {
          start: {
            line: 291,
            column: 6
          },
          end: {
            line: 291,
            column: 26
          }
        },
        "129": {
          start: {
            line: 293,
            column: 6
          },
          end: {
            line: 297,
            column: 7
          }
        },
        "130": {
          start: {
            line: 294,
            column: 8
          },
          end: {
            line: 296,
            column: 10
          }
        },
        "131": {
          start: {
            line: 295,
            column: 21
          },
          end: {
            line: 295,
            column: 25
          }
        },
        "132": {
          start: {
            line: 300,
            column: 4
          },
          end: {
            line: 302,
            column: 5
          }
        },
        "133": {
          start: {
            line: 301,
            column: 6
          },
          end: {
            line: 301,
            column: 32
          }
        },
        "134": {
          start: {
            line: 304,
            column: 4
          },
          end: {
            line: 306,
            column: 5
          }
        },
        "135": {
          start: {
            line: 305,
            column: 6
          },
          end: {
            line: 305,
            column: 34
          }
        },
        "136": {
          start: {
            line: 308,
            column: 4
          },
          end: {
            line: 308,
            column: 14
          }
        }
      },
      fnMap: {
        "0": {
          name: "getUidEvent",
          decl: {
            start: {
              line: 47,
              column: 9
            },
            end: {
              line: 47,
              column: 20
            }
          },
          loc: {
            start: {
              line: 47,
              column: 35
            },
            end: {
              line: 49,
              column: 1
            }
          },
          line: 47
        },
        "1": {
          name: "getEvent",
          decl: {
            start: {
              line: 51,
              column: 9
            },
            end: {
              line: 51,
              column: 17
            }
          },
          loc: {
            start: {
              line: 51,
              column: 27
            },
            end: {
              line: 56,
              column: 1
            }
          },
          line: 51
        },
        "2": {
          name: "fixEvent",
          decl: {
            start: {
              line: 58,
              column: 9
            },
            end: {
              line: 58,
              column: 17
            }
          },
          loc: {
            start: {
              line: 58,
              column: 34
            },
            end: {
              line: 65,
              column: 1
            }
          },
          line: 58
        },
        "3": {
          name: "bootstrapHandler",
          decl: {
            start: {
              line: 67,
              column: 9
            },
            end: {
              line: 67,
              column: 25
            }
          },
          loc: {
            start: {
              line: 67,
              column: 39
            },
            end: {
              line: 76,
              column: 1
            }
          },
          line: 67
        },
        "4": {
          name: "handler",
          decl: {
            start: {
              line: 68,
              column: 18
            },
            end: {
              line: 68,
              column: 25
            }
          },
          loc: {
            start: {
              line: 68,
              column: 33
            },
            end: {
              line: 75,
              column: 3
            }
          },
          line: 68
        },
        "5": {
          name: "bootstrapDelegationHandler",
          decl: {
            start: {
              line: 78,
              column: 9
            },
            end: {
              line: 78,
              column: 35
            }
          },
          loc: {
            start: {
              line: 78,
              column: 59
            },
            end: {
              line: 99,
              column: 1
            }
          },
          line: 78
        },
        "6": {
          name: "handler",
          decl: {
            start: {
              line: 79,
              column: 18
            },
            end: {
              line: 79,
              column: 25
            }
          },
          loc: {
            start: {
              line: 79,
              column: 33
            },
            end: {
              line: 98,
              column: 3
            }
          },
          line: 79
        },
        "7": {
          name: "findHandler",
          decl: {
            start: {
              line: 101,
              column: 9
            },
            end: {
              line: 101,
              column: 20
            }
          },
          loc: {
            start: {
              line: 101,
              column: 65
            },
            end: {
              line: 114,
              column: 1
            }
          },
          line: 101
        },
        "8": {
          name: "normalizeParams",
          decl: {
            start: {
              line: 116,
              column: 9
            },
            end: {
              line: 116,
              column: 24
            }
          },
          loc: {
            start: {
              line: 116,
              column: 67
            },
            end: {
              line: 135,
              column: 1
            }
          },
          line: 116
        },
        "9": {
          name: "addHandler",
          decl: {
            start: {
              line: 137,
              column: 9
            },
            end: {
              line: 137,
              column: 19
            }
          },
          loc: {
            start: {
              line: 137,
              column: 79
            },
            end: {
              line: 168,
              column: 1
            }
          },
          line: 137
        },
        "10": {
          name: "removeHandler",
          decl: {
            start: {
              line: 170,
              column: 9
            },
            end: {
              line: 170,
              column: 22
            }
          },
          loc: {
            start: {
              line: 170,
              column: 80
            },
            end: {
              line: 179,
              column: 1
            }
          },
          line: 170
        },
        "11": {
          name: "removeNamespacedHandlers",
          decl: {
            start: {
              line: 181,
              column: 9
            },
            end: {
              line: 181,
              column: 33
            }
          },
          loc: {
            start: {
              line: 181,
              column: 73
            },
            end: {
              line: 192,
              column: 1
            }
          },
          line: 181
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 185,
              column: 13
            },
            end: {
              line: 185,
              column: 14
            }
          },
          loc: {
            start: {
              line: 185,
              column: 29
            },
            end: {
              line: 191,
              column: 5
            }
          },
          line: 185
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 195,
              column: 2
            },
            end: {
              line: 195,
              column: 3
            }
          },
          loc: {
            start: {
              line: 195,
              column: 44
            },
            end: {
              line: 197,
              column: 3
            }
          },
          line: 195
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 199,
              column: 2
            },
            end: {
              line: 199,
              column: 3
            }
          },
          loc: {
            start: {
              line: 199,
              column: 45
            },
            end: {
              line: 201,
              column: 3
            }
          },
          line: 199
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 203,
              column: 2
            },
            end: {
              line: 203,
              column: 3
            }
          },
          loc: {
            start: {
              line: 203,
              column: 57
            },
            end: {
              line: 241,
              column: 3
            }
          },
          line: 203
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 225,
              column: 17
            },
            end: {
              line: 225,
              column: 18
            }
          },
          loc: {
            start: {
              line: 225,
              column: 35
            },
            end: {
              line: 227,
              column: 9
            }
          },
          line: 225
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 232,
              column: 15
            },
            end: {
              line: 232,
              column: 16
            }
          },
          loc: {
            start: {
              line: 232,
              column: 32
            },
            end: {
              line: 240,
              column: 7
            }
          },
          line: 232
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 243,
              column: 2
            },
            end: {
              line: 243,
              column: 3
            }
          },
          loc: {
            start: {
              line: 243,
              column: 32
            },
            end: {
              line: 309,
              column: 3
            }
          },
          line: 243
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 281,
              column: 17
            },
            end: {
              line: 281,
              column: 18
            }
          },
          loc: {
            start: {
              line: 281,
              column: 26
            },
            end: {
              line: 287,
              column: 9
            }
          },
          line: 281
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 283,
              column: 12
            },
            end: {
              line: 283,
              column: 13
            }
          },
          loc: {
            start: {
              line: 283,
              column: 18
            },
            end: {
              line: 285,
              column: 13
            }
          },
          line: 283
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 295,
              column: 15
            },
            end: {
              line: 295,
              column: 16
            }
          },
          loc: {
            start: {
              line: 295,
              column: 21
            },
            end: {
              line: 295,
              column: 25
            }
          },
          line: 295
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 48,
              column: 9
            },
            end: {
              line: 48,
              column: 73
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 48,
              column: 9
            },
            end: {
              line: 48,
              column: 12
            }
          }, {
            start: {
              line: 48,
              column: 16
            },
            end: {
              line: 48,
              column: 39
            }
          }, {
            start: {
              line: 48,
              column: 43
            },
            end: {
              line: 48,
              column: 59
            }
          }, {
            start: {
              line: 48,
              column: 63
            },
            end: {
              line: 48,
              column: 73
            }
          }],
          line: 48
        },
        "1": {
          loc: {
            start: {
              line: 55,
              column: 30
            },
            end: {
              line: 55,
              column: 54
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 55,
              column: 30
            },
            end: {
              line: 55,
              column: 48
            }
          }, {
            start: {
              line: 55,
              column: 52
            },
            end: {
              line: 55,
              column: 54
            }
          }],
          line: 55
        },
        "2": {
          loc: {
            start: {
              line: 60,
              column: 2
            },
            end: {
              line: 62,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 60,
              column: 2
            },
            end: {
              line: 62,
              column: 3
            }
          }, {
            start: {
              line: 60,
              column: 2
            },
            end: {
              line: 62,
              column: 3
            }
          }],
          line: 60
        },
        "3": {
          loc: {
            start: {
              line: 60,
              column: 6
            },
            end: {
              line: 60,
              column: 60
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 60,
              column: 6
            },
            end: {
              line: 60,
              column: 26
            }
          }, {
            start: {
              line: 60,
              column: 30
            },
            end: {
              line: 60,
              column: 60
            }
          }],
          line: 60
        },
        "4": {
          loc: {
            start: {
              line: 61,
              column: 18
            },
            end: {
              line: 61,
              column: 74
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 61,
              column: 44
            },
            end: {
              line: 61,
              column: 58
            }
          }, {
            start: {
              line: 61,
              column: 61
            },
            end: {
              line: 61,
              column: 74
            }
          }],
          line: 61
        },
        "5": {
          loc: {
            start: {
              line: 70,
              column: 4
            },
            end: {
              line: 72,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 70,
              column: 4
            },
            end: {
              line: 72,
              column: 5
            }
          }, {
            start: {
              line: 70,
              column: 4
            },
            end: {
              line: 72,
              column: 5
            }
          }],
          line: 70
        },
        "6": {
          loc: {
            start: {
              line: 82,
              column: 36
            },
            end: {
              line: 82,
              column: 61
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 82,
              column: 36
            },
            end: {
              line: 82,
              column: 42
            }
          }, {
            start: {
              line: 82,
              column: 46
            },
            end: {
              line: 82,
              column: 61
            }
          }],
          line: 82
        },
        "7": {
          loc: {
            start: {
              line: 84,
              column: 8
            },
            end: {
              line: 92,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 84,
              column: 8
            },
            end: {
              line: 92,
              column: 9
            }
          }, {
            start: {
              line: 84,
              column: 8
            },
            end: {
              line: 92,
              column: 9
            }
          }],
          line: 84
        },
        "8": {
          loc: {
            start: {
              line: 87,
              column: 10
            },
            end: {
              line: 89,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 87,
              column: 10
            },
            end: {
              line: 89,
              column: 11
            }
          }, {
            start: {
              line: 87,
              column: 10
            },
            end: {
              line: 89,
              column: 11
            }
          }],
          line: 87
        },
        "9": {
          loc: {
            start: {
              line: 101,
              column: 38
            },
            end: {
              line: 101,
              column: 63
            }
          },
          type: "default-arg",
          locations: [{
            start: {
              line: 101,
              column: 59
            },
            end: {
              line: 101,
              column: 63
            }
          }],
          line: 101
        },
        "10": {
          loc: {
            start: {
              line: 108,
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
              line: 108,
              column: 4
            },
            end: {
              line: 110,
              column: 5
            }
          }, {
            start: {
              line: 108,
              column: 4
            },
            end: {
              line: 110,
              column: 5
            }
          }],
          line: 108
        },
        "11": {
          loc: {
            start: {
              line: 108,
              column: 8
            },
            end: {
              line: 108,
              column: 92
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 108,
              column: 8
            },
            end: {
              line: 108,
              column: 41
            }
          }, {
            start: {
              line: 108,
              column: 45
            },
            end: {
              line: 108,
              column: 92
            }
          }],
          line: 108
        },
        "12": {
          loc: {
            start: {
              line: 118,
              column: 26
            },
            end: {
              line: 118,
              column: 61
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 118,
              column: 39
            },
            end: {
              line: 118,
              column: 51
            }
          }, {
            start: {
              line: 118,
              column: 54
            },
            end: {
              line: 118,
              column: 61
            }
          }],
          line: 118
        },
        "13": {
          loc: {
            start: {
              line: 124,
              column: 2
            },
            end: {
              line: 126,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 124,
              column: 2
            },
            end: {
              line: 126,
              column: 3
            }
          }, {
            start: {
              line: 124,
              column: 2
            },
            end: {
              line: 126,
              column: 3
            }
          }],
          line: 124
        },
        "14": {
          loc: {
            start: {
              line: 130,
              column: 2
            },
            end: {
              line: 132,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 130,
              column: 2
            },
            end: {
              line: 132,
              column: 3
            }
          }, {
            start: {
              line: 130,
              column: 2
            },
            end: {
              line: 132,
              column: 3
            }
          }],
          line: 130
        },
        "15": {
          loc: {
            start: {
              line: 138,
              column: 2
            },
            end: {
              line: 140,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 138,
              column: 2
            },
            end: {
              line: 140,
              column: 3
            }
          }, {
            start: {
              line: 138,
              column: 2
            },
            end: {
              line: 140,
              column: 3
            }
          }],
          line: 138
        },
        "16": {
          loc: {
            start: {
              line: 138,
              column: 6
            },
            end: {
              line: 138,
              column: 55
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 138,
              column: 6
            },
            end: {
              line: 138,
              column: 43
            }
          }, {
            start: {
              line: 138,
              column: 47
            },
            end: {
              line: 138,
              column: 55
            }
          }],
          line: 138
        },
        "17": {
          loc: {
            start: {
              line: 142,
              column: 2
            },
            end: {
              line: 145,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 142,
              column: 2
            },
            end: {
              line: 145,
              column: 3
            }
          }, {
            start: {
              line: 142,
              column: 2
            },
            end: {
              line: 145,
              column: 3
            }
          }],
          line: 142
        },
        "18": {
          loc: {
            start: {
              line: 149,
              column: 21
            },
            end: {
              line: 149,
              column: 66
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 149,
              column: 21
            },
            end: {
              line: 149,
              column: 38
            }
          }, {
            start: {
              line: 149,
              column: 43
            },
            end: {
              line: 149,
              column: 65
            }
          }],
          line: 149
        },
        "19": {
          loc: {
            start: {
              line: 150,
              column: 60
            },
            end: {
              line: 150,
              column: 87
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 150,
              column: 73
            },
            end: {
              line: 150,
              column: 80
            }
          }, {
            start: {
              line: 150,
              column: 83
            },
            end: {
              line: 150,
              column: 87
            }
          }],
          line: 150
        },
        "20": {
          loc: {
            start: {
              line: 152,
              column: 2
            },
            end: {
              line: 156,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 152,
              column: 2
            },
            end: {
              line: 156,
              column: 3
            }
          }, {
            start: {
              line: 152,
              column: 2
            },
            end: {
              line: 156,
              column: 3
            }
          }],
          line: 152
        },
        "21": {
          loc: {
            start: {
              line: 153,
              column: 24
            },
            end: {
              line: 153,
              column: 51
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 153,
              column: 24
            },
            end: {
              line: 153,
              column: 41
            }
          }, {
            start: {
              line: 153,
              column: 45
            },
            end: {
              line: 153,
              column: 51
            }
          }],
          line: 153
        },
        "22": {
          loc: {
            start: {
              line: 159,
              column: 14
            },
            end: {
              line: 159,
              column: 123
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 159,
              column: 28
            },
            end: {
              line: 159,
              column: 62
            }
          }, {
            start: {
              line: 159,
              column: 65
            },
            end: {
              line: 159,
              column: 123
            }
          }],
          line: 159
        },
        "23": {
          loc: {
            start: {
              line: 161,
              column: 26
            },
            end: {
              line: 161,
              column: 53
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 161,
              column: 39
            },
            end: {
              line: 161,
              column: 46
            }
          }, {
            start: {
              line: 161,
              column: 49
            },
            end: {
              line: 161,
              column: 53
            }
          }],
          line: 161
        },
        "24": {
          loc: {
            start: {
              line: 173,
              column: 2
            },
            end: {
              line: 175,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 173,
              column: 2
            },
            end: {
              line: 175,
              column: 3
            }
          }, {
            start: {
              line: 173,
              column: 2
            },
            end: {
              line: 175,
              column: 3
            }
          }],
          line: 173
        },
        "25": {
          loc: {
            start: {
              line: 182,
              column: 28
            },
            end: {
              line: 182,
              column: 51
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 182,
              column: 28
            },
            end: {
              line: 182,
              column: 45
            }
          }, {
            start: {
              line: 182,
              column: 49
            },
            end: {
              line: 182,
              column: 51
            }
          }],
          line: 182
        },
        "26": {
          loc: {
            start: {
              line: 186,
              column: 6
            },
            end: {
              line: 190,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 186,
              column: 6
            },
            end: {
              line: 190,
              column: 7
            }
          }, {
            start: {
              line: 186,
              column: 6
            },
            end: {
              line: 190,
              column: 7
            }
          }],
          line: 186
        },
        "27": {
          loc: {
            start: {
              line: 204,
              column: 4
            },
            end: {
              line: 206,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 204,
              column: 4
            },
            end: {
              line: 206,
              column: 5
            }
          }, {
            start: {
              line: 204,
              column: 4
            },
            end: {
              line: 206,
              column: 5
            }
          }],
          line: 204
        },
        "28": {
          loc: {
            start: {
              line: 204,
              column: 8
            },
            end: {
              line: 204,
              column: 57
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 204,
              column: 8
            },
            end: {
              line: 204,
              column: 45
            }
          }, {
            start: {
              line: 204,
              column: 49
            },
            end: {
              line: 204,
              column: 57
            }
          }],
          line: 204
        },
        "29": {
          loc: {
            start: {
              line: 213,
              column: 4
            },
            end: {
              line: 221,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 213,
              column: 4
            },
            end: {
              line: 221,
              column: 5
            }
          }, {
            start: {
              line: 213,
              column: 4
            },
            end: {
              line: 221,
              column: 5
            }
          }],
          line: 213
        },
        "30": {
          loc: {
            start: {
              line: 215,
              column: 6
            },
            end: {
              line: 217,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 215,
              column: 6
            },
            end: {
              line: 217,
              column: 7
            }
          }, {
            start: {
              line: 215,
              column: 6
            },
            end: {
              line: 217,
              column: 7
            }
          }],
          line: 215
        },
        "31": {
          loc: {
            start: {
              line: 215,
              column: 10
            },
            end: {
              line: 215,
              column: 39
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 215,
              column: 10
            },
            end: {
              line: 215,
              column: 17
            }
          }, {
            start: {
              line: 215,
              column: 21
            },
            end: {
              line: 215,
              column: 39
            }
          }],
          line: 215
        },
        "32": {
          loc: {
            start: {
              line: 219,
              column: 65
            },
            end: {
              line: 219,
              column: 92
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 219,
              column: 78
            },
            end: {
              line: 219,
              column: 85
            }
          }, {
            start: {
              line: 219,
              column: 88
            },
            end: {
              line: 219,
              column: 92
            }
          }],
          line: 219
        },
        "33": {
          loc: {
            start: {
              line: 223,
              column: 4
            },
            end: {
              line: 228,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 223,
              column: 4
            },
            end: {
              line: 228,
              column: 5
            }
          }, {
            start: {
              line: 223,
              column: 4
            },
            end: {
              line: 228,
              column: 5
            }
          }],
          line: 223
        },
        "34": {
          loc: {
            start: {
              line: 230,
              column: 30
            },
            end: {
              line: 230,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 230,
              column: 30
            },
            end: {
              line: 230,
              column: 47
            }
          }, {
            start: {
              line: 230,
              column: 51
            },
            end: {
              line: 230,
              column: 53
            }
          }],
          line: 230
        },
        "35": {
          loc: {
            start: {
              line: 235,
              column: 8
            },
            end: {
              line: 239,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 235,
              column: 8
            },
            end: {
              line: 239,
              column: 9
            }
          }, {
            start: {
              line: 235,
              column: 8
            },
            end: {
              line: 239,
              column: 9
            }
          }],
          line: 235
        },
        "36": {
          loc: {
            start: {
              line: 235,
              column: 12
            },
            end: {
              line: 235,
              column: 70
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 235,
              column: 12
            },
            end: {
              line: 235,
              column: 24
            }
          }, {
            start: {
              line: 235,
              column: 28
            },
            end: {
              line: 235,
              column: 70
            }
          }],
          line: 235
        },
        "37": {
          loc: {
            start: {
              line: 244,
              column: 4
            },
            end: {
              line: 246,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 244,
              column: 4
            },
            end: {
              line: 246,
              column: 5
            }
          }, {
            start: {
              line: 244,
              column: 4
            },
            end: {
              line: 246,
              column: 5
            }
          }],
          line: 244
        },
        "38": {
          loc: {
            start: {
              line: 244,
              column: 8
            },
            end: {
              line: 244,
              column: 45
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 244,
              column: 8
            },
            end: {
              line: 244,
              column: 33
            }
          }, {
            start: {
              line: 244,
              column: 37
            },
            end: {
              line: 244,
              column: 45
            }
          }],
          line: 244
        },
        "39": {
          loc: {
            start: {
              line: 259,
              column: 4
            },
            end: {
              line: 266,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 259,
              column: 4
            },
            end: {
              line: 266,
              column: 5
            }
          }, {
            start: {
              line: 259,
              column: 4
            },
            end: {
              line: 266,
              column: 5
            }
          }],
          line: 259
        },
        "40": {
          loc: {
            start: {
              line: 259,
              column: 8
            },
            end: {
              line: 259,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 259,
              column: 8
            },
            end: {
              line: 259,
              column: 19
            }
          }, {
            start: {
              line: 259,
              column: 23
            },
            end: {
              line: 259,
              column: 47
            }
          }],
          line: 259
        },
        "41": {
          loc: {
            start: {
              line: 268,
              column: 4
            },
            end: {
              line: 276,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 268,
              column: 4
            },
            end: {
              line: 276,
              column: 5
            }
          }, {
            start: {
              line: 268,
              column: 4
            },
            end: {
              line: 276,
              column: 5
            }
          }],
          line: 268
        },
        "42": {
          loc: {
            start: {
              line: 279,
              column: 4
            },
            end: {
              line: 288,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 279,
              column: 4
            },
            end: {
              line: 288,
              column: 5
            }
          }, {
            start: {
              line: 279,
              column: 4
            },
            end: {
              line: 288,
              column: 5
            }
          }],
          line: 279
        },
        "43": {
          loc: {
            start: {
              line: 290,
              column: 4
            },
            end: {
              line: 298,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 290,
              column: 4
            },
            end: {
              line: 298,
              column: 5
            }
          }, {
            start: {
              line: 290,
              column: 4
            },
            end: {
              line: 298,
              column: 5
            }
          }],
          line: 290
        },
        "44": {
          loc: {
            start: {
              line: 293,
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
              line: 293,
              column: 6
            },
            end: {
              line: 297,
              column: 7
            }
          }, {
            start: {
              line: 293,
              column: 6
            },
            end: {
              line: 297,
              column: 7
            }
          }],
          line: 293
        },
        "45": {
          loc: {
            start: {
              line: 300,
              column: 4
            },
            end: {
              line: 302,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 300,
              column: 4
            },
            end: {
              line: 302,
              column: 5
            }
          }, {
            start: {
              line: 300,
              column: 4
            },
            end: {
              line: 302,
              column: 5
            }
          }],
          line: 300
        },
        "46": {
          loc: {
            start: {
              line: 304,
              column: 4
            },
            end: {
              line: 306,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 304,
              column: 4
            },
            end: {
              line: 306,
              column: 5
            }
          }, {
            start: {
              line: 304,
              column: 4
            },
            end: {
              line: 306,
              column: 5
            }
          }],
          line: 304
        },
        "47": {
          loc: {
            start: {
              line: 304,
              column: 8
            },
            end: {
              line: 304,
              column: 66
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 304,
              column: 8
            },
            end: {
              line: 304,
              column: 28
            }
          }, {
            start: {
              line: 304,
              column: 32
            },
            end: {
              line: 304,
              column: 66
            }
          }],
          line: 304
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
        "136": 0
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
        "21": 0
      },
      b: {
        "0": [0, 0, 0, 0],
        "1": [0, 0],
        "2": [0, 0],
        "3": [0, 0],
        "4": [0, 0],
        "5": [0, 0],
        "6": [0, 0],
        "7": [0, 0],
        "8": [0, 0],
        "9": [0],
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
        "31": [0, 0],
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
        "47": [0, 0]
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

  var namespaceRegex = (cov_mii02e0rm.s[0]++, /[^.]*(?=\..*)\.|.*/);
  var stripNameRegex = (cov_mii02e0rm.s[1]++, /\..*/);
  var keyEventRegex = (cov_mii02e0rm.s[2]++, /^key/);
  var stripUidRegex = (cov_mii02e0rm.s[3]++, /::\d+$/);
  var eventRegistry = (cov_mii02e0rm.s[4]++, {}); // Events storage

  var uidEvent = (cov_mii02e0rm.s[5]++, 1);
  var customEvents = (cov_mii02e0rm.s[6]++, {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  });
  var nativeEvents = (cov_mii02e0rm.s[7]++, ['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
  /**
   * ------------------------------------------------------------------------
   * Private methods
   * ------------------------------------------------------------------------
   */

  function getUidEvent(element, uid) {
    cov_mii02e0rm.f[0]++;
    cov_mii02e0rm.s[8]++;
    return (cov_mii02e0rm.b[0][0]++, uid) && (cov_mii02e0rm.b[0][1]++, uid + "::" + uidEvent++) || (cov_mii02e0rm.b[0][2]++, element.uidEvent) || (cov_mii02e0rm.b[0][3]++, uidEvent++);
  }

  function getEvent(element) {
    cov_mii02e0rm.f[1]++;
    var uid = (cov_mii02e0rm.s[9]++, getUidEvent(element));
    cov_mii02e0rm.s[10]++;
    element.uidEvent = uid;
    cov_mii02e0rm.s[11]++;
    return eventRegistry[uid] = (cov_mii02e0rm.b[1][0]++, eventRegistry[uid]) || (cov_mii02e0rm.b[1][1]++, {});
  }

  function fixEvent(event, element) {
    cov_mii02e0rm.f[2]++;
    cov_mii02e0rm.s[12]++;

    // Add which for key events
    if ((cov_mii02e0rm.b[3][0]++, event.which === null) && (cov_mii02e0rm.b[3][1]++, keyEventRegex.test(event.type))) {
      cov_mii02e0rm.b[2][0]++;
      cov_mii02e0rm.s[13]++;
      event.which = event.charCode !== null ? (cov_mii02e0rm.b[4][0]++, event.charCode) : (cov_mii02e0rm.b[4][1]++, event.keyCode);
    } else {
      cov_mii02e0rm.b[2][1]++;
    }

    cov_mii02e0rm.s[14]++;
    event.delegateTarget = element;
  }

  function bootstrapHandler(element, fn) {
    cov_mii02e0rm.f[3]++;
    cov_mii02e0rm.s[15]++;
    return function handler(event) {
      cov_mii02e0rm.f[4]++;
      cov_mii02e0rm.s[16]++;
      fixEvent(event, element);
      cov_mii02e0rm.s[17]++;

      if (handler.oneOff) {
        cov_mii02e0rm.b[5][0]++;
        cov_mii02e0rm.s[18]++;
        EventHandler.off(element, event.type, fn);
      } else {
        cov_mii02e0rm.b[5][1]++;
      }

      cov_mii02e0rm.s[19]++;
      return fn.apply(element, [event]);
    };
  }

  function bootstrapDelegationHandler(element, selector, fn) {
    cov_mii02e0rm.f[5]++;
    cov_mii02e0rm.s[20]++;
    return function handler(event) {
      cov_mii02e0rm.f[6]++;
      var domElements = (cov_mii02e0rm.s[21]++, element.querySelectorAll(selector));
      cov_mii02e0rm.s[22]++;

      for (var target = (cov_mii02e0rm.s[23]++, event.target); (cov_mii02e0rm.b[6][0]++, target) && (cov_mii02e0rm.b[6][1]++, target !== this); target = target.parentNode) {
        cov_mii02e0rm.s[24]++;

        for (var i = (cov_mii02e0rm.s[25]++, domElements.length); i--;) {
          cov_mii02e0rm.s[26]++;

          if (domElements[i] === target) {
            cov_mii02e0rm.b[7][0]++;
            cov_mii02e0rm.s[27]++;
            fixEvent(event, target);
            cov_mii02e0rm.s[28]++;

            if (handler.oneOff) {
              cov_mii02e0rm.b[8][0]++;
              cov_mii02e0rm.s[29]++;
              EventHandler.off(element, event.type, fn);
            } else {
              cov_mii02e0rm.b[8][1]++;
            }

            cov_mii02e0rm.s[30]++;
            return fn.apply(target, [event]);
          } else {
            cov_mii02e0rm.b[7][1]++;
          }
        }
      } // To please ESLint


      cov_mii02e0rm.s[31]++;
      return null;
    };
  }

  function findHandler(events, handler, delegationSelector) {
    if (delegationSelector === void 0) {
      delegationSelector = (cov_mii02e0rm.b[9][0]++, null);
    }

    cov_mii02e0rm.f[7]++;
    var uidList = (cov_mii02e0rm.s[32]++, Object.keys(events));
    cov_mii02e0rm.s[33]++;

    for (var i = (cov_mii02e0rm.s[34]++, 0); i < uidList.length; i++) {
      var uid = (cov_mii02e0rm.s[35]++, uidList[i]);
      var event = (cov_mii02e0rm.s[36]++, events[uid]);
      cov_mii02e0rm.s[37]++;

      if ((cov_mii02e0rm.b[11][0]++, event.originalHandler === handler) && (cov_mii02e0rm.b[11][1]++, event.delegationSelector === delegationSelector)) {
        cov_mii02e0rm.b[10][0]++;
        cov_mii02e0rm.s[38]++;
        return events[uid];
      } else {
        cov_mii02e0rm.b[10][1]++;
      }
    }

    cov_mii02e0rm.s[39]++;
    return null;
  }

  function normalizeParams(originalTypeEvent, handler, delegationFn) {
    cov_mii02e0rm.f[8]++;
    var delegation = (cov_mii02e0rm.s[40]++, typeof handler === 'string');
    var originalHandler = (cov_mii02e0rm.s[41]++, delegation ? (cov_mii02e0rm.b[12][0]++, delegationFn) : (cov_mii02e0rm.b[12][1]++, handler)); // allow to get the native events from namespaced events ('click.bs.button' --> 'click')

    var typeEvent = (cov_mii02e0rm.s[42]++, originalTypeEvent.replace(stripNameRegex, ''));
    var custom = (cov_mii02e0rm.s[43]++, customEvents[typeEvent]);
    cov_mii02e0rm.s[44]++;

    if (custom) {
      cov_mii02e0rm.b[13][0]++;
      cov_mii02e0rm.s[45]++;
      typeEvent = custom;
    } else {
      cov_mii02e0rm.b[13][1]++;
    }

    var isNative = (cov_mii02e0rm.s[46]++, nativeEvents.indexOf(typeEvent) > -1);
    cov_mii02e0rm.s[47]++;

    if (!isNative) {
      cov_mii02e0rm.b[14][0]++;
      cov_mii02e0rm.s[48]++;
      typeEvent = originalTypeEvent;
    } else {
      cov_mii02e0rm.b[14][1]++;
    }

    cov_mii02e0rm.s[49]++;
    return [delegation, originalHandler, typeEvent];
  }

  function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
    cov_mii02e0rm.f[9]++;
    cov_mii02e0rm.s[50]++;

    if ((cov_mii02e0rm.b[16][0]++, typeof originalTypeEvent !== 'string') || (cov_mii02e0rm.b[16][1]++, !element)) {
      cov_mii02e0rm.b[15][0]++;
      cov_mii02e0rm.s[51]++;
      return;
    } else {
      cov_mii02e0rm.b[15][1]++;
    }

    cov_mii02e0rm.s[52]++;

    if (!handler) {
      cov_mii02e0rm.b[17][0]++;
      cov_mii02e0rm.s[53]++;
      handler = delegationFn;
      cov_mii02e0rm.s[54]++;
      delegationFn = null;
    } else {
      cov_mii02e0rm.b[17][1]++;
    }

    var _ref = (cov_mii02e0rm.s[55]++, normalizeParams(originalTypeEvent, handler, delegationFn)),
        delegation = _ref[0],
        originalHandler = _ref[1],
        typeEvent = _ref[2];

    var events = (cov_mii02e0rm.s[56]++, getEvent(element));
    var handlers = (cov_mii02e0rm.s[57]++, (cov_mii02e0rm.b[18][0]++, events[typeEvent]) || (cov_mii02e0rm.b[18][1]++, events[typeEvent] = {}));
    var previousFn = (cov_mii02e0rm.s[58]++, findHandler(handlers, originalHandler, delegation ? (cov_mii02e0rm.b[19][0]++, handler) : (cov_mii02e0rm.b[19][1]++, null)));
    cov_mii02e0rm.s[59]++;

    if (previousFn) {
      cov_mii02e0rm.b[20][0]++;
      cov_mii02e0rm.s[60]++;
      previousFn.oneOff = (cov_mii02e0rm.b[21][0]++, previousFn.oneOff) && (cov_mii02e0rm.b[21][1]++, oneOff);
      cov_mii02e0rm.s[61]++;
      return;
    } else {
      cov_mii02e0rm.b[20][1]++;
    }

    var uid = (cov_mii02e0rm.s[62]++, getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, '')));
    var fn = (cov_mii02e0rm.s[63]++, !delegation ? (cov_mii02e0rm.b[22][0]++, bootstrapHandler(element, handler)) : (cov_mii02e0rm.b[22][1]++, bootstrapDelegationHandler(element, handler, delegationFn)));
    cov_mii02e0rm.s[64]++;
    fn.delegationSelector = delegation ? (cov_mii02e0rm.b[23][0]++, handler) : (cov_mii02e0rm.b[23][1]++, null);
    cov_mii02e0rm.s[65]++;
    fn.originalHandler = originalHandler;
    cov_mii02e0rm.s[66]++;
    fn.oneOff = oneOff;
    cov_mii02e0rm.s[67]++;
    fn.uidEvent = uid;
    cov_mii02e0rm.s[68]++;
    handlers[uid] = fn;
    cov_mii02e0rm.s[69]++;
    element.addEventListener(typeEvent, fn, delegation);
  }

  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    cov_mii02e0rm.f[10]++;
    var fn = (cov_mii02e0rm.s[70]++, findHandler(events[typeEvent], handler, delegationSelector));
    cov_mii02e0rm.s[71]++;

    if (fn === null) {
      cov_mii02e0rm.b[24][0]++;
      cov_mii02e0rm.s[72]++;
      return;
    } else {
      cov_mii02e0rm.b[24][1]++;
    }

    cov_mii02e0rm.s[73]++;
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    cov_mii02e0rm.s[74]++;
    delete events[typeEvent][fn.uidEvent];
  }

  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    cov_mii02e0rm.f[11]++;
    var storeElementEvent = (cov_mii02e0rm.s[75]++, (cov_mii02e0rm.b[25][0]++, events[typeEvent]) || (cov_mii02e0rm.b[25][1]++, {}));
    cov_mii02e0rm.s[76]++;
    Object.keys(storeElementEvent).forEach(function (handlerKey) {
      cov_mii02e0rm.f[12]++;
      cov_mii02e0rm.s[77]++;

      if (handlerKey.indexOf(namespace) > -1) {
        cov_mii02e0rm.b[26][0]++;
        var event = (cov_mii02e0rm.s[78]++, storeElementEvent[handlerKey]);
        cov_mii02e0rm.s[79]++;
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      } else {
        cov_mii02e0rm.b[26][1]++;
      }
    });
  }

  var EventHandler = (cov_mii02e0rm.s[80]++, {
    on: function on(element, event, handler, delegationFn) {
      cov_mii02e0rm.f[13]++;
      cov_mii02e0rm.s[81]++;
      addHandler(element, event, handler, delegationFn, false);
    },
    one: function one(element, event, handler, delegationFn) {
      cov_mii02e0rm.f[14]++;
      cov_mii02e0rm.s[82]++;
      addHandler(element, event, handler, delegationFn, true);
    },
    off: function off(element, originalTypeEvent, handler, delegationFn) {
      cov_mii02e0rm.f[15]++;
      cov_mii02e0rm.s[83]++;

      if ((cov_mii02e0rm.b[28][0]++, typeof originalTypeEvent !== 'string') || (cov_mii02e0rm.b[28][1]++, !element)) {
        cov_mii02e0rm.b[27][0]++;
        cov_mii02e0rm.s[84]++;
        return;
      } else {
        cov_mii02e0rm.b[27][1]++;
      }

      var _ref2 = (cov_mii02e0rm.s[85]++, normalizeParams(originalTypeEvent, handler, delegationFn)),
          delegation = _ref2[0],
          originalHandler = _ref2[1],
          typeEvent = _ref2[2];

      var inNamespace = (cov_mii02e0rm.s[86]++, typeEvent !== originalTypeEvent);
      var events = (cov_mii02e0rm.s[87]++, getEvent(element));
      var isNamespace = (cov_mii02e0rm.s[88]++, originalTypeEvent.charAt(0) === '.');
      cov_mii02e0rm.s[89]++;

      if (typeof originalHandler !== 'undefined') {
        cov_mii02e0rm.b[29][0]++;
        cov_mii02e0rm.s[90]++;

        // Simplest case: handler is passed, remove that listener ONLY.
        if ((cov_mii02e0rm.b[31][0]++, !events) || (cov_mii02e0rm.b[31][1]++, !events[typeEvent])) {
          cov_mii02e0rm.b[30][0]++;
          cov_mii02e0rm.s[91]++;
          return;
        } else {
          cov_mii02e0rm.b[30][1]++;
        }

        cov_mii02e0rm.s[92]++;
        removeHandler(element, events, typeEvent, originalHandler, delegation ? (cov_mii02e0rm.b[32][0]++, handler) : (cov_mii02e0rm.b[32][1]++, null));
        cov_mii02e0rm.s[93]++;
        return;
      } else {
        cov_mii02e0rm.b[29][1]++;
      }

      cov_mii02e0rm.s[94]++;

      if (isNamespace) {
        cov_mii02e0rm.b[33][0]++;
        cov_mii02e0rm.s[95]++;
        Object.keys(events).forEach(function (elementEvent) {
          cov_mii02e0rm.f[16]++;
          cov_mii02e0rm.s[96]++;
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.substr(1));
        });
      } else {
        cov_mii02e0rm.b[33][1]++;
      }

      var storeElementEvent = (cov_mii02e0rm.s[97]++, (cov_mii02e0rm.b[34][0]++, events[typeEvent]) || (cov_mii02e0rm.b[34][1]++, {}));
      cov_mii02e0rm.s[98]++;
      Object.keys(storeElementEvent).forEach(function (keyHandlers) {
        cov_mii02e0rm.f[17]++;
        var handlerKey = (cov_mii02e0rm.s[99]++, keyHandlers.replace(stripUidRegex, ''));
        cov_mii02e0rm.s[100]++;

        if ((cov_mii02e0rm.b[36][0]++, !inNamespace) || (cov_mii02e0rm.b[36][1]++, originalTypeEvent.indexOf(handlerKey) > -1)) {
          cov_mii02e0rm.b[35][0]++;
          var event = (cov_mii02e0rm.s[101]++, storeElementEvent[keyHandlers]);
          cov_mii02e0rm.s[102]++;
          removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        } else {
          cov_mii02e0rm.b[35][1]++;
        }
      });
    },
    trigger: function trigger(element, event, args) {
      cov_mii02e0rm.f[18]++;
      cov_mii02e0rm.s[103]++;

      if ((cov_mii02e0rm.b[38][0]++, typeof event !== 'string') || (cov_mii02e0rm.b[38][1]++, !element)) {
        cov_mii02e0rm.b[37][0]++;
        cov_mii02e0rm.s[104]++;
        return null;
      } else {
        cov_mii02e0rm.b[37][1]++;
      }

      var typeEvent = (cov_mii02e0rm.s[105]++, event.replace(stripNameRegex, ''));
      var inNamespace = (cov_mii02e0rm.s[106]++, event !== typeEvent);
      var isNative = (cov_mii02e0rm.s[107]++, nativeEvents.indexOf(typeEvent) > -1);
      var $ = (cov_mii02e0rm.s[108]++, Util.jQuery);
      var jQueryEvent;
      var bubbles = (cov_mii02e0rm.s[109]++, true);
      var nativeDispatch = (cov_mii02e0rm.s[110]++, true);
      var defaultPrevented = (cov_mii02e0rm.s[111]++, false);
      var evt = (cov_mii02e0rm.s[112]++, null);
      cov_mii02e0rm.s[113]++;

      if ((cov_mii02e0rm.b[40][0]++, inNamespace) && (cov_mii02e0rm.b[40][1]++, typeof $ !== 'undefined')) {
        cov_mii02e0rm.b[39][0]++;
        cov_mii02e0rm.s[114]++;
        jQueryEvent = $.Event(event, args);
        cov_mii02e0rm.s[115]++;
        $(element).trigger(jQueryEvent);
        cov_mii02e0rm.s[116]++;
        bubbles = !jQueryEvent.isPropagationStopped();
        cov_mii02e0rm.s[117]++;
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        cov_mii02e0rm.s[118]++;
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      } else {
        cov_mii02e0rm.b[39][1]++;
      }

      cov_mii02e0rm.s[119]++;

      if (isNative) {
        cov_mii02e0rm.b[41][0]++;
        cov_mii02e0rm.s[120]++;
        evt = document.createEvent('HTMLEvents');
        cov_mii02e0rm.s[121]++;
        evt.initEvent(typeEvent, bubbles, true);
      } else {
        cov_mii02e0rm.b[41][1]++;
        cov_mii02e0rm.s[122]++;
        evt = new CustomEvent(event, {
          bubbles: bubbles,
          cancelable: true
        });
      } // merge custom informations in our event


      cov_mii02e0rm.s[123]++;

      if (typeof args !== 'undefined') {
        cov_mii02e0rm.b[42][0]++;
        cov_mii02e0rm.s[124]++;
        Object.keys(args).forEach(function (key) {
          cov_mii02e0rm.f[19]++;
          cov_mii02e0rm.s[125]++;
          Object.defineProperty(evt, key, {
            get: function get() {
              cov_mii02e0rm.f[20]++;
              cov_mii02e0rm.s[126]++;
              return args[key];
            }
          });
        });
      } else {
        cov_mii02e0rm.b[42][1]++;
      }

      cov_mii02e0rm.s[127]++;

      if (defaultPrevented) {
        cov_mii02e0rm.b[43][0]++;
        cov_mii02e0rm.s[128]++;
        evt.preventDefault();
        cov_mii02e0rm.s[129]++;

        if (!Polyfill.defaultPreventedPreservedOnDispatch) {
          cov_mii02e0rm.b[44][0]++;
          cov_mii02e0rm.s[130]++;
          Object.defineProperty(evt, 'defaultPrevented', {
            get: function get() {
              cov_mii02e0rm.f[21]++;
              cov_mii02e0rm.s[131]++;
              return true;
            }
          });
        } else {
          cov_mii02e0rm.b[44][1]++;
        }
      } else {
        cov_mii02e0rm.b[43][1]++;
      }

      cov_mii02e0rm.s[132]++;

      if (nativeDispatch) {
        cov_mii02e0rm.b[45][0]++;
        cov_mii02e0rm.s[133]++;
        element.dispatchEvent(evt);
      } else {
        cov_mii02e0rm.b[45][1]++;
      }

      cov_mii02e0rm.s[134]++;

      if ((cov_mii02e0rm.b[47][0]++, evt.defaultPrevented) && (cov_mii02e0rm.b[47][1]++, typeof jQueryEvent !== 'undefined')) {
        cov_mii02e0rm.b[46][0]++;
        cov_mii02e0rm.s[135]++;
        jQueryEvent.preventDefault();
      } else {
        cov_mii02e0rm.b[46][1]++;
      }

      cov_mii02e0rm.s[136]++;
      return evt;
    }
  });

  return EventHandler;

}));
//# sourceMappingURL=eventhandler.js.map

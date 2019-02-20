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

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): dom/selectorEngine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var findFn = Polyfill.find;
  var _findOne = Polyfill.findOne;
  var NODE_TEXT = 3;
  var SelectorEngine = {
    matches: function matches(element, selector) {
      return element.matches(selector);
    },
    find: function find(selector, element) {
      if (element === void 0) {
        element = document.documentElement;
      }

      if (typeof selector !== 'string') {
        return null;
      }

      return findFn.call(element, selector);
    },
    findOne: function findOne(selector, element) {
      if (element === void 0) {
        element = document.documentElement;
      }

      if (typeof selector !== 'string') {
        return null;
      }

      return _findOne.call(element, selector);
    },
    children: function children(element, selector) {
      var _this = this;

      if (typeof selector !== 'string') {
        return null;
      }

      var children = Util.makeArray(element.children);
      return children.filter(function (child) {
        return _this.matches(child, selector);
      });
    },
    parents: function parents(element, selector) {
      if (typeof selector !== 'string') {
        return null;
      }

      var parents = [];
      var ancestor = element.parentNode;

      while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
        if (this.matches(ancestor, selector)) {
          parents.push(ancestor);
        }

        ancestor = ancestor.parentNode;
      }

      return parents;
    },
    closest: function closest(element, selector) {
      if (typeof selector !== 'string') {
        return null;
      }

      return element.closest(selector);
    },
    prev: function prev(element, selector) {
      if (typeof selector !== 'string') {
        return null;
      }

      var siblings = [];
      var previous = element.previousSibling;

      while (previous && previous.nodeType === Node.ELEMENT_NODE && previous.nodeType !== NODE_TEXT) {
        if (this.matches(previous, selector)) {
          siblings.push(previous);
        }

        previous = previous.previousSibling;
      }

      return siblings;
    }
  };

  return SelectorEngine;

}));
//# sourceMappingURL=selectorengine.js.map

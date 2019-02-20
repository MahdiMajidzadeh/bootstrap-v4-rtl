/*!
  * Bootstrap polyfill.js v4.3.1-0 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2019 Mahdi Majidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('../util.js')) :
  typeof define === 'function' && define.amd ? define(['../util.js'], factory) :
  (global = global || self, global.Polyfill = factory(global.Util));
}(this, function (Util) { 'use strict';

  Util = Util && Util.hasOwnProperty('default') ? Util['default'] : Util;

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): dom/polyfill.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /* istanbul ignore next */

  var Polyfill = function () {
    // MSEdge resets defaultPrevented flag upon dispatchEvent call if at least one listener is attached
    var defaultPreventedPreservedOnDispatch = function () {
      var e = new CustomEvent('Bootstrap', {
        cancelable: true
      });
      var element = document.createElement('div');
      element.addEventListener('Bootstrap', function () {
        return null;
      });
      e.preventDefault();
      element.dispatchEvent(e);
      return e.defaultPrevented;
    }();

    var find = Element.prototype.querySelectorAll;
    var findOne = Element.prototype.querySelector;
    var scopeSelectorRegex = /:scope\b/;

    var supportScopeQuery = function () {
      var element = document.createElement('div');

      try {
        element.querySelectorAll(':scope *');
      } catch (e) {
        return false;
      }

      return true;
    }();

    if (!supportScopeQuery) {
      find = function find(selector) {
        if (!scopeSelectorRegex.test(selector)) {
          return this.querySelectorAll(selector);
        }

        var hasId = Boolean(this.id);

        if (!hasId) {
          this.id = Util.getUID('scope');
        }

        var nodeList = null;

        try {
          selector = selector.replace(scopeSelectorRegex, "#" + this.id);
          nodeList = this.querySelectorAll(selector);
        } finally {
          if (!hasId) {
            this.removeAttribute('id');
          }
        }

        return nodeList;
      };

      findOne = function findOne(selector) {
        if (!scopeSelectorRegex.test(selector)) {
          return this.querySelector(selector);
        }

        var matches = find.call(this, selector);

        if (typeof matches[0] !== 'undefined') {
          return matches[0];
        }

        return null;
      };
    }

    return {
      defaultPreventedPreservedOnDispatch: defaultPreventedPreservedOnDispatch,
      find: find,
      findOne: findOne
    };
  }();

  return Polyfill;

}));
//# sourceMappingURL=polyfill.js.map

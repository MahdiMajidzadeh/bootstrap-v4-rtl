/*!
  * Bootstrap alert.js v4.6.2-2 (https://github.com/MahdiMajidzadeh/bootstrap-v4-rtl)
  * Copyright 2011-2025 https://github.com/MahdiMajidzadeh
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Alert = factory(global.jQuery, global.Util));
})(this, (function ($, Util) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
  var Util__default = /*#__PURE__*/_interopDefaultLegacy(Util);

  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }

  /**
   * Constants
   */

  var NAME = 'alert';
  var VERSION = '4.6.2';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $__default["default"].fn[NAME];
  var CLASS_NAME_ALERT = 'alert';
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_SHOW = 'show';
  var EVENT_CLOSE = "close" + EVENT_KEY;
  var EVENT_CLOSED = "closed" + EVENT_KEY;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var SELECTOR_DISMISS = '[data-dismiss="alert"]';

  /**
   * Class definition
   */
  var Alert = /*#__PURE__*/function () {
    function Alert(element) {
      this._element = element;
    }

    // Getters
    var _proto = Alert.prototype;
    // Public
    _proto.close = function close(element) {
      var rootElement = this._element;
      if (element) {
        rootElement = this._getRootElement(element);
      }
      var customEvent = this._triggerCloseEvent(rootElement);
      if (customEvent.isDefaultPrevented()) {
        return;
      }
      this._removeElement(rootElement);
    };
    _proto.dispose = function dispose() {
      $__default["default"].removeData(this._element, DATA_KEY);
      this._element = null;
    }

    // Private
    ;
    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util__default["default"].getSelectorFromElement(element);
      var parent = false;
      if (selector) {
        parent = document.querySelector(selector);
      }
      if (!parent) {
        parent = $__default["default"](element).closest("." + CLASS_NAME_ALERT)[0];
      }
      return parent;
    };
    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $__default["default"].Event(EVENT_CLOSE);
      $__default["default"](element).trigger(closeEvent);
      return closeEvent;
    };
    _proto._removeElement = function _removeElement(element) {
      var _this = this;
      $__default["default"](element).removeClass(CLASS_NAME_SHOW);
      if (!$__default["default"](element).hasClass(CLASS_NAME_FADE)) {
        this._destroyElement(element);
        return;
      }
      var transitionDuration = Util__default["default"].getTransitionDurationFromElement(element);
      $__default["default"](element).one(Util__default["default"].TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };
    _proto._destroyElement = function _destroyElement(element) {
      $__default["default"](element).detach().trigger(EVENT_CLOSED).remove();
    }

    // Static
    ;
    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default["default"](this);
        var data = $element.data(DATA_KEY);
        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }
        if (config === 'close') {
          data[config](this);
        }
      });
    };
    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }
        alertInstance.close(this);
      };
    };
    return _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);
  }();
  /**
   * Data API implementation
   */
  $__default["default"](document).on(EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));

  /**
   * jQuery
   */

  $__default["default"].fn[NAME] = Alert._jQueryInterface;
  $__default["default"].fn[NAME].Constructor = Alert;
  $__default["default"].fn[NAME].noConflict = function () {
    $__default["default"].fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  return Alert;

}));
//# sourceMappingURL=alert.js.map

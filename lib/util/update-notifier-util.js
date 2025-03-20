"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateNotifierUtil = void 0;
var _updateNotifier = _interopRequireDefault(require("update-notifier"));
var _packageJson = _interopRequireDefault(require(".."));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var updateNotifierUtil = exports.updateNotifierUtil = {
  check: function check() {
    (0, _updateNotifier["default"])({
      pkg: _packageJson["default"]
    }).notify();
  }
};
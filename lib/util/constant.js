"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constant = void 0;
var _package = _interopRequireDefault(require("../../package.json"));
var _pattern = require("@beecode/msh-util/singleton/pattern");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var constant = exports.constant = (0, _pattern.singletonPattern)(function () {
  return Object.freeze({
    projectName: _package["default"].name,
    projectVersion: _package["default"].version
  });
});
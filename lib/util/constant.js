"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constant = void 0;
var _pattern = require("@beecode/msh-util/singleton/pattern");
var _packageJson = _interopRequireDefault(require(".."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// @ts-expect-error

var constant = exports.constant = (0, _pattern.singletonPattern)(function () {
  return Object.freeze({
    projectName: _packageJson["default"].name,
    projectVersion: _packageJson["default"].version
  });
});
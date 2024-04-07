"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constant = void 0;
var _pattern = require("@beecode/msh-util/singleton/pattern");
var packageJson = require('../../package.json'); // eslint-disable-line

var constant = exports.constant = (0, _pattern.singletonPattern)(function () {
  return Object.freeze({
    projectName: packageJson.name,
    projectVersion: packageJson.version
  });
});
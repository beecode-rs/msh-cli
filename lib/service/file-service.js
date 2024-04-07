"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fileService = void 0;
var _mz = require("mz");
var fileService = exports.fileService = {
  writeToFileSync: function writeToFileSync(params) {
    var filePath = params.filePath,
      data = params.data;
    _mz.fs.writeFileSync(filePath, data, 'utf8');
  }
};
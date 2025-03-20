"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objectUtil = void 0;
var objectUtil = exports.objectUtil = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sortObjectByKeys: function sortObjectByKeys(unordered) {
    return Object.keys(unordered).sort().reduce(function (obj, key) {
      // @ts-expect-error
      obj[key] = unordered[key];
      return obj;
    }, {});
  }
};
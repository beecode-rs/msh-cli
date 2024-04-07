"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shellService = void 0;
var _chalk = _interopRequireDefault(require("chalk"));
var _shellDal = require("../dal/shell-dal.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// TODO refactor object and use class instead
var shellService = exports.shellService = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _joinResults: function _joinResults(results) {
    return results.reduce(function (agg, cur) {
      agg = Object.assign(agg, cur);
      return agg;
    }, {});
  },
  cd: _shellDal.shellDal.cd,
  exec: _shellDal.shellDal.exec,
  print: _shellDal.shellDal.print,
  printError: function printError(message) {
    _shellDal.shellDal.print(_chalk["default"].red(message));
  },
  printStdMessage: function printStdMessage() {
    for (var _len = arguments.length, messageArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      messageArgs[_key] = arguments[_key];
    }
    var messages = shellService._joinResults(messageArgs);
    Object.entries(messages).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        _ref2$ = _ref2[1],
        stdout = _ref2$.stdout,
        stderr = _ref2$.stderr;
      var borderChar = '#';
      var borderStars = Array(name.length + 6).fill('').map(function () {
        return borderChar;
      }).join('');
      shellService.print(borderStars);
      shellService.print("".concat(borderChar, "  ").concat(name, "  ").concat(borderChar));
      shellService.print(borderStars);
      if (stdout.trim() !== '') {
        stdout.split('\n').forEach(function (msg) {
          return shellService.print(msg);
        });
      }
      if (stderr.trim() !== '') {
        stderr.split('\n').forEach(function (msg) {
          return shellService.printError(msg);
        });
      }
    });
  },
  printSuccess: function printSuccess(message) {
    _shellDal.shellDal.print(_chalk["default"].green(message));
  }
};
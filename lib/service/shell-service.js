"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shellService = void 0;
var _chalk = _interopRequireDefault(require("chalk"));
var _shellDal = require("../dal/shell-dal.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// TODO refactor object and use class instead
var shellService = exports.shellService = {
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
          shellService.print(msg);
        });
      }
      if (stderr.trim() !== '') {
        stderr.split('\n').forEach(function (msg) {
          shellService.printError(msg);
        });
      }
    });
  },
  printSuccess: function printSuccess(message) {
    _shellDal.shellDal.print(_chalk["default"].green(message));
  }
};
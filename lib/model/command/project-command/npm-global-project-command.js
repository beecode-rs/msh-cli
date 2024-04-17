"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.npmGlobalProjectCommandFactory = exports.NpmGlobalProjectCommand = void 0;
var _compareVersions = require("compare-versions");
var _fastJsonStableStringify = _interopRequireDefault(require("fast-json-stable-stringify"));
var _path = _interopRequireDefault(require("path"));
var _fileService = require("../../../service/file-service.js");
var _config = require("../../../util/config.js");
var _logger = require("../../../util/logger.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var NpmGlobalProjectCommand = exports.NpmGlobalProjectCommand = /*#__PURE__*/function () {
  function NpmGlobalProjectCommand() {
    _classCallCheck(this, NpmGlobalProjectCommand);
  }
  return _createClass(NpmGlobalProjectCommand, [{
    key: "execute",
    value: function () {
      var _execute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var depsByProject, uniquePackages, versionConflictWarningMessage, highestDependencies, highestDependenciesString;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              depsByProject = this._allDepsByProject();
              (0, _logger.logger)().debug('all dependencies all projects', depsByProject);
              uniquePackages = this._uniquePackages(depsByProject);
              (0, _logger.logger)().debug('add dependencies by package', uniquePackages);
              versionConflictWarningMessage = this._versionConflictWarningMessage(uniquePackages);
              (0, _logger.logger)().debug('version conflict warning message', versionConflictWarningMessage);
              highestDependencies = this._highestDependencies(uniquePackages);
              highestDependenciesString = JSON.stringify(highestDependencies, Object.keys(highestDependencies).sort(), 2);
              (0, _logger.logger)().debug('highest dependencies', highestDependenciesString);
              this._overrideGlobalDepsWithNewHighestDependencies(highestDependencies);
              return _context.abrupt("return", [{
                errorMessage: versionConflictWarningMessage.join('\n\n'),
                name: 'Global NPM Dependencies',
                stringResult: "Gathered dependencies \n\n".concat(highestDependenciesString)
              }]);
            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", [{
                errorMessage: _context.t0.message
              }]);
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 14]]);
      }));
      function execute() {
        return _execute.apply(this, arguments);
      }
      return execute;
    }()
  }, {
    key: "_allDepsByProject",
    value: function _allDepsByProject() {
      var _this = this;
      return (0, _config.config)().projects.map(function (project) {
        var packageJs = _this._packageJsonForProject(project);
        var projectDeps = _objectSpread(_objectSpread({}, packageJs.dependencies), packageJs.devDependencies);
        var cleanProjectDeps = _this._removeIgnoredPackages(projectDeps);
        return _defineProperty({}, project, cleanProjectDeps);
      }).reduce(function (acc, cur) {
        return Object.assign(acc, cur);
      }, {});
    }
  }, {
    key: "_removeIgnoredPackages",
    value: function _removeIgnoredPackages(dependencies) {
      var globalIgnorePackages = (0, _config.config)().npm.globalIgnorePackages;
      if (globalIgnorePackages.length === 0) {
        return dependencies;
      }
      return Object.entries(dependencies).filter(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 1),
          packageName = _ref3[0];
        return !globalIgnorePackages.includes(packageName);
      }).reduce(function (acc, _ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
          packageName = _ref5[0],
          version = _ref5[1];
        return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, packageName, version));
      }, {});
    }
  }, {
    key: "_uniquePackages",
    value: function _uniquePackages(depsByProject) {
      var result = {};
      Object.entries(depsByProject).forEach(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
          project = _ref7[0],
          deps = _ref7[1];
        Object.entries(deps).forEach(function (_ref8) {
          var _result$packageName, _pk$versionProject$ve;
          var _ref9 = _slicedToArray(_ref8, 2),
            packageName = _ref9[0],
            version = _ref9[1];
          var pk = result[packageName] = (_result$packageName = result[packageName]) !== null && _result$packageName !== void 0 ? _result$packageName : {
            versionProject: {},
            versions: []
          };
          if (!pk.versions.includes(version)) {
            pk.versions.push(version);
          }
          var pv = pk.versionProject[version] = (_pk$versionProject$ve = pk.versionProject[version]) !== null && _pk$versionProject$ve !== void 0 ? _pk$versionProject$ve : [];
          pv.push(project);
        });
      });
      return result;
    }
  }, {
    key: "_versionConflictWarningMessage",
    value: function _versionConflictWarningMessage(uniquePackages) {
      return Object.entries(uniquePackages).filter(function (_ref10) {
        var _ref11 = _slicedToArray(_ref10, 2),
          _ = _ref11[0],
          versions = _ref11[1].versions;
        return versions.length > 1;
      }).sort(function (a, b) {
        var _a = _slicedToArray(a, 1),
          pnA = _a[0];
        var _b = _slicedToArray(b, 1),
          pnB = _b[0];
        if (pnA < pnB) {
          return -1;
        }
        if (pnA > pnB) {
          return 1;
        }
        return 0;
      }).map(function (_ref12) {
        var _ref13 = _slicedToArray(_ref12, 2),
          packageName = _ref13[0],
          uniquePackInfo = _ref13[1];
        return "".concat(packageName, ": ").concat((0, _fastJsonStableStringify["default"])(uniquePackInfo.versions), "\n").concat(Object.entries(uniquePackInfo.versionProject).map(function (_ref14) {
          var _ref15 = _slicedToArray(_ref14, 2),
            v = _ref15[0],
            prjs = _ref15[1];
          return "".concat(v, ":").concat((0, _fastJsonStableStringify["default"])(prjs));
        }).join('\n'));
      });
    }
  }, {
    key: "_highestDependencies",
    value: function _highestDependencies(uniquePackages) {
      var _this2 = this;
      return Object.entries(uniquePackages).map(function (_ref16) {
        var _ref17 = _slicedToArray(_ref16, 2),
          packageName = _ref17[0],
          versions = _ref17[1].versions;
        return _defineProperty({}, packageName, _this2._highestVersion(versions));
      }).reduce(function (acc, cur) {
        return Object.assign(acc, cur);
      }, {});
    }
  }, {
    key: "_highestVersion",
    value: function _highestVersion(versions) {
      var sortedVersions = versions.sort(_compareVersions.compareVersions);
      var result = sortedVersions.pop();
      if (!result) {
        throw new Error("Missing version in array [".concat((0, _fastJsonStableStringify["default"])(versions), "]"));
      }
      return result;
    }
  }, {
    key: "_overrideGlobalDepsWithNewHighestDependencies",
    value: function _overrideGlobalDepsWithNewHighestDependencies(highestDependencies) {
      var globalPackageJs = this._packageJsonForProject();
      globalPackageJs.dependencies = highestDependencies;
      var fileData = JSON.stringify(JSON.parse((0, _fastJsonStableStringify["default"])(globalPackageJs)), null, 2);
      _fileService.fileService.writeToFileSync({
        data: fileData,
        filePath: 'package.json'
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {
    key: "_packageJsonForProject",
    value: function _packageJsonForProject(project) {
      return function (specifier) {
        return new Promise(function (r) {
          return r("".concat(specifier));
        }).then(function (s) {
          return _interopRequireWildcard(require(s));
        });
      }(_path["default"].join(process.cwd(), [project, 'package.json'].filter(Boolean).join('/'))); // eslint-disable-line @typescript-eslint/no-var-requires
    }
  }]);
}();
var npmGlobalProjectCommandFactory = exports.npmGlobalProjectCommandFactory = function npmGlobalProjectCommandFactory() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }
  return _construct(NpmGlobalProjectCommand, params);
};
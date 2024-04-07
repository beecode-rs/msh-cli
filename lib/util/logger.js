"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = void 0;
var _mshLogger = require("@beecode/msh-logger");
var _console = require("@beecode/msh-logger/logger-strategy/console");
var _simple = require("@beecode/msh-logger/logger-strategy/console/log-strategy/simple");
var _pattern = require("@beecode/msh-util/singleton/pattern");
// import { config } from '../util/config.js'

var logger = exports.logger = (0, _pattern.singletonPattern)(function () {
  return new _console.LoggerStrategyConsole({
    consoleLogStrategy: new _simple.ConsoleLogStrategySimple(),
    logLevel: _mshLogger.LogLevel.DEBUG
    // TODO: ESM: fix debug level
    // logLevel: (LogLevel[config().logLevel.toUpperCase()] as any) ?? LogLevel.INFO,
  });
});
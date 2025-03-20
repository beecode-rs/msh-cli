"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
var _mshEnv = require("@beecode/msh-env");
var _logger = require("@beecode/msh-env/util/logger");
var _mshLogger = require("@beecode/msh-logger");
var _console = require("@beecode/msh-logger/logger-strategy/console");
var _simple = require("@beecode/msh-logger/logger-strategy/console/log-strategy/simple");
var _pattern = require("@beecode/msh-util/singleton/pattern");
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
(0, _logger.setEnvLogger)(new _console.LoggerStrategyConsole({
  consoleLogStrategy: new _simple.ConsoleLogStrategySimple(),
  logLevel: _mshLogger.LogLevel.INFO
}));
var env = (0, _mshEnv.mshEnv)();
_dotenv["default"].config({
  path: './.msh'
});
_dotenv["default"].config({
  path: './.msh-user'
});
var config = exports.config = (0, _pattern.singletonPattern)(function () {
  return {
    // dockerBaseImages: env('DOCKER_BASE_IMAGES').json<string[]>().default([]).optional,
    cmd: {
      gitEnabled: env('CMD_GIT_ENABLED')["boolean"]["default"](true).required,
      // cleanEnabled: env('CMD_CLEAN_ENABLED').boolean.default(false).required,
      npmEnabled: env('CMD_NPM_ENABLED')["boolean"]["default"](true).required
      // prEnabled: env('CMD_PR_ENABLED').boolean.default(false).required,
    },
    git: {
      host: env('GIT_HOST').string["default"]('bitbucket.org').required,
      password: env('GIT_PASSWORD').string.optional,
      projectPrefix: env('GIT_PROJECT_PREFIX').string.optional,
      team: env('GIT_TEAM').string.optional,
      username: env('GIT_USERNAME').string.optional
    },
    logLevel: env('LOG_LEVEL').string["default"]('error').required,
    npm: {
      globalIgnorePackages: env('NPM_GLOBAL_IGNORE_PACKAGES').json()["default"]([]).required
    },
    projects: env('PROJECTS').json()["default"]([]).required,
    pullRequestSkip: env('PULL_REQUEST_SKIP').json()["default"]([]).required,
    rootDir: env('ROOT_DIR').string["default"](process.cwd()).required
  };
});
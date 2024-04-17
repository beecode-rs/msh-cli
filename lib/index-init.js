"use strict";

require("source-map-support/register.js");
var _logger = require("@beecode/msh-app-boot/util/logger");
var _logger2 = require("./util/logger.js");
process.on('uncaughtException', function (error) {
  return (0, _logger2.logger)().error('Uncaught Exception', {
    error: error
  });
});
process.on('unhandledRejection', function (error) {
  return (0, _logger2.logger)().error('Unhandled Rejection', {
    error: error
  });
});
(0, _logger.setAppBootLogger)((0, _logger2.logger)());
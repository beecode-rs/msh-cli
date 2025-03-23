"use strict";

require("./index-init.js");
var _mshAppBoot = require("@beecode/msh-app-boot");
var _httpServerApp = require("./app/http-server-app.js");
new _mshAppBoot.AppStarter(new _httpServerApp.HttpServerApp()).start()["catch"](function (err) {
  if (err instanceof Error) {
    console.error(err.message); // eslint-disable-line no-console

    return;
  }
  console.log(err); // eslint-disable-line no-console
});
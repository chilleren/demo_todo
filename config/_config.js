"use strict";

/*
 * entry point for other config files 
 */

var routes = require("./routes");
var variables = require("./variables");

module.exports = function (app) {

  variables(app);

  routes(app);
}
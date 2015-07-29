"use strict";

var express = require("express");

var app = express();

var config = require("./config/_config");

config(app);
app.set("ROOT_DIR", __dirname);

var port = app.get("PORT");
var server = app.listen(port, function () {
  console.log("Listening on port " + port + ".");
});
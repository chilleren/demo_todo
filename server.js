"use strict";

var express = require("express");
var fs = require("fs");
var mongoose = require("mongoose");
var path = require("path")

var config = require("./config");
var routes = require("./api/routes");

var app = express();

config(app);
app.set("ROOT_DIR", __dirname);

//load mongoose models
var modelDir = path.join(app.get("ROOT_DIR"), "/api/models/");
fs.readdirSync(modelDir).forEach(function (modelFile) {
  require(path.join(modelDir, modelFile));
});

mongoose.connect(app.get("DB_URL"));
mongoose.connection.once("open", function () {
  console.log("Database connection established.");

  routes(app);

  var port = app.get("PORT");
  var server = app.listen(port, function () {
    console.log("Listening on port " + port + ".");
  });
});
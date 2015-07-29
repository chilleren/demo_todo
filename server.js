"use strict";

var express = require("express");
var mongoose = require("mongoose");

var config = require("./config");
var routes = require("./api/routes");

var app = express();

config(app);
app.set("ROOT_DIR", __dirname);

mongoose.connect(app.get("DB_URL"));

var db = mongoose.connection;
db.on("error", function (err) {
  console.error(err);
  throw err;
});

db.once("open", function () {
  console.log("Database connection established.");

  routes(app);

  var port = app.get("PORT");
  var server = app.listen(port, function () {
    console.log("Listening on port " + port + ".");
  });
});
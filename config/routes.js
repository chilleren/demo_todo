"use strict";

var ErrorController = require("../api/controllers/error_controller");

module.exports = function (app) {
  var errorController = new ErrorController();

  app.get("/", function (req, res) {
    return res.send("hello world");
  });

  app.get("*", errorController.notFound);

  app.use(errorController.serverError);

}
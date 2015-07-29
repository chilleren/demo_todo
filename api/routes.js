"use strict";

module.exports = function (app) {
  var ErrorController = require("./controllers/error_controller");
  var TodoController = require("./controllers/todo_controller");
  
  var errorController = new ErrorController();
  var todoController = new TodoController();

  app.get("/", function (req, res) {
    return res.send("hello world");
  });

  app.get("/todos", todoController.getTodos);

  app.get("*", errorController.notFound);

  app.use(errorController.serverError);

}
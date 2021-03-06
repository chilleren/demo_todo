"use strict";

var express = require("express");

module.exports = function (app) {
  var ErrorController = require("./controllers/error_controller");
  var TodoController = require("./controllers/todo_controller");

  var errorController = new ErrorController();
  var todoController = new TodoController();


  app.route("/todos")
    .get(todoController.getTodos)
    .post(todoController.createTodo);

  app.route("/todos/:id")
    .put(todoController.updateTodo)

  app.use(express.static("public"));

  app.get("*", errorController.notFound);

  app.use(errorController.serverError);

}
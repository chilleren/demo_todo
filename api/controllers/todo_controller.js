"use strict";

var mongoose = require("mongoose");
var Todo = mongoose.model("Todo");

module.exports = function () {
  
  this.getTodos = function (req, res, next) {
    return Todo.find({}, function (err, todos) {
      if (err) {
        return next(err);
      } else {
        return res.send(todos);
      }
    });
  }

  this.createTodo = function (req, res, next) {
    var todo = req.body.todo;
    return Todo.create(todo, function (err, result) {
      if (err) {
        return next(err);
      } else {
        return res.send(result);
      }
    });
  }

}
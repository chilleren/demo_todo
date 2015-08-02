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
    var todo = req.body;
    return Todo.create(todo, function (err, result) {
      if (err) {
        return next(err);
      } else {
        return res.send(result);
      }
    });
  }

  this.updateTodo = function (req, res, next) {
    var _id = req.params.id;
  }

}
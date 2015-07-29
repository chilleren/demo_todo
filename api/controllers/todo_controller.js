"use strict";

var mongoose = require("mongoose");
var Todo = mongoose.model("Todo");

module.exports = function () {
  
  this.getTodos = function (req, res, next) {
    return Todo.find({}, function (err, todos) {
      if (err) return next(err);
      return res.send(todos);
    });
  }

}
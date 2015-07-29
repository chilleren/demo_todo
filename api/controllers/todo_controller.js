"use strict";

var Todo = require("../models/todo");

module.exports = function () {
  
  this.getTodos = function (req, res, next) {
    return res.send("todos!");
  }
}
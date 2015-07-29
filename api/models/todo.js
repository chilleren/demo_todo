"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var todoSchema = new Schema ({
  title: String,
  isDone: Boolean
});

module.exports = mongoose.model("Todo", todoSchema);
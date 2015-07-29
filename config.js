"use strict";

module.exports = function (app) {
  app.set("PORT", 3000);
  app.set("DB_URL", "mongodb://localhost:27017/todo");
}
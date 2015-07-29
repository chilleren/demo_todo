"use strict";

module.exports = function () {

  this.notFound = function (req, res, next) {
    res.status(404);
    return res.render("404");
  }

  this.badRequest = function (req, res, next) {
    res.status(400);
    return res.render("400");
  }

  this.unauthorized = function (req, res, next) {
    res.status(403);
    return res.render("403");
  }

  this.serverError = function (err, req, res, next) {
    res.status(500);
    console.error(err);

    //this might be a bad solution
    setTimeout(function () {
        process.exit(1);
    }, 1000);

    return res.render("500", {error: err});
  }
};
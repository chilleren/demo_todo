var app = angular.module("todo", []);

app.controller("MainCtrl", [
  "$scope",
  function ($scope) {
    $scope.test = "hello world";

    $scope.todos = [
      "todo 1",
      "todo 2",
      "todo 3",
      "todo 4"
    ];
  }
]);
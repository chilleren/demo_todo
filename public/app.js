var app = angular.module("todo", ["ui.router"]);

app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state("home", {
    url: "/home",
    templateUrl: "/home.html",
    controller: "MainCtrl"
  });

  $urlRouterProvider.otherwise("home");
}]);

app.factory('todos', [function () {
  return {
    todos: [
      {title: "todo 1", isDone: false},
      {title: "todo 2", isDone: false},
      {title: "todo 3", isDone: true},
      {title: "todo 4", isDone: false}
    ]
  }
}]);

app.controller("MainCtrl", ["$scope", "todos", function ($scope, todos) {

  $scope.todos = todos.todos;

  $scope.addTodo = function () {
    if (!$scope.title || $scope.title === "") {
      return;
    }
    $scope.todos.push({title: $scope.title, isDone: false});
    $scope.title = "";
  }
}]);
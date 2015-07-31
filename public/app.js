var app = angular.module("todo", []);

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

app.controller("MainCtrl", [
  "$scope",
  "todos",
  function ($scope, todos) {
    $scope.test = "hello world";

    $scope.todos = todos.todos;

    $scope.addTodo = function () {
      if (!$scope.title || $scope.title === "") {
        return;
      }
      $scope.todos.push({title: $scope.title, isDone: false});
      $scope.title = "";
    }

    // $scope.completeTodo = function (todo) {
    //   console.log("heyo")
    //   todo.isDone = !todo.isDone;
    // }
  }
]);
var app = angular.module("todo", ["ui.router"]);

app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state("home", {
    url: "/home",
    templateUrl: "/home.html",
    controller: "MainCtrl"
  });
  $stateProvider.state("todos", {
    url: "/todos",
    templateUrl: "/todos.html",
    controller: "TodosCtrl",
    resolve: {
      todoPromise: ["todos", function (todos) {
        return todos.getAll();
      }]
    }
  });

  $urlRouterProvider.otherwise("home");
}]);

app.factory('todos', ["$http", function ($http) {
  var obj = {
    todos: []
  };

  obj.getAll = function () {
    return $http.get("/todos").success(function (data) {
      angular.copy(data, obj.todos);
    });
  }

  obj.create = function (todo) {
    console.log(todo);
    return $http({
      url: "/todos",
      method: "POST",
      data: JSON.stringify(todo),
      headers: {'Content-Type': 'application/json'}
    }).success(function (data) {
      obj.todos.push(data);
    });
  }

  return obj;
}]);

app.controller("MainCtrl", ["$scope", "todos", function ($scope, todos) {

  // $scope.todos = todos.todos;

  // $scope.addTodo = function () {
  //   if (!$scope.title || $scope.title === "") {
  //     return;
  //   }
  //   $scope.todos.push({title: $scope.title, isDone: false});
  //   $scope.title = "";
  // }
}]);

app.controller("TodosCtrl", ["$scope", "$stateParams", "todos", function ($scope, $stateParams, todos) {
  $scope.todos = todos.todos;

  $scope.addTodo = function () {
    if (!$scope.title || $scope.title === "") {
      return;
    }
    todos.create({
      title: $scope.title,
      isDone: false
    });
    $scope.title = "";
  }
}]);


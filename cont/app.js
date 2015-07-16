var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'views/default.html'
  });

  $routeProvider.when('/showFormula', {
    templateUrl: 'views/formula.html'
  });

  // by default, redirect to site root
    $routeProvider.otherwise({
        redirectTo:'/'
    });
}])

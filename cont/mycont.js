var app = angular.module('myApp', []);
app.controller('myCtrler', function($scope) {
    $scope.hits= 0;
    $scope.size= 0;

    $scope.calculateBandWidth = function() {
      alert("So i have to calc now ? damm i do not know how to...");
    }

});

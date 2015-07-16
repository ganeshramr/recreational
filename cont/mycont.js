myApp.controller('myCtrler', function($scope, $http) {
  $scope.hits = 0;
  $scope.size = 0;
  $scope.bandwidth = 0;
  $scope.calculateBandWidth = function() {

    $http({
        url: '/calc/',
        method: "GET",
        params: {
          "h": $scope.hits,
          "s": $scope.size
        }
      }).
    success(function(data, status, headers, config) {
      $scope.bandwidth = data.value;
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  }
  

});

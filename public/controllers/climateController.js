angular
  .module("weatherApp")
  .controller("climateController", function($scope, $http) {
    //stubbing up my variables
    $scope.address = '';
    $scope.temp = ''
    $scope.forecast = ''

    $scope.accessWeather = function() {
      //Resetting my variables on each click
      $scope.temp = ''
      $scope.forecast = ''
      //Sending the user input to my Node server so that I can use it with 3rd party API calls.
      $http.get(`http://localhost:3000/weather?address=${$scope.address}`)
      //Response object coming back from Node.  weatherController.js line 19
        .then(function(response){
          //Hydrating my variables with my response so I can display them on the screen
          $scope.temp = response.data.temp;
          $scope.forecast = response.data.forecast
        })
    }
  })

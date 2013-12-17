angular.module('myControllers',[])
  .controller('showFlights', function($scope, $http, $location, sharedProperties) {
    $scope.friendLoc = friendLoc;
    $scope.setDest= function(newDest){
      sharedProperties.setDest(newDest);
      $location.path("/cityDetails");
    };
  })
  .controller('start', function($scope, $http, sharedProperties) {

  })
  .controller('showCity', function($scope, $http, sharedProperties) {
    $scope.destination = sharedProperties.getDest();
    $scope.origin = sharedProperties.getOrigin();

    var hotwireUrl = "http://api.hotwire.com/v1/tripstarter/air?apikey=j6vujgj99vxdghsjkfzccuuu&origin="+$scope.origin+"&limit=1&DestinationCity="+$scope.destination+"&format=jsonp&callback=JSON_CALLBACK";
    $http.jsonp(hotwireUrl)
    .success(function(data){
      console.log(data.Result.AirPricing);
      $scope.destinationData = data.Result.AirPricing;
    }).error(function(){
      console.log("there was an error in your hotwire request");
    });
  });



//   $scope.submit = function() {
//     var temp ={url: $scope.newURL};
//       $http({
//         method: "POST",
//         url: "http://localhost:4567/links",
//         headers: {'Content-Type': 'application/json'},
//         data: JSON.stringify(temp)
//       }).then(function(){
//         console.log("sent in a new link.");
//         $scope.newURL="";
//       });
//   };    
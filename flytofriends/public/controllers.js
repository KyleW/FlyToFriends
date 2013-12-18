angular.module('myControllers',[])

.controller('start', function($scope, $http, $location, sharedProperties) {
  $scope.checkLogin = function(){

    $location.path("/cityList");
  };
})


.controller('listCities', function($scope, $http, $location, sharedProperties, fetchFBData) {

  var promise = fetchFBData.fetchData();

  promise.then(function(data){
    console.log('Promise is now resolved: '+ data);
    $scope.locData = data;
  });


  $scope.setDest= function(newDest){
    sharedProperties.setDest(newDest);
    $location.path("/cityDetails");
  };


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

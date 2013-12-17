angular.module('myControllers',[])

.controller('start', function($scope, $http, $location, sharedProperties) {
  $scope.checkLogin = function(){
    FB.getLoginStatus(function(response) {
      if (response.status !== 'connected') {
        FB.login(function(response) {}, {scope:'friends_location'});
      }

      FB.api( {
        method: 'fql.query',
        query: 'SELECT current_location FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1 = me())'
      }, function(data) {
        friendLoc = {};
        locData = [];
        for (var key in data){
          if (data[key].current_location){
            var cur = data[key].current_location.city;
            if (cur in friendLoc){ friendLoc[cur]++;}
            else {
              friendLoc[cur] = 1;
              locData.push(data[key].current_location);
            }
          }
        }
        console.log("this is locData");
        console.log(locData);
      });
    });
    $location.path("/cityList");
  };
})


.controller('listCities', function($scope, $http, $location, sharedProperties) {

  $scope.friendLoc = friendLoc;
  $scope.locData = locData;


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

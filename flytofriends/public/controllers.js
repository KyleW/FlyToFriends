angular.module('myControllers',[])
  .controller('showFlights', function($scope, $http) {
    // FB.api(
    //     {
    //         method: 'fql.query',
    //         query: 'SELECT current_location.name FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1 = me() LIMIT 50)'
    //     },
    //     function(data) {
    //         // console.log(data);
    //         $scope.friendLoc = data;
    //     }
    // );

    $scope.friendLoc = friendLoc;

    // $http({
    //   method: "GET",
    //   url: fburl,
    // }).success(function(data){
    //   console.log(data);
    //   // $scope.links = data;
    // }).error(function(){
    //   consol.log("there was an error in your FQL request");
    // });
  // })
  // .controller('createLinks', function($scope, $http) {
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
  // }).controller('loginController', function($scope){
    
  });


// the right FQL query is:
// SELECT current_location FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1 = me())
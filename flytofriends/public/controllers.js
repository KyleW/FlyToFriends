angular.module('myControllers',[])
  .controller('showFlights', function($scope, $http) {
    // var fbBase = 'https://graph.facebook.com/fql?q=';
    // var query ="SELECT+current_location+FROM+user+WHERE+uid+IN+(SELECT+uid2+FROM+friend+WHERE+uid1=me())";
    // // query="SELECT+uid+FROM+user+WHERE+uid=me()";
    // var access_token = "CAACEdEose0cBAHLksQGaZCI48hugtfYkfZCPoNmI7iGg6ZAAxGTi9iU8GrF6mDrAvKuKMylmHa7sQg2lHFuMt6EgflYk9rJ3AZCU6oC2RoZACl1HVlQEaIObZB82iSyVZCv1GOZCXt8yVAa9RygF7oev26gc6H1t7Mdfg2OV8QXlt487xxPQSnplGPtihHuKs8wZD";
    // var fburl = fbBase+JSON.stringify(query)+"&access_token="+access_token;
    // console.log(fburl);

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
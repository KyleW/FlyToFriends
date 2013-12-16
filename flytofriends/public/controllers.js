angular.module('myControllers',[])
  .controller('showFlights', function($scope, $http) {
    var fbBase = 'https://graph.facebook.com/fql?q=';
    var query ="SELECT+current_location+FROM+user+WHERE+uid+IN+(SELECT+uid2+FROM+friend+WHERE+uid1+=+me())";
    query="SELECT+uid2+FROM+friend+WHERE+uid1+=+me()";
    var access_token = FB.getAuthResponse().accessToken;
    var fburl = fbBase+JSON.stringify(query)+"&access_token="+access_token;
    console.log(fburl);

    $http({
      method: "GET",
      url: fburl,
    }).success(function(data){
      console.log(data);
      // $scope.links = data;
    }).error(function(){
      consol.log("there was an error in your FQL request");
    });
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

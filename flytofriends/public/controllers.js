angular.module('myControllers',[])
  .controller('showFlights', function($scope, $http) {
    // $http({
    //   method: "GET",
    //   url: "http://localhost:4567/links"
    // }).success(function(data){
    //   console.log(data);
    //   $scope.links = data;
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

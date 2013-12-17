angular.module('myApp', ['ngRoute','myControllers'])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'templates/start.html',
      controller: 'start'
    }).
    when('/cityList', {
      templateUrl: 'templates/showFlights.html',
      controller: 'showFlights'
    }).
    when('/cityDetails', {
      templateUrl: 'templates/showCity.html',
      controller: 'showCity'
    }).
    otherwise({
      redirectTo: '/'
    });
  }]).service('sharedProperties', function () {
    var origin = "SFO";
    var destination;
    return {
      getDest: function () {
        return destination;
      },
      setDest: function(value) {
        destination = value;
      },
      getOrigin:function(){
        return origin;
      },
      setOrigin: function(newOrigin){
        origin = newOrigin;
      }
    };
  });


  // ng-click="$location.path('/cityList')"
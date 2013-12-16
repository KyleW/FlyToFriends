angular.module('myApp', ['ngRoute','myControllers'])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl: 'templates/showFlights.html',
          controller: 'showFlights'
        // }).
        // when('/add', {
        //   templateUrl: 'templates/createLinks.html',
        //   controller: 'createLinks'
        // }).
        // when('/login', {
        //   templateUrl: 'templates/createLinks.html',
        //   controller: 'loginController'
        // }).
        // when('/signup', {
        //   templateUrl: 'templates/createLinks.html',
        //   controller: 'loginController'
        }).
        otherwise({
          redirectTo: '/'
        });
  }]);
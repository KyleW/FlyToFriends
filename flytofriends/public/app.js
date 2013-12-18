angular.module('myApp', ['ngRoute','myControllers'])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      controller: 'start',
      templateUrl: 'templates/start.html'
    }).
    when('/cityList', {
      controller: 'listCities',
      templateUrl: 'templates/listCities.html'
    }).
    when('/cityDetails', {
      controller: 'showCity',
      templateUrl: 'templates/showCity.html'
    }).
    otherwise({
      redirectTo: '/'
    });
  }]);
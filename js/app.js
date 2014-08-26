'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('app', [
  'ngAnimate',
  'ngResource',
  'ngRoute',
  'ui.bootstrap',
  'ui.bootstrap.dropdown'
]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/',
          {
            templateUrl: "partials/accueil.html",
            controller: "HomeCtrl"
          }
        )
        .when('/overview', 
          {
            templateUrl: "partials/accueil.html",
            controller: "HomeCtrl"
          }
        )
        .when('/users', 
          {
            templateUrl: "partials/accueil.html",
            controller: "HomeCtrl"
          }
        )
        .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
}]);
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
            templateUrl: "partials/accueil.html"
          }
        )
        .when('/acteur/parcours', 
          {
            templateUrl: "partials/acteur/parcours.html"
          }
        )
        .when('/acteur/gallerie', 
          {
            templateUrl: "partials/acteur/gallerie.html"
          }
        )
        .when('/acteur/infos', 
          {
            templateUrl: "partials/acteur/infos.html"
          }
        )
        .when('/musicien/parcours', 
          {
            templateUrl: "partials/musicien/parcours.html"
          }
        )
        .when('/musicien/cours-particuliers', 
          {
            templateUrl: "partials/musicien/cours.html"
          }
        )
        .when('/musicien/cantushydrae', 
          {
            templateUrl: "partials/musicien/cantus-hydrae.html"
          }
        )
        .when('/musicien/gallerie', 
          {
            templateUrl: "partials/musicien/gallerie.html"
          }
        )
        .when('/contact', 
          {
            templateUrl: "partials/contact.html"
          }
        )
        .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
}]);
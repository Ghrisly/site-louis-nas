'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('app', [
  'ngAnimate',
  'ngResource',
  'ngRoute',
  'ui.bootstrap'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/',
      {
        templateUrl: "partials/accueil.html",
        controller: "HomeCtrl"
      }
    )
});
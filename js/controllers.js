'use strict';

/* Controllers */


app.controller("HomeCtrl", function($scope, $location) {
    
});

app.controller("MenuCtrl", function($scope, $location) {

	$scope.isActive = function(path){

        return ( (path == "/" && $location.path() == path) || ($location.path().indexOf(path) > -1) && path != "/")
         } 
});
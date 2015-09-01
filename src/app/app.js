'use strict';

//app

var app = angular.module('kartApp', ['ngMaterial', 'km_map', 'km_ban']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  
  $scope.toggleSidenav = function(menuID) {
    $mdSidenav(menuID).toggle();
    console.log('check');
  };

  $scope.menu = [
  	{
  		'title': 'menu 1',
  		'icon' : 'paper-plane',
  		'link' : 'url 1'
  	},
  	{
  		'title': 'menu 2',
  		'icon' : 'folder',
  		'link' : 'url 2'
  	},
  	{
  		'title': 'menu 3',
  		'icon' : 'coffee',
  		'link' : 'url 3'
  	}
  ];  

}]);

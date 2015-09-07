'use strict';

//app

var app = angular.module('kartApp', []);

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);

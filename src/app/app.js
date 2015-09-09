'use strict';

//app

var app = angular.module('kartApp', ['angular.panels', 'ngMaterial']);

app.config(['$locationProvider', 'panelsProvider', function ($locationProvider, panelsProvider) {

    $locationProvider.html5Mode(true);

     panelsProvider
        .add({
            id: 'layermenu',
            position: 'right',
            size: '300px',
            templateUrl: 'app/template/layermenu.html',
            controller: 'layerCtrl'
        })
         .add({
            id: 'mapmenu',
            position: 'right',
            size: '240px',
            templateUrl: 'app/template/mapmenu.html',
            controller: 'mapMenuCtrl'
        });
    
}]);
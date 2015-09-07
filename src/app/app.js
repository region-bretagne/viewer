'use strict';

//app

var app = angular.module('kartApp', ['ngMaterial']);

app.config(
    ['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode(true);
    }]
);

app.run(function ($http, $rootScope, $location, $mdDialog) {
    var conf = 'config.json';
    var params = $location.search();
    if (params.app) {
        conf = params.app + '.json';
    }
    $http.get(conf)
        .success(function (data) {
            $rootScope.config = data;
            $rootScope.$broadcast('config-loaded');
        })
        .error(function (data, status) {
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.body))
                    .title('Erreur')
                    .content(status + ' : ' + data)
                    .ariaLabel('Alert Dialog')
                    .ok('Fermer')
            );
        });
});
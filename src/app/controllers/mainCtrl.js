'use strict';

app.controller('AppCtrl', ['$location', '$rootScope', '$scope', '$mdSidenav', 'km_mapMapFactory', function ($location, $rootScope, $scope, $mdSidenav, km_mapMapFactory) {

    //Fire when config.json is loaded
    $scope.$on('config-loaded', function () {
        $scope.name = $rootScope.config.name;
        //get optional url parameters
        var params = $location.search();
        if (params.x && params.y && params.z) {
            //if parameters x,y,z are defined then zoom on this place
            $rootScope.config.map.center = km_mapMapFactory.fromLonlat([parseFloat(params.x), parseFloat(params.y)]);
            $rootScope.config.map.zoom = [parseInt(params.z)];
        }
        $scope.map = km_mapMapFactory.initMap($rootScope.config.map);
    });

    $scope.toggleSidenav = function (menuID) {
        $mdSidenav(menuID).toggle();
        console.log('check');
    };

    $scope.menu = [{
        title: 'menu 1',
        icon: 'paper-plane',
        link: 'url 1'
    }, {
        title: 'menu 2',
        icon: 'folder',
        link: 'url 2'
    }, {
        title: 'menu 3',
        icon: 'coffee',
        link: 'url 3'
    }];

}]);
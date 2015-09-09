'use strict';

app.controller('MainCtrl', ['$http', '$location', '$scope', 'LayerSlct', 'panels', function($http, $location, $scope, LayerSlct, panels) {

    var conf = 'conf/default.json';
    var params = $location.search();
    
    if (params.app) {
        conf = 'conf/' + params.app + '.json';
    }
    
    $http.get(conf)
        .success(function(data) {
            $scope.config = data;
            $scope.$broadcast('config-loaded');
        })
        .error(function(data, status) {
            // $mdDialog.show(
            //     $mdDialog.alert()
            //         .parent(angular.element(document.body))
            //         .title('Erreur')
            //         .content(status + ' : ' + data)
            //         .ariaLabel('Alert Dialog')
            //         .ok('Fermer')
            // );
    })

    //Fire when config.json is loaded
    $scope.$on('config-loaded', function () {
        $scope.name = $scope.config.name;
        //get optional url parameters
        var params = $location.search();
        if (params.x && params.y && params.z) {
            //if parameters x,y,z are defined then zoom on this place
            $scope.config.map.center = LayerSlct.fromLonlat([parseFloat(params.x), parseFloat(params.y)]);
            $scope.config.map.zoom = [parseInt(params.z)];
        }
        $scope.map = LayerSlct.initMap($scope.config.map);
    });


    // fonctions d'ouverture de panneaux
    $scope.OpenLayerMenu = function () {
       $scope.$broadcast('OpenLayerMenu', {message : $scope.message});
    };
    $scope.OpenMapMenu = function () {
       $scope.$broadcast('OpenMapMenu', {message : $scope.message});
    };

}])

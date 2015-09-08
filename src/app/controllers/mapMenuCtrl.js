'use strict';


app.controller('mapMenuCtrl', ['$scope', 'LayerSlct', 'panels', function($scope, LayerSlct, panels) {

    //ouverture du panneau layer sur l'evt OpenLayerMenu
    $scope.$on('OpenMapMenu', function(event, args) {

        console.log('click');
        $scope.message = args.message;
        panels.open("mapmenu");

    });
    
    $scope.backgroundlayers = LayerSlct.backgroundlayers;
    $scope.changeLayer = LayerSlct.changeLayer;

}]);
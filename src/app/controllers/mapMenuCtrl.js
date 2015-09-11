'use strict';


app.controller('mapMenuCtrl', ['$scope', 'LayerSlct', function($scope, LayerSlct) {
    
    $scope.backgroundlayers = LayerSlct.backgroundlayers;
    $scope.changeLayer = LayerSlct.changeLayer;

}]);
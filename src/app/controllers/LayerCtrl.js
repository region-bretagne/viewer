'use strict';

app.controller('LayerCtrl', ['$scope', 'LayerSlct', function($scope, LayerSlct) {
    $scope.backgroundlayers = LayerSlct.backgroundlayers;
    $scope.changeLayer = LayerSlct.changeLayer;
}]);
'use strict';


app.controller('layerCtrl', ['$scope', 'LayerSlct', 'panels', function($scope, LayerSlct, panels) {

	 //ouverture du panneau layer sur l'evt OpenLayerMenu
    $scope.$on('OpenLayerMenu', function(event, args) {

        console.log('click');
        $scope.message = args.message;
        panels.open("layermenu");

    });

	$scope.menu = [
		{
			"title" : "titre item 2",
			"url" : "url"
		},
		{
			"title" : "titre item 2",
			"url" : "url"
		}
	];

}]);
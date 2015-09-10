'use strict';


app.controller('layerCtrl', ['$scope', function($scope) {

	$scope.menus = [
		{
			"title" : "titre menu 1",
			"items" : [
				{
					"title" : "titre item 1",
					"param" : "p1"
				},
				{
					"title" : "titre item 1",
					"param" : "p1"
				},
				{
					"title" : "titre item 1",
					"param" : "p1"
				}
			]
		},
		{
			"title" : "titre menu 2",
			"items" : [
				{
					"title" : "titre item 1",
					"param" : "p1"
				},
				{
					"title" : "titre item 1",
					"param" : "p1"
				},
				{
					"title" : "titre item 1",
					"param" : "p1"
				}
			]
		},	];

}]);
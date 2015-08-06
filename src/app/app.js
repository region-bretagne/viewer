'use strict';

//app

var app = angular.module('kartApp', ['ngMaterial', 'openlayers-directive']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  
  $scope.toggleSidenav = function(menuID) {
    $mdSidenav(menuID).toggle();
    console.log('check');
  };

  $scope.menu = [
  	{
  		'title': 'menu 1',
  		'icon' : 'paper-plane',
  		'link' : 'url 1'
  	},
  	{
  		'title': 'menu 2',
  		'icon' : 'folder',
  		'link' : 'url 2'
  	},
  	{
  		'title': 'menu 3',
  		'icon' : 'coffee',
  		'link' : 'url 3'
  	}
  ];

  angular.extend($scope, {
      center: {
          lat: 48.113,
          lon: -1.670,
          zoom: 6
      },
      controls: [
          { name: 'zoom', active: true },
          { name: 'fullscreen', active: true },
          { name: 'attribution', active: true }
      ],
      layers: [
        {
            name: 'OpenStreetMap',
            active: false,
            source: {
                type: 'OSM'
            }
        },
        {
            name: 'OpenCycleMap',
            active: false,
            source: {
                type: 'OSM',
                url: 'http://{a-c}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
                attribution: 'All maps &copy; <a href="http://www.opencyclemap.org/">OpenCycleMap</a>'
            }
        },
        {
            name: 'MapBox Night',
            active: false,
            source: {
                type: 'TileJSON',
                url: 'https://api.tiles.mapbox.com/v3/examples.map-0l53fhk2.jsonp'
            }
        },
        {
            name: 'MapBox Terrain',
            active: true,
            source: {
                type: 'TileJSON',
                url: 'https://api.tiles.mapbox.com/v3/examples.map-i86nkdio.jsonp'
            }
        },
        {
            name: 'Mapbox Geography Class',
            active: false,
            source: {
                type: 'TileJSON',
                url: 'http://api.tiles.mapbox.com/v3/mapbox.geography-class.jsonp'
            }
        }
    ],
    changeLayer: function(layer) {
        $scope.layers.map(function(l) {
            l.active = (l === layer);
        });
    }
  });

}]);

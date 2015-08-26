'use strict';

//app

var app = angular.module('kartApp', ['ngMaterial']);

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
// CARTO
  var layerExtend = function (l, params) {
    return angular.extend(l, params);
  };   
   
  angular.extend($scope, {      
      layers: [
         layerExtend( 
            new ol.layer.Tile({                               
                source: new ol.source.OSM(),
                visible: false
            }),{
                title:'OpenStreetMap'
            }
         ),            
        layerExtend( 
            new ol.layer.Tile({                               
                source: new ol.source.OSM({
                    url: 'http://{a-c}.tiles.mapbox.com/v3/mapbox.geography-class/{z}/{x}/{y}.png'                    
                }),
                visible: true
            }),{
                title:'Mapbox Geography Class'
                }
        ),
        layerExtend( 
            new ol.layer.Tile({                               
                source: new ol.source.OSM({
                    url: 'http://{a-c}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
                    attribution: 'All maps &copy; <a href="http://www.opencyclemap.org/">OpenCycleMap</a>'
                }),
                visible: false
            }),{
                title:'OpenCycleMap'
                }
        ),
        layerExtend( 
            new ol.layer.Tile({                               
                source: new ol.source.OSM({
                    url: 'http://{a-b}.tiles.mapbox.com/v3/examples.map-0l53fhk2/{z}/{x}/{y}.png',
                    attribution : "<a href=\"https://www.mapbox.com/about/maps/\" target=\"_blank\">&copy; Mapbox</a> <a href=\"http://www.openstreetmap.org/about/\" target=\"_blank\">&copy; OpenStreetMap</a> <a class=\"mapbox-improve-map\" href=\"https://www.mapbox.com/map-feedback/\" target=\"_blank\">Improve this map</a>"
                }),
                visible: false
            }),{
                title:'MapBox Night'
                }
        )
      ],
      changeLayer: function(layer) {
        $scope.layers.map(function(l) {
            l.setVisible (l === layer);
        });
      }
  });
  
  $scope.map = new ol.Map({
      layers: $scope.layers,
      controls: ol.control.defaults().extend([
        new ol.control.FullScreen(),
        new ol.control.Attribution()
      ]),
      target: 'map',
      view: new ol.View({
        center: [-255230.17323666788, 6053408.222195528],
        zoom: 4
      })
  });
  // FIN CARTO
}]);

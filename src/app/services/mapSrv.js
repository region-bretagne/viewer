'use strict';

app.factory('km_mapMapFactory', function(){

    var _layerExtend = function (l, params) {
        return angular.extend(l, params);
    };   
    
    var _backgroundlayers = [
         _layerExtend( 
            new ol.layer.Tile({                               
                source: new ol.source.OSM(),
                visible: true
            }),{
                title:'OpenStreetMap',
                screenshot: 'assets/images/octicon-repo.svg'
                
            }
         ),            
        _layerExtend( 
            new ol.layer.Tile({                               
                source: new ol.source.OSM({
                    url: 'http://{a-c}.tiles.mapbox.com/v3/mapbox.geography-class/{z}/{x}/{y}.png'                    
                }),
                visible: false
            }),{
                title:'Mapbox Geography Class',
                screenshot: 'assets/images/octicon-repo.svg'
                }
        ),
        _layerExtend( 
            new ol.layer.Tile({                               
                source: new ol.source.OSM({
                    url: 'http://{a-c}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
                    attributions: [
                      new ol.Attribution({
                        html: 'All maps &copy; ' +
                            '<a href="http://www.opencyclemap.org/">OpenCycleMap</a>'
                      }),
                      ol.source.OSM.DATA_ATTRIBUTION
                    ]                    
                }),
                visible: false
            }),{
                title:'OpenCycleMap',
                screenshot: 'assets/images/octicon-repo.svg'
                }
        ),
        _layerExtend( 
            new ol.layer.Tile({                               
                source: new ol.source.OSM({
                    url: 'http://{a-b}.tiles.mapbox.com/v3/examples.map-0l53fhk2/{z}/{x}/{y}.png',
                    attributions: [
                      new ol.Attribution({
                        html: '<a href=\"http://www.openstreetmap.org/about/\" target=\"_blank\">&copy; OpenStreetMap</a> <a class=\"mapbox-improve-map\" href=\"https://www.mapbox.com/map-feedback/\" target=\"_blank\">Improve this map</a>'
                      }),
                      ol.source.OSM.DATA_ATTRIBUTION
                    ]  
                }),
                visible: false
            }),{
                title:'MapBox Night',
                screenshot: 'assets/images/octicon-repo.svg'
                }
        )
      ];
      
      var _map = new ol.Map({
          layers: _backgroundlayers,
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
      
      

    return {
    
        backgroundlayers: _backgroundlayers,
        
        map: _map,
        
        zoomTo: function (coordinates, zoom) {
            if (coordinates.length = 2) {
                _map.getView().setCenter(coordinates);
            }
            _map.getView().setZoom(zoom);
        },
        
        changeLayer: function(layer) {
            _backgroundlayers.map(function(l) {
                l.setVisible (l === layer);
            });
        }       
        
    };
})
.controller('mapCtrl', ['$scope', 'km_mapMapFactory', 
    function ($scope, km_mapMapFactory) {
        $scope.backgroundlayers = km_mapMapFactory.backgroundlayers;
        $scope.changeLayer = km_mapMapFactory.changeLayer;
    }
]);


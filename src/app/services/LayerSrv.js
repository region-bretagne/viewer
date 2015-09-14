(function() {

    'use strict';

    // layerSlct.js
    function layerSlct ($location) {

      var _layerExtend = function(l, params) {
          return angular.extend(l, params);
      };

      var _map;

      var _toLonlat = function(coordinates) {
          return ol.proj.transform(coordinates, 'EPSG:3857', 'EPSG:4326');
      };

      var _mapChange = function(e) {
        var lonlat = _toLonlat(_map.getView().getCenter());
        var zoom = _map.getView().getZoom();
        if (window.history.replaceState) {
            var visiblelayers = _backgroundlayers.filter(function(l) {
                return l.getVisible();
            });
            var bglayer = visiblelayers[0].title;
            var parameters = '/?x=' + lonlat[0] + '&y=' + lonlat[1] + '&z=' + zoom + '&bglayer=' + bglayer;
            var params = $location.search();
            if (params.app) {
                parameters += '&app=' + params.app;
            }
            window.history.replaceState({}, 'Title', parameters);
        }
      };

      var _backgroundlayers = [
        _layerExtend(
            new ol.layer.Tile({
                source: new ol.source.OSM(),
                visible: false
            }), {
                title: 'OpenStreetMap',
                screenshot: 'assets/images/map.jpg'
            }
        )
      ];

      var _createBackgroundlayers = function(bglayers) {
        var i;
        var layer;
        for (i = 0; i < bglayers.length; i++) {            
            switch (bglayers[i].type) {
                case 'OSM':
                    layer =
                        new ol.layer.Tile({
                            source: new ol.source.OSM({
                                url: bglayers[i].url,
                                attributions: [
                                    new ol.Attribution({
                                        html: bglayers[i].attribution
                                    }),
                                    ol.source.OSM.ATTRIBUTION
                                ]
                            }),
                            visible: bglayers[i].visible
                        });
                    _backgroundlayers.push(_layerExtend(layer, {
                        title: bglayers[i].title,
                        screenshot: bglayers[i].screenshot
                    }));
                    break;
                case 'WMTS':
                    break;
            }
        }
        var params = $location.search();
        if (params.bglayer) {
            var bglayer = _backgroundlayers.filter(function(l) {
                return l.title === decodeURIComponent(params.bglayer);
            })[0];
            _backgroundlayers.map(function(l) {
                l.setVisible(l === bglayer);
            });
        }
        return _backgroundlayers;
      };

      return {

        backgroundlayers: _backgroundlayers,

        fromLonlat: function(lonlat) {
          return ol.proj.transform(lonlat, 'EPSG:4326', 'EPSG:3857');
        },

        toLonlat: _toLonlat,

        initMap: function (options) {
          _map = new ol.Map({
              layers: _createBackgroundlayers (options.backgroundlayers),
              controls: ol.control.defaults().extend([
                  new ol.control.FullScreen(),
                  new ol.control.Attribution()
              ]),
              target: 'map',
              view: new ol.View({
                  center: options.center,
                  zoom: options.zoom
              })
          });
          _map.on('moveend', _mapChange);
          return _map;
        },

        zoomTo: function(coordinates, zoom) {
          if (coordinates.length = 2) {
              _map.getView().setCenter(coordinates);
          }
          _map.getView().setZoom(zoom);
        },

        changeLayer: function(layer) {
          _backgroundlayers.map(function(l) {
              l.setVisible(l === layer);
          });
          _mapChange(null);
        }
      };
    }

    angular.module('app')
      .factory('layerSlct', layerSlct);

})();
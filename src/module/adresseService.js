var ctrl = angular.module('km_ban', ['ngMaterial','km_map'])
        .controller("banController", function($http, km_mapMapFactory){
          
          this.querySearch = function(val){
            return $http.get('http://api-adresse.data.gouv.fr/search/?autocomplete=0&limit=5&q='+val)
            .then(function(result){
              return result.data.features;
            })
          }
          
          this.selectedItemChange = function(item) {
              console.log('Item changed to ' + JSON.stringify(item));
              if (item && item .geometry && item.properties) {
                  var center = ol.proj.transform(item.geometry.coordinates, 'EPSG:4326', 'EPSG:3857');
                  var zoom = 0;
                   switch(item.properties.type) {
                      case "city":
                         zoom = 13;
                         break;
                      case "town":
                         zoom = 15;
                         break;
                      case "village":
                         zoom = 16;
                         break;
                      case "street":
                         zoom = 17;
                         break;
                      case "housenumber":
                         zoom = 18;
                         break;
                      default:
                         zoom = 14;
                   }
                  km_mapMapFactory.zoomTo(center, zoom);
             }
          }
        });
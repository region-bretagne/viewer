(function() {
	'use strict';

	// mapMenuCtrl.js
	function mapMenuCtrl (layerSlct) {

	  this.backgroundlayers = layerSlct.backgroundlayers;
	  this.changeLayer = layerSlct.changeLayer;

	}

	angular.module('app')
		.controller('mapMenuCtrl', mapMenuCtrl);

})();
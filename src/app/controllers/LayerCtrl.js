'use strict';

// layerCtrl.js
function layerCtrl () {

  this.menus = [
    {
      'title' : 'titre menu 1',
      'items' : [
        {
          'title' : 'titre item 1',
          'param' : 'p1'
        },
        {
          'title' : 'titre item 1',
          'param' : 'p1'
        },
        {
          'title' : 'titre item 1',
          'param' : 'p1'
        }
      ]
    },
    {
      'title' : 'titre menu 2',
      'items' : [
        {
          'title' : 'titre item 1',
          'param' : 'p1'
        },
        {
          'title' : 'titre item 1',
          'param' : 'p1'
        },
        {
          'title' : 'titre item 1',
          'param' : 'p1'
        }
      ]
    },  
  ];
}

angular.module('app')
	.controller('layerCtrl', layerCtrl);

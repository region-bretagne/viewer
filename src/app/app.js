'use strict';

angular.module('app', ['ngMaterial']);

// app config
function config ($locationProvider, $mdThemingProvider) {

  $locationProvider.html5Mode(true);

  $mdThemingProvider.definePalette('tourismePalette', {
      '50': '906A83',
      '100': '906A83',
      '200': '906A83',
      '300': '906A83',
      '400': '906A83',
      '500': '906A83',
      '600': '906A83',
      '700': '906A83',
      '800': '906A83',
      '900': '906A83',
      'A100': '906A83',
      'A200': '906A83',
      'A400': '906A83',
      'A700': '906A83',
      'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                          // on this palette should be dark or light
      'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
       '200', '300', '400', 'A100'],
      'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });

  $mdThemingProvider.theme('default')
    .primaryPalette('tourismePalette');
}

angular.module('app')
  .config(config);
var angular = require('angular'),
    mainModule = require('./main/main.module.js'),
    loginModule = require('./login/login.module.js');
require('@angular/router/angular1/angular_1_router');
require('angular-local-storage/dist/angular-local-storage.min.js');
require('angular-password/angular-password.min.js');

angular.module('app',
    [
    	'LocalStorageModule',
    	'ngPassword',
      mainModule.name,
      loginModule.name
    ])
  .config(function($locationProvider, localStorageServiceProvider) {
    $locationProvider.html5Mode(true);
    localStorageServiceProvider
    .setPrefix('form');
  });
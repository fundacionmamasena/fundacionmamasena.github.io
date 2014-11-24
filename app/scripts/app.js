'use strict';


angular.module('fmsApp', [
  'ui.router'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
    })
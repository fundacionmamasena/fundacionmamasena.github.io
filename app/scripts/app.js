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
            .state('contactos', {
                url: '/contactos',
                templateUrl: 'views/contactus.html'
                //                controller: 'con'
            })
            .state('nosotros', {
                url: '/nosotros',
                templateUrl: 'views/aboutus.html'
                //                controller: 'con'
            })
            .state('objetivos', {
                url: '/objetivos',
                templateUrl: 'views/objectives.html'
                //                controller: 'con'
            })
            .state('programas', {
                url: '/programas',
                templateUrl: 'views/programs.html'
                //                controller: 'con'
            })
            .state('galeria', {
                url: '/galeria',
                templateUrl: 'views/gallery.html'
                //                controller: 'con'
            })
            .state('noticias', {
                url: '/noticias',
                templateUrl: 'views/news.html'
                //                controller: 'con'
            })
            .state('preguntas', {
                url: '/preguntas',
                templateUrl: 'views/faq.html'
                //                controller: 'con'
            })
    })
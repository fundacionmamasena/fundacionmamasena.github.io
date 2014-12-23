'use strict';

angular.module('fmsApp')
    .controller('NavbarCtrl', function ($scope, $location) {
        $scope.menu = [{
                'title': 'Inicio',
                'link': '/'
            },
            {
                'title': 'Sobre Nosotros',
                'link': '/nosotros'
            }];

        $scope.isCollapsed = true;

        $scope.isActive = function (route) {
            //console.log(route);
            //console.log($location.path());
            return route === $location.path();
        };
    });
/* global global require module */

require('./pwa');
require('../styles/styles.less');

global.jQuery = require('jquery');

var angular = require('angular'),
    uiRouter = require('angular-ui-router'),
    bootstrap = require('bootstrap'),
    $ = global.jQuery;

angular.module('templateWebApp', ['ui.router'])

    .config([
        '$stateProvider',
        '$locationProvider',
        '$urlRouterProvider',
        function ($stateProvider, $locationProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');

            $locationProvider.html5Mode(true);

            $stateProvider
                .state('home', {
                    url: '/home',
                    controller: 'homeController',
                    controllerAs: 'home',
                    template: require('./templates/home.html')
                })
                .state('about', {
                    url: '/about',
                    controller: 'aboutController',
                    controllerAs: 'about',
                    template: require('./templates/about.html')
                });
        }
    ])

    .controller(
        'homeController',
        [
            '$scope',
            '$http',
            function ($scope, $http) {
                var self = this;

                self.message = 'This is home';
            }
        ])

    .controller(
        'aboutController',
        [
            '$scope',
            '$http',
            function ($scope, $http) {
                var self = this;

                self.message = 'This is about';
            }
        ]);

if (module.hot) {
    module.hot.accept();
}

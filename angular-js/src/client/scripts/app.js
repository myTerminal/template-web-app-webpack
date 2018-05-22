/* global global require */

require('./service-worker-starter');
require('../styles/styles.less');

global.jQuery = require('jquery');

var angular = require('angular'),
    uiRouter = require('angular-ui-router'),
    bootstrap = require('bootstrap'),
    $ = global.jQuery;

angular.module('templateWeb', ['ui.router'])

    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/main');

            $stateProvider.state('main', {
                url: '/main',
                controller: 'mainController',
                controllerAs: 'main',
                template: require('./templates/template1.html')
            });
        }
    ])

    .controller(
        'mainController',
        [
            '$scope',
            '$http',
            function ($scope, $http) {
                var self = this;

                self.getMessage = () => 'This is a template';
            }
        ]
    );

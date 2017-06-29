angular.module('myApp', ['myApp.controllers', 'myApp.factories', 'myApp.services', 'ngRoute', 'ngResource'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeController'
    }).when('/chirps', {
        templateUrl: 'views/chirp_list.html',
        controller: 'ChirpListController'
    }).when('/chirps/:id', {
        templateUrl: 'views/single_chirp.html',
        controller: 'SingleChirpController'
    }).when('/chirps/:id/update', {
        templateUrl: 'views/single_update.html',
        controller: 'UpdateController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);
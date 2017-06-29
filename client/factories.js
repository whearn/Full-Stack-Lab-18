angular.module('myApp.factories', [])
.factory('Chirp', ['$resource', function($resource) {
    return $resource('http://localhost:3000/api/chirps/:id', { id: '@id' }, {
        update: {
            method: 'PUT'
        }
    });
}]).factory('User', ['$resource', function($resource) {
    return $resource('http://localhost:3000/api/users/:id', { id: '@id' }, {
        update: {
            method: 'GET'
        }
    });
}]);
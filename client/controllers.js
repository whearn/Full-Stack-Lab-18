angular.module('myApp.controllers', [])
.controller('WelcomeController', ['$scope', 'WordService', function($scope, WordService) {
    $scope.greeting = 'Welcome to Chirper!';
}])
.controller('ChirpListController', ['$scope', 'Chirp', 'User', function($scope, Chirp, User) {
    // Pizza.query(function(success) {
    //     $scope.pizzas = success;
    // }, function(err) {
    //     console.log(err);
    // });
    $scope.chirps = Chirp.query();
    $scope.users = User.query();

    $scope.createChirp = function() {
        var p = new Chirp({
            name: $scope.newName,
            price: $scope.newPrice
        });

        p.$save(function(success) {
            alert('Chirp saved successfully!');
            $scope.chirps = Chirp.query();
            $scope.newName = '';
            $scope.newPrice = '';
        }, function(err) {
            console.log(err);
        });
    }
}])
.controller('SingleChirpController', ['$scope', 'Chirp', '$routeParams', function($scope, Chirp, $routeParams) {
    // Pizza.get({ id: $routeParams.id }, function(success) {
    //     $scope.pizza = success;
    // }, function(err) {
    //     console.log(err);
    // });
    $scope.chirp = Chirp.get({ id: $routeParams.id });

    $scope.deleteChirp = function() {
        if (confirm('Are you sure you want to delete this Chirp?')) {
            $scope.chirp.$delete(function() {
                window.history.back();
            }, function(err) {
                console.log(err);
            });
        }
    }
}]);
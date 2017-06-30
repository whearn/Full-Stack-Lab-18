// angular.module('chirperApp.controllers', [])
// .controller('WelcomeController', ['$scope', 'WordService', function($scope, WordService) {
//     $scope.greeting = 'Welcome to Chirper!';
// }])
// .controller('ChirpListController', ['$scope', 'Chirp', 'User', function($scope, Chirp, User) {
//     // Pizza.query(function(success) {
//     //     $scope.pizzas = success;
//     // }, function(err) {
//     //     console.log(err);
//     // });
//     $scope.chirps = Chirp.query();
//     $scope.users = User.query();

//     $scope.createChirp = function() {
//         var p = new Chirp({
//             // userId: $scope.newId,
//             name: $scope.newName,
//             message: $scope.newMessage
//         });

//         p.$save(function(success) {
//             alert('Chirp saved successfully!');
//             $scope.chirps = Chirp.query();
//             $scope.newName = '';
//             $scope.newMessage = '';
//         }, function(err) {
//             console.log(err);
//         });
//     }
// }])
// .controller('SingleChirpController', ['$scope', 'Chirp', '$routeParams', function($scope, Chirp, $routeParams) {
//     // Pizza.get({ id: $routeParams.id }, function(success) {
//     //     $scope.pizza = success;
//     // }, function(err) {
//     //     console.log(err);
//     // });
//     $scope.chirp = Chirp.get({ id: $routeParams.id });

//     $scope.deleteChirp = function() {
//         if (confirm('Are you sure you want to delete this Chirp?')) {
//             $scope.chirp.$delete(function() {
//                 window.history.back();
//             }, function(err) {
//                 console.log(err);
//             });
//         }
//     }
// }])
// .controller('UpdateController', ['$scope', 'Chirp', '$routeParams', function($scope, Chirp, $routeParams) {
//     $scope.chirp = Chirp.get({ id: $routeParams.id });

//     $scope.updateChirp = function() {

//     };
// }]);





//In Class
angular.module('chirperApp.controllers', [])
.controller('ChirpListController', ['$scope', 'Chirp', 'User', function($scope, Chirp, User) {
    $scope.chirps = Chirp.query();
    $scope.users = User.query();

    $scope.createChirp = function() {
        var payload = {
            message: $scope.newMessage,
            userId: $scope.newUserId
        };

        var c = new Chirp(payload);

        c.$save(function(success) {
            $scope.newMessage = '';
            $scope.newUserId = '';
            $scope.chirps = Chirp.query();
        }, function(err) {
            console.log(err);
        });
    }
}])
.controller('SingleChirpController', ['$scope', 'Chirp', '$location', '$routeParams', function($scope, Chirp, $location, $routeParams) {
    $scope.chirp = Chirp.get({ id: $routeParams.id });

    $scope.editChirp = function() {
        $location.path('/chirps/' + $routeParams.id + '/update');
    }

    $scope.deleteChirp = function() {
        if(confirm('Are you sure you want to delete this Chirp?')) {
            $scope.chirp.$delete(function(success) {
                $location.replace().path('/chirps');
            }, function(err) {
                console.log(err);
            });
        }
    }
}])
.controller('UpdateController', ['$scope', 'Chirp', '$location', '$routeParams', function($scope, Chirp, $location, $routeParams) {
    $scope.chirp = Chirp.get({ id: $routeParams.id });

    $scope.updateChirp = function() {
        $scope.chirp.$update(function(success) {
            //$location.path('/chirps/' + $routeParams.id);
            window.history.back(0);
        }, function(err) {
            console.log(err);
        });

        // var payload = {
        //     message: $scope.chirp.message
        // };
        // $http({
        //     method: 'PUT',
        //     url: '/api/chirps/' + $routeParams.id,
        //     data: payload
        // }).then(function(response) {
        //     $location.path('/chirps/' + $routeParams.id);
        // }, function(err) {
        //     console.log(err);
        // });
    }
}]);
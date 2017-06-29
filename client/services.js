angular.module('myApp.services', [])
.service('WordService', [function() {
    this.getWordOfTheDay = function() {
        return 'Nooga';
    }
}]);
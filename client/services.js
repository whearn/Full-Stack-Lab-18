angular.module('chirperApp.services', [])
.service('WordService', [function() {
    this.getWordOfTheDay = function() {
        return 'Nooga';
    }
}]);
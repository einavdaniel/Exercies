var einavApp = angular.module('einavApp', [
    'ngRoute', 
    'einavCtrls'
]);

einavApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
        })
        .otherwise('/');
});
var einavApp = angular.module('einavApp', [
    'ngRoute', 
    'einavCtrls',
    'pt1Ctrls',
    'pt2Ctrls'
]);

einavApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
        })
        .when('/pt1/ex1', {
            templateUrl: '/part1/exrc1.html',
            controller: 'pt1ex1Ctrl'
        })
        .when('/pt2/ex1', {
            templateUrl: '/part2/exrc1.html',
            controller: ''
        })
        .when('/pt2/ex2', {
            templateUrl: '/part2/exrc2.html',
            controller: ''
        })
        .when('/pt2/ex3', {
            templateUrl: '/part2/exrc3.html',
            controller: ''
        })
        .when('/404', {
            templateUrl: 'templates/404.html',
        })
        .otherwise('404');
});
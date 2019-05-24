var einavApp = angular.module('einavApp', [
    'ngMaterial',
    'ngRoute', 
    'einavCtrls',
    'pt1Ctrls',
    'pt2Ctrls',
    'pt3Ctrls',
    'pt4Ctrls',
    'pt5Ctrls',
    'pt6Ctrls',
    'pt7Ctrls',
    'pt8Ctrls',
    'mdTestModule'
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
        })
        .when('/pt2/ex2', {
            templateUrl: '/part2/exrc2.html',
        })
        .when('/pt2/ex3', {
            templateUrl: '/part2/exrc3.html',
        })
        .when('/pt3/ex1', {
            templateUrl: '/part3/exrc1.html',
        })
        .when('/pt3/ex2', {
            templateUrl: '/part3/exrc2.html',
        })
        .when('/pt3/ex3', {
            templateUrl: '/part3/exrc3.html',
        })
        .when('/pt3/ex4', {
            templateUrl: '/part3/exrc4.html',
        })
        .when('/pt4/ex12', {
            templateUrl: '/part4/exrc12.html',
        })
        .when('/pt4/ex4', {
            templateUrl: '/part4/exrc4.html',
        })
        .when('/pt4/ex356', {
            templateUrl: '/part4/exrc356.html',
        })
        .when('/pt5/chooseColor', {
            templateUrl: '/part5/ChooseColor.html',
            controller:'chooseColorCtrl'
        })
        .when('/pt5/seeColor/:color', {
            templateUrl: '/part5/triangle.html',
            controller: 'seeColorCtrl'
        })
        .when('/pt6/calc', {
            templateUrl: '/part6/calculator.html',
            controller: 'calculatorCtrl'
        })
        .when('/pt6/color', {
            templateUrl: '/part6/colorized.html',
            controller: 'colorCtrl'
        })
        .when('/pt7/promise', {
            templateUrl: '/part7/promises.html',
            controller: 'promiseCtrl'
        })
        .when('/pt8/events', {
            templateUrl: '/part8/events.html',
            controller: 'eventsCtrl'
        })
        .when('/md', {
            templateUrl: '/AngularMaterialTest/mdTest.html',
            controller: 'mdTestCtrl'
        })
        .when('/404', {
            templateUrl: 'templates/404.html',
        })
        .otherwise('404');
});
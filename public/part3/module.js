var pt3Ctrls = angular.module('pt3Ctrls',[]);

pt3Ctrls.controller('pt3ex1Ctrls',function ($scope){
    $scope.foodsList = ['Pizza', 'Burger', 'Lahuh', 'Kuba'];
    $scope.friendsList = [
        {
            name: 'Monica',
            job: 'Chef'
        }, {            
            name: 'Chandler',
            job: 'Transporter'
        }, {            
            name: 'Rachel',
            job: 'Fashion'
        }, {            
            name: 'Phoebe',
            job: 'Masseur'
        }, {            
            name: 'Joey',
            job: 'Actor'
        }, {            
            name: 'Ross',
            job: 'Paleontologist'
        }
    ];
});

pt3Ctrls.controller('pt3ex3Ctrls', function($scope){
    $scope.submit = function(){
        alert("all fields are valid");
    }
});

pt3Ctrls.filter('customFilter', function() {
    return function(input) {
        if(input == undefined)
        {
            return '';
        }
        var result = input.substring(0,6).toUpperCase()
      //return (!!input) ? input.substring(0,6).toUpperCase() : '';
      return result;
    }
});

pt3Ctrls.filter('capitalizeFilter', function(){
    return function(input){
        return (!!input) ? (input[0].toUpperCase() + input.substring(1).toLowerCase()) : '';
    }
});

pt3Ctrls.directive('blacklist', function (){ 
    return {
       require: 'ngModel',
       link: function(scope, elem, attr, ngModel) {
           var blacklist = attr.blacklist.split(',');
 
           //For DOM -> model validation
           ngModel.$parsers.unshift(function(value) {
              var valid = blacklist.indexOf(value) === -1;
              ngModel.$setValidity('blacklist', valid);
              return valid ? value : undefined;
           });
 
           //For model -> DOM validation
           ngModel.$formatters.unshift(function(value) {
              ngModel.$setValidity('blacklist', blacklist.indexOf(value) === -1);
              return value;
           });
       }
    };
 });
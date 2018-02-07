var pt3Ctrls = angular.module('pt3Ctrls',[]);

pt3Ctrls.controller('pt3ex1Ctrls',function ($scope){
    
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
var pt2Ctrls = angular.module('pt2Ctrls',['einavServices']);

pt2Ctrls.controller('ctrl1',function ($scope){
    $scope.mainCat = "Mitzi1"
});

pt2Ctrls.controller('ctrl2',function ($scope){
    $scope.mainCat = "Mitzi2"
});

pt2Ctrls.controller('ctrl3',function ($scope){
    $scope.mainCat = "Mitzi3"

    $scope.changeParentCat = function(){
        $scope.$parent.mainCat = $scope.mainCat
    }
});

pt2Ctrls.controller('checkData', function ($scope, checkerService){
    $scope.data = checkerService.getData();
    
    $scope.change = function(){
        checkerService.setData("Other Data");
        $scope.data = checkerService.getData();
    }
});

pt2Ctrls.controller('checkData2', function ($scope, checkerService){
    $scope.data = checkerService.getData();

    $scope.change = function(){
        $scope.data = checkerService.getData();
    }
});
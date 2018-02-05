var pt2Ctrls = angular.module('pt2Ctrls',[]);

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
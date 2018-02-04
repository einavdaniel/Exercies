var einavCtrls = angular.module('einavCtrls', ['einavServices']);

einavCtrls.controller('homeCtrl', function ($scope, myService) {
    $scope.data = myService.myData;
    $scope.loading = myService.loading;
});

einavCtrls.controller('einavCtrl', function ($scope) {

});
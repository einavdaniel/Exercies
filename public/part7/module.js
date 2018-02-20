var pt7Ctrls = angular.module('pt7Ctrls', [
    'einavServices'
]);


pt7Ctrls.controller('promiseCtrl', function ($scope, $q, promiseCalcService) {
    $scope.showLoading = true;
    $scope.showErr = false;
    $scope.showRes = false;

    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    var load = async function () {
        var n = 0;
        $scope.showLoading = true;
        $scope.showErr = false;
        $scope.showRes = false;

        while ($scope.showLoading && n < 20) {
            $scope.loadMsg = "loading.";
            await $q.when(timeout(550));
            $scope.loadMsg = "loading..";
            await $q.when(timeout(550));
            $scope.loadMsg = "loading...";
            await $q.when(timeout(550));
            n++;
        }

        if (n == 20) {
            $scope.showLoading = false;
            alert('function timed out');
        }
    }

    $scope.calculate = function () {
        $scope.showErr = false;
        $scope.showRes = false;
        load();
        $q.when(promiseCalcService.calculate($scope.numerator, $scope.denominator)).then(
            function (res) {
                $scope.showLoading = false;
                $scope.result = res;
                $scope.showRes = true;
            },
            function (err) {
                $scope.showLoading = false;
                $scope.errMsg = err;
                $scope.showErr = true;
            }
        );
    }
});
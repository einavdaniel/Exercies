var pt6Ctrls = angular.module('pt6Ctrls', [
    'einavServices'
]);

pt6Ctrls.controller('calculatorCtrl', function ($scope, calculateService) {

    $scope.clear = function () {
        $scope.number = 0;
        $scope.firstArg = 0;
        $scope.secondArg = 0;
        $scope.result = 0;
        $scope.actionChar;
        $scope.action = null;
        $scope.calcString = '';
    }
    $scope.appendDigit = function (d) {
        $scope.number *= 10;
        $scope.number += d;
        $scope.calcString += d;
    };
    $scope.appendOperand = function (o) {
        if (!$scope.action) {
            switch (o) {
                case "+":
                    $scope.action = calculateService.sum;
                    $scope.actionChar = '+';
                    break;
                case "-":
                    $scope.action = calculateService.sub;
                    $scope.actionChar = '-';
                    break;
                case "*":
                    $scope.action = calculateService.mult;
                    $scope.actionChar = '*';
                    break;
                case "/":
                    $scope.action = calculateService.div;
                    $scope.actionChar = '/';
                    break;
            }

            $scope.firstArg += $scope.number
            $scope.number = 0;
            $scope.calcString += o;
        };
    };

    $scope.calculate = function () {
        $scope.secondArg += $scope.number;
        $scope.result = $scope.action($scope.firstArg, $scope.secondArg);
        $scope.number = 0;
    }

    $scope.clear();
});

pt6Ctrls.controller('colorCtrl', function ($scope, colorFactory) {
    $scope.test = "works"
    //$scope.colorOne = colorFactory.Color('red', 'Einav');
    $scope.colorOne = colorFactory.Color
});
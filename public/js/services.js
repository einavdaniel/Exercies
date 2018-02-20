var einavServices = angular.module('einavServices', []);

einavServices.service('myService', function ($http) {
    var _self = this;
    _self.myData = [];

    $http.get('/myData').then(
        function (result) {
            angular.copy(result.data, _self.myData);
            angular.copy(false, _self.loading);
        },
        function (err) {
            //
        }
    );

    _self.loading = true;
});

einavServices.service('checkerService', function () {
    this.someText = "someText";
    this.getData = function () {
        return this.someText;
    }
    this.setData = function (newData) {
        this.someText = newData;
    }
});

einavServices.service('calculateService', function () {
    this.mult = function (a, b) {
        return a * b;
    };
    this.div = function (a, b) {
        return a / b
    };
    this.sum = function (a, b) {
        return a + b;
    };
    this.sub = function (a, b) {
        return a - b;
    };
});

einavServices.service('promiseCalcService', function () {

    this.calculate = function (numerator, denominator) {
        return new Promise(function (resolve, reject) {
            if (denominator != 0) {
                setTimeout(function () {
                    resolve(numerator / denominator)
                }, 4500);
            } else {
                reject("Can't devide by 0!");
            }
        });
    }
});


einavServices.factory('colorFactory', function () {
    return {

        // Color = function (color, string) {
        //     this.color = color;
        //     this.string = string;
        //     this.changeColor = function (newColor) {
        //         this.color = newColor;
        //     };
        // }
    }
});
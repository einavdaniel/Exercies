var omerServices = angular.module('einavServices',[]);

omerServices.service('myService', function($http){
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
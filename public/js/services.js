var einavServices = angular.module('einavServices',[]);

einavServices.service('myService', function($http){
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

einavServices.service('checkerService', function(){
    this.someText = "someText";
    this.getData = function(){
        return this.someText;
    }
    this.setData = function(newData){
        this.someText = newData;
    }
});

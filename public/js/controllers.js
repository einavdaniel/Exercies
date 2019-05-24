var einavCtrls = angular.module('einavCtrls', ['einavServices', 'ui.select', 'ngSanitize']);

einavCtrls.controller('homeCtrl', function ($scope, myService) {
    // $scope.data = myService.myData;
    // // $scope.loading = myService.loading;

    // if (typeof jQuery != 'undefined') {

    //     alert("jQuery library is loaded!");

    // }else{

    //     alert("jQuery library is not found!");

    // }

    // if(typeof($.fn.popover) != 'undefined'){
    //     alert("bootstrap library is loaded!");
    //    }
    $scope.selected = {
        location: 'eilat'
      };

    $scope.$watch('selected.location', function(newVal, oldVal) {
        if (newVal !== oldVal) {
          if ($scope.locations.indexOf(newVal) === -1) {
            $scope.locations.unshift(newVal);
          }
        }
      });
      $scope.$watch('selected.item', function(newVal, oldVal) {
        if (newVal !== oldVal) {
          if ($scope.itemArray.indexOf(newVal) === -1) {
            //$scope.itemArray.unshift(newVal);
          }
          var newvalholder = newVal
          $scope.itemArray.forEach(item => {
              if(item.name === newvalholder){
                  $scope.selected.item = item;
              }
          });
        }
      });

      $scope.popup = function(item, model){
          console.log(item , model)
          console.log(item )
          console.log( model)
      }
    $scope.test = "controller is working";

    $scope.locations = ["eilat", "tel aviv", "haifa"]

    $scope.itemArray = [
        { id: 1, name: 'first' },
        { id: 2, name: 'second' },
        { id: 3, name: 'third' },
        { id: 4, name: 'fourth' },
        { id: 5, name: 'fifth' },
    ];

  //  $scope.area.selected = $scope.locations[0];

    $scope.getLocations = function (search) {
        var newLocs = $scope.locations.slice();
        if (search && newLocs.indexOf(search) === -1) {
            newLocs.unshift(search);
        }
        return newLocs;
    }
});

einavCtrls.controller('einavCtrl', function ($scope) {

});
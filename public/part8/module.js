var pt8Ctrls = angular.module('pt8Ctrls', [
    'einavServices'
]);


pt8Ctrls.controller('eventsCtrl', function ($scope) {

});

pt8Ctrls.controller('ctrlA', function ($scope) {
    $scope.text = 'None yet';
    var bossData = "Father is the boss"
    var counter = 0;

    // handle childs
    $scope.$on('childEvent', function (event, data) {
        $scope.text = data;
        counter++;

        if (counter == 3) {
            //broadcast childs
            $scope.$broadcast('parentEvent', bossData);
            counter = 0;
        }
    });
});

pt8Ctrls.controller('ctrlB', function ($scope) {
    // up to father
    $scope.myFunction = function () {
        $scope.$emit('childEvent', $scope.myText)
        console.log('first child method');
    };
    // command from father
    $scope.$on('parentEvent', function (event, data) {
        $scope.myText = data;
    });

});

pt8Ctrls.controller('ctrlC', function ($scope) {
    // up to father
    $scope.myFunction = function () {
        $scope.$emit('childEvent', $scope.myText)
        console.log('second child method');
    };
    // command from father
    $scope.$on('parentEvent', function (event, data) {
        $scope.myText = data;
    });
});

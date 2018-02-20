var pt5Ctrls = angular.module('pt5Ctrls', []);

pt5Ctrls.controller('seeColorCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {

    function draw() {
        var canvas = document.getElementById('mainCanvas');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            ctx.beginPath(); // note usage below 

            // triangle 1, at left
            ctx.fillStyle = $routeParams.color;
            ctx.moveTo(15, 15); // start at top left corner of canvas
            ctx.lineTo(200, 0); // go 200px to right (x), straight line from 0 to 0
            ctx.lineTo(100, 200); // go to horizontal 100 (x) and vertical 200 (y)
            ctx.fill(); // connect and fill
        }
    };

    $scope.chosenColor = $routeParams.color;
    draw()
}]);

pt5Ctrls.controller('chooseColorCtrl', ['$scope', function ($scope) {
    $scope.redirect = function () {
        window.location = '#!/pt5/seeColor/' + $scope.chosenColor;
    };

}]);
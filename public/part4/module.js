var pt4Ctrls = angular.module('pt4Ctrls', []);

// <!---------------------- CONTROLLERS ----------------------!>

pt4Ctrls.controller('tweeterCtrl', function ($scope) {
    $scope.tweetAlert = function () {
        alert($scope.tweeterText);
    }
});

pt4Ctrls.controller('pt4ex4Ctrls', function($scope){

    // ------------------------- set functions -------------------- //
    $scope.btnAddPetClicked = function(){
        $scope.initializePet();
        $scope.newPetForm = true;
    };

    $scope.initializePet = function(){
        petId ++;
        $scope.petData = {
            id: petId,
            name: "",
            age: "",
            type:""
        };    

    };
    
    $scope.removePet = function(pet){
        console.log(pet);
        var index = $scope.petList.indexOf(pet);
        $scope.petList.splice(index, 1);
        $scope.updateMedalColor();
        $scope.updateLocalStorage(); 
    };

    $scope.btnAdoptCliked = function(){
        $scope.petList.push($scope.petData);
        $scope.newPetForm = false;
        $scope.updateMedalColor();
        $scope.updateLocalStorage();
    };

    $scope.updateMedalColor = function(){
        if($scope.petList.length === 0){
            $scope.adoptionMedal = "";
        };
        if($scope.petList.length > 0 && $scope.petList.length < 3){
            $scope.adoptionMedal = "bronze";
        };
        if($scope.petList.length >= 3 && $scope.petList.length < 5){
            $scope.adoptionMedal = "silver";
        };
        if($scope.petList.length >= 5){
            $scope.adoptionMedal = "gold";
        };
    };

    $scope.updateLocalStorage = function(){
        if($scope.petList.length === 0){
            localStorage.removeItem("localPetList");
        }
        else{
            localStorage.setItem("localPetList", JSON.stringify($scope.petList));
        }
    };

    // ------------------------- code -------------------- //
    var petId = 0;
    $scope.petList = [];
    $scope.newPetForm = false;

    if(localStorage.getItem("localPetList")){
        $scope.petList = JSON.parse(localStorage.getItem("localPetList"));
        petId = $scope.petList[$scope.petList.length - 1].id;
        $scope.updateMedalColor();
    };

});


// <!---------------------- DIRECTIVES ----------------------!>

pt4Ctrls.directive('pet', function () {
    return {
        restrict: 'E', // Attribute,
        scope: {},
        templateUrl: 'part4/petDirective.html',
        transclude: false,
    }
});

pt4Ctrls.directive('myDirective', function () {
    return {
        restrict: 'EA', // Attribute,
        scope: {
            someText: "@",
            someColor: "@"
        }, // isolated scope,
        templateUrl: 'part4/directive1.html'
    }
});

pt4Ctrls.directive('tweeter', function () {
    return {
        restrict: 'E', // Element/ attribute,
        scopre: {},
        templateUrl: 'part4/directive2.html'
    }
});


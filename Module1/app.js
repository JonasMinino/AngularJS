
(function () {
'use strict';

angular.module("CheckApp", [])
.controller("CheckController", CheckController);

  CheckController.$inject = ['$scope'];

  function CheckController ($scope){
    $scope.say ="";
    $scope.foods="";

    $scope.GetMessage = function(){
      if($scope.foods){
        var foodArr = $scope.foods.split(",");
        if(foodArr.length<=3){
          $scope.say =  "Enjoy!";
        }
        else{
          $scope.say = "Too much!";
        }
      }
      else{
        $scope.say =  "Please enter data first";
      }
    };
  }

})();

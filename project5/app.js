(function(){

    'use stric';

    angular.module("lunchApp", [])
    .controller("luchAppController", luchAppController);
    
    luchAppController.$inject = ["$scope"];

    function luchAppController($scope){

        $scope.msgView = "";
        $scope.textFood = "";

        $scope.validateText = function(){
            var totalFood = calculateFood($scope.textFood);
            $scope.msgView = getMsg(totalFood);
        };


        function calculateFood(string){
            var numberFood = 0;
            var stringArray = string.split(',');
            numberFood = stringArray.length;
            if (stringArray[numberFood - 1]==""){
                numberFood = numberFood -1;
            }
            return numberFood;
        };

        function getMsg(cantFood){
            if (cantFood > 0 && cantFood <= 3){
                return "Enjoy!";
            } 
            else if (cantFood > 3 ){
                return "Too much!";
            }
            else {
                return "Please enter data first";
            }    

        };

        $scope.clearMsg = function(){
            $scope.msgView = "";
        };

    };
   
})();
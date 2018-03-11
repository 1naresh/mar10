angular.module('app').controller('sizeController',sizeController)
function sizeController($scope,$state,dataService,$window){
    console.log($state.current.name)
    $scope.Math = $window.Math;
    var amount=0
    $scope.wallA=0
    $scope.wallB=0
    $scope.wallC=0
    $scope.goNext=true;
    $scope.warning=false;
    function calculate(){
        var wallA=Math.floor($scope.wallA/12)
        var wallB=Math.floor($scope.wallB/12)
        var wallC=Math.floor($scope.wallC/12)
        if(wallA+wallB+wallC <= 5 && wallA+wallB+wallC > 0){
            amount+=(wallA+wallB+wallC)*100
            $scope.goNext=true
        }else if(wallA+wallB+wallC > 5){
            amount+=500+((wallA+wallB+wallC-5)*200)
            $scope.goNext=true
        }
        if($state.current.name == 'LShape' || $state.current.name == 'parallelShape'){
            if(wallA == 0 || wallB ==0){
                $scope.goNext=false;
                $scope.warning=true;
            }
        }else if($state.current.name == 'UShape'){
            if(wallA == 0 || wallB ==0 ||wallC ==0){
                $scope.goNext=false;
                $scope.warning=true;
            }
        }else if($state.current.name == 'straightShape'){
            if(wallA == 0){
                $scope.goNext=false;
                $scope.warning=true;
            }
        }
        dataService.addAmount(amount)
    }
    $scope.toRegister=function(){
        calculate()
        if($scope.goNext){
            $state.go('register')
        }        
    }

} 
sizeController.$inject=['$scope','$state','dataService','$window']
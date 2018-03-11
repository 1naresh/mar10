angular.module('app').controller('sizeController',sizeController)
function sizeController($scope,$state,dataService){
    var amount=0
    $scope.wallA=0
    $scope.wallB=0
    $scope.wallC=0
    $scope.goNext=true
    function calculate(){
        var wallA=$scope.wallA
        var wallB=$scope.wallB
        var wallC=$scope.wallC
        if(wallA+wallB+wallC <= 5 && wallA+wallB+wallC > 0){
            amount+=(wallA+wallB+wallC)*100
            $scope.goNext=true
        }else if(wallA+wallB+wallC > 5){
            amount+=500+((wallA+wallB+wallC-5)*200)
            $scope.goNext=true
        }else if(wallA+wallB+wallC === 0){
            $scope.warning=true
            $scope.goNext=false
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
sizeController.$inject=['$scope','$state','dataService']
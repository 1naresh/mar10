angular.module('app').controller('fulllInteriorsController',fulllInteriorsController)
function fulllInteriorsController($scope,$state,dataService){
    $scope.toRegister=function(){
        if($scope.isEntertainment){
            dataService.user.products.push('Entertainment Unit')
        }
        if($scope.isStudy){
            dataService.user.products.push('Study Unit')
        }
        if($scope.isCrockery){
            dataService.user.products.push('Crockery Unit')
        }
        
        $state.go('register')
    }
    $scope.back=function(){
        console.log(dataService.user.products)
        if(dataService.user.products.indexOf('wardrobe') == 1){
            $state.go('wordrobes')
        }else{
            $state.go('shapes')
        }
    }
}
fulllInteriorsController.$inject=['$scope','$state','dataService']
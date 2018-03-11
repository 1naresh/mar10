angular.module('app').controller('productsController',productsController)
function productsController($scope,$state,dataService,$document){
    var products=[]
    $scope.kitchenImg=true;    
    $scope.toEstimate2=function(){
        if($scope.kitchen){
            products.push('kitchen')
        }
        if($scope.wardrobe){
            products.push('wardrobe')
        }
        if($scope.fulllInteriors){
            products.push('fulllInteriors')
        }
        dataService.addProducts(products)
        $state.go('shapes')
    }
    $scope.over=function(product){
        $document[0].getElementById(product).style.background='red'
        if(product=='wardrobe'){
            $scope.kitchenImg=false;
            $scope.wardrobeImg=true
        }
        else if(product=='fulllInteriors'){
            $scope.kitchenImg=false;
            $scope.fulllInteriors=true 
        }
    }
    $scope.leave=function(product){        
        $document[0].getElementById(product).style.background='#ffffff'
        if(product=='wardrobe'){
            $scope.wardrobeImg=false
            $scope.kitchenImg=true;
        }
        else if(product=='fulllInteriors'){
            $scope.fulllInteriors=false;
            $scope.kitchenImg=true;
        }
    } 
}
productsController.$inject=['$scope','$state','dataService','$document']
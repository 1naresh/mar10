angular.module('app').controller('productsController',productsController)
function productsController($scope,$state,dataService,$document){
    var products=[]
    $scope.over=function(product){
        $document[0].getElementById(product).style.background='red'
        if(product=='kitchen'){
            $scope.kitchenImg=true;
        }else if(product=='wardrobe'){
            $scope.wardrobeImg=true
        }
        else if(product=='fulllInteriors'){
            $scope.fulllInteriors=true
        }
    }
    $scope.leave=function(product){        
        $document[0].getElementById(product).style.background='#ffffff'
        if(product=='kitchen'){
            $scope.kitchenImg=false;
        }else if(product=='wardrobe'){
            $scope.wardrobeImg=false
        }
        else if(product=='fulllInteriors'){
            $scope.fulllInteriors=false
        }
    }
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
}
productsController.$inject=['$scope','$state','dataService','$document']
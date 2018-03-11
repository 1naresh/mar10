angular.module('app').controller('homeController',homeController)
function homeController($scope,$state){
    $scope.toProducts=function(){
        $state.go('products')
    }
}
homeController.$inject=['$scope','$state']
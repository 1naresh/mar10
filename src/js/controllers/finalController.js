angular.module('app').controller('finalController',finalController)
function finalController($scope,$state,dataService){
    $scope.amount=34
    dataService.getData().then(function(res){
        $scope.result=res.data
    })
}
finalController.$inject=['$scope','$state','dataService']
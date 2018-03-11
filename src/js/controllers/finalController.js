angular.module('app').controller('finalController',finalController)
function finalController($scope,$state,dataService){
    dataService.getData().then(function(res){
        $scope.result=res.data
    })
}
finalController.$inject=['$scope','$state','dataService']
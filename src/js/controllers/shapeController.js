angular.module('app').controller('shapeController',shapeController)
function shapeController($scope,$state,dataService){
    $scope.continue=function(toState){
        $state.go(toState)
    }
}
shapeController.$inject=['$scope','$state','dataService']
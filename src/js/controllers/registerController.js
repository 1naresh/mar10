angular.module('app').controller('registerController',registerController)
function registerController($scope,$state,dataService){
    $scope.cities=['hyderabad','chennai','bangalore','delhi']
    $scope.submitForm=function(user){
        dataService.addDetails(user)
        $state.go('final')
    }
}
registerController.$inject=['$scope','$state','dataService'] 
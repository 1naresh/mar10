angular.module('app').controller('wordrobesController',wordrobesController)
function wordrobesController($scope,$state,dataService){
    var user=dataService.user
    $scope.toShape=function(number){
        if(number == '1'){
            user.bedroomType='singleBed'
            $state.go('singleBed');
        }else if(number == '2'){
            user.bedroomType='doubleBed'            
            $state.go('doubleBed')
        }
        else if(number == '3'){
            user.bedroomType='tripleBed'            
            $state.go('tripleBed')
        }
    }
    $scope.back=function(){
        $state.go('kitchenSheets')
    }
}
wordrobesController.$inject=['$scope','$state','dataService']
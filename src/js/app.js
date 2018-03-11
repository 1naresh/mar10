angular.module('app',['ui.router']).config(config)
function config($stateProvider,$urlRouterProvider){
    function State(name,ctrl,Params){
        return{
            name:name,
            url:'/'+name,
            views:{
                'main':{
                    templateUrl:'http://localhost:100/templates/' +name +'.html',
                    controller: ctrl
                }
            }
        }
    }
    $stateProvider.state(State('home','homeController'))
                  .state(State('products','productsController'))
                  .state(State('shapes','shapeController'))
                  .state(State('LShape','sizeController'))
                  .state(State('UShape','sizeController'))
                  .state(State('parallelShape','sizeController'))
                  .state(State('straightShape','sizeController'))
                  .state(State('register','registerController'))
                  .state(State('final','finalController'))      
    $urlRouterProvider.otherwise('/home')
}
config.$inject=['$stateProvider','$urlRouterProvider']

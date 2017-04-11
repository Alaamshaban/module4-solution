(function(){
  'use strict';
  angular.module('MenuApp')
  .config(RoutesConfig);
  RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home',{
                 url:'/home',
                templateUrl:'src/home.html'
                                })
 .state('categories',{
                url:'/categories',
                templateUrl:'src/categories.template.html',
                controller:'categoriesController as categoryList',
                resolve:{
                  categories:['MenuDataService',function(MenuDataService){
                    return MenuDataService.getAllCategories();
                  }]
                }
  })
  .state('menuItems', {
      url: '/items/{categoryShortName}',
      templateUrl: 'src/items.template.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getMenuItems($stateParams.categoryShortName);
        }]
      }
    });

}
})();

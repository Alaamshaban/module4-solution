(function(){
  'use strict';
angular.module('data')
.controller('categoriesController',categoriesController);

categoriesController.$inject=['categories'];
function categoriesController(categories){
  var categoryList=this;
  categoryList.categories=categories;
}

// categoriesController.$inject = ['MenuDataService'];
// function categoriesController(MenuDataService) {
//   var categoryList = this;
// //  categoryList.categories = [];
// categoryList.$onInit = function () {
//  MenuDataService.getAllCategories().then(function (result) {
//     categoryList.categories = result;
//     });
//   };
// }
})();

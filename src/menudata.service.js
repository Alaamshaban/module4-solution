(function(){
  'use strict';
  angular.module('data')
  .service('MenuDataService',MenuDataService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

 MenuDataService.$inject=['$http','ApiBasePath'];
 function MenuDataService($http,ApiBasePath){

   var service =this;
   service.getAllCategories=function(){
    // var categories=[];
     return $http({
       method: "GET",
       url: (ApiBasePath + "/categories.json")
     }).then(function (result) {
       return result.data;
     });
   };


  service.getMenuItems = function (categoryShortName) {
    var config = {};
    if (categoryShortName) {
      config.params = {'category':categoryShortName};
    }

    return $http.get(ApiBasePath + "/menu_items.json", config).then(function (response) {
      return response.data;
    });
  };

};
})();

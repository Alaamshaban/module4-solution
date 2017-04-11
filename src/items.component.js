(function () {
"use strict";

angular.module('MenuApp')
.component('menuItem', {
  templateUrl: 'src/items.html',
  bindings: {
    menuItem: '<'
  }
});


})();

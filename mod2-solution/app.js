(function(){
  'use strict'
  var ToBuyController = function(slsvc){
    var c = this;
    c.buyList = slsvc.buyList;
    c.buy = function(index){
      var boughts = slsvc.buyList.splice(index,1);
      slsvc.boughtList.push(boughts[0]);
    };
  };
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  var AlreadyBoughtController = function(slvc){
    var c = this;
    c.boughtList = slvc.boughtList;
  };
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  var ShoppingListCheckOffService = function(){
    var svc = this;
    svc.boughtList = [];
    svc.buyList = [{
      name: 'cookies',
      quantity: 10
    },{
      name: 'donuts',
      quantity: 7
    },{
      name: 'tea',
      quantity: 9
    },{
      name: 'biscuits',
      quantity: 8
    },{
      name: 'vitamix',
      quantity: 1
    }];
  };
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService)
  ;
})();

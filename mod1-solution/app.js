(function(){
  'use strict'
  var ctrl = function($sc){
    $sc.lunchMenu = '';
    $sc.msg = '';
    $sc.checkTooMuch = function(){
      if($sc.lunchMenu.length==0){
        $sc.msg = 'Please enter something';
        return;
      }
      var items = $sc.lunchMenu.split(',');
      if(items.length<=3){
        $sc.msg = 'Enjoy!';
      }else{
        $sc.msg = 'Too much!';
      }
    }
  };
  ctrl.$inject = ['$scope'];
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',ctrl);

})();

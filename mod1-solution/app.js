(function(){
  'use strict'
  var ctrl = function($sc){
    $sc.lunchMenu = '';
    $sc.msg = '';
    $sc.checkTooMuch = function(){
      $sc.msgMode = 'normal';
      if($sc.lunchMenu.length==0){
        $sc.msg = 'Please enter something';
        $sc.msgMode = 'warning';
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

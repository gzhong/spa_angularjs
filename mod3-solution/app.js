(function(){
    'use strict'
    var NarrowItDownController = function(mss){
        var ctrl = this;
        ctrl.getData = function(){
            if(!ctrl.searchTerm){
                ctrl.errorMsg = 'Enter something';
                return;
            }
            var promise = mss.getMatchedMenuItems(ctrl.searchTerm);
            promise.then(function(result){
                var fis = [];
                for(var i=0;i<result.data.menu_items.length;i++){
                    var mi = result.data.menu_items[i];
                    if(mi.description.indexOf(ctrl.searchTerm)>=0){
                        fis.push(mi);
                    }
                }
                ctrl.errorMsg = fis.length===0 ? 'No result' : '';
                ctrl.found = fis;
            });
        };
        ctrl.removeItem = function(index){
            ctrl.found.splice(index,1);
        };
    };
    NarrowItDownController.$inject = ['MenuSearchService'];
    var MenuSearchService = function($http){
        var svc = this;
        svc.getMatchedMenuItems = function(searchTerm){
            return $http({
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            });
        }
    };
    MenuSearchService.$inject = ['$http'];

    // Directive Section
    var FoundItemsDirective = function (){
        var ddo = {
            templateUrl: 'foundItems.html',
            restrict: 'E',
            scope:{
                items: '<foundItems',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'ctrl',
            bindToController: true,
            link: FoundItemsDirectiveLink,
            transclude: true
        };

        return ddo;
    };

    var FoundItemsDirectiveLink = function(scope, element, attrs, controller) {
        scope.$watch('ctrl.hasResults()', function (newValue, oldValue) {
            var warningElem = element.find("div.error");
            if (newValue === true) {
                warningElem.css('display', 'block');
            }
            else {
                warningElem.css('display', 'none');
            }

        });
    };

    var FoundItemsDirectiveController = function(){
        var ctrl = this;
        ctrl.hasResults = function(){
            return ctrl.items && ctrl.items.length>0;
        }
    };

    angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController',NarrowItDownController)
    .service('MenuSearchService',MenuSearchService)
    .directive('foundItems',FoundItemsDirective)
    ;
})();

(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
    restrict: 'A',
    templateUrl: 'src/menuapp/templates/items.template.html',
    bindings: {
        items: '<'
    }
});

})();

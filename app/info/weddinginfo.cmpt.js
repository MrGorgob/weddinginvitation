(function () {
    'use strict';
    angular
        .module('app')
        .directive('myWeddingInfo',  weddingInfoDirective);
    
    
    weddingInfoDirective.$inject = ['$window'];

    function weddingInfoDirective($window) {
        
        return {
            replace:true,
            restrict:'E',
            templateUrl:'info/weddinginfo.tpl.html',
            link:function(scope, elem, attr) {
                scope.infoType = 'date';
            }
        };
    }

} ());
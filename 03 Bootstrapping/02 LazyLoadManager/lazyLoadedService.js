var appModule = angular.module("myApp");

appModule.factory("lazyLoadedService", function($q, $injector) {
    return {
        getData: function() {
            return "123";
        }
    }
});

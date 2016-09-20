var appModule = angular.module("myApp");

appModule.factory("lazyLoadManager", function($q, $injector) {
    return {
        load: function (serviceName) {
            var deferred = $q.defer();

            require([serviceName], function() {

                var serviceInstance = $injector.get(serviceName);

                deferred.resolve(serviceInstance);
            });

            return deferred.promise;
        }
    }
});

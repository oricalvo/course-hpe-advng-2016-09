var appModule = angular.module("myApp", []);


appModule.factory("xxx", function() {
    return {};
});

// appModule.factory("myService", function() {
//     return {
//         doSomething: function() {
//         }
//     };
// });

function MyServiceProvider() {
}

MyServiceProvider.prototype.configure = function(cacheSize) {
    this.cacheSize = cacheSize;
}

MyServiceProvider.prototype.$get = function() {
    return new MyService(this.cacheSize);
}

function MyService(cacheSize) {
}

MyService.prototype.doSomething = function () {
    console.log("CACHESIZE: " + this.cacheSize);
}

appModule.provider("myService", MyServiceProvider);

// appModule.provider("myService", {
//     configure: function (cacheSize) {
//         this.cacheSize = cacheSize;
//     },
//     $get: function () {
//         var me = this;
//
//         return {
//             doSomething: function() {
//                 console.log("CACHESIZE: " + me.cacheSize);
//             }
//         };
//     }
// });

appModule.decorator("xxx", function($delegate) {
    console.log("Return new service");

    return $delegate;
});

appModule.decorator("$location", function($delegate) {
    console.log("Return new service");

    var originalUrl = $delegate.url;

    $delegate.url = function(url) {
        if(url) {
            console.log("Url change request to: " + url);
        }

        return originalUrl.apply(this, arguments);
    }

    return $delegate;
});

appModule.config(function ($locationProvider, myServiceProvider, xxxProvider) {
    //$locationProvider.html5Mode(true);

    // xxxProvider.$get = function() {
    //     console.log("Return new service");
    //     return {};
    // }

    myServiceProvider.configure(15);
});

appModule.controller("HomeCtrl", function ($scope, $location, myService, xxx) {
    myService.doSomething();
    $scope.change = function (index) {
        $location.url("xxx");
    }
});

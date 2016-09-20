var appModule = angular.module("myApp", []);

appModule.config(function($controllerProvider, $provide) {
    appModule.$controllerProvider = $controllerProvider;
    appModule.$provide = $provide; 
});

appModule.run(function() {
    appModule.controller = appModule.$controllerProvider.register;
    appModule.factory = appModule.$provide.factory; 
});

appModule.controller("HomeCtrl", function($scope, lazyLoadManager) {
    $scope.isAdminZoneVisible = false;

    $scope.showAdminZone = function() {

        lazyLoadManager.load("lazyLoadedService").then(function(service) {
            $scope.data = service.getData();
        });
    }
});

// var secondModule = angular.module("second", []);
// secondModule.controller("second.Ctrl", function($scope) {
// });

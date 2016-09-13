var appModule = angular.module("myApp", []);

appModule.config(function($controllerProvider) {
    appModule.$controllerProvider = $controllerProvider;
});

appModule.run(function() {
    appModule.controller = appModule.$controllerProvider.register; 
});

appModule.controller("HomeCtrl", function($scope, lazyLoadManager) {
    $scope.isAdminZoneVisible = false;

    $scope.showAdminZone = function() {

        lazyLoadManager.load("lazyLoadedService", function(service) {
            $scope.data = service.getData();
        });

        // require(["adminCtrl"], function() {
        //     $scope.isAdminZoneVisible = true;
        //
        //     $scope.$apply();
        // });

    }
});

// var secondModule = angular.module("second", []);
// secondModule.controller("second.Ctrl", function($scope) {
// });

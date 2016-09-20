var appModule = angular.module("myApp", []);

appModule.controller("HomeCtrl", function($scope, $rootScope, $element) {
    $scope.onFileChanged = function(file) {
        console.log("onFileChanged: " + file.name);

        $scope.file = file;
    }
});

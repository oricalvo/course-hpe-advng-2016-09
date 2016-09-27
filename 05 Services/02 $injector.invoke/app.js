var appModule = angular.module("myApp", []);

appModule.controller("HomeCtrl", function ($scope, $injector) {

    function doSomething(_$rootScope_) {
        console.log("doSomething");
    }

    // a.$inject = ["$rootScope"];
    // function a(b) {
    // }

    $scope.change = function (index) {
        //$injector.invoke(["$rootScope", a]);

        $injector.invoke(doSomething);

        //console.log("%O", a);
    }
});

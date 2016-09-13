var appModule = angular.module("myApp");

// appModule.$controllerProvider.register("AdminCtrl", function($scope) {
//     $scope.run = function() {
//         alert("sss");
//     }
// });

appModule.controller("AdminCtrl", function($scope) {
    $scope.run = function() {
        alert("sss");
    }
});

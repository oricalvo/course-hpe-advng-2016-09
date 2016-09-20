var appModule = angular.module("myApp", []);

appModule.controller("HomeCtrl", function($scope, $rootScope) {
    $scope.data = 123;
    
    $scope.contacts = [
        {id:1, name: "Ori"},
        {id:2, name: "Roni"},
        {id:3, name: "Udi"},
    ];

    $scope.remove = function(index) {
        $scope.contacts.splice(index, 1);
    }
    
    $scope.$$postDigest(function() {
        $scope.data = "XXX";
    });
    
    // setTimeout(function() {
    //     $rootScope.$digest();
    // }, 0);
});

var appModule = angular.module("myApp", []);

appModule.controller("HomeCtrl", function($scope, $rootScope) {

    $scope.data = 0;
    $scope.otherData = 0;
    $scope.name = "Ori";

    $scope.$watch(function() {
        return $scope.otherData;
    }, function(newValue, oldValue) {
        if(newValue == oldValue) {
            return;
        }

        $timeout(function() {
            console.log($scope.name);
        });
    });

    $scope.$watch(function() {
        return $scope.data;
    }, function(newValue, oldValue) {
        if(newValue == oldValue) {
            return;
        }

        $scope.name = "XXX";
    });

    $scope.contacts = [
        {id:1, name: "Ori"},
        {id:2, name: "Roni"},
        {id:3, name: "Udi"},
    ];

    $scope.change = function() {
        //window.name += "X";

        //history.pushState({}, null, "blabla");

        $scope.data++;
        $scope.otherData++;
    }
    
    $scope.remove = function(index) {
        $scope.contacts.splice(index, 1);
    }
});

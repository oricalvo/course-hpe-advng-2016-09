var appModule = angular.module("myApp", []);

appModule.factory("contactService", function($q) {
    return {
        getAll: function() {
            return $q.when().then(()=> {
                var contacts = [
                    {id:1, name: "Ori"},
                    {id:2, name: "Roni"},
                ];

                //return contacts;

                //throw new Error("Ooops");
                return $q.reject(new Error("Ooops"));

                //return $q.when(contacts);
            });
        }
    };
});

appModule.controller("HomeCtrl", function ($scope, contactService) {

    $scope.change = function (index) {
        contactService.getAll().then(contacts => {
            $scope.contacts = contacts;
        }).catch((err)=> {
            console.log("ERROR: " + err.message);
        });
    }
});

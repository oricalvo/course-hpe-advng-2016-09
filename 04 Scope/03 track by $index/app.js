var appModule = angular.module("myApp", []);
const oldLis = [];
const newLis = [];

class ContactDetailsComponent {
    constructor($scope) {
        this.internalState = 0;

        // $scope.$watch("$ctrl.contact", (newValue, oldValue) => {
        //     if(newValue == oldValue) {
        //         return;
        //     }
        //
        //     console.log("Changed: ", this.contact);
        //
        //     ++this.internalState;
        // });
    }

    $onInit() {
        console.log("$ngInit: " + this.contact.name);
    }

    $onChanges() {
        console.log("Changed: ", this.contact);

        ++this.internalState;
    }

    $onDestroy() {
        console.log("$ngDestroy: " + this.contact.name);
    }
}

appModule.component("contactDetails", {
    controller: ContactDetailsComponent,
    template: `<span class="name">{{$ctrl.contact.name}}</span>
    <span>{{$ctrl.internalState}}</span>`,
    bindings: {
        contact: "<",
    }
});

appModule.controller("HomeCtrl", function($scope, $rootScope, $element) {
    $scope.contacts = [
        {id:1, name: "Ori"},
        {id:2, name: "Roni"},
        {id:3, name: "Udi"},
    ];

    // $scope.$$postDigest(function() {
    //     takeDOM(oldLis);
    // });

    // $scope.$applyAsync(function() {
    //     takeDOM(oldLis);
    // });

    $scope.$evalAsync(function() {
        takeDOM(oldLis);
    });

    // setTimeout(function() {
    //     takeDOM(oldLis);
    // }, 0);

    // setTimeout(function() {
    //     for(let contact of $scope.contacts) {
    //         console.log(contact);
    //     }
    // }, 100);

    $scope.add = function() {
        const newContacts = $scope.contacts.concat([]);
        newContacts.push({id: 4, name: "Beni"});
        $scope.contacts = newContacts;

        takeDOM(oldLis);

        setTimeout(function() {
            takeDOM(newLis);
        }, 100);
    }

    $scope.mutate = function() {
        takeDOM(oldLis);

        const newContacts = $scope.contacts.concat([]);
        const tmp = newContacts[0];
        newContacts[0] = newContacts[1];
        newContacts[1] = tmp;
        $scope.contacts = newContacts;

        setTimeout(function() {
            takeDOM(newLis);
        }, 100);
    }

    $scope.clear = function() {
        takeDOM(oldLis);

        $scope.contacts = [];

        setTimeout(function() {
            takeDOM(newLis);
        }, 100);
    }
    
    $scope.replace = function() {
        takeDOM(oldLis);

        const newContacts = $scope.contacts.concat([]);
        newContacts[0] = {id:4, name: "Beni"};
        $scope.contacts = newContacts;

        setTimeout(function() {
            takeDOM(newLis);
        }, 100);
    }

    function takeDOM(lis) {
        lis.splice(0, lis.length);

        $element.find("li span.name").each(function() {
            lis.push(this);
        });
    }
});

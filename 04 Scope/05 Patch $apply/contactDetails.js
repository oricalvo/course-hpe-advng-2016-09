var appModule = angular.module("myApp");

class ContactDetailsComponent {
    constructor($scope) {
        this.$scope = $scope;
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

    remove() {
        this.onDelete({contact: this.contact});

        this.$scope.$requestLocalApply();
    }
}

appModule.component("contactDetails", {
    controller: ContactDetailsComponent,
    template: `<span class="name">{{$ctrl.contact.name}}</span>
        <button ng-click="$ctrl.remove()">Delete</button>`,
    bindings: {
        contact: "<",
        onDelete: "&",
    }
});

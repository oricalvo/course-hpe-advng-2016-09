class AppComponent {
    constructor() {
        this.contacts = [
            {id: 1, name: "Ori"},
            {id: 2, name: "Roni"},
            {id: 3, name: "Udi"},
        ];
    }

    change() {
        this.contacts = [
            {id: 1, name: "Ori"},
        ];
    }

    remove(c) {
        console.log("Removing: " + c.name);
    }
}

angular.module("myApp").component("myApp", {
    controller: AppComponent,
    template: `
        <div ng-repeat="grid in [1]">
            <my-grid items="$ctrl.contacts" item="contact">
                <columns>
                    <column title="ID">
                        <span>{{contact.id}}</span>
                        <button ng-click="$ctrl.remove(contact)">Delete</button>
                    </column>
                    <column title="Name">
                        <span>{{contact.name}}</span>
                        <input ng-model="contact.name" />
                    </column>
                </columns>
            </my-grid>        
        </div>
        
        <button ng-click="$ctrl.change()">Change</button>
    `
});


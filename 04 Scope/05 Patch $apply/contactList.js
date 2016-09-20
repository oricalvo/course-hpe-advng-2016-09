var appModule = angular.module("myApp");

class ContactListComponent {
    constructor() {
        this.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
            {id:3, name: "Udi"},
        ];
    }

    onContactDeleted(contact) {
        if(confirm("Delete contact " + contact.name + "?")) {
            const index = this.contacts.findIndex(c => c == contact);
            if(index != -1) {
                this.contacts.splice(index, 1);
            }
        }
    }
}

appModule.component("contactList", {
    controller: ContactListComponent,
    template: `<ul>
            <li ng-repeat="contact in $ctrl.contacts track by $index">
                <contact-details
                    on-delete="$ctrl.onContactDeleted(contact)"
                    contact="contact"></contact-details>
            </li>
        </ul>`,
});

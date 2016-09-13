import {appModule} from "../appModule";
import {ContactService, Contact} from "../services/ContactService";
import {ContactListComponent} from "./contactList";

ContactService;
ContactListComponent;

export class AppComponent {
    contacts: Contact[];
    contactList: ContactListComponent;
    
    constructor(contactService: ContactService) {
        console.log("AppComponent");
        
        contactService.getAll().then(contacts => {
            this.contacts = contacts;
        });

        //this.contactList.doSomething();
    }

    $onInit() {
        console.log("AppComponent.$onInit");
    }

    $postLink() {
        console.log("AppComponent.$postLink");

        this.contactList.start();
    }

    onContactListReset(args) {
        console.log("onContactListReset: " + args.contactCount);

        this.contacts = [];
    }

    changeContact() {
        //this.contacts[0].name = "XXX";

        var contact = Object.assign({}, this.contacts[0]);
        contact.name = "XXX";
        var newContacts = this.contacts.concat([]);
        newContacts[0] = contact;

        this.contacts = newContacts;
    }
}

appModule.component("app", <any>{
    template: require("./app.html!text"),
    controller: AppComponent,
    styles: require("./app.css!css")
});

import {appModule} from "../appModule";
import {ContactService, Contact} from "../services/ContactService";
import {Component} from "./Component"; ContactService;

export class ContactListComponent extends Component {
    //
    //  inputs
    //
    contacts: Contact[];
    contactsVM: any[];
    
    //
    //  events
    //
    onReset: Function;
    
    //
    //  state
    //
    
    constructor($attrs, $scope) {
        console.log("ContactListComponent");
        
        super($attrs, $scope);
    }

    $onChanges() {
        console.log("$onChanges");

        if(this.contacts) {
            this.contactsVM = this.contacts.map(c => ({name: c.name}));
        }
        else {
            this.contactsVM = [];
        }
    }

    reset() {
        this.onReset({
            args: {
                when: new Date(),
                contactCount: this.contacts.length
            }
        });
    }
    
    start() {
        console.log("start");
    }
}

appModule.component("contactList", <any>{
    template: require("./contactList.html!text"),
    controller: ContactListComponent,
    styles: require("./contactList.css!css"),
    bindings: {
        contacts: "<",
        onReset: "&",
    }
});

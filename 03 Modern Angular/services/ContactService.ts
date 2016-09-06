import {appModule} from "../appModule";

export class ContactService {
    constructor(private $q: ng.IQService) {
    }
    
    getAll() : ng.IPromise<Contact[]> {
        return this.$q.when([
            {id: 1, name: "Ori"},
            {id: 2, name: "Roni"},
        ]);
    }
}

export interface Contact {
    id: number;
    name: string;
}

appModule.service("contactService", ContactService);

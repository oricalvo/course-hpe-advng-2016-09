"use strict";
var appModule_1 = require("../appModule");
var ContactService_1 = require("../services/ContactService");
var contactList_1 = require("./contactList");
ContactService_1.ContactService;
contactList_1.ContactListComponent;
var AppComponent = (function () {
    function AppComponent(contactService) {
        var _this = this;
        console.log("AppComponent");
        contactService.getAll().then(function (contacts) {
            _this.contacts = contacts;
        });
        //this.contactList.doSomething();
    }
    AppComponent.prototype.$onInit = function () {
        console.log("AppComponent.$onInit");
    };
    AppComponent.prototype.$postLink = function () {
        console.log("AppComponent.$postLink");
        this.contactList.start();
    };
    AppComponent.prototype.onContactListReset = function (args) {
        console.log("onContactListReset: " + args.contactCount);
        this.contacts = [];
    };
    AppComponent.prototype.changeContact = function () {
        //this.contacts[0].name = "XXX";
        var contact = Object.assign({}, this.contacts[0]);
        contact.name = "XXX";
        var newContacts = this.contacts.concat([]);
        newContacts[0] = contact;
        this.contacts = newContacts;
    };
    return AppComponent;
}());
exports.AppComponent = AppComponent;
appModule_1.appModule.component("app", {
    template: require("./app.html!text"),
    controller: AppComponent,
    styles: require("./app.css!css")
});
//# sourceMappingURL=app.js.map
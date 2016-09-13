"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var appModule_1 = require("../appModule");
var ContactService_1 = require("../services/ContactService");
var Component_1 = require("./Component");
ContactService_1.ContactService;
var ContactListComponent = (function (_super) {
    __extends(ContactListComponent, _super);
    //
    //  state
    //
    function ContactListComponent($attrs, $scope) {
        console.log("ContactListComponent");
        _super.call(this, $attrs, $scope);
    }
    ContactListComponent.prototype.$onChanges = function () {
        console.log("$onChanges");
        if (this.contacts) {
            this.contactsVM = this.contacts.map(function (c) { return ({ name: c.name }); });
        }
        else {
            this.contactsVM = [];
        }
    };
    ContactListComponent.prototype.reset = function () {
        this.onReset({
            args: {
                when: new Date(),
                contactCount: this.contacts.length
            }
        });
    };
    ContactListComponent.prototype.start = function () {
        console.log("start");
    };
    return ContactListComponent;
}(Component_1.Component));
exports.ContactListComponent = ContactListComponent;
appModule_1.appModule.component("contactList", {
    template: require("./contactList.html!text"),
    controller: ContactListComponent,
    styles: require("./contactList.css!css"),
    bindings: {
        contacts: "<",
        onReset: "&",
    }
});
//# sourceMappingURL=contactList.js.map
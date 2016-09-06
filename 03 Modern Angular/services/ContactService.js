"use strict";
var appModule_1 = require("../appModule");
var ContactService = (function () {
    function ContactService($q) {
        this.$q = $q;
    }
    ContactService.prototype.getAll = function () {
        return this.$q.when([
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ]);
    };
    return ContactService;
}());
exports.ContactService = ContactService;
appModule_1.appModule.service("contactService", ContactService);
//# sourceMappingURL=ContactService.js.map
"use strict";
var ContactService_1 = require("../services/ContactService");
ContactService_1.ContactService;
var Component = (function () {
    function Component($attrs, $scope) {
        var _this = this;
        console.log("Component");
        if ($attrs.name) {
            $scope.$parent.$ctrl[$attrs.name] = this;
        }
        this.injector = angular.injector([function ($provide) {
                _this.provide = $provide;
            }]);
        var service = {};
        this.provide.value("blabla", service);
        var s = this.injector.get("blabla");
        console.log(service == s);
    }
    Component.prototype.registerLocalService = function (name, service) {
    };
    Component.prototype.resolveLocalService = function (name) {
    };
    return Component;
}());
exports.Component = Component;
//# sourceMappingURL=Component.js.map
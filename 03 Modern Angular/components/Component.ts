import {appModule} from "../appModule";
import {ContactService, Contact} from "../services/ContactService"; ContactService;

export class Component {
    injector;
    provide;

    constructor($attrs, $scope) {
        console.log("Component");

        if($attrs.name) {
            $scope.$parent.$ctrl[$attrs.name] = this;
        }

        this.injector = angular.injector([($provide) => {
            this.provide = $provide;
        }]);

        var service = {};
        this.provide.value("blabla", service);
        var s = this.injector.get("blabla");
        console.log(service ==s);
    }

    registerLocalService(name, service) {
    }

    resolveLocalService(name) {
    }
}

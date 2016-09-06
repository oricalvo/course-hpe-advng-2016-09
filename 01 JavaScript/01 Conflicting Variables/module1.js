var module1 = (function (m2) {
    "use strict";

    var privateData = 13;

    function run() {
        console.log("run1");
    }

    return {
        run: run,
    };

})(module2);


module1.privateData = 12;
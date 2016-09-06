var module2 = (function () {
    "use strict";

    //numberOfStudents = 12;

    var num1;
    var lastActivityDate;

    function run() {
        console.log("run2");
    }

    function getLastActivityDate() {
        console.log("getLastActivityDate");
    }

    var obj = {
        setName: function (name) {
            this.name = name;
        }
    };

    function g() {
        console.log(this);
    }

    g();

    obj.setName("Ori");
    console.log(obj.name);

    var func = obj.setName;
    func("Roni");
    console.log(window.name);

    return {
        getLastActivityDate: getLastActivityDate,
    };
})();


console.log(x);
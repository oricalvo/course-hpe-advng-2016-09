class AppComponent {
    constructor($compile, $element) {
        this.$compile = $compile;
        this.$element = $element;
    }

    run() {
        var ctrl = this.$element.scope();
        console.log("ctrl", ctrl);
    }
}

angular.module("myApp").component("myApp", {
    controller: AppComponent,
    template: `
        <dir1>
            <dir2></dir2>
        </dir1>
    `
});

for(var i=1; i<=2; i++) {
    (function(dirName) {
        angular.module("myApp").directive(dirName, function(){
            return {
                restrict: "E",
                compile: function() {
                    console.log(dirName + ".compile");

                    return {
                        pre: function() {
                            console.log(dirName + ".preLink");
                        },
                        post: function() {
                            console.log(dirName + ".postLink");
                        }
                    }
                },
                controller: function($scope) {
                    console.log(dirName + ".controller");

                    this.$postLink = function() {
                        console.log(dirName + ".ctrl.$postLink");
                    }
                }
            };
        });
    })("dir" + i);
}

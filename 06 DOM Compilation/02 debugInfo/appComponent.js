class AppComponent {
    constructor($compile, $element) {
        this.$compile = $compile;
        this.$element = $element;
    }

    run() {

        var ctrl = this.$element.scope();
        console.log("ctrl", ctrl);

        // var template = $("<span>{{name}}</span>");
        //
        // console.log(template[0].outerHTML);
        //
        // console.log("compile");
        // this.$compile(template);
        //
        // console.log(template[0].outerHTML);
    }
}

angular.module("myApp").component("myApp", {
    controller: AppComponent,
    template: `
        <button ng-click="$ctrl.run()">Run</button>
    `
});


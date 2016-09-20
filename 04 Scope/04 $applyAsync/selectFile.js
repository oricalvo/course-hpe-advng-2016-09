var appModule = angular.module("myApp");

function SelectFileComponent($element, $scope) {
    this.$element = $element;
    this.$scope = $scope;
}

SelectFileComponent.prototype.$onInit = function() {
    console.log("$ngInit");
}

SelectFileComponent.prototype.$onChanges = function() {
    var me = this;

    console.log("$onChanges");

    this.input = this.$element.find("input[type=file]");
    this.input.on("change", function() {
        me.$scope.$applyAsync(function() {
            var file = me.input[0].files[0];
            console.log("Changed: " + file.name);

            me.onChanged({file: file});
        });
    });
}

SelectFileComponent.prototype.$onDestroy = function() {
    console.log("$ngDestroy");
}

SelectFileComponent.prototype.browse = function() {
    this.input.trigger("click");
}

SelectFileComponent.prototype.fileChanged = function() {
}

appModule.component("selectFile", {
    controller: SelectFileComponent,
    template: "<input type='file' /><button ng-click='$ctrl.browse()'>Browse</button>",
    bindings: {
        "onChanged": "&",
    }
});


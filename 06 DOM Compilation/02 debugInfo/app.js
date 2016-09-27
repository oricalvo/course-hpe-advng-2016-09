var appModule = angular.module("myApp", []);

appModule.config(function($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
});

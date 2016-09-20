var appModule = angular.module("myApp", []);

var enforceLocalDigest = false;

appModule.run(function($rootScope, $exceptionHandler) {
    console.log($rootScope.constructor.prototype);

    $rootScope.constructor.prototype.$requestLocalApply = function(expr) {
        enforceLocalDigest = true;
    }
    
    const originalApply = $rootScope.constructor.prototype.$apply;
    $rootScope.constructor.prototype.$apply = function(expr) {

        this.$eval(expr);

        if(enforceLocalDigest) {
            this.$digest();

            enforceLocalDigest = false;
        }
        else {
            $rootScope.$digest();
        }

        //return originalApply.apply(this, arguments);
    }
});

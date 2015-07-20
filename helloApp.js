var helloApp;
(function (helloApp) {
    "use strict";
    var HelloNgTypeScriptDirective = (function () {
        function HelloNgTypeScriptDirective() {
            return helloApp.HelloNgTypeScriptDirective.addColor();
        }
        HelloNgTypeScriptDirective.addColor = function () {
            return {
                restrict: 'E',
                template: '<div>Hello Ng TypeScript Directive</div>'
            };
        };
        return HelloNgTypeScriptDirective;
    })();
    helloApp.HelloNgTypeScriptDirective = HelloNgTypeScriptDirective;
})(helloApp || (helloApp = {}));
var helloApp;
(function (helloApp) {
    'use strict';
    var HelloNgTypeScriptService = (function () {
        function HelloNgTypeScriptService() {
            this.message = "Hello, ng TypeScript";
        }
        HelloNgTypeScriptService.prototype.getHelloMessage = function () {
            return this.message;
        };
        return HelloNgTypeScriptService;
    })();
    helloApp.HelloNgTypeScriptService = HelloNgTypeScriptService;
})(helloApp || (helloApp = {}));
var helloApp;
(function (helloApp) {
    'use strict';
    var HelloNgTypeScriptCtrl = (function () {
        function HelloNgTypeScriptCtrl(helloNgTypeScriptService) {
            console.log('test Controller..');
            this.message = helloNgTypeScriptService.getHelloMessage();
        }
        HelloNgTypeScriptCtrl.$inject = ['helloNgTypeScriptService'];
        return HelloNgTypeScriptCtrl;
    })();
    helloApp.HelloNgTypeScriptCtrl = HelloNgTypeScriptCtrl;
})(helloApp || (helloApp = {}));
var helloApp;
(function (helloApp) {
    'use strict';
    var myapp = angular.module('helloApp', ['ngRoute']);
    myapp.controller('ctrl', helloApp.HelloNgTypeScriptCtrl);
    myapp.service('helloNgTypeScriptService', helloApp.HelloNgTypeScriptService);
    myapp.directive('helloNgTypeScriptDirective', function () { return new helloApp.HelloNgTypeScriptDirective(); });
    myapp.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', { templateUrl: 'hello.html' }).
                otherwise({ redirectTo: '/home' });
        }]);
})(helloApp || (helloApp = {}));
/// <reference path='jquery/jquery.d.ts' />
/// <reference path='angular/angular.d.ts' />
/// <reference path='angular/angular-route.d.ts' />
/// <reference path='directives/HelloNgTypeScriptDirective.ts' />
/// <reference path='services/HelloNgTypeScriptService.ts' />
/// <reference path='controllers/HelloNgTypeScriptCtrl.ts' />
/// <reference path='helloApp.ts' /> 

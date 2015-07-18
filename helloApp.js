var helloApp;
(function (helloApp) {
    var HelloNgTypeScriptService = (function () {
        function HelloNgTypeScriptService() {
            console.log(' Hello Ng TypeScript Service');
        }
        HelloNgTypeScriptService.prototype.getHelloMessage = function () {
            return "Hello, ng TypeScript";
        };
        return HelloNgTypeScriptService;
    })();
    helloApp.HelloNgTypeScriptService = HelloNgTypeScriptService;
})(helloApp || (helloApp = {}));
var helloApp;
(function (helloApp) {
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
    myapp.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', { templateUrl: 'hello.html' }).
                otherwise({ redirectTo: '/home' });
        }]);
})(helloApp || (helloApp = {}));
/// <reference path='jquery/jquery.d.ts' />
/// <reference path='angular/angular.d.ts' />
/// <reference path='angular/angular-route.d.ts' />
/// <reference path='services/HelloNgTypeScriptService.ts' />
/// <reference path='controllers/HelloNgTypeScriptCtrl.ts' />
/// <reference path='helloApp.ts' /> 

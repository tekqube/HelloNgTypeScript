module helloApp {
    'use strict'
    
    var myapp: ng.IModule = angular.module('helloApp', ['ngRoute']);

    myapp.controller('ctrl', HelloNgTypeScriptCtrl);
    myapp.service('helloNgTypeScriptService', HelloNgTypeScriptService);
    myapp.directive('helloNgTypeScriptDirective', () => new HelloNgTypeScriptDirective());
    
    myapp.config(['$routeProvider', function($routeProvider: ng.route.IRouteProvider) {
        $routeProvider.when('/', {templateUrl: 'hello.html'}).
        otherwise({redirectTo: '/home'})
    }]);
}
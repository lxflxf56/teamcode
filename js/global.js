var hostname='http://localhost:8080';
var Authorization=sessionStorage.Authorization;
var app = angular.module("myApp",[]);
app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);


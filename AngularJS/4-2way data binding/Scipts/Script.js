/// <reference path="angular.js" />

var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        let employee = {
            firstName: "Ben",
            lastName: "Hastings",
            gender: "Male"
        };
        $scope.employee = employee;
    });
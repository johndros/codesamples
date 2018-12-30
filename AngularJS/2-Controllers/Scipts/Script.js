/// <reference path="angular.js" />

var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employee = {
            firstName: 'Mark',
            lastName: 'Hastings',
            gender: 'Male'
        };
    $scope.employee = employee;
    });
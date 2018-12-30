/// <reference path="angular.js" />

var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var country = {
            name: "Greece",
            capital: "Athens",
            flag: "/Images/gr-flag.gif"
        };
        $scope.country = country;
    });
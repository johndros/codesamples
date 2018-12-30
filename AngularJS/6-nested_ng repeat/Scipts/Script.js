/// <reference path="angular.js" />

var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        let countries = [
            {
                name: "Greece",
                cities: [
                    { name: "Thessaloniki" },
                    { name: "Athens" },
                    { name: "Iraklio" }
                ]
            },
            {
                name: "USA",
                cities: [
                    { name: "Los Angeles" },
                    { name: "Chicago" },
                    { name: "Houston" }
                ]
            },
            {
                name: "France",
                cities: [
                    { name: "Paris" },
                    { name: "Lyon" },
                    { name: "Monaco" }
                ]
            },
        ];
        $scope.countries = countries;
    });
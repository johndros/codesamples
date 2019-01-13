/// <reference path="angular.js" />

var app = angular
    .module("demo", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.caseInsensitiveMatch = true;
        $routeProvider
                .when("/home", {
                    templateUrl: "Templates/home.html",
                    controller: "homeController as homeCtrl"
                })
                .when("/courses", {
                    templateUrl: "Templates/courses.html",
                    controller: "coursesController as coursesCtrl"
                })
                .when("/students", {
                    templateUrl: "Templates/students.html",
                    controller: "studentsController as studentsCtrl"
            })
                .otherwise({
                    redirectTo: "/home"
                })
        $locationProvider.html5Mode(true);
        })
        .controller("homeController", function () {
            this.message = "Home Page";
        })
    .controller("coursesController", function () {
        this.courses = ['Angular', 'MySQL', 'HTML', 'Javascript', 'CSS']
    })
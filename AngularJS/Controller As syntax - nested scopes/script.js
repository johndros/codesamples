var app = angular
    .module("Demo", [])
    .controller("countryController", function () {
        this.name = "Greece";
    })
    .controller("stateController", function () {
        this.name = "Attiki";
    })
    .controller("cityController", function () {
        this.name = "Athens";
    });
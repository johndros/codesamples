"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.userText = 'Testing';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div style=\"padding:5px\">\n                            <ul class=\"nav nav-tabs\" style=\"margin-bottom: 10px;\">\n                                  <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"home\">Home</a></li>\n                                  <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"employees\">Employees</a></li>\n                            </ul>\n                            <router-outlet></router-outlet>\n                        </div>\n                        "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
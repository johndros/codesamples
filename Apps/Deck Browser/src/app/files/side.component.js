"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var service_1 = require("../service");
var SideComponent = /** @class */ (function () {
    function SideComponent(_Service) {
        this._Service = _Service;
    }
    SideComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._Service.getCards()
            .subscribe(function (cards) { return _this.cards = cards; }, function (error) {
            console.error(error);
        });
    };
    SideComponent.prototype.onSelect = function (card) {
        this.selectedCard = card;
    };
    SideComponent = __decorate([
        core_1.Component({
            selector: 'side',
            templateUrl: 'app/files/side.component.html',
            styleUrls: ['app/files/styles.css'],
            providers: [service_1.DeckService]
        }),
        __metadata("design:paramtypes", [service_1.DeckService])
    ], SideComponent);
    return SideComponent;
}());
exports.SideComponent = SideComponent;
//# sourceMappingURL=side.component.js.map
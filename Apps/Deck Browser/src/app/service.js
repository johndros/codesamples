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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/Observable/throw");
require("rxjs/add/observable/forkJoin");
var DeckService = /** @class */ (function () {
    function DeckService(_http) {
        this._http = _http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    DeckService.prototype.getCards = function () {
        var _this = this;
        var names = [
            'Burial from a Different Dimension',
            'Charge of the Light Brigade',
            'Infernoid Antra',
            'Infernoid Attondel',
            'Infernoid Decatron',
            'Infernoid Devyaty',
            'Infernoid Harmadik',
            'Infernoid Onuncu',
            'Infernoid Patrulea',
            'Infernoid Pirmais',
            'Infernoid Seitsemas',
            'Lyla, Lightsworn Sorceress',
            'Monster Gate',
            'One for One',
            'Raiden, Hand of the Lightsworn',
            'Reasoning',
            'Time-Space Trap Hole',
            'Torrential Tribute',
            'Upstart Goblin',
            'Void Seer'
        ];
        return Observable_1.Observable.forkJoin(names.map(function (i) { return _this._http.get("http://52.57.88.137/api/card_data/" + i, _this.options)
            .map(function (response) { return response.json().data; })
            .catch(_this.handleError); }));
    };
    DeckService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error);
    };
    DeckService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DeckService);
    return DeckService;
}());
exports.DeckService = DeckService;
//# sourceMappingURL=service.js.map
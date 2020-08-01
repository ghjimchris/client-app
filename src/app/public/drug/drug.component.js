"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DrugComponent = void 0;
var core_1 = require("@angular/core");
var DrugComponent = /** @class */ (function () {
    function DrugComponent() {
    }
    DrugComponent.prototype.ngOnInit = function () {
    };
    DrugComponent.prototype.showDrugDetails = function () {
        //change route or navigate to the drugs details page
    };
    DrugComponent = __decorate([
        core_1.Component({
            selector: 'app-drug',
            templateUrl: './drug.component.html',
            styleUrls: ['./drug.component.css']
        })
    ], DrugComponent);
    return DrugComponent;
}());
exports.DrugComponent = DrugComponent;
//# sourceMappingURL=drug.component.js.map
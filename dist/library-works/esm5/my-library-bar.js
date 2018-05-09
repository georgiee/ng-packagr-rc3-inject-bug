import { SomeComponent } from '@my/library/some-component';
import { Directive, InjectionToken, NgModule, Optional } from '@angular/core';

var BAR_TOKEN = new InjectionToken('bar-token');
var BarDirective = /** @class */ (function () {
    function BarDirective(_formField) {
        this._formField = _formField;
    }
    return BarDirective;
}());
BarDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[Bar]'
            },] },
];
BarDirective.ctorParameters = function () { return [
    { type: SomeComponent, decorators: [{ type: Optional },] },
]; };
var BarModule = /** @class */ (function () {
    function BarModule() {
    }
    return BarModule;
}());
BarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    BarDirective
                ],
                exports: [
                    BarDirective
                ]
            },] },
];

export { BAR_TOKEN, BarDirective, BarModule };
//# sourceMappingURL=my-library-bar.js.map

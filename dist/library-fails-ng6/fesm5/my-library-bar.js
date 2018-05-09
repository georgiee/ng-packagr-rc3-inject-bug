import { SomeComponent } from '@my/library/some-component';
import { Directive, InjectionToken, NgModule, Optional } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ BAR_TOKEN = new InjectionToken('bar-token');
var BarDirective = /** @class */ (function () {
    /**
     * @param {?} _formField
     */
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
/** @nocollapse */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { BAR_TOKEN, BarDirective, BarModule };
//# sourceMappingURL=my-library-bar.js.map

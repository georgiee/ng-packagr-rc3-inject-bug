/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { SomeComponent } from '@my/library/some-component';
import { Directive, InjectionToken, NgModule, Optional } from '@angular/core';
export var /** @type {?} */ BAR_TOKEN = new InjectionToken('bar-token');
var BarDirective = /** @class */ (function () {
    /**
     * @param {?} _formField
     */
    function BarDirective(_formField) {
        this._formField = _formField;
    }
    return BarDirective;
}());
export { BarDirective };
BarDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[Bar]'
            },] },
];
/** @nocollapse */
BarDirective.ctorParameters = function () { return [
    { type: SomeComponent, decorators: [{ type: Optional },] },
]; };
function BarDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BarDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BarDirective.ctorParameters;
    /** @type {?} */
    BarDirective.prototype._formField;
}
var BarModule = /** @class */ (function () {
    function BarModule() {
    }
    return BarModule;
}());
export { BarModule };
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
function BarModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BarModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BarModule.ctorParameters;
}
//# sourceMappingURL=public-api.js.map

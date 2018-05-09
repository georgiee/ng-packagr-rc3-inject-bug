/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { SomeComponent } from '@my/library/some-component';
import { Directive, InjectionToken, NgModule, Optional } from '@angular/core';
export const /** @type {?} */ BAR_TOKEN = new InjectionToken('bar-token');
export class BarDirective {
    /**
     * @param {?} _formField
     */
    constructor(_formField) {
        this._formField = _formField;
    }
}
BarDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[Bar]'
            },] },
];
/** @nocollapse */
BarDirective.ctorParameters = () => [
    { type: SomeComponent, decorators: [{ type: Optional },] },
];
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
export class BarModule {
}
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

import { SomeComponent } from '@my/library/some-component';
import { Directive, InjectionToken, NgModule, Optional } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const BAR_TOKEN = new InjectionToken('bar-token');
class BarDirective {
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
class BarModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { BAR_TOKEN, BarDirective, BarModule };
//# sourceMappingURL=my-library-bar.js.map

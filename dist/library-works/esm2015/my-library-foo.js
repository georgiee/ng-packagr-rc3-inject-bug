import { Inject, Injectable, Optional } from '@angular/core';
import { BAR_TOKEN } from '@my/library/bar';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FooClass {
    /**
     * @param {?} matDateLocale
     */
    constructor(matDateLocale) { }
}
FooClass.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FooClass.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [BAR_TOKEN,] },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { FooClass };
//# sourceMappingURL=my-library-foo.js.map

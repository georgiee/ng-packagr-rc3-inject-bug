import { Inject, Injectable, Optional } from '@angular/core';
import { BAR_TOKEN } from '@my/library/bar';

var FooClass = /** @class */ (function () {
    function FooClass(matDateLocale) {
    }
    return FooClass;
}());
FooClass.decorators = [
    { type: Injectable },
];
FooClass.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [BAR_TOKEN,] },] },
]; };

export { FooClass };
//# sourceMappingURL=my-library-foo.js.map

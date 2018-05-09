(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@my/library/bar')) :
	typeof define === 'function' && define.amd ? define('@my/library/foo', ['exports', '@angular/core', '@my/library/bar'], factory) :
	(factory((global.my = global.my || {}, global.my.library = global.my.library || {}, global.my.library.foo = {}),global.ng.core,global.my.library.bar));
}(this, (function (exports,core,bar) { 'use strict';

var FooClass = /** @class */ (function () {
    function FooClass(matDateLocale) {
    }
    return FooClass;
}());
FooClass.decorators = [
    { type: core.Injectable },
];
FooClass.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [bar.BAR_TOKEN,] },] },
]; };

exports.FooClass = FooClass;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-library-foo.umd.js.map

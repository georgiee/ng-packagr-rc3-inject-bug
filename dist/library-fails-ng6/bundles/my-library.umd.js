(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define('@my/library', ['exports'], factory) :
	(factory((global.my = global.my || {}, global.my.library = {})));
}(this, (function (exports) { 'use strict';

	/**
	 * @fileoverview added by tsickle
	 * @suppress {checkTypes} checked by tsc
	 */
	var /** @type {?} */ SOME_VALUE = 'hello';

	exports.SOME_VALUE = SOME_VALUE;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-library.umd.js.map

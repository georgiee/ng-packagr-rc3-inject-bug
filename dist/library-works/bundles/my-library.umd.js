(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define('@my/library', ['exports'], factory) :
	(factory((global.my = global.my || {}, global.my.library = {})));
}(this, (function (exports) { 'use strict';

var SOME_VALUE = 'hello';

exports.SOME_VALUE = SOME_VALUE;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-library.umd.js.map

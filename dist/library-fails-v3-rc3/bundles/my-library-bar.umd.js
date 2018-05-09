(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@my/library/some-component'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@my/library/bar', ['exports', '@my/library/some-component', '@angular/core'], factory) :
    (factory((global.my = global.my || {}, global.my.library = global.my.library || {}, global.my.library.bar = {}),global.my.library['some-component'],global.ng.core));
}(this, (function (exports,someComponent,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ BAR_TOKEN = new core.InjectionToken('bar-token');
    var BarDirective = (function () {
        /**
         * @param {?} _formField
         */
        function BarDirective(_formField) {
            this._formField = _formField;
        }
        return BarDirective;
    }());
    BarDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: 'input[Bar]'
                },] },
    ];
    /** @nocollapse */
    BarDirective.ctorParameters = function () {
        return [
            { type: someComponent.SomeComponent, decorators: [{ type: core.Optional },] },
        ];
    };
    var BarModule = (function () {
        function BarModule() {
        }
        return BarModule;
    }());
    BarModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        BarDirective
                    ],
                    exports: [
                        BarDirective
                    ]
                },] },
    ];

    exports.BAR_TOKEN = BAR_TOKEN;
    exports.BarDirective = BarDirective;
    exports.BarModule = BarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-library-bar.umd.js.map

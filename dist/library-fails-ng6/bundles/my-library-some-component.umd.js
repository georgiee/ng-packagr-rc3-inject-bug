(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@my/library/some-component', ['exports', '@angular/core'], factory) :
    (factory((global.my = global.my || {}, global.my.library = global.my.library || {}, global.my.library['some-component'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SomeComponent = (function () {
        function SomeComponent() {
        }
        return SomeComponent;
    }());
    SomeComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'some-component',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SomeComponent.ctorParameters = function () { return []; };
    var SomeComponentModule = (function () {
        function SomeComponentModule() {
        }
        return SomeComponentModule;
    }());
    SomeComponentModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        SomeComponent
                    ],
                    exports: [
                        SomeComponent
                    ]
                },] },
    ];

    exports.SomeComponent = SomeComponent;
    exports.SomeComponentModule = SomeComponentModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-library-some-component.umd.js.map

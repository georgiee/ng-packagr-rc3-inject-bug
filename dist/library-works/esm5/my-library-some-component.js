import { Component, NgModule } from '@angular/core';

var SomeComponent = /** @class */ (function () {
    function SomeComponent() {
    }
    return SomeComponent;
}());
SomeComponent.decorators = [
    { type: Component, args: [{
                selector: 'some-component',
                template: ''
            },] },
];
SomeComponent.ctorParameters = function () { return []; };
var SomeComponentModule = /** @class */ (function () {
    function SomeComponentModule() {
    }
    return SomeComponentModule;
}());
SomeComponentModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SomeComponent
                ],
                exports: [
                    SomeComponent
                ]
            },] },
];

export { SomeComponent, SomeComponentModule };
//# sourceMappingURL=my-library-some-component.js.map

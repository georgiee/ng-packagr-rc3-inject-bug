import { SomeComponent } from '@my/library/some-component';
import { InjectionToken } from '@angular/core';
export declare const BAR_TOKEN: InjectionToken<string>;
export declare class BarDirective {
    private _formField;
    constructor(_formField: SomeComponent);
}
export declare class BarModule {
}

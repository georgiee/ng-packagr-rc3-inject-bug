 # ng-packagr bug report examples
 Relates to https://github.com/dherges/ng-packagr/issues/852

 You see three commits. Two fail one works

 + [Angular v5 with ng-packagr 2.*](https://github.com/georgiee/ng-packagr-rc3-inject-bug/commit/25d2d725d6b8e2dd24e36702715dd4a4d54c33b4) ✅
 + [Angular v5 with ng-packagr 3.*-rc](https://github.com/georgiee/ng-packagr-rc3-inject-bug/commit/c37cfc3a00c30e49e93b0272f1da2f299c3f9cd8) ⛔
 + [Angular v6 with ng-packagr 3.*-rc](https://github.com/georgiee/ng-packagr-rc3-inject-bug/commit/947992450dfb8c693a792f864cba3f720d5bf7c8) ⛔


 That's the message

 ```
BUILD ERROR
: Can't resolve all parameters for BarDirective in ng-packagr-rc3-inject-bug/dist/library-fails-ng6/bar/my-library-bar.d.ts: (?).

Error: : Can't resolve all parameters for BarDirective in ng-packagr-rc3-inject-bug/dist/library-fails-ng6/bar/my-library-bar.d.ts: (?).

    at Object.<anonymous> (ng-packagr-rc3-inject-bug/node_modules/ng-packagr/lib/ngc/compile-source-files.js:62:68)
    at Generator.next (<anonymous>)
    at ng-packagr-rc3-inject-bug/node_modules/ng-packagr/lib/ngc/compile-source-files.js:7:71
    at new Promise (<anonymous>)
    at __awaiter (ng-packagr-rc3-inject-bug/node_modules/ng-packagr/lib/ngc/compile-source-files.js:3:12)
    at Object.compileSourceFiles (ng-packagr-rc3-inject-bug/node_modules/ng-packagr/lib/ngc/compile-source-files.js:21:12)
    at Object.<anonymous> (ng-packagr-rc3-inject-bug/node_modules/ng-packagr/lib/ng-v5/entry-point/ts/compile-ngc.transform.js:42:34)
    at Generator.next (<anonymous>)
    at ng-packagr-rc3-inject-bug/node_modules/ng-packagr/lib/ng-v5/entry-point/ts/compile-ngc.transform.js:7:71
    at new Promise (<anonymous>)
 ```
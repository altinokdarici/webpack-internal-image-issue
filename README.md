# Missing named exports for asset/inline with output.module in Webpack 5.99.0+

## Bug Report:
After upgrading from Webpack 5.98.0 to 5.99.0, I noticed that named exports for assets handled via type: 'asset/inline' are no longer present in the output when using output.module: true and experiments.outputModule.

In previous versions, Webpack generated explicit export statements for these assets. Starting from 5.99.0, this behavior changed, causing missing exports and breaking consumers relying on them.

## Diff between 5.98.0 and 5.99.0:
```diff
diff --git a/dist/index.mjs b/dist/index.mjs
index 79d7d69..dcb4146 100644
--- a/dist/index.mjs
+++ b/dist/index.mjs
@@ -89,6 +89,4 @@ eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpac
 /******/ // Load entry module and return exports
 /******/ // This entry module can't be inlined because the eval devtool is used.
 /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
-/******/ var __webpack_exports__logo = __webpack_exports__.logo;
-/******/ export { __webpack_exports__logo as logo };
 /******/
````
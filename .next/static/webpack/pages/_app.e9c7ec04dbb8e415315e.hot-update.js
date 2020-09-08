webpackHotUpdate_N_E("pages/_app",{

/***/ "./appredux/reducer/index.js":
/*!***********************************!*\
  !*** ./appredux/reducer/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _listArticlesReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listArticlesReducer */ \"./appredux/reducer/listArticlesReducer.js\");\n/* harmony import */ var _navbarReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbarReducer */ \"./appredux/reducer/navbarReducer.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  navbarReducer: _navbarReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  listArticlesReducer: _listArticlesReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwcmVkdXgvcmVkdWNlci9pbmRleC5qcz8yOGQ3Il0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsIm5hdmJhclJlZHVjZXIiLCJsaXN0QXJ0aWNsZXNSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVlQSw0SEFBZSxDQUFDO0FBQzdCQyxlQUFhLEVBQUVBLHNEQURjO0FBRTdCQyxxQkFBbUIsRUFBRUEsNERBQW1CQTtBQUZYLENBQUQsQ0FBOUIiLCJmaWxlIjoiLi9hcHByZWR1eC9yZWR1Y2VyL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgbGlzdEFydGljbGVzUmVkdWNlciBmcm9tIFwiLi9saXN0QXJ0aWNsZXNSZWR1Y2VyXCJcbmltcG9ydCBuYXZiYXJSZWR1Y2VyIGZyb20gXCIuL25hdmJhclJlZHVjZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBuYXZiYXJSZWR1Y2VyOiBuYXZiYXJSZWR1Y2VyLFxuICBsaXN0QXJ0aWNsZXNSZWR1Y2VyIDpsaXN0QXJ0aWNsZXNSZWR1Y2VyXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./appredux/reducer/index.js\n");

/***/ }),

/***/ "./appredux/reducer/listArticlesReducer.js":
/*!*************************************************!*\
  !*** ./appredux/reducer/listArticlesReducer.js ***!
  \*************************************************/
/*! exports provided: INITIAL_STATE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INITIAL_STATE\", function() { return INITIAL_STATE; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nconst INITIAL_STATE = {\n  data: []\n};\n\nconst listArticlesReducer = (state = INITIAL_STATE, action) => {\n  switch (action.type) {\n    case \"SET_DATA\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        data: action.payload\n      });\n    //ini tidak dipakai\n\n    case \"SET_DATA2\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        data: action.payload\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (listArticlesReducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwcmVkdXgvcmVkdWNlci9saXN0QXJ0aWNsZXNSZWR1Y2VyLmpzPzU3OTQiXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsImRhdGEiLCJsaXN0QXJ0aWNsZXNSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQU8sTUFBTUEsYUFBYSxHQUFHO0FBQzNCQyxNQUFJLEVBQUU7QUFEcUIsQ0FBdEI7O0FBS1AsTUFBTUMsbUJBQW1CLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHSCxhQUFULEVBQXdCSSxNQUF4QixLQUFtQztBQUM3RCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLFVBQUw7QUFDRSw2Q0FDS0YsS0FETDtBQUVFRixZQUFJLEVBQUVHLE1BQU0sQ0FBQ0U7QUFGZjtBQUtGOztBQUNBLFNBQUssV0FBTDtBQUNFLDZDQUNLSCxLQURMO0FBRUVGLFlBQUksRUFBRUcsTUFBTSxDQUFDRTtBQUZmOztBQU1GO0FBQ0UsYUFBT0gsS0FBUDtBQWhCSjtBQWtCRCxDQW5CRDs7QUFxQmVELGtGQUFmIiwiZmlsZSI6Ii4vYXBwcmVkdXgvcmVkdWNlci9saXN0QXJ0aWNsZXNSZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIGRhdGE6IFtdXG59XG5cblxuY29uc3QgbGlzdEFydGljbGVzUmVkdWNlciA9IChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIlNFVF9EQVRBXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cblxuICAgIC8vaW5pIHRpZGFrIGRpcGFrYWlcbiAgICBjYXNlIFwiU0VUX0RBVEEyXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cblxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RBcnRpY2xlc1JlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./appredux/reducer/listArticlesReducer.js\n");

/***/ }),

/***/ "./appredux/reducer/navbarReducer.js":
/*!*******************************************!*\
  !*** ./appredux/reducer/navbarReducer.js ***!
  \*******************************************/
/*! exports provided: INITIAL_STATE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INITIAL_STATE\", function() { return INITIAL_STATE; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n// Global state\nconst INITIAL_STATE = {\n  isClose: true,\n  isFetch: false,\n  showInfo: true,\n  //SHOW INFO GLOBAL STATE\n  isNotif: true\n};\n\nconst navbarReducer = (state = INITIAL_STATE, action) => {\n  switch (action.type) {\n    case \"CHANGE_IS_CLOSE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        inClose: !state.isClose\n      });\n\n    case \"CHANGE_IS_FETCH\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        inClose: !state.isFetch\n      });\n\n    case \"HANDLE_SHOW_INFO\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        showInfo: !state.showInfo,\n        isNotif: !state.isNotif\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navbarReducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwcmVkdXgvcmVkdWNlci9uYXZiYXJSZWR1Y2VyLmpzPzUxNjQiXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsImlzQ2xvc2UiLCJpc0ZldGNoIiwic2hvd0luZm8iLCJpc05vdGlmIiwibmF2YmFyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImluQ2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ08sTUFBTUEsYUFBYSxHQUFHO0FBQzNCQyxTQUFPLEVBQUUsSUFEa0I7QUFFM0JDLFNBQU8sRUFBRSxLQUZrQjtBQUkzQkMsVUFBUSxFQUFFLElBSmlCO0FBSVg7QUFDaEJDLFNBQU8sRUFBRTtBQUxrQixDQUF0Qjs7QUFRUCxNQUFNQyxhQUFhLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHTixhQUFULEVBQXdCTyxNQUF4QixLQUFtQztBQUN2RCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLGlCQUFMO0FBQ0UsNkNBQ0tGLEtBREw7QUFFRUcsZUFBTyxFQUFFLENBQUNILEtBQUssQ0FBQ0w7QUFGbEI7O0FBS0YsU0FBSyxpQkFBTDtBQUNFLDZDQUNLSyxLQURMO0FBRUVHLGVBQU8sRUFBRSxDQUFDSCxLQUFLLENBQUNKO0FBRmxCOztBQU1GLFNBQUssa0JBQUw7QUFDRSw2Q0FDS0ksS0FETDtBQUVFSCxnQkFBUSxFQUFFLENBQUNHLEtBQUssQ0FBQ0gsUUFGbkI7QUFHRUMsZUFBTyxFQUFFLENBQUNFLEtBQUssQ0FBQ0Y7QUFIbEI7O0FBT0Y7QUFDRSxhQUFPRSxLQUFQO0FBdkJKO0FBeUJELENBMUJEOztBQTRCZUQsNEVBQWYiLCJmaWxlIjoiLi9hcHByZWR1eC9yZWR1Y2VyL25hdmJhclJlZHVjZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHbG9iYWwgc3RhdGVcbmV4cG9ydCBjb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICBpc0Nsb3NlOiB0cnVlLFxuICBpc0ZldGNoOiBmYWxzZSxcblxuICBzaG93SW5mbzogdHJ1ZSwgLy9TSE9XIElORk8gR0xPQkFMIFNUQVRFXG4gIGlzTm90aWY6IHRydWVcbn1cblxuY29uc3QgbmF2YmFyUmVkdWNlciA9IChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIkNIQU5HRV9JU19DTE9TRVwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGluQ2xvc2U6ICFzdGF0ZS5pc0Nsb3NlXG4gICAgICB9XG4gICAgXG4gICAgY2FzZSBcIkNIQU5HRV9JU19GRVRDSFwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGluQ2xvc2U6ICFzdGF0ZS5pc0ZldGNoXG4gICAgICB9XG5cbiAgICAgIFxuICAgIGNhc2UgXCJIQU5ETEVfU0hPV19JTkZPXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2hvd0luZm86ICFzdGF0ZS5zaG93SW5mbyxcbiAgICAgICAgaXNOb3RpZjogIXN0YXRlLmlzTm90aWZcbiAgICAgIH1cblxuICAgIFxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuYXZiYXJSZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./appredux/reducer/navbarReducer.js\n");

/***/ }),

/***/ "./appredux/store.js":
/*!***************************!*\
  !*** ./appredux/store.js ***!
  \***************************/
/*! exports provided: initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeStore\", function() { return initializeStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useStore\", function() { return useStore; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer */ \"./appredux/reducer/index.js\");\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n//STORE\n\n\n\n // import navbarReducer,{INITIAL_STATE} from \"./reducer/navbarReducer\"\n\n\nlet store; // CONFIGURATION\n\nfunction initStore(preloadedState) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"createStore\"])(_reducer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4__[\"default\"])));\n}\n\nconst initializeStore = preloadedState => {\n  var _store2;\n\n  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state\n  // with the current state in the store, and create a new store\n\n\n  if (preloadedState && store) {\n    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store\n\n    store = undefined;\n  } // For SSG and SSR always create a new store\n\n\n  if (false) {} // Create the store once in the client\n\n  if (!store) store = _store;\n  return _store;\n};\nfunction useStore(initialState) {\n  _s();\n\n  const store = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(() => initializeStore(initialState), [initialState]);\n  return store;\n}\n\n_s(useStore, \"K8ucUnUnAgJZGJWAL9Ze8IHCmoQ=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwcmVkdXgvc3RvcmUuanM/YjQ3YyJdLCJuYW1lcyI6WyJzdG9yZSIsImluaXRTdG9yZSIsInByZWxvYWRlZFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVua01pZGRsZXdhcmUiLCJpbml0aWFsaXplU3RvcmUiLCJfc3RvcmUiLCJnZXRTdGF0ZSIsInVuZGVmaW5lZCIsInVzZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFFQSxJQUFJQSxLQUFKLEMsQ0FFQTs7QUFDQSxTQUFTQyxTQUFULENBQW1CQyxjQUFuQixFQUFtQztBQUNqQyxTQUFPQyx5REFBVyxDQUNoQkMsZ0RBRGdCLEVBRWhCRixjQUZnQixFQUdoQkcsb0ZBQW1CLENBQUNDLDZEQUFlLENBQUNDLG1EQUFELENBQWhCLENBSEgsQ0FBbEI7QUFLRDs7QUFFTSxNQUFNQyxlQUFlLEdBQUlOLGNBQUQsSUFBb0I7QUFBQTs7QUFDakQsTUFBSU8sTUFBTSxjQUFHVCxLQUFILDZDQUFZQyxTQUFTLENBQUNDLGNBQUQsQ0FBL0IsQ0FEaUQsQ0FHakQ7QUFDQTs7O0FBQ0EsTUFBSUEsY0FBYyxJQUFJRixLQUF0QixFQUE2QjtBQUMzQlMsVUFBTSxHQUFHUixTQUFTLGlDQUNiRCxLQUFLLENBQUNVLFFBQU4sRUFEYSxHQUViUixjQUZhLEVBQWxCLENBRDJCLENBSzNCOztBQUNBRixTQUFLLEdBQUdXLFNBQVI7QUFDRCxHQVpnRCxDQWNqRDs7O0FBQ0EsYUFBbUMsRUFmYyxDQWdCakQ7O0FBQ0EsTUFBSSxDQUFDWCxLQUFMLEVBQVlBLEtBQUssR0FBR1MsTUFBUjtBQUVaLFNBQU9BLE1BQVA7QUFDRCxDQXBCTTtBQXNCQSxTQUFTRyxRQUFULENBQWtCQyxZQUFsQixFQUFnQztBQUFBOztBQUNyQyxRQUFNYixLQUFLLEdBQUdjLHFEQUFPLENBQUMsTUFBTU4sZUFBZSxDQUFDSyxZQUFELENBQXRCLEVBQXNDLENBQUNBLFlBQUQsQ0FBdEMsQ0FBckI7QUFDQSxTQUFPYixLQUFQO0FBQ0Q7O0dBSGVZLFEiLCJmaWxlIjoiLi9hcHByZWR1eC9zdG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vU1RPUkVcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJ1xuLy8gaW1wb3J0IG5hdmJhclJlZHVjZXIse0lOSVRJQUxfU1RBVEV9IGZyb20gXCIuL3JlZHVjZXIvbmF2YmFyUmVkdWNlclwiXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlclwiXG5cbmxldCBzdG9yZVxuXG4vLyBDT05GSUdVUkFUSU9OXG5mdW5jdGlvbiBpbml0U3RvcmUocHJlbG9hZGVkU3RhdGUpIHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgIHJvb3RSZWR1Y2VyLFxuICAgIHByZWxvYWRlZFN0YXRlLFxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpXG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVTdG9yZSA9IChwcmVsb2FkZWRTdGF0ZSkgPT4ge1xuICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlKVxuXG4gIC8vIEFmdGVyIG5hdmlnYXRpbmcgdG8gYSBwYWdlIHdpdGggYW4gaW5pdGlhbCBSZWR1eCBzdGF0ZSwgbWVyZ2UgdGhhdCBzdGF0ZVxuICAvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxuICBpZiAocHJlbG9hZGVkU3RhdGUgJiYgc3RvcmUpIHtcbiAgICBfc3RvcmUgPSBpbml0U3RvcmUoe1xuICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgIC4uLnByZWxvYWRlZFN0YXRlLFxuICAgIH0pXG4gICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgc3RvcmVcbiAgICBzdG9yZSA9IHVuZGVmaW5lZFxuICB9XG5cbiAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgc3RvcmVcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX3N0b3JlXG4gIC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XG4gIGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlXG5cbiAgcmV0dXJuIF9zdG9yZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXG4gIHJldHVybiBzdG9yZVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./appredux/store.js\n");

/***/ })

})
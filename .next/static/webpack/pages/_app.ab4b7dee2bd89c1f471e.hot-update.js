webpackHotUpdate_N_E("pages/_app",{

/***/ "./appredux/reducer/index.js":
false,

/***/ "./appredux/reducer/listArticlesReducer.js":
false,

/***/ "./appredux/reducer/navbarReducer.js":
/*!*******************************************!*\
  !*** ./appredux/reducer/navbarReducer.js ***!
  \*******************************************/
/*! exports provided: INITIAL_STATE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INITIAL_STATE\", function() { return INITIAL_STATE; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n// Global state\nconst INITIAL_STATE = {\n  isClose: true,\n  isFetch: false,\n  showInfo: true,\n  //SHOW INFO GLOBAL STATE\n  isNotif: true,\n  data: []\n};\n\nconst navbarReducer = (state = INITIAL_STATE, action) => {\n  switch (action.type) {\n    case \"CHANGE_IS_CLOSE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        inClose: !state.isClose\n      });\n\n    case \"CHANGE_IS_FETCH\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        inClose: !state.isFetch\n      });\n\n    case \"HANDLE_SHOW_INFO\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        showInfo: !state.showInfo,\n        isNotif: !state.isNotif\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navbarReducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwcmVkdXgvcmVkdWNlci9uYXZiYXJSZWR1Y2VyLmpzPzUxNjQiXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsImlzQ2xvc2UiLCJpc0ZldGNoIiwic2hvd0luZm8iLCJpc05vdGlmIiwiZGF0YSIsIm5hdmJhclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJpbkNsb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNPLE1BQU1BLGFBQWEsR0FBRztBQUMzQkMsU0FBTyxFQUFFLElBRGtCO0FBRTNCQyxTQUFPLEVBQUUsS0FGa0I7QUFJM0JDLFVBQVEsRUFBRSxJQUppQjtBQUlYO0FBQ2hCQyxTQUFPLEVBQUUsSUFMa0I7QUFNM0JDLE1BQUksRUFBRTtBQU5xQixDQUF0Qjs7QUFTUCxNQUFNQyxhQUFhLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHUCxhQUFULEVBQXdCUSxNQUF4QixLQUFtQztBQUN2RCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLGlCQUFMO0FBQ0UsNkNBQ0tGLEtBREw7QUFFRUcsZUFBTyxFQUFFLENBQUNILEtBQUssQ0FBQ047QUFGbEI7O0FBS0YsU0FBSyxpQkFBTDtBQUNFLDZDQUNLTSxLQURMO0FBRUVHLGVBQU8sRUFBRSxDQUFDSCxLQUFLLENBQUNMO0FBRmxCOztBQU1GLFNBQUssa0JBQUw7QUFDRSw2Q0FDS0ssS0FETDtBQUVFSixnQkFBUSxFQUFFLENBQUNJLEtBQUssQ0FBQ0osUUFGbkI7QUFHRUMsZUFBTyxFQUFFLENBQUNHLEtBQUssQ0FBQ0g7QUFIbEI7O0FBS0Y7QUFDRSxhQUFPRyxLQUFQO0FBckJKO0FBdUJELENBeEJEOztBQTBCZUQsNEVBQWYiLCJmaWxlIjoiLi9hcHByZWR1eC9yZWR1Y2VyL25hdmJhclJlZHVjZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHbG9iYWwgc3RhdGVcbmV4cG9ydCBjb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICBpc0Nsb3NlOiB0cnVlLFxuICBpc0ZldGNoOiBmYWxzZSxcblxuICBzaG93SW5mbzogdHJ1ZSwgLy9TSE9XIElORk8gR0xPQkFMIFNUQVRFXG4gIGlzTm90aWY6IHRydWUsXG4gIGRhdGE6IFtdXG59XG5cbmNvbnN0IG5hdmJhclJlZHVjZXIgPSAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJDSEFOR0VfSVNfQ0xPU0VcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpbkNsb3NlOiAhc3RhdGUuaXNDbG9zZVxuICAgICAgfVxuICAgIFxuICAgIGNhc2UgXCJDSEFOR0VfSVNfRkVUQ0hcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpbkNsb3NlOiAhc3RhdGUuaXNGZXRjaFxuICAgICAgfVxuXG4gICAgICBcbiAgICBjYXNlIFwiSEFORExFX1NIT1dfSU5GT1wiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNob3dJbmZvOiAhc3RhdGUuc2hvd0luZm8sXG4gICAgICAgIGlzTm90aWY6ICFzdGF0ZS5pc05vdGlmXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5hdmJhclJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./appredux/reducer/navbarReducer.js\n");

/***/ }),

/***/ "./appredux/store.js":
/*!***************************!*\
  !*** ./appredux/store.js ***!
  \***************************/
/*! exports provided: initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeStore\", function() { return initializeStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useStore\", function() { return useStore; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var _reducer_navbarReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer/navbarReducer */ \"./appredux/reducer/navbarReducer.js\");\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n//STORE\n\n\n\n\n\nlet store; // CONFIGURATION\n\nfunction initStore(preloadedState = _reducer_navbarReducer__WEBPACK_IMPORTED_MODULE_5__[\"INITIAL_STATE\"]) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"createStore\"])(_reducer_navbarReducer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4__[\"default\"])));\n}\n\nconst initializeStore = preloadedState => {\n  var _store2;\n\n  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state\n  // with the current state in the store, and create a new store\n\n\n  if (preloadedState && store) {\n    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store\n\n    store = undefined;\n  } // For SSG and SSR always create a new store\n\n\n  if (false) {} // Create the store once in the client\n\n  if (!store) store = _store;\n  return _store;\n};\nfunction useStore(initialState) {\n  _s();\n\n  const store = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(() => initializeStore(initialState), [initialState]);\n  return store;\n}\n\n_s(useStore, \"K8ucUnUnAgJZGJWAL9Ze8IHCmoQ=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwcmVkdXgvc3RvcmUuanM/YjQ3YyJdLCJuYW1lcyI6WyJzdG9yZSIsImluaXRTdG9yZSIsInByZWxvYWRlZFN0YXRlIiwiSU5JVElBTF9TVEFURSIsImNyZWF0ZVN0b3JlIiwibmF2YmFyUmVkdWNlciIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVua01pZGRsZXdhcmUiLCJpbml0aWFsaXplU3RvcmUiLCJfc3RvcmUiLCJnZXRTdGF0ZSIsInVuZGVmaW5lZCIsInVzZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUosQyxDQUVBOztBQUNBLFNBQVNDLFNBQVQsQ0FBbUJDLGNBQWMsR0FBR0Msb0VBQXBDLEVBQW9EO0FBQ2xELFNBQU9DLHlEQUFXLENBQ2hCQyw4REFEZ0IsRUFFaEJILGNBRmdCLEVBR2hCSSxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQ0MsbURBQUQsQ0FBaEIsQ0FISCxDQUFsQjtBQUtEOztBQUVNLE1BQU1DLGVBQWUsR0FBSVAsY0FBRCxJQUFvQjtBQUFBOztBQUNqRCxNQUFJUSxNQUFNLGNBQUdWLEtBQUgsNkNBQVlDLFNBQVMsQ0FBQ0MsY0FBRCxDQUEvQixDQURpRCxDQUdqRDtBQUNBOzs7QUFDQSxNQUFJQSxjQUFjLElBQUlGLEtBQXRCLEVBQTZCO0FBQzNCVSxVQUFNLEdBQUdULFNBQVMsaUNBQ2JELEtBQUssQ0FBQ1csUUFBTixFQURhLEdBRWJULGNBRmEsRUFBbEIsQ0FEMkIsQ0FLM0I7O0FBQ0FGLFNBQUssR0FBR1ksU0FBUjtBQUNELEdBWmdELENBY2pEOzs7QUFDQSxhQUFtQyxFQWZjLENBZ0JqRDs7QUFDQSxNQUFJLENBQUNaLEtBQUwsRUFBWUEsS0FBSyxHQUFHVSxNQUFSO0FBRVosU0FBT0EsTUFBUDtBQUNELENBcEJNO0FBc0JBLFNBQVNHLFFBQVQsQ0FBa0JDLFlBQWxCLEVBQWdDO0FBQUE7O0FBQ3JDLFFBQU1kLEtBQUssR0FBR2UscURBQU8sQ0FBQyxNQUFNTixlQUFlLENBQUNLLFlBQUQsQ0FBdEIsRUFBc0MsQ0FBQ0EsWUFBRCxDQUF0QyxDQUFyQjtBQUNBLFNBQU9kLEtBQVA7QUFDRDs7R0FIZWEsUSIsImZpbGUiOiIuL2FwcHJlZHV4L3N0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9TVE9SRVxuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgbmF2YmFyUmVkdWNlcix7SU5JVElBTF9TVEFURX0gZnJvbSBcIi4vcmVkdWNlci9uYXZiYXJSZWR1Y2VyXCJcblxubGV0IHN0b3JlXG5cbi8vIENPTkZJR1VSQVRJT05cbmZ1bmN0aW9uIGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSA9IElOSVRJQUxfU1RBVEUgKSB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShcbiAgICBuYXZiYXJSZWR1Y2VyLFxuICAgIHByZWxvYWRlZFN0YXRlLFxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpXG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVTdG9yZSA9IChwcmVsb2FkZWRTdGF0ZSkgPT4ge1xuICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlKVxuXG4gIC8vIEFmdGVyIG5hdmlnYXRpbmcgdG8gYSBwYWdlIHdpdGggYW4gaW5pdGlhbCBSZWR1eCBzdGF0ZSwgbWVyZ2UgdGhhdCBzdGF0ZVxuICAvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxuICBpZiAocHJlbG9hZGVkU3RhdGUgJiYgc3RvcmUpIHtcbiAgICBfc3RvcmUgPSBpbml0U3RvcmUoe1xuICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgIC4uLnByZWxvYWRlZFN0YXRlLFxuICAgIH0pXG4gICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgc3RvcmVcbiAgICBzdG9yZSA9IHVuZGVmaW5lZFxuICB9XG5cbiAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgc3RvcmVcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX3N0b3JlXG4gIC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XG4gIGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlXG5cbiAgcmV0dXJuIF9zdG9yZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXG4gIHJldHVybiBzdG9yZVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./appredux/store.js\n");

/***/ })

})
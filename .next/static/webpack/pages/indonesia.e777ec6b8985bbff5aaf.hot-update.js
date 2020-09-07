webpackHotUpdate_N_E("pages/indonesia",{

/***/ "./components/Fab/fab.js":
/*!*******************************!*\
  !*** ./components/Fab/fab.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _appredux_actionType_navbarActionType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../appredux/actionType/navbarActionType */ \"./appredux/actionType/navbarActionType.js\");\nvar _jsxFileName = \"/home/kucing/project/covid-app/components/Fab/fab.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div`\n &:active{\n  padding: 0;\n  margin: 0;\n  opacity: 0.7;\n }\n`;\n_c = Container;\nconst ImgIcon = \"/chart.svg\";\nconst Icon = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img`\n position: fixed;\n  width: 60px;\n  height: 60px;\n  bottom: 40px;\n  right: 40px;\n  border-radius: 50%;\n  box-shadow: 2px 2px 3px #999;\n  cursor: pointer;\n`;\n_c2 = Icon;\nconst Notif = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div`\n  display: flex;\n  background: red;\n  position: fixed;\n  z-index: 100;\n  width: 20px;\n  height: 20px;\n  bottom: 40px;\n  right: 40px;\n  border-radius: 50%;\n `;\n_c3 = Notif;\n\nconst Fab = props => {\n  // 1.  munculkan notif saat isnotif = true di indonesia\n  //  2. notif hide saat state = false\n  // 3. close button diklik notif dihide\n  return __jsx(Container, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, __jsx(Icon, {\n    onClick: props.handleShowInfo,\n    src: ImgIcon,\n    alt: \"image-Fab\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }), props.isNotif ? __jsx(Notif, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 27\n    }\n  }) : null);\n};\n\n_c4 = Fab;\n\nconst mapStateToProps = state => {\n  return {\n    isNotif: state.navbarReducer.isNotif\n  };\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    handleShowInfo: () => dispatch({\n      type: _appredux_actionType_navbarActionType__WEBPACK_IMPORTED_MODULE_3__[\"HANDLE_SHOW_INFO\"]\n    })\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Fab));\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"Icon\");\n$RefreshReg$(_c3, \"Notif\");\n$RefreshReg$(_c4, \"Fab\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GYWIvZmFiLmpzPzVjZmIiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiSW1nSWNvbiIsIkljb24iLCJpbWciLCJOb3RpZiIsIkZhYiIsInByb3BzIiwiaGFuZGxlU2hvd0luZm8iLCJpc05vdGlmIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJuYXZiYXJSZWR1Y2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ0eXBlIiwiSEFORExFX1NIT1dfSU5GTyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQUk7Ozs7OztDQUE3QjtLQUFNRixTO0FBT04sTUFBTUcsT0FBTyxHQUFHLFlBQWhCO0FBRUEsTUFBTUMsSUFBSSxHQUFHSCx5REFBTSxDQUFDSSxHQUFJOzs7Ozs7Ozs7Q0FBeEI7TUFBTUQsSTtBQVVMLE1BQU1FLEtBQUssR0FBR0wseURBQU0sQ0FBQ0MsR0FBSTs7Ozs7Ozs7OztFQUF6QjtNQUFNSSxLOztBQVlQLE1BQU1DLEdBQUcsR0FBSUMsS0FBRCxJQUFXO0FBQ3JCO0FBQ0Y7QUFDQTtBQUVFLFNBQ0ksTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLElBQUQ7QUFDQSxXQUFPLEVBQUVBLEtBQUssQ0FBQ0MsY0FEZjtBQUVDLE9BQUcsRUFBRU4sT0FGTjtBQUVlLE9BQUcsRUFBQyxXQUZuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLR0ssS0FBSyxDQUFDRSxPQUFOLEdBQWlCLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWpCLEdBQStCLElBTGxDLENBREo7QUFVRCxDQWZEOztNQUFNSCxHOztBQWlCTixNQUFNSSxlQUFlLEdBQUlDLEtBQUQsSUFBVztBQUNqQyxTQUFPO0FBQ0xGLFdBQU8sRUFBRUUsS0FBSyxDQUFDQyxhQUFOLENBQW9CSDtBQUR4QixHQUFQO0FBR0QsQ0FKRDs7QUFNQSxNQUFNSSxrQkFBa0IsR0FBSUMsUUFBRCxJQUFjO0FBQ3ZDLFNBQU87QUFDTE4sa0JBQWMsRUFBRSxNQUFNTSxRQUFRLENBQUM7QUFBQ0MsVUFBSSxFQUFFQyxzRkFBZ0JBO0FBQXZCLEtBQUQ7QUFEekIsR0FBUDtBQUdELENBSkQ7O0FBTWVDLDBIQUFPLENBQUNQLGVBQUQsRUFBa0JHLGtCQUFsQixDQUFQLENBQTZDUCxHQUE3QyxDQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GYWIvZmFiLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IHtIQU5ETEVfU0hPV19JTkZPfSBmcm9tIFwiLi4vLi4vYXBwcmVkdXgvYWN0aW9uVHlwZS9uYXZiYXJBY3Rpb25UeXBlXCJcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAmOmFjdGl2ZXtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBvcGFjaXR5OiAwLjc7XG4gfVxuYFxuY29uc3QgSW1nSWNvbiA9IFwiL2NoYXJ0LnN2Z1wiXG5cbmNvbnN0IEljb24gPSBzdHlsZWQuaW1nYFxuIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm90dG9tOiA0MHB4O1xuICByaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gXG4gY29uc3QgTm90aWYgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3R0b206IDQwcHg7XG4gIHJpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gYFxuXG5jb25zdCBGYWIgPSAocHJvcHMpID0+IHtcbiAgLy8gMS4gIG11bmN1bGthbiBub3RpZiBzYWF0IGlzbm90aWYgPSB0cnVlIGRpIGluZG9uZXNpYVxuLy8gIDIuIG5vdGlmIGhpZGUgc2FhdCBzdGF0ZSA9IGZhbHNlXG4vLyAzLiBjbG9zZSBidXR0b24gZGlrbGlrIG5vdGlmIGRpaGlkZVxuXG4gIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8SWNvbiBcbiAgICAgICAgb25DbGljaz17cHJvcHMuaGFuZGxlU2hvd0luZm99XG4gICAgICAgICBzcmM9e0ltZ0ljb259IGFsdD1cImltYWdlLUZhYlwiIC8+XG4gICAgICAgIHtcbiAgICAgICAgIHByb3BzLmlzTm90aWYgPyAoPE5vdGlmIC8+KSA6IChudWxsKVxuICAgICAgICB9XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGlzTm90aWY6IHN0YXRlLm5hdmJhclJlZHVjZXIuaXNOb3RpZlxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGhhbmRsZVNob3dJbmZvOiAoKSA9PiBkaXNwYXRjaCh7dHlwZTogSEFORExFX1NIT1dfSU5GT30pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRmFiKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Fab/fab.js\n");

/***/ })

})
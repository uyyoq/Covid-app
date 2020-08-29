webpackHotUpdate_N_E("pages/indonesia",{

/***/ "./pages/info.js":
/*!***********************!*\
  !*** ./pages/info.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar _jsxFileName = \"/home/kucing/project/covid-app/pages/info.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div`\n display: flex;\n flex-direction: column;\n justify-content: center;\n align-items: center;\n margin: 0 auto;\n width: 100%;\n`;\n_c = Container;\nconst ListCont = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div`\n  border: 1px solid black;\n  margin-top: 10px;\n`;\n_c2 = ListCont;\nconst Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div`\n  padding: 90px 100px 100px 100px;\n`;\n_c3 = Wrap;\nconst ContClose = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img`\n  width: 30px;\n  height: 30px;\n`;\n_c4 = ContClose;\nconst CloseImg = \"/x.svg\";\nconst CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div`\npostition: fixed;\npadding: 10px;\nfloat: right;\ncursor: pointer;\nwidth: 35px;\nheight: 30px;\n`;\n_c5 = CloseBtn;\n\nconst Info = props => {\n  return __jsx(Container, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }, __jsx(ListCont, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, __jsx(CloseBtn, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }, __jsx(ContClose, {\n    onClick: props.handleShowInfo,\n    src: CloseImg,\n    alt: \"close-button-img\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  })), __jsx(Wrap, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, __jsx(\"ul\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, __jsx(\"li\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, \"Dikonfirmasi: 170 rb \"), __jsx(\"li\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, \"Sembuh: 82.236 \"), __jsx(\"li\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }, \"Meninggal: 5.765 \")))));\n};\n\n_c6 = Info;\n\nconst mapStateToProps = state => {\n  return {\n    isNotif: state.isNotif\n  };\n};\n\nconst mapDispactToProps = dispatch => {\n  return {\n    handleShowInfo: () => dispatch({\n      type: \"HANDLE_SHOW_INFO\"\n    })\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapDispactToProps)(Info));\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"ListCont\");\n$RefreshReg$(_c3, \"Wrap\");\n$RefreshReg$(_c4, \"ContClose\");\n$RefreshReg$(_c5, \"CloseBtn\");\n$RefreshReg$(_c6, \"Info\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5mby5qcz84Y2I4Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkxpc3RDb250IiwiV3JhcCIsIkNvbnRDbG9zZSIsImltZyIsIkNsb3NlSW1nIiwiQ2xvc2VCdG4iLCJJbmZvIiwicHJvcHMiLCJoYW5kbGVTaG93SW5mbyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiaXNOb3RpZiIsIm1hcERpc3BhY3RUb1Byb3BzIiwiZGlzcGF0Y2giLCJ0eXBlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxNQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQUk7Ozs7Ozs7Q0FBN0I7S0FBTUYsUztBQVNOLE1BQU1HLFFBQVEsR0FBR0YseURBQU0sQ0FBQ0MsR0FBSTs7O0NBQTVCO01BQU1DLFE7QUFLTixNQUFNQyxJQUFJLEdBQUdILHlEQUFNLENBQUNDLEdBQUk7O0NBQXhCO01BQU1FLEk7QUFJTixNQUFNQyxTQUFTLEdBQUdKLHlEQUFNLENBQUNLLEdBQUk7OztDQUE3QjtNQUFNRCxTO0FBS04sTUFBTUUsUUFBUSxHQUFHLFFBQWpCO0FBRUEsTUFBTUMsUUFBUSxHQUFHUCx5REFBTSxDQUFDQyxHQUFJOzs7Ozs7O0NBQTVCO01BQU1NLFE7O0FBU04sTUFBTUMsSUFBSSxHQUFJQyxLQUFELElBQVc7QUFDdEIsU0FDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQ7QUFBVyxXQUFPLEVBQUVBLEtBQUssQ0FBQ0MsY0FBMUI7QUFBMkMsT0FBRyxFQUFFSixRQUFoRDtBQUEwRCxPQUFHLEVBQUMsa0JBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURKLEVBSUUsTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhGLENBREYsQ0FKRixDQURGLENBREY7QUFnQkQsQ0FqQkQ7O01BQU1FLEk7O0FBbUJOLE1BQU1HLGVBQWUsR0FBSUMsS0FBRCxJQUFXO0FBQ2pDLFNBQU87QUFDTEMsV0FBTyxFQUFFRCxLQUFLLENBQUNDO0FBRFYsR0FBUDtBQUdELENBSkQ7O0FBTUEsTUFBTUMsaUJBQWlCLEdBQUlDLFFBQUQsSUFBYztBQUN0QyxTQUFPO0FBQ0xMLGtCQUFjLEVBQUUsTUFBTUssUUFBUSxDQUFDO0FBQUNDLFVBQUksRUFBRTtBQUFQLEtBQUQ7QUFEekIsR0FBUDtBQUdELENBSkQ7O0FBT2VDLDBIQUFPLENBQUNILGlCQUFELENBQVAsQ0FBMkJOLElBQTNCLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmZvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiBkaXNwbGF5OiBmbGV4O1xuIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiBtYXJnaW46IDAgYXV0bztcbiB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IExpc3RDb250ID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG5gO1xuXG5jb25zdCBXcmFwID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogOTBweCAxMDBweCAxMDBweCAxMDBweDtcbmA7XG5cbmNvbnN0IENvbnRDbG9zZSA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG5gO1xuXG5jb25zdCBDbG9zZUltZyA9IFwiL3guc3ZnXCJcblxuY29uc3QgQ2xvc2VCdG4gPSBzdHlsZWQuZGl2YFxucG9zdGl0aW9uOiBmaXhlZDtcbnBhZGRpbmc6IDEwcHg7XG5mbG9hdDogcmlnaHQ7XG5jdXJzb3I6IHBvaW50ZXI7XG53aWR0aDogMzVweDtcbmhlaWdodDogMzBweDtcbmA7XG5cbmNvbnN0IEluZm8gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPExpc3RDb250PlxuICAgICAgICAgIDxDbG9zZUJ0bj5cbiAgICAgICAgICAgIDxDb250Q2xvc2Ugb25DbGljaz17cHJvcHMuaGFuZGxlU2hvd0luZm99ICBzcmM9e0Nsb3NlSW1nfSBhbHQ9XCJjbG9zZS1idXR0b24taW1nXCIgLz5cbiAgICAgICAgICA8L0Nsb3NlQnRuPlxuICAgICAgICA8V3JhcD5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+RGlrb25maXJtYXNpOiAxNzAgcmIgPC9saT5cbiAgICAgICAgICAgIDxsaT5TZW1idWg6IDgyLjIzNiA8L2xpPlxuICAgICAgICAgICAgPGxpPk1lbmluZ2dhbDogNS43NjUgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L1dyYXA+XG4gICAgICA8L0xpc3RDb250PlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGlzTm90aWY6IHN0YXRlLmlzTm90aWZcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYWN0VG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGhhbmRsZVNob3dJbmZvOiAoKSA9PiBkaXNwYXRjaCh7dHlwZTogXCJIQU5ETEVfU0hPV19JTkZPXCJ9KVxuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBEaXNwYWN0VG9Qcm9wcykoSW5mbyk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/info.js\n");

/***/ })

})
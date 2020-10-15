webpackHotUpdate_N_E("pages/indonesia",{

/***/ "./pages/indonesia.js":
/*!****************************!*\
  !*** ./pages/indonesia.js ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar/index.js\");\n/* harmony import */ var _components_Fab_fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Fab/fab */ \"./components/Fab/fab.js\");\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info */ \"./pages/info.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _jsxFileName = \"/home/kucing/project/covid-app/pages/indonesia.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div`\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nmargin: 0 auto;\nwidth: 100%;\n`;\n_c = Container;\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div`\n  width: 55%;\n  text-align: center;\n  padding: 10px;\n  border: 1px solid black;\n`;\n_c2 = Wrapper;\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].p`\n  font-size: 15px;\n  font-weight: bold;\n  font-family: Arial, Helvetica, sans-serif;\n`;\n_c3 = Title;\nconst Source = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].p`\n  font-size: 13px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-style: italic;\n  margin-top: -10px;\n`;\n_c4 = Source;\nconst Link = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].a`\n  color: black;\n  text-decoration: none;\n`;\n_c5 = Link;\n\nconst Indonesia = ({\n  data\n}) => {\n  _s();\n\n  // const [showInfo, setShowInfo] = useState(true);\n  // const [isNotif, setNotif] = useState(true);\n  const showInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(state => state.navbarReducer.showInfo);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    console.log(\"data covid indo\", data.articles);\n  }, []); // const handleShowInfo = () => {\n  //   setShowInfo(!showInfo)\n  //   setNotif(!isNotif)\n  // }\n\n  return __jsx(Container, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }), __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, \"Covid News - Indonesia\"), showInfo ? data.articles.map(data => __jsx(Wrapper, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }, __jsx(Link, {\n    href: data.url,\n    target: \"_blank\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 15\n    }\n  }, __jsx(Title, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 17\n    }\n  }, data.title), __jsx(Source, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 17\n    }\n  }, data.source.name)))) : __jsx(_info__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 15\n    }\n  }), __jsx(_components_Fab_fab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 6\n    }\n  }));\n};\n\n_s(Indonesia, \"8JfUQcCiECzMYe0+B0DHJ0j6UxY=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c6 = Indonesia;\n\nconst mapStateToProps = state => {\n  return {\n    showInfo: state.navbarReducer.showInfo\n  };\n};\n\nconst mapDispatchToProps = {};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Indonesia));\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"Wrapper\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"Source\");\n$RefreshReg$(_c5, \"Link\");\n$RefreshReg$(_c6, \"Indonesia\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kb25lc2lhLmpzP2E1MmUiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiV3JhcHBlciIsIlRpdGxlIiwicCIsIlNvdXJjZSIsIkxpbmsiLCJhIiwiSW5kb25lc2lhIiwiZGF0YSIsInNob3dJbmZvIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIm5hdmJhclJlZHVjZXIiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiYXJ0aWNsZXMiLCJtYXAiLCJ1cmwiLCJ0aXRsZSIsInNvdXJjZSIsIm5hbWUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQUk7Ozs7Ozs7Q0FBN0I7S0FBTUYsUztBQVFOLE1BQU1HLE9BQU8sR0FBR0YseURBQU0sQ0FBQ0MsR0FBSTs7Ozs7Q0FBM0I7TUFBTUMsTztBQU1OLE1BQU1DLEtBQUssR0FBR0gseURBQU0sQ0FBQ0ksQ0FBRTs7OztDQUF2QjtNQUFNRCxLO0FBS04sTUFBTUUsTUFBTSxHQUFHTCx5REFBTSxDQUFDSSxDQUFFOzs7OztDQUF4QjtNQUFNQyxNO0FBT04sTUFBTUMsSUFBSSxHQUFHTix5REFBTSxDQUFDTyxDQUFFOzs7Q0FBdEI7TUFBTUQsSTs7QUFLTixNQUFNRSxTQUFTLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBYTtBQUFBOztBQUM3QjtBQUNBO0FBQ0EsUUFBTUMsUUFBUSxHQUFHQywrREFBVyxDQUFDQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsYUFBTixDQUFvQkgsUUFBOUIsQ0FBNUI7QUFFQUkseURBQVMsQ0FBQyxNQUFNO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCUCxJQUFJLENBQUNRLFFBQXBDO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVCxDQUw2QixDQVM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUNFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUZGLEVBS0lQLFFBQVEsR0FDTkQsSUFBSSxDQUFDUSxRQUFMLENBQWNDLEdBQWQsQ0FBa0JULElBQUksSUFDcEIsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLElBQUQ7QUFBTSxRQUFJLEVBQUVBLElBQUksQ0FBQ1UsR0FBakI7QUFBc0IsVUFBTSxFQUFDLFFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRVixJQUFJLENBQUNXLEtBQWIsQ0FERixFQUVFLE1BQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVNYLElBQUksQ0FBQ1ksTUFBTCxDQUFZQyxJQUFyQixDQUZGLENBREYsQ0FERixDQURNLEdBU0YsTUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZFYsRUFpQkMsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJELENBREY7QUFxQkQsQ0FuQ0Q7O0dBQU1kLFM7VUFHYUcsdUQ7OztNQUhiSCxTOztBQXFETixNQUFNZSxlQUFlLEdBQUlYLEtBQUQsSUFBVztBQUNqQyxTQUFPO0FBQ0xGLFlBQVEsRUFBRUUsS0FBSyxDQUFDQyxhQUFOLENBQW9CSDtBQUR6QixHQUFQO0FBR0QsQ0FKRDs7QUFNQSxNQUFNYyxrQkFBa0IsR0FBRyxFQUEzQjs7QUFFZUMsMEhBQU8sQ0FBQ0YsZUFBRCxFQUFrQkMsa0JBQWxCLENBQVAsQ0FBNkNoQixTQUE3QyxDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kb25lc2lhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IEZhYiBmcm9tICcuLi9jb21wb25lbnRzL0ZhYi9mYWInO1xuaW1wb3J0IEluZm8gZnJvbSBcIi4vaW5mb1wiXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgQVBJX0NPVklEX0lORE8gfSBmcm9tICcuLi9jb25zdGFudC9BUElfVVJMJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuZGlzcGxheTogZmxleDtcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5tYXJnaW46IDAgYXV0bztcbndpZHRoOiAxMDAlO1xuYFxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA1NSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5gO1xuY29uc3QgVGl0bGUgPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG5gO1xuY29uc3QgU291cmNlID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG5gO1xuXG5jb25zdCBMaW5rID0gc3R5bGVkLmFgXG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuYDtcblxuY29uc3QgSW5kb25lc2lhID0gKHtkYXRhIH0pID0+IHtcbiAgLy8gY29uc3QgW3Nob3dJbmZvLCBzZXRTaG93SW5mb10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgLy8gY29uc3QgW2lzTm90aWYsIHNldE5vdGlmXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBzaG93SW5mbyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm5hdmJhclJlZHVjZXIuc2hvd0luZm8pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImRhdGEgY292aWQgaW5kb1wiLCBkYXRhLmFydGljbGVzKVxuICB9LCBbXSlcblxuICAvLyBjb25zdCBoYW5kbGVTaG93SW5mbyA9ICgpID0+IHtcbiAgLy8gICBzZXRTaG93SW5mbyghc2hvd0luZm8pXG4gIC8vICAgc2V0Tm90aWYoIWlzTm90aWYpXG4gIC8vIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8aDE+Q292aWQgTmV3cyAtIEluZG9uZXNpYTwvaDE+XG5cbiAgICAgIHtcbiAgICAgICAgc2hvd0luZm8gPyAoXG4gICAgICAgICAgZGF0YS5hcnRpY2xlcy5tYXAoZGF0YSA9PiAoXG4gICAgICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17ZGF0YS51cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgIDxUaXRsZT57ZGF0YS50aXRsZX08L1RpdGxlPlxuICAgICAgICAgICAgICAgIDxTb3VyY2U+e2RhdGEuc291cmNlLm5hbWV9PC9Tb3VyY2U+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgICApKVxuICAgICAgICApIDogKCA8SW5mbyAvPikgXG4gICAgICB9XG4gICAgICBcbiAgICAgPEZhYiAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0NPVklEX0lORE99YClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczpcbiAgICAgICAgeyBkYXRhIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7fVxuICAgIH1cbiAgfVxufVxuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHNob3dJbmZvOiBzdGF0ZS5uYXZiYXJSZWR1Y2VyLnNob3dJbmZvXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge31cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSW5kb25lc2lhKTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/indonesia.js\n");

/***/ }),

/***/ "./pages/info.js":
/*!***********************!*\
  !*** ./pages/info.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _appredux_actionType_navbarActionType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../appredux/actionType/navbarActionType */ \"./appredux/actionType/navbarActionType.js\");\nvar _jsxFileName = \"/home/kucing/project/covid-app/pages/info.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div`\n display: flex;\n flex-direction: column;\n justify-content: center;\n align-items: center;\n margin: 0 auto;\n width: 100%;\n`;\n_c = Container;\nconst ListCont = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div`\n  border: 1px solid black;\n  margin-top: 10px;\n`;\n_c2 = ListCont;\nconst Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div`\n  padding: 90px 100px 100px 100px;\n`;\n_c3 = Wrap;\nconst ContClose = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img`\n  width: 30px;\n  height: 30px;\n`;\n_c4 = ContClose;\nconst CloseImg = \"/x.svg\";\nconst CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div`\npostition: fixed;\npadding: 10px;\nfloat: right;\ncursor: pointer;\nwidth: 35px;\nheight: 30px;\n`;\n_c5 = CloseBtn;\n\nconst Info = props => {\n  return __jsx(Container, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, __jsx(ListCont, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(CloseBtn, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, __jsx(ContClose, {\n    onClick: props.handleShowInfo,\n    src: CloseImg,\n    alt: \"close-button-img\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  })), __jsx(Wrap, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, __jsx(\"ul\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }, __jsx(\"li\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, \"Dikonfirmasi: 170 rb \"), __jsx(\"li\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, \"Sembuh: 82.236 \"), __jsx(\"li\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, \"Meninggal: 5.765 \")))));\n};\n\n_c6 = Info;\n\nconst mapStateToProps = state => {\n  return {\n    showInfo: state.navbarReducer.showInfo\n  };\n};\n\nconst mapDispactToProps = dispatch => {\n  return {\n    handleShowInfo: () => dispatch({\n      type: _appredux_actionType_navbarActionType__WEBPACK_IMPORTED_MODULE_3__[\"HANDLE_SHOW_INFO\"]\n    })\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispactToProps)(Info));\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"ListCont\");\n$RefreshReg$(_c3, \"Wrap\");\n$RefreshReg$(_c4, \"ContClose\");\n$RefreshReg$(_c5, \"CloseBtn\");\n$RefreshReg$(_c6, \"Info\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5mby5qcz84Y2I4Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkxpc3RDb250IiwiV3JhcCIsIkNvbnRDbG9zZSIsImltZyIsIkNsb3NlSW1nIiwiQ2xvc2VCdG4iLCJJbmZvIiwicHJvcHMiLCJoYW5kbGVTaG93SW5mbyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwic2hvd0luZm8iLCJuYXZiYXJSZWR1Y2VyIiwibWFwRGlzcGFjdFRvUHJvcHMiLCJkaXNwYXRjaCIsInR5cGUiLCJIQU5ETEVfU0hPV19JTkZPIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFJOzs7Ozs7O0NBQTdCO0tBQU1GLFM7QUFTTixNQUFNRyxRQUFRLEdBQUdGLHlEQUFNLENBQUNDLEdBQUk7OztDQUE1QjtNQUFNQyxRO0FBS04sTUFBTUMsSUFBSSxHQUFHSCx5REFBTSxDQUFDQyxHQUFJOztDQUF4QjtNQUFNRSxJO0FBSU4sTUFBTUMsU0FBUyxHQUFHSix5REFBTSxDQUFDSyxHQUFJOzs7Q0FBN0I7TUFBTUQsUztBQUtOLE1BQU1FLFFBQVEsR0FBRyxRQUFqQjtBQUVBLE1BQU1DLFFBQVEsR0FBR1AseURBQU0sQ0FBQ0MsR0FBSTs7Ozs7OztDQUE1QjtNQUFNTSxROztBQVNOLE1BQU1DLElBQUksR0FBSUMsS0FBRCxJQUFXO0FBQ3RCLFNBQ0UsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFEO0FBQVcsV0FBTyxFQUFFQSxLQUFLLENBQUNDLGNBQTFCO0FBQTJDLE9BQUcsRUFBRUosUUFBaEQ7QUFBMEQsT0FBRyxFQUFDLGtCQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FESixFQUlFLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIRixDQURGLENBSkYsQ0FERixDQURGO0FBZ0JELENBakJEOztNQUFNRSxJOztBQW1CTixNQUFNRyxlQUFlLEdBQUlDLEtBQUQsSUFBVztBQUNqQyxTQUFPO0FBQ1JDLFlBQVEsRUFBRUQsS0FBSyxDQUFDRSxhQUFOLENBQW9CRDtBQUR0QixHQUFQO0FBR0QsQ0FKRDs7QUFNQSxNQUFNRSxpQkFBaUIsR0FBSUMsUUFBRCxJQUFjO0FBQ3RDLFNBQU87QUFDTE4sa0JBQWMsRUFBRSxNQUFNTSxRQUFRLENBQUM7QUFBQ0MsVUFBSSxFQUFFQyxzRkFBZ0JBO0FBQXZCLEtBQUQ7QUFEekIsR0FBUDtBQUdELENBSkQ7O0FBT2VDLDBIQUFPLENBQUNSLGVBQUQsRUFBa0JJLGlCQUFsQixDQUFQLENBQTRDUCxJQUE1QyxDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5mby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCB7SEFORExFX1NIT1dfSU5GT30gZnJvbSBcIi4uL2FwcHJlZHV4L2FjdGlvblR5cGUvbmF2YmFyQWN0aW9uVHlwZVwiXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gZGlzcGxheTogZmxleDtcbiBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gbWFyZ2luOiAwIGF1dG87XG4gd2lkdGg6IDEwMCU7XG5gO1xuXG5jb25zdCBMaXN0Q29udCA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuYDtcblxuY29uc3QgV3JhcCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDkwcHggMTAwcHggMTAwcHggMTAwcHg7XG5gO1xuXG5jb25zdCBDb250Q2xvc2UgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuYDtcblxuY29uc3QgQ2xvc2VJbWcgPSBcIi94LnN2Z1wiXG5cbmNvbnN0IENsb3NlQnRuID0gc3R5bGVkLmRpdmBcbnBvc3RpdGlvbjogZml4ZWQ7XG5wYWRkaW5nOiAxMHB4O1xuZmxvYXQ6IHJpZ2h0O1xuY3Vyc29yOiBwb2ludGVyO1xud2lkdGg6IDM1cHg7XG5oZWlnaHQ6IDMwcHg7XG5gO1xuXG5jb25zdCBJbmZvID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxMaXN0Q29udD5cbiAgICAgICAgICA8Q2xvc2VCdG4+XG4gICAgICAgICAgICA8Q29udENsb3NlIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVNob3dJbmZvfSAgc3JjPXtDbG9zZUltZ30gYWx0PVwiY2xvc2UtYnV0dG9uLWltZ1wiIC8+XG4gICAgICAgICAgPC9DbG9zZUJ0bj5cbiAgICAgICAgPFdyYXA+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPkRpa29uZmlybWFzaTogMTcwIHJiIDwvbGk+XG4gICAgICAgICAgICA8bGk+U2VtYnVoOiA4Mi4yMzYgPC9saT5cbiAgICAgICAgICAgIDxsaT5NZW5pbmdnYWw6IDUuNzY1IDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9XcmFwPlxuICAgICAgPC9MaXN0Q29udD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiBzaG93SW5mbzogc3RhdGUubmF2YmFyUmVkdWNlci5zaG93SW5mb1xufSAgXG59XG5cbmNvbnN0IG1hcERpc3BhY3RUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgaGFuZGxlU2hvd0luZm86ICgpID0+IGRpc3BhdGNoKHt0eXBlOiBIQU5ETEVfU0hPV19JTkZPfSlcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYWN0VG9Qcm9wcykoSW5mbyk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/info.js\n");

/***/ })

})
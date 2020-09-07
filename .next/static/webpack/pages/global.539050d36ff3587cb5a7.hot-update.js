webpackHotUpdate_N_E("pages/global",{

/***/ "./pages/global.js":
/*!*************************!*\
  !*** ./pages/global.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar/index.js\");\n/* harmony import */ var _components_Fab_fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Fab/fab */ \"./components/Fab/fab.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constant_API_URL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constant/API_URL */ \"./constant/API_URL.js\");\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info */ \"./pages/info.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/home/kucing/project/covid-app/pages/global.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: center;\nmargin: 0 auto;\nwidth: 100%;\n`;\n_c = Container;\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\n  width: 55%;\n  text-align: center;\n  padding: 10px;\n  border: 1px solid black;\n`;\n_c2 = Wrapper;\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].p`\n  font-size: 15px;\n  font-weight: bold;\n  font-family: Arial, Helvetica, sans-serif;\n`;\n_c3 = Title;\nconst Source = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].p`\n  font-size: 13px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-style: italic;\n  margin-top: -10px;\n`;\n_c4 = Source;\nconst Link = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].a`\n  color: black;\n  text-decoration: none;\n`;\n_c5 = Link;\n\nconst global = () => {\n  _s();\n\n  // const[data, setData] = useState([]);\n  const showInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(state => state.showInfo);\n  const data = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(state => state.data);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(async () => {\n    const fetchData = async () => {\n      const result = await axios__WEBPACK_IMPORTED_MODULE_7___default()(\"https://newsapi.org/v2/everything?q=covid&apiKey=4055e2c89faa40e384b1dd16c0daef44\");\n      await setData(result.data.articles); //dispatch\n    };\n\n    fetchData();\n  }, []);\n  return __jsx(Container, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }), __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, \"Covid News - Global\"), showInfo ? data.map(data => __jsx(Wrapper, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }, __jsx(Link, {\n    href: data.url,\n    target: \"_blank\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 15\n    }\n  }, __jsx(Title, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 17\n    }\n  }, data.title), __jsx(Source, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 17\n    }\n  }, data.source.name)))) : __jsx(_info__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 14\n    }\n  }), __jsx(_components_Fab_fab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }\n  }));\n}; // export const getServerSideProps = async () => {\n//   try {\n//     const res = await fetch(`${API_COVID_GLOBAL}`)\n//     const data = await res.json()\n//     return {\n//       props:\n//         { data }\n//     }\n//   } catch (error) {\n//     return {\n//       props: {}\n//     }\n//   }\n// }\n\n\n_s(global, \"iBQhClyyL5pvxIi9TnBOlTdnhww=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\nconst mapStateToProps = state => {\n  return {\n    showInfo: state.showInfo\n  };\n};\n\nconst mapDispatchToProps = {}; // 1. klik fab = navbar background hitam tulisan putih\n// 2. close button di k\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(global));\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"Wrapper\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"Source\");\n$RefreshReg$(_c5, \"Link\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2xvYmFsLmpzP2MyMzYiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiV3JhcHBlciIsIlRpdGxlIiwicCIsIlNvdXJjZSIsIkxpbmsiLCJhIiwiZ2xvYmFsIiwic2hvd0luZm8iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiZGF0YSIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsInJlc3VsdCIsImF4aW9zIiwic2V0RGF0YSIsImFydGljbGVzIiwibWFwIiwidXJsIiwidGl0bGUiLCJzb3VyY2UiLCJuYW1lIiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFJOzs7Ozs7O0NBQTdCO0tBQU1GLFM7QUFRTixNQUFNRyxPQUFPLEdBQUdGLHlEQUFNLENBQUNDLEdBQUk7Ozs7O0NBQTNCO01BQU1DLE87QUFNTixNQUFNQyxLQUFLLEdBQUdILHlEQUFNLENBQUNJLENBQUU7Ozs7Q0FBdkI7TUFBTUQsSztBQUtOLE1BQU1FLE1BQU0sR0FBR0wseURBQU0sQ0FBQ0ksQ0FBRTs7Ozs7Q0FBeEI7TUFBTUMsTTtBQU9OLE1BQU1DLElBQUksR0FBR04seURBQU0sQ0FBQ08sQ0FBRTs7O0NBQXRCO01BQU1ELEk7O0FBS04sTUFBTUUsTUFBTSxHQUFHLE1BQU07QUFBQTs7QUFDbkI7QUFFQSxRQUFNQyxRQUFRLEdBQUdDLCtEQUFXLENBQUNDLEtBQUssSUFBSUEsS0FBSyxDQUFDRixRQUFoQixDQUE1QjtBQUNBLFFBQU1HLElBQUksR0FBR0YsK0RBQVcsQ0FBRUMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLElBQWpCLENBQXhCO0FBR0FDLHlEQUFTLENBQUMsWUFBVztBQUNuQixVQUFNQyxTQUFTLEdBQUcsWUFBWTtBQUM1QixZQUFNQyxNQUFNLEdBQUcsTUFBTUMsNENBQUssQ0FBQyxtRkFBRCxDQUExQjtBQUVBLFlBQU1DLE9BQU8sQ0FBQ0YsTUFBTSxDQUFDSCxJQUFQLENBQVlNLFFBQWIsQ0FBYixDQUg0QixDQUdRO0FBQ3JDLEtBSkQ7O0FBTUFKLGFBQVM7QUFDVixHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUEsU0FDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRixFQUlJTCxRQUFRLEdBQ05HLElBQUksQ0FBQ08sR0FBTCxDQUFTUCxJQUFJLElBQ1gsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLElBQUQ7QUFBTSxRQUFJLEVBQUVBLElBQUksQ0FBQ1EsR0FBakI7QUFBc0IsVUFBTSxFQUFDLFFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRUixJQUFJLENBQUNTLEtBQWIsQ0FERixFQUVFLE1BQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVNULElBQUksQ0FBQ1UsTUFBTCxDQUFZQyxJQUFyQixDQUZGLENBREYsQ0FERixDQURNLEdBU0gsTUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYlQsRUFlRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmRixDQURGO0FBbUJELENBcENELEMsQ0FzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0dBbkRNZixNO1VBR2FFLHVELEVBQ0pBLHVEOzs7QUFpRGYsTUFBTWMsZUFBZSxHQUFJYixLQUFELElBQVc7QUFDakMsU0FBTztBQUNMRixZQUFRLEVBQUVFLEtBQUssQ0FBQ0Y7QUFEWCxHQUFQO0FBR0QsQ0FKRDs7QUFNQSxNQUFNZ0Isa0JBQWtCLEdBQUcsRUFBM0IsQyxDQUVBO0FBQ0E7O0FBRWVDLDBIQUFPLENBQUNGLGVBQUQsRUFBa0JDLGtCQUFsQixDQUFQLENBQTZDakIsTUFBN0MsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL2dsb2JhbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJ1xuaW1wb3J0IEZhYiBmcm9tICcuLi9jb21wb25lbnRzL0ZhYi9mYWInXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgQVBJX0NPVklEX0dMT0JBTCB9IGZyb20gXCIuLi9jb25zdGFudC9BUElfVVJMXCJcbmltcG9ydCBJbmZvIGZyb20gJy4vaW5mbyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuZGlzcGxheTogZmxleDtcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5hbGlnbi1pdGVtczogY2VudGVyO1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5tYXJnaW46IDAgYXV0bztcbndpZHRoOiAxMDAlO1xuYFxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA1NSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5gO1xuY29uc3QgVGl0bGUgPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG5gO1xuY29uc3QgU291cmNlID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG5gO1xuXG5jb25zdCBMaW5rID0gc3R5bGVkLmFgXG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuYDtcblxuY29uc3QgZ2xvYmFsID0gKCkgPT4ge1xuICAvLyBjb25zdFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBzaG93SW5mbyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnNob3dJbmZvKVxuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoIHN0YXRlID0+IHN0YXRlLmRhdGEpXG5cbiAgXG4gIHVzZUVmZmVjdChhc3luYygpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyhcImh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvZXZlcnl0aGluZz9xPWNvdmlkJmFwaUtleT00MDU1ZTJjODlmYWE0MGUzODRiMWRkMTZjMGRhZWY0NFwiLCk7XG4gICAgICBcbiAgICAgIGF3YWl0IHNldERhdGEocmVzdWx0LmRhdGEuYXJ0aWNsZXMpIC8vZGlzcGF0Y2hcbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW10pOyBcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8aDE+Q292aWQgTmV3cyAtIEdsb2JhbDwvaDE+XG4gICAgICB7XG4gICAgICAgIHNob3dJbmZvID8gKFxuICAgICAgICAgIGRhdGEubWFwKGRhdGEgPT4gKFxuICAgICAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2RhdGEudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICA8VGl0bGU+e2RhdGEudGl0bGV9PC9UaXRsZT5cbiAgICAgICAgICAgICAgICA8U291cmNlPntkYXRhLnNvdXJjZS5uYW1lfTwvU291cmNlPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L1dyYXBwZXI+XG4gICAgICAgICAgKSlcbiAgICAgICAgKSA6ICg8SW5mbyAvPilcbiAgICAgIH1cbiAgICAgIDxGYWIgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuLy8gICB0cnkge1xuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9DT1ZJRF9HTE9CQUx9YClcbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICBwcm9wczpcbi8vICAgICAgICAgeyBkYXRhIH1cbi8vICAgICB9XG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHByb3BzOiB7fVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzaG93SW5mbzogc3RhdGUuc2hvd0luZm9cbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7fVxuXG4vLyAxLiBrbGlrIGZhYiA9IG5hdmJhciBiYWNrZ3JvdW5kIGhpdGFtIHR1bGlzYW4gcHV0aWhcbi8vIDIuIGNsb3NlIGJ1dHRvbiBkaSBrXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKGdsb2JhbClcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/global.js\n");

/***/ })

})
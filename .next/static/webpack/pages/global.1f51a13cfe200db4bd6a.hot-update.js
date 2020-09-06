webpackHotUpdate_N_E("pages/global",{

/***/ "./pages/global.js":
/*!*************************!*\
  !*** ./pages/global.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar/index.js\");\n/* harmony import */ var _components_Fab_fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Fab/fab */ \"./components/Fab/fab.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constant_API_URL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constant/API_URL */ \"./constant/API_URL.js\");\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info */ \"./pages/info.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/home/kucing/project/covid-app/pages/global.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: center;\nmargin: 0 auto;\nwidth: 100%;\n`;\n_c = Container;\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\n  width: 55%;\n  text-align: center;\n  padding: 10px;\n  border: 1px solid black;\n`;\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].p`\n  font-size: 15px;\n  font-weight: bold;\n  font-family: Arial, Helvetica, sans-serif;\n`;\nconst Source = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].p`\n  font-size: 13px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-style: italic;\n  margin-top: -10px;\n`;\nconst Link = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].a`\n  color: black;\n  text-decoration: none;\n`;\n\nconst global = () => {\n  _s();\n\n  // const [ showInfo, setShowInfo] = useState(true);\n  // const [ isNotif, setNotif] = useState(true)\n  // const showInfo = useSelector(state => state.showInfo)\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(async () => {\n    const fetchData = async () => {\n      const result = await axios__WEBPACK_IMPORTED_MODULE_7___default()(\"https://newsapi.org/v2/everything?q=covid&apiKey=4055e2c89faa40e384b1dd16c0daef44\");\n      data;\n    };\n\n    fetchData();\n  }, []);\n  return __jsx(Container, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }), __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, \"Covid News - Global\"), __jsx(_components_Fab_fab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }));\n}; // export const getServerSideProps = async () => {\n//   try {\n//     const res = await fetch(`${API_COVID_GLOBAL}`)\n//     const data = await res.json()\n//     return {\n//       props:\n//         { data }\n//     }\n//   } catch (error) {\n//     return {\n//       props: {}\n//     }\n//   }\n// }\n// const mapStateToProps = (state) => {\n//   return {\n//     showInfo: state.showInfo\n//   }\n// }\n// const mapDispatchToProps = {}\n// 1. klik fab = navbar background hitam tulisan putih\n// 2. close button di k\n\n\n_s(global, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (//  connect(mapStateToProps, mapDispatchToProps)\nglobal);\n\nvar _c;\n\n$RefreshReg$(_c, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2xvYmFsLmpzP2MyMzYiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiV3JhcHBlciIsIlRpdGxlIiwicCIsIlNvdXJjZSIsIkxpbmsiLCJhIiwiZ2xvYmFsIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwicmVzdWx0IiwiYXhpb3MiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQUk7Ozs7Ozs7Q0FBN0I7S0FBTUYsUztBQVFOLE1BQU1HLE9BQU8sR0FBR0YseURBQU0sQ0FBQ0MsR0FBSTs7Ozs7Q0FBM0I7QUFNQSxNQUFNRSxLQUFLLEdBQUdILHlEQUFNLENBQUNJLENBQUU7Ozs7Q0FBdkI7QUFLQSxNQUFNQyxNQUFNLEdBQUdMLHlEQUFNLENBQUNJLENBQUU7Ozs7O0NBQXhCO0FBT0EsTUFBTUUsSUFBSSxHQUFHTix5REFBTSxDQUFDTyxDQUFFOzs7Q0FBdEI7O0FBS0EsTUFBTUMsTUFBTSxHQUFHLE1BQU07QUFBQTs7QUFDbkI7QUFDQTtBQUVBO0FBR0FDLHlEQUFTLENBQUMsWUFBVztBQUNuQixVQUFNQyxTQUFTLEdBQUcsWUFBWTtBQUM1QixZQUFNQyxNQUFNLEdBQUcsTUFBTUMsNENBQUssQ0FBQyxtRkFBRCxDQUExQjtBQUNBQyxVQUFJO0FBQ0wsS0FIRDs7QUFLQUgsYUFBUztBQUNWLEdBUFEsRUFPTixFQVBNLENBQVQ7QUFTQSxTQUNFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGLEVBZUUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkYsQ0FERjtBQW1CRCxDQW5DRCxDLENBcUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOzs7R0E3RE1GLE07O0FBaUVMQTtBQUFBQSxNQUZEIiwiZmlsZSI6Ii4vcGFnZXMvZ2xvYmFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXG5pbXBvcnQgRmFiIGZyb20gJy4uL2NvbXBvbmVudHMvRmFiL2ZhYidcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBBUElfQ09WSURfR0xPQkFMIH0gZnJvbSBcIi4uL2NvbnN0YW50L0FQSV9VUkxcIlxuaW1wb3J0IEluZm8gZnJvbSAnLi9pbmZvJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5kaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbm1hcmdpbjogMCBhdXRvO1xud2lkdGg6IDEwMCU7XG5gXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDU1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbmA7XG5jb25zdCBUaXRsZSA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbmA7XG5jb25zdCBTb3VyY2UgPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbmA7XG5cbmNvbnN0IExpbmsgPSBzdHlsZWQuYWBcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5gO1xuXG5jb25zdCBnbG9iYWwgPSAoKSA9PiB7XG4gIC8vIGNvbnN0IFsgc2hvd0luZm8sIHNldFNob3dJbmZvXSA9IHVzZVN0YXRlKHRydWUpO1xuICAvLyBjb25zdCBbIGlzTm90aWYsIHNldE5vdGlmXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgLy8gY29uc3Qgc2hvd0luZm8gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5zaG93SW5mbylcbiAgXG5cbiAgdXNlRWZmZWN0KGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zKFwiaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi9ldmVyeXRoaW5nP3E9Y292aWQmYXBpS2V5PTQwNTVlMmM4OWZhYTQwZTM4NGIxZGQxNmMwZGFlZjQ0XCIsKTtcbiAgICAgIGRhdGFcbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxoMT5Db3ZpZCBOZXdzIC0gR2xvYmFsPC9oMT5cbiAgICAgIHsvKiB7XG4gICAgICAgIHNob3dJbmZvID8gKFxuICAgICAgICAgIGRhdGEuYXJ0aWNsZXMubWFwKGRhdGEgPT4gKFxuICAgICAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2RhdGEudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICA8VGl0bGU+e2RhdGEudGl0bGV9PC9UaXRsZT5cbiAgICAgICAgICAgICAgICA8U291cmNlPntkYXRhLnNvdXJjZS5uYW1lfTwvU291cmNlPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L1dyYXBwZXI+XG4gICAgICAgICAgKSlcbiAgICAgICAgKSA6ICg8SW5mbyAvPilcbiAgICAgIH0gKi99XG4gICAgICA8RmFiIC8+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbi8vICAgdHJ5IHtcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfQ09WSURfR0xPQkFMfWApXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgcHJvcHM6XG4vLyAgICAgICAgIHsgZGF0YSB9XG4vLyAgICAgfVxuLy8gICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICBwcm9wczoge31cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgc2hvd0luZm86IHN0YXRlLnNob3dJbmZvXG4vLyAgIH1cbi8vIH1cblxuLy8gY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge31cblxuLy8gMS4ga2xpayBmYWIgPSBuYXZiYXIgYmFja2dyb3VuZCBoaXRhbSB0dWxpc2FuIHB1dGloXG4vLyAyLiBjbG9zZSBidXR0b24gZGkga1xuXG5leHBvcnQgZGVmYXVsdFxuLy8gIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXG4oZ2xvYmFsKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/global.js\n");

/***/ })

})
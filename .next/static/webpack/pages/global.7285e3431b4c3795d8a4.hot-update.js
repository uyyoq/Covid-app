webpackHotUpdate_N_E("pages/global",{

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./pages/global.js":
/*!*************************!*\
  !*** ./pages/global.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar/index.js\");\n/* harmony import */ var _components_Fab_fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Fab/fab */ \"./components/Fab/fab.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constant_API_URL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constant/API_URL */ \"./constant/API_URL.js\");\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info */ \"./pages/info.js\");\nvar _jsxFileName = \"/home/kucing/project/covid-app/pages/global.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n // import { connect } from \"react-redux\"\n\n // import axios from \"axios\"\n// import actionFetchArticles from \"../appredux/actionCreator/actionFetchArticles\"\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: center;\nmargin: 0 auto;\nwidth: 100%;\n`;\n_c = Container;\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\n  width: 55%;\n  text-align: center;\n  padding: 10px;\n  border: 1px solid black;\n`;\n_c2 = Wrapper;\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].p`\n  font-size: 15px;\n  font-weight: bold;\n  font-family: Arial, Helvetica, sans-serif;\n`;\n_c3 = Title;\nconst Source = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].p`\n  font-size: 13px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-style: italic;\n  margin-top: -10px;\n`;\n_c4 = Source;\nconst Link = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].a`\n  color: black;\n  text-decoration: none;\n`;\n_c5 = Link;\n\nconst global = props => {\n  _s();\n\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])(); // const[data, setData] = useState([]);nd+\n\n  const showInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(state => state.navbarReducer.showInfo);\n  const data = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(state => state.list);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(async () => {\n    await dispatch(actionFetchArticles()); // const fetchData = async () => {\n    //   const result = await axios(\"https://newsapi.org/v2/everything?q=covid&apiKey=4055e2c89faa40e384b1dd16c0daef44\",);\n    //   await setData(result.data.articles) //dispatch\n    // };\n    // fetchData()\n  }, []);\n  return __jsx(Container, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }), __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, \"Covid News - Global\"), showInfo ? data.map(data => __jsx(Wrapper, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, __jsx(Link, {\n    href: data.url,\n    target: \"_blank\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 15\n    }\n  }, __jsx(Title, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 17\n    }\n  }, data.title), __jsx(Source, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 17\n    }\n  }, data.source.name)))) : __jsx(_info__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 14\n    }\n  }), __jsx(_components_Fab_fab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }\n  }));\n}; // export const getServerSideProps = async () => {\n//   try {\n//     const res = await fetch(`${API_COVID_GLOBAL}`)\n//     const data = await res.json()\n//     return {\n//       props:\n//         { data }\n//     }\n//   } catch (error) {\n//     return {\n//       props: {}\n//     }\n//   }\n// }\n// const mapStateToProps = (state) => {\n//   return {\n//     showInfo: state.navbarReducer.showInfo\n//   }\n// }\n// const mapDispatchToProps = (dispatch) => {\n//   return {\n//     actionFetchArticles: () => dispatch(actionFetchArticles())\n//   }\n// }\n// export default connect(mapStateToProps, mapDispatchToProps)(global)\n\n\n_s(global, \"sOmwGBZWiuqEYVdYzxgJCqqGRIs=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (global);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"Wrapper\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"Source\");\n$RefreshReg$(_c5, \"Link\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2xvYmFsLmpzP2MyMzYiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiV3JhcHBlciIsIlRpdGxlIiwicCIsIlNvdXJjZSIsIkxpbmsiLCJhIiwiZ2xvYmFsIiwicHJvcHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwic2hvd0luZm8iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwibmF2YmFyUmVkdWNlciIsImRhdGEiLCJsaXN0IiwidXNlRWZmZWN0IiwiYWN0aW9uRmV0Y2hBcnRpY2xlcyIsIm1hcCIsInVybCIsInRpdGxlIiwic291cmNlIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztDQUVBO0FBQ0E7O0FBRUEsTUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFJOzs7Ozs7O0NBQTdCO0tBQU1GLFM7QUFRTixNQUFNRyxPQUFPLEdBQUdGLHlEQUFNLENBQUNDLEdBQUk7Ozs7O0NBQTNCO01BQU1DLE87QUFNTixNQUFNQyxLQUFLLEdBQUdILHlEQUFNLENBQUNJLENBQUU7Ozs7Q0FBdkI7TUFBTUQsSztBQUtOLE1BQU1FLE1BQU0sR0FBR0wseURBQU0sQ0FBQ0ksQ0FBRTs7Ozs7Q0FBeEI7TUFBTUMsTTtBQU9OLE1BQU1DLElBQUksR0FBR04seURBQU0sQ0FBQ08sQ0FBRTs7O0NBQXRCO01BQU1ELEk7O0FBS04sTUFBTUUsTUFBTSxHQUFJQyxLQUFELElBQVc7QUFBQTs7QUFDeEIsUUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QixDQUR3QixDQUV4Qjs7QUFHQSxRQUFNQyxRQUFRLEdBQUdDLCtEQUFXLENBQUNDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxhQUFOLENBQW9CSCxRQUE5QixDQUE1QjtBQUNBLFFBQU1JLElBQUksR0FBR0gsK0RBQVcsQ0FBQ0MsS0FBSyxJQUFJQSxLQUFLLENBQUNHLElBQWhCLENBQXhCO0FBRUFDLHlEQUFTLENBQUMsWUFBVztBQUNsQixVQUFNUixRQUFRLENBQUNTLG1CQUFtQixFQUFwQixDQUFkLENBRGtCLENBR25CO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDRCxHQVZRLEVBVU4sRUFWTSxDQUFUO0FBWUEsU0FDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRixFQUlJUCxRQUFRLEdBQ05JLElBQUksQ0FBQ0ksR0FBTCxDQUFTSixJQUFJLElBQ1gsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLElBQUQ7QUFBTSxRQUFJLEVBQUVBLElBQUksQ0FBQ0ssR0FBakI7QUFBc0IsVUFBTSxFQUFDLFFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRTCxJQUFJLENBQUNNLEtBQWIsQ0FERixFQUVFLE1BQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVNOLElBQUksQ0FBQ08sTUFBTCxDQUFZQyxJQUFyQixDQUZGLENBREYsQ0FERixDQURNLEdBU0gsTUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYlQsRUFlRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmRixDQURGO0FBbUJELENBdkNELEMsQ0F5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztHQXBFTWhCLE07VUFDYUcsdUQsRUFJQUUsdUQsRUFDSkEsdUQ7OztBQStEQUwscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9nbG9iYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcidcbmltcG9ydCBGYWIgZnJvbSAnLi4vY29tcG9uZW50cy9GYWIvZmFiJ1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IEFQSV9DT1ZJRF9HTE9CQUwgfSBmcm9tIFwiLi4vY29uc3RhbnQvQVBJX1VSTFwiXG5pbXBvcnQgSW5mbyBmcm9tICcuL2luZm8nO1xuLy8gaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuLy8gaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG4vLyBpbXBvcnQgYWN0aW9uRmV0Y2hBcnRpY2xlcyBmcm9tIFwiLi4vYXBwcmVkdXgvYWN0aW9uQ3JlYXRvci9hY3Rpb25GZXRjaEFydGljbGVzXCJcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xubWFyZ2luOiAwIGF1dG87XG53aWR0aDogMTAwJTtcbmBcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNTUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuYDtcbmNvbnN0IFRpdGxlID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuYDtcbmNvbnN0IFNvdXJjZSA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuYDtcblxuY29uc3QgTGluayA9IHN0eWxlZC5hYFxuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbmA7XG5cbmNvbnN0IGdsb2JhbCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgLy8gY29uc3RbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7bmQrXG5cblxuICBjb25zdCBzaG93SW5mbyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm5hdmJhclJlZHVjZXIuc2hvd0luZm8pXG4gIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5saXN0KVxuXG4gIHVzZUVmZmVjdChhc3luYygpID0+IHtcbiAgICAgYXdhaXQgZGlzcGF0Y2goYWN0aW9uRmV0Y2hBcnRpY2xlcygpKVxuICAgICBcbiAgICAvLyBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyhcImh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvZXZlcnl0aGluZz9xPWNvdmlkJmFwaUtleT00MDU1ZTJjODlmYWE0MGUzODRiMWRkMTZjMGRhZWY0NFwiLCk7XG4gICAgICBcbiAgICAvLyAgIGF3YWl0IHNldERhdGEocmVzdWx0LmRhdGEuYXJ0aWNsZXMpIC8vZGlzcGF0Y2hcbiAgICAvLyB9O1xuXG4gICAgLy8gZmV0Y2hEYXRhKClcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxoMT5Db3ZpZCBOZXdzIC0gR2xvYmFsPC9oMT5cbiAgICAgIHtcbiAgICAgICAgc2hvd0luZm8gPyAoXG4gICAgICAgICAgZGF0YS5tYXAoZGF0YSA9PiAoXG4gICAgICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17ZGF0YS51cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgIDxUaXRsZT57ZGF0YS50aXRsZX08L1RpdGxlPlxuICAgICAgICAgICAgICAgIDxTb3VyY2U+e2RhdGEuc291cmNlLm5hbWV9PC9Tb3VyY2U+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgICApKVxuICAgICAgICApIDogKDxJbmZvIC8+KVxuICAgICAgfVxuICAgICAgPEZhYiAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4vLyAgIHRyeSB7XG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0NPVklEX0dMT0JBTH1gKVxuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHByb3BzOlxuLy8gICAgICAgICB7IGRhdGEgfVxuLy8gICAgIH1cbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgcHJvcHM6IHt9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHNob3dJbmZvOiBzdGF0ZS5uYXZiYXJSZWR1Y2VyLnNob3dJbmZvXG4vLyAgIH1cbi8vIH1cblxuLy8gY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgYWN0aW9uRmV0Y2hBcnRpY2xlczogKCkgPT4gZGlzcGF0Y2goYWN0aW9uRmV0Y2hBcnRpY2xlcygpKVxuLy8gICB9XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKGdsb2JhbClcbmV4cG9ydCBkZWZhdWx0IGdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/global.js\n");

/***/ })

})
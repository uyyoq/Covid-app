webpackHotUpdate_N_E("pages/global",{

/***/ "./pages/global.js":
/*!*************************!*\
  !*** ./pages/global.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar/index.js\");\n/* harmony import */ var _components_Fab_fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Fab/fab */ \"./components/Fab/fab.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constant_API_URL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constant/API_URL */ \"./constant/API_URL.js\");\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info */ \"./pages/info.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/home/kucing/project/covid-app/pages/global.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: center;\nmargin: 0 auto;\nwidth: 100%;\n`;\n_c = Container;\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\n  width: 55%;\n  text-align: center;\n  padding: 10px;\n  border: 1px solid black;\n`;\n_c2 = Wrapper;\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].p`\n  font-size: 15px;\n  font-weight: bold;\n  font-family: Arial, Helvetica, sans-serif;\n`;\n_c3 = Title;\nconst Source = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].p`\n  font-size: 13px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-style: italic;\n  margin-top: -10px;\n`;\n_c4 = Source;\nconst Link = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].a`\n  color: black;\n  text-decoration: none;\n`;\n_c5 = Link;\n\nconst global = ({\n  data\n}) => {\n  _s();\n\n  // const [ showInfo, setShowInfo] = useState(true);\n  // const [ isNotif, setNotif] = useState(true)\n  const showInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(state => state.showInfo);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(async () => {\n    const fetchData = async () => {\n      const result = await axios__WEBPACK_IMPORTED_MODULE_7___default()(\"https://newsapi.org/v2/everything?q=covid&apiKey=4055e2c89faa40e384b1dd16c0daef44\");\n      {\n        showInfo;\n      }\n      result.data.articles;\n    };\n\n    console.log(\"data covid\", data.articles);\n    fetchData();\n  }, []);\n  return __jsx(Container, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }), __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }, \"Covid News - Global\"), {\n    showInfo\n  } ? data.articles.map(data => __jsx(Wrapper, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 13\n    }\n  }, __jsx(Link, {\n    href: data.url,\n    target: \"_blank\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 15\n    }\n  }, __jsx(Title, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 17\n    }\n  }, data.title), __jsx(Source, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 17\n    }\n  }, data.source.name)))) : __jsx(_info__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 14\n    }\n  }), __jsx(_components_Fab_fab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }));\n}; // export const getServerSideProps = async () => {\n//   try {\n//     const res = await fetch(`${API_COVID_GLOBAL}`)\n//     const data = await res.json()\n//     return {\n//       props:\n//         { data }\n//     }\n//   } catch (error) {\n//     return {\n//       props: {}\n//     }\n//   }\n// }\n\n\n_s(global, \"8JfUQcCiECzMYe0+B0DHJ0j6UxY=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\nconst mapStateToProps = state => {\n  return {\n    showInfo: state.showInfo\n  };\n};\n\nconst mapDispatchToProps = {}; // 1. klik fab = navbar background hitam tulisan putih\n// 2. close button di k\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(global));\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"Wrapper\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"Source\");\n$RefreshReg$(_c5, \"Link\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2xvYmFsLmpzP2MyMzYiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiV3JhcHBlciIsIlRpdGxlIiwicCIsIlNvdXJjZSIsIkxpbmsiLCJhIiwiZ2xvYmFsIiwiZGF0YSIsInNob3dJbmZvIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsInJlc3VsdCIsImF4aW9zIiwiYXJ0aWNsZXMiLCJjb25zb2xlIiwibG9nIiwibWFwIiwidXJsIiwidGl0bGUiLCJzb3VyY2UiLCJuYW1lIiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFJOzs7Ozs7O0NBQTdCO0tBQU1GLFM7QUFRTixNQUFNRyxPQUFPLEdBQUdGLHlEQUFNLENBQUNDLEdBQUk7Ozs7O0NBQTNCO01BQU1DLE87QUFNTixNQUFNQyxLQUFLLEdBQUdILHlEQUFNLENBQUNJLENBQUU7Ozs7Q0FBdkI7TUFBTUQsSztBQUtOLE1BQU1FLE1BQU0sR0FBR0wseURBQU0sQ0FBQ0ksQ0FBRTs7Ozs7Q0FBeEI7TUFBTUMsTTtBQU9OLE1BQU1DLElBQUksR0FBR04seURBQU0sQ0FBQ08sQ0FBRTs7O0NBQXRCO01BQU1ELEk7O0FBS04sTUFBTUUsTUFBTSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWM7QUFBQTs7QUFDM0I7QUFDQTtBQUVBLFFBQU1DLFFBQVEsR0FBR0MsK0RBQVcsQ0FBQ0MsS0FBSyxJQUFJQSxLQUFLLENBQUNGLFFBQWhCLENBQTVCO0FBRUFHLHlEQUFTLENBQUMsWUFBVztBQUNuQixVQUFNQyxTQUFTLEdBQUcsWUFBWTtBQUM1QixZQUFNQyxNQUFNLEdBQUcsTUFBTUMsNENBQUssQ0FBQyxtRkFBRCxDQUExQjtBQUVBO0FBQUNOLGdCQUFRO0FBQUM7QUFBQ0ssWUFBTSxDQUFDTixJQUFQLENBQVlRLFFBQWI7QUFDWCxLQUpEOztBQU1BQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCVixJQUFJLENBQUNRLFFBQS9CO0FBRUFILGFBQVM7QUFDVixHQVZRLEVBVU4sRUFWTSxDQUFUO0FBWUEsU0FDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRixFQUlJO0FBQUNKO0FBQUQsTUFDRUQsSUFBSSxDQUFDUSxRQUFMLENBQWNHLEdBQWQsQ0FBa0JYLElBQUksSUFDcEIsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLElBQUQ7QUFBTSxRQUFJLEVBQUVBLElBQUksQ0FBQ1ksR0FBakI7QUFBc0IsVUFBTSxFQUFDLFFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRWixJQUFJLENBQUNhLEtBQWIsQ0FERixFQUVFLE1BQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVNiLElBQUksQ0FBQ2MsTUFBTCxDQUFZQyxJQUFyQixDQUZGLENBREYsQ0FERixDQURGLEdBU0ssTUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYlQsRUFlRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmRixDQURGO0FBbUJELENBckNELEMsQ0F1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0dBcERNaEIsTTtVQUlhRyx1RDs7O0FBa0RuQixNQUFNYyxlQUFlLEdBQUliLEtBQUQsSUFBVztBQUNqQyxTQUFPO0FBQ0xGLFlBQVEsRUFBRUUsS0FBSyxDQUFDRjtBQURYLEdBQVA7QUFHRCxDQUpEOztBQU1BLE1BQU1nQixrQkFBa0IsR0FBRyxFQUEzQixDLENBRUE7QUFDQTs7QUFFZUMsMEhBQU8sQ0FBQ0YsZUFBRCxFQUFrQkMsa0JBQWxCLENBQVAsQ0FBNkNsQixNQUE3QyxDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZ2xvYmFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXG5pbXBvcnQgRmFiIGZyb20gJy4uL2NvbXBvbmVudHMvRmFiL2ZhYidcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBBUElfQ09WSURfR0xPQkFMIH0gZnJvbSBcIi4uL2NvbnN0YW50L0FQSV9VUkxcIlxuaW1wb3J0IEluZm8gZnJvbSAnLi9pbmZvJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5kaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbm1hcmdpbjogMCBhdXRvO1xud2lkdGg6IDEwMCU7XG5gXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDU1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbmA7XG5jb25zdCBUaXRsZSA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbmA7XG5jb25zdCBTb3VyY2UgPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbmA7XG5cbmNvbnN0IExpbmsgPSBzdHlsZWQuYWBcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5gO1xuXG5jb25zdCBnbG9iYWwgPSAoeyBkYXRhIH0pID0+IHtcbiAgLy8gY29uc3QgWyBzaG93SW5mbywgc2V0U2hvd0luZm9dID0gdXNlU3RhdGUodHJ1ZSk7XG4gIC8vIGNvbnN0IFsgaXNOb3RpZiwgc2V0Tm90aWZdID0gdXNlU3RhdGUodHJ1ZSlcblxuICBjb25zdCBzaG93SW5mbyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnNob3dJbmZvKVxuXG4gIHVzZUVmZmVjdChhc3luYygpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyhcImh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvZXZlcnl0aGluZz9xPWNvdmlkJmFwaUtleT00MDU1ZTJjODlmYWE0MGUzODRiMWRkMTZjMGRhZWY0NFwiKTtcbiAgICAgIFxuICAgICAge3Nob3dJbmZvfShyZXN1bHQuZGF0YS5hcnRpY2xlcyk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJkYXRhIGNvdmlkXCIsIGRhdGEuYXJ0aWNsZXMpXG5cbiAgICBmZXRjaERhdGEoKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8aDE+Q292aWQgTmV3cyAtIEdsb2JhbDwvaDE+XG4gICAgICB7XG4gICAgICAgIHtzaG93SW5mb30gPyAoXG4gICAgICAgICAgZGF0YS5hcnRpY2xlcy5tYXAoZGF0YSA9PiAoXG4gICAgICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17ZGF0YS51cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgIDxUaXRsZT57ZGF0YS50aXRsZX08L1RpdGxlPlxuICAgICAgICAgICAgICAgIDxTb3VyY2U+e2RhdGEuc291cmNlLm5hbWV9PC9Tb3VyY2U+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgICApKVxuICAgICAgICApIDogKDxJbmZvIC8+KVxuICAgICAgfVxuICAgICAgPEZhYiAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4vLyAgIHRyeSB7XG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0NPVklEX0dMT0JBTH1gKVxuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHByb3BzOlxuLy8gICAgICAgICB7IGRhdGEgfVxuLy8gICAgIH1cbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgcHJvcHM6IHt9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHNob3dJbmZvOiBzdGF0ZS5zaG93SW5mb1xuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHt9XG5cbi8vIDEuIGtsaWsgZmFiID0gbmF2YmFyIGJhY2tncm91bmQgaGl0YW0gdHVsaXNhbiBwdXRpaFxuLy8gMi4gY2xvc2UgYnV0dG9uIGRpIGtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoZ2xvYmFsKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/global.js\n");

/***/ })

})
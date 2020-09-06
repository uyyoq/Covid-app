webpackHotUpdate_N_E("pages/global",{

/***/ "./pages/global.js":
/*!*************************!*\
  !*** ./pages/global.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar/index.js\");\n/* harmony import */ var _components_Fab_fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Fab/fab */ \"./components/Fab/fab.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constant_API_URL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constant/API_URL */ \"./constant/API_URL.js\");\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info */ \"./pages/info.js\");\nvar _jsxFileName = \"/home/kucing/project/covid-app/pages/global.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: center;\nmargin: 0 auto;\nwidth: 100%;\n`;\n_c = Container;\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\n  width: 55%;\n  text-align: center;\n  padding: 10px;\n  border: 1px solid black;\n`;\n_c2 = Wrapper;\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].p`\n  font-size: 15px;\n  font-weight: bold;\n  font-family: Arial, Helvetica, sans-serif;\n`;\n_c3 = Title;\nconst Source = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].p`\n  font-size: 13px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-style: italic;\n  margin-top: -10px;\n`;\n_c4 = Source;\nconst Link = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].a`\n  color: black;\n  text-decoration: none;\n`;\n_c5 = Link;\n\nconst global = ({\n  data\n}) => {\n  _s();\n\n  // const [ showInfo, setShowInfo] = useState(true);\n  // const [ isNotif, setNotif] = useState(true)\n  const showInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(state => state.showInfo);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    console.log(\"data covid\", data.articles);\n  }, []);\n  return __jsx(Container, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }), __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, \"Covid News - Global\"), showInfo ? data.articles.map(data => __jsx(Wrapper, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }, __jsx(Link, {\n    href: data.url,\n    target: \"_blank\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 16\n    }\n  }, __jsx(Title, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }\n  }, data.title), __jsx(Source, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 17\n    }\n  }, data.source.name)))) : __jsx(_info__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 14\n    }\n  }), __jsx(_components_Fab_fab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(global, \"8JfUQcCiECzMYe0+B0DHJ0j6UxY=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\nconst getServerSideProps = async () => {\n  try {\n    const res = await fetch(`${_constant_API_URL__WEBPACK_IMPORTED_MODULE_5__[\"API_COVID_GLOBAL\"]}`);\n    const data = await res.json();\n    return {\n      props: {\n        data\n      }\n    };\n  } catch (error) {\n    return {\n      props: {}\n    };\n  }\n};\n\nconst mapStateToProps = state => {\n  return {\n    showInfo: state.showInfo\n  };\n};\n\nconst mapDispatchToProps = {}; // 1. klik fab = navbar background hitam tulisan putih\n// 2. close button di k\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(global));\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"Wrapper\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"Source\");\n$RefreshReg$(_c5, \"Link\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2xvYmFsLmpzP2MyMzYiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiV3JhcHBlciIsIlRpdGxlIiwicCIsIlNvdXJjZSIsIkxpbmsiLCJhIiwiZ2xvYmFsIiwiZGF0YSIsInNob3dJbmZvIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJhcnRpY2xlcyIsIm1hcCIsInVybCIsInRpdGxlIiwic291cmNlIiwibmFtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcyIsImZldGNoIiwiQVBJX0NPVklEX0dMT0JBTCIsImpzb24iLCJwcm9wcyIsImVycm9yIiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQUk7Ozs7Ozs7Q0FBN0I7S0FBTUYsUztBQVFOLE1BQU1HLE9BQU8sR0FBR0YseURBQU0sQ0FBQ0MsR0FBSTs7Ozs7Q0FBM0I7TUFBTUMsTztBQU1OLE1BQU1DLEtBQUssR0FBR0gseURBQU0sQ0FBQ0ksQ0FBRTs7OztDQUF2QjtNQUFNRCxLO0FBS04sTUFBTUUsTUFBTSxHQUFHTCx5REFBTSxDQUFDSSxDQUFFOzs7OztDQUF4QjtNQUFNQyxNO0FBT04sTUFBTUMsSUFBSSxHQUFHTix5REFBTSxDQUFDTyxDQUFFOzs7Q0FBdEI7TUFBTUQsSTs7QUFLTixNQUFNRSxNQUFNLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBYztBQUFBOztBQUMzQjtBQUNBO0FBRUEsUUFBTUMsUUFBUSxHQUFHQywrREFBVyxDQUFDQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0YsUUFBaEIsQ0FBNUI7QUFFQUcseURBQVMsQ0FBQyxNQUFNO0FBRWRDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJOLElBQUksQ0FBQ08sUUFBL0I7QUFDRCxHQUhRLEVBR04sRUFITSxDQUFUO0FBS0EsU0FDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRixFQUlHTixRQUFRLEdBQ0xELElBQUksQ0FBQ08sUUFBTCxDQUFjQyxHQUFkLENBQWtCUixJQUFJLElBQ3BCLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csTUFBQyxJQUFEO0FBQU0sUUFBSSxFQUFFQSxJQUFJLENBQUNTLEdBQWpCO0FBQXNCLFVBQU0sRUFBQyxRQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUVQsSUFBSSxDQUFDVSxLQUFiLENBREQsRUFFQyxNQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTVixJQUFJLENBQUNXLE1BQUwsQ0FBWUMsSUFBckIsQ0FGRCxDQURILENBREYsQ0FESyxHQVNGLE1BQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJULEVBZUUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkYsQ0FERjtBQW1CRCxDQTlCRDs7R0FBTWIsTTtVQUlhRyx1RDs7O0FBNEJuQixNQUFNVyxrQkFBa0IsR0FBRyxZQUFZO0FBQ3JDLE1BQUk7QUFDRixVQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVDLGtFQUFpQixFQUFyQixDQUF2QjtBQUNBLFVBQU1oQixJQUFJLEdBQUcsTUFBTWMsR0FBRyxDQUFDRyxJQUFKLEVBQW5CO0FBQ0EsV0FBTztBQUNMQyxXQUFLLEVBQ0g7QUFBRWxCO0FBQUY7QUFGRyxLQUFQO0FBSUQsR0FQRCxDQU9FLE9BQU9tQixLQUFQLEVBQWM7QUFDZixXQUFPO0FBQ0xELFdBQUssRUFBRztBQURILEtBQVA7QUFHRjtBQUNBLENBYkQ7O0FBZUEsTUFBTUUsZUFBZSxHQUFJakIsS0FBRCxJQUFXO0FBQ2pDLFNBQU87QUFDTEYsWUFBUSxFQUFFRSxLQUFLLENBQUNGO0FBRFgsR0FBUDtBQUdELENBSkQ7O0FBTUEsTUFBTW9CLGtCQUFrQixHQUFHLEVBQTNCLEMsQ0FFQTtBQUNBOztBQUVlQywwSEFBTyxDQUFDRixlQUFELEVBQWtCQyxrQkFBbEIsQ0FBUCxDQUE2Q3RCLE1BQTdDLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9nbG9iYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXG5pbXBvcnQgRmFiIGZyb20gJy4uL2NvbXBvbmVudHMvRmFiL2ZhYidcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBBUElfQ09WSURfR0xPQkFMIH0gZnJvbSBcIi4uL2NvbnN0YW50L0FQSV9VUkxcIlxuaW1wb3J0IEluZm8gZnJvbSAnLi9pbmZvJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuZGlzcGxheTogZmxleDtcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5hbGlnbi1pdGVtczogY2VudGVyO1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5tYXJnaW46IDAgYXV0bztcbndpZHRoOiAxMDAlO1xuYFxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA1NSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5gO1xuY29uc3QgVGl0bGUgPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG5gO1xuY29uc3QgU291cmNlID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG5gO1xuXG5jb25zdCBMaW5rID0gc3R5bGVkLmFgXG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuYDtcblxuY29uc3QgZ2xvYmFsID0gKHsgZGF0YSB9KSA9PiB7XG4gIC8vIGNvbnN0IFsgc2hvd0luZm8sIHNldFNob3dJbmZvXSA9IHVzZVN0YXRlKHRydWUpO1xuICAvLyBjb25zdCBbIGlzTm90aWYsIHNldE5vdGlmXSA9IHVzZVN0YXRlKHRydWUpXG4gIFxuICBjb25zdCBzaG93SW5mbyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnNob3dJbmZvKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgXG4gICAgY29uc29sZS5sb2coXCJkYXRhIGNvdmlkXCIsIGRhdGEuYXJ0aWNsZXMpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxoMT5Db3ZpZCBOZXdzIC0gR2xvYmFsPC9oMT5cbiAgICAgIHtcbiAgICAgICBzaG93SW5mbyA/IChcbiAgICAgICAgICBkYXRhLmFydGljbGVzLm1hcChkYXRhID0+IChcbiAgICAgICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgICAgICAgPExpbmsgaHJlZj17ZGF0YS51cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgIDxUaXRsZT57ZGF0YS50aXRsZX08L1RpdGxlPlxuICAgICAgICAgICAgICAgIDxTb3VyY2U+e2RhdGEuc291cmNlLm5hbWV9PC9Tb3VyY2U+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgICApKVxuICAgICAgICApIDogKDxJbmZvIC8+KVxuICAgICAgfVxuICAgICAgPEZhYiAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfQ09WSURfR0xPQkFMfWApXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6XG4gICAgICAgIHsgZGF0YSB9XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgcmV0dXJuIHtcbiAgICAgcHJvcHMgOiB7fSBcbiAgIH1cbn1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2hvd0luZm86IHN0YXRlLnNob3dJbmZvXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge31cblxuLy8gMS4ga2xpayBmYWIgPSBuYXZiYXIgYmFja2dyb3VuZCBoaXRhbSB0dWxpc2FuIHB1dGloXG4vLyAyLiBjbG9zZSBidXR0b24gZGkga1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShnbG9iYWwpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/global.js\n");

/***/ })

})
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./appredux/store.js":
/*!***************************!*\
  !*** ./appredux/store.js ***!
  \***************************/
/*! exports provided: initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeStore\", function() { return initializeStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useStore\", function() { return useStore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//STORE\n\n\nlet store; // Global state\n\nconst INITIAL_STATE = {\n  isClose: true,\n  isFetch: false,\n  showInfo: true,\n  //SHOW INFO GLOBAL STATE\n  isNotif: true\n}; // REDUCER\n\nconst reducerForm = (state = INITIAL_STATE, action) => {\n  switch (action.type) {\n    case \"CHANGE_IS_CLOSE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        inClose: !state.isClose\n      });\n\n    case \"CHANGE_IS_FETCH\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        inClose: !state.isFetch\n      });\n\n    case \"HANDLE_SHOW_INFO\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        showInfo: !state.showInfo,\n        isNotif: !state.isNotif\n      });\n\n    default:\n      return state;\n  }\n}; // CONFIGURATION\n\n\nfunction initStore(preloadedState = INITIAL_STATE) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(reducerForm, preloadedState);\n}\n\nconst initializeStore = preloadedState => {\n  var _store2;\n\n  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state\n  // with the current state in the store, and create a new store\n\n\n  if (preloadedState && store) {\n    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store\n\n    store = undefined;\n  } // For SSG and SSR always create a new store\n\n\n  if (true) return _store; // Create the store once in the client\n\n  if (!store) store = _store;\n  return _store;\n};\nfunction useStore(initialState) {\n  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => initializeStore(initialState), [initialState]);\n  return store;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHByZWR1eC9zdG9yZS5qcz9iNDdjIl0sIm5hbWVzIjpbInN0b3JlIiwiSU5JVElBTF9TVEFURSIsImlzQ2xvc2UiLCJpc0ZldGNoIiwic2hvd0luZm8iLCJpc05vdGlmIiwicmVkdWNlckZvcm0iLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJpbkNsb3NlIiwiaW5pdFN0b3JlIiwicHJlbG9hZGVkU3RhdGUiLCJjcmVhdGVTdG9yZSIsImluaXRpYWxpemVTdG9yZSIsIl9zdG9yZSIsImdldFN0YXRlIiwidW5kZWZpbmVkIiwidXNlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJ1c2VNZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBSUEsS0FBSixDLENBRUE7O0FBQ0EsTUFBTUMsYUFBYSxHQUFHO0FBQ3BCQyxTQUFPLEVBQUUsSUFEVztBQUVwQkMsU0FBTyxFQUFFLEtBRlc7QUFJcEJDLFVBQVEsRUFBRSxJQUpVO0FBSUo7QUFDaEJDLFNBQU8sRUFBRTtBQUxXLENBQXRCLEMsQ0FTQTs7QUFDQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHTixhQUFULEVBQXdCTyxNQUF4QixLQUFtQztBQUNyRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLGlCQUFMO0FBQ0UsNkNBQ0tGLEtBREw7QUFFRUcsZUFBTyxFQUFFLENBQUNILEtBQUssQ0FBQ0w7QUFGbEI7O0FBS0YsU0FBSyxpQkFBTDtBQUNFLDZDQUNLSyxLQURMO0FBRUVHLGVBQU8sRUFBRSxDQUFDSCxLQUFLLENBQUNKO0FBRmxCOztBQU1GLFNBQUssa0JBQUw7QUFDRSw2Q0FDS0ksS0FETDtBQUVFSCxnQkFBUSxFQUFFLENBQUNHLEtBQUssQ0FBQ0gsUUFGbkI7QUFHRUMsZUFBTyxFQUFFLENBQUNFLEtBQUssQ0FBQ0Y7QUFIbEI7O0FBT0Y7QUFDRSxhQUFPRSxLQUFQO0FBdkJKO0FBeUJELENBMUJELEMsQ0E4QkE7OztBQUNBLFNBQVNJLFNBQVQsQ0FBbUJDLGNBQWMsR0FBR1gsYUFBcEMsRUFBb0Q7QUFDbEQsU0FBT1kseURBQVcsQ0FDaEJQLFdBRGdCLEVBRWhCTSxjQUZnQixDQUFsQjtBQUlEOztBQUVNLE1BQU1FLGVBQWUsR0FBSUYsY0FBRCxJQUFvQjtBQUFBOztBQUNqRCxNQUFJRyxNQUFNLGNBQUdmLEtBQUgsNkNBQVlXLFNBQVMsQ0FBQ0MsY0FBRCxDQUEvQixDQURpRCxDQUdqRDtBQUNBOzs7QUFDQSxNQUFJQSxjQUFjLElBQUlaLEtBQXRCLEVBQTZCO0FBQzNCZSxVQUFNLEdBQUdKLFNBQVMsaUNBQ2JYLEtBQUssQ0FBQ2dCLFFBQU4sRUFEYSxHQUViSixjQUZhLEVBQWxCLENBRDJCLENBSzNCOztBQUNBWixTQUFLLEdBQUdpQixTQUFSO0FBQ0QsR0FaZ0QsQ0FjakQ7OztBQUNBLFlBQW1DLE9BQU9GLE1BQVAsQ0FmYyxDQWdCakQ7O0FBQ0EsTUFBSSxDQUFDZixLQUFMLEVBQVlBLEtBQUssR0FBR2UsTUFBUjtBQUVaLFNBQU9BLE1BQVA7QUFDRCxDQXBCTTtBQXNCQSxTQUFTRyxRQUFULENBQWtCQyxZQUFsQixFQUFnQztBQUNyQyxRQUFNbkIsS0FBSyxHQUFHb0IscURBQU8sQ0FBQyxNQUFNTixlQUFlLENBQUNLLFlBQUQsQ0FBdEIsRUFBc0MsQ0FBQ0EsWUFBRCxDQUF0QyxDQUFyQjtBQUNBLFNBQU9uQixLQUFQO0FBQ0QiLCJmaWxlIjoiLi9hcHByZWR1eC9zdG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vU1RPUkVcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXG5cbmxldCBzdG9yZVxuXG4vLyBHbG9iYWwgc3RhdGVcbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIGlzQ2xvc2U6IHRydWUsXG4gIGlzRmV0Y2g6IGZhbHNlLFxuXG4gIHNob3dJbmZvOiB0cnVlLCAvL1NIT1cgSU5GTyBHTE9CQUwgU1RBVEVcbiAgaXNOb3RpZjogdHJ1ZVxufVxuXG5cbi8vIFJFRFVDRVJcbmNvbnN0IHJlZHVjZXJGb3JtID0gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiQ0hBTkdFX0lTX0NMT1NFXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaW5DbG9zZTogIXN0YXRlLmlzQ2xvc2VcbiAgICAgIH1cbiAgICBcbiAgICBjYXNlIFwiQ0hBTkdFX0lTX0ZFVENIXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaW5DbG9zZTogIXN0YXRlLmlzRmV0Y2hcbiAgICAgIH1cblxuICAgICAgXG4gICAgY2FzZSBcIkhBTkRMRV9TSE9XX0lORk9cIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzaG93SW5mbzogIXN0YXRlLnNob3dJbmZvLFxuICAgICAgICBpc05vdGlmOiAhc3RhdGUuaXNOb3RpZlxuICAgICAgfVxuXG4gICAgXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cblxuXG4vLyBDT05GSUdVUkFUSU9OXG5mdW5jdGlvbiBpbml0U3RvcmUocHJlbG9hZGVkU3RhdGUgPSBJTklUSUFMX1NUQVRFICkge1xuICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgcmVkdWNlckZvcm0sXG4gICAgcHJlbG9hZGVkU3RhdGUsXG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVTdG9yZSA9IChwcmVsb2FkZWRTdGF0ZSkgPT4ge1xuICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlKVxuXG4gIC8vIEFmdGVyIG5hdmlnYXRpbmcgdG8gYSBwYWdlIHdpdGggYW4gaW5pdGlhbCBSZWR1eCBzdGF0ZSwgbWVyZ2UgdGhhdCBzdGF0ZVxuICAvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxuICBpZiAocHJlbG9hZGVkU3RhdGUgJiYgc3RvcmUpIHtcbiAgICBfc3RvcmUgPSBpbml0U3RvcmUoe1xuICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgIC4uLnByZWxvYWRlZFN0YXRlLFxuICAgIH0pXG4gICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgc3RvcmVcbiAgICBzdG9yZSA9IHVuZGVmaW5lZFxuICB9XG5cbiAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgc3RvcmVcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX3N0b3JlXG4gIC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XG4gIGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlXG5cbiAgcmV0dXJuIF9zdG9yZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXG4gIHJldHVybiBzdG9yZVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./appredux/store.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _appredux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../appredux/store */ \"./appredux/store.js\");\nvar _jsxFileName = \"/home/kucing/project/covid-app/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  const store = Object(_appredux_store__WEBPACK_IMPORTED_MODULE_2__[\"useStore\"])(pageProps.initialReduxState);\n  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"], {\n    store: store,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJ1c2VTdG9yZSIsImluaXRpYWxSZWR1eFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLEdBQVQsQ0FBYTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBYixFQUF1QztBQUNwRCxRQUFNQyxLQUFLLEdBQUdDLGdFQUFRLENBQUNGLFNBQVMsQ0FBQ0csaUJBQVgsQ0FBdEI7QUFFQSxTQUNFLE1BQUMsb0RBQUQ7QUFBVSxTQUFLLEVBQUVGLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQsZUFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FERjtBQUtEIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJy4uL2FwcHJlZHV4L3N0b3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUocGFnZVByb3BzLmluaXRpYWxSZWR1eFN0YXRlKVxuXG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Qcm92aWRlcj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ })

/******/ });
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

/***/ "./appredux/reducer/index.js":
/*!***********************************!*\
  !*** ./appredux/reducer/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _listArticlesReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listArticlesReducer */ \"./appredux/reducer/listArticlesReducer.js\");\n/* harmony import */ var _navbarReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbarReducer */ \"./appredux/reducer/navbarReducer.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (combineReducers = () => {\n  _listArticlesReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _navbarReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHByZWR1eC9yZWR1Y2VyL2luZGV4LmpzPzI4ZDciXSwibmFtZXMiOlsiY29tYmluZVJlZHVjZXJzIiwibGlzdEFydGljbGVzUmVkdWNlciIsIm5hdmJhclJlZHVjZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFZUEsOEVBQWUsR0FBRyxNQUFNO0FBQ3JDQyw4REFBbUIsRUFDbkJDLHNEQURBO0FBRUQsQ0FIRCIsImZpbGUiOiIuL2FwcHJlZHV4L3JlZHVjZXIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBsaXN0QXJ0aWNsZXNSZWR1Y2VyIGZyb20gXCIuL2xpc3RBcnRpY2xlc1JlZHVjZXJcIlxuaW1wb3J0IG5hdmJhclJlZHVjZXIgZnJvbSBcIi4vbmF2YmFyUmVkdWNlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2VycyA9ICgpID0+IHtcbiAgbGlzdEFydGljbGVzUmVkdWNlcixcbiAgbmF2YmFyUmVkdWNlclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./appredux/reducer/index.js\n");

/***/ }),

/***/ "./appredux/reducer/listArticlesReducer.js":
/*!*************************************************!*\
  !*** ./appredux/reducer/listArticlesReducer.js ***!
  \*************************************************/
/*! exports provided: INITIAL_STATE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INITIAL_STATE\", function() { return INITIAL_STATE; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst INITIAL_STATE = {\n  data: []\n};\n\nconst listArticlesReducer = (state = INITIAL_STATE, action) => {\n  switch (action.type) {\n    case \"SET_DATA\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        data\n      });\n\n    case \"SET_DATA2\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        data\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (listArticlesReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHByZWR1eC9yZWR1Y2VyL2xpc3RBcnRpY2xlc1JlZHVjZXIuanM/NTc5NCJdLCJuYW1lcyI6WyJJTklUSUFMX1NUQVRFIiwiZGF0YSIsImxpc3RBcnRpY2xlc1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQU8sTUFBTUEsYUFBYSxHQUFHO0FBQzNCQyxNQUFJLEVBQUU7QUFEcUIsQ0FBdEI7O0FBSVAsTUFBTUMsbUJBQW1CLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHSCxhQUFULEVBQXdCSSxNQUF4QixLQUFtQztBQUM3RCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLFVBQUw7QUFDRSw2Q0FDS0YsS0FETDtBQUVFRjtBQUZGOztBQUtGLFNBQUssV0FBTDtBQUNFLDZDQUNLRSxLQURMO0FBRUVGO0FBRkY7O0FBSUY7QUFDRSxhQUFPRSxLQUFQO0FBYko7QUFlRCxDQWhCRDs7QUFrQmVELGtGQUFmIiwiZmlsZSI6Ii4vYXBwcmVkdXgvcmVkdWNlci9saXN0QXJ0aWNsZXNSZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIGRhdGE6IFtdXG59XG5cbmNvbnN0IGxpc3RBcnRpY2xlc1JlZHVjZXIgPSAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJTRVRfREFUQVwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRhdGFcbiAgICAgIH1cbiAgICBcbiAgICBjYXNlIFwiU0VUX0RBVEEyXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGF0YVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsaXN0QXJ0aWNsZXNSZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./appredux/reducer/listArticlesReducer.js\n");

/***/ }),

/***/ "./appredux/reducer/navbarReducer.js":
/*!*******************************************!*\
  !*** ./appredux/reducer/navbarReducer.js ***!
  \*******************************************/
/*! exports provided: INITIAL_STATE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INITIAL_STATE\", function() { return INITIAL_STATE; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// Global state\nconst INITIAL_STATE = {\n  isClose: true,\n  isFetch: false,\n  showInfo: true,\n  //SHOW INFO GLOBAL STATE\n  isNotif: true,\n  data: []\n};\n\nconst navbarReducer = (state = INITIAL_STATE, action) => {\n  switch (action.type) {\n    case \"CHANGE_IS_CLOSE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        inClose: !state.isClose\n      });\n\n    case \"CHANGE_IS_FETCH\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        inClose: !state.isFetch\n      });\n\n    case \"HANDLE_SHOW_INFO\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        showInfo: !state.showInfo,\n        isNotif: !state.isNotif\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navbarReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHByZWR1eC9yZWR1Y2VyL25hdmJhclJlZHVjZXIuanM/NTE2NCJdLCJuYW1lcyI6WyJJTklUSUFMX1NUQVRFIiwiaXNDbG9zZSIsImlzRmV0Y2giLCJzaG93SW5mbyIsImlzTm90aWYiLCJkYXRhIiwibmF2YmFyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImluQ2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDTyxNQUFNQSxhQUFhLEdBQUc7QUFDM0JDLFNBQU8sRUFBRSxJQURrQjtBQUUzQkMsU0FBTyxFQUFFLEtBRmtCO0FBSTNCQyxVQUFRLEVBQUUsSUFKaUI7QUFJWDtBQUNoQkMsU0FBTyxFQUFFLElBTGtCO0FBTTNCQyxNQUFJLEVBQUU7QUFOcUIsQ0FBdEI7O0FBU1AsTUFBTUMsYUFBYSxHQUFHLENBQUNDLEtBQUssR0FBR1AsYUFBVCxFQUF3QlEsTUFBeEIsS0FBbUM7QUFDdkQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxpQkFBTDtBQUNFLDZDQUNLRixLQURMO0FBRUVHLGVBQU8sRUFBRSxDQUFDSCxLQUFLLENBQUNOO0FBRmxCOztBQUtGLFNBQUssaUJBQUw7QUFDRSw2Q0FDS00sS0FETDtBQUVFRyxlQUFPLEVBQUUsQ0FBQ0gsS0FBSyxDQUFDTDtBQUZsQjs7QUFNRixTQUFLLGtCQUFMO0FBQ0UsNkNBQ0tLLEtBREw7QUFFRUosZ0JBQVEsRUFBRSxDQUFDSSxLQUFLLENBQUNKLFFBRm5CO0FBR0VDLGVBQU8sRUFBRSxDQUFDRyxLQUFLLENBQUNIO0FBSGxCOztBQUtGO0FBQ0UsYUFBT0csS0FBUDtBQXJCSjtBQXVCRCxDQXhCRDs7QUEwQmVELDRFQUFmIiwiZmlsZSI6Ii4vYXBwcmVkdXgvcmVkdWNlci9uYXZiYXJSZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2xvYmFsIHN0YXRlXG5leHBvcnQgY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgaXNDbG9zZTogdHJ1ZSxcbiAgaXNGZXRjaDogZmFsc2UsXG5cbiAgc2hvd0luZm86IHRydWUsIC8vU0hPVyBJTkZPIEdMT0JBTCBTVEFURVxuICBpc05vdGlmOiB0cnVlLFxuICBkYXRhOiBbXVxufVxuXG5jb25zdCBuYXZiYXJSZWR1Y2VyID0gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiQ0hBTkdFX0lTX0NMT1NFXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaW5DbG9zZTogIXN0YXRlLmlzQ2xvc2VcbiAgICAgIH1cbiAgICBcbiAgICBjYXNlIFwiQ0hBTkdFX0lTX0ZFVENIXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaW5DbG9zZTogIXN0YXRlLmlzRmV0Y2hcbiAgICAgIH1cblxuICAgICAgXG4gICAgY2FzZSBcIkhBTkRMRV9TSE9XX0lORk9cIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzaG93SW5mbzogIXN0YXRlLnNob3dJbmZvLFxuICAgICAgICBpc05vdGlmOiAhc3RhdGUuaXNOb3RpZlxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuYXZiYXJSZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./appredux/reducer/navbarReducer.js\n");

/***/ }),

/***/ "./appredux/store.js":
/*!***************************!*\
  !*** ./appredux/store.js ***!
  \***************************/
/*! exports provided: initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeStore\", function() { return initializeStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useStore\", function() { return useStore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducer_navbarReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer/navbarReducer */ \"./appredux/reducer/navbarReducer.js\");\n/* harmony import */ var _reducer_listArticlesReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer/listArticlesReducer */ \"./appredux/reducer/listArticlesReducer.js\");\n/* harmony import */ var _reducer_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducer/index */ \"./appredux/reducer/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//STORE\n\n\n\n\n\n\n\nlet store; // CONFIGURATION\n\nfunction initStore(preloadedState = _reducer_navbarReducer__WEBPACK_IMPORTED_MODULE_4__[\"INITIAL_STATE\"]) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducer_index__WEBPACK_IMPORTED_MODULE_6__[\"default\"], preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a)));\n}\n\nconst initializeStore = preloadedState => {\n  var _store2;\n\n  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state\n  // with the current state in the store, and create a new store\n\n\n  if (preloadedState && store) {\n    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store\n\n    store = undefined;\n  } // For SSG and SSR always create a new store\n\n\n  if (true) return _store; // Create the store once in the client\n\n  if (!store) store = _store;\n  return _store;\n};\nfunction useStore(initialState) {\n  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => initializeStore(initialState), [initialState]);\n  return store;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHByZWR1eC9zdG9yZS5qcz9iNDdjIl0sIm5hbWVzIjpbInN0b3JlIiwiaW5pdFN0b3JlIiwicHJlbG9hZGVkU3RhdGUiLCJJTklUSUFMX1NUQVRFIiwiY3JlYXRlU3RvcmUiLCJjb21iaW5lUmVkdWNlcnMiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmtNaWRkbGV3YXJlIiwiaW5pdGlhbGl6ZVN0b3JlIiwiX3N0b3JlIiwiZ2V0U3RhdGUiLCJ1bmRlZmluZWQiLCJ1c2VTdG9yZSIsImluaXRpYWxTdGF0ZSIsInVzZU1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQUlBLEtBQUosQyxDQUVBOztBQUNBLFNBQVNDLFNBQVQsQ0FBbUJDLGNBQWMsR0FBR0Msb0VBQXBDLEVBQW9EO0FBQ2xELFNBQU9DLHlEQUFXLENBQ2hCQyxzREFEZ0IsRUFFaEJILGNBRmdCLEVBR2hCSSxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQ0Msa0RBQUQsQ0FBaEIsQ0FISCxDQUFsQjtBQUtEOztBQUVNLE1BQU1DLGVBQWUsR0FBSVAsY0FBRCxJQUFvQjtBQUFBOztBQUNqRCxNQUFJUSxNQUFNLGNBQUdWLEtBQUgsNkNBQVlDLFNBQVMsQ0FBQ0MsY0FBRCxDQUEvQixDQURpRCxDQUdqRDtBQUNBOzs7QUFDQSxNQUFJQSxjQUFjLElBQUlGLEtBQXRCLEVBQTZCO0FBQzNCVSxVQUFNLEdBQUdULFNBQVMsaUNBQ2JELEtBQUssQ0FBQ1csUUFBTixFQURhLEdBRWJULGNBRmEsRUFBbEIsQ0FEMkIsQ0FLM0I7O0FBQ0FGLFNBQUssR0FBR1ksU0FBUjtBQUNELEdBWmdELENBY2pEOzs7QUFDQSxZQUFtQyxPQUFPRixNQUFQLENBZmMsQ0FnQmpEOztBQUNBLE1BQUksQ0FBQ1YsS0FBTCxFQUFZQSxLQUFLLEdBQUdVLE1BQVI7QUFFWixTQUFPQSxNQUFQO0FBQ0QsQ0FwQk07QUFzQkEsU0FBU0csUUFBVCxDQUFrQkMsWUFBbEIsRUFBZ0M7QUFDckMsUUFBTWQsS0FBSyxHQUFHZSxxREFBTyxDQUFDLE1BQU1OLGVBQWUsQ0FBQ0ssWUFBRCxDQUF0QixFQUFzQyxDQUFDQSxZQUFELENBQXRDLENBQXJCO0FBQ0EsU0FBT2QsS0FBUDtBQUNEIiwiZmlsZSI6Ii4vYXBwcmVkdXgvc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1NUT1JFXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCBuYXZiYXJSZWR1Y2VyLHtJTklUSUFMX1NUQVRFfSBmcm9tIFwiLi9yZWR1Y2VyL25hdmJhclJlZHVjZXJcIlxuaW1wb3J0IGxpc3RBcnRpY2xlc1JlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyL2xpc3RBcnRpY2xlc1JlZHVjZXInXG5pbXBvcnQgY29tYmluZVJlZHVjZXJzIGZyb20gXCIuL3JlZHVjZXIvaW5kZXhcIlxuXG5cbmxldCBzdG9yZVxuXG4vLyBDT05GSUdVUkFUSU9OXG5mdW5jdGlvbiBpbml0U3RvcmUocHJlbG9hZGVkU3RhdGUgPSBJTklUSUFMX1NUQVRFICkge1xuICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgY29tYmluZVJlZHVjZXJzLFxuICAgIHByZWxvYWRlZFN0YXRlLFxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpXG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVTdG9yZSA9IChwcmVsb2FkZWRTdGF0ZSkgPT4ge1xuICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlKVxuXG4gIC8vIEFmdGVyIG5hdmlnYXRpbmcgdG8gYSBwYWdlIHdpdGggYW4gaW5pdGlhbCBSZWR1eCBzdGF0ZSwgbWVyZ2UgdGhhdCBzdGF0ZVxuICAvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxuICBpZiAocHJlbG9hZGVkU3RhdGUgJiYgc3RvcmUpIHtcbiAgICBfc3RvcmUgPSBpbml0U3RvcmUoe1xuICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgIC4uLnByZWxvYWRlZFN0YXRlLFxuICAgIH0pXG4gICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgc3RvcmVcbiAgICBzdG9yZSA9IHVuZGVmaW5lZFxuICB9XG5cbiAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgc3RvcmVcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX3N0b3JlXG4gIC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XG4gIGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlXG5cbiAgcmV0dXJuIF9zdG9yZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXG4gIHJldHVybiBzdG9yZVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./appredux/store.js\n");

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

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiPzg4MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXgtdGh1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-thunk\n");

/***/ })

/******/ });
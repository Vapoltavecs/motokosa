/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/block.js":
/*!*****************************!*\
  !*** ./src/blocks/block.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _info_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info/info */ \"./src/blocks/info/info.js\");\n/* harmony import */ var _info_info__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_info_info__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scrollToAnchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scrollToAnchor */ \"./src/blocks/scrollToAnchor.js\");\n/* harmony import */ var _scrollToAnchor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scrollToAnchor__WEBPACK_IMPORTED_MODULE_1__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2Jsb2NrLmpzP2JiNWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vc3JjL2Jsb2Nrcy9ibG9jay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vaW5mby9pbmZvXCJcclxuaW1wb3J0IFwiLi9zY3JvbGxUb0FuY2hvclwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/blocks/block.js\n");

/***/ }),

/***/ "./src/blocks/info/info.js":
/*!*********************************!*\
  !*** ./src/blocks/info/info.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var info = document.querySelector(\".info\");\nvar infoContent = info.querySelector(\".info__content\");\nvar infoHeader = infoContent.querySelector(\".info__content-header\");\nvar openContent = info.querySelector(\".info__button\");\nvar isOpen = false;\n\nvar closeInfo = function closeInfo() {\n  var heightContent = infoHeader.clientHeight + \"px\";\n  infoContent.style.height = heightContent;\n  openContent.innerHTML = \"Більше...\";\n  isOpen = false;\n};\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  var heightAllContent = infoContent.clientHeight + \"px\";\n  closeInfo();\n  openContent.addEventListener(\"click\", function () {\n    if (isOpen) {\n      closeInfo();\n    } else {\n      isOpen = true;\n      openContent.innerHTML = \"Згорнути\";\n      infoContent.style.height = heightAllContent;\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2luZm8vaW5mby5qcz84MDMxIl0sIm5hbWVzIjpbImluZm8iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbmZvQ29udGVudCIsImluZm9IZWFkZXIiLCJvcGVuQ29udGVudCIsImlzT3BlbiIsImNsb3NlSW5mbyIsImhlaWdodENvbnRlbnQiLCJjbGllbnRIZWlnaHQiLCJzdHlsZSIsImhlaWdodCIsImlubmVySFRNTCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoZWlnaHRBbGxDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBQ0EsSUFBTUMsV0FBVyxHQUFHSCxJQUFJLENBQUNFLGFBQUwsQ0FBbUIsZ0JBQW5CLENBQXBCO0FBQ0EsSUFBTUUsVUFBVSxHQUFHRCxXQUFXLENBQUNELGFBQVosQ0FBMEIsdUJBQTFCLENBQW5CO0FBQ0EsSUFBTUcsV0FBVyxHQUFHTCxJQUFJLENBQUNFLGFBQUwsQ0FBbUIsZUFBbkIsQ0FBcEI7QUFFQSxJQUFJSSxNQUFNLEdBQUcsS0FBYjs7QUFFQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCLE1BQU1DLGFBQWEsR0FBR0osVUFBVSxDQUFDSyxZQUFYLEdBQTBCLElBQWhEO0FBQ0FOLGFBQVcsQ0FBQ08sS0FBWixDQUFrQkMsTUFBbEIsR0FBMkJILGFBQTNCO0FBQ0FILGFBQVcsQ0FBQ08sU0FBWixHQUF3QixXQUF4QjtBQUNBTixRQUFNLEdBQUcsS0FBVDtBQUNILENBTEQ7O0FBTUFPLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQU07QUFDOUMsTUFBTUMsZ0JBQWdCLEdBQUdaLFdBQVcsQ0FBQ00sWUFBWixHQUEyQixJQUFwRDtBQUNBRixXQUFTO0FBQ1RGLGFBQVcsQ0FBQ1MsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsWUFBTTtBQUN4QyxRQUFHUixNQUFILEVBQVU7QUFDTkMsZUFBUztBQUNaLEtBRkQsTUFFTTtBQUNGRCxZQUFNLEdBQUcsSUFBVDtBQUNBRCxpQkFBVyxDQUFDTyxTQUFaLEdBQXdCLFVBQXhCO0FBQ0FULGlCQUFXLENBQUNPLEtBQVosQ0FBa0JDLE1BQWxCLEdBQTJCSSxnQkFBM0I7QUFDSDtBQUNKLEdBUkQ7QUFTSCxDQVpEIiwiZmlsZSI6Ii4vc3JjL2Jsb2Nrcy9pbmZvL2luZm8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpXHJcbmNvbnN0IGluZm9Db250ZW50ID0gaW5mby5xdWVyeVNlbGVjdG9yKFwiLmluZm9fX2NvbnRlbnRcIilcclxuY29uc3QgaW5mb0hlYWRlciA9IGluZm9Db250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb19fY29udGVudC1oZWFkZXJcIilcclxuY29uc3Qgb3BlbkNvbnRlbnQgPSBpbmZvLnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb19fYnV0dG9uXCIpXHJcblxyXG5sZXQgaXNPcGVuID0gZmFsc2VcclxuXHJcbmNvbnN0IGNsb3NlSW5mbyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGhlaWdodENvbnRlbnQgPSBpbmZvSGVhZGVyLmNsaWVudEhlaWdodCArIFwicHhcIlxyXG4gICAgaW5mb0NvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0Q29udGVudFxyXG4gICAgb3BlbkNvbnRlbnQuaW5uZXJIVE1MID0gXCLQkdGW0LvRjNGI0LUuLi5cIlxyXG4gICAgaXNPcGVuID0gZmFsc2VcclxufVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgaGVpZ2h0QWxsQ29udGVudCA9IGluZm9Db250ZW50LmNsaWVudEhlaWdodCArIFwicHhcIlxyXG4gICAgY2xvc2VJbmZvKClcclxuICAgIG9wZW5Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYoaXNPcGVuKXtcclxuICAgICAgICAgICAgY2xvc2VJbmZvKClcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIGlzT3BlbiA9IHRydWVcclxuICAgICAgICAgICAgb3BlbkNvbnRlbnQuaW5uZXJIVE1MID0gXCLQl9Cz0L7RgNC90YPRgtC4XCJcclxuICAgICAgICAgICAgaW5mb0NvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0QWxsQ29udGVudFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/blocks/info/info.js\n");

/***/ }),

/***/ "./src/blocks/scrollToAnchor.js":
/*!**************************************!*\
  !*** ./src/blocks/scrollToAnchor.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var anchors = document.querySelectorAll(\"*[data-scroll]\");\nconsole.log(anchors);\n\nvar scrollToAnchor = function scrollToAnchor(e) {\n  e.preventDefault();\n  var blockId = e.target.getAttribute(\"data-scroll\");\n  var neededBlock = document.getElementById(blockId);\n  neededBlock.scrollIntoView({\n    behavior: \"smooth\",\n    block: \"start\"\n  });\n};\n\nanchors.forEach(function (el) {\n  if (el.getAttribute(\"data-scroll\") !== \"@@custom\") el.addEventListener(\"click\", scrollToAnchor);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3Njcm9sbFRvQW5jaG9yLmpzPzdkYjkiXSwibmFtZXMiOlsiYW5jaG9ycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnNvbGUiLCJsb2ciLCJzY3JvbGxUb0FuY2hvciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImJsb2NrSWQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJuZWVkZWRCbG9jayIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiZm9yRWFjaCIsImVsIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGdCQUExQixDQUFoQjtBQUVBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUosT0FBWjs7QUFFQSxJQUFNSyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLENBQUQsRUFBTztBQUM1QkEsR0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTUMsT0FBTyxHQUFHRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsWUFBVCxDQUFzQixhQUF0QixDQUFoQjtBQUNBLE1BQU1DLFdBQVcsR0FBR1YsUUFBUSxDQUFDVyxjQUFULENBQXdCSixPQUF4QixDQUFwQjtBQUNBRyxhQUFXLENBQUNFLGNBQVosQ0FBMkI7QUFDekJDLFlBQVEsRUFBRSxRQURlO0FBRXpCQyxTQUFLLEVBQUU7QUFGa0IsR0FBM0I7QUFJRCxDQVJEOztBQVVBZixPQUFPLENBQUNnQixPQUFSLENBQWdCLFVBQUNDLEVBQUQsRUFBUTtBQUFFLE1BQUdBLEVBQUUsQ0FBQ1AsWUFBSCxDQUFnQixhQUFoQixNQUFtQyxVQUF0QyxFQUFrRE8sRUFBRSxDQUFDQyxnQkFBSCxDQUFvQixPQUFwQixFQUE2QmIsY0FBN0I7QUFBNkMsQ0FBekgiLCJmaWxlIjoiLi9zcmMvYmxvY2tzL3Njcm9sbFRvQW5jaG9yLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYW5jaG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqW2RhdGEtc2Nyb2xsXVwiKTtcclxuXHJcbmNvbnNvbGUubG9nKGFuY2hvcnMpXHJcblxyXG5jb25zdCBzY3JvbGxUb0FuY2hvciA9IChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGJsb2NrSWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNjcm9sbFwiKVxyXG4gIGNvbnN0IG5lZWRlZEJsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmxvY2tJZCk7XHJcbiAgbmVlZGVkQmxvY2suc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICBibG9jazogXCJzdGFydFwiLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuYW5jaG9ycy5mb3JFYWNoKChlbCkgPT4geyBpZihlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNjcm9sbFwiKSAhPT0gXCJAQGN1c3RvbVwiKSBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2Nyb2xsVG9BbmNob3IpfSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/blocks/scrollToAnchor.js\n");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/block */ \"./src/blocks/block.js\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYWluLmpzPzI5NjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2Jsb2Nrcy9ibG9jayciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/main.js\n");

/***/ })

/******/ });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// let login = \"\";\n// let password = \"\";\n// let valid = false;\n// let pageTitle = \"Game Session Society\";\n// const logoLink = \"image/logo/logo.png\";\n// const register = null;\n// const registerLink = \"/register\";\n// const registerText = \"Register\";\n// const go = null;\n// const goLink = \"/home\";\n// const goText = \"Go\";\nvar div1 = document.createElement(\"div\");\nvar div2 = document.createElement(\"div\");\nvar img = document.createElement(\"img\");\nvar h1 = document.createElement(\"h1\");\nvar form = document.createElement(\"form\");\nvar inputLogin = document.createElement(\"input\");\nvar inputPassword = document.createElement(\"input\");\nvar buttonGo = document.createElement(\"button\");\nvar buttonRegister = document.createElement(\"button\");\nvar text = document.createTextNode(\"Game Session\");\nvar loginText = document.createTextNode(\"Login\");\nvar registerText = document.createTextNode(\"Register\");\nvar buttonGoLink = document.createElement(\"a\");\nvar buttonRegisterLink = document.createElement(\"a\");\ndiv1.setAttribute(\"class\", \"div1\");\ndiv2.setAttribute(\"class\", \"div2\");\nimg.setAttribute(\"class\", \"imgLogo\");\nimg.setAttribute(\"src\", \"assets/images/wg.png\");\nimg.setAttribute(\"alt\", \"logo Worlds of  game\");\nform.setAttribute(\"class\", \"form\");\nform.setAttribute(\"method\", \"post\");\nform.setAttribute(\"action\", \"\");\ninputLogin.setAttribute(\"id\", \"inputLogin\");\ninputLogin.setAttribute(\"type\", \"text\");\ninputLogin.setAttribute(\"placeholder\", \"Email\");\ninputLogin.setAttribute(\"action\", \"\");\ninputPassword.setAttribute(\"id\", \"inputPassword\");\ninputPassword.setAttribute(\"type\", \"text\");\ninputPassword.setAttribute(\"placeholder\", \"Password\");\nbuttonGo.setAttribute(\"class\", \"buttonGo\");\nbuttonGo.setAttribute(\"type\", \"submit\");\nbuttonRegister.setAttribute(\"class\", \"buttonRegister\");\nbuttonRegister.setAttribute(\"type\", \"submit\");\nbuttonGoLink.setAttribute(\"href\", \"https://fr.wikipedia.org\");\nbuttonRegisterLink.setAttribute(\"href\", \"https://www.google.fr\");\ndiv2.appendChild(img);\nh1.appendChild(text);\ndiv2.appendChild(h1);\nform.appendChild(inputLogin);\nform.appendChild(inputPassword);\nbuttonGo.appendChild(loginText);\nform.appendChild(buttonGoLink);\nbuttonGoLink.appendChild(buttonGo);\nbuttonRegisterLink.appendChild(buttonRegister);\nbuttonRegister.appendChild(registerText);\ndiv1.appendChild(div2);\ndiv1.appendChild(form);\ndiv1.appendChild(buttonRegisterLink);\ndocument.body.appendChild(div1);\n\nvar createElement = function createElement(element, value) {\n  document.createElement(value);\n  return true;\n};\n\nvar setAttribute = function setAttribute(element, name, value) {\n  element.setAttribute(name, value);\n  return true;\n};\n\nvar appendChild = function appendChild(element) {\n  element.appendChild(element.createElement);\n  return true;\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/models/user.model */ \"./src/shared/models/user.model.js\");\n // let login = \"\";\n// let password = \"\";\n// let valid = false;\n// let pageTitle = \"Game Session Society\";\n// const logoLink = \"image/logo/logo.png\";\n// const register = null;\n// const registerLink = \"/register\";\n// const registerText = \"Register\";\n// const go = null;\n// const goLink = \"/home\";\n// const goText = \"Go\";\n// const div1 = document.createElement(\"div\");\n// const div2 = document.createElement(\"div\");\n// const img = document.createElement(\"img\");\n//const pageTitle =  document.createElement(\"h1\");\n// const form = document.createElement(\"form\");\n// const inputLogin = document.createElement(\"input\");\n// const inputPassword = document.createElement(\"input\");\n// const buttonGo = document.createElement(\"button\");\n// const buttonRegister = document.createElement(\"button\");\n// const text = document.createTextNode(\"Game Session\");\n// const loginText = document.createTextNode(\"Login\");\n// const registerText = document.createTextNode(\"Register\");\n// const buttonGoLink = document.createElement(\"a\");\n// const buttonRegisterLink = document.createElement(\"a\");\n// div1.setAttribute(\"class\",\"div1\");\n// div2.setAttribute(\"class\",\"div2\");\n// img.setAttribute(\"class\",\"imgLogo\");\n// img.setAttribute(\"src\",\"assets/images/wg.png\");\n// img.setAttribute(\"alt\",\"logo Worlds of  game\");\n// form.setAttribute(\"class\",\"form\");\n// form.setAttribute(\"method\",\"post\");\n// form.setAttribute(\"action\",\"\");\n// inputLogin.setAttribute(\"id\",\"inputLogin\");\n// inputLogin.setAttribute(\"type\",\"text\");\n// inputLogin.setAttribute(\"placeholder\",\"Email\");\n// inputLogin.setAttribute(\"action\",\"\");\n// inputPassword.setAttribute(\"id\",\"inputPassword\");\n// inputPassword.setAttribute(\"type\",\"text\");\n// inputPassword.setAttribute(\"placeholder\",\"Password\");\n// buttonGo.setAttribute(\"class\",\"buttonGo\");\n// buttonGo.setAttribute(\"type\",\"submit\");\n// buttonRegister.setAttribute(\"class\", \"buttonRegister\");\n// buttonRegister.setAttribute(\"type\",\"submit\");\n// buttonGoLink.setAttribute(\"href\",\"https://fr.wikipedia.org\");\n// buttonRegisterLink.setAttribute(\"href\",\"https://www.google.fr\");\n// div2.appendChild(img);\n//pageTitle.appendChild(text);\n//div2.appendChild(pageTitle);\n// form.appendChild(inputLogin);\n// form.appendChild(inputPassword);\n// buttonGo.appendChild(loginText);\n// form.appendChild(buttonGoLink);\n// buttonGoLink.appendChild(buttonGo);\n// buttonRegisterLink.appendChild(buttonRegister);\n// buttonRegister.appendChild(registerText);\n// div1.appendChild(form);\n// div1.appendChild(div2);\n// div1.appendChild(buttonRegisterLink);\n// document.body.appendChild(div1);\n\nvar div1 = document.createElement(\"div\");\nvar div2 = document.createElement(\"div\");\ndiv1.setAttribute(\"class\", \"div1\");\ndiv2.setAttribute(\"class\", \"div2\");\ndiv1.appendChild(div2);\nvar newUser = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"User\"](\"licorne\", \"test@example.com\");\nconsole.log(newUser);\n\nvar setAttribute = function setAttribute(name, json) {\n  for (var key in json) {\n    name.setAttribute(key, json[key]);\n  }\n\n  ;\n};\n\nvar displayTitle = function displayTitle(Titletext) {\n  var pageTitle = document.createElement(\"h1\");\n  var text = document.createTextNode(Titletext);\n  pageTitle.setAttribute(\"class\", \"pageTitle\");\n  var img = document.createElement(\"img\");\n  setAttribute(img, {\n    \"class\": \"imgLogo\",\n    src: \"assets/images/wg.png\",\n    alt: \"logo Worlds of  game\"\n  });\n  pageTitle.appendChild(text);\n  div2.appendChild(pageTitle);\n  div2.appendChild(img);\n  console.log(\"ok\");\n};\n\nvar displayLoginForm = function displayLoginForm() {\n  var form = document.createElement(\"form\");\n  var inputLogin = document.createElement(\"input\");\n  var inputPassword = document.createElement(\"input\");\n  var buttonGo = document.createElement(\"button\");\n  var loginText = document.createTextNode(\"Login\");\n  var buttonGoLink = document.createElement(\"a\");\n  setAttribute(form, {\n    \"class\": \"form\",\n    method: \"post\",\n    action: \"\"\n  });\n  setAttribute(inputLogin, {\n    id: \"inputLogin\",\n    type: \"text\",\n    placeholder: \"Email\",\n    value: newUser.login,\n    action: \"\"\n  });\n  setAttribute(inputPassword, {\n    id: \"inputPassword\",\n    type: \"text\",\n    placeholder: \"Password\",\n    value: newUser.password\n  });\n  setAttribute(buttonGo, {\n    text: \"Go\",\n    type: \"submit\",\n    href: \"https://fr.wikipedia.org\"\n  });\n  form.appendChild(inputLogin);\n  form.appendChild(inputPassword);\n  form.appendChild(buttonGoLink);\n  buttonGo.appendChild(loginText);\n  buttonGoLink.appendChild(buttonGo);\n  div1.appendChild(form);\n};\n\nvar displayRegisterButton = function displayRegisterButton() {\n  var buttonRegister = document.createElement(\"button\");\n  var registerText = document.createTextNode(\"Register\");\n  var buttonRegisterLink = document.createElement(\"a\");\n  setAttribute(buttonRegister, {\n    \"class\": \"buttonRegister\",\n    type: \"submit\"\n  });\n  setAttribute(buttonRegisterLink, {\n    href: \"https://www.google.fr\"\n  });\n  buttonRegisterLink.appendChild(buttonRegister);\n  buttonRegister.appendChild(registerText);\n  div1.appendChild(buttonRegisterLink);\n};\n\nvar displayLogin = function displayLogin() {\n  displayTitle(\"Game Session\");\n  displayLoginForm();\n  displayRegisterButton();\n  document.body.appendChild(div1);\n};\n\ndisplayLogin();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/shared/models/addressUser.model.js":
/*!************************************************!*\
  !*** ./src/shared/models/addressUser.model.js ***!
  \************************************************/
/*! exports provided: AddressUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddressUser\", function() { return AddressUser; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar AddressUser = function AddressUser(address, city, zipCode) {\n  _classCallCheck(this, AddressUser);\n\n  this.address = address;\n  this.city = city;\n  this.zipCode = zipCode;\n};\n;\n\n//# sourceURL=webpack:///./src/shared/models/addressUser.model.js?");

/***/ }),

/***/ "./src/shared/models/mailUser.model.js":
/*!*********************************************!*\
  !*** ./src/shared/models/mailUser.model.js ***!
  \*********************************************/
/*! exports provided: MailUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MailUser\", function() { return MailUser; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar MailUser = function MailUser(mail) {\n  _classCallCheck(this, MailUser);\n\n  this.mail = mail;\n};\n;\n\n//# sourceURL=webpack:///./src/shared/models/mailUser.model.js?");

/***/ }),

/***/ "./src/shared/models/nameUser.model.js":
/*!*********************************************!*\
  !*** ./src/shared/models/nameUser.model.js ***!
  \*********************************************/
/*! exports provided: NameUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NameUser\", function() { return NameUser; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar NameUser = function NameUser(surName, firstName, lastName) {\n  _classCallCheck(this, NameUser);\n\n  this.surName = surName;\n  this.firstName = firstName;\n  this.lastName = lastName;\n};\n;\n\n//# sourceURL=webpack:///./src/shared/models/nameUser.model.js?");

/***/ }),

/***/ "./src/shared/models/passwordUser.model.js":
/*!*************************************************!*\
  !*** ./src/shared/models/passwordUser.model.js ***!
  \*************************************************/
/*! exports provided: Password */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Password\", function() { return Password; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Password = function Password(password) {\n  _classCallCheck(this, Password);\n\n  this.password = password;\n};\n\n//# sourceURL=webpack:///./src/shared/models/passwordUser.model.js?");

/***/ }),

/***/ "./src/shared/models/phoneUser.model.js":
/*!**********************************************!*\
  !*** ./src/shared/models/phoneUser.model.js ***!
  \**********************************************/
/*! exports provided: PhoneUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PhoneUser\", function() { return PhoneUser; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar PhoneUser = function PhoneUser(phoneNumber) {\n  _classCallCheck(this, PhoneUser);\n\n  this.phoneNumber = phoneNumber;\n};\n\n//# sourceURL=webpack:///./src/shared/models/phoneUser.model.js?");

/***/ }),

/***/ "./src/shared/models/user.model.js":
/*!*****************************************!*\
  !*** ./src/shared/models/user.model.js ***!
  \*****************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return User; });\n/* harmony import */ var _mailUser_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mailUser.model */ \"./src/shared/models/mailUser.model.js\");\n/* harmony import */ var _nameUser_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nameUser.model */ \"./src/shared/models/nameUser.model.js\");\n/* harmony import */ var _addressUser_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addressUser.model */ \"./src/shared/models/addressUser.model.js\");\n/* harmony import */ var _phoneUser_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phoneUser.model */ \"./src/shared/models/phoneUser.model.js\");\n/* harmony import */ var _passwordUser_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./passwordUser.model */ \"./src/shared/models/passwordUser.model.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\n\n\nvar User = function User() {\n  _classCallCheck(this, User);\n\n  this.nameUser = new _nameUser_model__WEBPACK_IMPORTED_MODULE_1__[\"NameUser\"]();\n  this.mailUser = new _mailUser_model__WEBPACK_IMPORTED_MODULE_0__[\"MailUser\"]();\n  this.addressUser = new _addressUser_model__WEBPACK_IMPORTED_MODULE_2__[\"AddressUser\"]();\n  this.phoneUser = new _phoneUser_model__WEBPACK_IMPORTED_MODULE_3__[\"PhoneUser\"]();\n  this.password = new _passwordUser_model__WEBPACK_IMPORTED_MODULE_4__[\"Password\"]();\n};\n;\n\n//# sourceURL=webpack:///./src/shared/models/user.model.js?");

/***/ })

/******/ });
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_components_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/login.component */ \"./src/shared/components/login.component.js\");\n\nvar login = new _shared_components_login_component__WEBPACK_IMPORTED_MODULE_0__[\"Login\"]();\nlogin.display(); // /**\n//  * @type {HTMLElement}\n//  */\n//  const element = document.createElement(tagName);\n// /**\n//  * @param {String} tagName \n//  * @param {HTMLElement} to \n//  * @returns {HTMLElement}\n//  */\n// const createElementThenAppendTo = (tagName, to) => {\n//   const element = document.createElement(tagName);\n//   to.appendChild(element)\n//   return element;\n// }\n// const myForm = createElementThenAppendTo(\"form\", document.body);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/shared/components/login.component.js":
/*!**************************************************!*\
  !*** ./src/shared/components/login.component.js ***!
  \**************************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Login\", function() { return Login; });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./src/shared/models/user.model.js\");\n/* harmony import */ var _title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title.component */ \"./src/shared/components/title.component.js\");\n/* harmony import */ var _register_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-button.component */ \"./src/shared/components/register-button.component.js\");\n/* harmony import */ var _loginForm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loginForm.component */ \"./src/shared/components/loginForm.component.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Login =\n/*#__PURE__*/\nfunction () {\n  function Login() {\n    _classCallCheck(this, Login);\n  }\n\n  _createClass(Login, [{\n    key: \"display\",\n    value: function display() {\n      var div1 = document.createElement(\"div\");\n      var titleComponent = new _title_component__WEBPACK_IMPORTED_MODULE_1__[\"TitleComponent\"](\"Worlds of Game\");\n      titleComponent.display(div1);\n      var registerButton = new _register_button_component__WEBPACK_IMPORTED_MODULE_2__[\"RegisterButton\"](\"Register\");\n      registerButton.display(div1);\n      var user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"User\"]();\n      user.nameUser.surName = \"john\";\n      user.password = \"blabla\";\n      var loginForm = new _loginForm_component__WEBPACK_IMPORTED_MODULE_3__[\"LoginForm\"](\"Login\");\n      loginForm.display(div1, user);\n      document.body.appendChild(div1);\n    }\n  }]);\n\n  return Login;\n}();\n;\n\n//# sourceURL=webpack:///./src/shared/components/login.component.js?");

/***/ }),

/***/ "./src/shared/components/loginForm.component.js":
/*!******************************************************!*\
  !*** ./src/shared/components/loginForm.component.js ***!
  \******************************************************/
/*! exports provided: LoginForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginForm\", function() { return LoginForm; });\n/* harmony import */ var _super_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./super-component */ \"./src/shared/components/super-component.js\");\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model */ \"./src/shared/models/user.model.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar LoginForm =\n/*#__PURE__*/\nfunction (_Components) {\n  _inherits(LoginForm, _Components);\n\n  function LoginForm(textLogin) {\n    var _this;\n\n    _classCallCheck(this, LoginForm);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginForm).call(this));\n    _this.textLogin = textLogin;\n    _this.buttonGoLink;\n    return _this;\n  }\n\n  _createClass(LoginForm, [{\n    key: \"display\",\n    value: function display(div1, user) {\n      var form = _get(_getPrototypeOf(LoginForm.prototype), \"createAppendElement\", this).call(this, div1, \"form\");\n\n      var inputLogin = _get(_getPrototypeOf(LoginForm.prototype), \"createAppendElement\", this).call(this, form, \"input\");\n\n      var inputPassword = _get(_getPrototypeOf(LoginForm.prototype), \"createAppendElement\", this).call(this, form, \"input\");\n\n      this.buttonGoLink = _get(_getPrototypeOf(LoginForm.prototype), \"createAppendElement\", this).call(this, form, \"a\");\n\n      var buttonGo = _get(_getPrototypeOf(LoginForm.prototype), \"createAppendElement\", this).call(this, this.buttonGoLink, \"button\");\n\n      var loginText = _get(_getPrototypeOf(LoginForm.prototype), \"createAppendTextNode\", this).call(this, buttonGo, this.textLogin);\n\n      _get(_getPrototypeOf(LoginForm.prototype), \"setAttribute\", this).call(this, form, {\n        \"class\": \"form\",\n        method: \"post\",\n        action: \"\"\n      });\n\n      _get(_getPrototypeOf(LoginForm.prototype), \"setAttribute\", this).call(this, inputLogin, {\n        id: \"inputLogin\",\n        type: \"text\",\n        placeholder: \"Email\",\n        value: user.nameUser.surName,\n        action: \"\"\n      });\n\n      _get(_getPrototypeOf(LoginForm.prototype), \"setAttribute\", this).call(this, inputPassword, {\n        id: \"inputPassword\",\n        type: \"text\",\n        placeholder: \"Password\",\n        value: user.password\n      });\n\n      _get(_getPrototypeOf(LoginForm.prototype), \"setAttribute\", this).call(this, buttonGo, {\n        text: \"Go\",\n        type: \"submit\",\n        href: \"https://fr.wikipedia.org\"\n      });\n    }\n  }]);\n\n  return LoginForm;\n}(_super_component__WEBPACK_IMPORTED_MODULE_0__[\"Components\"]);\n\n//# sourceURL=webpack:///./src/shared/components/loginForm.component.js?");

/***/ }),

/***/ "./src/shared/components/register-button.component.js":
/*!************************************************************!*\
  !*** ./src/shared/components/register-button.component.js ***!
  \************************************************************/
/*! exports provided: RegisterButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RegisterButton\", function() { return RegisterButton; });\n/* harmony import */ var _super_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./super-component */ \"./src/shared/components/super-component.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar RegisterButton =\n/*#__PURE__*/\nfunction (_Components) {\n  _inherits(RegisterButton, _Components);\n\n  function RegisterButton(textButtonRegister) {\n    var _this;\n\n    _classCallCheck(this, RegisterButton);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(RegisterButton).call(this));\n    _this.textButtonRegister = textButtonRegister;\n    return _this;\n  }\n\n  _createClass(RegisterButton, [{\n    key: \"display\",\n    value: function display(div1) {\n      var buttonRegisterLink = _get(_getPrototypeOf(RegisterButton.prototype), \"createAppendElement\", this).call(this, div1, \"a\");\n\n      var buttonRegister = _get(_getPrototypeOf(RegisterButton.prototype), \"createAppendElement\", this).call(this, buttonRegisterLink, \"button\");\n\n      _get(_getPrototypeOf(RegisterButton.prototype), \"createAppendTextNode\", this).call(this, buttonRegister, this.textButtonRegister);\n\n      _get(_getPrototypeOf(RegisterButton.prototype), \"setAttribute\", this).call(this, buttonRegister, {\n        \"class\": \"buttonRegister\",\n        type: \"submit\"\n      });\n\n      _get(_getPrototypeOf(RegisterButton.prototype), \"setAttribute\", this).call(this, buttonRegisterLink, {\n        href: \"https://www.google.fr\"\n      });\n    }\n  }]);\n\n  return RegisterButton;\n}(_super_component__WEBPACK_IMPORTED_MODULE_0__[\"Components\"]);\n\n//# sourceURL=webpack:///./src/shared/components/register-button.component.js?");

/***/ }),

/***/ "./src/shared/components/super-component.js":
/*!**************************************************!*\
  !*** ./src/shared/components/super-component.js ***!
  \**************************************************/
/*! exports provided: Components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Components\", function() { return Components; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Components =\n/*#__PURE__*/\nfunction () {\n  function Components(name, json) {\n    _classCallCheck(this, Components);\n\n    this.name = name;\n    this.json = json;\n  }\n\n  _createClass(Components, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, json) {\n      for (var key in json) {\n        name.setAttribute(key, json[key]);\n      }\n\n      ;\n    }\n  }, {\n    key: \"createAppendElement\",\n    value: function createAppendElement(parent, tagName) {\n      var child = document.createElement(tagName);\n      parent.appendChild(child);\n      return child;\n    }\n  }, {\n    key: \"createAppendTextNode\",\n    value: function createAppendTextNode(parent, tagTextNode) {\n      var text = document.createTextNode(tagTextNode);\n      parent.appendChild(text);\n      return text;\n    }\n  }]);\n\n  return Components;\n}();\n\n//# sourceURL=webpack:///./src/shared/components/super-component.js?");

/***/ }),

/***/ "./src/shared/components/title.component.js":
/*!**************************************************!*\
  !*** ./src/shared/components/title.component.js ***!
  \**************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TitleComponent\", function() { return TitleComponent; });\n/* harmony import */ var _super_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./super-component */ \"./src/shared/components/super-component.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar TitleComponent =\n/*#__PURE__*/\nfunction (_Components) {\n  _inherits(TitleComponent, _Components);\n\n  function TitleComponent(textTitle) {\n    var _this;\n\n    _classCallCheck(this, TitleComponent);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TitleComponent).call(this));\n    _this.pageTitle;\n    _this.img;\n    _this.textTitle = textTitle;\n    return _this;\n  }\n\n  _createClass(TitleComponent, [{\n    key: \"display\",\n    value: function display(div1) {\n      var pageTitle = _get(_getPrototypeOf(TitleComponent.prototype), \"createAppendElement\", this).call(this, div1, \"h1\");\n\n      var img = _get(_getPrototypeOf(TitleComponent.prototype), \"createAppendElement\", this).call(this, div1, \"img\");\n\n      var text = _get(_getPrototypeOf(TitleComponent.prototype), \"createAppendTextNode\", this).call(this, div1, this.textTitle);\n\n      _get(_getPrototypeOf(TitleComponent.prototype), \"setAttribute\", this).call(this, pageTitle, {\n        \"class\": \"pageTitle\"\n      });\n\n      _get(_getPrototypeOf(TitleComponent.prototype), \"setAttribute\", this).call(this, img, {\n        \"class\": \"imgLogo\",\n        src: \"assets/images/wg.png\",\n        alt: \"logo Worlds of  game\"\n      });\n    }\n  }]);\n\n  return TitleComponent;\n}(_super_component__WEBPACK_IMPORTED_MODULE_0__[\"Components\"]);\n\n//# sourceURL=webpack:///./src/shared/components/title.component.js?");

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
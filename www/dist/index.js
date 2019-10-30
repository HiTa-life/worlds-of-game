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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/models/user.model */ \"./src/shared/models/user.model.js\");\n/* harmony import */ var _shared_components_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/title.component */ \"./src/shared/components/title.component.js\");\n/* harmony import */ var _shared_components_register_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/register-button.component */ \"./src/shared/components/register-button.component.js\");\n/* harmony import */ var _shared_components_loginForm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/loginForm.component */ \"./src/shared/components/loginForm.component.js\");\n\n\n\n\nvar div1 = document.createElement(\"div\");\ndocument.body.appendChild(div1);\nvar titleComponent = new _shared_components_title_component__WEBPACK_IMPORTED_MODULE_1__[\"TitleComponent\"](div1);\nvar registerButton = new _shared_components_register_button_component__WEBPACK_IMPORTED_MODULE_2__[\"RegisterButton\"](div1);\nvar loginForm = new _shared_components_loginForm_component__WEBPACK_IMPORTED_MODULE_3__[\"LoginForm\"](div1); // let login = \"\";\n// let password = \"\";\n// let valid = false;\n// let pageTitle = \"Game Session Society\";\n// const logoLink = \"image/logo/logo.png\";\n// const register = null;\n// const registerLink = \"/register\";\n// const registerText = \"Register\";\n// const go = null;\n// const goLink = \"/home\";\n// const goText = \"Go\";\n// const div1 = document.createElement(\"div\");\n// const div2 = document.createElement(\"div\");\n// const img = document.createElement(\"img\");\n//const pageTitle =  document.createElement(\"h1\");\n// const form = document.createElement(\"form\");\n// const inputLogin = document.createElement(\"input\");\n// const inputPassword = document.createElement(\"input\");\n// const buttonGo = document.createElement(\"button\");\n// const buttonRegister = document.createElement(\"button\");\n// const text = document.createTextNode(\"Game Session\");\n// const loginText = document.createTextNode(\"Login\");\n// const registerText = document.createTextNode(\"Register\");\n// const buttonGoLink = document.createElement(\"a\");\n// const buttonRegisterLink = document.createElement(\"a\");\n// div1.setAttribute(\"class\",\"div1\");\n// div2.setAttribute(\"class\",\"div2\");\n// img.setAttribute(\"class\",\"imgLogo\");\n// img.setAttribute(\"src\",\"assets/images/wg.png\");\n// img.setAttribute(\"alt\",\"logo Worlds of  game\");\n// form.setAttribute(\"class\",\"form\");\n// form.setAttribute(\"method\",\"post\");\n// form.setAttribute(\"action\",\"\");\n// inputLogin.setAttribute(\"id\",\"inputLogin\");\n// inputLogin.setAttribute(\"type\",\"text\");\n// inputLogin.setAttribute(\"placeholder\",\"Email\");\n// inputLogin.setAttribute(\"action\",\"\");\n// inputPassword.setAttribute(\"id\",\"inputPassword\");\n// inputPassword.setAttribute(\"type\",\"text\");\n// inputPassword.setAttribute(\"placeholder\",\"Password\");\n// buttonGo.setAttribute(\"class\",\"buttonGo\");\n// buttonGo.setAttribute(\"type\",\"submit\");\n// buttonRegister.setAttribute(\"class\", \"buttonRegister\");\n// buttonRegister.setAttribute(\"type\",\"submit\");\n// buttonGoLink.setAttribute(\"href\",\"https://fr.wikipedia.org\");\n// buttonRegisterLink.setAttribute(\"href\",\"https://www.google.fr\");\n// div2.appendChild(img);\n//pageTitle.appendChild(text);\n//div2.appendChild(pageTitle);\n// form.appendChild(inputLogin);\n// form.appendChild(inputPassword);\n// buttonGo.appendChild(loginText);\n// form.appendChild(buttonGoLink);\n// buttonGoLink.appendChild(buttonGo);\n// buttonRegisterLink.appendChild(buttonRegister);\n// buttonRegister.appendChild(registerText);\n// div1.appendChild(form);\n// div1.appendChild(div2);\n// div1.appendChild(buttonRegisterLink);\n// document.body.appendChild(div1);\n// const div1 = document.createElement(\"div\");\n//const div2 = document.createElement(\"div\");\n// div1.setAttribute(\"class\",\"div1\");\n// div2.setAttribute(\"class\",\"div2\");\n// div1.appendChild(div2);\n// const setAttribute = (name, json) =>{ \n//   for (const key in json){\n//     name.setAttribute(key,json[key]);\n//   };       \n// };\n// const displayTitle = (Titletext) => {\n//   const pageTitle =  document.createElement(\"h1\");\n//  const text = document.createTextNode(Titletext);\n//   pageTitle.setAttribute(\"class\",\"pageTitle\"); \n//   const img = document.createElement(\"img\");\n//   setAttribute(img,{\n//     class : \"imgLogo\",\n//     src:\"assets/images/wg.png\",\n//     alt:\"logo Worlds of  game\"\n//   });   \n//   pageTitle.appendChild(text);\n//   div2.appendChild(pageTitle);\n//   div2.appendChild(img);\n//   console.log(\"ok\");\n// };\n// const displayLoginForm = () => {\n//   const form = document.createElement(\"form\");\n//   const inputLogin = document.createElement(\"input\");\n//   const inputPassword = document.createElement(\"input\");\n//   const buttonGo = document.createElement(\"button\");\n//   const loginText = document.createTextNode(\"Login\");\n//   const buttonGoLink = document.createElement(\"a\");\n//   setAttribute(form, {\n//     class:\"form\",\n//     method:\"post\",\n//     action:\"\"\n// });\n//   setAttribute(inputLogin, {\n//     id:\"inputLogin\",\n//     type:\"text\",\n//     placeholder:\"Email\",\n//     value:newUser.login,\n//     action:\"\"\n//   });\n//   setAttribute(inputPassword, \n//     {\n//     id:\"inputPassword\",\n//     type:\"text\",\n//     placeholder:\"Password\",\n//     value:newUser.password\n// });\n//   setAttribute(buttonGo,{\n//   text:\"Go\",\n//   type:\"submit\",\n//   href:\"https://fr.wikipedia.org\"});  \n//   form.appendChild(inputLogin);\n//   form.appendChild(inputPassword);\n//   form.appendChild(buttonGoLink);\n//   buttonGo.appendChild(loginText);\n//   buttonGoLink.appendChild(buttonGo);\n//   div1.appendChild(form);\n// };\n// const displayRegisterButton = () => {\n//   const buttonRegister = document.createElement(\"button\");\n//   const registerText = document.createTextNode(\"Register\");\n//   const buttonRegisterLink = document.createElement(\"a\");\n//   setAttribute(buttonRegister,{\n//     class:\"buttonRegister\",\n//     type:\"submit\",\n//     }); \n//   setAttribute(buttonRegisterLink,{\n//     href:\"https://www.google.fr\"\n//   });  \n//   buttonRegisterLink.appendChild(buttonRegister);  \n//   buttonRegister.appendChild(registerText);\n//   div1.appendChild(buttonRegisterLink);\n// };\n// const displayLogin = () => {  \n//  // displayTitle(\"Game Session\");\n//   displayLoginForm();\n//   displayRegisterButton();\n// };\n// displayLogin();\n// const user = new User(\"licorne\", \n// \"test@example.com\"\n// );\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/shared/components/loginForm.component.js":
/*!******************************************************!*\
  !*** ./src/shared/components/loginForm.component.js ***!
  \******************************************************/
/*! exports provided: LoginForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginForm\", function() { return LoginForm; });\n/* harmony import */ var _super_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./super-component */ \"./src/shared/components/super-component.js\");\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model */ \"./src/shared/models/user.model.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar LoginForm =\n/*#__PURE__*/\nfunction (_Components) {\n  _inherits(LoginForm, _Components);\n\n  function LoginForm(div1) {\n    var _this;\n\n    _classCallCheck(this, LoginForm);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginForm).call(this));\n    var user = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__[\"User\"]();\n    user.nameUser.surName = \"john\";\n    user.password = \"blabla\";\n    var form = document.createElement(\"form\");\n    var inputLogin = document.createElement(\"input\");\n    var inputPassword = document.createElement(\"input\");\n    var buttonGo = document.createElement(\"button\");\n    _this.loginText = document.createTextNode(\"Login\");\n    _this.buttonGoLink = document.createElement(\"a\");\n\n    _get(_getPrototypeOf(LoginForm.prototype), \"setAttribute\", _assertThisInitialized(_this)).call(_assertThisInitialized(_this), form, {\n      \"class\": \"form\",\n      method: \"post\",\n      action: \"\"\n    });\n\n    _get(_getPrototypeOf(LoginForm.prototype), \"setAttribute\", _assertThisInitialized(_this)).call(_assertThisInitialized(_this), inputLogin, {\n      id: \"inputLogin\",\n      type: \"text\",\n      placeholder: \"Email\",\n      value: user.nameUser.surName,\n      action: \"\"\n    });\n\n    _get(_getPrototypeOf(LoginForm.prototype), \"setAttribute\", _assertThisInitialized(_this)).call(_assertThisInitialized(_this), inputPassword, {\n      id: \"inputPassword\",\n      type: \"text\",\n      placeholder: \"Password\",\n      value: user.password\n    });\n\n    _get(_getPrototypeOf(LoginForm.prototype), \"setAttribute\", _assertThisInitialized(_this)).call(_assertThisInitialized(_this), buttonGo, {\n      text: \"Go\",\n      type: \"submit\",\n      href: \"https://fr.wikipedia.org\"\n    });\n\n    form.appendChild(inputLogin);\n    form.appendChild(inputPassword);\n    form.appendChild(_this.buttonGoLink);\n    buttonGo.appendChild(_this.loginText);\n\n    _this.buttonGoLink.appendChild(buttonGo);\n\n    div1.appendChild(form);\n    return _this;\n  }\n\n  return LoginForm;\n}(_super_component__WEBPACK_IMPORTED_MODULE_0__[\"Components\"]);\n\n//# sourceURL=webpack:///./src/shared/components/loginForm.component.js?");

/***/ }),

/***/ "./src/shared/components/register-button.component.js":
/*!************************************************************!*\
  !*** ./src/shared/components/register-button.component.js ***!
  \************************************************************/
/*! exports provided: RegisterButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RegisterButton\", function() { return RegisterButton; });\n/* harmony import */ var _super_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./super-component */ \"./src/shared/components/super-component.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar RegisterButton =\n/*#__PURE__*/\nfunction (_Components) {\n  _inherits(RegisterButton, _Components);\n\n  function RegisterButton(div1) {\n    var _this;\n\n    _classCallCheck(this, RegisterButton);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(RegisterButton).call(this));\n    var buttonRegister = document.createElement(\"button\");\n    var registerText = document.createTextNode(\"Register\");\n    var buttonRegisterLink = document.createElement(\"a\");\n\n    _get(_getPrototypeOf(RegisterButton.prototype), \"setAttribute\", _assertThisInitialized(_this)).call(_assertThisInitialized(_this), buttonRegister, {\n      \"class\": \"buttonRegister\",\n      type: \"submit\"\n    });\n\n    _get(_getPrototypeOf(RegisterButton.prototype), \"setAttribute\", _assertThisInitialized(_this)).call(_assertThisInitialized(_this), buttonRegisterLink, {\n      href: \"https://www.google.fr\"\n    });\n\n    buttonRegisterLink.appendChild(buttonRegister);\n    buttonRegister.appendChild(registerText);\n    div1.appendChild(buttonRegisterLink);\n    return _this;\n  }\n\n  return RegisterButton;\n}(_super_component__WEBPACK_IMPORTED_MODULE_0__[\"Components\"]);\n\n//# sourceURL=webpack:///./src/shared/components/register-button.component.js?");

/***/ }),

/***/ "./src/shared/components/super-component.js":
/*!**************************************************!*\
  !*** ./src/shared/components/super-component.js ***!
  \**************************************************/
/*! exports provided: Components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Components\", function() { return Components; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Components =\n/*#__PURE__*/\nfunction () {\n  function Components(name, json) {\n    _classCallCheck(this, Components);\n\n    this.name = name;\n    this.json = json;\n  }\n\n  _createClass(Components, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, json) {\n      for (var key in json) {\n        name.setAttribute(key, json[key]);\n      }\n\n      ;\n    }\n  }]);\n\n  return Components;\n}();\n\n//# sourceURL=webpack:///./src/shared/components/super-component.js?");

/***/ }),

/***/ "./src/shared/components/title.component.js":
/*!**************************************************!*\
  !*** ./src/shared/components/title.component.js ***!
  \**************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TitleComponent\", function() { return TitleComponent; });\n/* harmony import */ var _super_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./super-component */ \"./src/shared/components/super-component.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar TitleComponent =\n/*#__PURE__*/\nfunction (_Components) {\n  _inherits(TitleComponent, _Components);\n\n  function TitleComponent(div1) {\n    var _this;\n\n    _classCallCheck(this, TitleComponent);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TitleComponent).call(this));\n    var pageTitle = document.createElement(\"h1\");\n    var img = document.createElement(\"img\");\n    _this.text = document.createTextNode(\"Worlds of Game\");\n\n    _get(_getPrototypeOf(TitleComponent.prototype), \"setAttribute\", _assertThisInitialized(_this)).call(_assertThisInitialized(_this), pageTitle, {\n      \"class\": \"pageTitle\"\n    });\n\n    _get(_getPrototypeOf(TitleComponent.prototype), \"setAttribute\", _assertThisInitialized(_this)).call(_assertThisInitialized(_this), img, {\n      \"class\": \"imgLogo\",\n      src: \"assets/images/wg.png\",\n      alt: \"logo Worlds of  game\"\n    });\n\n    div1.appendChild(pageTitle);\n    div1.appendChild(_this.text);\n    div1.appendChild(img);\n    return _this;\n  }\n\n  return TitleComponent;\n}(_super_component__WEBPACK_IMPORTED_MODULE_0__[\"Components\"]);\n\n//# sourceURL=webpack:///./src/shared/components/title.component.js?");

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
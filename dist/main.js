/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Regular.woff2 */ \"./src/Roboto-Regular.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Regular.woff */ \"./src/Roboto-Regular.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/remove.svg */ \"./src/images/remove.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/edit.svg */ \"./src/images/edit.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/complete.svg */ \"./src/images/complete.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: 'Roboto';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('woff2'),\\n      url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('woff');\\n    font-weight: 600;\\n    font-style: normal;\\n}\\n\\n\\n* {\\n    margin: 0;\\n    padding: 0;\\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\n} \\n\\nbody {\\n  width: 100vw;\\n  height: 100vh;\\n  background-color: #ebe8e8;\\n}\\n\\nbody {\\n  display: grid;\\n  grid-template-columns: min-content 1fr;\\n  grid-template-rows: min-content min-content 1fr;\\n}\\n\\nheader {\\n  display: flex;\\n  justify-content: center;\\n  font-size: 3rem;\\n  padding: 2rem;\\n  background-color: #13262f;\\n  color: white;\\n  grid-column: 1/3;\\n  grid-row: 1/2;\\n}\\n\\n.leftColumn {\\n  background-color: #DCDCDC;\\n  padding: 2rem;\\n  gap: 5px;\\n  grid-column: 1/2;\\n  grid-row: 2/4; \\n  display: flex;\\n  width: 15vw;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.leftColumn h1 {\\n  text-align: center;\\n}\\n\\n#defaultProject {\\n  width:max-content;\\n}\\n\\n.projectContainer {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n}\\n\\n.projectButton {\\n  width: 75%;\\n}\\n\\n.projectRemove {\\n  width: 25%;\\n}\\n\\n.createProjects {\\n  border: none;\\n  font-size: large;\\n  background-color: #DCDCDC;\\n  padding: .5rem;\\n}\\n\\n.content {\\n  grid-template-columns: 2/3;\\n  grid-row: 3/4;\\n  display: grid;\\n  grid-auto-flow: row;\\n  align-self: start;\\n  gap: .25rem;\\n  padding: 1rem;\\n}\\n\\n.newItemWrapper { \\n  height: fit-content;\\n  justify-content: center;\\n  padding: .5rem;\\n  display: flex;\\n  padding: 1rem;\\n}\\n\\n#newItem {\\n  display: flex;\\n  flex: 1;\\n  justify-content: center;\\n  width: 80%;\\n  height: auto;\\n  border: none;\\n  font-size: larger;\\n  background-color: #ebe8e8;\\n  padding: .5rem;\\n  border-radius: 25px;\\n}\\n\\nul {\\n  list-style-type: none;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nli {\\n  list-style-type: none;\\n  padding: .5rem;\\n}\\n\\n.card {\\n  display: flex;\\n  padding: 1rem;\\n  height: fit-content;\\n  background-color: whitesmoke;\\n  justify-content: space-between;\\n  align-items: center;\\n  border-radius: 25px;\\n}\\n\\n.card p {\\n  margin-left: auto;\\n  padding: .25rem;\\n}\\n\\n.card ul {\\n  display: flex;\\n  flex-direction: row;\\n}\\n\\n.card:hover {\\n  filter: brightness(97%);\\n}\\n\\n.dueDate {\\n  display: flex;\\n}\\n\\n.description {\\n  font-size: .75rem;\\n}\\n\\n.formWrapper {\\n  width: 100vw;\\n  height: 100vh;\\n  display: none;\\n  position: absolute;\\n  justify-content: center;\\n  align-items: center;\\n  z-index: 10;\\n  background-color: rgba(0,0,0,0.5);\\n}\\n\\n#form {\\n  height: fit-content;\\n  width: fit-content;\\n  border: 1px black solid;\\n  padding: 1.5rem;\\n  background-color: whitesmoke;\\n}\\n\\n#form legend {\\n  text-align: center;\\n}\\n\\nfieldset {\\n  box-sizing: content-box;\\n  display: grid;\\n  grid-template-columns: max-content max-content;\\n  gap: 5px;\\n  border: none;\\n}\\n\\n#radio-group {\\n  display: inline-block;\\n}\\n\\n.submitWrapper {\\n  grid-column: 1/3;\\n  display: flex;\\n  justify-content: flex-end;\\n  gap: 5px;\\n}\\n\\n#submit, #close, #submitEdit {\\n  width: 100px;\\n}\\n\\ntextarea {\\n  resize: none;\\n}\\n\\n#submitEdit {\\n  display: none;\\n}\\n\\n.remove, .edit, .complete {\\n  width: 25px;\\n  height: 25px;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  border: none;\\n  background-color: whitesmoke;\\n}\\n\\nbutton:hover {\\n  filter: brightness(95%);\\n  cursor: pointer;\\n}\\n\\n.buttonWrapper {\\n  display: flex;\\n  justify-content: flex-end;\\n  gap: 3px;\\n}\\n\\n.remove {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n}\\n\\n.edit {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n}\\n\\n.complete {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n}\\n\\n#enter {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  width: 22px;\\n  height: 22px;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n}\\n\\n#enter:hover {\\n  background-color: green;\\n}\\n\\n.projectWrapper {\\n  display: none;\\n  justify-content: center;\\n}\\n\\n\\n#projectForm input {\\n  width: 75px;\\n}\\n\\nul {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\nul button {\\n  border: none;\\n  background-color: #DCDCDC;\\n  font-size: large;\\n  padding: .5rem;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://project-to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://project-to-do-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createsToDoItem\": () => (/* binding */ createsToDoItem),\n/* harmony export */   \"forms\": () => (/* binding */ forms),\n/* harmony export */   \"projectColumn\": () => (/* binding */ projectColumn)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\nconst createsToDoItem = (() => {\n\n    //creates card elements for obj to be put into\n    function createCard(item, num) {\n        const content = document.querySelector('.content');\n        const card = document.createElement('div');\n        card.classList.add('card');\n        content.appendChild(card);\n\n        const list = document.createElement('ul');\n        card.appendChild(list);\n        const title = document.createElement('li');\n        const dueDate = document.createElement('p');\n        const description = document.createElement('li');\n        title.classList.add('title');\n        dueDate.classList.add('dueDate');\n        description.classList.add('description');\n\n        title.textContent = `${item.title}`;\n        dueDate.textContent = `${item.dueDate}`;\n        description.textContent = `${item.description}`;\n\n        list.appendChild(title);\n        list.appendChild(description);\n        // list.appendChild(dueDate);\n\n        card.appendChild(dueDate);\n        const buttonWrapper = document.createElement('div')\n        buttonWrapper.classList.add('buttonWrapper')\n        const complete = document.createElement('button');\n        complete.classList.add('complete');\n        const remove = document.createElement('button');\n        remove.classList.add('remove');\n        const edit = document.createElement('button');\n        edit.classList.add('edit');\n        buttonWrapper.appendChild(complete);\n        buttonWrapper.appendChild(edit);\n        buttonWrapper.appendChild(remove);\n        card.appendChild(buttonWrapper);\n\n        card.setAttribute('id', num);\n        card.style.opacity = '1';\n    }\n    return { createCard }\n})();\n\n\n\nconst projectColumn = (() => {\n\n    //adds a new project item to the column\n    function projectHandler() {\n        const projectWrapper = document.querySelector('.projectWrapper');\n        const form = document.querySelector('#projectForm');\n        const ul = document.querySelector('.leftColumn').querySelector('ul');\n        const newProjectname = document.querySelector('#project').value;\n        if (newProjectname === null || newProjectname === \"\") return;\n        const projectContainer = document.createElement('div');\n        projectContainer.classList.add('projectContainer');\n        const projectButton = document.createElement('button');\n        const projectRemove = document.createElement('button');\n        projectRemove.classList.add('projectRemove');\n        projectButton.classList.add('projectButton');\n        projectRemove.textContent = 'X';\n        projectButton.textContent = document.querySelector('#project').value;\n\n        projectContainer.appendChild(projectRemove);\n        projectContainer.appendChild(projectButton);\n\n        ul.appendChild(projectContainer);\n\n        projectWrapper.style.display = 'none'; //closes form\n        form.reset();\n        _projects__WEBPACK_IMPORTED_MODULE_0__.projects.addProject(newProjectname);\n        projectButton.setAttribute('index', _projects__WEBPACK_IMPORTED_MODULE_0__.projects.projectsList.length - 1);\n    }\n\n    //adds event listener to enter button\n    addProjectHandler();\n    function addProjectHandler() {\n        const enter = document.querySelector('#enter');\n        enter.addEventListener('click', projectHandler, false);\n    }\n\n    //removes previous projects items and displays the next project items\n    function displayItems(arr) {\n        const content = document.querySelector('.content');\n        while (content.firstChild) {\n            content.removeChild(content.lastChild)\n        }\n        for (let i = 0; i < arr.length; i++) {\n            createsToDoItem.createCard(arr[i], i);\n        }\n    }\n\n    return { displayItems }\n})();\n\nconst forms = (() => {\n\n    displayProjectInput();\n    function displayProjectInput() {\n        const projectButton = document.querySelector('.createProjects');\n        projectButton.addEventListener('click', () => {\n            if (document.querySelector('.projectWrapper').style.display === 'flex') {\n                document.querySelector('.projectWrapper').style.display = 'none';\n            } else {\n                document.querySelector('.projectWrapper').style.display = 'flex';\n            }\n        })\n    }\n\n    closeOpenForm();\n    function closeOpenForm() {\n        const form = document.querySelector('#form');\n        const submitEdit = document.querySelector('#submitEdit');\n        const submit = document.querySelector('#submit');\n        const newItem = document.querySelector('#newItem');\n        const closeButton = document.querySelector('#close')\n        newItem.addEventListener('click', openForm);\n        closeButton.addEventListener('click', () => {\n            closeForm();\n            form.reset();\n            submitEdit.style.display = 'none';\n            submit.style.display = 'block';\n        });\n    }\n\n\n    function openForm() {\n        document.querySelector('.formWrapper').style.display = 'flex';\n    }\n\n    function closeForm() {\n        document.querySelector('.formWrapper').style.display = 'none';\n    }\n\n    return { closeForm }\n})();\n\n\n\n\n\n//# sourceURL=webpack://project-to-do-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\n\n\nconst itemList = (() => {\n\n    //item constructor \n    const Item = (title, dueDate, description) => {\n        return { title, dueDate, description };\n    };\n\n    const header = document.querySelector('header');\n    //sets id to 0 so that projectsList index knows which project we currently are on\n    setPageToDefaultProject();\n    function setPageToDefaultProject() {\n        header.setAttribute('index', 0);\n    }\n    let index = header.getAttribute('index');\n    let list = _projects__WEBPACK_IMPORTED_MODULE_2__.projects.projectsList[index].items;\n\n    updateIndex();\n    //updates index and list after a change is detected \n    function updateIndex() {\n        const body = document.querySelector('header');\n        const callBack = (mutationsList) => {\n            for (const mutation of mutationsList) {\n                index = header.getAttribute('index');\n                list = _projects__WEBPACK_IMPORTED_MODULE_2__.projects.projectsList[index].items;\n            }\n        }\n        const observer = new MutationObserver(callBack);\n        observer.observe(body, { attributes: true })\n    }\n\n    const submit = document.querySelector('#submit');\n    const form = document.querySelector('#form');\n\n    addToList();\n    function addToList() {\n        submit.addEventListener('click', () => {\n            const newItem = getItemFromInput();\n            _dom__WEBPACK_IMPORTED_MODULE_1__.createsToDoItem.createCard(newItem, list.length);\n            list.push(newItem);\n            form.reset();\n            _dom__WEBPACK_IMPORTED_MODULE_1__.forms.closeForm();\n        })\n    }\n\n    //makes item from the input\n    function getItemFromInput() {\n        const title = document.querySelector('#title').value;\n        const dueDate = document.querySelector('#dueDate').value;\n        const description = document.querySelector('#description').value;\n        return Item(title, dueDate, description);\n    }\n\n    eventHandlers();\n    function eventHandlers() {\n        const content = document.querySelector('.content');\n        content.addEventListener('click', (e) => {\n            if (e.target.matches('.remove')) {\n                removeItem(e);\n            }\n            if (e.target.matches('.edit')) {\n                editItem(e);\n            }\n            if (e.target.matches('.complete')) {\n                completeItem(e);\n            }\n        })\n    }\n\n    function removeItem(e) {\n        e.target.parentNode.parentNode.remove();\n        list.splice(e.target.parentNode.parentNode.getAttribute('id'), 1);\n        resetID();\n    }\n\n    //throws error as cards isn't updated till it's deleted but it still works\n    function resetID() {\n        let cards = document.querySelectorAll('.card');\n        for (let i = 0; i <= cards.length; i++) {\n            cards[i].setAttribute('id', i);\n        }\n    }\n\n\n\n\n\n    function editItem(e) {\n        const formTitle = form.querySelector('#title');\n        const formDueDate = form.querySelector('#dueDate');\n        const formDescription = form.querySelector('#description');\n        const submitEdit = document.querySelector('#submitEdit');\n\n        const index = e.target.parentNode.parentNode.getAttribute('id');\n        const card = e.target.parentNode.parentNode;\n        openForm();\n        formTitle.value = list[index].title;\n        formDueDate.value = list[index].dueDate;\n        formDescription.value = list[index].description;\n        submitEdit.style.display = 'block';\n        submit.style.display = 'none';\n\n        submitEdit.addEventListener('click', () => {\n            //update obj values\n            list[index].title = form.querySelector('#title').value;\n            list[index].dueDate = form.querySelector('#dueDate').value;\n            list[index].description = form.querySelector('#description').value;\n            card.querySelector('.title').textContent = `${list[index].title}`;\n            card.querySelector('.dueDate').textContent = `${list[index].dueDate}`;\n            card.querySelector('.description').textContent = `${list[index].description}`;\n            form.reset();\n            closeForm();\n            submit.style.display = 'block'\n            submitEdit.style.display = 'none';\n        }, { once: true });\n    }\n\n    function completeItem(e) {\n        const card = e.target.parentNode.parentNode;\n        if (card.style.opacity === '1') {\n            card.style.opacity = '.3';\n        } else {\n            card.style.opacity = '1';\n        }\n    }\n\n    projectListListeners();\n    function projectListListeners() {\n        const column = document.querySelector('.leftColumn').querySelector('ul');\n        column.addEventListener('click', (e) => {\n            if (e.target.matches('.projectButton') || e.target.matches('#defaultProject')) {\n                const id = e.target.getAttribute('index');\n                header.setAttribute('index', id);\n                _dom__WEBPACK_IMPORTED_MODULE_1__.projectColumn.displayItems(_projects__WEBPACK_IMPORTED_MODULE_2__.projects.projectsList[id].items);\n                //removes the project on dom & array\n            } else if (e.target.matches('.projectRemove')) {\n                const id = e.target.nextSibling.getAttribute('index');\n                e.target.parentNode.remove();\n                _projects__WEBPACK_IMPORTED_MODULE_2__.projects.projectsList.splice(id, 1);\n                resetProjectID();\n            }\n        });\n    }\n\n    function resetProjectID() {\n        let projectButtons = document.querySelectorAll('.projectButton');\n        for (let i = 1; i <= _projects__WEBPACK_IMPORTED_MODULE_2__.projects.projectsList.length; i++) {\n            projectButtons[i-1].setAttribute('index', i);\n        }\n\n    }\n    return { list, index }\n})();\n\n\n//# sourceURL=webpack://project-to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": () => (/* binding */ projects)\n/* harmony export */ });\nconst projects = (() => {\n    const projectsList = [];\n\n    class Project {\n        constructor(title) {\n            this.title = title;\n            this.items = [];\n        }\n    }\n\n    //projectsList[0] will always be the default Project\n    addProject('defaultProject');\n    function addProject(title) {\n        const project = new Project(title);\n        projectsList.push(project);\n    }\n\n    return {\n        projectsList,\n        addProject,\n    };\n\n\n})();\n\n\n\n//# sourceURL=webpack://project-to-do-list/./src/projects.js?");

/***/ }),

/***/ "./src/Roboto-Regular.woff":
/*!*********************************!*\
  !*** ./src/Roboto-Regular.woff ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"font/774f99460b8c31560a3c.woff\";\n\n//# sourceURL=webpack://project-to-do-list/./src/Roboto-Regular.woff?");

/***/ }),

/***/ "./src/Roboto-Regular.woff2":
/*!**********************************!*\
  !*** ./src/Roboto-Regular.woff2 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"font/48c66481703eaa2344b0.woff2\";\n\n//# sourceURL=webpack://project-to-do-list/./src/Roboto-Regular.woff2?");

/***/ }),

/***/ "./src/images/complete.svg":
/*!*********************************!*\
  !*** ./src/images/complete.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/acb92a421a961e104068.svg\";\n\n//# sourceURL=webpack://project-to-do-list/./src/images/complete.svg?");

/***/ }),

/***/ "./src/images/edit.svg":
/*!*****************************!*\
  !*** ./src/images/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/d80a04231c50ccc5203c.svg\";\n\n//# sourceURL=webpack://project-to-do-list/./src/images/edit.svg?");

/***/ }),

/***/ "./src/images/remove.svg":
/*!*******************************!*\
  !*** ./src/images/remove.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/0ddf22897018d61f34a7.svg\";\n\n//# sourceURL=webpack://project-to-do-list/./src/images/remove.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/graphql/schema.gql":
/*!********************************!*\
  !*** ./src/graphql/schema.gql ***!
  \********************************/
/***/ ((module) => {

eval("\n    var doc = {\"kind\":\"Document\",\"definitions\":[{\"kind\":\"ObjectTypeDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"Customer\"},\"interfaces\":[],\"directives\":[],\"fields\":[{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}},\"directives\":[]}]},{\"kind\":\"ObjectTypeDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"BusinessService\"},\"interfaces\":[],\"directives\":[],\"fields\":[{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"nameOfService\"},\"arguments\":[],\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"priceOfService\"},\"arguments\":[],\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Float\"}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"descriptionOfService\"},\"arguments\":[],\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"timeOfService\"},\"arguments\":[],\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}},\"directives\":[]}]},{\"kind\":\"ObjectTypeDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"Business\"},\"interfaces\":[],\"directives\":[],\"fields\":[{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"business_entity_id\"},\"arguments\":[],\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Int\"}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"business_user_id\"},\"arguments\":[],\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Int\"}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"phone\"},\"arguments\":[],\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"email\"},\"arguments\":[],\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"businessService\"},\"arguments\":[],\"type\":{\"kind\":\"ListType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"BusinessService\"}}},\"directives\":[]}]},{\"kind\":\"ObjectTypeDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"Query\"},\"interfaces\":[],\"directives\":[],\"fields\":[{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"getBusinesses\"},\"arguments\":[],\"type\":{\"kind\":\"ListType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Business\"}}},\"directives\":[]}]},{\"kind\":\"SchemaDefinition\",\"directives\":[],\"operationTypes\":[{\"kind\":\"OperationTypeDefinition\",\"operation\":\"query\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Query\"}}}]}],\"loc\":{\"start\":0,\"end\":452}};\n    doc.loc.source = {\"body\":\"type Customer {\\r\\n    name: String\\r\\n    id: String\\r\\n}\\r\\n\\r\\ntype BusinessService{\\r\\n    nameOfService: String\\r\\n    priceOfService: Float\\r\\n    descriptionOfService: String\\r\\n    timeOfService: String\\r\\n}\\r\\n\\r\\ntype Business{\\r\\n    business_entity_id: Int\\r\\n    business_user_id: Int\\r\\n    name: String\\r\\n    phone: String\\r\\n    email: String\\r\\n    businessService: [BusinessService]\\r\\n}\\r\\n\\r\\ntype Query{\\r\\n    getBusinesses:[Business]\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\nschema{\\r\\n    query: Query\\r\\n}\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}};\n  \r\n\n    var names = {};\n    function unique(defs) {\n      return defs.filter(\n        function(def) {\n          if (def.kind !== 'FragmentDefinition') return true;\n          var name = def.name.value\n          if (names[name]) {\n            return false;\n          } else {\n            names[name] = true;\n            return true;\n          }\n        }\n      )\n    }\n  \r\n\n      module.exports = doc;\n    \r\n\n\n//# sourceURL=webpack://bff-v2/./src/graphql/schema.gql?");

/***/ }),

/***/ "./src/context/index.ts":
/*!******************************!*\
  !*** ./src/context/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst UserType_1 = __webpack_require__(/*! ../types/UserType */ \"./src/types/UserType.ts\");\r\nexports[\"default\"] = async ({ req, res }) => {\r\n    var _a;\r\n    const query = req.body.query;\r\n    const params = (_a = req.body.variables) === null || _a === void 0 ? void 0 : _a.parameters;\r\n    const userType = UserType_1.UserType.CUSTOMER;\r\n    return {\r\n        res,\r\n        query,\r\n        userType\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack://bff-v2/./src/context/index.ts?");

/***/ }),

/***/ "./src/data-sources/business-api.ts":
/*!******************************************!*\
  !*** ./src/data-sources/business-api.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst apollo_datasource_rest_1 = __webpack_require__(/*! apollo-datasource-rest */ \"apollo-datasource-rest\");\r\nconst graphql_request_1 = __webpack_require__(/*! graphql-request */ \"graphql-request\");\r\nconst custom_rest_data_source_1 = __importDefault(__webpack_require__(/*! ./custom-rest-data-source */ \"./src/data-sources/custom-rest-data-source.ts\"));\r\nclass BusinessApi extends custom_rest_data_source_1.default {\r\n    constructor() {\r\n        super();\r\n        this.BUSINESSES_ENDPOINT = \"business/allBusinesses/\";\r\n        this.baseURL = \"http://localhost:8080/\";\r\n        this.httpCache = new apollo_datasource_rest_1.HTTPCache();\r\n    }\r\n    //Override\r\n    async didReceiveResponse(response, _request) {\r\n        if (response.status >= 200 && response.status < 300) {\r\n            const contentType = response.headers.get(\"content-type\");\r\n            return response.json();\r\n        }\r\n        else {\r\n            throw await this.errorFromResponse(response);\r\n        }\r\n        return response;\r\n    }\r\n    _getResponse(endpoint, query, headers) {\r\n        return this.get(this.baseURL + this.BUSINESSES_ENDPOINT);\r\n    }\r\n    getBusinesses() {\r\n        let response = this._getResponse(this.BUSINESSES_ENDPOINT, null, null);\r\n        return response;\r\n    }\r\n    async getBusinessesListResponse(endpoint, query, variables) {\r\n        const response = await (0, graphql_request_1.request)(endpoint, query, variables);\r\n        return response;\r\n    }\r\n}\r\nexports[\"default\"] = BusinessApi;\r\n\n\n//# sourceURL=webpack://bff-v2/./src/data-sources/business-api.ts?");

/***/ }),

/***/ "./src/data-sources/custom-rest-data-source.ts":
/*!*****************************************************!*\
  !*** ./src/data-sources/custom-rest-data-source.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst apollo_datasource_rest_1 = __webpack_require__(/*! apollo-datasource-rest */ \"apollo-datasource-rest\");\r\nclass CustomRestDataSource extends apollo_datasource_rest_1.RESTDataSource {\r\n    constructor() {\r\n        super();\r\n    }\r\n    willSendRequest(request) {\r\n        request.headers.set('json', 'true');\r\n        request.headers.set('Access-Control-Allow-Origin', 'true');\r\n    }\r\n    async didReceiveResponse(response, _request) {\r\n        if (response.status >= 200 && response.status < 300) {\r\n            const contentType = response.headers.get(\"content-type\");\r\n            return this.parseBody(response);\r\n        }\r\n        else {\r\n            throw await this.errorFromResponse(response);\r\n        }\r\n    }\r\n}\r\nexports[\"default\"] = CustomRestDataSource;\r\n\n\n//# sourceURL=webpack://bff-v2/./src/data-sources/custom-rest-data-source.ts?");

/***/ }),

/***/ "./src/data-sources/index.ts":
/*!***********************************!*\
  !*** ./src/data-sources/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst business_api_1 = __importDefault(__webpack_require__(/*! ./business-api */ \"./src/data-sources/business-api.ts\"));\r\nexports[\"default\"] = () => ({\r\n    businessApi: new business_api_1.default()\r\n});\r\n\n\n//# sourceURL=webpack://bff-v2/./src/data-sources/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst server_1 = __webpack_require__(/*! ./server */ \"./src/server/index.ts\");\r\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\r\nserver_1.app.listen(5000, () => {\r\n    console.log(\"Server ready att http://localhost:5000\");\r\n});\r\n\n\n//# sourceURL=webpack://bff-v2/./src/index.ts?");

/***/ }),

/***/ "./src/resolvers/index.ts":
/*!********************************!*\
  !*** ./src/resolvers/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst { GraphQLUpload } = __webpack_require__(/*! graphql-upload */ \"graphql-upload\");\r\nconst query_1 = __importDefault(__webpack_require__(/*! ./query */ \"./src/resolvers/query/index.ts\"));\r\nexports[\"default\"] = {\r\n    Query: query_1.default\r\n};\r\n\n\n//# sourceURL=webpack://bff-v2/./src/resolvers/index.ts?");

/***/ }),

/***/ "./src/resolvers/query/get-businesses.ts":
/*!***********************************************!*\
  !*** ./src/resolvers/query/get-businesses.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst business_api_1 = __importDefault(__webpack_require__(/*! ../../data-sources/business-api */ \"./src/data-sources/business-api.ts\"));\r\nexports[\"default\"] = async () => {\r\n    const getBusinessApi = new business_api_1.default();\r\n    const response = await getBusinessApi.getBusinesses();\r\n    return response;\r\n};\r\n\n\n//# sourceURL=webpack://bff-v2/./src/resolvers/query/get-businesses.ts?");

/***/ }),

/***/ "./src/resolvers/query/index.ts":
/*!**************************************!*\
  !*** ./src/resolvers/query/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst get_businesses_1 = __importDefault(__webpack_require__(/*! ./get-businesses */ \"./src/resolvers/query/get-businesses.ts\"));\r\nexports[\"default\"] = {\r\n    getBusinesses: get_businesses_1.default\r\n};\r\n\n\n//# sourceURL=webpack://bff-v2/./src/resolvers/query/index.ts?");

/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.app = exports.server = void 0;\r\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst data_sources_1 = __importDefault(__webpack_require__(/*! ../data-sources */ \"./src/data-sources/index.ts\"));\r\nconst context_1 = __importDefault(__webpack_require__(/*! ../context */ \"./src/context/index.ts\"));\r\nconst resolvers_1 = __importDefault(__webpack_require__(/*! ../resolvers */ \"./src/resolvers/index.ts\"));\r\nconst schema_gql_1 = __importDefault(__webpack_require__(/*! ../graphql/schema.gql */ \"./src/graphql/schema.gql\"));\r\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\r\nconst graphql_upload_1 = __webpack_require__(/*! graphql-upload */ \"graphql-upload\");\r\nconst config = {\r\n    context: context_1.default,\r\n    dataSources: data_sources_1.default,\r\n    resolvers: resolvers_1.default,\r\n    typeDefs: schema_gql_1.default,\r\n    introspection: true\r\n};\r\nconst server = new apollo_server_express_1.ApolloServer(config);\r\nexports.server = server;\r\nvar corsOptions = {\r\n    origin: '*',\r\n    //  credentials: true\r\n};\r\nconst app = (0, express_1.default)();\r\nexports.app = app;\r\napp.use((0, cors_1.default)(corsOptions));\r\napp.use((0, graphql_upload_1.graphqlUploadExpress)({ maxFileSize: 2500000, maxFiles: 20 }));\r\napp.use(\"http://localhost:5000/bff/graphql\", (res, err) => {\r\n    if (err) {\r\n        console.log(\"Error using url \");\r\n    }\r\n});\r\nserver.start().then(res => {\r\n    server.applyMiddleware({ app, path: \"/bff/graphql\" });\r\n});\r\n\n\n//# sourceURL=webpack://bff-v2/./src/server/index.ts?");

/***/ }),

/***/ "./src/types/UserType.ts":
/*!*******************************!*\
  !*** ./src/types/UserType.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.UserType = void 0;\r\nvar UserType;\r\n(function (UserType) {\r\n    UserType[\"CUSTOMER\"] = \"CUSTOMER\";\r\n    UserType[\"BUSINESS_OWNER\"] = \"BUSINESS_OWNER\";\r\n})(UserType = exports.UserType || (exports.UserType = {}));\r\n\n\n//# sourceURL=webpack://bff-v2/./src/types/UserType.ts?");

/***/ }),

/***/ "apollo-datasource-rest":
/*!*****************************************!*\
  !*** external "apollo-datasource-rest" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("apollo-datasource-rest");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("apollo-server-express");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql-request");

/***/ }),

/***/ "graphql-upload":
/*!*********************************!*\
  !*** external "graphql-upload" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql-upload");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
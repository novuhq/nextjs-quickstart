"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/addSub";
exports.ids = ["pages/api/addSub"];
exports.modules = {

/***/ "@novu/node":
/*!*****************************!*\
  !*** external "@novu/node" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("@novu/node");

/***/ }),

/***/ "circular-json":
/*!********************************!*\
  !*** external "circular-json" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("circular-json");

/***/ }),

/***/ "(api)/./pages/api/addSub.js":
/*!*****************************!*\
  !*** ./pages/api/addSub.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addSub)\n/* harmony export */ });\n/* harmony import */ var _novu_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @novu/node */ \"@novu/node\");\n/* harmony import */ var _novu_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_novu_node__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var circular_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! circular-json */ \"circular-json\");\n/* harmony import */ var circular_json__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(circular_json__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function addSub(req, res) {\n    try {\n        const novu = new _novu_node__WEBPACK_IMPORTED_MODULE_0__.Novu(process.env.NOVU_API_KEY);\n        if (req.method === \"POST\") {\n            // Get the subscriber ID from the request body\n            const subscriberId = req.body.subscriberId;\n            // Get the topic key from the request body\n            const topicKey = req.body.topicKey;\n            // Call Novu SDK to add the subscriber to the topic\n            const result = await novu.topics.addSubscribers(topicKey, {\n                subscribers: [\n                    subscriberId\n                ]\n            });\n            // Return the result as JSON response\n            res.status(200).json(circular_json__WEBPACK_IMPORTED_MODULE_1___default().stringify(result));\n        }\n    } catch (error) {\n        console.log(error);\n        res.status(500).json(circular_json__WEBPACK_IMPORTED_MODULE_1___default().stringify({\n            message: error.message\n        }));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkU3ViLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtDO0FBQ087QUFFMUIsZUFBZUUsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDM0MsSUFBSTtRQUNBLE1BQU1DLE9BQU8sSUFBSUwsNENBQUlBLENBQUNNLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWTtRQUM5QyxJQUFJTCxJQUFJTSxNQUFNLEtBQUssUUFBUTtZQUN2Qiw4Q0FBOEM7WUFDOUMsTUFBTUMsZUFBZVAsSUFBSVEsSUFBSSxDQUFDRCxZQUFZO1lBQzFDLDBDQUEwQztZQUMxQyxNQUFNRSxXQUFXVCxJQUFJUSxJQUFJLENBQUNDLFFBQVE7WUFDbEMsbURBQW1EO1lBQ25ELE1BQU1DLFNBQVMsTUFBTVIsS0FBS1MsTUFBTSxDQUFDQyxjQUFjLENBQUNILFVBQVU7Z0JBQ3RESSxhQUFhO29CQUFDTjtpQkFBYTtZQUMvQjtZQUNBLHFDQUFxQztZQUNyQ04sSUFBSWEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ2pCLDhEQUFzQixDQUFDWTtRQUNoRCxDQUFDO0lBQ0wsRUFBRSxPQUFPTyxPQUFPO1FBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWmhCLElBQUlhLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNqQiw4REFBc0IsQ0FBQztZQUFFc0IsU0FBU0gsTUFBTUcsT0FBTztRQUFDO0lBQ3pFO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3F1aWNrc3RhcnQvLi9wYWdlcy9hcGkvYWRkU3ViLmpzP2IxMmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm92dSB9IGZyb20gJ0Bub3Z1L25vZGUnO1xuaW1wb3J0IENpcmN1bGFySlNPTiBmcm9tICdjaXJjdWxhci1qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYWRkU3ViKHJlcSwgcmVzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm92dSA9IG5ldyBOb3Z1KHByb2Nlc3MuZW52Lk5PVlVfQVBJX0tFWSk7XG4gICAgICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgc3Vic2NyaWJlciBJRCBmcm9tIHRoZSByZXF1ZXN0IGJvZHlcbiAgICAgICAgICAgIGNvbnN0IHN1YnNjcmliZXJJZCA9IHJlcS5ib2R5LnN1YnNjcmliZXJJZDtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgdG9waWMga2V5IGZyb20gdGhlIHJlcXVlc3QgYm9keVxuICAgICAgICAgICAgY29uc3QgdG9waWNLZXkgPSByZXEuYm9keS50b3BpY0tleTtcbiAgICAgICAgICAgIC8vIENhbGwgTm92dSBTREsgdG8gYWRkIHRoZSBzdWJzY3JpYmVyIHRvIHRoZSB0b3BpY1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbm92dS50b3BpY3MuYWRkU3Vic2NyaWJlcnModG9waWNLZXksIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyczogW3N1YnNjcmliZXJJZF0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFJldHVybiB0aGUgcmVzdWx0IGFzIEpTT04gcmVzcG9uc2VcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKENpcmN1bGFySlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKENpcmN1bGFySlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIk5vdnUiLCJDaXJjdWxhckpTT04iLCJhZGRTdWIiLCJyZXEiLCJyZXMiLCJub3Z1IiwicHJvY2VzcyIsImVudiIsIk5PVlVfQVBJX0tFWSIsIm1ldGhvZCIsInN1YnNjcmliZXJJZCIsImJvZHkiLCJ0b3BpY0tleSIsInJlc3VsdCIsInRvcGljcyIsImFkZFN1YnNjcmliZXJzIiwic3Vic2NyaWJlcnMiLCJzdGF0dXMiLCJqc29uIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/addSub.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addSub.js"));
module.exports = __webpack_exports__;

})();
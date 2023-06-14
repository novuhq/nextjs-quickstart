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
exports.id = "pages/api/sendNotifToSub";
exports.ids = ["pages/api/sendNotifToSub"];
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

/***/ "(api)/./pages/api/sendNotifToSub.js":
/*!*************************************!*\
  !*** ./pages/api/sendNotifToSub.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sendNotifToSub)\n/* harmony export */ });\n/* harmony import */ var _novu_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @novu/node */ \"@novu/node\");\n/* harmony import */ var _novu_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_novu_node__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var circular_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! circular-json */ \"circular-json\");\n/* harmony import */ var circular_json__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(circular_json__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function sendNotifToSub(req, res) {\n    try {\n        const novu = new _novu_node__WEBPACK_IMPORTED_MODULE_0__.Novu(process.env.NOVU_API_KEY);\n        if (req.method === \"POST\") {\n            // Get the topic key from the request body\n            const topicKey = req.body.topicKey;\n            const email = req.body.email;\n            const description = req.body.description;\n            // Call Novu SDK to trigger a notification to the topic subscribers\n            const result = await novu.trigger(\"email-quickstart\", {\n                to: [\n                    {\n                        type: \"Topic\",\n                        topicKey: topicKey\n                    }\n                ],\n                payload: {\n                    email: email,\n                    description: description\n                }\n            });\n            // Return the result as JSON response\n            res.json(circular_json__WEBPACK_IMPORTED_MODULE_1___default().stringify(result));\n        }\n    } catch (error) {\n        console.log(error);\n        res.status(500).json(circular_json__WEBPACK_IMPORTED_MODULE_1___default().stringify({\n            message: error.message\n        }));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZE5vdGlmVG9TdWIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBa0M7QUFDTztBQUUxQixlQUFlRSxlQUFlQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNuRCxJQUFJO1FBQ0EsTUFBTUMsT0FBTyxJQUFJTCw0Q0FBSUEsQ0FBQ00sUUFBUUMsR0FBRyxDQUFDQyxZQUFZO1FBQzlDLElBQUlMLElBQUlNLE1BQU0sS0FBSyxRQUFRO1lBQ3ZCLDBDQUEwQztZQUMxQyxNQUFNQyxXQUFXUCxJQUFJUSxJQUFJLENBQUNELFFBQVE7WUFDbEMsTUFBTUUsUUFBUVQsSUFBSVEsSUFBSSxDQUFDQyxLQUFLO1lBQzVCLE1BQU1DLGNBQWNWLElBQUlRLElBQUksQ0FBQ0UsV0FBVztZQUV4QyxtRUFBbUU7WUFDbkUsTUFBTUMsU0FBUyxNQUFNVCxLQUFLVSxPQUFPLENBQUMsb0JBQW9CO2dCQUNsREMsSUFBSTtvQkFBQzt3QkFBRUMsTUFBTTt3QkFBU1AsVUFBVUE7b0JBQVM7aUJBQUU7Z0JBQzNDUSxTQUFTO29CQUNMTixPQUFPQTtvQkFDUEMsYUFBYUE7Z0JBQ2pCO1lBQ0o7WUFFQSxxQ0FBcUM7WUFDckNULElBQUllLElBQUksQ0FBQ2xCLDhEQUFzQixDQUFDYTtRQUNwQyxDQUFDO0lBQ0wsRUFBRSxPQUFPTyxPQUFPO1FBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWmpCLElBQUlvQixNQUFNLENBQUMsS0FBS0wsSUFBSSxDQUFDbEIsOERBQXNCLENBQUM7WUFBRXdCLFNBQVNKLE1BQU1JLE9BQU87UUFBQztJQUN6RTtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWlja3N0YXJ0Ly4vcGFnZXMvYXBpL3NlbmROb3RpZlRvU3ViLmpzPzRhNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm92dSB9IGZyb20gJ0Bub3Z1L25vZGUnO1xuaW1wb3J0IENpcmN1bGFySlNPTiBmcm9tICdjaXJjdWxhci1qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gc2VuZE5vdGlmVG9TdWIocmVxLCByZXMpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBub3Z1ID0gbmV3IE5vdnUocHJvY2Vzcy5lbnYuTk9WVV9BUElfS0VZKTtcbiAgICAgICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICAgICAgLy8gR2V0IHRoZSB0b3BpYyBrZXkgZnJvbSB0aGUgcmVxdWVzdCBib2R5XG4gICAgICAgICAgICBjb25zdCB0b3BpY0tleSA9IHJlcS5ib2R5LnRvcGljS2V5O1xuICAgICAgICAgICAgY29uc3QgZW1haWwgPSByZXEuYm9keS5lbWFpbDtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcmVxLmJvZHkuZGVzY3JpcHRpb247XG5cbiAgICAgICAgICAgIC8vIENhbGwgTm92dSBTREsgdG8gdHJpZ2dlciBhIG5vdGlmaWNhdGlvbiB0byB0aGUgdG9waWMgc3Vic2NyaWJlcnNcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG5vdnUudHJpZ2dlcihcImVtYWlsLXF1aWNrc3RhcnRcIiwge1xuICAgICAgICAgICAgICAgIHRvOiBbeyB0eXBlOiBcIlRvcGljXCIsIHRvcGljS2V5OiB0b3BpY0tleSB9XSxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSByZXN1bHQgYXMgSlNPTiByZXNwb25zZVxuICAgICAgICAgICAgcmVzLmpzb24oQ2lyY3VsYXJKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oQ2lyY3VsYXJKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSkpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJOb3Z1IiwiQ2lyY3VsYXJKU09OIiwic2VuZE5vdGlmVG9TdWIiLCJyZXEiLCJyZXMiLCJub3Z1IiwicHJvY2VzcyIsImVudiIsIk5PVlVfQVBJX0tFWSIsIm1ldGhvZCIsInRvcGljS2V5IiwiYm9keSIsImVtYWlsIiwiZGVzY3JpcHRpb24iLCJyZXN1bHQiLCJ0cmlnZ2VyIiwidG8iLCJ0eXBlIiwicGF5bG9hZCIsImpzb24iLCJzdHJpbmdpZnkiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/sendNotifToSub.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/sendNotifToSub.js"));
module.exports = __webpack_exports__;

})();
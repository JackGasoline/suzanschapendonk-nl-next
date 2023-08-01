"use strict";
(() => {
var exports = {};
exports.id = 270;
exports.ids = [270];
exports.modules = {

/***/ 4472:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9816);
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html_entities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2905);
/* harmony import */ var _Inspiratieblog_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(273);
/* harmony import */ var _Inspiratieblog_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Inspiratieblog_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4776);
/* harmony import */ var _components_TypedHeader_TypedHeaderBasic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6081);
/* harmony import */ var _react_hook_window_size_throttled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(662);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_5__, _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__, _react_hook_window_size_throttled__WEBPACK_IMPORTED_MODULE_8__]);
([html_react_parser__WEBPACK_IMPORTED_MODULE_5__, _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__, _react_hook_window_size_throttled__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const fetchData = async (url)=>await axios__WEBPACK_IMPORTED_MODULE_3___default().get(url).then((res)=>({
            error: false,
            pageData: res.data
        })
    ).catch(()=>({
            error: true,
            pageData: null
        })
    )
;
const Blog = (props)=>{
    const windowWidth = (0,_react_hook_window_size_throttled__WEBPACK_IMPORTED_MODULE_8__.useWindowWidth)();
    let imageWidth = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(40);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (windowWidth > 780) {
            imageWidth.current = 20;
        }
        if (windowWidth > 3000) {
            imageWidth.current = 12;
        }
    }, [
        windowWidth
    ]);
    const searchTree = (arr, searchKey)=>{
        return arr.find((o)=>o.id === searchKey
        );
    };
    const createImageTag = (imageObject, alignment)=>{
        const aspectratio = 100 * imageObject.sizes['large-height'] / imageObject.sizes['large-width'];
        const divStyle = {
            width: "100%",
            paddingTop: `${aspectratio}%`,
            display: "block"
        };
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: alignment === 'alignright' ? (_Inspiratieblog_module_scss__WEBPACK_IMPORTED_MODULE_9___default().imageRight) : (_Inspiratieblog_module_scss__WEBPACK_IMPORTED_MODULE_9___default().imageLeft),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                style: divStyle,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    alt: imageObject.alt,
                    src: imageObject.sizes.large,
                    layout: "fill",
                    objectFit: "contain",
                    sizes: "`${imageWidth.current}vw`"
                }, 'inline' + imageObject.ID)
            })
        }, 'inline-image-' + imageObject.ID));
    };
    const parseOptions = {
        replace: (domNode)=>{
            if (domNode.attribs && domNode.name === 'img') {
                let imageNode = null;
                let nodeClasses = domNode.attribs.class.split(' ');
                let imageID = Number(nodeClasses[1].replace('wp-image-', ''));
                if (!imageID) {
                    imageID = Number(nodeClasses[2].replace('wp-image-', ''));
                }
                let imageObject = searchTree(Object.values(props.pageData[0].acf), imageID);
                if (imageObject) {
                    imageNode = createImageTag(imageObject, nodeClasses[0]);
                    return imageNode;
                }
            }
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        title: (0,html_entities__WEBPACK_IMPORTED_MODULE_4__.decode)(props.pageData[0].title.rendered),
        route: props.route,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_Inspiratieblog_module_scss__WEBPACK_IMPORTED_MODULE_9___default().container),
            children: props.pageData[0] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TypedHeader_TypedHeaderBasic__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        title: (0,html_entities__WEBPACK_IMPORTED_MODULE_4__.decode)(props.pageData[0].title.rendered)
                    }),
                    props.pageData[0].content.rendered && (0,html_react_parser__WEBPACK_IMPORTED_MODULE_5__["default"])(props.pageData[0].content.rendered, parseOptions)
                ]
            })
        })
    }));
};
const getServerSideProps = async ({ params  })=>{
    const data = await fetchData("https://api.suzanschapendonk.nl/wp-json/wp/v2/posts?slug=" + params.slug + "&time=" + Date.now());
    return {
        props: data
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("html-entities");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6615:
/***/ ((module) => {

module.exports = require("react-burger-menu");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3663:
/***/ ((module) => {

module.exports = require("typeit-react");

/***/ }),

/***/ 662:
/***/ ((module) => {

module.exports = import("@react-hook/window-size/throttled");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 2905:
/***/ ((module) => {

module.exports = import("html-react-parser");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,776,509], () => (__webpack_exec__(4472)));
module.exports = __webpack_exports__;

})();
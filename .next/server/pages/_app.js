"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* binding */ useKeyboardNavigationDetection)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "query-string"
const external_query_string_namespaceObject = require("query-string");
;// CONCATENATED MODULE: ./src/utilities/browser.js

const isClient = ()=>"undefined" !== 'undefined'
;
const isServer = ()=>!isClient()
;
const getUrlSearchParams = ()=>{
    const locationSearch = isClient() ? window.location.search : null;
    if (locationSearch) {
        return queryString.parse(locationSearch, {
            parseBooleans: true,
            parseNumbers: true
        });
    }
    return {};
};

;// CONCATENATED MODULE: ./src/hooks/useKeyboardNavigationDetection.js


const useKeyboardNavigationDetection = ()=>{
    if (isClient()) {
        document.body.className = 'using-mouse';
    }
    const handleDocumentTab = (event)=>{
        if (event.keyCode === 9) {
            document.body.classList.remove('using-mouse');
        }
    };
    (0,external_react_.useEffect)(()=>{
        document.addEventListener('keydown', handleDocumentTab);
        return ()=>{
            document.removeEventListener('keydown', handleDocumentTab);
        };
    });
};


/***/ }),

/***/ 3087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const SEO = {
    defaultTitle: 'Studio Suzan Schapendonk',
    titleTemplate: '%s | Studio Suzan Schapendonk',
    description: 'Studio Suzan Schapendonk: illustratie + ontwerp',
    openGraph: {
        locale: 'nl_NL',
        type: 'website',
        url: 'https://suzanschapendonk.nl/',
        title: 'Studio Suzan Schapendonk',
        description: 'Studio Suzan Schapendonk: illustratie + ontwerp',
        site_name: 'Studio Suzan Schapendonk',
        siteName: 'Studio Suzan Schapendonk',
        images: [
            {
                url: 'https://suzanschapendonk.nl/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Studio Suzan Schapendonk',
                type: 'image/jpeg'
            }, 
        ]
    },
    twitter: {
        handle: '@suzanschapendon1',
        site: '@suzanschapendon1',
        cardType: 'summary_large_image'
    },
    facebook: {
        appId: '496046862245316'
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);


/***/ }),

/***/ 2654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var simple_react_lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3732);
/* harmony import */ var simple_react_lightbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(simple_react_lightbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _next_seo_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3087);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var _hooks_useKeyboardNavigationDetection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1703);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_5__]);
framer_motion__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function MyApp({ Component , pageProps , router  }) {
    (0,_hooks_useKeyboardNavigationDetection__WEBPACK_IMPORTED_MODULE_6__/* .useKeyboardNavigationDetection */ .j)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "viewport",
                    content: "initial-scale=1.0, width=device-width"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((simple_react_lightbox__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.DefaultSeo, {
                        ..._next_seo_config__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimateSharedLayout, {
                        exitBeforeEnter: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps,
                            route: router.route
                        })
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3732:
/***/ ((module) => {

module.exports = require("simple-react-lightbox");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2654));
module.exports = __webpack_exports__;

})();
(() => {
var exports = {};
exports.id = 525;
exports.ids = [525];
exports.modules = {

/***/ 7348:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Mijnwerk_container__HvJj1",
	"main": "Mijnwerk_main__JVC_2",
	"workLink": "Mijnwerk_workLink__4fs1I",
	"imageContainer": "Mijnwerk_imageContainer__3vxfU",
	"imageItem": "Mijnwerk_imageItem__9WWFU",
	"workLinkText": "Mijnwerk_workLinkText__Zy_4D",
	"workimage": "Mijnwerk_workimage__wHFYS"
};


/***/ }),

/***/ 6081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var typeit_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3663);
/* harmony import */ var typeit_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typeit_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TypedHeader_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8185);
/* harmony import */ var _TypedHeader_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TypedHeader_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const TypedHeaderBasic = ({ title  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: (_TypedHeader_module_scss__WEBPACK_IMPORTED_MODULE_3___default().PageHeader),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((typeit_react__WEBPACK_IMPORTED_MODULE_2___default()), {
            options: {
                cursor: false,
                lifeLike: true
            },
            children: title
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypedHeaderBasic);


/***/ }),

/***/ 6306:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2905);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9816);
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Mijnwerk_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7348);
/* harmony import */ var _Mijnwerk_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Mijnwerk_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6197);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4776);
/* harmony import */ var _components_TypedHeader_TypedHeaderBasic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6081);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_6__, _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__]);
([html_react_parser__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_6__, _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const getAllData = async (URLs)=>{
    return Promise.all(URLs.map(fetchData));
};
const fetchData = async (url)=>await axios__WEBPACK_IMPORTED_MODULE_4___default().get(url).then((res)=>({
            error: false,
            data: res.data
        })
    ).catch(()=>({
            error: true,
            pageData: null
        })
    )
;
const Mijnwerk = (props)=>{
    //console.log(props.pageData)
    //console.log(props.pageData);
    const parseOptions = {
        replace: (domNode)=>{
            if (domNode.attribs && domNode.name === 'a') {
                if (domNode.attribs.href.indexOf('http') < 0) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    href: domNode.attribs.href,
                    passHref: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_3__.domToReact)(domNode.children)
                    })
                }));
            }
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        title: "Mijn Werk",
        route: props.route,
        description: "Ik maak zowel illustraties en ontwerpen in opdracht als vrij werk. Op deze pagina vind je een overzicht van mijn portfolio met daarin naast een aantal eigen projecten, het werk dat ik voor verschillende opdrachtgevers heb gemaakt.",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_Mijnwerk_module_scss__WEBPACK_IMPORTED_MODULE_9___default().container),
            children: [
                props.pageData && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TypedHeader_TypedHeaderBasic__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            title: (0,html_entities__WEBPACK_IMPORTED_MODULE_5__.decode)(props.pageData.title.rendered)
                        }),
                        props.pageData.content.rendered && (0,html_react_parser__WEBPACK_IMPORTED_MODULE_3__["default"])(props.pageData.content.rendered, parseOptions)
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_Mijnwerk_module_scss__WEBPACK_IMPORTED_MODULE_9___default().imageContainer),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: props.pageItems.map((post)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_Mijnwerk_module_scss__WEBPACK_IMPORTED_MODULE_9___default().imageItem),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        href: `/mijnwerk/${post.slug}`,
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: (_Mijnwerk_module_scss__WEBPACK_IMPORTED_MODULE_9___default().workimage),
                                            children: post.acf['afbeelding_1'].sizes.woocommerce_single && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                src: post.acf['afbeelding_1'].sizes.woocommerce_single,
                                                alt: post.acf['afbeelding_1'].alt,
                                                layout: "fill",
                                                objectFit: "contain",
                                                sizes: "12.8vw"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        href: `/mijnwerk/${post.slug}`,
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: (_Mijnwerk_module_scss__WEBPACK_IMPORTED_MODULE_9___default().workLinkText),
                                            children: `${(0,html_entities__WEBPACK_IMPORTED_MODULE_5__.decode)(post.title.rendered)}`
                                        })
                                    })
                                ]
                            }, post.id)
                        )
                    })
                })
            ]
        })
    }));
};
const getServerSideProps = async ()=>{
    const data = await getAllData([
        "https://api.suzanschapendonk.nl/wp-json/wp/v2/pages/27?_fields[]=title&_fields[]=content",
        "https://api.suzanschapendonk.nl/wp-json/wp/v2/posts?categories=17&orderby=date&_fields[]=id&_fields[]=title&_fields[]=slug&_fields[]=acf.afbeelding_1.id&_fields[]=acf.afbeelding_1.title&_fields[]=acf.afbeelding_1.url&_fields[]=acf.afbeelding_1.sizes.woocommerce_single&_fields[]=acf.afbeelding_1.alt&per_page=25", 
    ]);
    return {
        props: {
            pageItems: data[1].data,
            pageData: data[0].data
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mijnwerk);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("html-entities");

/***/ }),

/***/ 6641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6615:
/***/ ((module) => {

"use strict";
module.exports = require("react-burger-menu");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3663:
/***/ ((module) => {

"use strict";
module.exports = require("typeit-react");

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 2905:
/***/ ((module) => {

"use strict";
module.exports = import("html-react-parser");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,776], () => (__webpack_exec__(6306)));
module.exports = __webpack_exports__;

})();
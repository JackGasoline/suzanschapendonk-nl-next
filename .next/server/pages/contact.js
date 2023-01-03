(() => {
var exports = {};
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 1300:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Contact_container__IaB2F",
	"sending": "Contact_sending__qbSNY",
	"formContainer": "Contact_formContainer__KBUEV",
	"messageSent": "Contact_messageSent__9l9bX",
	"imageContainer": "Contact_imageContainer__Cwz8_",
	"imageRight": "Contact_imageRight__F9qzz",
	"imageLeft": "Contact_imageLeft__D0T75"
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

/***/ 2288:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2905);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5641);
/* harmony import */ var _web3forms_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(713);
/* harmony import */ var _web3forms_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_web3forms_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Contact_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1300);
/* harmony import */ var _Contact_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Contact_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4776);
/* harmony import */ var _components_TypedHeader_TypedHeaderBasic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6081);
/* harmony import */ var _react_hook_window_size_throttled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(662);
/* harmony import */ var react_obfuscate_email__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(846);
/* harmony import */ var react_spinners_DotLoader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5468);
/* harmony import */ var react_spinners_DotLoader__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_spinners_DotLoader__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_5__, react_hook_form__WEBPACK_IMPORTED_MODULE_6__, _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_8__, _react_hook_window_size_throttled__WEBPACK_IMPORTED_MODULE_10__, react_obfuscate_email__WEBPACK_IMPORTED_MODULE_11__]);
([html_react_parser__WEBPACK_IMPORTED_MODULE_5__, react_hook_form__WEBPACK_IMPORTED_MODULE_6__, _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_8__, _react_hook_window_size_throttled__WEBPACK_IMPORTED_MODULE_10__, react_obfuscate_email__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const fetchData = async (url)=>await axios__WEBPACK_IMPORTED_MODULE_4___default().get(url).then((res)=>({
            error: false,
            pageData: res.data
        })
    ).catch(()=>({
            error: true,
            pageData: null
        })
    )
;
const Contact = (props)=>{
    const { 0: formSent , 1: setFormSent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('notsubmitted');
    const formRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { register , handleSubmit  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)();
    const { submit  } = _web3forms_react__WEBPACK_IMPORTED_MODULE_7___default()({
        access_key: '43033dde-3dc7-45ab-95f8-0caf749ac36f',
        settings: {
            from_name: 'Studio Suzan Schapendonk',
            subject: 'Nieuw bericht via je Website'
        },
        onSuccess: (message, data)=>{
            setFormSent('sent');
            console.log(message);
        },
        onError: (message, data)=>{
            setFormSent('notsubmitted');
            console.log(message);
        }
    });
    const windowWidth = (0,_react_hook_window_size_throttled__WEBPACK_IMPORTED_MODULE_10__.useWindowWidth)();
    let imageWidth = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(40);
    const override = {
        display: "block",
        margin: "-50% 50%",
        position: "relative",
        borderColor: "red"
    };
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
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleSubmitEvent = (event)=>{
            setFormSent('sending');
        };
        const element = formRef.current;
        if (element) {
            element.addEventListener('submit', handleSubmitEvent);
        }
        return ()=>{
            if (element) {
                element.removeEventListener('csubmit', handleSubmitEvent);
            }
        };
    }, []);
    const createImageTag = (imageObject, alignment)=>{
        const aspectratio = 100 * imageObject.sizes['large-height'] / imageObject.sizes['large-width'];
        const divStyle = {
            width: "100%",
            paddingTop: `${aspectratio}%`,
            display: "block"
        };
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: alignment === 'alignright' ? (_Contact_module_scss__WEBPACK_IMPORTED_MODULE_13___default().imageRight) : (_Contact_module_scss__WEBPACK_IMPORTED_MODULE_13___default().imageLeft),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                style: divStyle,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
                let imageObject = searchTree(Object.values(props.pageData.acf), imageID);
                if (imageObject) {
                    imageNode = createImageTag(imageObject, nodeClasses[0]);
                    return imageNode;
                }
            }
            if (domNode.attribs && domNode.name === 'a') {
                if (domNode.attribs.href.indexOf('mailto:') === 0) {
                    let mailAddress = domNode.attribs.href.replace('mailto:', '');
                    let atSymbol = '<!-- no spam -->@<!-- no spam -->';
                    let displayAddress = mailAddress.replace('@', atSymbol);
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_obfuscate_email__WEBPACK_IMPORTED_MODULE_11__.Email, {
                        email: mailAddress,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            dangerouslySetInnerHTML: {
                                __html: `${displayAddress}`
                            }
                        })
                    }));
                }
                if (domNode.attribs.href.indexOf('http') < 0) {
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: domNode.attribs.href,
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_5__.domToReact)(domNode.children)
                        })
                    }));
                }
            }
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        title: "Contact",
        route: "/contact",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_Contact_module_scss__WEBPACK_IMPORTED_MODULE_13___default().container),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TypedHeader_TypedHeaderBasic__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        title: "Contact"
                    }),
                    props.pageData.content.rendered && (0,html_react_parser__WEBPACK_IMPORTED_MODULE_5__["default"])(props.pageData.content.rendered, parseOptions),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Contact_module_scss__WEBPACK_IMPORTED_MODULE_13___default().formContainer),
                        children: [
                            formSent === 'notsubmitted' || formSent === 'sending' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                ref: formRef,
                                onSubmit: handleSubmit(submit),
                                className: (_Contact_module_scss__WEBPACK_IMPORTED_MODULE_13___default())[formSent],
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Naam:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                ...register('name', {
                                                    required: 'Vul je naam in',
                                                    maxLength: 80
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Email:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "email",
                                                ...register('email', {
                                                    required: 'Vul je email in',
                                                    pattern: {
                                                        value: /^\S+@\S+$/i,
                                                        message: 'Voer een geldig emailadres in'
                                                    }
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Bericht:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                ...register('message', {
                                                    required: 'Vul je bericht in'
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "submit",
                                        children: "Versturen"
                                    })
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_Contact_module_scss__WEBPACK_IMPORTED_MODULE_13___default().messageSent),
                                children: "Je bericht is verstuurd!"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_spinners_DotLoader__WEBPACK_IMPORTED_MODULE_12___default()), {
                                color: "#018387",
                                loading: formSent === 'sending' ? true : false,
                                cssOverride: override,
                                size: imageWidth.current * 3,
                                "aria-label": "Loading Spinner",
                                "data-testid": "loader",
                                className: (_Contact_module_scss__WEBPACK_IMPORTED_MODULE_13___default().spinner)
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
const getServerSideProps = async ({ params  })=>{
    const data = await fetchData("https://api.suzanschapendonk.nl/wp-json/wp/v2/pages/541");
    return {
        props: data
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 713:
/***/ ((module) => {

"use strict";
module.exports = require("@web3forms/react");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

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

/***/ 5468:
/***/ ((module) => {

"use strict";
module.exports = require("react-spinners/DotLoader");

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

/***/ 662:
/***/ ((module) => {

"use strict";
module.exports = import("@react-hook/window-size/throttled");;

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

/***/ }),

/***/ 5641:
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ }),

/***/ 846:
/***/ ((module) => {

"use strict";
module.exports = import("react-obfuscate-email");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,776], () => (__webpack_exec__(2288)));
module.exports = __webpack_exports__;

})();
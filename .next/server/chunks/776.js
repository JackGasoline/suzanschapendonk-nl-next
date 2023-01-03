exports.id = 776;
exports.ids = [776];
exports.modules = {

/***/ 8177:
/***/ ((module) => {

// Exports
module.exports = {
	"Backbutton": "Backbutton_Backbutton__q4Y97"
};


/***/ }),

/***/ 9698:
/***/ ((module) => {

// Exports
module.exports = {
	"bottomGradient": "Layout_bottomGradient__E1aFt",
	"invisible": "Layout_invisible__8T05C",
	"mainBlock": "Layout_mainBlock__hPkCJ",
	"lineContainer": "Layout_lineContainer__fBLdI",
	"topGradient": "Layout_topGradient__i7T_O"
};


/***/ }),

/***/ 7641:
/***/ ((module) => {

// Exports
module.exports = {
	"sitecredits": "Menu_sitecredits__0DoMW"
};


/***/ }),

/***/ 8185:
/***/ ((module) => {

// Exports
module.exports = {
	"SiteHeaderMain": "TypedHeader_SiteHeaderMain__QcEgm",
	"SiteHeaderSub": "TypedHeader_SiteHeaderSub__YV0kW",
	"PageHeader": "TypedHeader_PageHeader__t6pPQ"
};


/***/ }),

/***/ 855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/divider.a49445ea.png","height":5,"width":3970,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAADFBMVEUAAAAAAAAAAAAAAAA16TeWAAAABHRSTlPE4exGj+j9GQAAAAlwSFlzAAALEwAACxMBAJqcGAAAABFJREFUCJljYGBiZGBgZGAGAAAjAAi1FtXfAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Backbutton_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8177);
/* harmony import */ var _Backbutton_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Backbutton_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const Backbutton = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: (_Backbutton_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Backbutton),
        onClick: ()=>router.back()
        ,
        children: "Back"
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Backbutton);


/***/ }),

/***/ 4776:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8625);
/* harmony import */ var _TypedHeader_TypedHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6733);
/* harmony import */ var _assets_divider_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(855);
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9698);
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Backbutton_Backbutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(976);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _TypedHeader_TypedHeader__WEBPACK_IMPORTED_MODULE_6__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _TypedHeader_TypedHeader__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const variants = {
    hidden: {
        opacity: 0,
        y: 0
    },
    enter: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: 1,
        y: '100vh'
    }
};
const gradientVariants = {
    hidden: {
        opacity: 0
    },
    enter: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
};
const Layout = ({ children , title , description , canonical , route  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_9___default().siteContainer),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__.NextSeo, {
                title: title,
                description: description,
                canonical: canonical,
                openGraph: {
                    title,
                    description
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TypedHeader_TypedHeader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                route: route
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_9___default().topGradient) + (route === '/' ? ' ' + (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_9___default().invisible) : ''),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_9___default().lineContainer),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            src: _assets_divider_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                            alt: "Divider",
                            layout: "fill",
                            objectFit: "contain",
                            sizes: "100vw"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Backbutton_Backbutton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Menu_Menu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.main, {
                initial: "hidden",
                animate: "enter",
                exit: "exit",
                variants: variants,
                transition: {
                    type: 'linear',
                    duration: 2
                },
                className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_9___default().mainBlock),
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_9___default().bottomGradient) + (route === '/' ? ' ' + (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_9___default().invisible) : ''),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_9___default().lineContainer),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        src: _assets_divider_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                        alt: "Divider",
                        layout: "fill",
                        objectFit: "contain",
                        sizes: "100vw"
                    })
                })
            })
        ]
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6615);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Menu_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7641);
/* harmony import */ var _Menu_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_4__);





const Menu = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_burger_menu__WEBPACK_IMPORTED_MODULE_3__.slide, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            href: "/",
                            passHref: true,
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            href: "/overmij",
                            passHref: true,
                            children: "Over mij"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            href: "/mijnwerk",
                            passHref: true,
                            children: "Mijn werk"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            href: "/inspiratieblogs",
                            passHref: true,
                            children: "Inspiratieblogs"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            href: "/prints",
                            passHref: true,
                            children: "Prints"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            href: "/contact",
                            passHref: true,
                            children: "Contact"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Menu_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sitecredits),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "Site designed and built by Roel Jorna"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "Portraits by Saskia Lelieveld\xa0Photography"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);


/***/ }),

/***/ 6733:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var typeit_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3663);
/* harmony import */ var typeit_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeit_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TypedHeader_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8185);
/* harmony import */ var _TypedHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_TypedHeader_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const TypedHeader = ({ route  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h1, {
        className: route === '/' ? (_TypedHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default().SiteHeaderMain) : (_TypedHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default().SiteHeaderSub),
        layoutId: "title",
        children: route === '/' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((typeit_react__WEBPACK_IMPORTED_MODULE_4___default()), {
            options: {
                cursor: false,
                lifeLike: true
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                href: "/",
                passHref: true,
                children: "studio suzan schapendonk"
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
            href: "/",
            passHref: true,
            children: "studio suzan schapendonk"
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypedHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
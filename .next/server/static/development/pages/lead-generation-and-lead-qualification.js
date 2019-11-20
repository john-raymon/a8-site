module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/PagesLayout.js":
/*!***********************************!*\
  !*** ./components/PagesLayout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_application_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/application.scss */ "./styles/application.scss");
/* harmony import */ var _styles_application_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_application_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/john/Desktop/misc/a8/components/PagesLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (props => __jsx("div", {
  className: "w-full",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  className: "flex",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("div", {
  className: "flex flex-grow flex-col pr-10 bg-blue-900",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: "flex justify-center items-center flex-grow bg-blue-900 p-6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("div", {
  className: "flex justify-between max-w-md",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("h3", {
  className: "text-2xl text-white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, props.pageTitle))), __jsx("div", {
  className: "flex-grow bg-red-600 py-4 px-6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("p", {
  className: "text-base text-center text-white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, props.pageSummary))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("div", {
  className: "cursor-pointer fixed flex items-center justify-center top-0 right-0 w-10 h-40 bg-blue-900 py-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("p", {
  className: "absolute w-full text-base text-white capitalize rotate-270 whitespace-no-wrap bottom-0 mb-10",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "return home")))), props.children));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

exports.RouterContext = _routerContext.RouterContext;

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextType = _router.RouterContext;
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.historyId !== this.historyId) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // we use a historyId to enable ignoring invalid popstates

    this.historyId = Math.random();

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options: _Object$assign({}, options, {
          historyId: this.historyId
        })
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/lead-generation-and-lead-qualification.js":
/*!*********************************************************!*\
  !*** ./pages/lead-generation-and-lead-qualification.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PagesLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PagesLayout */ "./components/PagesLayout.js");
var _jsxFileName = "/Users/john/Desktop/misc/a8/pages/lead-generation-and-lead-qualification.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function index(props) {
  return __jsx(_components_PagesLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pageTitle: "LEAD GENERATION & QUALIFICATION",
    pageSummary: "We\u2019re boosting our resources at the top of the funnel, using advanced digital marketing tactics to grow the pipeline with new leads ...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "flex flex-col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("section", {
    className: "flex flex-col lg:flex-row w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "w-full lg:w-6/12 p-10 bg-gray-200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("p", {
    className: "text-base p-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "In Setting the Growth Strategy we talked about using market research and client data to categorize and prioritize potential clients. Segment leadership and strategy teams then develop priority lists to help target our sales efforts. There's another team that acts on these priority targets  ..."), __jsx("h3", {
    className: "text-4xl py-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Digital Marketing"), __jsx("div", {
    className: "mx-auto max-w-sm mb-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 316 327",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("rect", {
    width: "316",
    height: "327",
    fill: "url(#pattern0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("pattern", {
    id: "pattern0",
    patternContentUnits: "objectBoundingBox",
    width: "1",
    height: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("use", {
    href: "#image0",
    transform: "scale(0.00316456 0.0030581)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx("image", {
    id: "image0",
    width: "316",
    height: "327",
    href: "data:image/png;base64,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",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })))), __jsx("p", {
    className: "mx-auto text-base py-4 italic font-bold text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "How do we develop digital campaigns?"), __jsx("p", {
    className: "mx-auto text-base py-4 italic font-bold text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "What\u2019s the role of the segment marketing teams?"), __jsx("p", {
    className: "mx-auto text-base py-4 italic font-bold text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "What\u2019s the role of the MSDC digital marketing team?")), __jsx("div", {
    className: "w-full lg:w-6/12 px-10 py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("h2", {
    className: "text-2xl font-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "It\u2019s MSCDC, the Marketing and Sales Distribution Center."), __jsx("p", {
    className: "text-base p-10 leading-loose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Segment leadership communicates the priority lists and the strategic rationale to MSDC, which helps to focus and balance the MSDC team\u2019s efforts. There are two groups in MSDC. The Digital Marketing group runs digital marketing campaigns to generate leads. The Inside Sales group does lead qualification. For example, Jason in the MSDC Digital Marketing group works with the Segment marketing team to develop the content for a digital marketing campaign. The segment marketing teams have already been working on collateral for their segment offers. For example, in Healthcare, the segment marketing team researched Protecta, helping to define its value proposition and articulate its benefits. The segment teams then work with Jason in MSDC to develop and run digital marketing campaigns, including social media, conventions, trade shows, and emails targeting prospects (both existing or potential customers) with whom the Protecta offer and value proposition are most likely to resonate. Because Segment leadership has communicated the priority targets to MSDC, the digital marketing team can design their campaigns based on sub-segmentation and client data."))), __jsx("section", {
    className: "flex flex-col lg:flex-row w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "w-full lg:w-6/12 p-10 bg-gray-200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("h3", {
    className: "text-4xl py-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Buyers Journey"), __jsx("div", {
    className: "mx-auto max-w-2xl mb-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("img", {
    src: "/media/image-01.jpg",
    width: "100%",
    height: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), __jsx("p", {
    className: "text-base max-w-sm py-4 italic font-bold mx-auto text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "How does understanding the Buyer's Journey help us develop our sales strategy?")), __jsx("div", {
    className: "w-full lg:w-6/12 px-10 py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("h2", {
    className: "text-2xl font-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Our sales and marketing journey runs parallel to another important concept, the Buyer\u2019s Journey."), __jsx("p", {
    className: "text-base p-10 leading-loose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "The Buyer\u2019s Journey is the process buyers go through to become aware of, consider, evaluate, and decide to purchase a new product or service from Sodexo. The Acceler8 initiative is developing specific data related to the Buyer\u2019s Journey for different types of clients in each segment. We can use the Buyer\u2019s Journey to refine our commercial approach and improve the success of our sales efforts. The Buyer\u2019s Journey is an outside-in perspective on how we do business; consistent with our emphasis on client-centricity. We must understand what the client experiences in their interactions with Sodexo through the sales and retention process so that we can improve upon it, increasing both our rate of new business development and retention."))), __jsx("section", {
    className: "flex flex-col lg:flex-row w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    className: "w-full lg:w-6/12 p-10 bg-gray-200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("h3", {
    className: "text-4xl py-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Inside Sales"), __jsx("p", {
    className: "text-xl max-w-sm py-4 italic font-bold mx-auto text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Who\u2019s responsible for qualifying leads?"), __jsx("div", {
    className: "mx-auto max-w-md my-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("svg", {
    fill: "none",
    height: "100%",
    viewBox: "0 0 391 361",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("pattern", {
    id: "a",
    height: "1",
    patternContentUnits: "objectBoundingBox",
    width: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("image", {
    height: "361",
    transform: "scale(.00255754 .00277008)",
    width: "391",
    href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYcAAAFpCAYAAAB3UOSMAAAgAElEQVR4Ae2dCZxU1Z3v//97q6pXoOkFENmaBmxAQRZRFJHeaAQRTWInamJiXoyTvDczmcmb9SUzZDIzmZnkvcSYyYuZF3WyqNMmJri0NL2xqYii7CCL7MjW3dB7V9U9//c51QvV3bXcW3Wr6t6q//WDfeves/zP99xzf/fsAHwwASbABJgAExhGAIf95p9MIGUJ1NfXz0HEOxFxJgCMRUQUQlwDgOOapr139erVD6uqqrSUBcQJTykCLA4pld2c2OEEqqurs/Pz87+GiE8AgBSFoAcRXSKiF71e71OVlZUngjrkG0wgCQiwOCRBJnISIiPQ0NDwoKIo/w4ANxgMwQsAP3G73d+qrKzsNOiXnTMBWxBgcbBFNrGRZhNobGz8V0T8y2jCJaIjHo9nXWVl5eFowmG/TMCKBFgcrJgrbFNMCTQ0NPyLoih/ZVIkrUKI8rKysg9MCo+DYQKWIMDiYIlsYCPiRaCxsfHTiPhbk+O77Ha7F1VWVp4xOVwOjgkkjICSsJg5YiYQZwJvvPHGBAB4NgbRFjidzhcBgD+2YgCXg0wMARaHxHDnWBNAICMj41uIODoWUSPiXQ0NDV+KRdgcJhNIBAE1EZFynEwg3gTq6urGKIrya0R0xjDuWwoLC3+yefNmimEcHDQTiAsBrjnEBTNHkmgCiLgWETNjaQciTl+2bFlpLOPgsJlAvAiwOMSLNMeTUAKqqpbFwwBEvC8e8XAcTCDWBFgcYk2Yw7cEASJaEA9DEPGOeMTDcTCBWBNgcYg1YQ7fEgQQcUqcDJkRp3g4GiYQUwIsDjHFy4FbhQARxWSU0vD0IeKY4df4NxOwIwEWBzvmGttsmAAixmtknsOwceyBCViQAIuDBTOFTWICTIAJJJoAi0Oic4DjZwJMgAlYkACLgwUzhU1iAkyACSSaAItDonOA42cCTIAJWJAAi4MFM4VNYgJMgAkkmgCLQ6JzgONnAkyACViQAIuDBTOFTWICTIAJJJoAi0Oic4DjZwJMgAlYkACLgwUzhU1iAkyACSSaAItDonOA42cCTIAJWJAAi4MFM4VNYgJMgAkkmgCLQ6JzgONnAkyACViQAIuDBTOFTWICTIAJJJoAi0Oic4DjZwJMgAlYkACLgwUzhU1iAkyACSSaAItDonOA42cCTIAJWJAAi4MFM4VNYgJMgAkkmgCLQ6JzgONnAkyACViQAIuDBTOFTWICTIAJJJoAi0Oic4DjZwJMgAlYkACLgwUzhU1iAkyACSSaAItDonOA42cCTIAJWJAAi4MFM4VNYgJMgAkkmgCLQ6JzgONnAkyACViQAIuDBTOFTTKXQHV1tcvcEEOHFu/4QlvDd5lAZARYHCLjxr5sQqC+vr6koKBgTzzNLSgo2N3Y2HhXPOPkuJiA2QTQ7AA5PCZgBQLy6z0/P/97iPhnABD355yINCL6VllZ2b9YgQfbwASMEoh7oTFqILtnAkYJ1NfXj1cU5XeImPCvdyL6xZUrV56sqqrSjKaD3TOBRBJQExk5x80EzCbQ0NBQpKrqFkScZ3bYkYSHiAszMzOLCgsL/7B582aKJAz2wwQSQYD7HBJBneOMCYFNmzbNVBRlOwAUxiSCCANFxEeXL1/+/Qi9szcmkBAC3KyUEOwcqdkEampqJmVkZLwNAJPNDtus8Ijos6WlpdVmhcfhMIFYEmBxiCVdDjsuBF577bXM7OxsWWNYEJcII4+kw+v1LqmoqDgUeRDskwnEhwA3K8WHM8cSQwJZWVn/1wbCIAlkOxyO31RXV3NfXwyfBw7aHAIsDuZw5FASRKCxsbEKER9LUPSRRLugoKDgf0Tikf0wgXgS4GaleNLmuEwlUFdXN8bhcBwGgAmmBhz7wNqFELPLysrOxT4qjoEJREYgacWhqanJoWlaOSKuUhRlCREVAUAOIsZ1KYXIsoV9MQEmYDMCHgC4BgAniOh9AKjt6enZuHr16l6bpWPQ3KQTh/6ZsbLa/k1EnDiYUj5hAkyACcSRABE1I+LTbrf7B5WVlZ1xjNqUqJJKHOrq6mY7HI5XAKDYFDocCBNgAkwgegJnhBCfKSsr2xl9UPELIWk6pBsbG9c5HI53WRji9/BwTEyACegiMBkRtzY0NDyuy7VFHCVFzaGhoeFeRVFeBQCHRbiyGTYkQEQXAeAPiNhERGeFEAIAbkTEZYqifMrKE+xsiDsVTSYhxBfLysp+ZYfE214c6urqpjgcjt0AMNYOwNlGSxLoBoDvnDx58qnHH3+8J5CFcoADEX0VEf9JDmwI5IavMQEdBHr6J0Lu0+E2oU5s/6WtquqPWRgS+gzZOnIiOg8A95eWlu4KlZCSkhIvAPy0vr6+XlXV1wFgZij3fI8JBCGQ7nA4fg4AS4Pct8xlW9ccGhsbFyGiHDbGBxMwTICIOr1e77KVK1fKmqfuo7a2ttDlcsnOxXzdntghE/AjQET3lZaWvuF3yXKntu6QRsQ/shxRNsg2BIjor40Kg0xcZWXlCU3TvmabhLKhliNgh3eXncVB1noesFyus0F2IXDi2LFjz0RqbHl5+W8B4L1I/bO/1CZARCvlgpFWpmBbcWhsbJzF1XorP1rWto2IXnryySflrNaIDyL6dcSe2WNKE5ArNWRlZd1mZQi2FQcAuMnKYNk2axMgovpoLRRCRB1GtDawf1sTsPQ7zLbiQER5tn4s2PiEEtA07Uy0BrS0tJyONgz2n9IELP0Os6048IS3lC5UUSeeiALOZzAYsNuge3bOBPwJWHoqgW3FgYha/SnzORMwQsDpdEa9KGNeXt4NRuJkt0xgGAG5iqtlD9uKg6IoRy1LlQ2zPAFEvCNaIxVFiTqMaG1g//YlQEQnrGy9bcVh69at++SSuFaGy7ZZmsBnTLDOjDBMMIODsCMBTdNCzspPdJrsPkP6JUT8bKIhcvz2JCCEKCsrK2uMxPq6urpbVFXdjYi2/cCKJN3sxxwCRHSgtLT0ZnNCi00odn+w5cbyfDCBiAgg4k/lVqNGPdfU1KSpqvofLAxGybF7PwK/8Tu35KmtxaG0tHQLEdlqAw1LPgUpahQi3uRwOH5bXV2drReB3GkwPT39l4h4u14/7I4JDCPQ4Xa7I56dPyysmP20tThIKkQk17iJaqZrzOhywHYgUF5QUPB2fX39vHDGbty4cUZ+fn4jIlaFc8v3mUAwAkT0vVWrVrUEu2+V67bucxiA2NTU9L8A4B8HfvNfJmCUABHJjX3+i4hebG5ubqqqquqQYVRXV2fk5ubKzX4+i4iPAYDTaNjsngn4EXj/yJEjd0a7dItfeDE7TQpxkHQaGxt/goj/PWakOOCUIkBE1xBRCgZvIpVSOR+7xMq9Qzwezx2VlZVRz86PnZXXQ04acQAAbGho+C4i/g13FF7PYD5jAkwg8QSI6LQQoqK8vPxI4q3RZ4Ht+xz8kkllZWXfEkKUA8Axv+t8ygSYABNIJIGNPT09i+0kDBJWMtUcBjNf7vcrhHhIURTZRrwCANIHb/IJE2ACTCAOBIjoIBGtLysrezkO0ZkeRVKKgz8lKRQA0AQAy/yv8zkTYAJMwEQCHrneGyIeIaJ3AGBDaWnpWyaGH/egkl4cJNGmpqZLAFAQK7per7ekoqJic6zC53ADE2hsbPw6Iv574LvWvSo7u71e75yVK1eet66V9rSssbHx14j4aKys1zTtC+Xl5SmxyVMy9TkEfB5qamomxVIYZKSqqpYEjJwvxpTA1q1bf0ZE78Y0ktgE/pcsDLEBi4gLYxNyX6iKoqRMWU96cUhPT4/pw9L/IMp+DT7iTGD9+vWCiORXYnuco444OiLaUlpa+h8RB8AegxKQezITkdw+OJZHypT1pBcHIoqHONz+3HPPcad3LItkkLDLysqOa5r2aZvMkj/jdrsflhP7gySHL0dBID09fR4iqlEEEdYrIk7vb40I69buDpJeHBRFibk4IGLalClT7rT7w2BX+8vLy+uI6EsWf+m2a5p236pVqz6xK2er262qaszLumSQnp5eanUWZtiX9OIQp5oDpFJbpBkPntlhlJaWviCE+DoRaWaHHW14RNSpadqnysvL90YbFvsPTgARFwS/a94dREyJfoekFofa2tpxiHijeY9FyJBSpi0yJIUE3iwrK/uZEOI+ImpLoBlDoiaiiwBwT3l5ef2QG/zDdALx+hDsnztluv1WCzCpxSFe1UyZqUS0RC7SZrUMTjV7ysvLNwohlgLAIQukfXdvb+8dpaWllt7xywKcojbhmWeekQsizo06IH0BTKurq5uiz6l9XSW1OMSjv2Eg6xHRlZube9fAb/6bOALl5eUHL1++fCsR/QMRueNtiYxTCPHtI0eOLLn33ntPxjv+VIyvsLBwruz7i1faFUVJ+n4HOXs4mY+4dFANAERE2bTEzQcDQBL4t6qqSorC3zc2NlYDwP54miKEWCAFKp5xpnpcqqrGpb9hgHN/WX9+4Hcy/k1qcdAzIYaIoKlxPzS3tIOijJwwLgRBXu4oKCm9GRBH3vd/KFKlo8o/zVY/Ly0tPdDUJFdPid/BwhA/1gMx6W4lkOX5rXpwXW0GEWD7b4UEuHPyoPmucoAA74OB+BDxnoHzZP2btOLw+uuvy3X4C8NlnHz5v/X2Ibh0qRMI5PL9Qw8EBcaNy4J7VswFVQ0tDgCwWE7EWbt2bdfQUPgXE2ACsSRARAvCfbz1xU+Q8942GHvlAnhGFndwKgCt+ROg+a6ycOuSTqutrS2srKw8Ect0JTLspO1zyMjI0F3NdLocQKABiQD/QAN5X88h+x0yMzN5gT89sNgNEzCPACLifN3BOZ3gFQAa0Yh/8jo49W3253Q6k3pIa9KKAwDEtb9h4MHsb4sc+Ml/mQATiDGBxsZGuWRGdoyjCRR8Ug9fT1px0NPfECi3o73G4hAtQfbPBIwRkAMAjPkwzXVS9zskrTgkquYg+x1qa2uzTHv8OCAmwARCEtDdGR0yFOM3EXFKQ0NDkXGf9vCRlOJQXV0tq5gzE5QFTqfTyf0OCYLP0aYegXgtmxGIrKIoSdu0lJTiMHbs2FsRA4xTC5S7MbhGREndURUDZBwkE4iYgBypFLHnKD0mc1lPSnGI57IZgZ4t7ncIRIWvMQHzCchlLBAxz/yQ9YWYzPMdklIcEtjf4HuiEHFRf9OWvieMXTEBJhARgXjPjA5g5KRNmzYlqgk7gDnmXUpKcUjUSCW/bHHk5eXd7febT5kAE4gNgYQMWfdPiqqqSdnvkHTi0L8j22z/zIv2XK6aoarGUPFSGtFSZ/9MIDyBWHRGkyzwiv7ynqxlXT+B8PlkCRdTpkyZBwD6pjRD30s/3KIYmkdA85V26OzsAU0LMOc+QMq53yEAFL7EBEwmYHgPB0UB38s/iB1y/1bFq4GjtRmUrg5ATdfeUcuDBGfry7pfojZKpa5qZnd3L1y61AbnzjbDtWtdQCLwtr4kBHxy8Ro89eMacLkQsrIzIC9vFEy6MR8mThzr+5ednS53ghuCSD60GzZsGLVu3br2ITf4BxNgAqYQqKmpKdC7mZfS3QWu5suQcf40ONuugqDA5V0uqZF26RMoeub74E1LA5GZDe6x+dA9cTL0jp8IvRNuBC1rFJBfeZc21NfXzyovLz9iSsIsEkjSiUOo/oaurl44e7YZPjp8Dg4eOgfnL7SA5hX9whD4YZH5JDQNWlr73/EX2+D48UvwHhz3bVmcmzsKimZMgBnTx/v+jh+f48taudH5qFGj5BfFGxbJazaDCSQVgfT09JAfglIQ0s+fhuxjh2H0R/vBdfETUL1ukCU9VP1f0TTIuNpyndWJoyB2vQ2aqvhWbO2eNgM6p82EjsKZ4CmY4HOnqqocvs7icJ2aJc9GPDBtbV3w/vvH4cMPT8DpM1dAaAAk/xPyEQkuCv6p63N7/cqAL7nUd8vOTti58xjkjs2GoqJxsHjxDJg1ayI4nb6OKhaH69j4jAmYRiDYSqxq+zUYs+c9GLP3fcg8dxrSyQuyNVjWCgbKbSgjpBtvgJoFagIyWy7D6KtXQHywA7pycn0Cce3W26Fr+ky5+c8zocK1272kqjn0bxV480AmyJrCzp1HYdu2w3Dx0tW+JXhJyC09B5xE/VeKxsBS3y2tHdDyfifs3n0KCgvHwW23FT04bdqXvn3y5PM9UUfEATABJjCEwPBlM7C7C8Z+sANyd2yGjMsXwKUAeAVBr3nFHTQC0DQC2U+ZebUFsj58F3L2fQBdk6etu7J01oPtae43CzefTIrynlTi4L9V4IkTF2Hjxt1w4MBpAMT+WsKQZ8v0H3LJb3m43QBHjl6A48cvTB+dg88WFz/yvw8ffoH3ETadOAeY4gQGZ0ZnnPoYxjW9DqMO7QMHyloCQK+uvuTICEq98fR/ZCoeN+ScOJLWS/BSVofjpcu3F/244N3jti/vSSUODodjoVT1bdsOwptvfgBdXZ6+WoKJNQW9jxIJL3gFoqKoDysOZeXcuY881ensevrk7j/IKgwfTIAJREFADvYAgCI5mijn3S0wof5VyOrpAvnJ7jWxpqDHxD6hAFABXOlOfKxLgzXNt818qs3jebpw90nblvehQ2z0kLCwm9bWjqW/e+Ud+O1v34bOrl4Qwptga8lnAwLlAeI/ZHmzXikufmRRgo3i6JmA7QlkZ2cvULo6cPwb1XDjhhfB1dUJPbK6kMBDxt6tkay55KEC/5Dtcrxy+fYi25b3pBGH4uLH8n716y2f2rr1kK+2MLwDOYHPjK9JS9qDoJQoTny1eO6jX0ykPRw3E7A7gYwrF++a9Nv/hIlvN/na/83WhXBzn0Lx8/VLEIETsUQBfPXKklm2LO9JIQ75+V8eheh5+ujRi7mxEgVUFEDFAYriAFTUcPvLBnx2ZE0GCSYqQM/Mnv35v5g79yFXQId8kQkwgaAEDt+VP2riH37zlfyDe3yjimJRX5DikK4iZKgoX/I+AQpqUJAbsk9CBZxIJJ65uLjoL2juXFuVd9v3OcgXrBA931FU9eGBDuEgeTXisnzhA8jO6lA9Vwg5ORmwdGkxtF7thObmdt9s6ZaWdp9YEAkA+U/n4RMvVNIUFf4JyJU7bdqXvsOjmXTCY2cpT0C+YC95er/j+vjIdLeBvkT5slflshhBhqkOgJVvhO4xOXD1tmXgutoCzpYrkNZ6BRytLZCG6BMj/aW9r9NaUSDNAco/Xc7uzaUV076DNhnNZHtxEEL9gqrinwjfnIWBLA71F8FXCwCCoqIJsGDBNNiy5SBcutwWcEQTKghjcrLgvvsW+wJ1u71w7VonXLxwDQ5/dA727TsFzS2dvi+LPht0fMfIhxrRSUQFDsdFHR5CpYfvMYHUIdAyuvcLLgF/EmyG83ASilwXDRB6FYTOqTPg6rxFkPdWE2RcuQCBFkVQEEEbkwOXK9b5gkJ3Lzjar0H6pQsw6thByDq0F9JaroAT+uZN6BIKAiAkWQEpOHbWYZvybmtxKC7+4iJF9a4n30CB8Mxlc5CqIEwvGg+lJTdDcfEkOVENduwIPbFRCPKtqSQX33O5HFBQMMb37+ZbpkDlylthz96TsGvXx3Ds2AXfJJtwNRFARQjN+5QQXX9/7NibvcMfaP7NBJjASAKXby9eBJq2HhBUObso3CHfxl5VhdZpM6F5WTl0zJwN5HBCzq63QQGEYGGg/NCU/+Q6TK408OSN8/1rnz0P1JLVMGr/h5CzdyeM+vioTyQGhrQGskeKExAJD+FTikP9+5nHPrJNebetOMyYce9oFT3/DKBMCv0y7ssyRVFh/PgxsGrVArjllimQlia1X05oCfaIBMrqkddGjc6AZctmw+LFRbBv32loatoPp880B5x9jbJai+gVmvhed3f6P588+VJSTJYZSYWvMAFzCTTfPmO0pmn/rKowKdTLeCBWKQwd4yfAxdK10F48Dygtre+WHBhioDlqILyBv1r2aLh6xz3QtmAJjDq4Bwreqofss6d8tZDhtQgVQV73elD5Xk+G558LNx+zVXm3rTi41DGPgKqU6xWGWbNugIceWgoTJowdyGdT/6anu+C222bArJk3QO2mPfDWWx+BJrTBpqp+YXAD0T8eOnT+ewCbEz3O1tT0c2BMIJYEBIlHFMRyL/X1GwSLS96VwtA6oxjO3v8weMbdEMxpVNdFWgZcW3AHdE0vhoLNNZDz7jZIFxoM9IM4ZPMUkZsI//Fw5o3fK9lsv/JuS3EoLHx4PDqVPwIIv0+07F+YM+dG+Nxnl8HY3OyoHgg9nmX/RFXVnTB1agG8/sYuaG3tkNVKUB1Ot8ft/vahQzf9AOCF4R8ZeoJmN0wgJQlcvL1wPAn1j1wOUNxhxqzKTufm4pvh3AOfB29Obsx5ecbkwPl1j0DX5EIYX7cBMlpbfA1eAqBDA/zuuPeO/qAEjtqyvNtyKGt6OqwFUG6Rs5BDHXLo6ezZN8Kjjy6PizD423L77TPhia+UwQ0TxoLL5YQH1t128dChF78PsN6WD4p/2vicCcSTgIPUtWkIt3jCCEOaitA6ay6c+/QX4yIM/gyuLlwKpz7/Negaf4Ps5yANtD8dt/Po92XLkr87O53bruYwY8ajoxUFHkMgJVSXlKwxjBmdDg8+cDuMHp0ZbZ7IqELXZwPEMGVKAXzpiyvgSnM7zJ8/bdKdd24cu2rVKr+1gAN44ktMgAkMEpB9DYLoMUJUQnUVyPb9juwxcGH1Z8A7asyg/3ie9Nw4FU5/7glwNl/G1uJb3quoqAj1ioqnaRHFZbuaQ1oaLQWgO0XIuQly6gFBZeWtMHFi9FVLj0eLuCPpxkl5Uhhk5qDL5UrKvWYjevLYExPQQcBLsBQA7wzXCS0I4VLpGt9mPDqCjZmTnhsmQfvNC6B/f4eYxROPgG0nDkS4pn+KclA+csiqbPOXI4jMOHp7PWbt5sbiYEaGcBgpQ0AFXKOiXNMu+OEbmTRpKlydvyS4ozjfSYZtgm0lDkuKH8wDoLvDbdAj23/uuqsYMjP7h69F+WCYJQ7JuhF5lHjZOxMISODskhvzCOjuUItXyLJOCkLL7cuBMqJuPvbZgV5Pd0CDDFwkIrkLpOGmaANRxNyprcThmpoxDxVlkhz9E+yQtQa5x3Nx8Y3BnBi+3tPj6dC9ZVzo0OfW19fnhXbCd5kAE5AEVC19HgBMCrV/m1NF6MzJg64Zc0yDprh7ZXmP6kDEvMbGRmm/bQ9biYMC4lYgkRdCG3xSPW1avk8gzMoVTQi5a+ABE8KTXxJyr1k+mAATCEPAhXgrAuQFWuZiwKssUF1TpoMn17xvLtXda0ozMhHZuqzbShwAcAagHJcQvOYgd32bNm3cwLNj2l8i2mJGYIqicL+DGSA5jKQnoKkwI01FDFbapTD0CoDuyYXGWPhWywzuBbu7o645yNDt3u9gG3FYsWKFAwknhmp/lE18TgdCQf7o4Dkf4R2Px7s1Qq/DvbE4DCfCv5nAMAJNK8ChEIQs71IcNJcT3PnGPgYVr6drWHRDfiqaJreQPDrkYmQ/7rZzv4NtxOHYsQInoDIqZK1BTp13qpCbZ2wmNFGohqq+p+Ls2cvbIns+hvpCxDk1NTUFQ6/yLybABPwJrOid5ASisOVdOF3gzjHWpKR4QotDvx1RfwwiYm5dXd2t/umy07ltxCE/35OGiGGHI8iVU9MzjO2p4fWKsPMYnnzyF5eJyJR+h7S0NK492KmUsK1xJ3C125EmADODNSn5DJINzKoDKD3DmH3u3rCjkbxud9TiII1SVdW2Zd024iBBI4ZZdcvnBkD1beKj/3nxerWQ1Uy/kDb7nUd8ykNaI0bHHlOJQOg25D4ScqVj386M+sEoHnfY8o7d3dv1hxjcpZ3Lum3EoaOjVxBh6MWUZBukIOjudgfPrQB33G5v2C8J6c2sTmm7d1QFQMiXmICpBK6kOQQChS7vBKBoGkBP2He9v21e1e0OW97Vp58+DQAn/T1GeH73+vXrbfOe9U+jbYzu6nJ4CSnsW9/rEdDa2umfxrDnvW5dbZBSHEypagLA7NraWmO9aGFTwQ6YQPIQyPJ2eQWgW3Y6hzrQ7QbntdZQTobc8zUN6+hjlJ5MKu85y5cvXzDECJv8sI04fPX8oh4UWpingKC3V4PLl68Zwu/u9er69CgvL79IRAcNBR7EscvlsvUY6CDJ4stMwBQCN6w934MEIcu77I9Aby+kXbmoO04E2K3bMYApw9ft2lJgG3FYL5e6FnQ63GglmfEff6z/YZFVR0GkGXhgTOl3sPsEGQO82CkTMEwA14MgVZyWu3UGqz1IcZBd0ZmnjusOX3i9usXBrGZku5Z124iDL/cV5TABeII/LlI6CE6evKy7aUnThO6Hpf8JNOVrAgBsO4pBd0lkh0wgCgIK4WE3gSeYOMigfQJx+gQ4dDYtCY9Hd3kvKyuTqvNJFEkY8LrMjv0OthIHTaN9ANQiBygEPUjAlStt8NFH54I68b8hhDFxEEKYIg6IeNMbb7wxwd8WPmcCTOA6AUG4j0CELO9yA6Cs1kuQdezQdY/Bz6j3zJk9wW+PvENEUbcUIOKYO++8c+HI0K19xVbiMKEn7UPQxCG5REawQ/Y1ya+JxqZ90NkZdlACaJr4MFhYga7LfgcA0PUkBvLvfy09PZ37HfyB8DkT8CPQdcn7IRAeCjWi1dfvIAgKtteBozPsqhfHsqqrDa2bhIimfAw6HA7blXVbicPmk8/LyWpvhnpY5LNFQsD581ehduNuEKFW7QKAlpZ23dXMgefWjK8JGZZdO6oGOPBfJhBLAoUnT/YIxDdDrcoq4/cSQNYn5yB385sAspMiyEFEhj4EfWF7U3fZHFuJg8wscntfURCaMUTtwedOCNi27TB8sOtYkEfFd/nKY4/99HwoB4HumfU1YecJMoG48DUmYDYBVMUrvZmjvErwxgJflLLFYPw7TTB673tBTYhEHCoqKmQrwc1QLbEAACAASURBVOWggeq/say6ujrkpkX6g4qPS9uJw8HjLx+7qfiGDxHDcSbwaAJ+98q7sGtX4NEMRLQrEsxdXV2mVDUBYOamTZsmRmID+2ECqUDgw/U//aR58VLVFUYdZH1B9Xpg4uvVMHpPYIFARMM1B8nYjPkOiDg6Ly9vkZ3yzHbiIOGWld3anZnlBMTQ5pPQoL2jB6qr34ampv3g9Q4dsRrpw7JmzZoLAHDYjIx2Op22a4s0I90cBhPQQ8DhcMxvW3AHdmRkgTNM7UE2L6V1tMGNG16AsW81AHiHTrA2OvhkwD6zhrQqimKrsh767TpAx2J/Z8yYMH3ZnbNlo31Yy2T/Q2dXL/zulR3w/PNNcO5s86CfSKqZg54Boh7F0B8WD2n1g8qnTGAYgYU942+E5iXLQdYOwpV4jQBcXZ0w+dWXYNKL/wFpn5z1BUdE5/sHkwwLPvxPs8TBbsPXbScO1dXVGYqCxeUV82DWrAmgKI6wuSsFggTBnj2n4Kf/txY21e6G1tYO8Hq9HwJsHvp5ETa0PgeappnVtMTioJM5O0s9Aoi4ABUFWu6phGtFxSC3BQ13aP0jFgsOfAjTnn0K8ja/CemXL/hWNijZbLy8b9++fT8AXA0Xr477dzU1NYV/YekIKB5ObCcOY8eOnY+IakaGCz714B2Ql58Nct/o8AeBEBpcu9YJr76+C55+6k3xZ3/6/Bfmznh0jiLC7+cwPHyv12uWOMxoaGgwb8Pr4YbybyZgYwKI6JsfoKVnwif3VUHH2AJw6WkxAAAPEaS3X4XJG38P05/5/q0Xby/6h09u92023S8f+sCsX79emNHvAACjvF7vYn2xJt6V7cRBVdXBySSTJuXB5z57J2RlpoGic5lu3zwIocGl5jYFVOXblAYNoMBcWbswcqxateoTIvrIiJ9gbu06vT5Yevg6EzCDQHV1tYuI5gyE1XvDZDj34OehOzMLXOErED5vsplJ1iQyOjvyHYTfVgkaCHGuvG7wMOVj0E7bBNtOHABgUBxk5hYXT4LPfPoOSE93gax+6j1kZ7X8B0QTiFDHbiEFgR4nU/od7NZRpZcxu2MC0RDIy8u7GRGH7NzVOWM2nFv7OehOzwBVRw1Cxi8Lrru/rqACTFDItyRTUNOk+8sFQ8u716T5DnYavq7/bRoUZXxvDFQz/WO9bckM+OIXV0BuTpauPgh/v3oW8kMNHDNmuLKG+jNvfwe7dVQN58C/mUAsCCiKEnCp67YFt8PZz34FunNyIV0NNyX2umXypS/bBwJ95V13JTu90VF2+sMh5f3q1atyGKyh2dX+YQ6cI+Kddul3sJU49Fcz5w6A9v97881T4CtPlMP0ogJQFNVQLcI/nOHnsrkJVZibli42zp39yLfm3lR11y23PDJWujOrUxoRp9fW1k4eHjf/ZgKpTICIAoqDZNI+ex6c/vwfQfPUmSD7qMNMg9CNUTZBAfianTZeWDTzWxfvKLrr1LIpY6uqquQ4+Ld0BxTcYbYQYknw29a5YytxCFTN9Ec5ZUoBPPGVcrhvzULI8DUzmTMwgAgcAOpSVJXvgtNZqwG+OWfOwz/6xjeene12e4762xDpOc93iJQc+0tWAoFaCfzT2jNpGpz+/Nfg7MoHwJuRCU7UX4vwD8f/vK9WQQ4n4tIsF3xXEVib5Xa9eeW2mT/K3VZ3Fjwef+cRndtl2RxbicPw/oZAOZOdnQGVqxbAV58oh5t8Q11VX00i/AjpQKFdvyb7J+RoJwDIUghvVxT1T0FRX/m3f9uQtWXLAbhwoTXsOk7XQxt5Zqe2yJHW8xUmYC4BucQ1Ec0LF6qWlQ1XStfAyc9/HVpn3ASkIqSpCNG+2LxE0KORrJVkpal4u0OBP534xm8fnvbsjyD37UZwXfok5DpOoey2S1nX2ecfKqnxu9fY2PhTRPya3hh7ez2w450jsPP9Y3Dq5CUAVPo6ofUGENYdAvrqswijs9Ng4cIiWLR4OhQWjg/rM4CDkyUlJYUBrvOlKAk0NTWFa2aOMoah3ktKSmxVroZab41fdXV1sx0Oh6FdF7G3B3J2vQ05H+6AzNMnfENe5UverMyXgiP7wBVA6Bo1Ctrn3Qat85dA9+RCXRNyB8gSUdfRo0dznnzyyeirIQOBxuCvrR7ixsbGHYh4u1EOXV29cOjgWXhnxxE4euwT0Hzj2Mg3MS5895S+2ORIKfm9kp7uhNlzJsI9d8+FwunjdA+xlbEIIaaVlZWd0hcju9JLgMVBLynruGtsbHwEEX8TiUVqVydkHj0Aee+9BVknjpJT8/rGNZkpFLKfw6Uo0J2WDtdmzYXmpSXQOaVId18nES0rLS01ow8jEkS6/JjTKK8rqugcyRUNETFsNTNQLJmZabBocRHMv3Wab5e4//xl4x9aW7vmoYLTEdT+5qLovi98s7BBQHe3Bh98cBL27DkJd9w+CypX3gq5eaMCmRXomlx75flAN/gaE0glAkS0MNzKy8F4aJlZ0D5/CbTPXQjZxw8fnPKLH73lQCwHgOlydFOvFn1tQn5fdmsC1O5uyN/zPmTv/xCuLboTrpTcC+6x+cFMG7zeP7fJ0uIQbdPcYGJjfTJmzJjZ/VvGRhyVw6FCUdF48e1vfebzmlcr07zao4Day4TQHW2fxIBRA5PsNK+At94+Ak//+0bY8Y6+uXJ26agaSCv/ZQKxIiCXzYg6bIcD2mfN3Tr+veNPuhVHmRfwUTfRywKg26wmEzm6Sc7Edni9MG7nNij8xY9gzPtvhzXdDmXdNuLgdDqHTH4LSz+IA0T8qLKysvPw4ZdOHj780gtprvYvoSaO9PUdBPEUweUBkbh8uQ1efOlteOONXSD7QMIcvM5SGEB8OzUImCIOfctt+5bpvmHH4ZMTdh59odfT9SUAPKJ3Ap1e2rLdQTZbZV+5BJNe+RUU1L8K6HYH9S7nO8ih+UEdWOCGbcRBVjPN4DV8JdZdu17rIcSwb+1IaxZylJPX64WNGz+El19+Gzo65GZ2gQ9EnFpbW8ud0oHx8NUUIfDmm29OAwDfXKJok6xp2pA9HH6+9qs9CCJseY+0ZtFLBKrmhYn1r8HEV18ANfjWpRm5ubmG+0+j5WHEv23EQVGUmIgDwArFN/wgNLVeAGiTC/z1LfJn9NGRi/4J2PHuMXjppe0gO8iDHTzfIRgZvp4qBFwuV/RNSn2wvOfOnZMrqg4e92zeLN95oQswga+8S4dy7oTRCXZyFrbsk5jwwdsw8ZVfgdLdNRi//4nVl82xizjIzLzVH2yk50Y3+JGjkAjwgCqglIR3PWjifUTslkuFG1nLSdoraxG795yC19/YFWpOBDctRZq57C8pCJj1IQgAhx5//PHgVfUAtOQoJAQ44EZHKQhY7xHifUHQnaGibyZ2AC9BL3k0gvwDH8L4ug0B50RYvd/BFuJQX18/Uy53GzQXDNyIaDcoIrHv8Au7Dh586Tu9HiwTwnM/adoPgeis0ZqEFIht2w7Btm2Bh3Bb/YExgJqdMoGICIRaNsNIgET0gRH30q2cY01IYuK7hz7Ie//YdxQFywQp93dq9EON4KzcT0LvS1PWIGQ/RP6OzZC7I+CirktramrSjNoYL/d60xkve4LFY1aT0qny8vLrW8EFi234dTmFAVb4hv0eO/abtkOHqusPHHrhm263tpKE+AEAXPQ1OeldJZII6ur2wIkTF4fHJH9PbmhoKAp0g68xgVQgEG7ZDL0MjLYS+IWLTStKfJvE5L17rG38e0fqx+089k2Pgis1L/yAAC7K5iYd+w75JuCpQsC4zW9C5qmP/aLwnaanp6ffMfyiVX7bQhzMqmZG8bAEyi86evS/Dh08+MJfIMIqEvSsqiqkp6lJzom4dq0H6hv2gcczciM6O635HggMX2MCkRKor6+XywvcEKl/f39CiCGd0f73jJ4jAE3ccfRQ3ntH/0KQd1XrtBl7heIAR+jeC180cm/r7LarkLe1FoavzWTllgJbiIOeNZX0ZPbwkUp6/Ohxc+DAC7sPHpz5xJo1izcX5I/WtTOdXKdp/77TcPz4yNoDb/6jhzq7SUYCZtUafF18QuyJBaNx753cfeLxP/3bUw99Cbryxvk6rcPFI/eTGH1oL2SdOjbEqZXLul3EwZTRC7ESh77cXi/Ky2957stfLoWJE8f2L/Y35DkY9kOOYCLYtv0gaNrQXegQ8Z5hjvknE0gJAibOb/i4oqLiWqygaaq6/dqtS8TpR56Etgk3gitMG5Ms4S6hQd6OzUCabwFPn2lyOaDnnnsuPVZ2RhOu5cVBjnlGxNxoEjngt7e317Rq5kCY/n+FEFsmT86HJ75SBlOm5IWtQcjaw0eHz8O5sy3+wcjzSZs2bZKd8HwwgZQiYJY4IKLhzmgjoPuFZ3fPjVPgzBe+Bq03TgVHmD5H3yS5I4cg85Mz/lGlT548ean/BaucW14c0tLSTOmMBoArq1evPhtL8BUVFaeJ6OOCgjHwmc/cCWNGZ4Qd7trT64Xdu0+MMEtVVR7SOoIKX0h2ArGa7Bojbr4hSO68cXBh7cPQM2ZMyD4IOYva6e6BUfuHfqNatY/R8uJg4sMS0y8Jv4fPt690YeE4qKiYB4jhER8/cWFEx7Rd1nz3SzefMoGoCNTV1Y1BRFNWCDCzMzpEogbHp3ZPmQ4Xl98L4FudObgPVQHIPHUM0G/TIKuW9fBvruDpjMsds0Yqxba/YQiKwQdm8eIimHjDmDDNSwRXLrfD5csjmke532EIVv6RAgRk36KO8T/hSfT29u4O7yo6F0KI7f5bUrfdugTaJ9wYsnmJBEDalYvgbL40GDkRLamurs4YvGCRE8uLg1k1B0VRhtblYpQBmqb5ag4yeLkr3a23FoZ82kkQtLV1Q3NzxxCLEHFifX39rCEX+QcTSGICqqqaMvAEAD5Zs2bNhVij6p8zNbg8h9yV7trchb6Jb8Hilqu4OtvbwNV6fboVIqbl5eVZrt/B0uKwadOmiYgY0bZqwzNn+AJcw++b9Vv2OwDAYCfCvHnTwOmUmIN9EMmWSITz50d0SoOqqnJ/Bz6YQEoQMGsYayQzo6MAPNhSIMNon3MreNLSgpZ2OWopXQFIv3huSJRWXGfJ0uJgVpMSAHRs37596ADjIVlj7g8iGqw9jBs3GiZMGBu2Y/rata4RQ1oBgDulzc0aDs3CBMxaNsPkya4hiQkhtvo7cOePA/e4G0Iu1ic/E13XWgH69qQf8G65sp4q4rB7/fr1QycTDGRJDP4i4uDXhKqqkJeXHfRLYiD69vYe0PzGP/dft9wDM2Av/2UCZhLob3MvNiPMOPYvAhENEQdyOMA9Ns+3RlOwtMgXkdrRBuhX3q3Y72BpcbD6zOigmS/EYM1BDn0eMzormFPfdblpYXe3O9BKrRNqa2tNKTAhDeCbTCDBBPLz8+chom89o2hN8Xg8celflHaWl5dfJKLBrR4JELyjx4ZcnE92Sqs93YDi+vcqIrpyc3PvijbtZvq3tDiY2AYZt4dFZk5ZWdkpADgpz+U+uE5X+Gfe7dYCiQM4HA7udzDzieewLEnArCYlIrpWWVk52OcXp8QOthTI8q45nBBKHXy9jB73iGW8rdbvYFlxeO211+Qu3ZPNyNx4dUYPs3Ww9uDxXP9CGOZm8Keqok9IBi/0n1h5Ya7htvJvJhApAbM+BOPZ3+CX1kFxkNccXvni97s77FT2OZCiyi/HYXes1cdoWXHIzMw0ZWY0EbmvXr0aePOE4Vlj4m+5lIYMTq6f1N0der8RuYa8w6GCEnjLKZ7vYGK+cFDWJGDWshlxHqnkg9nT03O930EI385vsnYQ6iDV4Zsw5+8GEW+rra0N3Qbt7yHG55YVB7P6GwBgf1VVVfCdvmME2O12+2oOcnvQlpYO37ruoaLKyHCBoozMDjmUt76+fk4ov3yPCdiZQFNTk4OIbjEjDXGaGT3EVLksj1w2R16U/Qiuqy2hKg4gF00QGZlAI8u70+FwWKbfYeTbaEiyE/fDxGGsce1vGCB27733niSi052dvXDhQivIPRxCHTljMkGVc+sDHFZdeyWAqXyJCRgmoGnaHDkRzLDHAB7iNdk1QNS+lgKlqwNcly6AoOB1B9mY5B6d09e0NCwgKzUjB34bDTM4ET/NmhmdoDbIAWRNJ09ego4OuV958IdFjlYqGDc6WLOS7IvgTukBovw36QiY1d8AAD1Xrlw5nAhAA0NaM86c9A1TDWaDFAb5nejOHz+iWUn6sVJZt6Q49C/ANT0YYCPXE1HNHLCPiLYc/ugcyOFtwY++juj8/NHBnQDIfodQgYTyy/eYgKUJmNjfsLeqqur6ZglxTLXX6/XVHEYfPQhOkp97gQ9ZiHsUBdy5BYEdACyurq7ODnYzntctKQ4AYMoCXEQkmpub98YTqH9cdXUf7j/ykZwmH+xRAUAFYczoTBg7NuTzUFBbWzvXP2w+ZwLJQsAscYj1Hg6heMvhs462q+ezjh8CZeQopEGvKiJ4R40G99ixg9eGnThyc3OXDbuWkJ+WFAdVVU0ZqYSIR6qqqoauaBdHzBs2fDD70qV2kovrBT8Qxo0bBbm5IcVBznfg2dLBIfId+xKQH9O3mmF+PGdGB7J37Advncy4fBHk4nrBDtkH7SmYAN6cvGBOZNOSJcq6JcXByEglCpERiXxYZs16OF9R4Y/I1xwU/GGRd2YXTwKXyxH0YZE3rNQWGdJQvskEDBDYtGnTDAAYpddLqPKeyCbk84tm5ee91TTeIUciBUmMVMFejaB95hwgpyuIK+uUdUuKg94Oqn17T8Gvf70Vrl7tDAY6ISOVpDGqCk8C4B00dHGtYXYipKc5YPacScOuj/yJiMu532EkF75ibwJOp1N3K0H2wT0w+bfPg6Pt6ohEE5F25syZfSNuxOmConqeTG9vm+7Wgn8ISlNERga0zwzdQizffxs2bNAtmLFKouXEQU4CIaKbwiV4//7T8F/Vb8POnSeguvotaGvrGuElUV8SxcUPL1UU/GMSFLITGRUF5I5xctVWHUd+XV3dzTrcsRMmYBsCQghdezhkH94Lkzb8Bibsegdu+MMLoLYP3RwLEQ89/vjjoWebxojKxSUzlqqk/jFB6PKuIkDnlOnQO/6GcJY4srOzE97vYDlxcDgc8zHM3prvv38c/vM/N8PVa10ghBv27TsDzz7XCJcvtw2HHveaw+zZj0x1KPgTQGV8yI5olKOUAJYvnwMOWRfVcfD+DjogsRNbEdAzn2n07p0w6aX/BxnXWqGHCMYd3g1TXvg5pA3dTS1e2wAP4du6oHCqQvATp4LjQ1UaZAnXFBVa7igBkLOjwxxWaEbW91YKkxCTb4esZu545yN46aXt0N3jhoEmGyE0OHbskk8gjh49P2DOmf6dmgZ+x/xv0bwHxykKPA2KunDAtmCRygUoi6aPh1kzw35FDAZhlY6qQYP4hAlETyBkzSFn11sw6ZVfQ1pPN3j6W2xk003uiaM+gcj4uG9B1ET0L164s2ic16E+7XLgQk+Ivk+JyKUidEwrgo6isI0iPqJWKOuWE4dg/Q2yI6qubg+8/Nt3oKfXM2LGMQkvnDlzBX7xiyao3bgbenvjt2yvzM1bZj1cnO5N/x2gslYIb8gi41up1anCXctmQ3p68I6p4YEQEc93GA6Ff9uWQG1trVxYUy6wOfIggrwtG2HShpfA4e4B/69yqRG9RJB17hQU/uZnkN9UA9jWFtf+hrals4oVL/zOocDacP0Msjmpx+GCliX3AKWlj0xrgCtyEnBNTU3IyU8BvJl6yXLiEGikksfjhfr6vfDqa+9Dr9s7QhgGiMglKjo6u+H1ml3w1FOvT589+wtxaKN/SC0ufnit5lJ+g4q6LFyNwWcrKrBoUSEsXFA4YLquv4iY29jYOE+XY3bEBCxOwOl0Bqw1KB435G2thQm1vweHuzfoUhReAnB1dsLE2g0w+9/+6usti2fHvLzTQw+pF26bsbbXK36ToSrL/EUrGG75km2ddxtcu2VRMCcjrsu9LdLT0+8ecSOOFywlDjU1NWmIOGKROdn5vGHDTp8ohFujSN4Xmganz7TcrKiiZs6cR/7k5ps/Z8rS38PzZfbsT02dPdf1A9WhvIgAC2XzVrgDFRUmjB8Nq1YtCLqWUqgwiIiX0ggFiO/ZhkCwyW9Zh/bChDdfAVUT4A3TXCPvEwnIEOJTpHhqLt1R9CfNtxXFpLyfv3P21MsnPvyBA/FFVYGFPVrwmdADmeBEhLZxE+Fi2RrfEMaB63r+JrqsW0ocHA6HXJnRORzc9OkTYP78QjmdePitoL/7v+Ano4JPCVLq5xY//HczZny2CEZsw7E52LDk62ELOcV580BbkXLzTQ/Pmzv34X9FTK9TEL8BRFnhREsGJkcnZaS54FMPLoW8vMhGqlmhLfI6GD5jApETCLZ+Wte0GdB28wJwyEEbOoKXzUyyP0JBmOwgfIoQ65tvn/F3FxfNKFo/rLyvWLEibHnXAKhkc195l/7PLCycd2XxzH91ejx1LhW/gUhZemoMUhg86elw8b6HwDs2cOtZqOQluqzrYR/KflPvNTY2fhURnwkUqByq+vzzm+Ho0YvQ16YfejyxfxjypSznohGJ84jQQB7a5BFil8slLh448HLrnOLPvYsO9bZAL3jpl4TYDW76MqiwAJ3KPULAakVR8uVopEB+/OO+fi73bHDA/fcvgrKyqFqGWrds2ZIfzz2xr6fBnmdNTU36HxYTklhSUmKpcmVCkmISRFNT0+lgG3qp7W0w+b/+H+R/fNg3cUxvBkrwUlTkqqgaga+8KwSbejTcpaV1X5z8ztnWy3cUvesg5bZAtRK5vIVGtJtU+DIIWADkW9dstRMhX0pVuI7nAVCyn0GOTjq/6tPQsrxi4LKhv3L5H03TcisqKoaO2zUUSuSOLfUQNzY2/gwRnwyWnKtXO+APf3gP3t/18eBIpWBuA12XHcF9tQ/foyb3fj0FQKdJ0D2ISkHwoafYgwhdgEquDLdPEPQ+rn01BrlK7wPrlrhKS28OuG9DIHuDXfN6vQsrKiriPkw3mD1Wv87iYL0ckjs9ZmdnXw5lmeNaK0x483eQv3unb0kK/SWuL1T5SegTCiBZs7ioIJwCgtOC4B4FoSBYeATQQ4Bd6Qi50o2v6SqUocPuyXiFqtInqx7E5rvKDTcn+QcnhLi/rKzsNf9r8TrX304TB4uCjVQaiDonJxsefngZrLhnDsipEH01goG74f/KEU+yuan/a3+8gsoSBR2fCS0MvnDTATG3z6/sVwj2WI20od9GLwn655KSm88F2tBnpK/QV1RVtcTaK6Gt5LtMIDiBjIyMgJ3R/j68Y8bC+Qc/DxfvKvM1L8kXvZFDth+5+2oQ4EQcn6bgknQVP6OGEAYZvgKQ7kTIlX5lTUF/ae8TI6knLbfdfTRaYZC2JLJpyTLiIHeDkiNCw2V+WpoTHnhgCdy76lbISE8D2cEbySEFQnYg62uiMtJ8dN2a/uasViDlLw8enPVdRcHBfaWvuzJ+ZoUJMsatZh9M4DoBvYtrirR0uHDvp+GT8rXgTc+QL/nrgeg8G/j6lx3I3RoFXftoIDjpPtTieQPuhv/tr6W0goC/PL+u6lm5hk60RyLLumXEQe4GBQC6BgHL/ZbX3LcYHn+8BCZPzgVFkbpi/KGJNuOC+8c+m4iOk/A8euDAr34IsF7I/R2C+zF05+7169dbJu8MWc6OmYCsexOFrTkMgCKHAy5X3A8nH34C2m6cDC5E+XVvmUNu/S5t0oiOa0iP5r1/7IeEDlM+BIlo/u9///ucRCTWMozDNSkFgjNnziR44okKWLhwmq+zN9JaRKCwI70mbUDEbgLtl0KoDxw8+F9vDoSlaZopDwwA5Cxfvlx34RqIn/8yAQsRMPz8dtx0M5z6wn+Hy/MXg3CovlnHiU6PnPlMAN29RL/0OuiBcTuO+8o7Iu4ioqArguq1Wy4lNGbMGDn5Ne6HrcVB0sodmw1f+MI98OUvl8DUKfmgyJfzyI274wAW+5q4SOzUEKoOzPZ8+dChX+33j3jlypVHiWhwfQ//e0bPE9kWadRWds8E/AnIFUcRcab/Nb3n3pxcOPPQl+HUI0/CtYlTfR3OsvEmnu0GMi5ZW/ANVRWwkwirNk899uUJbx8fLO8lJSVeRHxbb7pCuUtUWbeMOASaGR0KmP892cw0f/40+MpXymDx4qKdAHBGCoRPKCJoo/QPO9S5jAMVh+wcl82UR8mrfROR7j+8/zevw8svB5sRZ0rtIdETZEJx4XtMIBSBzMzM+VG9zx0OaJ+7AE59/uvQPSbnxxrBGRlfuoogh5DG6pBhp6lyQCuSRnDUQ/TNdPDeX7Dz6OtVL0Og8m5KM3KiyrolxKG//Tzq3aDkVpuPPXbPMx532goC+FsBYgcidsk+CSkUZnxfyOGwfbUTh/xauQakNQnh/XOn01Fy8PCL/2f//hcvhnk4TXlgAODu6urq6Hu8whjLt5mA2QT0dkaHi9czJufaxE3vfcMJygqByt92a7RDI+qSIiG/6s3QCRmGDEuKgiC45taoSUH6c0VVSgp2Hvs/2e+eCFreNU3bGi4Neu4j4ryNGzf6htHrcW+Wm/Brx5oVU4hwli5dOgsRs0I40X1L07QPjxx59mMA+N706Q/9NC3NOR9R3KUoVIkI8wGVMXKx7L7haf3/F2EnTfoEwbffJ0ErIe0R5K1FN2x2ZDj3Hzjwgu62RSHEZtWcUQyjc3JyZLvt+7rhsEMmYAECwZbNiMC03bJvO+e9I77y3rJo+k9RUef3CrqLBFSCLO8AYxQ51civBUGOROor+YFjlIIgnQufM2z1Eu3xkKhFTd0Mnoz9+Xv36irvbrd7Z0ZGhtxjQtdAm8DW+K6iw+GQm339IYQb029ZQhyM7AYVhoCntbX1wICbjz9+Wc4slOq9dd68lT/WadOYGwAAE2NJREFUusZMFU7HLFSUBYA0mzQqQIRxACCX1Ugb8DfyL7UI0n6OQO84BB2+fLXr7Pnzr43cXWikxxFXysvLjzQ1NX0CAPrX6h4RSt8Fh8Mh11licQjChy9bk4BcNsM3ITV684bs4ZC76+PB8r5n3vgfj8sYNVUhmiUIF6hEswVAASGMUwmKZGUgkEDIphQvYAsK+rkgeEdVtMMerefsxJ3nDZf31atX9zY1Ne0AgKjnJSmKIst66omDiQ/LgaqqKnegZ27v3k1S7Q/2//NBXrToq87Ozp7RCrgb0KHOD7QUhuxXIK92/ODhF/8mULiRXCOizYj4cCR+h/mRD933h13jn0zAsgSCLa4ZicGh9nCYv/diJ8DFIeWdFi1ynlMvjFYwo8GBOD/Q8hmyhqGgOF6w47gp5Z2ItprUoRy1wBhlbIk+Bz27QelJGBEN+ZII52fXrp97Dh/+ZTMheEK5JVWu+LfCtFoWIprS74CI3O8QKuP4nuUI9C+uaUpZ8nq9hpaQwV27PJN2nmsGoJDlHQQoTSvMKe9mzW1CxFvq6+vz4pmhlhAHADA85jkQpFBfEoHc911b4QD/BsngDk27I2sOJgU2Ki8vT/8i8SZFysEwgUgJqKpqSlkHgB6Xy3XYqB39L30z+qp1Rd3V1SWblUKLka6Q5Ah9Ja7zHRIuDvX19dPlpC59fEK7QkRDXxKhQ4vd3dLSUrm34QUzYuhvizQjKA6DCcScgImd0fvkXIKYGxxlBGvXru0ioveiDMbnPd5LaSRcHKKZ3+APXC5ve+XKlT3+1yx+blbtIe5tkRbnyuZZm0DIPeL1mh5ZK4He0E13Z0ozshkd20ZSlnBxMKu/AQCOVVVVdRhJfCLdCiHMemCW9S9amMjkcNxMICwBOS9HjtkP61CHA0Q01L+oI8iYORFCmDLfAQDm1tTUFMTM0GEBJ1wczKo52OlhkXng9XrNqjlke73excPylX8yAcsRyM/PLwaADDMME0LYoglZprWzs/MtIgo0g9ooCnS5XHHrd0i4OESy4F4gojarZkJlZeVhIgo6uzJQGoNdUxSFm5aCweHrliEghDClM1q+aJubm/dZJmFhDFm3bl27WR+v8SzrCRWHmpqaSQBgSjXJTl8Sfs+SKbWHeHdU+dnPp0xANwETm5APV1VVdeuO2AIOTWxakpPh4nKYMt44UktXr1591pQFjyI1IMH+SktLPwcA8h8fTCDpCZSWlv45AMh/KXeUlZX9TwCQ/2xzJLTmYBtKbCgTYAJMIMUIJLTmYBnWgtJQLoYnF2kfdvj2nBJaiHWXhnngn0yACViaABGkOVQAEiPLu0MB8HhDrbNm6aSZalzKi8P69SvEyy8feVYjzxS5EONwugI0RVGU09Ld+vWmdBEMj4J/MwEmECcCKzavEC2Lf/1sj5emiADbSWsCFJXwtHQHkNrlfaR0ximTOBomEC8CTU1NgRbgjFn0JSUlXK5iRpcDjhcB7nOIF2mOhwkwASZgIwIsDjbKLDaVCTABJhAvAiwO8SLN8TABJsAEbESAxcFGmcWmMgEmwATiRYDFIV6kOR4mwASYgI0IsDjYKLPYVCbABJhAvAiwOMSLNMfDBJgAE7ARARYHG2UWm8oEmAATiBcBU2dINzY2rgaA1wBgxKQjRBxxLZA7mXAi0uU2SJi+IIYD1Bum9Bck3BE2BQkzYPx6w/R5jlP6NU37bEVFRWpPAx3+oPBvXQTq6+vnqapqp50XdaUrWR0R0X8rLS191kj6TBUHTdNaHA65Okl0B6L5E0ztEqYkFy9bVVW11bLH0T1V7NtMAm63uyUjw5R9e8w0i8MKQkAI0RLkVtDLUb/I/UPWNO2I/28+tzYBt9t91NoWsnVWJbB69epzRNRlVfvYrhEEDL+bTRWHVatWSXU6PMIsvmA5AkR0pD+/LGcbG2QLArKZdYctLGUjW7dv3274vWyqOPTnweucF9YngIg11reSLbQ4AS7rFs+gfvPeWL9+/YgVp8OZbro4ENHz4SLl+4kn4PF4/jPxVrAFdibQ3d39IhG57ZyGVLA90ney6eJQWlp6gIj4q9TaT139ypUrd1vbRLbO6gTWrFlzAQB+ZXU7U9k+IvqgtLS0IRIGpouDNELTtL8mIi0Sg9hPzAmQx+P5m5jHwhGkBIGenp713DFt3awmor+I1LqYiENFRcU+APjfkRrF/mJK4N9Xrlz5fkxj4MBThsDq1avPIuLfpUyCbZRQIvpVWVlZY6Qmx0QcpDE9PT1/R0S7IjWM/ZlPgIgOdHR0/JX5IXOIqUxgy5YtPySiiJouUplbLNNORMc1TfvjaOKImTisXr26V9O0TwGAbJfkI8EEiKjF6/U+uHbtWh6bnuC8SLbo5UiYzs7OzxHRx8mWNjumh4jaPB7PAxUVFdeisT9m4iCNqqioOE1EqwDgajRGst/oCBBRp6Zpa1auXMmT3qJDyb6DEFi7du0Vt9tdSUQXgzjhy/Eh0K1p2rrKysr90UYXU3GQxpWWlu4RQpQRUXO0xrJ/4wTkV4SmaasqKip4wpJxfOzDAIFVq1Yd83g8K4jovAFv7NQkAvIjUAhxn1nrpcVcHGS6y8rKPhBC3CnbwUziwMHoIEBE5wBgeUVFxXYdztkJE4iaQGVl5WFN05bK/q2oA+MAjBCQzff3RNMBPTyyuIiDjLS8vPyI2+1eAgAbhxvBv2NCYFt3d/diWXOLSegcKBMIQkA2J7e3t0uBeCWIE75sLoEdQghZ1k0dABQ3cZAs5Fo+W7ZsWUNEf8UzK819OgZC659f8o+yRa9/ktLALf7LBOJGYN26de2lpaWfFkLIETO8+m8MyBORXBLjX44cObK8rKxMthKYepi/NrZO8+R68Iqi/AciytoEH+YQ2EdET5SWlr5rTnDJEUpTU9OIvThimbKSkpKElatYpivSsGtra4tdLtfPAeDuSMNgf0MJENFBWdbLysreHnrHvF9xrTn4m11eXr5369atS4UQXwWAT/zv8bkxArKzXwjxZ0eOHFnEwmCMHbuOPQHZD1FSUnIPAHwJAM7GPsakjqGViL555cqVBbEUBknQEl84tbW1WS6X63/Kqd6ImJXUWWtu4nqI6MfXrl373oMPPsjDhYOw5ZpDEDAJuFxdXZ2Rn5//DQD4a0QcnQATbBllfzP8T7q6uv7xvvvua41HIiwhDgMJrampKUhPT5dtlF9HxLyB6/x3KAE5PBURfy6E+FEs2hqHxmb/XywO1svD+vr6PEVRvg4A/wMRx1nPQstY1E5E/+HxeH5UWVl5Jp5WWUocBhL+2muvZWZnZz8OAPILY8bA9VT/S0RyUuHTvb29P1+9enVbqvPQm34WB72k4u/uueeeS586depjiPhnAFAcfwssG6NsfvuJ1+v9WbQznSNNoSXFwT8x9fX1dyuK8iVErAKAbP97KXLeLYcECiGe3759e2Mkm3akCKegyWRxCIrGUjcaGhruRETZL1GFiGMsZVx8jJHNxL+X+y9s27atPtFl3fLiMJAnsl9CVdUHFUV5ABErk1wo5NC/eiHE73t7e3/HtYSBpyCyvywOkXFLlC/ZL5Gbm7tOUZQH5Qj4JO+b6Okv6xuEEC8nqpYQKK9tIw7+xtfU1KSlpaWVKopyPxFVIGKR/307nhPRKUSsE0K82tzcXF9VVcVjw03KSBYHk0AmIJjq6mpXbm7uPaqqyrK+EhFnJcAMs6M8Q0Ty4+/V7u7uTVZdDNOW4jA8pzZt2jRRUZTlqqreQ0RyLHUxIqrD3Vnlt5y8gogfEdF2IcRWItoqZ5Vaxb5ks4PFIXly9I033piQnp4um5qXE9FyRJwDAA4Lp5CISC54uQ0Atvb29m699957T1rY3kHTkkIcBlPTf9JfLb0ZEecj4q2IOI+IihDxhjgP35WTr+QqlceISG6AJLfm3OPxePZXVlZ2Drebf8eGAItDbLhaIdT+Du25ADBf/pNlXQ5iIaKJiBjXeVz9K9LK9ePkZFS5bM2e5ubmvVVVVR1WYGXUhqQUh2AQ5IM0ceLEaQ6HoxARCwFgPADIIbP5fv9GAUAaIrqIKE2e93+ZeAGgFxHdRNQrzwGgHQCuAIBccVb+lf+kGJzUNO1Ea2vrSW4eCpYb8bvO4hA/1laJSTZH5eTkTHU4HNMRcZoQ4gZFUfzLeh4RjZHlXJZxInIhovzrBACvLOeyjMuy3n8uX/C+Mk5EVxBRTjy9SEQnFUU50dnZecKqzUOR5klKiUOkkNifvQmwONg7/9j6xBCIa7UrMUnkWJkAE2ACTMAoARYHo8TYPRNgAkwgBQiwOKRAJnMSmQATYAJGCbA4GCXG7pkAE2ACKUCAxSEFMpmTyASYABMwSoDFwSgxds8EmAATSAECLA4pkMmcRCbABJiAUQIsDkaJsXsmwASYQAoQYHFIgUzmJDIBJsAEjBJgcTBKjN0zASbABFKAAItDCmQyJ5EJMAEmYJQAi4NRYuyeCTABJpACBFgcUiCTOYlMgAkwAaMEWByMEmP3TIAJMIEUIMDikAKZzElkAkyACRglwOJglBi7ZwJMgAmkAAEWhxTIZE4iE2ACTMAoARYHo8TYPRNgAkwgBQiwOKRAJnMSmQATYAJGCbA4GCXG7pkAE2ACKUCAxSEFMpmTyASYABMwSoDFwSgxds8EmAATSAECLA4pkMmcRCbABJiAUQIsDkaJsXsmwASYQAoQYHFIgUzmJDIBJsAEjBJgcTBKjN0zASbABFKAAItDCmQyJ5EJMAEmYJQAi4NRYuyeCTABJpACBFgcUiCTOYlMgAkwAaMEWByMEmP3TIAJMIEUIMDikAKZzElkAkyACRglwOJglBi7ZwJMgAmkAAEWhxTIZE4iE2ACTMAoARYHo8TYPRNgAkwgBQiwOKRAJnMSmQATYAJGCbA4GCXG7pkAE2ACKUCAxSEFMpmTyASYABMwSoDFwSgxds8EmAATSAECLA4pkMmcRCbABJiAUQIsDkaJsXsmwASYQAoQYHFIgUzmJDIBJsAEjBJgcTBKjN0zASbABFKAAItDCmQyJ5EJMAEmYJQAi4NRYuyeCTABJpACBFgcUiCTOYlMgAkwAaMEWByMEmP3TIAJMIEUIMDikAKZzElkAkyACRglwOJglBi7ZwJMgAmkAAEWhxTIZE4iE2ACTMAoARYHo8TYPRNgAkwgBQiwOKRAJnMSmQATYAJGCbA4GCXG7pkAE2ACKUCAxSEFMpmTyASYABMwSoDFwSgxds8EmAATSAECLA4pkMmcRCbABJiAUQIsDkaJsXsmwASYQAoQYHFIgUzmJDIBJsAEjBJgcTBKjN0zASbABFKAAItDCmQyJ5EJMAEmYJQAi4NRYuyeCTABJpACBFgcUiCTOYlMgAkwAaMEWByMEmP3TIAJMIEUIMDikAKZzElkAkyACRglwOJglBi7ZwJMgAmkAAEWhxTIZE4iE2ACTMAoARYHo8TYPRNgAkwgBQhgCqSRkxh/AtjQ0HAfIj4MAMsBYAIiqvE3IyVj7CaijwGgxuPx/LKysnJ/SlLgREdNgMUhaoQcgD+Burq62Q6H4xcAsNT/Op/HnwARCUR8tq2t7c/XrVvXHn8LOEY7E2BxsHPuWcz2xsbGuxDxNQAYazHTUtocItrr9XrvXbly5fmUBsGJN0SA+xwM4WLHwQjU1tZOBoANLAzBCCXuOiLOczgcr1VXV2ckzgqO2W4EWBzslmMWtdflcj2DiHkWNS/lzULEhXl5ed9NeRAMQDcBblbSjYodBiPQ0NCwRFGUd4Pd5+vWIEBEvZqmzaqoqDhtDYvYCisT4JqDlXPHJrYpiiJHJfFhcQKImKYoyiMWN5PNswgBFgeLZISdzSCiUjvbn0q2K4qyJpXSy2mNnACLQ+Ts2Gc/AUSUndF82IAAEc20gZlsogUIsDhYIBOSwAQeumqTTETE8TYxlc1MMAEWhwRnAEfPBJgAE7AiARYHK+YK28QEmAATSDABFocEZwBHzwSYABOwIgEWByvmCtvEBJgAE0gwARaHBGcAR88EmAATsCIBFgcr5grbxASYABNIMAEWhwRnAEfPBJgAE7AiARYHK+YK28QEmAATSDABXngvjhnQ1NREcYyOo2ICKUWgpKSE32cm5jjXHEyEyUExASbABJKFAItDsuQkp4MJMAEmYCIBFgcTYXJQTIAJMIFkIcDikCw5yelgAkyACZhIgMXBRJgcFBNgAkwgWQiwOCRLTnI6mAATYAImEmBxMBEmB8UEmAATSBYCLA7JkpOcDibABJiAiQRYHEyEyUExASbABJKFAItDsuQkp4MJMAEmYCIBFgcTYXJQTIAJMIFkIcDikCw5yelgAkyACZhIgMXBRJgcFBNgAkwgWQiwOCRLTnI6mAATYAImEmBxMBEmB8UEmAATSBYCLA7JkpOcDibABJiAiQRYHEyEyUExASbABJKFAItDsuQkp4MJMAEmYCIBFgcTYXJQTIAJMIFkIcDikCw5yelgAkyACZhIgMXBRJgcFBNgAkwgWQiwOCRLTnI6mAATYAImEmBxMBEmB8UEmAATSBYCLA7JkpOcDibABJiAiQRYHEyEyUExASbABJKFAItDsuQkp4MJMAEmwASYABNgAkyACcSSwP8Hl5Mo7GjDx08AAAAASUVORK5CYII=",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })), __jsx("path", {
    d: "m0 0h391v361h-391z",
    fill: "url(#a)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }))), __jsx("p", {
    className: "text-xl max-w-sm py-4 italic font-bold mx-auto text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "What\u2019s the qualifying process like? What steps does Inside Sales go through"), __jsx("p", {
    className: "text-xl max-w-sm py-4 italic font-bold mx-auto text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "What information is gathered and what criteria qualifies a lead?"), __jsx("div", {
    class: "mx-auto max-w-xs my-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("img", {
    src: "/media/image-03.png",
    width: "100%",
    height: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }))), __jsx("div", {
    className: "w-full lg:w-6/12 px-10 py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("h2", {
    className: "text-2xl font-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Digital marketing generates leads by targeting prospects with specific content. Leads can also be generated from referrals."), __jsx("p", {
    className: "text-base p-10 leading-loose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Salespeople get referrals. The Operations team might send a referral. People call into Sodexo phone numbers with inquiries. All these inbound referrals and calls are also types of leads that need to be qualified to see if they are worth following up. The role of Cindy in MSDC\u2019s Inside Sales group is to receive and qualify leads. Cindy takes leads that are considered a \u201Cmarketing qualified lead\u201D and works each to become a \u201Csales qualified lead\u201D. Cindy pursues the lead in multiple ways to learn more about the potential opportunity.  She might call on the phone, send an email, or ship a small gift to their office. For example, we might have a referral for a hospital, and all we know is that their food contract is ending soon. That's a marketing qualified lead (MQL), but it's not yet a sales qualified lead (SQL). Cindy talks to a number of people at the hospital, including the purchasing department and the lead people in charge of the potential contract. She does web searches, uses LinkedIn, sales navigator, and CRM to find out more about the people involved and set up a meeting. She works the lead until she qualifies it using the BANT method: confirming the Budget, the Authority to purchase, the Need for purchase, and the Timeline to purchase. Filling out the BANT on the opportunity requires a lot of time, a lot of persistence, and asking a lot of questions. When the BANT is confirmed, the marketing qualified lead (MQL) becomes a sales qualified lead (SQL)."))), __jsx("section", {
    className: "flex flex-col lg:flex-row w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("div", {
    className: "w-full lg:w-6/12 p-10 bg-gray-200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("h3", {
    className: "text-4xl py-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Sample Conversation"), __jsx("div", {
    className: "mx-auto max-w-md my-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("img", {
    src: "/media/image-04.png",
    width: "100%",
    height: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  })), __jsx("p", {
    className: "text-xl max-w-sm py-4 italic font-bold mx-auto text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "What's the value of answering the BANT questions up front, before the lead is passed to Field Sales?"), __jsx("div", {
    class: "mx-auto max-w-xs my-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("img", {
    src: "/media/image-05.png",
    width: "100%",
    height: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }))), __jsx("div", {
    className: "w-full lg:w-6/12 px-10 py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("p", {
    className: "text-base p-10 leading-loose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Hi Bill, I understand you're the procurement manager at City Hospital. I would like to talk with you a little bit about Sodexo and the value we might be able to provide you. By the way, how big is your operation? What's your spend on outsource services a year in your cafeteria? [Budget] I understand your contract is ending in two months. Is that right? [Time] Tell us a little bit beyond cafeterias. Is there patient dining in the rooms? Do you have any brands on site? I see a couple in my data here. [Need] You're the procurement manager. Does that mean we should be talking to you about these decisions? [Authority] Oh, you\u2019re the assistant and Judy\u2019s the manager. Is it okay if we reach out to her? Sure, if you can set up a meeting, that would be great."))), __jsx("section", {
    className: "flex flex-col lg:flex-row w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx("div", {
    className: "w-full lg:w-6/12 p-10 bg-gray-200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("h3", {
    className: "text-4xl py-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Handing Off to Field Sales"), __jsx("div", {
    className: "flex justify-center mx-auto max-w-xs my-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("img", {
    src: "/media/image-06.png",
    width: "70%",
    height: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  })), __jsx("p", {
    className: "text-xl max-w-sm py-4 italic font-bold mx-auto text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "How does the new process help field sales?"), __jsx("p", {
    className: "text-xl max-w-sm py-4 italic font-bold mx-auto text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "How can he take advantage of the extra support?")), __jsx("div", {
    className: "w-full lg:w-6/12 px-10 py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx("h2", {
    className: "text-2xl font-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "At this point, Cindy has begun the process of filling out the BANT, determining budget, authority, need, and time. And she\u2019s set up a meeting for the Field Sales representative."), __jsx("p", {
    className: "text-base p-10 leading-loose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Hi Bill, I understand you're the procurement manager at City Hospital. I would like to talk with you a little bit about Sodexo and the value we might be able to provide you. By the way, how big is your operation? What's your spend on outsource services a year in your cafeteria? [Budget] I understand your contract is ending in two months. Is that right? [Time] Tell us a little bit beyond cafeterias. Is there patient dining in the rooms? Do you have any brands on site? I see a couple in my data here. [Need] You're the procurement manager. Does that mean we should be talking to you about these decisions? [Authority] Oh, you\u2019re the assistant and Judy\u2019s the manager. Is it okay if we reach out to her? Sure, if you can set up a meeting, that would be great."))), __jsx("section", {
    className: "flex flex-col lg:flex-row w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx("div", {
    className: "w-full lg:w-6/12 p-10 bg-gray-200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx("h3", {
    className: "text-4xl py-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "Salesforce CRM"), __jsx("p", {
    className: "text-xl max-w-sm py-4 italic font-bold mx-auto text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "How do we keep track of all that new data?"), __jsx("div", {
    className: "mx-auto max-w-md my-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx("img", {
    src: "/media/image-07.png",
    width: "100%",
    height: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  })), __jsx("p", {
    className: "text-xl max-w-sm py-4 italic font-bold mx-auto text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "How do consistently share and build on what we\u2019ve learned?")), __jsx("div", {
    className: "w-full lg:w-6/12 px-10 py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx("p", {
    className: "text-base p-10 leading-loose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "We\u2019re collecting and generating more and more information on each prospective client than ever before while also planning wider and deeper collaboration on individual leads and clients, across teams. The challenge will be supporting this new way of working. A critical component of the sales ecosystem is a state-of-the-art customer relationship management platform (CRM). All the priority lists and targeting, all the interactions, as well as the MSDC lead generation and lead qualification activities, will be recorded and tracked in Salesforce. That means that all of the relevant information that we have on the prospective clients, including all the interactions initiated and managed by MSDC, are available to the Field Sales team as soon as the lead is handed over. No one has to wonder about who talked to whom, what the BANT is, who the players are \u2026all of it is recorded in Salesforce. Salesforce then continues to be the CRM platform for all interactions driven by the field Sales Team, up to signing the contract and beyond. It ties together all the touch points with potential and existing clients. Salesforce is the key enabler of the Sales and Marketing Ecosystem and will be instrumental to our growth and our future sales successes.")))));
}

/***/ }),

/***/ "./styles/application.scss":
/*!*********************************!*\
  !*** ./styles/application.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 5:
/*!***************************************************************!*\
  !*** multi ./pages/lead-generation-and-lead-qualification.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/john/Desktop/misc/a8/pages/lead-generation-and-lead-qualification.js */"./pages/lead-generation-and-lead-qualification.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=lead-generation-and-lead-qualification.js.map
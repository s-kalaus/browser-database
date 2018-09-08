(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["browser-database"] = factory();
	else
		root["browser-database"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/browser-database.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "./node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "./node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./src/browser-database.ts":
/*!*********************************!*\
  !*** ./src/browser-database.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var class_1 = __webpack_require__(/*! ./class */ "./src/class/index.ts");
window.browserDatabase = new class_1.BrowserDatabase(window.BROWSER_DATABASE_OPTIONS || {});


/***/ }),

/***/ "./src/class/browser-database.ts":
/*!***************************************!*\
  !*** ./src/class/browser-database.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(/*! ./index */ "./src/class/index.ts");
/*
 * Main library class
 */
var BrowserDatabase = /** @class */ (function () {
    /*
     * Constructor
     *
     * @param options Options for storage
     */
    function BrowserDatabase(options) {
        if (options === void 0) { options = {}; }
        /*
         * Database change subscriptions
         */
        this.subscriptions = [];
        /*
         * Storage types
         */
        this.storages = {
            localStorage: index_1.LocalStorage
        };
        /*
         * Storage reference
         */
        this.storage = null;
        if (BrowserDatabase.instance) {
            return BrowserDatabase.instance;
        }
        this.storage = new this.storages[options.storageType || 'localStorage']({
            storageKey: options.storageKey || 'browser-database'
        });
        BrowserDatabase.instance = this;
    }
    /*
     * Get list of records
     *
     * @param modelName Name of model
     */
    BrowserDatabase.prototype.getAll = function (modelName) {
        return this.storage.getAll(modelName);
    };
    /*
     * Get single record by id
     *
     * @param modelName Name of model
     * @param id ID of primary key
     */
    BrowserDatabase.prototype.getById = function (modelName, id) {
        return this.storage.getById(modelName, id);
    };
    /*
     * Insert new record
     *
     * @param modelName Name of model
     * @param row Row data
     */
    BrowserDatabase.prototype.insert = function (modelName, row) {
        var _this = this;
        return this.storage.insert(modelName, row)
            .then(function (theRow) { return _this.notify(modelName, 'insert', theRow); });
    };
    /*
     * Update existing record
     *
     * @param modelName Name of model
     * @param id ID of primary key
     * @param row Row data
     */
    BrowserDatabase.prototype.update = function (modelName, id, row) {
        var _this = this;
        return this.storage.update(modelName, id, row)
            .then(function (theRow) { return _this.notify(modelName, 'update', theRow); });
    };
    /*
     * Remove existing record
     *
     * @param modelName Name of model
     * @param id ID of primary key
     */
    BrowserDatabase.prototype.remove = function (modelName, id) {
        var _this = this;
        return this.storage.remove(modelName, id)
            .then(function (theRow) { return _this.notify(modelName, 'remove', theRow); });
    };
    /*
     * Notify subscribers about event
     *
     * @param modelName Name of model
     * @param action Action name
     * @param result Result row
     */
    BrowserDatabase.prototype.notify = function (modelName, action, result) {
        this.subscriptions.forEach(function (subscription) { return subscription(modelName, action, result); });
        return result;
    };
    /*
     * Add subscription
     *
     * @param callback Subscription callback
     */
    BrowserDatabase.prototype.subscribe = function (callback) {
        var _this = this;
        this.subscriptions.push(callback);
        return function () { return _this.subscriptions = _this.subscriptions.filter(function (subscription) { return subscription !== callback; }); };
    };
    /*
     * Existing instance for singleton
     */
    BrowserDatabase.instance = null;
    return BrowserDatabase;
}());
exports.BrowserDatabase = BrowserDatabase;


/***/ }),

/***/ "./src/class/index.ts":
/*!****************************!*\
  !*** ./src/class/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./local-storage */ "./src/class/local-storage.ts"));
__export(__webpack_require__(/*! ./storage */ "./src/class/storage.ts"));
__export(__webpack_require__(/*! ./browser-database */ "./src/class/browser-database.ts"));


/***/ }),

/***/ "./src/class/local-storage.ts":
/*!************************************!*\
  !*** ./src/class/local-storage.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var storage_1 = __webpack_require__(/*! ./storage */ "./src/class/storage.ts");
/*
 * Local Storage implementation
 */
var LocalStorage = /** @class */ (function (_super) {
    __extends(LocalStorage, _super);
    function LocalStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
     * Saves data to storage
     */
    LocalStorage.prototype.save = function () {
        try {
            window.localStorage.setItem(this.storageKey, JSON.stringify(this.data));
            return Promise.resolve(this.data);
        }
        catch (e) {
            return Promise.reject(new Error('Error saving to localStorage'));
        }
    };
    /*
     * Loads data from storage
     */
    LocalStorage.prototype.load = function () {
        try {
            this.data = JSON.parse(window.localStorage.getItem(this.storageKey) || '{}');
            return Promise.resolve(this.data);
        }
        catch (e) {
            return Promise.reject('Error reading from localStorage');
        }
    };
    return LocalStorage;
}(storage_1.Storage));
exports.LocalStorage = LocalStorage;


/***/ }),

/***/ "./src/class/storage.ts":
/*!******************************!*\
  !*** ./src/class/storage.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var uuid = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/*
 * Storage implementation
 */
var Storage = /** @class */ (function () {
    /*
     * Constructor
     *
     * @param options Options for storage
     */
    function Storage(options) {
        if (options === void 0) { options = {}; }
        /*
         * Local data holder
         */
        this.data = {};
        this.storageKey = options.storageKey || 'browser-database';
        this.load();
    }
    /*
     * Get list of records
     *
     * @param modelName Name of model
     */
    Storage.prototype.getAll = function (modelName) {
        var _this = this;
        this.ensureModel(modelName);
        var ret = Object.keys(this.data[modelName]).map(function (id) { return Object.assign({ id: id }, _this.data[modelName][id]); });
        return Promise.resolve(ret);
    };
    /*
     * Get single record by id
     *
     * @param modelName Name of model
     * @param id ID of primary key
     */
    Storage.prototype.getById = function (modelName, id) {
        this.ensureModel(modelName);
        var row = this.data[modelName][id];
        if (row === undefined) {
            return Promise.reject(new Error('Item Not Found'));
        }
        var ret = Object.assign({ id: id }, this.data[modelName][id]);
        return Promise.resolve(ret);
    };
    /*
     * Insert new record
     *
     * @param modelName Name of model
     * @param row Row data
     */
    Storage.prototype.insert = function (modelName, row) {
        var _this = this;
        this.ensureModel(modelName);
        var id = row.id || uuid.v4();
        delete row.id;
        this.data[modelName][id] = row;
        return this.save()
            .then(function () { return _this.getById(modelName, id); });
    };
    /*
     * Update existing record
     *
     * @param modelName Name of model
     * @param id ID of primary key
     * @param row Row data
     */
    Storage.prototype.update = function (modelName, id, row) {
        var _this = this;
        this.ensureModel(modelName);
        var theRow = this.data[modelName][id];
        if (theRow === undefined) {
            return Promise.reject(new Error('Item Not Found'));
        }
        Object.assign(theRow, row);
        return this.save()
            .then(function () { return _this.getById(modelName, id); });
    };
    /*
     * Remove existing record
     *
     * @param modelName Name of model
     * @param id ID of primary key
     */
    Storage.prototype.remove = function (modelName, id) {
        this.ensureModel(modelName);
        var theRow = this.data[modelName][id];
        if (theRow === undefined) {
            return Promise.reject(new Error('Item Not Found'));
        }
        delete this.data[modelName][id];
        return this.save()
            .then(function () { return Promise.resolve(theRow); });
    };
    /*
     * Saves data to storage
     */
    Storage.prototype.save = function () {
        return Promise.resolve(this.data);
    };
    /*
     * Loads data from storage
     */
    Storage.prototype.load = function () {
        return Promise.resolve(this.data);
    };
    /*
     * Checks if model exists and creates it if not
     *
     * @param modelName Name of model
     */
    Storage.prototype.ensureModel = function (modelName) {
        if (this.data[modelName] === undefined) {
            this.data[modelName] = {};
        }
    };
    return Storage;
}());
exports.Storage = Storage;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icm93c2VyLWRhdGFiYXNlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9icm93c2VyLWRhdGFiYXNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jyb3dzZXItZGF0YWJhc2UvLi9ub2RlX21vZHVsZXMvdXVpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWRhdGFiYXNlLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzIiwid2VicGFjazovL2Jyb3dzZXItZGF0YWJhc2UvLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1kYXRhYmFzZS8uL25vZGVfbW9kdWxlcy91dWlkL3YxLmpzIiwid2VicGFjazovL2Jyb3dzZXItZGF0YWJhc2UvLi9ub2RlX21vZHVsZXMvdXVpZC92NC5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWRhdGFiYXNlLy4vc3JjL2Jyb3dzZXItZGF0YWJhc2UudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1kYXRhYmFzZS8uL3NyYy9jbGFzcy9icm93c2VyLWRhdGFiYXNlLnRzIiwid2VicGFjazovL2Jyb3dzZXItZGF0YWJhc2UvLi9zcmMvY2xhc3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1kYXRhYmFzZS8uL3NyYy9jbGFzcy9sb2NhbC1zdG9yYWdlLnRzIiwid2VicGFjazovL2Jyb3dzZXItZGF0YWJhc2UvLi9zcmMvY2xhc3Mvc3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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O0lBQ0gsd0JBQU0sR0FBTixVQUFPLFNBQWlCLEVBQUUsRUFBbUI7UUFFM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU1QixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXhDLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWhDLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRTthQUNmLElBQUksQ0FBQyxjQUFNLGNBQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxzQkFBSSxHQUFKO1FBRUUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxzQkFBSSxHQUFKO1FBRUUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLDZCQUFXLEdBQW5CLFVBQW9CLFNBQWlCO1FBRW5DLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUM7QUF2SlksMEJBQU8iLCJmaWxlIjoiYnJvd3Nlci1kYXRhYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImJyb3dzZXItZGF0YWJhc2VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiYnJvd3Nlci1kYXRhYmFzZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYnJvd3Nlci1kYXRhYmFzZS50c1wiKTtcbiIsInZhciB2MSA9IHJlcXVpcmUoJy4vdjEnKTtcbnZhciB2NCA9IHJlcXVpcmUoJy4vdjQnKTtcblxudmFyIHV1aWQgPSB2NDtcbnV1aWQudjEgPSB2MTtcbnV1aWQudjQgPSB2NDtcblxubW9kdWxlLmV4cG9ydHMgPSB1dWlkO1xuIiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIC8vIGpvaW4gdXNlZCB0byBmaXggbWVtb3J5IGlzc3VlIGNhdXNlZCBieSBjb25jYXRlbmF0aW9uOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMTc1I2M0XG4gIHJldHVybiAoW2J0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sIFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV1dKS5qb2luKCcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0b1xuLy8gaW1wbGVtZW50YXRpb24uIEFsc28sIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byBvbiBJRTExLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9ICh0eXBlb2YoY3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YobXNDcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cubXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pKTtcblxuaWYgKGdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59IGVsc2Uge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hdGhSTkcoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG4vLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbnZhciBfbm9kZUlkO1xudmFyIF9jbG9ja3NlcTtcblxuLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG52YXIgX2xhc3RNU2VjcyA9IDA7XG52YXIgX2xhc3ROU2VjcyA9IDA7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBbXTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTtcblxuICAvLyBub2RlIGFuZCBjbG9ja3NlcSBuZWVkIHRvIGJlIGluaXRpYWxpemVkIHRvIHJhbmRvbSB2YWx1ZXMgaWYgdGhleSdyZSBub3RcbiAgLy8gc3BlY2lmaWVkLiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50XG4gIC8vIHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcbiAgaWYgKG5vZGUgPT0gbnVsbCB8fCBjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgdmFyIHNlZWRCeXRlcyA9IHJuZygpO1xuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuICAgICAgbm9kZSA9IF9ub2RlSWQgPSBbXG4gICAgICAgIHNlZWRCeXRlc1swXSB8IDB4MDEsXG4gICAgICAgIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXG4gICAgICBdO1xuICAgIH1cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH1cblxuICAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcbiAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxO1xuXG4gIC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcbiAgdmFyIGR0ID0gKG1zZWNzIC0gX2xhc3RNU2VjcykgKyAobnNlY3MgLSBfbGFzdE5TZWNzKS8xMDAwMDtcblxuICAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH1cblxuICAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9XG5cbiAgLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3V1aWQudjEoKTogQ2FuXFwndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWMnKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTtcblxuICAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7XG5cbiAgLy8gYHRpbWVfbG93YFxuICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmO1xuXG4gIC8vIGB0aW1lX21pZGBcbiAgdmFyIHRtaCA9IChtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDApICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmO1xuXG4gIC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7XG5cbiAgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDtcblxuICAvLyBgY2xvY2tfc2VxX2xvd2BcbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmO1xuXG4gIC8vIGBub2RlYFxuICBmb3IgKHZhciBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgPyBidWYgOiBieXRlc1RvVXVpZChiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2MTtcbiIsInZhciBybmcgPSByZXF1aXJlKCcuL2xpYi9ybmcnKTtcbnZhciBieXRlc1RvVXVpZCA9IHJlcXVpcmUoJy4vbGliL2J5dGVzVG9VdWlkJyk7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuXG4gIGlmICh0eXBlb2Yob3B0aW9ucykgPT0gJ3N0cmluZycpIHtcbiAgICBidWYgPSBvcHRpb25zID09PSAnYmluYXJ5JyA/IG5ldyBBcnJheSgxNikgOiBudWxsO1xuICAgIG9wdGlvbnMgPSBudWxsO1xuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuXG4gIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICBpZiAoYnVmKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IDE2OyArK2lpKSB7XG4gICAgICBidWZbaSArIGlpXSA9IHJuZHNbaWldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWYgfHwgYnl0ZXNUb1V1aWQocm5kcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjQ7XG4iLCJpbXBvcnQge0Jyb3dzZXJEYXRhYmFzZX0gZnJvbSAnLi9jbGFzcyc7XG5cbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xuXG53aW5kb3cuYnJvd3NlckRhdGFiYXNlID0gbmV3IEJyb3dzZXJEYXRhYmFzZSh3aW5kb3cuQlJPV1NFUl9EQVRBQkFTRV9PUFRJT05TIHx8IHt9KTtcbiIsImltcG9ydCB7SUJyb3dzZXJEYXRhYmFzZU9wdGlvbnMsIElTdG9yYWdlfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHtMb2NhbFN0b3JhZ2V9IGZyb20gJy4vaW5kZXgnO1xuXG4vKlxuICogTWFpbiBsaWJyYXJ5IGNsYXNzXG4gKi9cbmV4cG9ydCBjbGFzcyBCcm93c2VyRGF0YWJhc2Uge1xuXG4gIC8qXG4gICAqIEV4aXN0aW5nIGluc3RhbmNlIGZvciBzaW5nbGV0b25cbiAgICovXG4gIHN0YXRpYyBpbnN0YW5jZTogYW55ID0gbnVsbDtcblxuICAvKlxuICAgKiBEYXRhYmFzZSBjaGFuZ2Ugc3Vic2NyaXB0aW9uc1xuICAgKi9cbiAgc3Vic2NyaXB0aW9uczogYW55W10gPSBbXTtcblxuICAvKlxuICAgKiBTdG9yYWdlIHR5cGVzXG4gICAqL1xuICBzdG9yYWdlczoge1trZXk6IHN0cmluZ106IGFueX0gPSB7XG4gICAgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VcbiAgfTtcblxuICAvKlxuICAgKiBTdG9yYWdlIHJlZmVyZW5jZVxuICAgKi9cbiAgc3RvcmFnZTogSVN0b3JhZ2UgfCBudWxsID0gbnVsbDtcblxuICAvKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIGZvciBzdG9yYWdlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJQnJvd3NlckRhdGFiYXNlT3B0aW9ucyA9IHt9KSB7XG5cbiAgICBpZiAoQnJvd3NlckRhdGFiYXNlLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gQnJvd3NlckRhdGFiYXNlLmluc3RhbmNlO1xuICAgIH1cblxuICAgIHRoaXMuc3RvcmFnZSA9IG5ldyB0aGlzLnN0b3JhZ2VzW29wdGlvbnMuc3RvcmFnZVR5cGUgfHwgJ2xvY2FsU3RvcmFnZSddKHtcbiAgICAgIHN0b3JhZ2VLZXk6IG9wdGlvbnMuc3RvcmFnZUtleSB8fCAnYnJvd3Nlci1kYXRhYmFzZSdcbiAgICB9KTtcblxuICAgIEJyb3dzZXJEYXRhYmFzZS5pbnN0YW5jZSA9IHRoaXM7XG4gIH1cblxuICAvKlxuICAgKiBHZXQgbGlzdCBvZiByZWNvcmRzXG4gICAqXG4gICAqIEBwYXJhbSBtb2RlbE5hbWUgTmFtZSBvZiBtb2RlbFxuICAgKi9cbiAgZ2V0QWxsKG1vZGVsTmFtZTogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcblxuICAgIHJldHVybiAoPElTdG9yYWdlPnRoaXMuc3RvcmFnZSkuZ2V0QWxsKG1vZGVsTmFtZSk7XG4gIH1cblxuICAvKlxuICAgKiBHZXQgc2luZ2xlIHJlY29yZCBieSBpZFxuICAgKlxuICAgKiBAcGFyYW0gbW9kZWxOYW1lIE5hbWUgb2YgbW9kZWxcbiAgICogQHBhcmFtIGlkIElEIG9mIHByaW1hcnkga2V5XG4gICAqL1xuICBnZXRCeUlkKG1vZGVsTmFtZTogc3RyaW5nLCBpZDogbnVtYmVyIHwgc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcblxuICAgIHJldHVybiAoPElTdG9yYWdlPnRoaXMuc3RvcmFnZSkuZ2V0QnlJZChtb2RlbE5hbWUsIGlkKTtcbiAgfVxuXG4gIC8qXG4gICAqIEluc2VydCBuZXcgcmVjb3JkXG4gICAqXG4gICAqIEBwYXJhbSBtb2RlbE5hbWUgTmFtZSBvZiBtb2RlbFxuICAgKiBAcGFyYW0gcm93IFJvdyBkYXRhXG4gICAqL1xuICBpbnNlcnQobW9kZWxOYW1lOiBzdHJpbmcsIHJvdzogb2JqZWN0KTogUHJvbWlzZTxvYmplY3Q+IHtcblxuICAgIHJldHVybiAoPElTdG9yYWdlPnRoaXMuc3RvcmFnZSkuaW5zZXJ0KG1vZGVsTmFtZSwgcm93KVxuICAgICAgLnRoZW4oKHRoZVJvdykgPT4gdGhpcy5ub3RpZnkobW9kZWxOYW1lLCAnaW5zZXJ0JywgdGhlUm93KSk7XG4gIH1cblxuICAvKlxuICAgKiBVcGRhdGUgZXhpc3RpbmcgcmVjb3JkXG4gICAqXG4gICAqIEBwYXJhbSBtb2RlbE5hbWUgTmFtZSBvZiBtb2RlbFxuICAgKiBAcGFyYW0gaWQgSUQgb2YgcHJpbWFyeSBrZXlcbiAgICogQHBhcmFtIHJvdyBSb3cgZGF0YVxuICAgKi9cbiAgdXBkYXRlKG1vZGVsTmFtZTogc3RyaW5nLCBpZDogbnVtYmVyIHwgc3RyaW5nLCByb3c6IG9iamVjdCk6IFByb21pc2U8b2JqZWN0PiB7XG5cbiAgICByZXR1cm4gKDxJU3RvcmFnZT50aGlzLnN0b3JhZ2UpLnVwZGF0ZShtb2RlbE5hbWUsIGlkLCByb3cpXG4gICAgICAudGhlbigodGhlUm93KSA9PiB0aGlzLm5vdGlmeShtb2RlbE5hbWUsICd1cGRhdGUnLCB0aGVSb3cpKTtcbiAgfVxuXG4gIC8qXG4gICAqIFJlbW92ZSBleGlzdGluZyByZWNvcmRcbiAgICpcbiAgICogQHBhcmFtIG1vZGVsTmFtZSBOYW1lIG9mIG1vZGVsXG4gICAqIEBwYXJhbSBpZCBJRCBvZiBwcmltYXJ5IGtleVxuICAgKi9cbiAgcmVtb3ZlKG1vZGVsTmFtZTogc3RyaW5nLCBpZDogbnVtYmVyIHwgc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcblxuICAgIHJldHVybiAoPElTdG9yYWdlPnRoaXMuc3RvcmFnZSkucmVtb3ZlKG1vZGVsTmFtZSwgaWQpXG4gICAgICAudGhlbigodGhlUm93KSA9PiB0aGlzLm5vdGlmeShtb2RlbE5hbWUsICdyZW1vdmUnLCB0aGVSb3cpKTtcbiAgfVxuXG4gIC8qXG4gICAqIE5vdGlmeSBzdWJzY3JpYmVycyBhYm91dCBldmVudFxuICAgKlxuICAgKiBAcGFyYW0gbW9kZWxOYW1lIE5hbWUgb2YgbW9kZWxcbiAgICogQHBhcmFtIGFjdGlvbiBBY3Rpb24gbmFtZVxuICAgKiBAcGFyYW0gcmVzdWx0IFJlc3VsdCByb3dcbiAgICovXG4gIG5vdGlmeShtb2RlbE5hbWU6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcsIHJlc3VsdDogb2JqZWN0KTogb2JqZWN0IHtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKChzdWJzY3JpcHRpb24pID0+IHN1YnNjcmlwdGlvbihtb2RlbE5hbWUsIGFjdGlvbiwgcmVzdWx0KSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLypcbiAgICogQWRkIHN1YnNjcmlwdGlvblxuICAgKlxuICAgKiBAcGFyYW0gY2FsbGJhY2sgU3Vic2NyaXB0aW9uIGNhbGxiYWNrXG4gICAqL1xuICBzdWJzY3JpYmUoY2FsbGJhY2s6IGFueSk6IGFueSB7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChjYWxsYmFjayk7XG5cbiAgICByZXR1cm4gKCkgPT4gdGhpcy5zdWJzY3JpcHRpb25zID0gdGhpcy5zdWJzY3JpcHRpb25zLmZpbHRlcigoc3Vic2NyaXB0aW9uKSA9PiBzdWJzY3JpcHRpb24gIT09IGNhbGxiYWNrKTtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9sb2NhbC1zdG9yYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vc3RvcmFnZSc7XG5leHBvcnQgKiBmcm9tICcuL2Jyb3dzZXItZGF0YWJhc2UnO1xuIiwiaW1wb3J0IHtTdG9yYWdlfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcblxuLypcbiAqIExvY2FsIFN0b3JhZ2UgaW1wbGVtZW50YXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZSBleHRlbmRzIFN0b3JhZ2Uge1xuXG4gIC8qXG4gICAqIFNhdmVzIGRhdGEgdG8gc3RvcmFnZVxuICAgKi9cbiAgc2F2ZSgpOiBQcm9taXNlPG9iamVjdD4ge1xuXG4gICAgdHJ5IHtcblxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ0Vycm9yIHNhdmluZyB0byBsb2NhbFN0b3JhZ2UnKSk7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogTG9hZHMgZGF0YSBmcm9tIHN0b3JhZ2VcbiAgICovXG4gIGxvYWQoKTogUHJvbWlzZTxvYmplY3Q+IHtcblxuICAgIHRyeSB7XG5cbiAgICAgIHRoaXMuZGF0YSA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuc3RvcmFnZUtleSkgfHwgJ3t9Jyk7XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnRXJyb3IgcmVhZGluZyBmcm9tIGxvY2FsU3RvcmFnZScpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgdXVpZCBmcm9tICd1dWlkJztcblxuaW1wb3J0IHtJU3RvcmFnZU9wdGlvbnMsIElTdG9yYWdlfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuXG4vKlxuICogU3RvcmFnZSBpbXBsZW1lbnRhdGlvblxuICovXG5leHBvcnQgY2xhc3MgU3RvcmFnZSBpbXBsZW1lbnRzIElTdG9yYWdlIHtcblxuICAvKlxuICAgKiBMb2NhbCBkYXRhIGhvbGRlclxuICAgKi9cbiAgZGF0YToge1ttb2RlbE5hbWU6IHN0cmluZ106IGFueX0gPSB7fTtcblxuICAvKlxuICAgKiBTdG9yYWdlIGtleSBob2xkZXJcbiAgICovXG4gIHN0b3JhZ2VLZXk6IHN0cmluZztcblxuICAvKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIGZvciBzdG9yYWdlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJU3RvcmFnZU9wdGlvbnMgPSB7fSkge1xuXG4gICAgdGhpcy5zdG9yYWdlS2V5ID0gb3B0aW9ucy5zdG9yYWdlS2V5IHx8ICdicm93c2VyLWRhdGFiYXNlJztcblxuICAgIHRoaXMubG9hZCgpO1xuICB9XG5cbiAgLypcbiAgICogR2V0IGxpc3Qgb2YgcmVjb3Jkc1xuICAgKlxuICAgKiBAcGFyYW0gbW9kZWxOYW1lIE5hbWUgb2YgbW9kZWxcbiAgICovXG4gIGdldEFsbChtb2RlbE5hbWU6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG5cbiAgICB0aGlzLmVuc3VyZU1vZGVsKG1vZGVsTmFtZSk7XG5cbiAgICBjb25zdCByZXQgPSBPYmplY3Qua2V5cyh0aGlzLmRhdGFbbW9kZWxOYW1lXSkubWFwKChpZCkgPT4gT2JqZWN0LmFzc2lnbih7aWR9LCB0aGlzLmRhdGFbbW9kZWxOYW1lXVtpZF0pKTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmV0KTtcbiAgfVxuXG4gIC8qXG4gICAqIEdldCBzaW5nbGUgcmVjb3JkIGJ5IGlkXG4gICAqXG4gICAqIEBwYXJhbSBtb2RlbE5hbWUgTmFtZSBvZiBtb2RlbFxuICAgKiBAcGFyYW0gaWQgSUQgb2YgcHJpbWFyeSBrZXlcbiAgICovXG4gIGdldEJ5SWQobW9kZWxOYW1lOiBzdHJpbmcsIGlkOiBudW1iZXIgfCBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuXG4gICAgdGhpcy5lbnN1cmVNb2RlbChtb2RlbE5hbWUpO1xuXG4gICAgY29uc3Qgcm93ID0gdGhpcy5kYXRhW21vZGVsTmFtZV1baWRdO1xuXG4gICAgaWYgKHJvdyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdJdGVtIE5vdCBGb3VuZCcpKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXQgPSBPYmplY3QuYXNzaWduKHtpZH0sIHRoaXMuZGF0YVttb2RlbE5hbWVdW2lkXSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJldCk7XG4gIH1cblxuICAvKlxuICAgKiBJbnNlcnQgbmV3IHJlY29yZFxuICAgKlxuICAgKiBAcGFyYW0gbW9kZWxOYW1lIE5hbWUgb2YgbW9kZWxcbiAgICogQHBhcmFtIHJvdyBSb3cgZGF0YVxuICAgKi9cbiAgaW5zZXJ0KG1vZGVsTmFtZTogc3RyaW5nLCByb3c6IG9iamVjdCk6IFByb21pc2U8b2JqZWN0PiB7XG5cbiAgICB0aGlzLmVuc3VyZU1vZGVsKG1vZGVsTmFtZSk7XG5cbiAgICBjb25zdCBpZCA9IChyb3cgYXMgYW55KS5pZCB8fCB1dWlkLnY0KCk7XG5cbiAgICBkZWxldGUgKHJvdyBhcyBhbnkpLmlkO1xuXG4gICAgdGhpcy5kYXRhW21vZGVsTmFtZV1baWRdID0gcm93O1xuXG4gICAgcmV0dXJuIHRoaXMuc2F2ZSgpXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmdldEJ5SWQobW9kZWxOYW1lLCBpZCkpO1xuICB9XG5cbiAgLypcbiAgICogVXBkYXRlIGV4aXN0aW5nIHJlY29yZFxuICAgKlxuICAgKiBAcGFyYW0gbW9kZWxOYW1lIE5hbWUgb2YgbW9kZWxcbiAgICogQHBhcmFtIGlkIElEIG9mIHByaW1hcnkga2V5XG4gICAqIEBwYXJhbSByb3cgUm93IGRhdGFcbiAgICovXG4gIHVwZGF0ZShtb2RlbE5hbWU6IHN0cmluZywgaWQ6IG51bWJlciB8IHN0cmluZywgcm93OiBvYmplY3QpOiBQcm9taXNlPG9iamVjdD4ge1xuXG4gICAgdGhpcy5lbnN1cmVNb2RlbChtb2RlbE5hbWUpO1xuXG4gICAgY29uc3QgdGhlUm93ID0gdGhpcy5kYXRhW21vZGVsTmFtZV1baWRdO1xuXG4gICAgaWYgKHRoZVJvdyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdJdGVtIE5vdCBGb3VuZCcpKTtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKHRoZVJvdywgcm93KTtcblxuICAgIHJldHVybiB0aGlzLnNhdmUoKVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5nZXRCeUlkKG1vZGVsTmFtZSwgaWQpKTtcbiAgfVxuXG4gIC8qXG4gICAqIFJlbW92ZSBleGlzdGluZyByZWNvcmRcbiAgICpcbiAgICogQHBhcmFtIG1vZGVsTmFtZSBOYW1lIG9mIG1vZGVsXG4gICAqIEBwYXJhbSBpZCBJRCBvZiBwcmltYXJ5IGtleVxuICAgKi9cbiAgcmVtb3ZlKG1vZGVsTmFtZTogc3RyaW5nLCBpZDogbnVtYmVyIHwgc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcblxuICAgIHRoaXMuZW5zdXJlTW9kZWwobW9kZWxOYW1lKTtcblxuICAgIGNvbnN0IHRoZVJvdyA9IHRoaXMuZGF0YVttb2RlbE5hbWVdW2lkXTtcblxuICAgIGlmICh0aGVSb3cgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignSXRlbSBOb3QgRm91bmQnKSk7XG4gICAgfVxuXG4gICAgZGVsZXRlIHRoaXMuZGF0YVttb2RlbE5hbWVdW2lkXTtcblxuICAgIHJldHVybiB0aGlzLnNhdmUoKVxuICAgICAgLnRoZW4oKCkgPT4gUHJvbWlzZS5yZXNvbHZlKHRoZVJvdykpO1xuICB9XG5cbiAgLypcbiAgICogU2F2ZXMgZGF0YSB0byBzdG9yYWdlXG4gICAqL1xuICBzYXZlKCk6IFByb21pc2U8b2JqZWN0PiB7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKlxuICAgKiBMb2FkcyBkYXRhIGZyb20gc3RvcmFnZVxuICAgKi9cbiAgbG9hZCgpOiBQcm9taXNlPG9iamVjdD4ge1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmRhdGEpO1xuICB9XG5cbiAgLypcbiAgICogQ2hlY2tzIGlmIG1vZGVsIGV4aXN0cyBhbmQgY3JlYXRlcyBpdCBpZiBub3RcbiAgICpcbiAgICogQHBhcmFtIG1vZGVsTmFtZSBOYW1lIG9mIG1vZGVsXG4gICAqL1xuICBwcml2YXRlIGVuc3VyZU1vZGVsKG1vZGVsTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cbiAgICBpZiAodGhpcy5kYXRhW21vZGVsTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kYXRhW21vZGVsTmFtZV0gPSB7fTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
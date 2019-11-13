/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/index_unit_test.ts":
/*!********************************!*\
  !*** ./src/index_unit_test.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//////////////////////////////////////////////////////////////////////////////////////
// Begin - UnitTest
Object.defineProperty(exports, "__esModule", { value: true });
var player2_1 = __webpack_require__(/*! ./player2/player2 */ "./src/player2/player2.ts");
window.oldmtn = window.oldmtn || {};
// window.oldmtn.AudioPlayer = AudioPlayer;
// window.oldmtn.StreamProtocolDetective = StreamProtocolDetective;
// window.oldmtn.TimeSyncController = TimeSyncController;
// window.oldmtn.URLUtils = URLUtils;
// window.oldmtn.FetchLoader = FetchLoader;
window.oldmtn.Player2 = player2_1.Player2;
module.exports = window.oldmtn;


/***/ }),

/***/ "./src/player2/audio_render_engine.ts":
/*!********************************************!*\
  !*** ./src/player2/audio_render_engine.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// BD
window.jAudioCtx;
window.jSources = [];
// ED
var AudioRenderEngine = /** @class */ (function () {
    function AudioRenderEngine() {
        window.AudioContext = window.AudioContext ||
            window.webkitAudioContext ||
            window.mozAudioContext ||
            window.msAudioContext;
        this.audioContext_ = new window.AudioContext({
            latencyHint: 'interactive',
            sampleRate: 44100
        });
        // BD
        window.jAudioCtx = this.audioContext_;
        // ED
        this.audioStack_ = [];
        this.flagInited_ = false;
        this.nextTime_ = 0;
        this.duration_ = 0;
    }
    AudioRenderEngine.prototype.destroy = function () {
    };
    AudioRenderEngine.prototype.render = function (buffer) {
        var _this = this;
        this.audioContext_.decodeAudioData(buffer)
            .then(function (audioBuffer) {
            // The buffer is an AudioBuffer representing the decodedData (the decoded PCM audio data).
            // Usually you'll want to put the decoded data into an AudioBufferSourceNode, from which it can be played and manipulated how you want.
            console.log("decode audio data success, sampleRate: " + audioBuffer.sampleRate + ", duration: " + audioBuffer.duration);
            _this.audioStack_.push(audioBuffer);
            if (!_this.flagInited_ || _this.audioStack_.length > 5) {
                _this.flagInited_ = true;
                _this.scheduleBuffers();
            }
        })
            .catch(function (err) {
            console.log("decode audio data failed");
        });
    };
    AudioRenderEngine.prototype.play = function () {
        this.audioContext_.resume();
    };
    AudioRenderEngine.prototype.pause = function () {
        this.audioContext_.suspend();
    };
    AudioRenderEngine.prototype.getPosition = function () {
        return this.audioContext_.currentTime;
    };
    AudioRenderEngine.prototype.getDuration = function () {
        return this.duration_;
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    // private functions
    AudioRenderEngine.prototype.scheduleBuffers = function () {
        while (this.audioStack_.length) {
            var buffer = this.audioStack_.shift();
            var source = this.audioContext_.createBufferSource();
            // BD
            window.jSources.push(source);
            // ED
            source.onended = function (e) {
                console.log("onended, timeStamp: " + e.timeStamp);
            };
            source.buffer = buffer;
            source.connect(this.audioContext_.destination);
            if (this.nextTime_ === 0) {
                this.nextTime_ = this.audioContext_.currentTime; /// add 50ms latency to work well across systems - tune this if you like
            }
            source.start(this.nextTime_);
            console.log("scheduleBuffers, currentTime: " + this.audioContext_.currentTime + ", startTime:" + this.nextTime_ + ", duration:" + source.buffer.duration);
            this.nextTime_ += source.buffer.duration; // Make the next buffer wait the length of the last buffer before being played
        }
    };
    return AudioRenderEngine;
}());
exports.AudioRenderEngine = AudioRenderEngine;


/***/ }),

/***/ "./src/player2/mp4_demux_engine.js":
/*!*****************************************!*\
  !*** ./src/player2/mp4_demux_engine.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function assert(condition, message) {
  if (!condition) {
    error(message);
  }
};

/**
 * Represents a 2-dimensional size value. 
 */
var Size = exports.Size = function size() {
  function constructor(w, h) {
    this.w = w;
    this.h = h;
  }
  constructor.prototype = {
    toString: function toString() {
      return "(" + this.w + ", " + this.h + ")";
    },
    getHalfSize: function getHalfSize() {
      return new Size(this.w >>> 1, this.h >>> 1);
    },
    length: function length() {
      return this.w * this.h;
    }
  };
  return constructor;
}();

var Bytestream = exports.Bytestream = function BytestreamClosure() {
  function constructor(arrayBuffer, start, length) {
    this.bytes = new Uint8Array(arrayBuffer);
    this.start = start || 0;
    this.pos = this.start;
    this.end = start + length || this.bytes.length;
  }
  constructor.prototype = {
    get length() {
      return this.end - this.start;
    },
    get position() {
      return this.pos;
    },
    get remaining() {
      return this.end - this.pos;
    },
    readU8Array: function readU8Array(length) {
      if (this.pos > this.end - length) return null;
      var res = this.bytes.subarray(this.pos, this.pos + length);
      this.pos += length;
      return res;
    },
    readU32Array: function readU32Array(rows, cols, names) {
      cols = cols || 1;
      if (this.pos > this.end - rows * cols * 4) return null;
      if (cols == 1) {
        var array = new Uint32Array(rows);
        for (var i = 0; i < rows; i++) {
          array[i] = this.readU32();
        }
        return array;
      } else {
        var array = new Array(rows);
        for (var i = 0; i < rows; i++) {
          var row = null;
          if (names) {
            row = {};
            for (var j = 0; j < cols; j++) {
              row[names[j]] = this.readU32();
            }
          } else {
            row = new Uint32Array(cols);
            for (var j = 0; j < cols; j++) {
              row[j] = this.readU32();
            }
          }
          array[i] = row;
        }
        return array;
      }
    },
    read8: function read8() {
      return this.readU8() << 24 >> 24;
    },
    readU8: function readU8() {
      if (this.pos >= this.end) return null;
      return this.bytes[this.pos++];
    },
    read16: function read16() {
      return this.readU16() << 16 >> 16;
    },
    readU16: function readU16() {
      if (this.pos >= this.end - 1) return null;
      var res = this.bytes[this.pos + 0] << 8 | this.bytes[this.pos + 1];
      this.pos += 2;
      return res;
    },
    read24: function read24() {
      return this.readU24() << 8 >> 8;
    },
    readU24: function readU24() {
      var pos = this.pos;
      var bytes = this.bytes;
      if (pos > this.end - 3) return null;
      var res = bytes[pos + 0] << 16 | bytes[pos + 1] << 8 | bytes[pos + 2];
      this.pos += 3;
      return res;
    },
    peek32: function peek32(advance) {
      var pos = this.pos;
      var bytes = this.bytes;
      if (pos > this.end - 4) return null;
      var res = bytes[pos + 0] << 24 | bytes[pos + 1] << 16 | bytes[pos + 2] << 8 | bytes[pos + 3];
      if (advance) {
        this.pos += 4;
      }
      return res;
    },
    read32: function read32() {
      return this.peek32(true);
    },
    readU32: function readU32() {
      return this.peek32(true) >>> 0;
    },
    read4CC: function read4CC() {
      var pos = this.pos;
      if (pos > this.end - 4) return null;
      var res = "";
      for (var i = 0; i < 4; i++) {
        res += String.fromCharCode(this.bytes[pos + i]);
      }
      this.pos += 4;
      return res;
    },
    readFP16: function readFP16() {
      return this.read32() / 65536;
    },
    readFP8: function readFP8() {
      return this.read16() / 256;
    },
    readISO639: function readISO639() {
      var bits = this.readU16();
      var res = "";
      for (var i = 0; i < 3; i++) {
        var c = bits >>> (2 - i) * 5 & 0x1f;
        res += String.fromCharCode(c + 0x60);
      }
      return res;
    },
    readUTF8: function readUTF8(length) {
      var res = "";
      for (var i = 0; i < length; i++) {
        res += String.fromCharCode(this.readU8());
      }
      return res;
    },
    readPString: function readPString(max) {
      var len = this.readU8();
      assert(len <= max);
      var res = this.readUTF8(len);
      this.reserved(max - len - 1, 0);
      return res;
    },
    skip: function skip(length) {
      this.seek(this.pos + length);
    },
    reserved: function reserved(length, value) {
      for (var i = 0; i < length; i++) {
        assert(this.readU8() == value);
      }
    },
    seek: function seek(index) {
      if (index < 0 || index > this.end) {
        error("Index out of bounds (bounds: [0, " + this.end + "], index: " + index + ").");
      }
      this.pos = index;
    },
    subStream: function subStream(start, length) {
      return new Bytestream(this.bytes.buffer, start, length);
    }
  };
  return constructor;
}();

var PARANOID = true; // Heavy-weight assertions.

/**
 * Reads an mp4 file and constructs a object graph that corresponds to the box/atom
 * structure of the file. Mp4 files are based on the ISO Base Media format, which in
 * turn is based on the Apple Quicktime format. The Quicktime spec is available at:
 * http://developer.apple.com/library/mac/#documentation/QuickTime/QTFF. An mp4 spec
 * also exists, but I cannot find it freely available.
 *
 * Mp4 files contain a tree of boxes (or atoms in Quicktime). The general structure
 * is as follows (in a pseudo regex syntax):
 *
 * Box / Atom Structure:
 *
 * [size type [version flags] field* box*]
 *  <32> <4C>  <--8--> <24->  <-?->  <?>
 *  <------------- box size ------------>
 *
 *  The box size indicates the entire size of the box and its children, we can use it
 *  to skip over boxes that are of no interest. Each box has a type indicated by a
 *  four character code (4C), this describes how the box should be parsed and is also
 *  used as an object key name in the resulting box tree. For example, the expression:
 *  "moov.trak[0].mdia.minf" can be used to access individual boxes in the tree based
 *  on their 4C name. If two or more boxes with the same 4C name exist in a box, then
 *  an array is built with that name.
 *
 */
var MP4Reader = exports.MP4Reader = function reader() {
  var BOX_HEADER_SIZE = 8;
  var FULL_BOX_HEADER_SIZE = BOX_HEADER_SIZE + 4;

  function constructor(stream) {
    this.stream = stream;
    this.tracks = {};
  }

  constructor.prototype = {
    readBoxes: function readBoxes(stream, parent) {
      while (stream.peek32()) {
        var child = this.readBox(stream);
        if (child.type in parent) {
          var old = parent[child.type];
          if (!(old instanceof Array)) {
            parent[child.type] = [old];
          }
          parent[child.type].push(child);
        } else {
          parent[child.type] = child;
        }
      }
    },
    readBox: function readBox(stream) {
      var box = { offset: stream.position };

      function readHeader() {
        box.size = stream.readU32();
        box.type = stream.read4CC();
      }

      function readFullHeader() {
        box.version = stream.readU8();
        box.flags = stream.readU24();
      }

      function remainingBytes() {
        return box.size - (stream.position - box.offset);
      }

      function skipRemainingBytes() {
        stream.skip(remainingBytes());
      }

      var readRemainingBoxes = function () {
        var subStream = stream.subStream(stream.position, remainingBytes());
        this.readBoxes(subStream, box);
        stream.skip(subStream.length);
      }.bind(this);

      readHeader();

      switch (box.type) {
        case 'ftyp':
          box.name = "File Type Box";
          box.majorBrand = stream.read4CC();
          box.minorVersion = stream.readU32();
          box.compatibleBrands = new Array((box.size - 16) / 4);
          for (var i = 0; i < box.compatibleBrands.length; i++) {
            box.compatibleBrands[i] = stream.read4CC();
          }
          break;
        case 'moov':
          box.name = "Movie Box";
          readRemainingBoxes();
          break;
        case 'mvhd':
          box.name = "Movie Header Box";
          readFullHeader();
          assert(box.version == 0);
          box.creationTime = stream.readU32();
          box.modificationTime = stream.readU32();
          box.timeScale = stream.readU32();
          box.duration = stream.readU32();
          box.rate = stream.readFP16();
          box.volume = stream.readFP8();
          stream.skip(10);
          box.matrix = stream.readU32Array(9);
          stream.skip(6 * 4);
          box.nextTrackId = stream.readU32();
          break;
        case 'trak':
          box.name = "Track Box";
          readRemainingBoxes();
          this.tracks[box.tkhd.trackId] = new Track(this, box);
          break;
        case 'tkhd':
          box.name = "Track Header Box";
          readFullHeader();
          assert(box.version == 0);
          box.creationTime = stream.readU32();
          box.modificationTime = stream.readU32();
          box.trackId = stream.readU32();
          stream.skip(4);
          box.duration = stream.readU32();
          stream.skip(8);
          box.layer = stream.readU16();
          box.alternateGroup = stream.readU16();
          box.volume = stream.readFP8();
          stream.skip(2);
          box.matrix = stream.readU32Array(9);
          box.width = stream.readFP16();
          box.height = stream.readFP16();
          break;
        case 'mdia':
          box.name = "Media Box";
          readRemainingBoxes();
          break;
        case 'mdhd':
          box.name = "Media Header Box";
          readFullHeader();
          assert(box.version == 0);
          box.creationTime = stream.readU32();
          box.modificationTime = stream.readU32();
          box.timeScale = stream.readU32();
          box.duration = stream.readU32();
          box.language = stream.readISO639();
          stream.skip(2);
          break;
        case 'hdlr':
          box.name = "Handler Reference Box";
          readFullHeader();
          stream.skip(4);
          box.handlerType = stream.read4CC();
          stream.skip(4 * 3);
          var bytesLeft = box.size - 32;
          if (bytesLeft > 0) {
            box.name = stream.readUTF8(bytesLeft);
          }
          break;
        case 'minf':
          box.name = "Media Information Box";
          readRemainingBoxes();
          break;
        case 'stbl':
          box.name = "Sample Table Box";
          readRemainingBoxes();
          break;
        case 'stsd':
          box.name = "Sample Description Box";
          readFullHeader();
          box.sd = [];
          var entries = stream.readU32();
          readRemainingBoxes();
          break;
        case 'avc1':
          stream.reserved(6, 0);
          box.dataReferenceIndex = stream.readU16();
          assert(stream.readU16() == 0); // Version
          assert(stream.readU16() == 0); // Revision Level
          stream.readU32(); // Vendor
          stream.readU32(); // Temporal Quality
          stream.readU32(); // Spatial Quality
          box.width = stream.readU16();
          box.height = stream.readU16();
          box.horizontalResolution = stream.readFP16();
          box.verticalResolution = stream.readFP16();
          assert(stream.readU32() == 0); // Reserved
          box.frameCount = stream.readU16();
          box.compressorName = stream.readPString(32);
          box.depth = stream.readU16();
          assert(stream.readU16() == 0xFFFF); // Color Table Id
          readRemainingBoxes();
          break;
        case 'mp4a':
          stream.reserved(6, 0);
          box.dataReferenceIndex = stream.readU16();
          box.version = stream.readU16();
          stream.skip(2);
          stream.skip(4);
          box.channelCount = stream.readU16();
          box.sampleSize = stream.readU16();
          box.compressionId = stream.readU16();
          box.packetSize = stream.readU16();
          box.sampleRate = stream.readU32() >>> 16;

          // TODO: Parse other version levels.
          assert(box.version == 0);
          readRemainingBoxes();
          break;
        case 'esds':
          box.name = "Elementary Stream Descriptor";
          readFullHeader();
          // TODO: Do we really need to parse this?
          skipRemainingBytes();
          break;
        case 'avcC':
          box.name = "AVC Configuration Box";
          box.configurationVersion = stream.readU8();
          box.avcProfileIndication = stream.readU8();
          box.profileCompatibility = stream.readU8();
          box.avcLevelIndication = stream.readU8();
          box.lengthSizeMinusOne = stream.readU8() & 3;
          assert(box.lengthSizeMinusOne == 3, "TODO");
          var count = stream.readU8() & 31;
          box.sps = [];
          for (var i = 0; i < count; i++) {
            box.sps.push(stream.readU8Array(stream.readU16()));
          }
          var count = stream.readU8() & 31;
          box.pps = [];
          for (var i = 0; i < count; i++) {
            box.pps.push(stream.readU8Array(stream.readU16()));
          }
          skipRemainingBytes();
          break;
        case 'btrt':
          box.name = "Bit Rate Box";
          box.bufferSizeDb = stream.readU32();
          box.maxBitrate = stream.readU32();
          box.avgBitrate = stream.readU32();
          break;
        case 'stts':
          box.name = "Decoding Time to Sample Box";
          readFullHeader();
          box.table = stream.readU32Array(stream.readU32(), 2, ["count", "delta"]);
          break;
        case 'stss':
          box.name = "Sync Sample Box";
          readFullHeader();
          box.samples = stream.readU32Array(stream.readU32());
          break;
        case 'stsc':
          box.name = "Sample to Chunk Box";
          readFullHeader();
          box.table = stream.readU32Array(stream.readU32(), 3, ["firstChunk", "samplesPerChunk", "sampleDescriptionId"]);
          break;
        case 'stsz':
          box.name = "Sample Size Box";
          readFullHeader();
          box.sampleSize = stream.readU32();
          var count = stream.readU32();
          if (box.sampleSize == 0) {
            box.table = stream.readU32Array(count);
          }
          break;
        case 'stco':
          box.name = "Chunk Offset Box";
          readFullHeader();
          box.table = stream.readU32Array(stream.readU32());
          break;
        case 'smhd':
          box.name = "Sound Media Header Box";
          readFullHeader();
          box.balance = stream.readFP8();
          stream.reserved(2, 0);
          break;
        case 'mdat':
          box.name = "Media Data Box";
          assert(box.size >= 8, "Cannot parse large media data yet.");
          box.data = stream.readU8Array(remainingBytes());
          break;
        default:
          skipRemainingBytes();
          break;
      };
      return box;
    },
    read: function read() {
      var start = new Date().getTime();
      this.file = {};
      this.readBoxes(this.stream, this.file);
      console.info("Parsed stream in " + (new Date().getTime() - start) + " ms");
    },
    traceSamples: function traceSamples() {
      var video = this.tracks[1];
      var audio = this.tracks[2];

      console.info("Video Samples: " + video.getSampleCount());
      console.info("Audio Samples: " + audio.getSampleCount());

      var vi = 0;
      var ai = 0;

      for (var i = 0; i < 100; i++) {
        var vo = video.sampleToOffset(vi);
        var ao = audio.sampleToOffset(ai);

        var vs = video.sampleToSize(vi, 1);
        var as = audio.sampleToSize(ai, 1);

        if (vo < ao) {
          console.info("joseph,V Sample " + vi + " Offset : " + vo + ", Size : " + vs);
          vi++;
        } else {
          console.info("joseph,A Sample " + ai + " Offset : " + ao + ", Size : " + as);
          ai++;
        }
      }
    }
  };
  return constructor;
}();

var Track = function track() {
  function constructor(file, trak) {
    this.file = file;
    this.trak = trak;
  }

  constructor.prototype = {
    getSampleSizeTable: function getSampleSizeTable() {
      return this.trak.mdia.minf.stbl.stsz.table;
    },
    getSampleCount: function getSampleCount() {
      return this.getSampleSizeTable().length;
    },
    /**
     * Computes the size of a range of samples, returns zero if length is zero.
     */
    sampleToSize: function sampleToSize(start, length) {
      var table = this.getSampleSizeTable();
      var size = 0;
      for (var i = start; i < start + length; i++) {
        size += table[i];
      }
      return size;
    },
    /**
     * Computes the chunk that contains the specified sample, as well as the offset of
     * the sample in the computed chunk.
     */
    sampleToChunk: function sampleToChunk(sample) {

      /* Samples are grouped in chunks which may contain a variable number of samples.
       * The sample-to-chunk table in the stsc box describes how samples are arranged
       * in chunks. Each table row corresponds to a set of consecutive chunks with the
       * same number of samples and description ids. For example, the following table:
       *
       * +-------------+-------------------+----------------------+
       * | firstChunk  |  samplesPerChunk  |  sampleDescriptionId |
       * +-------------+-------------------+----------------------+
       * | 1           |  3                |  23                  |
       * | 3           |  1                |  23                  |
       * | 5           |  1                |  24                  |
       * +-------------+-------------------+----------------------+
       *
       * describes 5 chunks with a total of (2 * 3) + (2 * 1) + (1 * 1) = 9 samples,
       * each chunk containing samples 3, 3, 1, 1, 1 in chunk order, or
       * chunks 1, 1, 1, 2, 2, 2, 3, 4, 5 in sample order.
       *
       * This function determines the chunk that contains a specified sample by iterating
       * over every entry in the table. It also returns the position of the sample in the
       * chunk which can be used to compute the sample's exact position in the file.
       *
       * TODO: Determine if we should memoize this function.
       */

      var table = this.trak.mdia.minf.stbl.stsc.table;

      if (table.length === 1) {
        var row = table[0];
        assert(row.firstChunk === 1);
        return {
          index: Math.floor(sample / row.samplesPerChunk),
          offset: sample % row.samplesPerChunk
        };
      }

      var totalChunkCount = 0;
      for (var i = 0; i < table.length; i++) {
        var row = table[i];
        if (i > 0) {
          var previousRow = table[i - 1];
          var previousChunkCount = row.firstChunk - previousRow.firstChunk;
          var previousSampleCount = previousRow.samplesPerChunk * previousChunkCount;
          if (sample >= previousSampleCount) {
            sample -= previousSampleCount;
            if (i == table.length - 1) {
              return {
                index: totalChunkCount + previousChunkCount + Math.floor(sample / row.samplesPerChunk),
                offset: sample % row.samplesPerChunk
              };
            }
          } else {
            return {
              index: totalChunkCount + Math.floor(sample / previousRow.samplesPerChunk),
              offset: sample % previousRow.samplesPerChunk
            };
          }
          totalChunkCount += previousChunkCount;
        }
      }
      assert(false);
    },
    chunkToOffset: function chunkToOffset(chunk) {
      var table = this.trak.mdia.minf.stbl.stco.table;
      return table[chunk];
    },
    sampleToOffset: function sampleToOffset(sample) {
      var res = this.sampleToChunk(sample);
      var offset = this.chunkToOffset(res.index);
      return offset + this.sampleToSize(sample - res.offset, res.offset);
    },
    /**
     * Computes the sample at the specified time.
     */
    timeToSample: function timeToSample(time) {
      /* In the time-to-sample table samples are grouped by their duration. The count field
       * indicates the number of consecutive samples that have the same duration. For example,
       * the following table:
       *
       * +-------+-------+
       * | count | delta |
       * +-------+-------+
       * |   4   |   3   |
       * |   2   |   1   |
       * |   3   |   2   |
       * +-------+-------+
       *
       * describes 9 samples with a total time of (4 * 3) + (2 * 1) + (3 * 2) = 20.
       *
       * This function determines the sample at the specified time by iterating over every
       * entry in the table.
       *
       * TODO: Determine if we should memoize this function.
       */
      var table = this.trak.mdia.minf.stbl.stts.table;
      var sample = 0;
      for (var i = 0; i < table.length; i++) {
        var delta = table[i].count * table[i].delta;
        if (time >= delta) {
          time -= delta;
          sample += table[i].count;
        } else {
          return sample + Math.floor(time / table[i].delta);
        }
      }
    },
    /**
     * Gets the total time of the track.
     */
    getTotalTime: function getTotalTime() {
      if (PARANOID) {
        var table = this.trak.mdia.minf.stbl.stts.table;
        var duration = 0;
        for (var i = 0; i < table.length; i++) {
          duration += table[i].count * table[i].delta;
        }
        assert(this.trak.mdia.mdhd.duration == duration);
      }
      return this.trak.mdia.mdhd.duration;
    },
    getTotalTimeInSeconds: function getTotalTimeInSeconds() {
      return this.timeToSeconds(this.getTotalTime());
    },
    getTimeScale: function getTimeScale() {
      return this.trak.mdia.mdhd.timeScale;
    },
    /**
     * Converts time units to real time (seconds).
     */
    timeToSeconds: function timeToSeconds(time) {
      return time / this.getTimeScale();
    },
    /**
     * Converts real time (seconds) to time units.
     */
    secondsToTime: function secondsToTime(seconds) {
      return seconds * this.getTimeScale();
    },
    foo: function foo() {
      /*
      for (var i = 0; i < this.getSampleCount(); i++) {
        var res = this.sampleToChunk(i);
        console.info("Sample " + i + " -> " + res.index + " % " + res.offset +
                     " @ " + this.chunkToOffset(res.index) +
                     " @@ " + this.sampleToOffset(i));
      }
      console.info("Total Time: " + this.timeToSeconds(this.getTotalTime()));
      var total = this.getTotalTimeInSeconds();
      for (var i = 50; i < total; i += 0.1) {
        // console.info("Time: " + i.toFixed(2) + " " + this.secondsToTime(i));
         console.info("Time: " + i.toFixed(2) + " " + this.timeToSample(this.secondsToTime(i)));
      }
      */
    },
    /**
     *
     */
    getAudioSample: function getAudioSample(sample) {
      var bytes = this.file.stream.bytes;
      var offset = this.sampleToOffset(sample);
      var end = offset + this.sampleToSize(sample, 1);

      return bytes.subarray(offset, end);
    },
    /**
     * AVC samples contain one or more NAL units each of which have a length prefix.
     * This function returns an array of NAL units without their length prefixes.
     */
    getSampleNALUnits: function getSampleNALUnits(sample) {
      var bytes = this.file.stream.bytes;
      var offset = this.sampleToOffset(sample);
      var end = offset + this.sampleToSize(sample, 1);
      var nalUnits = [];
      while (end - offset > 0) {
        var length = new Bytestream(bytes.buffer, offset).readU32();
        nalUnits.push(bytes.subarray(offset + 4, offset + length + 4));
        offset = offset + length + 4;
      }
      return nalUnits;
    }
  };
  return constructor;
}();

// Only add setZeroTimeout to the window object, and hide everything
// else in a closure. (http://dbaron.org/log/20100309-faster-timeouts)
(function () {
  var timeouts = [];
  var messageName = "zero-timeout-message";

  // Like setTimeout, but only takes a function argument.  There's
  // no time argument (always zero) and no arguments (you have to
  // use a closure).
  function setZeroTimeout(fn) {
    timeouts.push(fn);
    window.postMessage(messageName, "*");
  }

  function handleMessage(event) {
    if (event.source == window && event.data == messageName) {
      event.stopPropagation();
      if (timeouts.length > 0) {
        var fn = timeouts.shift();
        fn();
      }
    }
  }

  window.addEventListener("message", handleMessage, true);

  // Add the one thing we want added to the window object.
  window.setZeroTimeout = setZeroTimeout;
})();

var MP4Player = function reader() {
  var defaultConfig = {
    filter: "original",
    filterHorLuma: "optimized",
    filterVerLumaEdge: "optimized",
    getBoundaryStrengthsA: "optimized"
  };

  function constructor(stream, useWorkers, webgl, render) {
    this.stream = stream;
    this.useWorkers = useWorkers;
    this.webgl = webgl;
    this.render = render;

    this.statistics = {
      videoStartTime: 0,
      videoPictureCounter: 0,
      windowStartTime: 0,
      windowPictureCounter: 0,
      fps: 0,
      fpsMin: 1000,
      fpsMax: -1000,
      webGLTextureUploadTime: 0
    };

    this.onStatisticsUpdated = function () {};

    this.avc = new Player({
      useWorker: useWorkers,
      reuseMemory: true,
      webgl: webgl,
      size: {
        width: 640,
        height: 368
      }
    });

    this.webgl = this.avc.webgl;

    var self = this;
    this.avc.onPictureDecoded = function () {
      updateStatistics.call(self);
    };

    this.canvas = this.avc.canvas;
  }

  function updateStatistics() {
    var s = this.statistics;
    s.videoPictureCounter += 1;
    s.windowPictureCounter += 1;
    var now = Date.now();
    if (!s.videoStartTime) {
      s.videoStartTime = now;
    }
    var videoElapsedTime = now - s.videoStartTime;
    s.elapsed = videoElapsedTime / 1000;
    if (videoElapsedTime < 1000) {
      return;
    }

    if (!s.windowStartTime) {
      s.windowStartTime = now;
      return;
    } else if (now - s.windowStartTime > 1000) {
      var windowElapsedTime = now - s.windowStartTime;
      var fps = s.windowPictureCounter / windowElapsedTime * 1000;
      s.windowStartTime = now;
      s.windowPictureCounter = 0;

      if (fps < s.fpsMin) s.fpsMin = fps;
      if (fps > s.fpsMax) s.fpsMax = fps;
      s.fps = fps;
    }

    var fps = s.videoPictureCounter / videoElapsedTime * 1000;
    s.fpsSinceStart = fps;
    this.onStatisticsUpdated(this.statistics);
    return;
  }

  constructor.prototype = {
    readAll: function readAll(callback) {
      console.info("MP4Player::readAll()");
      this.stream.readAll(null, function (buffer) {
        this.reader = new MP4Reader(new Bytestream(buffer));
        this.reader.read();
        var video = this.reader.tracks[1];
        this.size = new Size(video.trak.tkhd.width, video.trak.tkhd.height);
        console.info("MP4Player::readAll(), length: " + this.reader.stream.length);
        if (callback) callback();
      }.bind(this));
    },
    play: function play() {
      var reader = this.reader;

      if (!reader) {
        this.readAll(this.play.bind(this));
        return;
      };

      var video = reader.tracks[1];
      var audio = reader.tracks[2];

      var avc = reader.tracks[1].trak.mdia.minf.stbl.stsd.avc1.avcC;
      var sps = avc.sps[0];
      var pps = avc.pps[0];

      /* Decode Sequence & Picture Parameter Sets */
      this.avc.decode(sps);
      this.avc.decode(pps);

      /* Decode Pictures */
      var pic = 0;
      setTimeout(function foo() {
        var avc = this.avc;
        video.getSampleNALUnits(pic).forEach(function (nal) {
          avc.decode(nal);
        });
        pic++;
        if (pic < 3000) {
          setTimeout(foo.bind(this), 40);
        };
      }.bind(this), 1);
    }
  };

  return constructor;
}();

// var Broadway = (function broadway() {
//   function constructor(div) {
//     var src = div.attributes.src ? div.attributes.src.value : undefined;
//     var width = div.attributes.width ? div.attributes.width.value : 640;
//     var height = div.attributes.height ? div.attributes.height.value : 480;

//     var controls = document.createElement('div');
//     controls.setAttribute('style', "z-index: 100; position: absolute; bottom: 0px; background-color: rgba(0,0,0,0.8); height: 30px; width: 100%; text-align: left;");
//     this.info = document.createElement('div');
//     this.info.setAttribute('style', "font-size: 14px; font-weight: bold; padding: 6px; color: lime;");
//     controls.appendChild(this.info);
//     div.appendChild(controls);

//     var useWorkers = div.attributes.workers ? div.attributes.workers.value == "true" : false;
//     var render = div.attributes.render ? div.attributes.render.value == "true" : false;

//     var webgl = "auto";
//     if (div.attributes.webgl){
//       if (div.attributes.webgl.value == "true"){
//         webgl = true;
//       };
//       if (div.attributes.webgl.value == "false"){
//         webgl = false;
//       };
//     };

//     var infoStrPre = "Click canvas to load and play - ";
//     var infoStr = "";
//     if (useWorkers){
//       infoStr += "worker thread ";
//     }else{
//       infoStr += "main thread ";
//     };

//     this.player = new MP4Player(new Stream(src), useWorkers, webgl, render);
//     this.canvas = this.player.canvas;
//     this.canvas.onclick = function () {
//       this.play();
//     }.bind(this);
//     div.appendChild(this.canvas);


//     infoStr += " - webgl: " + this.player.webgl;
//     this.info.innerHTML = infoStrPre + infoStr;


//     this.score = null;
//     this.player.onStatisticsUpdated = function (statistics) {
//       if (statistics.videoPictureCounter % 10 != 0) {
//         return;
//       }
//       var info = "";
//       if (statistics.fps) {
//         info += " fps: " + statistics.fps.toFixed(2);
//       }
//       if (statistics.fpsSinceStart) {
//         info += " avg: " + statistics.fpsSinceStart.toFixed(2);
//       }
//       var scoreCutoff = 1200;
//       if (statistics.videoPictureCounter < scoreCutoff) {
//         this.score = scoreCutoff - statistics.videoPictureCounter;
//       } else if (statistics.videoPictureCounter == scoreCutoff) {
//         this.score = statistics.fpsSinceStart.toFixed(2);
//       }
//       // info += " score: " + this.score;

//       this.info.innerHTML = infoStr + info;
//     }.bind(this);
//   }
//   constructor.prototype = {
//     play: function () {
//       this.player.play();
//     }
//   };
//   return constructor;
// })();

/***/ }),

/***/ "./src/player2/player2.ts":
/*!********************************!*\
  !*** ./src/player2/player2.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mp4_demux_engine_1 = __webpack_require__(/*! ./mp4_demux_engine */ "./src/player2/mp4_demux_engine.js");
var audio_render_engine_1 = __webpack_require__(/*! ./audio_render_engine */ "./src/player2/audio_render_engine.ts");
var video_decoder_engine_1 = __webpack_require__(/*! ./video_decoder_engine */ "./src/player2/video_decoder_engine.js");
var video_render_engine_1 = __webpack_require__(/*! ./video_render_engine */ "./src/player2/video_render_engine.js");
/**
 *  Add ADTS header at the beginning of each and every AAC packet.
 *  This is needed as MediaCodec encoder generates a packet of raw
 *  AAC data.
 *
 *  Note the packetLen must count in the ADTS header itself.
 **/
function buildADTSHeader(packetLen) {
    var packet = new Uint8Array(7);
    var profile = 1; //AAC LC
    //39=MediaCodecInfo.CodecProfileLevel.AACObjectELD;
    var freqIdx = 4; //44.1KHz
    var chanCfg = 2; //CPE
    // fill in ADTS data
    packet[0] = 0xFF;
    packet[1] = 0xF9;
    packet[2] = ((profile - 1) << 6) + (freqIdx << 2) + (chanCfg >> 2);
    packet[3] = ((chanCfg & 3) << 6) + (packetLen >> 11);
    packet[4] = ((packetLen & 0x7FF) >> 3);
    packet[5] = (((packetLen & 7) << 5) + 0x1F);
    packet[6] = 0xFC;
    return packet;
}
var Player2 = /** @class */ (function () {
    function Player2(asset) {
        this.asset_ = asset;
        this.pendingYUVBuffer_ = [];
        this.decoder_ = new video_decoder_engine_1.VideoDecoderEngine({
            rgb: false
        });
        this.onPictureDecoded = this.onPictureDecoded.bind(this);
        this.decoder_.onPictureDecoded = this.onPictureDecoded;
        this.audioRender_ = new audio_render_engine_1.AudioRenderEngine();
        this.videoRender_ = new video_render_engine_1.VideoRenderEngine({
            canvas: asset.canvas,
            width: asset.width,
            height: asset.height
        });
    }
    Player2.prototype.onPictureDecoded = function (buffer, width, height, infos) {
        var end = Date.now();
        console.log("--onPictureDecoded--, cost time: " + (end - window.jDecodeStart));
        this.videoRender_.drawYUVData(buffer);
        // this.pendingYUVBuffer_.push(buffer);
    };
    Player2.prototype.open = function () {
        var _this = this;
        fetch(this.asset_.url)
            .then(function (response) {
            return response.arrayBuffer();
        })
            .then(function (buffer) {
            _this.reader_ = new mp4_demux_engine_1.MP4Reader(new mp4_demux_engine_1.Bytestream(buffer));
            _this.reader_.read();
            var video = _this.reader_.tracks[1];
            _this.size_ = new mp4_demux_engine_1.Size(video.trak.tkhd.width, video.trak.tkhd.height);
            console.info("MP4Player::readAll(), length: " + _this.reader_.stream.length);
            var video = _this.reader_.tracks[1];
            var audio = _this.reader_.tracks[2];
            // BD
            // this.reader_.traceSamples();
            // ED
            _this.processAudioTrack(audio);
            // BD
            //this.dumpAudioData(audio);
            // ED
            _this.processVideoTrack(video);
        });
        // this.start();
    };
    Player2.prototype.play = function () {
        this.audioRender_.play();
    };
    Player2.prototype.pause = function () {
        this.audioRender_.pause();
    };
    Player2.prototype.getPosition = function () {
        return this.audioRender_.getPosition();
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    Player2.prototype.start = function () {
        var _this = this;
        setInterval(function () {
            console.log('--timeout--');
            if (_this.pendingYUVBuffer_.length != 0) {
                var buffer = _this.pendingYUVBuffer_.shift();
                _this.videoRender_.drawYUVData(buffer);
            }
        }, 40);
    };
    Player2.prototype.processAudioTrack = function (track) {
        var self = this;
        var totalBytes = 0;
        var aCnt = track.getSampleCount();
        var aIndex = 0;
        var arrSamples = [];
        setTimeout(function foo() {
            var data = track.getAudioSample(aIndex++);
            if (aIndex >= aCnt) {
                return;
            }
            console.log("index: " + aIndex + ", length: " + data.byteLength);
            totalBytes += data.byteLength;
            if (arrSamples.length === 4) {
                var length_1 = 0;
                arrSamples.forEach(function (item) {
                    length_1 += item.length;
                });
                var mergedArray_1 = new Uint8Array(length_1);
                var offset_1 = 0;
                arrSamples.forEach(function (item) {
                    mergedArray_1.set(item, offset_1);
                    offset_1 += item.length;
                });
                this.audioRender_.render(mergedArray_1.buffer);
                arrSamples = [];
            }
            var adtsHeader = buildADTSHeader(data.byteLength + 7);
            var buffer = new Uint8Array(adtsHeader.length + data.byteLength);
            buffer.set(adtsHeader, 0);
            buffer.set(data, adtsHeader.length);
            arrSamples.push(buffer);
            setTimeout(foo.bind(self), 10);
        }.bind(self), 1);
    };
    Player2.prototype.processVideoTrack = function (track) {
        var self = this;
        var avc = this.reader_.tracks[1].trak.mdia.minf.stbl.stsd.avc1.avcC;
        var sps = avc.sps[0];
        var pps = avc.pps[0];
        this.decoder_.decode(sps);
        this.decoder_.decode(pps);
        // Decode Pictures
        var pic = 0;
        setTimeout(function foo() {
            track.getSampleNALUnits(pic).forEach(function (nal) {
                window.jDecodeStart = Date.now();
                self.decoder_.decode(nal);
            });
            pic++;
            if (pic < 3000) {
                setTimeout(foo.bind(self), 40);
            }
            ;
        }.bind(self), 1);
    };
    Player2.prototype.dumpAudioData = function (track) {
        var myArrays = [];
        for (var i = 0; i < 500; i++) {
            var data = track.getAudioSample(i);
            var adtsHeader = buildADTSHeader(data.byteLength + 7);
            var buffer = new Uint8Array(adtsHeader.length + data.byteLength);
            buffer.set(adtsHeader, 0);
            buffer.set(data, adtsHeader.length);
            myArrays.push(buffer);
        }
        // Get the total length of all arrays.
        var length = 0;
        myArrays.forEach(function (item) {
            length += item.length;
        });
        // Create a new array with total length and merge all source arrays.
        var mergedArray = new Uint8Array(length);
        var offset = 0;
        myArrays.forEach(function (item) {
            mergedArray.set(item, offset);
            offset += item.length;
        });
        // dump aac
        var blob = new Blob([mergedArray], {
            type: "application/octet-stream"
        });
        var fileName = 'test.aac';
        window.saveAs(blob, fileName);
        this.audioRender_.render(mergedArray.buffer);
        console.log("totalBytes: " + length);
    };
    return Player2;
}());
exports.Player2 = Player2;


/***/ }),

/***/ "./src/player2/video_decoder_engine.js":
/*!*********************************************!*\
  !*** ./src/player2/video_decoder_engine.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var global;

function initglobal() {
  global = this;
  if (!global) {
    if (typeof window != "undefined") {
      global = window;
    } else if (typeof self != "undefined") {
      global = self;
    };
  };
}
initglobal();

function error(message) {
  console.error(message);
  console.trace();
}

function assert(condition, message) {
  if (!condition) {
    error(message);
  };
}

var getModule = function getModule(par_broadwayOnHeadersDecoded, par_broadwayOnPictureDecoded) {
  /*var ModuleX = {
    'print': function(text) { console.log('stdout: ' + text); },
    'printErr': function(text) { console.log('stderr: ' + text); }
  };*/

  /*
    The reason why this is all packed into one file is that this file can also function as worker.
    you can integrate the file into your build system and provide the original file to be loaded into a worker.
  */

  //var Module = (function(){
  var Module = typeof Module !== "undefined" ? Module : {};
  var moduleOverrides = {};
  var key;
  for (key in Module) {
    if (Module.hasOwnProperty(key)) {
      moduleOverrides[key] = Module[key];
    }
  }
  Module["arguments"] = [];
  Module["thisProgram"] = "./this.program";
  Module["quit"] = function (status, toThrow) {
    throw toThrow;
  };
  Module["preRun"] = [];
  Module["postRun"] = [];
  var ENVIRONMENT_IS_WEB = false;
  var ENVIRONMENT_IS_WORKER = false;
  var ENVIRONMENT_IS_NODE = false;
  var ENVIRONMENT_IS_SHELL = false;

  if (Module["ENVIRONMENT"]) {
    if (Module["ENVIRONMENT"] === "WEB") {
      ENVIRONMENT_IS_WEB = true;
    } else if (Module["ENVIRONMENT"] === "WORKER") {
      ENVIRONMENT_IS_WORKER = true;
    } else if (Module["ENVIRONMENT"] === "NODE") {
      ENVIRONMENT_IS_NODE = true;
    } else if (Module["ENVIRONMENT"] === "SHELL") {
      ENVIRONMENT_IS_SHELL = true;
    } else {
      throw new Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.");
    }
  } else {
    ENVIRONMENT_IS_WEB = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object";
    ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
    ENVIRONMENT_IS_NODE = (typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && typeof null === "function" && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;
    ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
  }

  if (ENVIRONMENT_IS_NODE) {
    var nodeFS;
    var nodePath;
    Module["read"] = function shell_read(filename, binary) {
      var ret;
      if (!nodeFS) nodeFS = null("fs");
      if (!nodePath) nodePath = null("path");
      filename = nodePath["normalize"](filename);
      ret = nodeFS["readFileSync"](filename);
      return binary ? ret : ret.toString();
    };
    Module["readBinary"] = function readBinary(filename) {
      var ret = Module["read"](filename, true);if (!ret.buffer) {
        ret = new Uint8Array(ret);
      }assert(ret.buffer);return ret;
    };
    if (process["argv"].length > 1) {
      Module["thisProgram"] = process["argv"][1].replace(/\\/g, "/");
    }Module["arguments"] = process["argv"].slice(2);
    if (true) {
      module["exports"] = Module;
    }process["on"]("uncaughtException", function (ex) {
      if (!(ex instanceof ExitStatus)) {
        throw ex;
      }
    });
    process["on"]("unhandledRejection", function (reason, p) {
      process["exit"](1);
    });
    Module["inspect"] = function () {
      return "[Emscripten Module object]";
    };
  } else if (ENVIRONMENT_IS_SHELL) {
    if (typeof read != "undefined") {
      Module["read"] = function shell_read(f) {
        return read(f);
      };
    }Module["readBinary"] = function readBinary(f) {
      var data;
      if (typeof readbuffer === "function") {
        return new Uint8Array(readbuffer(f));
      }data = read(f, "binary");
      assert((typeof data === "undefined" ? "undefined" : _typeof(data)) === "object");
      return data;
    };
    if (typeof scriptArgs != "undefined") {
      Module["arguments"] = scriptArgs;
    } else if (typeof arguments != "undefined") {
      Module["arguments"] = arguments;
    }
    if (typeof quit === "function") {
      Module["quit"] = function (status, toThrow) {
        quit(status);
      };
    }
  } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
    Module["read"] = function shell_read(url) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, false);
      xhr.send(null);
      return xhr.responseText;
    };
    if (ENVIRONMENT_IS_WORKER) {
      Module["readBinary"] = function readBinary(url) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        xhr.responseType = "arraybuffer";
        xhr.send(null);
        return new Uint8Array(xhr.response);
      };
    }
    Module["readAsync"] = function readAsync(url, onload, onerror) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.responseType = "arraybuffer";
      xhr.onload = function xhr_onload() {
        if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
          onload(xhr.response);return;
        }onerror();
      };
      xhr.onerror = onerror;
      xhr.send(null);
    };
    Module["setWindowTitle"] = function (title) {
      document.title = title;
    };
  } else {
    throw new Error("not compiled for this environment");
  }
  Module["print"] = typeof console !== "undefined" ? console.log.bind(console) : typeof print !== "undefined" ? print : null;
  Module["printErr"] = typeof printErr !== "undefined" ? printErr : typeof console !== "undefined" && console.warn.bind(console) || Module["print"];
  Module.print = Module["print"];
  Module.printErr = Module["printErr"];
  for (key in moduleOverrides) {
    if (moduleOverrides.hasOwnProperty(key)) {
      Module[key] = moduleOverrides[key];
    }
  }
  moduleOverrides = undefined;
  var STACK_ALIGN = 16;

  function staticAlloc(size) {
    assert(!staticSealed);
    var ret = STATICTOP;
    STATICTOP = STATICTOP + size + 15 & -16;
    return ret;
  }

  function alignMemory(size, factor) {
    if (!factor) {
      factor = STACK_ALIGN;
    }
    var ret = size = Math.ceil(size / factor) * factor;
    return ret;
  }
  var asm2wasmImports = {
    "f64-rem": function f64Rem(x, y) {
      return x % y;
    },
    "debugger": function _debugger() {
      debugger;
    }
  };
  var functionPointers = new Array(0);
  var GLOBAL_BASE = 1024;
  var ABORT = 0;
  var EXITSTATUS = 0;

  function assert(condition, text) {
    if (!condition) {
      abort("Assertion failed: " + text);
    }
  }

  function Pointer_stringify(ptr, length) {
    if (length === 0 || !ptr) return "";
    var hasUtf = 0;
    var t;
    var i = 0;
    while (1) {
      t = HEAPU8[ptr + i >> 0];
      hasUtf |= t;
      if (t == 0 && !length) break;
      i++;
      if (length && i == length) break;
    }
    if (!length) length = i;
    var ret = "";
    if (hasUtf < 128) {
      var MAX_CHUNK = 1024;
      var curr;
      while (length > 0) {
        curr = String.fromCharCode.apply(String, HEAPU8.subarray(ptr, ptr + Math.min(length, MAX_CHUNK)));
        ret = ret ? ret + curr : curr;
        ptr += MAX_CHUNK;
        length -= MAX_CHUNK;
      }
      return ret;
    }
    return UTF8ToString(ptr);
  }
  var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;

  function UTF8ArrayToString(u8Array, idx) {
    var endPtr = idx;
    while (u8Array[endPtr]) {
      ++endPtr;
    }if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
      return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
    } else {
      var u0, u1, u2, u3, u4, u5;
      var str = "";
      while (1) {
        u0 = u8Array[idx++];
        if (!u0) return str;
        if (!(u0 & 128)) {
          str += String.fromCharCode(u0);continue;
        }u1 = u8Array[idx++] & 63;
        if ((u0 & 224) == 192) {
          str += String.fromCharCode((u0 & 31) << 6 | u1);continue;
        }u2 = u8Array[idx++] & 63;
        if ((u0 & 240) == 224) {
          u0 = (u0 & 15) << 12 | u1 << 6 | u2;
        } else {
          u3 = u8Array[idx++] & 63;
          if ((u0 & 248) == 240) {
            u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | u3;
          } else {
            u4 = u8Array[idx++] & 63;
            if ((u0 & 252) == 248) {
              u0 = (u0 & 3) << 24 | u1 << 18 | u2 << 12 | u3 << 6 | u4;
            } else {
              u5 = u8Array[idx++] & 63;
              u0 = (u0 & 1) << 30 | u1 << 24 | u2 << 18 | u3 << 12 | u4 << 6 | u5;
            }
          }
        }
        if (u0 < 65536) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 65536;
          str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
        }
      }
    }
  }

  function UTF8ToString(ptr) {
    return UTF8ArrayToString(HEAPU8, ptr);
  }
  var UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : undefined;
  var WASM_PAGE_SIZE = 65536;
  var ASMJS_PAGE_SIZE = 16777216;

  function alignUp(x, multiple) {
    if (x % multiple > 0) {
      x += multiple - x % multiple;
    }
    return x;
  }
  var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

  function updateGlobalBuffer(buf) {
    Module["buffer"] = buffer = buf;
  }

  function updateGlobalBufferViews() {
    Module["HEAP8"] = HEAP8 = new Int8Array(buffer);
    Module["HEAP16"] = HEAP16 = new Int16Array(buffer);
    Module["HEAP32"] = HEAP32 = new Int32Array(buffer);
    Module["HEAPU8"] = HEAPU8 = new Uint8Array(buffer);
    Module["HEAPU16"] = HEAPU16 = new Uint16Array(buffer);
    Module["HEAPU32"] = HEAPU32 = new Uint32Array(buffer);
    Module["HEAPF32"] = HEAPF32 = new Float32Array(buffer);
    Module["HEAPF64"] = HEAPF64 = new Float64Array(buffer);
  }
  var STATIC_BASE, STATICTOP, staticSealed;
  var STACK_BASE, STACKTOP, STACK_MAX;
  var DYNAMIC_BASE, DYNAMICTOP_PTR;
  STATIC_BASE = STATICTOP = STACK_BASE = STACKTOP = STACK_MAX = DYNAMIC_BASE = DYNAMICTOP_PTR = 0;
  staticSealed = false;

  function abortOnCannotGrowMemory() {
    abort("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " + TOTAL_MEMORY + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ");
  }

  function enlargeMemory() {
    abortOnCannotGrowMemory();
  }
  var TOTAL_STACK = Module["TOTAL_STACK"] || 5242880;
  var TOTAL_MEMORY = Module["TOTAL_MEMORY"] || 52428800;
  if (TOTAL_MEMORY < TOTAL_STACK) {
    Module.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + TOTAL_MEMORY + "! (TOTAL_STACK=" + TOTAL_STACK + ")");
  }
  if (Module["buffer"]) {
    buffer = Module["buffer"];
  } else {
    if ((typeof WebAssembly === "undefined" ? "undefined" : _typeof(WebAssembly)) === "object" && typeof WebAssembly.Memory === "function") {
      Module["wasmMemory"] = new WebAssembly.Memory({ "initial": TOTAL_MEMORY / WASM_PAGE_SIZE, "maximum": TOTAL_MEMORY / WASM_PAGE_SIZE });
      buffer = Module["wasmMemory"].buffer;
    } else {
      buffer = new ArrayBuffer(TOTAL_MEMORY);
    }
    Module["buffer"] = buffer;
  }
  updateGlobalBufferViews();

  function getTotalMemory() {
    return TOTAL_MEMORY;
  }
  HEAP32[0] = 1668509029;
  HEAP16[1] = 25459;
  if (HEAPU8[2] !== 115 || HEAPU8[3] !== 99) {
    throw "Runtime error: expected the system to be little-endian!";
  }

  function callRuntimeCallbacks(callbacks) {
    while (callbacks.length > 0) {
      var callback = callbacks.shift();
      if (typeof callback == "function") {
        callback();
        continue;
      }
      var func = callback.func;
      if (typeof func === "number") {
        if (callback.arg === undefined) {
          Module["dynCall_v"](func);
        } else {
          Module["dynCall_vi"](func, callback.arg);
        }
      } else {
        func(callback.arg === undefined ? null : callback.arg);
      }
    }
  }

  var __ATPRERUN__ = [];
  var __ATINIT__ = [];
  var __ATMAIN__ = [];
  var __ATEXIT__ = [];
  var __ATPOSTRUN__ = [];
  var runtimeInitialized = false;
  var runtimeExited = false;

  function preRun() {
    if (Module["preRun"]) {
      if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];while (Module["preRun"].length) {
        addOnPreRun(Module["preRun"].shift());
      }
    }callRuntimeCallbacks(__ATPRERUN__);
  }

  function ensureInitRuntime() {
    if (runtimeInitialized) return;
    runtimeInitialized = true;
    callRuntimeCallbacks(__ATINIT__);
  }

  function preMain() {
    callRuntimeCallbacks(__ATMAIN__);
  }

  function exitRuntime() {
    callRuntimeCallbacks(__ATEXIT__);
    runtimeExited = true;
  }

  function postRun() {
    if (Module["postRun"]) {
      if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];while (Module["postRun"].length) {
        addOnPostRun(Module["postRun"].shift());
      }
    }callRuntimeCallbacks(__ATPOSTRUN__);
  }

  function addOnPreRun(cb) {
    __ATPRERUN__.unshift(cb);
  }

  function addOnPostRun(cb) {
    __ATPOSTRUN__.unshift(cb);
  }

  var Math_abs = Math.abs;
  var Math_cos = Math.cos;
  var Math_sin = Math.sin;
  var Math_tan = Math.tan;
  var Math_acos = Math.acos;
  var Math_asin = Math.asin;
  var Math_atan = Math.atan;
  var Math_atan2 = Math.atan2;
  var Math_exp = Math.exp;
  var Math_log = Math.log;
  var Math_sqrt = Math.sqrt;
  var Math_ceil = Math.ceil;
  var Math_floor = Math.floor;
  var Math_pow = Math.pow;
  var Math_imul = Math.imul;
  var Math_fround = Math.fround;
  var Math_round = Math.round;
  var Math_min = Math.min;
  var Math_max = Math.max;
  var Math_clz32 = Math.clz32;
  var Math_trunc = Math.trunc;
  var runDependencies = 0;
  var runDependencyWatcher = null;
  var dependenciesFulfilled = null;

  function addRunDependency(id) {
    runDependencies++;
    if (Module["monitorRunDependencies"]) {
      Module["monitorRunDependencies"](runDependencies);
    }
  }

  function removeRunDependency(id) {
    runDependencies--;
    if (Module["monitorRunDependencies"]) {
      Module["monitorRunDependencies"](runDependencies);
    }
    if (runDependencies == 0) {
      if (runDependencyWatcher !== null) {
        clearInterval(runDependencyWatcher);
        runDependencyWatcher = null;
      }
      if (dependenciesFulfilled) {
        var callback = dependenciesFulfilled;
        dependenciesFulfilled = null;
        callback();
      }
    }
  }
  Module["preloadedImages"] = {};
  Module["preloadedAudios"] = {};
  var dataURIPrefix = "data:application/octet-stream;base64,";

  function isDataURI(filename) {
    return String.prototype.startsWith ? filename.startsWith(dataURIPrefix) : filename.indexOf(dataURIPrefix) === 0;
  }

  function integrateWasmJS() {
    var wasmTextFile = "avc.wast";
    var wasmBinaryFile = "avc.wasm";
    var asmjsCodeFile = "avc.temp.asm.js";
    if (typeof Module["locateFile"] === "function") {
      if (!isDataURI(wasmTextFile)) {
        wasmTextFile = Module["locateFile"](wasmTextFile);
      }
      if (!isDataURI(wasmBinaryFile)) {
        wasmBinaryFile = Module["locateFile"](wasmBinaryFile);
      }
      if (!isDataURI(asmjsCodeFile)) {
        asmjsCodeFile = Module["locateFile"](asmjsCodeFile);
      }
    }
    var wasmPageSize = 64 * 1024;
    var info = { "global": null, "env": null, "asm2wasm": asm2wasmImports, "parent": Module };
    // BD
    var info2 = {};
    // ED
    var exports = null;

    function mergeMemory(newBuffer) {
      var oldBuffer = Module["buffer"];
      if (newBuffer.byteLength < oldBuffer.byteLength) {
        Module["printErr"]("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");
      }
      var oldView = new Int8Array(oldBuffer);
      var newView = new Int8Array(newBuffer);
      newView.set(oldView);
      updateGlobalBuffer(newBuffer);
      updateGlobalBufferViews();
    }

    function fixImports(imports) {
      return imports;
    }

    function getBinary() {
      try {
        if (Module["wasmBinary"]) {
          return new Uint8Array(Module["wasmBinary"]);
        }
        if (Module["readBinary"]) {
          return Module["readBinary"](wasmBinaryFile);
        } else {
          throw "on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";
        }
      } catch (err) {
        abort(err);
      }
    }

    function getBinaryPromise() {
      if (!Module["wasmBinary"] && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === "function") {
        return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function (response) {
          if (!response["ok"]) {
            throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
          }
          return response["arrayBuffer"]();
        }).catch(function () {
          return getBinary();
        });
      }

      return new Promise(function (resolve, reject) {
        resolve(getBinary());
      });
    }

    function doNativeWasm(global, env, providedBuffer) {
      if ((typeof WebAssembly === "undefined" ? "undefined" : _typeof(WebAssembly)) !== "object") {
        Module["printErr"]("no native wasm support detected");return false;
      }
      if (!(Module["wasmMemory"] instanceof WebAssembly.Memory)) {
        Module["printErr"]("no native wasm Memory in use");return false;
      }env["memory"] = Module["wasmMemory"];
      info["global"] = { "NaN": NaN, "Infinity": Infinity };
      info["global.Math"] = Math;
      info["env"] = env;

      function receiveInstance(instance, module) {
        exports = instance.exports;
        if (exports.memory) mergeMemory(exports.memory);
        Module["asm"] = exports;
        Module["usingWasm"] = true;
        removeRunDependency("wasm-instantiate");
      }
      addRunDependency("wasm-instantiate");
      if (Module["instantiateWasm"]) {
        try {
          return Module["instantiateWasm"](info, receiveInstance);
        } catch (e) {
          Module["printErr"]("Module.instantiateWasm callback failed with error: " + e);return false;
        }
      }

      function receiveInstantiatedSource(output) {
        // BD
        console.log(WebAssembly.Module.imports(output.module));
        // ED

        receiveInstance(output["instance"], output["module"]);
      }

      function instantiateArrayBuffer(receiver) {
        getBinaryPromise().then(function (binary) {
          // return WebAssembly.instantiate(binary, info);
          var t1 = info;
          info2.env = info.env;
          return WebAssembly.instantiate(binary, info2);
        }).then(receiver).catch(function (reason) {
          Module["printErr"]("failed to asynchronously prepare wasm: " + reason);
          abort(reason);
        });
      }
      if (!Module["wasmBinary"] && typeof WebAssembly.instantiateStreaming === "function" && !isDataURI(wasmBinaryFile) && typeof fetch === "function") {
        WebAssembly.instantiateStreaming(fetch(wasmBinaryFile, { credentials: "same-origin" }), info).then(receiveInstantiatedSource).catch(function (reason) {
          Module["printErr"]("wasm streaming compile failed: " + reason);
          Module["printErr"]("falling back to ArrayBuffer instantiation");
          instantiateArrayBuffer(receiveInstantiatedSource);
        });
      } else {
        instantiateArrayBuffer(receiveInstantiatedSource);
      }
      return {};
    }

    Module["asmPreload"] = Module["asm"];
    var asmjsReallocBuffer = Module["reallocBuffer"];
    var wasmReallocBuffer = function wasmReallocBuffer(size) {
      var PAGE_MULTIPLE = Module["usingWasm"] ? WASM_PAGE_SIZE : ASMJS_PAGE_SIZE;
      size = alignUp(size, PAGE_MULTIPLE);
      var old = Module["buffer"];
      var oldSize = old.byteLength;
      if (Module["usingWasm"]) {
        try {
          var result = Module["wasmMemory"].grow((size - oldSize) / wasmPageSize);if (result !== (-1 | 0)) {
            return Module["buffer"] = Module["wasmMemory"].buffer;
          } else {
            return null;
          }
        } catch (e) {
          return null;
        }
      }
    };
    Module["reallocBuffer"] = function (size) {
      if (finalMethod === "asmjs") {
        return asmjsReallocBuffer(size);
      } else {
        return wasmReallocBuffer(size);
      }
    };
    var finalMethod = "";
    Module["asm"] = function (global, env, providedBuffer) {
      env = fixImports(env);
      if (!env["table"]) {
        var TABLE_SIZE = Module["wasmTableSize"];
        if (TABLE_SIZE === undefined) {
          TABLE_SIZE = 1024;
        }
        var MAX_TABLE_SIZE = Module["wasmMaxTableSize"];
        if ((typeof WebAssembly === "undefined" ? "undefined" : _typeof(WebAssembly)) === "object" && typeof WebAssembly.Table === "function") {
          if (MAX_TABLE_SIZE !== undefined) {
            env["table"] = new WebAssembly.Table({ "initial": TABLE_SIZE, "maximum": MAX_TABLE_SIZE, "element": "anyfunc" });
          } else {
            env["table"] = new WebAssembly.Table({ "initial": TABLE_SIZE, element: "anyfunc" });
          }
        } else {
          env["table"] = new Array(TABLE_SIZE);
        }
        Module["wasmTable"] = env["table"];
      }
      if (!env["memoryBase"]) {
        env["memoryBase"] = Module["STATIC_BASE"];
      }
      if (!env["tableBase"]) {
        env["tableBase"] = 0;
      }
      var exports;
      exports = doNativeWasm(global, env, providedBuffer);
      assert(exports, "no binaryen method succeeded.");
      return exports;
    };
  }

  integrateWasmJS();
  STATIC_BASE = GLOBAL_BASE;
  STATICTOP = STATIC_BASE + 9888;
  __ATINIT__.push();
  var STATIC_BUMP = 9888;
  Module["STATIC_BASE"] = STATIC_BASE;
  Module["STATIC_BUMP"] = STATIC_BUMP;
  STATICTOP += 16;
  var SYSCALLS = {
    varargs: 0,
    get: function get(varargs) {
      SYSCALLS.varargs += 4;var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];return ret;
    },
    getStr: function getStr() {
      var ret = Pointer_stringify(SYSCALLS.get());return ret;
    },
    get64: function get64() {
      var low = SYSCALLS.get(),
          high = SYSCALLS.get();
      if (low >= 0) assert(high === 0);else assert(high === -1);
      return low;
    },
    getZero: function getZero() {
      assert(SYSCALLS.get() === 0);
    }
  };

  function ___syscall140(which, varargs) {
    SYSCALLS.varargs = varargs;
    try {
      var stream = SYSCALLS.getStreamFromFD(),
          offset_high = SYSCALLS.get(),
          offset_low = SYSCALLS.get(),
          result = SYSCALLS.get(),
          whence = SYSCALLS.get();
      var offset = offset_low;
      FS.llseek(stream, offset, whence);
      HEAP32[result >> 2] = stream.position;
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
      return 0;
    } catch (e) {
      if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);return -e.errno;
    }
  }

  function ___syscall146(which, varargs) {
    SYSCALLS.varargs = varargs;
    try {
      var stream = SYSCALLS.get(),
          iov = SYSCALLS.get(),
          iovcnt = SYSCALLS.get();
      var ret = 0;
      if (!___syscall146.buffers) {
        ___syscall146.buffers = [null, [], []];
        ___syscall146.printChar = function (stream, curr) {
          var buffer = ___syscall146.buffers[stream];
          assert(buffer);
          if (curr === 0 || curr === 10) {
            (stream === 1 ? Module["print"] : Module["printErr"])(UTF8ArrayToString(buffer, 0));
            buffer.length = 0;
          } else {
            buffer.push(curr);
          }
        };
      }
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[iov + i * 8 >> 2];var len = HEAP32[iov + (i * 8 + 4) >> 2];for (var j = 0; j < len; j++) {
          ___syscall146.printChar(stream, HEAPU8[ptr + j]);
        }ret += len;
      }
      return ret;
    } catch (e) {
      if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);return -e.errno;
    }
  }

  function ___syscall54(which, varargs) {
    SYSCALLS.varargs = varargs;try {
      return 0;
    } catch (e) {
      if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);return -e.errno;
    }
  }

  function ___syscall6(which, varargs) {
    SYSCALLS.varargs = varargs;
    try {
      var stream = SYSCALLS.getStreamFromFD();
      FS.close(stream);
      return 0;
    } catch (e) {
      if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);return -e.errno;
    }
  }

  function _broadwayOnHeadersDecoded() {
    par_broadwayOnHeadersDecoded();
  }
  Module["_broadwayOnHeadersDecoded"] = _broadwayOnHeadersDecoded;

  function _broadwayOnPictureDecoded($buffer, width, height) {
    par_broadwayOnPictureDecoded($buffer, width, height);
  }
  Module["_broadwayOnPictureDecoded"] = _broadwayOnPictureDecoded;

  function _emscripten_memcpy_big(dest, src, num) {
    HEAPU8.set(HEAPU8.subarray(src, src + num), dest);return dest;
  }

  function ___setErrNo(value) {
    if (Module["___errno_location"]) HEAP32[Module["___errno_location"]() >> 2] = value;return value;
  }DYNAMICTOP_PTR = staticAlloc(4);
  STACK_BASE = STACKTOP = alignMemory(STATICTOP);
  STACK_MAX = STACK_BASE + TOTAL_STACK;
  DYNAMIC_BASE = alignMemory(STACK_MAX);
  HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;
  staticSealed = true;
  Module["wasmTableSize"] = 10;
  Module["wasmMaxTableSize"] = 10;
  Module.asmGlobalArg = {};
  Module.asmLibraryArg = { "abort": abort, "enlargeMemory": enlargeMemory, "getTotalMemory": getTotalMemory, "abortOnCannotGrowMemory": abortOnCannotGrowMemory, "___setErrNo": ___setErrNo, "___syscall140": ___syscall140, "___syscall146": ___syscall146, "___syscall54": ___syscall54, "___syscall6": ___syscall6, "_broadwayOnHeadersDecoded": _broadwayOnHeadersDecoded, "_broadwayOnPictureDecoded": _broadwayOnPictureDecoded, "_emscripten_memcpy_big": _emscripten_memcpy_big, "DYNAMICTOP_PTR": DYNAMICTOP_PTR, "STACKTOP": STACKTOP };
  var asm = Module["asm"](Module.asmGlobalArg, Module.asmLibraryArg, buffer);
  Module["asm"] = asm;
  var _broadwayCreateStream = Module["_broadwayCreateStream"] = function () {
    return Module["asm"]["_broadwayCreateStream"].apply(null, arguments);
  };
  var _broadwayExit = Module["_broadwayExit"] = function () {
    return Module["asm"]["_broadwayExit"].apply(null, arguments);
  };
  var _broadwayGetMajorVersion = Module["_broadwayGetMajorVersion"] = function () {
    return Module["asm"]["_broadwayGetMajorVersion"].apply(null, arguments);
  };
  var _broadwayGetMinorVersion = Module["_broadwayGetMinorVersion"] = function () {
    return Module["asm"]["_broadwayGetMinorVersion"].apply(null, arguments);
  };
  var _broadwayInit = Module["_broadwayInit"] = function () {
    return Module["asm"]["_broadwayInit"].apply(null, arguments);
  };
  var _broadwayPlayStream = Module["_broadwayPlayStream"] = function () {
    return Module["asm"]["_broadwayPlayStream"].apply(null, arguments);
  };
  Module["asm"] = asm;

  function ExitStatus(status) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + status + ")";
    this.status = status;
  }
  ExitStatus.prototype = new Error();
  ExitStatus.prototype.constructor = ExitStatus;
  var initialStackTop;
  dependenciesFulfilled = function runCaller() {
    if (!Module["calledRun"]) run();if (!Module["calledRun"]) dependenciesFulfilled = runCaller;
  };

  function run(args) {
    args = args || Module["arguments"];
    if (runDependencies > 0) {
      return;
    }preRun();
    if (runDependencies > 0) return;
    if (Module["calledRun"]) return;

    function doRun() {
      if (Module["calledRun"]) return;
      Module["calledRun"] = true;
      if (ABORT) return;
      ensureInitRuntime();
      preMain();
      if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
      postRun();
    }
    if (Module["setStatus"]) {
      Module["setStatus"]("Running...");
      setTimeout(function () {
        setTimeout(function () {
          Module["setStatus"]("");
        }, 1);
        doRun();
      }, 1);
    } else {
      doRun();
    }
  }
  Module["run"] = run;

  function exit(status, implicit) {
    if (implicit && Module["noExitRuntime"] && status === 0) {
      return;
    }
    if (Module["noExitRuntime"]) {} else {
      ABORT = true;
      EXITSTATUS = status;
      STACKTOP = initialStackTop;
      exitRuntime();
      if (Module["onExit"]) Module["onExit"](status);
    }
    if (ENVIRONMENT_IS_NODE) {
      process["exit"](status);
    }Module["quit"](status, new ExitStatus(status));
  }
  Module["exit"] = exit;

  function abort(what) {
    if (Module["onAbort"]) {
      Module["onAbort"](what);
    }
    if (what !== undefined) {
      Module.print(what);
      Module.printErr(what);
      what = JSON.stringify(what);
    } else {
      what = "";
    }ABORT = true;
    EXITSTATUS = 1;
    throw "abort(" + what + "). Build with -s ASSERTIONS=1 for more info.";
  }
  Module["abort"] = abort;
  if (Module["preInit"]) {
    if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];while (Module["preInit"].length > 0) {
      Module["preInit"].pop()();
    }
  }Module["noExitRuntime"] = true;
  run();

  //   return Module;
  //})();

  var resultModule;
  if (typeof global !== "undefined") {
    if (global.Module) {
      resultModule = global.Module;
    };
  };
  if (typeof Module != "undefined") {
    resultModule = Module;
  };

  resultModule._broadwayOnHeadersDecoded = par_broadwayOnHeadersDecoded;
  resultModule._broadwayOnPictureDecoded = par_broadwayOnPictureDecoded;

  var moduleIsReady = false;
  var cbFun;
  var moduleReady = function moduleReady() {
    moduleIsReady = true;
    if (cbFun) {
      cbFun(resultModule);
    }
  };

  resultModule.onRuntimeInitialized = function () {
    moduleReady(resultModule);
  };

  return function (callback) {
    if (moduleIsReady) {
      callback(resultModule);
    } else {
      cbFun = callback;
    };
  };
};

var nowValue = function nowValue() {
  return new Date().getTime();
};

if (typeof performance != "undefined") {
  if (performance.now) {
    nowValue = function nowValue() {
      return performance.now();
    };
  };
}

var VideoDecoderEngine = exports.VideoDecoderEngine = function VideoDecoderEngine(parOptions) {
  this.options = parOptions || {};

  this.now = nowValue;

  var asmInstance;

  var fakeWindow = {};

  var toU8Array;
  var toU32Array;

  var onPicFun = function ($buffer, width, height) {
    var buffer = this.pictureBuffers[$buffer];
    if (!buffer) {
      buffer = this.pictureBuffers[$buffer] = toU8Array($buffer, width * height * 3 / 2);
    };

    var infos;
    var doInfo = false;
    if (this.infoAr.length) {
      doInfo = true;
      infos = this.infoAr;
    };
    this.infoAr = [];

    if (this.options.rgb) {
      if (!asmInstance) {
        asmInstance = getAsm(width, height);
      };
      asmInstance.inp.set(buffer);
      asmInstance.doit();

      var copyU8 = new Uint8Array(asmInstance.outSize);
      copyU8.set(asmInstance.out);

      if (doInfo) {
        infos[0].finishDecoding = nowValue();
      };

      this.onPictureDecoded(copyU8, width, height, infos);
      return;
    };

    if (doInfo) {
      infos[0].finishDecoding = nowValue();
    };

    console.log("joseph, output, length: " + buffer.byteLength);
    this.onPictureDecoded(buffer, width, height, infos);
  }.bind(this);

  var ignore = false;

  if (this.options.sliceMode) {
    onPicFun = function ($buffer, width, height, $sliceInfo) {
      if (ignore) {
        return;
      };
      var buffer = this.pictureBuffers[$buffer];
      if (!buffer) {
        buffer = this.pictureBuffers[$buffer] = toU8Array($buffer, width * height * 3 / 2);
      };
      var sliceInfo = this.pictureBuffers[$sliceInfo];
      if (!sliceInfo) {
        sliceInfo = this.pictureBuffers[$sliceInfo] = toU32Array($sliceInfo, 18);
      };

      var infos;
      var doInfo = false;
      if (this.infoAr.length) {
        doInfo = true;
        infos = this.infoAr;
      };
      this.infoAr = [];

      /*if (this.options.rgb){
        
        no rgb in slice mode
         };*/

      infos[0].finishDecoding = nowValue();
      var sliceInfoAr = [];
      for (var i = 0; i < 20; ++i) {
        sliceInfoAr.push(sliceInfo[i]);
      };
      infos[0].sliceInfoAr = sliceInfoAr;

      this.onPictureDecoded(buffer, width, height, infos);
    }.bind(this);
  }

  var ModuleCallback = getModule.apply(fakeWindow, [function () {}, onPicFun]);

  var MAX_STREAM_BUFFER_LENGTH = 1024 * 1024;

  var instance = this;
  this.onPictureDecoded = function (buffer, width, height, infos) {};

  this.onDecoderReady = function () {};

  var bufferedCalls = [];
  this.decode = function decode(typedAr, parInfo, copyDoneFun) {
    bufferedCalls.push([typedAr, parInfo, copyDoneFun]);
  };

  ModuleCallback(function (Module) {
    var HEAP8 = Module.HEAP8;
    var HEAPU8 = Module.HEAPU8;
    var HEAP16 = Module.HEAP16;
    var HEAP32 = Module.HEAP32;
    // from old constructor
    Module._broadwayInit();

    /**
     * Creates a typed array from a HEAP8 pointer. 
     */
    toU8Array = function toU8Array(ptr, length) {
      return HEAPU8.subarray(ptr, ptr + length);
    };
    toU32Array = function toU32Array(ptr, length) {
      //var tmp = HEAPU8.subarray(ptr, ptr + (length * 4));
      return new Uint32Array(HEAPU8.buffer, ptr, length);
    };
    instance.streamBuffer = toU8Array(Module._broadwayCreateStream(MAX_STREAM_BUFFER_LENGTH), MAX_STREAM_BUFFER_LENGTH);
    instance.pictureBuffers = {};
    // collect extra infos that are provided with the nal units
    instance.infoAr = [];

    /**
     * Decodes a stream buffer. This may be one single (unframed) NAL unit without the
     * start code, or a sequence of NAL units with framing start code prefixes. This
     * function overwrites stream buffer allocated by the codec with the supplied buffer.
     */

    var sliceNum = 0;
    if (instance.options.sliceMode) {
      sliceNum = instance.options.sliceNum;

      instance.decode = function decode(typedAr, parInfo, copyDoneFun) {
        instance.infoAr.push(parInfo);
        parInfo.startDecoding = nowValue();
        var nals = parInfo.nals;
        var i;
        if (!nals) {
          nals = [];
          parInfo.nals = nals;
          var l = typedAr.length;
          var foundSomething = false;
          var lastFound = 0;
          var lastStart = 0;
          for (i = 0; i < l; ++i) {
            if (typedAr[i] === 1) {
              if (typedAr[i - 1] === 0 && typedAr[i - 2] === 0) {
                var startPos = i - 2;
                if (typedAr[i - 3] === 0) {
                  startPos = i - 3;
                };
                // its a nal;
                if (foundSomething) {
                  nals.push({
                    offset: lastFound,
                    end: startPos,
                    type: typedAr[lastStart] & 31
                  });
                };
                lastFound = startPos;
                lastStart = startPos + 3;
                if (typedAr[i - 3] === 0) {
                  lastStart = startPos + 4;
                };
                foundSomething = true;
              };
            };
          };
          if (foundSomething) {
            nals.push({
              offset: lastFound,
              end: i,
              type: typedAr[lastStart] & 31
            });
          };
        };

        var currentSlice = 0;
        var playAr;
        var offset = 0;
        for (i = 0; i < nals.length; ++i) {
          if (nals[i].type === 1 || nals[i].type === 5) {
            if (currentSlice === sliceNum) {
              playAr = typedAr.subarray(nals[i].offset, nals[i].end);
              instance.streamBuffer[offset] = 0;
              offset += 1;
              instance.streamBuffer.set(playAr, offset);
              offset += playAr.length;
            };
            currentSlice += 1;
          } else {
            playAr = typedAr.subarray(nals[i].offset, nals[i].end);
            instance.streamBuffer[offset] = 0;
            offset += 1;
            instance.streamBuffer.set(playAr, offset);
            offset += playAr.length;
            Module._broadwayPlayStream(offset);
            offset = 0;
          };
        };
        copyDoneFun();
        Module._broadwayPlayStream(offset);
      };
    } else {
      instance.decode = function decode(typedAr, parInfo) {
        window.jTest = window.jTest || 1;
        console.info("joseph, Decoding[" + window.jTest++ + "], length: " + typedAr.length);

        // collect infos
        if (parInfo) {
          instance.infoAr.push(parInfo);
          parInfo.startDecoding = nowValue();
        };

        instance.streamBuffer.set(typedAr);
        Module._broadwayPlayStream(typedAr.length);
      };
    };

    if (bufferedCalls.length) {
      var bi = 0;
      for (bi = 0; bi < bufferedCalls.length; ++bi) {
        instance.decode(bufferedCalls[bi][0], bufferedCalls[bi][1], bufferedCalls[bi][2]);
      };
      bufferedCalls = [];
    };

    instance.onDecoderReady(instance);
  });
};
VideoDecoderEngine.prototype = {};

/*
  
    asm.js implementation of a yuv to rgb convertor
    provided by @soliton4
    
    based on 
    http://www.wordsaretoys.com/2013/10/18/making-yuv-conversion-a-little-faster/
  
  */

// factory to create asm.js yuv -> rgb convertor for a given resolution
var asmInstances = {};
var getAsm = function getAsm(parWidth, parHeight) {
  var idStr = "" + parWidth + "x" + parHeight;
  if (asmInstances[idStr]) {
    return asmInstances[idStr];
  };

  var lumaSize = parWidth * parHeight;
  var chromaSize = (lumaSize | 0) >> 2;

  var inpSize = lumaSize + chromaSize + chromaSize;
  var outSize = parWidth * parHeight * 4;
  var cacheSize = Math.pow(2, 24) * 4;
  var size = inpSize + outSize + cacheSize;

  var chunkSize = Math.pow(2, 24);
  var heapSize = chunkSize;
  while (heapSize < size) {
    heapSize += chunkSize;
  };
  var heap = new ArrayBuffer(heapSize);

  var res = asmFactory(global, {}, heap);
  res.init(parWidth, parHeight);
  asmInstances[idStr] = res;

  res.heap = heap;
  res.out = new Uint8Array(heap, 0, outSize);
  res.inp = new Uint8Array(heap, outSize, inpSize);
  res.outSize = outSize;

  return res;
};

function asmFactory(stdlib, foreign, heap) {
  "use asm";

  var imul = stdlib.Math.imul;
  var min = stdlib.Math.min;
  var max = stdlib.Math.max;
  var pow = stdlib.Math.pow;
  var out = new stdlib.Uint8Array(heap);
  var out32 = new stdlib.Uint32Array(heap);
  var inp = new stdlib.Uint8Array(heap);
  var mem = new stdlib.Uint8Array(heap);
  var mem32 = new stdlib.Uint32Array(heap);

  // for double algo
  /*var vt = 1.370705;
  var gt = 0.698001;
  var gt2 = 0.337633;
  var bt = 1.732446;*/

  var width = 0;
  var height = 0;
  var lumaSize = 0;
  var chromaSize = 0;
  var inpSize = 0;
  var outSize = 0;

  var inpStart = 0;
  var outStart = 0;

  var widthFour = 0;

  var cacheStart = 0;

  function init(parWidth, parHeight) {
    parWidth = parWidth | 0;
    parHeight = parHeight | 0;

    var i = 0;
    var s = 0;

    width = parWidth;
    widthFour = imul(parWidth, 4) | 0;
    height = parHeight;
    lumaSize = imul(width | 0, height | 0) | 0;
    chromaSize = (lumaSize | 0) >> 2;
    outSize = imul(imul(width, height) | 0, 4) | 0;
    inpSize = lumaSize + chromaSize | 0 + chromaSize | 0;

    outStart = 0;
    inpStart = outStart + outSize | 0;
    cacheStart = inpStart + inpSize | 0;

    // initializing memory (to be on the safe side)
    s = ~~+pow(+2, +24);
    s = imul(s, 4) | 0;

    for (i = 0 | 0; (i | 0) < (s | 0) | 0; i = i + 4 | 0) {
      mem32[(cacheStart + i | 0) >> 2] = 0;
    }
  }

  function doit() {
    var ystart = 0;
    var ustart = 0;
    var vstart = 0;

    var y = 0;
    var yn = 0;
    var u = 0;
    var v = 0;

    var o = 0;

    var line = 0;
    var col = 0;

    var usave = 0;
    var vsave = 0;

    var ostart = 0;
    var cacheAdr = 0;

    ostart = outStart | 0;

    ystart = inpStart | 0;
    ustart = ystart + lumaSize | 0 | 0;
    vstart = ustart + chromaSize | 0;

    for (line = 0; (line | 0) < (height | 0); line = line + 2 | 0) {
      usave = ustart;
      vsave = vstart;
      for (col = 0; (col | 0) < (width | 0); col = col + 2 | 0) {
        y = inp[ystart >> 0] | 0;
        yn = inp[(ystart + width | 0) >> 0] | 0;

        u = inp[ustart >> 0] | 0;
        v = inp[vstart >> 0] | 0;

        cacheAdr = ((y << 16 | 0) + (u << 8 | 0) | 0) + v | 0;
        o = mem32[(cacheStart + cacheAdr | 0) >> 2] | 0;
        if (o) {} else {
          o = yuv2rgbcalc(y, u, v) | 0;
          mem32[(cacheStart + cacheAdr | 0) >> 2] = o | 0;
        };
        mem32[ostart >> 2] = o;

        cacheAdr = ((yn << 16 | 0) + (u << 8 | 0) | 0) + v | 0;
        o = mem32[(cacheStart + cacheAdr | 0) >> 2] | 0;
        if (o) {} else {
          o = yuv2rgbcalc(yn, u, v) | 0;
          mem32[(cacheStart + cacheAdr | 0) >> 2] = o | 0;
        };
        mem32[(ostart + widthFour | 0) >> 2] = o;

        //yuv2rgb5(y, u, v, ostart);
        //yuv2rgb5(yn, u, v, (ostart + widthFour)|0);
        ostart = ostart + 4 | 0;

        // next step only for y. u and v stay the same
        ystart = ystart + 1 | 0;
        y = inp[ystart >> 0] | 0;
        yn = inp[(ystart + width | 0) >> 0] | 0;

        //yuv2rgb5(y, u, v, ostart);
        cacheAdr = ((y << 16 | 0) + (u << 8 | 0) | 0) + v | 0;
        o = mem32[(cacheStart + cacheAdr | 0) >> 2] | 0;
        if (o) {} else {
          o = yuv2rgbcalc(y, u, v) | 0;
          mem32[(cacheStart + cacheAdr | 0) >> 2] = o | 0;
        };
        mem32[ostart >> 2] = o;

        //yuv2rgb5(yn, u, v, (ostart + widthFour)|0);
        cacheAdr = ((yn << 16 | 0) + (u << 8 | 0) | 0) + v | 0;
        o = mem32[(cacheStart + cacheAdr | 0) >> 2] | 0;
        if (o) {} else {
          o = yuv2rgbcalc(yn, u, v) | 0;
          mem32[(cacheStart + cacheAdr | 0) >> 2] = o | 0;
        };
        mem32[(ostart + widthFour | 0) >> 2] = o;
        ostart = ostart + 4 | 0;

        //all positions inc 1

        ystart = ystart + 1 | 0;
        ustart = ustart + 1 | 0;
        vstart = vstart + 1 | 0;
      };
      ostart = ostart + widthFour | 0;
      ystart = ystart + width | 0;
    }
  }

  function yuv2rgbcalc(y, u, v) {
    y = y | 0;
    u = u | 0;
    v = v | 0;

    var r = 0;
    var g = 0;
    var b = 0;

    var o = 0;

    var a0 = 0;
    var a1 = 0;
    var a2 = 0;
    var a3 = 0;
    var a4 = 0;

    a0 = imul(1192, y - 16 | 0) | 0;
    a1 = imul(1634, v - 128 | 0) | 0;
    a2 = imul(832, v - 128 | 0) | 0;
    a3 = imul(400, u - 128 | 0) | 0;
    a4 = imul(2066, u - 128 | 0) | 0;

    r = (a0 + a1 | 0) >> 10 | 0;
    g = ((a0 - a2 | 0) - a3 | 0) >> 10 | 0;
    b = (a0 + a4 | 0) >> 10 | 0;

    if ((r & 255 | 0) != (r | 0) | 0) {
      r = min(255, max(0, r | 0) | 0) | 0;
    }
    if ((g & 255 | 0) != (g | 0) | 0) {
      g = min(255, max(0, g | 0) | 0) | 0;
    }
    if ((b & 255 | 0) != (b | 0) | 0) {
      b = min(255, max(0, b | 0) | 0) | 0;
    }

    o = 255;
    o = o << 8 | 0;
    o = o + b | 0;
    o = o << 8 | 0;
    o = o + g | 0;
    o = o << 8 | 0;
    o = o + r | 0;

    return o | 0;
  };

  return {
    init: init,
    doit: doit
  };
};

/*
    potential worker initialization
  
  */
if (typeof self != "undefined") {
  var isWorker = false;
  var decoder;
  var reuseMemory = false;
  var sliceMode = false;
  var sliceNum = 0;
  var sliceCnt = 0;
  var lastSliceNum = 0;
  var sliceInfoAr;
  var lastBuf;
  var awaiting = 0;
  var pile = [];
  var startDecoding;
  var finishDecoding;
  var timeDecoding;

  var memAr = [];
  var getMem = function getMem(length) {
    if (memAr.length) {
      var u = memAr.shift();
      while (u && u.byteLength !== length) {
        u = memAr.shift();
      };
      if (u) {
        return u;
      };
    };
    return new ArrayBuffer(length);
  };

  var copySlice = function copySlice(source, target, infoAr, width, height) {

    var length = width * height;
    var length4 = length / 4;
    var plane2 = length;
    var plane3 = length + length4;

    var copy16 = function copy16(parBegin, parEnd) {
      var i = 0;
      for (i = 0; i < 16; ++i) {
        var begin = parBegin + width * i;
        var end = parEnd + width * i;
        target.set(source.subarray(begin, end), begin);
      };
    };
    var copy8 = function copy8(parBegin, parEnd) {
      var i = 0;
      for (i = 0; i < 8; ++i) {
        var begin = parBegin + width / 2 * i;
        var end = parEnd + width / 2 * i;
        target.set(source.subarray(begin, end), begin);
      };
    };
    var copyChunk = function copyChunk(begin, end) {
      target.set(source.subarray(begin, end), begin);
    };

    var begin = infoAr[0];
    var end = infoAr[1];
    if (end > 0) {
      copy16(begin, end);
      copy8(infoAr[2], infoAr[3]);
      copy8(infoAr[4], infoAr[5]);
    };
    begin = infoAr[6];
    end = infoAr[7];
    if (end > 0) {
      copy16(begin, end);
      copy8(infoAr[8], infoAr[9]);
      copy8(infoAr[10], infoAr[11]);
    };

    begin = infoAr[12];
    end = infoAr[15];
    if (end > 0) {
      copyChunk(begin, end);
      copyChunk(infoAr[13], infoAr[16]);
      copyChunk(infoAr[14], infoAr[17]);
    };
  };

  var sliceMsgFun = function sliceMsgFun() {};

  var setSliceCnt = function setSliceCnt(parSliceCnt) {
    sliceCnt = parSliceCnt;
    lastSliceNum = sliceCnt - 1;
  };

  self.addEventListener('message', function (e) {
    if (isWorker) {
      if (reuseMemory) {
        if (e.data.reuse) {
          memAr.push(e.data.reuse);
        };
      };
      if (e.data.buf) {
        if (sliceMode && awaiting !== 0) {
          pile.push(e.data);
        } else {
          decoder.decode(new Uint8Array(e.data.buf, e.data.offset || 0, e.data.length), e.data.info, function () {
            if (sliceMode && sliceNum !== lastSliceNum) {
              postMessage(e.data, [e.data.buf]);
            };
          });
        };
        return;
      };

      if (e.data.slice) {
        // update ref pic
        var copyStart = nowValue();
        copySlice(new Uint8Array(e.data.slice), lastBuf, e.data.infos[0].sliceInfoAr, e.data.width, e.data.height);
        // is it the one? then we need to update it
        if (e.data.theOne) {
          copySlice(lastBuf, new Uint8Array(e.data.slice), sliceInfoAr, e.data.width, e.data.height);
          if (timeDecoding > e.data.infos[0].timeDecoding) {
            e.data.infos[0].timeDecoding = timeDecoding;
          };
          e.data.infos[0].timeCopy += nowValue() - copyStart;
        };
        // move on
        postMessage(e.data, [e.data.slice]);

        // next frame in the pipe?
        awaiting -= 1;
        if (awaiting === 0 && pile.length) {
          var data = pile.shift();
          decoder.decode(new Uint8Array(data.buf, data.offset || 0, data.length), data.info, function () {
            if (sliceMode && sliceNum !== lastSliceNum) {
              postMessage(data, [data.buf]);
            };
          });
        };
        return;
      };

      if (e.data.setSliceCnt) {
        setSliceCnt(e.data.sliceCnt);
        return;
      };
    } else {
      if (e.data && e.data.type === "Broadway.js - Worker init") {
        isWorker = true;
        decoder = new VideoDecoderEngine(e.data.options);

        if (e.data.options.sliceMode) {
          reuseMemory = true;
          sliceMode = true;
          sliceNum = e.data.options.sliceNum;
          setSliceCnt(e.data.options.sliceCnt);

          decoder.onPictureDecoded = function (buffer, width, height, infos) {

            // buffer needs to be copied because we give up ownership
            var copyU8 = new Uint8Array(getMem(buffer.length));
            copySlice(buffer, copyU8, infos[0].sliceInfoAr, width, height);

            startDecoding = infos[0].startDecoding;
            finishDecoding = infos[0].finishDecoding;
            timeDecoding = finishDecoding - startDecoding;
            infos[0].timeDecoding = timeDecoding;
            infos[0].timeCopy = 0;

            postMessage({
              slice: copyU8.buffer,
              sliceNum: sliceNum,
              width: width,
              height: height,
              infos: infos
            }, [copyU8.buffer]); // 2nd parameter is used to indicate transfer of ownership

            awaiting = sliceCnt - 1;

            lastBuf = buffer;
            sliceInfoAr = infos[0].sliceInfoAr;
          };
        } else if (e.data.options.reuseMemory) {
          reuseMemory = true;
          decoder.onPictureDecoded = function (buffer, width, height, infos) {

            // buffer needs to be copied because we give up ownership
            var copyU8 = new Uint8Array(getMem(buffer.length));
            copyU8.set(buffer, 0, buffer.length);

            postMessage({
              buf: copyU8.buffer,
              length: buffer.length,
              width: width,
              height: height,
              infos: infos
            }, [copyU8.buffer]); // 2nd parameter is used to indicate transfer of ownership
          };
        } else {
          decoder.onPictureDecoded = function (buffer, width, height, infos) {
            if (buffer) {
              buffer = new Uint8Array(buffer);
            };

            // buffer needs to be copied because we give up ownership
            var copyU8 = new Uint8Array(buffer.length);
            copyU8.set(buffer, 0, buffer.length);

            postMessage({
              buf: copyU8.buffer,
              length: buffer.length,
              width: width,
              height: height,
              infos: infos
            }, [copyU8.buffer]); // 2nd parameter is used to indicate transfer of ownership
          };
        };
        postMessage({ consoleLog: "broadway worker initialized" });
      };
    };
  }, false);
};

VideoDecoderEngine.nowValue = nowValue;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/player2/video_render_engine.js":
/*!********************************************!*\
  !*** ./src/player2/video_render_engine.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//
//  Copyright (c) 2015 Paperspace Co. All rights reserved.
//
//  Permission is hereby granted, free of charge, to any person obtaining a copy
//  of this software and associated documentation files (the "Software"), to
//  deal in the Software without restriction, including without limitation the
//  rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
//  sell copies of the Software, and to permit persons to whom the Software is
//  furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in
//  all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
//  IN THE SOFTWARE.
//


function concatenate(constructor) {
  var length = 0;

  for (var _len = arguments.length, arrays = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arrays[_key - 1] = arguments[_key];
  }

  for (var _iterator = arrays, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var arr = _ref;

    length += arr.length;
  }
  var result = new constructor(length);
  var offset = 0;
  for (var _iterator2 = arrays, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
    var _ref2;

    if (_isArray2) {
      if (_i2 >= _iterator2.length) break;
      _ref2 = _iterator2[_i2++];
    } else {
      _i2 = _iterator2.next();
      if (_i2.done) break;
      _ref2 = _i2.value;
    }

    var _arr = _ref2;

    result.set(_arr, offset);
    offset += _arr.length;
  }
  return result;
}

function YUV2RGB(Y, U, V) {
  // Method1
  // var B = (Y + 1.732446 * (U - 128));                                    // b分量
  // var G = (Y - 0.698001 * (U - 128) - 0.703125 * (V - 128));             // g分量
  // var R = (Y + 1.370705 * (V - 128));                                    // r分量

  // Method2
  var R = Y + 1.402 * (V - 128);
  var G = Y - 0.344 * (U - 128) - 0.714 * (V - 128);
  var B = Y + 1.772 * (U - 128);

  if (R < 0) {
    R = 0;
  }
  if (G < 0) {
    G = 0;
  }
  if (B < 0) {
    B = 0;
  }
  if (R > 255) {
    R = 255;
  }
  if (G > 255) {
    G = 255;
  }
  if (B > 255) {
    B = 255;
  }

  return [R, G, B];
}

function yuv2rgbcalc(y, u, v) {
  y = y | 0;
  u = u | 0;
  v = v | 0;

  var r = 0;
  var g = 0;
  var b = 0;

  var o = 0;

  var a0 = 0;
  var a1 = 0;
  var a2 = 0;
  var a3 = 0;
  var a4 = 0;

  a0 = Math.imul(1192, y - 16 | 0) | 0;
  a1 = Math.imul(1634, v - 128 | 0) | 0;
  a2 = Math.imul(832, v - 128 | 0) | 0;
  a3 = Math.imul(400, u - 128 | 0) | 0;
  a4 = Math.imul(2066, u - 128 | 0) | 0;

  r = (a0 + a1 | 0) >> 10 | 0;
  g = ((a0 - a2 | 0) - a3 | 0) >> 10 | 0;
  b = (a0 + a4 | 0) >> 10 | 0;

  if ((r & 255 | 0) != (r | 0) | 0) {
    r = Math.min(255, Math.max(0, r | 0) | 0) | 0;
  };
  if ((g & 255 | 0) != (g | 0) | 0) {
    g = Math.min(255, Math.max(0, g | 0) | 0) | 0;
  };
  if ((b & 255 | 0) != (b | 0) | 0) {
    b = Math.min(255, Math.max(0, b | 0) | 0) | 0;
  };

  o = 255;
  o = o << 8 | 0;
  o = o + b | 0;
  o = o << 8 | 0;
  o = o + g | 0;
  o = o << 8 | 0;
  o = o + r | 0;

  return [r, g, b];
  // old
  //return o | 0;
};

function convertYUV2RGB(yData, uData, vData) {
  var yDataLen = yData.byteLength;
  var uDataLen = uData.byteLength;
  var vDataLen = vData.byteLength;

  // convert YUV420 to RGB555
  var fileData = null;

  var uvIndex = 0;
  for (var i = 0; i < yDataLen; i++) {
    var Y = yData[i];
    var U = uData[uvIndex];
    var V = vData[uvIndex];
    var Cr = U;
    var Cb = V;

    //vat rgb = YUV2RGB(Y, U, V);
    var rgb = yuv2rgbcalc(Y, U, V);

    var uint8 = new Uint8Array(rgb);

    if (fileData === null) {
      fileData = uint8;
    } else {
      fileData = concatenate(Uint8Array, fileData, uint8);
    }

    if (i % 4 === 0) {
      uvIndex++;
    }
  }

  var blob = new Blob([fileData], {
    type: "application/octet-stream"
  });
  var fileName = '1.rgb';
  saveAs(blob, fileName);
}

/**
 * This class can be used to render output pictures from an H264bsdDecoder to a canvas element.
 * If available the content is rendered using WebGL.
 */

var VideoRenderEngine = exports.VideoRenderEngine = function () {
  function VideoRenderEngine(parOptions) {
    _classCallCheck(this, VideoRenderEngine);

    this.parOptions = parOptions || {};

    this.canvasElement = parOptions.canvas;
    this.contextOptions = parOptions.contextOptions;

    this.type = parOptions.type || "yuv420";

    this.customYUV444 = parOptions.customYUV444;

    this.conversionType = parOptions.conversionType || "rec601";

    this.width = parOptions.width || 640;
    this.height = parOptions.height || 320;

    this.animationTime = parOptions.animationTime || 0;

    this.canvasElement.width = this.width;
    this.canvasElement.height = this.height;

    this.initContextGL();

    if (this.contextGL) {
      this.initProgram();
      this.initBuffers();
      this.initTextures();
    }
  }

  /**
   * Returns true if the canvas supports WebGL
   */


  VideoRenderEngine.prototype.isWebGL = function isWebGL() {
    return this.contextGL;
  };

  /**
   * Create the GL context from the canvas element
   */


  VideoRenderEngine.prototype.initContextGL = function initContextGL() {
    var canvas = this.canvasElement;
    var gl = null;

    var validContextNames = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"];
    var nameIndex = 0;

    while (!gl && nameIndex < validContextNames.length) {
      var contextName = validContextNames[nameIndex];

      try {
        if (this.contextOptions) {
          gl = canvas.getContext(contextName, this.contextOptions);
        } else {
          gl = canvas.getContext(contextName);
        };
      } catch (e) {
        gl = null;
      }

      if (!gl || typeof gl.getParameter !== "function") {
        gl = null;
      }

      ++nameIndex;
    };

    this.contextGL = gl;
  };

  /**
   * Initialize GL shader program
   */


  VideoRenderEngine.prototype.initProgram = function initProgram() {
    var gl = this.contextGL;

    // vertex shader is the same for all types
    var vertexShaderScript;
    var fragmentShaderScript;

    if (this.type === "yuv420") {
      vertexShaderScript = ['attribute vec4 vertexPos;', 'attribute vec4 texturePos;', 'attribute vec4 uTexturePos;', 'attribute vec4 vTexturePos;', 'varying vec2 textureCoord;', 'varying vec2 uTextureCoord;', 'varying vec2 vTextureCoord;', 'void main()', '{', '  gl_Position = vertexPos;', '  textureCoord = texturePos.xy;', '  uTextureCoord = uTexturePos.xy;', '  vTextureCoord = vTexturePos.xy;', '}'].join('\n');

      fragmentShaderScript = ['precision highp float;', 'varying highp vec2 textureCoord;', 'varying highp vec2 uTextureCoord;', 'varying highp vec2 vTextureCoord;', 'uniform sampler2D ySampler;', 'uniform sampler2D uSampler;', 'uniform sampler2D vSampler;', 'uniform mat4 YUV2RGB;', 'void main(void) {', '  highp float y = texture2D(ySampler,  textureCoord).r;', '  highp float u = texture2D(uSampler,  uTextureCoord).r;', '  highp float v = texture2D(vSampler,  vTextureCoord).r;', '  gl_FragColor = vec4(y, u, v, 1) * YUV2RGB;', '}'].join('\n');
    } else if (this.type === "yuv422") {
      vertexShaderScript = ['attribute vec4 vertexPos;', 'attribute vec4 texturePos;', 'varying vec2 textureCoord;', 'void main()', '{', '  gl_Position = vertexPos;', '  textureCoord = texturePos.xy;', '}'].join('\n');

      fragmentShaderScript = ['precision highp float;', 'varying highp vec2 textureCoord;', 'uniform sampler2D sampler;', 'uniform highp vec2 resolution;', 'uniform mat4 YUV2RGB;', 'void main(void) {', '  highp float texPixX = 1.0 / resolution.x;', '  highp float logPixX = 2.0 / resolution.x;', // half the resolution of the texture
      '  highp float logHalfPixX = 4.0 / resolution.x;', // half of the logical resolution so every 4th pixel
      '  highp float steps = floor(textureCoord.x / logPixX);', '  highp float uvSteps = floor(textureCoord.x / logHalfPixX);', '  highp float y = texture2D(sampler, vec2((logPixX * steps) + texPixX, textureCoord.y)).r;', '  highp float u = texture2D(sampler, vec2((logHalfPixX * uvSteps), textureCoord.y)).r;', '  highp float v = texture2D(sampler, vec2((logHalfPixX * uvSteps) + texPixX + texPixX, textureCoord.y)).r;',

      //'  highp float y = texture2D(sampler,  textureCoord).r;',
      //'  gl_FragColor = vec4(y, u, v, 1) * YUV2RGB;',
      '  gl_FragColor = vec4(y, u, v, 1.0) * YUV2RGB;', '}'].join('\n');
    };

    var YUV2RGB = [];

    if (this.conversionType == "rec709") {
      // ITU-T Rec. 709
      YUV2RGB = [1.16438, 0.00000, 1.79274, -0.97295, 1.16438, -0.21325, -0.53291, 0.30148, 1.16438, 2.11240, 0.00000, -1.13340, 0, 0, 0, 1];
    } else {
      // assume ITU-T Rec. 601
      YUV2RGB = [1.16438, 0.00000, 1.59603, -0.87079, 1.16438, -0.39176, -0.81297, 0.52959, 1.16438, 2.01723, 0.00000, -1.08139, 0, 0, 0, 1];
    };

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderScript);
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      console.log('Vertex shader failed to compile: ' + gl.getShaderInfoLog(vertexShader));
    }

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderScript);
    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      console.log('Fragment shader failed to compile: ' + gl.getShaderInfoLog(fragmentShader));
    }

    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.log('Program failed to compile: ' + gl.getProgramInfoLog(program));
    }

    gl.useProgram(program);

    var YUV2RGBRef = gl.getUniformLocation(program, 'YUV2RGB');
    gl.uniformMatrix4fv(YUV2RGBRef, false, YUV2RGB);

    this.shaderProgram = program;
  };

  /**
   * Initialize vertex buffers, texture buffers and attach to shader program
   */
  VideoRenderEngine.prototype.initBuffers = function initBuffers() {
    var gl = this.contextGL;
    var program = this.shaderProgram;

    // set the vertex position
    var vertexPosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 1, -1, 1, 1, -1, -1, -1]), gl.STATIC_DRAW);

    var vertexPosRef = gl.getAttribLocation(program, 'vertexPos');
    gl.enableVertexAttribArray(vertexPosRef);
    gl.vertexAttribPointer(vertexPosRef, 2, gl.FLOAT, false, 0, 0);

    if (this.animationTime) {
      var animationTime = this.animationTime;
      var timePassed = 0;
      var stepTime = 15;

      var aniFun = function aniFun() {
        timePassed += stepTime;
        var mul = 1 * timePassed / animationTime;

        if (timePassed >= animationTime) {
          mul = 1;
        } else {
          setTimeout(aniFun, stepTime);
        };

        var neg = -1 * mul;
        var pos = 1 * mul;

        var vertexPosBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([pos, pos, neg, pos, pos, neg, neg, neg]), gl.STATIC_DRAW);

        var vertexPosRef = gl.getAttribLocation(program, 'vertexPos');
        gl.enableVertexAttribArray(vertexPosRef);
        gl.vertexAttribPointer(vertexPosRef, 2, gl.FLOAT, false, 0, 0);

        try {
          gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        } catch (e) {};
      };
      aniFun();
    };

    // set the texture position
    var texturePosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]), gl.STATIC_DRAW);

    var texturePosRef = gl.getAttribLocation(program, 'texturePos');
    gl.enableVertexAttribArray(texturePosRef);
    gl.vertexAttribPointer(texturePosRef, 2, gl.FLOAT, false, 0, 0);

    this.texturePosBuffer = texturePosBuffer;

    if (this.type === "yuv420") {
      var uTexturePosBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, uTexturePosBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]), gl.STATIC_DRAW);

      var uTexturePosRef = gl.getAttribLocation(program, 'uTexturePos');
      gl.enableVertexAttribArray(uTexturePosRef);
      gl.vertexAttribPointer(uTexturePosRef, 2, gl.FLOAT, false, 0, 0);

      // save vertex buffer
      this.uTexturePosBuffer = uTexturePosBuffer;

      var vTexturePosBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vTexturePosBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]), gl.STATIC_DRAW);

      var vTexturePosRef = gl.getAttribLocation(program, 'vTexturePos');
      gl.enableVertexAttribArray(vTexturePosRef);
      gl.vertexAttribPointer(vTexturePosRef, 2, gl.FLOAT, false, 0, 0);

      this.vTexturePosBuffer = vTexturePosBuffer;
    };
  };

  /**
   * Initialize GL textures and attach to shader program
   */
  VideoRenderEngine.prototype.initTextures = function initTextures() {
    var gl = this.contextGL;
    var program = this.shaderProgram;

    if (this.type === "yuv420") {
      var yTextureRef = this.initTexture();
      var ySamplerRef = gl.getUniformLocation(program, 'ySampler');
      // 
      gl.uniform1i(ySamplerRef, 0);
      this.yTextureRef = yTextureRef;

      var uTextureRef = this.initTexture();
      var uSamplerRef = gl.getUniformLocation(program, 'uSampler');
      gl.uniform1i(uSamplerRef, 1);
      this.uTextureRef = uTextureRef;

      var vTextureRef = this.initTexture();
      var vSamplerRef = gl.getUniformLocation(program, 'vSampler');
      gl.uniform1i(vSamplerRef, 2);
      this.vTextureRef = vTextureRef;
    } else if (this.type === "yuv422") {
      // only one texture for 422
      var textureRef = this.initTexture();
      var samplerRef = gl.getUniformLocation(program, 'sampler');
      gl.uniform1i(samplerRef, 0);
      this.textureRef = textureRef;
    }
  };

  /**
   * Create and configure a single texture
   */


  VideoRenderEngine.prototype.initTexture = function initTexture() {
    var gl = this.contextGL;

    var textureRef = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, textureRef);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.bindTexture(gl.TEXTURE_2D, null);

    return textureRef;
  };

  /**
   * Draw the next output picture using WebGL
   */
  VideoRenderEngine.prototype.drawNextOuptutPictureGLYUV420 = function drawNextOuptutPictureGLYUV420(par) {
    var gl = this.contextGL;
    var texturePosBuffer = this.texturePosBuffer;
    var uTexturePosBuffer = this.uTexturePosBuffer;
    var vTexturePosBuffer = this.vTexturePosBuffer;

    var yTextureRef = this.yTextureRef;
    var uTextureRef = this.uTextureRef;
    var vTextureRef = this.vTextureRef;

    var yData = par.yData;
    var uData = par.uData;
    var vData = par.vData;

    var width = this.width;
    var height = this.height;

    var yDataPerRow = par.yDataPerRow || width;
    var yRowCnt = par.yRowCnt || height;

    var uDataPerRow = par.uDataPerRow || width / 2;
    var uRowCnt = par.uRowCnt || height / 2;

    var vDataPerRow = par.vDataPerRow || uDataPerRow;
    var vRowCnt = par.vRowCnt || uRowCnt;

    gl.viewport(0, 0, width, height);

    // prepare the vertex buffer
    var tTop = 0;
    var tLeft = 0;
    var tBottom = height / yRowCnt;
    var tRight = width / yDataPerRow;
    var texturePosValues = new Float32Array([tRight, tTop, tLeft, tTop, tRight, tBottom, tLeft, tBottom]);

    gl.bindBuffer(gl.ARRAY_BUFFER, texturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, texturePosValues, gl.DYNAMIC_DRAW);

    if (this.customYUV444) {
      tBottom = height / uRowCnt;
      tRight = width / uDataPerRow;
    } else {
      tBottom = height / 2 / uRowCnt;
      tRight = width / 2 / uDataPerRow;
    };
    var uTexturePosValues = new Float32Array([tRight, tTop, tLeft, tTop, tRight, tBottom, tLeft, tBottom]);

    gl.bindBuffer(gl.ARRAY_BUFFER, uTexturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, uTexturePosValues, gl.DYNAMIC_DRAW);

    if (this.customYUV444) {
      tBottom = height / vRowCnt;
      tRight = width / vDataPerRow;
    } else {
      tBottom = height / 2 / vRowCnt;
      tRight = width / 2 / vDataPerRow;
    };
    var vTexturePosValues = new Float32Array([tRight, tTop, tLeft, tTop, tRight, tBottom, tLeft, tBottom]);

    gl.bindBuffer(gl.ARRAY_BUFFER, vTexturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vTexturePosValues, gl.DYNAMIC_DRAW);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, yTextureRef);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, yDataPerRow, yRowCnt, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, yData);

    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, uTextureRef);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, uDataPerRow, uRowCnt, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, uData);

    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, vTextureRef);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, vDataPerRow, vRowCnt, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, vData);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };

  VideoRenderEngine.prototype.drawNextOuptutPictureGLYUV422 = function drawNextOuptutPictureGLYUV422(par) {
    var gl = this.contextGL;
    var texturePosBuffer = this.texturePosBuffer;

    var textureRef = this.textureRef;

    var data = par.data;

    var width = this.width;
    var height = this.height;

    var dataPerRow = par.dataPerRow || width * 2;
    var rowCnt = par.rowCnt || height;

    gl.viewport(0, 0, width, height);

    var tTop = 0;
    var tLeft = 0;
    var tBottom = height / rowCnt;
    var tRight = width / (dataPerRow / 2);
    var texturePosValues = new Float32Array([tRight, tTop, tLeft, tTop, tRight, tBottom, tLeft, tBottom]);

    gl.bindBuffer(gl.ARRAY_BUFFER, texturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, texturePosValues, gl.DYNAMIC_DRAW);

    gl.uniform2f(gl.getUniformLocation(this.shaderProgram, 'resolution'), dataPerRow, height);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, textureRef);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, dataPerRow, rowCnt, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, data);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };

  /**
   * Draw picture data to the canvas.
   * If this object is using WebGL, the data must be an I420 formatted ArrayBuffer,
   * Otherwise, data must be an RGBA formatted ArrayBuffer.
   */


  VideoRenderEngine.prototype.drawNextOutputPicture = function drawNextOutputPicture(width, height, croppingParams, data) {
    var gl = this.contextGL;

    if (gl) {
      if (this.type === 'yuv420') {
        this.drawNextOuptutPictureGLYUV420(width);
      } else if (this.type === 'yuv422') {
        this.drawNextOuptutPictureGLYUV422(width);
      }
    } else {
      this.drawNextOuptutPictureRGBA(width, height, croppingParams, data);
    }
  };

  // Split YUV420 file to Y,U,V data


  VideoRenderEngine.prototype.drawYUVData = function drawYUVData(data) {
    var yDataLen = data.length / 6 * 4;
    var uDataLen = data.length / 6;
    var vDataLen = uDataLen;

    var yData = data.slice(0, yDataLen);
    var uData = data.slice(yDataLen, yDataLen + uDataLen);
    var vData = data.slice(yDataLen + uDataLen, data.length);
    this.drawNextOutputPicture({ yData: yData, uData: uData, vData: vData });

    // BD
    // convertYUV2RGB(yData, uData, vData);
    // ED
  };

  /**
   * Draw next output picture using ARGB data on a 2d canvas.
   */


  VideoRenderEngine.prototype.drawNextOuptutPictureRGBA = function drawNextOuptutPictureRGBA(width, height, croppingParams, data) {
    var canvas = this.canvasElement;

    var croppingParams = null;

    var argbData = data;

    var ctx = canvas.getContext('2d');
    var imageData = ctx.getImageData(0, 0, width, height);
    imageData.data.set(argbData);

    if (croppingParams === null) {
      ctx.putImageData(imageData, 0, 0);
    } else {
      ctx.putImageData(imageData, -croppingParams.left, -croppingParams.top, 0, 0, croppingParams.width, croppingParams.height);
    }
  };

  return VideoRenderEngine;
}();

/***/ }),

/***/ 0:
/*!**************************************!*\
  !*** multi ./src/index_unit_test.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\www_htdocs\1\LiteH5Player\src\index_unit_test.ts */"./src/index_unit_test.ts");


/***/ })

/******/ });
//# sourceMappingURL=liteH5Player-unit-test.debug.js.map
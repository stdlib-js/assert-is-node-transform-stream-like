// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";function e(e){return null!==e&&"object"==typeof e&&"function"==typeof e.on&&"function"==typeof e.once&&"function"==typeof e.emit&&"function"==typeof e.addListener&&"function"==typeof e.removeListener&&"function"==typeof e.removeAllListeners&&"function"==typeof e.pipe}function t(t){return function(t){return e(t)&&"function"==typeof t._write&&"object"==typeof t._writableState}(t)&&function(t){return e(t)&&"function"==typeof t._read&&"object"==typeof t._readableState}(t)}return function(e){return t(e)&&"function"==typeof e._transform}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).isNodeTransformStreamLike=t();
//# sourceMappingURL=browser.js.map
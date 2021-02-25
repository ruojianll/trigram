(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.YAO = void 0;
    var YAO;
    (function (YAO) {
        YAO["YIN"] = "YIN";
        YAO["YANG"] = "YANG";
    })(YAO = exports.YAO || (exports.YAO = {}));
});
//# sourceMappingURL=base.js.map
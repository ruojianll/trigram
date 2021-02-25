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
    exports.stringifyMatrix = exports.stringifyList = exports.YAO = void 0;
    var YAO;
    (function (YAO) {
        YAO["YIN"] = "YIN";
        YAO["YANG"] = "YANG";
    })(YAO = exports.YAO || (exports.YAO = {}));
    function stringifyList(list) {
        return list.map(g => g || '').join('\t');
    }
    exports.stringifyList = stringifyList;
    function stringifyMatrix(matrix) {
        return matrix.map(r => stringifyList(r)).join('\n');
    }
    exports.stringifyMatrix = stringifyMatrix;
});
//# sourceMappingURL=base.js.map
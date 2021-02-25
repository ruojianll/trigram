(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "./primordial8", "../gram/hexagram"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Matrix = void 0;
    const tslib_1 = require("tslib");
    const P8 = tslib_1.__importStar(require("./primordial8"));
    const hexagram_1 = tslib_1.__importDefault(require("../gram/hexagram"));
    exports.Matrix = [...P8.List].reverse().map(bottom => [...P8.List].reverse().map(top => new hexagram_1.default([...bottom.yao, ...top.yao])));
});
//# sourceMappingURL=square64.js.map
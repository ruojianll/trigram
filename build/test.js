(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "./prefab/square64", "./base"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require("tslib");
    const Square64 = tslib_1.__importStar(require("./prefab/square64"));
    const Base = tslib_1.__importStar(require("./base"));
    console.log(Base.stringifyMatrix(Square64.Matrix));
});
//# sourceMappingURL=test.js.map
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "./gram/hexagram", "./base"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require("tslib");
    const hexagram_1 = tslib_1.__importDefault(require("./gram/hexagram"));
    const base_1 = require("./base");
    let t = new hexagram_1.default([base_1.YAO.YANG, base_1.YAO.YANG, base_1.YAO.YANG, base_1.YAO.YIN, base_1.YAO.YIN, base_1.YAO.YIN]);
    t.flip(1);
    t.flip();
    t.reverse();
    t.print();
});
//# sourceMappingURL=test.js.map
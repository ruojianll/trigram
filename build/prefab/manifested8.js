(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "../Base", "../gram/trigram"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Matrix = exports.List = void 0;
    const tslib_1 = require("tslib");
    const Base_1 = require("../Base");
    const trigram_1 = tslib_1.__importDefault(require("../gram/trigram"));
    exports.List = [
        new trigram_1.default([Base_1.YAO.YIN, Base_1.YAO.YANG, Base_1.YAO.YIN]),
        new trigram_1.default([Base_1.YAO.YIN, Base_1.YAO.YIN, Base_1.YAO.YIN]),
        new trigram_1.default([Base_1.YAO.YANG, Base_1.YAO.YIN, Base_1.YAO.YIN]),
        new trigram_1.default([Base_1.YAO.YIN, Base_1.YAO.YANG, Base_1.YAO.YANG]),
        new trigram_1.default([Base_1.YAO.YANG, Base_1.YAO.YANG, Base_1.YAO.YANG]),
        new trigram_1.default([Base_1.YAO.YANG, Base_1.YAO.YIN, Base_1.YAO.YANG]),
        new trigram_1.default([Base_1.YAO.YIN, Base_1.YAO.YIN, Base_1.YAO.YANG]),
        new trigram_1.default([Base_1.YAO.YANG, Base_1.YAO.YANG, Base_1.YAO.YANG]),
    ];
    exports.Matrix = [
        [exports.List[3], exports.List[7], exports.List[1]],
        [exports.List[2], null, exports.List[5]],
        [exports.List[6], exports.List[0], exports.List[4]]
    ];
});
//# sourceMappingURL=manifested8.js.map
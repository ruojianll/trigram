(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "../data", "./gram"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require("tslib");
    const Data = tslib_1.__importStar(require("../data"));
    const gram_1 = tslib_1.__importDefault(require("./gram"));
    class Hexagram extends gram_1.default {
        constructor(yao) {
            super({
                yao,
                length: 6,
                data: Data.Hexagrams
            });
        }
        duplicate() {
            return new Hexagram(this.yao);
        }
        print() {
            console.log(this.data.character);
        }
    }
    exports.default = Hexagram;
});
//# sourceMappingURL=hexagram.js.map
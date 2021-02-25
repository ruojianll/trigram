(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../base"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const base_1 = require("../base");
    class Gram {
        constructor(opt) {
            if (opt.yao.length !== opt.length) {
                throw new Error('Invalid length of yao.');
            }
            this.yao = opt.yao;
            this.Length = opt.length;
            this.Data = opt.data;
        }
        flip(yaoIndex) {
            if (yaoIndex !== undefined) {
                if (yaoIndex < 0 || yaoIndex >= this.Length) {
                    throw new Error('Flip out of index.');
                }
                this.yao[yaoIndex] = {
                    [base_1.YAO.YANG]: base_1.YAO.YIN,
                    [base_1.YAO.YIN]: base_1.YAO.YANG
                }[this.yao[yaoIndex]];
            }
            else {
                for (let i = 0; i < this.Length; i++) {
                    this.flip(i);
                }
            }
        }
        reverse() {
            this.yao = this.yao.reverse();
        }
        print() {
            console.log(this.yao.join(','));
        }
        get data() {
            let gram = this.Data.find(t => t.yao.join(',') === this.yao.join(','));
            if (!gram) {
                throw new Error('Not find data.');
            }
            return gram;
        }
    }
    exports.default = Gram;
});
//# sourceMappingURL=gram.js.map
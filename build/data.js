(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "./base"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Hexagrams = exports.Trigrams = void 0;
    const tslib_1 = require("tslib");
    const Base = tslib_1.__importStar(require("./base"));
    exports.Trigrams = [
        {
            yao: [Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG],
            character: '\u2630'
        }, {
            yao: [Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN],
            character: '\u2631'
        }, {
            yao: [Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG],
            character: '\u2632'
        }, {
            yao: [Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN],
            character: '\u2633'
        }, {
            yao: [Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG],
            character: '\u2634'
        }, {
            yao: [Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN],
            character: '\u2635'
        }, {
            yao: [Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG],
            character: '\u2636'
        }, {
            yao: [Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN],
            character: '\u2637'
        }
    ];
    exports.Hexagrams = [
        {
            yao: [Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG],
            character: '\u4dc0'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN],
            character: '\u4dc1'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN],
            character: '\u4dc2'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG],
            character: '\u4dc3'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN],
            character: '\u4dc4'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG],
            character: '\u4dc5'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN],
            character: '\u4dc6'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN],
            character: '\u4dc7'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG],
            character: '\u4dc8'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG],
            character: '\u4dc9'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN],
            character: '\u4dca'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG],
            character: '\u4dcb'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG],
            character: '\u4dcc'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG],
            character: '\u4dcd'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN],
            character: '\u4dce'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN],
            character: '\u4dcf'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN],
            character: '\u4dd0'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG],
            character: '\u4dd1'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN],
            character: '\u4dd2'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG],
            character: '\u4dd3'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG],
            character: '\u4dd4'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG],
            character: '\u4dd5'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG],
            character: '\u4dd6'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN],
            character: '\u4dd7'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG],
            character: '\u4dd8'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG],
            character: '\u4dd9'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG],
            character: '\u4dda'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN],
            character: '\u4ddb'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN],
            character: '\u4ddc'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG],
            character: '\u4ddd'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN],
            character: '\u4dde'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN],
            character: '\u4ddf'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG],
            character: '\u4de0'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN],
            character: '\u4de1'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG],
            character: '\u4de2'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN],
            character: '\u4de3'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG],
            character: '\u4de4'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG],
            character: '\u4de5'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN],
            character: '\u4de6'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN],
            character: '\u4de7'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG],
            character: '\u4de8'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG],
            character: '\u4de9'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN],
            character: '\u4dea'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG],
            character: '\u4deb'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN],
            character: '\u4dec'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YIN],
            character: '\u4ded'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN],
            character: '\u4dee'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN],
            character: '\u4def'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN],
            character: '\u4df0'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG],
            character: '\u4df1'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN],
            character: '\u4df2'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG],
            character: '\u4df3'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG],
            character: '\u4df4'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN],
            character: '\u4df5'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN],
            character: '\u4df6'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG],
            character: '\u4df7'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG],
            character: '\u4df8'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN],
            character: '\u4df9'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG],
            character: '\u4dfa'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN],
            character: '\u4dfb'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG],
            character: '\u4dfc'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YIN],
            character: '\u4dfd'
        },
        {
            yao: [Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN],
            character: '\u4dfe'
        },
        {
            yao: [Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG, Base.YAO.YIN, Base.YAO.YANG],
            character: '\u4dff'
        },
    ];
});
//# sourceMappingURL=data.js.map
const { execSync } = require("child_process");
const { watch } = require('gulp');

exports.default = function () {

    // Or a composed task
    watch('src/**/*.ts', function (cb) {
        execSync('tsc')
        cb();
    });
};


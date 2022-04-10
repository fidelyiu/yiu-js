import type { TaskFunction } from "gulp";

const defaultTask: TaskFunction = function (cb) {
    cb();
};

// exports.jest = jestTask;
exports.default = defaultTask;

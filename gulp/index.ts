import type { TaskFunction } from "gulp";

const defaultTask: TaskFunction = function (cb) {
    cb();
};

// exports.build = build;
exports.default = defaultTask;

import type { TaskFunction } from "gulp";

const defaultTask: TaskFunction = function (cb) {
    cb();
};

export default defaultTask;

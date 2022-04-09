import type { TaskFunction } from "gulp";
import { getVersion } from "jest";

const defaultTask: TaskFunction = function (cb) {
    console.log("jestVersion", getVersion());
    cb();
};

export default defaultTask;

import { series, src, dest } from "gulp";
import { execSync, spawnSync } from "node:child_process";
import through2 from "through2";
import del from "del";

import type { TaskFunction } from "gulp";

/**
 * 拷贝源代码的任务
 */
const copySource: TaskFunction = function () {
    return src("./src/**/*.ts").pipe(dest("./dist/ts/"));
};

/**
 * 拷贝源码type配置文件
 */
const copyTsTypeConfig: TaskFunction = function () {
    return src("./src/tsconfig.type.json")
        .pipe(
            through2.obj(function (file, _, cb) {
                if (file.isBuffer()) {
                    file.contents = Buffer.from(
                        file.contents
                            .toString()
                            .replace(/: "..\/dist/g, ': "..')
                            .replace(/"extends": "..\/tsconfig.base.json",/, '"extends": "../../tsconfig.base.json",')
                    );
                }
                cb(null, file);
            })
        )
        .pipe(dest("./dist/ts/"));
};

/**
 * 编译ts类型文件
 */
const buildTsType: TaskFunction = function (cb) {
    execSync("tsc -p ./dist/ts/tsconfig.type.json", { stdio: "inherit" });
    cb();
};

/**
 * 删除源码type配置文件
 */
const delTsTypeConfig: TaskFunction = function () {
    return del("./dist/ts/tsconfig.type.json", { force: true });
};

/**
 * 拷贝源码ts配置文件
 */
const copyTsConfig: TaskFunction = function () {
    return src("./src/tsconfig.json")
        .pipe(
            through2.obj(function (file, _, cb) {
                if (file.isBuffer()) {
                    file.contents = Buffer.from(file.contents.toString().replace(/"extends": "..\/tsconfig.base.json",/, '"extends": "../../tsconfig.base.json",'));
                }
                cb(null, file);
            })
        )
        .pipe(dest("./dist/ts/"));
};

/**
 * 运行rollup编译代码
 */
const runRollup: TaskFunction = function (cb) {
    spawnSync(
        "node",
        [
            "--experimental-vm-modules",
            "--no-warnings",
            "node_modules/rollup/dist/bin/rollup",
            "--config=./rollup/rollup.config.ts",
            // ts
            "--configPlugin=@rollup/plugin-typescript",
        ],
        { stdio: "inherit" }
    );
    cb();
};

/**
 * 删除源码ts配置文件
 */
const delTsConfig: TaskFunction = function () {
    return del("./dist/ts/tsconfig.json", { force: true });
};

// exports.jest = jestTask;
exports.build = series(copySource, copyTsTypeConfig, buildTsType, delTsTypeConfig, copyTsConfig, runRollup, delTsConfig);

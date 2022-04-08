import { spawnSync, execSync } from "node:child_process";
import { cpSync, rmSync, readFileSync, writeFileSync } from "node:fs";

function bootstrap() {
    // 拷贝ts源码
    console.log("拷贝ts源码!\n");
    cpSync("./src/", "./dist/ts/", { recursive: true });

    // 重写dist中type配置
    console.log("重写dist中ts配置!\n");
    const typeConfigFile = "./dist/ts/tsconfig.type.json";
    const typeConfigFileOldContent = readFileSync(typeConfigFile, { encoding: "utf8" });
    writeFileSync(
        typeConfigFile,
        typeConfigFileOldContent.replace(/: "..\/dist/g, ': "..').replace(/"extends": "..\/tsconfig.base.json",/, '"extends": "../../tsconfig.base.json",'),
        { encoding: "utf8" }
    );

    console.log("编译@types!\n");
    execSync("tsc -p ./dist/ts/tsconfig.type.json", { stdio: "inherit" });

    console.log("删除type.ts配置!\n");
    rmSync("./dist/ts/tsconfig.type.json");

    // 重写dist中type配置
    console.log("重写dist中ts配置!\n");
    const tsConfigFile = "./dist/ts/tsconfig.json";
    const tsConfigFileOldContent = readFileSync(tsConfigFile, { encoding: "utf8" });
    writeFileSync(tsConfigFile, tsConfigFileOldContent.replace(/"extends": "..\/tsconfig.base.json",/, '"extends": "../../tsconfig.base.json",'), { encoding: "utf8" });

    console.log("编译rollup!\n");
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

    // 删除ts配置
    console.log("删除ts配置!\n");
    rmSync("./dist/ts/tsconfig.json");
}

bootstrap();

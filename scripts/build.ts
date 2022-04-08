import { spawnSync, execSync } from "node:child_process";
import { cpSync, rmSync } from "node:fs";

function bootstrap() {
    // 拷贝ts源码
    console.log("拷贝ts源码!\n");
    cpSync("./src/", "./dist/ts/", { recursive: true });

    // 删除ts配置
    console.log("删除ts配置!\n");
    rmSync("./dist/ts/tsconfig.json");

    // 重写dist中type配置
    console.log("3. 重写dist中type配置!\n");

    console.log("3. 编译@types!\n");
    execSync("tsc -p ./src/tsconfig.type.json", { stdio: "inherit" });
    console.log("4. 编译@types成功!\n");

    console.log("5. 编译rollup!\n");
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
    console.log("6. 编译rollup成功!\n");
}

bootstrap();

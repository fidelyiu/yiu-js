import { spawnSync, execSync } from "node:child_process";

function bootstrap() {
    console.log("1. 编译@types!\n");
    execSync("tsc -p ./src/tsconfig.type.json", { stdio: "inherit" });
    console.log("2. 编译@types成功!\n");
    console.log("3. 编译rollup!\n");
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
    console.log("4. 编译rollup成功!\n");
}

bootstrap();

import { spawn } from "node:child_process";

function bootstrap() {
    spawn(
        "node",
        ["--experimental-vm-modules", "--no-warnings", "node_modules/rollup/dist/bin/rollup", "--config=./rollup/rollup.config.ts", "--configPlugin=@rollup/plugin-typescript"],
        {
            stdio: "inherit",
        }
    );
}

bootstrap();

import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { defineConfig } from "rollup";
import type { RollupOptions } from "rollup";

const config: RollupOptions = {
    input: "src/index.ts",
    output: {
        file: "dist/index.js",
        format: "cjs",
    },
    plugins: [typescript(), nodeResolve(), commonjs()],
};

export default defineConfig(config);

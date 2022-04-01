import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import type { RollupOptions } from "rollup";

export function createOptionEsm(fileName: string, minify = false): RollupOptions {
    return {
        input: "src/index.ts",
        plugins: [typescript(), nodeResolve(), commonjs()],
        output: {
            file: `dist/${fileName}.esm${minify ? ".min" : ""}.js`,
            format: "esm",
            plugins: [minify ? terser() : undefined],
        },
    };
}

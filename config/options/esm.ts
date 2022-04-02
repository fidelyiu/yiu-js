import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import type { RollupOptions } from "rollup";
import type { BuildOption } from "./option-type";

export function createOptionEsm(option: BuildOption): RollupOptions {
    const { fileName, minify = false, external = [], globals } = option;
    return {
        input: "src/index.ts",
        plugins: [typescript(), nodeResolve(), commonjs()],
        external,
        output: {
            file: `dist/esm/${fileName}.esm${minify ? ".min" : ""}.js`,
            format: "esm",
            globals,
            plugins: [minify ? terser() : undefined],
        },
    };
}

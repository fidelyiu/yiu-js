import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import type { RollupOptions } from "rollup";
import type { BuildOption } from "./option-type";

export function createOptionUmd(option: BuildOption): RollupOptions {
    const { fileName, outName, minify = false, external = [], globals } = option;
    return {
        input: "src/index.ts",
        plugins: [typescript(), nodeResolve(), commonjs()],
        external,
        output: {
            name: outName,
            file: `dist/umd/${fileName}.umd${external.toString() ? ".ex" : ""}${minify ? ".min" : ""}.js`,
            format: "umd",
            globals,
            plugins: [minify ? terser() : undefined],
        },
    };
}

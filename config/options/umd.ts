import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import type { RollupOptions } from "rollup";

export function createOptionUmd(fileName: string, outName: string, minify = false): RollupOptions {
    return {
        input: "src/index.ts",
        plugins: [typescript(), nodeResolve(), commonjs()],
        output: {
            name: outName,
            file: `dist/${fileName}.umd${minify ? ".min" : ""}.js`,
            format: "umd",
            plugins: [minify ? terser() : undefined],
        },
    };
}

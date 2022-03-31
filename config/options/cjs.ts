import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import type { RollupOptions } from "rollup";

export function createOptionCjs(fileName: string, minify = false): RollupOptions {
    return {
        input: "src/index.ts",
        plugins: [typescript(), nodeResolve(), commonjs()],
        output: {
            file: `dist/${fileName}${minify ? ".min" : ""}.cjs`,
            format: "cjs",
            plugins: [minify ? terser() : undefined],
        },
    };
}

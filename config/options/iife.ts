import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import type { RollupOptions } from "rollup";

/**
 * 浏览器环境
 * @param minify 是否压缩
 * @returns rollup配置
 */
export function createOptionIife(fileName: string, outName: string, minify = false): RollupOptions {
    return {
        input: "src/index.ts",
        plugins: [typescript()],
        output: {
            name: outName,
            file: `dist/${fileName}.iife${minify ? ".min" : ""}.js`,
            format: "iife",
            plugins: [minify ? terser() : undefined],
        },
    };
}

import { terser } from "rollup-plugin-terser";
import type { RollupOptions } from "rollup";

/**
 * 浏览器环境
 * @param minify 是否压缩
 * @returns rollup配置
 */
export function createOptionIife(fileName: string, minify = false): RollupOptions {
    return {
        input: "src/index.ts",
        output: {
            file: `dist/${fileName}.iife${minify ? ".min" : ""}.js`,
            format: "iife",
            plugins: [minify ? terser() : undefined],
        },
    };
}

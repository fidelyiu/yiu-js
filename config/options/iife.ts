import type { RollupOptions } from "rollup";

/**
 * 浏览器环境
 * @param minify 是否压缩
 * @returns rollup配置
 */
export function createOptionIife(minify: boolean): RollupOptions {
    return {
        input: "src/index.ts",
        // plugins: [commonjs(), nodeResolve({ browser: true }), typescript()],
    };
}

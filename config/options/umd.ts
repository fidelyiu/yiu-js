import { terser } from "rollup-plugin-terser";
import type { RollupOptions } from "rollup";

export function createOptionUmd(fileName: string, minify = false): RollupOptions {
    return {
        input: "src/index.ts",
        output: {
            file: `dist/${fileName}.umd${minify ? ".min" : ""}.js`,
            format: "umd",
            plugins: [minify ? terser() : undefined],
        },
    };
}

// import typescript from "@rollup/plugin-typescript";
// import { nodeResolve } from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
import { defineConfig } from "rollup";
import { createOptionCjs } from "./options/cjs";
import { createOptionIife } from "./options/iife";
// import type { RollupOptions } from "rollup";

// const config: RollupOptions = {
//     input: "src/index.ts",
//     output: {
//         file: "dist/index.js",
//         format: "cjs",
//     },
//     plugins: [typescript(), nodeResolve(), commonjs()],
// };

const fileName = "yiu-js";
const outName = "YiuJs";

export default defineConfig([createOptionCjs(fileName), createOptionCjs(fileName, true), createOptionIife(fileName, outName), createOptionIife(fileName, outName, true)]);

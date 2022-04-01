import { defineConfig } from "rollup";
import { createOptionCjs } from "./options/cjs";
import { createOptionEsm } from "./options/esm";
import { createOptionIife } from "./options/iife";
import { createOptionUmd } from "./options/umd";

const fileName = "yiu-js";
const outName = "YiuJs";

export default defineConfig([
    createOptionEsm(fileName),
    createOptionEsm(fileName, true),
    createOptionCjs(fileName),
    createOptionCjs(fileName, true),
    createOptionIife(fileName, outName),
    createOptionIife(fileName, outName, true),
    createOptionUmd(fileName, outName),
    createOptionUmd(fileName, outName, true),
]);

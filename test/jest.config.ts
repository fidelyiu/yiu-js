import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    preset: "ts-jest",
    rootDir: "..",
    testEnvironment: "node",
    coverageDirectory: "coverage",
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.ts", "src/*.ts", "!**/node_modules/**"],
    globals: {
        "ts-jest": {
            tsconfig: "./tsconfig.json",
        },
    },
    resetMocks: true,
    clearMocks: true,
};

export default config;

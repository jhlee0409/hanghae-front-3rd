import {
  configDefaults,
  defineConfig as defineTestConfig,
  mergeConfig,
} from "vitest/config";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default mergeConfig(
  defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  }),
  defineTestConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.ts",
      coverage: {
        reportsDirectory: "./.coverage",
        reporter: ["lcov", "json", "json-summary", "text"],
      },
      exclude: [...configDefaults.exclude, "src/main.tsx"],
    },
  })
);

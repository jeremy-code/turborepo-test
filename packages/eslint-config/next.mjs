import turbo from "./dist/index.js";

import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.node,
      },
    },
  },
  turbo.configs["flat/recommended"],
);

// const { resolve } = require("node:path");

// const project = resolve(process.cwd(), "tsconfig.json");

// /** @type {import("eslint").Linter.Config} */
// module.exports = {
//   extends: [
//     "eslint:recommended",
//     "prettier",
//     require.resolve("@vercel/style-guide/eslint/next"),
//     "turbo",
//   ],
//   globals: {
//     React: true,
//     JSX: true,
//   },
//   env: {
//     node: true,
//     browser: true,
//   },
//   plugins: ["only-warn"],
//   settings: {
//     "import/resolver": {
//       typescript: {
//         project,
//       },
//     },
//   },
//   ignorePatterns: [
//     // Ignore dotfiles
//     ".*.js",
//     "node_modules/",
//   ],
//   overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
// };

import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import turbo from "eslint-plugin-turbo";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  turbo.configs["flat/recommended"],
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
);

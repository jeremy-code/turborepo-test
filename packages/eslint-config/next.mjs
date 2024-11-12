import tseslint from "typescript-eslint";

import react from "./react.mjs";

export default tseslint.config(
  {
    ignores: [".next"],
  },
  ...react,
);

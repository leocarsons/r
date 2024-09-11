import tseslint from "typescript-eslint";
export default tseslint.config(...tseslint.configs.strict, {
  rules: {
    "@typescript-eslint/no-explicit-any": "warn",
    "semi":['error','never'],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        args: "all",
        argsIgnorePattern: "^_",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
  },
});

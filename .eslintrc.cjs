module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier",
  ],
  // 원하는 규칙 추가하기
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    quotes: ["error", "single"],
    "no-duplicate-imports": "error",
    "no-console": ["warn", { allow: ["warn", "error", "info"] }],
    "no-unused-vars": "error",
    "no-multiple-empty-lines": "error",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};

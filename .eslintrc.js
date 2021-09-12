module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // "react-app",
    // "react-app/jest",
    // "eslint:recommended",
    // "airbnb",
    // "airbnb/hooks"
    // "plugin:prettier/recommended",
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-var": error
  },
};
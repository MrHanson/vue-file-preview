module.exports = {
  root: true,

  env: {
    node: true
  },

  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "prettier/prettier": [
      "warn",
      {
        singleQuote: true,
        semi: false,
        trailingComma: "none"
      }
    ]
  },

  parserOptions: {
    parser: "babel-eslint"
  },

  extends: ["plugin:vue/strongly-recommended", "@vue/prettier"]
};

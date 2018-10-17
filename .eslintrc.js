module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },

  env: {
    es6: true,
    browser: true
  },

  root: true,

  rules: {}
};

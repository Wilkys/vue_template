module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // vue
    //'plugin:vue/vue3-essential',
    "plugin:vue/vue3-strongly-recommended",
    //'plugin:vue/vue3-recommended'
    //js
    "eslint:recommended",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "never",
      },
    ],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "vue/html-indent": [
      "error",
      "tab",
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
  },
};

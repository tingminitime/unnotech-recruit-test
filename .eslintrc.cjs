/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "prettier",
    "plugin:vue/vue3-recommended",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["tailwindcss"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "vue/no-unused-vars": "error",
    "vue/script-setup-uses-vars": "off",
    "vue/multi-word-component-names": "warn",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "never",
          normal: "never",
          component: "never",
        },
        svg: "never",
        math: "never",
      },
    ],
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/enforces-negative-arbitrary-values": "warn",
    "tailwindcss/enforces-shorthand": "warn",
    "tailwindcss/migration-from-tailwind-2": "warn",
    "tailwindcss/no-arbitrary-value": "off",
    "tailwindcss/no-custom-classname": [
      "warn",
      {
        whitelist: [
          "form\\-(input|textarea|select|multiselect|checkbox|radio)",
          "material-icons",
          "material-icons-outlined",
          "material-symbols\\-(.*)",
          "text\\-my(.*)",
          "bg\\-my(.*)",
          "border\\-(.*)?my(.*)",
          "ring\\-my(.*)",
          "aspect\\-(.*)",
          "line-clamp\\-[1-9]",
        ],
      },
    ],
    "tailwindcss/no-contradicting-classname": "error",
  },
};

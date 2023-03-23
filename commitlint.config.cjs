/* Reference: https://commitlint.js.org/#/reference-rules */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "refactor", "test", "revert", "BREAKING CHANGE"],
    ],
    "scope-empty": [0, "never"],
  },
};

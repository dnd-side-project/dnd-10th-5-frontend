/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['favolink'],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
};

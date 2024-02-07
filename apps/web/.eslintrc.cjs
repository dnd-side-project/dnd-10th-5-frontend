/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['favolink'],
  ignorePatterns: ['dist', 'public'],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
};

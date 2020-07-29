module.exports = {
  hooks: {
    // Pre-commit: Test if production build works, run unit and run lint-staged.
    'pre-commit': 'npm run build && npm run test:unit && lint-staged',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};

module.exports = {
  extends: [
    "plugin:vue-libs/recommended"
  ],
  plugins: [
    "node"
  ],
  rules: {
    "node/no-extraneous-require": "error"
  }
}
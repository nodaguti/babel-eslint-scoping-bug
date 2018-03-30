module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
    },
  },
  env: {
    node: true,
    commonjs: true,
  },
  extends: ['plugin:flowtype/recommended'],
  plugins: ['flowtype'],
  rules: {
    "no-undef": "error",
    "no-shadow": "error",
    "no-unused-vars": "error",
    "no-dupe-args": "error",
    "no-redeclare": "error",
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
}
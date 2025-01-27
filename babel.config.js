module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  plugins: [
    // Это необходимо для поддержки ESM
    '@babel/plugin-transform-modules-commonjs',
  ],
};

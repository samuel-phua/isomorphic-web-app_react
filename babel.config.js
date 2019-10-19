module.exports = function (api) {
  api.cache(true);

  const presets = [
    "@babel/preset-env",
    "@babel/preset-react",
  ];
  const plugins = [
    "@babel/plugin-transform-destructuring",
    "@babel/plugin-transform-parameters",
    "@babel/plugin-proposal-object-rest-spread",
  ];

  return {
    presets,
    plugins
  };
}

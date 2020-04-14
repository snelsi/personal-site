module.exports = {
  webpack(config) {
    config.resolve.modules.push(__dirname);
    return config;
  },
  env: {
    REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN: "6e4f9a93ecabc3f58d15fe3d55596d830d63d8a2 ",
  },
};

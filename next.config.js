module.exports = {
  webpack(config) {
    config.resolve.modules.push(__dirname);
    return config;
  },
  env: {
    MESSAGE_TO_HACKERS: "🤠 Are ya winning son?",
  },
};

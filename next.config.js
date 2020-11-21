const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
  env: {
    MESSAGE_TO_HACKERS:
      "Don't believe in yourself. Believe in me! Believe in me who believes in you!",
  },
});

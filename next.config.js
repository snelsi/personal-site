const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const path = require("path");

module.exports = withPlugins([
  [optimizedImages],
  {
    env: {
      MESSAGE_TO_HACKERS: "🤠 Are ya winning son?",
    },
  },
]);

const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([optimizedImages], {
  env: {
    MESSAGE_TO_HACKERS: "☆ A wild idea! A fantasy! Go crazy! ☆",
  },
});

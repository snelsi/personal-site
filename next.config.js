const withPlugins = require("next-compose-plugins");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withPlugins(
  [
    [
      withMDX,
      {
        pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
      },
    ],
  ],
  {
    env: {
      MESSAGE_TO_HACKERS:
        "Don't believe in yourself. Believe in me! Believe in me who believes in you!",
      HOURS_WORKED: "2000",
    },
  },
);

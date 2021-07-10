const withPlugins = require("next-compose-plugins");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withPlugins([
  [
    withMDX,
    {
      pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    },
  ],
]);

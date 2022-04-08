const withOptimizedImages = require("next-optimized-images");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["1drv.ms"],
  },
};
module.exports = withOptimizedImages({});

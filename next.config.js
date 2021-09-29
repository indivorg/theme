const isProd = process.env.NODE_ENV === 'production';
const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ });
module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'mdx'],
  assetPrefix: isProd ? 'https://indivorg.github.io/theme' : '',
});

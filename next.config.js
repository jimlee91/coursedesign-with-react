module.exports = {
  distDir: 'build',
  devIndicators: {
    autoPrerender: false,
  },
  exportPathMap: () => ({
    '/': { page: '/' },
    '/calendar': { page: '/calendar' },
  }),
};

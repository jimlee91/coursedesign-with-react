module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  exportPathMap: () => ({
    '/': { page: '/' },
    '/calendar': { page: '/calendar' },
  }),
};

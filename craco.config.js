const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
};

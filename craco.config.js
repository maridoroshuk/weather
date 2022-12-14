const path = require(`path`);

module.exports = {
  webpack: {
    eslint: {
      enable: false,
    },
    alias: {
      '@components': path.resolve(
        __dirname,
        'src/components',
      ),
      '@store': path.resolve(__dirname, 'src/store'),
      '@customTypes': path.resolve(
        __dirname,
        'src/customTypes',
      ),
      '@constants': path.resolve(
        __dirname,
        'src/constants',
      ),
      '@services': path.resolve(__dirname, 'src/services'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@theme': path.resolve(__dirname, 'src/theme'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
    },
  },
};

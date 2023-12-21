module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  output: "standalone",
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.pdf$/,
        use: 'file-loader?name=[path][name].[ext]',
      });
    }

    return config;
  },
};

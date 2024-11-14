// next.config.js
const { withPlugins } = require('next-compose-plugins');

module.exports = {
  webpack: (config, { isServer }) => {
    // Only apply these fallbacks for the client-side
    if (!isServer) {
      config.resolve.fallback = {
        fs: false, // Use an empty module for 'fs'
        stream: require.resolve('stream-browserify'),
        zlib: require.resolve('browserify-zlib'),
      };
    }
    return config;
  },
};


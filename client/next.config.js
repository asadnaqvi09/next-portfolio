const path = require("path");

const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  allowedDevOrigins: ["192.168.1.74"],
};

module.exports = nextConfig;

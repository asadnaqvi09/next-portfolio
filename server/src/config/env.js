const dotenv = require("dotenv");

dotenv.config();

function required(key) {
  const value = process.env[key];
  if (!value) throw new Error(`Missing environment variable: ${key}`);
  return value;
}

function parseClientUrls() {
  const raw = process.env.CLIENT_URL || "http://localhost:3000";
  return raw.split(",").map((url) => url.trim()).filter(Boolean);
}

const env = {
  port: Number(process.env.PORT || 4000),
  nodeEnv: process.env.NODE_ENV || "development",
  clientUrls: parseClientUrls(),
  databaseUrl: required("DATABASE_URL"),
  jwtSecret: required("JWT_SECRET"),
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  adminEmail: process.env.ADMIN_EMAIL || "admin",
  adminPassword: process.env.ADMIN_PASSWORD || "admin123",
  smtp: {
    host: process.env.SMTP_HOST || "",
    port: Number(process.env.SMTP_PORT || 587),
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
    from: process.env.MAIL_FROM || "",
    to: process.env.MAIL_TO || "",
  },
};

module.exports = { env };

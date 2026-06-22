const express = require("express");
const cors = require("cors");
const { env } = require("./config/env");
const { errorHandler } = require("./middleware/errorHandler");
const contactRoutes = require("./routes/contact.routes");
const analyticsRoutes = require("./routes/analytics.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.set("trust proxy", 1);
app.use(
  cors({
    origin: env.clientUrls,
    credentials: true,
  })
);
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
  res.json({ success: true, status: "ok" });
});

app.use("/api/contact", contactRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/auth", authRoutes);

app.use(errorHandler);

module.exports = app;
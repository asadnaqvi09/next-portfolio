const {
  getAnalyticsSummary,
  getDailyAnalytics,
  hashVisitor,
  trackPageView,
} = require("../services/analytics.service");

function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string") return forwarded.split(",")[0].trim();
  return req.ip || "0.0.0.0";
}

async function trackVisit(req, res, next) {
  try {
    const { path, referrer } = req.body;
    const ip = getClientIp(req);
    const userAgent = req.headers["user-agent"] || "";
    const visitorHash = hashVisitor(ip, userAgent);
    await trackPageView(path, referrer || null, visitorHash, userAgent || null);
    res.status(201).json({ success: true });
  } catch (err) {
    next(err);
  }
}

async function summary(_req, res, next) {
  try {
    const data = await getAnalyticsSummary();
    res.json(data);
  } catch (err) {
    next(err);
  }
}

async function daily(_req, res, next) {
  try {
    const data = await getDailyAnalytics();
    res.json(data);
  } catch (err) {
    next(err);
  }
}

module.exports = { trackVisit, summary, daily };

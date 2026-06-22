const crypto = require("crypto");
const { query, queryOne } = require("../config/db");

function hashVisitor(ip, userAgent) {
  return crypto
    .createHash("sha256")
    .update(`${ip}:${userAgent}`)
    .digest("hex");
}

async function trackPageView(path, referrer, visitorHash, userAgent) {
  await query(
    `
    INSERT INTO page_views (path, referrer, visitor_hash, user_agent)
    VALUES ($1, $2, $3, $4)
    `,
    [path, referrer, visitorHash, userAgent]
  );
}

async function getAnalyticsSummary() {
  const totals = await queryOne(
    `
    SELECT
      COUNT(DISTINCT visitor_hash)::text AS total_visitors,
      COUNT(DISTINCT visitor_hash) FILTER (
        WHERE created_at >= DATE_TRUNC('day', NOW())
      )::text AS daily_visitors,
      COUNT(*)::text AS total_page_views
    FROM page_views
    `
  );
  const referrers = await query(
    `
    SELECT
      COALESCE(NULLIF(referrer, ''), 'direct') AS referrer,
      COUNT(*)::text AS count
    FROM page_views
    GROUP BY COALESCE(NULLIF(referrer, ''), 'direct')
    ORDER BY COUNT(*) DESC
    LIMIT 10
    `
  );
  return {
    totalVisitors: Number(totals?.total_visitors ?? 0),
    dailyVisitors: Number(totals?.daily_visitors ?? 0),
    totalPageViews: Number(totals?.total_page_views ?? 0),
    topReferrers: referrers.map((r) => ({
      referrer: r.referrer,
      count: Number(r.count),
    })),
  };
}

async function getDailyAnalytics() {
  const rows = await query(
    `
    SELECT
      TO_CHAR(DATE_TRUNC('day', created_at), 'YYYY-MM-DD') AS date,
      COUNT(DISTINCT visitor_hash)::text AS visitors,
      COUNT(*)::text AS page_views
    FROM page_views
    WHERE created_at >= NOW() - INTERVAL '7 days'
    GROUP BY DATE_TRUNC('day', created_at)
    ORDER BY DATE_TRUNC('day', created_at) ASC
    `
  );
  return rows.map((row) => ({
    date: row.date,
    visitors: Number(row.visitors),
    pageViews: Number(row.page_views),
  }));
}

module.exports = {
  hashVisitor,
  trackPageView,
  getAnalyticsSummary,
  getDailyAnalytics,
};

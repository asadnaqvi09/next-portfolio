const { Pool } = require("pg");
const { env } = require("./env");

const pool = new Pool({
  connectionString: env.databaseUrl,
  ssl: env.nodeEnv === "production" ? { rejectUnauthorized: false } : undefined,
});

pool.on("error", (err) => {
  console.error("Unexpected database error:", err.message);
});

async function query(text, params) {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result.rows;
  } finally {
    client.release();
  }
}

async function queryOne(text, params) {
  const rows = await query(text, params);
  return rows[0] ?? null;
}

module.exports = { pool, query, queryOne };

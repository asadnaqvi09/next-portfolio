const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const { pool, queryOne } = require("../config/db");
const { env } = require("../config/env");

async function migrate() {
  const sqlPath = path.join(process.cwd(), "src/sql/migrations/001_init.sql");
  const sql = fs.readFileSync(sqlPath, "utf-8");
  const client = await pool.connect();
  try {
    await client.query(sql);
    const existing = await queryOne(
      `SELECT id FROM admins WHERE email = $1`,
      [env.adminEmail]
    );
    if (!existing) {
      const hash = await bcrypt.hash(env.adminPassword, 12);
      await client.query(
        `INSERT INTO admins (email, password_hash) VALUES ($1, $2)`,
        [env.adminEmail, hash]
      );
      console.log("Admin user seeded");
    }
    console.log("Migration completed");
  } finally {
    client.release();
    await pool.end();
  }
}

migrate().catch((err) => {
  console.error("Migration failed:", err.message);
  process.exit(1);
});

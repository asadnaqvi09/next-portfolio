const app = require("./app");
const { env } = require("./config/env");
const { pool } = require("./config/db");

async function start() {
  await pool.query("SELECT 1");
  app.listen(env.port, () => {
    console.log(`Server running on port ${env.port}`);
  });
}

start().catch((err) => {
  console.error("Failed to start server:", err.message);
  process.exit(1);
});

const { query } = require("../config/db");
const { sendContactEmail } = require("./mail.service");

async function createContactMessage(name, email, message) {
  const rows = await query(
    `
    INSERT INTO contact_messages (name, email, message)
    VALUES ($1, $2, $3)
    RETURNING id
    `,
    [name, email, message]
  );
  await sendContactEmail(name, email, message);
  return rows[0];
}

module.exports = { createContactMessage };

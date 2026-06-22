const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { queryOne } = require("../config/db");
const { env } = require("../config/env");

async function findAdminByEmail(email) {
  return queryOne(
    `SELECT id, email, password_hash FROM admins WHERE email = $1`,
    [email]
  );
}

async function findAdminById(id) {
  return queryOne(
    `SELECT id, email, password_hash FROM admins WHERE id = $1`,
    [id]
  );
}

async function loginAdmin(email, password) {
  const admin = await findAdminByEmail(email);
  if (!admin) {
    return { success: false, error: "Invalid credentials" };
  }
  const valid = await bcrypt.compare(password, admin.password_hash);
  if (!valid) {
    return { success: false, error: "Invalid credentials" };
  }
  const user = { id: admin.id, email: admin.email };
  const token = jwt.sign(
    { sub: admin.id, email: admin.email },
    env.jwtSecret,
    { expiresIn: env.jwtExpiresIn }
  );
  return { success: true, data: { token, user } };
}

async function getAdminProfile(userId) {
  const admin = await findAdminById(userId);
  if (!admin) {
    return { success: false, error: "Unauthorized" };
  }
  return {
    success: true,
    data: {
      token: "",
      user: { id: admin.id, email: admin.email },
    },
  };
}

function verifyToken(token) {
  try {
    return jwt.verify(token, env.jwtSecret);
  } catch {
    return null;
  }
}

module.exports = { loginAdmin, getAdminProfile, verifyToken };

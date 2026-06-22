const { verifyToken } = require("../services/auth.service");

function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    res.status(401).json({ success: false, error: "Unauthorized" });
    return;
  }
  const token = header.slice(7);
  const payload = verifyToken(token);
  if (!payload) {
    res.status(401).json({ success: false, error: "Invalid token" });
    return;
  }
  req.user = payload;
  next();
}

module.exports = { authMiddleware };

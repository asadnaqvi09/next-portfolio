const { getAdminProfile, loginAdmin } = require("../services/auth.service");

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const result = await loginAdmin(email, password);
    if (!result.success) {
      res.status(401).json(result);
      return;
    }
    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function me(req, res, next) {
  try {
    if (!req.user?.sub) {
      res.status(401).json({ success: false, error: "Unauthorized" });
      return;
    }
    const result = await getAdminProfile(req.user.sub);
    if (!result.success) {
      res.status(401).json(result);
      return;
    }
    res.json(result);
  } catch (err) {
    next(err);
  }
}

module.exports = { login, me };

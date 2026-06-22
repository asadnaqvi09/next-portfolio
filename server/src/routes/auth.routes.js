const { Router } = require("express");
const { login, me } = require("../controllers/auth.controller");
const { authMiddleware } = require("../middleware/auth");
const { authLimiter } = require("../middleware/rateLimit");
const { validateBody } = require("../middleware/validate");
const { loginSchema } = require("../validators");

const router = Router();

router.post("/login", authLimiter, validateBody(loginSchema), login);
router.get("/me", authMiddleware, me);

module.exports = router;

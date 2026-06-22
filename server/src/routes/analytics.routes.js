const { Router } = require("express");
const {
  daily,
  summary,
  trackVisit,
} = require("../controllers/analytics.controller");
const { authMiddleware } = require("../middleware/auth");
const { trackLimiter } = require("../middleware/rateLimit");
const { validateBody } = require("../middleware/validate");
const { trackSchema } = require("../validators");

const router = Router();

router.post("/track", trackLimiter, validateBody(trackSchema), trackVisit);
router.get("/summary", authMiddleware, summary);
router.get("/daily", authMiddleware, daily);

module.exports = router;

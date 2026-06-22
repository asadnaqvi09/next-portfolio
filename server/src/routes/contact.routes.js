const { Router } = require("express");
const { submitContact } = require("../controllers/contact.controller");
const { validateBody } = require("../middleware/validate");
const { contactLimiter } = require("../middleware/rateLimit");
const { contactSchema } = require("../validators");

const router = Router();

router.post(
  "/",
  contactLimiter,
  validateBody(contactSchema),
  submitContact
);

module.exports = router;

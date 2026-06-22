const { z } = require("zod");

const contactSchema = z.object({
  name: z.string().trim().min(1).max(255),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(5000),
});

const trackSchema = z.object({
  path: z.string().trim().min(1).max(500),
  referrer: z.string().trim().max(500).optional(),
});

const loginSchema = z.object({
  email: z.string().trim().min(1).max(255),
  password: z.string().min(1).max(255),
});

module.exports = { contactSchema, trackSchema, loginSchema };

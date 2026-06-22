const { ZodError } = require("zod");

function validateBody(schema) {
  return (req, res, next) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        res.status(400).json({
          success: false,
          error: err.issues[0]?.message || "Validation failed",
        });
        return;
      }
      next(err);
    }
  };
}

module.exports = { validateBody };

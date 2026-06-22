const { createContactMessage } = require("../services/contact.service");

async function submitContact(req, res, next) {
  try {
    const { name, email, message } = req.body;
    await createContactMessage(name, email, message);
    res.status(201).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { submitContact };

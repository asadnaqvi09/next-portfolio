const nodemailer = require("nodemailer");
const { env } = require("../config/env");

const isConfigured =
  env.smtp.host && env.smtp.user && env.smtp.pass && env.smtp.to;

const transporter = isConfigured
  ? nodemailer.createTransport({
      host: env.smtp.host,
      port: env.smtp.port,
      secure: env.smtp.port === 465,
      auth: {
        user: env.smtp.user,
        pass: env.smtp.pass,
      },
    })
  : null;

async function sendContactEmail(name, email, message) {
  if (!transporter) return;
  await transporter.sendMail({
    from: env.smtp.from || env.smtp.user,
    to: env.smtp.to,
    replyTo: email,
    subject: `Portfolio Contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
  });
}

module.exports = { sendContactEmail };

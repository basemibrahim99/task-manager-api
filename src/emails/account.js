const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "basemibrahim99@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "basemibrahim99@gmail.com",
    subject: "Sorry to lose you!",
    text: `Fairwell, ${name}. Is there anything we could've done better?`,
  });
};
module.exports = { sendWelcomeEmail, sendCancelationEmail };

const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(SENDGRID_API_KEY);

module.exports = (req, res, next) => {
  const msg = {
    to: "contact@deepadvisory.fr",
    from: "deepadvisory@outlook.fr",
    subject: req.body.subject,
    text: req.body.message,
    html: `<div><h1>vous avez un nouveau message</h1> 
    <h2>nom: ${req.body.name}
    <br/>tel: ${req.body.number}
    <br/>email: ${req.body.email}</h2>
    <p>${req.body.name}</p>
    </div>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({
        message: "Email sent successfully",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: "Error sending email",
      });
    });
};

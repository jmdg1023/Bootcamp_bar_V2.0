const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  auth: {
    // configured env variables in heroku (sensitive info)
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PW,
  },

});


async function sendConfirmation(user) {

  let welcome = await transporter.sendMail({
    from: 'bootcamp.bar.bookings@gmail.com', // sender address
    to: user, // list of receivers
    subject: 'Welcome to Bootcamp Bar', // Subject line
    html: '<p> Thanks for creating an account with us. We look forward to seeing you at your next booking </p>' // plain text body
  });

  console.log('Message sent: %s', welcome.messageId);

}

module.exports = {
  sendConfirmation
};
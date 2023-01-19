const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  auth: {
    // configured env variables in heroku (sensitive info)
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PW,
  },
});

async function sendBookingCancellation(email, firstName, date, time, seats) {
  try {
    await transporter.sendMail({
      from: process.env.SENDER_EMAIL, // sender address
      to: email, // list of receivers
      subject: 'Bootcamp Bar: Booking Cancellation', // Subject line
      html: `<p>Hi ${firstName}, your booking on ${date} at ${time} for ${seats} people has been successfully cancelled.</p>`, // plain text body
    });
  } catch (error) {
    console.log(error);
  }
}

async function sendBookingConfirmation(email, firstName, date, time, seats) {
  try {
    await transporter.sendMail({
      from: process.env.SENDER_EMAIL, // sender address
      to: email, // list of receivers
      subject: 'Bootcamp Bar: Booking Confirmation', // Subject line
      html: `<p>Hi ${firstName}, here is your booking confirmation:<br/><br/>Date: ${date}<br/>Time: ${time}<br/>Seats: ${seats}</p>`, // plain text body
    });
  } catch (error) {
    console.log(error);
  }
}

async function sendConfirmation(email, firstName) {
  try {
    await transporter.sendMail({
      from: process.env.SENDER_EMAIL, // sender address
      to: email, // list of receivers
      subject: 'Welcome to Bootcamp Bar', // Subject line
      html: `<p>Thanks for creating an account with us ${firstName}. We look forward to seeing you at your next booking. 😊</p>`, // plain text body
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  sendConfirmation,
  sendBookingConfirmation,
  sendBookingCancellation,
};

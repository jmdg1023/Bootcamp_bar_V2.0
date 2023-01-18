const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookingSchema = new Schema({
  date: {
    type: Schema.Types.Date,
    required: true,
  },
  seats: {
    type: Schema.Types.Number,
    required: true,
  },
  seating: {
    type: Schema.Types.String,
    required: true,
    enum: ['6PM', '8PM'],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;

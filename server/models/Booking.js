const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookingSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    seats: {
        type: Number,
        required: true,
    },
    seating_id: {
        type: Schema.Types.ObjectId,
        ref: 'Seating',
        required: true,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;

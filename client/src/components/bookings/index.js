import { useMutation } from '@apollo/client';
import React from 'react';
import { DELETE_BOOKING } from '../../utils/mutations';

export default function Bookings(props) {
  const [deleteBooking] = useMutation(DELETE_BOOKING);

  // function for handling booking deletion
  const handleDelete = async (event) => {
    // get bookingId
    const bookingId = event.target.getAttribute('data-booking-id');
    try {
      // call mutation to delete booking
      await deleteBooking({
        variables: {
          bookingId,
        },
      });
      // reload page
      window.location.reload();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex-col">
      {props.bookings &&
        props.bookings.map((booking) => (
          <div key={booking._id} className="booking-component">
            <h5>{new Date(parseInt(booking.date)).toLocaleDateString()} </h5>
            <p>Booking for {booking.seats}</p>
            <p>Seating time: {booking.seating}</p>
            <button onClick={handleDelete} data-booking-id={booking._id}>
              ❌
            </button>
          </div>
        ))}
    </div>
  );
}

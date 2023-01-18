import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { ADD_BOOKING } from '../utils/mutations';

function BookingForm() {
  // state variables
  const [formState, setFormState] = useState({
    date: '',
    seating: '6PM',
    seats: null,
  });

  const [addBooking] = useMutation(ADD_BOOKING);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await addBooking({
        variables: {
          input: { ...formState, seats: parseInt(formState.seats) },
        },
      });
      // reload page
      window.location.reload();
      return;
    } catch (error) {
      console.error(error.message);
    }
  };

  const getCurrentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (mm < 10) mm = '0' + mm;
    if (dd < 10) dd = '0' + dd;

    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    <form className="bg-black-rgba flex flex-col p-8 rounded-3xl">
      <h2 className="font-sm">Make a booking below!</h2>
      <div className="w-full my-1">
        <p>Date:</p>
        <input
          min={getCurrentDate()}
          required
          className="w-full text-black"
          name="date"
          type="date"
          onChange={handleChange}
        />
      </div>
      <div className="w-full my-1">
        <p>Seating Time:</p>
        <select
          required
          className="w-full text-black"
          name="seating"
          value={formState.seating}
          onChange={handleChange}
        >
          <option value="6PM">6PM</option>
          <option value="8PM">8PM</option>
        </select>
      </div>
      <div className="w-full my-1">
        <p>Number of Guests:</p>
        <input
          required
          className="w-full text-black"
          name="seats"
          type="number"
          min="1"
          onChange={handleChange}
        />
      </div>
      <button
        className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg px-5 py-2.5 my-2 focus:outline-none"
        type="button"
        onClick={handleFormSubmit}
      >
        Submit Booking
      </button>
    </form>
  );
}

export default BookingForm;

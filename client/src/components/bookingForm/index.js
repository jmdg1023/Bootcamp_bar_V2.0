import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { ADD_BOOKING } from "../../utils/mutations";

function BookingForm() {
  // state variables
  const [formState, setFormState] = useState({
    date: "",
    seating: "6PM",
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addBooking({
        variables: {
          input: { ...formState, seats: parseInt(formState.seats) },
        },
      });
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="center-content">
      <div className="mt-half-page black-card-bg">
        <h1>Make a booking below!</h1>
        <form className="flex-col">
          <p>Date:</p>
          <input
            required
            className="py-1"
            name="date"
            type="date"
            onChange={handleChange}
          />
          <p>Seating Time:</p>
          <select
            required
            className="py-1"
            name="seating"
            value={formState.seating}
            onChange={handleChange}
          >
            <option value="6PM">6PM</option>
            <option value="8PM">8PM</option>
          </select>
          <p>Number of Guests:</p>
          <input
            required
            className="py-1"
            name="seats"
            type="number"
            min="1"
            onChange={handleChange}
          />
          <button className="my-1" type="button" onClick={handleFormSubmit}>
            {" "}
            Submit Booking{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;

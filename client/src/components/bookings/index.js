import React from "react";
import DeleteBtn from "../DeleteBtn";



export default function Bookings(props) {

    console.log(props)

    return (
        <div className="flex-col">
            {props.bookings && 
                props.bookings.map((booking) => (
                <div key={booking._id} className="booking-component">
                <h5>{new Date(parseInt(booking.date)).toLocaleDateString()} </h5>
                <p>Booking for {booking.seats}</p>
                <p>Seating time: {booking.seating}</p>
                <button> <DeleteBtn/> </button>
                </div>
            ))}
        </div>
    )

}
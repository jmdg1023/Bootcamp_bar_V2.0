import React from "react";
import DeleteBtn from "../DeleteBtn";

export default function Bookings(props) {

    console.log(props)

    return (
        <div className="flex-col">
            {props.bookings && 
                props.bookings.map((booking) => (
                <div key={booking._id} className="product-card">
                <div className="flex-wrap center-content">
                    <h3>{new Date(parseInt(booking.date)).toLocaleDateString()}</h3>
                    <button> <DeleteBtn/> </button>
                </div>
                <p>Booking for {booking.seats}</p>
                <p>Seating time: {booking.seating}</p>
                </div>
            ))}
        </div>
    )

}
import React from 'react';
// TODO add mutation in utils/mutations.js
// import { useMutation } from '@apollo/client';
// import { ADD_BOOKING } from '../utils/mutations';
import { useQuery } from '@apollo/client';
import BookingForm from '../components/bookingForm';
import { QUERY_USER } from '../utils/queries';

const Dashboard = () => {
  const { data } = useQuery(QUERY_USER);

  return (
    <div className="bg-dashboard">
      {data ? (
        <>
          <h2>Welcome {data.me.firstName} !</h2>
          <BookingForm />
          {data.me.bookings.map((booking) => (
            <div key={booking._id} className="my-2">
              <h3>{new Date(parseInt(booking.date)).toLocaleDateString()}</h3>
              <p>{booking.seats}</p>
              <p>{booking.seating}</p>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default Dashboard;

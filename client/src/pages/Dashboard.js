import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// TODO add mutation in utils/mutations.js
    // import { useMutation } from '@apollo/client';
    // import { ADD_BOOKING } from '../utils/mutations';
import Auth from '../utils/auth';
import Booking from '../components/booking';
import { useQuery, useReactiveVar } from '@apollo/client';
import { QUERY_USER } from '../utils/queries'

const Dashboard = () => {

    const { data } = useQuery(QUERY_USER);
    let user;

    // check if user exists
    if(data) {
        user = data.user
    }

    return(
        <div className='bg-dashboard'>
            {user ? (
          <>
            <h2>
              Welcome {user.firstName} !
            </h2>
            <Booking/>
            {user.bookings.map((booking) => (
              <div key={booking._id} className="my-2">
                <h3>
                  {new Date(parseInt(booking.date)).toLocaleDateString()}
                </h3>
                <p>{booking.seats}</p>
                <p>{booking.seating}</p>
                </div>
            ))}
          </>
        ) : null}
        </div>
    )
}

export default Dashboard
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
        <div className='bg-booking'>
            {/* format flex aside */}
            <Booking/>

            {user? (
                <>
                    <h1>
                        Welcome {user.firstName}. 
                    </h1>
                    {user.bookings.map((bookings) => (
                        // TODO list all bookings associated with user, allow CRUD operations
                    ))}
                </>
            ) : null}

        </div>
    )
}

export default Dashboard
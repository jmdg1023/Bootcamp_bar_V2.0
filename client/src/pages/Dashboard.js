import React from 'react';
// TODO add mutation in utils/mutations.js
// import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import BookingForm from '../components/BookingForm';
import Bookings from '../components/bookings';
import { QUERY_USER } from '../utils/queries';

const Dashboard = () => {
  const { data } = useQuery(QUERY_USER);

  return (
    <div className="bg-dashboard h-screen">
      <div className="container">
        {data ? (
          <>
            <h1 className="px-2 py-2">Welcome {data.me.firstName} !</h1>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="basis-3/7">
                <BookingForm />
              </div>
              <div className="active-bookings">
                <h3 className="underline">Your active bookings:</h3>
                <Bookings bookings={data.me.bookings} />
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;

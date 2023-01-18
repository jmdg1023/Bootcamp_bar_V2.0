import React from 'react';
// TODO add mutation in utils/mutations.js
// import { useMutation } from '@apollo/client';
// import { ADD_BOOKING } from '../utils/mutations';
import { useQuery } from "@apollo/client";
import BookingForm from "../components/bookingForm";
import { QUERY_USER } from "../utils/queries";
import Bookings from "../components/bookings";

const Dashboard = () => {
  const { data } = useQuery(QUERY_USER);

  return (
    <div className="bg-dashboard">
      {data ? (
        <>
          <h2>Welcome {data.me.firstName} !</h2>
          <div className="flex-row center-content">
            <BookingForm />
            <Bookings bookings={data.me.bookings} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Dashboard;

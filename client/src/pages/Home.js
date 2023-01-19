import React from 'react';
import LoginComponent from '../components/Login/index.js';
import Auth from '../utils/auth';

const Login = () => {
  return (
    <div className="bg-home">
      <div className=" flex flex-col h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row gap-4">
          <div className='black-bg'>
            <h1 className="text-center font-bold mb-4"> Welcome to the Bootcamp Bar</h1>
            <div>{Auth.loggedIn() && <p className='text-2xl'>Thank you for creating an account with us. Navigate to the Dashboard to make a booking.</p>}</div>
            <div>{!Auth.loggedIn() && <p className='text-2xl'>Welcome to the exclusive hidden bar for coding bootcamp students. Please login to make a booking</p>}</div>
          </div>
          <div>{!Auth.loggedIn() && <LoginComponent />}</div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import LoginComponent from '../components/Login';
import Auth from '../utils/auth';

const Login = () => {
  return (
    <div className="bg-home">
      <div className="container flex flex-col h-screen justify-center items-center">
        <h1 className="text-center font-bold mb-4"> Welcome to Bootcamp Bar</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <p className="text-2xl">
              Welcome to the exclusive hidden bar for coding bootcamp students.
            </p>
          </div>
          <div>{!Auth.loggedIn() && <LoginComponent />}</div>
        </div>
      </div>
    </div>
  );
};

export default Login;

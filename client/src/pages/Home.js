import React from "react";
import LoginComponent from "../components/Login";

const Login = () => {
  return (
    <div className="bg-home">
      <div className="flex-row space-evenly">
        <div className="mt-half-page">
          <div className="black-card-bg">
            <h1> Welcome to Bootcamp Bar V2.0 </h1>
            <br></br>
            <h3>Welcome to the exclusive hidden bar for coding bootcamp students. Please login to view our menu or to make a booking ahead of time.</h3>
          </div>
          </div>
        <div className="mt-half-page">
          <LoginComponent />
        </div>
      </div>
    </div>
  );
};

export default Login;

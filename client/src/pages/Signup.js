import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isSubscriber: false,
  });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // create user using mutation
      const response = await addUser({
        variables: {
          input: formState,
        },
      });
      // login using the auth token in the response
      Auth.login(response.data.addUser.token);
    } catch (error) {
      // log error message
      console.error(error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "isSubscriber") {
      setFormState({ ...formState, isSubscriber: !formState.isSubscriber });
    } else {
      setFormState({
        ...formState,
        [name]: value,
      });
    }
  };

  return (
    <div className="bg-signup">
      <div className="container">
        <Link to="/">← Already have an account? Go to Login</Link>
        <div className="black-card-bg mt-half-page">
          <h2>Signup to make a booking</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="flex-row space-between my-2">
              <label htmlFor="firstName">First Name:</label>
              <input
                required
                placeholder="John"
                name="firstName"
                type="text"
                id="firstName"
                onChange={handleChange}
              />
            </div>
            <div className="flex-row space-between my-2">
              <label htmlFor="lastName">Last Name:</label>
              <input
                required
                placeholder="Smith"
                name="lastName"
                type="text"
                id="lastName"
                onChange={handleChange}
              />
            </div>
            <div className="flex-row space-between my-2">
              <label htmlFor="email">Email:</label>
              <input
                required
                placeholder="john.smith@example.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="flex-row space-between my-2">
              <label htmlFor="pwd">Password:</label>
              <input
                required
                placeholder="********"
                name="password"
                type="password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <div className="flex-row space-between my-2">
              <label htmlFor="isSubscriber">Subscribe to newsletter:</label>
              <input
                name="isSubscriber"
                type="checkbox"
                id="isSubscriber"
                onChange={handleChange}
                defaultChecked={formState.isSubscriber}
              />
            </div>
            <div className="flex-row flex-end">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

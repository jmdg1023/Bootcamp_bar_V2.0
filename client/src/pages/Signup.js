import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
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

    if (name === 'isSubscriber') {
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
      <div className="container flex h-screen justify-center items-center">
        <form
          className="bg-black-rgba max-w-2xl p-8 rounded-3xl"
          onSubmit={handleFormSubmit}
        >
          <h2 className="text-center underline font-bold">
            Signup to make a booking!
          </h2>
          <div className="flex justify-between my-2">
            <label htmlFor="firstName">First Name:</label>
            <input
              className="text-black"
              required
              placeholder="John"
              name="firstName"
              type="text"
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between my-2">
            <label htmlFor="lastName">Last Name:</label>
            <input
              className="text-black"
              required
              placeholder="Smith"
              name="lastName"
              type="text"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between my-2">
            <label htmlFor="email">Email:</label>
            <input
              className="text-black"
              required
              placeholder="john.smith@example.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between my-2">
            <label htmlFor="pwd">Password:</label>
            <input
              className="text-black"
              required
              placeholder="********"
              name="password"
              type="password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between my-2">
            <label htmlFor="isSubscriber">Subscribe to newsletter:</label>
            <input
              className="text-black"
              name="isSubscriber"
              type="checkbox"
              id="isSubscriber"
              onChange={handleChange}
              defaultChecked={formState.isSubscriber}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg px-5 py-2.5 mb-2 focus:outline-none"
              type="submit"
            >
              Signup
            </button>
          </div>
          <Link to="/">← Already have an account? Go to Login</Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;

import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { LOGIN } from '../../utils/mutations';

function LoginComponent() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login({
        variables: formState,
      });
      const token = response.data.login.token;
      Auth.login(token);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <form
      className="bg-black-rgba max-w-2xl p-8 rounded-3xl"
      onSubmit={handleFormSubmit}
    >
      <h2>Login</h2>
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
        <label htmlFor="password">Password:</label>
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
      {error ? (
        <div>
          <p className="error-text">The provided credentials are incorrect</p>
        </div>
      ) : null}
      <div className="flex justify-end">
        <button
          className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg px-5 py-2.5 mb-2 focus:outline-none"
          type="submit"
        >
          Login
        </button>
      </div>
      <Link to="/signup">← Don't have an account yet? Signup here.</Link>
    </form>
  );
}

export default LoginComponent;

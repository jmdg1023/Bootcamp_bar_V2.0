import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row flex-end">
          <li className="mx-2">
            <Link to="/drinks">View Menu</Link>
          </li>
          <li className="mx-2">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="mx-2">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return null;
    }
  }

  return (
    <header className="flex-row px-1 space-between">
      <h1 className='px-2 py-2'>
        <Link to="/">
          <span role="img" aria-label="glasses clinking">
            🥂
          </span>
          Bootcamp Bar
        </Link>
      </h1>
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;

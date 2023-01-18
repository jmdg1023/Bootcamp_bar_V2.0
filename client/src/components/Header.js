import { Disclosure } from '@headlessui/react';
import { MdClose, MdMenu } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import Auth from '../utils/auth';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function getNavMenu() {
  const navItems = [{ name: 'Drinks', href: '/drinks' }];
  if (Auth.loggedIn()) {
    navItems.push({ name: 'Dashboard', href: '/dashboard' });
  } else {
    navItems.push({ name: 'Signup', href: '/signup' });
  }

  return (
    <>
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.href}
          className={({ isActive }) =>
            classNames(
              isActive
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block px-3 py-2 rounded-md text-base font-medium'
            )
          }
        >
          {item.name}
        </NavLink>
      ))}
      {Auth.loggedIn() && (
        <a
          href="/"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          onClick={() => Auth.logout()}
        >
          Logout
        </a>
      )}
    </>
  );
}

// function for header component
export default function Header() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <MdClose className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MdMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <NavLink
                  to="/"
                  end
                  className="flex flex-shrink-0 items-center text-white text-lg font-bold"
                >
                  <span role="img" aria-label="shopping bag">
                    🥂
                  </span>
                  Bootcamp Bar
                </NavLink>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">{getNavMenu()}</div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">{getNavMenu()}</div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import DarkMode from '../dark-mode/DarkMode';
import clsx from 'clsx';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About Me', href: '/about', current: false },
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Contact', href: '/contact', current: false },
];

const Navbar: React.FC = () => {
  return (
    <Disclosure as="nav" className="bg-white dark:bg-gray-900 shadow fixed w-full z-10 py-2 opacity-80">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              {/* Logo Section */}
              <div className="flex-shrink-0 flex items-center">
                <NavLink to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
                  MyLogo
                </NavLink>
              </div>

              {/* Desktop Menu */}
              <div className="hidden sm:flex sm:items-center sm:space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      clsx(
                        isActive
                          ? 'text-cyan-500'
                          : 'text-gray-700 dark:text-gray-300 hover:text-cyan-500',
                        'px-3 py-2 text-md font-medium'
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

              {/* Dark Mode Toggle */}
              <div className="flex items-center">
                <DarkMode />
              </div>

              {/* Mobile Menu Button */}
              <div className="flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-cyan-500 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    clsx(
                      isActive
                        ? 'text-cyan-500'
                        : 'text-gray-700 dark:text-gray-300 hover:text-cyan-500',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;

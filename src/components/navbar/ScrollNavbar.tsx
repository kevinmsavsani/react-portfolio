import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { NavLink } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import DarkMode from '../dark-mode/DarkMode';
import clsx from "clsx";
import AOS from 'aos';

const navigation = [
  { name: 'Home', href: 'home', current: true, isScrollLink: true },
  { name: 'About Me', href: 'about', current: false, isScrollLink: true },
  { name: 'Projects', href: 'projects', current: false, isScrollLink: true },
  { name: 'Contact', href: 'contact', current: false, isScrollLink: true },
];

const ScrollNavbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('');

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' }); // Initialize AOS
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      navigation.forEach((item) => {
        const section = document.getElementById(item.href);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop - 70 && scrollPosition < sectionTop + sectionHeight - 70) {
            setActiveLink(item.name);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Disclosure as="nav" className="fixed top-0 left-0 right-0 z-[1000] text-xl bg-white text-gray-950 flex items-center justify-between px-[8%] py-2 dark:bg-black dark:text-white font-bold shadow-lg">
      {({ open }) => (
        <>
          <div className="w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="relative flex space-x-8">
                    {navigation.map((item) => (
                      <div key={item.name} className="relative">
                        {item.isScrollLink ? (
                          <ScrollLink
                            to={item.href}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className={clsx(
                              'px-3 py-2 rounded-md cursor-pointer'
                            )}
                            activeClass=""
                            onSetActive={() => setActiveLink(item.name)}
                            data-aos="fade-up"
                          >
                            {item.name}
                            {activeLink === item.name && (
                              <div className="absolute bottom-0 left-0 top-12 w-full h-1 bg-cyan-500 transition-transform duration-1000" style={{ transform: `scaleX(${activeLink === item.name ? 1 : 0})` }} />
                            )}
                          </ScrollLink>
                        ) : (
                          <NavLink
                            to={item.href}
                            className={clsx(
                              'px-3 py-2 rounded-md '
                            )}
                            aria-current={item.current ? 'page' : undefined}
                            onClick={() => setActiveLink(item.name)}
                            data-aos="fade-up"
                          >
                            {item.name}
                            {activeLink === item.name && (
                              <div className="absolute bottom-0 left-0 w-full h-1 bg-cyan-500 transition-transform duration-1000" style={{ transform: `scaleX(${activeLink === item.name ? 1 : 0})` }} />
                            )}
                          </NavLink>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <DarkMode />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={clsx(
                    'block rounded-md px-3 py-2'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default ScrollNavbar;

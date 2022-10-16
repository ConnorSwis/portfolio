import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { FaJs } from 'react-icons/fa';


const links = [
    {name: "HOME"   , link: "/portfolio#home"},
    {name: "ABOUT"  , link: "/portfolio#about"},
    {name: "MEMORIES", link: "/portfolio#gallery"},
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-secondary-500 z-10 fixed w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 text-primary-500 text-5xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#ff4800" width="48" height="48" viewBox="0 0 64 64"><path d="M0,0V64H64V0ZM38.4,29.4H28.3a1.92,1.92,0,0,0-1.2.4,6.23,6.23,0,0,0-.9,1.2c-.2.5-.4,1.1-.6,1.7a12.31,12.31,0,0,0-.2,2V51a13.55,13.55,0,0,0,.2,2,6.87,6.87,0,0,0,.5,1.7,2.73,2.73,0,0,0,.9,1.2,1.75,1.75,0,0,0,1.2.4H38.3v4.4H25.7a3.93,3.93,0,0,1-2.5-.8,7.84,7.84,0,0,1-1.9-2.1,12.52,12.52,0,0,1-1.2-3.1,15.81,15.81,0,0,1-.4-3.8V34.7a16.11,16.11,0,0,1,.4-3.9,12.52,12.52,0,0,1,1.2-3.1,6.48,6.48,0,0,1,1.9-2.1,4.07,4.07,0,0,1,2.4-.8H38.3v4.6ZM60,53.9a12.11,12.11,0,0,1-1.3,3.5,7.77,7.77,0,0,1-1.9,2.4,4,4,0,0,1-2.5.9h-13V56.3H51.8a1.35,1.35,0,0,0,1.2-.5,2.54,2.54,0,0,0,.9-1.3,5.31,5.31,0,0,0,.6-1.9,16.41,16.41,0,0,0,.2-2.3,16.86,16.86,0,0,0-.2-2.5,3.38,3.38,0,0,0-.7-1.6,2.84,2.84,0,0,0-1.4-.9,6.87,6.87,0,0,0-2.2-.3H46.8a5.07,5.07,0,0,1-2.8-.7,8,8,0,0,1-2.1-2,9.65,9.65,0,0,1-1.3-3.1,16.43,16.43,0,0,1-.4-4,17,17,0,0,1,.4-4,16.07,16.07,0,0,1,1.2-3.3,6.89,6.89,0,0,1,1.9-2.2,3.75,3.75,0,0,1,2.5-.8H59v4.4H48.8a1.92,1.92,0,0,0-1.2.4,5.31,5.31,0,0,0-.9,1.1,7.49,7.49,0,0,0-.5,1.6,11.08,11.08,0,0,0-.2,1.9,7.88,7.88,0,0,0,.7,3.7,2.34,2.34,0,0,0,2,1.4H54a4.41,4.41,0,0,1,2.8.8,5.78,5.78,0,0,1,2,2.1A9.29,9.29,0,0,1,60,45.5a17,17,0,0,1,.4,4A15.34,15.34,0,0,1,60,53.9Z"/></svg>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                    {
                      links.map((link) => (
                        <a key={link.name} href={link.link}
                          className='text-gray-300 hover:bg-secondary-400 hover:text-white px-3 py-2 rounded-md font-semibold text-xl'>{link.name}
                        </a>
                      ))
                    }
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {
                links.map((link) => (
                  <a
                    key={link.name}
                    href={link.link}
                    className='hover:bg-secondary-400 text-white block px-3 py-4 rounded-md text-2xl font-medium'
                    >{link.name} </a>
                ))
              }
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;


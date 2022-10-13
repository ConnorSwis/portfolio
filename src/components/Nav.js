import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { FaJs } from 'react-icons/fa';


const svgCode = require("../logo.svg");

const links = [
    {name: "HOME"   , link: "/"},
    {name: "ABOUT"  , link: "/"},
    {name: "CONTACT", link: "/"},
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-secondary-500 z-10 fixed w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 text-primary-500 text-3xl">
                {/* TODO: get svg to quit acting up */}
                {/* <xml version="1.0" encoding="utf-8">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 64 64" enable-background="new 0 0 64 64" space="preserve">
                    <g>
                      <path fill="#ff4800" d="M38.36,24.92v4.47H28.3c-0.44,0-0.83,0.15-1.17,0.44c-0.34,0.29-0.63,0.68-0.87,1.17 c-0.25,0.49-0.43,1.06-0.56,1.7c-0.13,0.65-0.19,1.33-0.19,2.03v16.24c0,0.68,0.06,1.33,0.19,1.97c0.13,0.64,0.31,1.2,0.54,1.7 c0.23,0.5,0.52,0.9,0.87,1.19c0.35,0.3,0.74,0.44,1.19,0.44h10.06v2.52v1.86H25.69c-0.91,0-1.72-0.25-2.45-0.75 c-0.73-0.5-1.35-1.19-1.87-2.06c-0.52-0.87-0.92-1.89-1.2-3.08c-0.28-1.18-0.43-2.45-0.43-3.8V34.74c0-1.38,0.14-2.68,0.43-3.87 c0.28-1.19,0.69-2.23,1.22-3.12c0.53-0.88,1.16-1.58,1.88-2.08c0.73-0.5,1.53-0.75,2.41-0.75H38.36z"/>
                      <path fill="#ff4800" d="M59,24.92v4.47H48.78c-0.44,0-0.83,0.13-1.17,0.4c-0.34,0.26-0.62,0.63-0.86,1.11 c-0.23,0.47-0.41,1.01-0.52,1.61c-0.12,0.6-0.17,1.25-0.17,1.92c0,1.54,0.25,2.77,0.74,3.72c0.49,0.94,1.15,1.42,1.98,1.42h5.25 c1.06,0,1.99,0.25,2.8,0.75c0.8,0.5,1.48,1.2,2.02,2.08c0.54,0.89,0.95,1.94,1.22,3.16c0.27,1.22,0.41,2.56,0.41,4 c0,1.56-0.15,3.02-0.45,4.36c-0.3,1.34-0.72,2.52-1.26,3.52c-0.54,1-1.19,1.79-1.94,2.37c-0.75,0.57-1.58,0.86-2.49,0.86H41.36 v-4.38h10.45c0.47,0,0.88-0.15,1.24-0.46c0.36-0.31,0.67-0.73,0.93-1.26c0.26-0.53,0.45-1.16,0.58-1.88 c0.13-0.72,0.19-1.5,0.19-2.32c0-0.97-0.07-1.8-0.21-2.48c-0.14-0.68-0.39-1.22-0.74-1.61c-0.35-0.4-0.81-0.69-1.38-0.86 c-0.57-0.18-1.29-0.26-2.18-0.26h-3.38c-1.06,0-2.01-0.24-2.84-0.73c-0.83-0.49-1.52-1.16-2.08-2.03 c-0.56-0.87-0.98-1.91-1.26-3.12c-0.28-1.21-0.43-2.55-0.43-4.03c0-1.42,0.14-2.75,0.43-4c0.28-1.25,0.69-2.35,1.2-3.27c0.52-0.93,1.15-1.67,1.88-2.21c0.74-0.55,1.56-0.82,2.47-0.82H59z"/>
                    </g>
                  </svg>
                </xml> */}
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                    {
                      links.map((link) => (
                        <a key={link.name} href={link.link}
                          className='text-gray-300 hover:bg-secondary-400 hover:text-white px-3 py-2 rounded-md font-semibold'>{link.name}
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
                    className='hover:bg-secondary-400 text-white block px-3 py-2 rounded-md text-base font-medium'
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




// const Nav = (props) => {
//     return (
//         <div className='shadow-md w-full fixed top-0 left-0 z-10'>
//             <div className='flex items-center justify-between bg-gray-900 py-4 md:px-10 px-7'>
//                 <div className='text-white cursor-pointer flex items-center font-sans'>
//                     <span className='text-3xl text-primary-500 mr-1'>
//                         <FaJs />
//                     </span>
//                         <p className='text-xl'>Connor Swislow</p>
//                 </div>
//                 <ul className='text-white flex tems-center md:text-md'>
//                     {
//                         links.map((link) => (
//                             <li key={link.name} className='ml-8 text-xl'>
//                                 <a href={link.link}
//                                 className='text-gray-100 hover:text-gray-400 duration-500'>{link.name}</a>
//                             </li>
//                         ))
//                     }
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Nav;
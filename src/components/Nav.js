import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { FaJs } from 'react-icons/fa';


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
                <FaJs />
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
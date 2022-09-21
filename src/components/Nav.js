import React from 'react';
import { FaJs } from 'react-icons/fa';



const Nav = (props) => {
    const links = [
        {name: "HOME"   , link: "/"},
        {name: "ABOUT"  , link: "/"},
        {name: "CONTACT", link: "/"},
    ];
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-gray-900 py-4 md:px-10 px-7'>
                <div className='text-white cursor-pointer flex items-center font-sans'>
                    <span className='text-3xl text-primary-500 mr-1'>
                        <FaJs />
                    </span>
                        <p className='text-xl'>Connor Swislow</p>
                </div>
                <ul className='text-white md:flex md:items-center'>
                    {
                        links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-xl'>
                                <a href={link.link} 
                                className='text-gray-100 hover:text-gray-400 duration-500'>{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Nav;
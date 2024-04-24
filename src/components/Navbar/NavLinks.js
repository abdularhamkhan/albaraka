import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4 py-4">
            <HashLink
                className="px-4 font-extrabold text-gray-500 hover:text-blue-900 transition-colors duration-300"
                smooth
                to="/"
            >
                Home
            </HashLink>
            <HashLink
                className="px-4 font-extrabold text-gray-500 hover:text-blue-900 transition-colors duration-300"
                smooth
                to="/#services"
            >
                Services
            </HashLink>
            <HashLink
                className="px-4 font-extrabold text-gray-500 hover:text-blue-900 transition-colors duration-300"
                to="/#about"
            >
                Portfolio
            </HashLink>
            <HashLink
                className="px-4 font-extrabold text-gray-500 hover:text-blue-900 transition-colors duration-300"
                to="/contact#contact"
            >
                Contact Us
            </HashLink>
            <HashLink
                className="text-white bg-blue-900 hover:bg-blue-800 transition-colors duration-300 inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 shadow-xl rounded-xl"
                smooth
                to="/get-demo#demo"
            >
                Get An Audit
            </HashLink>
        </div>
    );
}

export default NavLinks;

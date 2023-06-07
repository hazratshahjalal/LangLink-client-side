import React from 'react';
import logo from '../../../src/assets/LangLogo.png'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="flex w-20 items-center">
          {/* Website Logo */}
          <img className=" mr-4" src={logo} alt="Logo" />
        </div>

        <div className="flex items-center">
          {/* Navbar Items */}
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Contact</a>
            </li>
          </ul>

          {/* Login and Registration Buttons */}
          <div className="ml-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Login
            </button>
            <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded ml-2">
              Register
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

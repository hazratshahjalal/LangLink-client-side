import React from 'react';
import logo from '../../../src/assets/LangLogo.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-emerald-100 text-gray-800">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="flex w-20 items-center">
          {/* Website Logo */}
          <img className=" mr-4" src={logo} alt="Logo" />
        </div>

        <div className="flex items-center">
          {/* Navbar Items */}
          <ul className="flex space-x-4 font-semibold hover:font-lg ">
            <li>
              <Link href="/" className="hover:text-gray-400">Home</Link>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Contact</a>
            </li>
          </ul>

          {/* Login and Registration Buttons */}
          <div className="ml-4">
            <Link to="/login"><button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Login
            </button></Link>
            <Link to="/registraion" ><button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded ml-2">
              Register
            </button></Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

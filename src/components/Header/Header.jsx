import React, { useContext } from 'react';
import logo from '../../../src/assets/LangLogo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {

      })
      .catch(error => console.log(error))
  }

  return (
    <header className="bg-emerald-100 text-gray-800">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="flex w-20 items-center">
          {/* Website Logo */}
          <Link to='/'>          <img className=" mr-4" src={logo} alt="Logo" />
          </Link>        </div>

        {
          user ? <>
            <div className="flex items-center">
              {/* Navbar Items */}
              <ul className="flex space-x-4 font-semibold hover:font-lg ">
                <li>
                  <Link to='/' className="hover:text-gray-400">Home</Link>
                </li>
                <li>
                  <Link to='/classes' className="hover:text-gray-400">Classes</Link>
                </li>
                <li>
                  <Link to='/instructors' className="hover:text-gray-400">Instructors</Link>
                </li>
                <li>
                  <Link to='/contact' className="hover:text-gray-400">Contact</Link>
                </li>
                {/* conditional items */}
                <li>
                  <Link to='/instructors' className="hover:text-gray-400">Dashboard</Link>
                </li>
                {/* <li>
              <Link to='/instructors' className="hover:text-gray-400"><img title={user.displayName || ''} src={user.photoURL} alt="User Avatar" />
              </Link>
            </li> */}
              </ul>


              {/* Login and Registration Buttons */}
              <div className="ml-4 flex">
                <label className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    {user.photoURL ? (
                      <img title={user.displayName || ''} src={user.photoURL} alt="User Avatar" />
                    ) : (
                      <div className='bg-gray-200 p-4 text-center rounded-full' >Avater</div>
                    )}
                  </div>
                </label>
                <Link to="/login"><button onClick={handleLogOut} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4  rounded">
                  Log Out
                </button></Link>
              </div>
            </div>
          </> : <>
            <div className="flex items-center">
              {/* Navbar Items */}
              <ul className="flex space-x-4 font-semibold hover:font-lg ">
                <li>
                  <Link to='/' className="hover:text-gray-400">Home</Link>
                </li>
                <li>
                  <Link to='/classes' className="hover:text-gray-400">Classes</Link>
                </li>
                <li>
                  <Link to='/instructors' className="hover:text-gray-400">Instructors</Link>
                </li>
                <li>
                  <Link to='/contact' className="hover:text-gray-400">Contact</Link>
                </li>
                {/* conditional items */}
                <li>
                  <Link to='/instructors' className="hover:text-gray-400">Dashboard</Link>
                </li>
                {/* <li>
              <Link to='/instructors' className="hover:text-gray-400"><img title={user.displayName || ''} src={user.photoURL} alt="User Avatar" />
              </Link>
            </li> */}
              </ul>

              {/* Login and Registration Buttons */}
              <div className="ml-4">
                <Link to="/login"><button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                  Login
                </button></Link>
                <Link to="/registration" ><button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded ml-2">
                  Sign Up
                </button></Link>
              </div>
            </div>
          </>
        }
      </nav>
    </header>
  );
}

export default Header;

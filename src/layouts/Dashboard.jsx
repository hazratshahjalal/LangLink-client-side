import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Zoom from 'react-awesome-reveal';
import { FaHome, FaUser, FaUsers, FaChalkboardTeacher, FaCog } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const Dashboard = () => {

  // TODO:
  const { user } = useContext(AuthContext);
  const isAdmin = user && user.role === 'admin';
  const isUser = user.role === 'user';
  const isInstructor = user.role === 'instructor'

  return (
    <div className="drawer lg:drawer-open bg-emerald-100">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>


        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side bg-emerald-100">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-emerald-300 text-base-content">
          {/* Sidebar content here */}

          {!isAdmin ? <>
            <li className='text-lg font-semibold'> <Zoom>
              <Link to="/">
                <FaHome />
                Go Back Home
              </Link>
            </Zoom></li>
            <li>
              <Zoom>
                <Link to="manageUsers">
                  <FaUser />
                  Admin Dashboard
                </Link>
              </Zoom>
            </li>

            <li>
              <Zoom>
                <Link to="manageUsers">
                  <FaUsers />
                  Manage Users
                </Link>
              </Zoom>

            </li>
            <li>
              <Zoom>
                <Link to="manageClasses">
                  <FaCog />
                  Manage Classes
                </Link>
              </Zoom>
            </li>
          </> : <>
            <li className='text-lg font-semibold'> <Zoom>
              <Link to="/">
                <FaHome />
                Go Back Home
              </Link>
            </Zoom></li>
            <li>
              <Zoom>
                <Link to="myClasses">
                  <FaUser />
                  User Dashboard
                </Link>
              </Zoom>
            </li>
          </>}
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;
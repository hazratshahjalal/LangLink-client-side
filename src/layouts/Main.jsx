import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Notfound from '../pages/NotFound/NotFound';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';


const Main = () => {
  const location = useLocation();

  // Define the routes and their corresponding paths
  const routes = [
    { path: '/', label: 'Home' },
    { path: '/login', label: 'Login' },
    { path: '/registration', label: 'Registration' },
    { path: '/contact', label: 'Contact' },
  ];

  // Check if the current route is the 404 route
  const isNotFound = !routes.some((route) => route.path === location.pathname);

  return (
    <div>
      {!isNotFound && <Header></Header>}
      {isNotFound ? (
        <Notfound></Notfound>
      ) : (
        <Outlet></Outlet>
      )}
      {!isNotFound && <Footer></Footer>}
    </div>
  );
};

export default Main;

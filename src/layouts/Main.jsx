import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <h1>main layout</h1>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
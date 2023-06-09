import React, { useState } from 'react';
import TopSlider from '../../components/TopSlider/TopSlider';
import Campaigns from '../../components/Campaigns/Campaigns';
import Instructor from '../../components/Instructor/Instructor';
import Class from '../../components/Class/Class';
import './Home.css'; // Import the CSS file for Home component


const Home = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`theme-${theme}`}>
      <div className="text-right">
        <button className="btn btn-outline btn-primary btn-rounded-xl" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
      <TopSlider></TopSlider>
      <Class></Class>
      <Instructor></Instructor>
      <Campaigns></Campaigns>
    </div>
  );
};

export default Home;

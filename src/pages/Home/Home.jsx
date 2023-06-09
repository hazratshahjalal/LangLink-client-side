import React from 'react';
import TopSlider from '../../components/TopSlider/TopSlider';
import Campaigns from '../../components/Campaigns/Campaigns';
import Instructor from '../../components/Instructor/Instructor';
import Class from '../../components/Class/Class';

const Home = () => {
  return (
    <div>
      <TopSlider></TopSlider>
      <Class></Class>
      <Instructor></Instructor>
      <Campaigns></Campaigns>
    </div>
  );
};

export default Home;
import React from 'react';
import TopSlider from '../../components/TopSlider/TopSlider';
import Campaigns from '../../components/Campaigns/Campaigns';
import Instructor from '../../components/Instructor/Instructor';

const Home = () => {
  return (
    <div>
      <TopSlider></TopSlider>
      <Instructor></Instructor>
      <Campaigns></Campaigns>
    </div>
  );
};

export default Home;
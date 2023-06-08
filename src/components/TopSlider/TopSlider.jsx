import React from 'react';
import AwesomeSlider from 'react-awesome-slider';

const TopSlider = () => {
  return (
    <section className="relative">
      <AwesomeSlider>
        <div>
          <img src="slider-image1.jpg" alt="Slider Image 1" className="w-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-4xl font-bold">Welcome to our Summer Camp School!</h2>
            <p className="text-lg">Experience a summer full of learning and fun.</p>
          </div>
        </div>
        <div>
          <img src="slider-image2.jpg" alt="Slider Image 2" className="w-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-4xl font-bold">Explore New Opportunities</h2>
            <p className="text-lg">Discover your hidden talents with our diverse range of activities.</p>
          </div>
        </div>
      </AwesomeSlider>
    </section>
  );
};

export default TopSlider;

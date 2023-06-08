import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../../src/assets/image1.jpg';
import image2 from '../../../src/assets/image2.jpg';
import image3 from '../../../src/assets/image3.jpg';

const TopSlider = () => {
  return (
    <div className="lg:mx-auto lg:max-w-full">
      <Carousel
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        stopOnHover={true}
        className="lg:rounded-lg"
      >
        <div className="relative">
          <img src={image1} alt="Slider Image 1" className="w-full h-auto opacity-60" />
          <div className="absolute top-1/2 left-1/2 transform w-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-black bg-opacity-20">
            <h2 className="text-2xl  text-gray-800 lg:text-4xl font-bold">Welcome to our Summer Language School!</h2>
            <p className="text-lg p-4 text-black lg:text-xl">Learn new languages and explore different cultures.</p>
          </div>
        </div>
        <div className="relative">
          <img src={image2} alt="Slider Image 2" className="w-full h-auto opacity-80" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black bg-opacity-20">
            <h2 className="text-3xl  text-emerald-600 lg:text-6xl font-bold">Expand Your Language Skills</h2>
            <p className="text-lg p-4  text-black lg:text-xl">Join our language courses and enhance your communication abilities.</p>
          </div>
        </div>
        <div className="relative">
          <img src={image3} alt="Slider Image 3" className="w-full h-auto opacity-80" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black bg-opacity-30">
            <h2 className="text-3xl  lg:text-6xl  text-emerald-600 font-bold">Discover the World Through Language</h2>
            <p className="text-lg p-4 text-black lg:text-xl">Immerse yourself in new languages and broaden your horizons.</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default TopSlider;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLanguage } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';


const Campaigns = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-out',
      once: true,
    });

    return () => {
      AOS.refresh(); // Refresh AOS when the component unmounts
    };
  }, []);


  return (
    <section className="text-black px-10 mb-10 mt-20">
      <h2 className=" text-2xl text-center font-medium sm:text-6xl ">
        Language Campaigns
      </h2>
      <div className="max-w-screen-xl px-4 mt-8  pb-14 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <p
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="500"
            className=" text-black"
          >
            We are LangLink, highly connected to make short campaigns during our off time
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-500/10 hover:border-pink-500/10"
            href="/services/digital-campaigns"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h3 className="mt-4 text-xl font-bold text-black">
              Digital campaigns
            </h3>

            <p className="mt-1 text-sm text-black">
              We make digital campaigns for our marketing
            </p>
          </a>

          <a
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-500/10 hover:border-pink-500/10"
            href="/services/digital-campaigns"
          >
            <div className='text-primary text-5xl'>            <FaLanguage></FaLanguage>
            </div>
            <h3 className="mt-4 text-xl font-bold text-black">
              Social campaigns
            </h3>

            <p className="mt-1 text-sm text-black">
              We make Social campaigns for our marketing
            </p>
          </a>

          <a
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-500/10 hover:border-pink-500/10"
            href="/services/digital-campaigns"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h3 className="mt-4 text-xl font-bold text-black">
              Boot campaigns
            </h3>

            <p className="mt-1 text-sm text-black">
              We make Boot campaigns for our marketing
            </p>
          </a>
        </div>

        <div className="mt-12 text-center">
          <Link
            to={"/dashboard"}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="inline-flex items-center px-8 py-3 mt-8 text-white bg-blue-600 border border-blue-600 rounded hover:bg-transparent hover:text-black active:text-primary focus:outline-none focus:ring"
            href="/get-started"
          >
            <span className="text-sm font-medium"> Get Started </span>

            <svg
              className="w-5 h-5 ml-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Campaigns;

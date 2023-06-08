import React from 'react';

const SocialLogin = () => {



  return (
    <div className="mt-4">

      <button
        className="border-2 border-blue-600 text-blue-600 px-4 py-2 text-base font-semibold transition-colors duration-200 rounded-md shadow hover:bg-blue-700 focus:outline-none hover:text-white focus:ring-blue-500 focus:ring-offset-blue-200 focus:ring-2 w-full max-w-xs mb-5"
      >
        Continue with Google
      </button>
      <button

        className="border-2 border-blue-600 text-blue-600 px-4 py-2 text-base font-semibold transition-colors duration-200 rounded-md shadow hover:bg-blue-700 focus:outline-none hover:text-white focus:ring-blue-500 focus:ring-offset-blue-200 focus:ring-2 w-full max-w-xs mb-5"
      >
        Continue with Github
      </button>
    </div>
  );
};

export default SocialLogin;
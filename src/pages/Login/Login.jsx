import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SocialLogin from '../shared/socialLogin/SocialLogin';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div
      data-aos="fade-left"
      data-aos-duration="500"
      className="flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800 lg:max-w-4xl my-20 p-10"
    >
      {/* left side image */}
      <div
        data-aos="zoom-in"
        data-aos-duration="500"
        className="hidden bg-cover rounded-lg lg:block lg:w-1/2"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1653708075361-512e506e69fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")',
        }}
      ></div>
      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
          LANGLINK
        </h2>

        <p className="text-xl text-center text-gray-600 dark:text-gray-200 mb-3">
          Please Log In
        </p>

        <SocialLogin></SocialLogin>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

          <Link
            to="/login"
            className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or login with email
          </Link>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
              Email:
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 border border-lime-800 p-3 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm rounded-md"
              {...register('email', { required: true })}
            />
          </div>

          <div className="mt-4 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
              Password:
            </label>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              className="mt-1 border border-lime-800 p-3 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm rounded-md"
              {...register('password', { required: true })}
            />
            <span
              className="absolute right-3 top-2/4 transform -translate-y-2/4 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v.01M8 4v.01M7 8h10M12 8v10"
                  />
                </svg>
              )}
            </span>


            {/* {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                Password must be at least 6 characters long and include a capital letter and a special character.
              </p>
            )} */}
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full px-4 py-2 text-base font-semibold text-white transition-colors duration-200 bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-blue-500 focus:ring-offset-blue-200 focus:ring-2 sm:px-6"
            >
              Login
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center mt-4 text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/registration" className="text-blue-500 hover:text-blue-600">
            Register here
          </Link>
        </div>
      </div>


    </div>
  );
};

export default Login;

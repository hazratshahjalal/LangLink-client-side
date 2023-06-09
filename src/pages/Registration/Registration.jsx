import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../shared/socialLogin/SocialLogin';
import registerImage from '../../../src/assets/registern.jpg'
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'


const Registration = () => {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const { createNewUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createNewUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
      });
    Swal.fire({
      title: 'Registration Complete',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
    navigate('/')
  };


  return (
    <div
      data-aos="fade-left"
      data-aos-duration="500"
      className="flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800 lg:max-w-4xl my-20 p-10"
    >
      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
          LANGLINK
        </h2>

        <p className="text-xl text-center text-gray-600 dark:text-gray-200 mb-3">
          Please Sign Up
        </p>

        <SocialLogin></SocialLogin>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

          <a
            href="f"
            className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or sign up with email
          </a>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
              Name:
            </label>
            <input
              id="name"
              type="text"
              className="mt-1 border border-lime-800 p-3 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm rounded-md"
              {...register('name', { required: true })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                Name is required
              </p>
            )}
          </div>

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
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                Email is required
              </p>
            )}
          </div>

          <div className="mt-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
              Password:
            </label>
            <input
              id="password"
              type="password"
              className="mt-1 border border-lime-800 p-3 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm rounded-md"
              {...register('password', {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{6,}$/
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                Password must be at least 6 characters long and include a capital letter and a special character.
              </p>
            )}
          </div>

          <div className="mt-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
              Confirm Password:
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="mt-1 border border-lime-800 p-3 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm rounded-md"
              {...register('confirmPassword', {
                required: true,
                validate: (value) => value === getValues('password') || "Passwords do not match"
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>


          <div className="mt-4">
            <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
              Photo URL:
            </label>
            <input
              id="photoUrl"
              type="text"
              className="mt-1 border border-lime-800 p-3 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm rounded-md"
              {...register('photoUrl', { required: true })}
            />
            {errors.photoUrl && (
              <p className="text-red-500 text-sm mt-1">Photo URL is required.</p>
            )}
          </div>

          <div className="mt-4">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
              Gender (optional):
            </label>
            <select
              id="gender"
              className="mt-1 border border-lime-800 p-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm rounded-md"
              {...register('gender')}
            >
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mt-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
              Phone Number (optional):
            </label>
            <input
              id="phoneNumber"
              type="text"
              className="mt-1 border border-lime-800 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm rounded-md"
              {...register('phoneNumber')}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
              Address (optional):
            </label>
            <input
              id="address"
              type="textarea"
              className="mt-1 border border-lime-800 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm rounded-md"
              {...register('address')}
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full px-4 py-2 btn btn-primary"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-4">
          <p>
            <small>
              Already a member of LangLink?{' '}
              <Link className="text-blue-600" to="/login">
                Sign In
              </Link>
            </small>
          </p>
        </div>
      </div>

      {/* right side image */}
      <div
        data-aos="zoom-in"
        data-aos-duration="500"
        className="hidden bg-cover bg-center rounded-lg lg:block lg:w-1/2"
        style={{
          backgroundImage: `url(${registerImage})`,

        }}
      ></div>
    </div>
  );
};

export default Registration;
import React, { useContext } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();

  const handleGoogleLogin = () => {


    googleSignIn()
      .then(result => {
        const user = result.user;
        console.log(user);
        const saveUser = { name: user.displayName, email: user.email }
        // fetch('http://localhost:5600/users', {
        //   method: 'POST',
        //   headers: {
        //     'content-type': 'application/json'
        //   },
        //   body: JSON.stringify(saveUser)
        // })
        //   .then(res => res.json())
        //   .then(() => {
        //     {

        //     }
        //   })

        Swal.fire({
          title: 'Login Successful',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <div className="mt-4">

      <button onClick={handleGoogleLogin}
        className="border-2 border-blue-600 flex items-center justify-center text-blue-600 px-4 py-2 text-base font-semibold transition-colors duration-200 rounded-md shadow hover:bg-blue-700 focus:outline-none hover:text-white focus:ring-blue-500 focus:ring-offset-blue-200 focus:ring-2 w-full max-w-xs mb-5"
      >
        <span className='text-blue-600 hover:text-white px-2'><FaGoogle></FaGoogle></span> Continue with Google
      </button>
      <button

        className="border-2 border-blue-600 text-blue-600 flex items-center justify-center px-4 py-2 text-base font-semibold transition-colors duration-200 rounded-md shadow hover:bg-blue-700 focus:outline-none hover:text-white focus:ring-blue-500 focus:ring-offset-blue-200 focus:ring-2 w-full max-w-xs mb-5"
      >
        <span className='text-blue-600 hover:text-white px-2'><FaGithub></FaGithub></span> Continue with Github
      </button>
    </div>
  );
};

export default SocialLogin;